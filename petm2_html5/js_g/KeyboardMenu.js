// Direct port of KeyboardMenu from petm2_c.zip. Original method overloads use $arity.
class KeyboardMenu {
gg = null;
gk = null;
mp = null;
kmo = J.array([16], null);
hi = null;
hih = null;
hg = null;
ap = null;
frontcolor = null;
backcolor = null;
aw = -1;
fc = 0;
fc2 = 0;
mode = 0;
kettei_c = 2;
cancel_c = 2;
moji = J.array([89], 0);
moji_code_map = J.array([13, 7], 0);
cursor_x = 0;
cursor_y = 0;
cursor2_x = 0;
name_code = J.array([5], 0);
kettei2_c = 2;
cancel2_c = 2;
idlist_item = J.array([50], 0);
idlist_kazu = 0;
constructor(gameGraphics, gameKey, mainProgram) {
var n = 0;
(this.gg = gameGraphics);
(this.gk = gameKey);
(this.mp = mainProgram);
(this.hi = this.gg.spt_img[0]);
(this.hih = this.gg.spt_img);
(this.hg = this.gg.os_g);
(this.ap = this.gg.ap);
var string = "n アイウエオ";
(string = (string + "カキクケコ"));
(string = (string + "サシスセソ"));
(string = (string + "タチツテト"));
(string = (string + "ナニヌネノ"));
(string = (string + "ハヒフヘホ"));
(string = (string + "マミムメモ"));
(string = (string + "ラリルレロ"));
(string = (string + "ガギグゲゴ"));
(string = (string + "ザジズゼゾ"));
(string = (string + "ダヂヅデド"));
(string = (string + "バビブベボ"));
(string = (string + "パピプペポ"));
(string = (string + "ァィゥェォ"));
(string = (string + "ヤユヨ"));
(string = (string + "ワヲン"));
(string = (string + "ャュョ"));
(string = (string + "ッヴー"));
(string = (string + "・＝！？"));
var n2 = 0;
while ((n2 <= 87)) {
(this.moji[n2] = ((J.charAt(string, n2)) & 65535));
++n2;
}
var n3 = 0;
while ((n3 <= 6)) {
(n = 0);
while ((n <= 12)) {
(this.moji_code_map[n][n3] = 0);
++n;
}
++n3;
}
(n3 = 0);
while ((n3 <= 6)) {
(n = 0);
while ((n <= 4)) {
(this.moji_code_map[n][n3] = ((((2 + Math.imul(n3, 5)) | 0) + n) | 0));
++n;
}
++n3;
}
(n3 = 0);
while ((n3 <= 6)) {
(n = 0);
while ((n <= 4)) {
(this.moji_code_map[((n + 5) | 0)][n3] = ((((37 + Math.imul(n3, 5)) | 0) + n) | 0));
++n;
}
++n3;
}
(n3 = 0);
while ((n3 <= 6)) {
(n = 0);
while ((n <= 2)) {
(this.moji_code_map[((n + 10) | 0)][n3] = ((((((72 + Math.imul(n3, 3)) | 0) + n) | 0) > 86) ? 1 : ((((72 + Math.imul(n3, 3)) | 0) + n) | 0)));
++n;
}
++n3;
}
(n2 = 0);
while ((n2 <= 15)) {
(this.kmo[n2] = new KeyboardMenuObject(this.gg, this.gk));
++n2;
}
(this.frontcolor = Color.white);
(this.backcolor = Color.black);
this.initAll$0();
}
initAll$0() {
var n = 0;
while ((n <= 15)) {
this.kmo[n].init$0();
++n;
}
(this.aw = -1);
(this.fc = -1);
(this.fc2 = -1);
(this.mode = 0);
(this.kettei_c = 2);
(this.cancel_c = 2);
(this.kettei2_c = 2);
(this.cancel2_c = 2);
(this.gk.up_c = 0);
(this.gk.down_c = 0);
(n = 0);
while ((n <= 4)) {
(this.name_code[n] = 0);
++n;
}
this.initIdlist$0();
}
initIdlist$0() {
(this.idlist_kazu = 0);
var n = 0;
while ((n <= 49)) {
(this.idlist_item[n] = 0);
++n;
}
}
initCS$1(n) {
(this.kmo[n].c = 90);
(this.kmo[n].selectedIndex = 0);
(this.kmo[n].item_kazu = 8);
}
initMessagebox$4(n, n2, n3, n4) {
this.kmo[n].init$0();
(this.kmo[n].c = 100);
(this.kmo[n].x = n2);
(this.kmo[n].y = n3);
(this.kmo[n].width = n4);
(this.kmo[n].selectedIndex = 0);
(this.kmo[n].item_kazu = 0);
}
initSerifubox$5(n, n2, n3, n4, string) {
this.kmo[n].init$0();
(this.kmo[n].c = 110);
(this.kmo[n].x = n2);
(this.kmo[n].y = n3);
(this.kmo[n].width = n4);
(this.kmo[n].title[0] = string);
(this.kmo[n].title_color[0] = Color.cyan);
(this.kmo[n].selectedIndex = 0);
(this.kmo[n].item_kazu = 0);
}
initSerifubox$6(n, n2, n3, n4, string, color) {
this.kmo[n].init$0();
(this.kmo[n].c = 110);
(this.kmo[n].x = n2);
(this.kmo[n].y = n3);
(this.kmo[n].width = n4);
(this.kmo[n].title[0] = string);
(this.kmo[n].title_color[0] = color);
(this.kmo[n].selectedIndex = 0);
(this.kmo[n].item_kazu = 0);
}
initDoubleSerifubox$5(n, n2, n3, n4, string) {
this.kmo[n].init$0();
(this.kmo[n].c = 120);
(this.kmo[n].x = n2);
(this.kmo[n].y = n3);
(this.kmo[n].width = n4);
(this.kmo[n].title[0] = string);
(this.kmo[n].selectedIndex = 0);
(this.kmo[n].item_kazu = 0);
}
initOyasumibox$3(n, n2, n3) {
this.kmo[n].init$0();
(this.kmo[n].c = 130);
(this.kmo[n].x = n2);
(this.kmo[n].y = n3);
(this.kmo[n].width = 272);
(this.kmo[n].selectedIndex = 0);
(this.kmo[n].item_kazu = 0);
}
initZukanbox$4(n, n2, n3, n4) {
this.kmo[n].init$0();
(this.kmo[n].c = 140);
(this.kmo[n].x = n2);
(this.kmo[n].y = n3);
(this.kmo[n].width = 120);
(this.kmo[n].item_int[0] = n4);
(this.kmo[n].selectedIndex = 0);
(this.kmo[n].item_kazu = 0);
}
initPetstatusbox$5(n, n2, n3, n4, n5) {
this.kmo[n].init$0();
(this.kmo[n].c = 150);
(this.kmo[n].x = n2);
(this.kmo[n].y = n3);
(this.kmo[n].width = n4);
(this.kmo[n].item_int[0] = n5);
(this.kmo[n].selectedIndex = 0);
(this.kmo[n].item_kazu = 7);
}
initJibunstatusbox$4(n, n2, n3, n4) {
this.kmo[n].init$0();
(this.kmo[n].c = 160);
(this.kmo[n].x = n2);
(this.kmo[n].y = n3);
(this.kmo[n].width = n4);
(this.kmo[n].selectedIndex = 0);
(this.kmo[n].item_kazu = 7);
}
initPetToujyouBox$4(n, n2, n3, n4) {
this.kmo[n].init$0();
(this.kmo[n].c = 170);
(this.kmo[n].x = n2);
(this.kmo[n].y = n3);
(this.kmo[n].item_int[0] = n4);
(this.kmo[n].title[0] = this.mp.co_p[n4].name);
(this.kmo[n].item[0] = "これからもよろしくね！");
(this.kmo[n].width = 152);
(this.kmo[n].selectedIndex = 0);
(this.kmo[n].item_kazu = 0);
}
initPetHikitoriBox$4(n, n2, n3, n4) {
this.kmo[n].init$0();
(this.kmo[n].c = 180);
(this.kmo[n].x = n2);
(this.kmo[n].y = n3);
(this.kmo[n].item_int[0] = n4);
(this.kmo[n].width = 126);
(this.kmo[n].selectedIndex = 0);
(this.kmo[n].item_kazu = 0);
}
initAzuketaPetBox$4(n, n2, n3, n4) {
this.kmo[n].init$0();
(this.kmo[n].c = 190);
(this.kmo[n].x = n2);
(this.kmo[n].y = n3);
(this.kmo[n].width = n4);
(this.kmo[n].item_int[0] = 0);
(this.kmo[n].selectedIndex = 0);
(this.kmo[n].item_kazu = 7);
}
initSelectbox$5(n, n2, n3, n4, string) {
this.kmo[n].init$0();
(this.kmo[n].c = 200);
(this.kmo[n].x = n2);
(this.kmo[n].y = n3);
(this.kmo[n].width = n4);
(this.kmo[n].title[0] = string);
(this.kmo[n].selectedIndex = 0);
(this.kmo[n].item_kazu = 0);
}
initSelectboxSerifu$6(n, n2, n3, n4, string, string2) {
this.kmo[n].init$0();
(this.kmo[n].c = 210);
(this.kmo[n].x = n2);
(this.kmo[n].y = n3);
(this.kmo[n].width = n4);
(this.kmo[n].title[0] = string);
(this.kmo[n].title[1] = string2);
(this.kmo[n].title_color[0] = Color.cyan);
(this.kmo[n].selectedIndex = 0);
(this.kmo[n].item_kazu = 0);
}
initSelectboxSerifu$7(n, n2, n3, n4, string, string2, color) {
this.kmo[n].init$0();
(this.kmo[n].c = 210);
(this.kmo[n].x = n2);
(this.kmo[n].y = n3);
(this.kmo[n].width = n4);
(this.kmo[n].title[0] = string);
(this.kmo[n].title[1] = string2);
(this.kmo[n].title_color[0] = color);
(this.kmo[n].selectedIndex = 0);
(this.kmo[n].item_kazu = 0);
}
initKaimonoSelectbox$5(n, n2, n3, n4, string) {
this.kmo[n].init$0();
(this.kmo[n].c = 220);
(this.kmo[n].x = n2);
(this.kmo[n].y = n3);
(this.kmo[n].width = n4);
(this.kmo[n].title[0] = string);
(this.kmo[n].selectedIndex = 0);
(this.kmo[n].item_kazu = 0);
}
openTimeMessage$5(n, n2, n3, n4, string) {
this.kmo[n].init$0();
(this.kmo[n].c = 300);
(this.kmo[n].x = n2);
(this.kmo[n].y = n3);
(this.kmo[n].width = n4);
(this.kmo[n].item_int[0] = 50);
(this.kmo[n].title[0] = string);
(this.kmo[n].selectedIndex = 0);
(this.kmo[n].item_kazu = 0);
}
initNameinputbox$4(n, n2, n3, string) {
this.kmo[n].init$0();
(this.kmo[n].c = 2000);
(this.kmo[n].x = n2);
(this.kmo[n].y = n3);
(this.kmo[n].width = 208);
(this.kmo[n].title[0] = string);
(this.kmo[n].selectedIndex = 0);
(this.kmo[n].item_kazu = 2);
(this.cursor_x = 0);
(this.cursor_y = 0);
(this.cursor2_x = 0);
var n4 = 0;
while ((n4 <= 4)) {
(this.name_code[n4] = 0);
++n4;
}
}
addItem$2(n, string) {
this.kmo[n].addItem$1(string);
}
addItem$3(n, string, n2) {
this.kmo[n].addItem$2(string, n2);
}
addIntItem$2(n, n2) {
this.kmo[n].addIntItem$1(n2);
}
setTitle$2(n, string) {
(this.kmo[n].title[0] = string);
}
active$1(n) {
(this.aw = n);
(this.fc = -1);
(this.fc2 = -1);
(this.kettei_c = 2);
(this.cancel_c = 2);
(this.kettei2_c = 2);
(this.cancel2_c = 2);
}
off$1(n) {
this.kmo[n].init$0();
}
getSelectedIndex$1(n) {
var n2 = this.kmo[n].selectedIndex;
return n2;
}
getNameString$0() {
var string = "";
var n = 0;
while ((n <= 4)) {
if ((this.name_code[n] > 0)) {
(string = (string + String.fromCharCode(this.moji[this.name_code[n]])));
}
++n;
}
return string;
}
openKaobox$5(n, n2, n3, n4, n5) {
this.kmo[n].init$0();
(this.kmo[n].c = 1000);
(this.kmo[n].x = n2);
(this.kmo[n].y = n3);
(this.kmo[n].width = n4);
(this.kmo[n].item_int[0] = n5);
(this.kmo[n].item_kazu = 0);
}
openOkozukaibox$6(n, n2, n3, n4, string, n5) {
this.kmo[n].init$0();
(this.kmo[n].c = 1010);
(this.kmo[n].x = n2);
(this.kmo[n].y = n3);
(this.kmo[n].width = n4);
(this.kmo[n].item_int[0] = n5);
(this.kmo[n].title[0] = string);
(this.kmo[n].selectedIndex = 0);
(this.kmo[n].item_kazu = 0);
}
openZukanbar$4(n, n2, n3, string) {
this.kmo[n].init$0();
(this.kmo[n].c = 1020);
(this.kmo[n].x = n2);
(this.kmo[n].y = n3);
(this.kmo[n].width = 236);
(this.kmo[n].title[0] = string);
(this.kmo[n].selectedIndex = 0);
(this.kmo[n].item_kazu = 0);
}
openDialgKakuninBox$5(n, n2, n3, n4, string) {
this.kmo[n].init$0();
(this.kmo[n].c = 1030);
(this.kmo[n].x = n2);
(this.kmo[n].y = n3);
(this.kmo[n].width = n4);
(this.kmo[n].title[0] = string);
(this.kmo[n].selectedIndex = 0);
(this.kmo[n].item_kazu = 0);
}
openDialgKakuninBox2$4(n, n2, n3, n4) {
this.kmo[n].init$0();
(this.kmo[n].c = 1040);
(this.kmo[n].x = n2);
(this.kmo[n].y = n3);
(this.kmo[n].width = n4);
(this.kmo[n].selectedIndex = 0);
(this.kmo[n].item_kazu = 0);
}
openWazaZokuseiBox$6(n, n2, n3, n4, string, n5) {
this.kmo[n].init$0();
(this.kmo[n].c = 1050);
(this.kmo[n].x = n2);
(this.kmo[n].y = n3);
(this.kmo[n].width = n4);
(this.kmo[n].title[0] = string);
(this.kmo[n].item_int[10] = n5);
(this.kmo[n].selectedIndex = 0);
(this.kmo[n].item_kazu = 0);
}
openCharacterbox$6(n, n2, n3, n4, n5, string) {
this.kmo[n].init$0();
(this.kmo[n].c = 1100);
(this.kmo[n].x = n2);
(this.kmo[n].y = n3);
(this.kmo[n].width = n4);
(this.kmo[n].item_int[0] = n5);
(this.kmo[n].item_int[1] = 0);
(this.kmo[n].title[0] = string);
(this.kmo[n].item_kazu = 0);
}
openCharacterbox$7(n, n2, n3, n4, n5, string, n6) {
this.kmo[n].init$0();
(this.kmo[n].c = 1100);
(this.kmo[n].x = n2);
(this.kmo[n].y = n3);
(this.kmo[n].width = n4);
(this.kmo[n].item_int[0] = n5);
(this.kmo[n].item_int[1] = n6);
(this.kmo[n].title[0] = string);
(this.kmo[n].item_kazu = 0);
}
move$0() {
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
if ((this.aw >= 0)) {
if ((this.kmo[this.aw].item_kazu <= 1)) {
(this.kmo[this.aw].selectedIndex = 0);
++this.fc;
if ((this.fc > 6)) {
(this.fc = 0);
}
}
else {
if ((this.kmo[this.aw].c == 2000)) {
if (this.gk.down_f) {
++this.gk.down_c;
if ((this.gk.down_c > 3)) {
(this.gk.down_c = 1);
}
(this.gk.up_c = 0);
}
else {
(this.gk.down_c = 0);
if (this.gk.up_f) {
++this.gk.up_c;
if ((this.gk.up_c > 3)) {
(this.gk.up_c = 1);
}
}
else {
(this.gk.up_c = 0);
}
}
if (this.gk.left_f) {
++this.gk.left_c;
if ((this.gk.left_c > 3)) {
(this.gk.left_c = 1);
}
(this.gk.right_c = 0);
}
else {
(this.gk.left_c = 0);
if (this.gk.right_f) {
++this.gk.right_c;
if ((this.gk.right_c > 3)) {
(this.gk.right_c = 1);
}
}
else {
(this.gk.right_c = 0);
}
}
if ((this.gk.up_c == 1)) {
--this.cursor_y;
(this.fc = -1);
if ((this.cursor_y < 0)) {
(this.cursor_y = 6);
}
}
else {
if ((this.gk.down_c == 1)) {
++this.cursor_y;
(this.fc = -1);
if ((this.cursor_y > 6)) {
(this.cursor_y = 0);
}
}
}
if ((this.gk.left_c == 1)) {
--this.cursor_x;
(this.fc = -1);
if ((this.cursor_x < 0)) {
(this.cursor_x = 12);
}
}
else {
if ((this.gk.right_c == 1)) {
++this.cursor_x;
(this.fc = -1);
if (((this.cursor_x == 12) && (this.cursor_y == 5))) {
(this.cursor_x = 0);
}
if (((this.cursor_x == 12) && (this.cursor_y == 6))) {
(this.cursor_x = 0);
}
else {
if ((this.cursor_x > 12)) {
(this.cursor_x = 0);
}
}
}
}
if (((this.cursor_x == 12) && (this.cursor_y == 5))) {
(this.cursor_x = 11);
}
if (((this.cursor_x == 12) && (this.cursor_y == 6))) {
(this.cursor_x = 11);
}
if ((this.kettei_c == 1)) {
(this.kettei_c = 2);
if (((this.cursor_x == 11) && (this.cursor_y == 5))) {
if (((this.cursor2_x == 4) && (this.name_code[this.cursor2_x] != 0))) {
(this.name_code[this.cursor2_x] = 0);
(this.fc = -1);
(this.fc2 = -1);
}
else {
(this.name_code[this.cursor2_x] = 0);
(this.fc = -1);
(this.fc2 = -1);
--this.cursor2_x;
if ((this.cursor2_x < 0)) {
(this.cursor2_x = 0);
(this.cancel2_c = 1);
}
(this.name_code[this.cursor2_x] = 0);
}
}
else {
if (((this.cursor_x == 11) && (this.cursor_y == 6))) {
(this.fc = -1);
(this.fc2 = -1);
(this.kettei2_c = 1);
}
else {
(this.name_code[this.cursor2_x] = this.moji_code_map[this.cursor_x][this.cursor_y]);
++this.cursor2_x;
if ((this.cursor2_x > 4)) {
(this.cursor2_x = 4);
(this.cursor_x = 11);
(this.cursor_y = 6);
(this.fc = -1);
(this.fc2 = -1);
}
}
}
}
if ((this.cancel_c == 1)) {
(this.cancel_c = 2);
if (((this.cursor2_x == 4) && (this.name_code[this.cursor2_x] != 0))) {
(this.name_code[this.cursor2_x] = 0);
(this.fc = -1);
(this.fc2 = -1);
}
else {
(this.name_code[this.cursor2_x] = 0);
(this.fc = -1);
(this.fc2 = -1);
--this.cursor2_x;
if ((this.cursor2_x < 0)) {
(this.cursor2_x = 0);
(this.cancel2_c = 1);
}
(this.name_code[this.cursor2_x] = 0);
}
}
++this.fc;
if ((this.fc > 6)) {
(this.fc = 0);
}
++this.fc2;
if ((this.fc2 > 6)) {
(this.fc2 = 0);
}
if ((this.fc == 6)) {
(this.fc2 = 6);
}
}
else {
if (this.gk.up_f) {
++this.gk.up_c;
if ((this.gk.up_c > 3)) {
(this.gk.up_c = 1);
}
}
else {
(this.gk.up_c = 0);
}
if (this.gk.down_f) {
++this.gk.down_c;
if ((this.gk.down_c > 3)) {
(this.gk.down_c = 1);
}
}
else {
(this.gk.down_c = 0);
}
if ((this.gk.up_c == 1)) {
--this.kmo[this.aw].selectedIndex;
(this.fc = -1);
if ((this.kmo[this.aw].selectedIndex < 0)) {
(this.kmo[this.aw].selectedIndex = ((this.kmo[this.aw].item_kazu - 1) | 0));
}
}
else {
if ((this.gk.down_c == 1)) {
++this.kmo[this.aw].selectedIndex;
(this.fc = -1);
if ((this.kmo[this.aw].selectedIndex > ((this.kmo[this.aw].item_kazu - 1) | 0))) {
(this.kmo[this.aw].selectedIndex = 0);
}
}
}
if (((this.gk.key_code >= 112) && (this.gk.key_code <= 123))) {
var n = ((this.gk.key_code - 112) | 0);
(this.gk.key_code = 0);
if (((n >= 0) && (n <= ((this.kmo[this.aw].item_kazu - 1) | 0)))) {
(this.kmo[this.aw].selectedIndex = n);
(this.fc = -1);
}
}
++this.fc;
if ((this.fc > 6)) {
(this.fc = 0);
}
}
}
}
}
drawMenus$0() {
this.hg.setFont(new Font("Dialog", 0, 12));
var n = 1;
while ((n <= 13)) {
var keyboardMenuObject = this.kmo[n];
switch (keyboardMenuObject.c) {
case 100:
{
var n2 = 0;
this.drawWindowbox$4(keyboardMenuObject.x, keyboardMenuObject.y, keyboardMenuObject.width, ((((((6 + Math.imul(keyboardMenuObject.item_kazu, 14)) | 0) + 14) | 0) + 6) | 0));
this.hg.setColor(this.frontcolor);
if ((keyboardMenuObject.item_kazu >= 1)) {
(n2 = 0);
while ((n2 <= ((keyboardMenuObject.item_kazu - 1) | 0))) {
this.hg.drawString(keyboardMenuObject.item[n2], ((keyboardMenuObject.x + 6) | 0), ((((((keyboardMenuObject.y + 6) | 0) + Math.imul(n2, 14)) | 0) + 12) | 0));
++n2;
}
}
if ((n == this.aw)) {
if ((this.fc > 3)) {
break;
}
this.gg.drawPT$4(((keyboardMenuObject.x + J.div(((keyboardMenuObject.width - 14) | 0), 2)) | 0), ((((((keyboardMenuObject.y + 6) | 0) + Math.imul(keyboardMenuObject.item_kazu, 14)) | 0) + 4) | 0), 71, 0);
break;
}
this.gg.drawPT$4(((keyboardMenuObject.x + J.div(((keyboardMenuObject.width - 14) | 0), 2)) | 0), ((((((keyboardMenuObject.y + 6) | 0) + Math.imul(keyboardMenuObject.item_kazu, 14)) | 0) + 4) | 0), 71, 0);
break;
}
case 110:
{
var n2 = 0;
this.drawWindowbox$4(keyboardMenuObject.x, keyboardMenuObject.y, keyboardMenuObject.width, ((((((24 + Math.imul(keyboardMenuObject.item_kazu, 14)) | 0) + 14) | 0) + 6) | 0));
this.hg.setColor(keyboardMenuObject.title_color[0]);
this.hg.drawString(keyboardMenuObject.title[0], ((keyboardMenuObject.x + 6) | 0), ((((keyboardMenuObject.y + 6) | 0) + 12) | 0));
this.hg.setColor(this.frontcolor);
if ((keyboardMenuObject.item_kazu >= 1)) {
(n2 = 0);
while ((n2 <= ((keyboardMenuObject.item_kazu - 1) | 0))) {
this.hg.drawString(keyboardMenuObject.item[n2], ((keyboardMenuObject.x + 6) | 0), ((((((((keyboardMenuObject.y + 6) | 0) + 18) | 0) + Math.imul(n2, 14)) | 0) + 12) | 0));
++n2;
}
}
if ((n == this.aw)) {
if ((this.fc > 3)) {
break;
}
this.gg.drawPT$4(((keyboardMenuObject.x + J.div(((keyboardMenuObject.width - 14) | 0), 2)) | 0), ((((((((keyboardMenuObject.y + 6) | 0) + 18) | 0) + Math.imul(keyboardMenuObject.item_kazu, 14)) | 0) + 4) | 0), 71, 0);
break;
}
this.gg.drawPT$4(((keyboardMenuObject.x + J.div(((keyboardMenuObject.width - 14) | 0), 2)) | 0), ((((((((keyboardMenuObject.y + 6) | 0) + 18) | 0) + Math.imul(keyboardMenuObject.item_kazu, 14)) | 0) + 4) | 0), 71, 0);
break;
}
case 120:
{
var n2 = 0;
this.drawWindowbox$4(keyboardMenuObject.x, keyboardMenuObject.y, keyboardMenuObject.width, ((((((60 + Math.imul(((keyboardMenuObject.item_kazu - 2) | 0), 14)) | 0) + 14) | 0) + 6) | 0));
this.hg.setColor(Color.cyan);
this.hg.drawString(keyboardMenuObject.title[0], ((keyboardMenuObject.x + 6) | 0), ((((keyboardMenuObject.y + 6) | 0) + 12) | 0));
this.hg.setColor(this.frontcolor);
this.hg.drawString(keyboardMenuObject.item[0], ((keyboardMenuObject.x + 6) | 0), ((((((((keyboardMenuObject.y + 6) | 0) + 18) | 0) + 0) | 0) + 12) | 0));
this.hg.setColor(Color.cyan);
this.hg.drawString(keyboardMenuObject.item[1], ((keyboardMenuObject.x + 6) | 0), ((((((((keyboardMenuObject.y + 6) | 0) + 18) | 0) + 18) | 0) + 12) | 0));
this.hg.setColor(this.frontcolor);
if ((keyboardMenuObject.item_kazu >= 3)) {
(n2 = 2);
while ((n2 <= ((keyboardMenuObject.item_kazu - 1) | 0))) {
this.hg.drawString(keyboardMenuObject.item[n2], ((keyboardMenuObject.x + 6) | 0), ((((((((((keyboardMenuObject.y + 6) | 0) + 18) | 0) + 36) | 0) + Math.imul(((n2 - 2) | 0), 14)) | 0) + 12) | 0));
++n2;
}
}
if ((n == this.aw)) {
if ((this.fc > 3)) {
break;
}
this.gg.drawPT$4(((keyboardMenuObject.x + J.div(((keyboardMenuObject.width - 14) | 0), 2)) | 0), ((((((((((keyboardMenuObject.y + 6) | 0) + 18) | 0) + 36) | 0) + Math.imul(((keyboardMenuObject.item_kazu - 2) | 0), 14)) | 0) + 4) | 0), 71, 0);
break;
}
this.gg.drawPT$4(((keyboardMenuObject.x + J.div(((keyboardMenuObject.width - 14) | 0), 2)) | 0), ((((((((keyboardMenuObject.y + 6) | 0) + 18) | 0) + Math.imul(keyboardMenuObject.item_kazu, 14)) | 0) + 4) | 0), 71, 0);
break;
}
case 130:
{
this.drawWindowbox$4(keyboardMenuObject.x, keyboardMenuObject.y, keyboardMenuObject.width, 96);
this.hg.setColor(new Color(96, 96, 96));
this.hg.fillRect(((keyboardMenuObject.x + 10) | 0), ((((keyboardMenuObject.y + 6) | 0) + 4) | 0), ((keyboardMenuObject.width - 20) | 0), 48);
var n2 = 0;
while ((n2 <= 5)) {
if ((keyboardMenuObject.item_int[n2] > 0)) {
this.gg.drawPT$4(((((((keyboardMenuObject.x + 12) | 0) + 8) | 0) + Math.imul(n2, 40)) | 0), ((((((keyboardMenuObject.y + 6) | 0) + 4) | 0) + 8) | 0), keyboardMenuObject.item_int[n2], 0);
}
++n2;
}
this.hg.setColor(this.frontcolor);
this.hg.drawString("みんな元気になった。", ((keyboardMenuObject.x + 10) | 0), ((((((((keyboardMenuObject.y + 6) | 0) + 12) | 0) + 48) | 0) + 8) | 0));
if ((n == this.aw)) {
if ((this.fc > 3)) {
break;
}
this.gg.drawPT$4(((keyboardMenuObject.x + J.div(((keyboardMenuObject.width - 14) | 0), 2)) | 0), ((((((((((keyboardMenuObject.y + 6) | 0) + 48) | 0) + 8) | 0) + 14) | 0) + 4) | 0), 71, 0);
break;
}
this.gg.drawPT$4(((keyboardMenuObject.x + J.div(((keyboardMenuObject.width - 14) | 0), 2)) | 0), ((((((((((keyboardMenuObject.y + 6) | 0) + 48) | 0) + 8) | 0) + 14) | 0) + 4) | 0), 71, 0);
break;
}
case 140:
{
var monsterObject = null;
if (this.mp.ig.zukan_tukamaeta_f[((J.div(keyboardMenuObject.item_int[0], 100) - 10) | 0)]) {
this.drawWindowbox$4(keyboardMenuObject.x, keyboardMenuObject.y, keyboardMenuObject.width, 174);
this.hg.setColor(new Color(96, 96, 96));
this.hg.fillRect(((keyboardMenuObject.x + 10) | 0), ((((keyboardMenuObject.y + 6) | 0) + 4) | 0), ((keyboardMenuObject.width - 20) | 0), 48);
(monsterObject = new MonsterObject());
monsterObject.initSyurui$2(keyboardMenuObject.item_int[0], this.mp);
this.gg.drawPT$4(((keyboardMenuObject.x + J.div(((keyboardMenuObject.width - 32) | 0), 2)) | 0), ((((((keyboardMenuObject.y + 6) | 0) + 4) | 0) + 8) | 0), monsterObject.spt[0], 0);
this.hg.setColor(Color.yellow);
this.hg.drawString(monsterObject.name, ((keyboardMenuObject.x + 10) | 0), ((((((((keyboardMenuObject.y + 6) | 0) + 12) | 0) + 48) | 0) + 8) | 0));
this.hg.setColor(this.frontcolor);
this.hg.drawString("最大HP", ((keyboardMenuObject.x + 10) | 0), ((((((((((((keyboardMenuObject.y + 6) | 0) + 12) | 0) + 48) | 0) + 8) | 0) + 18) | 0) + 0) | 0));
this.hg.drawString(("" + monsterObject.hp_max), ((((keyboardMenuObject.x + 10) | 0) + 66) | 0), ((((((((((((keyboardMenuObject.y + 6) | 0) + 12) | 0) + 48) | 0) + 8) | 0) + 18) | 0) + 0) | 0));
this.hg.drawString("最大PP", ((keyboardMenuObject.x + 10) | 0), ((((((((((((keyboardMenuObject.y + 6) | 0) + 12) | 0) + 48) | 0) + 8) | 0) + 18) | 0) + 14) | 0));
this.hg.drawString(("" + monsterObject.pp_max), ((((keyboardMenuObject.x + 10) | 0) + 66) | 0), ((((((((((((keyboardMenuObject.y + 6) | 0) + 12) | 0) + 48) | 0) + 8) | 0) + 18) | 0) + 14) | 0));
this.hg.setColor(this.frontcolor);
this.hg.drawString("タイプ", ((keyboardMenuObject.x + 10) | 0), ((((((((((((((keyboardMenuObject.y + 6) | 0) + 12) | 0) + 48) | 0) + 8) | 0) + 18) | 0) + 4) | 0) + 28) | 0));
this.hg.setColor(Color.cyan);
if ((this.mp.zokusei_name[monsterObject.zokusei].length <= 2)) {
this.hg.drawString(this.mp.zokusei_name[monsterObject.zokusei], ((((keyboardMenuObject.x + 10) | 0) + 66) | 0), ((((((((((((((keyboardMenuObject.y + 6) | 0) + 12) | 0) + 48) | 0) + 8) | 0) + 18) | 0) + 4) | 0) + 28) | 0));
}
else {
this.hg.drawString(this.mp.zokusei_name[monsterObject.zokusei], ((((keyboardMenuObject.x + 10) | 0) + 50) | 0), ((((((((((((((keyboardMenuObject.y + 6) | 0) + 12) | 0) + 48) | 0) + 8) | 0) + 18) | 0) + 4) | 0) + 28) | 0));
}
this.hg.setColor(this.frontcolor);
this.hg.drawString("攻撃力", ((keyboardMenuObject.x + 10) | 0), ((((((((((((((keyboardMenuObject.y + 6) | 0) + 12) | 0) + 48) | 0) + 8) | 0) + 18) | 0) + 4) | 0) + 42) | 0));
this.hg.drawString(("" + monsterObject.ap), ((((keyboardMenuObject.x + 10) | 0) + 66) | 0), ((((((((((((((keyboardMenuObject.y + 6) | 0) + 12) | 0) + 48) | 0) + 8) | 0) + 18) | 0) + 4) | 0) + 42) | 0));
this.hg.drawString("防御力", ((keyboardMenuObject.x + 10) | 0), ((((((((((((((keyboardMenuObject.y + 6) | 0) + 12) | 0) + 48) | 0) + 8) | 0) + 18) | 0) + 4) | 0) + 56) | 0));
this.hg.drawString(("" + monsterObject.dp), ((((keyboardMenuObject.x + 10) | 0) + 66) | 0), ((((((((((((((keyboardMenuObject.y + 6) | 0) + 12) | 0) + 48) | 0) + 8) | 0) + 18) | 0) + 4) | 0) + 56) | 0));
if (((n == this.aw) && (this.fc > 3))) {
break;
}
this.gg.drawPT$4(((keyboardMenuObject.x + J.div(((keyboardMenuObject.width - 14) | 0), 2)) | 0), ((((((((((((((keyboardMenuObject.y + 6) | 0) + 48) | 0) + 8) | 0) + 18) | 0) + 4) | 0) + 4) | 0) + 70) | 0), 71, 0);
break;
}
this.drawWindowbox$4(keyboardMenuObject.x, keyboardMenuObject.y, keyboardMenuObject.width, 114);
this.hg.setColor(new Color(96, 96, 96));
this.hg.fillRect(((keyboardMenuObject.x + 10) | 0), ((((keyboardMenuObject.y + 6) | 0) + 4) | 0), ((keyboardMenuObject.width - 20) | 0), 48);
(monsterObject = new MonsterObject());
monsterObject.initSyurui$2(keyboardMenuObject.item_int[0], this.mp);
this.gg.drawPT$4(((keyboardMenuObject.x + J.div(((keyboardMenuObject.width - 32) | 0), 2)) | 0), ((((((keyboardMenuObject.y + 6) | 0) + 4) | 0) + 8) | 0), monsterObject.spt[0], 0);
this.hg.setColor(Color.yellow);
this.hg.drawString(monsterObject.name, ((keyboardMenuObject.x + 10) | 0), ((((((((keyboardMenuObject.y + 6) | 0) + 12) | 0) + 48) | 0) + 8) | 0));
this.hg.setColor(this.frontcolor);
this.hg.drawString("現在調査中", ((keyboardMenuObject.x + 10) | 0), ((((((((((((keyboardMenuObject.y + 6) | 0) + 12) | 0) + 48) | 0) + 8) | 0) + 18) | 0) + 0) | 0));
if (((n == this.aw) && (this.fc > 3))) {
break;
}
this.gg.drawPT$4(((keyboardMenuObject.x + J.div(((keyboardMenuObject.width - 14) | 0), 2)) | 0), ((((((((((((((keyboardMenuObject.y + 6) | 0) + 48) | 0) + 8) | 0) + 14) | 0) + 4) | 0) + 4) | 0) + 14) | 0), 71, 0);
break;
}
case 150:
{
this.drawWindowbox$4(keyboardMenuObject.x, keyboardMenuObject.y, keyboardMenuObject.width, ((((((24 + Math.imul(keyboardMenuObject.item_kazu, 14)) | 0) + 14) | 0) + 6) | 0));
var monsterObject = this.mp.co_p[keyboardMenuObject.item_int[0]];
this.hg.setColor(Color.yellow);
this.hg.drawString(monsterObject.name, ((keyboardMenuObject.x + 6) | 0), ((((keyboardMenuObject.y + 6) | 0) + 12) | 0));
if ((monsterObject.seibetu == 1)) {
this.hg.setColor(Color.magenta);
this.hg.drawString("♀", ((((keyboardMenuObject.x + 6) | 0) + 64) | 0), ((((keyboardMenuObject.y + 6) | 0) + 12) | 0));
}
else {
this.hg.setColor(Color.blue);
this.hg.drawString("♂", ((((keyboardMenuObject.x + 6) | 0) + 64) | 0), ((((keyboardMenuObject.y + 6) | 0) + 12) | 0));
}
this.hg.setColor(this.frontcolor);
this.hg.drawString(((("HP  " + monsterObject.hp) + " / ") + monsterObject.hp_max), ((keyboardMenuObject.x + 6) | 0), ((((((((keyboardMenuObject.y + 6) | 0) + 18) | 0) + 0) | 0) + 12) | 0));
this.hg.drawString(((("PP  " + monsterObject.pp) + " / ") + monsterObject.pp_max), ((keyboardMenuObject.x + 6) | 0), ((((((((keyboardMenuObject.y + 6) | 0) + 18) | 0) + 14) | 0) + 12) | 0));
this.hg.drawString("タイプ", ((keyboardMenuObject.x + 6) | 0), ((((((((keyboardMenuObject.y + 6) | 0) + 18) | 0) + 28) | 0) + 12) | 0));
this.hg.drawString(this.mp.zokusei_name[monsterObject.zokusei], ((((keyboardMenuObject.x + 6) | 0) + 64) | 0), ((((((((keyboardMenuObject.y + 6) | 0) + 18) | 0) + 28) | 0) + 12) | 0));
this.hg.drawString("親のＩＤ", ((keyboardMenuObject.x + 6) | 0), ((((((((keyboardMenuObject.y + 6) | 0) + 18) | 0) + 42) | 0) + 12) | 0));
this.hg.drawString(("" + monsterObject.id), ((((keyboardMenuObject.x + 6) | 0) + 64) | 0), ((((((((keyboardMenuObject.y + 6) | 0) + 18) | 0) + 42) | 0) + 12) | 0));
this.hg.drawString("レベル", ((keyboardMenuObject.x + 6) | 0), ((((((((keyboardMenuObject.y + 6) | 0) + 18) | 0) + 56) | 0) + 12) | 0));
if ((monsterObject.level >= 5)) {
this.hg.drawString("最大", ((((keyboardMenuObject.x + 6) | 0) + 64) | 0), ((((((((keyboardMenuObject.y + 6) | 0) + 18) | 0) + 56) | 0) + 12) | 0));
}
else {
this.hg.drawString(("" + monsterObject.level), ((((keyboardMenuObject.x + 6) | 0) + 64) | 0), ((((((((keyboardMenuObject.y + 6) | 0) + 18) | 0) + 56) | 0) + 12) | 0));
}
this.hg.drawString("攻撃力", ((keyboardMenuObject.x + 6) | 0), ((((((((keyboardMenuObject.y + 6) | 0) + 18) | 0) + 70) | 0) + 12) | 0));
this.hg.drawString(("" + monsterObject.ap), ((((keyboardMenuObject.x + 6) | 0) + 64) | 0), ((((((((keyboardMenuObject.y + 6) | 0) + 18) | 0) + 70) | 0) + 12) | 0));
this.hg.drawString("防御力", ((keyboardMenuObject.x + 6) | 0), ((((((((keyboardMenuObject.y + 6) | 0) + 18) | 0) + 84) | 0) + 12) | 0));
this.hg.drawString(("" + monsterObject.dp), ((((keyboardMenuObject.x + 6) | 0) + 64) | 0), ((((((((keyboardMenuObject.y + 6) | 0) + 18) | 0) + 84) | 0) + 12) | 0));
if ((n == this.aw)) {
if ((this.fc > 3)) {
break;
}
this.gg.drawPT$4(((keyboardMenuObject.x + J.div(((keyboardMenuObject.width - 14) | 0), 2)) | 0), ((((((((keyboardMenuObject.y + 6) | 0) + 18) | 0) + Math.imul(keyboardMenuObject.item_kazu, 14)) | 0) + 4) | 0), 71, 0);
break;
}
this.gg.drawPT$4(((keyboardMenuObject.x + J.div(((keyboardMenuObject.width - 14) | 0), 2)) | 0), ((((((((keyboardMenuObject.y + 6) | 0) + 18) | 0) + Math.imul(keyboardMenuObject.item_kazu, 14)) | 0) + 4) | 0), 71, 0);
break;
}
case 160:
{
this.drawWindowbox$4(keyboardMenuObject.x, keyboardMenuObject.y, keyboardMenuObject.width, ((((((24 + Math.imul(keyboardMenuObject.item_kazu, 14)) | 0) + 14) | 0) + 6) | 0));
var monsterObject = this.mp.co_j;
this.hg.setColor(Color.yellow);
this.hg.drawString(monsterObject.name, ((keyboardMenuObject.x + 6) | 0), ((((keyboardMenuObject.y + 6) | 0) + 12) | 0));
if ((monsterObject.seibetu == 1)) {
this.hg.setColor(Color.magenta);
this.hg.drawString("♀", ((((keyboardMenuObject.x + 6) | 0) + 64) | 0), ((((keyboardMenuObject.y + 6) | 0) + 12) | 0));
}
else {
this.hg.setColor(Color.blue);
this.hg.drawString("♂", ((((keyboardMenuObject.x + 6) | 0) + 64) | 0), ((((keyboardMenuObject.y + 6) | 0) + 12) | 0));
}
this.hg.setColor(this.frontcolor);
this.hg.drawString(((("HP  " + monsterObject.hp) + " / ") + monsterObject.hp_max), ((keyboardMenuObject.x + 6) | 0), ((((((((keyboardMenuObject.y + 6) | 0) + 18) | 0) + 0) | 0) + 12) | 0));
this.hg.drawString("タイプ", ((keyboardMenuObject.x + 6) | 0), ((((((((keyboardMenuObject.y + 6) | 0) + 18) | 0) + 14) | 0) + 12) | 0));
this.hg.drawString(this.mp.zokusei_name[monsterObject.zokusei], ((((keyboardMenuObject.x + 6) | 0) + 64) | 0), ((((((((keyboardMenuObject.y + 6) | 0) + 18) | 0) + 14) | 0) + 12) | 0));
this.hg.drawString("ＩＤ", ((keyboardMenuObject.x + 6) | 0), ((((((((keyboardMenuObject.y + 6) | 0) + 18) | 0) + 28) | 0) + 12) | 0));
this.hg.drawString(("" + monsterObject.id), ((((keyboardMenuObject.x + 6) | 0) + 64) | 0), ((((((((keyboardMenuObject.y + 6) | 0) + 18) | 0) + 28) | 0) + 12) | 0));
this.hg.drawString("おこづかい", ((keyboardMenuObject.x + 6) | 0), ((((((((keyboardMenuObject.y + 6) | 0) + 18) | 0) + 42) | 0) + 12) | 0));
this.hg.drawString((("" + this.mp.j_okozukai) + "円"), ((((keyboardMenuObject.x + 6) | 0) + 64) | 0), ((((((((keyboardMenuObject.y + 6) | 0) + 18) | 0) + 56) | 0) + 12) | 0));
this.hg.drawString("得点", ((keyboardMenuObject.x + 6) | 0), ((((((((keyboardMenuObject.y + 6) | 0) + 18) | 0) + 70) | 0) + 12) | 0));
this.hg.drawString((("" + this.mp.score) + "点"), ((((keyboardMenuObject.x + 6) | 0) + 64) | 0), ((((((((keyboardMenuObject.y + 6) | 0) + 18) | 0) + 84) | 0) + 12) | 0));
if ((n == this.aw)) {
if ((this.fc > 3)) {
break;
}
this.gg.drawPT$4(((keyboardMenuObject.x + J.div(((keyboardMenuObject.width - 14) | 0), 2)) | 0), ((((((((keyboardMenuObject.y + 6) | 0) + 18) | 0) + Math.imul(keyboardMenuObject.item_kazu, 14)) | 0) + 4) | 0), 71, 0);
break;
}
this.gg.drawPT$4(((keyboardMenuObject.x + J.div(((keyboardMenuObject.width - 14) | 0), 2)) | 0), ((((((((keyboardMenuObject.y + 6) | 0) + 18) | 0) + Math.imul(keyboardMenuObject.item_kazu, 14)) | 0) + 4) | 0), 71, 0);
break;
}
case 170:
{
this.drawWindowbox$4(keyboardMenuObject.x, keyboardMenuObject.y, keyboardMenuObject.width, 114);
this.hg.setColor(new Color(96, 96, 96));
this.hg.fillRect(((keyboardMenuObject.x + 10) | 0), ((((keyboardMenuObject.y + 6) | 0) + 4) | 0), ((keyboardMenuObject.width - 20) | 0), 48);
this.gg.drawPT$4(((keyboardMenuObject.x + J.div(((keyboardMenuObject.width - 32) | 0), 2)) | 0), ((((((keyboardMenuObject.y + 6) | 0) + 4) | 0) + 8) | 0), this.mp.co_p[keyboardMenuObject.item_int[0]].spt[0], 0);
this.hg.setColor(Color.cyan);
this.hg.drawString(keyboardMenuObject.title[0], ((keyboardMenuObject.x + 10) | 0), ((((((((keyboardMenuObject.y + 6) | 0) + 12) | 0) + 48) | 0) + 8) | 0));
this.hg.setColor(this.frontcolor);
this.hg.drawString(keyboardMenuObject.item[0], ((keyboardMenuObject.x + 10) | 0), ((((((((((keyboardMenuObject.y + 6) | 0) + 12) | 0) + 48) | 0) + 8) | 0) + 18) | 0));
if ((n == this.aw)) {
if ((this.fc > 3)) {
break;
}
this.gg.drawPT$4(((keyboardMenuObject.x + J.div(((keyboardMenuObject.width - 14) | 0), 2)) | 0), ((((((((((((keyboardMenuObject.y + 6) | 0) + 48) | 0) + 8) | 0) + 14) | 0) + 4) | 0) + 18) | 0), 71, 0);
break;
}
this.gg.drawPT$4(((keyboardMenuObject.x + J.div(((keyboardMenuObject.width - 14) | 0), 2)) | 0), ((((((((((((keyboardMenuObject.y + 6) | 0) + 48) | 0) + 8) | 0) + 14) | 0) + 4) | 0) + 18) | 0), 71, 0);
break;
}
case 180:
{
this.drawWindowbox$4(keyboardMenuObject.x, keyboardMenuObject.y, keyboardMenuObject.width, 114);
this.hg.setColor(new Color(96, 96, 96));
this.hg.fillRect(((keyboardMenuObject.x + 10) | 0), ((((keyboardMenuObject.y + 6) | 0) + 4) | 0), ((keyboardMenuObject.width - 20) | 0), 48);
this.gg.drawPT$4(((keyboardMenuObject.x + J.div(((keyboardMenuObject.width - 32) | 0), 2)) | 0), ((((((keyboardMenuObject.y + 6) | 0) + 4) | 0) + 8) | 0), this.mp.co_p[keyboardMenuObject.item_int[0]].spt[0], 0);
this.hg.setColor(Color.cyan);
this.hg.drawString(this.mp.co_p[keyboardMenuObject.item_int[0]].name, ((keyboardMenuObject.x + 10) | 0), ((((((((keyboardMenuObject.y + 6) | 0) + 12) | 0) + 48) | 0) + 8) | 0));
this.hg.setColor(this.frontcolor);
if ((this.mp.co_p[keyboardMenuObject.item_int[0]].seibetu == 1)) {
this.hg.drawString("がんばります！", ((keyboardMenuObject.x + 10) | 0), ((((((((((keyboardMenuObject.y + 6) | 0) + 12) | 0) + 48) | 0) + 8) | 0) + 18) | 0));
}
else {
this.hg.drawString("がんばるぞ！", ((keyboardMenuObject.x + 10) | 0), ((((((((((keyboardMenuObject.y + 6) | 0) + 12) | 0) + 48) | 0) + 8) | 0) + 18) | 0));
}
if ((n == this.aw)) {
if ((this.fc > 3)) {
break;
}
this.gg.drawPT$4(((keyboardMenuObject.x + J.div(((keyboardMenuObject.width - 14) | 0), 2)) | 0), ((((((((((((keyboardMenuObject.y + 6) | 0) + 48) | 0) + 8) | 0) + 14) | 0) + 4) | 0) + 18) | 0), 71, 0);
break;
}
this.gg.drawPT$4(((keyboardMenuObject.x + J.div(((keyboardMenuObject.width - 14) | 0), 2)) | 0), ((((((((((((keyboardMenuObject.y + 6) | 0) + 48) | 0) + 8) | 0) + 14) | 0) + 4) | 0) + 18) | 0), 71, 0);
break;
}
case 190:
{
var bl = false;
if (((((this.mp.co_sodateya[0].syurui >= 1100) && (this.mp.co_sodateya[1].syurui >= 1100)) && (this.mp.co_sodateya[0].seibetu != this.mp.co_sodateya[1].seibetu)) && (this.mp.co_sodateya[0].type == this.mp.co_sodateya[1].type))) {
(bl = true);
}
if ((this.mp.co_sodateya[1].syurui >= 1100)) {
if (bl) {
this.drawWindowbox$4(keyboardMenuObject.x, keyboardMenuObject.y, keyboardMenuObject.width, 122);
}
else {
this.drawWindowbox$4(keyboardMenuObject.x, keyboardMenuObject.y, keyboardMenuObject.width, 104);
}
}
else {
this.drawWindowbox$4(keyboardMenuObject.x, keyboardMenuObject.y, keyboardMenuObject.width, 72);
}
var monsterObject = this.mp.co_p[keyboardMenuObject.item_int[0]];
this.hg.setColor(Color.yellow);
this.hg.drawString("あずけたモンスター", ((keyboardMenuObject.x + 6) | 0), ((((keyboardMenuObject.y + 6) | 0) + 12) | 0));
(monsterObject = this.mp.co_sodateya[0]);
this.hg.setColor(Color.cyan);
this.hg.drawString(monsterObject.name, ((keyboardMenuObject.x + 6) | 0), ((((((keyboardMenuObject.y + 6) | 0) + 12) | 0) + 18) | 0));
if ((monsterObject.seibetu == 1)) {
this.hg.setColor(Color.magenta);
this.hg.drawString("♀", ((((keyboardMenuObject.x + 6) | 0) + 64) | 0), ((((((keyboardMenuObject.y + 6) | 0) + 12) | 0) + 18) | 0));
}
else {
this.hg.setColor(Color.blue);
this.hg.drawString("♂", ((((keyboardMenuObject.x + 6) | 0) + 64) | 0), ((((((keyboardMenuObject.y + 6) | 0) + 12) | 0) + 18) | 0));
}
this.hg.setColor(this.frontcolor);
this.hg.drawString("レベル", ((keyboardMenuObject.x + 6) | 0), ((((((((keyboardMenuObject.y + 6) | 0) + 12) | 0) + 18) | 0) + 14) | 0));
if ((monsterObject.level >= 5)) {
this.hg.drawString("最大", ((((keyboardMenuObject.x + 6) | 0) + 64) | 0), ((((((((keyboardMenuObject.y + 6) | 0) + 12) | 0) + 18) | 0) + 14) | 0));
}
else {
this.hg.drawString(("" + monsterObject.level), ((((keyboardMenuObject.x + 6) | 0) + 64) | 0), ((((((((keyboardMenuObject.y + 6) | 0) + 12) | 0) + 18) | 0) + 14) | 0));
}
(monsterObject = this.mp.co_sodateya[1]);
if ((monsterObject.syurui >= 1100)) {
this.hg.setColor(Color.cyan);
this.hg.drawString(monsterObject.name, ((keyboardMenuObject.x + 6) | 0), ((((((((((keyboardMenuObject.y + 6) | 0) + 12) | 0) + 18) | 0) + 14) | 0) + 18) | 0));
if ((monsterObject.seibetu == 1)) {
this.hg.setColor(Color.magenta);
this.hg.drawString("♀", ((((keyboardMenuObject.x + 6) | 0) + 64) | 0), ((((((((((keyboardMenuObject.y + 6) | 0) + 12) | 0) + 18) | 0) + 14) | 0) + 18) | 0));
}
else {
this.hg.setColor(Color.blue);
this.hg.drawString("♂", ((((keyboardMenuObject.x + 6) | 0) + 64) | 0), ((((((((((keyboardMenuObject.y + 6) | 0) + 12) | 0) + 18) | 0) + 14) | 0) + 18) | 0));
}
this.hg.setColor(this.frontcolor);
this.hg.drawString("レベル", ((keyboardMenuObject.x + 6) | 0), ((((((((((((keyboardMenuObject.y + 6) | 0) + 12) | 0) + 18) | 0) + 14) | 0) + 18) | 0) + 14) | 0));
if ((monsterObject.level >= 5)) {
this.hg.drawString("最大", ((((keyboardMenuObject.x + 6) | 0) + 64) | 0), ((((((((((((keyboardMenuObject.y + 6) | 0) + 12) | 0) + 18) | 0) + 14) | 0) + 18) | 0) + 14) | 0));
}
else {
this.hg.drawString(("" + monsterObject.level), ((((keyboardMenuObject.x + 6) | 0) + 64) | 0), ((((((((((((keyboardMenuObject.y + 6) | 0) + 12) | 0) + 18) | 0) + 14) | 0) + 18) | 0) + 14) | 0));
}
}
if (bl) {
this.hg.drawString("２匹は仲が良い", ((keyboardMenuObject.x + 6) | 0), ((((((((((((((keyboardMenuObject.y + 6) | 0) + 12) | 0) + 18) | 0) + 14) | 0) + 18) | 0) + 14) | 0) + 18) | 0));
}
if ((this.fc > 3)) {
break;
}
if ((this.mp.co_sodateya[1].syurui >= 1100)) {
if (bl) {
this.gg.drawPT$4(((keyboardMenuObject.x + J.div(((keyboardMenuObject.width - 14) | 0), 2)) | 0), ((((((((((keyboardMenuObject.y + 6) | 0) + 18) | 0) + 56) | 0) + 8) | 0) + 18) | 0), 71, 0);
break;
}
this.gg.drawPT$4(((keyboardMenuObject.x + J.div(((keyboardMenuObject.width - 14) | 0), 2)) | 0), ((((((((keyboardMenuObject.y + 6) | 0) + 18) | 0) + 56) | 0) + 8) | 0), 71, 0);
break;
}
this.gg.drawPT$4(((keyboardMenuObject.x + J.div(((keyboardMenuObject.width - 14) | 0), 2)) | 0), ((((((((keyboardMenuObject.y + 6) | 0) + 18) | 0) + 28) | 0) + 4) | 0), 71, 0);
break;
}
case 200:
{
var n2 = 0;
this.drawWindowbox$4(keyboardMenuObject.x, keyboardMenuObject.y, keyboardMenuObject.width, ((((24 + Math.imul(keyboardMenuObject.item_kazu, 14)) | 0) + 6) | 0));
this.hg.setColor(this.frontcolor);
this.hg.drawString(keyboardMenuObject.title[0], ((keyboardMenuObject.x + 24) | 0), ((((keyboardMenuObject.y + 6) | 0) + 12) | 0));
if ((keyboardMenuObject.item_kazu >= 1)) {
(n2 = 0);
while ((n2 <= ((keyboardMenuObject.item_kazu - 1) | 0))) {
this.hg.drawString(keyboardMenuObject.item[n2], ((keyboardMenuObject.x + 24) | 0), ((((((((keyboardMenuObject.y + 6) | 0) + 18) | 0) + Math.imul(n2, 14)) | 0) + 12) | 0));
++n2;
}
}
if ((n == this.aw)) {
if ((this.fc > 3)) {
break;
}
this.gg.drawPT$4(((keyboardMenuObject.x + 6) | 0), ((((((((keyboardMenuObject.y + 6) | 0) + 18) | 0) + Math.imul(keyboardMenuObject.selectedIndex, 14)) | 0) + 1) | 0), 70, 0);
break;
}
this.gg.drawPT$4(((keyboardMenuObject.x + 6) | 0), ((((((((keyboardMenuObject.y + 6) | 0) + 18) | 0) + Math.imul(keyboardMenuObject.selectedIndex, 14)) | 0) + 1) | 0), 70, 0);
break;
}
case 210:
{
var n2 = 0;
this.drawWindowbox$4(keyboardMenuObject.x, keyboardMenuObject.y, keyboardMenuObject.width, ((((((24 + Math.imul(keyboardMenuObject.item_kazu, 14)) | 0) + 6) | 0) + 18) | 0));
this.hg.setColor(keyboardMenuObject.title_color[0]);
this.hg.drawString(keyboardMenuObject.title[0], ((keyboardMenuObject.x + 24) | 0), ((((keyboardMenuObject.y + 6) | 0) + 12) | 0));
this.hg.setColor(this.frontcolor);
this.hg.drawString(keyboardMenuObject.title[1], ((keyboardMenuObject.x + 24) | 0), ((((((keyboardMenuObject.y + 6) | 0) + 12) | 0) + 18) | 0));
if ((keyboardMenuObject.item_kazu >= 1)) {
(n2 = 0);
while ((n2 <= ((keyboardMenuObject.item_kazu - 1) | 0))) {
this.hg.drawString(keyboardMenuObject.item[n2], ((keyboardMenuObject.x + 24) | 0), ((((((((((keyboardMenuObject.y + 6) | 0) + 18) | 0) + 18) | 0) + Math.imul(n2, 14)) | 0) + 12) | 0));
++n2;
}
}
if ((n == this.aw)) {
if ((this.fc > 3)) {
break;
}
this.gg.drawPT$4(((keyboardMenuObject.x + 6) | 0), ((((((((((keyboardMenuObject.y + 6) | 0) + 18) | 0) + Math.imul(keyboardMenuObject.selectedIndex, 14)) | 0) + 1) | 0) + 18) | 0), 70, 0);
break;
}
this.gg.drawPT$4(((keyboardMenuObject.x + 6) | 0), ((((((((((keyboardMenuObject.y + 6) | 0) + 18) | 0) + Math.imul(keyboardMenuObject.selectedIndex, 14)) | 0) + 1) | 0) + 18) | 0), 70, 0);
break;
}
case 220:
{
var n2 = 0;
this.drawWindowbox$4(keyboardMenuObject.x, keyboardMenuObject.y, keyboardMenuObject.width, ((((24 + Math.imul(keyboardMenuObject.item_kazu, 14)) | 0) + 6) | 0));
this.hg.setColor(this.frontcolor);
this.hg.drawString(keyboardMenuObject.title[0], ((keyboardMenuObject.x + 24) | 0), ((((keyboardMenuObject.y + 6) | 0) + 12) | 0));
if ((keyboardMenuObject.item_kazu >= 1)) {
(n2 = 0);
while ((n2 <= ((keyboardMenuObject.item_kazu - 1) | 0))) {
this.hg.drawString(keyboardMenuObject.item[n2], ((keyboardMenuObject.x + 24) | 0), ((((((((keyboardMenuObject.y + 6) | 0) + 18) | 0) + Math.imul(n2, 14)) | 0) + 12) | 0));
this.hg.drawString((("" + keyboardMenuObject.item_int[n2]) + "円"), ((((keyboardMenuObject.x + 24) | 0) + 104) | 0), ((((((((keyboardMenuObject.y + 6) | 0) + 18) | 0) + Math.imul(n2, 14)) | 0) + 12) | 0));
++n2;
}
}
if ((n == this.aw)) {
if ((this.fc > 3)) {
break;
}
this.gg.drawPT$4(((keyboardMenuObject.x + 6) | 0), ((((((((keyboardMenuObject.y + 6) | 0) + 18) | 0) + Math.imul(keyboardMenuObject.selectedIndex, 14)) | 0) + 1) | 0), 70, 0);
break;
}
this.gg.drawPT$4(((keyboardMenuObject.x + 6) | 0), ((((((((keyboardMenuObject.y + 6) | 0) + 18) | 0) + Math.imul(keyboardMenuObject.selectedIndex, 14)) | 0) + 1) | 0), 70, 0);
break;
}
case 300:
{
var n2 = 0;
this.drawWindowbox$4(keyboardMenuObject.x, keyboardMenuObject.y, keyboardMenuObject.width, ((((24 + Math.imul(keyboardMenuObject.item_kazu, 14)) | 0) + 6) | 0));
this.hg.setColor(Color.cyan);
this.hg.drawString(keyboardMenuObject.title[0], ((keyboardMenuObject.x + 6) | 0), ((((keyboardMenuObject.y + 6) | 0) + 12) | 0));
this.hg.setColor(this.frontcolor);
if ((keyboardMenuObject.item_kazu >= 1)) {
(n2 = 0);
while ((n2 <= ((keyboardMenuObject.item_kazu - 1) | 0))) {
this.hg.drawString(keyboardMenuObject.item[n2], ((keyboardMenuObject.x + 6) | 0), ((((((((keyboardMenuObject.y + 6) | 0) + 18) | 0) + Math.imul(n2, 14)) | 0) + 12) | 0));
++n2;
}
}
(keyboardMenuObject.item_int[0] = ((keyboardMenuObject.item_int[0] - 1) | 0));
if ((keyboardMenuObject.item_int[0] > 0)) {
break;
}
keyboardMenuObject.init$0();
break;
}
case 1000:
{
this.drawWindowbox$4(keyboardMenuObject.x, keyboardMenuObject.y, keyboardMenuObject.width, 88);
this.gg.drawPT$4(((keyboardMenuObject.x + J.div(((keyboardMenuObject.width - 64) | 0), 2)) | 0), ((((keyboardMenuObject.y + 6) | 0) + 6) | 0), keyboardMenuObject.item_int[0], 0);
this.gg.drawPT$4(((((keyboardMenuObject.x + J.div(((keyboardMenuObject.width - 64) | 0), 2)) | 0) + 32) | 0), ((((keyboardMenuObject.y + 6) | 0) + 6) | 0), ((keyboardMenuObject.item_int[0] + 1) | 0), 0);
this.gg.drawPT$4(((keyboardMenuObject.x + J.div(((keyboardMenuObject.width - 64) | 0), 2)) | 0), ((((((keyboardMenuObject.y + 6) | 0) + 6) | 0) + 32) | 0), ((keyboardMenuObject.item_int[0] + 10) | 0), 0);
this.gg.drawPT$4(((((keyboardMenuObject.x + J.div(((keyboardMenuObject.width - 64) | 0), 2)) | 0) + 32) | 0), ((((((keyboardMenuObject.y + 6) | 0) + 6) | 0) + 32) | 0), ((keyboardMenuObject.item_int[0] + 11) | 0), 0);
this.hg.setColor(Color.yellow);
this.hg.drawString(keyboardMenuObject.title[0], ((keyboardMenuObject.x + 10) | 0), ((((((((keyboardMenuObject.y + 6) | 0) + 12) | 0) + 48) | 0) + 8) | 0));
this.hg.setColor(this.frontcolor);
if ((keyboardMenuObject.item_kazu < 1)) {
break;
}
var n2 = 0;
while ((n2 <= ((keyboardMenuObject.item_kazu - 1) | 0))) {
this.hg.drawString(keyboardMenuObject.item[n2], ((keyboardMenuObject.x + 6) | 0), ((((((keyboardMenuObject.y + 6) | 0) + Math.imul(n2, 14)) | 0) + 12) | 0));
++n2;
}
break;
}
case 1010:
{
this.drawWindowbox$4(keyboardMenuObject.x, keyboardMenuObject.y, keyboardMenuObject.width, 44);
this.hg.setColor(Color.yellow);
this.hg.drawString(keyboardMenuObject.title[0], ((keyboardMenuObject.x + 6) | 0), ((((keyboardMenuObject.y + 6) | 0) + 12) | 0));
this.hg.setColor(this.frontcolor);
this.hg.drawString((("" + keyboardMenuObject.item_int[0]) + "円"), ((keyboardMenuObject.x + 6) | 0), ((((((((keyboardMenuObject.y + 6) | 0) + 18) | 0) + 0) | 0) + 12) | 0));
break;
}
case 1020:
{
this.drawWindowbox$4(keyboardMenuObject.x, keyboardMenuObject.y, keyboardMenuObject.width, 44);
this.hg.setColor(Color.yellow);
this.hg.drawString(keyboardMenuObject.title[0], ((keyboardMenuObject.x + 6) | 0), ((((keyboardMenuObject.y + 6) | 0) + 12) | 0));
this.hg.setColor(this.frontcolor);
this.hg.drawString(("見つけた数  " + this.mp.ig.zukanGetMituketakazu$0()), ((keyboardMenuObject.x + 6) | 0), ((((((((keyboardMenuObject.y + 6) | 0) + 18) | 0) + 0) | 0) + 12) | 0));
this.hg.drawString(("捕まえた数  " + this.mp.ig.zukanGetTukamaetakazu$0()), ((((keyboardMenuObject.x + 236) | 0) - 108) | 0), ((((((((keyboardMenuObject.y + 6) | 0) + 18) | 0) + 0) | 0) + 12) | 0));
break;
}
case 1030:
{
this.drawWindowbox$4(keyboardMenuObject.x, keyboardMenuObject.y, keyboardMenuObject.width, 58);
this.hg.setColor(Color.cyan);
this.hg.drawString(keyboardMenuObject.title[0], ((keyboardMenuObject.x + 6) | 0), ((((keyboardMenuObject.y + 6) | 0) + 12) | 0));
this.hg.setColor(this.frontcolor);
this.hg.drawString(keyboardMenuObject.item[0], ((keyboardMenuObject.x + 6) | 0), ((((((keyboardMenuObject.y + 6) | 0) + 12) | 0) + 18) | 0));
this.hg.drawString(keyboardMenuObject.item[1], ((keyboardMenuObject.x + 6) | 0), ((((((((keyboardMenuObject.y + 6) | 0) + 18) | 0) + 14) | 0) + 12) | 0));
break;
}
case 1040:
{
this.drawWindowbox$4(keyboardMenuObject.x, keyboardMenuObject.y, keyboardMenuObject.width, 40);
this.hg.setColor(this.frontcolor);
this.hg.drawString(keyboardMenuObject.item[0], ((keyboardMenuObject.x + 6) | 0), ((((keyboardMenuObject.y + 6) | 0) + 12) | 0));
this.hg.drawString(keyboardMenuObject.item[1], ((keyboardMenuObject.x + 6) | 0), ((((((keyboardMenuObject.y + 6) | 0) + 14) | 0) + 12) | 0));
break;
}
case 1050:
{
this.drawWindowbox$4(keyboardMenuObject.x, keyboardMenuObject.y, keyboardMenuObject.width, ((((24 + Math.imul(keyboardMenuObject.item_kazu, 14)) | 0) + 6) | 0));
this.hg.setColor(Color.yellow);
this.hg.drawString(keyboardMenuObject.title[0], ((keyboardMenuObject.x + 6) | 0), ((((keyboardMenuObject.y + 6) | 0) + 12) | 0));
if ((keyboardMenuObject.item_kazu < 1)) {
break;
}
var n2 = 0;
while ((n2 <= ((keyboardMenuObject.item_kazu - 1) | 0))) {
this.hg.setColor(this.frontcolor);
this.hg.drawString(keyboardMenuObject.item[n2], ((keyboardMenuObject.x + 6) | 0), ((((((((keyboardMenuObject.y + 6) | 0) + 12) | 0) + 18) | 0) + Math.imul(n2, 14)) | 0));
if ((keyboardMenuObject.item_int[n2] == keyboardMenuObject.item_int[10])) {
this.hg.setColor(Color.cyan);
}
else {
this.hg.setColor(this.frontcolor);
}
this.hg.drawString(this.mp.zokusei_name[keyboardMenuObject.item_int[n2]], ((((keyboardMenuObject.x + 6) | 0) + 100) | 0), ((((((((keyboardMenuObject.y + 6) | 0) + 12) | 0) + 18) | 0) + Math.imul(n2, 14)) | 0));
++n2;
}
break;
}
case 1100:
{
this.drawWindowbox$4(keyboardMenuObject.x, keyboardMenuObject.y, keyboardMenuObject.width, ((((((((((6 + Math.imul(keyboardMenuObject.item_kazu, 14)) | 0) + 14) | 0) + 6) | 0) + 48) | 0) + 8) | 0));
this.hg.setColor(new Color(96, 96, 96));
this.hg.fillRect(((keyboardMenuObject.x + 10) | 0), ((((keyboardMenuObject.y + 6) | 0) + 4) | 0), ((keyboardMenuObject.width - 20) | 0), 48);
this.gg.drawPT$4(((keyboardMenuObject.x + J.div(((keyboardMenuObject.width - 32) | 0), 2)) | 0), ((((((keyboardMenuObject.y + 6) | 0) + 4) | 0) + 8) | 0), keyboardMenuObject.item_int[0], 0);
this.hg.setColor(Color.yellow);
this.hg.drawString(keyboardMenuObject.title[0], ((keyboardMenuObject.x + 10) | 0), ((((((((keyboardMenuObject.y + 6) | 0) + 12) | 0) + 48) | 0) + 8) | 0));
if ((keyboardMenuObject.item_int[1] == 1)) {
this.hg.setColor(Color.blue);
this.hg.drawString("♂", ((((keyboardMenuObject.x + 10) | 0) + 64) | 0), ((((((((keyboardMenuObject.y + 6) | 0) + 12) | 0) + 48) | 0) + 8) | 0));
}
else {
if ((keyboardMenuObject.item_int[1] == 2)) {
this.hg.setColor(Color.magenta);
this.hg.drawString("♀", ((((keyboardMenuObject.x + 10) | 0) + 64) | 0), ((((((((keyboardMenuObject.y + 6) | 0) + 12) | 0) + 48) | 0) + 8) | 0));
}
}
this.hg.setColor(this.frontcolor);
if ((keyboardMenuObject.item_kazu < 1)) {
break;
}
var n2 = 0;
while ((n2 <= ((keyboardMenuObject.item_kazu - 1) | 0))) {
this.hg.drawString(keyboardMenuObject.item[n2], ((keyboardMenuObject.x + 6) | 0), ((((((keyboardMenuObject.y + 6) | 0) + Math.imul(n2, 14)) | 0) + 12) | 0));
++n2;
}
break;
}
case 2000:
{
var string = null;
var n3 = 0;
this.drawWindowbox$4(keyboardMenuObject.x, keyboardMenuObject.y, keyboardMenuObject.width, 130);
this.hg.setColor(Color.yellow);
this.hg.drawString(keyboardMenuObject.title[0], ((keyboardMenuObject.x + 6) | 0), ((((keyboardMenuObject.y + 6) | 0) + 12) | 0));
this.hg.setColor(this.frontcolor);
var n4 = 0;
while ((n4 <= 6)) {
(n3 = 0);
while ((n3 <= 12)) {
if ((n3 >= 10)) {
this.hg.drawString(("" + String.fromCharCode(this.moji[this.moji_code_map[n3][n4]])), ((((((keyboardMenuObject.x + 6) | 0) + Math.imul(n3, 14)) | 0) + 12) | 0), ((((((((((keyboardMenuObject.y + 6) | 0) + 18) | 0) + Math.imul(n4, 14)) | 0) + 12) | 0) + 2) | 0));
}
else {
if ((n3 >= 5)) {
this.hg.drawString(("" + String.fromCharCode(this.moji[this.moji_code_map[n3][n4]])), ((((((keyboardMenuObject.x + 6) | 0) + Math.imul(n3, 14)) | 0) + 6) | 0), ((((((((((keyboardMenuObject.y + 6) | 0) + 18) | 0) + Math.imul(n4, 14)) | 0) + 12) | 0) + 2) | 0));
}
else {
this.hg.drawString(("" + String.fromCharCode(this.moji[this.moji_code_map[n3][n4]])), ((((keyboardMenuObject.x + 6) | 0) + Math.imul(n3, 14)) | 0), ((((((((((keyboardMenuObject.y + 6) | 0) + 18) | 0) + Math.imul(n4, 14)) | 0) + 12) | 0) + 2) | 0));
}
}
++n3;
}
++n4;
}
this.hg.drawString("戻る", ((((((keyboardMenuObject.x + 6) | 0) + 154) | 0) + 12) | 0), ((((((((((keyboardMenuObject.y + 6) | 0) + 18) | 0) + 70) | 0) + 12) | 0) + 2) | 0));
this.hg.drawString("決定", ((((((keyboardMenuObject.x + 6) | 0) + 154) | 0) + 12) | 0), ((((((((((keyboardMenuObject.y + 6) | 0) + 18) | 0) + 84) | 0) + 12) | 0) + 2) | 0));
if (((n != this.aw) || (this.fc <= 3))) {
if ((this.cursor_x >= 10)) {
if (((this.cursor_x == 11) && (this.cursor_y == 5))) {
this.gg.drawPT$4(((((((((keyboardMenuObject.x + 6) | 0) + Math.imul(this.cursor_x, 14)) | 0) - 1) | 0) + 12) | 0), ((((((((((((((keyboardMenuObject.y + 6) | 0) + 18) | 0) + Math.imul(this.cursor_y, 14)) | 0) + 12) | 0) - 12) | 0) + 2) | 0) + 1) | 0), 74, 0);
this.hg.setColor(this.backcolor);
(string = "戻る");
this.hg.drawString(string, ((((((keyboardMenuObject.x + 6) | 0) + Math.imul(this.cursor_x, 14)) | 0) + 12) | 0), ((((((((((keyboardMenuObject.y + 6) | 0) + 18) | 0) + Math.imul(this.cursor_y, 14)) | 0) + 12) | 0) + 2) | 0));
this.hg.setColor(this.frontcolor);
}
else {
if (((this.cursor_x == 11) && (this.cursor_y == 6))) {
this.gg.drawPT$4(((((((((keyboardMenuObject.x + 6) | 0) + Math.imul(this.cursor_x, 14)) | 0) - 1) | 0) + 12) | 0), ((((((((((((((keyboardMenuObject.y + 6) | 0) + 18) | 0) + Math.imul(this.cursor_y, 14)) | 0) + 12) | 0) - 12) | 0) + 2) | 0) + 1) | 0), 74, 0);
this.hg.setColor(this.backcolor);
(string = "決定");
this.hg.drawString(string, ((((((keyboardMenuObject.x + 6) | 0) + Math.imul(this.cursor_x, 14)) | 0) + 12) | 0), ((((((((((keyboardMenuObject.y + 6) | 0) + 18) | 0) + Math.imul(this.cursor_y, 14)) | 0) + 12) | 0) + 2) | 0));
this.hg.setColor(this.frontcolor);
}
else {
this.gg.drawPT$4(((((((((keyboardMenuObject.x + 6) | 0) + Math.imul(this.cursor_x, 14)) | 0) - 1) | 0) + 12) | 0), ((((((((((((((keyboardMenuObject.y + 6) | 0) + 18) | 0) + Math.imul(this.cursor_y, 14)) | 0) + 12) | 0) - 12) | 0) + 2) | 0) + 1) | 0), 72, 0);
this.hg.setColor(this.backcolor);
(string = ("" + String.fromCharCode(this.moji[this.moji_code_map[this.cursor_x][this.cursor_y]])));
this.hg.drawString(string, ((((((keyboardMenuObject.x + 6) | 0) + Math.imul(this.cursor_x, 14)) | 0) + 12) | 0), ((((((((((keyboardMenuObject.y + 6) | 0) + 18) | 0) + Math.imul(this.cursor_y, 14)) | 0) + 12) | 0) + 2) | 0));
this.hg.setColor(this.frontcolor);
}
}
}
else {
if ((this.cursor_x >= 5)) {
this.gg.drawPT$4(((((((((keyboardMenuObject.x + 6) | 0) + Math.imul(this.cursor_x, 14)) | 0) - 1) | 0) + 6) | 0), ((((((((((((((keyboardMenuObject.y + 6) | 0) + 18) | 0) + Math.imul(this.cursor_y, 14)) | 0) + 12) | 0) - 12) | 0) + 2) | 0) + 1) | 0), 72, 0);
this.hg.setColor(this.backcolor);
(string = ("" + String.fromCharCode(this.moji[this.moji_code_map[this.cursor_x][this.cursor_y]])));
this.hg.drawString(string, ((((((keyboardMenuObject.x + 6) | 0) + Math.imul(this.cursor_x, 14)) | 0) + 6) | 0), ((((((((((keyboardMenuObject.y + 6) | 0) + 18) | 0) + Math.imul(this.cursor_y, 14)) | 0) + 12) | 0) + 2) | 0));
this.hg.setColor(this.frontcolor);
}
else {
this.gg.drawPT$4(((((((keyboardMenuObject.x + 6) | 0) + Math.imul(this.cursor_x, 14)) | 0) - 1) | 0), ((((((((((((((keyboardMenuObject.y + 6) | 0) + 18) | 0) + Math.imul(this.cursor_y, 14)) | 0) + 12) | 0) - 12) | 0) + 2) | 0) + 1) | 0), 72, 0);
this.hg.setColor(this.backcolor);
(string = ("" + String.fromCharCode(this.moji[this.moji_code_map[this.cursor_x][this.cursor_y]])));
this.hg.drawString(string, ((((keyboardMenuObject.x + 6) | 0) + Math.imul(this.cursor_x, 14)) | 0), ((((((((((keyboardMenuObject.y + 6) | 0) + 18) | 0) + Math.imul(this.cursor_y, 14)) | 0) + 12) | 0) + 2) | 0));
this.hg.setColor(this.frontcolor);
}
}
}
(n3 = 0);
while ((n3 <= 4)) {
if ((((n != this.aw) || (n3 != this.cursor2_x)) || (this.fc2 <= 3))) {
this.gg.drawPT$4(((((((((((((keyboardMenuObject.x + 6) | 0) + 98) | 0) + Math.imul(n3, 14)) | 0) - 1) | 0) + 6) | 0) - 7) | 0), ((((keyboardMenuObject.y + 6) | 0) + 2) | 0), 73, 0);
}
++n3;
}
this.hg.setColor(Color.cyan);
(n3 = 0);
while ((n3 <= 4)) {
(string = ("" + String.fromCharCode(this.moji[this.name_code[n3]])));
if ((this.name_code[n3] > 0)) {
this.hg.drawString(string, ((((((((((keyboardMenuObject.x + 6) | 0) + 98) | 0) + Math.imul(n3, 14)) | 0) + 6) | 0) - 7) | 0), ((((keyboardMenuObject.y + 6) | 0) + 12) | 0));
}
++n3;
}
this.hg.setColor(this.frontcolor);
}
}
++n;
}
}
drawWindowbox$4(n, n2, n3, n4) {
this.hg.setColor(this.frontcolor);
this.hg.fillRect(n, n2, n3, n4);
this.hg.setColor(this.backcolor);
this.hg.fillRect(((n + 2) | 0), ((n2 + 2) | 0), ((n3 - 4) | 0), ((n4 - 4) | 0));
}
}
globalThis.KeyboardMenu = KeyboardMenu;
