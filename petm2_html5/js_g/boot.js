'use strict';
// Replaces Thread.sleep with a 70 ms browser event loop. Each call is one
// iteration of the original PetMon2.run(), including its exact dispatch.
PetMon2.prototype.tick=function(){
 if(this.mode===100){if(this.mp.mode===100)this.mp.mL100$0();else if(this.mp.mode===150)this.mp.mL150$0();else if(this.mp.mode===160)this.mp.mL160$0();else this.mp.mainLoop$0();this.rguiMove$0();}
 else if(this.mode===0){this.mode=5;this.mode_c=0;}
 else if(this.mode===5){++this.mode_c;if(this.mode_c>0)this.mode=10;}
 else if(this.mode===10){this.init1$0();this.mode=100;}
 this.repaint$0();
};
(async()=>{
 const status=document.getElementById('load-status');
 try {
  const names=new Set(Object.entries(window.GAME_PARAMS).filter(([k])=>k.startsWith('filename_')).map(([,v])=>v));names.add('gameover.gif');
  await Promise.all([...names].map(name=>new Promise((resolve,reject)=>{const url=new URL(name,new URL('.',location.href)).href;let img=new Image();img.onload=()=>{imageCache.set(url,img);resolve();};img.onerror=()=>reject(new Error('画像を読み込めません: '+name));img.src=url;})));
  window.game=new PetMon2();window.game.init$0();window.game.start$0();status.textContent='';window.game.canvas.focus();
 }catch(e){window.gameError=e.stack;console.error(e);status.textContent=e.message;}
})();
