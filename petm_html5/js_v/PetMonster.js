// Direct port of PetMonster from petm_c.zip. Original method overloads use $arity.
class PetMonster extends Applet {
th = null;
th_interval = 70;
gg = null;
gm = null;
gk = null;
gs = null;
mp = null;
loading_c = 0;
system_mode = 1;
kyoku = (-(1) | 0);
ensou_c = 0;
init$0() {
}
initLoaded$0() {
(this.system_mode = this.paraInt$1("system_mode"));
(this.system_mode = ((this.system_mode == 1) ? 1 : ((this.system_mode == 3) ? 2 : ((this.system_mode == 2) ? 3 : 0))));
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
(this.gs = new GameSound(this));
this.gs.loadMidi$1(this.system_mode);
(this.gm = new GameMouse());
this.addMouseListener$1(this.gm);
(this.gk = new GameKey());
this.addKeyListener$1(this.gk);
(this.mp = new MainProgram(this.gg, this.gm, this.gk));
this.mp.start$0();
}
paraInt$1(string) {
var n = 0;
var string2 = this.getParameter$1(string);
try {
(n = Integer.valueOf(string2));
}
catch (numberFormatException) {
(n = (-(1) | 0));
}
return n;
}
start$0() {
if ((this.th == null)) {
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
if ((this.loading_c < 100)) {
graphics.setColor(Color.BLACK);
graphics.fillRect(0, 0, 512, 320);
graphics.setColor(Color.white);
graphics.setFont(new Font("Dialog", 0, 14));
graphics.drawString("NOW LOADING", 48, 280);
graphics.setColor(new Color(224, 224, 224));
graphics.fillRect(512, 0, 98, 320);
graphics.fillRect(0, 320, 610, 90);
}
else {
graphics.drawImage(this.gg.os_img, 0, 0, this);
graphics.setColor(new Color(224, 224, 224));
graphics.fillRect(512, 0, 98, 320);
graphics.fillRect(0, 320, 610, 90);
}
}
update$1(graphics) {
this.paint$1(graphics);
}
getHighscore$0() {
var n = 0;
if (((this.mp != null) && ((n = this.mp.highscore) < this.mp.score))) {
(n = this.mp.score);
}
return n;
}
getMode$0() {
var n = 0;
if ((this.mp != null)) {
var n2 = this.mp.ml_mode;
if (((n2 >= 50) && (n2 <= 60))) {
(n = 1);
}
else {
if ((n2 == 150)) {
(n = 500);
}
else {
if (((n2 >= 200) && (n2 < 300))) {
(n = 400);
}
else {
if (((n2 >= 300) && (n2 <= 310))) {
(n = 200);
}
else {
if (((n2 >= 400) && (n2 <= 420))) {
(n = 300);
}
else {
if (((this.mp.ml_mode == 100) && ((this.mp.sl_step == 2) || (this.mp.sl_step == 3)))) {
(n = 150);
(n = ((n + this.mp.stage) | 0));
}
else {
if ((this.mp.ml_mode == 100)) {
(n = 100);
(n = ((n + this.mp.stage) | 0));
}
else {
(n = 50);
}
}
}
}
}
}
}
}
return n;
}
getMainloopMode$0() {
var n = 0;
if ((this.mp != null)) {
(n = this.mp.ml_mode);
}
return n;
}
BGMPlayerJS$0() {
var n = this.getMode$0();
var n2 = 0;
switch (n) {
case 1:
{
(n2 = 1);
break;
}
case 101:
{
(n2 = 101);
break;
}
case 102:
{
(n2 = 102);
break;
}
case 103:
{
(n2 = 103);
break;
}
case 104:
{
(n2 = 104);
break;
}
case 151:
{
(n2 = 151);
break;
}
case 152:
{
(n2 = 152);
break;
}
case 153:
{
(n2 = 153);
break;
}
case 154:
{
(n2 = 154);
break;
}
case 200:
{
(n2 = (-(1) | 0));
break;
}
case 300:
{
(n2 = 300);
break;
}
case 400:
{
(n2 = 400);
break;
}
case 500:
{
(n2 = 500);
}
}
if (((n2 != 0) && (n2 != this.kyoku))) {
(this.kyoku = n2);
(this.ensou_c = 1);
}
if (((this.ensou_c > 0) && (this.ensou_c == 1))) {
switch (this.kyoku) {
case (-(1) | 0):
{
this.gs.playMidi$1((-(1) | 0));
break;
}
case 1:
{
this.gs.playMidi$1(0);
break;
}
case 101:
{
if ((this.system_mode == 2)) {
this.gs.playMidiLoop$1(8);
break;
}
if ((this.system_mode == 3)) {
this.gs.playMidiLoop$1(11);
break;
}
this.gs.playMidiLoop$1(5);
break;
}
case 102:
{
if ((this.system_mode == 2)) {
this.gs.playMidiLoop$1(9);
break;
}
if ((this.system_mode == 3)) {
this.gs.playMidiLoop$1(12);
break;
}
this.gs.playMidiLoop$1(6);
break;
}
case 103:
{
if ((this.system_mode == 2)) {
this.gs.playMidiLoop$1(10);
break;
}
if ((this.system_mode == 3)) {
this.gs.playMidiLoop$1(13);
break;
}
this.gs.playMidiLoop$1(7);
break;
}
case 104:
{
if ((this.system_mode == 3)) {
this.gs.playMidiLoop$1(14);
break;
}
this.gs.playMidi$1((-(1) | 0));
break;
}
case 151:
{
this.gs.playMidiLoop$1(15);
break;
}
case 152:
{
this.gs.playMidiLoop$1(16);
break;
}
case 153:
{
this.gs.playMidiLoop$1(17);
break;
}
case 154:
{
this.gs.playMidiLoop$1(18);
break;
}
case 300:
{
this.gs.playMidi$1(1);
break;
}
case 400:
{
if ((this.system_mode == 3)) {
this.gs.playMidiLoop$1(3);
break;
}
this.gs.playMidiLoop$1(2);
break;
}
case 500:
{
this.gs.playMidiLoop$1(4);
}
}
(this.ensou_c = 0);
}
}
run$0() { this.tick(); }
}
globalThis.PetMonster = PetMonster;
