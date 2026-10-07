// Direct port of PetMon2 from petm2_c.zip. Original method overloads use $arity.
class PetMon2 extends Applet {
th = null;
th_interval = 70;
gg = null;
gm = null;
gk = null;
mp = null;
mode = 0;
mode_c = 0;
mbox_1 = new MessageBox(1, "ペットモン２", new Frame());
mbox_2 = new MessageBox(2, "ペットモン２", new Frame());
init$0() {
}
start$0() {
if ((this.th == null)) {
(this.mode = 0);
(this.th = new Thread(this));
this.th.start();
}
}
stop$0() {
if ((this.th != null)) {
(this.th = null);
}
}
destroy$0() {
}
paint$1(graphics) {
if ((this.mode == 100)) {
this.gg.copyOS$1(graphics);
}
}
update$1(graphics) {
this.paint$1(graphics);
}
init1$0() {
var n = 0;
var string = this.getParameter$1("system_mode");
try {
(n = Integer.valueOf(string));
}
catch (numberFormatException) {
(n = -1);
}
(this.gg = new GameGraphics(this));
(string = this.getParameter$1("filename_title"));
this.gg.addListImage$2(0, string);
(string = this.getParameter$1("filename_gym"));
this.gg.addListImage$2(4, string);
if ((((n != 10) && (n != 11)) && (n != 20))) {
(string = this.getParameter$1("filename_ending"));
this.gg.addListImage$2(1, string);
this.gg.addListImage$2(2, "gameover.gif");
(string = this.getParameter$1("filename_chizu"));
this.gg.addListImage$2(3, string);
}
this.gg.loadImage$0();
(this.gm = new GameMouse());
this.addMouseListener$1(this.gm);
(this.gk = new GameKey());
this.addKeyListener$1(this.gk);
(this.mp = new MainProgram(this.gg, this.gm, this.gk));
}
rguiMove$0() {
(this.mp.rgui_f = true);
switch (this.mp.rgui_meirei) {
case 100:
{
this.repaint$0();
(this.mp.rgui_f = false);
this.mbox_1.open$3("ペットモン２", (this.mp.rgui_name + "の、パスワードです。"), this.mp.rgui_text);
(this.mp.rgui_meirei = 110);
break;
}
case 105:
{
this.repaint$0();
(this.mp.rgui_f = false);
this.mbox_1.open$3("ペットモン２", (this.mp.rgui_name + "（主人公）の、パスワードです。"), this.mp.rgui_text);
(this.mp.rgui_meirei = 110);
break;
}
case 110:
{
break;
}
case 200:
{
this.repaint$0();
(this.mp.rgui_f = false);
this.mbox_2.open$3("ペットモン２", "ペットのパスワードを、入力して下さい。", this.mp.rgui_text);
(this.mp.rgui_meirei = 210);
break;
}
case 205:
{
this.repaint$0();
(this.mp.rgui_f = false);
this.mbox_2.open$3("ペットモン２", "主人公のパスワードを、入力して下さい。", this.mp.rgui_text);
(this.mp.rgui_meirei = 210);
break;
}
}
if ((this.mp.rgui_meirei == 110)) {
(this.mp.rgui_text = this.mbox_1.tf_1.getText());
}
else {
if ((this.mp.rgui_meirei == 210)) {
(this.mp.rgui_text = this.mbox_2.tf_1.getText());
}
}
}
constructor() { super(); }
run$0() { this.tick(); }
}
globalThis.PetMon2 = PetMon2;
