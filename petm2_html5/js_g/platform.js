'use strict';
// Browser replacements for the original Applet/AWT services. No JVM, Java bytecode,
// WebAssembly, remote runtime, or external scripts are used at play time.
const J = {
 i(v) { if (Number.isNaN(v)) return 0; return Math.max(-2147483648, Math.min(2147483647, Math.trunc(v))); },
 short(v) { return (Math.trunc(v)<<16)>>16; },
 byte(v) { return (Math.trunc(v)<<24)>>24; },
 div(a,b) { if (!b) throw new Error('Integer division by zero'); return Math.trunc(a/b)|0; },
 charAt(s,n) { if(s==null || n<0 || n>=s.length) throw new Error('Character index out of range: '+n); return s.charCodeAt(n); },
 array(ds,value) { return Array.from({length:ds[0]},()=>ds.length>1?J.array(ds.slice(1),value):value); }
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
 setColor(c){if(!c)throw new Error('Missing color');this.color=c;this.ctx.fillStyle=this.ctx.strokeStyle=c.css;}
 setFont(f){this.font=f;this.ctx.font=`${f.style&2?'italic ':''}${f.style&1?'bold ':''}${f.size}px "MS Gothic", "ＭＳ ゴシック", "Noto Sans CJK JP", monospace`;this.ctx.textBaseline='alphabetic';}
 fillRect(x,y,w,h){this.ctx.fillRect(Math.trunc(x),Math.trunc(y),Math.trunc(w),Math.trunc(h));}
 drawString(s,x,y){this.ctx.fillText(s==null?'null':String(s),Math.trunc(x),Math.trunc(y));}
 drawImage(img,x,y,...rest){if(!img)throw new Error('Missing image');let src=img.canvas||img;this.ctx.drawImage(src,Math.trunc(x),Math.trunc(y));return true;}
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
 addMouseListener(gm){
  const event=e=>{const r=this.canvas.getBoundingClientRect();return {getX:()=>Math.floor((e.clientX-r.left)*this.canvas.width/r.width),getY:()=>Math.floor((e.clientY-r.top)*this.canvas.height/r.height)};};
  let activePointer=null;
  const release=e=>{
   if(activePointer===null || e.pointerId!==activePointer)return;
   activePointer=null;
   gm.mouseReleased$1(event(e));
  };
  this.canvas.addEventListener('pointerdown',e=>{
   if(activePointer!==null)return;
   activePointer=e.pointerId;
   this.canvas.setPointerCapture(e.pointerId);
   gm.mousePressed$1(event(e));
   this.canvas.focus();
   e.preventDefault();
  });
  this.canvas.addEventListener('pointerup',release);
  this.canvas.addEventListener('pointercancel',release);
  this.canvas.addEventListener('lostpointercapture',release);
  window.addEventListener('blur',()=>{activePointer=null;gm.mouseReleased$1();});
 }
 addKeyListener(gk){
  const event=e=>({getKeyCode:()=>e.keyCode,getKeyChar:()=>e.key.length===1?e.key.charCodeAt(0):65535});
  window.addEventListener('keydown',e=>{if(document.querySelector('dialog[open]')||/INPUT|TEXTAREA/.test(e.target.tagName))return;gk.keyPressed$1(event(e));if([32,37,38,39,40,...Array.from({length:12},(_,i)=>112+i)].includes(e.keyCode))e.preventDefault();});
  window.addEventListener('keyup',e=>{if(document.querySelector('dialog[open]'))return;gk.keyReleased$1(event(e));});
  window.addEventListener('blur',()=>gk.init$0());
 }
}
for(const [n,count] of [['getParameter',1],['getSize',0],['getDocumentBase',0],['getImage',2],['createImage',1],['createImage',2],['repaint',0],['addMouseListener',1],['addKeyListener',1]])Applet.prototype[n+'$'+count]=Applet.prototype[n];
class KeyAdapter{} class MouseAdapter{} class Frame{} class BorderLayout{}
class Widget {constructor(tag){this.el=document.createElement(tag);}setText(s){this.el.textContent=s;}setFont(f){} }
class Label extends Widget{constructor(s){super('p');this.setText(s);}}
class TextField extends Widget{constructor(s){super('input');this.el.type='text';this.el.spellcheck=false;this.setText(s);}setText(s){this.el.value=s;}getText(){return this.el.value;}}
class Button extends Widget{constructor(s){super('button');this.setText(s);}addActionListener(listener){this.el.addEventListener('click',()=>listener.actionPerformed$1({getSource:()=>this}));}}
class Panel extends Widget{constructor(){super('div');}setLayout(layout){}add(pos,component){this.el.append(component.el);}}
class Dialog extends Widget {
 constructor(frame,title,modal){super('dialog');this.heading=document.createElement('strong');this.el.append(this.heading);this.setTitle(title);document.body.append(this.el);this.el.addEventListener('cancel',e=>{e.preventDefault();this.listener.windowClosing$1({});});}
 setTitle(s){this.heading.textContent=s;}
 setLocation(x,y){}
 setSize(w,h){this.el.style.minWidth=w+'px';}
 setVisible(f){if(f){if(!this.el.open){this._openPending=true;window.game?.gk?.init$0();this.el.showModal();const input=this.el.querySelector('input');input?.focus();input?.select();}}else {this.el.close();if(this._openPending){this._openPending=false;queueMicrotask(()=>this.index=-1);}if(window.game?.mp){window.game.mp.rgui_text=this.tf_1.getText();}window.game?.canvas.focus();}}
 add(pos,component){this.el.append(component.el);}
 addWindowListener(listener){this.listener=listener;}
}
for(const [n,count] of [['setTitle',1],['setFont',1],['add',2],['addWindowListener',1]])Dialog.prototype[n+'$'+count]=Dialog.prototype[n];
class Thread {
 constructor(ap){this.ap=ap;}
 start(){this.id=setInterval(()=>{if(this.ap.th!==this){clearInterval(this.id);return;}if(document.querySelector('dialog[open]'))return;try{this.ap.run$0();}catch(e){clearInterval(this.id);window.gameError=e.stack;console.error(e);document.getElementById('load-status').textContent='エラー: '+e.message;}},this.ap.th_interval);}
}
