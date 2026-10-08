// Direct port of IdouGamen from petm2_c.zip. Original method overloads use $arity.
class IdouGamen {
gk = null;
gg = null;
km = null;
mp = null;
ap = null;
co_j = new CharacterObject();
co_p = new CharacterObject();
map_string = J.array([9], null);
map_bg = J.array([15, 9], 0);
stage_c = J.array([10], 0);
stage_x = J.array([10], 0);
stage_y = J.array([10], 0);
stage_cf = J.array([10], false);
kinnotama_f = J.array([10], false);
ie_c = J.array([16], 0);
ie_x = J.array([16], 0);
ie_y = J.array([16], 0);
door_koID = 0;
boss_taosukazu = 0;
zure_x = 16;
zure_y = 24;
mode = 0;
cc_hankei = 0;
cc_kakudo = 0;
cc_p1_x = J.array([17], 0);
cc_p1_y = J.array([17], 0);
cc_p2_x = J.array([17], 0);
cc_p2_y = J.array([17], 0);
pm_x = J.array([16], 0);
pm_y = J.array([16], 0);
pm_p = 0;
zukan_mituketa_f = J.array([40], false);
zukan_tukamaeta_f = J.array([40], false);
zukan_name = J.array([40], null);
zukan_tukamaetakazu_max = 21;
pass_data = J.array([20], 0);
pass_st = null;
pass_char36 = J.array([36], 0);
pass_rt = J.array([6, 14], 0);
pass_nyuuryoku_kazu = 0;
pass_ch = 0;
pass_error = 0;
constructor(gameGraphics, gameKey, keyboardMenu, mainProgram) {
(this.gg = gameGraphics);
(this.gk = gameKey);
(this.km = keyboardMenu);
(this.mp = mainProgram);
(this.ap = this.gg.ap);
(this.cc_p1_x[13] = -200);
(this.cc_p1_y[13] = 160);
(this.cc_p1_x[14] = -200);
(this.cc_p1_y[14] = 520);
(this.cc_p1_x[15] = 712);
(this.cc_p1_y[15] = 520);
(this.cc_p1_x[16] = 712);
(this.cc_p1_y[16] = 160);
(this.cc_p2_x[13] = 712);
(this.cc_p2_y[13] = 160);
(this.cc_p2_x[14] = 712);
(this.cc_p2_y[14] = -200);
(this.cc_p2_x[15] = -200);
(this.cc_p2_y[15] = -200);
(this.cc_p2_x[16] = -200);
(this.cc_p2_y[16] = 160);
}
worldInit$0() {
var n = 0;
while ((n <= 9)) {
(this.stage_c[n] = 0);
(this.stage_cf[n] = false);
(this.kinnotama_f[n] = true);
++n;
}
(n = 0);
while ((n <= 15)) {
(this.ie_c[n] = 0);
++n;
}
(this.door_koID = 0);
(this.boss_taosukazu = 3);
(this.co_j.x = 0);
(this.co_j.y = 0);
(this.co_j.vx = 0);
(this.co_j.vy = 0);
(this.co_j.muki = 0);
(this.co_j.ac = 0);
(this.gk.tr1_c = 2);
(this.co_j.pt = 100);
(this.mp.j_pt_ss = ((this.mp.co_j.seibetu == 1) ? 20 : 0));
(this.mode = 0);
this.km.initAll$0();
(this.km.mode = 100);
var n2 = 0;
while ((n2 <= 8)) {
var string = this.gg.ap.getParameter(("chizu-" + n2));
(this.map_string[n2] = (string = (string + "...............")));
++n2;
}
(n2 = 0);
while ((n2 <= 8)) {
var n3 = 0;
while ((n3 <= 14)) {
var c = J.charAt(this.map_string[n2], n3);
if ((c == 65)) {
(this.co_j.x = Math.imul(n3, 32));
(this.co_j.y = Math.imul(n2, 32));
(this.map_bg[n3][n2] = 60);
}
else {
if ((c == 66)) {
(this.map_bg[n3][n2] = 63);
(this.ie_c[3] = 100);
(this.ie_x[3] = Math.imul(n3, 32));
(this.ie_y[3] = Math.imul(n2, 32));
}
else {
if ((c == 67)) {
(this.map_bg[n3][n2] = 64);
(this.ie_c[3] = 100);
(this.ie_x[3] = Math.imul(n3, 32));
(this.ie_y[3] = Math.imul(n2, 32));
}
else {
if ((c == 68)) {
(this.map_bg[n3][n2] = 65);
(this.ie_c[3] = 100);
(this.ie_x[3] = Math.imul(n3, 32));
(this.ie_y[3] = Math.imul(n2, 32));
}
else {
if ((c == 69)) {
if ((this.mp.system_mode >= 1)) {
(this.map_bg[n3][n2] = 67);
(this.ie_c[3] = 100);
(this.ie_x[3] = Math.imul(n3, 32));
(this.ie_y[3] = Math.imul(n2, 32));
}
else {
(this.map_bg[n3][n2] = 60);
}
}
else {
if ((c == 70)) {
(this.map_bg[n3][n2] = 68);
(this.ie_c[3] = 100);
(this.ie_x[3] = Math.imul(n3, 32));
(this.ie_y[3] = Math.imul(n2, 32));
}
else {
if ((c == 71)) {
(this.map_bg[n3][n2] = 69);
(this.ie_c[3] = 100);
(this.ie_x[3] = Math.imul(n3, 32));
(this.ie_y[3] = Math.imul(n2, 32));
}
else {
if ((c == 72)) {
(this.map_bg[n3][n2] = 55);
(this.ie_c[10] = 100);
(this.ie_x[10] = Math.imul(n3, 32));
(this.ie_y[10] = Math.imul(n2, 32));
}
else {
if ((c == 73)) {
(this.map_bg[n3][n2] = 44);
(this.ie_c[3] = 100);
(this.ie_x[3] = Math.imul(n3, 32));
(this.ie_y[3] = Math.imul(n2, 32));
}
else {
if ((c == 74)) {
(this.map_bg[n3][n2] = 45);
(this.ie_c[3] = 100);
(this.ie_x[3] = Math.imul(n3, 32));
(this.ie_y[3] = Math.imul(n2, 32));
}
else {
if ((c == 97)) {
if ((this.stage_c[0] == 0)) {
(this.map_bg[n3][n2] = 50);
(this.stage_c[0] = 100);
(this.stage_x[0] = Math.imul(n3, 32));
(this.stage_y[0] = Math.imul(n2, 32));
}
else {
(this.map_bg[n3][n2] = 60);
}
}
else {
if ((c == 98)) {
if ((this.stage_c[1] == 0)) {
(this.map_bg[n3][n2] = 51);
(this.stage_c[1] = 100);
(this.stage_x[1] = Math.imul(n3, 32));
(this.stage_y[1] = Math.imul(n2, 32));
}
else {
(this.map_bg[n3][n2] = 60);
}
}
else {
if ((c == 99)) {
if ((this.stage_c[2] == 0)) {
(this.map_bg[n3][n2] = 52);
(this.stage_c[2] = 100);
(this.stage_x[2] = Math.imul(n3, 32));
(this.stage_y[2] = Math.imul(n2, 32));
}
else {
(this.map_bg[n3][n2] = 60);
}
}
else {
if ((c == 100)) {
if ((this.stage_c[3] == 0)) {
(this.map_bg[n3][n2] = 53);
(this.stage_c[3] = 100);
(this.stage_x[3] = Math.imul(n3, 32));
(this.stage_y[3] = Math.imul(n2, 32));
}
else {
(this.map_bg[n3][n2] = 60);
}
}
else {
(this.map_bg[n3][n2] = ((c == 49) ? 60 : ((c == 50) ? 61 : ((c == 51) ? 62 : 0))));
}
}
}
}
}
}
}
}
}
}
}
}
}
}
++n3;
}
++n2;
}
(this.co_p.x = 0);
(this.co_p.y = 0);
(this.co_p.muki = 1);
(n = 11);
while ((n >= 0)) {
if ((this.co_j.x <= 256)) {
(this.pm_x[n] = ((this.co_j.x - Math.imul(((11 - n) | 0), 3)) | 0));
(this.pm_y[n] = this.co_j.y);
}
else {
(this.pm_x[n] = ((this.co_j.x + Math.imul(((11 - n) | 0), 3)) | 0));
(this.pm_y[n] = this.co_j.y);
(this.co_p.muki = 0);
(this.co_j.muki = 0);
}
--n;
}
(this.pm_p = 0);
(this.co_p.x = this.pm_x[this.pm_p]);
(this.co_p.y = this.pm_y[this.pm_p]);
this.zukanInit$0();
if ((this.mp.system_mode == 0)) {
(this.zukan_tukamaetakazu_max = this.mp.paraInt$1("zukan_kansei"));
if ((this.zukan_tukamaetakazu_max < 2)) {
(this.zukan_tukamaetakazu_max = 2);
}
}
else {
(this.zukan_tukamaetakazu_max = 21);
}
this.passInit$0();
this.drawOs2$0();
}
worldInit2$0() {
var n = 0;
this.mp.toJS$0();
(this.co_j.vx = 0);
(this.co_j.vy = 0);
(this.co_j.muki = 0);
(this.co_j.ac = 0);
(this.gk.tr1_c = 2);
(this.mode = 200);
(this.cc_hankei = 16);
if (((((this.mp.pn_syurui >= 1) && (this.mp.co_p[0].syurui < 1100)) && (this.mp.co_sodateya[0].syurui != (n = ((1000 + Math.imul(this.mp.pn_syurui, 100)) | 0)))) && (this.mp.co_sodateya[1].syurui != n))) {
this.mp.co_p[0].initSyurui$2(n, this.mp);
(this.mp.co_p[0].id = this.mp.co_j.id);
}
this.km.initAll$0();
(this.km.mode = 100);
this.drawOs2$0();
}
worldInit3$0() {
this.mp.toJS$0();
var n = ((this.checkStage$0() - 1) | 0);
if ((n >= 0)) {
var n2 = 0;
(this.stage_cf[n] = true);
var n3 = ((J.div(this.stage_x[n], 32) + 1) | 0);
if ((n3 > 14)) {
(n3 = 14);
}
if (((n2 = ((J.div(this.stage_y[n], 32) + 1) | 0)) > 8)) {
(n2 = 8);
}
(this.map_bg[n3][n2] = 66);
}
var n4 = 0;
var n5 = 0;
while ((n5 <= 3)) {
if (this.stage_cf[n5]) {
++n4;
}
++n5;
}
(this.door_koID = 0);
if (((n4 == 2) && (this.ie_c[10] == 100))) {
(this.ie_c[10] = 50);
(this.door_koID = 10);
}
(n5 = 0);
while ((n5 <= 1)) {
if ((this.mp.co_sodateya[n5].syurui >= 1100)) {
if ((this.mp.sodateya_scc[n5] <= 0)) {
(this.mp.sodateya_scc[n5] = 1);
}
else {
(this.mp.sodateya_scc[n5] = 0);
if ((this.mp.co_sodateya[n5].level <= 4)) {
this.mp.co_sodateya[n5].setLevel$1(((this.mp.co_sodateya[n5].level + 1) | 0));
}
}
}
++n5;
}
if (((((this.mp.co_sodateya[0].syurui >= 1100) && (this.mp.co_sodateya[1].syurui >= 1100)) && (this.mp.co_sodateya[0].seibetu != this.mp.co_sodateya[1].seibetu)) && (this.mp.co_sodateya[0].type == this.mp.co_sodateya[1].type))) {
(this.mp.sodateya_scc[n5] = 1);
}
(this.co_j.vx = 0);
(this.co_j.vy = 0);
(this.co_j.muki = 0);
(this.co_j.ac = 0);
(this.gk.tr1_c = 2);
(this.mode = 200);
(this.cc_hankei = 16);
if (((((this.mp.pn_syurui >= 1) && (this.mp.co_p[0].syurui < 1100)) && (this.mp.co_sodateya[0].syurui != (n4 = ((1000 + Math.imul(this.mp.pn_syurui, 100)) | 0)))) && (this.mp.co_sodateya[1].syurui != n4))) {
this.mp.co_p[0].initSyurui$2(n4, this.mp);
(this.mp.co_p[0].id = this.mp.co_j.id);
}
this.km.initAll$0();
(this.km.mode = 100);
this.drawOs2$0();
}
worldInit4$0() {
this.worldInit2$0();
(this.mode = 500);
(this.cc_hankei = 0);
(this.cc_kakudo = 71);
}
worldInit5$0() {
this.worldInit2$0();
(this.mode = 500);
(this.cc_hankei = 0);
(this.cc_kakudo = 71);
this.km.openKaobox$5(10, 120, 32, 216, 280);
this.km.initSerifubox$5(3, 120, 132, 216, this.mp.gym_name);
this.mp.addSerifuGym$3(3, 6, 3);
this.km.active$1(3);
(this.mp.gym_cyousen_kazu = 10);
(this.km.mode = 1200);
}
drawOs2$0() {
var n = 0;
var n2 = 0;
this.gg.setBackcolor$1(new Color(0, 127, 0));
this.gg.fill2$0();
if ((this.mp.system_mode < 10)) {
this.gg.os2_g.drawImage(this.gg.li[3], 0, 0, this.gg.ap);
}
var n3 = 0;
while ((n3 <= 8)) {
(n2 = 0);
while ((n2 <= 14)) {
(n = this.map_bg[n2][n3]);
if ((n == 61)) {
this.gg.drawPT2$3(((Math.imul(n2, 32) + 16) | 0), ((((Math.imul(n3, 32) + 24) | 0) - 16) | 0), 61);
this.gg.drawPT2$3(((Math.imul(n2, 32) + 16) | 0), ((((Math.imul(n3, 32) + 24) | 0) + 16) | 0), 61);
}
else {
if ((n == 62)) {
this.gg.drawPT2$3(((((Math.imul(n2, 32) + 16) | 0) - 16) | 0), ((Math.imul(n3, 32) + 24) | 0), 62);
this.gg.drawPT2$3(((((Math.imul(n2, 32) + 16) | 0) + 16) | 0), ((Math.imul(n3, 32) + 24) | 0), 62);
}
}
++n2;
}
++n3;
}
(n3 = 0);
while ((n3 <= 8)) {
(n2 = 0);
while ((n2 <= 14)) {
(n = this.map_bg[n2][n3]);
if ((((n != 61) && (n != 62)) && (n != 256))) {
if (((((n >= 63) && (n <= 65)) || ((n >= 67) && (n <= 69))) || ((n >= 44) && (n <= 45)))) {
this.gg.drawPT2$3(((Math.imul(n2, 32) + 16) | 0), ((((Math.imul(n3, 32) + 24) | 0) - 7) | 0), n);
}
else {
if ((n == 55)) {
this.gg.drawPT2$3(((((Math.imul(n2, 32) + 16) | 0) - 16) | 0), ((Math.imul(n3, 32) + 24) | 0), 62);
this.gg.drawPT2$3(((((Math.imul(n2, 32) + 16) | 0) + 16) | 0), ((Math.imul(n3, 32) + 24) | 0), 62);
this.gg.drawPT2$3(((Math.imul(n2, 32) + 16) | 0), ((((Math.imul(n3, 32) + 24) | 0) - 7) | 0), n);
}
else {
this.gg.drawPT2$3(((Math.imul(n2, 32) + 16) | 0), ((Math.imul(n3, 32) + 24) | 0), n);
}
}
}
++n2;
}
++n3;
}
}
drawMap$0() {
this.gg.os_g.drawImage(this.gg.os2_img, 0, 0, this.gg.ap);
}
getBGZ$2(n, n2) {
if (((((n < 0) || (n > 479)) || (n2 < 0)) || (n2 > 287))) {
return 0;
}
var n3 = J.div(n, 32);
var n4 = J.div(n2, 32);
return this.map_bg[n3][n4];
}
checkStage$0() {
var n = -1;
var n2 = 0;
while ((n2 <= 9)) {
if ((((this.stage_c[n2] == 100) && (this.co_j.x == this.stage_x[n2])) && (this.co_j.y == this.stage_y[n2]))) {
(n = ((n2 + 1) | 0));
break;
}
++n2;
}
return n;
}
mainProgram$0() {
var n = 0;
var n2 = 0;
if (this.gk.tr1_f) {
if ((this.gk.tr1_c < 2)) {
++this.gk.tr1_c;
}
}
else {
(this.gk.tr1_c = 0);
}
this.mp.moveGameCounter$0();
if ((this.mode == 0)) {
switch (this.km.mode) {
case 100:
{
this.jMove$0();
break;
}
case 150:
{
if (((this.km.kettei_c != 1) && (this.km.cancel_c != 1))) {
break;
}
(n2 = 0);
while ((n2 <= 15)) {
this.km.off$1(n2);
++n2;
}
this.km.active$1(-1);
(this.km.mode = 100);
break;
}
case 200:
{
if ((this.km.cancel_c == 1)) {
this.km.off$1(1);
this.km.off$1(3);
(this.km.mode = 100);
break;
}
if ((this.km.kettei_c != 1)) {
break;
}
this.km.initSerifubox$5(3, 112, 132, 256, this.mp.name_kidohakase);
this.mp.addSerifu$3(3, 3, 4);
this.km.active$1(3);
(this.km.mode = 210);
break;
}
case 210:
{
if ((this.km.cancel_c == 1)) {
this.km.off$1(1);
this.km.off$1(3);
(this.km.mode = 100);
break;
}
if ((this.km.kettei_c != 1)) {
break;
}
this.km.off$1(3);
this.km.initSelectboxSerifu$6(4, 64, 132, 144, this.mp.name_kidohakase, "どれにするかね？");
this.km.addItem$2(4, this.zukan_name[1]);
this.km.addItem$2(4, this.zukan_name[2]);
this.km.addItem$2(4, this.zukan_name[3]);
this.km.active$1(4);
(this.km.mode = 220);
break;
}
case 220:
{
if ((this.km.cancel_c == 1)) {
this.km.off$1(1);
this.km.off$1(4);
(this.km.mode = 100);
break;
}
if ((this.km.kettei_c != 1)) {
break;
}
if ((this.km.getSelectedIndex$1(4) == 0)) {
this.km.openCharacterbox$7(5, 320, 56, 100, 140, this.zukan_name[1], ((this.mp.ranInt$1(2) + 1) | 0));
this.km.initSelectbox$5(6, 228, 146, 256, (("炎タイプの" + this.zukan_name[1]) + "がいいんじゃな？"));
this.km.addItem$2(6, "はい");
this.km.addItem$2(6, "いいえ");
this.km.active$1(6);
}
else {
if ((this.km.getSelectedIndex$1(4) == 1)) {
this.km.openCharacterbox$7(5, 320, 56, 100, 150, this.zukan_name[2], ((this.mp.ranInt$1(2) + 1) | 0));
this.km.initSelectbox$5(6, 228, 146, 256, (("水タイプの" + this.zukan_name[2]) + "がいいんじゃな？"));
this.km.addItem$2(6, "はい");
this.km.addItem$2(6, "いいえ");
this.km.active$1(6);
}
else {
if ((this.km.getSelectedIndex$1(4) == 2)) {
this.km.openCharacterbox$7(5, 320, 56, 100, 160, this.zukan_name[3], ((this.mp.ranInt$1(2) + 1) | 0));
this.km.initSelectbox$5(6, 228, 146, 256, (("草タイプの" + this.zukan_name[3]) + "がいいんじゃな？"));
this.km.addItem$2(6, "はい");
this.km.addItem$2(6, "いいえ");
this.km.active$1(6);
}
}
}
(this.km.mode = 230);
break;
}
case 230:
{
if ((this.km.cancel_c == 1)) {
this.km.off$1(6);
this.km.off$1(5);
this.km.active$1(4);
(this.km.mode = 220);
break;
}
if ((this.km.kettei_c != 1)) {
break;
}
if ((this.km.getSelectedIndex$1(6) == 0)) {
this.km.initSerifubox$5(3, 228, 212, 256, this.mp.name_kidohakase);
this.mp.addSerifu$3(3, 4, 2);
this.km.active$1(3);
(this.km.mode = 240);
(this.mp.pn_syurui = ((this.km.getSelectedIndex$1(4) + 1) | 0));
(n = ((this.mp.co_p[0].syurui == 1000) ? this.mp.co_p[0].pb_type : 0));
this.mp.co_p[0].initSyurui$2(((1000 + Math.imul(this.mp.pn_syurui, 100)) | 0), this.mp);
(this.mp.co_p[0].pb_type = n);
(this.mp.co_p[0].seibetu = ((this.km.kmo[5].item_int[1] - 1) | 0));
(this.mp.co_p[0].id = this.mp.co_j.id);
this.zukanTourokuPet$0();
break;
}
this.km.off$1(6);
this.km.off$1(5);
this.km.active$1(4);
(this.km.mode = 220);
break;
}
case 240:
{
if (((this.km.kettei_c != 1) && (this.km.cancel_c != 1))) {
break;
}
this.km.off$1(1);
this.km.off$1(6);
this.km.off$1(5);
this.km.off$1(4);
this.km.off$1(3);
(this.km.mode = 100);
break;
}
case 300:
{
if ((this.km.cancel_c == 1)) {
this.km.off$1(1);
this.km.off$1(3);
(this.km.mode = 100);
break;
}
if ((this.km.kettei_c != 1)) {
break;
}
if ((this.zukanGetTukamaetakazu$0() >= this.zukan_tukamaetakazu_max)) {
this.km.initSerifubox$5(3, 112, 132, 256, this.mp.name_kidohakase);
this.mp.addSerifu$3(3, 7, 4);
this.km.active$1(3);
(this.km.mode = 310);
break;
}
this.km.initSerifubox$5(3, 112, 132, 256, this.mp.name_kidohakase);
this.mp.addSerifu$3(3, 6, 4);
(this.km.kmo[3].item[1] = (("" + this.zukan_tukamaetakazu_max) + this.km.kmo[3].item[1]));
this.km.active$1(3);
(this.km.mode = 150);
break;
}
case 310:
{
if (((this.km.kettei_c != 1) && (this.km.cancel_c != 1))) {
break;
}
(this.mode = 100);
(this.cc_hankei = 320);
(this.co_j.ac = 0);
break;
}
case 350:
{
if ((this.km.cancel_c == 1)) {
this.km.off$1(1);
this.km.off$1(3);
(this.km.mode = 100);
break;
}
if ((this.km.kettei_c != 1)) {
break;
}
this.km.off$1(3);
this.km.initSerifubox$5(3, 112, 132, 256, this.mp.name_kidohakase);
this.km.addItem$2(3, (("君の" + this.zukan_name[this.mp.pn_syurui]) + "はうちに来ておるぞ。"));
this.km.addItem$2(3, "パートナーは大事にしなきゃダメじゃぞ。");
this.km.active$1(3);
(n = ((1000 + Math.imul(this.mp.pn_syurui, 100)) | 0));
this.mp.co_p[0].initSyurui$2(n, this.mp);
(this.mp.co_p[0].id = this.mp.co_j.id);
(this.km.mode = 360);
break;
}
case 360:
{
if ((this.km.cancel_c == 1)) {
this.km.off$1(1);
this.km.off$1(3);
(this.km.mode = 100);
break;
}
if ((this.km.kettei_c != 1)) {
break;
}
this.km.off$1(3);
this.km.initSerifubox$5(3, 112, 132, 256, this.mp.name_kidohakase);
this.km.addItem$2(3, "ところで、図鑑の調子はどうかな？");
this.km.addItem$2(3, ("見つけた数  " + this.zukanGetMituketakazu$0()));
this.km.addItem$2(3, ("捕まえた数  " + this.zukanGetTukamaetakazu$0()));
if ((this.zukanGetTukamaetakazu$0() >= this.zukan_tukamaetakazu_max)) {
this.km.addItem$2(3, "ついに全部集めたようじゃな！");
}
else {
if ((this.zukanGetTukamaetakazu$0() <= 5)) {
this.km.addItem$2(3, "うーむ、まだまだじゃの。");
}
else {
this.km.addItem$2(3, "おっ、がんばっておるようじゃな！");
}
}
this.km.active$1(3);
(this.km.mode = 300);
break;
}
case 400:
{
var n3 = 0;
var n4 = 0;
if ((this.km.cancel_c == 1)) {
this.km.off$1(10);
this.km.off$1(1);
(this.km.mode = 100);
break;
}
if ((this.km.kettei_c != 1)) {
break;
}
if ((this.km.getSelectedIndex$1(1) == 0)) {
this.km.initIdlist$0();
(n2 = 0);
while ((n2 <= 5)) {
if ((this.mp.co_p[n2].syurui >= 1100)) {
(this.km.idlist_item[this.km.idlist_kazu] = n2);
++this.km.idlist_kazu;
}
++n2;
}
if ((this.km.idlist_kazu <= 0)) {
this.km.initSerifubox$5(12, 248, 206, 176, this.mp.co_j.name);
this.km.addItem$2(12, "休ませるモンスターがいない。");
this.km.active$1(12);
(this.km.mode = 420);
break;
}
this.km.initSelectbox$5(12, 248, 88, 224, "1回10円です。よろしいですか？");
this.km.addItem$2(12, "はい");
this.km.addItem$2(12, "いいえ");
this.km.active$1(12);
(this.km.mode = 410);
break;
}
if ((this.km.getSelectedIndex$1(1) == 1)) {
this.km.initIdlist$0();
(n4 = 0);
(n3 = 0);
(n2 = 1);
while ((n2 <= 5)) {
if ((this.mp.co_p[n2].syurui >= 1100)) {
(this.km.idlist_item[this.km.idlist_kazu] = n2);
++this.km.idlist_kazu;
}
++n2;
}
if ((this.mp.co_p[0].syurui >= 1100)) {
(this.km.idlist_item[this.km.idlist_kazu] = 0);
++this.km.idlist_kazu;
}
if ((this.km.idlist_kazu <= 0)) {
this.km.initMessagebox$4(12, 298, 108, 176);
this.km.addItem$2(12, "別れるモンスターがいません。");
this.km.active$1(12);
(this.km.mode = 420);
break;
}
this.km.initSelectbox$5(12, 298, 68, 120, "誰と別れる？");
(n2 = 0);
while ((n2 <= ((this.km.idlist_kazu - 1) | 0))) {
this.km.addItem$2(12, this.mp.co_p[this.km.idlist_item[n2]].name);
++n2;
}
this.km.active$1(12);
(this.km.mode = 450);
break;
}
if ((this.km.getSelectedIndex$1(1) == 2)) {
this.km.initIdlist$0();
(n2 = 0);
while ((n2 <= 5)) {
if (!(((this.mp.co_p[n2].syurui == 4300) && this.mp.co_p[n2].name_df) || (this.mp.co_p[n2].syurui < 1100))) {
(this.km.idlist_item[this.km.idlist_kazu] = n2);
++this.km.idlist_kazu;
}
++n2;
}
if (((this.mp.co_p[6].syurui >= 1100) && (this.mp.pn_syurui >= 1))) {
(this.km.idlist_item[this.km.idlist_kazu] = 6);
++this.km.idlist_kazu;
}
if ((this.km.idlist_kazu <= 0)) {
this.km.initMessagebox$4(12, 298, 104, 144);
this.km.addItem$2(12, "モンスターがいません。");
this.km.active$1(12);
(this.km.mode = 420);
break;
}
this.km.initSelectbox$5(12, 298, 104, 192, "誰のパスワードを見る？");
(n2 = 0);
while ((n2 <= ((this.km.idlist_kazu - 1) | 0))) {
this.km.addItem$2(12, this.mp.co_p[this.km.idlist_item[n2]].name);
++n2;
}
this.km.active$1(12);
(this.km.mode = 600);
break;
}
if ((this.km.getSelectedIndex$1(1) == 3)) {
this.km.initIdlist$0();
(n2 = 1);
while ((n2 <= 5)) {
if ((this.mp.co_p[n2].syurui >= 1100)) {
++this.km.idlist_kazu;
}
++n2;
}
if ((this.pass_nyuuryoku_kazu >= 4)) {
this.km.initMessagebox$4(12, 298, 104, 144);
this.km.addItem$2(12, "パスワードの入力は");
this.km.addItem$2(12, "4 回までです。");
this.km.active$1(12);
(this.km.mode = 420);
break;
}
if ((this.km.idlist_kazu >= 5)) {
this.km.initSerifubox$5(12, 298, 104, 184, this.mp.co_j.name);
if ((this.mp.co_j.seibetu == 1)) {
this.km.addItem$2(12, "そんなにたくさん、飼えないわ。");
}
else {
this.km.addItem$2(12, "そんなにたくさん、飼えないよ。");
}
this.km.active$1(12);
(this.km.mode = 420);
break;
}
this.km.openDialgKakuninBox$5(11, 298, 104, 192, this.mp.name_jyuuisan);
this.km.addItem$2(11, "ダイアログにモンスターの");
this.km.addItem$2(11, "パスワードを入力してください。");
this.km.active$1(14);
(this.mp.rgui_text = "");
(this.mp.rgui_f = false);
(this.mp.rgui_meirei = 200);
(this.km.mode = 700);
break;
}
this.km.off$1(10);
this.km.off$1(1);
(this.km.mode = 100);
break;
}
case 410:
{
var n5 = 0;
if ((this.km.cancel_c == 1)) {
this.km.off$1(12);
this.km.active$1(1);
(this.km.mode = 400);
break;
}
if ((this.km.kettei_c != 1)) {
break;
}
if ((this.km.getSelectedIndex$1(12) == 0)) {
if ((this.mp.j_okozukai < 10)) {
this.km.initDoubleSerifubox$5(13, 248, 190, 184, this.mp.co_j.name);
if ((this.mp.co_j.seibetu == 1)) {
this.km.addItem$2(13, "あらっ。お金が足りないわ。");
}
else {
this.km.addItem$2(13, "あれっ。お金が足りないや。");
}
this.km.addItem$2(13, this.mp.name_jyuuisan);
this.km.addItem$2(13, "びんぼうって悲しいですね。");
this.km.active$1(13);
(this.km.mode = 420);
break;
}
(this.mp.j_okozukai = ((this.mp.j_okozukai - 10) | 0));
this.km.initOyasumibox$3(13, 200, 190);
(n5 = 0);
while ((n5 <= 5)) {
var monsterObject = this.mp.co_p[n5];
if ((monsterObject.syurui < 1100)) {
this.km.addIntItem$2(13, 0);
}
else {
this.km.addIntItem$2(13, monsterObject.spt[0]);
(monsterObject.hp = monsterObject.hp_max);
(monsterObject.pp = monsterObject.pp_max);
}
++n5;
}
this.km.active$1(13);
(this.km.mode = 420);
break;
}
this.km.off$1(12);
this.km.active$1(1);
(this.km.mode = 400);
break;
}
case 420:
{
if (((this.km.kettei_c != 1) && (this.km.cancel_c != 1))) {
break;
}
this.km.off$1(12);
this.km.off$1(13);
this.km.active$1(1);
(this.km.mode = 400);
break;
}
case 450:
{
if ((this.km.cancel_c == 1)) {
this.km.off$1(12);
this.km.active$1(1);
(this.km.mode = 400);
break;
}
if ((this.km.kettei_c != 1)) {
break;
}
var n6 = this.km.idlist_item[this.km.getSelectedIndex$1(12)];
this.km.initSerifubox$5(13, 298, 204, 192, this.mp.co_p[n6].name);
if ((this.mp.co_p[n6].seibetu == 1)) {
this.km.addItem$2(13, "わたしはこれから旅に出ます。");
}
else {
this.km.addItem$2(13, "ぼくはこれから旅に出ます。");
}
this.km.active$1(13);
this.mp.co_p[n6].initSyurui$2(1000, this.mp);
(this.km.mode = 420);
break;
}
case 500:
{
if ((this.km.cancel_c == 1)) {
this.km.off$1(10);
this.km.off$1(11);
this.km.off$1(1);
(this.km.mode = 100);
break;
}
if ((this.km.kettei_c != 1)) {
break;
}
this.mp.itemNarabikae$0();
if ((this.km.getSelectedIndex$1(1) == 0)) {
if ((this.mp.item_kazu >= 10)) {
this.km.initSerifubox$5(3, 292, 132, 184, this.mp.co_j.name);
if ((this.mp.co_j.seibetu == 1)) {
this.km.addItem$2(3, "そんなにたくさん、持てないわ。");
}
else {
this.km.addItem$2(3, "そんなにたくさん、持てないよ。");
}
this.km.active$1(3);
(this.km.mode = 540);
break;
}
if ((this.mp.system_mode >= 1)) {
this.km.initKaimonoSelectbox$5(12, 292, 110, 184, "どれを買いますか？");
this.km.addItem$3(12, this.mp.item_data_name[1], this.mp.item_data_teika[1]);
this.km.addItem$3(12, this.mp.item_data_name[2], this.mp.item_data_teika[2]);
this.km.addItem$3(12, this.mp.item_data_name[5], this.mp.item_data_teika[5]);
this.km.addItem$3(12, this.mp.item_data_name[6], this.mp.item_data_teika[6]);
this.km.addItem$3(12, this.mp.item_data_name[7], this.mp.item_data_teika[7]);
this.km.addItem$3(12, this.mp.item_data_name[10], this.mp.item_data_teika[10]);
this.km.addItem$3(12, this.mp.item_data_name[11], this.mp.item_data_teika[11]);
this.km.addItem$3(12, this.mp.item_data_name[12], this.mp.item_data_teika[12]);
this.km.addItem$3(12, this.mp.item_data_name[13], this.mp.item_data_teika[13]);
this.km.addItem$3(12, this.mp.item_data_name[14], this.mp.item_data_teika[14]);
this.km.addItem$3(12, this.mp.item_data_name[15], this.mp.item_data_teika[15]);
}
else {
this.km.initKaimonoSelectbox$5(12, 292, 108, 184, "どれを買いますか？");
this.km.addItem$3(12, this.mp.item_data_name[1], this.mp.item_data_teika[1]);
this.km.addItem$3(12, this.mp.item_data_name[2], this.mp.item_data_teika[2]);
this.km.addItem$3(12, this.mp.item_data_name[5], this.mp.item_data_teika[5]);
this.km.addItem$3(12, this.mp.item_data_name[6], this.mp.item_data_teika[6]);
this.km.addItem$3(12, this.mp.item_data_name[7], this.mp.item_data_teika[7]);
this.km.addItem$3(12, this.mp.item_data_name[10], this.mp.item_data_teika[10]);
this.km.addItem$3(12, this.mp.item_data_name[11], this.mp.item_data_teika[11]);
}
this.km.active$1(12);
(this.km.mode = 510);
break;
}
if ((this.km.getSelectedIndex$1(1) == 1)) {
if ((this.mp.item_kazu <= 0)) {
this.km.initSerifubox$5(3, 292, 132, 168, this.mp.co_j.name);
if ((this.mp.co_j.seibetu == 1)) {
this.km.addItem$2(3, "そうだ、思い出したわ。");
}
else {
this.km.addItem$2(3, "そうだ、思い出した。");
}
this.km.addItem$2(3, "何も持っていなかったんだ。");
this.km.active$1(3);
(this.km.mode = 530);
break;
}
this.km.initSelectbox$5(12, 292, 132, 152, "どれを売りますか？");
(n2 = 0);
while ((n2 <= ((this.mp.item_kazu - 1) | 0))) {
this.km.addItem$2(12, this.mp.item_data_name[this.mp.item[n2]]);
++n2;
}
this.km.active$1(12);
(this.km.mode = 550);
break;
}
this.km.off$1(10);
this.km.off$1(11);
this.km.off$1(1);
(this.km.mode = 100);
break;
}
case 510:
{
if ((this.km.cancel_c == 1)) {
this.km.off$1(12);
this.km.active$1(1);
(this.km.mode = 500);
break;
}
if ((this.km.kettei_c != 1)) {
break;
}
(n = this.km.getSelectedIndex$1(12));
if ((n == 0)) {
(this.mp.item_useID = 1);
}
else {
if ((n == 1)) {
(this.mp.item_useID = 2);
}
else {
if ((n == 2)) {
(this.mp.item_useID = 5);
}
else {
if ((n == 3)) {
(this.mp.item_useID = 6);
}
else {
if ((n == 4)) {
(this.mp.item_useID = 7);
}
else {
if ((n == 5)) {
(this.mp.item_useID = 10);
}
else {
if ((n == 6)) {
(this.mp.item_useID = 11);
}
else {
if ((n == 7)) {
(this.mp.item_useID = 12);
}
else {
if ((n == 8)) {
(this.mp.item_useID = 13);
}
else {
if ((n == 9)) {
(this.mp.item_useID = 14);
}
else {
if ((n == 10)) {
(this.mp.item_useID = 15);
}
}
}
}
}
}
}
}
}
}
}
if ((this.mp.j_okozukai < this.mp.item_data_teika[this.mp.item_useID])) {
this.km.initDoubleSerifubox$5(3, 72, 190, 184, this.mp.co_j.name);
if ((this.mp.co_j.seibetu == 1)) {
this.km.addItem$2(3, "あらっ。お金が足りないわ。");
}
else {
this.km.addItem$2(3, "あれっ。お金が足りないや。");
}
this.km.addItem$2(3, this.mp.name_teninsan);
this.km.addItem$2(3, "びんぼうって、悲しいですね。");
this.km.active$1(3);
(this.km.mode = 540);
break;
}
var string = (this.mp.item_data_name[this.mp.item_useID] + "を買いますか？");
this.km.initSelectboxSerifu$6(13, 192, 190, 208, this.mp.name_teninsan, string);
this.km.addItem$2(13, "はい");
this.km.addItem$2(13, "いいえ");
this.km.active$1(13);
(this.km.mode = 520);
break;
}
case 520:
{
if ((this.km.cancel_c == 1)) {
this.km.off$1(13);
this.km.active$1(12);
(this.km.mode = 510);
break;
}
if ((this.km.kettei_c != 1)) {
break;
}
if ((this.km.getSelectedIndex$1(13) == 0)) {
(this.mp.j_okozukai = ((this.mp.j_okozukai - this.mp.item_data_teika[this.mp.item_useID]) | 0));
(this.km.kmo[11].item_int[0] = this.mp.j_okozukai);
this.mp.itemAddItem$1(this.mp.item_useID);
this.km.off$1(13);
this.km.off$1(12);
this.km.active$1(1);
(this.km.mode = 500);
break;
}
this.km.off$1(12);
this.km.off$1(13);
this.km.active$1(1);
(this.km.mode = 500);
break;
}
case 530:
{
if (((this.km.kettei_c != 1) && (this.km.cancel_c != 1))) {
break;
}
this.km.off$1(3);
this.km.active$1(1);
(this.km.mode = 500);
break;
}
case 540:
{
if (((this.km.kettei_c != 1) && (this.km.cancel_c != 1))) {
break;
}
this.km.off$1(3);
this.km.off$1(12);
this.km.active$1(1);
(this.km.mode = 500);
break;
}
case 550:
{
if ((this.km.cancel_c == 1)) {
this.km.off$1(12);
this.km.active$1(1);
(this.km.mode = 500);
break;
}
if ((this.km.kettei_c != 1)) {
break;
}
(this.mp.item_useID = this.km.getSelectedIndex$1(12));
var string = (this.mp.item_data_urine[this.mp.item[this.mp.item_useID]] + "円でよろしいですか？");
this.km.initSelectboxSerifu$6(13, 80, 204, 184, this.mp.name_teninsan, string);
this.km.addItem$2(13, "はい");
this.km.addItem$2(13, "いいえ");
this.km.active$1(13);
(this.km.mode = 560);
break;
}
case 560:
{
if ((this.km.cancel_c == 1)) {
this.km.off$1(13);
this.km.active$1(12);
(this.km.mode = 550);
break;
}
if ((this.km.kettei_c != 1)) {
break;
}
if ((this.km.getSelectedIndex$1(13) == 0)) {
(this.mp.j_okozukai = ((this.mp.j_okozukai + this.mp.item_data_urine[this.mp.item[this.mp.item_useID]]) | 0));
(this.km.kmo[11].item_int[0] = this.mp.j_okozukai);
this.mp.itemDelItem$1(this.mp.item_useID);
this.km.off$1(13);
this.km.off$1(12);
this.km.active$1(1);
(this.km.mode = 500);
break;
}
this.km.off$1(13);
this.km.off$1(12);
this.km.active$1(1);
(this.km.mode = 500);
break;
}
case 600:
{
if ((this.km.cancel_c == 1)) {
this.km.off$1(12);
this.km.active$1(1);
(this.km.mode = 400);
break;
}
if ((this.km.kettei_c != 1)) {
break;
}
this.km.openDialgKakuninBox$5(11, 298, 32, 192, this.mp.name_jyuuisan);
this.km.addItem$2(11, "ダイアログに");
this.km.addItem$2(11, "パスワードを表示中です。");
this.km.active$1(14);
var n6 = this.km.idlist_item[this.km.getSelectedIndex$1(12)];
if ((n6 <= 5)) {
this.passMakePet$1(n6);
}
else {
this.passMakeSyujinkou$1(n6);
}
(this.mp.rgui_text = this.pass_st);
(this.mp.rgui_name = this.mp.co_p[n6].name);
(this.mp.rgui_f = false);
(this.mp.rgui_meirei = ((n6 == 6) ? 105 : 100));
(this.km.mode = 610);
break;
}
case 610:
{
if (!this.mp.rgui_f) {
break;
}
(this.mp.rgui_meirei = 0);
this.km.off$1(12);
this.km.off$1(11);
this.km.active$1(1);
(this.gk.tr1_f = false);
(this.km.mode = 400);
break;
}
case 700:
{
var n4 = 0;
if (!this.mp.rgui_f) {
break;
}
(this.mp.rgui_meirei = 0);
this.km.off$1(11);
this.km.active$1(1);
(this.gk.tr1_f = false);
(this.pass_st = this.mp.rgui_text);
if ((this.pass_st === "cancel")) {
(this.km.mode = 400);
break;
}
++this.pass_nyuuryoku_kazu;
var bl = this.passToujyouPet$1(7);
if (((bl && (this.mp.pn_syurui > 0)) && (this.mp.co_p[7].syurui == ((1000 + Math.imul(this.mp.pn_syurui, 100)) | 0)))) {
(this.pass_st = this.mp.rgui_text);
(bl = this.passToujyouPet$1(0));
if ((this.mp.co_sodateya[0].syurui == ((1000 + Math.imul(this.mp.pn_syurui, 100)) | 0))) {
this.mp.copyMonsterObject$2(this.mp.co_p[0], this.mp.co_sodateya[0]);
(this.mp.sodateya_scc[0] = 0);
(this.mp.sodateya_scc[2] = 0);
this.km.initPetToujyouBox$4(13, 298, 104, 0);
(this.km.kmo[13].item[0] = (this.mp.name_sodateyasan + "で待ってるよ！"));
(this.km.kmo[13].width = 172);
this.km.active$1(13);
this.mp.co_p[0].initSyurui$2(1000, this.mp);
}
else {
if ((this.mp.co_sodateya[1].syurui == ((1000 + Math.imul(this.mp.pn_syurui, 100)) | 0))) {
this.mp.copyMonsterObject$2(this.mp.co_p[0], this.mp.co_sodateya[1]);
(this.mp.sodateya_scc[0] = 0);
(this.mp.sodateya_scc[2] = 0);
this.km.initPetToujyouBox$4(13, 298, 104, 0);
(this.km.kmo[13].item[0] = (this.mp.name_sodateyasan + "で待ってるよ！"));
(this.km.kmo[13].width = 172);
this.km.active$1(13);
this.mp.co_p[0].initSyurui$2(1000, this.mp);
}
else {
this.km.initPetToujyouBox$4(13, 298, 104, 0);
this.km.active$1(13);
}
}
this.zukanTourokuPet$0();
}
else {
(n2 = 1);
while ((n2 <= 5)) {
if ((this.mp.co_p[n2].syurui < 1100)) {
(this.pass_st = this.mp.rgui_text);
(bl = this.passToujyouPet$1(n2));
(n4 = this.mp.co_p[n2].pb_type);
if (bl) {
this.km.initPetToujyouBox$4(13, 298, 104, n2);
this.km.active$1(13);
this.zukanTourokuPet$0();
break;
}
this.mp.co_p[n2].initSyurui$2(1000, this.mp);
(this.mp.co_p[n2].pb_type = n4);
this.km.initMessagebox$4(13, 298, 228, 186);
if ((this.mp.rgui_text.length == 10)) {
this.km.initMessagebox$4(13, 298, 212, 192);
this.km.addItem$2(13, "主人公のパスワードは");
this.km.addItem$2(13, "ここでは入力できません。");
}
else {
if ((this.pass_error == 1)) {
this.km.addItem$2(13, "パスワードの");
this.km.addItem$2(13, "チャンネルが違います。");
}
else {
this.km.addItem$2(13, "パスワードが間違っています。");
}
}
this.km.active$1(13);
break;
}
++n2;
}
}
(this.km.mode = 420);
break;
}
case 800:
{
if ((this.km.cancel_c == 1)) {
this.km.off$1(10);
this.km.off$1(3);
this.km.active$1(-1);
(this.km.mode = 100);
break;
}
if ((this.km.kettei_c != 1)) {
break;
}
this.km.off$1(3);
this.km.initSelectbox$5(1, 120, 132, 160, "どうしますか？");
this.km.addItem$2(1, "モンスターをあずける");
this.km.addItem$2(1, "モンスターを引き取る");
this.km.addItem$2(1, "あずけたモンスターを見る");
this.km.addItem$2(1, "外へ出る");
this.km.active$1(1);
(this.km.mode = 810);
break;
}
case 810:
{
if ((this.km.cancel_c == 1)) {
this.km.off$1(10);
this.km.off$1(1);
(this.km.mode = 100);
break;
}
if ((this.km.kettei_c != 1)) {
break;
}
if ((this.km.getSelectedIndex$1(1) == 0)) {
this.km.initIdlist$0();
(n2 = 1);
while ((n2 <= 5)) {
if ((this.mp.co_p[n2].syurui >= 1100)) {
(this.km.idlist_item[this.km.idlist_kazu] = n2);
++this.km.idlist_kazu;
}
++n2;
}
if ((this.mp.co_p[0].syurui >= 1100)) {
(this.km.idlist_item[this.km.idlist_kazu] = 0);
++this.km.idlist_kazu;
}
if ((this.km.idlist_kazu <= 0)) {
this.km.initMessagebox$4(12, 298, 108, 176);
this.km.addItem$2(12, "あずけるモンスターがいません。");
this.km.active$1(12);
(this.km.mode = 820);
break;
}
if (((this.mp.sodateya_type == 1) && (this.mp.co_sodateya[0].syurui >= 1100))) {
this.km.initSerifubox$5(12, 248, 172, 176, this.mp.name_sodateyasan);
this.km.addItem$2(12, "うちにあずけられるのは");
this.km.addItem$2(12, "1 匹だけだよ。");
this.km.active$1(12);
(this.km.mode = 820);
break;
}
if ((((this.mp.sodateya_type == 2) && (this.mp.co_sodateya[0].syurui >= 1100)) && (this.mp.co_sodateya[1].syurui >= 1100))) {
this.km.initSerifubox$5(12, 248, 172, 176, this.mp.name_sodateyasan);
this.km.addItem$2(12, "うちにあずけられるのは");
this.km.addItem$2(12, "2 匹までだよ。");
this.km.active$1(12);
(this.km.mode = 820);
break;
}
this.km.initSelectbox$5(12, 348, 46, 128, "誰をあずける？");
(n2 = 0);
while ((n2 <= ((this.km.idlist_kazu - 1) | 0))) {
this.km.addItem$2(12, this.mp.co_p[this.km.idlist_item[n2]].name);
++n2;
}
this.km.active$1(12);
(this.km.mode = 850);
break;
}
if ((this.km.getSelectedIndex$1(1) == 1)) {
this.km.initIdlist$0();
(n2 = 1);
while ((n2 <= 5)) {
if ((this.mp.co_p[n2].syurui >= 1100)) {
++this.km.idlist_kazu;
}
++n2;
}
if (((this.mp.co_sodateya[0].syurui < 1100) && (this.mp.co_sodateya[1].syurui < 1100))) {
this.km.initSerifubox$5(12, 292, 92, 164, this.mp.name_sodateyasan);
this.km.addItem$2(12, "君のモンスターは");
this.km.addItem$2(12, "あずかっていないよ。");
this.km.active$1(12);
(this.km.mode = 820);
break;
}
if ((this.km.idlist_kazu >= 5)) {
this.km.initSerifubox$5(12, 248, 172, 184, this.mp.co_j.name);
if ((this.mp.co_j.seibetu == 1)) {
this.km.addItem$2(12, "そんなにたくさん、飼えないわ。");
}
else {
this.km.addItem$2(12, "そんなにたくさん、飼えないよ。");
}
this.km.active$1(12);
(this.km.mode = 820);
break;
}
if ((this.mp.sodateya_type == 1)) {
if (((this.mp.pn_syurui > 0) && (this.mp.co_sodateya[0].syurui == ((1000 + Math.imul(this.mp.pn_syurui, 100)) | 0)))) {
this.mp.copyMonsterObject$2(this.mp.co_sodateya[0], this.mp.co_p[0]);
this.mp.co_sodateya[0].initSyurui$2(1000, this.mp);
(this.mp.co_p[0].hp = this.mp.co_p[0].hp_max);
(this.mp.co_p[0].pp = this.mp.co_p[0].pp_max);
this.km.initPetHikitoriBox$4(13, 294, 132, 0);
this.km.active$1(13);
}
else {
(n2 = 1);
while ((n2 <= 5)) {
if ((this.mp.co_p[n2].syurui < 1100)) {
this.mp.copyMonsterObject$2(this.mp.co_sodateya[0], this.mp.co_p[n2]);
this.mp.co_sodateya[0].initSyurui$2(1000, this.mp);
(this.mp.co_p[n2].hp = this.mp.co_p[n2].hp_max);
(this.mp.co_p[n2].pp = this.mp.co_p[n2].pp_max);
this.km.initPetHikitoriBox$4(13, 294, 132, n2);
this.km.active$1(13);
break;
}
++n2;
}
}
(this.km.mode = 820);
break;
}
this.km.initIdlist$0();
if ((this.mp.co_sodateya[0].syurui >= 1100)) {
(this.km.idlist_item[this.km.idlist_kazu] = 0);
++this.km.idlist_kazu;
}
if ((this.mp.co_sodateya[1].syurui >= 1100)) {
(this.km.idlist_item[this.km.idlist_kazu] = 1);
++this.km.idlist_kazu;
}
this.km.initSelectbox$5(12, 294, 44, 126, "誰を引き取る？");
(n2 = 0);
while ((n2 <= ((this.km.idlist_kazu - 1) | 0))) {
this.km.addItem$2(12, this.mp.co_sodateya[this.km.idlist_item[n2]].name);
++n2;
}
this.km.active$1(12);
(this.km.mode = 870);
break;
}
if ((this.km.getSelectedIndex$1(1) == 2)) {
if (((this.mp.co_sodateya[0].syurui < 1100) && (this.mp.co_sodateya[1].syurui < 1100))) {
this.km.initSerifubox$5(12, 292, 92, 164, this.mp.name_sodateyasan);
this.km.addItem$2(12, "君のモンスターは");
this.km.addItem$2(12, "あずかって、いないよ。");
this.km.active$1(12);
(this.km.mode = 820);
}
else {
this.km.initAzuketaPetBox$4(12, 292, 76, 116);
this.km.active$1(12);
}
(this.km.mode = 820);
break;
}
this.km.off$1(10);
this.km.off$1(1);
(this.km.mode = 100);
break;
}
case 820:
{
if (((this.km.kettei_c != 1) && (this.km.cancel_c != 1))) {
break;
}
this.km.off$1(12);
this.km.off$1(13);
this.km.off$1(4);
this.km.off$1(5);
this.km.active$1(1);
(this.km.mode = 810);
break;
}
case 850:
{
if ((this.km.cancel_c == 1)) {
this.km.off$1(12);
this.km.active$1(1);
(this.km.mode = 810);
break;
}
if ((this.km.kettei_c != 1)) {
break;
}
var string = "1回、10円です。よろしいですか？";
this.km.initSelectboxSerifu$6(4, 256, 172, 220, this.mp.name_sodateyasan, string);
this.km.addItem$2(4, "はい");
this.km.addItem$2(4, "いいえ");
this.km.active$1(4);
(this.km.mode = 860);
break;
}
case 860:
{
var n6 = 0;
if ((this.km.cancel_c == 1)) {
this.km.off$1(4);
this.km.active$1(12);
(this.km.mode = 850);
break;
}
if ((this.km.kettei_c != 1)) {
break;
}
if ((this.km.getSelectedIndex$1(4) == 0)) {
if ((this.mp.j_okozukai < 10)) {
this.km.initDoubleSerifubox$5(5, 48, 186, 186, this.mp.co_j.name);
if ((this.mp.co_j.seibetu == 1)) {
this.km.addItem$2(5, "あらっ。お金が足りないわ。");
}
else {
this.km.addItem$2(5, "あれっ。お金が足りないや。");
}
this.km.addItem$2(5, this.mp.name_sodateyasan);
this.km.addItem$2(5, "さようなら。");
this.km.active$1(5);
(this.km.mode = 150);
break;
}
(this.mp.j_okozukai = ((this.mp.j_okozukai - 10) | 0));
this.km.initSerifubox$5(5, 120, 230, 192, this.mp.name_sodateyasan);
this.km.addItem$2(5, "ステージを２つクリアーしたら、");
this.km.addItem$2(5, "また来てね！");
this.km.active$1(5);
(n6 = this.km.idlist_item[this.km.getSelectedIndex$1(12)]);
if ((this.mp.co_sodateya[0].syurui < 1100)) {
this.mp.copyMonsterObject$2(this.mp.co_p[n6], this.mp.co_sodateya[0]);
this.mp.co_p[n6].initSyurui$2(1000, this.mp);
(this.mp.sodateya_scc[0] = 0);
(this.mp.sodateya_scc[2] = 0);
}
else {
if ((this.mp.sodateya_type == 2)) {
this.mp.copyMonsterObject$2(this.mp.co_p[n6], this.mp.co_sodateya[1]);
this.mp.co_p[n6].initSyurui$2(1000, this.mp);
(this.mp.sodateya_scc[1] = 0);
(this.mp.sodateya_scc[2] = 0);
}
}
(this.km.mode = 820);
break;
}
this.km.off$1(4);
this.km.off$1(12);
this.km.active$1(1);
(this.km.mode = 810);
break;
}
case 870:
{
if ((this.km.cancel_c == 1)) {
this.km.off$1(12);
this.km.active$1(1);
(this.km.mode = 810);
break;
}
if ((this.km.kettei_c != 1)) {
break;
}
var n6 = this.km.idlist_item[this.km.getSelectedIndex$1(12)];
if (((this.mp.pn_syurui > 0) && (this.mp.co_sodateya[n6].syurui == ((1000 + Math.imul(this.mp.pn_syurui, 100)) | 0)))) {
this.mp.copyMonsterObject$2(this.mp.co_sodateya[n6], this.mp.co_p[0]);
this.mp.co_sodateya[n6].initSyurui$2(1000, this.mp);
(this.mp.co_p[0].hp = this.mp.co_p[0].hp_max);
(this.mp.co_p[0].pp = this.mp.co_p[0].pp_max);
this.km.initPetHikitoriBox$4(13, 294, 132, 0);
this.km.active$1(13);
}
else {
(n2 = 1);
while ((n2 <= 5)) {
if ((this.mp.co_p[n2].syurui < 1100)) {
if ((((this.mp.co_sodateya[n6].syurui == 4100) && (this.mp.co_sodateya[n6].level >= 3)) && (this.mp.co_sodateya[n6].id == this.mp.co_j.id))) {
(this.mp.co_sodateya[n6].syurui = 4200);
if (this.mp.co_sodateya[n6].name_df) {
(this.mp.co_sodateya[n6].name = this.mp.name_mirocureall);
}
}
this.mp.copyMonsterObject$2(this.mp.co_sodateya[n6], this.mp.co_p[n2]);
this.mp.co_sodateya[n6].initSyurui$2(1000, this.mp);
(this.mp.co_p[n2].hp = this.mp.co_p[n2].hp_max);
(this.mp.co_p[n2].pp = this.mp.co_p[n2].pp_max);
this.km.initPetHikitoriBox$4(13, 294, 132, n2);
this.km.active$1(13);
this.zukanTourokuPet$0();
break;
}
++n2;
}
}
(this.mp.sodateya_scc[2] = 0);
if (((this.mp.co_sodateya[0].syurui < 1100) && (this.mp.co_sodateya[1].syurui >= 1100))) {
this.mp.copyMonsterObject$2(this.mp.co_sodateya[1], this.mp.co_sodateya[0]);
(this.mp.sodateya_scc[0] = this.mp.sodateya_scc[1]);
(this.mp.sodateya_scc[1] = 0);
this.mp.co_sodateya[1].initSyurui$2(1000, this.mp);
}
(this.km.mode = 820);
break;
}
case 900:
{
if ((this.km.cancel_c == 1)) {
this.km.off$1(3);
this.km.off$1(10);
this.km.active$1(-1);
(this.km.mode = 100);
break;
}
if ((this.km.kettei_c != 1)) {
break;
}
var n7 = 0;
var n8 = 1;
if ((this.mp.co_sodateya[0].seibetu == 1)) {
(n7 = 1);
(n8 = 0);
}
if ((this.mp.co_sodateya[n8].syurui == 4200)) {
this.mp.co_p[7].initSyurui$2(4100, this.mp);
}
else {
this.mp.co_p[7].initSyurui$2(this.mp.co_sodateya[n8].syurui, this.mp);
}
this.km.openCharacterbox$6(5, 376, 32, 100, this.mp.co_p[7].spt[0], this.mp.co_p[7].name);
var string = "この子、欲しいですか？";
this.km.initSelectboxSerifu$6(4, 292, 150, 184, this.mp.name_sodateyasan, string);
this.km.addItem$2(4, "はい");
this.km.addItem$2(4, "いいえ");
this.km.active$1(4);
(this.km.mode = 910);
break;
}
case 910:
{
var n8 = 0;
var n7 = 0;
var bl = false;
var n5 = 0;
var n3 = 0;
var n4 = 0;
if ((this.km.cancel_c == 1)) {
this.km.off$1(3);
this.km.off$1(4);
this.km.off$1(5);
this.km.off$1(10);
this.km.active$1(-1);
(this.km.mode = 100);
break;
}
if ((this.km.kettei_c != 1)) {
break;
}
if ((this.km.getSelectedIndex$1(4) == 0)) {
this.km.initIdlist$0();
(n2 = 1);
while ((n2 <= 5)) {
if ((this.mp.co_p[n2].syurui >= 1100)) {
++this.km.idlist_kazu;
}
++n2;
}
if ((this.km.idlist_kazu >= 5)) {
this.km.initSerifubox$5(12, 292, 238, 184, this.mp.co_j.name);
if ((this.mp.co_j.seibetu == 1)) {
this.km.addItem$2(12, "そんなにたくさん、飼えないわ。");
}
else {
this.km.addItem$2(12, "そんなにたくさん、飼えないよ。");
}
this.km.active$1(12);
(this.km.mode = 150);
break;
}
this.km.initMessagebox$4(6, 296, 238, 180);
this.km.addItem$2(6, (this.mp.co_p[7].name + "は"));
this.km.addItem$2(6, (this.mp.co_j.name + "のモンスターになった。"));
this.km.active$1(6);
(this.mp.sodateya_scc[2] = 0);
(n2 = 1);
while ((n2 <= 5)) {
if ((this.mp.co_p[n2].syurui < 1100)) {
var n9 = 0;
(n7 = 0);
(n8 = 1);
if ((this.mp.co_sodateya[0].seibetu == 1)) {
(n7 = 1);
(n8 = 0);
}
(n = ((this.mp.co_p[n2].syurui == 1000) ? this.mp.co_p[n2].pb_type : 0));
if ((this.mp.co_sodateya[n8].syurui == 4200)) {
this.mp.co_p[n2].initSyurui$2(4100, this.mp);
}
else {
this.mp.co_p[n2].initSyurui$2(this.mp.co_sodateya[n8].syurui, this.mp);
}
(this.mp.co_p[n2].pb_type = n);
(this.mp.co_p[n2].id = this.mp.co_j.id);
this.km.initIdlist$0();
(n5 = 0);
while ((n5 <= 9)) {
(n4 = this.mp.co_sodateya[n7].waza_code[n5]);
(bl = true);
if ((n4 < 3)) {
(bl = false);
}
(n9 = 0);
while ((n9 <= 9)) {
if ((n4 == this.mp.co_p[n2].waza_code[n9])) {
(bl = false);
break;
}
++n9;
}
if (bl) {
(this.km.idlist_item[this.km.idlist_kazu] = n4);
++this.km.idlist_kazu;
}
++n5;
}
if ((((this.mp.co_p[n2].type == 1) && (this.mp.co_p[n2].seibetu == 1)) && (this.mp.ranInt$1(3) == 0))) {
(this.km.idlist_item[this.km.idlist_kazu] = (n = this.mp.waza_rea[1][this.mp.ranInt$1(this.mp.waza_rea_kazu[1])]));
++this.km.idlist_kazu;
}
if ((this.km.idlist_kazu >= 1)) {
(n = this.mp.ranInt$1(this.km.idlist_kazu));
(this.mp.co_p[n2].tuikawaza[0] = (n3 = this.km.idlist_item[n]));
this.mp.co_p[n2].insertWaza$2(n3, this.mp.waza_dname[n3]);
}
if (((n4 = this.mp.co_sodateya[n7].tuikawaza[0]) < 3)) {
break;
}
this.km.initIdlist$0();
(n5 = 0);
while ((n5 <= 9)) {
(n4 = this.mp.co_sodateya[n7].waza_code[n5]);
(bl = true);
if ((n4 < 3)) {
(bl = false);
}
(n9 = 0);
while ((n9 <= 9)) {
if ((n4 == this.mp.co_p[n2].waza_code[n9])) {
(bl = false);
break;
}
++n9;
}
if ((n4 == this.mp.co_p[n2].tuikawaza[0])) {
(bl = false);
}
if (bl) {
(this.km.idlist_item[this.km.idlist_kazu] = n4);
++this.km.idlist_kazu;
}
++n5;
}
if ((this.km.idlist_kazu < 1)) {
break;
}
(n = this.mp.ranInt$1(this.km.idlist_kazu));
(this.mp.co_p[n2].tuikawaza[1] = (n3 = this.km.idlist_item[n]));
this.mp.co_p[n2].insertWaza$2(n3, this.mp.waza_dname[n3]);
break;
}
++n2;
}
(this.km.mode = 920);
break;
}
this.km.off$1(3);
this.km.off$1(4);
this.km.off$1(5);
(this.mp.sodateya_scc[2] = 0);
this.km.initSelectbox$5(1, 120, 132, 160, "どうしますか？");
this.km.addItem$2(1, "モンスターをあずける");
this.km.addItem$2(1, "モンスターを引き取る");
this.km.addItem$2(1, "あずけたモンスターを見る");
this.km.addItem$2(1, "外へ出る");
this.km.active$1(1);
(this.km.mode = 810);
break;
}
case 920:
{
if ((this.km.cancel_c == 1)) {
this.km.off$1(3);
this.km.off$1(4);
this.km.off$1(5);
this.km.off$1(6);
this.km.off$1(10);
this.km.active$1(-1);
(this.km.mode = 100);
break;
}
if ((this.km.kettei_c != 1)) {
break;
}
this.km.off$1(3);
this.km.off$1(4);
this.km.off$1(5);
this.km.off$1(6);
this.km.initSelectbox$5(1, 120, 132, 160, "どうしますか？");
this.km.addItem$2(1, "モンスターをあずける");
this.km.addItem$2(1, "モンスターを引き取る");
this.km.addItem$2(1, "あずけたモンスターを見る");
this.km.addItem$2(1, "外へ出る");
this.km.active$1(1);
(this.km.mode = 810);
break;
}
case 1000:
{
if ((this.km.cancel_c == 1)) {
this.km.off$1(10);
this.km.off$1(3);
(this.km.mode = 100);
break;
}
if ((this.km.kettei_c != 1)) {
break;
}
this.km.off$1(3);
this.km.initSelectbox$5(1, 120, 132, 216, "どうしますか？");
this.km.addItem$2(1, (this.mp.gym_name + "に挑戦する"));
this.km.addItem$2(1, "モンスター同士を戦わせる");
this.km.addItem$2(1, "モンスターレース ミニ");
this.km.addItem$2(1, "やめる");
this.km.active$1(1);
(this.km.mode = 1010);
break;
}
case 1010:
{
if ((this.km.cancel_c == 1)) {
this.km.off$1(10);
this.km.off$1(1);
(this.km.mode = 100);
break;
}
if ((this.km.kettei_c != 1)) {
break;
}
if ((this.km.getSelectedIndex$1(1) == 0)) {
if ((this.mp.gym_cyousen_kazu == 10)) {
this.km.initSerifubox$5(12, 272, 92, 216, this.mp.gym_name);
this.mp.addSerifuGym$3(12, 7, 1);
this.km.active$1(12);
(this.km.mode = 1040);
break;
}
if ((this.mp.gym_cyousen_kazu >= 3)) {
this.km.initMessagebox$4(12, 272, 190, 200);
this.km.addItem$2(12, (this.mp.gym_name + "への挑戦は3回までです。"));
this.km.active$1(12);
(this.km.mode = 1040);
break;
}
this.km.initSerifubox$5(11, 272, 92, 216, this.mp.gym_name);
this.mp.addSerifuGym$3(11, 2, 3);
this.km.active$1(11);
(this.km.mode = 1100);
break;
}
if ((this.km.getSelectedIndex$1(1) == 1)) {
this.km.initSelectbox$5(11, 272, 92, 216, "試合のルールは？");
this.km.addItem$2(11, "シングルバトル");
this.km.addItem$2(11, "ダブルバトル");
this.km.active$1(11);
(this.km.mode = 1015);
break;
}
if ((this.km.getSelectedIndex$1(1) == 2)) {
this.km.initSerifubox$5(11, 272, 92, 216, this.mp.gym_name);
this.mp.addSerifuGym$3(11, 11, 3);
this.km.active$1(11);
(this.km.mode = 1300);
break;
}
this.km.off$1(10);
this.km.off$1(1);
(this.km.mode = 100);
break;
}
case 1015:
{
if ((this.km.cancel_c == 1)) {
this.km.off$1(11);
this.km.active$1(1);
(this.km.mode = 1010);
break;
}
if ((this.km.kettei_c != 1)) {
break;
}
(this.mp.gym_double_f = (this.km.getSelectedIndex$1(11) != 0));
(this.mp.gym_gr_f = false);
this.km.initIdlist$0();
(n2 = 0);
while ((n2 <= 5)) {
if ((this.mp.co_p[n2].syurui >= 1100)) {
++this.km.idlist_kazu;
}
++n2;
}
if ((!this.mp.gym_double_f && (this.km.idlist_kazu <= 1))) {
this.km.initSerifubox$5(12, 272, 176, 216, this.mp.gym_name);
this.km.addItem$2(12, "モンスターが２匹以上必要です。");
this.km.active$1(12);
(this.km.mode = 1030);
break;
}
if ((this.mp.gym_double_f && (this.km.idlist_kazu <= 3))) {
this.km.initSerifubox$5(12, 272, 176, 216, this.mp.gym_name);
this.km.addItem$2(12, "モンスターが４匹以上必要です。");
this.km.active$1(12);
(this.km.mode = 1030);
break;
}
this.km.initSelectbox$5(12, 272, 176, 216, "1回10円です。よろしいですか？");
this.km.addItem$2(12, "はい");
this.km.addItem$2(12, "いいえ");
this.km.active$1(12);
(this.km.mode = 1020);
break;
}
case 1020:
{
if ((this.km.cancel_c == 1)) {
this.km.off$1(12);
this.km.active$1(11);
(this.km.mode = 1015);
break;
}
if ((this.km.kettei_c != 1)) {
break;
}
if ((this.km.getSelectedIndex$1(12) == 0)) {
if ((this.mp.j_okozukai < 10)) {
this.km.initSerifubox$5(5, 272, 246, 216, this.mp.co_j.name);
if ((this.mp.co_j.seibetu == 1)) {
this.km.addItem$2(5, "あらっ。お金が足りないわ。");
}
else {
this.km.addItem$2(5, "あれっ。お金が足りないや。");
}
this.km.active$1(5);
(this.km.mode = 150);
break;
}
(this.mp.j_okozukai = ((this.mp.j_okozukai - 10) | 0));
(this.mode = 400);
(this.cc_hankei = 370);
(this.cc_kakudo = 45);
(this.co_j.ac = 0);
(this.co_j.pt = 100);
break;
}
this.km.off$1(11);
this.km.off$1(12);
this.km.active$1(1);
(this.km.mode = 1010);
break;
}
case 1030:
{
if ((this.km.cancel_c == 1)) {
this.km.off$1(12);
this.km.active$1(11);
(this.km.mode = 1015);
break;
}
if ((this.km.kettei_c != 1)) {
break;
}
this.km.off$1(11);
this.km.off$1(12);
this.km.active$1(1);
(this.km.mode = 1010);
break;
}
case 1040:
{
if (((this.km.cancel_c != 1) && (this.km.kettei_c != 1))) {
break;
}
this.km.off$1(12);
this.km.active$1(1);
(this.km.mode = 1010);
break;
}
case 1100:
{
if ((this.km.cancel_c == 1)) {
this.km.off$1(11);
this.km.active$1(1);
(this.km.mode = 1010);
break;
}
if ((this.km.kettei_c != 1)) {
break;
}
(this.mp.gym_double_f = false);
(this.mp.gym_gr_f = true);
this.km.initIdlist$0();
(n2 = 0);
while ((n2 <= 5)) {
if ((this.mp.co_p[n2].syurui >= 1100)) {
++this.km.idlist_kazu;
}
++n2;
}
if ((this.km.idlist_kazu < 1)) {
this.km.initMessagebox$4(12, 272, 190, 216);
this.km.addItem$2(12, "モンスターが１匹以上必要です。");
this.km.active$1(12);
(this.km.mode = 1110);
break;
}
this.km.initSelectbox$5(12, 272, 190, 216, "1回10円です。よろしいですか？");
this.km.addItem$2(12, "はい");
this.km.addItem$2(12, "いいえ");
this.km.active$1(12);
(this.km.mode = 1120);
break;
}
case 1110:
{
if ((this.km.cancel_c == 1)) {
this.km.off$1(12);
this.km.active$1(11);
(this.km.mode = 1100);
break;
}
if ((this.km.kettei_c != 1)) {
break;
}
this.km.off$1(11);
this.km.off$1(12);
this.km.active$1(1);
(this.km.mode = 1010);
break;
}
case 1120:
{
if ((this.km.cancel_c == 1)) {
this.km.off$1(12);
this.km.active$1(11);
(this.km.mode = 1100);
break;
}
if ((this.km.kettei_c != 1)) {
break;
}
if ((this.km.getSelectedIndex$1(12) == 0)) {
if ((this.mp.j_okozukai < 10)) {
this.km.initSerifubox$5(5, 68, 216, 192, this.mp.co_j.name);
if ((this.mp.co_j.seibetu == 1)) {
this.km.addItem$2(5, "あらっ。お金が足りないわ。");
}
else {
this.km.addItem$2(5, "あれっ。お金が足りないや。");
}
this.km.active$1(5);
(this.km.mode = 150);
break;
}
(this.mp.j_okozukai = ((this.mp.j_okozukai - 10) | 0));
(this.mode = 400);
(this.cc_hankei = 370);
(this.cc_kakudo = 45);
(this.co_j.ac = 0);
(this.co_j.pt = 100);
break;
}
this.km.off$1(11);
this.km.off$1(12);
this.km.active$1(1);
(this.km.mode = 1010);
break;
}
case 1200:
{
if ((this.km.kettei_c != 1)) {
break;
}
this.km.initMessagebox$4(12, 296, 64, 128);
this.km.addItem$2(12, "賞金 100円を得た。");
this.km.active$1(12);
(this.mp.j_okozukai = ((this.mp.j_okozukai + 100) | 0));
(this.km.mode = 150);
break;
}
case 1300:
{
if ((this.km.cancel_c == 1)) {
this.km.off$1(11);
this.km.active$1(1);
(this.km.mode = 1010);
break;
}
if ((this.km.kettei_c != 1)) {
break;
}
(this.mp.gym_double_f = false);
(this.mp.gym_gr_f = false);
this.km.initIdlist$0();
(n2 = 0);
while ((n2 <= 5)) {
if (((this.mp.co_p[n2].syurui >= 1100) && (this.mp.co_p[n2].type == 0))) {
++this.km.idlist_kazu;
}
++n2;
}
if ((this.km.idlist_kazu < 1)) {
this.km.initMessagebox$4(12, 272, 190, 216);
this.km.addItem$2(12, "モンスターが１匹以上必要です。");
this.km.active$1(12);
(this.km.mode = 1310);
break;
}
this.km.initSelectbox$5(12, 272, 190, 216, "1回10円です。よろしいですか？");
this.km.addItem$2(12, "はい");
this.km.addItem$2(12, "いいえ");
this.km.active$1(12);
(this.km.mode = 1320);
break;
}
case 1310:
{
if ((this.km.cancel_c == 1)) {
this.km.off$1(12);
this.km.active$1(11);
(this.km.mode = 1300);
break;
}
if ((this.km.kettei_c != 1)) {
break;
}
this.km.off$1(11);
this.km.off$1(12);
this.km.active$1(1);
(this.km.mode = 1010);
break;
}
case 1320:
{
if ((this.km.cancel_c == 1)) {
this.km.off$1(12);
this.km.active$1(11);
(this.km.mode = 1300);
break;
}
if ((this.km.kettei_c != 1)) {
break;
}
if ((this.km.getSelectedIndex$1(12) == 0)) {
if ((this.mp.j_okozukai < 10)) {
this.km.initSerifubox$5(5, 68, 216, 192, this.mp.co_j.name);
if ((this.mp.co_j.seibetu == 1)) {
this.km.addItem$2(5, "あらっ。お金が足りないわ。");
}
else {
this.km.addItem$2(5, "あれっ。お金が足りないや。");
}
this.km.active$1(5);
(this.km.mode = 150);
break;
}
(this.mp.j_okozukai = ((this.mp.j_okozukai - 10) | 0));
(this.mode = 410);
(this.cc_hankei = 370);
(this.cc_kakudo = 45);
(this.co_j.ac = 0);
(this.co_j.pt = 100);
break;
}
this.km.off$1(11);
this.km.off$1(12);
this.km.active$1(1);
(this.km.mode = 1010);
break;
}
case 2000:
{
if ((this.km.cancel_c == 1)) {
this.km.off$1(1);
this.km.off$1(3);
(this.km.mode = 100);
break;
}
if ((this.km.kettei_c != 1)) {
break;
}
this.km.initSerifubox$5(3, 112, 132, 256, this.mp.name_furuure);
this.mp.addSerifu$3(3, 11, 4);
this.km.active$1(3);
(this.km.mode = 150);
break;
}
case 2050:
{
if ((this.km.cancel_c == 1)) {
this.km.off$1(1);
this.km.off$1(3);
(this.km.mode = 100);
break;
}
if ((this.km.kettei_c != 1)) {
break;
}
this.km.initSerifubox$5(3, 112, 132, 256, this.mp.name_furuure);
this.mp.addSerifu$3(3, 13, 4);
this.km.active$1(3);
(this.km.mode = 2060);
break;
}
case 2060:
{
if (((this.km.kettei_c != 1) && (this.km.cancel_c != 1))) {
break;
}
(this.mode = 100);
(this.cc_hankei = 320);
(this.co_j.ac = 0);
break;
}
case 2100:
{
if ((this.km.cancel_c == 1)) {
this.km.off$1(1);
this.km.off$1(3);
(this.km.mode = 100);
break;
}
if ((this.km.kettei_c != 1)) {
break;
}
this.km.initSerifubox$5(3, 112, 132, 256, this.mp.name_message1);
this.mp.addSerifu$3(3, 21, 4);
this.km.active$1(3);
(this.km.mode = 150);
break;
}
case 2150:
{
if ((this.km.cancel_c == 1)) {
this.km.off$1(1);
this.km.off$1(3);
(this.km.mode = 100);
break;
}
if ((this.km.kettei_c != 1)) {
break;
}
this.km.initSerifubox$5(3, 112, 132, 256, this.mp.name_message2);
this.mp.addSerifu$3(3, 23, 4);
this.km.active$1(3);
(this.km.mode = 150);
}
}
this.km.move$0();
}
if ((this.co_j.pt == 1000)) {
this.gg.drawPT$4(((this.co_j.x + 16) | 0), ((((((this.co_j.y + 24) | 0) - 12) | 0) - 6) | 0), ((100 + this.mp.j_pt_ss) | 0), this.co_j.muki);
}
else {
if ((this.co_j.pt == 1010)) {
this.gg.drawPT$4(((this.co_j.x + 16) | 0), ((((((this.co_j.y + 24) | 0) - 12) | 0) + 5) | 0), ((100 + this.mp.j_pt_ss) | 0), this.co_j.muki);
}
else {
this.gg.drawPT$4(((this.co_j.x + 16) | 0), ((((this.co_j.y + 24) | 0) - 12) | 0), ((this.co_j.pt + this.mp.j_pt_ss) | 0), this.co_j.muki);
}
}
(n2 = 0);
while ((n2 <= 5)) {
if ((this.mp.co_p[n2].syurui >= 1100)) {
if ((this.co_p.pt == 1140)) {
if ((this.mp.co_p[n2].type == 1)) {
if ((this.mp.co_p[n2].spt[0] == 274)) {
if ((this.co_p.muki == 0)) {
this.gg.drawPT$4(((((this.co_p.x + 16) | 0) - 16) | 0), ((((((this.co_p.y + 24) | 0) - 12) | 0) - 16) | 0), 286, 0);
this.gg.drawPT$4(((((this.co_p.x + 16) | 0) + 16) | 0), ((((((this.co_p.y + 24) | 0) - 12) | 0) - 16) | 0), 287, 0);
this.gg.drawPT$4(((((this.co_p.x + 16) | 0) - 16) | 0), ((((((this.co_p.y + 24) | 0) - 12) | 0) + 16) | 0), 296, 0);
this.gg.drawPT$4(((((this.co_p.x + 16) | 0) + 16) | 0), ((((((this.co_p.y + 24) | 0) - 12) | 0) + 16) | 0), 297, 0);
break;
}
this.gg.drawPT$4(((((this.co_p.x + 16) | 0) - 16) | 0), ((((((this.co_p.y + 24) | 0) - 12) | 0) - 16) | 0), 287, 1);
this.gg.drawPT$4(((((this.co_p.x + 16) | 0) + 16) | 0), ((((((this.co_p.y + 24) | 0) - 12) | 0) - 16) | 0), 286, 1);
this.gg.drawPT$4(((((this.co_p.x + 16) | 0) - 16) | 0), ((((((this.co_p.y + 24) | 0) - 12) | 0) + 16) | 0), 297, 1);
this.gg.drawPT$4(((((this.co_p.x + 16) | 0) + 16) | 0), ((((((this.co_p.y + 24) | 0) - 12) | 0) + 16) | 0), 296, 1);
break;
}
if ((((this.mp.co_p[n2].syurui == 2500) || (this.mp.co_p[n2].syurui == 3300)) || (this.mp.co_p[n2].syurui == 3600))) {
if (((this.mp.co_p[n2].syurui == 2500) && (this.mp.g_c3 >= 6))) {
this.gg.drawPT$4(((this.co_p.x + 16) | 0), ((((this.co_p.y + 24) | 0) - 12) | 0), 154, 0);
break;
}
this.gg.drawPT$4(((this.co_p.x + 16) | 0), ((((this.co_p.y + 24) | 0) - 12) | 0), this.mp.co_p[n2].spt[0], 0);
break;
}
this.gg.drawPT$4(((this.co_p.x + 16) | 0), ((((this.co_p.y + 24) | 0) - 12) | 0), this.mp.co_p[n2].spt[((1 + this.mp.g_ac) | 0)], this.co_p.muki);
break;
}
if ((this.mp.co_p[n2].spt[0] == 273)) {
if ((this.co_p.muki == 0)) {
this.gg.drawPT$4(((((this.co_p.x + 16) | 0) - 16) | 0), ((((((((this.co_p.y + 24) | 0) - 12) | 0) - 32) | 0) - 8) | 0), 284, 0);
this.gg.drawPT$4(((((this.co_p.x + 16) | 0) + 16) | 0), ((((((((this.co_p.y + 24) | 0) - 12) | 0) - 32) | 0) - 8) | 0), 285, 0);
this.gg.drawPT$4(((((this.co_p.x + 16) | 0) - 16) | 0), ((((((this.co_p.y + 24) | 0) - 12) | 0) - 8) | 0), 294, 0);
this.gg.drawPT$4(((((this.co_p.x + 16) | 0) + 16) | 0), ((((((this.co_p.y + 24) | 0) - 12) | 0) - 8) | 0), 295, 0);
break;
}
this.gg.drawPT$4(((((this.co_p.x + 16) | 0) - 16) | 0), ((((((((this.co_p.y + 24) | 0) - 12) | 0) - 32) | 0) - 8) | 0), 285, 1);
this.gg.drawPT$4(((((this.co_p.x + 16) | 0) + 16) | 0), ((((((((this.co_p.y + 24) | 0) - 12) | 0) - 32) | 0) - 8) | 0), 284, 1);
this.gg.drawPT$4(((((this.co_p.x + 16) | 0) - 16) | 0), ((((((this.co_p.y + 24) | 0) - 12) | 0) - 8) | 0), 295, 1);
this.gg.drawPT$4(((((this.co_p.x + 16) | 0) + 16) | 0), ((((((this.co_p.y + 24) | 0) - 12) | 0) - 8) | 0), 294, 1);
break;
}
this.gg.drawPT$4(((this.co_p.x + 16) | 0), ((((((this.co_p.y + 24) | 0) - 12) | 0) - 6) | 0), this.mp.co_p[n2].spt[0], this.co_p.muki);
break;
}
if ((this.mp.co_p[n2].type == 1)) {
if ((this.mp.co_p[n2].spt[0] == 274)) {
if ((this.co_p.muki == 0)) {
this.gg.drawPT$4(((((this.co_p.x + 16) | 0) - 16) | 0), ((((((this.co_p.y + 24) | 0) - 12) | 0) - 16) | 0), 286, 0);
this.gg.drawPT$4(((((this.co_p.x + 16) | 0) + 16) | 0), ((((((this.co_p.y + 24) | 0) - 12) | 0) - 16) | 0), 287, 0);
this.gg.drawPT$4(((((this.co_p.x + 16) | 0) - 16) | 0), ((((((this.co_p.y + 24) | 0) - 12) | 0) + 16) | 0), 296, 0);
this.gg.drawPT$4(((((this.co_p.x + 16) | 0) + 16) | 0), ((((((this.co_p.y + 24) | 0) - 12) | 0) + 16) | 0), 297, 0);
break;
}
this.gg.drawPT$4(((((this.co_p.x + 16) | 0) - 16) | 0), ((((((this.co_p.y + 24) | 0) - 12) | 0) - 16) | 0), 287, 1);
this.gg.drawPT$4(((((this.co_p.x + 16) | 0) + 16) | 0), ((((((this.co_p.y + 24) | 0) - 12) | 0) - 16) | 0), 286, 1);
this.gg.drawPT$4(((((this.co_p.x + 16) | 0) - 16) | 0), ((((((this.co_p.y + 24) | 0) - 12) | 0) + 16) | 0), 297, 1);
this.gg.drawPT$4(((((this.co_p.x + 16) | 0) + 16) | 0), ((((((this.co_p.y + 24) | 0) - 12) | 0) + 16) | 0), 296, 1);
break;
}
if ((((this.mp.co_p[n2].syurui == 2500) || (this.mp.co_p[n2].syurui == 3300)) || (this.mp.co_p[n2].syurui == 3600))) {
if (((this.mp.co_p[n2].syurui == 2500) && (this.mp.g_c3 >= 6))) {
this.gg.drawPT$4(((this.co_p.x + 16) | 0), ((((this.co_p.y + 24) | 0) - 12) | 0), 154, 0);
break;
}
this.gg.drawPT$4(((this.co_p.x + 16) | 0), ((((this.co_p.y + 24) | 0) - 12) | 0), this.mp.co_p[n2].spt[0], 0);
break;
}
this.gg.drawPT$4(((this.co_p.x + 16) | 0), ((((this.co_p.y + 24) | 0) - 12) | 0), this.mp.co_p[n2].spt[((1 + this.mp.g_ac) | 0)], this.co_p.muki);
break;
}
if ((this.mp.co_p[n2].spt[0] == 273)) {
if ((this.co_p.muki == 0)) {
this.gg.drawPT$4(((((this.co_p.x + 16) | 0) - 16) | 0), ((((((this.co_p.y + 24) | 0) - 12) | 0) - 32) | 0), 284, 0);
this.gg.drawPT$4(((((this.co_p.x + 16) | 0) + 16) | 0), ((((((this.co_p.y + 24) | 0) - 12) | 0) - 32) | 0), 285, 0);
this.gg.drawPT$4(((((this.co_p.x + 16) | 0) - 16) | 0), ((((this.co_p.y + 24) | 0) - 12) | 0), 294, 0);
this.gg.drawPT$4(((((this.co_p.x + 16) | 0) + 16) | 0), ((((this.co_p.y + 24) | 0) - 12) | 0), 295, 0);
break;
}
this.gg.drawPT$4(((((this.co_p.x + 16) | 0) - 16) | 0), ((((((this.co_p.y + 24) | 0) - 12) | 0) - 32) | 0), 285, 1);
this.gg.drawPT$4(((((this.co_p.x + 16) | 0) + 16) | 0), ((((((this.co_p.y + 24) | 0) - 12) | 0) - 32) | 0), 284, 1);
this.gg.drawPT$4(((((this.co_p.x + 16) | 0) - 16) | 0), ((((this.co_p.y + 24) | 0) - 12) | 0), 295, 1);
this.gg.drawPT$4(((((this.co_p.x + 16) | 0) + 16) | 0), ((((this.co_p.y + 24) | 0) - 12) | 0), 294, 1);
break;
}
if ((this.co_p.pt == 141)) {
this.gg.drawPT$4(((this.co_p.x + 16) | 0), ((((this.co_p.y + 24) | 0) - 12) | 0), this.mp.co_p[n2].spt[1], this.co_p.muki);
break;
}
if ((this.co_p.pt == 142)) {
this.gg.drawPT$4(((this.co_p.x + 16) | 0), ((((this.co_p.y + 24) | 0) - 12) | 0), this.mp.co_p[n2].spt[2], this.co_p.muki);
break;
}
this.gg.drawPT$4(((this.co_p.x + 16) | 0), ((((this.co_p.y + 24) | 0) - 12) | 0), this.mp.co_p[n2].spt[0], this.co_p.muki);
break;
}
++n2;
}
this.km.drawMenus$0();
if ((this.mode == 100)) {
this.circleCLS$1(this.cc_hankei);
(this.cc_hankei = ((this.cc_hankei - 16) | 0));
if ((this.cc_hankei < 0)) {
(this.cc_hankei = 0);
(this.mode = (((this.getBGZ$2(this.co_j.x, this.co_j.y) == 63) || (this.getBGZ$2(this.co_j.x, this.co_j.y) == 69)) ? 120 : 110));
}
}
else {
if ((this.mode == 110)) {
this.circleCLS$1(this.cc_hankei);
}
else {
if ((this.mode == 120)) {
this.circleCLS$1(this.cc_hankei);
}
else {
if ((this.mode == 130)) {
this.squareCLS$2(this.cc_hankei, this.cc_kakudo);
}
else {
if ((this.mode == 140)) {
this.squareCLS$2(this.cc_hankei, this.cc_kakudo);
}
else {
if ((this.mode == 200)) {
this.circleCLS$1(this.cc_hankei);
(this.cc_hankei = ((this.cc_hankei + 16) | 0));
if ((this.cc_hankei > 320)) {
(this.mode = 0);
if ((this.door_koID >= 1)) {
(this.map_bg[J.div(this.ie_x[this.door_koID], 32)][J.div(this.ie_y[this.door_koID], 32)] = 62);
(this.mode = 300);
(this.cc_hankei = 0);
this.drawOs2$0();
}
}
}
else {
if ((this.mode == 300)) {
++this.cc_hankei;
if ((this.cc_hankei <= 3)) {
(n = 0);
}
else {
if ((this.cc_hankei <= 6)) {
(n = 1);
}
else {
if ((this.cc_hankei <= 9)) {
(n = 0);
}
else {
if ((this.cc_hankei <= 12)) {
(n = 1);
}
else {
if ((this.cc_hankei <= 15)) {
(n = 0);
}
else {
if ((this.cc_hankei <= 18)) {
(n = 1);
}
else {
if ((this.cc_hankei <= 21)) {
(n = 0);
}
else {
if ((this.cc_hankei <= 24)) {
(n = 1);
}
else {
if ((this.cc_hankei <= 26)) {
(n = 0);
}
else {
(n = 0);
(this.mode = 0);
}
}
}
}
}
}
}
}
}
if (((n > 0) && (this.door_koID >= 1))) {
this.gg.drawPT$4(((this.ie_x[this.door_koID] + 16) | 0), ((((this.ie_y[this.door_koID] + 24) | 0) - 7) | 0), 55, 0);
}
}
else {
if ((this.mode == 400)) {
this.squareCLS$2(this.cc_hankei, this.cc_kakudo);
(this.cc_kakudo = ((this.cc_kakudo + 8) | 0));
if ((this.cc_kakudo >= 90)) {
(this.cc_kakudo = ((this.cc_kakudo - 90) | 0));
}
(this.cc_hankei = ((this.cc_hankei - 10) | 0));
if ((this.cc_hankei <= 0)) {
(this.cc_hankei = 0);
(this.mode = 130);
}
}
else {
if ((this.mode == 410)) {
this.squareCLS$2(this.cc_hankei, this.cc_kakudo);
(this.cc_kakudo = ((this.cc_kakudo + 8) | 0));
if ((this.cc_kakudo >= 90)) {
(this.cc_kakudo = ((this.cc_kakudo - 90) | 0));
}
(this.cc_hankei = ((this.cc_hankei - 10) | 0));
if ((this.cc_hankei <= 0)) {
(this.cc_hankei = 0);
(this.mode = 140);
}
}
else {
if ((this.mode == 500)) {
this.squareCLS$2(this.cc_hankei, this.cc_kakudo);
(this.cc_kakudo = ((this.cc_kakudo - 8) | 0));
if ((this.cc_kakudo < 90)) {
(this.cc_kakudo = ((this.cc_kakudo + 90) | 0));
}
(this.cc_hankei = ((this.cc_hankei + 10) | 0));
if ((this.cc_hankei >= 370)) {
(this.mode = 0);
}
}
}
}
}
}
}
}
}
}
}
}
jMove$0() {
var n = 0;
var n2 = this.co_j.x;
var n3 = this.co_j.y;
(this.co_j.pt = 100);
if (((this.co_j.vx == 0) && (this.co_j.vy == 0))) {
++this.co_j.ac;
if ((this.co_j.ac > 7)) {
(this.co_j.ac = 0);
}
if ((this.co_j.ac > 3)) {
(this.co_j.pt = 1000);
(n = this.getBGZ$2(n2, n3));
if (((((n >= 63) && (n <= 65)) || ((n >= 67) && (n <= 69))) || ((n >= 44) && (n <= 45)))) {
(this.co_j.pt = 1010);
}
}
if ((this.gk.tr1_c == 1)) {
if ((this.checkStage$0() >= 1)) {
this.km.initIdlist$0();
var n4 = 0;
while ((n4 <= 5)) {
if ((this.mp.co_p[n4].syurui >= 1100)) {
++this.km.idlist_kazu;
}
++n4;
}
if ((this.km.idlist_kazu <= 0)) {
this.km.initMessagebox$4(3, 312, 8, 192);
this.km.addItem$2(3, "モンスターなしで");
this.km.addItem$2(3, "ステージに入るのは危険です。");
this.km.active$1(3);
(this.km.mode = 150);
(this.co_j.pt = 100);
}
else {
(this.mode = 100);
(this.cc_hankei = 320);
(this.co_j.ac = 0);
(this.co_j.pt = 100);
}
}
else {
(n = this.getBGZ$2(n2, n3));
if ((n == 63)) {
this.km.openKaobox$5(1, 112, 32, 256, 200);
if ((this.mp.co_p[0].syurui < 1100)) {
if ((this.mp.pn_syurui <= 0)) {
this.km.initSerifubox$5(3, 112, 132, 256, this.mp.name_kidohakase);
this.mp.addSerifu$3(3, 2, 3);
var string = this.ap.getParameter("serifu2-4");
this.km.addItem$2(3, (this.mp.co_j.name + string));
this.km.active$1(3);
(this.km.mode = 200);
}
else {
var n5 = ((1000 + Math.imul(this.mp.pn_syurui, 100)) | 0);
if (((this.mp.co_sodateya[0].syurui != n5) && (this.mp.co_sodateya[1].syurui != n5))) {
this.km.initDoubleSerifubox$5(3, 112, 132, 256, this.mp.name_kidohakase);
this.km.addItem$2(3, (("君の" + this.zukan_name[this.mp.pn_syurui]) + "は元気かね？"));
this.km.addItem$2(3, this.mp.co_j.name);
this.km.addItem$2(3, "どきっ！");
this.km.addItem$2(3, "元気に旅をしているかも知れませんね。");
this.km.active$1(3);
(this.km.mode = 350);
}
else {
this.km.initSerifubox$5(3, 112, 132, 256, this.mp.name_kidohakase);
this.km.addItem$2(3, "どれどれ、図鑑の調子はどうかな？");
this.km.addItem$2(3, ("見つけた数  " + this.zukanGetMituketakazu$0()));
this.km.addItem$2(3, ("捕まえた数  " + this.zukanGetTukamaetakazu$0()));
if ((this.zukanGetTukamaetakazu$0() >= this.zukan_tukamaetakazu_max)) {
this.km.addItem$2(3, "ついに全部集めたようじゃな！");
}
else {
if ((this.zukanGetTukamaetakazu$0() <= 5)) {
this.km.addItem$2(3, "うーむ、まだまだじゃの。");
}
else {
this.km.addItem$2(3, "おっ、がんばっておるようじゃな！");
}
}
this.km.active$1(3);
(this.km.mode = 300);
}
}
}
else {
if ((this.zukanGetMituketakazu$0() >= 2)) {
this.km.initSerifubox$5(3, 112, 132, 256, this.mp.name_kidohakase);
this.km.addItem$2(3, "どれどれ、図鑑の調子はどうかな？");
this.km.addItem$2(3, ("見つけた数  " + this.zukanGetMituketakazu$0()));
this.km.addItem$2(3, ("捕まえた数  " + this.zukanGetTukamaetakazu$0()));
if ((this.zukanGetTukamaetakazu$0() >= this.zukan_tukamaetakazu_max)) {
this.km.addItem$2(3, "ついに全部集めたようじゃな！");
}
else {
if ((this.zukanGetTukamaetakazu$0() <= 5)) {
this.km.addItem$2(3, "うーむ、まだまだじゃの。");
}
else {
this.km.addItem$2(3, "おっ、がんばっておるようじゃな！");
}
}
this.km.active$1(3);
(this.km.mode = 300);
}
else {
this.km.initSerifubox$5(3, 112, 132, 256, this.mp.name_kidohakase);
this.mp.addSerifu$3(3, 5, 4);
this.km.active$1(3);
(this.km.mode = 150);
}
}
(this.co_j.pt = 1010);
(this.co_j.ac = 0);
}
else {
if ((n == 64)) {
this.km.openKaobox$5(10, 72, 32, 216, 202);
this.km.initSelectboxSerifu$6(1, 72, 132, 216, this.mp.name_jyuuisan, "モンスターのことならおまかせ。");
this.km.addItem$2(1, "モンスターを休ませる");
this.km.addItem$2(1, "モンスターと別れる");
this.km.addItem$2(1, "パスワードを見る");
this.km.addItem$2(1, "パスワードを入力する");
this.km.addItem$2(1, "外へ出る");
this.km.active$1(1);
(this.km.mode = 400);
(this.co_j.pt = 1010);
(this.co_j.ac = 0);
}
else {
if ((n == 65)) {
this.km.openKaobox$5(10, 120, 32, 216, 204);
this.km.openOkozukaibox$6(11, 292, 48, 88, "おこづかい", this.mp.j_okozukai);
this.km.initSelectboxSerifu$6(1, 120, 132, 160, this.mp.name_teninsan, "いらっしゃいませ。");
this.km.addItem$2(1, "買う");
this.km.addItem$2(1, "持ち物を売る");
this.km.addItem$2(1, "店を出る");
this.km.active$1(1);
(this.km.mode = 500);
(this.co_j.pt = 1010);
(this.co_j.ac = 0);
}
else {
if ((n == 67)) {
(this.km.mode = 800);
this.km.openKaobox$5(10, 120, 32, 216, 206);
this.km.initSerifubox$5(3, 120, 132, 216, this.mp.name_sodateyasan);
if ((this.mp.sodateya_scc[2] >= 1)) {
this.km.addItem$2(3, (((this.mp.co_sodateya[0].name + "と") + this.mp.co_sodateya[1].name) + "の間に、"));
this.km.addItem$2(3, "子供が生まれたよ。");
(this.km.mode = 900);
}
else {
if ((this.mp.co_sodateya[0].syurui >= 1100)) {
var n6 = 0;
while ((n6 <= 1)) {
if ((this.mp.co_sodateya[n6].syurui >= 1100)) {
if ((this.mp.co_sodateya[n6].level <= 4)) {
if ((n6 == 0)) {
this.km.addItem$2(3, (("君の" + this.mp.co_sodateya[n6].name) + "は"));
this.km.addItem$2(3, (("レベル " + this.mp.co_sodateya[n6].level) + " だよ。"));
}
else {
this.km.addItem$2(3, (((this.mp.co_sodateya[n6].name + "はレベル ") + this.mp.co_sodateya[n6].level) + " だよ。"));
}
if (((this.mp.co_sodateya[n6].level == 3) || (this.mp.co_sodateya[n6].level == 4))) {
switch (this.mp.co_sodateya[n6].kotaisa) {
case 0:
{
this.km.addItem$2(3, "将来、HP が高くなりそうだ。");
break;
}
case 1:
{
this.km.addItem$2(3, "将来、HP が高くなりそうだ。");
break;
}
case 2:
{
this.km.addItem$2(3, "将来、攻撃力が高くなりそうだ。");
break;
}
case 3:
{
this.km.addItem$2(3, "将来、HP が高くなりそうだ。");
break;
}
case 4:
{
this.km.addItem$2(3, "将来、PP が高くなりそうだ。");
break;
}
case 5:
{
this.km.addItem$2(3, "将来、攻撃力が高くなりそうだ。");
break;
}
case 6:
{
this.km.addItem$2(3, "将来、PP が高くなりそうだ。");
break;
}
case 7:
{
this.km.addItem$2(3, "将来、攻撃力が高くなりそうだ。");
break;
}
case 8:
{
this.km.addItem$2(3, "将来、攻撃力が高くなりそうだ。");
break;
}
case 9:
{
this.km.addItem$2(3, "将来、防御力が高くなりそうだ。");
break;
}
case 10:
{
this.km.addItem$2(3, "将来、HP が高くなりそうだ。");
break;
}
case 11:
{
this.km.addItem$2(3, "将来、PP が高くなりそうだ。");
break;
}
case 12:
{
this.km.addItem$2(3, "将来、攻撃力が高くなりそうだ。");
break;
}
case 13:
{
this.km.addItem$2(3, "将来、防御力が高くなりそうだ。");
break;
}
case 14:
{
this.km.addItem$2(3, "将来、防御力が高くなりそうだ。");
break;
}
case 15:
{
this.km.addItem$2(3, "将来、防御力が高くなりそうだ。");
}
}
}
}
else {
if ((n6 == 0)) {
this.km.addItem$2(3, (("君の" + this.mp.co_sodateya[n6].name) + "は"));
this.km.addItem$2(3, "最大レベルだよ。");
}
else {
this.km.addItem$2(3, (this.mp.co_sodateya[n6].name + "は最大レベルだよ。"));
}
}
}
++n6;
}
}
else {
if ((this.mp.sodateya_type == 1)) {
this.km.addItem$2(3, "うちにモンスターをあずけて、");
this.km.addItem$2(3, "ステージを２つクリアーすると");
this.km.addItem$2(3, "レベルアップするよ。");
}
else {
this.mp.addSerifu$3(3, 1, 4);
}
}
}
this.km.active$1(3);
(this.co_j.pt = 1010);
(this.co_j.ac = 0);
}
else {
if ((n == 68)) {
this.km.openKaobox$5(10, 120, 32, 216, 280);
this.km.initSerifubox$5(3, 120, 132, 216, this.mp.gym_name);
this.mp.addSerifuGym$3(3, 1, 3);
this.km.active$1(3);
(this.km.mode = 1000);
(this.co_j.pt = 1010);
(this.co_j.ac = 0);
}
else {
if ((n == 69)) {
this.km.openKaobox$5(1, 112, 32, 256, 282);
if ((this.getBossTaoshitakazu$0() >= this.boss_taosukazu)) {
this.km.initSerifubox$5(3, 112, 132, 256, this.mp.name_furuure);
this.mp.addSerifu$3(3, 12, 4);
this.km.active$1(3);
(this.km.mode = 2050);
}
else {
this.km.initSerifubox$5(3, 112, 132, 256, this.mp.name_furuure);
this.mp.addSerifu$3(3, 10, 4);
this.km.active$1(3);
(this.km.mode = 2000);
}
(this.co_j.pt = 1010);
(this.co_j.ac = 0);
}
else {
if ((n == 44)) {
this.km.openKaobox$5(1, 112, 32, 256, 266);
this.km.initSerifubox$5(3, 112, 132, 256, this.mp.name_message1);
this.mp.addSerifu$3(3, 20, 4);
this.km.active$1(3);
(this.km.mode = 2100);
(this.co_j.pt = 1010);
(this.co_j.ac = 0);
}
else {
if ((n == 45)) {
this.km.openKaobox$5(1, 112, 32, 256, 268);
this.km.initSerifubox$5(3, 112, 132, 256, this.mp.name_message2);
this.mp.addSerifu$3(3, 22, 4);
this.km.active$1(3);
(this.km.mode = 2150);
(this.co_j.pt = 1010);
(this.co_j.ac = 0);
}
}
}
}
}
}
}
}
}
}
else {
if (this.gk.up_f) {
if ((this.getBGZ$2(n2, ((n3 - 32) | 0)) == 61)) {
(this.co_j.vy = -4);
(this.co_j.ac = -1);
}
}
else {
if (this.gk.down_f) {
if ((this.getBGZ$2(n2, ((n3 + 32) | 0)) == 61)) {
(this.co_j.vy = 4);
(this.co_j.ac = -1);
}
}
else {
if (this.gk.left_f) {
(this.co_j.muki = 0);
if ((this.getBGZ$2(((n2 - 32) | 0), n3) == 62)) {
(this.co_j.vx = -4);
(this.co_j.ac = -1);
}
if ((this.getBGZ$2(((n2 + 32) | 0), n3) == 55)) {
(this.co_j.vx = -4);
(this.co_j.ac = -1);
}
}
else {
if (this.gk.right_f) {
(this.co_j.muki = 1);
if ((this.getBGZ$2(((n2 + 32) | 0), n3) == 62)) {
(this.co_j.vx = 4);
(this.co_j.ac = -1);
}
if ((this.getBGZ$2(((n2 - 32) | 0), n3) == 55)) {
(this.co_j.vx = 4);
(this.co_j.ac = -1);
}
}
}
}
}
}
}
if (((this.co_j.vx != 0) || (this.co_j.vy != 0))) {
++this.co_j.ac;
if ((this.co_j.ac > 3)) {
(this.co_j.ac = 0);
}
(this.co_j.pt = ((this.co_j.vx != 0) ? ((this.co_j.ac <= 1) ? 103 : 104) : ((this.co_j.vy >= 0) ? ((this.co_j.ac <= 1) ? 110 : 111) : ((this.co_j.ac <= 1) ? 110 : 111))));
if (((((n2 = ((n2 + this.co_j.vx) | 0)) % 32) == 0) && (((n3 = ((n3 + this.co_j.vy) | 0)) % 32) == 0))) {
(n = this.getBGZ$2(n2, n3));
if (((((n == 60) || ((n >= 50) && (n <= 53))) || ((n >= 63) && (n <= 65))) || ((n >= 67) && (n <= 69)))) {
(this.co_j.vx = 0);
(this.co_j.vy = 0);
(this.co_j.ac = 0);
}
else {
if (((n >= 44) && (n <= 45))) {
(this.co_j.vx = 0);
(this.co_j.vy = 0);
(this.co_j.ac = 0);
}
}
(n = 0);
if ((this.co_j.vx > 0)) {
(n = this.getBGZ$2(((n2 + 32) | 0), n3));
}
else {
if ((this.co_j.vx < 0)) {
(n = this.getBGZ$2(((n2 - 32) | 0), n3));
}
}
if ((n == 55)) {
(this.co_j.vx = 0);
(this.co_j.vy = 0);
(this.co_j.pt = 100);
(this.co_j.ac = 0);
}
}
if ((n2 <= -32)) {
(n2 = -32);
(this.co_j.vx = 0);
(this.co_j.vy = 0);
(this.co_j.ac = 0);
}
else {
if ((n2 >= 480)) {
(n2 = 480);
(this.co_j.vx = 0);
(this.co_j.vy = 0);
(this.co_j.ac = 0);
}
}
if ((n3 <= -32)) {
(n3 = -32);
(this.co_j.vx = 0);
(this.co_j.vy = 0);
(this.co_j.ac = 0);
}
else {
if ((n3 >= 288)) {
(n3 = 288);
(this.co_j.vx = 0);
(this.co_j.vy = 0);
(this.co_j.ac = 0);
}
}
}
if (((n2 != this.co_j.x) || (n3 != this.co_j.y))) {
(this.pm_x[this.pm_p] = n2);
(this.pm_y[this.pm_p] = n3);
++this.pm_p;
if ((this.pm_p > 11)) {
(this.pm_p = 0);
}
}
var n7 = this.co_p.x;
var n8 = this.co_p.y;
(this.co_p.x = this.pm_x[this.pm_p]);
(this.co_p.y = this.pm_y[this.pm_p]);
if ((this.km.mode == 950)) {
(this.co_p.pt = 140);
}
else {
if ((n7 > this.co_p.x)) {
(this.co_p.pt = ((this.co_j.ac <= 1) ? 141 : 142));
(this.co_p.muki = 0);
}
else {
if ((n7 < this.co_p.x)) {
(this.co_p.pt = ((this.co_j.ac <= 1) ? 141 : 142));
(this.co_p.muki = 1);
}
else {
if ((n8 != this.co_p.y)) {
(this.co_p.pt = ((this.co_j.ac <= 1) ? 1140 : 140));
if ((this.co_p.x > this.co_j.x)) {
(this.co_p.muki = 0);
}
else {
if ((this.co_p.x < this.co_j.x)) {
(this.co_p.muki = 1);
}
}
}
else {
(this.co_p.pt = 140);
}
}
}
}
(this.co_j.x = n2);
(this.co_j.y = n3);
}
getBossTaoshitakazu$0() {
var n = 0;
var n2 = 37;
while ((n2 <= 39)) {
if (this.zukan_tukamaeta_f[n2]) {
++n;
}
++n2;
}
return n;
}
circleCLS$1(n) {
var n2 = 0;
while ((n2 <= 12)) {
var d = Math.sin(Math.fround((Math.fround(n2) * 0.2617992)));
(this.cc_p1_y[n2] = ((160 + J.i((d * n))) | 0));
var d2 = Math.cos(Math.fround((Math.fround(n2) * 0.2617992)));
(this.cc_p1_x[n2] = ((256 + J.i((d2 * n))) | 0));
(this.cc_p2_y[n2] = ((160 - J.i((d * n))) | 0));
(this.cc_p2_x[n2] = ((256 - J.i((d2 * n))) | 0));
++n2;
}
this.gg.os_g.setColor(Color.black);
this.gg.os_g.fillPolygon(this.cc_p1_x, this.cc_p1_y, 17);
this.gg.os_g.fillPolygon(this.cc_p2_x, this.cc_p2_y, 17);
}
squareCLS$2(n, n2) {
var d = J.div(Math.PI, 180);
(this.cc_p1_x[0] = ((J.i((Math.cos((((this.cc_kakudo + 0) | 0) * d)) * n)) + 256) | 0));
(this.cc_p1_y[0] = ((J.i((Math.sin((((this.cc_kakudo + 0) | 0) * d)) * n)) + 160) | 0));
(this.cc_p1_x[1] = ((J.i((Math.cos((((this.cc_kakudo + 90) | 0) * d)) * n)) + 256) | 0));
(this.cc_p1_y[1] = ((J.i((Math.sin((((this.cc_kakudo + 90) | 0) * d)) * n)) + 160) | 0));
(this.cc_p1_x[2] = ((J.i((Math.cos((((this.cc_kakudo + 180) | 0) * d)) * n)) + 256) | 0));
(this.cc_p1_y[2] = ((J.i((Math.sin((((this.cc_kakudo + 180) | 0) * d)) * n)) + 160) | 0));
(this.cc_p1_x[3] = ((J.i((Math.cos((((this.cc_kakudo + 180) | 0) * d)) * 500.0)) + 256) | 0));
(this.cc_p1_y[3] = ((J.i((Math.sin((((this.cc_kakudo + 180) | 0) * d)) * 500.0)) + 160) | 0));
(this.cc_p1_x[4] = ((J.i((Math.cos((((this.cc_kakudo + 135) | 0) * d)) * 700.0)) + 256) | 0));
(this.cc_p1_y[4] = ((J.i((Math.sin((((this.cc_kakudo + 135) | 0) * d)) * 700.0)) + 160) | 0));
(this.cc_p1_x[5] = ((J.i((Math.cos((((this.cc_kakudo + 45) | 0) * d)) * 700.0)) + 256) | 0));
(this.cc_p1_y[5] = ((J.i((Math.sin((((this.cc_kakudo + 45) | 0) * d)) * 700.0)) + 160) | 0));
(this.cc_p1_x[6] = ((J.i((Math.cos((((this.cc_kakudo + 0) | 0) * d)) * 500.0)) + 256) | 0));
(this.cc_p1_y[6] = ((J.i((Math.sin((((this.cc_kakudo + 0) | 0) * d)) * 500.0)) + 160) | 0));
(this.cc_p2_x[0] = ((J.i((Math.cos((((this.cc_kakudo + 180) | 0) * d)) * n)) + 256) | 0));
(this.cc_p2_y[0] = ((J.i((Math.sin((((this.cc_kakudo + 180) | 0) * d)) * n)) + 160) | 0));
(this.cc_p2_x[1] = ((J.i((Math.cos((((this.cc_kakudo + 270) | 0) * d)) * n)) + 256) | 0));
(this.cc_p2_y[1] = ((J.i((Math.sin((((this.cc_kakudo + 270) | 0) * d)) * n)) + 160) | 0));
(this.cc_p2_x[2] = ((J.i((Math.cos((((this.cc_kakudo + 360) | 0) * d)) * n)) + 256) | 0));
(this.cc_p2_y[2] = ((J.i((Math.sin((((this.cc_kakudo + 360) | 0) * d)) * n)) + 160) | 0));
(this.cc_p2_x[3] = ((J.i((Math.cos((((this.cc_kakudo + 360) | 0) * d)) * 500.0)) + 256) | 0));
(this.cc_p2_y[3] = ((J.i((Math.sin((((this.cc_kakudo + 360) | 0) * d)) * 500.0)) + 160) | 0));
(this.cc_p2_x[4] = ((J.i((Math.cos((((this.cc_kakudo + 315) | 0) * d)) * 700.0)) + 256) | 0));
(this.cc_p2_y[4] = ((J.i((Math.sin((((this.cc_kakudo + 315) | 0) * d)) * 700.0)) + 160) | 0));
(this.cc_p2_x[5] = ((J.i((Math.cos((((this.cc_kakudo + 225) | 0) * d)) * 700.0)) + 256) | 0));
(this.cc_p2_y[5] = ((J.i((Math.sin((((this.cc_kakudo + 225) | 0) * d)) * 700.0)) + 160) | 0));
(this.cc_p2_x[6] = ((J.i((Math.cos((((this.cc_kakudo + 180) | 0) * d)) * 500.0)) + 256) | 0));
(this.cc_p2_y[6] = ((J.i((Math.sin((((this.cc_kakudo + 180) | 0) * d)) * 500.0)) + 160) | 0));
this.gg.os_g.setColor(Color.black);
this.gg.os_g.fillPolygon(this.cc_p1_x, this.cc_p1_y, 7);
this.gg.os_g.fillPolygon(this.cc_p2_x, this.cc_p2_y, 7);
}
zukanInit$0() {
var n = 0;
while ((n <= 39)) {
(this.zukan_mituketa_f[n] = false);
(this.zukan_tukamaeta_f[n] = false);
(this.zukan_name[n] = "名称不明");
++n;
}
var monsterObject = new MonsterObject();
(n = 1);
while ((n <= 39)) {
monsterObject.initSyurui$2(((1000 + Math.imul(n, 100)) | 0), this.mp);
(this.zukan_name[n] = monsterObject.name);
++n;
}
(monsterObject = null);
}
zukanTourokuPet$0() {
var n = 0;
while ((n <= 5)) {
(this.zukan_mituketa_f[this.mp.co_p[n].mn] = true);
(this.zukan_tukamaeta_f[this.mp.co_p[n].mn] = true);
++n;
}
}
zukanGetMituketakazu$0() {
var n = 0;
var n2 = 1;
while ((n2 <= 39)) {
if (this.zukan_mituketa_f[n2]) {
++n;
}
++n2;
}
return n;
}
zukanGetTukamaetakazu$0() {
var n = 0;
var n2 = 1;
while ((n2 <= 39)) {
if (this.zukan_tukamaeta_f[n2]) {
++n;
}
++n2;
}
return n;
}
passInit$0() {
var stringArray = J.array([6], null);
(this.pass_st = "");
(this.pass_nyuuryoku_kazu = 0);
(this.pass_error = 0);
(this.pass_ch = 0);
var n = 0;
while ((n <= 19)) {
(this.pass_data[n] = 0);
++n;
}
var string = "0123456789abcdefghijklmnopqrstuvwxyz";
(n = 0);
while ((n <= 35)) {
(this.pass_char36[n] = ((J.charAt(string, n)) & 65535));
++n;
}
(stringArray[0] = "98321684846447");
(stringArray[1] = "67447042876354");
(stringArray[2] = "98889854353174");
(stringArray[3] = "84473650367162");
(stringArray[4] = "85381823801762");
(stringArray[5] = "70769118102741");
var n2 = 0;
while ((n2 <= 5)) {
var n3 = 0;
while ((n3 <= 13)) {
var string2 = ("" + String.fromCharCode(J.charAt(stringArray[n2], n3)));
try {
(this.pass_rt[n2][n3] = Math.imul(Integer.valueOf(string2), 3));
}
catch (numberFormatException) {
(this.pass_rt[n2][n3] = 0);
}
++n3;
}
++n2;
}
}
passMakePet$1(n) {
var n2 = 0;
var n3 = 0;
var nArray = J.array([16], 0);
var n4 = 0;
while ((n4 <= 19)) {
(this.pass_data[n4] = 0);
++n4;
}
var string = this.mp.co_p[n].name;
(string = (string + "nnnnn"));
(n4 = 0);
while ((n4 <= 4)) {
(this.pass_data[n4] = 87);
var n5 = 0;
while ((n5 <= 87)) {
if ((J.charAt(string, n4) == this.km.moji[n5])) {
(this.pass_data[n4] = n5);
break;
}
++n5;
}
if ((this.pass_data[n4] > 87)) {
(this.pass_data[n4] = 87);
}
if ((n4 == 0)) {
(n3 = J.div(this.pass_data[n4], 36));
(this.pass_data[n4] = ((this.pass_data[n4] - Math.imul(n3, 36)) | 0));
(this.pass_data[5] = ((this.pass_data[5] + Math.imul(n3, 12)) | 0));
}
else {
if ((n4 == 1)) {
(n3 = J.div(this.pass_data[n4], 36));
(this.pass_data[n4] = ((this.pass_data[n4] - Math.imul(n3, 36)) | 0));
(this.pass_data[5] = ((this.pass_data[5] + Math.imul(n3, 4)) | 0));
}
else {
if ((n4 == 2)) {
(n3 = J.div(this.pass_data[n4], 36));
(this.pass_data[n4] = ((this.pass_data[n4] - Math.imul(n3, 36)) | 0));
(this.pass_data[6] = ((this.pass_data[6] + Math.imul(n3, 12)) | 0));
}
else {
if ((n4 == 3)) {
(n3 = J.div(this.pass_data[n4], 36));
(this.pass_data[n4] = ((this.pass_data[n4] - Math.imul(n3, 36)) | 0));
(this.pass_data[6] = ((this.pass_data[6] + Math.imul(n3, 4)) | 0));
}
else {
(n3 = J.div(this.pass_data[n4], 36));
(this.pass_data[n4] = ((this.pass_data[n4] - Math.imul(n3, 36)) | 0));
(this.pass_data[7] = ((this.pass_data[7] + Math.imul(n3, 12)) | 0));
}
}
}
}
++n4;
}
if (this.mp.co_p[n].name_df) {
(this.pass_data[0] = 35);
(this.pass_data[5] = 24);
}
(this.pass_data[5] = ((this.pass_data[5] + this.pass_ch) | 0));
(this.pass_data[6] = ((this.pass_data[6] + this.mp.co_p[n].pb_type) | 0));
if ((this.mp.co_p[n].seibetu == 1)) {
(this.pass_data[7] = ((this.pass_data[7] + 6) | 0));
}
if ((((n2 = ((J.div(this.mp.co_p[n].syurui, 100) - 11) | 0)) < 0) || (n2 > 34))) {
(n2 = 3);
}
(this.pass_data[9] = n2);
(this.pass_data[10] = this.mp.co_p[n].tuikawaza[0]);
(this.pass_data[11] = this.mp.co_p[n].tuikawaza[1]);
(n3 = J.div(this.pass_data[10], 36));
(this.pass_data[10] = ((this.pass_data[10] - Math.imul(n3, 36)) | 0));
var n6 = J.div(this.pass_data[11], 36);
(this.pass_data[11] = ((this.pass_data[11] - Math.imul(n6, 36)) | 0));
(this.pass_data[12] = (n2 = Math.imul(((Math.imul(n3, 2) + n6) | 0), 5)));
(this.pass_data[12] = ((this.pass_data[12] + ((this.mp.co_p[n].level - 1) | 0)) | 0));
(this.pass_data[13] = this.mp.co_p[n].kotaisa);
(this.pass_data[14] = this.mp.co_p[n].id);
(n3 = J.div(this.pass_data[14], 216));
(this.pass_data[14] = ((this.pass_data[14] - Math.imul(n3, 216)) | 0));
(n6 = J.div(this.pass_data[14], 6));
(this.pass_data[14] = ((this.pass_data[14] - Math.imul(n6, 6)) | 0));
(this.pass_data[7] = ((this.pass_data[7] + n3) | 0));
(this.pass_data[8] = n6);
(this.pass_data[14] = this.pass_data[14]);
var n7 = 0;
(n4 = 0);
while ((n4 <= 14)) {
(n7 = ((n7 + this.pass_data[n4]) | 0));
++n4;
}
(this.pass_data[14] = ((this.pass_data[14] + Math.imul((n7 = ((n7 % 6) | 0)), 6)) | 0));
(n4 = 0);
while ((n4 <= 13)) {
(this.pass_data[n4] = ((this.pass_data[n4] + this.pass_rt[n7][n4]) | 0));
if ((this.pass_data[n4] > 35)) {
var n8 = n4;
(this.pass_data[n8] = ((this.pass_data[n8] - 36) | 0));
}
++n4;
}
(n4 = 0);
while ((n4 <= 3)) {
var n9 = Math.imul(n4, 2);
var n10 = ((8 + Math.imul(n4, 2)) | 0);
(n2 = this.pass_data[n9]);
(this.pass_data[n9] = this.pass_data[n10]);
(this.pass_data[n10] = n2);
++n4;
}
(n4 = 0);
while ((n4 <= 14)) {
(nArray[n4] = J.div(this.pass_data[n4], 6));
(this.pass_data[n4] = ((this.pass_data[n4] - Math.imul(nArray[n4], 6)) | 0));
++n4;
}
(n4 = 0);
while ((n4 <= 13)) {
(this.pass_data[n4] = ((this.pass_data[n4] + Math.imul(nArray[((n4 + 1) | 0)], 6)) | 0));
++n4;
}
(this.pass_data[14] = ((this.pass_data[14] + Math.imul(nArray[0], 6)) | 0));
(this.pass_st = "");
(n4 = 0);
while ((n4 <= 14)) {
(this.pass_st = (this.pass_st + String.fromCharCode(this.pass_char36[this.pass_data[n4]])));
++n4;
}
}
passToujyouPet$1(n) {
var n2 = 0;
var n3 = 0;
var bl = false;
var nArray = J.array([16], 0);
(this.pass_error = 0);
if ((this.pass_st.length != 15)) {
return false;
}
(this.pass_st = (this.pass_st + "000000000000000"));
var n4 = 0;
while ((n4 <= 14)) {
(this.pass_data[n4] = 0);
var n5 = 0;
while ((n5 <= 35)) {
if ((J.charAt(this.pass_st, n4) == this.pass_char36[n5])) {
(this.pass_data[n4] = n5);
break;
}
++n5;
}
++n4;
}
(n4 = 0);
while ((n4 <= 14)) {
(nArray[n4] = J.div(this.pass_data[n4], 6));
(this.pass_data[n4] = ((this.pass_data[n4] - Math.imul(nArray[n4], 6)) | 0));
++n4;
}
(n4 = 1);
while ((n4 <= 14)) {
(this.pass_data[n4] = ((this.pass_data[n4] + Math.imul(nArray[((n4 - 1) | 0)], 6)) | 0));
++n4;
}
(this.pass_data[0] = ((this.pass_data[0] + Math.imul(nArray[14], 6)) | 0));
(n4 = 0);
while ((n4 <= 3)) {
var n6 = Math.imul(n4, 2);
var n7 = ((8 + Math.imul(n4, 2)) | 0);
(n3 = this.pass_data[n6]);
(this.pass_data[n6] = this.pass_data[n7]);
(this.pass_data[n7] = n3);
++n4;
}
var n8 = J.div(this.pass_data[14], 6);
(this.pass_data[14] = ((this.pass_data[14] - Math.imul(n8, 6)) | 0));
(n4 = 0);
while ((n4 <= 13)) {
(this.pass_data[n4] = ((this.pass_data[n4] - this.pass_rt[n8][n4]) | 0));
if ((this.pass_data[n4] < 0)) {
var n9 = n4;
(this.pass_data[n9] = ((this.pass_data[n9] + 36) | 0));
}
++n4;
}
(n3 = 0);
(n4 = 0);
while ((n4 <= 14)) {
(n3 = ((n3 + this.pass_data[n4]) | 0));
++n4;
}
if (((n3 = ((n3 % 6) | 0)) != n8)) {
return false;
}
if (((this.pass_data[0] == 35) && (this.pass_data[5] >= 24))) {
(bl = true);
}
var string = "";
(n4 = 0);
while ((n4 <= 4)) {
if ((n4 == 0)) {
(n2 = J.div(this.pass_data[5], 12));
(this.pass_data[5] = ((this.pass_data[5] - Math.imul(n2, 12)) | 0));
(this.pass_data[n4] = ((this.pass_data[n4] + Math.imul(n2, 36)) | 0));
if ((this.pass_data[n4] > 87)) {
(this.pass_data[n4] = 87);
}
}
else {
if ((n4 == 1)) {
(n2 = J.div(this.pass_data[5], 4));
(this.pass_data[5] = ((this.pass_data[5] - Math.imul(n2, 4)) | 0));
(this.pass_data[n4] = ((this.pass_data[n4] + Math.imul(n2, 36)) | 0));
if ((this.pass_data[n4] > 87)) {
(this.pass_data[n4] = 87);
}
}
else {
if ((n4 == 2)) {
(n2 = J.div(this.pass_data[6], 12));
(this.pass_data[6] = ((this.pass_data[6] - Math.imul(n2, 12)) | 0));
(this.pass_data[n4] = ((this.pass_data[n4] + Math.imul(n2, 36)) | 0));
if ((this.pass_data[n4] > 87)) {
(this.pass_data[n4] = 87);
}
}
else {
if ((n4 == 3)) {
(n2 = J.div(this.pass_data[6], 4));
(this.pass_data[6] = ((this.pass_data[6] - Math.imul(n2, 4)) | 0));
(this.pass_data[n4] = ((this.pass_data[n4] + Math.imul(n2, 36)) | 0));
if ((this.pass_data[n4] > 87)) {
(this.pass_data[n4] = 87);
}
}
else {
(n2 = J.div(this.pass_data[7], 12));
(this.pass_data[7] = ((this.pass_data[7] - Math.imul(n2, 12)) | 0));
(this.pass_data[n4] = ((this.pass_data[n4] + Math.imul(n2, 36)) | 0));
if ((this.pass_data[n4] > 87)) {
(this.pass_data[n4] = 87);
}
}
}
}
}
if ((this.pass_data[n4] != 0)) {
(string = (string + String.fromCharCode(this.km.moji[this.pass_data[n4]])));
}
++n4;
}
(n3 = this.pass_data[9]);
if (((n3 < 0) || (n3 > 34))) {
(n3 = 3);
return false;
}
if ((((n3 == 33) || (n3 == 34)) && (this.pass_data[7] >= 6))) {
(n3 = 3);
return false;
}
(n3 = Math.imul(((n3 + 11) | 0), 100));
this.mp.co_p[n].initSyurui$2(n3, this.mp);
(n3 = this.pass_data[5]);
if ((n3 != this.pass_ch)) {
(this.pass_error = 1);
return false;
}
(this.mp.co_p[n].pb_type = this.pass_data[6]);
if ((this.pass_data[7] >= 6)) {
(this.mp.co_p[n].seibetu = 1);
(this.pass_data[7] = ((this.pass_data[7] - 6) | 0));
}
else {
(this.mp.co_p[n].seibetu = 0);
}
(this.mp.co_p[n].tuikawaza[0] = this.pass_data[10]);
if ((this.mp.co_p[n].tuikawaza[0] > 0)) {
(this.mp.co_p[n].tuikawaza[1] = this.pass_data[11]);
}
if ((this.pass_data[12] > 19)) {
(this.pass_data[12] = 19);
return false;
}
(n2 = J.div(this.pass_data[12], 5));
(this.pass_data[12] = ((this.pass_data[12] - Math.imul(n2, 5)) | 0));
var n10 = J.div(n2, 2);
(this.mp.co_p[n].tuikawaza[0] = ((this.mp.co_p[n].tuikawaza[0] + Math.imul(n10, 36)) | 0));
(this.mp.co_p[n].tuikawaza[1] = ((this.mp.co_p[n].tuikawaza[1] + Math.imul((n2 = ((n2 - Math.imul(n10, 2)) | 0)), 36)) | 0));
var bl2 = true;
(n3 = this.mp.co_p[n].tuikawaza[0]);
if (((n3 != 0) && (this.mp.waza_sk[this.mp.co_p[n].type][n3] != 1))) {
(bl2 = false);
}
if ((this.mp.co_p[n].type == 1)) {
(n4 = 0);
while ((n4 <= ((this.mp.waza_rea_kazu[1] - 1) | 0))) {
if (((n3 == this.mp.waza_rea[1][n4]) && (this.mp.co_p[n].seibetu != 1))) {
(bl2 = false);
break;
}
++n4;
}
}
if ((((n3 = this.mp.co_p[n].tuikawaza[1]) != 0) && (this.mp.waza_sk[this.mp.co_p[n].type][n3] != 1))) {
(bl2 = false);
}
if ((this.mp.co_p[n].type == 1)) {
(n4 = 0);
while ((n4 <= ((this.mp.waza_rea_kazu[1] - 1) | 0))) {
if ((n3 == this.mp.waza_rea[1][n4])) {
(bl2 = false);
break;
}
++n4;
}
}
if (bl2) {
if ((this.mp.co_p[n].tuikawaza[0] > 0)) {
this.mp.co_p[n].insertWaza$2(this.mp.co_p[n].tuikawaza[0], this.mp.waza_dname[this.mp.co_p[n].tuikawaza[0]]);
}
if ((this.mp.co_p[n].tuikawaza[1] > 0)) {
this.mp.co_p[n].insertWaza$2(this.mp.co_p[n].tuikawaza[1], this.mp.waza_dname[this.mp.co_p[n].tuikawaza[1]]);
}
}
else {
(this.mp.co_p[n].tuikawaza[0] = 0);
(this.mp.co_p[n].tuikawaza[1] = 0);
}
(this.mp.co_p[n].kotaisa = this.pass_data[13]);
if ((this.mp.co_p[n].kotaisa > 15)) {
(this.mp.co_p[n].kotaisa = 1);
return false;
}
this.mp.co_p[n].setLevel$1(((this.pass_data[12] + 1) | 0));
(this.mp.co_p[n].hp = this.mp.co_p[n].hp_max);
(this.mp.co_p[n].pp = this.mp.co_p[n].pp_max);
(n3 = ((((Math.imul(this.pass_data[7], 216) + Math.imul(this.pass_data[8], 6)) | 0) + this.pass_data[14]) | 0));
if ((n3 > 999)) {
(n3 = 999);
return false;
}
(this.mp.co_p[n].id = n3);
if (!bl) {
(this.mp.co_p[n].name = string);
(this.mp.co_p[n].name_df = false);
}
return true;
}
passMakeSyujinkou$1(n) {
var n2 = 0;
var nArray = J.array([10], 0);
var n3 = 0;
while ((n3 <= 19)) {
(this.pass_data[n3] = 0);
++n3;
}
var string = this.mp.co_p[n].name;
(string = (string + "nnnnn"));
(n3 = 0);
while ((n3 <= 4)) {
(this.pass_data[n3] = 87);
var n4 = 0;
while ((n4 <= 87)) {
if ((J.charAt(string, n3) == this.km.moji[n4])) {
(this.pass_data[n3] = n4);
break;
}
++n4;
}
if ((this.pass_data[n3] > 87)) {
(this.pass_data[n3] = 87);
}
if ((n3 == 0)) {
(n2 = J.div(this.pass_data[n3], 36));
(this.pass_data[n3] = ((this.pass_data[n3] - Math.imul(n2, 36)) | 0));
(this.pass_data[5] = ((this.pass_data[5] + Math.imul(n2, 12)) | 0));
}
else {
if ((n3 == 1)) {
(n2 = J.div(this.pass_data[n3], 36));
(this.pass_data[n3] = ((this.pass_data[n3] - Math.imul(n2, 36)) | 0));
(this.pass_data[5] = ((this.pass_data[5] + Math.imul(n2, 4)) | 0));
}
else {
if ((n3 == 2)) {
(n2 = J.div(this.pass_data[n3], 36));
(this.pass_data[n3] = ((this.pass_data[n3] - Math.imul(n2, 36)) | 0));
(this.pass_data[6] = ((this.pass_data[6] + Math.imul(n2, 12)) | 0));
}
else {
if ((n3 == 3)) {
(n2 = J.div(this.pass_data[n3], 36));
(this.pass_data[n3] = ((this.pass_data[n3] - Math.imul(n2, 36)) | 0));
(this.pass_data[6] = ((this.pass_data[6] + Math.imul(n2, 4)) | 0));
}
else {
(n2 = J.div(this.pass_data[n3], 36));
(this.pass_data[n3] = ((this.pass_data[n3] - Math.imul(n2, 36)) | 0));
(this.pass_data[7] = ((this.pass_data[7] + Math.imul(n2, 12)) | 0));
}
}
}
}
++n3;
}
if (this.mp.co_p[n].name_df) {
}
(this.pass_data[5] = ((this.pass_data[5] + this.pass_ch) | 0));
var n5 = this.mp.pn_syurui;
if (((n5 < 1) || (n5 > 3))) {
(n5 = 1);
}
(this.pass_data[6] = ((this.pass_data[6] + n5) | 0));
if ((this.mp.co_p[n].seibetu == 1)) {
(this.pass_data[7] = ((this.pass_data[7] + 6) | 0));
}
(this.pass_data[9] = this.mp.co_p[n].id);
(n2 = J.div(this.pass_data[9], 216));
(this.pass_data[9] = ((this.pass_data[9] - Math.imul(n2, 216)) | 0));
var n6 = J.div(this.pass_data[9], 6);
(this.pass_data[9] = ((this.pass_data[9] - Math.imul(n6, 6)) | 0));
(this.pass_data[7] = ((this.pass_data[7] + n2) | 0));
(this.pass_data[8] = n6);
(this.pass_data[9] = this.pass_data[9]);
var n7 = 0;
(n3 = 0);
while ((n3 <= 9)) {
(n7 = ((n7 + this.pass_data[n3]) | 0));
++n3;
}
(this.pass_data[9] = ((this.pass_data[9] + Math.imul((n7 = ((n7 % 6) | 0)), 6)) | 0));
(n3 = 0);
while ((n3 <= 8)) {
(this.pass_data[n3] = ((this.pass_data[n3] + this.pass_rt[n7][((n3 + 3) | 0)]) | 0));
if ((this.pass_data[n3] > 35)) {
var n8 = n3;
(this.pass_data[n8] = ((this.pass_data[n8] - 36) | 0));
}
++n3;
}
(n3 = 0);
while ((n3 <= 3)) {
var n9 = Math.imul(n3, 2);
var n10 = ((3 + Math.imul(n3, 2)) | 0);
(n5 = this.pass_data[n9]);
(this.pass_data[n9] = this.pass_data[n10]);
(this.pass_data[n10] = n5);
++n3;
}
(n3 = 0);
while ((n3 <= 9)) {
(nArray[n3] = J.div(this.pass_data[n3], 2));
(this.pass_data[n3] = ((this.pass_data[n3] - Math.imul(nArray[n3], 2)) | 0));
++n3;
}
(n3 = 0);
while ((n3 <= 8)) {
(this.pass_data[n3] = ((this.pass_data[n3] + Math.imul(nArray[((n3 + 1) | 0)], 2)) | 0));
++n3;
}
(this.pass_data[9] = ((this.pass_data[9] + Math.imul(nArray[0], 2)) | 0));
(n3 = 0);
while ((n3 <= 9)) {
(nArray[n3] = J.div(this.pass_data[n3], 9));
(this.pass_data[n3] = ((this.pass_data[n3] - Math.imul(nArray[n3], 9)) | 0));
++n3;
}
(n3 = 1);
while ((n3 <= 9)) {
(this.pass_data[n3] = ((this.pass_data[n3] + Math.imul(nArray[((n3 - 1) | 0)], 9)) | 0));
++n3;
}
(this.pass_data[0] = ((this.pass_data[0] + Math.imul(nArray[9], 9)) | 0));
(this.pass_st = "");
(n3 = 0);
while ((n3 <= 9)) {
(this.pass_st = (this.pass_st + String.fromCharCode(this.pass_char36[this.pass_data[n3]])));
++n3;
}
}
passToujyouSyujinkou$1(n) {
var n2 = 0;
var bl = false;
var nArray = J.array([10], 0);
(this.pass_error = 0);
if ((this.pass_st.length != 10)) {
return false;
}
(this.pass_st = (this.pass_st + "0000000000"));
var n3 = 0;
while ((n3 <= 9)) {
(this.pass_data[n3] = 0);
var n4 = 0;
while ((n4 <= 35)) {
if ((J.charAt(this.pass_st, n3) == this.pass_char36[n4])) {
(this.pass_data[n3] = n4);
break;
}
++n4;
}
++n3;
}
(n3 = 0);
while ((n3 <= 9)) {
(nArray[n3] = J.div(this.pass_data[n3], 9));
(this.pass_data[n3] = ((this.pass_data[n3] - Math.imul(nArray[n3], 9)) | 0));
++n3;
}
(n3 = 0);
while ((n3 <= 8)) {
(this.pass_data[n3] = ((this.pass_data[n3] + Math.imul(nArray[((n3 + 1) | 0)], 9)) | 0));
++n3;
}
(this.pass_data[9] = ((this.pass_data[9] + Math.imul(nArray[0], 9)) | 0));
(n3 = 0);
while ((n3 <= 9)) {
(nArray[n3] = J.div(this.pass_data[n3], 2));
(this.pass_data[n3] = ((this.pass_data[n3] - Math.imul(nArray[n3], 2)) | 0));
++n3;
}
(n3 = 1);
while ((n3 <= 9)) {
(this.pass_data[n3] = ((this.pass_data[n3] + Math.imul(nArray[((n3 - 1) | 0)], 2)) | 0));
++n3;
}
(this.pass_data[0] = ((this.pass_data[0] + Math.imul(nArray[9], 2)) | 0));
(n3 = 0);
while ((n3 <= 3)) {
var n5 = Math.imul(n3, 2);
var n6 = ((3 + Math.imul(n3, 2)) | 0);
(n2 = this.pass_data[n5]);
(this.pass_data[n5] = this.pass_data[n6]);
(this.pass_data[n6] = n2);
++n3;
}
var n7 = J.div(this.pass_data[9], 6);
(this.pass_data[9] = ((this.pass_data[9] - Math.imul(n7, 6)) | 0));
(n3 = 0);
while ((n3 <= 8)) {
(this.pass_data[n3] = ((this.pass_data[n3] - this.pass_rt[n7][((n3 + 3) | 0)]) | 0));
if ((this.pass_data[n3] < 0)) {
var n8 = n3;
(this.pass_data[n8] = ((this.pass_data[n8] + 36) | 0));
}
++n3;
}
(n2 = 0);
(n3 = 0);
while ((n3 <= 9)) {
(n2 = ((n2 + this.pass_data[n3]) | 0));
++n3;
}
if (((n2 = ((n2 % 6) | 0)) != n7)) {
return false;
}
if (((this.pass_data[0] == 35) && (this.pass_data[5] >= 24))) {
(bl = true);
}
var string = "";
(n3 = 0);
while ((n3 <= 4)) {
var n9 = 0;
if ((n3 == 0)) {
(n9 = J.div(this.pass_data[5], 12));
(this.pass_data[5] = ((this.pass_data[5] - Math.imul(n9, 12)) | 0));
(this.pass_data[n3] = ((this.pass_data[n3] + Math.imul(n9, 36)) | 0));
if ((this.pass_data[n3] > 87)) {
(this.pass_data[n3] = 87);
}
}
else {
if ((n3 == 1)) {
(n9 = J.div(this.pass_data[5], 4));
(this.pass_data[5] = ((this.pass_data[5] - Math.imul(n9, 4)) | 0));
(this.pass_data[n3] = ((this.pass_data[n3] + Math.imul(n9, 36)) | 0));
if ((this.pass_data[n3] > 87)) {
(this.pass_data[n3] = 87);
}
}
else {
if ((n3 == 2)) {
(n9 = J.div(this.pass_data[6], 12));
(this.pass_data[6] = ((this.pass_data[6] - Math.imul(n9, 12)) | 0));
(this.pass_data[n3] = ((this.pass_data[n3] + Math.imul(n9, 36)) | 0));
if ((this.pass_data[n3] > 87)) {
(this.pass_data[n3] = 87);
}
}
else {
if ((n3 == 3)) {
(n9 = J.div(this.pass_data[6], 4));
(this.pass_data[6] = ((this.pass_data[6] - Math.imul(n9, 4)) | 0));
(this.pass_data[n3] = ((this.pass_data[n3] + Math.imul(n9, 36)) | 0));
if ((this.pass_data[n3] > 87)) {
(this.pass_data[n3] = 87);
}
}
else {
(n9 = J.div(this.pass_data[7], 12));
(this.pass_data[7] = ((this.pass_data[7] - Math.imul(n9, 12)) | 0));
(this.pass_data[n3] = ((this.pass_data[n3] + Math.imul(n9, 36)) | 0));
if ((this.pass_data[n3] > 87)) {
(this.pass_data[n3] = 87);
}
}
}
}
}
if ((this.pass_data[n3] != 0)) {
(string = (string + String.fromCharCode(this.km.moji[this.pass_data[n3]])));
}
++n3;
}
this.mp.co_j.init$0();
(this.mp.co_j.syurui = 9000);
(this.mp.co_j.zokusei = 1);
(this.mp.co_j.hp_max = 180);
(n2 = this.pass_data[5]);
if ((n2 != this.pass_ch)) {
(this.pass_error = 1);
return false;
}
(this.mp.pn_syurui = this.pass_data[6]);
if (((this.mp.pn_syurui < 1) || (this.mp.pn_syurui > 3))) {
(this.mp.pn_syurui = 1);
return false;
}
if ((this.pass_data[7] >= 6)) {
(this.mp.co_p[n].seibetu = 1);
(this.pass_data[7] = ((this.pass_data[7] - 6) | 0));
}
else {
(this.mp.co_p[n].seibetu = 0);
}
(n2 = ((((Math.imul(this.pass_data[7], 216) + Math.imul(this.pass_data[8], 6)) | 0) + this.pass_data[9]) | 0));
if ((n2 > 999)) {
(n2 = 999);
return false;
}
(this.mp.co_p[n].id = n2);
(this.mp.co_p[n].name = string);
if (bl) {
(this.mp.co_p[n].name = "デフォルト");
}
return true;
}
}
globalThis.IdouGamen = IdouGamen;
