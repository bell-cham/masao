// Direct port of PetMonster from petm_c.zip. Original method overloads use $arity.
class PetMonster extends Applet {
th = null;
th_interval = 70;
gg = null;
gm = null;
gk = null;
mp = null;
init$0() {
(this.gg = new GameGraphics(this));
this.gg.setBackcolor$1(Color.black);
var string = this.getParameter$1("filename_title");
this.gg.addListImage$2(0, string);
(string = this.getParameter$1("filename_ending"));
this.gg.addListImage$2(1, string);
this.gg.addListImage$2(2, "gameover.gif");
(string = this.getParameter$1("filename_chizu"));
this.gg.addListImage$2(3, string);
this.gg.addListImage$2(4, "gym.gif");
this.gg.loadImage$0();
(this.gm = new GameMouse());
this.addMouseListener$1(this.gm);
(this.gk = new GameKey());
this.addKeyListener$1(this.gk);
(this.mp = new MainProgram(this.gg, this.gm, this.gk));
}
start$0() {
if ((this.th == null)) {
(this.th = new Thread(this));
this.th.start();
}
this.mp.start$0();
}
stop$0() {
if ((this.th != null)) {
(this.th = null);
}
}
destroy$0() {
}
paint$1(graphics) {
graphics.drawImage(this.gg.os_img, 0, 0, this);
}
update$1(graphics) {
this.paint$1(graphics);
}
run$0() { this.tick(); }
}
globalThis.PetMonster = PetMonster;
