// Direct port of IdouGamen from petm_c.zip. Original method overloads use $arity.
class IdouGamen {
gk = null;
gg = null;
km = null;
mp = null;
co_j = new CharacterObject();
co_p = new CharacterObject();
map_string = J.array([9], null);
map_bg = J.array([15, 9], 0);
stage_c = J.array([10], 0);
stage_x = J.array([10], 0);
stage_y = J.array([10], 0);
stage_cf = J.array([10], false);
kinnotama_f = J.array([10], false);
ie_c = J.array([8], 0);
ie_x = J.array([8], 0);
ie_y = J.array([8], 0);
zure_x = 16;
zure_y = 16;
mp_mode = 0;
pm_x = J.array([16], 0);
pm_y = J.array([16], 0);
pm_p = 0;
kido_step = 0;
kido_miu_f = false;
furuure_step = 0;
yot_f = false;
gym_step = 0;
pass = J.array([4], 0);
pass_rt = J.array([10, 3], 0);
pass_mitakaisuu = 0;
pass_nyuuryokukaisuu = 0;
cc_hankei = 0;
cc_kakudo = 0;
cc_p1_x = J.array([17], 0);
cc_p1_y = J.array([17], 0);
cc_p2_x = J.array([17], 0);
cc_p2_y = J.array([17], 0);
zukan_mituketa_f = J.array([50], false);
zukan_tukamaeta_f = J.array([50], false);
zukan_name = J.array([50], null);
zukan_tukamaetakazu_max = 12;
constructor(gameGraphics, gameKey, keyboardMenu, mainProgram) {
(this.gg = gameGraphics);
(this.gk = gameKey);
(this.km = keyboardMenu);
(this.mp = mainProgram);
(this.cc_p1_x[13] = (-(200) | 0));
(this.cc_p1_y[13] = 160);
(this.cc_p1_x[14] = (-(200) | 0));
(this.cc_p1_y[14] = 520);
(this.cc_p1_x[15] = 712);
(this.cc_p1_y[15] = 520);
(this.cc_p1_x[16] = 712);
(this.cc_p1_y[16] = 160);
(this.cc_p2_x[13] = 712);
(this.cc_p2_y[13] = 160);
(this.cc_p2_x[14] = 712);
(this.cc_p2_y[14] = (-(200) | 0));
(this.cc_p2_x[15] = (-(200) | 0));
(this.cc_p2_y[15] = (-(200) | 0));
(this.cc_p2_x[16] = (-(200) | 0));
(this.cc_p2_y[16] = 160);
(this.pass_rt[0][0] = 8);
(this.pass_rt[0][1] = 2);
(this.pass_rt[0][2] = 5);
(this.pass_rt[1][0] = 2);
(this.pass_rt[1][1] = 9);
(this.pass_rt[1][2] = 6);
(this.pass_rt[2][0] = 1);
(this.pass_rt[2][1] = 4);
(this.pass_rt[2][2] = 8);
(this.pass_rt[3][0] = 7);
(this.pass_rt[3][1] = 5);
(this.pass_rt[3][2] = 2);
(this.pass_rt[4][0] = 9);
(this.pass_rt[4][1] = 6);
(this.pass_rt[4][2] = 0);
(this.pass_rt[5][0] = 1);
(this.pass_rt[5][1] = 0);
(this.pass_rt[5][2] = 9);
(this.pass_rt[6][0] = 7);
(this.pass_rt[6][1] = 6);
(this.pass_rt[6][2] = 1);
(this.pass_rt[7][0] = 3);
(this.pass_rt[7][1] = 3);
(this.pass_rt[7][2] = 7);
(this.pass_rt[8][0] = 4);
(this.pass_rt[8][1] = 1);
(this.pass_rt[8][2] = 6);
(this.pass_rt[9][0] = 5);
(this.pass_rt[9][1] = 6);
(this.pass_rt[9][2] = 3);
}
worldInit$0() {
var n = 0;
var n2 = 0;
for ((n2 = 0); (n2 <= 9); J.inc(()=>n2, v=>n2=v, 1, false, "int")) {
(this.stage_c[n2] = 0);
(this.stage_cf[n2] = false);
(this.kinnotama_f[n2] = true);
}
for ((n2 = 0); (n2 <= 7); J.inc(()=>n2, v=>n2=v, 1, false, "int")) {
(this.ie_c[n2] = 0);
}
for ((n2 = 0); (n2 <= 3); J.inc(()=>n2, v=>n2=v, 1, false, "int")) {
(this.pass[n2] = 0);
}
(this.pass_mitakaisuu = 0);
(this.pass_nyuuryokukaisuu = 0);
(this.co_j.x = 0);
(this.co_j.y = 0);
(this.co_j.vx = 0);
(this.co_j.vy = 0);
(this.co_j.muki = 1);
(this.co_j.ac = 0);
(this.mp.tr1_c = 2);
(this.kido_step = 0);
(this.kido_miu_f = false);
(this.furuure_step = 0);
(this.gym_step = 0);
(this.yot_f = false);
(this.mp_mode = 0);
this.km.initAll$0();
(this.km.mode = 100);
if ((this.mp.system_mode == 2)) {
(this.map_string[0] = ".........133C..");
(this.map_string[1] = ".........2.....");
(this.map_string[2] = ".e3333c331.....");
(this.map_string[3] = ".2....2........");
(this.map_string[4] = ".2....2........");
(this.map_string[5] = ".2.1331331333b.");
(this.map_string[6] = ".B.2.....2...2.");
(this.map_string[7] = "...2.....2...2.");
(this.map_string[8] = "...d33133A...a.");
}
else {
for ((n = 0); (n <= 8); J.inc(()=>n, v=>n=v, 1, false, "int")) {
var string = this.gg.ap.getParameter(("chizu-" + n));
(this.map_string[n] = (string = (string + "...............")));
}
}
for ((n = 0); (n <= 8); J.inc(()=>n, v=>n=v, 1, false, "int")) {
for (var i = 0; (i <= 14); J.inc(()=>i, v=>i=v, 1, false, "int")) {
var c = J.charAt(this.map_string[n], i);
if ((c == 97)) {
(this.co_j.x = Math.imul(i, 32));
(this.co_j.y = Math.imul(n, 32));
(this.map_bg[i][n] = 60);
continue;
}
if ((c == 98)) {
(this.map_bg[i][n] = 63);
(this.ie_c[0] = 100);
(this.ie_x[0] = Math.imul(i, 32));
(this.ie_y[0] = Math.imul(n, 32));
continue;
}
if ((c == 99)) {
(this.map_bg[i][n] = 64);
(this.ie_c[1] = 100);
(this.ie_x[1] = Math.imul(i, 32));
(this.ie_y[1] = Math.imul(n, 32));
continue;
}
if ((c == 100)) {
(this.map_bg[i][n] = 65);
(this.ie_c[2] = 100);
(this.ie_x[2] = Math.imul(i, 32));
(this.ie_y[2] = Math.imul(n, 32));
continue;
}
if ((c == 101)) {
(this.map_bg[i][n] = 67);
(this.ie_c[3] = 100);
(this.ie_x[3] = Math.imul(i, 32));
(this.ie_y[3] = Math.imul(n, 32));
continue;
}
if ((c == 102)) {
(this.map_bg[i][n] = 255);
(this.ie_c[4] = 100);
(this.ie_x[4] = Math.imul(i, 32));
(this.ie_y[4] = Math.imul(n, 32));
continue;
}
if ((c == 52)) {
(this.map_bg[i][n] = 256);
(this.ie_c[5] = 100);
(this.ie_x[5] = Math.imul(i, 32));
(this.ie_y[5] = Math.imul(n, 32));
continue;
}
if ((c == 103)) {
(this.map_bg[i][n] = 257);
(this.ie_c[6] = 100);
(this.ie_x[6] = Math.imul(i, 32));
(this.ie_y[6] = Math.imul(n, 32));
continue;
}
if ((c == 104)) {
(this.map_bg[i][n] = 68);
(this.ie_c[7] = 100);
(this.ie_x[7] = Math.imul(i, 32));
(this.ie_y[7] = Math.imul(n, 32));
continue;
}
if ((c == 65)) {
if ((this.stage_c[0] == 0)) {
(this.map_bg[i][n] = 50);
(this.stage_c[0] = 100);
(this.stage_x[0] = Math.imul(i, 32));
(this.stage_y[0] = Math.imul(n, 32));
continue;
}
(this.map_bg[i][n] = 60);
continue;
}
if ((c == 66)) {
if ((this.stage_c[1] == 0)) {
(this.map_bg[i][n] = 51);
(this.stage_c[1] = 100);
(this.stage_x[1] = Math.imul(i, 32));
(this.stage_y[1] = Math.imul(n, 32));
continue;
}
(this.map_bg[i][n] = 60);
continue;
}
if ((c == 67)) {
if ((this.stage_c[2] == 0)) {
(this.map_bg[i][n] = 52);
(this.stage_c[2] = 100);
(this.stage_x[2] = Math.imul(i, 32));
(this.stage_y[2] = Math.imul(n, 32));
continue;
}
(this.map_bg[i][n] = 60);
continue;
}
if ((c == 68)) {
if ((this.stage_c[3] == 0)) {
(this.map_bg[i][n] = 53);
(this.stage_c[3] = 100);
(this.stage_x[3] = Math.imul(i, 32));
(this.stage_y[3] = Math.imul(n, 32));
continue;
}
(this.map_bg[i][n] = 60);
continue;
}
(this.map_bg[i][n] = ((c == 49) ? 60 : ((c == 50) ? 61 : ((c == 51) ? 62 : 0))));
}
}
(this.co_p.x = 0);
(this.co_p.y = 0);
(this.co_p.muki = 1);
for ((n2 = 11); (n2 >= 0); J.inc(()=>n2, v=>n2=v, -1, false, "int")) {
if ((this.co_j.x <= 256)) {
(this.pm_x[n2] = ((this.co_j.x - Math.imul(((11 - n2) | 0), 3)) | 0));
(this.pm_y[n2] = this.co_j.y);
continue;
}
(this.pm_x[n2] = ((this.co_j.x + Math.imul(((11 - n2) | 0), 3)) | 0));
(this.pm_y[n2] = this.co_j.y);
(this.co_p.muki = 0);
(this.co_j.muki = 0);
}
(this.pm_p = 0);
(this.co_p.x = this.pm_x[this.pm_p]);
(this.co_p.y = this.pm_y[this.pm_p]);
this.zukanInit$0();
this.drawOs2$0();
}
worldInit2$0() {
(this.co_j.vx = 0);
(this.co_j.vy = 0);
(this.co_j.muki = 1);
(this.co_j.ac = 0);
(this.mp.tr1_c = 2);
(this.yot_f = false);
if ((this.mp.co_p[0].shurui != 1100)) {
this.mp.co_p[0].initShuruibetu$2(1100, this.mp);
}
(this.mp_mode = 200);
(this.cc_hankei = 12);
this.km.initAll$0();
(this.km.mode = 100);
this.drawOs2$0();
}
worldInit3$0() {
var n = ((this.checkStage$0() - 1) | 0);
(this.stage_cf[n] = true);
var n2 = ((J.div(this.stage_y[n], 32) + 1) | 0);
if ((n2 <= 8)) {
(this.map_bg[((J.div(this.stage_x[n], 32) + 1) | 0)][n2] = 66);
}
else {
(this.map_bg[((J.div(this.stage_x[n], 32) + 1) | 0)][((n2 - 1) | 0)] = 66);
}
(this.co_j.vx = 0);
(this.co_j.vy = 0);
(this.co_j.muki = 1);
(this.co_j.ac = 0);
(this.mp.tr1_c = 2);
(this.yot_f = false);
if ((this.mp.co_p[0].shurui != 1100)) {
this.mp.co_p[0].initShuruibetu$2(1100, this.mp);
}
(this.mp_mode = 200);
(this.cc_hankei = 12);
this.km.initAll$0();
(this.km.mode = 100);
this.drawOs2$0();
}
worldInit4$0() {
(this.co_j.vx = 0);
(this.co_j.vy = 0);
(this.co_j.muki = 1);
(this.co_j.ac = 0);
(this.mp.tr1_c = 2);
(this.yot_f = false);
(this.mp_mode = 500);
(this.cc_hankei = 0);
(this.cc_kakudo = 49);
this.km.initAll$0();
if ((this.mp.system_mode == 1)) {
this.km.init1$1(4);
this.km.onKao$5(4, 120, 32, 272, 206);
}
else {
if ((this.mp.system_mode == 3)) {
this.km.init1$1(4);
this.km.onKao$5(4, 120, 32, 272, 250);
}
else {
this.km.init1$1(4);
this.km.onKao$5(4, 120, 32, 272, 228);
}
}
if ((this.mp.gym_kattakazu_c > this.mp.gym_kattakazu_g)) {
(this.gym_step = 10);
this.km.init1$1(3);
this.km.setMessage$2(3, this.mp.gym_gr_name);
this.mp.addSerifuGym$3(3, 5, 3);
this.km.activeSerifu$5(3, 120, 140, 272, Color.cyan);
(this.km.mode = 860);
}
else {
J.inc(()=>this.gym_step, v=>this.gym_step=v, 1, false, "int");
this.km.init1$1(3);
this.km.setMessage$2(3, this.mp.gym_gr_name);
this.mp.addSerifuGym$3(3, 4, 3);
this.km.activeSerifu$5(3, 120, 140, 272, Color.cyan);
(this.km.mode = 850);
}
this.drawOs2$0();
}
drawOs2$0() {
var n = 0;
var n2 = 0;
var n3 = 0;
this.gg.setBackcolor$1(new Color(0, 127, 0));
this.gg.fill2$0();
this.gg.os2_g.drawImage(this.gg.li[3], 0, 0, this.gg.ap);
for ((n3 = 0); (n3 <= 8); J.inc(()=>n3, v=>n3=v, 1, false, "int")) {
for ((n2 = 0); (n2 <= 14); J.inc(()=>n2, v=>n2=v, 1, false, "int")) {
(n = this.map_bg[n2][n3]);
if ((n == 61)) {
this.gg.drawPT2$3(((Math.imul(n2, 32) + 16) | 0), ((((Math.imul(n3, 32) + 16) | 0) - 16) | 0), 61);
this.gg.drawPT2$3(((Math.imul(n2, 32) + 16) | 0), ((((Math.imul(n3, 32) + 16) | 0) + 16) | 0), 61);
continue;
}
if ((n == 62)) {
this.gg.drawPT2$3(((((Math.imul(n2, 32) + 16) | 0) - 16) | 0), ((Math.imul(n3, 32) + 16) | 0), 62);
this.gg.drawPT2$3(((((Math.imul(n2, 32) + 16) | 0) + 16) | 0), ((Math.imul(n3, 32) + 16) | 0), 62);
continue;
}
if ((n != 256)) {
continue;
}
this.gg.drawPT2$3(((((Math.imul(n2, 32) + 16) | 0) - 16) | 0), ((Math.imul(n3, 32) + 16) | 0), 256);
this.gg.drawPT2$3(((((Math.imul(n2, 32) + 16) | 0) + 16) | 0), ((Math.imul(n3, 32) + 16) | 0), 256);
}
}
for ((n3 = 0); (n3 <= 8); J.inc(()=>n3, v=>n3=v, 1, false, "int")) {
for ((n2 = 0); (n2 <= 14); J.inc(()=>n2, v=>n2=v, 1, false, "int")) {
(n = this.map_bg[n2][n3]);
if ((((n == 61) || (n == 62)) || (n == 256))) {
continue;
}
if (((n >= 63) && (n <= 65))) {
this.gg.drawPT2$3(((Math.imul(n2, 32) + 16) | 0), ((((Math.imul(n3, 32) + 16) | 0) - 7) | 0), n);
continue;
}
if (((n == 67) || (n == 255))) {
this.gg.drawPT2$3(((Math.imul(n2, 32) + 16) | 0), ((((Math.imul(n3, 32) + 16) | 0) - 7) | 0), n);
continue;
}
if ((n == 257)) {
this.gg.drawPT2$3(((((Math.imul(n2, 32) + 16) | 0) - 16) | 0), ((Math.imul(n3, 32) + 16) | 0), 62);
this.gg.drawPT2$3(((((Math.imul(n2, 32) + 16) | 0) + 16) | 0), ((Math.imul(n3, 32) + 16) | 0), 62);
this.gg.drawPT2$3(((Math.imul(n2, 32) + 16) | 0), ((((Math.imul(n3, 32) + 16) | 0) - 7) | 0), n);
continue;
}
if ((n == 68)) {
this.gg.drawPT2$3(((((Math.imul(n2, 32) + 16) | 0) - 16) | 0), ((Math.imul(n3, 32) + 16) | 0), 62);
this.gg.drawPT2$3(((((Math.imul(n2, 32) + 16) | 0) + 16) | 0), ((Math.imul(n3, 32) + 16) | 0), 62);
this.gg.drawPT2$3(((Math.imul(n2, 32) + 16) | 0), ((((Math.imul(n3, 32) + 16) | 0) - 7) | 0), n);
continue;
}
this.gg.drawPT2$3(((Math.imul(n2, 32) + 16) | 0), ((Math.imul(n3, 32) + 16) | 0), n);
}
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
var n = (-(1) | 0);
for (var i = 0; (i <= 9); J.inc(()=>i, v=>i=v, 1, false, "int")) {
if ((((this.stage_c[i] != 100) || (this.co_j.x != this.stage_x[i])) || (this.co_j.y != this.stage_y[i]))) {
continue;
}
(n = ((i + 1) | 0));
break;
}
return n;
}
mainProgram$0() {
var n = 0;
if (this.gk.tr1_f) {
if ((this.mp.tr1_c < 2)) {
J.inc(()=>this.mp.tr1_c, v=>this.mp.tr1_c=v, 1, false, "int");
}
}
else {
(this.mp.tr1_c = 0);
}
if ((this.mp_mode == 0)) {
if ((this.km.mode == 100)) {
this.jMove$0();
}
else {
if ((this.km.mode == 200)) {
if ((this.km.cancel_c == 1)) {
this.km.off$1(3);
this.km.off$1(4);
(this.km.mode = 100);
}
else {
if ((this.km.kettei_c == 1)) {
this.km.init1$1(3);
this.km.setMessage$2(3, this.mp.name_kidohakase);
this.km.addItem$2(3, "この世界には、いろいろな生き物が棲んでおる。");
this.km.addItem$2(3, "君が遠くを旅して、彼等を捕まえれば、");
this.km.addItem$2(3, "ずかんに、その特徴が自動的に記録される。");
this.km.addItem$2(3, "それは、生き物の研究に、役立つじゃろう。");
this.km.activeSerifu$5(3, 120, 140, 272, Color.cyan);
(this.km.mode = 210);
}
}
}
else {
if ((this.km.mode == 210)) {
if ((this.km.cancel_c == 1)) {
this.km.off$1(3);
this.km.off$1(4);
(this.km.mode = 100);
}
else {
if ((this.km.kettei_c == 1)) {
this.km.init1$1(3);
this.km.setMessage$2(3, this.mp.name_crys);
this.km.addItem$2(3, "わかりました、はかせ。");
this.km.addItem$2(3, "よーし、どんどん捕まえるわよー。");
this.km.activeSerifu$5(3, 120, 140, 272, Color.magenta);
(this.km.mode = 220);
}
}
}
else {
if ((this.km.mode == 220)) {
if ((this.km.cancel_c == 1)) {
this.km.off$1(3);
this.km.off$1(4);
(this.km.mode = 100);
}
else {
if ((this.km.kettei_c == 1)) {
if (((this.zukanGetTukamaetakazu$0() >= this.zukan_tukamaetakazu_max) && (this.kido_step > 0))) {
this.km.off$1(3);
this.km.init1$1(3);
this.km.setMessage$2(3, this.mp.name_kidohakase);
this.km.addItem$2(3, "記念に、賞状をあげよう。");
this.km.activeSerifu$5(3, 120, 140, 272, Color.cyan);
(this.km.mode = 250);
}
else {
if (((this.zukan_tukamaeta_f[13] && !this.kido_miu_f) && (this.kido_step > 0))) {
(this.kido_miu_f = true);
this.km.off$1(3);
this.km.init1$1(3);
this.km.setMessage$2(3, this.mp.name_kidohakase);
this.km.addItem$2(3, "おや？");
this.km.addItem$2(3, (("それは、" + this.mp.mn_miu) + "じゃな。"));
this.km.addItem$2(3, "珍しいペットを、飼っておるのう。");
this.km.activeSerifu$5(3, 120, 140, 272, Color.cyan);
(this.km.mode = 220);
}
else {
if (((this.zukanGetTukamaetakazu$0() >= ((this.zukan_tukamaetakazu_max - 5) | 0)) && (this.kido_step > 0))) {
this.km.off$1(3);
this.km.init1$1(3);
this.km.setMessage$2(3, this.mp.name_kidohakase);
this.km.addItem$2(3, (("ところで、モンスターは全部で、 " + this.zukan_tukamaetakazu_max) + " 種類だと"));
this.km.addItem$2(3, "言われておる。がんばって、ゲットじゃぞ！");
this.km.activeSerifu$5(3, 120, 140, 272, Color.cyan);
(this.km.mode = 225);
}
else {
(this.kido_step = 1);
this.km.off$1(3);
this.km.init1$1(1);
this.km.setMessage$2(1, "質問があれば、言ってくれたまえよ。");
this.km.addItem$2(1, "ＨＰ");
this.km.addItem$2(1, "ＰＰ");
this.km.addItem$2(1, "ペットボール");
this.km.activeSerifutuki$5(1, 120, 140, 224, this.mp.name_kidohakase);
(this.km.mode = 230);
}
}
}
}
}
}
else {
if ((this.km.mode == 225)) {
if (((this.km.cancel_c == 1) || (this.km.kettei_c == 1))) {
this.km.off$1(3);
this.km.off$1(4);
(this.km.mode = 100);
}
}
else {
if ((this.km.mode == 230)) {
if ((this.km.cancel_c == 1)) {
this.km.off$1(4);
this.km.off$1(1);
(this.km.mode = 100);
}
else {
if ((this.km.kettei_c == 1)) {
if ((this.km.selectedIndex[1] == 0)) {
this.km.init1$1(3);
this.km.addItem$2(3, this.mp.name_crys);
this.km.addItem$2(3, "ねーねー、はかせはかせー。ＨＰってなに？");
this.km.addItem$2(3, this.mp.name_kidohakase);
this.km.addItem$2(3, "ＨＰとは、いわゆるヒットポイントの事じゃな。");
this.km.addItem$2(3, "ダメージを受けると減ってゆき、");
this.km.addItem$2(3, "０になると、動けなくしまう。");
this.km.activeYongyou$4(3, 224, 160, 256);
(this.km.mode = 240);
}
else {
if ((this.km.selectedIndex[1] == 1)) {
this.km.init1$1(3);
this.km.addItem$2(3, this.mp.name_crys);
this.km.addItem$2(3, "ねーねー、はかせはかせー。ＰＰってなに？");
this.km.addItem$2(3, this.mp.name_kidohakase);
this.km.addItem$2(3, "ＰＰとは、パワーポイントの略で、");
this.km.addItem$2(3, "技を使うのに必要じゃ。");
this.km.addItem$2(3, "強力な技には、たくさんのＰＰが必要じゃと");
this.km.addItem$2(3, "言われておる。");
this.km.activeYongyou$4(3, 224, 160, 256);
(this.km.mode = 240);
}
else {
this.km.init1$1(3);
this.km.addItem$2(3, this.mp.name_crys);
this.km.addItem$2(3, "ねーねー、はかせ。ペットボールってなに？");
this.km.addItem$2(3, this.mp.name_kidohakase);
this.km.addItem$2(3, "野生のモンスターに、赤いボールを");
this.km.addItem$2(3, "投げつければ、捕まえる事ができる。");
this.km.addItem$2(3, "しかも、人間の言葉を、話せるようになる。");
this.km.addItem$2(3, "便利な世の中になったものじゃの。");
this.km.activeYongyou$4(3, 224, 160, 256);
(this.km.mode = 240);
}
}
}
}
}
else {
if ((this.km.mode == 240)) {
if (((this.km.cancel_c == 1) || (this.km.kettei_c == 1))) {
this.km.off$1(1);
this.km.off$1(3);
this.km.off$1(4);
(this.km.mode = 100);
}
}
else {
if ((this.km.mode == 250)) {
if (((this.km.cancel_c == 1) || (this.km.kettei_c == 1))) {
(this.mp_mode = 100);
(this.cc_hankei = 312);
(this.co_j.ac = 0);
}
}
else {
if ((this.km.mode == 300)) {
if ((this.km.cancel_c == 1)) {
this.km.off$1(1);
this.km.off$1(4);
(this.km.mode = 100);
}
else {
if ((this.km.kettei_c == 1)) {
if ((this.km.selectedIndex[1] == 0)) {
this.km.init1$1(6);
this.km.setMessage$2(6, "1回、20円です。よろしいですか？");
this.km.addItem$2(6, "はい");
this.km.addItem$2(6, "いいえ");
this.km.activeSerifutuki$5(6, 248, 76, 224, this.mp.name_jyuuisan);
(this.km.mode = 310);
}
else {
if ((this.km.selectedIndex[1] == 1)) {
var n2 = 0;
(this.mp.petlist_kazu = 0);
for ((n2 = 1); (n2 <= 5); J.inc(()=>n2, v=>n2=v, 1, false, "int")) {
if ((this.mp.co_p[n2].shurui < 1100)) {
continue;
}
(this.mp.petlist[this.mp.petlist_kazu] = n2);
J.inc(()=>this.mp.petlist_kazu, v=>this.mp.petlist_kazu=v, 1, false, "int");
}
if ((this.mp.petlist_kazu <= 0)) {
this.km.init1$1(3);
this.km.addItem$2(3, (this.mp.mn_pikachii + "とは、別れる事ができない。"));
this.km.activeIchigyou$4(3, 216, 206, 216);
(this.km.mode = 370);
}
else {
this.km.init1$1(6);
this.km.setMessage$2(6, "誰と別れる？");
for ((n2 = 0); (n2 <= ((this.mp.petlist_kazu - 1) | 0)); J.inc(()=>n2, v=>n2=v, 1, false, "int")) {
this.km.addItem$2(6, this.mp.co_p[this.mp.petlist[n2]].name);
}
this.km.active$4(6, 312, 60, 136);
(this.km.mode = 350);
}
}
else {
if ((this.km.selectedIndex[1] == 2)) {
var n3 = 0;
(this.mp.petlist_kazu = 0);
for ((n3 = 1); (n3 <= 5); J.inc(()=>n3, v=>n3=v, 1, false, "int")) {
if ((this.mp.co_p[n3].shurui < 1100)) {
continue;
}
(this.mp.petlist[this.mp.petlist_kazu] = n3);
J.inc(()=>this.mp.petlist_kazu, v=>this.mp.petlist_kazu=v, 1, false, "int");
}
if ((this.pass_mitakaisuu >= 3)) {
this.km.init1$1(3);
this.km.setMessage$2(3, this.mp.name_jyuuisan);
this.km.addItem$2(3, "パスワードを見られるのは、１ゲーム中、３回までです。");
this.km.activeSerifu$5(3, 160, 240, 312, Color.cyan);
(this.km.mode = 370);
}
else {
if ((this.mp.petlist_kazu <= 0)) {
this.km.init1$1(3);
this.km.setMessage$2(3, this.mp.name_jyuuisan);
this.km.addItem$2(3, (this.mp.mn_pikachii + "には、パスワードがありません。"));
this.km.activeSerifu$5(3, 224, 224, 248, Color.cyan);
(this.km.mode = 370);
}
else {
this.km.init1$1(6);
this.km.setMessage$2(6, "誰のパスワード？");
for ((n3 = 0); (n3 <= ((this.mp.petlist_kazu - 1) | 0)); J.inc(()=>n3, v=>n3=v, 1, false, "int")) {
this.km.addItem$2(6, this.mp.co_p[this.mp.petlist[n3]].name);
}
this.km.active$4(6, 312, 60, 136);
(this.km.mode = 600);
}
}
}
else {
if ((this.km.selectedIndex[1] == 3)) {
var n4 = 0;
(this.mp.petlist_kazu = 0);
for ((n4 = 1); (n4 <= 5); J.inc(()=>n4, v=>n4=v, 1, false, "int")) {
if ((this.mp.co_p[n4].shurui < 1100)) {
continue;
}
(this.mp.petlist[this.mp.petlist_kazu] = n4);
J.inc(()=>this.mp.petlist_kazu, v=>this.mp.petlist_kazu=v, 1, false, "int");
}
if ((this.pass_nyuuryokukaisuu >= 3)) {
this.km.init1$1(3);
this.km.setMessage$2(3, this.mp.name_jyuuisan);
this.km.addItem$2(3, "パスワードの入力は、１ゲーム中、３回までです。");
this.km.activeSerifu$5(3, 192, 240, 280, Color.cyan);
(this.km.mode = 370);
}
else {
if ((this.mp.petlist_kazu >= 5)) {
this.km.init1$1(3);
this.km.setMessage$2(3, this.mp.name_crys);
this.km.addItem$2(3, "そんなにいっぱい、飼えないよお。");
this.km.activeSerifu$5(3, 224, 224, 232, Color.magenta);
(this.km.mode = 370);
}
else {
this.km.init1$1(6);
this.km.setMessage$2(6, "1番目？");
for ((n4 = 0); (n4 <= 9); J.inc(()=>n4, v=>n4=v, 1, false, "int")) {
this.km.addItem$2(6, ("" + n4));
}
this.km.active$4(6, 296, 32, 80);
(this.km.mode = 700);
}
}
}
else {
this.km.off$1(1);
this.km.off$1(4);
(this.km.mode = 100);
}
}
}
}
}
}
}
else {
if ((this.km.mode == 310)) {
if ((this.km.cancel_c == 1)) {
this.km.offActivewindow$2(6, 1);
(this.km.mode = 300);
}
else {
if ((this.km.kettei_c == 1)) {
if ((this.km.selectedIndex[6] == 0)) {
if ((this.mp.j_okozukai < 20)) {
this.km.init1$1(3);
this.km.addItem$2(3, this.mp.name_crys);
this.km.addItem$2(3, "あっ、お金が足りないわ。");
this.km.addItem$2(3, this.mp.name_jyuuisan);
this.km.addItem$2(3, "びんぼうって、悲しいわね。");
this.km.activeYongyou$4(3, 248, 192, 184);
(this.km.mode = 330);
}
else {
this.km.init1$1(3);
for (var i = 0; (i <= 5); J.inc(()=>i, v=>i=v, 1, false, "int")) {
var petObject = this.mp.co_p[i];
if ((petObject.shurui < 1100)) {
this.km.addIntitem$2(3, 0);
continue;
}
this.km.addIntitem$2(3, petObject.spt[0]);
(petObject.hp = petObject.hp_max);
(petObject.pp = petObject.pp_max);
}
this.km.activeYasumu$3(3, 200, 192);
(this.mp.j_okozukai = ((this.mp.j_okozukai - 20) | 0));
(this.km.mode = 320);
}
}
else {
this.km.offActivewindow$2(6, 1);
(this.km.mode = 300);
}
}
}
}
else {
if ((this.km.mode == 320)) {
if (((this.km.cancel_c == 1) || (this.km.kettei_c == 1))) {
this.km.off$1(6);
this.km.offActivewindow$2(3, 1);
(this.km.mode = 300);
}
}
else {
if ((this.km.mode == 330)) {
if (((this.km.cancel_c == 1) || (this.km.kettei_c == 1))) {
this.km.off$1(6);
this.km.off$1(1);
this.km.off$1(4);
this.km.off$1(3);
(this.km.mode = 100);
}
}
else {
if ((this.km.mode == 350)) {
if ((this.km.cancel_c == 1)) {
this.km.offActivewindow$2(6, 1);
(this.km.mode = 300);
}
else {
if ((this.km.kettei_c == 1)) {
(n = this.mp.petlist[this.km.selectedIndex[6]]);
this.km.init1$1(3);
this.km.setMessage$2(3, this.mp.co_p[n].name);
this.km.addItem$2(3, (this.mp.co_p[n].boku + "は、これから旅に出ます。"));
this.km.activeSerifu$5(3, 216, 206, 200, Color.cyan);
(this.km.mode = 360);
this.mp.co_p[n].initShuruibetu$2(1000, this.mp);
}
}
}
else {
if ((this.km.mode == 360)) {
if (((this.km.cancel_c == 1) || (this.km.kettei_c == 1))) {
this.km.off$1(6);
this.km.offActivewindow$2(3, 1);
(this.km.mode = 300);
}
}
else {
if ((this.km.mode == 370)) {
if (((this.km.cancel_c == 1) || (this.km.kettei_c == 1))) {
this.km.offActivewindow$2(3, 1);
(this.km.mode = 300);
}
}
else {
if ((this.km.mode == 400)) {
if ((this.km.cancel_c == 1)) {
this.km.off$1(1);
this.km.off$1(4);
this.km.off$1(5);
(this.km.mode = 100);
}
else {
if ((this.km.kettei_c == 1)) {
if ((this.km.selectedIndex[1] == 0)) {
this.mp.itemNarabikae$0();
if ((this.mp.item_kazu >= 10)) {
this.km.init1$1(3);
this.km.setMessage$2(3, this.mp.name_crys);
this.km.addItem$2(3, "そんなにいっぱい、持てないよお。");
this.km.activeSerifu$5(3, 184, 204, 204, Color.magenta);
(this.km.mode = 430);
}
else {
if ((this.mp.system_mode != 0)) {
this.km.init1$1(6);
this.km.setMessage$2(6, "どれにしますか？");
this.km.addItem2$3(6, this.mp.item_data_name[1], this.mp.item_data_teika[1]);
this.km.addItem2$3(6, this.mp.item_data_name[2], this.mp.item_data_teika[2]);
this.km.addItem2$3(6, this.mp.item_data_name[8], this.mp.item_data_teika[8]);
this.km.addItem2$3(6, this.mp.item_data_name[9], this.mp.item_data_teika[9]);
this.km.addItem2$3(6, this.mp.item_data_name[5], this.mp.item_data_teika[5]);
this.km.addItem2$3(6, this.mp.item_data_name[6], this.mp.item_data_teika[6]);
this.km.addItem2$3(6, this.mp.item_data_name[10], this.mp.item_data_teika[10]);
this.km.activeKaimono$4(6, 292, 111, 184);
}
else {
this.km.init1$1(6);
this.km.setMessage$2(6, "どれにしますか？");
this.km.addItem2$3(6, this.mp.item_data_name[1], this.mp.item_data_teika[1]);
this.km.addItem2$3(6, this.mp.item_data_name[2], this.mp.item_data_teika[2]);
this.km.addItem2$3(6, this.mp.item_data_name[8], this.mp.item_data_teika[8]);
this.km.addItem2$3(6, this.mp.item_data_name[9], this.mp.item_data_teika[9]);
this.km.activeKaimono$4(6, 292, 111, 184);
}
(this.km.mode = 410);
}
}
else {
if ((this.km.selectedIndex[1] == 1)) {
this.mp.itemNarabikae$0();
if ((this.mp.item_kazu <= 0)) {
this.km.init1$1(3);
this.km.setMessage$2(3, this.mp.name_crys);
this.km.addItem$2(3, "何も、持ってないよお。");
this.km.activeSerifu$5(3, 240, 212, 152, Color.magenta);
(this.km.mode = 430);
}
else {
this.km.init1$1(6);
this.km.setMessage$2(6, "どれを売りますか？");
for (var i = 0; (i <= ((this.mp.item_kazu - 1) | 0)); J.inc(()=>i, v=>i=v, 1, false, "int")) {
this.km.addItem$2(6, this.mp.item_data_name[this.mp.item[i]]);
}
this.km.active$4(6, 292, 140, 144);
(this.km.mode = 500);
}
}
else {
this.km.off$1(1);
this.km.off$1(4);
this.km.off$1(5);
(this.km.mode = 100);
}
}
}
}
}
else {
if ((this.km.mode == 410)) {
if ((this.km.cancel_c == 1)) {
this.km.offActivewindow$2(6, 1);
(this.km.mode = 400);
}
else {
if ((this.km.kettei_c == 1)) {
(n = this.km.selectedIndex[6]);
(this.mp.item_useID = ((n == 0) ? 1 : ((n == 1) ? 2 : ((n == 2) ? 8 : ((n == 3) ? 9 : ((n == 4) ? 5 : ((n == 5) ? 6 : 10)))))));
if ((this.mp.j_okozukai < this.mp.item_data_teika[this.mp.item_useID])) {
this.km.init1$1(3);
this.km.addItem$2(3, this.mp.name_crys);
this.km.addItem$2(3, "あっ、お金が足りないわ。");
this.km.addItem$2(3, this.mp.name_teninsan);
this.km.addItem$2(3, "びんぼうって、悲しいわね。");
this.km.activeYongyou$4(3, 86, 204, 184);
(this.km.mode = 440);
}
else {
this.km.init1$1(7);
(n = this.km.selectedIndex[1]);
this.km.setMessage$2(7, (this.mp.item_data_name[this.mp.item_useID] + "を、買いますか？"));
this.km.addItem$2(7, "はい");
this.km.addItem$2(7, "いいえ");
this.km.activeSerifutuki$5(7, 184, 204, 224, this.mp.name_teninsan);
(this.km.mode = 420);
}
}
}
}
else {
if ((this.km.mode == 420)) {
if ((this.km.cancel_c == 1)) {
this.km.offActivewindow$2(7, 6);
(this.km.mode = 410);
}
else {
if ((this.km.kettei_c == 1)) {
if ((this.km.selectedIndex[7] == 0)) {
(this.mp.j_okozukai = ((this.mp.j_okozukai - this.mp.item_data_teika[this.mp.item_useID]) | 0));
(this.km.item_int[5][0] = this.mp.j_okozukai);
this.mp.itemAddItem$1(this.mp.item_useID);
this.km.off$1(6);
this.km.offActivewindow$2(7, 1);
(this.km.mode = 400);
}
else {
this.km.off$1(6);
this.km.offActivewindow$2(7, 1);
(this.km.mode = 400);
}
}
}
}
else {
if ((this.km.mode == 430)) {
if (((this.km.cancel_c == 1) || (this.km.kettei_c == 1))) {
this.km.offActivewindow$2(3, 1);
(this.km.mode = 400);
}
}
else {
if ((this.km.mode == 440)) {
if (((this.km.cancel_c == 1) || (this.km.kettei_c == 1))) {
this.km.off$1(6);
this.km.offActivewindow$2(3, 1);
(this.km.mode = 400);
}
}
else {
if ((this.km.mode == 500)) {
if ((this.km.cancel_c == 1)) {
this.km.offActivewindow$2(6, 1);
(this.km.mode = 400);
}
else {
if ((this.km.kettei_c == 1)) {
(this.mp.item_useID = this.km.selectedIndex[6]);
if ((this.mp.item_data_urine[this.mp.item[this.mp.item_useID]] > 0)) {
this.km.init1$1(7);
this.km.setMessage$2(7, (this.mp.item_data_urine[this.mp.item[this.mp.item_useID]] + "円で、よろしいですか？"));
this.km.addItem$2(7, "はい");
this.km.addItem$2(7, "いいえ");
this.km.activeSerifutuki$5(7, 80, 212, 184, this.mp.name_teninsan);
(this.km.mode = 510);
}
else {
this.km.init1$1(7);
this.km.setMessage$2(7, this.mp.name_teninsan);
this.km.addItem$2(7, "それは大切な物なので、売れません。");
this.km.activeSerifu$5(7, 40, 212, 224, Color.cyan);
(this.km.mode = 520);
}
}
}
}
else {
if ((this.km.mode == 510)) {
if ((this.km.cancel_c == 1)) {
this.km.offActivewindow$2(7, 6);
(this.km.mode = 500);
}
else {
if ((this.km.kettei_c == 1)) {
(this.mp.item_useID = this.km.selectedIndex[6]);
if ((this.km.selectedIndex[7] == 0)) {
(this.mp.j_okozukai = ((this.mp.j_okozukai + this.mp.item_data_urine[this.mp.item[this.mp.item_useID]]) | 0));
(this.km.item_int[5][0] = this.mp.j_okozukai);
this.mp.itemDelItem$1(this.mp.item_useID);
this.km.off$1(6);
this.km.offActivewindow$2(7, 1);
(this.km.mode = 400);
}
else {
this.km.off$1(6);
this.km.offActivewindow$2(7, 1);
(this.km.mode = 400);
}
}
}
}
else {
if ((this.km.mode == 520)) {
if ((this.km.cancel_c == 1)) {
this.km.offActivewindow$2(7, 6);
(this.km.mode = 500);
}
else {
if ((this.km.kettei_c == 1)) {
this.km.off$1(6);
this.km.offActivewindow$2(7, 1);
(this.km.mode = 400);
}
}
}
else {
if ((this.km.mode == 600)) {
if ((this.km.cancel_c == 1)) {
this.km.offActivewindow$2(6, 1);
(this.km.mode = 300);
}
else {
if ((this.km.kettei_c == 1)) {
(n = this.mp.petlist[this.km.selectedIndex[6]]);
var n5 = ((J.div(this.mp.co_p[n].shurui, 100) - 10) | 0);
if (((n5 >= 19) || ((n5 == 18) && !this.mp.pichika_pass))) {
this.km.init1$1(3);
this.km.setMessage$2(3, this.mp.name_jyuuisan);
this.km.addItem$2(3, (this.mp.co_p[n].name + "には、"));
this.km.addItem$2(3, "パスワードがありません。");
this.km.activeSerifu$5(3, 312, 192, 176, Color.cyan);
(this.km.mode = 610);
}
else {
(this.pass[2] = ((n5 >= 10) ? 5 : 0));
(this.pass[1] = J.rem(n5, 10));
(n5 = this.mp.co_p[n].optionwaza);
if ((n5 == 1)) {
(this.pass[3] = 0);
(this.pass[0] = 5);
}
else {
if ((n5 == 2)) {
(this.pass[3] = 5);
(this.pass[0] = 0);
}
else {
if ((n5 == 3)) {
(this.pass[3] = 5);
(this.pass[0] = 5);
}
else {
(this.pass[3] = 0);
(this.pass[0] = 0);
}
}
}
(n5 = this.mp.co_p[n].hp_max_upkaisuu);
(this.pass[0] = ((this.pass[0] + n5) | 0));
(n5 = this.mp.co_p[n].pp_max_upkaisuu);
(this.pass[3] = ((this.pass[3] + n5) | 0));
(n5 = J.rem(((((this.pass[0] + this.pass[1]) | 0) + this.pass[3]) | 0), 5));
(this.pass[2] = ((this.pass[2] + n5) | 0));
(this.pass[0] = J.rem(((this.pass[0] + this.pass_rt[this.pass[2]][0]) | 0), 10));
(this.pass[1] = J.rem(((this.pass[1] + this.pass_rt[this.pass[2]][1]) | 0), 10));
(this.pass[3] = J.rem(((this.pass[3] + this.pass_rt[this.pass[2]][2]) | 0), 10));
(this.pass[2] = ((9 - this.pass[2]) | 0));
J.inc(()=>this.pass_mitakaisuu, v=>this.pass_mitakaisuu=v, 1, false, "int");
if (((((this.pass[0] == 0) && (this.pass[1] == 0)) && (this.pass[2] == 0)) && (this.pass[3] == 3))) {
(this.pass[0] = 0);
(this.pass[1] = 0);
(this.pass[2] = 1);
(this.pass[3] = 1);
}
this.km.init1$1(3);
this.km.setMessage$2(3, (this.mp.co_p[n].name + "のパスワード"));
this.km.addItem$2(3, (((("" + this.pass[0]) + this.pass[1]) + this.pass[2]) + this.pass[3]));
this.km.activeSerifu$5(3, 312, 184, 136, Color.yellow);
(this.km.mode = 610);
}
}
}
}
else {
if ((this.km.mode == 610)) {
if (((this.km.cancel_c == 1) || (this.km.kettei_c == 1))) {
this.km.off$1(6);
this.km.offActivewindow$2(3, 1);
(this.km.mode = 300);
}
}
else {
if ((this.km.mode == 700)) {
if ((this.km.cancel_c == 1)) {
this.km.offActivewindow$2(6, 1);
(this.km.mode = 300);
}
else {
if ((this.km.kettei_c == 1)) {
this.km.init1$1(7);
this.km.setMessage$2(7, "2番目？");
for (var i = 0; (i <= 9); J.inc(()=>i, v=>i=v, 1, false, "int")) {
this.km.addItem$2(7, ("" + i));
}
this.km.active$4(7, 336, 32, 80);
(this.km.mode = 710);
}
}
}
else {
if ((this.km.mode == 710)) {
if ((this.km.cancel_c == 1)) {
this.km.offActivewindow$2(7, 6);
(this.km.mode = 700);
}
else {
if ((this.km.kettei_c == 1)) {
this.km.init1$1(8);
this.km.setMessage$2(8, "3番目？");
for (var i = 0; (i <= 9); J.inc(()=>i, v=>i=v, 1, false, "int")) {
this.km.addItem$2(8, ("" + i));
}
this.km.active$4(8, 376, 32, 80);
(this.km.mode = 720);
}
}
}
else {
if ((this.km.mode == 720)) {
if ((this.km.cancel_c == 1)) {
this.km.offActivewindow$2(8, 7);
(this.km.mode = 710);
}
else {
if ((this.km.kettei_c == 1)) {
this.km.init1$1(9);
this.km.setMessage$2(9, "4番目？");
for (var i = 0; (i <= 9); J.inc(()=>i, v=>i=v, 1, false, "int")) {
this.km.addItem$2(9, ("" + i));
}
this.km.active$4(9, 416, 32, 80);
(this.km.mode = 730);
}
}
}
else {
if ((this.km.mode == 730)) {
if ((this.km.cancel_c == 1)) {
this.km.offActivewindow$2(9, 8);
(this.km.mode = 720);
}
else {
if ((this.km.kettei_c == 1)) {
(this.pass[0] = this.km.selectedIndex[6]);
(this.pass[1] = this.km.selectedIndex[7]);
(this.pass[2] = this.km.selectedIndex[8]);
(this.pass[3] = this.km.selectedIndex[9]);
this.km.init1$1(10);
this.km.setMessage$2(10, ((((("" + this.pass[0]) + this.pass[1]) + this.pass[2]) + this.pass[3]) + " で、よろしいですか？"));
this.km.addItem$2(10, "はい");
this.km.addItem$2(10, "いいえ");
this.km.active$4(10, 296, 214, 200);
(this.km.mode = 740);
}
}
}
else {
if ((this.km.mode == 740)) {
if ((this.km.cancel_c == 1)) {
this.km.offActivewindow$2(10, 9);
(this.km.mode = 730);
}
else {
if ((this.km.kettei_c == 1)) {
if ((this.km.selectedIndex[10] == 0)) {
if (((((this.pass[0] == 0) && (this.pass[1] == 0)) && (this.pass[2] == 0)) && (this.pass[3] == 3))) {
(this.pass[0] = 0);
(this.pass[1] = 0);
(this.pass[2] = 1);
(this.pass[3] = 1);
}
else {
if (((((this.pass[0] == 0) && (this.pass[1] == 0)) && (this.pass[2] == 1)) && (this.pass[3] == 1))) {
(this.pass[0] = 0);
(this.pass[1] = 0);
(this.pass[2] = 0);
(this.pass[3] = 3);
}
}
J.inc(()=>this.pass_nyuuryokukaisuu, v=>this.pass_nyuuryokukaisuu=v, 1, false, "int");
(this.pass[2] = ((9 - this.pass[2]) | 0));
(this.pass[0] = J.rem(((((this.pass[0] + 10) | 0) - this.pass_rt[this.pass[2]][0]) | 0), 10));
(this.pass[1] = J.rem(((((this.pass[1] + 10) | 0) - this.pass_rt[this.pass[2]][1]) | 0), 10));
(this.pass[3] = J.rem(((((this.pass[3] + 10) | 0) - this.pass_rt[this.pass[2]][2]) | 0), 10));
var n6 = 0;
var n7 = J.rem(this.pass[2], 5);
var n8 = J.rem(((((this.pass[0] + this.pass[1]) | 0) + this.pass[3]) | 0), 5);
if ((n7 != n8)) {
(n6 = 1);
}
(n7 = ((this.pass[2] >= 5) ? 10 : 0));
if ((((n7 = ((n7 + this.pass[1]) | 0)) > 18) || (n7 < 1))) {
(n6 = 1);
}
if (((n7 == 18) && !this.mp.pichika_pass)) {
(n6 = 2);
}
if ((n6 == 1)) {
this.km.off$1(6);
this.km.off$1(7);
this.km.off$1(8);
this.km.off$1(9);
this.km.off$1(10);
this.km.init1$1(3);
this.km.setMessage$2(3, this.mp.name_jyuuisan);
this.km.addItem$2(3, "パスワードが、間違っています。");
this.km.activeSerifu$5(3, 296, 110, 192, Color.cyan);
(this.km.mode = 750);
}
else {
if ((n6 == 2)) {
this.km.off$1(6);
this.km.off$1(7);
this.km.off$1(8);
this.km.off$1(9);
this.km.off$1(10);
this.km.init1$1(3);
this.km.setMessage$2(3, this.mp.name_jyuuisan);
this.km.addItem$2(3, "そのモンスターは、");
this.km.addItem$2(3, "登場できません。");
this.km.activeSerifu$5(3, 296, 110, 136, Color.cyan);
(this.km.mode = 750);
}
else {
var n9 = 0;
for (var i = 1; (i <= 5); J.inc(()=>i, v=>i=v, 1, false, "int")) {
if ((this.mp.co_p[i].shurui >= 1100)) {
continue;
}
(n9 = i);
break;
}
this.mp.co_p[n9].initShuruibetu$2(((1000 + Math.imul(n7, 100)) | 0), this.mp);
(this.mp.co_p[n9].hp_max_upkaisuu = J.rem(this.pass[0], 5));
(this.mp.co_p[n9].pp_max_upkaisuu = J.rem(this.pass[3], 5));
this.mp.co_p[n9].setHPPPMax$0();
(this.mp.co_p[n9].hp = this.mp.co_p[n9].hp_max);
(this.mp.co_p[n9].pp = this.mp.co_p[n9].pp_max);
(n8 = ((this.pass[3] >= 5) ? 2 : 0));
if ((this.pass[0] >= 5)) {
J.inc(()=>n8, v=>n8=v, 1, false, "int");
}
this.mp.co_p[n9].addOptionwaza$1(n8);
this.zukanTourokuPet$0();
this.km.off$1(6);
this.km.off$1(7);
this.km.off$1(8);
this.km.off$1(9);
this.km.off$1(10);
this.km.init1$1(3);
this.km.activeToujou$6(3, 296, 88, 172, this.mp.co_p[n9].spt[0], this.mp.co_p[n9].name);
(this.km.mode = 750);
}
}
}
else {
this.km.offActivewindow$2(10, 1);
this.km.off$1(6);
this.km.off$1(7);
this.km.off$1(8);
this.km.off$1(9);
(this.km.mode = 300);
}
}
}
}
else {
if ((this.km.mode == 750)) {
if (((this.km.cancel_c == 1) || (this.km.kettei_c == 1))) {
this.km.offActivewindow$2(3, 1);
(this.km.mode = 300);
}
}
else {
if ((this.km.mode == 800)) {
if ((this.km.cancel_c == 1)) {
this.km.off$1(3);
this.km.off$1(4);
(this.km.mode = 100);
}
else {
if ((this.km.kettei_c == 1)) {
this.km.off$1(3);
this.km.init1$1(1);
this.km.setMessage$2(1, "どうしますか？");
this.km.addItem$2(1, (this.mp.gym_gr_name + "に挑戦する"));
this.km.addItem$2(1, "やめる");
this.km.active$4(1, 120, 140, 272);
(this.km.mode = 810);
}
}
}
else {
if ((this.km.mode == 810)) {
if ((this.km.cancel_c == 1)) {
this.km.off$1(1);
this.km.off$1(4);
(this.km.mode = 100);
}
else {
if ((this.km.kettei_c == 1)) {
if ((this.km.selectedIndex[1] == 0)) {
if ((this.zukanGetTukamaetakazu$0() < this.mp.gym_tukamaetakazu)) {
this.km.init1$1(3);
this.km.setMessage$2(3, this.mp.gym_gr_name);
this.mp.addSerifuGym$3(3, 2, 4);
this.km.activeSerifu$5(3, 120, 204, 272, Color.cyan);
(this.km.mode = 820);
}
else {
(this.mp.petlist_kazu = 0);
for (var i = 0; (i <= 5); J.inc(()=>i, v=>i=v, 1, false, "int")) {
if ((((this.mp.co_p[i].shurui < 1100) || (this.mp.co_p[i].hp <= 0)) || (this.mp.co_p[i].pp <= 0))) {
continue;
}
J.inc(()=>this.mp.petlist_kazu, v=>this.mp.petlist_kazu=v, 1, false, "int");
}
if ((this.mp.petlist_kazu < 3)) {
this.km.init1$1(3);
this.km.setMessage$2(3, this.mp.gym_gr_name);
this.mp.addSerifuGym$3(3, 3, 4);
this.km.activeSerifu$5(3, 120, 204, 272, Color.cyan);
(this.km.mode = 820);
}
else {
(this.mp_mode = 400);
(this.cc_hankei = 364);
(this.cc_kakudo = 45);
(this.co_j.ac = 0);
}
}
}
else {
this.km.off$1(1);
this.km.off$1(4);
(this.km.mode = 100);
}
}
}
}
else {
if ((this.km.mode == 820)) {
if (((this.km.cancel_c == 1) || (this.km.kettei_c == 1))) {
this.km.off$1(1);
this.km.off$1(3);
this.km.off$1(4);
(this.km.mode = 100);
}
}
else {
if ((this.km.mode == 850)) {
if (((this.km.cancel_c == 1) || (this.km.kettei_c == 1))) {
this.km.off$1(3);
this.km.off$1(4);
(this.km.mode = 100);
}
}
else {
if ((this.km.mode == 860)) {
if ((this.km.kettei_c == 1)) {
this.km.init1$1(5);
this.km.addItem$2(5, "賞金100円を、手に入れた。");
this.km.activeIchigyou$4(5, 320, 68, 168);
(this.mp.j_okozukai = ((this.mp.j_okozukai + 100) | 0));
this.mp.addScore$1(50);
(this.km.mode = 870);
}
}
else {
if ((this.km.mode == 870)) {
if (((this.km.cancel_c == 1) || (this.km.kettei_c == 1))) {
this.km.off$1(3);
this.km.off$1(5);
this.km.off$1(4);
(this.km.mode = 100);
if ((this.ie_c[7] == 100)) {
(this.map_bg[J.div(this.ie_x[7], 32)][J.div(this.ie_y[7], 32)] = 62);
this.drawOs2$0();
(this.mp_mode = 310);
(this.cc_hankei = 0);
}
}
}
else {
if ((this.km.mode == 900)) {
if ((this.km.cancel_c == 1)) {
this.km.off$1(3);
this.km.off$1(4);
(this.km.mode = 100);
}
else {
if ((this.km.kettei_c == 1)) {
this.km.init1$1(3);
this.km.setMessage$2(3, this.mp.name_furuure);
this.mp.addSerifuRR$3(3, 2, 4);
this.km.activeSerifu$5(3, 120, 140, 272, Color.cyan);
(this.km.mode = 910);
}
}
}
else {
if ((this.km.mode == 910)) {
if (((this.km.cancel_c == 1) || (this.km.kettei_c == 1))) {
if ((this.furuure_step <= 0)) {
(this.furuure_step = 1);
}
this.km.off$1(3);
this.km.off$1(4);
(this.km.mode = 100);
}
}
else {
if ((this.km.mode == 920)) {
if ((this.km.cancel_c == 1)) {
this.km.off$1(3);
this.km.off$1(4);
(this.km.mode = 100);
}
else {
if ((this.km.kettei_c == 1)) {
this.km.init1$1(3);
this.km.setMessage$2(3, this.mp.name_furuure);
this.mp.addSerifuRR$3(3, 9, 2);
this.km.activeSerifu$5(3, 120, 140, 272, Color.cyan);
(this.km.mode = 250);
}
}
}
else {
if ((this.km.mode == 950)) {
if (((this.km.cancel_c == 1) || (this.km.kettei_c == 1))) {
this.km.off$1(3);
(this.km.mode = 100);
}
}
else {
if ((this.km.mode == 960)) {
(this.co_p.pt = 140);
if (((this.km.cancel_c == 1) || (this.km.kettei_c == 1))) {
this.km.init1$1(3);
this.km.addItem$2(3, this.mp.name_crys);
this.km.addItem$2(3, "はい、わかりました。");
this.km.addItem$2(3, this.mp.name_furuure);
this.mp.addSerifuRR$3(3, 6, 1);
this.km.activeYongyou$4(3, 80, 140, 248);
(this.km.mode = 970);
}
}
else {
if ((this.km.mode == 970)) {
if (((this.km.cancel_c == 1) || (this.km.kettei_c == 1))) {
this.km.off$1(3);
this.km.off$1(4);
(this.km.mode = 100);
(this.map_bg[J.div(this.ie_x[6], 32)][J.div(this.ie_y[6], 32)] = 62);
this.drawOs2$0();
(this.mp_mode = 300);
(this.cc_hankei = 0);
}
}
else {
if ((this.km.mode == 980)) {
(this.co_p.pt = 140);
if (((this.km.cancel_c == 1) || (this.km.kettei_c == 1))) {
this.km.init1$1(3);
this.km.addItem$2(3, this.mp.name_crys);
this.km.addItem$2(3, "そんなの、持ってないですう。");
this.km.addItem$2(3, this.mp.name_furuure);
this.mp.addSerifuRR$3(3, 5, 1);
this.km.activeYongyou$4(3, 80, 140, 248);
(this.km.mode = 990);
}
}
else {
if (((this.km.mode == 990) && ((this.km.cancel_c == 1) || (this.km.kettei_c == 1)))) {
this.km.off$1(3);
this.km.off$1(4);
(this.km.mode = 100);
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
}
}
}
this.km.move$0();
}
if (!this.yot_f) {
if (((this.co_p.pt == 141) || (this.co_p.pt == 142))) {
this.gg.drawPT$4(((this.co_p.x + 16) | 0), ((((this.co_p.y + 16) | 0) - 12) | 0), this.co_p.pt, this.co_p.muki);
}
else {
if ((this.co_p.pt == 1143)) {
this.gg.drawPT$4(((((((this.co_p.x + 16) | 0) + 5) | 0) - Math.imul(this.co_p.muki, 10)) | 0), ((((((this.co_p.y + 16) | 0) - 12) | 0) - 3) | 0), 143, this.co_p.muki);
}
else {
this.gg.drawPT$4(((((((this.co_p.x + 16) | 0) + 5) | 0) - Math.imul(this.co_p.muki, 10)) | 0), ((((this.co_p.y + 16) | 0) - 12) | 0), this.co_p.pt, this.co_p.muki);
}
}
}
if ((this.co_j.pt == 1000)) {
this.gg.drawPT$4(((((((this.co_j.x + 16) | 0) + 2) | 0) - Math.imul(this.co_j.muki, 4)) | 0), ((((((this.co_j.y + 16) | 0) - 12) | 0) - 5) | 0), 100, this.co_j.muki);
}
else {
if ((this.co_j.pt == 1010)) {
this.gg.drawPT$4(((((((this.co_j.x + 16) | 0) + 2) | 0) - Math.imul(this.co_j.muki, 4)) | 0), ((((((this.co_j.y + 16) | 0) - 12) | 0) + 5) | 0), 100, this.co_j.muki);
}
else {
if ((this.co_j.pt == 264)) {
this.gg.drawPT$4(((((((this.co_j.x + 16) | 0) + 2) | 0) - Math.imul(this.co_j.muki, 4)) | 0), ((((((this.co_j.y + 16) | 0) - 12) | 0) - 4) | 0), 264, this.co_j.muki);
}
else {
this.gg.drawPT$4(((((((this.co_j.x + 16) | 0) + 2) | 0) - Math.imul(this.co_j.muki, 4)) | 0), ((((this.co_j.y + 16) | 0) - 12) | 0), this.co_j.pt, this.co_j.muki);
}
}
}
this.km.drawMenus$0();
if ((this.mp_mode == 100)) {
this.circleCLS$1(this.cc_hankei);
(this.cc_hankei = ((this.cc_hankei - 12) | 0));
if ((this.cc_hankei < 0)) {
(this.cc_hankei = 0);
(this.mp_mode = ((this.getBGZ$2(this.co_j.x, this.co_j.y) == 255) ? 120 : (((this.zukanGetTukamaetakazu$0() >= this.zukan_tukamaetakazu_max) && (this.getBGZ$2(this.co_j.x, this.co_j.y) == 63)) ? 120 : ((this.getBGZ$2(this.co_j.x, this.co_j.y) == 67) ? 130 : 110))));
}
}
else {
if ((this.mp_mode == 110)) {
this.circleCLS$1(this.cc_hankei);
}
else {
if ((this.mp_mode == 120)) {
this.circleCLS$1(this.cc_hankei);
}
else {
if ((this.mp_mode == 200)) {
this.circleCLS$1(this.cc_hankei);
(this.cc_hankei = ((this.cc_hankei + 12) | 0));
if ((this.cc_hankei > 312)) {
(this.mp_mode = 0);
}
}
else {
if ((this.mp_mode == 300)) {
J.inc(()=>this.cc_hankei, v=>this.cc_hankei=v, 1, false, "int");
if ((this.cc_hankei <= 4)) {
(n = 0);
}
else {
if ((this.cc_hankei <= 8)) {
(n = 257);
}
else {
if ((this.cc_hankei <= 12)) {
(n = 0);
}
else {
if ((this.cc_hankei <= 16)) {
(n = 257);
}
else {
if ((this.cc_hankei <= 20)) {
(n = 0);
}
else {
if ((this.cc_hankei <= 24)) {
(n = 257);
}
else {
if ((this.cc_hankei <= 28)) {
(n = 0);
}
else {
if ((this.cc_hankei <= 32)) {
(n = 257);
}
else {
(n = 0);
(this.ie_c[6] = 40);
(this.mp_mode = 0);
}
}
}
}
}
}
}
}
this.gg.drawPT$4(((this.ie_x[6] + 16) | 0), ((((this.ie_y[6] + 16) | 0) - 7) | 0), n, 0);
}
else {
if ((this.mp_mode == 310)) {
J.inc(()=>this.cc_hankei, v=>this.cc_hankei=v, 1, false, "int");
if ((this.cc_hankei <= 4)) {
(n = 0);
}
else {
if ((this.cc_hankei <= 8)) {
(n = 68);
}
else {
if ((this.cc_hankei <= 12)) {
(n = 0);
}
else {
if ((this.cc_hankei <= 16)) {
(n = 68);
}
else {
if ((this.cc_hankei <= 20)) {
(n = 0);
}
else {
if ((this.cc_hankei <= 24)) {
(n = 68);
}
else {
if ((this.cc_hankei <= 28)) {
(n = 0);
}
else {
if ((this.cc_hankei <= 32)) {
(n = 68);
}
else {
(n = 0);
(this.ie_c[7] = 40);
(this.mp_mode = 0);
}
}
}
}
}
}
}
}
this.gg.drawPT$4(((this.ie_x[7] + 16) | 0), ((((this.ie_y[7] + 16) | 0) - 7) | 0), n, 0);
}
else {
if ((this.mp_mode == 400)) {
this.squareCLS$2(this.cc_hankei, this.cc_kakudo);
(this.cc_kakudo = ((this.cc_kakudo + 7) | 0));
if ((this.cc_kakudo >= 90)) {
(this.cc_kakudo = ((this.cc_kakudo - 90) | 0));
}
(this.cc_hankei = ((this.cc_hankei - 7) | 0));
if ((this.cc_hankei <= 0)) {
(this.mp_mode = 130);
}
}
else {
if ((this.mp_mode == 500)) {
this.squareCLS$2(this.cc_hankei, this.cc_kakudo);
(this.cc_kakudo = ((this.cc_kakudo - 7) | 0));
if ((this.cc_kakudo < 90)) {
(this.cc_kakudo = ((this.cc_kakudo + 90) | 0));
}
(this.cc_hankei = ((this.cc_hankei + 7) | 0));
if ((this.cc_hankei >= 364)) {
(this.mp_mode = 0);
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
J.inc(()=>this.co_j.ac, v=>this.co_j.ac=v, 1, false, "int");
if ((this.co_j.ac > 7)) {
(this.co_j.ac = 0);
}
if ((this.co_j.ac > 3)) {
(this.co_j.pt = 1000);
(n = this.getBGZ$2(n2, n3));
if (((((n >= 63) && (n <= 65)) || (n == 67)) || (n == 255))) {
(this.co_j.pt = 1010);
}
}
if ((this.mp.tr1_c == 1)) {
if ((this.checkStage$0() >= 1)) {
if ((((this.mp.system_mode == 3) && (this.checkStage$0() == 4)) && (this.ie_c[6] != 40))) {
this.km.init1$1(3);
this.km.setMessage$2(3, this.mp.name_crys);
this.km.addItem$2(3, "扉を開けないと、入れないみたい。");
this.km.activeSerifu$5(3, 256, 96, 232, Color.magenta);
(this.km.mode = 950);
(this.co_j.pt = 100);
}
else {
(this.mp_mode = 100);
(this.cc_hankei = 312);
(this.co_j.ac = 0);
(this.co_j.pt = 100);
}
}
else {
if ((this.getBGZ$2(n2, n3) == 63)) {
this.km.init1$1(4);
this.km.onKao$5(4, 120, 32, 272, 200);
if ((this.kido_step == 0)) {
if ((this.mp.system_mode == 1)) {
this.km.init1$1(3);
this.km.addItem$2(3, this.mp.name_kidohakase);
this.km.addItem$2(3, (("よく来た。わしが、" + this.mp.name_kidohakase) + "じゃ。"));
this.km.addItem$2(3, this.mp.name_crys);
this.km.addItem$2(3, (("こんちわー。あたし、" + this.mp.name_crys) + "。"));
this.km.addItem$2(3, (this.mp.mn_pikachii + "といっしょに、旅をしてまーす。"));
this.km.activeYongyou2$4(3, 120, 140, 272);
(this.km.mode = 200);
}
else {
this.km.init1$1(3);
this.km.addItem$2(3, this.mp.name_crys);
this.km.addItem$2(3, "こんちわー、はかせ。");
this.km.addItem$2(3, this.mp.name_kidohakase);
this.km.addItem$2(3, (("よく来た、" + this.mp.name_crys) + "君。"));
this.km.addItem$2(3, "君が捕まえた生き物のデーターは、");
this.km.addItem$2(3, "研究の役に立っておるよ。");
this.km.activeYongyou$4(3, 120, 140, 272);
(this.km.mode = 220);
}
}
else {
this.km.init1$1(3);
this.km.setMessage$2(3, this.mp.name_kidohakase);
this.km.addItem$2(3, "どれどれ、ずかんの調子はどうかな？");
this.km.addItem$2(3, ("見つけた数  " + this.zukanGetMituketakazu$0()));
this.km.addItem$2(3, ("捕まえた数  " + this.zukanGetTukamaetakazu$0()));
if ((this.zukanGetTukamaetakazu$0() >= this.zukan_tukamaetakazu_max)) {
this.km.addItem$2(3, "ついに、全て集めたようじゃな！");
}
else {
if ((this.zukanGetTukamaetakazu$0() <= 3)) {
this.km.addItem$2(3, "うーむ、まだまだじゃの。");
}
else {
this.km.addItem$2(3, "おっ、がんばっておるようじゃの！");
}
}
this.km.activeSerifu$5(3, 120, 140, 272, Color.cyan);
(this.km.mode = 220);
}
(this.co_j.pt = 1010);
(this.co_j.ac = 0);
}
else {
if ((this.getBGZ$2(n2, n3) == 64)) {
this.km.init1$1(4);
this.km.onKao$5(4, 72, 32, 216, 202);
this.km.init1$1(1);
this.km.setMessage$2(1, "こんにちは。ペットセンターです。");
this.km.addItem$2(1, "ペットを休ませる");
this.km.addItem$2(1, "ペットと別れる");
this.km.addItem$2(1, "パスワードを見る");
this.km.addItem$2(1, "パスワードを入力する");
this.km.addItem$2(1, "外へ出る");
this.km.activeSerifutuki$5(1, 72, 140, 216, this.mp.name_jyuuisan);
(this.km.mode = 300);
(this.co_j.pt = 1010);
(this.co_j.ac = 0);
}
else {
if ((this.getBGZ$2(n2, n3) == 65)) {
this.km.init1$1(4);
this.km.onKao$5(4, 120, 32, 216, 204);
this.km.init1$1(5);
this.km.onOkozukai$5(5, 292, 48, 88, this.mp.j_okozukai);
this.km.init1$1(1);
this.km.setMessage$2(1, "いらっしゃいませ。");
this.km.addItem$2(1, "買う");
this.km.addItem$2(1, "持ち物を売る");
this.km.addItem$2(1, "店を出る");
this.km.activeSerifutuki$5(1, 120, 140, 160, this.mp.name_teninsan);
(this.km.mode = 400);
(this.co_j.pt = 1010);
(this.co_j.ac = 0);
}
else {
if ((this.getBGZ$2(n2, n3) == 67)) {
if ((this.mp.system_mode == 1)) {
this.km.init1$1(4);
this.km.onKao$5(4, 120, 32, 272, 206);
}
else {
if ((this.mp.system_mode == 3)) {
this.km.init1$1(4);
this.km.onKao$5(4, 120, 32, 272, 250);
}
else {
this.km.init1$1(4);
this.km.onKao$5(4, 120, 32, 272, 228);
}
}
if ((this.gym_step <= 0)) {
this.km.init1$1(3);
this.km.setMessage$2(3, this.mp.gym_gr_name);
this.mp.addSerifuGym$3(3, 1, 3);
this.km.activeSerifu$5(3, 120, 140, 272, Color.cyan);
(this.km.mode = 800);
}
else {
if ((this.gym_step <= 2)) {
this.km.init1$1(1);
this.km.setMessage$2(1, "どうしますか？");
this.km.addItem$2(1, (this.mp.gym_gr_name + "に挑戦する"));
this.km.addItem$2(1, "やめる");
this.km.active$4(1, 120, 140, 272);
(this.km.mode = 810);
}
else {
if ((this.gym_step == 3)) {
this.km.init1$1(3);
this.km.setMessage$2(3, this.mp.gym_gr_name);
this.mp.addSerifuGym$3(3, 6, 2);
this.km.activeSerifu$5(3, 120, 140, 272, Color.cyan);
(this.km.mode = 850);
}
else {
this.km.init1$1(3);
this.km.setMessage$2(3, this.mp.gym_gr_name);
this.mp.addSerifuGym$3(3, 5, 3);
this.km.activeSerifu$5(3, 120, 140, 272, Color.cyan);
(this.km.mode = 850);
}
}
}
(this.co_j.pt = 1010);
(this.co_j.ac = 0);
}
else {
if ((this.getBGZ$2(n2, n3) == 255)) {
this.km.init1$1(4);
this.km.onKao$5(4, 120, 32, 272, 252);
if (this.stage_cf[3]) {
this.km.init1$1(3);
this.km.addItem$2(3, this.mp.name_furuure);
this.mp.addSerifuRR$3(3, 7, 1);
this.km.addItem$2(3, this.mp.name_crys);
this.mp.addSerifuRR$3(3, 8, 2);
this.km.activeYongyou2$4(3, 120, 140, 272);
(this.km.mode = 920);
}
else {
if ((this.furuure_step <= 1)) {
this.km.init1$1(3);
this.km.setMessage$2(3, this.mp.name_furuure);
this.mp.addSerifuRR$3(3, 1, 4);
this.km.activeSerifu$5(3, 120, 140, 272, Color.cyan);
(this.km.mode = 900);
}
}
(this.co_j.pt = 1010);
(this.co_j.ac = 0);
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
(this.co_j.vy = (-(4) | 0));
(this.co_j.ac = (-(1) | 0));
(this.yot_f = false);
}
}
else {
if (this.gk.down_f) {
if ((this.getBGZ$2(n2, ((n3 + 32) | 0)) == 61)) {
(this.co_j.vy = 4);
(this.co_j.ac = (-(1) | 0));
(this.yot_f = false);
}
}
else {
if (this.gk.left_f) {
(this.co_j.muki = 0);
if ((this.getBGZ$2(((n2 - 32) | 0), n3) == 62)) {
(this.co_j.vx = (-(4) | 0));
(this.co_j.ac = (-(1) | 0));
(this.yot_f = false);
}
else {
if ((this.getBGZ$2(((n2 - 32) | 0), n3) == 256)) {
if ((this.furuure_step <= 0)) {
this.km.init1$1(3);
this.km.setMessage$2(3, this.mp.name_crys);
this.mp.addSerifuRR$3(3, 3, 2);
this.km.activeSerifu$5(3, 256, 32, 232, Color.magenta);
(this.km.mode = 950);
(this.co_j.pt = 100);
}
else {
(this.co_j.vx = (-(2) | 0));
(this.co_j.ac = (-(1) | 0));
(this.yot_f = true);
}
}
}
}
else {
if (this.gk.right_f) {
(this.co_j.muki = 1);
if ((this.getBGZ$2(((n2 + 32) | 0), n3) == 62)) {
(this.co_j.vx = 4);
(this.co_j.ac = (-(1) | 0));
(this.yot_f = false);
}
else {
if ((this.getBGZ$2(((n2 + 32) | 0), n3) == 256)) {
if ((this.furuure_step <= 0)) {
this.km.init1$1(3);
this.km.setMessage$2(3, this.mp.name_crys);
this.mp.addSerifuRR$3(3, 3, 2);
this.km.activeSerifu$5(3, 256, 32, 232, Color.magenta);
(this.km.mode = 950);
(this.co_j.pt = 100);
}
else {
(this.co_j.vx = 2);
(this.co_j.ac = (-(1) | 0));
(this.yot_f = true);
}
}
}
}
}
}
}
}
}
if (((this.co_j.vx != 0) || (this.co_j.vy != 0))) {
J.inc(()=>this.co_j.ac, v=>this.co_j.ac=v, 1, false, "int");
if ((this.co_j.ac > 3)) {
(this.co_j.ac = 0);
}
(n2 = ((n2 + this.co_j.vx) | 0));
(n3 = ((n3 + this.co_j.vy) | 0));
if ((this.co_j.vx != 0)) {
(this.co_j.pt = ((this.co_j.ac <= 1) ? 103 : 104));
if (this.yot_f) {
(this.co_j.pt = 264);
}
}
else {
(this.co_j.pt = ((this.co_j.ac <= 1) ? 110 : 111));
}
if (((J.rem(n2, 32) == 0) && (J.rem(n3, 32) == 0))) {
(n = this.getBGZ$2(n2, n3));
if ((((((n == 60) || ((n >= 50) && (n <= 59))) || ((n >= 63) && (n <= 65))) || (n == 67)) || (n == 255))) {
(this.co_j.vx = 0);
(this.co_j.vy = 0);
(this.co_j.ac = 0);
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
if ((n == 257)) {
var n4 = 0;
(this.co_j.vx = 0);
(this.co_j.vy = 0);
(this.co_j.pt = 100);
(this.co_j.ac = 0);
var n5 = 0;
for ((n4 = 0); (n4 <= 9); J.inc(()=>n4, v=>n4=v, 1, false, "int")) {
if (((this.mp.item[n4] < 11) || (this.mp.item[n4] > 13))) {
continue;
}
J.inc(()=>n5, v=>n5=v, 1, false, "int");
}
if ((n5 >= 3)) {
this.km.init1$1(4);
this.km.onKao$5(4, 80, 32, 248, 252);
this.km.init1$1(3);
this.km.setMessage$2(3, this.mp.name_furuure);
this.mp.addSerifuRR$3(3, 4, 1);
this.km.activeSerifu$5(3, 80, 140, 248, Color.cyan);
(this.km.mode = 960);
(this.co_j.pt = 100);
(this.co_j.ac = 0);
for ((n4 = 0); (n4 <= 9); J.inc(()=>n4, v=>n4=v, 1, false, "int")) {
if (((this.mp.item[n4] < 11) || (this.mp.item[n4] > 13))) {
continue;
}
(this.mp.item[n4] = 0);
}
}
else {
this.km.init1$1(4);
this.km.onKao$5(4, 80, 32, 248, 252);
this.km.init1$1(3);
this.km.setMessage$2(3, this.mp.name_furuure);
this.mp.addSerifuRR$3(3, 4, 1);
this.km.activeSerifu$5(3, 80, 140, 248, Color.cyan);
(this.km.mode = 980);
(this.co_j.pt = 100);
(this.co_j.ac = 0);
}
}
else {
if ((n == 68)) {
(this.co_j.vx = 0);
(this.co_j.vy = 0);
(this.co_j.pt = 100);
(this.co_j.ac = 0);
this.km.init1$1(3);
this.km.setMessage$2(3, this.mp.name_crys);
this.mp.addSerifuGym$3(3, 10, 2);
this.km.activeSerifu$5(3, 272, 20, 224, Color.magenta);
(this.km.mode = 950);
}
}
}
if ((n2 <= (-(32) | 0))) {
(n2 = (-(32) | 0));
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
if ((n3 <= (-(32) | 0))) {
(n3 = (-(32) | 0));
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
J.inc(()=>this.pm_p, v=>this.pm_p=v, 1, false, "int");
if ((this.pm_p > 11)) {
(this.pm_p = 0);
}
}
var n6 = this.co_p.x;
var n7 = this.co_p.y;
(this.co_p.x = this.pm_x[this.pm_p]);
(this.co_p.y = this.pm_y[this.pm_p]);
if ((this.km.mode == 950)) {
(this.co_p.pt = 140);
}
else {
if ((n6 > this.co_p.x)) {
(this.co_p.pt = ((this.co_j.ac <= 1) ? 141 : 142));
(this.co_p.muki = 0);
}
else {
if ((n6 < this.co_p.x)) {
(this.co_p.pt = ((this.co_j.ac <= 1) ? 141 : 142));
(this.co_p.muki = 1);
}
else {
if ((n7 != this.co_p.y)) {
(this.co_p.pt = ((this.co_j.ac <= 1) ? 1143 : 140));
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
circleCLS$1(n) {
for (var i = 0; (i <= 12); J.inc(()=>i, v=>i=v, 1, false, "int")) {
var d = Math.sin(Math.fround((Math.fround(i) * Math.fround(0.2617992))));
(this.cc_p1_y[i] = ((160 + J.i((d * n))) | 0));
var d2 = Math.cos(Math.fround((Math.fround(i) * Math.fround(0.2617992))));
(this.cc_p1_x[i] = ((256 + J.i((d2 * n))) | 0));
(this.cc_p2_y[i] = ((160 - J.i((d * n))) | 0));
(this.cc_p2_x[i] = ((256 - J.i((d2 * n))) | 0));
}
this.gg.os_g.setColor(Color.black);
this.gg.os_g.fillPolygon(this.cc_p1_x, this.cc_p1_y, 17);
this.gg.os_g.fillPolygon(this.cc_p2_x, this.cc_p2_y, 17);
}
squareCLS$2(n, n2) {
var d = (Math.PI / 180);
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
for ((n = 0); (n <= 49); J.inc(()=>n, v=>n=v, 1, false, "int")) {
(this.zukan_mituketa_f[n] = false);
(this.zukan_tukamaeta_f[n] = false);
(this.zukan_name[n] = "名称不明");
}
var petObject = new PetObject();
for ((n = 1); (n <= 22); J.inc(()=>n, v=>n=v, 1, false, "int")) {
petObject.initShuruibetu$2(((1000 + Math.imul(n, 100)) | 0), this.mp);
(this.zukan_name[n] = petObject.name);
}
(petObject = null);
}
zukanTourokuPet$0() {
for (var i = 0; (i <= 5); J.inc(()=>i, v=>i=v, 1, false, "int")) {
(this.zukan_mituketa_f[this.mp.co_p[i].mn] = true);
(this.zukan_tukamaeta_f[this.mp.co_p[i].mn] = true);
}
}
zukanGetMituketakazu$0() {
var n = 0;
for (var i = 1; (i <= 49); J.inc(()=>i, v=>i=v, 1, false, "int")) {
if (!this.zukan_mituketa_f[i]) {
continue;
}
J.inc(()=>n, v=>n=v, 1, false, "int");
}
return n;
}
zukanGetTukamaetakazu$0() {
var n = 0;
for (var i = 1; (i <= 49); J.inc(()=>i, v=>i=v, 1, false, "int")) {
if (!this.zukan_tukamaeta_f[i]) {
continue;
}
J.inc(()=>n, v=>n=v, 1, false, "int");
}
return n;
}
}
globalThis.IdouGamen = IdouGamen;
