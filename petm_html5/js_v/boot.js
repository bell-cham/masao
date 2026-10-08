'use strict';
// Exactly one iteration of the original PetMonster.run; sleep is provided by Thread.
PetMonster.prototype.tick=function(){
 if(this.loading_c<=1){this.loading_c=(this.loading_c+1)|0;}
 else if(this.loading_c===2){this.initLoaded$0();this.loading_c=100;}
 else{if(this.mp.ml_mode===100)this.mp.mainLoop100$0();else this.mp.mainLoop$0();this.BGMPlayerJS$0();this.repaint$0();}
};
for(const n of ['getHighscore','getMode','getMainloopMode'])PetMonster.prototype[n]=function(){return this[n+'$0']();};
window.GAME_PARAMS=Object.fromEntries([...document.querySelectorAll('#game-params param')].map(p=>[p.getAttribute('name'),p.getAttribute('value')]));
(async()=>{
 const status=document.getElementById('load-status');
 try{
  const names=new Set(['filename_pattern','filename_title','filename_ending','filename_chizu'].map(k=>GAME_PARAMS[k]));names.add('gameover.gif');names.add('gym.gif');
  await Promise.all([...names].map(name=>new Promise((resolve,reject)=>{
   if(!name){reject(new Error('画像PARAMが未指定です'));return;}
   const url=new URL(name,new URL('.',location.href)).href,img=new Image();img.onload=()=>{imageCache.set(url,img);resolve();};img.onerror=()=>reject(new Error('画像を読み込めません: '+name));img.src=url;
  })));
  await document.fonts.load('12px "PetMonsterJP"');
  window.game=new PetMonster();game.init$0();game.start$0();status.textContent='';game.canvas.focus();
 }catch(e){window.gameError=e.stack;console.error(e);status.textContent=e.message;}
})();
