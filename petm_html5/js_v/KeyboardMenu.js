// Direct port of KeyboardMenu from petm_c.zip. Original method overloads use $arity.
class KeyboardMenu {
gg = null;
gk = null;
hi = null;
hih = null;
hg = null;
ap = null;
c = J.array([16], 0);
x = J.array([16], 0);
y = J.array([16], 0);
width = J.array([16], 0);
selectedIndex = J.array([16], 0);
item_kazu = J.array([16], 0);
message = J.array([16], null);
item = J.array([16, 16], null);
item_int = J.array([16, 8], 0);
item_color = J.array([16], null);
aw = (-(1) | 0);
mode = 0;
kettei_c = 0;
cancel_c = 0;
c_fc = 0;
name_crys = null;
constructor(gameGraphics, gameKey, string) {
(this.gg = gameGraphics);
(this.gk = gameKey);
(this.name_crys = string);
(this.hi = this.gg.spt_img[0]);
(this.hih = this.gg.spt_img);
(this.hg = this.gg.os_g);
(this.ap = this.gg.ap);
this.initAll$0();
}
initAll$0() {
for (var i = 0; (i <= 15); J.inc(()=>i, v=>i=v, 1, false, "int")) {
this.init1$1(i);
}
(this.c_fc = 0);
(this.gk.up_c = 0);
(this.gk.down_c = 0);
(this.aw = (-(1) | 0));
(this.kettei_c = 2);
(this.cancel_c = 2);
}
init1$1(n) {
var n2 = 0;
(this.c[n] = 0);
(this.x[n] = 0);
(this.y[n] = 0);
(this.width[n] = 180);
(this.selectedIndex[n] = 0);
(this.item_kazu[n] = 0);
(this.message[n] = "どうしますか？");
for ((n2 = 0); (n2 <= 15); J.inc(()=>n2, v=>n2=v, 1, false, "int")) {
(this.item[n][n2] = "");
}
for ((n2 = 0); (n2 <= 7); J.inc(()=>n2, v=>n2=v, 1, false, "int")) {
(this.item_int[n][n2] = 0);
}
}
setMessage$2(n, string) {
(this.message[n] = string);
}
addItem$2(n, string) {
(this.item[n][this.item_kazu[n]] = string);
var n2 = n;
(this.item_kazu[n2] = ((this.item_kazu[n2] + 1) | 0));
}
addIntitem$2(n, n2) {
(this.item_int[n][this.item_kazu[n]] = n2);
var n3 = n;
(this.item_kazu[n3] = ((this.item_kazu[n3] + 1) | 0));
}
addItem2$3(n, string, n2) {
(this.item[n][this.item_kazu[n]] = string);
(this.item_int[n][this.item_kazu[n]] = n2);
var n3 = n;
(this.item_kazu[n3] = ((this.item_kazu[n3] + 1) | 0));
}
active$3(n, n2, n3) {
(this.c[n] = 100);
(this.x[n] = n2);
(this.y[n] = n3);
(this.width[n] = 180);
(this.c_fc = (-(1) | 0));
(this.gk.up_c = 0);
(this.gk.down_c = 0);
(this.aw = n);
(this.kettei_c = 2);
(this.cancel_c = 2);
}
active$4(n, n2, n3, n4) {
(this.c[n] = 100);
(this.x[n] = n2);
(this.y[n] = n3);
(this.width[n] = n4);
(this.c_fc = (-(1) | 0));
(this.gk.up_c = 0);
(this.gk.down_c = 0);
(this.aw = n);
(this.kettei_c = 2);
(this.cancel_c = 2);
}
activeSerifutuki$5(n, n2, n3, n4, string) {
(this.c[n] = 700);
(this.x[n] = n2);
(this.y[n] = n3);
(this.width[n] = n4);
(this.c_fc = (-(1) | 0));
(this.gk.up_c = 0);
(this.gk.down_c = 0);
(this.aw = n);
(this.kettei_c = 2);
(this.cancel_c = 2);
(this.item[n][15] = string);
}
activeKaimono$4(n, n2, n3, n4) {
(this.c[n] = 900);
(this.x[n] = n2);
(this.y[n] = n3);
(this.width[n] = n4);
(this.c_fc = (-(1) | 0));
(this.gk.up_c = 0);
(this.gk.down_c = 0);
(this.aw = n);
(this.kettei_c = 2);
(this.cancel_c = 2);
}
activeIchigyou$4(n, n2, n3, n4) {
(this.c[n] = 300);
(this.x[n] = n2);
(this.y[n] = n3);
(this.width[n] = n4);
(this.c_fc = (-(1) | 0));
(this.gk.up_c = 0);
(this.gk.down_c = 0);
(this.aw = n);
(this.kettei_c = 2);
(this.cancel_c = 2);
}
activeNigyou$5(n, n2, n3, n4, color) {
(this.c[n] = 310);
(this.x[n] = n2);
(this.y[n] = n3);
(this.width[n] = n4);
(this.item_color[n] = color);
(this.c_fc = (-(1) | 0));
(this.gk.up_c = 0);
(this.gk.down_c = 0);
(this.aw = n);
(this.kettei_c = 2);
(this.cancel_c = 2);
}
activeYongyou$4(n, n2, n3, n4) {
(this.c[n] = 320);
(this.x[n] = n2);
(this.y[n] = n3);
(this.width[n] = n4);
(this.c_fc = (-(1) | 0));
(this.gk.up_c = 0);
(this.gk.down_c = 0);
(this.aw = n);
(this.kettei_c = 2);
(this.cancel_c = 2);
}
activeYongyou2$4(n, n2, n3, n4) {
(this.c[n] = 321);
(this.x[n] = n2);
(this.y[n] = n3);
(this.width[n] = n4);
(this.c_fc = (-(1) | 0));
(this.gk.up_c = 0);
(this.gk.down_c = 0);
(this.aw = n);
(this.kettei_c = 2);
(this.cancel_c = 2);
}
activeSerifu$5(n, n2, n3, n4, color) {
(this.c[n] = 330);
(this.x[n] = n2);
(this.y[n] = n3);
(this.width[n] = n4);
(this.item_color[n] = color);
(this.c_fc = (-(1) | 0));
(this.gk.up_c = 0);
(this.gk.down_c = 0);
(this.aw = n);
(this.kettei_c = 2);
(this.cancel_c = 2);
}
activeYasumu$3(n, n2, n3) {
(this.c[n] = 1000);
(this.x[n] = n2);
(this.y[n] = n3);
(this.width[n] = 272);
(this.c_fc = (-(1) | 0));
(this.gk.up_c = 0);
(this.gk.down_c = 0);
(this.aw = n);
(this.kettei_c = 2);
(this.cancel_c = 2);
}
onKao$5(n, n2, n3, n4, n5) {
(this.c[n] = 600);
(this.x[n] = n2);
(this.y[n] = n3);
(this.width[n] = n4);
(this.item_int[n][0] = n5);
}
onMituketa$3(n, n2, n3) {
(this.c[n] = 610);
(this.x[n] = n2);
(this.y[n] = n3);
(this.width[n] = 200);
}
onOkozukai$5(n, n2, n3, n4, n5) {
(this.c[n] = 800);
(this.x[n] = n2);
(this.y[n] = n3);
(this.width[n] = n4);
(this.item_int[n][0] = n5);
}
activeIchigyouTime$4(n, n2, n3, n4) {
(this.c[n] = 350);
(this.x[n] = n2);
(this.y[n] = n3);
(this.width[n] = n4);
(this.item_int[n][0] = 100);
}
activeNigyouTime$5(n, n2, n3, n4, color) {
(this.c[n] = 360);
(this.x[n] = n2);
(this.y[n] = n3);
(this.width[n] = n4);
(this.item_color[n] = color);
(this.item_int[n][0] = 100);
}
activeJibun$8(n, n2, n3, n4, n5, n6, n7, n8) {
(this.c[n] = 400);
(this.x[n] = n2);
(this.y[n] = n3);
(this.item_int[14][0] = n5);
(this.item_int[14][1] = n6);
(this.item_int[14][2] = n7);
(this.item_int[14][3] = n8);
(this.width[n] = n4);
(this.c_fc = (-(1) | 0));
(this.gk.up_c = 0);
(this.gk.down_c = 0);
(this.aw = n);
(this.kettei_c = 2);
(this.cancel_c = 2);
}
activeZukan$8(n, n2, n3, n4, n5, n6, n7, string) {
(this.c[n] = 410);
(this.x[n] = n2);
(this.y[n] = n3);
(this.item_int[n][0] = n5);
(this.item_int[n][1] = n6);
(this.item_int[n][2] = n7);
(this.item[n][0] = string);
(this.width[n] = n4);
(this.c_fc = (-(1) | 0));
(this.gk.up_c = 0);
(this.gk.down_c = 0);
(this.aw = n);
(this.kettei_c = 2);
(this.cancel_c = 2);
}
activeToujou$6(n, n2, n3, n4, n5, string) {
(this.c[n] = 420);
(this.x[n] = n2);
(this.y[n] = n3);
(this.item_int[n][2] = n5);
(this.item[n][0] = string);
(this.width[n] = n4);
(this.c_fc = (-(1) | 0));
(this.gk.up_c = 0);
(this.gk.down_c = 0);
(this.aw = n);
(this.kettei_c = 2);
(this.cancel_c = 2);
}
onStatuswindow$1(petObject) {
(this.c[14] = 200);
(this.item[14][0] = petObject.name);
(this.item_int[14][0] = petObject.hp);
(this.item_int[14][1] = petObject.hp_max);
(this.item_int[14][2] = petObject.pp);
(this.item_int[14][3] = petObject.pp_max);
}
onStatuswindowWild$1(wildObject) {
(this.c[15] = 210);
(this.item[15][0] = wildObject.name);
(this.item_int[15][0] = wildObject.hp);
(this.item_int[15][1] = wildObject.hp_max);
(this.item_int[15][2] = wildObject.pp);
(this.item_int[15][3] = wildObject.pp_max);
}
onStatuswindowGym$1(wildObject) {
(this.c[15] = 220);
(this.item[15][0] = wildObject.name);
(this.item_int[15][0] = wildObject.hp);
(this.item_int[15][1] = wildObject.hp_max);
(this.item_int[15][2] = wildObject.pp);
(this.item_int[15][3] = wildObject.pp_max);
}
initCS$0() {
(this.item_kazu[0] = 8);
(this.selectedIndex[0] = 0);
}
activeCS$0() {
(this.c[0] = 500);
(this.x[0] = 0);
(this.y[0] = 0);
(this.width[0] = 0);
(this.c_fc = (-(1) | 0));
(this.gk.up_c = 0);
(this.gk.down_c = 0);
(this.aw = 0);
(this.kettei_c = 2);
}
off$1(n) {
(this.c[n] = 0);
}
offActivewindow$2(n, n2) {
(this.c[n] = 0);
(this.c_fc = (-(1) | 0));
(this.gk.up_c = 0);
(this.gk.down_c = 0);
(this.aw = n2);
(this.kettei_c = 2);
(this.cancel_c = 2);
}
move$0() {
J.inc(()=>this.c_fc, v=>this.c_fc=v, 1, false, "int");
if ((this.c_fc > 6)) {
(this.c_fc = 0);
}
if ((this.aw >= 0)) {
if (this.gk.up_f) {
J.inc(()=>this.gk.up_c, v=>this.gk.up_c=v, 1, false, "int");
if ((this.gk.up_c > 3)) {
(this.gk.up_c = 1);
}
}
else {
(this.gk.up_c = 0);
}
if (this.gk.down_f) {
J.inc(()=>this.gk.down_c, v=>this.gk.down_c=v, 1, false, "int");
if ((this.gk.down_c > 3)) {
(this.gk.down_c = 1);
}
}
else {
(this.gk.down_c = 0);
}
if ((this.gk.up_c == 1)) {
var n = this.aw;
(this.selectedIndex[n] = ((this.selectedIndex[n] - 1) | 0));
(this.c_fc = (-(1) | 0));
if ((this.selectedIndex[this.aw] < 0)) {
(this.selectedIndex[this.aw] = ((this.item_kazu[this.aw] - 1) | 0));
}
}
else {
if ((this.gk.down_c == 1)) {
var n = this.aw;
(this.selectedIndex[n] = ((this.selectedIndex[n] + 1) | 0));
(this.c_fc = (-(1) | 0));
if ((this.selectedIndex[this.aw] > ((this.item_kazu[this.aw] - 1) | 0))) {
(this.selectedIndex[this.aw] = 0);
}
}
}
}
if (!this.gk.tr1_f) {
(this.kettei_c = 0);
}
else {
if ((this.kettei_c == 0)) {
(this.kettei_c = 1);
}
}
if (!this.gk.tr2_f) {
(this.cancel_c = 0);
}
else {
if ((this.cancel_c == 0)) {
(this.cancel_c = 1);
}
}
}
drawMenus$0() {
this.hg.setFont(new Font("Dialog", 0, 12));
this.hg.setFont(new Font("ＭＳ Ｐゴシック", 0, 12));
block23: for (var i = 0; (i <= 15); J.inc(()=>i, v=>i=v, 1, false, "int")) {
var n = this.c[i];
if ((n == 0)) {
continue;
}
switch (n) {
case 100:
{
var n2 = 0;
this.drawWindowbox$4(this.x[i], this.y[i], this.width[i], ((30 + Math.imul(this.item_kazu[i], 14)) | 0));
this.hg.setColor(Color.white);
this.hg.drawString(this.message[i], ((this.x[i] + 24) | 0), ((((this.y[i] + 6) | 0) + 12) | 0));
if ((this.item_kazu[i] >= 1)) {
for ((n2 = 0); (n2 <= ((this.item_kazu[i] - 1) | 0)); J.inc(()=>n2, v=>n2=v, 1, false, "int")) {
this.hg.drawString(this.item[i][n2], ((this.x[i] + 24) | 0), ((((((((this.y[i] + 6) | 0) + 18) | 0) + Math.imul(n2, 14)) | 0) + 12) | 0));
}
}
if ((i == this.aw)) {
if ((this.c_fc > 3)) {
continue block23;
}
this.hg.drawImage(this.hi[70], ((this.x[i] + 6) | 0), ((((this.y[i] + 24) | 0) + Math.imul(this.selectedIndex[i], 14)) | 0), this.ap);
continue block23;
}
this.hg.drawImage(this.hi[70], ((this.x[i] + 6) | 0), ((((this.y[i] + 24) | 0) + Math.imul(this.selectedIndex[i], 14)) | 0), this.ap);
continue block23;
}
case 200:
{
this.hg.setColor(Color.white);
this.hg.fillRect(12, 12, 128, 58);
this.hg.setColor(Color.black);
this.hg.fillRect(14, 14, 124, 54);
this.hg.setColor(Color.cyan);
this.hg.drawString(this.item[14][0], 18, 30);
if (((this.item_int[14][0] <= 0) || (this.item_int[14][2] <= 0))) {
this.hg.setColor(Color.red);
this.hg.drawString("戦闘不能", 82, 30);
}
this.hg.setColor(Color.white);
this.hg.drawString(((("HP  " + this.item_int[14][0]) + " / ") + this.item_int[14][1]), 18, 48);
this.hg.drawString(((("PP  " + this.item_int[14][2]) + " / ") + this.item_int[14][3]), 18, 62);
continue block23;
}
case 210:
{
this.hg.setColor(Color.white);
this.hg.fillRect(160, 12, 128, 58);
this.hg.setColor(Color.black);
this.hg.fillRect(162, 14, 124, 54);
this.hg.setColor(Color.green);
this.hg.drawString(this.item[15][0], 166, 30);
if ((this.item_int[15][0] <= 0)) {
this.hg.setColor(Color.red);
this.hg.drawString("戦闘不能", 230, 30);
}
this.hg.setColor(Color.white);
this.hg.drawString(((("HP  " + this.item_int[15][0]) + " / ") + this.item_int[15][1]), 166, 48);
this.hg.drawString(((("PP  " + this.item_int[15][2]) + " / ") + this.item_int[15][3]), 166, 62);
continue block23;
}
case 220:
{
this.hg.setColor(Color.white);
this.hg.fillRect(372, 12, 128, 58);
this.hg.setColor(Color.black);
this.hg.fillRect(374, 14, 124, 54);
this.hg.setColor(Color.cyan);
this.hg.drawString(this.item[15][0], 378, 30);
if (((this.item_int[15][0] <= 0) || (this.item_int[15][2] <= 0))) {
this.hg.setColor(Color.red);
this.hg.drawString("戦闘不能", 442, 30);
}
this.hg.setColor(Color.white);
this.hg.drawString(((("HP  " + this.item_int[15][0]) + " / ") + this.item_int[15][1]), 378, 48);
this.hg.drawString(((("PP  " + this.item_int[15][2]) + " / ") + this.item_int[15][3]), 378, 62);
continue block23;
}
case 300:
{
this.drawWindowbox$4(this.x[i], this.y[i], this.width[i], 40);
this.hg.setColor(Color.white);
this.hg.drawString(this.item[i][0], ((this.x[i] + 6) | 0), ((((this.y[i] + 6) | 0) + 12) | 0));
if ((this.c_fc > 3)) {
continue block23;
}
this.gg.drawPT$4(((this.x[i] + J.div(((this.width[i] - 14) | 0), 2)) | 0), ((((((((this.y[i] + 6) | 0) + 14) | 0) + 0) | 0) + 2) | 0), 71, 0);
continue block23;
}
case 310:
{
this.drawWindowbox$4(this.x[i], this.y[i], this.width[i], 58);
this.hg.setColor(this.item_color[i]);
this.hg.drawString(this.item[i][0], ((this.x[i] + 6) | 0), ((((this.y[i] + 6) | 0) + 12) | 0));
this.hg.setColor(Color.white);
this.hg.drawString(this.item[i][1], ((this.x[i] + 6) | 0), ((((((this.y[i] + 6) | 0) + 18) | 0) + 12) | 0));
if ((this.c_fc > 3)) {
continue block23;
}
this.gg.drawPT$4(((this.x[i] + J.div(((this.width[i] - 14) | 0), 2)) | 0), ((((((((this.y[i] + 6) | 0) + 18) | 0) + 14) | 0) + 2) | 0), 71, 0);
continue block23;
}
case 320:
{
var n2 = 0;
this.drawWindowbox$4(this.x[i], this.y[i], this.width[i], ((((66 + Math.imul(((this.item_kazu[i] - 3) | 0), 14)) | 0) + 14) | 0));
this.hg.setColor(Color.magenta);
this.hg.drawString(this.item[i][0], ((this.x[i] + 6) | 0), ((((this.y[i] + 6) | 0) + 12) | 0));
this.hg.setColor(Color.white);
this.hg.drawString(this.item[i][1], ((this.x[i] + 6) | 0), ((((((this.y[i] + 6) | 0) + 18) | 0) + 12) | 0));
this.hg.setColor(Color.cyan);
this.hg.drawString(this.item[i][2], ((this.x[i] + 6) | 0), ((((((this.y[i] + 6) | 0) + 36) | 0) + 12) | 0));
this.hg.setColor(Color.white);
for ((n2 = 0); (n2 <= ((this.item_kazu[3] - 4) | 0)); J.inc(()=>n2, v=>n2=v, 1, false, "int")) {
this.hg.drawString(this.item[3][((n2 + 3) | 0)], ((this.x[3] + 6) | 0), ((((((((this.y[3] + 6) | 0) + 54) | 0) + Math.imul(n2, 14)) | 0) + 12) | 0));
}
if ((this.c_fc > 3)) {
continue block23;
}
this.gg.drawPT$4(((this.x[i] + J.div(((this.width[i] - 14) | 0), 2)) | 0), ((((((((((this.y[i] + 6) | 0) + 18) | 0) + 36) | 0) + Math.imul(((this.item_kazu[i] - 3) | 0), 14)) | 0) + 2) | 0), 71, 0);
continue block23;
}
case 321:
{
this.drawWindowbox$4(this.x[i], this.y[i], this.width[i], 108);
this.hg.setColor(Color.cyan);
this.hg.drawString(this.item[i][0], ((this.x[i] + 6) | 0), ((((this.y[i] + 6) | 0) + 12) | 0));
this.hg.setColor(Color.white);
this.hg.drawString(this.item[i][1], ((this.x[i] + 6) | 0), ((((((this.y[i] + 6) | 0) + 18) | 0) + 12) | 0));
this.hg.setColor(Color.magenta);
this.hg.drawString(this.item[i][2], ((this.x[i] + 6) | 0), ((((((this.y[i] + 6) | 0) + 36) | 0) + 12) | 0));
this.hg.setColor(Color.white);
this.hg.drawString(this.item[i][3], ((this.x[i] + 6) | 0), ((((((this.y[i] + 6) | 0) + 54) | 0) + 12) | 0));
this.hg.setColor(Color.white);
this.hg.drawString(this.item[i][4], ((this.x[i] + 6) | 0), ((((((((this.y[i] + 6) | 0) + 54) | 0) + 14) | 0) + 12) | 0));
if ((this.c_fc > 3)) {
continue block23;
}
this.gg.drawPT$4(((this.x[i] + J.div(((this.width[i] - 14) | 0), 2)) | 0), ((((((((((((this.y[i] + 6) | 0) + 18) | 0) + 36) | 0) + 14) | 0) + 14) | 0) + 2) | 0), 71, 0);
continue block23;
}
case 330:
{
var n2 = 0;
this.drawWindowbox$4(this.x[i], this.y[i], this.width[i], ((30 + Math.imul(((this.item_kazu[i] + 1) | 0), 14)) | 0));
this.hg.setColor(this.item_color[i]);
this.hg.drawString(this.message[i], ((this.x[i] + 6) | 0), ((((this.y[i] + 6) | 0) + 12) | 0));
this.hg.setColor(Color.white);
if ((this.item_kazu[i] >= 1)) {
for ((n2 = 0); (n2 <= ((this.item_kazu[i] - 1) | 0)); J.inc(()=>n2, v=>n2=v, 1, false, "int")) {
this.hg.drawString(this.item[i][n2], ((this.x[i] + 6) | 0), ((((((((this.y[i] + 6) | 0) + 18) | 0) + Math.imul(n2, 14)) | 0) + 12) | 0));
}
}
if ((i == this.aw)) {
if ((this.c_fc > 3)) {
continue block23;
}
this.gg.drawPT$4(((this.x[i] + J.div(((this.width[i] - 14) | 0), 2)) | 0), ((((((((this.y[i] + 6) | 0) + 18) | 0) + Math.imul(this.item_kazu[i], 14)) | 0) + 2) | 0), 71, 0);
continue block23;
}
this.gg.drawPT$4(((this.x[i] + J.div(((this.width[i] - 14) | 0), 2)) | 0), ((((((((this.y[i] + 6) | 0) + 18) | 0) + Math.imul(this.item_kazu[i], 14)) | 0) + 2) | 0), 71, 0);
continue block23;
}
case 350:
{
if ((this.item_int[i][0] == 100)) {
(this.item_int[i][0] = 55);
continue block23;
}
this.drawWindowbox$4(this.x[i], this.y[i], this.width[i], 26);
this.hg.setColor(Color.white);
this.hg.drawString(this.item[i][0], ((this.x[i] + 6) | 0), ((((this.y[i] + 6) | 0) + 12) | 0));
var nArray = this.item_int[i];
(nArray[0] = ((nArray[0] - 1) | 0));
if ((this.item_int[i][0] > 0)) {
continue block23;
}
this.off$1(i);
continue block23;
}
case 360:
{
if ((this.item_int[i][0] == 200)) {
this.drawWindowbox$4(this.x[i], this.y[i], this.width[i], 44);
this.hg.setColor(this.item_color[i]);
this.hg.drawString(this.item[i][0], ((this.x[i] + 6) | 0), ((((this.y[i] + 6) | 0) + 12) | 0));
this.hg.setColor(Color.white);
this.hg.drawString(this.item[i][1], ((this.x[i] + 6) | 0), ((((((this.y[i] + 6) | 0) + 18) | 0) + 12) | 0));
continue block23;
}
if ((this.item_int[i][0] == 100)) {
(this.item_int[i][0] = 55);
continue block23;
}
this.drawWindowbox$4(this.x[i], this.y[i], this.width[i], 44);
this.hg.setColor(this.item_color[i]);
this.hg.drawString(this.item[i][0], ((this.x[i] + 6) | 0), ((((this.y[i] + 6) | 0) + 12) | 0));
this.hg.setColor(Color.white);
this.hg.drawString(this.item[i][1], ((this.x[i] + 6) | 0), ((((((this.y[i] + 6) | 0) + 18) | 0) + 12) | 0));
var nArray = this.item_int[i];
(nArray[0] = ((nArray[0] - 1) | 0));
if ((this.item_int[i][0] > 0)) {
continue block23;
}
this.off$1(i);
continue block23;
}
case 400:
{
this.drawWindowbox$4(this.x[i], this.y[i], this.width[i], 128);
this.hg.setColor(Color.yellow);
this.hg.drawString((this.name_crys + "のステータス"), ((this.x[i] + 6) | 0), ((((this.y[i] + 6) | 0) + 12) | 0));
this.hg.setColor(Color.white);
this.hg.drawString(((("HP  " + this.item_int[14][0]) + " / ") + this.item_int[14][1]), ((this.x[i] + 6) | 0), ((((((((this.y[i] + 6) | 0) + 18) | 0) + 0) | 0) + 12) | 0));
this.hg.drawString("おこづかい  ", ((this.x[i] + 6) | 0), ((((((((this.y[i] + 6) | 0) + 18) | 0) + 28) | 0) + 12) | 0));
this.hg.drawString((("" + this.item_int[14][2]) + "円"), ((((this.x[i] + 6) | 0) + 72) | 0), ((((((((this.y[i] + 6) | 0) + 18) | 0) + 42) | 0) + 12) | 0));
this.hg.drawString("得点", ((this.x[i] + 6) | 0), ((((((((this.y[i] + 6) | 0) + 18) | 0) + 56) | 0) + 12) | 0));
this.hg.drawString((("" + this.item_int[14][3]) + "点"), ((((this.x[i] + 6) | 0) + 72) | 0), ((((((((this.y[i] + 6) | 0) + 18) | 0) + 70) | 0) + 12) | 0));
if ((this.c_fc > 3)) {
continue block23;
}
this.gg.drawPT$4(((this.x[i] + J.div(((this.width[i] - 14) | 0), 2)) | 0), ((((((((this.y[i] + 6) | 0) + 18) | 0) + 84) | 0) + 2) | 0), 71, 0);
continue block23;
}
case 420:
{
this.drawWindowbox$4(this.x[i], this.y[i], this.width[i], 116);
this.hg.setColor(new Color(96, 96, 96));
this.hg.fillRect(((this.x[i] + 12) | 0), ((this.y[i] + 12) | 0), ((this.width[i] - 24) | 0), 48);
this.gg.drawPT$4(((((this.x[i] + 12) | 0) + J.div(((((this.width[i] - 24) | 0) - 32) | 0), 2)) | 0), ((((this.y[i] + 12) | 0) + 8) | 0), this.item_int[i][2], 0);
this.hg.setColor(Color.cyan);
this.hg.drawString(this.item[i][0], ((this.x[i] + 12) | 0), ((((this.y[i] + 64) | 0) + 12) | 0));
this.hg.setColor(Color.white);
this.hg.drawString("これからも、よろしくね！", ((this.x[i] + 12) | 0), ((((((this.y[i] + 68) | 0) + 14) | 0) + 12) | 0));
if ((this.c_fc > 3)) {
continue block23;
}
this.gg.drawPT$4(((this.x[i] + J.div(((this.width[i] - 14) | 0), 2)) | 0), ((((((this.y[i] + 68) | 0) + 28) | 0) + 2) | 0), 71, 0);
continue block23;
}
case 410:
{
if ((this.item_int[i][0] == (-(2) | 0))) {
this.drawWindowbox$4(this.x[i], this.y[i], this.width[i], 116);
this.hg.setColor(new Color(96, 96, 96));
this.hg.fillRect(((this.x[i] + 12) | 0), ((this.y[i] + 12) | 0), ((this.width[i] - 24) | 0), 48);
this.gg.drawPT$4(((((this.x[i] + 12) | 0) + J.div(((((this.width[i] - 24) | 0) - 32) | 0), 2)) | 0), ((((this.y[i] + 12) | 0) + 8) | 0), this.item_int[i][2], 0);
this.hg.setColor(Color.yellow);
this.hg.drawString(this.item[i][0], ((this.x[i] + 12) | 0), ((((this.y[i] + 64) | 0) + 12) | 0));
this.hg.setColor(Color.white);
this.hg.drawString("捕獲不可能", ((this.x[i] + 12) | 0), ((((((this.y[i] + 68) | 0) + 14) | 0) + 12) | 0));
if ((this.c_fc > 3)) {
continue block23;
}
this.gg.drawPT$4(((this.x[i] + J.div(((this.width[i] - 14) | 0), 2)) | 0), ((((((this.y[i] + 68) | 0) + 28) | 0) + 2) | 0), 71, 0);
continue block23;
}
if ((this.item_int[i][0] < 0)) {
this.drawWindowbox$4(this.x[i], this.y[i], this.width[i], 116);
this.hg.setColor(new Color(96, 96, 96));
this.hg.fillRect(((this.x[i] + 12) | 0), ((this.y[i] + 12) | 0), ((this.width[i] - 24) | 0), 48);
this.gg.drawPT$4(((((this.x[i] + 12) | 0) + J.div(((((this.width[i] - 24) | 0) - 32) | 0), 2)) | 0), ((((this.y[i] + 12) | 0) + 8) | 0), this.item_int[i][2], 0);
this.hg.setColor(Color.yellow);
this.hg.drawString(this.item[i][0], ((this.x[i] + 12) | 0), ((((this.y[i] + 64) | 0) + 12) | 0));
this.hg.setColor(Color.white);
this.hg.drawString("現在調査中", ((this.x[i] + 12) | 0), ((((((this.y[i] + 68) | 0) + 14) | 0) + 12) | 0));
if ((this.c_fc > 3)) {
continue block23;
}
this.gg.drawPT$4(((this.x[i] + J.div(((this.width[i] - 14) | 0), 2)) | 0), ((((((this.y[i] + 68) | 0) + 28) | 0) + 2) | 0), 71, 0);
continue block23;
}
this.drawWindowbox$4(this.x[i], this.y[i], this.width[i], 158);
this.hg.setColor(new Color(96, 96, 96));
this.hg.fillRect(((this.x[i] + 12) | 0), ((this.y[i] + 12) | 0), ((this.width[i] - 24) | 0), 48);
this.gg.drawPT$4(((((this.x[i] + 12) | 0) + J.div(((((this.width[i] - 24) | 0) - 32) | 0), 2)) | 0), ((((this.y[i] + 12) | 0) + 8) | 0), this.item_int[i][2], 0);
this.hg.setColor(Color.yellow);
this.hg.drawString(this.item[i][0], ((this.x[i] + 12) | 0), ((((this.y[i] + 64) | 0) + 12) | 0));
this.hg.setColor(Color.white);
this.hg.drawString("最大HP", ((this.x[i] + 12) | 0), ((((((this.y[i] + 68) | 0) + 14) | 0) + 12) | 0));
this.hg.drawString(("" + this.item_int[i][0]), ((this.x[i] + 56) | 0), ((((((this.y[i] + 68) | 0) + 28) | 0) + 12) | 0));
this.hg.drawString("最大PP", ((this.x[i] + 12) | 0), ((((((this.y[i] + 68) | 0) + 42) | 0) + 12) | 0));
this.hg.drawString(("" + this.item_int[i][1]), ((this.x[i] + 56) | 0), ((((((this.y[i] + 68) | 0) + 56) | 0) + 12) | 0));
if ((this.c_fc > 3)) {
continue block23;
}
this.gg.drawPT$4(((this.x[i] + J.div(((this.width[i] - 14) | 0), 2)) | 0), ((((((this.y[i] + 68) | 0) + 70) | 0) + 2) | 0), 71, 0);
continue block23;
}
case 500:
{
if (((this.c_fc <= 3) || (this.aw != 0))) {
this.hg.drawImage(this.hi[72], ((12 + Math.imul(28, this.selectedIndex[i])) | 0), 288, this.ap);
continue block23;
}
this.hg.drawImage(this.hi[73], ((12 + Math.imul(28, this.selectedIndex[i])) | 0), 288, this.ap);
continue block23;
}
case 600:
{
this.drawWindowbox$4(this.x[i], this.y[i], this.width[i], 96);
(n = this.item_int[i][0]);
var n3 = ((this.x[i] + J.div(((this.width[i] - 64) | 0), 2)) | 0);
var n4 = ((this.y[i] + 16) | 0);
this.gg.drawPT$4(n3, n4, n, 0);
this.gg.drawPT$4(((n3 + 32) | 0), n4, ((n + 1) | 0), 0);
this.gg.drawPT$4(n3, ((n4 + 32) | 0), ((n + 10) | 0), 0);
this.gg.drawPT$4(((n3 + 32) | 0), ((n4 + 32) | 0), ((n + 11) | 0), 0);
continue block23;
}
case 610:
{
this.drawWindowbox$4(this.x[i], this.y[i], this.width[i], ((30 + Math.imul(this.item_kazu[i], 14)) | 0));
this.hg.setColor(Color.yellow);
this.hg.drawString("モンスターずかん", ((this.x[i] + 6) | 0), ((((this.y[i] + 6) | 0) + 12) | 0));
this.hg.setColor(Color.white);
this.hg.drawString(("見つけた数  " + this.item_int[i][0]), ((this.x[i] + 6) | 0), ((((((((this.y[i] + 6) | 0) + 18) | 0) + 0) | 0) + 12) | 0));
this.hg.drawString(("捕まえた数  " + this.item_int[i][1]), ((this.x[i] + 6) | 0), ((((((((this.y[i] + 6) | 0) + 18) | 0) + 14) | 0) + 12) | 0));
continue block23;
}
case 700:
{
var n2 = 0;
this.drawWindowbox$4(this.x[i], this.y[i], this.width[i], ((((30 + Math.imul(this.item_kazu[i], 14)) | 0) + 18) | 0));
this.hg.setColor(Color.cyan);
this.hg.drawString(this.item[i][15], ((this.x[i] + 24) | 0), ((((this.y[i] + 6) | 0) + 12) | 0));
this.hg.setColor(Color.white);
this.hg.drawString(this.message[i], ((this.x[i] + 24) | 0), ((((((this.y[i] + 6) | 0) + 12) | 0) + 18) | 0));
if ((this.item_kazu[i] >= 1)) {
for ((n2 = 0); (n2 <= ((this.item_kazu[i] - 1) | 0)); J.inc(()=>n2, v=>n2=v, 1, false, "int")) {
this.hg.drawString(this.item[i][n2], ((this.x[i] + 24) | 0), ((((((((((this.y[i] + 6) | 0) + 18) | 0) + Math.imul(n2, 14)) | 0) + 12) | 0) + 18) | 0));
}
}
if ((i == this.aw)) {
if ((this.c_fc > 3)) {
continue block23;
}
this.gg.drawPT$4(((this.x[i] + 6) | 0), ((((((((this.y[i] + 6) | 0) + 18) | 0) + Math.imul(this.selectedIndex[i], 14)) | 0) + 18) | 0), 70, 0);
continue block23;
}
this.gg.drawPT$4(((this.x[i] + 6) | 0), ((((((((this.y[i] + 6) | 0) + 18) | 0) + Math.imul(this.selectedIndex[i], 14)) | 0) + 18) | 0), 70, 0);
continue block23;
}
case 800:
{
this.drawWindowbox$4(this.x[i], this.y[i], this.width[i], 44);
this.hg.setColor(Color.yellow);
this.hg.drawString("おこづかい", ((this.x[i] + 6) | 0), ((((this.y[i] + 6) | 0) + 12) | 0));
this.hg.setColor(Color.white);
this.hg.drawString((("" + this.item_int[i][0]) + "円"), ((this.x[i] + 6) | 0), ((((((this.y[i] + 6) | 0) + 18) | 0) + 12) | 0));
continue block23;
}
case 900:
{
var n2 = 0;
this.drawWindowbox$4(this.x[i], this.y[i], this.width[i], ((30 + Math.imul(this.item_kazu[i], 14)) | 0));
this.hg.setColor(Color.white);
this.hg.drawString(this.message[i], ((this.x[i] + 24) | 0), ((((this.y[i] + 6) | 0) + 12) | 0));
if ((this.item_kazu[i] >= 1)) {
for ((n2 = 0); (n2 <= ((this.item_kazu[i] - 1) | 0)); J.inc(()=>n2, v=>n2=v, 1, false, "int")) {
this.hg.drawString(this.item[i][n2], ((this.x[i] + 24) | 0), ((((((((this.y[i] + 6) | 0) + 18) | 0) + Math.imul(n2, 14)) | 0) + 12) | 0));
this.hg.drawString((("" + this.item_int[i][n2]) + "円"), ((((this.x[i] + 24) | 0) + 104) | 0), ((((((((this.y[i] + 6) | 0) + 18) | 0) + Math.imul(n2, 14)) | 0) + 12) | 0));
}
}
if ((i == this.aw)) {
if ((this.c_fc > 3)) {
continue block23;
}
this.gg.drawPT$4(((this.x[i] + 6) | 0), ((((((this.y[i] + 6) | 0) + 18) | 0) + Math.imul(this.selectedIndex[i], 14)) | 0), 70, 0);
continue block23;
}
this.gg.drawPT$4(((this.x[i] + 6) | 0), ((((((this.y[i] + 6) | 0) + 18) | 0) + Math.imul(this.selectedIndex[i], 14)) | 0), 70, 0);
continue block23;
}
case 1000:
{
var n2 = 0;
this.drawWindowbox$4(this.x[i], this.y[i], this.width[i], 98);
this.hg.setColor(new Color(96, 96, 96));
this.hg.fillRect(((this.x[i] + 12) | 0), ((this.y[i] + 12) | 0), 248, 48);
for ((n2 = 0); (n2 <= 5); J.inc(()=>n2, v=>n2=v, 1, false, "int")) {
if ((this.item_int[i][n2] <= 0)) {
continue;
}
this.gg.drawPT$4(((((((this.x[i] + 12) | 0) + 8) | 0) + Math.imul(n2, 40)) | 0), ((((this.y[i] + 12) | 0) + 8) | 0), this.item_int[i][n2], 0);
}
this.hg.setColor(Color.white);
this.hg.drawString("みんな、元気になった。", ((this.x[i] + 12) | 0), ((((this.y[i] + 64) | 0) + 12) | 0));
if ((this.c_fc > 3)) {
continue block23;
}
this.gg.drawPT$4(((this.x[i] + J.div(((this.width[i] - 14) | 0), 2)) | 0), ((((((this.y[i] + 64) | 0) + 14) | 0) + 2) | 0), 71, 0);
}
}
}
}
drawWindowbox$4(n, n2, n3, n4) {
this.hg.setColor(Color.white);
this.hg.fillRect(n, n2, n3, n4);
this.hg.setColor(Color.black);
this.hg.fillRect(((n + 2) | 0), ((n2 + 2) | 0), ((n3 - 4) | 0), ((n4 - 4) | 0));
}
}
globalThis.KeyboardMenu = KeyboardMenu;
