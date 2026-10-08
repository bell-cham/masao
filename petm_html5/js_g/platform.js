'use strict';
// Browser replacements for the original Applet/AWT services. No JVM, Java bytecode,
// WebAssembly, remote runtime, or external scripts are used at play time.
const J = {
 equals(s,t){if(s==null)throw new TypeError('Null string receiver');return s===t;},
 abs(n){return n===-2147483648?n:Math.abs(n);},
 rem(a,b){if(!b)throw new Error('Integer remainder by zero');return a%b;},
 inc(get,set,d,post,t){const old=get();let value=(old+d)|0;if(t==='short')value=J.short(value);if(t==='byte')value=J.byte(value);if(t==='char')value&=65535;set(value);return post?old:value;},
 i(v) { if (Number.isNaN(v)) return 0; return Math.max(-2147483648, Math.min(2147483647, Math.trunc(v))); },
 short(v) { return (Math.trunc(v)<<16)>>16; },
 byte(v) { return (Math.trunc(v)<<24)>>24; },
 div(a,b) { if (!b) throw new Error('Integer division by zero'); return Math.trunc(a/b)|0; },
 charAt(s,n) { if(s==null || n<0 || n>=s.length) throw new Error('Character index out of range: '+n); return s.charCodeAt(n); },
 array(ds,value) {
  if(ds[0]<0)throw new RangeError('Negative array size');
  const a=Array.from({length:ds[0]},()=>ds.length>1?J.array(ds.slice(1),value):value);
  const check=(t,p)=>{if(typeof p==='string' && /^-?\d+$/.test(p) && (Number(p)<0||Number(p)>=t.length))throw new RangeError('Array index out of bounds: '+p);};
  return new Proxy(a,{get(t,p,r){check(t,p);return Reflect.get(t,p,r);},set(t,p,v,r){check(t,p);return Reflect.set(t,p,v,r);}});
 }
};
const Integer={valueOf(s){if(s==null || !/^[+-]?\d+$/.test(s)) throw new Error('Invalid integer: '+s);const n=Number(s);if(n< -2147483648||n>2147483647)throw new Error('Integer out of range');return n;}};
class Random {
 constructor(seed=Date.now()) { this.seed=(BigInt(Math.trunc(seed)) ^ 0x5deece66dn) & ((1n<<48n)-1n); }
 nextInt() { this.seed=(this.seed*0x5deece66dn+11n)&((1n<<48n)-1n);return Number(this.seed>>16n)|0; }
}
class Color {
 constructor(r,g,b){this.r=r;this.g=g;this.b=b;this.css=`rgb(${r},${g},${b})`;}
}
for(const [name,r,g,b] of [['black',0,0,0],['white',255,255,255],['red',255,0,0],['green',0,255,0],['blue',0,0,255],['cyan',0,255,255],['yellow',255,255,0],['magenta',255,0,255],['gray',128,128,128],['lightGray',192,192,192],['darkGray',64,64,64],['orange',255,200,0],['pink',255,175,175]])Color[name]=new Color(r,g,b);
class Font { constructor(name,style,size){this.name=name;this.style=style;this.size=size;} }
class CanvasImage {
 constructor(w,h){this.canvas=document.createElement('canvas');this.canvas.width=w;this.canvas.height=h;}
 getGraphics(){return new CanvasGraphics(this.canvas);}
}
class CanvasGraphics {
 constructor(canvas){this.canvas=canvas;this.ctx=canvas.getContext('2d',{willReadFrequently:true});this.ctx.imageSmoothingEnabled=false;this.setColor(Color.black);this.setFont(new Font('Dialog',0,12));}
 setColor(c){if(!c)return;this.color=c;this.ctx.fillStyle=this.ctx.strokeStyle=c.css;}
 setFont(f){if(!f)return;this.font=f;this.ctx.font=`${f.style&2?'italic ':''}${f.style&1?'bold ':''}${f.size}px "MS Gothic", "ＭＳ ゴシック", "Noto Sans CJK JP", "PetMonsterJP", monospace`;this.ctx.textBaseline='alphabetic';}
 fillRect(x,y,w,h){w=Math.trunc(w);h=Math.trunc(h);if(w<=0||h<=0)return;this.ctx.fillRect(Math.trunc(x),Math.trunc(y),w,h);}
 drawString(s,x,y){if(s==null)throw new TypeError('Null drawString argument');this.ctx.fillText(String(s),Math.trunc(x),Math.trunc(y));}
 drawImage(img,x,y,...rest){if(!img)return false;let src=img.canvas||img;this.ctx.drawImage(src,Math.trunc(x),Math.trunc(y));return true;}
 drawOval(x,y,w,h){if(w<0||h<0)return;this.ctx.beginPath();this.ctx.ellipse(x+w/2+0.5,y+h/2+0.5,w/2,h/2,0,0,Math.PI*2);this.ctx.stroke();}
 fillOval(x,y,w,h){if(w<=0||h<=0)return;this.ctx.beginPath();this.ctx.ellipse(x+w/2,y+h/2,w/2,h/2,0,0,Math.PI*2);this.ctx.fill();}
 polygon(xs,ys,n,fill){this.ctx.beginPath();if(n){this.ctx.moveTo(xs[0]+(fill?0:0.5),ys[0]+(fill?0:0.5));for(let i=1;i<n;i++)this.ctx.lineTo(xs[i]+(fill?0:0.5),ys[i]+(fill?0:0.5));this.ctx.closePath();fill?this.ctx.fill():this.ctx.stroke();}}
 drawPolygon(xs,ys,n){this.polygon(xs,ys,n,false);}
 fillPolygon(xs,ys,n){this.polygon(xs,ys,n,true);}
 copyArea(x,y,w,h,dx,dy){const temp=document.createElement('canvas');temp.width=w;temp.height=h;temp.getContext('2d').drawImage(this.canvas,x,y,w,h,0,0,w,h);this.ctx.drawImage(temp,x+dx,y+dy);}
}
class MediaTracker {constructor(ap){this.ap=ap;}addImage(img,id){if(!img)throw new Error('Image unavailable');}waitForID(id){} }
class PixelGrabber {
 constructor(img,x,y,w,h,arr,offset,stride){Object.assign(this,{img,x,y,w,h,arr,offset,stride});}
 grabPixels(){const c=new CanvasImage(this.w,this.h);c.getGraphics().ctx.drawImage(this.img.canvas||this.img,-this.x,-this.y);let data=c.canvas.getContext('2d').getImageData(0,0,this.w,this.h).data;for(let y=0;y<this.h;y++)for(let x=0;x<this.w;x++){let i=(y*this.w+x)*4;this.arr[this.offset+y*this.stride+x]=(data[i+3]<<24)|(data[i]<<16)|(data[i+1]<<8)|data[i+2];}return true;}
}
class MemoryImageSource {constructor(w,h,arr,offset,stride){Object.assign(this,{w,h,arr,offset,stride});}}
const imageCache=new Map();
class Applet {
 constructor(){this.canvas=document.getElementById('game');this.graphics=new CanvasGraphics(this.canvas);this.params=window.GAME_PARAMS;}
 getParameter(name){return Object.hasOwn(this.params,name)?this.params[name]:null;}
 getSize(){return {width:this.canvas.width,height:this.canvas.height};}
 getDocumentBase(){return new URL('.',location.href).href;}
 getImage(base,name){const url=new URL(name,base).href;const img=imageCache.get(url);if(!img)throw new Error('Image not preloaded: '+name);return img;}
 createImage(a,b){if(a instanceof MemoryImageSource){const c=new CanvasImage(a.w,a.h);const im=c.canvas.getContext('2d').createImageData(a.w,a.h);for(let y=0;y<a.h;y++)for(let x=0;x<a.w;x++){let v=a.arr[a.offset+y*a.stride+x],i=(y*a.w+x)*4;im.data[i]=(v>>>16)&255;im.data[i+1]=(v>>>8)&255;im.data[i+2]=v&255;im.data[i+3]=(v>>>24)&255;}c.canvas.getContext('2d').putImageData(im,0,0);return c;}return new CanvasImage(a,b);}
 repaint(){this.paint$1(this.graphics);}
 addMouseListener(gm){window.addEventListener('pointerup',()=>gm.mouseReleased$1({}));this.canvas.addEventListener('pointercancel',()=>gm.mouseReleased$1({}));this.canvas.addEventListener('pointerdown',e=>{const r=this.canvas.getBoundingClientRect();gm.mousePressed$1({getX:()=>Math.floor((e.clientX-r.left)*this.canvas.width/r.width),getY:()=>Math.floor((e.clientY-r.top)*this.canvas.height/r.height)});this.canvas.focus();e.preventDefault();});}
 addKeyListener(gk){
  const event=e=>({getKeyCode:()=>e.keyCode,getKeyChar:()=>e.key.length===1?e.key.charCodeAt(0):65535});
  window.addEventListener('keydown',e=>{if(document.querySelector('dialog[open]')||/INPUT|TEXTAREA/.test(e.target.tagName))return;gk.keyPressed$1(event(e));if([32,37,38,39,40,...Array.from({length:12},(_,i)=>112+i)].includes(e.keyCode))e.preventDefault();});
  window.addEventListener('keyup',e=>{if(document.querySelector('dialog[open]'))return;gk.keyReleased$1(event(e));});
  window.addEventListener('blur',()=>gk.init$0());
 }
}
for(const [n,count] of [['getParameter',1],['getSize',0],['getDocumentBase',0],['getImage',2],['createImage',1],['createImage',2],['repaint',0],['addMouseListener',1],['addKeyListener',1]])Applet.prototype[n+'$'+count]=Applet.prototype[n];
class KeyAdapter{} class MouseAdapter{} class Frame{} class BorderLayout{}
class Thread {
 constructor(ap){this.ap=ap;this.running=false;}
 halt(){this.running=false;cancelAnimationFrame(this.id);}
 start(){this.running=true;let deadline=performance.now();const frame=now=>{if(!this.running)return;if(now>=deadline){try{this.ap.run$0();deadline+=this.ap.th_interval;if(deadline<now-this.ap.th_interval)deadline=now+this.ap.th_interval;}catch(e){window.gameError=e.stack;console.error(e);document.getElementById('load-status').textContent='エラー: '+e.message;return;}}this.id=requestAnimationFrame(frame);};this.id=requestAnimationFrame(frame);}
}
