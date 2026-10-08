'use strict';
class MidiFile {
 static parse(buffer){
  const a=new Uint8Array(buffer),v=new DataView(buffer);let p=0;
  const u16=()=>{const n=v.getUint16(p);p+=2;return n;},u32=()=>{const n=v.getUint32(p);p+=4;return n;},tag=()=>{const s=String.fromCharCode(...a.slice(p,p+4));p+=4;return s;},vl=()=>{let n=0,b;do{if(p>=a.length)throw Error('Truncated MIDI');b=a[p++];n=n*128+(b&127);}while(b&128);return n;};
  if(tag()!=='MThd')throw Error('Invalid MIDI header');const h=u32(),format=u16(),tracks=u16(),division=u16();if(format>1||!division)throw Error('Unsupported MIDI format');p+=h-6;const events=[];
  for(let tr=0;tr<tracks;tr++){if(tag()!=='MTrk')throw Error('Invalid MIDI track');const length=u32(),end=p+length;let tick=0,running=0;while(p<end){tick+=vl();let status=a[p++];if(status<128){p--;status=running;}else if(status<240)running=status;else running=0;
   if(status===255){const type=a[p++],len=vl();if(type===81&&len===3)events.push({tick,tempo:a[p]*65536+a[p+1]*256+a[p+2]});p+=len;if(type===47){events.push({tick,end:true});break;}}
   else if(status===240||status===247){const len=vl();p+=len;}
   else if(status>=128&&status<240){const op=status>>4,ch=status&15,x=a[p++],y=(op===12||op===13)?0:a[p++];events.push({tick,op,ch,x,y});}else throw Error('Invalid MIDI event');}p=end;}
  events.sort((a,b)=>a.tick-b.tick);let prev=0,time=0,tempo=500000;const smpte=division&32768,rate=smpte?((256-(division>>8))===29?29.97:256-(division>>8))*(division&255):0;
  for(const e of events){time+=(e.tick-prev)*(smpte?1/rate:tempo/1000000/division);prev=e.tick;e.time=time;if(e.tempo)tempo=e.tempo;}return {events,duration:Math.max(time,0.01)};
 }
}
class BrowserAudioClip {
 static context=null;static clips=new Set();static warnings=[];
 static unlock(){const C=window.AudioContext||window.webkitAudioContext;if(!C)return;BrowserAudioClip.context??=new C();BrowserAudioClip.context.resume().then(()=>{for(const c of BrowserAudioClip.clips)if(c.requested&&!c.active)c.begin();});}
 constructor(url){this.url=url;this.requested=false;this.active=false;this.nodes=new Set();this.timers=new Set();BrowserAudioClip.clips.add(this);this.ready=fetch(url).then(r=>{if(!r.ok)throw Error('Missing MIDI: '+url);return r.arrayBuffer();}).then(b=>{this.file=MidiFile.parse(b);if(this.requested)this.begin();}).catch(e=>{BrowserAudioClip.warnings.push(e.message);});}
 play(){this.stop();this.looping=false;this.requested=true;this.begin();}
 loop(){this.stop();this.looping=true;this.requested=true;this.begin();}
 stop(){this.requested=false;this.active=false;for(const t of this.timers)clearTimeout(t);this.timers.clear();for(const n of this.nodes){try{n.stop();}catch{}try{n.disconnect();}catch{}}this.nodes.clear();}
 begin(){const ctx=BrowserAudioClip.context;if(!this.requested||this.active||!this.file||!ctx||ctx.state!=='running')return;this.active=true;this.schedule(ctx.currentTime+0.02);}
 schedule(start){const ctx=BrowserAudioClip.context,channels=Array.from({length:16},()=>({volume:100,expression:127,program:0,pan:64,sustain:false,bend:0,notes:new Map()}));
  const release=(note,t)=>{note.gain.gain.cancelScheduledValues(t);note.gain.gain.setTargetAtTime(0,t,0.04);try{note.osc.stop(t+0.25);}catch{}};
  for(const e of this.file.events){if(!e.op)continue;const c=channels[e.ch],t=start+e.time;
   if(e.op===12)c.program=e.x;
   else if(e.op===11){if(e.x===7)c.volume=e.y;if(e.x===11)c.expression=e.y;if(e.x===10)c.pan=e.y;if(e.x===64){c.sustain=e.y>=64;if(!c.sustain)for(const [k,n] of c.notes)if(n.released){release(n,t);c.notes.delete(k);}}if(e.x===120||e.x===123){for(const n of c.notes.values())release(n,t);c.notes.clear();}}
   else if(e.op===14){c.bend=((e.y*128+e.x)-8192)/8192*2;for(const [k,n] of c.notes)n.osc.frequency.setValueAtTime(440*2**((k-69+c.bend)/12),t);}
   else if(e.op===9&&e.y){const osc=ctx.createOscillator(),gain=ctx.createGain(),pan=ctx.createStereoPanner();osc.type=['triangle','sine','sawtooth','square'][Math.floor(c.program/8)%4];osc.frequency.setValueAtTime(440*2**((e.x-69+c.bend)/12),t);gain.gain.setValueAtTime(e.y/127*c.volume/127*c.expression/127*0.06,t);pan.pan.setValueAtTime((c.pan-64)/64,t);osc.connect(gain).connect(pan).connect(ctx.destination);const n={osc,gain,released:false};if(c.notes.has(e.x))release(c.notes.get(e.x),t);c.notes.set(e.x,n);this.nodes.add(osc);osc.onended=()=>{this.nodes.delete(osc);osc.disconnect();gain.disconnect();pan.disconnect();};osc.start(t);if(e.ch===9){release(n,t+0.08);c.notes.delete(e.x);}}
   else if(e.op===8||(e.op===9&&!e.y)){const n=c.notes.get(e.x);if(n){if(c.sustain)n.released=true;else{release(n,t);c.notes.delete(e.x);}}}
  }
  for(const c of channels)for(const n of c.notes.values())release(n,start+this.file.duration);
  const timer=setTimeout(()=>{this.timers.delete(timer);if(!this.requested)return;if(this.looping)this.schedule(start+this.file.duration);else this.active=false;},Math.max(0,(start+this.file.duration-ctx.currentTime)*1000));this.timers.add(timer);
 }
}
window.addEventListener('pointerdown',()=>BrowserAudioClip.unlock(),{capture:true});window.addEventListener('keydown',()=>BrowserAudioClip.unlock(),{capture:true});
globalThis.MidiFile=MidiFile;globalThis.BrowserAudioClip=BrowserAudioClip;
