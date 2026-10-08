// Direct port of MainProgram from petm_c.zip. Original method overloads use $arity.
class MainProgram {
gg = null;
gm = null;
gk = null;
maps = null;
km = null;
ig = null;
ran = null;
ml_mode = 0;
ml_mode_c = 0;
score = 0;
highscore = 0;
stage = 1;
stage_cc = 0;
g_c1 = 0;
g_c2 = 0;
g_c3 = 0;
g_ac = 0;
g_ac2 = 0;
tr1_c = 0;
tr2_c = 0;
system_mode = 1;
vo_pa_x = J.array([6], 0);
vo_pa_y = J.array([6], 0);
gamecolor_back = null;
gamecolor_score = null;
co_j = null;
co_p = J.array([10], null);
co_w = J.array([50], null);
co_m = J.array([24], null);
hi = null;
hih = null;
hg = null;
ap = null;
ochiru_y = 0;
j_left = 0;
j_jump_level = 0;
j_jump_type = 0;
j_okozukai = 0;
w_kazu = 0;
m_kazu = 0;
m_mf = J.array([24, 50], false);
item = J.array([10], 0);
item_kazu = 0;
item_useID = 0;
item_data_name = J.array([16], null);
item_data_setumei = J.array([16], null);
item_data_teika = J.array([16], 0);
item_data_urine = J.array([16], 0);
item_motenai_x = 0;
item_motenai_y = 0;
petlist = J.array([30], 0);
petlist_kazu = 0;
pichika_name = null;
pichika_type = 0;
pichika_boku = null;
pichika_speed = 0;
pichika_pass = false;
pichika_hp_max = 0;
pichika_pp_max = 0;
pichika_waza1_name = null;
pichika_waza1_ap = 0;
pichika_waza1_pp = 0;
pichika_waza2_name = null;
pichika_waza2_ap = 0;
pichika_waza2_pp = 0;
pichika_waza3_name = null;
pichika_jump = false;
gym_f = false;
gym_kijyun = 0;
gym_c = 0;
gym_shiaino = 0;
gym_kachimake = 0;
gym_kattakazu_c = 0;
gym_kattakazu_g = 0;
gym_skf = J.array([6], false);
gym_gr_name = null;
gym_tukamaetakazu = 0;
sl_step = 0;
sl_wx = 0;
sl_wy = 0;
mn_pikachii = null;
mn_pikachii_w1 = null;
mn_pikachii_w2 = null;
mn_pikachii_w3 = null;
mn_chikorin = null;
mn_chikorin_w1 = null;
mn_chikorin_w2 = null;
mn_chikorin_w3 = null;
mn_chikorin_w4 = null;
mn_korat = null;
mn_korat_w1 = null;
mn_korat_w2 = null;
mn_mariri = null;
mn_mariri_w1 = null;
mn_mariri_w2 = null;
mn_mariri_w3 = null;
mn_poppie = null;
mn_poppie_w1 = null;
mn_poppie_w2 = null;
mn_bibidama = null;
mn_bibidama_w1 = null;
mn_chireihana = null;
mn_chireihana_w1 = null;
mn_chireihana_w2 = null;
mn_popoko = null;
mn_popoko_w1 = null;
mn_popoko_w2 = null;
mn_hinorarashi = null;
mn_hinorarashi_w1 = null;
mn_hinorarashi_w2 = null;
mn_hinorarashi_w3 = null;
mn_airms = null;
mn_airms_w1 = null;
mn_airms_w2 = null;
mn_mamezou = null;
mn_mamezou_w1 = null;
mn_mamezou_w2 = null;
mn_hitodeme = null;
mn_hitodeme_w1 = null;
mn_hitodeme_w2 = null;
mn_miu = null;
mn_miu_w1 = null;
mn_miu_w2 = null;
mn_suikuu = null;
mn_thundara = null;
mn_makkalgo = null;
mn_makkalgo_w1 = null;
mn_makkalgo_w2 = null;
mn_taiking = null;
mn_taiking_w1 = null;
name_crys = null;
name_kidohakase = null;
name_jyuuisan = null;
name_teninsan = null;
name_dragontaxy = null;
name_furuure = null;
name_figa = null;
name_thundaga = null;
name_blizzaga = null;
name_ragias = null;
name_hoshi1 = null;
name_hoshi2 = null;
name_hoshi3 = null;
name_shizuku = null;
constructor(gameGraphics, gameMouse, gameKey) {
(this.gg = gameGraphics);
(this.gm = gameMouse);
(this.gk = gameKey);
(this.maps = new MapSystem(200, 50, this.gg));
(this.name_crys = this.gg.ap.getParameter("name_crys"));
(this.km = new KeyboardMenu(this.gg, this.gk, this.name_crys));
(this.co_j = new PetObject());
var n = 0;
while ((n <= 5)) {
(this.co_p[n] = new PetObject());
J.inc(()=>n, v=>n=v, 1, false, "int");
}
(this.co_p[6] = this.co_j);
(n = 0);
while ((n <= 49)) {
(this.co_w[n] = new WildObject());
J.inc(()=>n, v=>n=v, 1, false, "int");
}
(n = 0);
while ((n <= 23)) {
(this.co_m[n] = new CharacterObject());
J.inc(()=>n, v=>n=v, 1, false, "int");
}
(this.ig = new IdouGamen(this.gg, this.gk, this.km, this));
this.ranInit$0();
(this.hi = this.gg.spt_img[0]);
(this.hih = this.gg.spt_img);
(this.hg = this.gg.os_g);
(this.ap = this.gg.ap);
(this.name_furuure = this.ap.getParameter("name_furuure"));
(this.name_figa = this.ap.getParameter("name_figa"));
(this.name_thundaga = this.ap.getParameter("name_thundaga"));
(this.name_blizzaga = this.ap.getParameter("name_blizzaga"));
(this.name_ragias = this.ap.getParameter("name_ragias"));
(this.name_hoshi1 = this.ap.getParameter("name_hoshi1"));
(this.name_hoshi2 = this.ap.getParameter("name_hoshi2"));
(this.name_hoshi3 = this.ap.getParameter("name_hoshi3"));
(this.name_shizuku = this.ap.getParameter("name_shizuku"));
(this.item_data_name[1] = "治療薬");
(this.item_data_name[2] = "エナジードリンク");
(this.item_data_name[3] = "テトロドトキシン");
(this.item_data_name[4] = "おいも");
(this.item_data_name[5] = "ブロムヘキシン");
(this.item_data_name[6] = "リゾチウム");
(this.item_data_name[7] = "クリスタル");
(this.item_data_name[8] = "わざマシン０１");
(this.item_data_name[9] = "わざマシン０２");
(this.item_data_name[10] = "わざマシン０３");
(this.item_data_name[11] = this.name_hoshi1);
(this.item_data_name[12] = this.name_hoshi2);
(this.item_data_name[13] = this.name_hoshi3);
(this.item_data_name[14] = this.name_shizuku);
(this.item_data_setumei[1] = "ＨＰを回復します。");
(this.item_data_setumei[2] = "ＰＰを回復します。");
(this.item_data_setumei[3] = "駆除すると３０円もらえます。");
(this.item_data_setumei[4] = "ＨＰとＰＰを少しだけ回復。");
(this.item_data_setumei[5] = "ＨＰの最大値がアップします。");
(this.item_data_setumei[6] = "ＰＰの最大値がアップします。");
(this.item_data_setumei[7] = "あなたの身体と懐を温めます。");
(this.item_data_setumei[8] = "バックアタックを覚えさせる。");
(this.item_data_setumei[9] = "大ジャンプを覚えさせる。");
(this.item_data_setumei[10] = "自己再生を覚えさせる。");
(this.item_data_setumei[11] = "伝説のアイテムの一つ。");
(this.item_data_setumei[12] = "伝説のアイテムの一つ。");
(this.item_data_setumei[13] = "伝説のアイテムの一つ。");
(this.item_data_setumei[14] = "美しい宝石です。");
(this.item_data_teika[1] = 20);
(this.item_data_teika[2] = 30);
(this.item_data_teika[3] = 100);
(this.item_data_teika[4] = 10);
(this.item_data_teika[5] = 1100);
(this.item_data_teika[6] = 1200);
(this.item_data_teika[7] = 400);
(this.item_data_teika[8] = 500);
(this.item_data_teika[9] = 600);
(this.item_data_teika[10] = 1400);
(this.item_data_teika[11] = 0);
(this.item_data_teika[12] = 0);
(this.item_data_teika[13] = 0);
(this.item_data_teika[14] = 1000);
(this.item_data_urine[1] = 10);
(this.item_data_urine[2] = 15);
(this.item_data_urine[3] = 50);
(this.item_data_urine[4] = 5);
(this.item_data_urine[5] = 550);
(this.item_data_urine[6] = 600);
(this.item_data_urine[7] = 200);
(this.item_data_urine[8] = 250);
(this.item_data_urine[9] = 300);
(this.item_data_urine[10] = 700);
(this.item_data_urine[11] = 0);
(this.item_data_urine[12] = 0);
(this.item_data_urine[13] = 0);
(this.item_data_urine[14] = 500);
(this.pichika_name = this.ap.getParameter("pichika_name"));
var n2 = this.paraInt$1("pichika_type");
(this.pichika_type = ((n2 == 1) ? 1 : 0));
(n2 = this.paraInt$1("pichika_seibetu"));
(this.pichika_boku = ((n2 == 1) ? "わたし" : "ぼく"));
(n2 = this.paraInt$1("pichika_speed"));
(this.pichika_speed = ((n2 == 0) ? 0 : ((n2 == 1) ? 20 : ((n2 == 3) ? 80 : 40))));
(n2 = this.paraInt$1("pichika_pass"));
(this.pichika_pass = (n2 == 1));
(this.pichika_hp_max = this.paraInt$1("pichika_hp_max"));
if (((this.pichika_hp_max < 10) || (this.pichika_hp_max > 120))) {
(this.pichika_hp_max = 80);
}
(this.pichika_pp_max = this.paraInt$1("pichika_pp_max"));
if (((this.pichika_pp_max < 10) || (this.pichika_pp_max > 50))) {
(this.pichika_pp_max = 40);
}
(this.pichika_waza1_name = this.ap.getParameter("pichika_waza1_name"));
(this.pichika_waza1_ap = this.paraInt$1("pichika_waza1_ap"));
if (((this.pichika_waza1_ap < 1) || (this.pichika_waza1_ap > 80))) {
(this.pichika_waza1_ap = 50);
}
(this.pichika_waza1_pp = this.paraInt$1("pichika_waza1_pp"));
if (((this.pichika_waza1_pp < 1) || (this.pichika_waza1_pp > 50))) {
(this.pichika_waza1_pp = 1);
}
(this.pichika_waza2_name = this.ap.getParameter("pichika_waza2_name"));
(this.pichika_waza2_ap = this.paraInt$1("pichika_waza2_ap"));
if (((this.pichika_waza2_ap < 1) || (this.pichika_waza2_ap > 50))) {
(this.pichika_waza2_ap = 20);
}
(this.pichika_waza2_pp = this.paraInt$1("pichika_waza2_pp"));
if (((this.pichika_waza2_pp < 1) || (this.pichika_waza2_pp > 50))) {
(this.pichika_waza2_pp = 3);
}
(this.pichika_waza3_name = this.ap.getParameter("pichika_waza3_name"));
(n2 = this.paraInt$1("pichika_jump"));
(this.pichika_jump = (n2 == 1));
(this.gym_gr_name = this.ap.getParameter("gym_gr_name"));
(this.gym_tukamaetakazu = this.paraInt$1("gym_tukamaetakazu"));
if (((this.gym_tukamaetakazu < 1) || (this.gym_tukamaetakazu > 12))) {
(this.gym_tukamaetakazu = 5);
}
(this.mn_pikachii = this.ap.getParameter("name_pikachii"));
(this.mn_pikachii_w1 = this.ap.getParameter("name_pikachii_w1"));
(this.mn_pikachii_w2 = this.ap.getParameter("name_pikachii_w2"));
(this.mn_pikachii_w3 = this.ap.getParameter("name_pikachii_w3"));
(this.mn_chikorin = this.ap.getParameter("name_chikorin"));
(this.mn_chikorin_w1 = this.ap.getParameter("name_chikorin_w1"));
(this.mn_chikorin_w2 = this.ap.getParameter("name_chikorin_w2"));
(this.mn_chikorin_w3 = this.ap.getParameter("name_chikorin_w3"));
(this.mn_chikorin_w4 = this.ap.getParameter("name_chikorin_w4"));
(this.mn_korat = this.ap.getParameter("name_korat"));
(this.mn_korat_w1 = this.ap.getParameter("name_korat_w1"));
(this.mn_korat_w2 = this.ap.getParameter("name_korat_w2"));
(this.mn_mariri = this.ap.getParameter("name_mariri"));
(this.mn_mariri_w1 = this.ap.getParameter("name_mariri_w1"));
(this.mn_mariri_w2 = this.ap.getParameter("name_mariri_w2"));
(this.mn_mariri_w3 = this.ap.getParameter("name_mariri_w3"));
(this.mn_poppie = this.ap.getParameter("name_poppie"));
(this.mn_poppie_w1 = this.ap.getParameter("name_poppie_w1"));
(this.mn_poppie_w2 = this.ap.getParameter("name_poppie_w2"));
(this.mn_bibidama = this.ap.getParameter("name_bibidama"));
(this.mn_bibidama_w1 = this.ap.getParameter("name_bibidama_w1"));
(this.mn_chireihana = this.ap.getParameter("name_chireihana"));
(this.mn_chireihana_w1 = this.ap.getParameter("name_chireihana_w1"));
(this.mn_chireihana_w2 = this.ap.getParameter("name_chireihana_w2"));
(this.mn_popoko = this.ap.getParameter("name_popoko"));
(this.mn_popoko_w1 = this.ap.getParameter("name_popoko_w1"));
(this.mn_popoko_w2 = this.ap.getParameter("name_popoko_w2"));
(this.mn_hinorarashi = this.ap.getParameter("name_hinorarashi"));
(this.mn_hinorarashi_w1 = this.ap.getParameter("name_hinorarashi_w1"));
(this.mn_hinorarashi_w2 = this.ap.getParameter("name_hinorarashi_w2"));
(this.mn_hinorarashi_w3 = this.ap.getParameter("name_hinorarashi_w3"));
(this.mn_airms = this.ap.getParameter("name_airms"));
(this.mn_airms_w1 = this.ap.getParameter("name_airms_w1"));
(this.mn_airms_w2 = this.ap.getParameter("name_airms_w2"));
(this.mn_mamezou = this.ap.getParameter("name_mamezou"));
(this.mn_mamezou_w1 = this.ap.getParameter("name_mamezou_w1"));
(this.mn_mamezou_w2 = this.ap.getParameter("name_mamezou_w2"));
(this.mn_hitodeme = this.ap.getParameter("name_hitodeme"));
(this.mn_hitodeme_w1 = this.ap.getParameter("name_hitodeme_w1"));
(this.mn_hitodeme_w2 = this.ap.getParameter("name_hitodeme_w2"));
(this.mn_miu = this.ap.getParameter("name_miu"));
(this.mn_miu_w1 = this.ap.getParameter("name_miu_w1"));
(this.mn_miu_w2 = this.ap.getParameter("name_miu_w2"));
(this.mn_suikuu = "スイクウ");
(this.mn_thundara = "サンダラ");
(this.mn_makkalgo = this.ap.getParameter("name_makkalgo"));
(this.mn_makkalgo_w1 = this.ap.getParameter("name_makkalgo_w1"));
(this.mn_makkalgo_w2 = this.ap.getParameter("name_makkalgo_w2"));
(this.mn_taiking = this.ap.getParameter("name_taiking"));
(this.mn_taiking_w1 = this.ap.getParameter("name_taiking_w1"));
(this.name_crys = this.ap.getParameter("name_crys"));
(this.name_kidohakase = this.ap.getParameter("name_kidohakase"));
(this.name_jyuuisan = this.ap.getParameter("name_jyuuisan"));
(this.name_teninsan = this.ap.getParameter("name_teninsan"));
(this.name_dragontaxy = this.ap.getParameter("name_dragontaxy"));
}
start$0() {
(this.ml_mode = 50);
}
paraInt$1(string) {
var n = 0;
var string2 = this.gg.ap.getParameter(string);
try {
(n = Integer.valueOf(string2));
}
catch (numberFormatException) {
(n = (-(1) | 0));
}
return n;
}
moveGameCounter$0() {
switch (this.g_c3) {
case 0:
{
(this.g_c3 = 1);
(this.g_c1 = 1);
(this.g_c2 = 1);
(this.g_ac = 0);
(this.g_ac2 = 0);
break;
}
case 1:
{
(this.g_c3 = 2);
(this.g_c1 = 0);
(this.g_c2 = 2);
(this.g_ac = 1);
(this.g_ac2 = 1);
break;
}
case 2:
{
(this.g_c3 = 3);
(this.g_c1 = 1);
(this.g_c2 = 3);
(this.g_ac = 1);
(this.g_ac2 = 1);
break;
}
case 3:
{
(this.g_c3 = 4);
(this.g_c1 = 0);
(this.g_c2 = 0);
(this.g_ac = 0);
(this.g_ac2 = 2);
break;
}
case 4:
{
(this.g_c3 = 5);
(this.g_c1 = 1);
(this.g_c2 = 1);
(this.g_ac = 0);
(this.g_ac2 = 2);
break;
}
case 5:
{
(this.g_c3 = 6);
(this.g_c1 = 0);
(this.g_c2 = 2);
(this.g_ac = 1);
(this.g_ac2 = 3);
break;
}
case 6:
{
(this.g_c3 = 7);
(this.g_c1 = 1);
(this.g_c2 = 3);
(this.g_ac = 1);
(this.g_ac2 = 3);
break;
}
case 7:
{
(this.g_c3 = 0);
(this.g_c1 = 0);
(this.g_c2 = 0);
(this.g_ac = 0);
(this.g_ac2 = 0);
}
}
}
ranInit$0() {
(this.ran = new Random());
}
ranInt$1(n) {
return J.abs(J.rem(this.ran.nextInt(), n));
}
drawScore$0() {
this.gg.os_g.setColor(this.gamecolor_score);
this.gg.os_g.setFont(new Font("Dialog", 1, 14));
this.gg.os_g.drawString((((("得点  " + this.score) + "点      最高得点  ") + this.highscore) + "点"), 256, 28);
}
addScore$1(n) {
(this.score = ((this.score + n) | 0));
}
addSerifuGym$3(n, n2, n3) {
var n4 = 1;
while ((n4 <= n3)) {
var n5 = 0;
var string = this.ap.getParameter(((("gym_serifu" + n2) + "-") + n4));
try {
(n5 = Integer.valueOf(string));
}
catch (numberFormatException) {
(n5 = (-(1) | 0));
}
if ((n5 != 0)) {
this.km.addItem$2(n, string);
}
J.inc(()=>n4, v=>n4=v, 1, false, "int");
}
}
addSerifuRR$3(n, n2, n3) {
var n4 = 1;
while ((n4 <= n3)) {
var n5 = 0;
var string = this.ap.getParameter(((("rr_serifu" + n2) + "-") + n4));
try {
(n5 = Integer.valueOf(string));
}
catch (numberFormatException) {
(n5 = (-(1) | 0));
}
if ((n5 != 0)) {
this.km.addItem$2(n, string);
}
J.inc(()=>n4, v=>n4=v, 1, false, "int");
}
}
mainLoop$0() {
switch (this.ml_mode) {
case 50:
{
this.gg.drawListImage$3(0, 0, 0);
if (((this.score > 0) || (this.highscore > 0))) {
this.gg.os_g.setColor(Color.blue);
this.gg.os_g.setFont(new Font("Dialog", 1, 14));
this.gg.os_g.drawString((((("得点  " + this.score) + "点      最高得点  ") + this.highscore) + "点"), 256, 300);
}
if ((this.gm.button_f || this.gk.tr1_f)) {
break;
}
(this.ml_mode = 60);
(this.g_c1 = 0);
break;
}
case 60:
{
if ((this.g_c1 == 0)) {
if ((this.gk.key_char == 118)) {
(this.g_c1 = 1);
}
}
else {
if ((this.g_c1 == 1)) {
if ((this.gk.key_char == 101)) {
(this.g_c1 = 2);
}
else {
if ((this.gk.key_char != 118)) {
(this.g_c1 = 0);
}
}
}
else {
if ((this.g_c1 == 2)) {
if ((this.gk.key_char == 114)) {
(this.ml_mode = 1000);
}
else {
if ((this.gk.key_char != 101)) {
(this.g_c1 = 0);
}
}
}
}
}
if ((!this.gm.button_f && !this.gk.tr1_f)) {
break;
}
(this.ml_mode = 80);
break;
}
case 80:
{
this.init2$0();
(this.ml_mode = 200);
break;
}
case 81:
{
this.init2$0();
this.init3$0();
(this.ml_mode = 100);
break;
}
case 90:
{
(this.stage = this.ig.checkStage$0());
this.init3$0();
this.gg.os_g.setColor(Color.black);
this.gg.os_g.fillRect(0, 0, 512, 320);
(this.ml_mode = 91);
(this.ml_mode_c = 0);
break;
}
case 91:
{
J.inc(()=>this.ml_mode_c, v=>this.ml_mode_c=v, 1, false, "int");
if ((this.ml_mode_c > 8)) {
(this.ml_mode = (this.gym_f ? 150 : 100));
}
if ((this.gk.key_code != 84)) {
break;
}
(this.gk.key_code = 0);
(this.ml_mode = 50);
break;
}
case 150:
{
this.moveGameCounter$0();
if ((this.co_j.c == 1000)) {
this.jMove1000$0();
}
else {
this.jMove$0();
}
this.km.move$0();
this.csMoveGym$0();
if ((this.km.mode == 60)) {
var n = ((this.km.selectedIndex[0] - 2) | 0);
if ((this.co_p[n].gym_wc > 0)) {
if (((this.co_p[n].c == 1000) || (this.co_p[n].c == 2000))) {
J.inc(()=>this.co_p[n].gym_wc, v=>this.co_p[n].gym_wc=v, -1, false, "int");
}
}
else {
if ((((this.co_p[n].x > this.gym_kijyun) || (this.co_p[n].x < ((this.co_j.x + 64) | 0))) && (this.co_p[n].speed > 0))) {
(this.co_p[n].gym_wc = 12);
(this.co_p[n].c = ((this.co_p[n].type == 1) ? 2900 : 1900));
(this.co_p[n].gym_wc = 12);
if ((this.co_p[n].shurui == 1500)) {
(this.co_p[n].gym_wc = 10);
}
else {
if ((this.co_p[n].shurui == 2000)) {
(this.co_p[n].gym_wc = 16);
}
}
}
else {
(this.co_p[n].meirei = this.co_p[n].waza_code[this.ranInt$1(this.co_p[n].waza_kazu)]);
if (((this.co_p[n].speed == 0) && (this.co_p[n].meirei == 220))) {
(this.co_p[n].meirei = this.co_p[n].waza_code[0]);
}
(this.co_p[n].gym_wc = ((8 + this.ranInt$1(5)) | 0));
if ((this.co_p[n].shurui == 1500)) {
(this.co_p[n].gym_wc = ((5 + this.ranInt$1(8)) | 0));
}
else {
if ((this.co_p[n].shurui == 2000)) {
(this.co_p[n].gym_wc = 16);
}
}
}
}
if ((this.co_w[this.gym_shiaino].gym_wc > 0)) {
if (((this.co_w[this.gym_shiaino].c == 11000) || (this.co_w[this.gym_shiaino].c == 12000))) {
J.inc(()=>this.co_w[this.gym_shiaino].gym_wc, v=>this.co_w[this.gym_shiaino].gym_wc=v, -1, false, "int");
}
}
else {
if ((((this.co_w[this.gym_shiaino].x > this.gym_kijyun) || (this.co_w[this.gym_shiaino].x < ((this.co_j.x + 64) | 0))) && (this.co_w[this.gym_shiaino].speed > 0))) {
(this.co_w[this.gym_shiaino].gym_wc = 12);
(this.co_w[this.gym_shiaino].c = ((this.co_w[this.gym_shiaino].type == 1) ? 12900 : 11900));
(this.co_w[this.gym_shiaino].gym_wc = 12);
if ((this.co_w[this.gym_shiaino].shurui == 1500)) {
(this.co_w[this.gym_shiaino].gym_wc = 10);
}
else {
if ((this.co_w[this.gym_shiaino].shurui == 2000)) {
(this.co_w[this.gym_shiaino].gym_wc = 16);
}
}
}
else {
(this.co_w[this.gym_shiaino].meirei = this.co_w[this.gym_shiaino].waza_code[this.ranInt$1(this.co_w[this.gym_shiaino].waza_kazu)]);
(this.co_w[this.gym_shiaino].gym_wc = ((8 + this.ranInt$1(5)) | 0));
if ((this.co_w[this.gym_shiaino].shurui == 1500)) {
(this.co_w[this.gym_shiaino].gym_wc = ((5 + this.ranInt$1(8)) | 0));
}
else {
if ((this.co_w[this.gym_shiaino].shurui == 2000)) {
(this.co_w[this.gym_shiaino].gym_wc = 16);
}
}
}
}
}
this.pMove$0();
this.wMove$0();
if ((this.m_kazu > 0)) {
this.mMove$0();
}
if ((this.stage_cc > 0)) {
J.inc(()=>this.stage_cc, v=>this.stage_cc=v, 1, false, "int");
if ((this.stage_cc > 30)) {
(this.ml_mode = 260);
}
}
this.drawGamescreen$0();
if ((this.gk.key_code != 84)) {
break;
}
(this.gk.key_code = 0);
(this.ml_mode = 50);
break;
}
case 200:
{
this.ig.drawMap$0();
this.ig.mainProgram$0();
if ((this.ig.mp_mode == 110)) {
(this.gym_f = false);
(this.ml_mode = 90);
}
else {
if ((this.ig.mp_mode == 120)) {
(this.ml_mode = 400);
}
else {
if ((this.ig.mp_mode == 130)) {
(this.gym_f = true);
(this.ml_mode = 90);
}
}
}
if ((this.gk.key_code != 84)) {
break;
}
(this.gk.key_code = 0);
(this.ml_mode = 50);
break;
}
case 250:
{
this.addScore$1(0);
this.ig.worldInit2$0();
(this.ml_mode = 251);
(this.ml_mode_c = 0);
this.gg.os_g.setColor(Color.black);
this.gg.os_g.fillRect(0, 0, this.gg.di.width, this.gg.di.height);
break;
}
case 251:
{
J.inc(()=>this.ml_mode_c, v=>this.ml_mode_c=v, 1, false, "int");
if ((this.ml_mode_c > 8)) {
(this.ml_mode = 200);
}
if ((this.gk.key_code != 84)) {
break;
}
(this.gk.key_code = 0);
(this.ml_mode = 50);
break;
}
case 260:
{
this.addScore$1(0);
this.ig.worldInit3$0();
(this.ml_mode = 261);
(this.ml_mode_c = 0);
this.gg.os_g.setColor(Color.black);
this.gg.os_g.fillRect(0, 0, this.gg.di.width, this.gg.di.height);
break;
}
case 261:
{
J.inc(()=>this.ml_mode_c, v=>this.ml_mode_c=v, 1, false, "int");
if ((this.ml_mode_c > 8)) {
(this.ml_mode = 200);
}
if ((this.gk.key_code != 84)) {
break;
}
(this.gk.key_code = 0);
(this.ml_mode = 50);
break;
}
case 270:
{
this.addScore$1(0);
this.ig.worldInit4$0();
(this.ml_mode = 251);
(this.ml_mode_c = 0);
this.gg.os_g.setColor(Color.black);
this.gg.os_g.fillRect(0, 0, this.gg.di.width, this.gg.di.height);
break;
}
case 271:
{
J.inc(()=>this.ml_mode_c, v=>this.ml_mode_c=v, 1, false, "int");
if ((this.ml_mode_c > 8)) {
(this.ml_mode = 200);
}
if ((this.gk.key_code != 84)) {
break;
}
(this.gk.key_code = 0);
(this.ml_mode = 50);
break;
}
case 300:
{
this.gg.setBackcolor$1(Color.black);
this.gg.fill$0();
this.gg.drawListImage$3(0, 0, 2);
(this.ml_mode = 310);
(this.ml_mode_c = 0);
break;
}
case 310:
{
J.inc(()=>this.ml_mode_c, v=>this.ml_mode_c=v, 1, false, "int");
if ((this.ml_mode_c > 80)) {
(this.ml_mode = 50);
}
if ((this.gk.key_code != 84)) {
break;
}
(this.gk.key_code = 0);
(this.ml_mode = 50);
break;
}
case 400:
{
this.gg.os_g.setColor(Color.black);
this.gg.os_g.fillRect(0, 0, this.gg.di.width, this.gg.di.height);
(this.ml_mode = 410);
(this.ml_mode_c = 0);
break;
}
case 410:
{
J.inc(()=>this.ml_mode_c, v=>this.ml_mode_c=v, 1, false, "int");
if ((this.ml_mode_c > 8)) {
this.gg.drawListImage$3(0, 0, 1);
(this.ml_mode = 420);
(this.ml_mode_c = 0);
this.addScore$1(100);
}
if ((this.gk.key_code != 84)) {
break;
}
(this.gk.key_code = 0);
(this.ml_mode = 50);
break;
}
case 420:
{
J.inc(()=>this.ml_mode_c, v=>this.ml_mode_c=v, 1, false, "int");
if ((this.ml_mode_c > 150)) {
(this.ml_mode = 50);
}
if ((this.gk.key_code != 84)) {
break;
}
(this.gk.key_code = 0);
(this.ml_mode = 50);
break;
}
case 1000:
{
this.gg.setBackcolor$1(Color.black);
this.gg.fill$0();
this.hg.setFont(new Font("Dialog", 0, 46));
this.hg.setColor(Color.white);
this.hg.setFont(new Font("Dialog", 0, 20));
this.hg.drawString("Title        PET MONSTER KIHONSET", 50, 50);
this.hg.drawString("Version      1.6", 50, 80);
this.hg.drawString("Language     Java2  SDK 1.3.1", 50, 110);
this.hg.drawString("OS           Windows XP", 50, 140);
this.hg.drawString("Browser      InternetExplorer 6.0", 50, 170);
this.hg.drawString("Programing   Fukuda Naoto", 50, 200);
this.hg.drawString("Date         2003/5", 50, 230);
(this.ml_mode = 1010);
(this.ml_mode_c = 0);
break;
}
case 1010:
{
J.inc(()=>this.ml_mode_c, v=>this.ml_mode_c=v, 1, false, "int");
if ((this.ml_mode_c <= 40)) {
break;
}
(this.ml_mode = 50);
}
}
}
mainLoop100$0() {
switch (this.g_c3) {
case 0:
{
(this.g_c3 = 1);
(this.g_c1 = 1);
(this.g_c2 = 1);
(this.g_ac = 0);
(this.g_ac2 = 0);
break;
}
case 1:
{
(this.g_c3 = 2);
(this.g_c1 = 0);
(this.g_c2 = 2);
(this.g_ac = 1);
(this.g_ac2 = 1);
break;
}
case 2:
{
(this.g_c3 = 3);
(this.g_c1 = 1);
(this.g_c2 = 3);
(this.g_ac = 1);
(this.g_ac2 = 1);
break;
}
case 3:
{
(this.g_c3 = 4);
(this.g_c1 = 0);
(this.g_c2 = 0);
(this.g_ac = 0);
(this.g_ac2 = 2);
break;
}
case 4:
{
(this.g_c3 = 5);
(this.g_c1 = 1);
(this.g_c2 = 1);
(this.g_ac = 0);
(this.g_ac2 = 2);
break;
}
case 5:
{
(this.g_c3 = 6);
(this.g_c1 = 0);
(this.g_c2 = 2);
(this.g_ac = 1);
(this.g_ac2 = 3);
break;
}
case 6:
{
(this.g_c3 = 7);
(this.g_c1 = 1);
(this.g_c2 = 3);
(this.g_ac = 1);
(this.g_ac2 = 3);
break;
}
case 7:
{
(this.g_c3 = 0);
(this.g_c1 = 0);
(this.g_c2 = 0);
(this.g_ac = 0);
(this.g_ac2 = 0);
}
}
if ((this.co_j.c == 1000)) {
this.jMove1000$0();
}
else {
this.jMove$0();
}
if ((this.sl_step > 0)) {
if ((this.sl_step == 1)) {
if ((this.maps.wx >= this.sl_wx)) {
(this.maps.wx = this.sl_wx);
(this.sl_step = 2);
}
}
else {
if ((this.sl_step == 2)) {
(this.maps.wx = this.sl_wx);
if ((this.maps.wy >= this.sl_wy)) {
(this.maps.wy = this.sl_wy);
(this.sl_step = 3);
}
}
else {
(this.maps.wx = this.sl_wx);
(this.maps.wy = this.sl_wy);
if ((this.co_j.x < ((this.sl_wx - 16) | 0))) {
(this.co_j.x = ((this.sl_wx - 16) | 0));
}
if ((this.co_j.x > ((this.sl_wx + 496) | 0))) {
(this.co_j.x = ((this.sl_wx + 496) | 0));
}
}
}
}
this.km.move$0();
this.csMove$0();
this.pMove$0();
this.wMove$0();
if ((this.m_kazu > 0)) {
this.mMove$0();
}
if ((this.stage_cc > 0)) {
J.inc(()=>this.stage_cc, v=>this.stage_cc=v, 1, false, "int");
if ((this.stage_cc > 30)) {
(this.ml_mode = 260);
}
}
this.drawGamescreen$0();
if ((this.gk.key_code == 84)) {
(this.gk.key_code = 0);
(this.ml_mode = 50);
}
}
init2$0() {
(this.system_mode = this.paraInt$1("system_mode"));
(this.system_mode = ((this.system_mode == 1) ? 1 : ((this.system_mode == 2) ? 3 : 0)));
if ((this.score > this.highscore)) {
(this.highscore = this.score);
}
(this.gk.key_code = 0);
(this.score = 0);
(this.stage = 1);
(this.j_okozukai = 1000);
this.co_j.init$0();
(this.co_j.shurui = 9000);
(this.co_j.name = this.name_crys);
(this.gym_f = false);
this.ig.worldInit$0();
var n = 0;
while ((n <= 5)) {
this.co_p[n].init$0();
J.inc(()=>n, v=>n=v, 1, false, "int");
}
this.co_p[0].initShuruibetu$2(1100, this);
this.co_p[1].initShuruibetu$2(1000, this);
this.co_p[2].initShuruibetu$2(1000, this);
this.co_p[3].initShuruibetu$2(1000, this);
this.co_p[4].initShuruibetu$2(1000, this);
this.co_p[5].initShuruibetu$2(1000, this);
this.ig.zukanTourokuPet$0();
this.itemInit$0();
this.itemAddItem$1(1);
this.itemAddItem$1(1);
this.itemAddItem$1(2);
this.itemAddItem$1(2);
}
init3$0() {
(this.g_c1 = 0);
(this.g_c2 = 0);
(this.g_c3 = 0);
(this.g_ac = 0);
(this.g_ac2 = 0);
(this.stage_cc = 0);
var n = this.co_j.hp_max;
this.co_j.init$0();
(this.co_j.hp = (this.co_j.hp_max = n));
(this.co_j.c = 1000);
(this.co_j.x = 100);
(this.co_j.y = 100);
(this.co_j.pt = 100);
(this.co_j.muki = 1);
(this.co_j.name = this.name_crys);
(this.co_j.shurui = 9000);
(this.co_j.jimen_f = false);
(this.j_jump_level = 0);
(this.j_jump_type = 0);
(this.tr1_c = 0);
(this.tr2_c = 0);
(this.ochiru_y = 9999);
(this.item_motenai_x = (-(1) | 0));
(this.item_motenai_y = (-(1) | 0));
var n2 = 0;
while ((n2 <= 5)) {
if ((this.co_p[n2].shurui < 1100)) {
this.co_p[n2].initShuruibetu$2(1000, this);
}
else {
var n3 = this.co_p[n2].shurui;
var n4 = this.co_p[n2].hp;
var n5 = this.co_p[n2].hp_max_upkaisuu;
var n6 = this.co_p[n2].pp;
var n7 = this.co_p[n2].pp_max_upkaisuu;
var n8 = this.co_p[n2].optionwaza;
this.co_p[n2].initShuruibetu$2(n3, this);
(this.co_p[n2].hp = n4);
(this.co_p[n2].pp = n6);
(this.co_p[n2].hp_max_upkaisuu = n5);
(this.co_p[n2].pp_max_upkaisuu = n7);
this.co_p[n2].setHPPPMax$0();
this.co_p[n2].addOptionwaza$1(n8);
}
J.inc(()=>n2, v=>n2=v, 1, false, "int");
}
(n2 = 0);
while ((n2 <= 29)) {
(this.petlist[n2] = 0);
J.inc(()=>n2, v=>n2=v, 1, false, "int");
}
(this.petlist_kazu = 1);
(n2 = 0);
while ((n2 <= 49)) {
this.co_w[n2].init$0();
J.inc(()=>n2, v=>n2=v, 1, false, "int");
}
(this.w_kazu = (-(1) | 0));
(n2 = 0);
while ((n2 <= 23)) {
this.co_m[n2].init$0();
var n9 = 0;
while ((n9 <= 49)) {
(this.m_mf[n2][n9] = false);
J.inc(()=>n9, v=>n9=v, 1, false, "int");
}
J.inc(()=>n2, v=>n2=v, 1, false, "int");
}
(this.m_kazu = 0);
(this.sl_step = 0);
(this.sl_wx = 0);
(this.sl_wy = 0);
(this.gamecolor_back = new Color(0, 255, 255));
(this.gamecolor_score = new Color(0, 0, 255));
this.km.initAll$0();
if (this.gym_f) {
this.mapsMakeStageData$1(200);
(this.co_j.c = 300);
(n2 = 1);
while ((n2 <= 3)) {
var string = (this.ap.getParameter(("gym_pet" + n2)) + " ");
var c = J.charAt(string, 0);
var n10 = 1100;
if ((c == 66)) {
(n10 = 1200);
}
else {
if ((c == 67)) {
(n10 = 1300);
}
else {
if ((c == 68)) {
(n10 = 1400);
}
else {
if ((c == 69)) {
(n10 = 1500);
}
else {
if ((c == 70)) {
(n10 = 1600);
}
else {
if ((c == 71)) {
(n10 = 1700);
}
else {
if ((c == 72)) {
(n10 = 1800);
}
else {
if ((c == 73)) {
(n10 = 1900);
}
else {
if ((c == 74)) {
(n10 = 2000);
}
else {
if ((c == 75)) {
(n10 = 2100);
}
else {
if ((c == 76)) {
(n10 = 2600);
}
else {
if ((c == 77)) {
(n10 = 2700);
}
else {
if ((c == 78)) {
(n10 = 2800);
}
else {
if ((c == 79)) {
(n10 = 2200);
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
this.wSetGym$4(this.co_w[0].x, ((this.co_w[0].y + 320) | 0), n10, n2);
(n10 = this.paraInt$1((("gym_pet" + n2) + "_hpup")));
if (((n10 >= 1) && (n10 <= 2))) {
(this.co_w[n2].hp_max = ((this.co_w[n2].hp_max + Math.imul(n10, 30)) | 0));
(this.co_w[n2].hp = this.co_w[n2].hp_max);
}
if ((((n10 = this.paraInt$1((("gym_pet" + n2) + "_ppup"))) >= 1) && (n10 <= 2))) {
(this.co_w[n2].pp_max = ((this.co_w[n2].pp_max + Math.imul(n10, 20)) | 0));
(this.co_w[n2].pp = this.co_w[n2].pp_max);
}
J.inc(()=>n2, v=>n2=v, 1, false, "int");
}
(this.gym_kijyun = ((this.co_w[0].x - 64) | 0));
}
else {
this.mapsMakeStageData$1(this.stage);
}
this.maps.drawMap$2(this.maps.wx, this.maps.wy);
this.km.initCS$0();
this.km.activeCS$0();
if (this.gym_f) {
(this.km.mode = 50);
(this.gym_c = 0);
(this.gym_shiaino = 1);
(this.gym_kachimake = 0);
(this.gym_kattakazu_c = 0);
(this.gym_kattakazu_g = 0);
(n2 = 0);
while ((n2 <= 5)) {
(this.gym_skf[n2] = true);
J.inc(()=>n2, v=>n2=v, 1, false, "int");
}
}
else {
(this.km.mode = 100);
}
}
mapsMakeStageData$1(n) {
var n2 = 0;
var n3 = 0;
this.maps.init$0();
var stringArray = this.maps.map_string;
(this.maps.wx = 32);
(this.maps.wy = 32);
(this.maps.wx_mini = 32);
(this.maps.wy_mini = 320);
(this.maps.wx_max = 5856);
(this.maps.wy_max = 1248);
var n4 = 199;
(this.co_j.x = 32);
(this.co_j.y = 608);
var string = "......................................................................";
this.maps.setBank$1(0);
this.gg.setBackcolor$1(Color.blue);
var n5 = n;
if (((this.system_mode == 0) && (n5 <= 5))) {
(n5 = ((n5 + 100) | 0));
}
else {
if (((this.system_mode == 2) && (n5 <= 5))) {
(n5 = ((n5 + 10) | 0));
}
else {
if (((this.system_mode == 3) && (n5 <= 5))) {
(n5 = ((n5 + 20) | 0));
}
}
}
switch (n5) {
case 101:
{
var n6 = this.paraInt$1("stage1_backcolor_red");
var n7 = this.paraInt$1("stage1_backcolor_green");
var n8 = this.paraInt$1("stage1_backcolor_blue");
if ((n6 < 0)) {
(n6 = 0);
}
else {
if ((n6 > 255)) {
(n6 = 255);
}
}
if ((n7 < 0)) {
(n7 = 0);
}
else {
if ((n7 > 255)) {
(n7 = 255);
}
}
if ((n8 < 0)) {
(n8 = 0);
}
else {
if ((n8 > 255)) {
(n8 = 255);
}
}
this.gg.setBackcolor$1(new Color(n6, n7, n8));
(this.maps.wy_mini = 640);
(this.maps.wx_max = 4000);
(this.maps.wy_max = 960);
(n4 = 141);
(n3 = 0);
while ((n3 <= 19)) {
(string = ("." + this.gg.ap.getParameter(("stage1-0-" + n3))));
(stringArray[((n3 + 20) | 0)] = (string = (string + this.gg.ap.getParameter(("stage1-1-" + n3)))));
J.inc(()=>n3, v=>n3=v, 1, false, "int");
}
break;
}
case 102:
{
var n6 = this.paraInt$1("stage2_backcolor_red");
var n7 = this.paraInt$1("stage2_backcolor_green");
var n8 = this.paraInt$1("stage2_backcolor_blue");
if ((n6 < 0)) {
(n6 = 0);
}
else {
if ((n6 > 255)) {
(n6 = 255);
}
}
if ((n7 < 0)) {
(n7 = 0);
}
else {
if ((n7 > 255)) {
(n7 = 255);
}
}
if ((n8 < 0)) {
(n8 = 0);
}
else {
if ((n8 > 255)) {
(n8 = 255);
}
}
this.gg.setBackcolor$1(new Color(n6, n7, n8));
(this.maps.wy_mini = 640);
(this.maps.wx_max = 4000);
(this.maps.wy_max = 960);
(n4 = 141);
(n3 = 0);
while ((n3 <= 19)) {
(string = ("." + this.gg.ap.getParameter(("stage2-0-" + n3))));
(stringArray[((n3 + 20) | 0)] = (string = (string + this.gg.ap.getParameter(("stage2-1-" + n3)))));
J.inc(()=>n3, v=>n3=v, 1, false, "int");
}
break;
}
case 103:
{
var n6 = this.paraInt$1("stage3_backcolor_red");
var n7 = this.paraInt$1("stage3_backcolor_green");
var n8 = this.paraInt$1("stage3_backcolor_blue");
if ((n6 < 0)) {
(n6 = 0);
}
else {
if ((n6 > 255)) {
(n6 = 255);
}
}
if ((n7 < 0)) {
(n7 = 0);
}
else {
if ((n7 > 255)) {
(n7 = 255);
}
}
if ((n8 < 0)) {
(n8 = 0);
}
else {
if ((n8 > 255)) {
(n8 = 255);
}
}
this.gg.setBackcolor$1(new Color(n6, n7, n8));
(this.maps.wy_mini = 640);
(this.maps.wx_max = 4000);
(this.maps.wy_max = 960);
(n4 = 141);
(n3 = 0);
while ((n3 <= 19)) {
(string = ("." + this.gg.ap.getParameter(("stage3-0-" + n3))));
(stringArray[((n3 + 20) | 0)] = (string = (string + this.gg.ap.getParameter(("stage3-1-" + n3)))));
J.inc(()=>n3, v=>n3=v, 1, false, "int");
}
break;
}
case 104:
{
var n6 = this.paraInt$1("stage4_backcolor_red");
var n7 = this.paraInt$1("stage4_backcolor_green");
var n8 = this.paraInt$1("stage4_backcolor_blue");
if ((n6 < 0)) {
(n6 = 0);
}
else {
if ((n6 > 255)) {
(n6 = 255);
}
}
if ((n7 < 0)) {
(n7 = 0);
}
else {
if ((n7 > 255)) {
(n7 = 255);
}
}
if ((n8 < 0)) {
(n8 = 0);
}
else {
if ((n8 > 255)) {
(n8 = 255);
}
}
this.gg.setBackcolor$1(new Color(n6, n7, n8));
(this.maps.wy_mini = 640);
(this.maps.wx_max = 4000);
(this.maps.wy_max = 960);
(n4 = 141);
(n3 = 0);
while ((n3 <= 19)) {
(string = ("." + this.gg.ap.getParameter(("stage4-0-" + n3))));
(stringArray[((n3 + 20) | 0)] = (string = (string + this.gg.ap.getParameter(("stage4-1-" + n3)))));
J.inc(()=>n3, v=>n3=v, 1, false, "int");
}
break;
}
case 200:
{
this.maps.setBank$1(0);
this.gg.setBackcolor$1(Color.cyan);
(n4 = 17);
(this.maps.wx_max = 32);
(this.maps.wy_max = 640);
(stringArray[27] = "...A..........R..a....................................................");
(stringArray[28] = ".acaacaaccaacaacaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa");
(stringArray[29] = ".bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb");
(stringArray[30] = ".bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb");
break;
}
case 1:
{
this.maps.setBank$1(0);
this.setStagecolor$1(1);
(n4 = 175);
(this.maps.wx_max = 5088);
(this.maps.wy_max = 672);
(stringArray[16] = string);
(stringArray[17] = string);
(stringArray[18] = string);
(stringArray[19] = string);
(stringArray[20] = string);
(stringArray[21] = string);
(stringArray[22] = string);
(stringArray[23] = "....12.....12......12.......12........E................12....12....12.");
(stringArray[24] = "......................................................................");
(stringArray[25] = "..........................................5....33.C3..................");
(stringArray[26] = ".3A.3.3.................................aaaaa..aaaaa..................");
(stringArray[27] = ".aaaaaaa.333.3..3333..C33...............bbbbb..bbbbb......33.333.B3333");
(stringArray[28] = ".bbbbbbbaaaaaaaaaaaaaaaaa.3.333C..33.53.bbbbb..bbbbb.33.3.aaaaaaaaaaaa");
(stringArray[29] = ".bbbbbbbbbbbbbbbbbbbbbbbbaaaaaaaaaaaaaaabbbbb..bbbbbaaaaaabbbbbbbbbbbb");
(stringArray[30] = ".bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb..bbbbbbbbbbbbbbbbbbbbbbb");
(stringArray[16] = (stringArray[16] + "........................................gggggggggggggggggg............"));
(stringArray[17] = (stringArray[17] + "........................................gggggggggggggggggg............"));
(stringArray[18] = (stringArray[18] + "........................................gggggggggggggggggg............"));
(stringArray[19] = (stringArray[19] + "........................................gggggggggggggggggg............"));
(stringArray[20] = (stringArray[20] + "........................................gggggggggggggggggg............"));
(stringArray[21] = (stringArray[21] + "........................................gggggggggggggggggg............"));
(stringArray[22] = (stringArray[22] + "........................................gggggggggggggggggg............"));
(stringArray[23] = (stringArray[23] + "...12...................E..............6gggggggggggggggggg.....12....."));
(stringArray[24] = (stringArray[24] + "............3.33....E..................ggggggggggggggggggg............"));
(stringArray[25] = (stringArray[25] + "...........aaaaaa..........E...........ggggggggggg......C............."));
(stringArray[26] = (stringArray[26] + "...........bbbbbb......................ggggggggggg.ggggggg............"));
(stringArray[27] = (stringArray[27] + "3.3.C.C.33.bbbbbb..3.3................C............ggggggg9..........."));
(stringArray[28] = (stringArray[28] + "aaaaaaaaaaabbbbbbaaaaaa..3..6....ggggggggggggggggggggggggggg.....3..3."));
(stringArray[29] = (stringArray[29] + "bbbbbbbbbbbbbbbbbbbbbbbaaaaaaaa..ggggggggggggggggggggggggggg..aaaaaaaa"));
(stringArray[30] = (stringArray[30] + "bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb..ggggggggggggggggggggggggggg..bbbbbbbb"));
(stringArray[23] = (stringArray[23] + "..12......12....12....12.....12...."));
(stringArray[24] = (stringArray[24] + "..................................."));
(stringArray[25] = (stringArray[25] + "..................................."));
(stringArray[26] = (stringArray[26] + ".............................8....."));
(stringArray[27] = (stringArray[27] + "........33.C.3........D33..aaaaa.3."));
(stringArray[28] = (stringArray[28] + ".D.3.33.aaaaaa...C.C..aaaaabbbbbaaa"));
(stringArray[29] = (stringArray[29] + "aaaaaaaabbbbbbaaaaaaaabbbbbbbbbbbbb"));
(stringArray[30] = (stringArray[30] + "bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb"));
break;
}
case 2:
{
this.maps.setBank$1(0);
this.setStagecolor$1(2);
(n4 = 111);
(this.maps.wx_max = 3040);
(this.maps.wy_max = 672);
(stringArray[13] = string);
(stringArray[14] = string);
(stringArray[15] = string);
(stringArray[16] = string);
(stringArray[17] = string);
(stringArray[18] = string);
(stringArray[19] = string);
(stringArray[20] = string);
(stringArray[21] = string);
(stringArray[22] = ".....12.....12....12......12..........................................");
(stringArray[23] = ".......................F...................12....12.....12............");
(stringArray[24] = "............F........................F...............................d");
(stringArray[25] = "..............ddd.....ddd.............................................");
(stringArray[26] = "..............ddd.....ddd.....F..........F............................");
(stringArray[27] = "....d........ddddd...ddddd...........................H...........ddddd");
(stringArray[28] = "..A.d...iii...jjj.....jjj.....iii..iiiiii...feeefeeefeeef......C...jjj");
(stringArray[29] = ".ddddddddddddddddddddddddddddddddddddddddddde...e...e...eddddddddddddd");
(stringArray[30] = ".ddddddddddddddddddddddddddddddddddddddddddde...e...e...eddddddddddddd");
(stringArray[13] = (stringArray[13] + ".................G.................."));
(stringArray[14] = (stringArray[14] + "...........ddddddddd................"));
(stringArray[15] = (stringArray[15] + "...........ddddddddd......Y........."));
(stringArray[16] = (stringArray[16] + "..........dddddddddd................"));
(stringArray[17] = (stringArray[17] + "..........dddddddddd................"));
(stringArray[18] = (stringArray[18] + ".........ddddddddddd................"));
(stringArray[19] = (stringArray[19] + ".........ddddddddddd................"));
(stringArray[20] = (stringArray[20] + "........ddjjjjjjjjjj................"));
(stringArray[21] = (stringArray[21] + "........dddddddddddd................"));
(stringArray[22] = (stringArray[22] + "............................H..H.8.."));
(stringArray[23] = (stringArray[23] + ".......................ddddddddddddd"));
(stringArray[24] = (stringArray[24] + "dddddddddddddd..dddddddddddddddddddd"));
(stringArray[25] = (stringArray[25] + ".....C55ddjj......C...C..9jjjjdddddd"));
(stringArray[26] = (stringArray[26] + ".iiiiiiidddddddddddddddddddddddddddd"));
(stringArray[27] = (stringArray[27] + "dddddddddddddddddddddddddddddddddddd"));
(stringArray[28] = (stringArray[28] + "jjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjjj"));
(stringArray[29] = (stringArray[29] + "dddddddddddddddddddddddddddddddddddd"));
(stringArray[30] = (stringArray[30] + "dddddddddddddddddddddddddddddddddddd"));
break;
}
case 3:
{
this.maps.setBank$1(0);
this.setStagecolor$1(3);
(n4 = 191);
(this.maps.wx_max = 5600);
(this.maps.wy_max = 672);
(stringArray[12] = (string = "......................................................................"));
(stringArray[13] = string);
(stringArray[14] = string);
(stringArray[15] = string);
(stringArray[16] = string);
(stringArray[17] = string);
(stringArray[18] = string);
(stringArray[19] = ".....................................E.....................J..........");
(stringArray[20] = ".......................................E...........E.................J");
(stringArray[21] = "................................................E.....................");
(stringArray[22] = "....................................................E.................");
(stringArray[23] = "................hhhhh...........hhhhhh................................");
(stringArray[24] = "..............I.hhhhh........I..hhhhhh..............hhhhhh............");
(stringArray[25] = "........hhhhhhh.hhhhh..ddddddd..hhhhhh.......B......hhhhhh..cccccccccc");
(stringArray[26] = "........hhhhhhh.hhhhh..ddddddd..hhhhhh.hhhhhhhhhhhh.hhhhhh..cccccccccc");
(stringArray[27] = "..A.....hhhhhhh.hhhhh..ddddddd6.hhhhhh.hhhhhhhhhhhh.hhhhhh..cccccccccc");
(stringArray[28] = ".gg...ccccccccccccccccccccccccc.hhhhhh.hhhhhhhhhhhh.hhhhhh..cccccccccc");
(stringArray[29] = ".gggggccccccccccccccccccccccccc.hhhhhh.hhhhhhhhhhhh.hhhhhh..cccccccccc");
(stringArray[30] = ".gggggccccccccccccccccccccccccc.hhhhhh.hhhhhhhhhhhh.hhhhhh..cccccccccc");
(stringArray[12] = (stringArray[12] + "..........H."));
(stringArray[13] = (stringArray[13] + ".........hhh"));
(stringArray[14] = (stringArray[14] + ".........hhh"));
(stringArray[15] = (stringArray[15] + ".........hhh.........................................................."));
(stringArray[16] = (stringArray[16] + "....hhhhhhhh.........................................................."));
(stringArray[17] = (stringArray[17] + "....hhhhhhhh.........................................................."));
(stringArray[18] = (stringArray[18] + "...hhhhhhhhh.......5.5................................................"));
(stringArray[19] = (stringArray[19] + "...hhhhhhhhh..hhhhhhhhh................E.............................."));
(stringArray[20] = (stringArray[20] + "...hhhhhhhhh..hhhhhhhhh..............................................."));
(stringArray[21] = (stringArray[21] + "...hhhhhhhhh..hhhhhhhhh...ff.........................................."));
(stringArray[22] = (stringArray[22] + ".hhhhhhhhhhh..hhhhhhhhh...ee........ii9i.............................."));
(stringArray[23] = (stringArray[23] + ".hhhhhhhhhhh..hhhhhhhhh...ee..hhhhhhhhhhhh............................"));
(stringArray[24] = (stringArray[24] + ".hhhhhhhhhhh..hhhhhhhhh...ff..hhhhhhhhhhhh.......................feeee"));
(stringArray[25] = (stringArray[25] + "cccccccccccc..hhhhhhhhh...ee..hhhhhhhhhhhhd.....................e.e..."));
(stringArray[26] = (stringArray[26] + "cccccccccccc..hhhhhhhhh...ee..hhhhhhhhhhhh.....................e...e.."));
(stringArray[27] = (stringArray[27] + "cccccccccccc..hhhhhhhhh...ff..hhhhhhhhhhhh..............K.....e.....e."));
(stringArray[28] = (stringArray[28] + "cccccccccccc..hhhhhhhhh...ee..hhhhhhhhhhhhdddddddddddddddddddfeeeeeeef"));
(stringArray[29] = (stringArray[29] + "cccccccccccc..hhhhhhhhh...ff..hhhhhhhhhhhh...c...c...c...c...c.......c"));
(stringArray[30] = (stringArray[30] + "cccccccccccc..hhhhhhhhh...ee..hhhhhhhhhhhh...c...c...c...c...c.......c"));
(stringArray[15] = (stringArray[15] + ".............................ccccccccccccc"));
(stringArray[16] = (stringArray[16] + ".............................ccccccccccccc"));
(stringArray[17] = (stringArray[17] + ".............................ccccccccccccc"));
(stringArray[18] = (stringArray[18] + ".............................ccccccccccccc"));
(stringArray[19] = (stringArray[19] + ".............................ccccccccccccc"));
(stringArray[20] = (stringArray[20] + "...................J.........ccccccccccccc"));
(stringArray[21] = (stringArray[21] + ".............................ccccccccccccc"));
(stringArray[22] = (stringArray[22] + ".............................ccccccccccccc"));
(stringArray[23] = (stringArray[23] + "..K..........B...............ccccccccccccc"));
(stringArray[24] = (stringArray[24] + "eeef.....feeeeeeef...........ccccccccccccc"));
(stringArray[25] = (stringArray[25] + "..e.e...e.e.....e.e..........ccccccccccccc.U......."));
(stringArray[26] = (stringArray[26] + ".e...e.e...e...e...e.........jjjjjjjjjjjjj........."));
(stringArray[27] = (stringArray[27] + "e.....e.....e.e.....e................K..K.......8.."));
(stringArray[28] = (stringArray[28] + "eeeeeefeeeeeefeeeeeeefddddddddddddddddddddddddddddd"));
(stringArray[29] = (stringArray[29] + "......c......c.......cccccccccccccccccccccccccccccc"));
(stringArray[30] = (stringArray[30] + "......c......c....aaccccccccccccccccccccccccccccccc"));
break;
}
case 21:
{
this.maps.setBank$1(0);
this.setStagecolor$1(1);
(this.hih[0][6] = this.hih[0][272]);
(n4 = 184);
(this.maps.wx_max = 5376);
(this.maps.wy_max = 672);
(string = "......................................................................");
(stringArray[19] = "............................................................J.........");
(stringArray[21] = "......................................................D...............");
(stringArray[22] = ".............................................ggggggggggggggggg........");
(stringArray[23] = ".............................................ggggggggggggggggg........");
(stringArray[24] = "..................................................C555................");
(stringArray[25] = ".............E............................gggggggggggggggg.ggggggg..gg");
(stringArray[26] = "..A................M......................gggggggggggggggg.ggggggg..gg");
(stringArray[27] = ".aaaa............aaaaa..M.......B.K......ggggggggggggggggg.ggggggg..gg");
(stringArray[28] = ".bbbb...aaaaaaa..bbbbb.aaaaaaaaaaaaaaaa..ggggggggggggggg...ggggggg..gg");
(stringArray[29] = ".bbbb444bbbbbbb44bbbbb4bbbbbbbbbbbbbbbb44ggggggggggggggg9ggggggggg..gg");
(stringArray[30] = ".4444444444444444444444444444444444444444ggggggggggggggggggggggggg..gg");
(stringArray[24] = (stringArray[24] + "............................w"));
(stringArray[27] = (stringArray[27] + ".........H....."));
(stringArray[28] = (stringArray[28] + "....aaaaaaaaaaa"));
(stringArray[29] = (stringArray[29] + "....bbbbbbbbbbbaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa"));
(stringArray[30] = (stringArray[30] + "....bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb"));
break;
}
case 22:
{
this.maps.setBank$1(0);
this.setStagecolor$1(2);
(this.hih[0][6] = this.hih[0][272]);
(n4 = 198);
(this.maps.wx_max = 5824);
(this.maps.wy_max = 672);
(string = "......................................................................");
(stringArray[17] = "....................................................k.................");
(stringArray[18] = "....................................................k.................");
(stringArray[19] = "....................k..............................kk.................");
(stringArray[20] = "...................................................kkk................");
(stringArray[21] = ".....................................C............kkkk................");
(stringArray[22] = ".....................55.....E......kkkk........J..kkkk................");
(stringArray[23] = ".....................kk..........................kkkkkk...............");
(stringArray[24] = ".................................................kkkkkk...............");
(stringArray[25] = "...............H...........kkk..kk......kkkkkk..kkkkkkk...............");
(stringArray[26] = ".......kk.....kkk...............................kkkkkkk...............");
(stringArray[27] = ".......kk..kk.kkk..kkk.........................kkkkkkkkkk.............");
(stringArray[28] = "...A...kk..kk.kkk......kk......................kkkkkkkkkk.............");
(stringArray[29] = "..kkk..kk..kk.kkk............C.........9.......kkkkkkkkkk...B.B.......");
(stringArray[30] = "..kkk..kk..kk.kkk.........kkkkkkkkkk..kk.......kkkkkkkkkkkkkkkkkkkkkk.");
(stringArray[24] = (stringArray[24] + "..............x"));
(stringArray[29] = (stringArray[29] + ".kkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkk"));
(stringArray[30] = (stringArray[30] + ".kkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkk"));
break;
}
case 23:
{
this.maps.setBank$1(0);
this.setStagecolor$1(3);
(this.hih[0][6] = this.hih[0][272]);
(n4 = 190);
(this.maps.wx_max = 5568);
(this.maps.wy_max = 672);
(string = "......................................................................");
(stringArray[10] = "................................................lllllllllll.......llll");
(stringArray[11] = "................................................lllllllllll.......llll");
(stringArray[12] = "................................................lllllllllll.......llll");
(stringArray[13] = "................................................lllllllllll.......llll");
(stringArray[14] = "................................................lllllllllll.......llll");
(stringArray[15] = "................................................lllllllllll.......llll");
(stringArray[16] = "................................................lllllllllll.......llll");
(stringArray[17] = "................................................lllllllllll......9llll");
(stringArray[18] = "................................................lllllllllll....lllllll");
(stringArray[19] = "................................................lllllllllll....lllllll");
(stringArray[20] = "................................................lllllllllll....lllllll");
(stringArray[21] = "................................................lllllllllllll..lllllll");
(stringArray[22] = "................................................lllllllllllll..lllllll");
(stringArray[23] = ".............C....................F.............lllllllllllll..lllllll");
(stringArray[24] = ".........llllll.................................lllllllllllll.........");
(stringArray[25] = "....5.5................................F....F...lllllllllllll..lllllll");
(stringArray[26] = "....lll......................I............F..............B.....lllllll");
(stringArray[27] = "...........llllll..lllllllllll......F.......F...lllllllllllll..lllllll");
(stringArray[28] = "..A.......lllllll..lllllllllll.........F........lllllllllllll.........");
(stringArray[29] = ".kkkkkkkkkkkkkkkk..kkkkkkkkkkkkkkkkkkkkkkkkkkk..lllllllllllll..lllllll");
(stringArray[30] = ".kkkkkkkkkkkkkkkk..kkkkkkkkkkkkkkkkkkkkkkkkkkk..lllllllllllll..lllllll");
(stringArray[10] = (stringArray[10] + "lllllll"));
(stringArray[11] = (stringArray[11] + "lllllll"));
(stringArray[12] = (stringArray[12] + "lllllll"));
(stringArray[13] = (stringArray[13] + "lllllll"));
(stringArray[14] = (stringArray[14] + "lllllll"));
(stringArray[15] = (stringArray[15] + "lllllll"));
(stringArray[16] = (stringArray[16] + "lllllll"));
(stringArray[17] = (stringArray[17] + "lllllll"));
(stringArray[18] = (stringArray[18] + "lllllll"));
(stringArray[19] = (stringArray[19] + "lllllll"));
(stringArray[20] = (stringArray[20] + "lllllll..........E..."));
(stringArray[21] = (stringArray[21] + "lllllll..E..........."));
(stringArray[22] = (stringArray[22] + "lllllll.............E"));
(stringArray[23] = (stringArray[23] + "lllllll....llllllll.."));
(stringArray[24] = (stringArray[24] + ".B...ll....lllllllllllllll..............y"));
(stringArray[25] = (stringArray[25] + "lllllll.llllllllllllllllllllll........"));
(stringArray[26] = (stringArray[26] + "lllllll.lllllllllllllllllllllll......."));
(stringArray[27] = (stringArray[27] + "lllllll.llllllllllllllllllllllllll...."));
(stringArray[28] = (stringArray[28] + "...B....llllllllllllllllllllllllll...."));
(stringArray[29] = (stringArray[29] + "lllllllllllllllllllllllllllllllllllll."));
(stringArray[30] = (stringArray[30] + "llllllllllllllllllllllllllllllllllllll"));
break;
}
case 24:
{
this.maps.setBank$1(0);
this.setStagecolor$1(4);
(this.hih[0][6] = this.hih[0][266]);
(n4 = 184);
(this.maps.wx_max = 5376);
(this.maps.wy_max = 672);
(string = "......................................................................");
(stringArray[23] = "..............................z........");
(stringArray[25] = ".....A.................................");
(stringArray[26] = "....mmmm...............................");
(stringArray[27] = "....mmmm...............................");
(stringArray[28] = "....mmmm...mmm...mmmmmmmmmmmm..........");
(stringArray[29] = ".444mmmm444mmm444mmmmmmmmmmmm4444444444");
(stringArray[30] = ".44444444444444444444444444444444444444");
}
}
(n3 = 0);
while ((n3 < this.maps.height)) {
if ((stringArray[n3].length < this.maps.width)) {
(n2 = (n5 = stringArray[n3].length));
while ((n2 < this.maps.width)) {
var n9 = n3;
(stringArray[n9] = (stringArray[n9] + "."));
J.inc(()=>n2, v=>n2=v, 1, false, "int");
}
}
J.inc(()=>n3, v=>n3=v, 1, false, "int");
}
var bl = false;
(n3 = 0);
while ((n3 < this.maps.height)) {
(n2 = 0);
while ((n2 < this.maps.width)) {
var c = J.charAt(stringArray[n3], n2);
var n10 = (-(1) | 0);
if ((c != 46)) {
if ((c == 49)) {
(n10 = 1);
}
else {
if ((c == 50)) {
(n10 = 2);
}
else {
if ((c == 51)) {
(n10 = 3);
}
else {
if ((c == 52)) {
(n10 = 4);
}
else {
if ((c == 53)) {
(n10 = 5);
}
else {
if ((c == 54)) {
(n10 = 6);
}
else {
if (((c == 55) && (this.system_mode != 0))) {
(n10 = 7);
}
else {
if ((c == 56)) {
(n10 = (!this.ig.stage_cf[((n - 1) | 0)] ? 8 : 0));
}
else {
if ((c == 57)) {
(n10 = (this.ig.kinnotama_f[((n - 1) | 0)] ? 9 : 0));
}
else {
if ((c == 97)) {
(n10 = 20);
}
else {
if ((c == 98)) {
(n10 = 21);
}
else {
if ((c == 99)) {
(n10 = 22);
}
else {
if ((c == 100)) {
(n10 = 23);
}
else {
if ((c == 101)) {
(n10 = 24);
}
else {
if ((c == 102)) {
(n10 = 25);
}
else {
if ((c == 103)) {
(n10 = 26);
}
else {
if ((c == 104)) {
(n10 = 27);
}
else {
if ((c == 105)) {
(n10 = 28);
}
else {
if ((c == 106)) {
(n10 = 29);
}
else {
if ((c == 107)) {
(n10 = 30);
}
else {
if ((c == 108)) {
(n10 = 31);
}
else {
if ((c == 109)) {
(n10 = 32);
}
else {
if ((c == 110)) {
(n10 = 33);
}
else {
if ((c == 65)) {
(this.co_j.x = Math.imul(n2, 32));
(this.co_j.y = Math.imul(n3, 32));
}
else {
if ((c == 66)) {
this.wSet$3(Math.imul(n2, 32), Math.imul(n3, 32), 1200);
}
else {
if ((c == 67)) {
this.wSet$3(Math.imul(n2, 32), Math.imul(n3, 32), 1300);
}
else {
if ((c == 68)) {
this.wSet$3(Math.imul(n2, 32), Math.imul(n3, 32), 1400);
}
else {
if ((c == 69)) {
this.wSet$3(Math.imul(n2, 32), Math.imul(n3, 32), 1500);
}
else {
if ((c == 70)) {
this.wSet$3(Math.imul(n2, 32), Math.imul(n3, 32), 1600);
}
else {
if ((c == 71)) {
this.wSet$3(Math.imul(n2, 32), Math.imul(n3, 32), 1700);
}
else {
if ((c == 72)) {
this.wSet$3(Math.imul(n2, 32), Math.imul(n3, 32), 1800);
}
else {
if ((c == 73)) {
this.wSet$3(Math.imul(n2, 32), Math.imul(n3, 32), 1900);
}
else {
if ((c == 74)) {
this.wSet$3(Math.imul(n2, 32), Math.imul(n3, 32), 2000);
}
else {
if ((c == 75)) {
this.wSet$3(Math.imul(n2, 32), Math.imul(n3, 32), 2100);
}
else {
if ((c == 76)) {
this.wSet$3(Math.imul(n2, 32), Math.imul(n3, 32), 2600);
}
else {
if ((c == 77)) {
if ((this.maps.map_bg[((n2 - 1) | 0)][n3] == 4)) {
this.wSet$3(((Math.imul(n2, 32) - 16) | 0), Math.imul(n3, 32), 2700);
(n10 = 4);
}
else {
this.wSet$3(Math.imul(n2, 32), Math.imul(n3, 32), 2700);
}
}
else {
if ((c == 78)) {
this.wSet$3(Math.imul(n2, 32), Math.imul(n3, 32), 2800);
}
else {
if ((c == 79)) {
this.wSet$3(Math.imul(n2, 32), Math.imul(n3, 32), 2200);
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
if (((c == 82) && (n == 200))) {
this.wSetGym$4(Math.imul(n2, 32), Math.imul(n3, 32), 50, 0);
this.wSetGym$4(Math.imul(n2, 32), Math.imul(n3, 32), 50, 4);
}
if ((this.system_mode != 0)) {
if ((c == 85)) {
this.wSet$3(Math.imul(n2, 32), Math.imul(n3, 32), 2200);
}
else {
if ((c == 86)) {
this.wSet$3(Math.imul(n2, 32), Math.imul(n3, 32), 1100);
}
else {
if ((c == 89)) {
if ((this.ranInt$1(6) == 0)) {
this.wSet$3(Math.imul(n2, 32), Math.imul(n3, 32), 2300);
}
}
else {
if ((c == 90)) {
this.wSet$3(Math.imul(n2, 32), Math.imul(n3, 32), 2190);
}
else {
if (((c == 119) && !this.ig.stage_cf[((n - 1) | 0)])) {
this.wSet$3(Math.imul(n2, 32), Math.imul(n3, 32), 2900);
}
else {
if (((c == 120) && !this.ig.stage_cf[((n - 1) | 0)])) {
this.wSet$3(Math.imul(n2, 32), Math.imul(n3, 32), 3000);
}
else {
if (((c == 121) && !this.ig.stage_cf[((n - 1) | 0)])) {
this.wSet$3(Math.imul(n2, 32), Math.imul(n3, 32), 3100);
}
else {
if (((c == 122) && !this.ig.stage_cf[((n - 1) | 0)])) {
this.wSet$3(Math.imul(n2, 32), Math.imul(n3, 32), 3200);
}
}
}
}
}
}
}
}
}
if ((n10 >= 0)) {
(this.maps.map_bg[n2][n3] = J.short(J.short(n10)));
}
}
J.inc(()=>n2, v=>n2=v, 1, false, "int");
}
J.inc(()=>n3, v=>n3=v, 1, false, "int");
}
(n2 = 0);
while ((n2 <= ((this.maps.width - 1) | 0))) {
(this.maps.map_bg[n2][0] = J.short(20));
(this.maps.map_bg[n2][((this.maps.height - 1) | 0)] = J.short(20));
J.inc(()=>n2, v=>n2=v, 1, false, "int");
}
(n3 = 0);
while ((n3 <= ((this.maps.height - 1) | 0))) {
(this.maps.map_bg[0][n3] = J.short(20));
(this.maps.map_bg[((this.maps.width - 1) | 0)][n3] = J.short(20));
(this.maps.map_bg[n4][n3] = J.short(20));
J.inc(()=>n3, v=>n3=v, 1, false, "int");
}
(this.ochiru_y = ((this.maps.wy_max + 320) | 0));
(this.maps.wx = ((this.co_j.x - 96) | 0));
(this.maps.wy = ((this.co_j.y - 176) | 0));
if ((this.maps.wx < this.maps.wx_mini)) {
(this.maps.wx = this.maps.wx_mini);
}
else {
if ((this.maps.wx > this.maps.wx_max)) {
(this.maps.wx = this.maps.wx_max);
}
}
if ((this.maps.wy < this.maps.wy_mini)) {
(this.maps.wy = this.maps.wy_mini);
}
else {
if ((this.maps.wy > this.maps.wy_max)) {
(this.maps.wy = this.maps.wy_max);
}
}
(this.co_j.wx = ((this.co_j.x - this.maps.wx) | 0));
(this.co_j.wy = ((this.co_j.y - this.maps.wy) | 0));
}
setStagecolor$1(n) {
var n2 = this.paraInt$1((("stage" + n) + "_backcolor_red"));
var n3 = this.paraInt$1((("stage" + n) + "_backcolor_green"));
var n4 = this.paraInt$1((("stage" + n) + "_backcolor_blue"));
if ((n2 < 0)) {
(n2 = 0);
}
else {
if ((n2 > 255)) {
(n2 = 255);
}
}
if ((n3 < 0)) {
(n3 = 0);
}
else {
if ((n3 > 255)) {
(n3 = 255);
}
}
if ((n4 < 0)) {
(n4 = 0);
}
else {
if ((n4 > 255)) {
(n4 = 255);
}
}
this.gg.setBackcolor$1(new Color(n2, n3, n4));
}
drawGamescreen$0() {
var n = 0;
var n2 = 0;
var n3 = 0;
if (this.gym_f) {
this.gg.drawListImage$3(0, 0, 4);
}
else {
this.maps.drawMapScroll$1(this.g_ac2);
}
var n4 = this.maps.wx;
var n5 = this.maps.wy;
(this.co_j.wx = ((this.co_j.x - this.maps.wx) | 0));
(this.co_j.wy = ((this.co_j.y - this.maps.wy) | 0));
if ((this.m_kazu > 0)) {
(n3 = 0);
while ((n3 <= 19)) {
if ((this.co_m[n3].c >= 50)) {
var characterObject = this.co_m[n3];
if ((characterObject.pt < 1000)) {
this.hg.drawImage(this.hih[characterObject.pth][characterObject.pt], ((characterObject.x - n4) | 0), ((characterObject.y - n5) | 0), this.ap);
}
else {
switch (characterObject.pt) {
case 1000:
{
if ((this.g_c1 == 0)) {
this.gg.os_g.setColor(Color.white);
}
else {
this.gg.os_g.setColor(Color.yellow);
}
this.gg.os_g.fillRect(((characterObject.x - n4) | 0), ((((((characterObject.y - n5) | 0) - ((characterObject.y - characterObject.vy) | 0)) | 0) + 1) | 0), 32, ((characterObject.y - characterObject.vy) | 0));
if ((characterObject.c2 <= 0)) {
break;
}
this.gg.os_g.fillOval(((((((characterObject.x + 16) | 0) - characterObject.c3) | 0) - n4) | 0), ((((characterObject.y - characterObject.c3) | 0) - n5) | 0), Math.imul(characterObject.c3, 2), Math.imul(characterObject.c3, 2));
break;
}
case 1100:
{
this.hg.drawImage(this.hih[0][208], ((characterObject.x - n4) | 0), ((characterObject.y - n5) | 0), this.ap);
this.hg.drawImage(this.hih[0][209], ((((characterObject.x - n4) | 0) + 32) | 0), ((characterObject.y - n5) | 0), this.ap);
this.hg.drawImage(this.hih[0][218], ((characterObject.x - n4) | 0), ((((characterObject.y - n5) | 0) + 32) | 0), this.ap);
this.hg.drawImage(this.hih[0][219], ((((characterObject.x - n4) | 0) + 32) | 0), ((((characterObject.y - n5) | 0) + 32) | 0), this.ap);
break;
}
case 1200:
{
if ((characterObject.c2 == 0)) {
this.gg.os_g.setColor(Color.white);
this.gg.os_g.drawOval(((((characterObject.vx - characterObject.c3) | 0) - n4) | 0), ((((((characterObject.y + 16) | 0) - characterObject.c3) | 0) - n5) | 0), Math.imul(characterObject.c3, 2), Math.imul(characterObject.c3, 2));
}
else {
if ((characterObject.c2 == 100)) {
this.gg.os_g.setColor(Color.white);
this.gg.os_g.fillOval(((((characterObject.vx - characterObject.c3) | 0) - n4) | 0), ((((((characterObject.y + 16) | 0) - characterObject.c3) | 0) - n5) | 0), Math.imul(characterObject.c3, 2), Math.imul(characterObject.c3, 2));
}
}
if ((characterObject.c2 != 200)) {
break;
}
if ((characterObject.c3 > 0)) {
this.gg.os_g.setColor(Color.white);
this.gg.os_g.fillOval(((((characterObject.vx - characterObject.c3) | 0) - n4) | 0), ((((((characterObject.y + 16) | 0) - characterObject.c3) | 0) - n5) | 0), Math.imul(characterObject.c3, 2), Math.imul(characterObject.c3, 2));
}
this.gg.os_g.setColor(Color.white);
this.gg.os_g.fillRect(((characterObject.vx - n4) | 0), ((((characterObject.y - n5) | 0) + 14) | 0), ((((characterObject.x - characterObject.vx) | 0) + 1) | 0), 8);
break;
}
case 1205:
{
if ((characterObject.c2 == 0)) {
this.gg.os_g.setColor(Color.white);
this.gg.os_g.drawOval(((((characterObject.vx - characterObject.c3) | 0) - n4) | 0), ((((((characterObject.y + 16) | 0) - characterObject.c3) | 0) - n5) | 0), Math.imul(characterObject.c3, 2), Math.imul(characterObject.c3, 2));
}
else {
if ((characterObject.c2 == 100)) {
this.gg.os_g.setColor(Color.white);
this.gg.os_g.fillOval(((((characterObject.vx - characterObject.c3) | 0) - n4) | 0), ((((((characterObject.y + 16) | 0) - characterObject.c3) | 0) - n5) | 0), Math.imul(characterObject.c3, 2), Math.imul(characterObject.c3, 2));
}
}
if ((characterObject.c2 != 200)) {
break;
}
if ((characterObject.c3 > 0)) {
this.gg.os_g.setColor(Color.white);
this.gg.os_g.fillOval(((((characterObject.vx - characterObject.c3) | 0) - n4) | 0), ((((((characterObject.y + 16) | 0) - characterObject.c3) | 0) - n5) | 0), Math.imul(characterObject.c3, 2), Math.imul(characterObject.c3, 2));
}
this.gg.os_g.setColor(Color.white);
this.gg.os_g.fillRect(((characterObject.x - n4) | 0), ((((characterObject.y - n5) | 0) + 14) | 0), ((((characterObject.vx - characterObject.x) | 0) + 1) | 0), 8);
break;
}
case 1300:
{
this.gg.os_g.setColor(Color.white);
this.gg.os_g.fillOval(((((((characterObject.x + 16) | 0) - characterObject.c3) | 0) - n4) | 0), ((((((characterObject.y + 16) | 0) - characterObject.c3) | 0) - n5) | 0), Math.imul(characterObject.c3, 2), Math.imul(characterObject.c3, 2));
break;
}
case 1400:
{
this.gg.os_g.setColor(Color.white);
this.gg.os_g.drawOval(((((((characterObject.x + 16) | 0) - characterObject.c3) | 0) - n4) | 0), ((((((characterObject.y + 16) | 0) - characterObject.c3) | 0) - n5) | 0), Math.imul(characterObject.c3, 2), Math.imul(characterObject.c3, 2));
break;
}
case 1500:
{
switch (this.g_c3) {
case 0:
{
this.gg.os_g.setColor(new Color(255, 160, 160));
break;
}
case 1:
{
this.gg.os_g.setColor(new Color(255, 160, 255));
break;
}
case 2:
{
this.gg.os_g.setColor(new Color(160, 160, 255));
break;
}
case 3:
{
this.gg.os_g.setColor(new Color(160, 255, 255));
break;
}
case 4:
{
this.gg.os_g.setColor(new Color(160, 255, 160));
break;
}
case 5:
{
this.gg.os_g.setColor(new Color(192, 255, 160));
break;
}
case 6:
{
this.gg.os_g.setColor(new Color(255, 255, 160));
break;
}
case 7:
{
this.gg.os_g.setColor(new Color(255, 192, 160));
}
}
if ((characterObject.c2 == 0)) {
this.gg.os_g.drawOval(((((characterObject.vx - characterObject.c3) | 0) - n4) | 0), ((((((characterObject.y + 16) | 0) - characterObject.c3) | 0) - n5) | 0), Math.imul(characterObject.c3, 2), Math.imul(characterObject.c3, 2));
}
else {
if ((characterObject.c2 == 100)) {
this.gg.os_g.fillOval(((((characterObject.vx - characterObject.c3) | 0) - n4) | 0), ((((((characterObject.y + 16) | 0) - characterObject.c3) | 0) - n5) | 0), Math.imul(characterObject.c3, 2), Math.imul(characterObject.c3, 2));
}
}
if ((characterObject.c2 != 200)) {
break;
}
if ((characterObject.c3 > 0)) {
this.gg.os_g.fillOval(((((characterObject.vx - characterObject.c3) | 0) - n4) | 0), ((((((characterObject.y + 16) | 0) - characterObject.c3) | 0) - n5) | 0), Math.imul(characterObject.c3, 2), Math.imul(characterObject.c3, 2));
}
this.gg.os_g.fillRect(((characterObject.vx - n4) | 0), ((((characterObject.y - n5) | 0) + 14) | 0), ((((characterObject.x - characterObject.vx) | 0) + 1) | 0), 8);
break;
}
case 1600:
{
this.hg.drawImage(this.hi[90], ((characterObject.x - n4) | 0), ((characterObject.y - n5) | 0), this.ap);
this.hg.drawImage(this.hi[91], ((((characterObject.x - n4) | 0) + 32) | 0), ((characterObject.y - n5) | 0), this.ap);
this.hg.drawImage(this.hi[92], ((((characterObject.x - n4) | 0) + 64) | 0), ((characterObject.y - n5) | 0), this.ap);
break;
}
case 1610:
{
this.hg.drawImage(this.hi[93], ((characterObject.x - n4) | 0), ((characterObject.y - n5) | 0), this.ap);
this.hg.drawImage(this.hi[94], ((((characterObject.x - n4) | 0) + 32) | 0), ((characterObject.y - n5) | 0), this.ap);
this.hg.drawImage(this.hi[95], ((((characterObject.x - n4) | 0) + 64) | 0), ((characterObject.y - n5) | 0), this.ap);
break;
}
case 1700:
{
var d = 0;
var d2 = 0;
if ((this.g_c1 == 0)) {
this.gg.os_g.setColor(new Color(255, 64, 0));
}
else {
this.gg.os_g.setColor(new Color(255, 0, 0));
}
(n2 = ((((characterObject.x - n4) | 0) + 16) | 0));
(n = ((((characterObject.y - n5) | 0) + 16) | 0));
if ((characterObject.c2 <= 1)) {
(d2 = (Math.PI / 180));
var n6 = 0;
while ((n6 <= 2)) {
(d = (((characterObject.c5 + Math.imul(n6, 120)) | 0) * d2));
(this.vo_pa_x[n6] = ((n2 + J.i((Math.cos(d) * characterObject.c3))) | 0));
(this.vo_pa_y[n6] = ((n + J.i((Math.sin(d) * characterObject.c3))) | 0));
J.inc(()=>n6, v=>n6=v, 1, false, "int");
}
this.gg.os_g.drawPolygon(this.vo_pa_x, this.vo_pa_y, 3);
break;
}
if ((characterObject.c2 != 2)) {
break;
}
(d2 = (Math.PI / 180));
(d = (characterObject.c5 * d2));
(this.vo_pa_x[0] = ((((n2 + J.i((Math.cos(d) * characterObject.c3))) | 0) + J.i((Math.cos((((characterObject.c5 + 270) | 0) * d2)) * 5.0))) | 0));
(this.vo_pa_y[0] = ((((n + J.i((Math.sin(d) * characterObject.c3))) | 0) + J.i((Math.sin((((characterObject.c5 + 270) | 0) * d2)) * 5.0))) | 0));
(this.vo_pa_x[1] = ((((n2 + J.i((Math.cos(d) * characterObject.c3))) | 0) + J.i((Math.cos((((characterObject.c5 + 90) | 0) * d2)) * 5.0))) | 0));
(this.vo_pa_y[1] = ((((n + J.i((Math.sin(d) * characterObject.c3))) | 0) + J.i((Math.sin((((characterObject.c5 + 90) | 0) * d2)) * 5.0))) | 0));
(this.vo_pa_x[2] = ((((n2 + J.i((Math.cos(d) * characterObject.c4))) | 0) + J.i((Math.cos((((characterObject.c5 + 90) | 0) * d2)) * 5.0))) | 0));
(this.vo_pa_y[2] = ((((n + J.i((Math.sin(d) * characterObject.c4))) | 0) + J.i((Math.sin((((characterObject.c5 + 90) | 0) * d2)) * 5.0))) | 0));
(this.vo_pa_x[3] = ((((n2 + J.i((Math.cos(d) * characterObject.c4))) | 0) + J.i((Math.cos((((characterObject.c5 + 270) | 0) * d2)) * 5.0))) | 0));
(this.vo_pa_y[3] = ((((n + J.i((Math.sin(d) * characterObject.c4))) | 0) + J.i((Math.sin((((characterObject.c5 + 270) | 0) * d2)) * 5.0))) | 0));
this.gg.os_g.fillPolygon(this.vo_pa_x, this.vo_pa_y, 4);
}
}
}
}
J.inc(()=>n3, v=>n3=v, 1, false, "int");
}
}
(n3 = 0);
while ((n3 <= 5)) {
var petObject = this.co_p[n3];
if ((petObject.ss >= 2)) {
this.hg.drawImage(this.hih[petObject.pth][petObject.pt], ((petObject.x - n4) | 0), ((petObject.y - n5) | 0), this.ap);
}
J.inc(()=>n3, v=>n3=v, 1, false, "int");
}
(n3 = 0);
while ((n3 <= this.w_kazu)) {
if ((this.co_w[n3].ss >= 2)) {
var wildObject = this.co_w[n3];
if ((wildObject.pt < 1000)) {
this.hg.drawImage(this.hih[wildObject.pth][wildObject.pt], ((wildObject.x - n4) | 0), ((wildObject.y - n5) | 0), this.ap);
}
else {
(n2 = ((wildObject.x - n4) | 0));
(n = ((wildObject.y - n5) | 0));
switch (wildObject.pt) {
case 1000:
{
this.hg.drawImage(this.hih[0][280], ((n2 - 16) | 0), ((n - 16) | 0), this.ap);
this.hg.drawImage(this.hih[0][281], ((n2 + 16) | 0), ((n - 16) | 0), this.ap);
this.hg.drawImage(this.hih[0][290], ((n2 - 16) | 0), ((n + 16) | 0), this.ap);
this.hg.drawImage(this.hih[0][291], ((n2 + 16) | 0), ((n + 16) | 0), this.ap);
break;
}
case 1001:
{
this.hg.drawImage(this.hih[2][280], ((n2 - 16) | 0), ((n - 16) | 0), this.ap);
this.hg.drawImage(this.hih[2][281], ((n2 + 16) | 0), ((n - 16) | 0), this.ap);
this.hg.drawImage(this.hih[2][290], ((n2 - 16) | 0), ((n + 16) | 0), this.ap);
this.hg.drawImage(this.hih[2][291], ((n2 + 16) | 0), ((n + 16) | 0), this.ap);
break;
}
case 1005:
{
this.hg.drawImage(this.hih[1][281], ((n2 - 16) | 0), ((n - 16) | 0), this.ap);
this.hg.drawImage(this.hih[1][280], ((n2 + 16) | 0), ((n - 16) | 0), this.ap);
this.hg.drawImage(this.hih[1][291], ((n2 - 16) | 0), ((n + 16) | 0), this.ap);
this.hg.drawImage(this.hih[1][290], ((n2 + 16) | 0), ((n + 16) | 0), this.ap);
break;
}
case 1006:
{
this.hg.drawImage(this.hih[3][281], ((n2 - 16) | 0), ((n - 16) | 0), this.ap);
this.hg.drawImage(this.hih[3][280], ((n2 + 16) | 0), ((n - 16) | 0), this.ap);
this.hg.drawImage(this.hih[3][291], ((n2 - 16) | 0), ((n + 16) | 0), this.ap);
this.hg.drawImage(this.hih[3][290], ((n2 + 16) | 0), ((n + 16) | 0), this.ap);
break;
}
case 1100:
{
this.hg.drawImage(this.hih[0][282], ((n2 - 16) | 0), ((n - 16) | 0), this.ap);
this.hg.drawImage(this.hih[0][283], ((n2 + 16) | 0), ((n - 16) | 0), this.ap);
this.hg.drawImage(this.hih[0][292], ((n2 - 16) | 0), ((n + 16) | 0), this.ap);
this.hg.drawImage(this.hih[0][293], ((n2 + 16) | 0), ((n + 16) | 0), this.ap);
break;
}
case 1101:
{
this.hg.drawImage(this.hih[2][282], ((n2 - 16) | 0), ((n - 16) | 0), this.ap);
this.hg.drawImage(this.hih[2][283], ((n2 + 16) | 0), ((n - 16) | 0), this.ap);
this.hg.drawImage(this.hih[2][292], ((n2 - 16) | 0), ((n + 16) | 0), this.ap);
this.hg.drawImage(this.hih[2][293], ((n2 + 16) | 0), ((n + 16) | 0), this.ap);
break;
}
case 1105:
{
this.hg.drawImage(this.hih[1][283], ((n2 - 16) | 0), ((n - 16) | 0), this.ap);
this.hg.drawImage(this.hih[1][282], ((n2 + 16) | 0), ((n - 16) | 0), this.ap);
this.hg.drawImage(this.hih[1][293], ((n2 - 16) | 0), ((n + 16) | 0), this.ap);
this.hg.drawImage(this.hih[1][292], ((n2 + 16) | 0), ((n + 16) | 0), this.ap);
break;
}
case 1106:
{
this.hg.drawImage(this.hih[3][283], ((n2 - 16) | 0), ((n - 16) | 0), this.ap);
this.hg.drawImage(this.hih[3][282], ((n2 + 16) | 0), ((n - 16) | 0), this.ap);
this.hg.drawImage(this.hih[3][293], ((n2 - 16) | 0), ((n + 16) | 0), this.ap);
this.hg.drawImage(this.hih[3][292], ((n2 + 16) | 0), ((n + 16) | 0), this.ap);
break;
}
case 1110:
{
this.hg.drawImage(this.hih[0][284], ((n2 - 16) | 0), ((n - 16) | 0), this.ap);
this.hg.drawImage(this.hih[0][285], ((n2 + 16) | 0), ((n - 16) | 0), this.ap);
this.hg.drawImage(this.hih[0][294], ((n2 - 16) | 0), ((n + 16) | 0), this.ap);
this.hg.drawImage(this.hih[0][295], ((n2 + 16) | 0), ((n + 16) | 0), this.ap);
break;
}
case 1111:
{
this.hg.drawImage(this.hih[2][284], ((n2 - 16) | 0), ((n - 16) | 0), this.ap);
this.hg.drawImage(this.hih[2][285], ((n2 + 16) | 0), ((n - 16) | 0), this.ap);
this.hg.drawImage(this.hih[2][294], ((n2 - 16) | 0), ((n + 16) | 0), this.ap);
this.hg.drawImage(this.hih[2][295], ((n2 + 16) | 0), ((n + 16) | 0), this.ap);
break;
}
case 1115:
{
this.hg.drawImage(this.hih[1][285], ((n2 - 16) | 0), ((n - 16) | 0), this.ap);
this.hg.drawImage(this.hih[1][284], ((n2 + 16) | 0), ((n - 16) | 0), this.ap);
this.hg.drawImage(this.hih[1][295], ((n2 - 16) | 0), ((n + 16) | 0), this.ap);
this.hg.drawImage(this.hih[1][294], ((n2 + 16) | 0), ((n + 16) | 0), this.ap);
break;
}
case 1116:
{
this.hg.drawImage(this.hih[3][285], ((n2 - 16) | 0), ((n - 16) | 0), this.ap);
this.hg.drawImage(this.hih[3][284], ((n2 + 16) | 0), ((n - 16) | 0), this.ap);
this.hg.drawImage(this.hih[3][295], ((n2 - 16) | 0), ((n + 16) | 0), this.ap);
this.hg.drawImage(this.hih[3][294], ((n2 + 16) | 0), ((n + 16) | 0), this.ap);
break;
}
case 1200:
{
this.hg.drawImage(this.hih[0][286], ((n2 - 16) | 0), ((n - 16) | 0), this.ap);
this.hg.drawImage(this.hih[0][287], ((n2 + 16) | 0), ((n - 16) | 0), this.ap);
this.hg.drawImage(this.hih[0][296], ((n2 - 16) | 0), ((n + 16) | 0), this.ap);
this.hg.drawImage(this.hih[0][297], ((n2 + 16) | 0), ((n + 16) | 0), this.ap);
break;
}
case 1201:
{
this.hg.drawImage(this.hih[2][286], ((n2 - 16) | 0), ((n - 16) | 0), this.ap);
this.hg.drawImage(this.hih[2][287], ((n2 + 16) | 0), ((n - 16) | 0), this.ap);
this.hg.drawImage(this.hih[2][296], ((n2 - 16) | 0), ((n + 16) | 0), this.ap);
this.hg.drawImage(this.hih[2][297], ((n2 + 16) | 0), ((n + 16) | 0), this.ap);
break;
}
case 1300:
{
this.hg.drawImage(this.hih[0][288], ((n2 - 16) | 0), ((n - 16) | 0), this.ap);
this.hg.drawImage(this.hih[0][289], ((n2 + 16) | 0), ((n - 16) | 0), this.ap);
this.hg.drawImage(this.hih[0][298], ((n2 - 16) | 0), ((n + 16) | 0), this.ap);
this.hg.drawImage(this.hih[0][299], ((n2 + 16) | 0), ((n + 16) | 0), this.ap);
break;
}
case 1301:
{
this.hg.drawImage(this.hih[2][288], ((n2 - 16) | 0), ((n - 16) | 0), this.ap);
this.hg.drawImage(this.hih[2][289], ((n2 + 16) | 0), ((n - 16) | 0), this.ap);
this.hg.drawImage(this.hih[2][298], ((n2 - 16) | 0), ((n + 16) | 0), this.ap);
this.hg.drawImage(this.hih[2][299], ((n2 + 16) | 0), ((n + 16) | 0), this.ap);
break;
}
case 1310:
{
this.hg.drawImage(this.hih[0][258], n2, ((n - 32) | 0), this.ap);
this.hg.drawImage(this.hih[0][268], n2, n, this.ap);
this.hg.drawImage(this.hih[0][278], n2, ((n + 32) | 0), this.ap);
break;
}
case 1320:
{
this.hg.drawImage(this.hih[0][259], n2, ((n - 32) | 0), this.ap);
this.hg.drawImage(this.hih[0][269], n2, n, this.ap);
this.hg.drawImage(this.hih[0][279], n2, ((n + 32) | 0), this.ap);
}
}
}
}
J.inc(()=>n3, v=>n3=v, 1, false, "int");
}
if ((this.co_j.fc > 0)) {
J.inc(()=>this.co_j.fc, v=>this.co_j.fc=v, -1, false, "int");
this.hg.drawImage(this.hih[((this.co_j.muki + 2) | 0)][this.co_j.pt], ((this.co_j.x - n4) | 0), ((this.co_j.y - n5) | 0), this.ap);
}
else {
this.hg.drawImage(this.hih[this.co_j.muki][this.co_j.pt], ((this.co_j.x - n4) | 0), ((this.co_j.y - n5) | 0), this.ap);
}
if (!this.gym_f) {
this.hg.drawImage(this.hi[80], 12, 288, this.ap);
this.hg.drawImage(this.hi[81], 40, 288, this.ap);
}
(n3 = 0);
while ((n3 <= 5)) {
if ((this.co_p[n3].shurui < 1000)) {
this.hg.drawImage(this.hi[86], ((68 + Math.imul(28, n3)) | 0), 288, this.ap);
}
else {
if ((this.co_p[n3].shurui == 1000)) {
if ((this.co_p[n3].c == 10)) {
this.hg.drawImage(this.hi[83], ((68 + Math.imul(28, n3)) | 0), 288, this.ap);
}
else {
if (((this.co_p[n3].c >= 300) && (this.co_p[n3].c < 400))) {
if ((this.g_ac == 0)) {
this.hg.drawImage(this.hi[89], ((68 + Math.imul(28, n3)) | 0), 288, this.ap);
}
else {
this.hg.drawImage(this.hi[86], ((68 + Math.imul(28, n3)) | 0), 288, this.ap);
}
}
else {
this.hg.drawImage(this.hi[86], ((68 + Math.imul(28, n3)) | 0), 288, this.ap);
}
}
}
else {
if ((this.co_p[n3].c == 210)) {
if (((this.co_p[n3].hp > 0) && (this.co_p[n3].pp > 0))) {
this.hg.drawImage(this.hi[85], ((68 + Math.imul(28, n3)) | 0), 288, this.ap);
}
else {
this.hg.drawImage(this.hi[89], ((68 + Math.imul(28, n3)) | 0), 288, this.ap);
}
}
else {
if ((this.co_p[n3].c < 1000)) {
if (((this.co_p[n3].hp > 0) && (this.co_p[n3].pp > 0))) {
this.hg.drawImage(this.hi[82], ((68 + Math.imul(28, n3)) | 0), 288, this.ap);
}
else {
this.hg.drawImage(this.hi[88], ((68 + Math.imul(28, n3)) | 0), 288, this.ap);
}
}
else {
this.hg.drawImage(this.hi[84], ((68 + Math.imul(28, n3)) | 0), 288, this.ap);
}
}
}
}
J.inc(()=>n3, v=>n3=v, 1, false, "int");
}
if (this.gym_f) {
(n3 = 1);
while ((n3 <= 3)) {
if ((this.co_w[n3].c == 70)) {
if (((this.co_w[n3].hp > 0) && (this.co_w[n3].pp > 0))) {
this.hg.drawImage(this.hi[85], ((332 + Math.imul(28, n3)) | 0), 288, this.ap);
}
else {
this.hg.drawImage(this.hi[89], ((332 + Math.imul(28, n3)) | 0), 288, this.ap);
}
}
else {
if ((this.co_w[n3].c < 11000)) {
if (((this.co_w[n3].hp > 0) && (this.co_w[n3].pp > 0))) {
this.hg.drawImage(this.hi[82], ((332 + Math.imul(28, n3)) | 0), 288, this.ap);
}
else {
this.hg.drawImage(this.hi[88], ((332 + Math.imul(28, n3)) | 0), 288, this.ap);
}
}
else {
this.hg.drawImage(this.hi[84], ((332 + Math.imul(28, n3)) | 0), 288, this.ap);
}
}
J.inc(()=>n3, v=>n3=v, 1, false, "int");
}
}
this.km.drawMenus$0();
}
jMove$0() {
if (this.gk.tr1_f) {
if ((this.tr1_c < 6)) {
J.inc(()=>this.tr1_c, v=>this.tr1_c=v, 1, false, "int");
}
}
else {
(this.tr1_c = 0);
}
if ((this.co_j.c == 210)) {
if ((this.stage_cc <= 0)) {
J.inc(()=>this.co_j.c1, v=>this.co_j.c1=v, 1, false, "int");
if ((this.co_j.c1 > 16)) {
var n = 1;
while ((n <= 15)) {
this.km.init1$1(n);
J.inc(()=>n, v=>n=v, 1, false, "int");
}
this.mSet$6(((this.maps.wx + 378) | 0), ((this.maps.wy - 90) | 0), 90, 0, 0, 0);
(this.j_okozukai = ((this.j_okozukai - 300) | 0));
if ((this.j_okozukai >= 0)) {
this.km.init1$1(4);
this.km.addItem$2(4, this.name_dragontaxy);
this.km.addItem$2(4, "救出費用と帰りの運賃を合わせて300円になります。");
this.km.activeNigyou$5(4, 96, 128, 320, Color.cyan);
(this.km.mode = 910);
}
else {
(this.j_okozukai = 0);
this.km.init1$1(4);
this.km.setMessage$2(4, this.name_dragontaxy);
this.km.addItem$2(4, "救出費用と帰りの運賃を合わせて300円になります。");
this.km.addItem$2(4, "お金が足りないのでゲームオーバーです。");
this.km.activeSerifu$5(4, 96, 128, 320, Color.cyan);
(this.km.mode = 920);
}
(this.co_j.c = 211);
}
}
}
else {
if ((this.co_j.c != 211)) {
if ((this.co_j.c == 240)) {
if ((this.co_j.c2 >= 100)) {
(this.co_j.y = ((this.co_j.y + 10) | 0));
}
(this.co_j.wx = ((this.co_j.x - this.maps.wx) | 0));
(this.co_j.wy = ((this.co_j.y - this.maps.wy) | 0));
if ((this.co_j.c2 < 100)) {
if ((this.co_j.c1 <= 0)) {
(this.co_j.pt = 110);
(this.co_j.muki = 0);
}
else {
if ((this.co_j.c1 <= 1)) {
(this.co_j.pt = 111);
(this.co_j.muki = 0);
J.inc(()=>this.co_j.c2, v=>this.co_j.c2=v, 1, false, "int");
if ((this.co_j.c2 > 4)) {
(this.co_j.c2 = 100);
}
}
else {
if ((this.co_j.c1 <= 2)) {
(this.co_j.pt = 112);
(this.co_j.muki = 0);
}
else {
(this.co_j.pt = 113);
(this.co_j.muki = 0);
}
}
}
J.inc(()=>this.co_j.c1, v=>this.co_j.c1=v, 1, false, "int");
if ((this.co_j.c1 > 3)) {
(this.co_j.c1 = 0);
}
}
else {
(this.co_j.pt = 112);
(this.co_j.muki = 0);
}
if ((this.co_j.wy >= 320)) {
(this.co_j.c = 210);
(this.co_j.c1 = 0);
(this.co_j.y = ((((this.maps.wy + 320) | 0) + 32) | 0));
(this.co_j.pt = 0);
}
}
else {
if ((this.co_j.c == 250)) {
(this.co_j.y = ((this.co_j.y + 3) | 0));
if ((this.maps.getBGCode$2(((this.co_j.x + 15) | 0), ((this.co_j.y + 31) | 0)) >= 20)) {
(this.co_j.y = ((Math.imul(J.div(((this.co_j.y + 31) | 0), 32), 32) - 32) | 0));
}
(this.co_j.wx = ((this.co_j.x - this.maps.wx) | 0));
(this.co_j.wy = ((this.co_j.y - this.maps.wy) | 0));
if ((this.co_j.wy >= 320)) {
(this.co_j.y = ((this.maps.wy + 320) | 0));
}
(this.co_j.pt = 109);
(this.co_j.muki = 0);
}
else {
if ((this.co_j.c == 260)) {
(this.co_j.pt = 109);
(this.co_j.muki = 0);
}
else {
if ((this.co_j.c == 300)) {
(this.co_j.y = ((this.co_j.y + 3) | 0));
if ((this.maps.getBGCode$2(((this.co_j.x + 15) | 0), ((this.co_j.y + 31) | 0)) >= 20)) {
(this.co_j.y = ((Math.imul(J.div(((this.co_j.y + 31) | 0), 32), 32) - 32) | 0));
}
(this.co_j.wx = ((this.co_j.x - this.maps.wx) | 0));
(this.co_j.wy = ((this.co_j.y - this.maps.wy) | 0));
if ((this.co_j.wy >= 320)) {
(this.co_j.y = ((this.maps.wy + 320) | 0));
}
(this.co_j.pt = 100);
(this.co_j.muki = 1);
}
}
}
}
}
}
}
jMove1000$0() {
var s = 0;
var s2 = 0;
var s3 = 0;
var n = 0;
var s4 = 0;
var n2 = 0;
var s5 = 0;
var n3 = 0;
if (this.gk.tr1_f) {
if ((this.tr1_c < 6)) {
J.inc(()=>this.tr1_c, v=>this.tr1_c=v, 1, false, "int");
}
}
else {
(this.tr1_c = 0);
}
var n4 = this.co_j.x;
var n5 = this.co_j.y;
(this.co_j.pt = 100);
var n6 = J.div(((n4 + 15) | 0), 32);
var n7 = J.div(((n5 + 31) | 0), 32);
var s6 = this.maps.map_bg[n6][n7];
var n8 = J.div(((n5 + 32) | 0), 32);
var s7 = this.maps.map_bg[n6][n8];
if ((s7 >= 20)) {
(this.co_j.jimen_f = true);
(this.j_jump_type = 2);
}
else {
(this.co_j.jimen_f = false);
}
if (this.co_j.jimen_f) {
if (this.gk.left_f) {
(this.co_j.vx = ((this.co_j.vx - 15) | 0));
if ((this.co_j.vx < (-(60) | 0))) {
(this.co_j.vx = (-(60) | 0));
}
if ((this.co_j.vx > 0)) {
(this.co_j.pt = 108);
(this.co_j.ac = 0);
}
else {
(this.co_j.pt = ((103 + J.div(this.co_j.ac, 2)) | 0));
J.inc(()=>this.co_j.ac, v=>this.co_j.ac=v, 1, false, "int");
if ((this.co_j.ac > 3)) {
(this.co_j.ac = 0);
}
}
(this.co_j.muki = 0);
}
else {
if (this.gk.right_f) {
(this.co_j.vx = ((this.co_j.vx + 15) | 0));
if ((this.co_j.vx > 60)) {
(this.co_j.vx = 60);
}
if ((this.co_j.vx < 0)) {
(this.co_j.pt = 108);
(this.co_j.ac = 0);
}
else {
(this.co_j.pt = ((103 + J.div(this.co_j.ac, 2)) | 0));
J.inc(()=>this.co_j.ac, v=>this.co_j.ac=v, 1, false, "int");
if ((this.co_j.ac > 3)) {
(this.co_j.ac = 0);
}
}
(this.co_j.muki = 1);
}
else {
if ((this.co_j.vx < 0)) {
(this.co_j.vx = ((this.co_j.vx + 5) | 0));
if ((this.co_j.vx > 0)) {
(this.co_j.vx = 0);
}
(this.co_j.pt = ((103 + J.div(this.co_j.ac, 2)) | 0));
J.inc(()=>this.co_j.ac, v=>this.co_j.ac=v, 1, false, "int");
if ((this.co_j.ac > 3)) {
(this.co_j.ac = 0);
}
(this.co_j.muki = 0);
}
else {
if ((this.co_j.vx > 0)) {
(this.co_j.vx = ((this.co_j.vx - 5) | 0));
if ((this.co_j.vx < 0)) {
(this.co_j.vx = 0);
}
(this.co_j.pt = ((103 + J.div(this.co_j.ac, 2)) | 0));
J.inc(()=>this.co_j.ac, v=>this.co_j.ac=v, 1, false, "int");
if ((this.co_j.ac > 3)) {
(this.co_j.ac = 0);
}
(this.co_j.muki = 1);
}
else {
(this.co_j.ac = 0);
}
}
}
}
}
else {
if (this.gk.left_f) {
if ((this.co_j.vx > (-(60) | 0))) {
(this.co_j.vx = ((this.co_j.vx - 10) | 0));
if ((this.co_j.vx < (-(60) | 0))) {
(this.co_j.vx = (-(60) | 0));
}
}
}
else {
if ((this.gk.right_f && (this.co_j.vx < 60))) {
(this.co_j.vx = ((this.co_j.vx + 10) | 0));
if ((this.co_j.vx > 60)) {
(this.co_j.vx = 60);
}
}
}
(this.co_j.pt = ((this.j_jump_type == 0) ? ((this.co_j.vy <= (-(80) | 0)) ? 101 : 102) : ((this.j_jump_type == 2) ? ((J.abs(this.co_j.vx) <= 60) ? 103 : 105) : 102)));
(this.co_j.ac = 2);
}
if ((this.co_j.vx < 0)) {
(this.co_j.x = ((this.co_j.x + J.div(this.co_j.vx, 10)) | 0));
(n3 = J.div(((this.co_j.x + 15) | 0), 32));
(s5 = J.short(this.maps.map_bg[n3][J.div(this.co_j.y, 32)]));
(n2 = J.div(((this.co_j.y + 31) | 0), 32));
(s4 = J.short(this.maps.map_bg[n3][n2]));
if (((s5 >= 20) || (s4 >= 20))) {
(this.co_j.x = ((Math.imul(n3, 32) + 17) | 0));
(this.co_j.vx = 0);
}
}
else {
if ((this.co_j.vx > 0)) {
(this.co_j.x = ((this.co_j.x + J.div(this.co_j.vx, 10)) | 0));
(n3 = J.div(((this.co_j.x + 15) | 0), 32));
(s5 = J.short(this.maps.map_bg[n3][J.div(this.co_j.y, 32)]));
(n2 = J.div(((this.co_j.y + 31) | 0), 32));
(s4 = J.short(this.maps.map_bg[n3][n2]));
if (((s5 >= 20) || (s4 >= 20))) {
(this.co_j.x = ((Math.imul(n3, 32) - 16) | 0));
(this.co_j.vx = 0);
}
}
}
if (this.co_j.jimen_f) {
var bl = false;
if (((this.km.selectedIndex[0] <= 1) && (this.gk.key_code == 74))) {
(this.gk.key_code = 0);
(bl = true);
}
if (((((this.tr1_c >= 1) && (this.tr1_c <= 5)) && (this.km.mode == 100)) && (this.km.selectedIndex[0] == 0))) {
(bl = true);
}
if (bl) {
(this.km.kettei_c = 2);
if ((this.maps.getBGCode$2(((this.co_j.x + 15) | 0), ((this.co_j.y - 1) | 0)) < 20)) {
(this.j_jump_type = 0);
(this.co_j.pt = 101);
(this.co_j.ac = 0);
(n = J.abs(this.co_j.vx));
if ((n == 0)) {
(this.co_j.vy = (-(150) | 0));
(this.j_jump_level = 1);
}
else {
if ((n < 60)) {
(this.co_j.vy = (-(230) | 0));
(this.j_jump_level = 2);
}
else {
if ((n >= 60)) {
(this.co_j.vy = (-(260) | 0));
(this.j_jump_level = 3);
}
}
}
}
}
else {
(this.co_j.vy = 0);
}
}
else {
(this.co_j.vy = ((this.co_j.vy + 25) | 0));
if ((this.co_j.vy > 160)) {
(this.co_j.vy = 160);
}
if (((this.gk.key_code == 74) && (this.km.selectedIndex[0] <= 1))) {
(this.gk.key_code = 0);
}
}
if ((this.co_j.vy < 0)) {
(n3 = J.div(((this.co_j.x + 15) | 0), 32));
var n9 = J.div(this.co_j.y, 32);
var s8 = this.maps.map_bg[n3][n9];
(n = this.co_j.vy);
if ((n < (-(320) | 0))) {
(n = (-(320) | 0));
}
(this.co_j.y = ((this.co_j.y + J.div(n, 10)) | 0));
var n10 = J.div(this.co_j.y, 32);
(s5 = J.short(this.maps.map_bg[J.div(((this.co_j.x + 15) | 0), 32)][n10]));
if ((s5 >= 20)) {
(this.co_j.y = ((Math.imul(n10, 32) + 32) | 0));
(this.co_j.vy = 0);
}
if ((n9 > n10)) {
if (this.gk.right_f) {
(s3 = J.short(this.maps.map_bg[J.div(((this.co_j.x + 16) | 0), 32)][n9]));
(s2 = J.short(this.maps.map_bg[J.div(((this.co_j.x + 16) | 0), 32)][n10]));
if (((s3 <= 9) && (s2 >= 20))) {
(this.co_j.y = ((Math.imul(n10, 32) + 32) | 0));
(this.co_j.vy = 0);
}
}
if (this.gk.left_f) {
(s3 = J.short(this.maps.map_bg[J.div(((this.co_j.x + 14) | 0), 32)][n9]));
(s2 = J.short(this.maps.map_bg[J.div(((this.co_j.x + 14) | 0), 32)][n10]));
if (((s3 <= 9) && (s2 >= 20))) {
(this.co_j.y = ((Math.imul(n10, 32) + 32) | 0));
(this.co_j.vy = 0);
}
}
}
}
else {
if ((this.co_j.vy > 0)) {
(n6 = J.div(((this.co_j.x + 15) | 0), 32));
(n7 = J.div(((this.co_j.y + 31) | 0), 32));
(s6 = J.short(this.maps.map_bg[n6][n7]));
(this.co_j.y = ((this.co_j.y + J.div(this.co_j.vy, 10)) | 0));
(n2 = J.div(((this.co_j.y + 31) | 0), 32));
(s4 = J.short(this.maps.map_bg[n6][n2]));
if ((s4 >= 20)) {
(this.co_j.y = ((Math.imul(n2, 32) - 32) | 0));
(this.co_j.vy = 0);
(n2 = J.div(((this.co_j.y + 31) | 0), 32));
(s4 = J.short(this.maps.map_bg[n6][n2]));
}
if ((n7 < n2)) {
if (this.gk.right_f) {
(s3 = J.short(this.maps.map_bg[J.div(((this.co_j.x + 16) | 0), 32)][n7]));
(s2 = J.short(this.maps.map_bg[J.div(((this.co_j.x + 16) | 0), 32)][n2]));
if (((s3 <= 9) && (s2 >= 20))) {
(this.co_j.y = ((Math.imul(n2, 32) - 32) | 0));
(this.co_j.vy = 0);
(this.co_j.pt = 103);
(this.co_j.ac = 1);
J.inc(()=>this.co_j.x, v=>this.co_j.x=v, 1, false, "int");
}
}
if (this.gk.left_f) {
(s3 = J.short(this.maps.map_bg[J.div(((this.co_j.x + 14) | 0), 32)][n7]));
(s2 = J.short(this.maps.map_bg[J.div(((this.co_j.x + 14) | 0), 32)][n2]));
if (((s3 <= 9) && (s2 >= 20))) {
(this.co_j.y = ((Math.imul(n2, 32) - 32) | 0));
(this.co_j.vy = 0);
(this.co_j.pt = 103);
(this.co_j.ac = 1);
J.inc(()=>this.co_j.x, v=>this.co_j.x=v, -1, false, "int");
}
}
}
}
}
if (((s = J.short(this.maps.map_bg[J.div(((this.co_j.x + 15) | 0), 32)][J.div(((this.co_j.y + 15) | 0), 32)])) > 0)) {
switch (s) {
case 9:
{
var n11 = J.div(((this.co_j.x + 15) | 0), 32);
var n12 = J.div(((this.co_j.y + 15) | 0), 32);
if ((this.itemGetKazu$0() < 10)) {
this.maps.putBGCode$3(n11, n12, 0);
this.itemAddItem$1(7);
(this.ig.kinnotama_f[((this.stage - 1) | 0)] = false);
break;
}
if (((n11 == this.item_motenai_x) && (n12 == this.item_motenai_y))) {
break;
}
(this.item_motenai_x = n11);
(this.item_motenai_y = n12);
this.km.init1$1(13);
this.km.addItem$2(13, this.name_crys);
this.km.addItem$2(13, "持ち物が多過ぎて拾えないわ。");
this.km.activeNigyouTime$5(13, 300, 12, 192, Color.magenta);
(this.km.item_int[13][0] = 55);
break;
}
case 8:
{
this.maps.putBGCode$3(J.div(((this.co_j.x + 15) | 0), 32), J.div(((this.co_j.y + 15) | 0), 32), 0);
(this.stage_cc = 1);
this.addScore$1(10);
break;
}
case 5:
{
var n13 = J.div(((this.co_j.x + 15) | 0), 32);
var n14 = J.div(((this.co_j.y + 15) | 0), 32);
if ((this.itemGetKazu$0() < 10)) {
this.maps.putBGCode$3(n13, n14, 0);
this.itemAddItem$1(4);
break;
}
if (((n13 == this.item_motenai_x) && (n14 == this.item_motenai_y))) {
break;
}
(this.item_motenai_x = n13);
(this.item_motenai_y = n14);
this.km.init1$1(13);
this.km.addItem$2(13, this.name_crys);
this.km.addItem$2(13, "持ち物が多過ぎて拾えないわ。");
this.km.activeNigyouTime$5(13, 300, 12, 192, Color.magenta);
(this.km.item_int[13][0] = 55);
break;
}
case 6:
{
var n15 = J.div(((this.co_j.x + 15) | 0), 32);
var n16 = J.div(((this.co_j.y + 15) | 0), 32);
if ((this.itemGetKazu$0() < 10)) {
this.maps.putBGCode$3(n15, n16, 0);
if ((this.system_mode == 3)) {
this.itemAddItem$1(((10 + this.stage) | 0));
if ((this.stage != 4)) {
(this.stage_cc = 1);
}
(n = ((this.stage - 1) | 0));
(this.ig.stage_cf[n] = true);
(n16 = ((J.div(this.ig.stage_y[n], 32) + 1) | 0));
if ((n16 <= 8)) {
(this.ig.map_bg[((J.div(this.ig.stage_x[n], 32) + 1) | 0)][n16] = 66);
break;
}
(this.ig.map_bg[((J.div(this.ig.stage_x[n], 32) + 1) | 0)][((n16 - 1) | 0)] = 66);
break;
}
this.itemAddItem$1(3);
break;
}
if (((n15 == this.item_motenai_x) && (n16 == this.item_motenai_y))) {
break;
}
(this.item_motenai_x = n15);
(this.item_motenai_y = n16);
this.km.init1$1(13);
this.km.addItem$2(13, this.name_crys);
this.km.addItem$2(13, "持ち物が多過ぎて拾えないわ。");
this.km.activeNigyouTime$5(13, 300, 12, 192, Color.magenta);
(this.km.item_int[13][0] = 55);
break;
}
case 4:
{
var n17 = 1;
while ((n17 <= 15)) {
this.km.init1$1(n17);
J.inc(()=>n17, v=>n17=v, 1, false, "int");
}
this.km.init1$1(3);
this.km.addItem$2(3, this.name_crys);
this.km.addItem$2(3, "熱っ！あたし、もうダメ・・・");
this.km.activeNigyou$5(3, 112, 64, 208, Color.magenta);
(this.km.mode = 900);
(this.co_j.c = 260);
(this.co_j.y = Math.imul(J.div(((this.co_j.y + 15) | 0), 32), 32));
if ((this.maps.getBGCode$2(((this.co_j.x + 2) | 0), this.co_j.y) != 4)) {
(this.co_j.x = ((((Math.imul(J.div(((this.co_j.x + 2) | 0), 32), 32) + 32) | 0) - 2) | 0));
}
else {
if ((this.maps.getBGCode$2(((this.co_j.x + 29) | 0), this.co_j.y) != 4)) {
(this.co_j.x = ((Math.imul(J.div(((this.co_j.x + 29) | 0), 32), 32) - 29) | 0));
}
}
this.mSet$6(this.co_j.x, ((this.co_j.y - 32) | 0), 80, 0, 0, 1);
}
}
}
if ((this.co_j.y >= this.ochiru_y)) {
(this.co_j.c = 210);
(this.co_j.c1 = 0);
}
(this.co_j.wx = ((this.co_j.x - this.maps.wx) | 0));
(this.co_j.wy = ((this.co_j.y - this.maps.wy) | 0));
if ((this.co_j.wx < 96)) {
(this.maps.wx = ((this.co_j.x - 96) | 0));
}
else {
if ((this.co_j.wx > 224)) {
(this.maps.wx = ((this.co_j.x - 224) | 0));
}
}
if ((this.co_j.wy < 78)) {
(this.maps.wy = ((this.co_j.y - 78) | 0));
}
else {
if ((this.co_j.wy > 176)) {
(this.maps.wy = ((this.co_j.y - 176) | 0));
}
}
if ((this.maps.wx < this.maps.wx_mini)) {
(this.maps.wx = this.maps.wx_mini);
}
else {
if ((this.maps.wx > this.maps.wx_max)) {
(this.maps.wx = this.maps.wx_max);
}
}
if ((this.maps.wy < this.maps.wy_mini)) {
(this.maps.wy = this.maps.wy_mini);
}
else {
if ((this.maps.wy > this.maps.wy_max)) {
(this.maps.wy = this.maps.wy_max);
}
}
}
csMove$0() {
var n = 0;
var n2 = 0;
if (((this.km.mode == 100) || ((this.km.mode >= 300) && (this.km.mode < 400)))) {
if (((this.km.selectedIndex[0] >= 2) && (this.km.selectedIndex[0] <= 7))) {
if ((this.co_p[((this.km.selectedIndex[0] - 2) | 0)].shurui >= 1100)) {
(n2 = ((this.km.selectedIndex[0] - 2) | 0));
this.km.onStatuswindow$1(this.co_p[n2]);
if ((this.co_p[n2].c >= 1000)) {
(n = this.targetWild$2(this.co_p[n2].x, this.co_p[n2].y));
if ((n >= 0)) {
this.km.onStatuswindowWild$1(this.co_w[n]);
}
else {
this.km.off$1(15);
}
}
else {
this.km.off$1(15);
}
}
else {
this.km.off$1(14);
this.km.off$1(15);
}
}
else {
this.km.off$1(14);
this.km.off$1(15);
}
}
else {
this.km.off$1(14);
this.km.off$1(15);
}
switch (this.km.mode) {
case 100:
{
if (((this.km.kettei_c == 1) && (this.km.selectedIndex[0] == 1))) {
this.km.init1$1(1);
this.km.addItem$2(1, "持ち物を使う");
this.km.addItem$2(1, "持ち物を見る");
this.km.addItem$2(1, "自分のステータス");
this.km.addItem$2(1, "ずかん");
this.km.addItem$2(1, "帰る");
this.km.addItem$2(1, "キャンセル");
this.km.active$4(1, 12, 12, 150);
(this.km.mode = 200);
break;
}
if (((this.km.selectedIndex[0] < 2) || (this.km.selectedIndex[0] > 7))) {
break;
}
(n2 = ((this.km.selectedIndex[0] - 2) | 0));
if ((this.gk.key_code == 74)) {
(this.gk.key_code = 0);
if ((this.co_p[n2].c >= 1000)) {
if (this.co_p[n2].jumpkanou_f) {
(this.co_p[n2].meirei = 20);
this.km.init1$1(13);
this.km.addItem$2(13, this.name_crys);
this.km.addItem$2(13, (this.co_p[n2].name + "、ジャンプよ！"));
this.km.activeNigyouTime$5(13, 300, 12, 144, Color.magenta);
(this.km.item_int[13][0] = 25);
}
else {
this.km.init1$1(13);
this.km.addItem$2(13, this.co_p[n2].name);
if ((this.co_p[n2].boku == "ぼく")) {
this.km.addItem$2(13, "ぼく、ジャンプできない。");
this.km.activeNigyouTime$5(13, 300, 12, 144, Color.cyan);
(this.km.item_int[13][0] = 55);
}
else {
this.km.addItem$2(13, "わたし、ジャンプできないの。");
this.km.activeNigyouTime$5(13, 300, 12, 176, Color.cyan);
(this.km.item_int[13][0] = 55);
}
}
}
}
if ((this.km.kettei_c > 1)) {
if ((this.co_p[n2].c != 10)) {
break;
}
(this.co_p[n2].c = 100);
(this.co_p[n2].x = this.co_j.x);
(this.co_p[n2].y = this.co_j.y);
(this.co_p[n2].vx = ((this.co_j.muki == 0) ? (((-(70) | 0) + this.co_j.vx) | 0) : ((70 + this.co_j.vx) | 0)));
(this.co_p[n2].vy = (-(175) | 0));
(this.km.kettei_c = 2);
break;
}
if ((this.km.kettei_c != 1)) {
break;
}
if ((this.co_p[n2].c == 10)) {
(this.co_p[n2].c = 100);
(this.co_p[n2].x = this.co_j.x);
(this.co_p[n2].y = this.co_j.y);
(this.co_p[n2].vx = ((this.co_j.muki == 0) ? (((-(70) | 0) + this.co_j.vx) | 0) : ((70 + this.co_j.vx) | 0)));
(this.co_p[n2].vy = (-(175) | 0));
(this.km.kettei_c = 2);
break;
}
if ((this.co_p[n2].c == 20)) {
if (((this.co_p[n2].hp <= 0) || (this.co_p[n2].pp <= 0))) {
if ((this.co_p[n2].pp <= 0)) {
this.km.init1$1(3);
this.km.addItem$2(3, this.co_p[n2].name);
this.km.addItem$2(3, (("疲れたからイヤです。" + this.name_crys) + "ちゃん、がんばって。"));
this.km.activeNigyou$5(3, 12, 74, 272, Color.cyan);
(this.km.mode = 310);
break;
}
this.km.init1$1(3);
this.km.addItem$2(3, this.co_p[n2].name);
this.km.addItem$2(3, (("痛いからイヤです。" + this.name_crys) + "ちゃん、がんばって。"));
this.km.activeNigyou$5(3, 12, 74, 272, Color.cyan);
(this.km.mode = 310);
break;
}
(this.co_p[n2].c = 200);
(this.co_p[n2].x = this.co_j.x);
(this.co_p[n2].y = this.co_j.y);
(this.co_p[n2].vx = ((this.co_j.muki == 0) ? (((-(70) | 0) + this.co_j.vx) | 0) : ((70 + this.co_j.vx) | 0)));
(this.co_p[n2].vy = (-(175) | 0));
(this.km.kettei_c = 2);
break;
}
if ((this.co_p[n2].c < 1000)) {
break;
}
var petObject = this.co_p[n2];
this.km.init1$1(1);
this.km.setMessage$2(1, "命令は？");
var n3 = 0;
while ((n3 <= petObject.waza_kazu)) {
this.km.addItem$2(1, petObject.waza_name[n3]);
J.inc(()=>n3, v=>n3=v, 1, false, "int");
}
this.km.active$4(1, 12, 74, 128);
(this.km.mode = 300);
break;
}
case 200:
{
if ((this.km.cancel_c == 1)) {
this.km.offActivewindow$2(1, 0);
(this.km.mode = 100);
break;
}
if ((this.km.kettei_c != 1)) {
break;
}
if ((this.km.selectedIndex[1] == 0)) {
this.itemNarabikae$0();
if ((this.item_kazu <= 0)) {
this.km.init1$1(3);
this.km.addItem$2(3, "何も持っていません。");
this.km.activeIchigyou$4(3, 174, 12, 144);
(this.km.mode = 240);
break;
}
this.km.init1$1(2);
this.km.setMessage$2(2, "どれを使う？");
var n4 = 0;
while ((n4 <= ((this.item_kazu - 1) | 0))) {
this.km.addItem$2(2, this.item_data_name[this.item[n4]]);
this.km.active$4(2, 178, 12, 116);
(this.km.mode = 210);
J.inc(()=>n4, v=>n4=v, 1, false, "int");
}
break;
}
if ((this.km.selectedIndex[1] == 1)) {
this.itemNarabikae$0();
if ((this.item_kazu <= 0)) {
this.km.init1$1(3);
this.km.addItem$2(3, "何も持っていません。");
this.km.activeIchigyou$4(3, 174, 12, 144);
(this.km.mode = 240);
break;
}
this.km.init1$1(2);
this.km.setMessage$2(2, "どれを見る？");
var n5 = 0;
while ((n5 <= ((this.item_kazu - 1) | 0))) {
this.km.addItem$2(2, this.item_data_name[this.item[n5]]);
this.km.active$4(2, 72, 65, 116);
(this.km.mode = 250);
J.inc(()=>n5, v=>n5=v, 1, false, "int");
}
break;
}
if ((this.km.selectedIndex[1] == 2)) {
this.km.init1$1(3);
this.km.activeJibun$8(3, 146, 40, 144, this.co_j.hp, this.co_j.hp_max, this.j_okozukai, this.score);
(this.km.mode = 290);
break;
}
if ((this.km.selectedIndex[1] == 3)) {
this.km.init1$1(4);
this.km.addIntitem$2(4, this.ig.zukanGetMituketakazu$0());
this.km.addIntitem$2(4, this.ig.zukanGetTukamaetakazu$0());
this.km.onMituketa$3(4, 136, 18);
(this.petlist_kazu = 0);
var n6 = 0;
while ((n6 <= 21)) {
if (this.ig.zukan_mituketa_f[((n6 + 1) | 0)]) {
(this.petlist[this.petlist_kazu] = ((n6 + 1) | 0));
J.inc(()=>this.petlist_kazu, v=>this.petlist_kazu=v, 1, false, "int");
}
J.inc(()=>n6, v=>n6=v, 1, false, "int");
}
if ((this.petlist_kazu <= 12)) {
this.km.init1$1(2);
this.km.setMessage$2(2, "どれを見る？");
(n6 = 1);
while ((n6 <= this.petlist_kazu)) {
this.km.addItem$2(2, this.ig.zukan_name[this.petlist[((n6 - 1) | 0)]]);
J.inc(()=>n6, v=>n6=v, 1, false, "int");
}
this.km.active$4(2, 232, 80, 104);
(this.km.mode = 280);
break;
}
this.km.init1$1(2);
this.km.setMessage$2(2, "どれを見る？");
(n6 = 1);
while ((n6 <= 11)) {
this.km.addItem$2(2, this.ig.zukan_name[this.petlist[((n6 - 1) | 0)]]);
J.inc(()=>n6, v=>n6=v, 1, false, "int");
}
this.km.addItem$2(2, "それ以外");
this.km.active$4(2, 232, 80, 104);
(this.km.mode = 285);
break;
}
if ((this.km.selectedIndex[1] == 4)) {
this.mSet$6(((this.maps.wx + 378) | 0), ((this.maps.wy - 90) | 0), 90, 0, 0, 0);
(n = 0);
var n7 = 0;
while ((n7 <= this.w_kazu)) {
if (((this.co_w[n7].c == 610) && this.ig.stage_cf[((this.stage - 1) | 0)])) {
(n = 1);
break;
}
J.inc(()=>n7, v=>n7=v, 1, false, "int");
}
if ((n != 1)) {
this.km.init1$1(2);
this.km.setMessage$2(2, "運賃200円が必要です。帰りますか？");
this.km.addItem$2(2, "はい");
this.km.addItem$2(2, "いいえ");
this.km.activeSerifutuki$5(2, 104, 88, 236, this.name_dragontaxy);
(this.km.mode = 295);
break;
}
this.km.init1$1(2);
this.km.setMessage$2(2, "今回はサービス。運賃が無料です。");
this.km.addItem$2(2, "帰る");
this.km.addItem$2(2, "やめる");
this.km.activeSerifutuki$5(2, 104, 88, 236, this.name_dragontaxy);
(this.km.mode = 295);
break;
}
this.km.offActivewindow$2(1, 0);
(this.km.mode = 100);
break;
}
case 210:
{
if ((this.km.cancel_c == 1)) {
this.km.offActivewindow$2(2, 1);
(this.km.mode = 200);
break;
}
if ((this.km.kettei_c != 1)) {
break;
}
(this.item_useID = this.km.selectedIndex[2]);
if (((this.item[this.item_useID] >= 8) && (this.item[this.item_useID] <= 10))) {
this.km.init1$1(3);
if ((this.item[this.item_useID] == 8)) {
this.km.addItem$2(3, "わざマシン０１には、バックアタックが記録されていた。");
}
else {
if ((this.item[this.item_useID] == 9)) {
this.km.addItem$2(3, "わざマシン０２には、大ジャンプが記録されていた。");
}
else {
this.km.addItem$2(3, "わざマシン０３には、自己再生が記録されていた。");
}
}
this.km.activeIchigyou$4(3, 12, 132, 328);
(this.km.mode = 400);
break;
}
if (((this.item[this.item_useID] >= 11) && (this.item[this.item_useID] <= 13))) {
this.km.init1$1(3);
this.km.setMessage$2(3, this.name_crys);
this.km.addItem$2(3, "こういう物には使い時があるわ。");
this.km.activeSerifu$5(3, 112, 132, 224, Color.magenta);
(this.km.mode = 440);
break;
}
(this.petlist_kazu = 0);
var n8 = 0;
while ((n8 <= 6)) {
if ((this.co_p[n8].shurui >= 1100)) {
(this.petlist[this.petlist_kazu] = n8);
J.inc(()=>this.petlist_kazu, v=>this.petlist_kazu=v, 1, false, "int");
}
J.inc(()=>n8, v=>n8=v, 1, false, "int");
}
this.km.init1$1(4);
this.km.setMessage$2(4, "誰に使う？");
(n8 = 0);
while ((n8 <= ((this.petlist_kazu - 1) | 0))) {
this.km.addItem$2(4, this.co_p[this.petlist[n8]].name);
J.inc(()=>n8, v=>n8=v, 1, false, "int");
}
this.km.active$4(4, 64, 102, 124);
(this.km.mode = 220);
break;
}
case 220:
{
if ((this.km.cancel_c == 1)) {
this.km.offActivewindow$2(4, 2);
(this.km.mode = 210);
break;
}
if ((this.km.kettei_c != 1)) {
break;
}
(n2 = this.petlist[this.km.selectedIndex[4]]);
if ((this.item[this.item_useID] != 14)) {
this.km.off$1(1);
this.km.off$1(2);
this.km.off$1(4);
}
if ((this.item[this.item_useID] == 1)) {
if ((n2 < 6)) {
if ((this.co_p[n2].shurui <= 1000)) {
this.km.init1$1(3);
this.km.addItem$2(3, this.name_crys);
this.km.addItem$2(3, (("あれっ。" + this.co_p[n2].name) + "がいないわ。"));
this.km.activeNigyou$5(3, 12, 12, 192, Color.magenta);
(this.km.mode = 230);
break;
}
if ((this.co_p[n2].hp < this.co_p[n2].hp_max)) {
this.itemDelItem$1(this.item_useID);
(this.co_p[n2].hp = this.co_p[n2].hp_max);
this.km.init1$1(3);
this.km.addItem$2(3, this.name_crys);
this.km.addItem$2(3, "治療薬を塗りましょうね。ペタペタ。");
this.km.addItem$2(3, this.co_p[n2].name);
this.km.addItem$2(3, "わーい。もう痛くないよ。");
this.km.activeYongyou$4(3, 12, 12, 272);
(this.km.mode = 230);
break;
}
this.km.init1$1(3);
this.km.addItem$2(3, this.name_crys);
this.km.addItem$2(3, "治療薬を塗りましょうね。");
this.km.addItem$2(3, this.co_p[n2].name);
this.km.addItem$2(3, "痛くなんかないもーん。持ち物は節約してね。");
this.km.activeYongyou$4(3, 12, 12, 272);
(this.km.mode = 230);
break;
}
this.itemDelItem$1(this.item_useID);
(this.co_p[n2].hp = this.co_p[n2].hp_max);
this.km.init1$1(3);
this.km.addItem$2(3, this.name_crys);
this.km.addItem$2(3, "治療薬を塗ろっと。これでもう痛くないわ。");
this.km.activeNigyou$5(3, 12, 12, 272, Color.magenta);
(this.km.mode = 230);
break;
}
if ((this.item[this.item_useID] == 2)) {
if ((n2 < 6)) {
if ((this.co_p[n2].shurui <= 1000)) {
this.km.init1$1(3);
this.km.addItem$2(3, this.name_crys);
this.km.addItem$2(3, (("あれっ。" + this.co_p[n2].name) + "がいないわ。"));
this.km.activeNigyou$5(3, 12, 12, 192, Color.magenta);
(this.km.mode = 230);
break;
}
if ((this.co_p[n2].pp < this.co_p[n2].pp_max)) {
this.itemDelItem$1(this.item_useID);
(this.co_p[n2].pp = this.co_p[n2].pp_max);
this.km.init1$1(3);
this.km.addItem$2(3, this.name_crys);
this.km.addItem$2(3, "エナジードリンクを飲みなさい。");
this.km.addItem$2(3, this.co_p[n2].name);
this.km.addItem$2(3, "ごくごく、おいしい。元気になったよ。");
this.km.activeYongyou$4(3, 12, 12, 224);
(this.km.mode = 230);
break;
}
this.km.init1$1(3);
this.km.addItem$2(3, this.name_crys);
this.km.addItem$2(3, "エナジードリンクを飲みなさい。");
this.km.addItem$2(3, this.co_p[n2].name);
this.km.addItem$2(3, "元気だから飲まないよ。持ち物は節約してね。");
this.km.activeYongyou$4(3, 12, 12, 272);
(this.km.mode = 230);
break;
}
this.itemDelItem$1(this.item_useID);
this.km.init1$1(3);
this.km.addItem$2(3, this.name_crys);
this.km.addItem$2(3, "なにこれ、苦い・・・。");
this.km.activeNigyou$5(3, 12, 12, 256, Color.magenta);
(this.km.mode = 230);
break;
}
if ((this.item[this.item_useID] == 3)) {
if ((n2 < 6)) {
if ((this.co_p[n2].shurui <= 1000)) {
this.km.init1$1(3);
this.km.addItem$2(3, this.name_crys);
this.km.addItem$2(3, (("あれっ。" + this.co_p[n2].name) + "がいないわ。残念。"));
this.km.activeNigyou$5(3, 12, 12, 224, Color.magenta);
(this.km.mode = 230);
break;
}
this.itemDelItem$1(this.item_useID);
(this.co_p[n2].hp = 0);
(this.co_p[n2].pp = 0);
if ((this.co_p[n2].c >= 1000)) {
(this.co_p[n2].c = 210);
(this.co_p[n2].vy = (-(175) | 0));
}
this.km.init1$1(3);
this.km.addItem$2(3, this.name_crys);
this.km.addItem$2(3, (("さあ、" + this.co_p[n2].name) + "。秘密のカプセルよ。"));
this.km.addItem$2(3, this.co_p[n2].name);
this.km.addItem$2(3, (("ぐえっ。" + this.co_p[n2].boku) + "、もうダメ。"));
this.km.activeYongyou$4(3, 12, 12, 256);
(this.km.mode = 230);
break;
}
this.itemDelItem$1(this.item_useID);
(this.co_p[n2].hp = 0);
(this.co_p[n2].pp = 0);
this.km.init1$1(3);
this.km.addItem$2(3, this.name_crys);
this.km.addItem$2(3, "うっ、これ毒物じゃないの！あたし、もうダメ・・。");
this.km.activeNigyou$5(3, 12, 12, 256, Color.magenta);
(this.co_j.c = 250);
(this.km.mode = 235);
break;
}
if ((this.item[this.item_useID] == 4)) {
if ((n2 < 6)) {
if ((this.co_p[n2].shurui <= 1000)) {
this.km.init1$1(3);
this.km.addItem$2(3, this.name_crys);
this.km.addItem$2(3, (("あれっ。" + this.co_p[n2].name) + "がいないわ。"));
this.km.activeNigyou$5(3, 12, 12, 192, Color.magenta);
(this.km.mode = 230);
break;
}
this.itemDelItem$1(this.item_useID);
this.co_p[n2].addHP$1(50);
this.co_p[n2].addPP$1(20);
this.km.init1$1(3);
this.km.addItem$2(3, this.name_crys);
this.km.addItem$2(3, "おいもを食べてちょうだい。");
this.km.addItem$2(3, this.co_p[n2].name);
this.km.addItem$2(3, "もぐもぐ、おいしい。");
this.km.activeYongyou$4(3, 12, 12, 192);
(this.km.mode = 230);
break;
}
this.itemDelItem$1(this.item_useID);
this.co_p[n2].addHP$1(50);
this.km.init1$1(3);
this.km.addItem$2(3, this.name_crys);
this.km.addItem$2(3, "もぐもぐ。うん、やっぱりおいもは最高ね！");
this.km.activeNigyou$5(3, 12, 12, 272, Color.magenta);
(this.km.mode = 230);
break;
}
if ((this.item[this.item_useID] == 5)) {
if ((n2 < 6)) {
if ((this.co_p[n2].shurui <= 1000)) {
this.km.init1$1(3);
this.km.addItem$2(3, this.name_crys);
this.km.addItem$2(3, (("あれっ。" + this.co_p[n2].name) + "がいないわ。"));
this.km.activeNigyou$5(3, 12, 12, 192, Color.magenta);
(this.km.mode = 230);
break;
}
if ((((this.co_p[n2].hp_max_upkaisuu + this.co_p[n2].pp_max_upkaisuu) | 0) >= 3)) {
this.km.init1$1(3);
this.km.setMessage$2(3, this.co_p[n2].name);
this.km.addItem$2(3, "能力アップはすでに限界です。");
this.km.activeSerifu$5(3, 12, 12, 192, Color.cyan);
(this.km.mode = 230);
break;
}
this.itemDelItem$1(this.item_useID);
J.inc(()=>this.co_p[n2].hp_max_upkaisuu, v=>this.co_p[n2].hp_max_upkaisuu=v, 1, false, "int");
this.co_p[n2].setHPPPMax$0();
this.km.init1$1(3);
this.km.setMessage$2(3, this.co_p[n2].name);
this.km.addItem$2(3, "ＨＰの最大値がアップしたよ。");
this.km.activeSerifu$5(3, 12, 12, 192, Color.cyan);
(this.km.mode = 230);
break;
}
if ((this.co_p[n2].hp_max >= 190)) {
this.itemDelItem$1(this.item_useID);
this.km.init1$1(3);
this.km.setMessage$2(3, this.co_p[n2].name);
this.km.addItem$2(3, "ごくごく。");
this.km.addItem$2(3, "能力アップはすでに限界だけど。");
this.km.activeSerifu$5(3, 12, 12, 208, Color.magenta);
(this.km.mode = 230);
break;
}
this.itemDelItem$1(this.item_useID);
(this.co_p[n2].hp_max = ((this.co_p[n2].hp_max + 30) | 0));
this.km.init1$1(3);
this.km.setMessage$2(3, this.co_p[n2].name);
this.km.addItem$2(3, "ＨＰの最大値がアップしたわ。");
this.km.activeSerifu$5(3, 12, 12, 192, Color.magenta);
(this.km.mode = 230);
break;
}
if ((this.item[this.item_useID] == 6)) {
if ((n2 < 6)) {
if ((this.co_p[n2].shurui <= 1000)) {
this.km.init1$1(3);
this.km.addItem$2(3, this.name_crys);
this.km.addItem$2(3, (("あれっ。" + this.co_p[n2].name) + "がいないわ。"));
this.km.activeNigyou$5(3, 12, 12, 192, Color.magenta);
(this.km.mode = 230);
break;
}
if ((((this.co_p[n2].hp_max_upkaisuu + this.co_p[n2].pp_max_upkaisuu) | 0) >= 3)) {
this.km.init1$1(3);
this.km.setMessage$2(3, this.co_p[n2].name);
this.km.addItem$2(3, "能力アップはすでに限界です。");
this.km.activeSerifu$5(3, 12, 12, 192, Color.cyan);
(this.km.mode = 230);
break;
}
this.itemDelItem$1(this.item_useID);
J.inc(()=>this.co_p[n2].pp_max_upkaisuu, v=>this.co_p[n2].pp_max_upkaisuu=v, 1, false, "int");
this.co_p[n2].setHPPPMax$0();
this.km.init1$1(3);
this.km.setMessage$2(3, this.co_p[n2].name);
this.km.addItem$2(3, "ＰＰの最大値がアップしたよ。");
this.km.activeSerifu$5(3, 12, 12, 192, Color.cyan);
(this.km.mode = 230);
break;
}
this.itemDelItem$1(this.item_useID);
this.km.init1$1(3);
this.km.setMessage$2(3, this.co_p[n2].name);
this.km.addItem$2(3, "ごくごく。");
this.km.addItem$2(3, "人間が飲んでも意味ないけど。");
this.km.activeSerifu$5(3, 12, 12, 192, Color.magenta);
(this.km.mode = 230);
break;
}
if ((this.item[this.item_useID] == 7)) {
if ((n2 < 6)) {
if ((this.co_p[n2].shurui <= 1000)) {
this.km.init1$1(3);
this.km.addItem$2(3, this.name_crys);
this.km.addItem$2(3, (("あれっ。" + this.co_p[n2].name) + "がいないわ。"));
this.km.activeNigyou$5(3, 12, 12, 192, Color.magenta);
(this.km.mode = 230);
break;
}
this.km.init1$1(3);
this.km.addItem$2(3, this.name_crys);
this.km.addItem$2(3, "あたしからのプレゼントよ。ありがたく受け取りなさい。");
this.km.addItem$2(3, this.co_p[n2].name);
this.km.addItem$2(3, "ううっ、重いですう。");
this.km.activeYongyou$4(3, 12, 12, 240);
(this.km.mode = 230);
break;
}
this.km.init1$1(3);
this.km.addItem$2(3, this.name_crys);
this.km.addItem$2(3, "これ綺麗ね・・。お店に売ったら儲かりそう。");
this.km.activeNigyou$5(3, 12, 12, 240, Color.magenta);
(this.km.mode = 230);
break;
}
if ((this.item[this.item_useID] != 14)) {
break;
}
if ((n2 == 6)) {
this.km.off$1(1);
this.km.off$1(2);
this.km.off$1(4);
this.km.init1$1(3);
this.km.setMessage$2(3, this.co_p[n2].name);
this.km.addItem$2(3, "これ、なんかエネルギーを感じるわ。");
this.km.addItem$2(3, "あたしのモンスターに触らせてあげようかな。");
this.km.activeSerifu$5(3, 12, 12, 160, Color.magenta);
(this.km.mode = 230);
break;
}
this.km.init1$1(5);
this.km.setMessage$2(5, "どちらにしますか？");
this.km.addItem$2(5, "最大ＨＰをアップする");
this.km.addItem$2(5, "最大ＰＰをアップする");
this.km.active$4(5, 310, 64, 160);
(this.km.mode = 225);
break;
}
case 225:
{
if ((this.km.cancel_c == 1)) {
this.km.offActivewindow$2(5, 4);
(this.km.mode = 220);
break;
}
if ((this.km.kettei_c != 1)) {
break;
}
(n2 = this.petlist[this.km.selectedIndex[4]]);
this.km.off$1(1);
this.km.off$1(2);
this.km.off$1(4);
this.km.off$1(5);
if ((n2 < 6)) {
if ((this.co_p[n2].shurui <= 1000)) {
this.km.init1$1(3);
this.km.addItem$2(3, this.name_crys);
this.km.addItem$2(3, (("あれっ。" + this.co_p[n2].name) + "がいないわ。"));
this.km.activeNigyou$5(3, 12, 12, 192, Color.magenta);
(this.km.mode = 230);
break;
}
if ((((this.co_p[n2].hp_max_upkaisuu + this.co_p[n2].pp_max_upkaisuu) | 0) <= 0)) {
this.km.init1$1(3);
this.km.setMessage$2(3, this.co_p[n2].name);
this.km.addItem$2(3, "もっと強くないと効果がないよ。");
this.km.activeSerifu$5(3, 12, 12, 192, Color.cyan);
(this.km.mode = 230);
break;
}
if ((((this.co_p[n2].hp_max_upkaisuu + this.co_p[n2].pp_max_upkaisuu) | 0) >= 4)) {
this.km.init1$1(3);
this.km.setMessage$2(3, this.co_p[n2].name);
this.km.addItem$2(3, "能力アップはすでに限界です。");
this.km.activeSerifu$5(3, 12, 12, 192, Color.cyan);
(this.km.mode = 230);
break;
}
if ((this.km.selectedIndex[5] == 0)) {
this.itemDelItem$1(this.item_useID);
J.inc(()=>this.co_p[n2].hp_max_upkaisuu, v=>this.co_p[n2].hp_max_upkaisuu=v, 1, false, "int");
this.co_p[n2].setHPPPMax$0();
this.km.init1$1(3);
this.km.setMessage$2(3, this.co_p[n2].name);
this.km.addItem$2(3, "ＨＰの最大値がアップしたよ。");
this.km.activeSerifu$5(3, 12, 12, 192, Color.cyan);
(this.km.mode = 230);
break;
}
this.itemDelItem$1(this.item_useID);
J.inc(()=>this.co_p[n2].pp_max_upkaisuu, v=>this.co_p[n2].pp_max_upkaisuu=v, 1, false, "int");
this.co_p[n2].setHPPPMax$0();
this.km.init1$1(3);
this.km.setMessage$2(3, this.co_p[n2].name);
this.km.addItem$2(3, "ＰＰの最大値がアップしたよ。");
this.km.activeSerifu$5(3, 12, 12, 192, Color.cyan);
(this.km.mode = 230);
break;
}
this.km.init1$1(3);
this.km.setMessage$2(3, this.co_p[n2].name);
this.km.addItem$2(3, "これ、なんかエネルギーを感じるわ。");
this.km.addItem$2(3, "あたしのモンスターに触らせてあげようかな。");
this.km.activeSerifu$5(3, 12, 12, 160, Color.magenta);
(this.km.mode = 230);
break;
}
case 230:
{
if ((this.km.cancel_c == 1)) {
this.km.offActivewindow$2(3, 0);
(this.km.mode = 100);
break;
}
if ((this.km.kettei_c != 1)) {
break;
}
this.km.offActivewindow$2(3, 0);
(this.km.mode = 100);
break;
}
case 235:
{
if ((this.km.cancel_c == 1)) {
this.km.offActivewindow$2(3, 0);
(this.km.mode = 100);
(this.ml_mode = 300);
break;
}
if ((this.km.kettei_c != 1)) {
break;
}
this.km.offActivewindow$2(3, 0);
(this.km.mode = 100);
(this.ml_mode = 300);
break;
}
case 240:
{
if ((this.km.cancel_c == 1)) {
this.km.offActivewindow$2(3, 1);
(this.km.mode = 200);
break;
}
if ((this.km.kettei_c != 1)) {
break;
}
this.km.off$1(1);
this.km.offActivewindow$2(3, 0);
(this.km.mode = 100);
break;
}
case 250:
{
if ((this.km.cancel_c == 1)) {
this.km.offActivewindow$2(2, 1);
(this.km.mode = 200);
break;
}
if ((this.km.kettei_c != 1)) {
break;
}
(n = this.km.selectedIndex[2]);
this.km.init1$1(3);
this.km.setMessage$2(3, this.item_data_name[this.item[n]]);
this.km.addItem$2(3, this.item_data_setumei[this.item[n]]);
this.km.activeSerifu$5(3, 200, 40, 176, Color.yellow);
(this.km.mode = 260);
break;
}
case 260:
{
if ((this.km.cancel_c == 1)) {
this.km.offActivewindow$2(3, 2);
(this.km.mode = 250);
break;
}
if ((this.km.kettei_c != 1)) {
break;
}
this.km.off$1(1);
this.km.off$1(2);
this.km.offActivewindow$2(3, 0);
(this.km.mode = 100);
break;
}
case 280:
{
if ((this.km.cancel_c == 1)) {
this.km.off$1(4);
this.km.offActivewindow$2(2, 1);
(this.km.mode = 200);
break;
}
if ((this.km.kettei_c != 1)) {
break;
}
(n2 = this.petlist[this.km.selectedIndex[2]]);
var petObject = new PetObject();
petObject.initShuruibetu$2(((1000 + Math.imul(n2, 100)) | 0), this);
this.km.init1$1(3);
if ((petObject.shurui >= 2900)) {
this.km.activeZukan$8(3, 136, 80, 90, (-(2) | 0), petObject.pp_max, petObject.spt[0], petObject.name);
}
else {
if (this.ig.zukan_tukamaeta_f[n2]) {
this.km.activeZukan$8(3, 136, 80, 90, petObject.hp_max, petObject.pp_max, petObject.spt[0], petObject.name);
}
else {
this.km.activeZukan$8(3, 136, 80, 90, (-(1) | 0), petObject.pp_max, petObject.spt[0], petObject.name);
}
}
(petObject = null);
(this.km.mode = 281);
break;
}
case 281:
{
if ((this.km.cancel_c == 1)) {
this.km.offActivewindow$2(3, 2);
(this.km.mode = 280);
break;
}
if ((this.km.kettei_c != 1)) {
break;
}
this.km.off$1(4);
this.km.off$1(2);
this.km.off$1(1);
this.km.offActivewindow$2(3, 0);
(this.km.mode = 100);
break;
}
case 285:
{
if ((this.km.cancel_c == 1)) {
this.km.off$1(4);
this.km.offActivewindow$2(2, 1);
(this.km.mode = 200);
break;
}
if ((this.km.kettei_c != 1)) {
break;
}
if ((this.km.selectedIndex[2] <= 10)) {
(n2 = this.petlist[this.km.selectedIndex[2]]);
var petObject = new PetObject();
petObject.initShuruibetu$2(((1000 + Math.imul(n2, 100)) | 0), this);
this.km.init1$1(3);
if ((petObject.shurui >= 2900)) {
this.km.activeZukan$8(3, 136, 80, 90, (-(2) | 0), petObject.pp_max, petObject.spt[0], petObject.name);
}
else {
if (this.ig.zukan_tukamaeta_f[n2]) {
this.km.activeZukan$8(3, 136, 80, 90, petObject.hp_max, petObject.pp_max, petObject.spt[0], petObject.name);
}
else {
this.km.activeZukan$8(3, 136, 80, 90, (-(1) | 0), petObject.pp_max, petObject.spt[0], petObject.name);
}
}
(petObject = null);
(this.km.mode = 286);
break;
}
this.km.init1$1(5);
this.km.setMessage$2(5, "どれを見る？");
var n9 = 12;
while ((n9 <= this.petlist_kazu)) {
this.km.addItem$2(5, this.ig.zukan_name[this.petlist[((n9 - 1) | 0)]]);
J.inc(()=>n9, v=>n9=v, 1, false, "int");
}
this.km.active$4(5, 342, 80, 104);
(this.km.mode = 287);
break;
}
case 286:
{
if ((this.km.cancel_c == 1)) {
this.km.offActivewindow$2(3, 2);
(this.km.mode = 285);
break;
}
if ((this.km.kettei_c != 1)) {
break;
}
this.km.off$1(4);
this.km.off$1(2);
this.km.off$1(1);
this.km.offActivewindow$2(3, 0);
(this.km.mode = 100);
break;
}
case 287:
{
if ((this.km.cancel_c == 1)) {
this.km.offActivewindow$2(5, 2);
(this.km.mode = 285);
break;
}
if ((this.km.kettei_c != 1)) {
break;
}
(n2 = this.petlist[((this.km.selectedIndex[5] + 11) | 0)]);
var petObject = new PetObject();
petObject.initShuruibetu$2(((1000 + Math.imul(n2, 100)) | 0), this);
this.km.init1$1(3);
if ((petObject.shurui >= 2900)) {
this.km.activeZukan$8(3, 136, 80, 90, (-(2) | 0), petObject.pp_max, petObject.spt[0], petObject.name);
}
else {
if (this.ig.zukan_tukamaeta_f[n2]) {
this.km.activeZukan$8(3, 136, 80, 90, petObject.hp_max, petObject.pp_max, petObject.spt[0], petObject.name);
}
else {
this.km.activeZukan$8(3, 136, 80, 90, (-(1) | 0), petObject.pp_max, petObject.spt[0], petObject.name);
}
}
(petObject = null);
(this.km.mode = 288);
break;
}
case 288:
{
if ((this.km.cancel_c == 1)) {
this.km.offActivewindow$2(3, 5);
(this.km.mode = 287);
break;
}
if ((this.km.kettei_c != 1)) {
break;
}
this.km.off$1(4);
this.km.off$1(2);
this.km.off$1(5);
this.km.off$1(1);
this.km.offActivewindow$2(3, 0);
(this.km.mode = 100);
break;
}
case 290:
{
if ((this.km.cancel_c == 1)) {
this.km.offActivewindow$2(3, 1);
(this.km.mode = 200);
break;
}
if ((this.km.kettei_c != 1)) {
break;
}
this.km.off$1(1);
this.km.offActivewindow$2(3, 0);
(this.km.mode = 100);
break;
}
case 295:
{
if ((this.km.cancel_c == 1)) {
this.km.offActivewindow$2(2, 1);
(this.km.mode = 200);
var n10 = 0;
while ((n10 <= 23)) {
if (((this.co_m[n10].c == 90) || (this.co_m[n10].c == 91))) {
(this.co_m[n10].c = 92);
}
J.inc(()=>n10, v=>n10=v, 1, false, "int");
}
}
else {
if ((this.km.kettei_c != 1)) {
break;
}
if ((this.km.selectedIndex[2] == 0)) {
(n = 0);
var n11 = 0;
while ((n11 <= this.w_kazu)) {
if (((this.co_w[n11].c == 610) && this.ig.stage_cf[((this.stage - 1) | 0)])) {
(n = 1);
break;
}
J.inc(()=>n11, v=>n11=v, 1, false, "int");
}
if ((n != 1)) {
(this.j_okozukai = ((this.j_okozukai - 200) | 0));
}
if ((this.j_okozukai >= 0)) {
(this.ml_mode = 250);
break;
}
(this.j_okozukai = 0);
this.km.init1$1(3);
this.km.setMessage$2(3, this.name_dragontaxy);
this.km.addItem$2(3, "お金が足りないのでゲームオーバーです。");
this.km.activeSerifu$5(3, 192, 136, 256, Color.cyan);
(this.km.mode = 920);
(this.co_j.c = 250);
break;
}
this.km.off$1(1);
this.km.offActivewindow$2(2, 0);
(this.km.mode = 100);
var n12 = 0;
while ((n12 <= 23)) {
if (((this.co_m[n12].c == 90) || (this.co_m[n12].c == 91))) {
(this.co_m[n12].c = 92);
}
J.inc(()=>n12, v=>n12=v, 1, false, "int");
}
}
break;
}
case 300:
{
(n2 = ((this.km.selectedIndex[0] - 2) | 0));
if ((this.gk.key_code == 74)) {
(this.gk.key_code = 0);
if ((this.co_p[n2].c >= 1000)) {
if (this.co_p[n2].jumpkanou_f) {
(this.co_p[n2].meirei = 20);
this.km.init1$1(13);
this.km.addItem$2(13, this.name_crys);
this.km.addItem$2(13, (this.co_p[n2].name + "、ジャンプよ！"));
this.km.activeNigyouTime$5(13, 300, 12, 144, Color.magenta);
(this.km.item_int[13][0] = 25);
}
else {
this.km.init1$1(13);
this.km.addItem$2(13, this.co_p[n2].name);
if ((this.co_p[n2].boku == "ぼく")) {
this.km.addItem$2(13, "ぼく、ジャンプできない。");
this.km.activeNigyouTime$5(13, 300, 12, 144, Color.cyan);
(this.km.item_int[13][0] = 55);
}
else {
this.km.addItem$2(13, "わたし、ジャンプできないの。");
this.km.activeNigyouTime$5(13, 300, 12, 176, Color.cyan);
(this.km.item_int[13][0] = 55);
}
}
}
}
if ((this.km.cancel_c == 1)) {
this.km.offActivewindow$2(1, 0);
(this.km.mode = 100);
break;
}
if ((this.km.kettei_c != 1)) {
break;
}
this.km.offActivewindow$2(1, 0);
(this.km.mode = 100);
(this.co_p[n2].meirei = this.co_p[n2].waza_code[this.km.selectedIndex[1]]);
break;
}
case 310:
{
if ((this.km.cancel_c == 1)) {
this.km.offActivewindow$2(3, 0);
(this.km.mode = 100);
break;
}
if ((this.km.kettei_c != 1)) {
break;
}
this.km.offActivewindow$2(3, 0);
(this.km.mode = 100);
break;
}
case 400:
{
if ((this.km.cancel_c == 1)) {
this.km.offActivewindow$2(3, 2);
(this.km.mode = 210);
break;
}
if ((this.km.kettei_c != 1)) {
break;
}
this.km.off$1(1);
this.km.off$1(2);
this.km.off$1(3);
this.km.init1$1(1);
if ((this.item[this.item_useID] == 8)) {
this.km.setMessage$2(1, "バックアタックを覚えさせますか？");
}
else {
if ((this.item[this.item_useID] == 9)) {
this.km.setMessage$2(1, "大ジャンプを覚えさせますか？");
}
else {
this.km.setMessage$2(1, "自己再生を覚えさせますか？");
}
}
this.km.addItem$2(1, "はい");
this.km.addItem$2(1, "いいえ");
this.km.active$4(1, 12, 12, 240);
(this.km.mode = 410);
break;
}
case 410:
{
if ((this.km.cancel_c == 1)) {
this.km.offActivewindow$2(1, 0);
(this.km.mode = 100);
break;
}
if ((this.km.kettei_c != 1)) {
break;
}
if ((this.km.selectedIndex[1] == 0)) {
(this.petlist_kazu = 0);
var n13 = 0;
while ((n13 <= 6)) {
if ((this.co_p[n13].shurui >= 1100)) {
(this.petlist[this.petlist_kazu] = n13);
J.inc(()=>this.petlist_kazu, v=>this.petlist_kazu=v, 1, false, "int");
}
J.inc(()=>n13, v=>n13=v, 1, false, "int");
}
this.km.init1$1(4);
this.km.setMessage$2(4, "誰に？");
(n13 = 0);
while ((n13 <= ((this.petlist_kazu - 1) | 0))) {
this.km.addItem$2(4, this.co_p[this.petlist[n13]].name);
J.inc(()=>n13, v=>n13=v, 1, false, "int");
}
this.km.active$4(4, 12, 76, 144);
(this.km.mode = 420);
break;
}
this.km.offActivewindow$2(1, 0);
(this.km.mode = 100);
break;
}
case 420:
{
if ((this.km.cancel_c == 1)) {
this.km.offActivewindow$2(4, 1);
(this.km.mode = 410);
break;
}
if ((this.km.kettei_c != 1)) {
break;
}
(n2 = this.petlist[this.km.selectedIndex[4]]);
if ((n2 == 6)) {
this.km.init1$1(5);
this.km.setMessage$2(5, this.co_p[n2].name);
this.km.addItem$2(5, (this.name_crys + "、バカだから覚えらんなーい。"));
this.km.activeSerifu$5(5, 122, 112, 224, Color.magenta);
(this.km.mode = 430);
break;
}
if ((this.co_p[n2].optionwaza <= 0)) {
this.km.init1$1(5);
this.km.setMessage$2(5, this.co_p[n2].name);
if ((this.item[this.item_useID] == 8)) {
this.km.addItem$2(5, "バックアタックを覚えたよ。");
this.co_p[n2].addOptionwaza$1(1);
}
else {
if ((this.item[this.item_useID] == 9)) {
this.km.addItem$2(5, "大ジャンプを覚えたよ。");
this.co_p[n2].addOptionwaza$1(2);
}
else {
this.km.addItem$2(5, "自己再生を覚えたよ。");
this.co_p[n2].addOptionwaza$1(3);
}
}
this.km.activeSerifu$5(5, 122, 112, 176, Color.cyan);
this.itemDelItem$1(this.item_useID);
(this.km.mode = 430);
break;
}
this.km.init1$1(5);
this.km.setMessage$2(5, this.co_p[n2].name);
this.km.addItem$2(5, "わざマシンを使えるのは１回だけです。");
this.km.activeSerifu$5(5, 122, 112, 240, Color.cyan);
(this.km.mode = 430);
break;
}
case 430:
{
if (((this.km.cancel_c != 1) && (this.km.kettei_c != 1))) {
break;
}
this.km.off$1(4);
this.km.off$1(1);
this.km.offActivewindow$2(5, 0);
(this.km.mode = 100);
break;
}
case 440:
{
if ((this.km.cancel_c == 1)) {
this.km.offActivewindow$2(3, 2);
(this.km.mode = 210);
break;
}
if ((this.km.kettei_c != 1)) {
break;
}
this.km.off$1(2);
this.km.off$1(1);
this.km.offActivewindow$2(3, 0);
(this.km.mode = 100);
break;
}
case 900:
{
if (((this.km.cancel_c != 1) && (this.km.kettei_c != 1))) {
break;
}
this.mSet$6(((this.maps.wx + 378) | 0), ((this.maps.wy - 90) | 0), 90, 0, 0, 0);
(this.j_okozukai = ((this.j_okozukai - 300) | 0));
if ((this.j_okozukai >= 0)) {
this.km.init1$1(4);
this.km.addItem$2(4, this.name_dragontaxy);
this.km.addItem$2(4, "救出費用と帰りの運賃を合わせて、300円になります。");
this.km.activeNigyou$5(4, 160, 104, 320, Color.cyan);
(this.km.mode = 910);
(this.co_j.c = 250);
break;
}
(this.j_okozukai = 0);
this.km.init1$1(4);
this.km.setMessage$2(4, this.name_dragontaxy);
this.km.addItem$2(4, "救出費用と帰りの運賃を合わせて、300円になります。");
this.km.addItem$2(4, "お金が足りないのでゲームオーバーです。");
this.km.activeSerifu$5(4, 160, 104, 320, Color.cyan);
(this.km.mode = 920);
(this.co_j.c = 250);
break;
}
case 910:
{
if (((this.km.cancel_c != 1) && (this.km.kettei_c != 1))) {
break;
}
(this.ml_mode = 250);
break;
}
case 920:
{
if (((this.km.cancel_c != 1) && (this.km.kettei_c != 1))) {
break;
}
(this.ml_mode = 300);
break;
}
case 950:
{
if ((this.km.kettei_c != 1)) {
break;
}
this.km.init1$1(3);
this.km.setMessage$2(3, this.name_ragias);
this.addSerifuRR$3(3, 11, 1);
this.km.activeSerifu$5(3, 64, 12, 224, Color.green);
(this.km.mode = 960);
break;
}
case 960:
{
if ((this.km.kettei_c != 1)) {
break;
}
this.km.offActivewindow$2(3, 0);
(this.km.mode = 100);
break;
}
case 970:
{
if ((this.km.kettei_c != 1)) {
break;
}
this.km.init1$1(3);
this.km.setMessage$2(3, this.name_ragias);
this.addSerifuRR$3(3, 13, 1);
this.km.activeSerifu$5(3, 64, 12, 224, Color.green);
this.mSet$6(((this.sl_wx + 384) | 0), ((this.sl_wy + 64) | 0), 86, 0, 0, 1);
(this.km.mode = 980);
break;
}
case 980:
{
if ((this.km.kettei_c != 1)) {
break;
}
this.km.init1$1(3);
this.km.setMessage$2(3, this.name_ragias);
this.addSerifuRR$3(3, 14, 1);
this.km.activeSerifu$5(3, 64, 12, 224, Color.green);
(this.km.mode = 990);
break;
}
case 990:
{
if ((this.km.kettei_c != 1)) {
break;
}
this.km.offActivewindow$2(3, 0);
(this.km.mode = 100);
}
}
}
csMoveGym$0() {
var n = 0;
if (((this.km.mode >= 54) && (this.km.mode <= 69))) {
if (((this.km.selectedIndex[0] >= 2) && (this.km.selectedIndex[0] <= 7))) {
if (((this.co_p[((this.km.selectedIndex[0] - 2) | 0)].shurui >= 1100) && (this.co_p[((this.km.selectedIndex[0] - 2) | 0)].c != 200))) {
(n = ((this.km.selectedIndex[0] - 2) | 0));
this.km.onStatuswindow$1(this.co_p[n]);
this.km.onStatuswindowGym$1(this.co_w[this.gym_shiaino]);
}
else {
this.km.off$1(14);
this.km.off$1(15);
}
}
else {
this.km.off$1(14);
this.km.off$1(15);
}
}
else {
this.km.off$1(14);
this.km.off$1(15);
}
switch (this.km.mode) {
case 50:
{
(this.petlist_kazu = 0);
var n2 = 0;
while ((n2 <= 5)) {
if (((((this.co_p[n2].shurui >= 1100) && (this.co_p[n2].hp > 0)) && (this.co_p[n2].pp > 0)) && this.gym_skf[n2])) {
(this.petlist[this.petlist_kazu] = n2);
J.inc(()=>this.petlist_kazu, v=>this.petlist_kazu=v, 1, false, "int");
}
J.inc(()=>n2, v=>n2=v, 1, false, "int");
}
this.km.init1$1(1);
this.km.setMessage$2(1, "戦うモンスターは？");
(n2 = 0);
while ((n2 <= ((this.petlist_kazu - 1) | 0))) {
this.km.addItem$2(1, this.co_p[this.petlist[n2]].name);
J.inc(()=>n2, v=>n2=v, 1, false, "int");
}
this.km.active$4(1, 12, 12, 112);
(this.km.selectedIndex[0] = ((this.petlist[this.km.selectedIndex[1]] + 2) | 0));
(this.km.mode = 51);
break;
}
case 51:
{
(this.km.selectedIndex[0] = ((this.petlist[this.km.selectedIndex[1]] + 2) | 0));
if ((this.km.kettei_c != 1)) {
break;
}
(n = ((this.km.selectedIndex[0] - 2) | 0));
(this.co_p[n].c = 200);
(this.co_p[n].x = this.co_j.x);
(this.co_p[n].y = this.co_j.y);
(this.co_p[n].vx = ((this.co_p[n].type == 1) ? ((this.co_p[n].speed > 0) ? 30 : 90) : ((this.co_p[n].speed > 0) ? 90 : 50)));
(this.co_p[n].vy = (-(175) | 0));
(this.gym_skf[n] = false);
(this.co_w[this.gym_shiaino].c = 62);
(this.co_w[this.gym_shiaino].x = this.co_w[0].x);
(this.co_w[this.gym_shiaino].y = this.co_w[0].y);
(this.co_w[this.gym_shiaino].vx = ((this.co_w[this.gym_shiaino].type == 1) ? ((this.co_w[this.gym_shiaino].speed > 0) ? (-(30) | 0) : (-(90) | 0)) : ((this.co_w[this.gym_shiaino].speed > 0) ? (-(90) | 0) : (-(50) | 0))));
(this.co_w[this.gym_shiaino].vy = (-(175) | 0));
this.km.init1$1(3);
this.km.addItem$2(3, this.name_crys);
this.km.addItem$2(3, (this.co_p[n].name + "、がんばって！"));
this.km.addItem$2(3, this.gym_gr_name);
switch (this.gym_shiaino) {
case 1:
{
this.addSerifuGym$3(3, 7, 2);
break;
}
case 2:
{
this.addSerifuGym$3(3, 8, 2);
break;
}
case 3:
{
this.addSerifuGym$3(3, 9, 2);
}
}
this.km.activeYongyou$4(3, 136, 12, 200);
(this.km.kettei_c = 2);
(this.km.mode = 52);
break;
}
case 52:
{
if ((this.km.kettei_c != 1)) {
break;
}
this.km.off$1(1);
this.km.off$1(3);
(n = ((this.km.selectedIndex[0] - 2) | 0));
if ((this.co_p[n].c != 200)) {
this.km.onStatuswindow$1(this.co_p[n]);
var n3 = this.targetWild$2(this.co_p[n].x, this.co_p[n].y);
if ((n3 >= 0)) {
this.km.onStatuswindowGym$1(this.co_w[n3]);
}
}
(this.km.mode = 54);
(n = ((this.km.selectedIndex[0] - 2) | 0));
if ((((this.co_p[n].x != ((this.co_j.x + 64) | 0)) && (this.co_p[n].speed != 0)) || ((this.co_w[this.gym_shiaino].x != this.gym_kijyun) && (this.co_w[this.gym_shiaino].speed != 0)))) {
break;
}
this.mSet$6(((this.maps.wx + 208) | 0), ((this.maps.wy + 41) | 0), 1500, 0, 0, 0);
(this.gym_c = 0);
(this.km.mode = 56);
break;
}
case 54:
{
(n = ((this.km.selectedIndex[0] - 2) | 0));
if ((((this.co_p[n].x != ((this.co_j.x + 64) | 0)) && (this.co_p[n].speed != 0)) || ((this.co_w[this.gym_shiaino].x != this.gym_kijyun) && (this.co_w[this.gym_shiaino].speed != 0)))) {
break;
}
this.mSet$6(((this.maps.wx + 208) | 0), ((this.maps.wy + 41) | 0), 1500, 0, 0, 0);
(this.gym_c = 0);
(this.km.mode = 56);
break;
}
case 56:
{
J.inc(()=>this.gym_c, v=>this.gym_c=v, 1, false, "int");
if ((this.gym_c <= 30)) {
break;
}
(this.km.mode = 60);
break;
}
case 60:
{
(n = ((this.km.selectedIndex[0] - 2) | 0));
if ((this.co_p[n].c == 210)) {
(this.gym_kachimake = 2);
J.inc(()=>this.gym_kattakazu_g, v=>this.gym_kattakazu_g=v, 1, false, "int");
(this.km.mode = 65);
}
if ((this.co_w[this.gym_shiaino].c != 70)) {
break;
}
(this.gym_kachimake = 1);
J.inc(()=>this.gym_kattakazu_c, v=>this.gym_kattakazu_c=v, 1, false, "int");
(this.km.mode = 65);
break;
}
case 65:
{
(n = ((this.km.selectedIndex[0] - 2) | 0));
if ((this.gym_kachimake == 2)) {
if ((this.maps.getBGCode$2(((this.co_p[n].x + 15) | 0), ((this.co_p[n].y + 26) | 0)) < 20)) {
break;
}
(this.km.mode = 67);
this.km.init1$1(3);
this.km.setMessage$2(3, this.gym_gr_name);
this.km.addItem$2(3, (this.co_p[n].name + "が先に戦闘不能になったので、"));
this.km.addItem$2(3, (this.co_w[this.gym_shiaino].name + "の勝ちです。"));
this.km.activeSerifu$5(3, 12, 80, 240, Color.cyan);
break;
}
if ((this.maps.getBGCode$2(((this.co_w[this.gym_shiaino].x + 15) | 0), ((this.co_w[this.gym_shiaino].y + 26) | 0)) < 20)) {
break;
}
(this.km.mode = 67);
this.km.init1$1(3);
this.km.setMessage$2(3, this.gym_gr_name);
this.km.addItem$2(3, (this.co_w[this.gym_shiaino].name + "が先に戦闘不能になったので、"));
this.km.addItem$2(3, (this.co_p[n].name + "の勝ちです。"));
this.km.activeSerifu$5(3, 260, 80, 240, Color.cyan);
break;
}
case 67:
{
if ((this.km.kettei_c != 1)) {
break;
}
if ((this.gym_shiaino >= 3)) {
this.km.init1$1(4);
var string = ((this.gym_kattakazu_g >= this.gym_kattakazu_c) ? ((" で、" + this.gym_gr_name) + "の勝ちです。") : ((" で、" + this.name_crys) + "の勝ちです。"));
this.km.addItem$2(4, (((("" + this.gym_kattakazu_c) + " 対 ") + this.gym_kattakazu_g) + string));
this.km.activeIchigyou$4(4, 152, 134, 208);
(this.km.mode = 68);
break;
}
J.inc(()=>this.gym_shiaino, v=>this.gym_shiaino=v, 1, false, "int");
(n = ((this.km.selectedIndex[0] - 2) | 0));
(this.co_p[n].c = 20);
(this.co_p[n].ss = 0);
(this.co_w[((this.gym_shiaino - 1) | 0)].c = 60);
(this.co_w[((this.gym_shiaino - 1) | 0)].x = ((((this.co_w[0].x - 32) | 0) + Math.imul(((this.gym_shiaino - 1) | 0), 32)) | 0));
(this.co_w[((this.gym_shiaino - 1) | 0)].y = ((((this.co_w[0].y + 32) | 0) + 320) | 0));
var n4 = 1;
while ((n4 <= 15)) {
this.km.init1$1(n4);
J.inc(()=>n4, v=>n4=v, 1, false, "int");
}
(this.petlist_kazu = 0);
(n4 = 0);
while ((n4 <= 5)) {
if (((((this.co_p[n4].shurui >= 1100) && (this.co_p[n4].hp > 0)) && (this.co_p[n4].pp > 0)) && this.gym_skf[n4])) {
(this.petlist[this.petlist_kazu] = n4);
J.inc(()=>this.petlist_kazu, v=>this.petlist_kazu=v, 1, false, "int");
}
J.inc(()=>n4, v=>n4=v, 1, false, "int");
}
this.km.init1$1(1);
this.km.setMessage$2(1, "戦うモンスターは？");
(n4 = 0);
while ((n4 <= ((this.petlist_kazu - 1) | 0))) {
this.km.addItem$2(1, this.co_p[this.petlist[n4]].name);
J.inc(()=>n4, v=>n4=v, 1, false, "int");
}
this.km.active$4(1, 12, 12, 112);
(this.km.selectedIndex[0] = ((this.petlist[this.km.selectedIndex[1]] + 2) | 0));
(this.km.mode = 51);
break;
}
case 68:
{
if ((this.km.kettei_c != 1)) {
break;
}
(this.ml_mode = 270);
}
}
}
pMove$0() {
var n = 0;
var n2 = 0;
while ((n2 <= 5)) {
if (((this.co_p[n2].shurui >= 1000) && (this.co_p[n2].c > 20))) {
var wildObject = null;
var n3 = 0;
var petObject = this.co_p[n2];
var n4 = petObject.x;
var n5 = petObject.y;
if ((petObject.c >= 1000)) {
switch (n) {
case 0:
{
(petObject.position = 64);
break;
}
case 1:
{
(petObject.position = 128);
break;
}
case 2:
{
(petObject.position = 96);
break;
}
case 3:
{
(petObject.position = 32);
break;
}
case 4:
{
(petObject.position = 160);
break;
}
default:
{
(petObject.position = 192);
}
}
J.inc(()=>n, v=>n=v, 1, false, "int");
if (this.gym_f) {
(petObject.position = 64);
}
}
(petObject.attack_f = false);
switch (petObject.c) {
case 10:
{
break;
}
case 20:
{
break;
}
case 100:
{
if (((this.maps.getBGCode$2((((n4 = ((n4 + J.div(petObject.vx, 10)) | 0)) + 15) | 0), ((n5 + 6) | 0)) >= 20) || (this.maps.getBGCode$2(((n4 + 15) | 0), ((n5 + 25) | 0)) >= 20))) {
(n4 = ((petObject.vx > 0) ? ((Math.imul(J.div(((n4 + 15) | 0), 32), 32) - 16) | 0) : ((((Math.imul(J.div(((n4 + 15) | 0), 32), 32) + 32) | 0) - 15) | 0)));
(petObject.vx = 0);
}
(petObject.vy = ((petObject.vy + 25) | 0));
if ((petObject.vy > 180)) {
(petObject.vy = 180);
}
(n5 = ((n5 + J.div(petObject.vy, 10)) | 0));
if ((petObject.vy < 0)) {
if ((this.maps.getBGCode$2(((n4 + 15) | 0), ((n5 + 6) | 0)) >= 20)) {
(n5 = ((((Math.imul(J.div(((n5 + 6) | 0), 32), 32) + 32) | 0) - 6) | 0));
(petObject.vy = 0);
}
}
else {
if (((petObject.vy > 0) && (this.maps.getBGCode$2(((n4 + 15) | 0), ((n5 + 25) | 0)) >= 20))) {
(n5 = ((Math.imul(J.div(((n5 + 25) | 0), 32), 32) - 26) | 0));
(petObject.vx = 0);
(petObject.c = 110);
}
}
if ((n5 >= this.ochiru_y)) {
(petObject.shurui = 0);
(petObject.c = 0);
}
if ((((petObject.vy >= 50) && (J.abs(((n4 - this.co_j.x) | 0)) <= 16)) && (J.abs(((n5 - this.co_j.y) | 0)) <= 23))) {
(petObject.c = 10);
}
(n3 = 0);
while ((n3 <= this.w_kazu)) {
if ((this.co_w[n3].c != 0)) {
(wildObject = this.co_w[n3]);
if (((((wildObject.c >= 1000) && (wildObject.c < 5000)) && (J.abs(((n4 - wildObject.x) | 0)) <= 22)) && (J.abs(((n5 - wildObject.y) | 0)) <= 23))) {
if (((wildObject.shurui >= 2900) && (wildObject.shurui <= 3200))) {
this.km.init1$1(13);
this.km.addItem$2(13, this.name_crys);
this.km.addItem$2(13, "大き過ぎてゲットできないみたい。");
this.km.activeNigyouTime$5(13, 300, 12, 204, Color.magenta);
}
else {
(wildObject.c = 40);
(petObject.c = 300);
(petObject.c1 = 46);
(petObject.c2 = n3);
(n4 = wildObject.x);
(n5 = wildObject.y);
(petObject.vx = 0);
(petObject.vy = (-(125) | 0));
break;
}
}
}
J.inc(()=>n3, v=>n3=v, 1, false, "int");
}
(petObject.pt = 83);
(petObject.pth = 0);
break;
}
case 110:
{
if (((J.abs(((n4 - this.co_j.x) | 0)) <= 16) && (J.abs(((n5 - this.co_j.y) | 0)) <= 23))) {
(petObject.c = 10);
}
(petObject.pt = 83);
(petObject.pth = 0);
break;
}
case 200:
{
if (((this.maps.getBGCode$2((((n4 = ((n4 + J.div(petObject.vx, 10)) | 0)) + 15) | 0), ((n5 + 6) | 0)) >= 20) || (this.maps.getBGCode$2(((n4 + 15) | 0), ((n5 + 25) | 0)) >= 20))) {
(n4 = ((petObject.vx > 0) ? ((Math.imul(J.div(((n4 + 15) | 0), 32), 32) - 16) | 0) : ((((Math.imul(J.div(((n4 + 15) | 0), 32), 32) + 32) | 0) - 15) | 0)));
(petObject.vx = 0);
}
(petObject.vy = ((petObject.vy + 25) | 0));
if ((petObject.vy > 180)) {
(petObject.vy = 180);
}
(n5 = ((n5 + J.div(petObject.vy, 10)) | 0));
if ((petObject.vy < 0)) {
if ((this.maps.getBGCode$2(((n4 + 15) | 0), ((n5 + 6) | 0)) >= 20)) {
(n5 = ((((Math.imul(J.div(((n5 + 6) | 0), 32), 32) + 32) | 0) - 6) | 0));
(petObject.vy = 0);
}
}
else {
if (((petObject.vy > 0) && (this.maps.getBGCode$2(((n4 + 15) | 0), ((n5 + 31) | 0)) >= 20))) {
(n5 = ((Math.imul(J.div(((n5 + 31) | 0), 32), 32) - 32) | 0));
(petObject.vx = 0);
(petObject.c = 1000);
(petObject.muki = 1);
(petObject.vx = 0);
(petObject.meirei = 0);
(petObject.move_wc = ((30 + Math.imul(n2, 3)) | 0));
(petObject.gym_wc = 0);
if (this.gym_f) {
(petObject.move_wc = 15);
}
}
}
if (((petObject.type == 1) && (petObject.vy >= 0))) {
(petObject.c = 2000);
(petObject.muki = 1);
(petObject.vx = 0);
(petObject.meirei = 0);
(petObject.move_wc = ((30 + Math.imul(n2, 3)) | 0));
(petObject.gym_wc = 0);
if (this.gym_f) {
(petObject.move_wc = 20);
}
}
if ((n5 >= this.ochiru_y)) {
(petObject.shurui = 0);
(petObject.c = 0);
}
(petObject.pt = 82);
(petObject.pth = 0);
break;
}
case 210:
{
(petObject.vy = ((petObject.vy + 25) | 0));
if ((petObject.vy > 180)) {
(petObject.vy = 180);
}
(n5 = ((n5 + J.div(petObject.vy, 10)) | 0));
if ((petObject.vy < 0)) {
if ((this.maps.getBGCode$2(((n4 + 15) | 0), ((n5 + 6) | 0)) >= 20)) {
(n5 = ((((Math.imul(J.div(((n5 + 6) | 0), 32), 32) + 32) | 0) - 6) | 0));
(petObject.vy = 0);
}
}
else {
if (((petObject.vy > 0) && (this.maps.getBGCode$2(((n4 + 15) | 0), ((n5 + 25) | 0)) >= 20))) {
(n5 = ((Math.imul(J.div(((n5 + 25) | 0), 32), 32) - 26) | 0));
}
}
if ((n5 >= this.ochiru_y)) {
(petObject.shurui = 0);
(petObject.c = 0);
}
if ((((petObject.vy >= 0) && (J.abs(((n4 - this.co_j.x) | 0)) <= 16)) && (J.abs(((n5 - this.co_j.y) | 0)) <= 23))) {
(petObject.c = 20);
}
(petObject.pt = (((petObject.hp > 0) && (petObject.pp > 0)) ? 82 : 88));
(petObject.pth = 0);
break;
}
case 300:
{
(petObject.vy = ((petObject.vy + 25) | 0));
if ((petObject.vy > 180)) {
(petObject.vy = 180);
}
(n5 = ((n5 + J.div(petObject.vy, 10)) | 0));
if ((petObject.vy < 0)) {
if ((this.maps.getBGCode$2(((n4 + 15) | 0), ((n5 + 6) | 0)) >= 20)) {
(n5 = ((((Math.imul(J.div(((n5 + 6) | 0), 32), 32) + 32) | 0) - 6) | 0));
(petObject.vy = 0);
}
}
else {
if (((petObject.vy > 0) && (this.maps.getBGCode$2(((n4 + 15) | 0), ((n5 + 25) | 0)) >= 20))) {
(n5 = ((Math.imul(J.div(((n5 + 25) | 0), 32), 32) - 26) | 0));
(petObject.vx = 0);
(petObject.c = 310);
}
}
if ((n5 >= this.ochiru_y)) {
(petObject.shurui = 0);
(petObject.c = 0);
this.co_w[petObject.c2].init$0();
}
(petObject.pt = ((this.g_ac == 0) ? 88 : 83));
(petObject.pth = 0);
break;
}
case 310:
{
var n6 = 0;
J.inc(()=>petObject.c1, v=>petObject.c1=v, -1, false, "int");
if ((petObject.c1 <= 0)) {
(n6 = petObject.c2);
(this.co_w[n6].x = n4);
(this.co_w[n6].y = n5);
petObject.initShuruibetu$2(this.co_w[n6].shurui, this);
(petObject.c = 210);
(petObject.x = this.co_w[n6].x);
(petObject.y = this.co_w[n6].y);
(petObject.hp = this.co_w[n6].hp);
(petObject.pp = this.co_w[n6].pp);
if (!this.ig.zukan_tukamaeta_f[petObject.mn]) {
this.addScore$1(3);
}
else {
this.addScore$1(2);
}
this.ig.zukanTourokuPet$0();
this.km.init1$1(13);
this.km.addItem$2(13, this.name_crys);
this.km.addItem$2(13, (petObject.name + "をゲットしたわ。"));
this.km.activeNigyouTime$5(13, 300, 12, 160, Color.magenta);
this.co_w[n6].init$0();
}
(petObject.pt = ((this.g_ac == 0) ? 88 : 83));
(petObject.pth = 0);
break;
}
case 1000:
{
if ((petObject.move_wc > 0)) {
(petObject.move_wc = ((petObject.speed > 0) ? J.inc(()=>petObject.move_wc, v=>petObject.move_wc=v, -1, false, "int") : 10));
if ((n4 == ((this.co_j.x + petObject.position) | 0))) {
(petObject.vx = 0);
(petObject.move_wc = ((25 + Math.imul(n2, 8)) | 0));
}
if ((petObject.move_wc <= 0)) {
if ((n4 > ((this.co_j.x + petObject.position) | 0))) {
(petObject.vx = (-(petObject.speed) | 0));
}
else {
if ((n4 < ((this.co_j.x + petObject.position) | 0))) {
(petObject.vx = petObject.speed);
}
else {
(petObject.vx = 0);
(petObject.move_wc = ((25 + Math.imul(n2, 5)) | 0));
}
}
}
}
else {
(n4 = ((n4 + J.div(petObject.vx, 10)) | 0));
if ((petObject.vx < 0)) {
if (((this.maps.getBGCode$2(((n4 + 15) | 0), n5) >= 20) || (this.maps.getBGCode$2(((n4 + 15) | 0), ((n5 + 31) | 0)) >= 20))) {
(n4 = ((((Math.imul(J.div(((n4 + 15) | 0), 32), 32) + 32) | 0) - 15) | 0));
}
if ((n4 <= ((this.co_j.x + petObject.position) | 0))) {
(n4 = ((this.co_j.x + petObject.position) | 0));
(petObject.move_wc = ((30 + Math.imul(n2, 5)) | 0));
(petObject.vx = 0);
}
}
else {
if (((this.maps.getBGCode$2(((n4 + 15) | 0), n5) >= 20) || (this.maps.getBGCode$2(((n4 + 15) | 0), ((n5 + 31) | 0)) >= 20))) {
(n4 = ((Math.imul(J.div(((n4 + 15) | 0), 32), 32) - 16) | 0));
}
if ((n4 >= ((this.co_j.x + petObject.position) | 0))) {
(n4 = ((this.co_j.x + petObject.position) | 0));
(petObject.move_wc = ((30 + Math.imul(n2, 5)) | 0));
(petObject.vx = 0);
}
}
}
if ((this.maps.getBGCode$2(((n4 + 15) | 0), ((n5 + 32) | 0)) < 20)) {
(petObject.c = 1100);
(petObject.vy = 0);
(petObject.meirei = 0);
(petObject.muki = ((petObject.vx < 0) ? 0 : ((petObject.vx > 0) ? 1 : 1)));
}
if ((petObject.pp <= 0)) {
(petObject.meirei = 10);
if (!this.gym_f) {
this.km.init1$1(13);
this.km.addItem$2(13, petObject.name);
this.km.addItem$2(13, (petObject.boku + "、もう疲れた。"));
this.km.activeNigyouTime$5(13, 300, 12, 144, Color.cyan);
}
}
if ((petObject.vx == 0)) {
(petObject.pt = petObject.spt[0]);
(petObject.pth = 1);
}
else {
if ((petObject.vx <= 0)) {
(petObject.pt = petObject.spt[((1 + this.g_ac) | 0)]);
(petObject.pth = 0);
}
else {
(petObject.pt = petObject.spt[((1 + this.g_ac) | 0)]);
(petObject.pth = 1);
}
}
if ((petObject.meirei <= 0)) {
break;
}
this.pWazaC$4(petObject, n4, n5, n2);
break;
}
case 1100:
{
var s = 0;
var s2 = 0;
if ((petObject.meirei == 10)) {
(petObject.c = 210);
(petObject.vy = (-(175) | 0));
}
(n4 = ((n4 + J.div(petObject.vx, 10)) | 0));
if ((petObject.vx < 0)) {
if (((this.maps.getBGCode$2(((n4 + 15) | 0), n5) >= 20) || (this.maps.getBGCode$2(((n4 + 15) | 0), ((n5 + 31) | 0)) >= 20))) {
(n4 = ((((Math.imul(J.div(((n4 + 15) | 0), 32), 32) + 32) | 0) - 15) | 0));
}
}
else {
if (((this.maps.getBGCode$2(((n4 + 15) | 0), n5) >= 20) || (this.maps.getBGCode$2(((n4 + 15) | 0), ((n5 + 31) | 0)) >= 20))) {
(n4 = ((Math.imul(J.div(((n4 + 15) | 0), 32), 32) - 16) | 0));
}
}
(petObject.vy = ((petObject.vy + 25) | 0));
if ((petObject.vy > 180)) {
(petObject.vy = 180);
}
(n5 = ((n5 + J.div(petObject.vy, 10)) | 0));
if ((petObject.vy < 0)) {
if ((this.maps.getBGCode$2(((n4 + 15) | 0), n5) >= 20)) {
(n5 = ((Math.imul(J.div(n5, 32), 32) + 32) | 0));
(petObject.vy = 0);
}
if ((J.div(petObject.y, 32) > J.div(n5, 32))) {
if ((petObject.vx > 0)) {
(s2 = J.short(this.maps.map_bg[J.div(((n4 + 16) | 0), 32)][J.div(this.co_p[n2].y, 32)]));
(s = J.short(this.maps.map_bg[J.div(((n4 + 16) | 0), 32)][J.div(n5, 32)]));
if (((s2 <= 9) && (s >= 20))) {
(n5 = ((Math.imul(J.div(n5, 32), 32) + 32) | 0));
(petObject.vy = 0);
}
}
if ((petObject.vx < 0)) {
(s2 = J.short(this.maps.map_bg[J.div(((n4 + 14) | 0), 32)][J.div(this.co_p[n2].y, 32)]));
(s = J.short(this.maps.map_bg[J.div(((n4 + 14) | 0), 32)][J.div(n5, 32)]));
if (((s2 <= 9) && (s >= 20))) {
(n5 = ((Math.imul(J.div(n5, 32), 32) + 32) | 0));
(petObject.vy = 0);
}
}
}
}
else {
if ((petObject.vy > 0)) {
if ((this.maps.getBGCode$2(((n4 + 15) | 0), ((n5 + 31) | 0)) >= 20)) {
(n5 = ((Math.imul(J.div(((n5 + 31) | 0), 32), 32) - 32) | 0));
(petObject.vx = 0);
(petObject.c = 1000);
(petObject.muki = 1);
(petObject.move_wc = 30);
}
if ((J.div(((petObject.y + 31) | 0), 32) < J.div(((n5 + 31) | 0), 32))) {
if ((petObject.vx > 0)) {
(s2 = J.short(this.maps.map_bg[J.div(((n4 + 16) | 0), 32)][J.div(((petObject.y + 31) | 0), 32)]));
(s = J.short(this.maps.map_bg[J.div(((n4 + 16) | 0), 32)][J.div(((n5 + 31) | 0), 32)]));
if (((s2 <= 9) && (s >= 20))) {
(n5 = ((Math.imul(J.div(((n5 + 31) | 0), 32), 32) - 32) | 0));
(petObject.vy = 0);
(petObject.vx = 0);
(petObject.c = 1000);
(petObject.muki = 1);
(petObject.move_wc = 30);
J.inc(()=>n4, v=>n4=v, 1, false, "int");
}
}
if ((petObject.vx < 0)) {
(s2 = J.short(this.maps.map_bg[J.div(((n4 + 14) | 0), 32)][J.div(((petObject.y + 31) | 0), 32)]));
(s = J.short(this.maps.map_bg[J.div(((n4 + 14) | 0), 32)][J.div(((n5 + 31) | 0), 32)]));
if (((s2 <= 9) && (s >= 20))) {
(n5 = ((Math.imul(J.div(((n5 + 31) | 0), 32), 32) - 32) | 0));
(petObject.vy = 0);
(petObject.vx = 0);
(petObject.c = 1000);
(petObject.muki = 1);
(petObject.move_wc = 30);
J.inc(()=>n4, v=>n4=v, -1, false, "int");
}
}
}
}
}
if ((n5 >= this.ochiru_y)) {
(petObject.shurui = 0);
(petObject.c = 0);
}
(petObject.pt = ((petObject.shurui == 1100) ? ((petObject.vx == 0) ? ((petObject.c == 1000) ? 140 : ((petObject.vy <= 50) ? 143 : 140)) : 141) : ((petObject.shurui == 1400) ? ((petObject.vx == 0) ? 170 : 173) : petObject.spt[1])));
(petObject.pth = petObject.muki);
break;
}
case 1150:
{
(petObject.attack_f = true);
if (((this.maps.getBGCode$2((((n4 = ((n4 + J.div(petObject.vx, 10)) | 0)) + 15) | 0), n5) >= 20) || (this.maps.getBGCode$2(((n4 + 15) | 0), ((n5 + 31) | 0)) >= 20))) {
(n4 = ((Math.imul(J.div(((n4 + 15) | 0), 32), 32) - 16) | 0));
(petObject.vx = 0);
}
(petObject.vy = ((petObject.vy + 25) | 0));
if ((petObject.vy > 180)) {
(petObject.vy = 180);
}
(n5 = ((n5 + J.div(petObject.vy, 10)) | 0));
if ((petObject.vy < 0)) {
if ((this.maps.getBGCode$2(((n4 + 15) | 0), n5) >= 20)) {
(n5 = ((Math.imul(J.div(n5, 32), 32) + 32) | 0));
(petObject.vy = 0);
}
}
else {
if (((petObject.vy > 0) && (this.maps.getBGCode$2(((n4 + 15) | 0), ((n5 + 31) | 0)) >= 20))) {
(n5 = ((Math.imul(J.div(((n5 + 31) | 0), 32), 32) - 32) | 0));
(petObject.vx = 0);
(petObject.c = 1000);
(petObject.move_wc = 30);
}
}
if ((n5 >= this.ochiru_y)) {
(petObject.shurui = 0);
(petObject.c = 0);
}
(petObject.pt = (((petObject.shurui == 2400) || (petObject.shurui == 2700)) ? petObject.spt[1] : 163));
(petObject.pth = petObject.muki);
break;
}
case 1200:
{
(petObject.vy = ((petObject.vy + 25) | 0));
if ((petObject.vy > 180)) {
(petObject.vy = 180);
}
(n5 = ((n5 + J.div(petObject.vy, 10)) | 0));
if ((petObject.vy == 0)) {
this.mSet$6(n4, n5, 100, 17, 6, 0);
petObject.delPP$1(3);
}
if ((petObject.vy < 0)) {
if ((this.maps.getBGCode$2(((n4 + 15) | 0), n5) >= 20)) {
(n5 = ((Math.imul(J.div(n5, 32), 32) + 32) | 0));
(petObject.vy = 0);
this.mSet$6(n4, n5, 100, 17, 6, 0);
petObject.delPP$1(3);
}
}
else {
if (((petObject.vy > 0) && (this.maps.getBGCode$2(((n4 + 15) | 0), ((n5 + 31) | 0)) >= 20))) {
(n5 = ((Math.imul(J.div(((n5 + 31) | 0), 32), 32) - 32) | 0));
(petObject.vx = 0);
(petObject.c = 1000);
(petObject.move_wc = 30);
}
}
if ((n5 >= this.ochiru_y)) {
(petObject.shurui = 0);
(petObject.c = 0);
}
if ((petObject.shurui == 1100)) {
(petObject.pt = ((petObject.vy < 0) ? 143 : 141));
}
(petObject.pth = petObject.muki);
break;
}
case 1300:
{
(petObject.attack_f = true);
(n4 = ((n4 + J.div(petObject.vx, 10)) | 0));
if ((petObject.vx < 0)) {
if (((this.maps.getBGCode$2(((n4 + 15) | 0), n5) >= 20) || (this.maps.getBGCode$2(((n4 + 15) | 0), ((n5 + 31) | 0)) >= 20))) {
(n4 = ((((Math.imul(J.div(((n4 + 15) | 0), 32), 32) + 32) | 0) - 15) | 0));
(petObject.c = 1100);
}
}
else {
if (((this.maps.getBGCode$2(((n4 + 15) | 0), n5) >= 20) || (this.maps.getBGCode$2(((n4 + 15) | 0), ((n5 + 31) | 0)) >= 20))) {
(n4 = ((Math.imul(J.div(((n4 + 15) | 0), 32), 32) - 16) | 0));
(petObject.c = 1100);
}
}
(n5 = ((n5 + J.div(petObject.vy, 10)) | 0));
if ((petObject.vy < 0)) {
if ((this.maps.getBGCode$2(((n4 + 15) | 0), n5) >= 20)) {
(n5 = ((Math.imul(J.div(n5, 32), 32) + 32) | 0));
(petObject.vy = 0);
}
}
else {
if (((petObject.vy > 0) && (this.maps.getBGCode$2(((n4 + 15) | 0), ((n5 + 31) | 0)) >= 20))) {
(n5 = ((Math.imul(J.div(((n5 + 31) | 0), 32), 32) - 32) | 0));
(petObject.c = 1000);
(petObject.move_wc = 35);
}
}
J.inc(()=>petObject.c1, v=>petObject.c1=v, -1, false, "int");
if ((petObject.c1 <= 0)) {
(petObject.c = 1100);
}
if (((petObject.c == 1100) && (this.maps.getBGCode$2(((n4 + 15) | 0), ((n5 + 32) | 0)) >= 20))) {
(petObject.c = 1000);
(petObject.vx = 0);
(petObject.move_wc = 30);
}
if ((n5 >= this.ochiru_y)) {
(petObject.shurui = 0);
(petObject.c = 0);
}
(petObject.pth = petObject.muki);
if ((petObject.shurui == 1400)) {
(petObject.pt = 173);
break;
}
if ((petObject.shurui == 2100)) {
(petObject.pt = 193);
break;
}
if ((petObject.shurui == 2800)) {
(petObject.pt = 243);
break;
}
(petObject.pt = petObject.spt[1]);
break;
}
case 1350:
{
(petObject.attack_f = true);
(n4 = ((n4 + J.div(petObject.vx, 10)) | 0));
if ((petObject.vx < 0)) {
if (((this.maps.getBGCode$2(((n4 + 15) | 0), n5) >= 20) || (this.maps.getBGCode$2(((n4 + 15) | 0), ((n5 + 31) | 0)) >= 20))) {
(n4 = ((((Math.imul(J.div(((n4 + 15) | 0), 32), 32) + 32) | 0) - 15) | 0));
(petObject.c = 1100);
(petObject.muki = 1);
}
}
else {
if (((this.maps.getBGCode$2(((n4 + 15) | 0), n5) >= 20) || (this.maps.getBGCode$2(((n4 + 15) | 0), ((n5 + 31) | 0)) >= 20))) {
(n4 = ((Math.imul(J.div(((n4 + 15) | 0), 32), 32) - 16) | 0));
(petObject.c = 1100);
(petObject.muki = 1);
}
}
(n5 = ((n5 + J.div(petObject.vy, 10)) | 0));
if ((petObject.vy < 0)) {
if ((this.maps.getBGCode$2(((n4 + 15) | 0), n5) >= 20)) {
(n5 = ((Math.imul(J.div(n5, 32), 32) + 32) | 0));
(petObject.vy = 0);
}
}
else {
if (((petObject.vy > 0) && (this.maps.getBGCode$2(((n4 + 15) | 0), ((n5 + 31) | 0)) >= 20))) {
(n5 = ((Math.imul(J.div(((n5 + 31) | 0), 32), 32) - 32) | 0));
(petObject.c = 1000);
(petObject.move_wc = 35);
}
}
J.inc(()=>petObject.c1, v=>petObject.c1=v, -1, false, "int");
if ((petObject.c1 <= 0)) {
(petObject.c = 1100);
(petObject.muki = 1);
}
if (((petObject.c == 1100) && (this.maps.getBGCode$2(((n4 + 15) | 0), ((n5 + 32) | 0)) >= 20))) {
(petObject.c = 1000);
(petObject.vx = 0);
(petObject.move_wc = 30);
}
if ((n5 >= this.ochiru_y)) {
(petObject.shurui = 0);
(petObject.c = 0);
}
(petObject.pt = 193);
(petObject.pth = petObject.muki);
break;
}
case 1400:
{
J.inc(()=>petObject.c1, v=>petObject.c1=v, -1, false, "int");
if ((petObject.c1 <= 0)) {
(petObject.c = 1000);
(petObject.move_wc = 25);
}
if ((((petObject.c1 == 10) && (petObject.shurui == 1200)) && (petObject.c2 == 1))) {
var d = Math.cos(0.3141592653589793);
var d2 = Math.sin(0.3141592653589793);
this.mSet$6(n4, n5, 200, J.i((d * 16.0)), J.i((-d2 * 16.0)), 0);
(d = Math.cos(0.9424777960769379));
(d2 = Math.sin(0.9424777960769379));
this.mSet$6(n4, n5, 200, J.i((d * 16.0)), J.i((-d2 * 16.0)), 0);
}
if ((petObject.shurui == 1200)) {
(petObject.pt = 152);
}
(petObject.pth = petObject.muki);
break;
}
case 1410:
{
J.inc(()=>petObject.c1, v=>petObject.c1=v, -1, false, "int");
if ((petObject.c1 <= 0)) {
(petObject.c = 1000);
(petObject.move_wc = 25);
}
(petObject.pt = 180);
(petObject.pth = petObject.muki);
break;
}
case 1420:
{
J.inc(()=>petObject.c1, v=>petObject.c1=v, -1, false, "int");
if ((petObject.c1 <= 0)) {
(petObject.c = 1000);
(petObject.move_wc = 25);
if ((petObject.shurui == 2200)) {
(petObject.c = 2000);
(petObject.move_wc = 10);
}
}
if ((petObject.shurui == 2200)) {
(petObject.pt = ((this.g_c3 < 6) ? petObject.spt[0] : petObject.spt[2]));
(petObject.pth = 0);
break;
}
(petObject.pt = 172);
(petObject.pth = petObject.muki);
break;
}
case 1425:
{
J.inc(()=>petObject.c1, v=>petObject.c1=v, -1, false, "int");
if ((petObject.c1 <= 0)) {
(petObject.c = 1000);
(petObject.move_wc = 25);
}
(petObject.pt = 243);
(petObject.pth = petObject.muki);
break;
}
case 1426:
{
J.inc(()=>petObject.c1, v=>petObject.c1=v, -1, false, "int");
if ((petObject.c1 <= 0)) {
(petObject.c = 1000);
(petObject.move_wc = 25);
}
(petObject.pt = 243);
(petObject.pth = petObject.muki);
break;
}
case 1430:
{
if ((J.rem(petObject.c1, 3) == 0)) {
this.mSet$6(n4, n5, 700, ((Math.imul(this.ranInt$1(31), 10) - 150) | 0), (-(240) | 0), 0);
}
J.inc(()=>petObject.c1, v=>petObject.c1=v, 1, false, "int");
if ((petObject.c1 >= 36)) {
(petObject.c = 1000);
(petObject.move_wc = 25);
}
(petObject.pt = 169);
(petObject.pth = petObject.muki);
break;
}
case 1440:
{
if ((J.rem(petObject.c1, 3) == 0)) {
this.mSet$6(n4, n5, 750, ((Math.imul(this.ranInt$1(31), 10) - 150) | 0), n2, 1);
}
J.inc(()=>petObject.c1, v=>petObject.c1=v, 1, false, "int");
if ((petObject.c1 >= 36)) {
(petObject.c = 1000);
(petObject.move_wc = 25);
}
(petObject.pt = 168);
(petObject.pth = petObject.muki);
break;
}
case 1450:
{
J.inc(()=>petObject.c1, v=>petObject.c1=v, 1, false, "int");
if ((((petObject.c1 == 1) || (petObject.c1 == 4)) || (petObject.c1 == 7))) {
this.mSet$6(n4, n5, 610, 100, 0, 0);
}
if ((petObject.c1 >= 8)) {
(petObject.c = 1000);
(petObject.move_wc = 25);
}
(petObject.pt = petObject.spt[0]);
(petObject.pth = petObject.muki);
break;
}
case 1455:
{
J.inc(()=>petObject.c1, v=>petObject.c1=v, 1, false, "int");
if (((((petObject.c1 == 1) || (petObject.c1 == 4)) || (petObject.c1 == 7)) || (petObject.c1 == 10))) {
this.mSet$6(((((n4 + Math.imul(this.ranInt$1(6), 32)) | 0) + 32) | 0), ((this.maps.wy - 32) | 0), 800, 0, 0, 0);
}
if ((petObject.c1 >= 11)) {
(petObject.c = 1000);
(petObject.move_wc = 25);
}
(petObject.pt = petObject.spt[0]);
(petObject.pth = petObject.muki);
break;
}
case 1460:
{
J.inc(()=>petObject.c1, v=>petObject.c1=v, -1, false, "int");
if ((petObject.c1 <= 0)) {
(petObject.c = 1000);
(petObject.move_wc = 25);
}
(petObject.pt = petObject.spt[1]);
(petObject.pth = petObject.muki);
break;
}
case 1470:
{
J.inc(()=>petObject.c1, v=>petObject.c1=v, 1, false, "int");
if (((((petObject.c1 == 1) || (petObject.c1 == 5)) || (petObject.c1 == 9)) || (petObject.c1 == 13))) {
this.mSet$6(n4, n5, 500, ((this.ranInt$1(71) + 40) | 0), (-(225) | 0), 0);
}
if ((petObject.c1 >= 16)) {
(petObject.c = 1000);
(petObject.move_wc = 25);
}
(petObject.pt = 172);
(petObject.pth = petObject.muki);
break;
}
case 1480:
{
J.inc(()=>petObject.c1, v=>petObject.c1=v, 1, false, "int");
if ((petObject.c1 >= 41)) {
(petObject.c = 1000);
(petObject.move_wc = 25);
}
if ((petObject.c1 < 23)) {
(petObject.pt = petObject.spt[0]);
(petObject.pth = petObject.muki);
}
else {
(petObject.pt = petObject.spt[2]);
(petObject.pth = petObject.muki);
}
(petObject.pth = petObject.muki);
break;
}
case 1485:
{
J.inc(()=>petObject.c1, v=>petObject.c1=v, 1, false, "int");
if ((petObject.c1 >= 15)) {
(petObject.c = 1000);
(petObject.move_wc = 25);
}
if ((petObject.c1 < 7)) {
(petObject.pt = petObject.spt[2]);
(petObject.pth = petObject.muki);
}
else {
(petObject.pt = petObject.spt[1]);
(petObject.pth = petObject.muki);
}
(petObject.pth = petObject.muki);
break;
}
case 1490:
{
J.inc(()=>petObject.c1, v=>petObject.c1=v, 1, false, "int");
if ((petObject.c1 >= 12)) {
petObject.addHP$1(50);
(petObject.c = 1000);
(petObject.move_wc = 25);
if ((petObject.type == 1)) {
(petObject.c = 2000);
}
}
(petObject.pt = petObject.spt[0]);
(petObject.pth = petObject.muki);
break;
}
case 1500:
{
J.inc(()=>petObject.c1, v=>petObject.c1=v, -1, false, "int");
if ((petObject.c1 <= 0)) {
(petObject.hp = 0);
(petObject.c = 210);
(petObject.vy = (-(25) | 0));
(petObject.move_wc = 25);
}
if ((petObject.shurui == 1600)) {
(petObject.pt = 159);
}
(petObject.pth = petObject.muki);
break;
}
case 1900:
{
(petObject.vx = ((n4 > ((this.co_j.x + petObject.position) | 0)) ? (-(petObject.speed) | 0) : ((n4 < ((this.co_j.x + petObject.position) | 0)) ? petObject.speed : 0)));
(n4 = ((n4 + J.div(petObject.vx, 10)) | 0));
if ((petObject.vx < 0)) {
if ((n4 <= ((this.co_j.x + petObject.position) | 0))) {
(n4 = ((this.co_j.x + petObject.position) | 0));
(petObject.vx = 0);
}
}
else {
if (((petObject.vx > 0) && (n4 >= ((this.co_j.x + petObject.position) | 0)))) {
(n4 = ((this.co_j.x + petObject.position) | 0));
(petObject.vx = 0);
}
}
if ((petObject.vx == 0)) {
(petObject.pt = petObject.spt[0]);
(petObject.pth = 1);
(petObject.move_wc = 30);
(petObject.c = 1000);
break;
}
if ((petObject.vx <= 0)) {
(petObject.pt = petObject.spt[((1 + this.g_ac) | 0)]);
(petObject.pth = 0);
break;
}
(petObject.pt = petObject.spt[((1 + this.g_ac) | 0)]);
(petObject.pth = 1);
break;
}
case 2000:
{
if ((petObject.move_wc > 0)) {
(petObject.move_wc = ((petObject.speed > 0) ? J.inc(()=>petObject.move_wc, v=>petObject.move_wc=v, -1, false, "int") : 10));
if ((n4 == ((this.co_j.x + petObject.position) | 0))) {
(petObject.vx = 0);
(petObject.move_wc = ((30 + Math.imul(n2, 8)) | 0));
}
if ((petObject.move_wc <= 0)) {
if ((n4 > ((this.co_j.x + petObject.position) | 0))) {
(petObject.vx = (-(petObject.speed) | 0));
}
else {
if ((n4 < ((this.co_j.x + petObject.position) | 0))) {
(petObject.vx = petObject.speed);
}
else {
(petObject.vx = 0);
(petObject.move_wc = ((30 + Math.imul(n2, 5)) | 0));
}
}
}
}
else {
(n4 = ((n4 + J.div(petObject.vx, 10)) | 0));
if ((petObject.vx < 0)) {
if (((this.maps.getBGCode$2(((n4 + 15) | 0), n5) >= 20) || (this.maps.getBGCode$2(((n4 + 15) | 0), ((n5 + 31) | 0)) >= 20))) {
(n4 = ((((Math.imul(J.div(((n4 + 15) | 0), 32), 32) + 32) | 0) - 15) | 0));
}
if ((n4 <= ((this.co_j.x + petObject.position) | 0))) {
(n4 = ((this.co_j.x + petObject.position) | 0));
(petObject.move_wc = ((30 + Math.imul(n2, 5)) | 0));
(petObject.vx = 0);
}
}
else {
if (((this.maps.getBGCode$2(((n4 + 15) | 0), n5) >= 20) || (this.maps.getBGCode$2(((n4 + 15) | 0), ((n5 + 31) | 0)) >= 20))) {
(n4 = ((Math.imul(J.div(((n4 + 15) | 0), 32), 32) - 16) | 0));
}
if ((n4 >= ((this.co_j.x + petObject.position) | 0))) {
(n4 = ((this.co_j.x + petObject.position) | 0));
(petObject.move_wc = ((30 + Math.imul(n2, 5)) | 0));
(petObject.vx = 0);
}
}
}
if ((petObject.c == 2000)) {
if ((J.abs(((((this.co_j.y - 96) | 0) - n5) | 0)) <= 2)) {
(n5 = ((this.co_j.y - 96) | 0));
(petObject.vy = 0);
}
else {
(petObject.vy = ((((this.co_j.y - 96) | 0) < n5) ? (-(30) | 0) : ((((this.co_j.y - 96) | 0) > n5) ? 30 : 0)));
}
}
(n5 = ((n5 + J.div(petObject.vy, 10)) | 0));
if ((petObject.vy < 0)) {
if ((this.maps.getBGCode$2(((n4 + 15) | 0), n5) >= 20)) {
(n5 = ((Math.imul(J.div(n5, 32), 32) + 32) | 0));
(petObject.vy = 0);
}
}
else {
if (((petObject.vy > 0) && (this.maps.getBGCode$2(((n4 + 15) | 0), ((n5 + 31) | 0)) >= 20))) {
(n5 = ((Math.imul(J.div(((n5 + 31) | 0), 32), 32) - 32) | 0));
(petObject.vy = 0);
}
}
if ((petObject.pp <= 0)) {
(petObject.meirei = 10);
if (!this.gym_f) {
this.km.init1$1(13);
this.km.addItem$2(13, petObject.name);
this.km.addItem$2(13, (petObject.boku + "、もう疲れた。"));
this.km.activeNigyouTime$5(13, 300, 12, 144, Color.cyan);
}
}
if ((petObject.shurui == 2200)) {
(petObject.pt = ((this.g_c3 < 6) ? petObject.spt[0] : 157));
(petObject.pth = 0);
}
else {
if ((petObject.shurui == 1600)) {
(petObject.pt = petObject.spt[0]);
(petObject.pth = 0);
}
else {
if ((petObject.shurui == 2800)) {
if ((petObject.vx == 0)) {
(petObject.pt = petObject.spt[0]);
(petObject.pth = 1);
}
else {
if ((petObject.vx < 0)) {
(petObject.pt = petObject.spt[((1 + this.g_ac) | 0)]);
(petObject.pth = 0);
}
else {
(petObject.pt = petObject.spt[((1 + this.g_ac) | 0)]);
(petObject.pth = 1);
}
}
}
else {
if ((petObject.vx < 0)) {
(petObject.pt = petObject.spt[((1 + this.g_ac) | 0)]);
(petObject.pth = 0);
}
else {
(petObject.pt = petObject.spt[((1 + this.g_ac) | 0)]);
(petObject.pth = 1);
}
}
}
}
if ((petObject.meirei <= 0)) {
break;
}
var n6 = petObject.meirei;
if ((((((((n6 == 110) || (n6 == 30)) || (n6 == 100)) || (n6 == 160)) || (n6 == 210)) || (n6 == 270)) || (n6 == 280))) {
(n5 = petObject.y);
}
this.pWazaK$4(petObject, n4, n5, n2);
break;
}
case 2100:
{
if ((petObject.meirei == 10)) {
(petObject.c = 210);
(petObject.vy = (-(175) | 0));
}
(petObject.vy = ((petObject.vy + 25) | 0));
if ((petObject.vy > 180)) {
(petObject.vy = 180);
}
(n5 = ((n5 + J.div(petObject.vy, 10)) | 0));
if ((petObject.vy < 0)) {
if ((this.maps.getBGCode$2(((n4 + 15) | 0), n5) >= 20)) {
(n5 = ((Math.imul(J.div(n5, 32), 32) + 32) | 0));
(petObject.c = 2000);
(petObject.move_wc = 40);
}
}
else {
if ((petObject.vy >= 0)) {
(petObject.c = 2000);
(petObject.move_wc = 45);
}
}
(petObject.pt = petObject.spt[2]);
(petObject.pth = 1);
break;
}
case 2300:
{
(petObject.attack_f = true);
(n4 = ((n4 + J.div(petObject.vx, 10)) | 0));
if ((petObject.vx < 0)) {
if (((this.maps.getBGCode$2(((n4 + 15) | 0), n5) >= 20) || (this.maps.getBGCode$2(((n4 + 15) | 0), ((n5 + 31) | 0)) >= 20))) {
(n4 = ((((Math.imul(J.div(((n4 + 15) | 0), 32), 32) + 32) | 0) - 15) | 0));
(petObject.c = 2000);
(petObject.vx = 0);
(petObject.move_wc = 10);
}
}
else {
if (((this.maps.getBGCode$2(((n4 + 15) | 0), n5) >= 20) || (this.maps.getBGCode$2(((n4 + 15) | 0), ((n5 + 31) | 0)) >= 20))) {
(n4 = ((Math.imul(J.div(((n4 + 15) | 0), 32), 32) - 16) | 0));
(petObject.c = 2000);
(petObject.vx = 0);
(petObject.move_wc = 10);
}
}
(n5 = ((n5 + J.div(petObject.vy, 10)) | 0));
if ((petObject.vy < 0)) {
if ((this.maps.getBGCode$2(((n4 + 15) | 0), n5) >= 20)) {
(n5 = ((Math.imul(J.div(n5, 32), 32) + 32) | 0));
(petObject.c = 2000);
(petObject.vx = 0);
(petObject.move_wc = 10);
}
}
else {
if (((petObject.vy > 0) && (this.maps.getBGCode$2(((n4 + 15) | 0), ((n5 + 31) | 0)) >= 20))) {
(n5 = ((Math.imul(J.div(((n5 + 31) | 0), 32), 32) - 32) | 0));
(petObject.c = 2000);
(petObject.vx = 0);
(petObject.move_wc = 10);
}
}
J.inc(()=>petObject.c1, v=>petObject.c1=v, -1, false, "int");
if ((petObject.c1 <= 0)) {
(petObject.c = 2000);
(petObject.vx = 0);
(petObject.move_wc = 10);
if ((petObject.shurui == 2800)) {
(petObject.move_wc = 14);
}
}
if ((n5 >= ((this.ochiru_y - 16) | 0))) {
(petObject.c = 2000);
(petObject.vx = 0);
(petObject.move_wc = 10);
}
if ((n5 >= this.ochiru_y)) {
(petObject.shurui = 0);
(petObject.c = 0);
}
if (((petObject.c == 2000) && (petObject.vy > 0))) {
(petObject.move_wc = 35);
}
if (((petObject.shurui == 1600) || (petObject.shurui == 1600))) {
(petObject.pt = petObject.spt[0]);
(petObject.pth = 0);
break;
}
if ((petObject.shurui == 2800)) {
(petObject.pt = 243);
(petObject.pth = petObject.muki);
break;
}
(petObject.pt = petObject.spt[1]);
(petObject.pth = petObject.muki);
break;
}
case 2410:
{
J.inc(()=>petObject.c1, v=>petObject.c1=v, -1, false, "int");
if ((petObject.c1 <= 0)) {
(petObject.c = 2000);
(petObject.move_wc = 14);
}
if ((petObject.shurui == 2800)) {
(petObject.pt = 243);
(petObject.pth = 1);
break;
}
(petObject.pt = petObject.spt[((1 + this.g_ac) | 0)]);
(petObject.pth = petObject.muki);
break;
}
case 2420:
{
(n4 = ((n4 + J.div(petObject.vx, 10)) | 0));
J.inc(()=>petObject.c1, v=>petObject.c1=v, 1, false, "int");
if ((petObject.c1 >= 32)) {
(petObject.c = 2000);
(petObject.move_wc = 30);
}
if (((petObject.vx > 0) && ((this.maps.getBGCode$2(((n4 + 15) | 0), n5) >= 20) || (this.maps.getBGCode$2(((n4 + 15) | 0), ((n5 + 31) | 0)) >= 20)))) {
(n4 = ((Math.imul(J.div(((n4 + 15) | 0), 32), 32) - 16) | 0));
(petObject.c = 2000);
(petObject.vx = 0);
(petObject.move_wc = 30);
}
if ((((((petObject.c1 == 2) || (petObject.c1 == 7)) || (petObject.c1 == 12)) || (petObject.c1 == 17)) || (petObject.c1 == 22))) {
this.mSet$6(n4, ((n5 + 20) | 0), 550, petObject.vx, (-(5) | 0), 0);
}
(petObject.pt = petObject.spt[0]);
(petObject.pth = petObject.muki);
break;
}
case 2430:
{
J.inc(()=>petObject.c1, v=>petObject.c1=v, 1, false, "int");
if (((((petObject.c1 == 1) || (petObject.c1 == 5)) || (petObject.c1 == 9)) || (petObject.c1 == 13))) {
this.mSet$6(n4, n5, 500, ((this.ranInt$1(61) + 40) | 0), (-(200) | 0), 0);
}
if ((petObject.c1 >= 16)) {
(petObject.c = 2000);
(petObject.move_wc = 25);
}
(petObject.pt = 157);
(petObject.pth = 0);
break;
}
case 2440:
{
J.inc(()=>petObject.c1, v=>petObject.c1=v, 1, false, "int");
if ((petObject.c1 >= 24)) {
(petObject.c = 2000);
(petObject.move_wc = 10);
}
(petObject.pt = petObject.spt[0]);
(petObject.pth = petObject.muki);
break;
}
case 2450:
{
J.inc(()=>petObject.c1, v=>petObject.c1=v, -1, false, "int");
if ((petObject.c1 <= 0)) {
(petObject.c = 2000);
(petObject.move_wc = 10);
}
(petObject.pt = petObject.spt[0]);
(petObject.pth = petObject.muki);
break;
}
case 2900:
{
if ((petObject.move_wc > 0)) {
J.inc(()=>petObject.move_wc, v=>petObject.move_wc=v, -1, false, "int");
}
if ((petObject.move_wc <= 0)) {
(petObject.vx = ((n4 > ((this.co_j.x + petObject.position) | 0)) ? (-(petObject.speed) | 0) : ((n4 < ((this.co_j.x + petObject.position) | 0)) ? petObject.speed : 0)));
(n4 = ((n4 + J.div(petObject.vx, 10)) | 0));
if ((petObject.vx < 0)) {
if ((n4 <= ((this.co_j.x + petObject.position) | 0))) {
(n4 = ((this.co_j.x + petObject.position) | 0));
(petObject.vx = 0);
}
}
else {
if ((n4 >= ((this.co_j.x + petObject.position) | 0))) {
(n4 = ((this.co_j.x + petObject.position) | 0));
(petObject.vx = 0);
}
}
}
else {
(petObject.vx = 0);
}
if (((petObject.vx == 0) && (petObject.move_wc <= 0))) {
(petObject.move_wc = 30);
(petObject.c = 2000);
}
if ((J.abs(((((this.co_j.y - 96) | 0) - n5) | 0)) <= 2)) {
(n5 = ((this.co_j.y - 96) | 0));
(petObject.vy = 0);
}
else {
(petObject.vy = ((((this.co_j.y - 96) | 0) < n5) ? (-(30) | 0) : ((((this.co_j.y - 96) | 0) > n5) ? 30 : 0)));
}
(n5 = ((n5 + J.div(petObject.vy, 10)) | 0));
if ((petObject.shurui == 2200)) {
(petObject.pt = ((this.g_c3 < 6) ? petObject.spt[0] : 157));
(petObject.pth = 0);
break;
}
if ((petObject.shurui == 1600)) {
(petObject.pt = petObject.spt[0]);
(petObject.pth = 0);
break;
}
if ((petObject.shurui == 2800)) {
if ((petObject.vx == 0)) {
(petObject.pt = petObject.spt[0]);
(petObject.pth = 1);
break;
}
if ((petObject.vx < 0)) {
(petObject.pt = petObject.spt[((1 + this.g_ac) | 0)]);
(petObject.pth = 0);
break;
}
(petObject.pt = petObject.spt[((1 + this.g_ac) | 0)]);
(petObject.pth = 1);
break;
}
if ((petObject.vx < 0)) {
(petObject.pt = petObject.spt[((1 + this.g_ac) | 0)]);
(petObject.pth = 0);
break;
}
(petObject.pt = petObject.spt[((1 + this.g_ac) | 0)]);
(petObject.pth = 1);
}
}
if (petObject.attack_f) {
(n3 = 0);
while ((n3 <= this.w_kazu)) {
if ((this.co_w[n3].ss >= 1)) {
(wildObject = this.co_w[n3]);
if ((((wildObject.c >= 1100) && (J.abs(((n4 - wildObject.x) | 0)) < 28)) && (J.abs(((n5 - wildObject.y) | 0)) < ((28 + wildObject.ms) | 0)))) {
(petObject.attack_f = false);
(wildObject.hp = ((petObject.c == 1150) ? ((petObject.shurui == 2700) ? (wildObject.hp = ((wildObject.hp - 60) | 0)) : (wildObject.hp = ((wildObject.hp - 40) | 0))) : ((petObject.c == 1350) ? (wildObject.hp = ((wildObject.hp - 50) | 0)) : ((petObject.shurui == 2800) ? (wildObject.hp = ((wildObject.hp - this.pichika_waza1_ap) | 0)) : (wildObject.hp = ((wildObject.hp - 30) | 0))))));
if ((petObject.type == 1)) {
(petObject.c = 2000);
(petObject.vx = 0);
(petObject.move_wc = 3);
if ((petObject.vy > 0)) {
(petObject.move_wc = 30);
}
}
else {
(petObject.c = 1100);
if ((petObject.shurui == 2700)) {
if ((petObject.vx < 0)) {
(petObject.vy = (-(175) | 0));
(petObject.vx = 50);
}
else {
(petObject.vx = 0);
(petObject.vy = 0);
}
}
else {
(petObject.vy = (-(175) | 0));
(petObject.vx = ((petObject.muki == 1) ? (-(50) | 0) : 50));
if ((petObject.shurui == 1800)) {
(petObject.vx = 50);
}
}
}
if ((wildObject.hp <= 0)) {
(wildObject.hp = 0);
(wildObject.c = 1000);
(wildObject.c1 = 55);
(wildObject.c3 = wildObject.c2);
(wildObject.c2 = wildObject.pt);
if (wildObject.attack_f) {
(petObject.hp = (this.gym_f ? ((wildObject.c3 == 1) ? (petObject.hp = ((petObject.hp - 50) | 0)) : ((wildObject.c3 == 2) ? (petObject.hp = ((petObject.hp - 40) | 0)) : ((wildObject.c3 == 3) ? (petObject.hp = ((petObject.hp - 60) | 0)) : ((wildObject.c3 == 4) ? (petObject.hp = ((petObject.hp - this.pichika_waza1_ap) | 0)) : (petObject.hp = ((petObject.hp - 30) | 0)))))) : ((wildObject.shurui == 2700) ? (petObject.hp = ((petObject.hp - 60) | 0)) : (petObject.hp = ((petObject.hp - 30) | 0)))));
if ((petObject.hp <= 0)) {
(petObject.hp = 0);
(petObject.c = 210);
(petObject.vy = (-(175) | 0));
if (!this.gym_f) {
this.km.init1$1(13);
this.km.addItem$2(13, petObject.name);
this.km.addItem$2(13, "えーん、痛いよー。");
this.km.activeNigyouTime$5(13, 300, 12, 144, Color.cyan);
}
}
else {
(petObject.fc = 10);
}
}
}
else {
(wildObject.fc = 10);
}
}
}
J.inc(()=>n3, v=>n3=v, 1, false, "int");
}
}
(petObject.x = n4);
(petObject.y = n5);
if ((petObject.fc > 0)) {
J.inc(()=>petObject.fc, v=>petObject.fc=v, -1, false, "int");
}
if ((((((petObject.c > 50) && (((n4 - this.maps.wx) | 0) < 512)) && (((n4 - this.maps.wx) | 0) > (-(32) | 0))) && (((n5 - this.maps.wy) | 0) < 320)) && (((n5 - this.maps.wy) | 0) > (-(32) | 0)))) {
(petObject.ss = 2);
if (((petObject.fc > 0) && (petObject.pth < 2))) {
(petObject.pth = ((petObject.pth + 2) | 0));
}
}
else {
(petObject.ss = 0);
}
}
J.inc(()=>n2, v=>n2=v, 1, false, "int");
}
}
pWazaC$4(petObject, n, n2, n3) {
if ((petObject.meirei == 10)) {
(petObject.c = 210);
(petObject.vy = (-(175) | 0));
}
else {
if ((petObject.meirei == 20)) {
(petObject.c = 1100);
(petObject.vy = (-(240) | 0));
(petObject.meirei = 0);
(petObject.muki = ((petObject.vx < 0) ? 0 : ((petObject.vx > 0) ? 1 : 1)));
}
else {
if ((petObject.meirei == 30)) {
(petObject.c = 1200);
(petObject.vy = (-(200) | 0));
(petObject.meirei = 0);
(petObject.muki = 1);
}
else {
if ((petObject.meirei == 40)) {
(petObject.c = 1300);
(petObject.vx = 120);
(petObject.vy = 0);
(petObject.c1 = 12);
(petObject.meirei = 0);
(petObject.muki = 1);
if ((petObject.shurui == 2800)) {
petObject.delPP$1(this.pichika_waza1_pp);
}
else {
petObject.delPP$1(1);
}
}
else {
if ((petObject.meirei == 50)) {
(petObject.c = 1400);
(petObject.vx = 0);
(petObject.c1 = 10);
(petObject.meirei = 0);
(petObject.c2 = 0);
var d = Math.cos(0.0);
var d2 = Math.sin(0.0);
this.mSet$6(n, n2, 200, J.i((d * 16.0)), J.i((d2 * 14.0)), 0);
(petObject.muki = 1);
petObject.delPP$1(3);
}
else {
if ((petObject.meirei == 60)) {
(petObject.c = 1400);
(petObject.vx = 0);
(petObject.c1 = 16);
(petObject.meirei = 0);
(petObject.c2 = 1);
var d = Math.cos(0.0);
var d3 = Math.sin(0.0);
this.mSet$6(n, n2, 200, J.i((d * 16.0)), J.i((-d3 * 16.0)), 0);
(d = Math.cos(0.6283185307179586));
(d3 = Math.sin(0.6283185307179586));
this.mSet$6(n, n2, 200, J.i((d * 16.0)), J.i((-d3 * 16.0)), 0);
(d = Math.cos(1.2566370614359172));
(d3 = Math.sin(1.2566370614359172));
this.mSet$6(n, n2, 200, J.i((d * 16.0)), J.i((-d3 * 16.0)), 0);
(petObject.muki = 1);
petObject.delPP$1(8);
}
else {
if ((petObject.meirei == 70)) {
this.mSet$6(((n + 68) | 0), n2, 1000, 0, 0, 0);
(petObject.c = 1100);
(petObject.vx = 0);
(petObject.vy = (-(150) | 0));
(petObject.meirei = 0);
(petObject.muki = 1);
petObject.delPP$1(8);
}
else {
if ((petObject.meirei == 90)) {
(petObject.c = 1410);
(petObject.vx = 0);
(petObject.c1 = 28);
(petObject.meirei = 0);
(petObject.c2 = 1);
this.mSet$6(n, n2, 400, 0, 0, 0);
this.mSet$6(n, n2, 400, 90, 0, 0);
this.mSet$6(n, n2, 400, 180, 0, 0);
this.mSet$6(n, n2, 400, 270, 0, 0);
this.mSet$6(n, n2, 400, 45, 0, 0);
this.mSet$6(n, n2, 400, 135, 0, 0);
this.mSet$6(n, n2, 400, 225, 0, 0);
this.mSet$6(n, n2, 400, 315, 0, 0);
(petObject.muki = 1);
petObject.delPP$1(8);
}
else {
if ((petObject.meirei == 100)) {
(petObject.c = 1420);
(petObject.vx = 0);
(petObject.c1 = 10);
(petObject.meirei = 0);
this.mSet$6(n, n2, 500, 80, (-(225) | 0), 0);
(petObject.muki = 1);
(petObject.pt = 172);
(petObject.pth = petObject.muki);
petObject.delPP$1(3);
}
else {
if ((petObject.meirei == 120)) {
(petObject.c = 1430);
(petObject.vx = 0);
(petObject.c1 = 0);
(petObject.meirei = 0);
(petObject.muki = 1);
(petObject.pt = 169);
(petObject.pth = petObject.muki);
petObject.delPP$1(8);
}
else {
if ((petObject.meirei == 130)) {
(petObject.c = 1440);
(petObject.vx = 0);
(petObject.c1 = 0);
(petObject.meirei = 0);
(petObject.muki = 1);
(petObject.pt = 169);
(petObject.pth = petObject.muki);
petObject.delPP$1(8);
}
else {
if ((petObject.meirei == 140)) {
(petObject.c = 1450);
(petObject.vx = 0);
(petObject.c1 = 0);
(petObject.meirei = 0);
(petObject.muki = 1);
(petObject.pt = petObject.spt[0]);
(petObject.pth = petObject.muki);
petObject.delPP$1(3);
}
else {
if ((petObject.meirei == 150)) {
(petObject.c = 1460);
(petObject.vx = 0);
(petObject.c1 = 5);
(petObject.meirei = 0);
var d = Math.cos(0.41887902047863906);
var d4 = Math.sin(0.41887902047863906);
this.mSet$6(n, n2, 620, J.i((d * 16.0)), J.i((-d4 * 16.0)), 0);
(d = Math.cos(0.6632251157578452));
(d4 = Math.sin(0.6632251157578452));
this.mSet$6(n, n2, 620, J.i((d * 16.0)), J.i((-d4 * 16.0)), 0);
(d = Math.cos(0.9075712110370514));
(d4 = Math.sin(0.9075712110370514));
this.mSet$6(n, n2, 620, J.i((d * 16.0)), J.i((-d4 * 16.0)), 0);
(d = Math.cos(1.1519173063162575));
(d4 = Math.sin(1.1519173063162575));
this.mSet$6(n, n2, 620, J.i((d * 16.0)), J.i((-d4 * 16.0)), 0);
(petObject.muki = 1);
(petObject.pt = petObject.spt[0]);
(petObject.pth = petObject.muki);
petObject.delPP$1(8);
}
else {
if ((petObject.meirei == 160)) {
(petObject.c = 1470);
(petObject.vx = 0);
(petObject.c1 = 0);
(petObject.meirei = 0);
(petObject.muki = 1);
(petObject.pt = petObject.spt[0]);
(petObject.pth = petObject.muki);
petObject.delPP$1(8);
}
else {
if ((petObject.meirei == 170)) {
(petObject.c = 1480);
(petObject.vx = 0);
(petObject.c1 = 0);
(petObject.meirei = 0);
this.mSet$6(n, n2, 1100, n3, 0, 0);
(petObject.muki = 1);
(petObject.pt = petObject.spt[0]);
(petObject.pth = petObject.muki);
petObject.delPP$1(8);
}
else {
if ((petObject.meirei == 180)) {
(petObject.c = 1150);
(petObject.vx = 40);
(petObject.vy = (-(225) | 0));
(petObject.meirei = 0);
if ((petObject.shurui == 2700)) {
(petObject.vx = 0);
(petObject.vy = (-(285) | 0));
}
(petObject.muki = 1);
petObject.delPP$1(3);
}
else {
if ((petObject.meirei == 190)) {
(petObject.c = 1350);
(petObject.vx = 120);
(petObject.vy = 0);
(petObject.c1 = 12);
(petObject.meirei = 0);
(petObject.muki = 1);
petObject.delPP$1(8);
}
else {
if ((petObject.meirei == 220)) {
(petObject.c = 1300);
(petObject.vx = (-(120) | 0));
(petObject.vy = 0);
(petObject.c1 = 12);
(petObject.meirei = 0);
(petObject.muki = 0);
if (((petObject.shurui == 1800) || (petObject.shurui == 2700))) {
(petObject.muki = 1);
}
petObject.delPP$1(3);
}
else {
if ((petObject.meirei == 230)) {
(petObject.c = 1100);
(petObject.vy = (-(305) | 0));
(petObject.meirei = 0);
(petObject.vx = 40);
(petObject.muki = 1);
petObject.delPP$1(1);
}
else {
if ((petObject.meirei == 240)) {
(petObject.c = 1490);
(petObject.vx = 0);
(petObject.c1 = 0);
(petObject.meirei = 0);
this.mSet$6(n, n2, 1300, n3, 0, 0);
(petObject.muki = 1);
(petObject.pt = petObject.spt[0]);
(petObject.pth = petObject.muki);
petObject.delPP$1(8);
}
else {
if ((petObject.meirei == 250)) {
(petObject.c = 1485);
(petObject.vx = 0);
(petObject.c1 = 0);
(petObject.meirei = 0);
this.mSet$6(n, n2, 1400, n3, 0, 0);
(petObject.muki = 1);
(petObject.pt = petObject.spt[0]);
(petObject.pth = petObject.muki);
petObject.delPP$1(8);
}
else {
if ((petObject.meirei == 260)) {
(petObject.c = 1455);
(petObject.vx = 0);
(petObject.c1 = 0);
(petObject.meirei = 0);
(petObject.muki = 1);
(petObject.pt = petObject.spt[0]);
(petObject.pth = petObject.muki);
petObject.delPP$1(8);
}
else {
if ((petObject.meirei == 270)) {
(petObject.c = 1425);
(petObject.vx = 0);
(petObject.c1 = 10);
(petObject.meirei = 0);
this.mSet$6(n, n2, 640, 16, 0, 0);
(petObject.muki = 1);
(petObject.pt = 243);
(petObject.pth = petObject.muki);
petObject.delPP$1(this.pichika_waza2_pp);
}
else {
if ((petObject.meirei == 280)) {
(petObject.c = 1426);
(petObject.vx = 0);
(petObject.c1 = 10);
(petObject.meirei = 0);
var d = Math.cos(0.47123889803846897);
var d5 = Math.sin(0.47123889803846897);
this.mSet$6(n, n2, 650, J.i((d * 16.0)), J.i((-d5 * 16.0)), 0);
(d = Math.cos(0.7853981633974483));
(d5 = Math.sin(0.7853981633974483));
this.mSet$6(n, n2, 650, J.i((d * 16.0)), J.i((-d5 * 16.0)), 0);
(d = Math.cos(1.0995574287564276));
(d5 = Math.sin(1.0995574287564276));
this.mSet$6(n, n2, 650, J.i((d * 16.0)), J.i((-d5 * 16.0)), 0);
(petObject.muki = 1);
(petObject.pt = 243);
(petObject.pth = petObject.muki);
petObject.delPP$1(8);
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
pWazaK$4(petObject, n, n2, n3) {
if ((petObject.meirei == 10)) {
(petObject.c = 210);
(petObject.vy = (-(125) | 0));
}
else {
if ((petObject.meirei == 20)) {
(petObject.c = 2100);
(petObject.vy = (-(210) | 0));
(petObject.meirei = 0);
(petObject.vx = 0);
(petObject.muki = 1);
}
else {
if ((petObject.meirei == 30)) {
(petObject.c = 2410);
(petObject.vx = 0);
(petObject.c1 = 17);
(petObject.meirei = 0);
this.mSet$6(n, n2, 100, 19, 0, 0);
(petObject.muki = 1);
(petObject.pt = petObject.spt[((1 + this.g_ac) | 0)]);
(petObject.pth = petObject.muki);
petObject.delPP$1(3);
}
else {
if ((petObject.meirei == 40)) {
if ((petObject.shurui == 1500)) {
(petObject.c = 2300);
(petObject.vx = 90);
(petObject.vy = 90);
(petObject.c1 = 17);
}
else {
(petObject.c = 2300);
(petObject.vx = 120);
(petObject.vy = 0);
(petObject.c1 = 12);
}
(petObject.meirei = 0);
(petObject.muki = 1);
if ((petObject.shurui == 2800)) {
petObject.delPP$1(this.pichika_waza1_pp);
}
else {
petObject.delPP$1(1);
}
}
else {
if ((petObject.meirei == 70)) {
(petObject.c = 2410);
(petObject.vx = 0);
(petObject.c1 = 17);
(petObject.meirei = 0);
this.mSet$6(((n + 60) | 0), n2, 1000, 0, 0, 0);
(petObject.muki = 1);
(petObject.pt = petObject.spt[((1 + this.g_ac) | 0)]);
(petObject.pth = petObject.muki);
petObject.delPP$1(8);
}
else {
if ((petObject.meirei == 80)) {
(petObject.c = 1500);
(petObject.c1 = 16);
(petObject.meirei = 0);
var d = Math.cos(0.0);
var d2 = Math.sin(0.0);
this.mSet$6(n, n2, 300, J.i((d * 17.0)), J.i((-d2 * 17.0)), 0);
(d = Math.cos(4.71238898038469));
(d2 = Math.sin(4.71238898038469));
this.mSet$6(n, n2, 300, J.i((d * 17.0)), J.i((-d2 * 17.0)), 0);
(d = Math.cos(Math.PI));
(d2 = Math.sin(Math.PI));
this.mSet$6(n, n2, 300, J.i((d * 17.0)), J.i((-d2 * 17.0)), 0);
(d = Math.cos(1.5707963267948966));
(d2 = Math.sin(1.5707963267948966));
this.mSet$6(n, n2, 300, J.i((d * 17.0)), J.i((-d2 * 17.0)), 0);
(d = Math.cos(5.759586531581287));
(d2 = Math.sin(5.759586531581287));
this.mSet$6(n, n2, 300, J.i((d * 17.0)), J.i((-d2 * 17.0)), 0);
(d = Math.cos(4.1887902047863905));
(d2 = Math.sin(4.1887902047863905));
this.mSet$6(n, n2, 300, J.i((d * 17.0)), J.i((-d2 * 17.0)), 0);
(d = Math.cos(2.6179938779914944));
(d2 = Math.sin(2.6179938779914944));
this.mSet$6(n, n2, 300, J.i((d * 17.0)), J.i((-d2 * 17.0)), 0);
(d = Math.cos(1.0471975511965976));
(d2 = Math.sin(1.0471975511965976));
this.mSet$6(n, n2, 300, J.i((d * 17.0)), J.i((-d2 * 17.0)), 0);
(d = Math.cos(5.235987755982989));
(d2 = Math.sin(5.235987755982989));
this.mSet$6(n, n2, 300, J.i((d * 17.0)), J.i((-d2 * 17.0)), 0);
(d = Math.cos(3.6651914291880923));
(d2 = Math.sin(3.6651914291880923));
this.mSet$6(n, n2, 300, J.i((d * 17.0)), J.i((-d2 * 17.0)), 0);
(d = Math.cos(2.0943951023931953));
(d2 = Math.sin(2.0943951023931953));
this.mSet$6(n, n2, 300, J.i((d * 17.0)), J.i((-d2 * 17.0)), 0);
(d = Math.cos(0.5235987755982988));
(d2 = Math.sin(0.5235987755982988));
this.mSet$6(n, n2, 300, J.i((d * 17.0)), J.i((-d2 * 17.0)), 0);
(petObject.muki = 0);
petObject.delPP$1(1);
}
else {
if ((petObject.meirei == 100)) {
(petObject.c = 1420);
(petObject.vx = 0);
(petObject.c1 = 10);
(petObject.meirei = 0);
this.mSet$6(n, n2, 500, 60, (-(200) | 0), 0);
(petObject.muki = 1);
(petObject.pth = 0);
petObject.delPP$1(3);
}
else {
if ((petObject.meirei == 110)) {
(petObject.c = 2410);
(petObject.vx = 0);
(petObject.c1 = 10);
(petObject.meirei = 0);
this.mSet$6(n, n2, 600, 16, 0, 0);
(petObject.muki = 1);
(petObject.pt = petObject.spt[((1 + this.g_ac) | 0)]);
(petObject.pth = petObject.muki);
petObject.delPP$1(3);
}
else {
if ((petObject.meirei == 130)) {
(petObject.c = 2420);
(petObject.vx = 80);
(petObject.c1 = 0);
(petObject.meirei = 0);
(petObject.pth = (petObject.muki = 1));
petObject.delPP$1(8);
}
else {
if ((petObject.meirei == 160)) {
(petObject.c = 2430);
(petObject.vx = 0);
(petObject.c1 = 0);
(petObject.meirei = 0);
(petObject.muki = 1);
(petObject.pt = petObject.spt[0]);
(petObject.pth = 0);
petObject.delPP$1(8);
}
else {
if ((petObject.meirei == 200)) {
(petObject.c = 2440);
(petObject.vx = 0);
(petObject.c1 = 0);
(petObject.meirei = 0);
this.mSet$6(n, n2, 1200, n3, 0, 0);
(petObject.muki = 1);
(petObject.pt = petObject.spt[0]);
(petObject.pth = petObject.muki);
petObject.delPP$1(8);
}
else {
if ((petObject.meirei == 210)) {
(petObject.c = 2450);
(petObject.vx = 0);
(petObject.c1 = 10);
(petObject.meirei = 0);
this.mSet$6(n, n2, 630, 9, 9, 0);
(petObject.muki = 1);
(petObject.pt = petObject.spt[0]);
(petObject.pth = petObject.muki);
petObject.delPP$1(3);
}
else {
if ((petObject.meirei == 220)) {
(petObject.c = 2300);
(petObject.vx = (-(120) | 0));
(petObject.vy = 0);
(petObject.c1 = 12);
(petObject.meirei = 0);
(petObject.muki = 0);
petObject.delPP$1(3);
}
else {
if ((petObject.meirei == 230)) {
(petObject.c = 2100);
(petObject.vy = (-(250) | 0));
(petObject.meirei = 0);
(petObject.vx = 0);
(petObject.muki = 1);
petObject.delPP$1(1);
}
else {
if ((petObject.meirei == 240)) {
(petObject.c = 1490);
(petObject.vx = 0);
(petObject.c1 = 0);
(petObject.meirei = 0);
this.mSet$6(n, n2, 1300, n3, 0, 0);
(petObject.muki = 1);
(petObject.pt = petObject.spt[0]);
(petObject.pth = petObject.muki);
petObject.delPP$1(8);
}
else {
if ((petObject.meirei == 270)) {
(petObject.c = 2410);
(petObject.vx = 0);
(petObject.c1 = 17);
(petObject.meirei = 0);
this.mSet$6(n, n2, 640, 16, 0, 0);
(petObject.muki = 1);
(petObject.pt = 243);
(petObject.pth = petObject.muki);
petObject.delPP$1(this.pichika_waza2_pp);
}
else {
if ((petObject.meirei == 280)) {
(petObject.c = 2410);
(petObject.vx = 0);
(petObject.c1 = 10);
(petObject.meirei = 0);
var d = Math.cos(0.41887902047863906);
var d3 = Math.sin(0.41887902047863906);
this.mSet$6(n, n2, 650, J.i((d * 16.0)), J.i((d3 * 16.0)), 0);
(d = Math.cos(0.7330382858376184));
(d3 = Math.sin(0.7330382858376184));
this.mSet$6(n, n2, 650, J.i((d * 16.0)), J.i((d3 * 16.0)), 0);
(d = Math.cos(1.0471975511965976));
(d3 = Math.sin(1.0471975511965976));
this.mSet$6(n, n2, 650, J.i((d * 16.0)), J.i((d3 * 16.0)), 0);
(petObject.muki = 1);
(petObject.pt = 243);
(petObject.pth = petObject.muki);
petObject.delPP$1(8);
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
targetWild$2(n, n2) {
var n3 = (-(1) | 0);
var n4 = 9999;
var n5 = 0;
while ((n5 <= this.w_kazu)) {
if ((this.co_w[n5].c >= 1000)) {
var n6 = 0;
var wildObject = this.co_w[n5];
if (((wildObject.ss >= 2) && ((n6 = ((J.abs(((wildObject.x - n) | 0)) + J.abs(((wildObject.y - n2) | 0))) | 0)) < n4))) {
(n3 = n5);
(n4 = n6);
}
}
J.inc(()=>n5, v=>n5=v, 1, false, "int");
}
return n3;
}
wSet$3(n, n2, n3) {
var n4 = 0;
while ((n4 <= 49)) {
if ((this.co_w[n4].c <= 0)) {
var wildObject = this.co_w[n4];
(wildObject.c = n3);
(wildObject.shurui = Math.imul(J.div(n3, 100), 100));
(wildObject.c1 = 0);
(wildObject.c2 = 0);
(wildObject.c3 = 0);
(wildObject.c4 = 0);
(wildObject.x = n);
(wildObject.y = n2);
(wildObject.positionX = n);
(wildObject.positionY = n2);
(wildObject.hp = 100);
(wildObject.hp_max = 100);
(wildObject.pp = 50);
(wildObject.pp_max = 50);
(wildObject.mn = J.div(((n3 - 1000) | 0), 100));
J.inc(()=>this.w_kazu, v=>this.w_kazu=v, 1, false, "int");
switch (n3) {
case 1100:
{
(wildObject.name = "ピカチー");
(wildObject.hp_max = 100);
(wildObject.pp_max = 40);
break;
}
case 1200:
{
(wildObject.name = "チコリン");
(wildObject.hp_max = 70);
(wildObject.pp_max = 40);
break;
}
case 1300:
{
(wildObject.name = "コラット");
(wildObject.hp_max = 50);
(wildObject.pp_max = 30);
break;
}
case 1400:
{
(wildObject.name = "マリリ");
(wildObject.hp_max = 120);
(wildObject.pp_max = 40);
break;
}
case 1500:
{
(wildObject.name = "ポッピー");
(wildObject.hp_max = 50);
(wildObject.pp_max = 30);
break;
}
case 1600:
{
(wildObject.name = "ビビーダマ");
(wildObject.x = ((n - 16) | 0));
(wildObject.hp_max = 30);
(wildObject.pp_max = 30);
break;
}
case 1700:
{
(wildObject.name = "チレイハナ");
(wildObject.hp_max = 60);
(wildObject.pp_max = 30);
break;
}
case 1800:
{
(wildObject.name = "ポポコ");
(wildObject.hp_max = 50);
(wildObject.pp_max = 40);
break;
}
case 1900:
{
(wildObject.name = "ヒノララシ");
(wildObject.hp_max = 100);
(wildObject.pp_max = 40);
break;
}
case 2000:
{
(wildObject.name = "エアームズ");
(wildObject.hp_max = 60);
(wildObject.pp_max = 35);
break;
}
case 2100:
{
(wildObject.name = "マメゾウ");
(wildObject.hp_max = 160);
(wildObject.pp_max = 40);
break;
}
case 2190:
{
(wildObject.name = "マメゾウ");
(wildObject.hp_max = 160);
(wildObject.pp_max = 40);
break;
}
case 2200:
{
(wildObject.name = "ヒトデミー");
(wildObject.hp_max = 60);
(wildObject.pp_max = 40);
break;
}
case 2300:
{
(wildObject.name = "ミウ");
(wildObject.hp_max = 60);
(wildObject.pp_max = 40);
break;
}
case 2400:
{
(wildObject.name = "スイクウ");
(wildObject.hp_max = 90);
(wildObject.pp_max = 40);
break;
}
case 2500:
{
(wildObject.name = "サンダラ");
(wildObject.hp_max = 60);
(wildObject.pp_max = 30);
break;
}
case 2600:
{
(wildObject.name = "マッカルゴ");
(wildObject.hp_max = 140);
(wildObject.pp_max = 35);
break;
}
case 2700:
{
(wildObject.name = "タイキング");
(wildObject.hp_max = 50);
(wildObject.pp_max = 30);
break;
}
case 2800:
{
(wildObject.name = this.pichika_name);
(wildObject.hp_max = this.pichika_hp_max);
(wildObject.pp_max = this.pichika_pp_max);
(wildObject.c1 = (-(20) | 0));
(wildObject.c2 = 1);
break;
}
case 2900:
{
(wildObject.name = this.name_figa);
(wildObject.c = 500);
(wildObject.hp_max = 280);
(wildObject.pp_max = 200);
(wildObject.ms = 16);
(this.sl_step = 1);
(this.sl_wx = ((n - 384) | 0));
(this.sl_wy = 672);
(wildObject.x = ((((this.sl_wx + 512) | 0) + 16) | 0));
break;
}
case 3000:
{
(wildObject.name = this.name_thundaga);
(wildObject.c = 510);
(wildObject.hp_max = 240);
(wildObject.pp_max = 200);
(wildObject.ms = 16);
(this.sl_step = 1);
(this.sl_wx = ((n - 384) | 0));
(this.sl_wy = 672);
(wildObject.x = ((((this.sl_wx + 512) | 0) + 16) | 0));
break;
}
case 3100:
{
(wildObject.name = this.name_blizzaga);
(wildObject.c = 520);
(wildObject.hp_max = 330);
(wildObject.pp_max = 200);
(wildObject.ms = 16);
(this.sl_step = 1);
(this.sl_wx = ((n - 384) | 0));
(this.sl_wy = 672);
(wildObject.y = ((this.sl_wy - 48) | 0));
break;
}
case 3200:
{
(wildObject.name = this.name_ragias);
(wildObject.c = 530);
(wildObject.hp_max = 300);
(wildObject.pp_max = 200);
(wildObject.ms = 16);
(this.sl_step = 1);
(this.sl_wx = ((n - 384) | 0));
(this.sl_wy = 672);
(wildObject.y = ((((this.sl_wy + 320) | 0) + 32) | 0));
}
}
(wildObject.hp = wildObject.hp_max);
(wildObject.pp = wildObject.pp_max);
var petObject = new PetObject();
petObject.initShuruibetu$2(wildObject.shurui, this);
(wildObject.name = petObject.name);
(petObject = null);
break;
}
J.inc(()=>n4, v=>n4=v, 1, false, "int");
}
}
wSetGym$4(n, n2, n3, n4) {
var wildObject = this.co_w[n4];
(wildObject.c = n3);
(wildObject.shurui = Math.imul(J.div(n3, 100), 100));
(wildObject.c1 = 0);
(wildObject.c2 = 0);
(wildObject.c3 = 0);
(wildObject.c4 = 0);
(wildObject.x = n);
(wildObject.y = n2);
(wildObject.positionX = n);
(wildObject.positionY = n2);
(wildObject.hp = 100);
(wildObject.hp_max = 100);
(wildObject.pp = 50);
(wildObject.pp_max = 50);
(wildObject.mn = J.div(((n3 - 1000) | 0), 100));
J.inc(()=>this.w_kazu, v=>this.w_kazu=v, 1, false, "int");
if ((n3 == 50)) {
(wildObject.mn = 1);
}
else {
var petObject = new PetObject();
petObject.initShuruibetu$2(wildObject.shurui, this);
(wildObject.hp_max = petObject.hp_max);
(wildObject.pp_max = petObject.pp_max);
(wildObject.spt[0] = petObject.spt[0]);
(wildObject.spt[1] = petObject.spt[1]);
(wildObject.spt[2] = petObject.spt[2]);
(wildObject.speed = petObject.speed);
(wildObject.name = petObject.name);
(wildObject.type = petObject.type);
var n5 = 0;
while ((n5 <= 7)) {
(wildObject.waza_code[n5] = petObject.waza_code[n5]);
J.inc(()=>n5, v=>n5=v, 1, false, "int");
}
(wildObject.waza_kazu = petObject.waza_kazu);
(wildObject.c = 60);
(petObject = null);
}
(wildObject.hp = wildObject.hp_max);
(wildObject.pp = wildObject.pp_max);
}
wMove$0() {
var n = ((this.maps.wx + 640) | 0);
var n2 = ((this.maps.wx - 128) | 0);
var n3 = 0;
while ((n3 <= this.w_kazu)) {
if ((this.co_w[n3].c != 0)) {
var wildObject = this.co_w[n3];
var n4 = wildObject.x;
var n5 = wildObject.y;
if (((n4 > n) || (n4 < n2))) {
(wildObject.ss = 0);
}
else {
var n6 = 0;
var n7 = 0;
(wildObject.ss = 1);
(wildObject.attack_f = false);
switch (wildObject.c) {
case 40:
{
(wildObject.pt = 0);
(wildObject.pth = 0);
break;
}
case 50:
{
(wildObject.pt = ((this.system_mode == 1) ? 119 : ((this.system_mode == 3) ? 254 : 249)));
(wildObject.pth = 0);
break;
}
case 60:
{
(wildObject.pt = 80);
(wildObject.pth = 0);
break;
}
case 62:
{
(n4 = ((n4 + J.div(wildObject.vx, 10)) | 0));
(wildObject.vy = ((wildObject.vy + 25) | 0));
if ((wildObject.vy > 180)) {
(wildObject.vy = 180);
}
if (((wildObject.vy > 0) && (this.maps.getBGCode$2(((n4 + 15) | 0), (((n5 = ((n5 + J.div(wildObject.vy, 10)) | 0)) + 31) | 0)) >= 20))) {
(n5 = ((Math.imul(J.div(((n5 + 31) | 0), 32), 32) - 32) | 0));
(wildObject.vx = 0);
(wildObject.c = 11000);
(wildObject.muki = 0);
(wildObject.vx = 0);
(wildObject.meirei = 0);
(wildObject.move_wc = 25);
(wildObject.gym_wc = 0);
}
if (((wildObject.type == 1) && (wildObject.vy >= 0))) {
(wildObject.c = 12000);
(wildObject.muki = 0);
(wildObject.vx = 0);
(wildObject.meirei = 0);
(wildObject.move_wc = 25);
(wildObject.gym_wc = 0);
}
(wildObject.pt = 82);
(wildObject.pth = 0);
break;
}
case 70:
{
(wildObject.vy = ((wildObject.vy + 25) | 0));
if ((wildObject.vy > 180)) {
(wildObject.vy = 180);
}
if (((wildObject.vy > 0) && (this.maps.getBGCode$2(((n4 + 15) | 0), (((n5 = ((n5 + J.div(wildObject.vy, 10)) | 0)) + 25) | 0)) >= 20))) {
(n5 = ((Math.imul(J.div(((n5 + 25) | 0), 32), 32) - 26) | 0));
}
if ((n5 >= this.ochiru_y)) {
(wildObject.shurui = 0);
(wildObject.c = 0);
}
(wildObject.pt = 88);
(wildObject.pth = 0);
break;
}
case 500:
{
if ((this.sl_step >= 3)) {
(wildObject.c = 2900);
}
(wildObject.pt = 0);
(wildObject.pth = 0);
break;
}
case 510:
{
if ((this.sl_step >= 3)) {
(wildObject.c = 3000);
}
(wildObject.pt = 0);
(wildObject.pth = 0);
break;
}
case 520:
{
if ((this.sl_step >= 3)) {
(wildObject.c = 3100);
}
(wildObject.pt = 0);
(wildObject.pth = 0);
break;
}
case 530:
{
if ((this.sl_step >= 3)) {
(wildObject.c = 540);
(wildObject.c1 = 0);
}
(wildObject.pt = 0);
(wildObject.pth = 0);
break;
}
case 540:
{
if (((n5 = ((n5 - 8) | 0)) <= wildObject.positionY)) {
(n5 = wildObject.positionY);
(wildObject.c = 550);
(wildObject.c1 = 0);
}
J.inc(()=>wildObject.c1, v=>wildObject.c1=v, 1, false, "int");
if ((wildObject.c1 == 18)) {
this.mSet$6(n4, ((this.sl_wy + 224) | 0), 80, 0, 0, 1);
}
(wildObject.pt = 1310);
(wildObject.pth = 0);
break;
}
case 550:
{
if ((wildObject.c1 < 10)) {
J.inc(()=>wildObject.c1, v=>wildObject.c1=v, 1, false, "int");
}
else {
if ((wildObject.c1 == 10)) {
(wildObject.c1 = 11);
if ((this.co_j.c == 1000)) {
(n7 = 1);
while ((n7 <= 15)) {
this.km.init1$1(n7);
J.inc(()=>n7, v=>n7=v, 1, false, "int");
}
this.km.init1$1(3);
this.km.setMessage$2(3, this.name_ragias);
this.addSerifuRR$3(3, 10, 4);
this.km.activeSerifu$5(3, 64, 12, 224, Color.green);
(this.km.mode = 950);
}
}
else {
if (((this.km.mode != 950) && (this.km.mode != 960))) {
(wildObject.c = 3200);
(wildObject.c1 = 0);
(wildObject.c2 = 0);
}
}
}
(wildObject.pt = 1300);
(wildObject.pth = 0);
break;
}
case 560:
{
var n8 = 0;
if ((wildObject.c1 < 10)) {
J.inc(()=>wildObject.c1, v=>wildObject.c1=v, 1, false, "int");
}
else {
if ((wildObject.c1 == 10)) {
(wildObject.c1 = 11);
if ((this.co_j.c == 1000)) {
(n7 = 1);
while ((n7 <= 15)) {
this.km.init1$1(n7);
J.inc(()=>n7, v=>n7=v, 1, false, "int");
}
this.km.init1$1(3);
this.km.setMessage$2(3, this.name_ragias);
this.addSerifuRR$3(3, 12, 2);
this.km.activeSerifu$5(3, 64, 12, 224, Color.green);
(this.km.mode = 970);
(n6 = ((this.stage - 1) | 0));
(this.ig.stage_cf[n6] = true);
(n8 = ((J.div(this.ig.stage_y[n6], 32) + 1) | 0));
if ((n8 <= 8)) {
(this.ig.map_bg[((J.div(this.ig.stage_x[n6], 32) + 1) | 0)][n8] = 66);
}
else {
(this.ig.map_bg[((J.div(this.ig.stage_x[n6], 32) + 1) | 0)][((n8 - 1) | 0)] = 66);
}
}
}
else {
if (((this.km.mode < 970) || (this.km.mode > 980))) {
(wildObject.c = 600);
}
}
}
(wildObject.pt = 1300);
(wildObject.pth = 0);
break;
}
case 600:
{
if (((n5 = ((n5 - 6) | 0)) <= ((this.maps.wy - 128) | 0))) {
(n4 = ((n4 + 64) | 0));
(wildObject.c = 610);
(wildObject.c1 = 0);
}
(wildObject.pt = 1310);
(wildObject.pth = 0);
break;
}
case 610:
{
(wildObject.pt = 1320);
(wildObject.pth = 0);
if (((n5 = ((n5 + 16) | 0)) >= ((this.maps.wy + 336) | 0))) {
(n5 = ((this.maps.wy + 336) | 0));
if (!this.ig.stage_cf[((this.stage - 1) | 0)]) {
(wildObject.shurui = 0);
(wildObject.c = 0);
this.km.init1$1(13);
this.km.addItem$2(13, this.name_crys);
this.km.addItem$2(13, "あらっ、逃げられちゃったみたい。");
this.km.activeNigyouTime$5(13, 300, 12, 200, Color.magenta);
}
else {
(wildObject.pt = 0);
}
}
J.inc(()=>wildObject.c1, v=>wildObject.c1=v, 1, false, "int");
if ((wildObject.c1 != 21)) {
break;
}
this.mSet$6(n4, ((this.sl_wy + 224) | 0), 80, 0, 0, 1);
break;
}
case 1000:
{
if (this.gym_f) {
(wildObject.c = 70);
(wildObject.vy = (-(175) | 0));
(wildObject.vy = ((wildObject.vy + 25) | 0));
(n5 = ((n5 + J.div(wildObject.vy, 10)) | 0));
(wildObject.pt = 88);
(wildObject.pth = 0);
break;
}
J.inc(()=>wildObject.c1, v=>wildObject.c1=v, -1, false, "int");
if ((wildObject.c1 <= 0)) {
(wildObject.c = 0);
if (((wildObject.shurui >= 2900) && (wildObject.shurui <= 3200))) {
this.addScore$1(10);
if ((this.stage == 3)) {
this.mSet$6(((this.sl_wx + 160) | 0), ((this.sl_wy + 96) | 0), 85, 0, 0, 1);
}
else {
if ((this.stage == 4)) {
(wildObject.c = 560);
(wildObject.c1 = 0);
(wildObject.hp = 1);
}
else {
this.mSet$6(((this.sl_wx + 256) | 0), ((this.sl_wy + 96) | 0), 85, 0, 0, 1);
}
}
}
else {
this.addScore$1(1);
}
}
if ((this.g_c1 == 0)) {
(wildObject.pt = wildObject.c2);
if ((wildObject.pth == 2)) {
(wildObject.pth = 0);
break;
}
if ((wildObject.pth != 3)) {
break;
}
(wildObject.pth = 1);
break;
}
(wildObject.pt = 0);
break;
}
case 1001:
{
J.inc(()=>wildObject.c1, v=>wildObject.c1=v, -1, false, "int");
if ((wildObject.c1 <= 0)) {
(wildObject.c = 0);
}
if ((this.g_c1 == 0)) {
(wildObject.pt = wildObject.c2);
break;
}
(wildObject.pt = 0);
break;
}
case 1100:
{
(wildObject.pt = 140);
if ((n4 >= this.co_j.x)) {
(wildObject.pth = 0);
break;
}
(wildObject.pth = 1);
break;
}
case 1200:
{
var d = 0;
var d2 = 0;
(wildObject.pt = 150);
(wildObject.pth = ((n4 >= this.co_j.x) ? 0 : 1));
if ((n4 == wildObject.positionX)) {
(n6 = this.targetPetChikaiX$1(n4));
if (((n6 >= 0) && ((J.abs(((this.co_p[n6].x - n4) | 0)) < 128) || (wildObject.hp <= 30)))) {
(wildObject.c = 1220);
(wildObject.c2 = ((wildObject.positionX + 128) | 0));
(wildObject.pt = ((151 + this.g_ac) | 0));
(wildObject.pth = 0);
}
}
else {
(n6 = this.targetPetChikaiX$1(n4));
if ((((n6 >= 0) && (wildObject.hp > 30)) && (this.co_p[n6].x < ((wildObject.positionX - 144) | 0)))) {
(wildObject.c = 1220);
(wildObject.c2 = wildObject.positionX);
(wildObject.pt = ((151 + this.g_ac) | 0));
(wildObject.pth = 1);
}
}
if ((wildObject.c1 > 0)) {
J.inc(()=>wildObject.c1, v=>wildObject.c1=v, -1, false, "int");
break;
}
if (((wildObject.c != 1200) || ((n6 = this.targetPetChikaiX$1(n4)) < 0))) {
break;
}
if (((((J.abs(((this.co_p[n6].x - n4) | 0)) < 160) && (this.co_p[n6].y < ((n5 - 26) | 0))) && (wildObject.pp > 20)) && (this.maps.getBGCode$2(((n4 + 15) | 0), ((n5 - 1) | 0)) < 20))) {
(wildObject.c = 1210);
(wildObject.c1 = 16);
(wildObject.pt = 150);
(wildObject.pp = ((wildObject.pp - 8) | 0));
if ((n4 >= this.co_j.x)) {
(wildObject.muki = 0);
(d2 = Math.cos(Math.PI));
(d = Math.sin(Math.PI));
this.mSet$6(n4, n5, 200, J.i((d2 * 16.0)), J.i((-d * 16.0)), 1);
(d2 = Math.cos(2.5132741228718345));
(d = Math.sin(2.5132741228718345));
this.mSet$6(n4, n5, 200, J.i((d2 * 16.0)), J.i((-d * 16.0)), 1);
(d2 = Math.cos(1.8849555921538759));
(d = Math.sin(1.8849555921538759));
this.mSet$6(n4, n5, 200, J.i((d2 * 16.0)), J.i((-d * 16.0)), 1);
break;
}
(wildObject.muki = 1);
(d2 = Math.cos(0.0));
(d = Math.sin(0.0));
this.mSet$6(n4, n5, 200, J.i((d2 * 16.0)), J.i((-d * 16.0)), 1);
(d2 = Math.cos(0.6283185307179586));
(d = Math.sin(0.6283185307179586));
this.mSet$6(n4, n5, 200, J.i((d2 * 16.0)), J.i((-d * 16.0)), 1);
(d2 = Math.cos(1.2566370614359172));
(d = Math.sin(1.2566370614359172));
this.mSet$6(n4, n5, 200, J.i((d2 * 16.0)), J.i((-d * 16.0)), 1);
break;
}
if (((((this.co_p[n6].x > ((n4 - 224) | 0)) && (this.co_p[n6].x < ((n4 + 160) | 0))) && (J.abs(((this.co_p[n6].y - n5) | 0)) < 26)) && (wildObject.pp > 10))) {
(wildObject.c = 1210);
(wildObject.c1 = 10);
(wildObject.c2 = 0);
(wildObject.pt = 150);
(wildObject.pp = ((wildObject.pp - 3) | 0));
if ((n4 >= this.co_j.x)) {
(wildObject.muki = 0);
(d2 = Math.cos(Math.PI));
(d = Math.sin(Math.PI));
this.mSet$6(n4, n5, 200, J.i((d2 * 16.0)), J.i((d * 14.0)), 1);
break;
}
(wildObject.muki = 1);
(d2 = Math.cos(0.0));
(d = Math.sin(0.0));
this.mSet$6(n4, n5, 200, J.i((d2 * 16.0)), J.i((d * 14.0)), 1);
break;
}
(wildObject.c1 = 0);
break;
}
case 1210:
{
var d = 0;
var d2 = 0;
(wildObject.pt = 152);
(wildObject.pth = wildObject.muki);
J.inc(()=>wildObject.c1, v=>wildObject.c1=v, -1, false, "int");
if ((wildObject.c1 <= 0)) {
(wildObject.c = 1200);
(wildObject.c1 = ((wildObject.pp > 20) ? 15 : 35));
(wildObject.pt = 150);
(wildObject.pth = wildObject.muki);
break;
}
if ((wildObject.c1 != 10)) {
break;
}
if ((wildObject.muki == 1)) {
(d2 = Math.cos(0.3141592653589793));
(d = Math.sin(0.3141592653589793));
this.mSet$6(n4, n5, 200, J.i((d2 * 16.0)), J.i((-d * 16.0)), 1);
(d2 = Math.cos(0.9424777960769379));
(d = Math.sin(0.9424777960769379));
this.mSet$6(n4, n5, 200, J.i((d2 * 16.0)), J.i((-d * 16.0)), 1);
break;
}
(d2 = Math.cos(2.827433388230814));
(d = Math.sin(2.827433388230814));
this.mSet$6(n4, n5, 200, J.i((d2 * 16.0)), J.i((-d * 16.0)), 1);
(d2 = Math.cos(2.199114857512855));
(d = Math.sin(2.199114857512855));
this.mSet$6(n4, n5, 200, J.i((d2 * 16.0)), J.i((-d * 16.0)), 1);
break;
}
case 1220:
{
if ((J.abs(((n4 - wildObject.c2) | 0)) < 8)) {
(n4 = wildObject.c2);
(wildObject.c = 1200);
(wildObject.c1 = 0);
}
else {
if ((n4 > wildObject.c2)) {
(wildObject.vx = (-(40) | 0));
(n4 = ((n4 - 4) | 0));
}
else {
(wildObject.vx = 40);
if (((this.maps.getBGCode$2((((n4 = ((n4 + 4) | 0)) + 31) | 0), n5) >= 20) || (this.maps.getBGCode$2(((n4 + 15) | 0), ((n5 + 31) | 0)) >= 20))) {
(n4 = ((Math.imul(J.div(((n4 + 31) | 0), 32), 32) - 32) | 0));
(wildObject.c = 1200);
(wildObject.c1 = 0);
}
if ((this.maps.getBGCode$2(((n4 + 31) | 0), ((n5 + 32) | 0)) < 20)) {
(n4 = ((Math.imul(J.div(((n4 + 31) | 0), 32), 32) - 32) | 0));
(wildObject.c = 1200);
(wildObject.c1 = 0);
}
}
}
(wildObject.pt = ((151 + this.g_ac) | 0));
if ((wildObject.vx <= 0)) {
(wildObject.pth = 0);
break;
}
(wildObject.pth = 1);
break;
}
case 1300:
{
J.inc(()=>wildObject.c1, v=>wildObject.c1=v, 1, false, "int");
if ((wildObject.c1 > 30)) {
(wildObject.c = 1340);
(wildObject.c1 = 0);
}
if ((((n6 = this.targetPetTaiatari$2(n4, n5)) >= 0) && (wildObject.pp > 10))) {
(wildObject.c = 1310);
(wildObject.vx = ((n4 >= this.co_p[n6].x) ? (-(100) | 0) : 100));
(wildObject.vy = 0);
(wildObject.c1 = 14);
J.inc(()=>wildObject.pp, v=>wildObject.pp=v, -1, false, "int");
}
(wildObject.pt = 160);
if ((n4 >= this.co_j.x)) {
(wildObject.pth = 0);
break;
}
(wildObject.pth = 1);
break;
}
case 1310:
{
(wildObject.attack_f = true);
(n4 = ((n4 + J.div(wildObject.vx, 10)) | 0));
if ((wildObject.vx < 0)) {
if (((this.maps.getBGCode$2(((n4 + 15) | 0), n5) >= 20) || (this.maps.getBGCode$2(((n4 + 15) | 0), ((n5 + 31) | 0)) >= 20))) {
(n4 = ((((Math.imul(J.div(((n4 + 15) | 0), 32), 32) + 32) | 0) - 15) | 0));
(wildObject.c = 1320);
}
if ((this.maps.getBGCode$2(((n4 + 15) | 0), ((n5 + 32) | 0)) < 20)) {
(n4 = ((((Math.imul(J.div(((n4 + 15) | 0), 32), 32) + 32) | 0) - 15) | 0));
(wildObject.c = 1320);
}
}
else {
if (((this.maps.getBGCode$2(((n4 + 15) | 0), n5) >= 20) || (this.maps.getBGCode$2(((n4 + 15) | 0), ((n5 + 31) | 0)) >= 20))) {
(n4 = ((Math.imul(J.div(((n4 + 15) | 0), 32), 32) - 16) | 0));
(wildObject.c = 1320);
}
if ((this.maps.getBGCode$2(((n4 + 15) | 0), ((n5 + 32) | 0)) < 20)) {
(n4 = ((Math.imul(J.div(((n4 + 15) | 0), 32), 32) - 16) | 0));
(wildObject.c = 1320);
}
}
J.inc(()=>wildObject.c1, v=>wildObject.c1=v, -1, false, "int");
if ((wildObject.c1 <= 0)) {
(wildObject.c = 1320);
}
(wildObject.pt = 161);
if ((wildObject.vx <= 0)) {
(wildObject.pth = 0);
break;
}
(wildObject.pth = 1);
break;
}
case 1320:
{
if ((J.abs(((n4 - wildObject.positionX) | 0)) < 3)) {
(n4 = wildObject.positionX);
(wildObject.c = 1300);
(wildObject.c1 = 0);
(wildObject.vx = 0);
}
else {
if ((n4 > wildObject.positionX)) {
(wildObject.vx = (-(30) | 0));
(n4 = ((n4 - 3) | 0));
}
else {
(wildObject.vx = 30);
(n4 = ((n4 + 3) | 0));
}
}
if ((this.maps.getBGCode$2(((n4 + 15) | 0), ((n5 + 32) | 0)) < 20)) {
(wildObject.c = 1330);
(wildObject.vy = 0);
(wildObject.muki = ((wildObject.vx <= 0) ? 0 : 1));
}
(wildObject.pt = ((161 + this.g_ac) | 0));
if ((wildObject.vx <= 0)) {
(wildObject.pth = 0);
break;
}
(wildObject.pth = 1);
break;
}
case 1330:
{
(n4 = ((n4 + J.div(wildObject.vx, 10)) | 0));
if ((wildObject.vx < 0)) {
if (((this.maps.getBGCode$2(((n4 + 15) | 0), n5) >= 20) || (this.maps.getBGCode$2(((n4 + 15) | 0), ((n5 + 31) | 0)) >= 20))) {
(n4 = ((((Math.imul(J.div(((n4 + 15) | 0), 32), 32) + 32) | 0) - 15) | 0));
}
}
else {
if (((this.maps.getBGCode$2(((n4 + 15) | 0), n5) >= 20) || (this.maps.getBGCode$2(((n4 + 15) | 0), ((n5 + 31) | 0)) >= 20))) {
(n4 = ((Math.imul(J.div(((n4 + 15) | 0), 32), 32) - 16) | 0));
}
}
(wildObject.vy = ((wildObject.vy + 25) | 0));
if ((wildObject.vy > 180)) {
(wildObject.vy = 180);
}
(n5 = ((n5 + J.div(wildObject.vy, 10)) | 0));
if ((wildObject.vy < 0)) {
if ((this.maps.getBGCode$2(((n4 + 15) | 0), n5) >= 20)) {
(n5 = ((Math.imul(J.div(n5, 32), 32) + 32) | 0));
(wildObject.vy = 0);
}
}
else {
if (((wildObject.vy > 0) && (this.maps.getBGCode$2(((n4 + 15) | 0), ((n5 + 31) | 0)) >= 20))) {
(n5 = ((Math.imul(J.div(((n5 + 31) | 0), 32), 32) - 32) | 0));
(wildObject.vx = 0);
(wildObject.c = 1320);
}
}
if ((n5 >= this.ochiru_y)) {
(wildObject.shurui = 0);
(wildObject.c = 0);
}
(wildObject.pt = 161);
(wildObject.pth = wildObject.muki);
break;
}
case 1340:
{
(wildObject.vx = (-(30) | 0));
if ((((wildObject.positionX - 64) | 0) >= (n4 = ((n4 - 3) | 0)))) {
(n4 = ((wildObject.positionX - 64) | 0));
(wildObject.c = 1320);
}
(wildObject.pt = ((161 + this.g_ac) | 0));
(wildObject.pth = 0);
break;
}
case 1350:
{
J.inc(()=>wildObject.c1, v=>wildObject.c1=v, -1, false, "int");
if ((wildObject.c1 <= 0)) {
(wildObject.c = 1320);
}
(wildObject.pt = 160);
(wildObject.pth = wildObject.muki);
break;
}
case 1400:
{
(wildObject.pt = 170);
(wildObject.pth = ((n4 >= this.co_j.x) ? 0 : 1));
if ((n4 == wildObject.positionX)) {
(n6 = this.targetPetChikaiX$1(n4));
if (((n6 >= 0) && ((J.abs(((this.co_p[n6].x - n4) | 0)) < 96) || (wildObject.hp <= 60)))) {
(wildObject.c = 1420);
(wildObject.c2 = ((wildObject.positionX + 160) | 0));
(wildObject.pt = 173);
(wildObject.pth = 1);
}
}
else {
(n6 = this.targetPetChikaiX$1(n4));
if ((((n6 >= 0) && (wildObject.hp > 60)) && (this.co_p[n6].x < ((wildObject.positionX - 128) | 0)))) {
(wildObject.c = 1420);
(wildObject.c2 = wildObject.positionX);
(wildObject.pt = 173);
(wildObject.pth = 0);
}
}
if ((wildObject.c1 > 0)) {
J.inc(()=>wildObject.c1, v=>wildObject.c1=v, -1, false, "int");
break;
}
if (((wildObject.c != 1400) || ((n6 = this.targetPetChikaiX$1(n4)) < 0))) {
break;
}
if (((J.abs(((this.co_p[n6].x - n4) | 0)) < 224) && (wildObject.pp > 10))) {
(wildObject.c = 1410);
(wildObject.c1 = 10);
(wildObject.c2 = 0);
(wildObject.pt = 172);
(wildObject.pp = ((wildObject.pp - 3) | 0));
if ((n4 >= this.co_j.x)) {
(wildObject.muki = 0);
this.mSet$6(n4, n5, 500, (-(80) | 0), (-(225) | 0), 1);
break;
}
(wildObject.muki = 1);
this.mSet$6(n4, n5, 500, 80, (-(225) | 0), 1);
break;
}
(wildObject.c1 = 0);
break;
}
case 1410:
{
J.inc(()=>wildObject.c1, v=>wildObject.c1=v, -1, false, "int");
if ((wildObject.c1 <= 0)) {
(wildObject.c = 1400);
(wildObject.c1 = ((wildObject.pp > 20) ? 10 : 40));
(wildObject.pt = 170);
(wildObject.pth = wildObject.muki);
break;
}
(wildObject.pt = 172);
(wildObject.pth = wildObject.muki);
break;
}
case 1420:
{
if ((J.abs(((n4 - wildObject.c2) | 0)) < 8)) {
(n4 = wildObject.c2);
(wildObject.c = 1400);
(wildObject.c1 = 0);
}
else {
if ((n4 > wildObject.c2)) {
(wildObject.vx = (-(80) | 0));
(n4 = ((n4 - 8) | 0));
}
else {
(wildObject.vx = 80);
if (((this.maps.getBGCode$2((((n4 = ((n4 + 8) | 0)) + 31) | 0), n5) >= 20) || (this.maps.getBGCode$2(((n4 + 15) | 0), ((n5 + 31) | 0)) >= 20))) {
(n4 = ((Math.imul(J.div(((n4 + 31) | 0), 32), 32) - 32) | 0));
(wildObject.c = 1400);
(wildObject.c1 = 0);
}
if ((this.maps.getBGCode$2(((n4 + 31) | 0), ((n5 + 32) | 0)) < 20)) {
(n4 = ((Math.imul(J.div(((n4 + 31) | 0), 32), 32) - 32) | 0));
(wildObject.c = 1400);
(wildObject.c1 = 0);
}
}
}
(wildObject.pt = 173);
if ((wildObject.vx <= 0)) {
(wildObject.pth = 0);
break;
}
(wildObject.pth = 1);
break;
}
case 1500:
{
(wildObject.pt = ((148 + this.g_ac) | 0));
(wildObject.pth = ((n4 >= this.co_j.x) ? 0 : 1));
if ((wildObject.c1 > 0)) {
J.inc(()=>wildObject.c1, v=>wildObject.c1=v, -1, false, "int");
break;
}
(n6 = this.targetPetTaiatari$2(n4, n5));
if ((n6 < 0)) {
break;
}
if (((wildObject.pp > 10) && (this.co_p[n6].x <= ((n4 - 24) | 0)))) {
(wildObject.c = 1510);
(wildObject.c1 = 10);
(wildObject.pp = ((wildObject.pp - 3) | 0));
if ((this.co_p[n6].x <= n4)) {
(wildObject.muki = 0);
this.mSet$6(n4, n5, 600, (-(16) | 0), 0, 1);
break;
}
(wildObject.muki = 1);
this.mSet$6(n4, n5, 600, 16, 0, 1);
break;
}
(wildObject.c1 = 0);
break;
}
case 1510:
{
(wildObject.pt = ((148 + this.g_ac) | 0));
(wildObject.pth = wildObject.muki);
J.inc(()=>wildObject.c1, v=>wildObject.c1=v, -1, false, "int");
if ((wildObject.c1 > 0)) {
break;
}
(wildObject.c = 1500);
if ((wildObject.pp > 20)) {
(wildObject.c1 = 22);
break;
}
(wildObject.c1 = 32);
break;
}
case 1600:
{
if ((n4 >= ((wildObject.positionX - 16) | 0))) {
(n6 = this.targetPetChikaiX$1(n4));
if ((((n6 >= 0) && (wildObject.pp > 1)) && (J.abs(((this.co_p[n6].x - n4) | 0)) < 224))) {
(wildObject.vx = (-(2) | 0));
(n4 = ((n4 + wildObject.vx) | 0));
}
}
else {
if ((n4 > ((wildObject.positionX - 96) | 0))) {
(n4 = ((n4 + wildObject.vx) | 0));
}
else {
(wildObject.vx = 0);
(n6 = this.targetPetChikaiX$1(n4));
if (((((n6 >= 0) && (wildObject.pp > 1)) && (J.abs(((this.co_p[n6].x - n4) | 0)) < 112)) && (J.abs(((this.co_p[n6].y - n5) | 0)) < 144))) {
(wildObject.c = 1610);
(wildObject.c1 = 0);
J.inc(()=>wildObject.pp, v=>wildObject.pp=v, -1, false, "int");
}
}
}
(wildObject.pt = 158);
(wildObject.pth = 0);
break;
}
case 1610:
{
var d = 0;
var d2 = 0;
J.inc(()=>wildObject.c1, v=>wildObject.c1=v, 1, false, "int");
if ((wildObject.c1 == 18)) {
(d2 = Math.cos(Math.PI));
(d = Math.sin(Math.PI));
this.mSet$6(n4, n5, 300, J.i((d2 * 17.0)), J.i((-d * 17.0)), 1);
(d2 = Math.cos(4.71238898038469));
(d = Math.sin(4.71238898038469));
this.mSet$6(n4, n5, 300, J.i((d2 * 17.0)), J.i((-d * 17.0)), 1);
(d2 = Math.cos(0.0));
(d = Math.sin(0.0));
this.mSet$6(n4, n5, 300, J.i((d2 * 17.0)), J.i((-d * 17.0)), 1);
(d2 = Math.cos(1.5707963267948966));
(d = Math.sin(1.5707963267948966));
this.mSet$6(n4, n5, 300, J.i((d2 * 17.0)), J.i((-d * 17.0)), 1);
(d2 = Math.cos(3.6651914291880923));
(d = Math.sin(3.6651914291880923));
this.mSet$6(n4, n5, 300, J.i((d2 * 17.0)), J.i((-d * 17.0)), 1);
(d2 = Math.cos(5.235987755982989));
(d = Math.sin(5.235987755982989));
this.mSet$6(n4, n5, 300, J.i((d2 * 17.0)), J.i((-d * 17.0)), 1);
(d2 = Math.cos(0.5235987755982988));
(d = Math.sin(0.5235987755982988));
this.mSet$6(n4, n5, 300, J.i((d2 * 17.0)), J.i((-d * 17.0)), 1);
(d2 = Math.cos(2.0943951023931953));
(d = Math.sin(2.0943951023931953));
this.mSet$6(n4, n5, 300, J.i((d2 * 17.0)), J.i((-d * 17.0)), 1);
(d2 = Math.cos(4.1887902047863905));
(d = Math.sin(4.1887902047863905));
this.mSet$6(n4, n5, 300, J.i((d2 * 17.0)), J.i((-d * 17.0)), 1);
(d2 = Math.cos(5.759586531581287));
(d = Math.sin(5.759586531581287));
this.mSet$6(n4, n5, 300, J.i((d2 * 17.0)), J.i((-d * 17.0)), 1);
(d2 = Math.cos(1.0471975511965976));
(d = Math.sin(1.0471975511965976));
this.mSet$6(n4, n5, 300, J.i((d2 * 17.0)), J.i((-d * 17.0)), 1);
(d2 = Math.cos(2.6179938779914944));
(d = Math.sin(2.6179938779914944));
this.mSet$6(n4, n5, 300, J.i((d2 * 17.0)), J.i((-d * 17.0)), 1);
}
else {
if ((wildObject.c1 >= 34)) {
(wildObject.hp = 0);
(wildObject.c = 1001);
(wildObject.c1 = 40);
(wildObject.c2 = wildObject.pt);
}
}
(wildObject.pt = 159);
(wildObject.pth = 0);
break;
}
case 1700:
{
(wildObject.pt = 180);
(wildObject.pth = ((n4 >= this.co_j.x) ? 0 : 1));
if ((wildObject.c1 > 0)) {
J.inc(()=>wildObject.c1, v=>wildObject.c1=v, -1, false, "int");
break;
}
(n6 = this.targetPetY$2(n4, n5));
if ((n6 >= 0)) {
if ((((wildObject.pp >= wildObject.pp_max) && (this.co_p[n6].x >= ((n4 - 224) | 0))) && (this.co_p[n6].x <= ((n4 - 16) | 0)))) {
(wildObject.c = 1720);
(wildObject.c1 = 0);
(wildObject.pp = ((wildObject.pp - 8) | 0));
this.mSet$6(n4, n5, 1150, n3, 0, 1);
(wildObject.muki = 0);
}
else {
(wildObject.c1 = 0);
}
}
if (((wildObject.c == 1720) || ((n6 = this.targetPetChikai$2(n4, n5)) < 0))) {
break;
}
if (((((J.abs(((this.co_p[n6].x - n4) | 0)) + J.abs(((this.co_p[n6].y - n5) | 0))) | 0) < 144) && (wildObject.pp > 20))) {
(wildObject.c = 1710);
(wildObject.c1 = 10);
(wildObject.pp = ((wildObject.pp - 8) | 0));
this.mSet$6(n4, n5, 400, 0, 0, 1);
this.mSet$6(n4, n5, 400, 90, 0, 1);
this.mSet$6(n4, n5, 400, 180, 0, 1);
this.mSet$6(n4, n5, 400, 270, 0, 1);
this.mSet$6(n4, n5, 400, 45, 0, 1);
this.mSet$6(n4, n5, 400, 135, 0, 1);
this.mSet$6(n4, n5, 400, 225, 0, 1);
this.mSet$6(n4, n5, 400, 315, 0, 1);
if ((this.co_p[n6].x <= n4)) {
(wildObject.muki = 0);
break;
}
(wildObject.muki = 1);
break;
}
(wildObject.c1 = 0);
break;
}
case 1710:
{
(wildObject.pt = 180);
(wildObject.pth = wildObject.muki);
J.inc(()=>wildObject.c1, v=>wildObject.c1=v, -1, false, "int");
if ((wildObject.c1 > 0)) {
break;
}
(wildObject.c = 1700);
(wildObject.c1 = 30);
break;
}
case 1720:
{
J.inc(()=>wildObject.c1, v=>wildObject.c1=v, 1, false, "int");
if ((wildObject.c1 >= 41)) {
(wildObject.c = 1700);
(wildObject.c1 = 15);
}
if ((wildObject.c1 < 23)) {
(wildObject.pt = 180);
(wildObject.pth = wildObject.muki);
break;
}
(wildObject.pt = 182);
(wildObject.pth = wildObject.muki);
break;
}
case 1800:
{
(wildObject.pt = 169);
(wildObject.pth = 0);
if ((wildObject.c1 > 0)) {
J.inc(()=>wildObject.c1, v=>wildObject.c1=v, -1, false, "int");
break;
}
(n6 = this.targetPetChikaiX$1(n4));
if ((((n6 < 0) || (J.abs(((this.co_p[n6].x - n4) | 0)) >= 160)) || (wildObject.pp <= 20))) {
break;
}
(wildObject.c = 1810);
(wildObject.c1 = 0);
(wildObject.pp = ((wildObject.pp - 8) | 0));
break;
}
case 1810:
{
if ((J.rem(wildObject.c1, 3) == 0)) {
this.mSet$6(n4, n5, 700, ((Math.imul(this.ranInt$1(31), 10) - 150) | 0), (-(240) | 0), 1);
}
J.inc(()=>wildObject.c1, v=>wildObject.c1=v, 1, false, "int");
if ((wildObject.c1 >= 36)) {
(wildObject.c = 1800);
(wildObject.c1 = 50);
}
(wildObject.pt = 169);
(wildObject.pth = 0);
break;
}
case 1900:
{
var n9 = 0;
var d = 0;
var d2 = 0;
if ((wildObject.c2 == 0)) {
if ((((((this.maps.wx + 512) | 0) + 32) | 0) > n4)) {
(wildObject.c2 = 1);
}
(wildObject.pt = 153);
(wildObject.pth = 0);
}
else {
if ((wildObject.c2 == 1)) {
(wildObject.vx = (-(30) | 0));
(wildObject.pt = ((154 + this.g_ac) | 0));
(wildObject.pth = 0);
if ((((wildObject.positionX - 288) | 0) >= (n4 = ((n4 - 3) | 0)))) {
(n4 = ((wildObject.positionX - 288) | 0));
(wildObject.c2 = 2);
}
if (((this.maps.getBGCode$2(n4, n5) >= 20) || (this.maps.getBGCode$2(n4, ((n5 + 31) | 0)) >= 20))) {
(n4 = ((Math.imul(J.div(n4, 32), 32) + 32) | 0));
(wildObject.c2 = 2);
}
if ((this.maps.getBGCode$2(n4, ((n5 + 32) | 0)) < 20)) {
(n4 = ((Math.imul(J.div(n4, 32), 32) + 32) | 0));
(wildObject.c2 = 2);
}
}
else {
(wildObject.vx = 30);
(wildObject.pt = ((154 + this.g_ac) | 0));
(wildObject.pth = 1);
if ((wildObject.positionX <= (n4 = ((n4 + 3) | 0)))) {
(n4 = wildObject.positionX);
(wildObject.c2 = 1);
}
}
}
(n6 = this.targetPetChikai$2(n4, n5));
if ((((((((n6 >= 0) && (this.maps.getBGCode$2(((n4 + 15) | 0), ((n5 - 1) | 0)) < 20)) && ((n9 = J.abs(((this.co_p[n6].x - n4) | 0))) < 320)) && (n9 > 48)) && (this.co_p[n6].y < ((n5 - 26) | 0))) && (this.co_p[n6].y > ((n5 - 176) | 0))) && (wildObject.pp > 20))) {
(d2 = (((n5 - this.co_p[n6].y) | 0) / ((n4 - this.co_p[n6].x) | 0)));
(d = ((Math.atan(d2) * 180.0) / 3.14));
if (((d > 27.0) && (d < 63.0))) {
(wildObject.c = 1910);
(wildObject.c1 = 0);
(wildObject.muki = 0);
(d2 = Math.cos(1.9896753472735356));
(d = Math.sin(1.9896753472735356));
this.mSet$6(n4, n5, 620, J.i((d2 * 16.0)), J.i((-d * 16.0)), 1);
(d2 = Math.cos(2.234021442552742));
(d = Math.sin(2.234021442552742));
this.mSet$6(n4, n5, 620, J.i((d2 * 16.0)), J.i((-d * 16.0)), 1);
(d2 = Math.cos(2.478367537831948));
(d = Math.sin(2.478367537831948));
this.mSet$6(n4, n5, 620, J.i((d2 * 16.0)), J.i((-d * 16.0)), 1);
(d2 = Math.cos(2.722713633111154));
(d = Math.sin(2.722713633111154));
this.mSet$6(n4, n5, 620, J.i((d2 * 16.0)), J.i((-d * 16.0)), 1);
(wildObject.pp = ((wildObject.pp - 8) | 0));
(n4 = wildObject.x);
(wildObject.pt = 154);
(wildObject.pth = wildObject.muki);
}
else {
if (((d > -63.0) && (d < -27.0))) {
(wildObject.c = 1910);
(wildObject.c1 = 0);
(wildObject.muki = 1);
(d2 = Math.cos(0.41887902047863906));
(d = Math.sin(0.41887902047863906));
this.mSet$6(n4, n5, 620, J.i((d2 * 16.0)), J.i((-d * 16.0)), 1);
(d2 = Math.cos(0.6632251157578452));
(d = Math.sin(0.6632251157578452));
this.mSet$6(n4, n5, 620, J.i((d2 * 16.0)), J.i((-d * 16.0)), 1);
(d2 = Math.cos(0.9075712110370514));
(d = Math.sin(0.9075712110370514));
this.mSet$6(n4, n5, 620, J.i((d2 * 16.0)), J.i((-d * 16.0)), 1);
(d2 = Math.cos(1.1519173063162575));
(d = Math.sin(1.1519173063162575));
this.mSet$6(n4, n5, 620, J.i((d2 * 16.0)), J.i((-d * 16.0)), 1);
(wildObject.pp = ((wildObject.pp - 8) | 0));
(n4 = wildObject.x);
(wildObject.pt = 154);
(wildObject.pth = wildObject.muki);
}
}
}
if (((((wildObject.c == 1910) || ((n6 = this.targetPetTaiatari$2(n4, n5)) < 0)) || (wildObject.pp <= 10)) || (J.abs(((this.co_p[n6].x - n4) | 0)) >= 104))) {
break;
}
(wildObject.c = 1920);
(wildObject.c1 = 0);
(wildObject.pp = ((wildObject.pp - 3) | 0));
(wildObject.muki = ((this.co_p[n6].x <= n4) ? 0 : 1));
(n4 = wildObject.x);
(wildObject.pt = 153);
(wildObject.pth = wildObject.muki);
break;
}
case 1910:
{
J.inc(()=>wildObject.c1, v=>wildObject.c1=v, 1, false, "int");
if ((wildObject.c1 >= 10)) {
(wildObject.c = 1900);
}
(wildObject.pt = ((wildObject.c1 <= 4) ? 154 : 153));
(wildObject.pth = wildObject.muki);
break;
}
case 1920:
{
J.inc(()=>wildObject.c1, v=>wildObject.c1=v, 1, false, "int");
if ((((wildObject.c1 == 1) || (wildObject.c1 == 4)) || (wildObject.c1 == 7))) {
if ((wildObject.muki == 0)) {
this.mSet$6(n4, n5, 610, (-(100) | 0), 0, 1);
}
else {
this.mSet$6(n4, n5, 610, 100, 0, 1);
}
}
if ((wildObject.c1 >= 8)) {
(wildObject.c = 1900);
}
(wildObject.pt = 153);
(wildObject.pth = wildObject.muki);
break;
}
case 2000:
{
(wildObject.pt = 147);
(wildObject.pth = ((n4 >= this.co_j.x) ? 0 : 1));
if ((wildObject.c1 > 0)) {
J.inc(()=>wildObject.c1, v=>wildObject.c1=v, -1, false, "int");
break;
}
(n6 = this.targetPetChikaiX$1(n4));
if ((n6 < 0)) {
break;
}
var n10 = J.abs(((this.co_p[n6].x - n4) | 0));
if (((((n10 < 224) && (n10 > 64)) && (((n5 + 28) | 0) < this.co_p[n6].y)) && (wildObject.pp > 16))) {
(wildObject.c = 2010);
(wildObject.c1 = 0);
(wildObject.pp = ((wildObject.pp - 8) | 0));
if ((this.co_p[n6].x <= n4)) {
(wildObject.muki = 0);
(wildObject.vx = (-(80) | 0));
}
else {
(wildObject.muki = 1);
(wildObject.vx = 80);
}
}
else {
(wildObject.c1 = 0);
}
(n6 = this.targetPetTaiatari$2(n4, n5));
if (((n6 < 0) || (wildObject.pp <= 16))) {
break;
}
(wildObject.c = 2030);
(wildObject.vx = ((n4 >= this.co_p[n6].x) ? (-(100) | 0) : 100));
(wildObject.vy = 0);
(wildObject.c1 = 14);
J.inc(()=>wildObject.pp, v=>wildObject.pp=v, -1, false, "int");
break;
}
case 2010:
{
(wildObject.pt = 147);
(wildObject.pth = wildObject.muki);
(n4 = ((n4 + J.div(wildObject.vx, 10)) | 0));
J.inc(()=>wildObject.c1, v=>wildObject.c1=v, 1, false, "int");
if ((wildObject.c1 >= 32)) {
(wildObject.c = 2020);
}
if ((wildObject.vx > 0)) {
if (((this.maps.getBGCode$2(((n4 + 15) | 0), n5) >= 20) || (this.maps.getBGCode$2(((n4 + 15) | 0), ((n5 + 31) | 0)) >= 20))) {
(n4 = ((Math.imul(J.div(((n4 + 15) | 0), 32), 32) - 16) | 0));
(wildObject.c = 2020);
}
}
else {
if (((wildObject.vx < 0) && ((this.maps.getBGCode$2(((n4 + 15) | 0), n5) >= 20) || (this.maps.getBGCode$2(((n4 + 15) | 0), ((n5 + 31) | 0)) >= 20)))) {
(n4 = ((Math.imul(J.div(((n4 + 15) | 0), 32), 32) + 16) | 0));
(wildObject.c = 2020);
}
}
if ((((((wildObject.c1 != 2) && (wildObject.c1 != 7)) && (wildObject.c1 != 12)) && (wildObject.c1 != 17)) && (wildObject.c1 != 22))) {
break;
}
this.mSet$6(n4, ((n5 + 20) | 0), 550, wildObject.vx, (-(5) | 0), 1);
break;
}
case 2020:
{
if ((J.abs(((n4 - wildObject.positionX) | 0)) < 8)) {
(n4 = wildObject.positionX);
(wildObject.c = 2000);
(wildObject.c1 = 10);
}
else {
if ((n4 > wildObject.positionX)) {
(wildObject.vx = (-(80) | 0));
(n4 = ((n4 - 8) | 0));
}
else {
(wildObject.vx = 80);
(n4 = ((n4 + 8) | 0));
}
}
(wildObject.pt = 147);
if ((wildObject.vx <= 0)) {
(wildObject.pth = 0);
break;
}
(wildObject.pth = 1);
break;
}
case 2030:
{
(wildObject.attack_f = true);
(n4 = ((n4 + J.div(wildObject.vx, 10)) | 0));
if ((wildObject.vx < 0)) {
if (((this.maps.getBGCode$2(((n4 + 15) | 0), n5) >= 20) || (this.maps.getBGCode$2(((n4 + 15) | 0), ((n5 + 31) | 0)) >= 20))) {
(n4 = ((((Math.imul(J.div(((n4 + 15) | 0), 32), 32) + 32) | 0) - 15) | 0));
(wildObject.c = 2020);
}
}
else {
if (((this.maps.getBGCode$2(((n4 + 15) | 0), n5) >= 20) || (this.maps.getBGCode$2(((n4 + 15) | 0), ((n5 + 31) | 0)) >= 20))) {
(n4 = ((Math.imul(J.div(((n4 + 15) | 0), 32), 32) - 16) | 0));
(wildObject.c = 2020);
}
}
J.inc(()=>wildObject.c1, v=>wildObject.c1=v, -1, false, "int");
if ((wildObject.c1 <= 0)) {
(wildObject.c = 2020);
}
(wildObject.pt = 147);
if ((wildObject.vx <= 0)) {
(wildObject.pth = 0);
break;
}
(wildObject.pth = 1);
break;
}
case 2050:
{
J.inc(()=>wildObject.c1, v=>wildObject.c1=v, -1, false, "int");
if ((wildObject.c1 <= 0)) {
(wildObject.c = 2020);
}
(wildObject.pt = 147);
(wildObject.pth = wildObject.muki);
break;
}
case 2100:
{
(n6 = this.targetPetTaiatari$2(n4, n5));
if (((n6 >= 0) && (wildObject.pp > 10))) {
(wildObject.c = 2110);
(wildObject.vx = ((n4 >= this.co_p[n6].x) ? (-(100) | 0) : 100));
(wildObject.vy = 0);
(wildObject.c1 = 14);
J.inc(()=>wildObject.pp, v=>wildObject.pp=v, -1, false, "int");
}
(wildObject.pt = 190);
if ((n4 >= this.co_j.x)) {
(wildObject.pth = 0);
break;
}
(wildObject.pth = 1);
break;
}
case 2110:
{
(wildObject.attack_f = true);
(n4 = ((n4 + J.div(wildObject.vx, 10)) | 0));
if ((wildObject.vx < 0)) {
if (((this.maps.getBGCode$2(((n4 + 15) | 0), n5) >= 20) || (this.maps.getBGCode$2(((n4 + 15) | 0), ((n5 + 31) | 0)) >= 20))) {
(n4 = ((((Math.imul(J.div(((n4 + 15) | 0), 32), 32) + 32) | 0) - 15) | 0));
(wildObject.c = 2120);
}
if ((this.maps.getBGCode$2(((n4 + 15) | 0), ((n5 + 32) | 0)) < 20)) {
(n4 = ((((Math.imul(J.div(((n4 + 15) | 0), 32), 32) + 32) | 0) - 15) | 0));
(wildObject.c = 2120);
}
}
else {
if (((this.maps.getBGCode$2(((n4 + 15) | 0), n5) >= 20) || (this.maps.getBGCode$2(((n4 + 15) | 0), ((n5 + 31) | 0)) >= 20))) {
(n4 = ((Math.imul(J.div(((n4 + 15) | 0), 32), 32) - 16) | 0));
(wildObject.c = 2120);
}
if ((this.maps.getBGCode$2(((n4 + 15) | 0), ((n5 + 32) | 0)) < 20)) {
(n4 = ((Math.imul(J.div(((n4 + 15) | 0), 32), 32) - 16) | 0));
(wildObject.c = 2120);
}
}
J.inc(()=>wildObject.c1, v=>wildObject.c1=v, -1, false, "int");
if ((wildObject.c1 <= 0)) {
(wildObject.c = 2120);
}
(wildObject.pt = 193);
if ((wildObject.vx <= 0)) {
(wildObject.pth = 0);
break;
}
(wildObject.pth = 1);
break;
}
case 2120:
{
if ((J.abs(((n4 - wildObject.positionX) | 0)) < 3)) {
(n4 = wildObject.positionX);
(wildObject.c = 2100);
(wildObject.c1 = 0);
}
else {
if ((n4 > wildObject.positionX)) {
(wildObject.vx = (-(30) | 0));
(n4 = ((n4 - 3) | 0));
}
else {
(wildObject.vx = 30);
(n4 = ((n4 + 3) | 0));
}
}
if ((this.maps.getBGCode$2(((n4 + 15) | 0), ((n5 + 32) | 0)) < 20)) {
(wildObject.c = 2130);
(wildObject.vy = 0);
(wildObject.muki = ((wildObject.vx <= 0) ? 0 : 1));
}
(wildObject.pt = ((191 + this.g_ac) | 0));
if ((wildObject.vx <= 0)) {
(wildObject.pth = 0);
break;
}
(wildObject.pth = 1);
break;
}
case 2130:
{
(n4 = ((n4 + J.div(wildObject.vx, 10)) | 0));
if ((wildObject.vx < 0)) {
if (((this.maps.getBGCode$2(((n4 + 15) | 0), n5) >= 20) || (this.maps.getBGCode$2(((n4 + 15) | 0), ((n5 + 31) | 0)) >= 20))) {
(n4 = ((((Math.imul(J.div(((n4 + 15) | 0), 32), 32) + 32) | 0) - 15) | 0));
}
}
else {
if (((this.maps.getBGCode$2(((n4 + 15) | 0), n5) >= 20) || (this.maps.getBGCode$2(((n4 + 15) | 0), ((n5 + 31) | 0)) >= 20))) {
(n4 = ((Math.imul(J.div(((n4 + 15) | 0), 32), 32) - 16) | 0));
}
}
(wildObject.vy = ((wildObject.vy + 25) | 0));
if ((wildObject.vy > 180)) {
(wildObject.vy = 180);
}
(n5 = ((n5 + J.div(wildObject.vy, 10)) | 0));
if ((wildObject.vy < 0)) {
if ((this.maps.getBGCode$2(((n4 + 15) | 0), n5) >= 20)) {
(n5 = ((Math.imul(J.div(n5, 32), 32) + 32) | 0));
(wildObject.vy = 0);
}
}
else {
if (((wildObject.vy > 0) && (this.maps.getBGCode$2(((n4 + 15) | 0), ((n5 + 31) | 0)) >= 20))) {
(n5 = ((Math.imul(J.div(((n5 + 31) | 0), 32), 32) - 32) | 0));
(wildObject.vx = 0);
(wildObject.c = 2120);
}
}
if ((n5 >= this.ochiru_y)) {
(wildObject.shurui = 0);
(wildObject.c = 0);
}
(wildObject.pt = 191);
(wildObject.pth = wildObject.muki);
break;
}
case 2150:
{
J.inc(()=>wildObject.c1, v=>wildObject.c1=v, -1, false, "int");
if ((wildObject.c1 <= 0)) {
(wildObject.c = 2120);
}
(wildObject.pt = 190);
(wildObject.pth = wildObject.muki);
break;
}
case 2190:
{
(wildObject.pt = 190);
if ((n4 >= this.co_j.x)) {
(wildObject.pth = 0);
break;
}
(wildObject.pth = 1);
break;
}
case 2200:
{
(wildObject.pt = ((this.g_c3 < 6) ? 156 : 157));
(wildObject.pth = 0);
(n6 = this.targetPetChikai$2(n4, n5));
if ((((((n6 < 0) || (this.co_p[n6].x <= ((((n4 + 128) | 0) - 48) | 0))) || (this.co_p[n6].x >= ((((n4 + 128) | 0) + 64) | 0))) || (this.co_p[n6].y <= ((n5 - 80) | 0))) || (wildObject.pp <= 16))) {
break;
}
(wildObject.c = 2210);
(wildObject.c1 = 0);
(wildObject.pp = ((wildObject.pp - 8) | 0));
(wildObject.pt = 157);
(wildObject.pth = 0);
break;
}
case 2210:
{
J.inc(()=>wildObject.c1, v=>wildObject.c1=v, 1, false, "int");
if (((((wildObject.c1 == 1) || (wildObject.c1 == 5)) || (wildObject.c1 == 9)) || (wildObject.c1 == 13))) {
this.mSet$6(n4, n5, 500, ((this.ranInt$1(61) + 40) | 0), (-(225) | 0), 1);
}
if ((wildObject.c1 >= 16)) {
(wildObject.c = 2200);
}
(wildObject.pt = 157);
(wildObject.pth = 0);
break;
}
case 2300:
{
(wildObject.pt = 167);
(wildObject.pth = 0);
break;
}
case 2600:
{
(wildObject.pt = 183);
(wildObject.pth = ((n4 >= this.co_j.x) ? 0 : 1));
(n6 = this.targetPetTaiatari$2(n4, n5));
if ((((n6 < 0) || (wildObject.pp <= 16)) || (J.abs(((this.co_p[n6].x - n4) | 0)) >= 100))) {
break;
}
(wildObject.c = 2620);
(wildObject.c1 = 0);
(wildObject.pp = ((wildObject.pp - 3) | 0));
(wildObject.muki = ((this.co_p[n6].x <= n4) ? 0 : 1));
(n4 = wildObject.x);
break;
}
case 2620:
{
J.inc(()=>wildObject.c1, v=>wildObject.c1=v, 1, false, "int");
if ((((wildObject.c1 == 1) || (wildObject.c1 == 4)) || (wildObject.c1 == 7))) {
if ((wildObject.muki == 0)) {
this.mSet$6(n4, n5, 610, (-(100) | 0), 0, 1);
}
else {
this.mSet$6(n4, n5, 610, 100, 0, 1);
}
}
if ((wildObject.c1 >= 8)) {
(wildObject.c = 2600);
}
(wildObject.pt = 183);
(wildObject.pth = wildObject.muki);
break;
}
case 2700:
{
(wildObject.pt = 144);
(wildObject.pth = 0);
(n6 = this.targetPetChikaiX$1(n4));
if ((n6 < 0)) {
break;
}
var n9 = J.abs(((this.co_p[n6].x - n4) | 0));
if ((((n9 < 42) && (this.co_p[n6].y < ((n5 - 64) | 0))) && (wildObject.pp > 10))) {
(wildObject.c = 2740);
(wildObject.vy = (-(285) | 0));
(wildObject.pp = ((wildObject.pp - 3) | 0));
break;
}
if (((n9 >= 140) || (wildObject.pp < wildObject.pp_max))) {
break;
}
(wildObject.c = 2740);
(wildObject.vy = (-(285) | 0));
(wildObject.pp = ((wildObject.pp - 3) | 0));
break;
}
case 2730:
{
(wildObject.vy = ((wildObject.vy + 25) | 0));
if ((wildObject.vy > 180)) {
(wildObject.vy = 180);
}
(n5 = ((n5 + J.div(wildObject.vy, 10)) | 0));
if ((wildObject.vy < 0)) {
if ((this.maps.getBGCode$2(((n4 + 15) | 0), n5) >= 20)) {
(n5 = ((Math.imul(J.div(n5, 32), 32) + 32) | 0));
(wildObject.vy = 0);
}
}
else {
if (((wildObject.vy > 0) && (n5 >= wildObject.positionY))) {
(n5 = wildObject.positionY);
(wildObject.c = 2700);
}
}
if ((n5 >= this.ochiru_y)) {
(wildObject.shurui = 0);
(wildObject.c = 0);
}
(wildObject.pt = 144);
(wildObject.pth = 0);
break;
}
case 2740:
{
(wildObject.attack_f = true);
(wildObject.vy = ((wildObject.vy + 25) | 0));
if ((wildObject.vy > 180)) {
(wildObject.vy = 180);
}
(n5 = ((n5 + J.div(wildObject.vy, 10)) | 0));
if ((wildObject.vy < 0)) {
if ((this.maps.getBGCode$2(((n4 + 15) | 0), n5) >= 20)) {
(n5 = ((Math.imul(J.div(n5, 32), 32) + 32) | 0));
(wildObject.vy = 0);
}
}
else {
if (((wildObject.vy > 0) && (n5 >= wildObject.positionY))) {
(n5 = wildObject.positionY);
(wildObject.c = 2700);
}
}
if ((n5 >= this.ochiru_y)) {
(wildObject.shurui = 0);
(wildObject.c = 0);
}
(wildObject.pt = 144);
(wildObject.pth = 0);
break;
}
case 2800:
{
var n9 = 0;
var d = 0;
var d2 = 0;
if (((this.pichika_speed <= 0) || (this.pichika_type == 1))) {
(wildObject.c1 = 0);
}
if ((wildObject.c1 < 35)) {
J.inc(()=>wildObject.c1, v=>wildObject.c1=v, 1, false, "int");
(wildObject.pt = 240);
(wildObject.pth = ((n4 >= this.co_j.x) ? 0 : 1));
}
else {
if ((wildObject.c2 == 1)) {
(wildObject.vx = (-(30) | 0));
(wildObject.pt = ((241 + this.g_ac) | 0));
(wildObject.pth = 0);
if ((((wildObject.positionX - 160) | 0) >= (n4 = ((n4 - 3) | 0)))) {
(n4 = ((wildObject.positionX - 160) | 0));
(wildObject.c2 = 2);
(wildObject.c1 = 0);
}
if (((this.maps.getBGCode$2(n4, n5) >= 20) || (this.maps.getBGCode$2(n4, ((n5 + 31) | 0)) >= 20))) {
(n4 = ((Math.imul(J.div(n4, 32), 32) + 32) | 0));
(wildObject.c2 = 2);
(wildObject.c1 = 0);
}
if ((this.maps.getBGCode$2(n4, ((n5 + 32) | 0)) < 20)) {
(n4 = ((Math.imul(J.div(n4, 32), 32) + 32) | 0));
(wildObject.c2 = 2);
(wildObject.c1 = 0);
}
}
else {
(wildObject.vx = 30);
(wildObject.pt = ((241 + this.g_ac) | 0));
(wildObject.pth = 1);
if ((wildObject.positionX <= (n4 = ((n4 + 3) | 0)))) {
(n4 = wildObject.positionX);
(wildObject.c2 = 1);
(wildObject.c1 = 0);
}
}
}
(n6 = this.targetPetChikai$2(n4, n5));
if ((this.pichika_type == 1)) {
if (((((((n6 >= 0) && ((n9 = J.abs(((this.co_p[n6].x - n4) | 0))) < 320)) && (n9 > 48)) && (this.co_p[n6].y > ((n5 + 28) | 0))) && (this.co_p[n6].y < ((n5 + 176) | 0))) && (wildObject.pp > 25))) {
(d2 = (((n5 - this.co_p[n6].y) | 0) / ((n4 - this.co_p[n6].x) | 0)));
(d = ((Math.atan(d2) * 180.0) / 3.14));
if (((d > -52.0) && (d < -32.0))) {
(wildObject.c = 2810);
(wildObject.c1 = 0);
(wildObject.muki = 0);
(d2 = Math.cos(0.41887902047863906));
(d = Math.sin(0.41887902047863906));
this.mSet$6(n4, n5, 650, J.i((-d2 * 16.0)), J.i((d * 16.0)), 1);
(d2 = Math.cos(0.7330382858376184));
(d = Math.sin(0.7330382858376184));
this.mSet$6(n4, n5, 650, J.i((-d2 * 16.0)), J.i((d * 16.0)), 1);
(d2 = Math.cos(1.0471975511965976));
(d = Math.sin(1.0471975511965976));
this.mSet$6(n4, n5, 650, J.i((-d2 * 16.0)), J.i((d * 16.0)), 1);
(wildObject.pp = ((wildObject.pp - 8) | 0));
(n4 = wildObject.x);
(wildObject.pt = 243);
(wildObject.pth = wildObject.muki);
}
else {
if (((d > 32.0) && (d < 52.0))) {
(wildObject.c = 2810);
(wildObject.c1 = 0);
(wildObject.muki = 1);
(d2 = Math.cos(0.41887902047863906));
(d = Math.sin(0.41887902047863906));
this.mSet$6(n4, n5, 650, J.i((d2 * 16.0)), J.i((d * 16.0)), 1);
(d2 = Math.cos(0.7330382858376184));
(d = Math.sin(0.7330382858376184));
this.mSet$6(n4, n5, 650, J.i((d2 * 16.0)), J.i((d * 16.0)), 1);
(d2 = Math.cos(1.0471975511965976));
(d = Math.sin(1.0471975511965976));
this.mSet$6(n4, n5, 650, J.i((d2 * 16.0)), J.i((d * 16.0)), 1);
(wildObject.pp = ((wildObject.pp - 8) | 0));
(n4 = wildObject.x);
(wildObject.pt = 243);
(wildObject.pth = wildObject.muki);
}
}
}
}
else {
if ((((((((n6 >= 0) && (this.maps.getBGCode$2(((n4 + 15) | 0), ((n5 - 1) | 0)) < 20)) && ((n9 = J.abs(((this.co_p[n6].x - n4) | 0))) < 320)) && (n9 > 48)) && (this.co_p[n6].y < ((n5 - 28) | 0))) && (this.co_p[n6].y > ((n5 - 176) | 0))) && (wildObject.pp > 25))) {
(d2 = (((n5 - this.co_p[n6].y) | 0) / ((n4 - this.co_p[n6].x) | 0)));
(d = ((Math.atan(d2) * 180.0) / 3.14));
if (((d > 27.0) && (d < 63.0))) {
(wildObject.c = 2810);
(wildObject.c1 = 0);
(wildObject.muki = 0);
(d2 = Math.cos(0.47123889803846897));
(d = Math.sin(0.47123889803846897));
this.mSet$6(n4, n5, 650, J.i((-d2 * 16.0)), J.i((-d * 16.0)), 1);
(d2 = Math.cos(0.7853981633974483));
(d = Math.sin(0.7853981633974483));
this.mSet$6(n4, n5, 650, J.i((-d2 * 16.0)), J.i((-d * 16.0)), 1);
(d2 = Math.cos(1.0995574287564276));
(d = Math.sin(1.0995574287564276));
this.mSet$6(n4, n5, 650, J.i((-d2 * 16.0)), J.i((-d * 16.0)), 1);
(wildObject.pp = ((wildObject.pp - 8) | 0));
(n4 = wildObject.x);
(wildObject.pt = 243);
(wildObject.pth = wildObject.muki);
}
else {
if (((d > -63.0) && (d < -27.0))) {
(wildObject.c = 2810);
(wildObject.c1 = 0);
(wildObject.muki = 1);
(d2 = Math.cos(0.47123889803846897));
(d = Math.sin(0.47123889803846897));
this.mSet$6(n4, n5, 650, J.i((d2 * 16.0)), J.i((-d * 16.0)), 1);
(d2 = Math.cos(0.7853981633974483));
(d = Math.sin(0.7853981633974483));
this.mSet$6(n4, n5, 650, J.i((d2 * 16.0)), J.i((-d * 16.0)), 1);
(d2 = Math.cos(1.0995574287564276));
(d = Math.sin(1.0995574287564276));
this.mSet$6(n4, n5, 650, J.i((d2 * 16.0)), J.i((-d * 16.0)), 1);
(wildObject.pp = ((wildObject.pp - 8) | 0));
(n4 = wildObject.x);
(wildObject.pt = 243);
(wildObject.pth = wildObject.muki);
}
}
}
}
if (((wildObject.c == 2810) || ((n6 = this.targetPetY$2(n4, n5)) < 0))) {
break;
}
(n9 = 0);
(n9 = (((this.pichika_type == 1) && (J.abs(((this.co_p[n6].x - n4) | 0)) <= 192)) ? 1 : ((J.abs(((this.co_p[n6].x - n4) | 0)) <= 144) ? 1 : 0)));
if ((((n9 != 1) || (wildObject.pp <= 11)) || (wildObject.pp <= ((this.pichika_waza2_pp + 8) | 0)))) {
break;
}
(wildObject.c = 2820);
(wildObject.c1 = 0);
(wildObject.pp = ((wildObject.pp - this.pichika_waza2_pp) | 0));
if ((this.co_p[n6].x <= n4)) {
(wildObject.muki = 0);
this.mSet$6(n4, n5, 640, (-(16) | 0), 0, 1);
}
else {
(wildObject.muki = 1);
this.mSet$6(n4, n5, 640, 16, 0, 1);
}
(n4 = wildObject.x);
(wildObject.pt = 243);
(wildObject.pth = wildObject.muki);
break;
}
case 2810:
{
J.inc(()=>wildObject.c1, v=>wildObject.c1=v, 1, false, "int");
(wildObject.pt = ((wildObject.c1 <= 10) ? 243 : 240));
(wildObject.pth = wildObject.muki);
if ((wildObject.c1 < 30)) {
break;
}
(wildObject.c = 2800);
(wildObject.c1 = 35);
break;
}
case 2820:
{
J.inc(()=>wildObject.c1, v=>wildObject.c1=v, 1, false, "int");
if ((wildObject.c1 >= 20)) {
(wildObject.c = 2800);
}
(wildObject.pt = ((wildObject.c1 < 10) ? 243 : 240));
(wildObject.pth = wildObject.muki);
if ((wildObject.c1 < 20)) {
break;
}
(wildObject.c = 2800);
(wildObject.c1 = 35);
break;
}
case 2900:
{
if (((n4 = ((n4 - 6) | 0)) <= wildObject.positionX)) {
(n4 = wildObject.positionX);
(wildObject.c = 2910);
(wildObject.c1 = 5);
}
(wildObject.pt = 1000);
(wildObject.pth = 0);
if ((wildObject.fc <= 0)) {
break;
}
(wildObject.pt = 1001);
break;
}
case 2910:
{
J.inc(()=>wildObject.c1, v=>wildObject.c1=v, 1, false, "int");
if ((wildObject.c1 == 10)) {
(wildObject.pp = ((wildObject.pp - 8) | 0));
this.mSet$6(n4, n5, 410, 0, 0, 1);
this.mSet$6(n4, n5, 410, 60, 0, 1);
this.mSet$6(n4, n5, 410, 120, 0, 1);
this.mSet$6(n4, n5, 410, 180, 0, 1);
this.mSet$6(n4, n5, 410, 240, 0, 1);
this.mSet$6(n4, n5, 410, 300, 0, 1);
}
else {
if ((wildObject.c1 == 22)) {
this.mSet$6(n4, n5, 410, 0, 0, 1);
this.mSet$6(n4, n5, 410, 120, 0, 1);
this.mSet$6(n4, n5, 410, 240, 0, 1);
}
else {
if ((wildObject.c1 > 85)) {
(wildObject.c = 2920);
(wildObject.muki = 0);
(wildObject.c1 = 0);
(wildObject.pp = ((wildObject.pp - 3) | 0));
}
}
}
(wildObject.pt = 1000);
(wildObject.pth = 0);
if ((wildObject.fc <= 0)) {
break;
}
(wildObject.pt = 1001);
break;
}
case 2920:
{
var n8 = 0;
J.inc(()=>wildObject.c1, v=>wildObject.c1=v, 1, false, "int");
if ((((wildObject.c1 == 1) || (wildObject.c1 == 8)) || (wildObject.c1 == 15))) {
(n6 = this.targetPetChikai$2(n4, n5));
if ((n6 >= 0)) {
var n11 = ((this.co_p[n6].x - n4) | 0);
(n8 = ((this.co_p[n6].y - n5) | 0));
var n12 = J.i(Math.sqrt(((Math.imul(n11, n11) + Math.imul(n8, n8)) | 0)));
if ((n12 < 32)) {
this.mSet$6(n4, n5, 420, (-(6) | 0), 6, 1);
}
else {
(n11 = J.div(Math.imul(10, n11), n12));
(n8 = J.div(Math.imul(10, n8), n12));
this.mSet$6(n4, n5, 420, n11, n8, 1);
(wildObject.muki = ((this.co_p[n6].x > n4) ? 1 : 0));
}
}
}
else {
if ((wildObject.c1 > 40)) {
(wildObject.c = ((n4 < wildObject.positionX) ? 2940 : ((wildObject.pp > 11) ? 2930 : 2950)));
}
}
if ((wildObject.muki == 1)) {
(wildObject.pt = 1005);
(wildObject.pth = 0);
if ((wildObject.fc <= 0)) {
break;
}
(wildObject.pt = 1006);
break;
}
(wildObject.pt = 1000);
(wildObject.pth = 0);
if ((wildObject.fc <= 0)) {
break;
}
(wildObject.pt = 1001);
break;
}
case 2930:
{
if (((n4 = ((n4 - 6) | 0)) <= ((wildObject.positionX - 224) | 0))) {
(n4 = ((wildObject.positionX - 224) | 0));
(wildObject.c = 2910);
(wildObject.c1 = 0);
}
(wildObject.pt = 1000);
(wildObject.pth = 0);
if ((wildObject.fc <= 0)) {
break;
}
(wildObject.pt = 1001);
break;
}
case 2940:
{
if (((n4 = ((n4 + 6) | 0)) >= wildObject.positionX)) {
(n4 = wildObject.positionX);
if ((wildObject.pp > 11)) {
(wildObject.c = 2910);
(wildObject.c1 = 0);
}
else {
(wildObject.c = 2950);
}
}
(wildObject.pt = 1005);
(wildObject.pth = 0);
if ((wildObject.fc <= 0)) {
break;
}
(wildObject.pt = 1006);
break;
}
case 2950:
{
if (((n5 = ((n5 - 6) | 0)) <= ((this.maps.wy - 48) | 0))) {
(wildObject.shurui = 0);
(wildObject.c = 0);
this.km.init1$1(13);
this.km.addItem$2(13, this.name_crys);
this.km.addItem$2(13, "あらっ、逃げられちゃったみたい。");
this.km.activeNigyouTime$5(13, 300, 12, 200, Color.magenta);
}
(wildObject.pt = 1000);
(wildObject.pth = 0);
if ((wildObject.fc <= 0)) {
break;
}
(wildObject.pt = 1001);
break;
}
case 3000:
{
if (((n4 = ((n4 - 6) | 0)) <= wildObject.positionX)) {
(n4 = wildObject.positionX);
(wildObject.c = 3010);
(wildObject.c1 = 10);
}
(wildObject.pt = 1100);
(wildObject.pth = 0);
if ((wildObject.fc <= 0)) {
break;
}
(wildObject.pt = 1101);
break;
}
case 3010:
{
var d = 0;
var d2 = 0;
J.inc(()=>wildObject.c1, v=>wildObject.c1=v, 1, false, "int");
if ((wildObject.c1 == 20)) {
(n7 = 0);
while ((n7 < 360)) {
(d2 = Math.cos(((n7 * (Math.PI * 2)) / 360.0)));
(d = Math.sin(((n7 * (Math.PI * 2)) / 360.0)));
this.mSet$6(n4, n5, 100, J.i((d2 * 12.0)), J.i((-d * 12.0)), 1);
(n7 = ((n7 + 30) | 0));
}
(wildObject.pp = ((wildObject.pp - 8) | 0));
}
else {
if ((wildObject.c1 > 60)) {
(n6 = this.targetPetChikaiX$1(n4));
if ((n6 >= 0)) {
(wildObject.c = 3020);
(wildObject.c1 = 0);
(wildObject.c2 = ((this.co_p[n6].x + 76) | 0));
if ((wildObject.c2 >= n4)) {
(wildObject.c1 = 1);
(wildObject.c2 = n4);
}
}
else {
(wildObject.c = 3020);
(wildObject.c1 = 0);
(wildObject.c2 = ((((n4 - 128) | 0) + 76) | 0));
}
}
}
if (((wildObject.c1 < 20) || (wildObject.c1 > 45))) {
(wildObject.pt = 1100);
if ((wildObject.fc > 0)) {
(wildObject.pt = 1101);
}
}
else {
(wildObject.pt = 1110);
if ((wildObject.fc > 0)) {
(wildObject.pt = 1111);
}
}
(wildObject.pth = 0);
break;
}
case 3020:
{
if ((wildObject.c1 <= 0)) {
if (((n4 = ((n4 - 6) | 0)) <= wildObject.c2)) {
(n4 = wildObject.c2);
(wildObject.c1 = 1);
}
}
else {
J.inc(()=>wildObject.c1, v=>wildObject.c1=v, 1, false, "int");
if ((wildObject.c1 == 20)) {
this.mSet$6(((n4 - 76) | 0), n5, 1000, 0, 0, 1);
(wildObject.pp = ((wildObject.pp - 8) | 0));
}
else {
if ((wildObject.c1 > 50)) {
(wildObject.c = ((wildObject.pp <= 16) ? 3060 : 3030));
}
}
}
if (((wildObject.c1 < 10) || (wildObject.c1 > 40))) {
(wildObject.pt = 1100);
if ((wildObject.fc > 0)) {
(wildObject.pt = 1101);
}
}
else {
(wildObject.pt = 1110);
if ((wildObject.fc > 0)) {
(wildObject.pt = 1111);
}
}
(wildObject.pth = 0);
break;
}
case 3030:
{
(wildObject.pt = 1100);
if ((wildObject.fc > 0)) {
(wildObject.pt = 1101);
}
(wildObject.pth = 0);
if ((n4 > ((wildObject.positionX - 256) | 0))) {
if (((n4 = ((n4 - 6) | 0)) > ((wildObject.positionX - 256) | 0))) {
break;
}
(n4 = ((wildObject.positionX - 256) | 0));
break;
}
if ((n4 < ((wildObject.positionX - 256) | 0))) {
if (((n4 = ((n4 + 6) | 0)) >= ((wildObject.positionX - 256) | 0))) {
(n4 = ((wildObject.positionX - 256) | 0));
}
(wildObject.pt = 1105);
if ((wildObject.fc <= 0)) {
break;
}
(wildObject.pt = 1101);
break;
}
(wildObject.c = 3040);
(wildObject.c1 = 0);
break;
}
case 3040:
{
var d = 0;
var d2 = 0;
J.inc(()=>wildObject.c1, v=>wildObject.c1=v, 1, false, "int");
if ((wildObject.c1 == 20)) {
(n7 = 0);
while ((n7 < 360)) {
(d2 = Math.cos(((n7 * (Math.PI * 2)) / 360.0)));
(d = Math.sin(((n7 * (Math.PI * 2)) / 360.0)));
this.mSet$6(n4, n5, 100, J.i((d2 * 12.0)), J.i((-d * 12.0)), 1);
(n7 = ((n7 + 30) | 0));
}
(wildObject.pp = ((wildObject.pp - 8) | 0));
}
else {
if ((wildObject.c1 > 60)) {
(n6 = this.targetPetChikaiX$1(n4));
if ((n6 >= 0)) {
(wildObject.c = 3050);
(wildObject.c1 = 0);
(wildObject.c2 = ((this.co_p[n6].x - 76) | 0));
if ((wildObject.c2 <= n4)) {
(wildObject.c1 = 1);
(wildObject.c2 = n4);
}
}
else {
(wildObject.c = 3050);
(wildObject.c1 = 0);
(wildObject.c2 = ((((n4 - 128) | 0) - 76) | 0));
}
}
}
if (((wildObject.c1 < 20) || (wildObject.c1 > 45))) {
(wildObject.pt = 1100);
if ((wildObject.fc > 0)) {
(wildObject.pt = 1101);
}
}
else {
(wildObject.pt = 1110);
if ((wildObject.fc > 0)) {
(wildObject.pt = 1111);
}
}
(wildObject.pth = 0);
break;
}
case 3050:
{
if ((wildObject.c1 <= 0)) {
if (((n4 = ((n4 + 6) | 0)) >= wildObject.c2)) {
(n4 = wildObject.c2);
(wildObject.c1 = 1);
}
}
else {
J.inc(()=>wildObject.c1, v=>wildObject.c1=v, 1, false, "int");
if ((wildObject.c1 == 20)) {
this.mSet$6(((n4 + 76) | 0), n5, 1000, 0, 0, 1);
(wildObject.pp = ((wildObject.pp - 8) | 0));
}
else {
if ((wildObject.c1 > 50)) {
(wildObject.c = 3060);
}
}
}
if (((wildObject.c1 < 10) || (wildObject.c1 > 40))) {
(wildObject.pt = 1105);
if ((wildObject.fc > 0)) {
(wildObject.pt = 1106);
}
}
else {
(wildObject.pt = 1115);
if ((wildObject.fc > 0)) {
(wildObject.pt = 1116);
}
}
(wildObject.pth = 0);
break;
}
case 3060:
{
(wildObject.pt = 1100);
if ((wildObject.fc > 0)) {
(wildObject.pt = 1101);
}
(wildObject.pth = 0);
if ((n4 > wildObject.positionX)) {
if (((n4 = ((n4 - 6) | 0)) > wildObject.positionX)) {
break;
}
(n4 = wildObject.positionX);
break;
}
if ((n4 < wildObject.positionX)) {
if (((n4 = ((n4 + 6) | 0)) >= wildObject.positionX)) {
(n4 = wildObject.positionX);
}
(wildObject.pt = 1105);
if ((wildObject.fc <= 0)) {
break;
}
(wildObject.pt = 1101);
break;
}
if ((wildObject.pp > 16)) {
(wildObject.c = 3010);
(wildObject.c1 = 0);
break;
}
(wildObject.c = 3090);
break;
}
case 3090:
{
if (((n5 = ((n5 - 6) | 0)) <= ((this.maps.wy - 48) | 0))) {
(wildObject.shurui = 0);
(wildObject.c = 0);
this.km.init1$1(13);
this.km.addItem$2(13, this.name_crys);
this.km.addItem$2(13, "あらっ、逃げられちゃったみたい。");
this.km.activeNigyouTime$5(13, 300, 12, 200, Color.magenta);
}
(wildObject.pt = 1100);
(wildObject.pth = 0);
if ((wildObject.fc <= 0)) {
break;
}
(wildObject.pt = 1101);
break;
}
case 3100:
{
if (((n5 = ((n5 + 4) | 0)) >= wildObject.positionY)) {
(n5 = wildObject.positionY);
(wildObject.c = 3110);
(wildObject.c1 = 0);
(wildObject.c2 = wildObject.hp);
(wildObject.c3 = 0);
}
(wildObject.pt = 1200);
(wildObject.pth = 0);
if ((wildObject.fc <= 0)) {
break;
}
(wildObject.pt = 1201);
break;
}
case 3110:
{
if ((((((wildObject.c1 <= 0) || (wildObject.c1 == 2)) || (wildObject.c1 == 4)) || (wildObject.c1 == 6)) && (wildObject.hp < ((wildObject.c2 - 30) | 0)))) {
(wildObject.c2 = wildObject.hp);
J.inc(()=>wildObject.c1, v=>wildObject.c1=v, 1, false, "int");
}
if (((((wildObject.c1 == 1) || (wildObject.c1 == 3)) || (wildObject.c1 == 5)) || (wildObject.c1 >= 7))) {
if ((wildObject.c1 == 1)) {
if (((n5 = ((n5 + 6) | 0)) >= ((wildObject.positionY + 64) | 0))) {
(n5 = ((wildObject.positionY + 64) | 0));
(wildObject.c1 = 2);
}
}
else {
if ((wildObject.c1 == 3)) {
if (((n5 = ((n5 + 6) | 0)) >= ((wildObject.positionY + 128) | 0))) {
(n5 = ((wildObject.positionY + 128) | 0));
(wildObject.c1 = 4);
}
}
else {
if ((wildObject.c1 == 5)) {
if (((n5 = ((n5 - 6) | 0)) <= ((wildObject.positionY + 64) | 0))) {
(n5 = ((wildObject.positionY + 64) | 0));
(wildObject.c1 = 6);
}
}
else {
if (((n5 = ((n5 - 6) | 0)) <= wildObject.positionY)) {
(n5 = wildObject.positionY);
(wildObject.c1 = 0);
}
}
}
}
}
J.inc(()=>wildObject.c3, v=>wildObject.c3=v, 1, false, "int");
if ((wildObject.c3 == 10)) {
if ((wildObject.pp > 8)) {
(wildObject.pp = ((wildObject.pp - 8) | 0));
this.mSet$6(((((this.sl_wx + 32) | 0) + Math.imul(32, this.ranInt$1(12))) | 0), ((this.sl_wy - 32) | 0), 110, (-(2) | 0), 7, 1);
}
else {
(wildObject.c = 3190);
}
}
else {
if (((((wildObject.c3 == 15) || (wildObject.c3 == 20)) || (wildObject.c3 == 25)) || (wildObject.c3 == 30))) {
this.mSet$6(((((this.sl_wx + 32) | 0) + Math.imul(32, this.ranInt$1(12))) | 0), ((this.sl_wy - 32) | 0), 110, (-(2) | 0), 7, 1);
}
else {
if ((wildObject.c3 >= 60)) {
(wildObject.c3 = 0);
}
}
}
(wildObject.pt = 1200);
(wildObject.pth = 0);
if ((wildObject.fc <= 0)) {
break;
}
(wildObject.pt = 1201);
break;
}
case 3190:
{
if (((n5 = ((n5 - 6) | 0)) <= ((this.maps.wy - 48) | 0))) {
(wildObject.shurui = 0);
(wildObject.c = 0);
this.km.init1$1(13);
this.km.addItem$2(13, this.name_crys);
this.km.addItem$2(13, "あらっ、逃げられちゃったみたい。");
this.km.activeNigyouTime$5(13, 300, 12, 200, Color.magenta);
}
(wildObject.pt = 1200);
(wildObject.pth = 0);
if ((wildObject.fc <= 0)) {
break;
}
(wildObject.pt = 1201);
break;
}
case 3200:
{
if ((wildObject.c2 <= 0)) {
this.mSet$6(n4, n5, 1600, n3, 0, 1);
(wildObject.pp = ((wildObject.pp - 8) | 0));
(wildObject.c2 = 1);
(wildObject.c1 = 0);
}
else {
if ((wildObject.c2 == 1)) {
J.inc(()=>wildObject.c1, v=>wildObject.c1=v, 1, false, "int");
if ((wildObject.c1 >= 40)) {
if ((wildObject.pp > 8)) {
(wildObject.c2 = 2);
(wildObject.c1 = 0);
(wildObject.pp = ((wildObject.pp - 8) | 0));
}
else {
(wildObject.c = 600);
}
}
}
else {
if ((wildObject.c2 == 2)) {
J.inc(()=>wildObject.c1, v=>wildObject.c1=v, 1, false, "int");
if (((J.rem(wildObject.c1, 4) == 0) && (wildObject.c1 < 65))) {
this.mSet$6(n4, n5, 500, (((-(this.ranInt$1(95)) | 0) - 20) | 0), (-(225) | 0), 1);
}
if ((wildObject.c1 >= 110)) {
(wildObject.c2 = 3);
(wildObject.c1 = 0);
}
}
else {
if ((wildObject.c2 == 3)) {
if ((wildObject.pp > 8)) {
this.mSet$6(n4, n5, 1610, n3, 0, 1);
(wildObject.pp = ((wildObject.pp - 8) | 0));
(wildObject.c2 = 1);
(wildObject.c1 = (-(40) | 0));
}
else {
(wildObject.c = 600);
}
}
}
}
}
(wildObject.pt = 1300);
(wildObject.pth = 0);
if ((wildObject.fc <= 0)) {
break;
}
(wildObject.pt = 1301);
break;
}
case 11000:
{
if ((wildObject.move_wc > 0)) {
(wildObject.move_wc = ((wildObject.speed > 0) ? J.inc(()=>wildObject.move_wc, v=>wildObject.move_wc=v, -1, false, "int") : 10));
if ((n4 == this.gym_kijyun)) {
(wildObject.vx = 0);
(wildObject.move_wc = 25);
}
if ((wildObject.move_wc <= 0)) {
if ((n4 > this.gym_kijyun)) {
(wildObject.vx = (-(wildObject.speed) | 0));
}
else {
if ((n4 < this.gym_kijyun)) {
(wildObject.vx = wildObject.speed);
}
else {
(wildObject.vx = 0);
(wildObject.move_wc = 25);
}
}
}
}
else {
(n4 = ((n4 + J.div(wildObject.vx, 10)) | 0));
if ((wildObject.vx < 0)) {
if ((n4 <= this.gym_kijyun)) {
(n4 = this.gym_kijyun);
(wildObject.move_wc = 30);
(wildObject.vx = 0);
}
}
else {
if ((n4 >= this.gym_kijyun)) {
(n4 = this.gym_kijyun);
(wildObject.move_wc = 30);
(wildObject.vx = 0);
}
}
}
if ((wildObject.pp <= 0)) {
(wildObject.meirei = 10);
}
if ((wildObject.vx == 0)) {
(wildObject.pt = wildObject.spt[0]);
(wildObject.pth = 0);
}
else {
if ((wildObject.vx <= 0)) {
(wildObject.pt = wildObject.spt[((1 + this.g_ac) | 0)]);
(wildObject.pth = 0);
}
else {
(wildObject.pt = wildObject.spt[((1 + this.g_ac) | 0)]);
(wildObject.pth = 1);
}
}
if ((wildObject.meirei <= 0)) {
break;
}
this.gpWazaC$4(wildObject, n4, n5, n3);
break;
}
case 11100:
{
(n4 = ((n4 + J.div(wildObject.vx, 10)) | 0));
if ((wildObject.vx < 0)) {
if (((this.maps.getBGCode$2(((n4 + 15) | 0), n5) >= 20) || (this.maps.getBGCode$2(((n4 + 15) | 0), ((n5 + 31) | 0)) >= 20))) {
(n4 = ((((Math.imul(J.div(((n4 + 15) | 0), 32), 32) + 32) | 0) - 15) | 0));
}
}
else {
if (((this.maps.getBGCode$2(((n4 + 15) | 0), n5) >= 20) || (this.maps.getBGCode$2(((n4 + 15) | 0), ((n5 + 31) | 0)) >= 20))) {
(n4 = ((Math.imul(J.div(((n4 + 15) | 0), 32), 32) - 16) | 0));
}
}
(wildObject.vy = ((wildObject.vy + 25) | 0));
if ((wildObject.vy > 180)) {
(wildObject.vy = 180);
}
if (((wildObject.vy > 0) && (this.maps.getBGCode$2(((n4 + 15) | 0), (((n5 = ((n5 + J.div(wildObject.vy, 10)) | 0)) + 31) | 0)) >= 20))) {
(n5 = ((Math.imul(J.div(((n5 + 31) | 0), 32), 32) - 32) | 0));
(wildObject.vx = 0);
(wildObject.c = 11000);
(wildObject.muki = 0);
(wildObject.move_wc = 30);
}
if ((n5 >= this.ochiru_y)) {
(wildObject.shurui = 0);
(wildObject.c = 0);
}
(wildObject.pt = ((wildObject.shurui == 1100) ? ((wildObject.vx == 0) ? ((wildObject.c == 11000) ? 140 : ((wildObject.vy <= 50) ? 143 : 140)) : 141) : ((wildObject.shurui == 1400) ? ((wildObject.vx == 0) ? 170 : 173) : wildObject.spt[1])));
(wildObject.pth = wildObject.muki);
break;
}
case 11150:
{
(wildObject.attack_f = true);
if (((wildObject.vx < 0) && ((this.maps.getBGCode$2((((n4 = ((n4 + J.div(wildObject.vx, 10)) | 0)) + 15) | 0), n5) >= 20) || (this.maps.getBGCode$2(((n4 + 15) | 0), ((n5 + 31) | 0)) >= 20)))) {
(n4 = ((((Math.imul(J.div(((n4 + 15) | 0), 32), 32) + 32) | 0) - 15) | 0));
}
(wildObject.vy = ((wildObject.vy + 25) | 0));
if ((wildObject.vy > 180)) {
(wildObject.vy = 180);
}
(n5 = ((n5 + J.div(wildObject.vy, 10)) | 0));
if ((wildObject.vy < 0)) {
if ((this.maps.getBGCode$2(((n4 + 15) | 0), n5) >= 20)) {
(n5 = ((Math.imul(J.div(n5, 32), 32) + 32) | 0));
(wildObject.vy = 0);
}
}
else {
if (((wildObject.vy > 0) && (this.maps.getBGCode$2(((n4 + 15) | 0), ((n5 + 31) | 0)) >= 20))) {
(n5 = ((Math.imul(J.div(((n5 + 31) | 0), 32), 32) - 32) | 0));
(wildObject.vx = 0);
(wildObject.c = 11000);
(wildObject.move_wc = 30);
}
}
if ((n5 >= this.ochiru_y)) {
(wildObject.shurui = 0);
(wildObject.c = 0);
}
(wildObject.pt = (((wildObject.shurui == 2400) || (wildObject.shurui == 2700)) ? wildObject.spt[1] : 163));
(wildObject.pth = wildObject.muki);
break;
}
case 11200:
{
(wildObject.vy = ((wildObject.vy + 25) | 0));
if ((wildObject.vy > 180)) {
(wildObject.vy = 180);
}
(n5 = ((n5 + J.div(wildObject.vy, 10)) | 0));
if ((wildObject.vy == 0)) {
this.mSet$6(n4, n5, 100, (-(17) | 0), 6, 1);
wildObject.delPP$1(3);
}
if (((wildObject.vy > 0) && (this.maps.getBGCode$2(((n4 + 15) | 0), ((n5 + 31) | 0)) >= 20))) {
(n5 = ((Math.imul(J.div(((n5 + 31) | 0), 32), 32) - 32) | 0));
(wildObject.vx = 0);
(wildObject.c = 11000);
(wildObject.move_wc = 30);
}
if ((n5 >= this.ochiru_y)) {
(wildObject.shurui = 0);
(wildObject.c = 0);
}
(wildObject.pt = ((wildObject.vy < 0) ? 143 : 141));
(wildObject.pth = wildObject.muki);
break;
}
case 11300:
{
(wildObject.attack_f = true);
if (((wildObject.vx < 0) && ((this.maps.getBGCode$2((((n4 = ((n4 + J.div(wildObject.vx, 10)) | 0)) + 15) | 0), n5) >= 20) || (this.maps.getBGCode$2(((n4 + 15) | 0), ((n5 + 31) | 0)) >= 20)))) {
(n4 = ((((Math.imul(J.div(((n4 + 15) | 0), 32), 32) + 32) | 0) - 15) | 0));
(wildObject.c = 11100);
}
J.inc(()=>wildObject.c1, v=>wildObject.c1=v, -1, false, "int");
if ((wildObject.c1 <= 0)) {
(wildObject.c = 11100);
}
if (((wildObject.c == 1100) && (this.maps.getBGCode$2(((n4 + 15) | 0), ((n5 + 32) | 0)) >= 20))) {
(wildObject.c = 11000);
(wildObject.vx = 0);
(wildObject.move_wc = 30);
}
(wildObject.pth = wildObject.muki);
if ((wildObject.shurui == 1400)) {
(wildObject.pt = 173);
break;
}
if ((wildObject.shurui == 2100)) {
(wildObject.pt = 193);
break;
}
(wildObject.pt = wildObject.spt[1]);
break;
}
case 11400:
{
var d = 0;
var d2 = 0;
J.inc(()=>wildObject.c1, v=>wildObject.c1=v, -1, false, "int");
if ((wildObject.c1 <= 0)) {
(wildObject.c = 11000);
(wildObject.move_wc = 25);
}
if ((((wildObject.c1 == 10) && (wildObject.shurui == 1200)) && (wildObject.c2 == 1))) {
(d2 = Math.cos(0.3141592653589793));
(d = Math.sin(0.3141592653589793));
this.mSet$6(n4, n5, 200, J.i((-d2 * 16.0)), J.i((-d * 16.0)), 1);
(d2 = Math.cos(0.9424777960769379));
(d = Math.sin(0.9424777960769379));
this.mSet$6(n4, n5, 200, J.i((-d2 * 16.0)), J.i((-d * 16.0)), 1);
}
if ((wildObject.shurui == 1200)) {
(wildObject.pt = 152);
}
(wildObject.pth = wildObject.muki);
break;
}
case 11410:
{
J.inc(()=>wildObject.c1, v=>wildObject.c1=v, -1, false, "int");
if ((wildObject.c1 <= 0)) {
(wildObject.c = 11000);
(wildObject.move_wc = 25);
}
(wildObject.pt = 180);
(wildObject.pth = wildObject.muki);
break;
}
case 11420:
{
J.inc(()=>wildObject.c1, v=>wildObject.c1=v, -1, false, "int");
if ((wildObject.c1 <= 0)) {
(wildObject.c = 11000);
(wildObject.move_wc = 25);
if ((wildObject.type == 1)) {
(wildObject.c = 12000);
(wildObject.move_wc = 10);
}
}
if ((wildObject.shurui == 2200)) {
(wildObject.pt = ((this.g_c3 < 6) ? wildObject.spt[0] : wildObject.spt[2]));
(wildObject.pth = 0);
break;
}
(wildObject.pt = 172);
(wildObject.pth = wildObject.muki);
break;
}
case 11425:
{
J.inc(()=>wildObject.c1, v=>wildObject.c1=v, -1, false, "int");
if ((wildObject.c1 <= 0)) {
(wildObject.c = 11000);
(wildObject.move_wc = 25);
}
(wildObject.pt = 243);
(wildObject.pth = wildObject.muki);
break;
}
case 11426:
{
J.inc(()=>wildObject.c1, v=>wildObject.c1=v, -1, false, "int");
if ((wildObject.c1 <= 0)) {
(wildObject.c = 11000);
(wildObject.move_wc = 25);
}
(wildObject.pt = 243);
(wildObject.pth = wildObject.muki);
break;
}
case 11430:
{
if ((J.rem(wildObject.c1, 3) == 0)) {
this.mSet$6(n4, n5, 700, ((Math.imul(this.ranInt$1(31), 10) - 150) | 0), (-(240) | 0), 1);
}
J.inc(()=>wildObject.c1, v=>wildObject.c1=v, 1, false, "int");
if ((wildObject.c1 >= 36)) {
(wildObject.c = 11000);
(wildObject.move_wc = 25);
}
(wildObject.pt = 169);
(wildObject.pth = 0);
break;
}
case 11440:
{
if ((J.rem(wildObject.c1, 3) == 0)) {
this.mSet$6(n4, n5, 750, ((Math.imul(this.ranInt$1(31), 10) - 150) | 0), n3, 0);
}
J.inc(()=>wildObject.c1, v=>wildObject.c1=v, 1, false, "int");
if ((wildObject.c1 >= 36)) {
(wildObject.c = 11000);
(wildObject.move_wc = 25);
}
(wildObject.pt = 168);
(wildObject.pth = 0);
break;
}
case 11450:
{
J.inc(()=>wildObject.c1, v=>wildObject.c1=v, 1, false, "int");
if ((((wildObject.c1 == 1) || (wildObject.c1 == 4)) || (wildObject.c1 == 7))) {
this.mSet$6(n4, n5, 610, (-(100) | 0), 0, 1);
}
if ((wildObject.c1 >= 8)) {
(wildObject.c = 11000);
(wildObject.move_wc = 25);
}
(wildObject.pt = wildObject.spt[0]);
(wildObject.pth = wildObject.muki);
break;
}
case 11455:
{
J.inc(()=>wildObject.c1, v=>wildObject.c1=v, 1, false, "int");
if (((((wildObject.c1 == 1) || (wildObject.c1 == 4)) || (wildObject.c1 == 7)) || (wildObject.c1 == 10))) {
this.mSet$6(((((n4 - Math.imul(this.ranInt$1(6), 32)) | 0) - 32) | 0), ((this.maps.wy - 32) | 0), 800, 0, 0, 1);
}
if ((wildObject.c1 >= 11)) {
(wildObject.c = 11000);
(wildObject.move_wc = 25);
}
(wildObject.pt = wildObject.spt[0]);
(wildObject.pth = wildObject.muki);
break;
}
case 11460:
{
J.inc(()=>wildObject.c1, v=>wildObject.c1=v, -1, false, "int");
if ((wildObject.c1 <= 0)) {
(wildObject.c = 11000);
(wildObject.move_wc = 25);
}
(wildObject.pt = wildObject.spt[1]);
(wildObject.pth = wildObject.muki);
break;
}
case 11470:
{
J.inc(()=>wildObject.c1, v=>wildObject.c1=v, 1, false, "int");
if (((((wildObject.c1 == 1) || (wildObject.c1 == 5)) || (wildObject.c1 == 9)) || (wildObject.c1 == 13))) {
this.mSet$6(n4, n5, 500, (((-(40) | 0) - this.ranInt$1(71)) | 0), (-(225) | 0), 1);
}
if ((wildObject.c1 >= 16)) {
(wildObject.c = 11000);
(wildObject.move_wc = 25);
}
(wildObject.pt = 172);
(wildObject.pth = wildObject.muki);
break;
}
case 11480:
{
J.inc(()=>wildObject.c1, v=>wildObject.c1=v, 1, false, "int");
if ((wildObject.c1 >= 41)) {
(wildObject.c = 11000);
(wildObject.move_wc = 25);
}
if ((wildObject.c1 < 23)) {
(wildObject.pt = wildObject.spt[0]);
(wildObject.pth = wildObject.muki);
}
else {
(wildObject.pt = wildObject.spt[2]);
(wildObject.pth = wildObject.muki);
}
(wildObject.pth = wildObject.muki);
break;
}
case 11500:
{
J.inc(()=>wildObject.c1, v=>wildObject.c1=v, -1, false, "int");
if ((wildObject.c1 <= 0)) {
(wildObject.c = 70);
(wildObject.vy = (-(25) | 0));
(wildObject.hp = 0);
}
(wildObject.pt = 159);
(wildObject.pth = wildObject.muki);
break;
}
case 11900:
{
(wildObject.vx = ((n4 > this.gym_kijyun) ? (-(wildObject.speed) | 0) : ((n4 < this.gym_kijyun) ? wildObject.speed : 0)));
(n4 = ((n4 + J.div(wildObject.vx, 10)) | 0));
if ((wildObject.vx < 0)) {
if ((n4 <= this.gym_kijyun)) {
(n4 = this.gym_kijyun);
(wildObject.vx = 0);
}
}
else {
if (((wildObject.vx > 0) && (n4 >= this.gym_kijyun))) {
(n4 = this.gym_kijyun);
(wildObject.vx = 0);
}
}
if ((wildObject.vx == 0)) {
(wildObject.pt = wildObject.spt[0]);
(wildObject.pth = 0);
(wildObject.move_wc = 30);
(wildObject.c = 11000);
break;
}
if ((wildObject.vx <= 0)) {
(wildObject.pt = wildObject.spt[((1 + this.g_ac) | 0)]);
(wildObject.pth = 0);
break;
}
(wildObject.pt = wildObject.spt[((1 + this.g_ac) | 0)]);
(wildObject.pth = 1);
break;
}
case 12000:
{
if ((wildObject.move_wc > 0)) {
(wildObject.move_wc = ((wildObject.speed > 0) ? J.inc(()=>wildObject.move_wc, v=>wildObject.move_wc=v, -1, false, "int") : 10));
if ((n4 == this.gym_kijyun)) {
(wildObject.vx = 0);
(wildObject.move_wc = ((30 + Math.imul(n3, 8)) | 0));
}
if ((wildObject.move_wc <= 0)) {
if ((n4 > this.gym_kijyun)) {
(wildObject.vx = (-(wildObject.speed) | 0));
}
else {
if ((n4 < this.gym_kijyun)) {
(wildObject.vx = wildObject.speed);
}
else {
(wildObject.vx = 0);
(wildObject.move_wc = ((30 + Math.imul(n3, 5)) | 0));
}
}
}
}
else {
(n4 = ((n4 + J.div(wildObject.vx, 10)) | 0));
if ((wildObject.vx < 0)) {
if ((n4 <= this.gym_kijyun)) {
(n4 = this.gym_kijyun);
(wildObject.move_wc = ((30 + Math.imul(n3, 5)) | 0));
(wildObject.vx = 0);
}
}
else {
if ((n4 >= this.gym_kijyun)) {
(n4 = this.gym_kijyun);
(wildObject.move_wc = ((30 + Math.imul(n3, 5)) | 0));
(wildObject.vx = 0);
}
}
}
if ((wildObject.c == 12000)) {
if ((J.abs(((((this.co_j.y - 96) | 0) - n5) | 0)) <= 2)) {
(n5 = ((this.co_j.y - 96) | 0));
(wildObject.vy = 0);
}
else {
(wildObject.vy = ((((this.co_j.y - 96) | 0) < n5) ? (-(30) | 0) : ((((this.co_j.y - 96) | 0) > n5) ? 30 : 0)));
}
}
(n5 = ((n5 + J.div(wildObject.vy, 10)) | 0));
if ((wildObject.pp <= 0)) {
(wildObject.meirei = 10);
}
if ((wildObject.shurui == 2200)) {
(wildObject.pt = ((this.g_c3 < 6) ? wildObject.spt[0] : 157));
(wildObject.pth = 0);
}
else {
if ((wildObject.shurui == 1600)) {
(wildObject.pt = wildObject.spt[0]);
(wildObject.pth = 0);
}
else {
if ((wildObject.shurui == 2800)) {
if ((wildObject.vx == 0)) {
(wildObject.pt = wildObject.spt[0]);
(wildObject.pth = 0);
}
else {
if ((wildObject.vx < 0)) {
(wildObject.pt = wildObject.spt[((1 + this.g_ac) | 0)]);
(wildObject.pth = 0);
}
else {
(wildObject.pt = wildObject.spt[((1 + this.g_ac) | 0)]);
(wildObject.pth = 1);
}
}
}
else {
if ((wildObject.vx <= 0)) {
(wildObject.pt = wildObject.spt[((1 + this.g_ac) | 0)]);
(wildObject.pth = 0);
}
else {
(wildObject.pt = wildObject.spt[((1 + this.g_ac) | 0)]);
(wildObject.pth = 1);
}
}
}
}
if ((wildObject.meirei <= 0)) {
break;
}
(n6 = wildObject.meirei);
if ((((((((n6 == 110) || (n6 == 30)) || (n6 == 100)) || (n6 == 160)) || (n6 == 210)) || (n6 == 270)) || (n6 == 280))) {
(n5 = wildObject.y);
}
this.gpWazaK$4(wildObject, n4, n5, n3);
break;
}
case 12100:
{
(wildObject.vy = ((wildObject.vy + 25) | 0));
if ((wildObject.vy > 180)) {
(wildObject.vy = 180);
}
(n5 = ((n5 + J.div(wildObject.vy, 10)) | 0));
if ((wildObject.vy >= 0)) {
(wildObject.c = 12000);
(wildObject.move_wc = 45);
}
(wildObject.pt = wildObject.spt[2]);
(wildObject.pth = 0);
break;
}
case 12300:
{
(wildObject.attack_f = true);
if (((wildObject.vx < 0) && ((this.maps.getBGCode$2((((n4 = ((n4 + J.div(wildObject.vx, 10)) | 0)) + 15) | 0), n5) >= 20) || (this.maps.getBGCode$2(((n4 + 15) | 0), ((n5 + 31) | 0)) >= 20)))) {
(n4 = ((((Math.imul(J.div(((n4 + 15) | 0), 32), 32) + 32) | 0) - 15) | 0));
(wildObject.c = 12000);
(wildObject.vx = 0);
(wildObject.move_wc = 10);
}
if (((wildObject.vy > 0) && (this.maps.getBGCode$2(((n4 + 15) | 0), (((n5 = ((n5 + J.div(wildObject.vy, 10)) | 0)) + 31) | 0)) >= 20))) {
(n5 = ((Math.imul(J.div(((n5 + 31) | 0), 32), 32) - 32) | 0));
(wildObject.c = 12000);
(wildObject.vx = 0);
(wildObject.move_wc = 10);
}
J.inc(()=>wildObject.c1, v=>wildObject.c1=v, -1, false, "int");
if ((wildObject.c1 <= 0)) {
(wildObject.c = 12000);
(wildObject.vx = 0);
(wildObject.move_wc = 10);
if ((wildObject.shurui == 2800)) {
(wildObject.move_wc = 14);
}
}
if (((wildObject.c == 12000) && (wildObject.vy > 0))) {
(wildObject.move_wc = 35);
}
if (((wildObject.shurui == 1600) || (wildObject.shurui == 1600))) {
(wildObject.pt = wildObject.spt[0]);
(wildObject.pth = 0);
break;
}
(wildObject.pt = wildObject.spt[1]);
(wildObject.pth = wildObject.muki);
break;
}
case 12410:
{
J.inc(()=>wildObject.c1, v=>wildObject.c1=v, -1, false, "int");
if ((wildObject.c1 <= 0)) {
(wildObject.c = 12000);
(wildObject.move_wc = 14);
}
if ((wildObject.shurui == 2800)) {
(wildObject.pt = 243);
(wildObject.pth = wildObject.muki);
break;
}
(wildObject.pt = wildObject.spt[((1 + this.g_ac) | 0)]);
(wildObject.pth = wildObject.muki);
break;
}
case 12420:
{
(n4 = ((n4 + J.div(wildObject.vx, 10)) | 0));
J.inc(()=>wildObject.c1, v=>wildObject.c1=v, 1, false, "int");
if ((wildObject.c1 >= 32)) {
(wildObject.c = 12000);
(wildObject.move_wc = 30);
}
if (((wildObject.vx < 0) && ((this.maps.getBGCode$2(((n4 + 15) | 0), n5) >= 20) || (this.maps.getBGCode$2(((n4 + 15) | 0), ((n5 + 31) | 0)) >= 20)))) {
(n4 = ((((Math.imul(J.div(((n4 + 15) | 0), 32), 32) + 32) | 0) - 15) | 0));
(wildObject.c = 12000);
(wildObject.vx = 0);
(wildObject.move_wc = 30);
}
if ((((((wildObject.c1 == 2) || (wildObject.c1 == 7)) || (wildObject.c1 == 12)) || (wildObject.c1 == 17)) || (wildObject.c1 == 22))) {
this.mSet$6(n4, ((n5 + 20) | 0), 550, wildObject.vx, (-(5) | 0), 1);
}
(wildObject.pt = wildObject.spt[0]);
(wildObject.pth = wildObject.muki);
break;
}
case 12430:
{
J.inc(()=>wildObject.c1, v=>wildObject.c1=v, 1, false, "int");
if (((((wildObject.c1 == 1) || (wildObject.c1 == 5)) || (wildObject.c1 == 9)) || (wildObject.c1 == 13))) {
this.mSet$6(n4, n5, 500, (((-(40) | 0) - this.ranInt$1(61)) | 0), (-(200) | 0), 1);
}
if ((wildObject.c1 >= 16)) {
(wildObject.c = 12000);
(wildObject.move_wc = 25);
}
(wildObject.pt = 157);
(wildObject.pth = 0);
break;
}
case 12900:
{
if ((wildObject.move_wc > 0)) {
J.inc(()=>wildObject.move_wc, v=>wildObject.move_wc=v, -1, false, "int");
}
if ((wildObject.move_wc <= 0)) {
(wildObject.vx = ((n4 > this.gym_kijyun) ? (-(wildObject.speed) | 0) : ((n4 < this.gym_kijyun) ? wildObject.speed : 0)));
(n4 = ((n4 + J.div(wildObject.vx, 10)) | 0));
if ((wildObject.vx < 0)) {
if ((n4 <= this.gym_kijyun)) {
(n4 = this.gym_kijyun);
(wildObject.vx = 0);
}
}
else {
if (((wildObject.vx > 0) && (n4 >= this.gym_kijyun))) {
(n4 = this.gym_kijyun);
(wildObject.vx = 0);
}
}
}
else {
(wildObject.vx = 0);
}
if (((wildObject.vx == 0) && (wildObject.move_wc <= 0))) {
(wildObject.move_wc = 30);
(wildObject.c = 12000);
}
if ((J.abs(((((this.co_j.y - 96) | 0) - n5) | 0)) <= 2)) {
(n5 = ((this.co_j.y - 96) | 0));
(wildObject.vy = 0);
}
else {
(wildObject.vy = ((((this.co_j.y - 96) | 0) < n5) ? (-(30) | 0) : ((((this.co_j.y - 96) | 0) > n5) ? 30 : 0)));
}
(n5 = ((n5 + J.div(wildObject.vy, 10)) | 0));
if ((wildObject.shurui == 2200)) {
(wildObject.pt = ((this.g_c3 < 6) ? wildObject.spt[0] : 157));
(wildObject.pth = 0);
break;
}
if ((wildObject.shurui == 1600)) {
(wildObject.pt = wildObject.spt[0]);
(wildObject.pth = 0);
break;
}
if ((wildObject.shurui == 2800)) {
if ((wildObject.vx == 0)) {
(wildObject.pt = wildObject.spt[0]);
(wildObject.pth = 0);
break;
}
if ((wildObject.vx < 0)) {
(wildObject.pt = wildObject.spt[((1 + this.g_ac) | 0)]);
(wildObject.pth = 0);
break;
}
(wildObject.pt = wildObject.spt[((1 + this.g_ac) | 0)]);
(wildObject.pth = 1);
break;
}
if ((wildObject.vx <= 0)) {
(wildObject.pt = wildObject.spt[((1 + this.g_ac) | 0)]);
(wildObject.pth = 0);
break;
}
(wildObject.pt = wildObject.spt[((1 + this.g_ac) | 0)]);
(wildObject.pth = 1);
}
}
if ((wildObject.c == 0)) {
wildObject.init$0();
}
else {
if (wildObject.attack_f) {
(n7 = 0);
while ((n7 <= 6)) {
var petObject = this.co_p[n7];
if ((((petObject.c >= 1000) && (J.abs(((petObject.x - n4) | 0)) < 28)) && (J.abs(((petObject.y - n5) | 0)) < 28))) {
(wildObject.attack_f = false);
(wildObject.vy = (-(175) | 0));
if ((wildObject.vx > 0)) {
(wildObject.vx = (-(30) | 0));
(wildObject.muki = 1);
}
else {
(wildObject.vx = 30);
(wildObject.muki = 0);
}
if (this.gym_f) {
(wildObject.c = 11100);
if ((wildObject.type == 1)) {
(wildObject.c = 12000);
(wildObject.vx = 0);
(wildObject.move_wc = 3);
(wildObject.vy = 0);
if ((wildObject.shurui == 1500)) {
(wildObject.move_wc = 30);
}
}
}
else {
if ((wildObject.shurui == 2100)) {
(wildObject.c = 2130);
if ((this.maps.getBGCode$2(((n4 + 15) | 0), ((n5 - 1) | 0)) >= 20)) {
(wildObject.c = 2150);
(wildObject.c1 = 12);
}
}
else {
if ((wildObject.shurui == 1300)) {
(wildObject.c = 1330);
if ((this.maps.getBGCode$2(((n4 + 15) | 0), ((n5 - 1) | 0)) >= 20)) {
(wildObject.c = 1350);
(wildObject.c1 = 12);
}
}
else {
if ((wildObject.shurui == 2700)) {
(wildObject.c = 2730);
(wildObject.vy = 75);
}
else {
(wildObject.c = 2050);
(wildObject.c1 = 12);
}
}
}
}
if (this.gym_f) {
if ((wildObject.c2 == 1)) {
(petObject.hp = ((petObject.hp - 50) | 0));
}
else {
if ((wildObject.c2 == 2)) {
(petObject.hp = ((petObject.hp - 40) | 0));
}
else {
if ((wildObject.c2 == 3)) {
(petObject.hp = ((petObject.hp - 60) | 0));
(wildObject.vy = 75);
(wildObject.vx = 0);
}
else {
(petObject.hp = ((wildObject.c2 == 4) ? (petObject.hp = ((petObject.hp - this.pichika_waza1_ap) | 0)) : (petObject.hp = ((petObject.hp - 30) | 0))));
}
}
}
}
else {
(petObject.hp = ((wildObject.shurui == 2700) ? (petObject.hp = ((petObject.hp - 60) | 0)) : (petObject.hp = ((petObject.hp - 30) | 0))));
}
if ((petObject.hp <= 0)) {
if ((n7 == 6)) {
var n13 = 1;
while ((n13 <= 15)) {
this.km.init1$1(n13);
J.inc(()=>n13, v=>n13=v, 1, false, "int");
}
this.km.init1$1(3);
this.km.addItem$2(3, this.name_crys);
this.km.addItem$2(3, "ふえーん、痛いよー。あたし、もうダメ。");
this.km.activeNigyou$5(3, 112, 64, 236, Color.magenta);
(this.km.mode = 900);
(petObject.c = 250);
(petObject.fc = 10);
}
else {
(petObject.hp = 0);
(n6 = petObject.c);
(petObject.c = 210);
(petObject.vy = (-(175) | 0));
if (!this.gym_f) {
this.km.init1$1(13);
this.km.addItem$2(13, petObject.name);
this.km.addItem$2(13, "えーん、痛いよー。");
this.km.activeNigyouTime$5(13, 300, 12, 144, Color.cyan);
}
if (petObject.attack_f) {
if ((n6 == 1150)) {
if ((petObject.shurui == 2700)) {
this.wDmage$2(wildObject, 60);
}
else {
this.wDmage$2(wildObject, 40);
}
}
else {
if ((n6 == 1350)) {
this.wDmage$2(wildObject, 50);
}
else {
if ((petObject.shurui == 2800)) {
this.wDmage$2(wildObject, this.pichika_waza1_ap);
}
else {
this.wDmage$2(wildObject, 30);
}
}
}
}
}
}
else {
(petObject.fc = 10);
}
}
J.inc(()=>n7, v=>n7=v, 1, false, "int");
}
}
if ((wildObject.fc > 0)) {
J.inc(()=>wildObject.fc, v=>wildObject.fc=v, -1, false, "int");
}
if ((((((wildObject.c >= 50) && (((n4 - this.maps.wx) | 0) < 512)) && (((n4 - this.maps.wx) | 0) > (-(32) | 0))) && (((n5 - this.maps.wy) | 0) < 336)) && (((n5 - this.maps.wy) | 0) > (-(48) | 0)))) {
(wildObject.ss = 2);
if (((wildObject.fc > 0) && (wildObject.pth < 2))) {
(wildObject.pth = ((wildObject.pth + 2) | 0));
}
(this.ig.zukan_mituketa_f[wildObject.mn] = true);
}
(wildObject.x = n4);
(wildObject.y = n5);
}
}
}
J.inc(()=>n3, v=>n3=v, 1, false, "int");
}
}
targetPetTaiatari$2(n, n2) {
var n3 = (-(1) | 0);
var n4 = 9999;
var n5 = 0;
while ((n5 <= 6)) {
var n6 = 0;
var petObject = this.co_p[n5];
if (((((petObject.c >= 1000) && (J.abs(((petObject.x - n) | 0)) <= 144)) && (J.abs(((petObject.y - n2) | 0)) < 28)) && ((n6 = J.abs(((petObject.x - n) | 0))) < n4))) {
(n3 = n5);
(n4 = n6);
}
J.inc(()=>n5, v=>n5=v, 1, false, "int");
}
return n3;
}
targetPetY$2(n, n2) {
var n3 = (-(1) | 0);
var n4 = 9999;
var n5 = 0;
while ((n5 <= 6)) {
var n6 = 0;
var petObject = this.co_p[n5];
if (((((petObject.c >= 1000) && (J.abs(((petObject.x - n) | 0)) <= 512)) && (J.abs(((petObject.y - n2) | 0)) < 28)) && ((n6 = J.abs(((petObject.x - n) | 0))) < n4))) {
(n3 = n5);
(n4 = n6);
}
J.inc(()=>n5, v=>n5=v, 1, false, "int");
}
return n3;
}
targetPetChikai$2(n, n2) {
var n3 = (-(1) | 0);
var n4 = 9999;
var n5 = 0;
while ((n5 <= 6)) {
var n6 = 0;
var petObject = this.co_p[n5];
if (((petObject.c >= 1000) && ((n6 = ((J.abs(((petObject.x - n) | 0)) + J.abs(((petObject.y - n2) | 0))) | 0)) < n4))) {
(n3 = n5);
(n4 = n6);
}
J.inc(()=>n5, v=>n5=v, 1, false, "int");
}
return n3;
}
targetPetChikaiX$1(n) {
var n2 = (-(1) | 0);
var n3 = 512;
var n4 = 0;
while ((n4 <= 6)) {
var n5 = 0;
var petObject = this.co_p[n4];
if (((petObject.c >= 1000) && ((n5 = J.abs(((petObject.x - n) | 0))) < n3))) {
(n2 = n4);
(n3 = n5);
}
J.inc(()=>n4, v=>n4=v, 1, false, "int");
}
return n2;
}
gpWazaC$4(wildObject, n, n2, n3) {
if ((wildObject.meirei == 10)) {
(wildObject.c = 70);
(wildObject.vy = (-(175) | 0));
}
else {
if ((wildObject.meirei == 20)) {
(wildObject.c = 11100);
(wildObject.vy = (-(240) | 0));
(wildObject.meirei = 0);
(wildObject.muki = ((wildObject.vx < 0) ? 0 : ((wildObject.vx > 0) ? 1 : 0)));
}
else {
if ((wildObject.meirei == 30)) {
(wildObject.c = 11200);
(wildObject.vy = (-(200) | 0));
(wildObject.meirei = 0);
(wildObject.muki = 0);
}
else {
if ((wildObject.meirei == 40)) {
(wildObject.c = 11300);
(wildObject.vx = (-(120) | 0));
(wildObject.vy = 0);
(wildObject.c1 = 12);
(wildObject.c2 = 0);
(wildObject.meirei = 0);
(wildObject.muki = 0);
if ((wildObject.shurui == 2800)) {
wildObject.delPP$1(this.pichika_waza1_pp);
(wildObject.c2 = 4);
}
else {
wildObject.delPP$1(1);
}
}
else {
if ((wildObject.meirei == 50)) {
(wildObject.c = 11400);
(wildObject.vx = 0);
(wildObject.c1 = 10);
(wildObject.meirei = 0);
(wildObject.c2 = 0);
var d = Math.cos(0.0);
var d2 = Math.sin(0.0);
this.mSet$6(n, n2, 200, J.i((d * -16.0)), J.i((d2 * 14.0)), 1);
(wildObject.muki = 0);
wildObject.delPP$1(3);
}
else {
if ((wildObject.meirei == 60)) {
(wildObject.c = 11400);
(wildObject.vx = 0);
(wildObject.c1 = 16);
(wildObject.meirei = 0);
(wildObject.c2 = 1);
var d = Math.cos(0.0);
var d3 = Math.sin(0.0);
this.mSet$6(n, n2, 200, J.i((-d * 16.0)), J.i((-d3 * 16.0)), 1);
(d = Math.cos(0.6283185307179586));
(d3 = Math.sin(0.6283185307179586));
this.mSet$6(n, n2, 200, J.i((-d * 16.0)), J.i((-d3 * 16.0)), 1);
(d = Math.cos(1.2566370614359172));
(d3 = Math.sin(1.2566370614359172));
this.mSet$6(n, n2, 200, J.i((-d * 16.0)), J.i((-d3 * 16.0)), 1);
(wildObject.muki = 0);
wildObject.delPP$1(8);
}
else {
if ((wildObject.meirei == 70)) {
this.mSet$6(((n - 68) | 0), n2, 1000, 0, 0, 1);
(wildObject.c = 11100);
(wildObject.vx = 0);
(wildObject.vy = (-(150) | 0));
(wildObject.meirei = 0);
(wildObject.muki = 0);
wildObject.delPP$1(8);
}
else {
if ((wildObject.meirei == 90)) {
(wildObject.c = 11410);
(wildObject.vx = 0);
(wildObject.c1 = 28);
(wildObject.meirei = 0);
this.mSet$6(n, n2, 400, 0, 0, 1);
this.mSet$6(n, n2, 400, 90, 0, 1);
this.mSet$6(n, n2, 400, 180, 0, 1);
this.mSet$6(n, n2, 400, 270, 0, 1);
this.mSet$6(n, n2, 400, 45, 0, 1);
this.mSet$6(n, n2, 400, 135, 0, 1);
this.mSet$6(n, n2, 400, 225, 0, 1);
this.mSet$6(n, n2, 400, 315, 0, 1);
(wildObject.muki = 0);
wildObject.delPP$1(8);
}
else {
if ((wildObject.meirei == 100)) {
(wildObject.c = 11420);
(wildObject.vx = 0);
(wildObject.c1 = 10);
(wildObject.meirei = 0);
this.mSet$6(n, n2, 500, (-(80) | 0), (-(225) | 0), 1);
(wildObject.muki = 0);
(wildObject.pt = 172);
(wildObject.pth = wildObject.muki);
wildObject.delPP$1(3);
}
else {
if ((wildObject.meirei == 120)) {
(wildObject.c = 11430);
(wildObject.vx = 0);
(wildObject.c1 = 0);
(wildObject.meirei = 0);
(wildObject.muki = 1);
(wildObject.pt = 169);
(wildObject.pth = 0);
wildObject.delPP$1(8);
}
else {
if ((wildObject.meirei == 130)) {
(wildObject.c = 11440);
(wildObject.vx = 0);
(wildObject.c1 = 0);
(wildObject.meirei = 0);
(wildObject.muki = 1);
(wildObject.pt = 169);
(wildObject.pth = 0);
wildObject.delPP$1(8);
}
else {
if ((wildObject.meirei == 140)) {
(wildObject.c = 11450);
(wildObject.vx = 0);
(wildObject.c1 = 0);
(wildObject.meirei = 0);
(wildObject.muki = 0);
(wildObject.pt = wildObject.spt[0]);
(wildObject.pth = wildObject.muki);
wildObject.delPP$1(3);
}
else {
if ((wildObject.meirei == 150)) {
(wildObject.c = 11460);
(wildObject.vx = 0);
(wildObject.c1 = 5);
(wildObject.meirei = 0);
var d = Math.cos(0.41887902047863906);
var d4 = Math.sin(0.41887902047863906);
this.mSet$6(n, n2, 620, J.i((-d * 16.0)), J.i((-d4 * 16.0)), 1);
(d = Math.cos(0.6632251157578452));
(d4 = Math.sin(0.6632251157578452));
this.mSet$6(n, n2, 620, J.i((-d * 16.0)), J.i((-d4 * 16.0)), 1);
(d = Math.cos(0.9075712110370514));
(d4 = Math.sin(0.9075712110370514));
this.mSet$6(n, n2, 620, J.i((-d * 16.0)), J.i((-d4 * 16.0)), 1);
(d = Math.cos(1.1519173063162575));
(d4 = Math.sin(1.1519173063162575));
this.mSet$6(n, n2, 620, J.i((-d * 16.0)), J.i((-d4 * 16.0)), 1);
(wildObject.muki = 0);
(wildObject.pt = wildObject.spt[0]);
(wildObject.pth = wildObject.muki);
wildObject.delPP$1(8);
}
else {
if ((wildObject.meirei == 160)) {
(wildObject.c = 11470);
(wildObject.vx = 0);
(wildObject.c1 = 0);
(wildObject.meirei = 0);
(wildObject.muki = 0);
(wildObject.pt = wildObject.spt[0]);
(wildObject.pth = wildObject.muki);
wildObject.delPP$1(8);
}
else {
if ((wildObject.meirei == 170)) {
(wildObject.c = 11480);
(wildObject.vx = 0);
(wildObject.c1 = 0);
(wildObject.meirei = 0);
this.mSet$6(n, n2, 1150, n3, 0, 1);
(wildObject.muki = 0);
(wildObject.pt = wildObject.spt[0]);
(wildObject.pth = wildObject.muki);
wildObject.delPP$1(8);
}
else {
if ((wildObject.meirei == 180)) {
(wildObject.c = 11150);
(wildObject.vx = (-(40) | 0));
(wildObject.vy = (-(225) | 0));
(wildObject.c2 = 2);
(wildObject.meirei = 0);
if ((wildObject.shurui == 2700)) {
(wildObject.vx = 0);
(wildObject.vy = (-(285) | 0));
(wildObject.c2 = 3);
}
(wildObject.muki = 0);
wildObject.delPP$1(3);
}
else {
if ((wildObject.meirei == 190)) {
(wildObject.c = 11300);
(wildObject.vx = (-(120) | 0));
(wildObject.vy = 0);
(wildObject.c1 = 12);
(wildObject.c2 = 1);
(wildObject.meirei = 0);
(wildObject.muki = 0);
wildObject.delPP$1(8);
}
else {
if ((wildObject.meirei == 220)) {
(wildObject.c = 1300);
(wildObject.vx = (-(120) | 0));
(wildObject.vy = 0);
(wildObject.c1 = 12);
(wildObject.meirei = 0);
(wildObject.muki = 0);
if (((wildObject.shurui == 1800) || (wildObject.shurui == 2700))) {
(wildObject.muki = 1);
}
wildObject.delPP$1(3);
}
else {
if ((wildObject.meirei == 230)) {
(wildObject.c = 1100);
(wildObject.vy = (-(305) | 0));
(wildObject.meirei = 0);
(wildObject.vx = 40);
(wildObject.muki = 1);
wildObject.delPP$1(1);
}
else {
if ((wildObject.meirei == 240)) {
(wildObject.c = 1490);
(wildObject.vx = 0);
(wildObject.c1 = 0);
(wildObject.meirei = 0);
this.mSet$6(n, n2, 1300, n3, 0, 0);
(wildObject.muki = 1);
(wildObject.pt = wildObject.spt[0]);
(wildObject.pth = wildObject.muki);
wildObject.delPP$1(8);
}
else {
if ((wildObject.meirei == 250)) {
(wildObject.c = 1485);
(wildObject.vx = 0);
(wildObject.c1 = 0);
(wildObject.meirei = 0);
this.mSet$6(n, n2, 1400, n3, 0, 0);
(wildObject.muki = 1);
(wildObject.pt = wildObject.spt[0]);
(wildObject.pth = wildObject.muki);
wildObject.delPP$1(8);
}
else {
if ((wildObject.meirei == 260)) {
(wildObject.c = 11455);
(wildObject.vx = 0);
(wildObject.c1 = 0);
(wildObject.meirei = 0);
(wildObject.muki = 0);
(wildObject.pt = wildObject.spt[0]);
(wildObject.pth = wildObject.muki);
wildObject.delPP$1(8);
}
else {
if ((wildObject.meirei == 270)) {
(wildObject.c = 11425);
(wildObject.vx = 0);
(wildObject.c1 = 10);
(wildObject.meirei = 0);
this.mSet$6(n, n2, 640, (-(16) | 0), 0, 1);
(wildObject.muki = 0);
(wildObject.pt = 243);
(wildObject.pth = wildObject.muki);
wildObject.delPP$1(this.pichika_waza2_pp);
}
else {
if ((wildObject.meirei == 280)) {
(wildObject.c = 11426);
(wildObject.vx = 0);
(wildObject.c1 = 10);
(wildObject.meirei = 0);
var d = Math.cos(0.47123889803846897);
var d5 = Math.sin(0.47123889803846897);
this.mSet$6(n, n2, 650, J.i((-d * 16.0)), J.i((-d5 * 16.0)), 1);
(d = Math.cos(0.7853981633974483));
(d5 = Math.sin(0.7853981633974483));
this.mSet$6(n, n2, 650, J.i((-d * 16.0)), J.i((-d5 * 16.0)), 1);
(d = Math.cos(1.0995574287564276));
(d5 = Math.sin(1.0995574287564276));
this.mSet$6(n, n2, 650, J.i((-d * 16.0)), J.i((-d5 * 16.0)), 1);
(wildObject.muki = 0);
(wildObject.pt = 243);
(wildObject.pth = wildObject.muki);
wildObject.delPP$1(8);
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
gpWazaK$4(wildObject, n, n2, n3) {
if ((wildObject.meirei == 10)) {
(wildObject.c = 70);
(wildObject.vy = (-(125) | 0));
}
else {
if ((wildObject.meirei == 20)) {
(wildObject.c = 12100);
(wildObject.vy = (-(210) | 0));
(wildObject.meirei = 0);
(wildObject.vx = 0);
(wildObject.muki = 0);
}
else {
if ((wildObject.meirei == 30)) {
(wildObject.c = 2410);
(wildObject.vx = 0);
(wildObject.c1 = 17);
(wildObject.meirei = 0);
this.mSet$6(n, n2, 100, 19, 0, 0);
(wildObject.muki = 1);
(wildObject.pt = wildObject.spt[((1 + this.g_ac) | 0)]);
(wildObject.pth = wildObject.muki);
wildObject.delPP$1(3);
}
else {
if ((wildObject.meirei == 40)) {
if ((wildObject.shurui == 1500)) {
(wildObject.c = 12300);
(wildObject.vx = (-(90) | 0));
(wildObject.vy = 90);
(wildObject.c2 = 0);
(wildObject.c1 = 17);
}
else {
(wildObject.c = 12300);
(wildObject.vx = (-(120) | 0));
(wildObject.vy = 0);
(wildObject.c2 = 0);
(wildObject.c1 = 12);
}
(wildObject.meirei = 0);
(wildObject.muki = 0);
if ((wildObject.shurui == 2800)) {
wildObject.delPP$1(this.pichika_waza1_pp);
(wildObject.c2 = 4);
}
else {
wildObject.delPP$1(1);
}
}
else {
if ((wildObject.meirei == 70)) {
(wildObject.c = 2410);
(wildObject.vx = 0);
(wildObject.c1 = 17);
(wildObject.meirei = 0);
this.mSet$6(((n + 60) | 0), n2, 1000, 0, 0, 0);
(wildObject.muki = 1);
(wildObject.pt = wildObject.spt[((1 + this.g_ac) | 0)]);
(wildObject.pth = wildObject.muki);
wildObject.delPP$1(8);
}
else {
if ((wildObject.meirei == 80)) {
(wildObject.c = 11500);
(wildObject.c1 = 16);
(wildObject.meirei = 0);
var d = Math.cos(0.0);
var d2 = Math.sin(0.0);
this.mSet$6(n, n2, 300, J.i((d * 17.0)), J.i((-d2 * 17.0)), 1);
(d = Math.cos(4.71238898038469));
(d2 = Math.sin(4.71238898038469));
this.mSet$6(n, n2, 300, J.i((d * 17.0)), J.i((-d2 * 17.0)), 1);
(d = Math.cos(Math.PI));
(d2 = Math.sin(Math.PI));
this.mSet$6(n, n2, 300, J.i((d * 17.0)), J.i((-d2 * 17.0)), 1);
(d = Math.cos(1.5707963267948966));
(d2 = Math.sin(1.5707963267948966));
this.mSet$6(n, n2, 300, J.i((d * 17.0)), J.i((-d2 * 17.0)), 1);
(d = Math.cos(5.759586531581287));
(d2 = Math.sin(5.759586531581287));
this.mSet$6(n, n2, 300, J.i((d * 17.0)), J.i((-d2 * 17.0)), 1);
(d = Math.cos(4.1887902047863905));
(d2 = Math.sin(4.1887902047863905));
this.mSet$6(n, n2, 300, J.i((d * 17.0)), J.i((-d2 * 17.0)), 1);
(d = Math.cos(2.6179938779914944));
(d2 = Math.sin(2.6179938779914944));
this.mSet$6(n, n2, 300, J.i((d * 17.0)), J.i((-d2 * 17.0)), 1);
(d = Math.cos(1.0471975511965976));
(d2 = Math.sin(1.0471975511965976));
this.mSet$6(n, n2, 300, J.i((d * 17.0)), J.i((-d2 * 17.0)), 1);
(d = Math.cos(5.235987755982989));
(d2 = Math.sin(5.235987755982989));
this.mSet$6(n, n2, 300, J.i((d * 17.0)), J.i((-d2 * 17.0)), 1);
(d = Math.cos(3.6651914291880923));
(d2 = Math.sin(3.6651914291880923));
this.mSet$6(n, n2, 300, J.i((d * 17.0)), J.i((-d2 * 17.0)), 1);
(d = Math.cos(2.0943951023931953));
(d2 = Math.sin(2.0943951023931953));
this.mSet$6(n, n2, 300, J.i((d * 17.0)), J.i((-d2 * 17.0)), 1);
(d = Math.cos(0.5235987755982988));
(d2 = Math.sin(0.5235987755982988));
this.mSet$6(n, n2, 300, J.i((d * 17.0)), J.i((-d2 * 17.0)), 1);
(wildObject.muki = 0);
wildObject.delPP$1(1);
}
else {
if ((wildObject.meirei == 100)) {
(wildObject.c = 11420);
(wildObject.vx = 0);
(wildObject.c1 = 10);
(wildObject.meirei = 0);
this.mSet$6(n, n2, 500, (-(60) | 0), (-(200) | 0), 1);
(wildObject.muki = 0);
(wildObject.pth = 0);
wildObject.delPP$1(3);
}
else {
if ((wildObject.meirei == 110)) {
(wildObject.c = 12410);
(wildObject.vx = 0);
(wildObject.c1 = 10);
(wildObject.meirei = 0);
this.mSet$6(n, n2, 600, (-(16) | 0), 0, 1);
(wildObject.muki = 0);
(wildObject.pt = wildObject.spt[((1 + this.g_ac) | 0)]);
(wildObject.pth = wildObject.muki);
wildObject.delPP$1(3);
}
else {
if ((wildObject.meirei == 130)) {
(wildObject.c = 12420);
(wildObject.vx = (-(80) | 0));
(wildObject.c1 = 0);
(wildObject.meirei = 0);
(wildObject.pth = (wildObject.muki = 0));
wildObject.delPP$1(8);
}
else {
if ((wildObject.meirei == 160)) {
(wildObject.c = 12430);
(wildObject.vx = 0);
(wildObject.c1 = 0);
(wildObject.meirei = 0);
(wildObject.muki = 0);
(wildObject.pt = wildObject.spt[0]);
(wildObject.pth = wildObject.muki);
wildObject.delPP$1(8);
}
else {
if ((wildObject.meirei == 200)) {
(wildObject.c = 2440);
(wildObject.vx = 0);
(wildObject.c1 = 0);
(wildObject.meirei = 0);
this.mSet$6(n, n2, 1200, n3, 0, 0);
(wildObject.muki = 1);
(wildObject.pt = wildObject.spt[0]);
(wildObject.pth = wildObject.muki);
wildObject.delPP$1(8);
}
else {
if ((wildObject.meirei == 210)) {
(wildObject.c = 2450);
(wildObject.vx = 0);
(wildObject.c1 = 10);
(wildObject.meirei = 0);
this.mSet$6(n, n2, 630, 9, 9, 0);
(wildObject.muki = 1);
(wildObject.pt = wildObject.spt[0]);
(wildObject.pth = wildObject.muki);
wildObject.delPP$1(3);
}
else {
if ((wildObject.meirei == 220)) {
(wildObject.c = 2300);
(wildObject.vx = (-(120) | 0));
(wildObject.vy = 0);
(wildObject.c1 = 12);
(wildObject.meirei = 0);
(wildObject.muki = 0);
wildObject.delPP$1(3);
}
else {
if ((wildObject.meirei == 230)) {
(wildObject.c = 2100);
(wildObject.vy = (-(250) | 0));
(wildObject.meirei = 0);
(wildObject.vx = 0);
(wildObject.muki = 1);
wildObject.delPP$1(1);
}
else {
if ((wildObject.meirei == 240)) {
(wildObject.c = 1490);
(wildObject.vx = 0);
(wildObject.c1 = 0);
(wildObject.meirei = 0);
this.mSet$6(n, n2, 1300, n3, 0, 0);
(wildObject.muki = 1);
(wildObject.pt = wildObject.spt[0]);
(wildObject.pth = wildObject.muki);
wildObject.delPP$1(8);
}
else {
if ((wildObject.meirei == 270)) {
(wildObject.c = 12410);
(wildObject.vx = 0);
(wildObject.c1 = 17);
(wildObject.meirei = 0);
this.mSet$6(n, n2, 640, (-(16) | 0), 0, 1);
(wildObject.muki = 0);
(wildObject.pt = 243);
(wildObject.pth = wildObject.muki);
wildObject.delPP$1(this.pichika_waza2_pp);
}
else {
if ((wildObject.meirei == 280)) {
(wildObject.c = 12410);
(wildObject.vx = 0);
(wildObject.c1 = 10);
(wildObject.meirei = 0);
var d = Math.cos(0.41887902047863906);
var d3 = Math.sin(0.41887902047863906);
this.mSet$6(n, n2, 650, J.i((-d * 16.0)), J.i((d3 * 16.0)), 1);
(d = Math.cos(0.7330382858376184));
(d3 = Math.sin(0.7330382858376184));
this.mSet$6(n, n2, 650, J.i((-d * 16.0)), J.i((d3 * 16.0)), 1);
(d = Math.cos(1.0471975511965976));
(d3 = Math.sin(1.0471975511965976));
this.mSet$6(n, n2, 650, J.i((-d * 16.0)), J.i((d3 * 16.0)), 1);
(wildObject.muki = 0);
(wildObject.pt = 243);
(wildObject.pth = wildObject.muki);
wildObject.delPP$1(8);
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
mSet$6(n, n2, n3, n4, n5, n6) {
var n7 = 0;
block17: while ((n7 <= 23)) {
if ((this.co_m[n7].c <= 0)) {
var characterObject = this.co_m[n7];
(characterObject.c = n3);
(characterObject.x = n);
(characterObject.y = n2);
(characterObject.c1 = 0);
(characterObject.vx = n4);
(characterObject.vy = n5);
(characterObject.ch = n6);
J.inc(()=>this.m_kazu, v=>this.m_kazu=v, 1, false, "int");
switch (n3) {
case 86:
{
(characterObject.c2 = 0);
(characterObject.x = n);
(characterObject.vx = (-(40) | 0));
(characterObject.vy = (-(60) | 0));
break;
}
case 90:
{
if ((this.sl_step < 2)) {
break;
}
(characterObject.x = ((characterObject.x - 128) | 0));
break;
}
case 400:
{
(characterObject.vx = n);
(characterObject.vy = n2);
(characterObject.c2 = n4);
(characterObject.c3 = 42);
(characterObject.ac = 0);
break;
}
case 410:
{
(characterObject.vx = n);
(characterObject.vy = n2);
(characterObject.c2 = n4);
(characterObject.c3 = 10);
(characterObject.ac = 0);
break;
}
case 750:
{
(characterObject.c2 = n5);
(characterObject.vy = (-(240) | 0));
break;
}
case 800:
{
break;
}
case 1000:
{
(characterObject.x = n);
(characterObject.y = ((this.maps.wy + 16) | 0));
(characterObject.vy = ((((this.maps.wy - 340) | 0) + 16) | 0));
(characterObject.c2 = 0);
(characterObject.c3 = 0);
var n8 = 0;
while ((n8 <= 49)) {
(this.m_mf[n7][n8] = false);
J.inc(()=>n8, v=>n8=v, 1, false, "int");
}
break block17;
}
case 1100:
{
(characterObject.x = ((n + 16) | 0));
(characterObject.y = n2);
(characterObject.vx = ((n + 16) | 0));
(characterObject.c2 = 0);
(characterObject.c3 = 144);
(characterObject.vy = n4);
var n9 = 0;
while ((n9 <= 49)) {
(this.m_mf[n7][n9] = false);
J.inc(()=>n9, v=>n9=v, 1, false, "int");
}
break block17;
}
case 1150:
{
(characterObject.x = ((n + 16) | 0));
(characterObject.y = n2);
(characterObject.vx = ((n + 16) | 0));
(characterObject.c2 = 0);
(characterObject.c3 = 144);
(characterObject.vy = n4);
var n10 = 0;
while ((n10 <= 49)) {
(this.m_mf[n7][n10] = false);
J.inc(()=>n10, v=>n10=v, 1, false, "int");
}
break block17;
}
case 1200:
{
(characterObject.c2 = 0);
(characterObject.c3 = 10);
(characterObject.c4 = n4);
(characterObject.vx = 170);
(characterObject.vy = 0);
break;
}
case 1300:
{
(characterObject.c2 = 0);
(characterObject.c3 = 90);
(characterObject.c4 = n4);
break;
}
case 1400:
{
(characterObject.x = ((n + 16) | 0));
(characterObject.y = n2);
(characterObject.vx = ((n + 16) | 0));
(characterObject.c2 = 100);
(characterObject.c3 = 16);
(characterObject.vy = n4);
var n11 = 0;
while ((n11 <= 49)) {
(this.m_mf[n7][n11] = false);
J.inc(()=>n11, v=>n11=v, 1, false, "int");
}
break block17;
}
case 1500:
{
break;
}
case 1600:
{
(characterObject.c1 = 0);
(characterObject.c2 = 0);
(characterObject.vx = n);
(characterObject.vy = n2);
(characterObject.c5 = 0);
(characterObject.c3 = 160);
(characterObject.c4 = 60);
(characterObject.ac = n4);
var n12 = 0;
while ((n12 <= 49)) {
(this.m_mf[n7][n12] = false);
J.inc(()=>n12, v=>n12=v, 1, false, "int");
}
break block17;
}
case 1610:
{
(characterObject.c = 1600);
(characterObject.c1 = 0);
(characterObject.c2 = 1);
(characterObject.vx = n);
(characterObject.vy = n2);
(characterObject.c5 = 0);
(characterObject.c3 = 180);
(characterObject.c4 = 60);
(characterObject.ac = n4);
var n13 = 0;
while ((n13 <= 49)) {
(this.m_mf[n7][n13] = false);
J.inc(()=>n13, v=>n13=v, 1, false, "int");
}
break block17;
}
}
break;
}
J.inc(()=>n7, v=>n7=v, 1, false, "int");
}
}
mMove$0() {
var bl = false;
var n = 0;
while ((n <= 23)) {
if ((this.co_m[n].c != 0)) {
var n2 = 0;
var petObject = null;
var wildObject = null;
var n3 = 0;
var characterObject = this.co_m[n];
switch (characterObject.c) {
case 80:
{
if (((characterObject.x <= ((((this.maps.wx - 32) | 0) - 64) | 0)) || (characterObject.x >= ((((this.maps.wx + 512) | 0) + 64) | 0)))) {
(characterObject.c = 0);
}
else {
if (((characterObject.y <= ((((this.maps.wy - 32) | 0) - 200) | 0)) || (characterObject.y >= ((this.maps.wy + 320) | 0)))) {
(characterObject.c = 0);
}
}
J.inc(()=>characterObject.c1, v=>characterObject.c1=v, 1, false, "int");
if ((characterObject.c1 <= 5)) {
(characterObject.pt = 57);
}
else {
if ((characterObject.c1 <= 10)) {
(characterObject.pt = 58);
}
else {
if ((characterObject.c1 <= 16)) {
(characterObject.pt = 59);
}
else {
(characterObject.c = 0);
}
}
}
(characterObject.pth = 0);
break;
}
case 85:
{
if ((characterObject.c1 < 15)) {
J.inc(()=>characterObject.c1, v=>characterObject.c1=v, 1, false, "int");
}
else {
if ((characterObject.c1 == 15)) {
(characterObject.c1 = 16);
this.maps.putBGCode$3(J.div(characterObject.x, 32), J.div(characterObject.y, 32), 6);
}
else {
if ((this.maps.getBGCode$2(characterObject.x, characterObject.y) != 6)) {
(characterObject.c = 0);
}
}
}
(characterObject.pt = ((characterObject.c1 < 15) ? 0 : ((this.g_ac2 == 0) ? 273 : 272)));
(characterObject.pth = 0);
break;
}
case 86:
{
if ((characterObject.c2 <= 0)) {
(characterObject.x = ((characterObject.x + J.div(characterObject.vx, 10)) | 0));
(characterObject.vy = ((characterObject.vy + 20) | 0));
if ((characterObject.vy > 140)) {
(characterObject.vy = 140);
}
(characterObject.y = ((characterObject.y + J.div(characterObject.vy, 10)) | 0));
if ((this.maps.map_bg[J.div(((characterObject.x + 15) | 0), 32)][J.div(((characterObject.y + 31) | 0), 32)] >= 20)) {
(characterObject.y = ((Math.imul(J.div(((characterObject.y + 31) | 0), 32), 32) - 32) | 0));
(characterObject.x = Math.imul(J.div(characterObject.x, 32), 32));
(characterObject.c2 = 1);
this.maps.putBGCode$3(J.div(characterObject.x, 32), J.div(characterObject.y, 32), 6);
}
}
else {
if ((this.maps.getBGCode$2(characterObject.x, characterObject.y) != 6)) {
(characterObject.c = 0);
}
}
(characterObject.pt = ((this.g_ac2 == 0) ? 267 : 266));
(characterObject.pth = 0);
break;
}
case 90:
{
(characterObject.y = ((characterObject.y + 10) | 0));
if ((characterObject.y >= ((this.maps.wy + 30) | 0))) {
(characterObject.y = ((this.maps.wy + 30) | 0));
(characterObject.c = 91);
}
(characterObject.pt = 1100);
break;
}
case 91:
{
(characterObject.pt = 1100);
break;
}
case 92:
{
(characterObject.y = ((characterObject.y - 16) | 0));
if ((characterObject.y <= ((this.maps.wy - 64) | 0))) {
(characterObject.c = 0);
}
(characterObject.pt = 1100);
break;
}
case 100:
{
(characterObject.x = ((characterObject.x + characterObject.vx) | 0));
(characterObject.y = ((characterObject.y + characterObject.vy) | 0));
if ((this.maps.map_bg[J.div(((characterObject.x + 15) | 0), 32)][J.div(((characterObject.y + 15) | 0), 32)] >= 20)) {
(characterObject.c = 0);
}
if (((characterObject.x <= ((((this.maps.wx - 32) | 0) - 64) | 0)) || (characterObject.x >= ((((this.maps.wx + 512) | 0) + 64) | 0)))) {
(characterObject.c = 0);
}
else {
if (((characterObject.y <= ((((this.maps.wy - 32) | 0) - 200) | 0)) || (characterObject.y >= ((this.maps.wy + 320) | 0)))) {
(characterObject.c = 0);
}
}
if ((this.g_c1 == 0)) {
(characterObject.pt = 120);
(characterObject.pth = 0);
break;
}
(characterObject.pt = 121);
(characterObject.pth = 0);
break;
}
case 110:
{
(characterObject.x = ((characterObject.x + characterObject.vx) | 0));
(characterObject.y = ((characterObject.y + characterObject.vy) | 0));
if ((this.maps.map_bg[J.div(((characterObject.x + 15) | 0), 32)][J.div(((characterObject.y + 15) | 0), 32)] >= 20)) {
(characterObject.c = 0);
}
if (((characterObject.x <= ((((this.maps.wx - 32) | 0) - 64) | 0)) || (characterObject.x >= ((((this.maps.wx + 512) | 0) + 64) | 0)))) {
(characterObject.c = 0);
}
else {
if (((characterObject.y <= ((((this.maps.wy - 32) | 0) - 200) | 0)) || (characterObject.y >= ((this.maps.wy + 320) | 0)))) {
(characterObject.c = 0);
}
}
if ((this.g_c1 == 0)) {
(characterObject.pt = 270);
(characterObject.pth = 0);
break;
}
(characterObject.pt = 271);
(characterObject.pth = 0);
break;
}
case 200:
{
(characterObject.x = ((characterObject.x + characterObject.vx) | 0));
(characterObject.y = ((characterObject.y + characterObject.vy) | 0));
if ((this.maps.map_bg[J.div(((characterObject.x + 15) | 0), 32)][J.div(((characterObject.y + 15) | 0), 32)] >= 20)) {
(characterObject.c = 0);
}
if (((characterObject.x <= ((((this.maps.wx - 32) | 0) - 64) | 0)) || (characterObject.x >= ((((this.maps.wx + 512) | 0) + 64) | 0)))) {
(characterObject.c = 0);
}
else {
if (((characterObject.y <= ((((this.maps.wy - 32) | 0) - 200) | 0)) || (characterObject.y >= ((this.maps.wy + 320) | 0)))) {
(characterObject.c = 0);
}
}
switch (this.g_c2) {
case 0:
{
(characterObject.pt = 122);
break;
}
case 1:
{
(characterObject.pt = 123);
break;
}
case 2:
{
(characterObject.pt = 124);
break;
}
case 3:
{
(characterObject.pt = 125);
}
}
if ((characterObject.vx > 0)) {
(characterObject.pth = 1);
break;
}
(characterObject.pth = 0);
break;
}
case 300:
{
(characterObject.x = ((characterObject.x + characterObject.vx) | 0));
(characterObject.y = ((characterObject.y + characterObject.vy) | 0));
if ((this.maps.map_bg[J.div(((characterObject.x + 15) | 0), 32)][J.div(((characterObject.y + 15) | 0), 32)] >= 20)) {
(characterObject.c = 0);
}
if (((characterObject.x <= ((((this.maps.wx - 32) | 0) - 64) | 0)) || (characterObject.x >= ((((this.maps.wx + 512) | 0) + 64) | 0)))) {
(characterObject.c = 0);
}
else {
if (((characterObject.y <= ((((this.maps.wy - 32) | 0) - 200) | 0)) || (characterObject.y >= ((this.maps.wy + 320) | 0)))) {
(characterObject.c = 0);
}
}
(characterObject.pt = ((130 + this.g_c1) | 0));
(characterObject.pth = 0);
break;
}
case 400:
{
(characterObject.c2 = ((characterObject.c2 + 10) | 0));
if ((characterObject.c2 >= 360)) {
(characterObject.c2 = ((characterObject.c2 - 360) | 0));
}
(characterObject.c3 = ((characterObject.c3 + 3) | 0));
if ((characterObject.c3 > 175)) {
(characterObject.c = 0);
}
var d = Math.cos(((characterObject.c2 * (Math.PI * 2)) / 360.0));
var d2 = Math.sin(((characterObject.c2 * (Math.PI * 2)) / 360.0));
(characterObject.x = ((characterObject.vx + J.i((d * characterObject.c3))) | 0));
(characterObject.y = ((characterObject.vy + J.i(((d2 * characterObject.c3) * -1.0))) | 0));
J.inc(()=>characterObject.ac, v=>characterObject.ac=v, 1, false, "int");
if ((characterObject.ac > 11)) {
(characterObject.ac = 0);
}
switch (J.div(characterObject.ac, 3)) {
case 0:
{
(characterObject.pt = 132);
(characterObject.pth = 0);
break;
}
case 1:
{
(characterObject.pt = 132);
(characterObject.pth = 1);
break;
}
case 2:
{
(characterObject.pt = 133);
(characterObject.pth = 1);
break;
}
case 3:
{
(characterObject.pt = 133);
(characterObject.pth = 0);
}
}
break;
}
case 410:
{
(characterObject.c2 = ((characterObject.c2 - 12) | 0));
if ((characterObject.c2 < 0)) {
(characterObject.c2 = ((characterObject.c2 + 360) | 0));
}
(characterObject.c3 = ((characterObject.c3 + 5) | 0));
if ((characterObject.c3 > 235)) {
(characterObject.c = 0);
}
var d = Math.cos(((characterObject.c2 * (Math.PI * 2)) / 360.0));
var d2 = Math.sin(((characterObject.c2 * (Math.PI * 2)) / 360.0));
(characterObject.x = ((characterObject.vx + J.i((d * characterObject.c3))) | 0));
(characterObject.y = ((characterObject.vy + J.i(((d2 * characterObject.c3) * -1.0))) | 0));
(characterObject.pt = ((138 + this.g_c1) | 0));
(characterObject.pth = 0);
break;
}
case 420:
{
(characterObject.x = ((characterObject.x + characterObject.vx) | 0));
(characterObject.y = ((characterObject.y + characterObject.vy) | 0));
if ((this.maps.map_bg[J.div(((characterObject.x + 15) | 0), 32)][J.div(((characterObject.y + 15) | 0), 32)] >= 20)) {
(characterObject.c = 0);
}
if (((characterObject.x <= ((((this.maps.wx - 32) | 0) - 64) | 0)) || (characterObject.x >= ((((this.maps.wx + 512) | 0) + 64) | 0)))) {
(characterObject.c = 0);
}
else {
if (((characterObject.y <= ((((this.maps.wy - 32) | 0) - 200) | 0)) || (characterObject.y >= ((this.maps.wy + 320) | 0)))) {
(characterObject.c = 0);
}
}
(characterObject.pt = ((138 + this.g_c1) | 0));
(characterObject.pth = 0);
break;
}
case 500:
{
(characterObject.x = ((characterObject.x + J.div(characterObject.vx, 10)) | 0));
(characterObject.vy = ((characterObject.vy + 25) | 0));
if ((characterObject.vy > 180)) {
(characterObject.vy = 180);
}
(characterObject.y = ((characterObject.y + J.div(characterObject.vy, 10)) | 0));
if ((this.maps.map_bg[J.div(((characterObject.x + 15) | 0), 32)][J.div(((characterObject.y + 15) | 0), 32)] >= 20)) {
(characterObject.c = 0);
}
if (((characterObject.x <= ((((this.maps.wx - 32) | 0) - 64) | 0)) || (characterObject.x >= ((((this.maps.wx + 512) | 0) + 64) | 0)))) {
(characterObject.c = 0);
}
else {
if (((characterObject.y <= ((((this.maps.wy - 32) | 0) - 200) | 0)) || (characterObject.y >= ((this.maps.wy + 320) | 0)))) {
(characterObject.c = 0);
}
}
(characterObject.pt = ((126 + this.g_ac) | 0));
(characterObject.pth = 0);
break;
}
case 550:
{
if ((characterObject.vx > 0)) {
(characterObject.vx = ((characterObject.vx - 5) | 0));
}
else {
if ((characterObject.vx < 0)) {
(characterObject.vx = ((characterObject.vx + 5) | 0));
}
}
(characterObject.x = ((characterObject.x + J.div(characterObject.vx, 10)) | 0));
(characterObject.vy = ((characterObject.vy + 5) | 0));
if ((characterObject.vy > 180)) {
(characterObject.vy = 180);
}
(characterObject.y = ((characterObject.y + J.div(characterObject.vy, 10)) | 0));
if ((this.maps.map_bg[J.div(((characterObject.x + 15) | 0), 32)][J.div(((characterObject.y + 15) | 0), 32)] >= 20)) {
(characterObject.c = 560);
(characterObject.c1 = 0);
(characterObject.y = ((Math.imul(J.div(((characterObject.y + 15) | 0), 32), 32) - 16) | 0));
}
if (((characterObject.x <= ((((this.maps.wx - 32) | 0) - 64) | 0)) || (characterObject.x >= ((((this.maps.wx + 512) | 0) + 64) | 0)))) {
(characterObject.c = 0);
}
else {
if (((characterObject.y <= ((((this.maps.wy - 32) | 0) - 200) | 0)) || (characterObject.y >= ((this.maps.wy + 320) | 0)))) {
(characterObject.c = 0);
}
}
if ((characterObject.vx > 25)) {
(characterObject.pt = 195);
(characterObject.pth = 1);
break;
}
if ((characterObject.vx < (-(25) | 0))) {
(characterObject.pt = 195);
(characterObject.pth = 0);
break;
}
(characterObject.pt = 194);
(characterObject.pth = 0);
break;
}
case 560:
{
J.inc(()=>characterObject.c1, v=>characterObject.c1=v, 1, false, "int");
if ((characterObject.c1 <= 3)) {
(characterObject.pt = 196);
}
else {
if ((characterObject.c1 <= 6)) {
(characterObject.pt = 197);
}
else {
if ((characterObject.c1 <= 9)) {
(characterObject.pt = 198);
}
else {
(characterObject.c = 0);
(characterObject.pt = 198);
}
}
}
(characterObject.pth = 0);
break;
}
case 600:
{
(characterObject.x = ((characterObject.x + characterObject.vx) | 0));
if ((this.maps.map_bg[J.div(((characterObject.x + 15) | 0), 32)][J.div(((characterObject.y + 15) | 0), 32)] >= 20)) {
(characterObject.c = 0);
}
if (((characterObject.x <= ((((this.maps.wx - 32) | 0) - 64) | 0)) || (characterObject.x >= ((((this.maps.wx + 512) | 0) + 64) | 0)))) {
(characterObject.c = 0);
}
else {
if (((characterObject.y <= ((this.maps.wy - 32) | 0)) || (characterObject.y >= ((this.maps.wy + 320) | 0)))) {
(characterObject.c = 0);
}
}
J.inc(()=>characterObject.c1, v=>characterObject.c1=v, 1, false, "int");
if ((characterObject.c1 > 9)) {
(characterObject.c = 0);
}
(characterObject.pt = 128);
if ((characterObject.vx > 0)) {
(characterObject.pth = 1);
break;
}
(characterObject.pth = 0);
break;
}
case 610:
{
(characterObject.x = ((characterObject.x + J.div(characterObject.vx, 10)) | 0));
if ((this.maps.map_bg[J.div(((characterObject.x + 15) | 0), 32)][J.div(((characterObject.y + 15) | 0), 32)] >= 20)) {
(characterObject.c = 0);
}
if (((characterObject.x <= ((((this.maps.wx - 32) | 0) - 64) | 0)) || (characterObject.x >= ((((this.maps.wx + 512) | 0) + 64) | 0)))) {
(characterObject.c = 0);
}
else {
if (((characterObject.y <= ((this.maps.wy - 32) | 0)) || (characterObject.y >= ((this.maps.wy + 320) | 0)))) {
(characterObject.c = 0);
}
}
J.inc(()=>characterObject.c1, v=>characterObject.c1=v, 1, false, "int");
if ((characterObject.c1 > 11)) {
(characterObject.c = 0);
}
(characterObject.pt = ((138 + this.g_c1) | 0));
(characterObject.pth = 0);
break;
}
case 620:
{
(characterObject.x = ((characterObject.x + characterObject.vx) | 0));
(characterObject.y = ((characterObject.y + characterObject.vy) | 0));
if ((this.maps.map_bg[J.div(((characterObject.x + 15) | 0), 32)][J.div(((characterObject.y + 15) | 0), 32)] >= 20)) {
(characterObject.c = 0);
}
if (((characterObject.x <= ((((this.maps.wx - 32) | 0) - 64) | 0)) || (characterObject.x >= ((((this.maps.wx + 512) | 0) + 64) | 0)))) {
(characterObject.c = 0);
}
else {
if (((characterObject.y <= ((((this.maps.wy - 32) | 0) - 64) | 0)) || (characterObject.y >= ((this.maps.wy + 320) | 0)))) {
(characterObject.c = 0);
}
}
(characterObject.pt = 129);
(characterObject.pth = 0);
break;
}
case 630:
{
(characterObject.x = ((characterObject.x + characterObject.vx) | 0));
(characterObject.y = ((characterObject.y + characterObject.vy) | 0));
if ((this.maps.map_bg[J.div(((characterObject.x + 15) | 0), 32)][J.div(((characterObject.y + 15) | 0), 32)] >= 20)) {
(characterObject.c = 0);
}
if (((characterObject.x <= ((((this.maps.wx - 32) | 0) - 64) | 0)) || (characterObject.x >= ((((this.maps.wx + 512) | 0) + 64) | 0)))) {
(characterObject.c = 0);
}
else {
if (((characterObject.y <= ((((this.maps.wy - 32) | 0) - 200) | 0)) || (characterObject.y >= ((this.maps.wy + 320) | 0)))) {
(characterObject.c = 0);
}
}
(characterObject.pt = 199);
(characterObject.pth = 0);
break;
}
case 640:
{
(characterObject.x = ((characterObject.x + characterObject.vx) | 0));
if ((this.maps.map_bg[J.div(((characterObject.x + 15) | 0), 32)][J.div(((characterObject.y + 15) | 0), 32)] >= 20)) {
(characterObject.c = 0);
}
if (((characterObject.x <= ((((this.maps.wx - 32) | 0) - 64) | 0)) || (characterObject.x >= ((((this.maps.wx + 512) | 0) + 64) | 0)))) {
(characterObject.c = 0);
}
else {
if (((characterObject.y <= ((this.maps.wy - 32) | 0)) || (characterObject.y >= ((this.maps.wy + 320) | 0)))) {
(characterObject.c = 0);
}
}
(characterObject.pt = ((244 + this.g_c1) | 0));
if ((characterObject.vx < 0)) {
(characterObject.pth = 0);
break;
}
(characterObject.pth = 1);
break;
}
case 650:
{
(characterObject.x = ((characterObject.x + characterObject.vx) | 0));
(characterObject.y = ((characterObject.y + characterObject.vy) | 0));
if ((this.maps.map_bg[J.div(((characterObject.x + 15) | 0), 32)][J.div(((characterObject.y + 15) | 0), 32)] >= 20)) {
(characterObject.c = 0);
}
if (((characterObject.x <= ((((this.maps.wx - 32) | 0) - 64) | 0)) || (characterObject.x >= ((((this.maps.wx + 512) | 0) + 64) | 0)))) {
(characterObject.c = 0);
}
else {
if (((characterObject.y <= ((((this.maps.wy - 32) | 0) - 64) | 0)) || (characterObject.y >= ((this.maps.wy + 320) | 0)))) {
(characterObject.c = 0);
}
}
(characterObject.pt = ((246 + this.g_c1) | 0));
if ((characterObject.vx < 0)) {
(characterObject.pth = 0);
break;
}
(characterObject.pth = 1);
break;
}
case 700:
{
(characterObject.pt = 134);
(characterObject.pth = 0);
(characterObject.x = ((characterObject.x + J.div(characterObject.vx, 10)) | 0));
(characterObject.vy = ((characterObject.vy + 15) | 0));
if ((characterObject.vy >= 0)) {
(characterObject.vx = 0);
(characterObject.pt = 135);
}
if ((characterObject.vy > 100)) {
(characterObject.vy = 100);
}
(characterObject.y = ((characterObject.y + J.div(characterObject.vy, 10)) | 0));
if ((this.maps.map_bg[J.div(((characterObject.x + 15) | 0), 32)][J.div(((characterObject.y + 15) | 0), 32)] >= 20)) {
(characterObject.c = 0);
}
if (((characterObject.x <= ((((this.maps.wx - 32) | 0) - 64) | 0)) || (characterObject.x >= ((((this.maps.wx + 512) | 0) + 64) | 0)))) {
(characterObject.c = 0);
break;
}
if (((characterObject.y > ((((this.maps.wy - 32) | 0) - 256) | 0)) && (characterObject.y < ((this.maps.wy + 320) | 0)))) {
break;
}
(characterObject.c = 0);
break;
}
case 750:
{
(characterObject.pt = 136);
(characterObject.pth = 0);
(characterObject.x = ((characterObject.x + J.div(characterObject.vx, 10)) | 0));
(characterObject.vy = ((characterObject.vy + 15) | 0));
if ((characterObject.vy >= 0)) {
(characterObject.vx = 0);
(characterObject.pt = 137);
}
if ((characterObject.vy > 100)) {
(characterObject.vy = 100);
}
(characterObject.y = ((characterObject.y + J.div(characterObject.vy, 10)) | 0));
if ((this.maps.map_bg[J.div(((characterObject.x + 15) | 0), 32)][J.div(((characterObject.y + 15) | 0), 32)] >= 20)) {
(characterObject.c = 0);
}
if (((characterObject.x <= ((((this.maps.wx - 32) | 0) - 64) | 0)) || (characterObject.x >= ((((this.maps.wx + 512) | 0) + 64) | 0)))) {
(characterObject.c = 0);
break;
}
if (((characterObject.y > ((((this.maps.wy - 32) | 0) - 256) | 0)) && (characterObject.y < ((this.maps.wy + 320) | 0)))) {
break;
}
(characterObject.c = 0);
break;
}
case 800:
{
(characterObject.vy = ((characterObject.vy + 10) | 0));
if ((characterObject.vy > 200)) {
(characterObject.vy = 200);
}
(characterObject.y = ((characterObject.y + J.div(characterObject.vy, 10)) | 0));
if ((this.maps.map_bg[J.div(((characterObject.x + 15) | 0), 32)][J.div(((characterObject.y + 15) | 0), 32)] >= 20)) {
(characterObject.c = 0);
}
if (((characterObject.x <= ((((this.maps.wx - 32) | 0) - 64) | 0)) || (characterObject.x >= ((((this.maps.wx + 512) | 0) + 64) | 0)))) {
(characterObject.c = 0);
}
else {
if (((characterObject.y <= ((this.maps.wy - 64) | 0)) || (characterObject.y >= ((this.maps.wy + 320) | 0)))) {
(characterObject.c = 0);
}
}
(characterObject.pt = 146);
(characterObject.pth = 0);
break;
}
case 1000:
{
var n4 = 0;
var n5 = 0;
var n6 = 0;
(characterObject.y = ((characterObject.y + 30) | 0));
if ((this.maps.getBGCode$2(((characterObject.x + 15) | 0), characterObject.y) >= 20)) {
(characterObject.y = ((Math.imul(J.div(characterObject.y, 32), 32) - 1) | 0));
if ((characterObject.vy < this.maps.wy)) {
(characterObject.vy = this.maps.wy);
}
if ((characterObject.c2 <= 0)) {
(characterObject.c2 = 1);
}
}
if ((characterObject.y >= ((this.maps.wy + 320) | 0))) {
(characterObject.y = ((this.maps.wy + 320) | 0));
if ((characterObject.vy < this.maps.wy)) {
(characterObject.vy = this.maps.wy);
}
if ((characterObject.vy > characterObject.y)) {
(characterObject.vy = characterObject.y);
}
}
(characterObject.vy = ((characterObject.vy + 30) | 0));
if (((characterObject.vy > characterObject.y) && (characterObject.c2 == 0))) {
(characterObject.c = 0);
}
if ((characterObject.c2 > 0)) {
switch (characterObject.c2) {
case 1:
{
(characterObject.c3 = 20);
break;
}
case 2:
{
(characterObject.c3 = 34);
break;
}
case 3:
{
(characterObject.c3 = 46);
break;
}
case 4:
{
(characterObject.c3 = 56);
break;
}
case 5:
{
(characterObject.c3 = 64);
break;
}
case 6:
{
(characterObject.c3 = 70);
break;
}
case 7:
{
(characterObject.c3 = 74);
break;
}
case 8:
{
(characterObject.c3 = 77);
break;
}
case 9:
{
(characterObject.c3 = 79);
break;
}
case 10:
{
(characterObject.c3 = 80);
}
}
J.inc(()=>characterObject.c2, v=>characterObject.c2=v, 1, false, "int");
if ((characterObject.c2 > 10)) {
(characterObject.c2 = 10);
(characterObject.c = 0);
}
}
if ((characterObject.ch == 0)) {
(n3 = 0);
while ((n3 <= this.w_kazu)) {
if ((this.co_w[n3].ss >= 1)) {
(wildObject = this.co_w[n3]);
if (((wildObject.c >= 1100) && !this.m_mf[n][n3])) {
(bl = false);
if ((((J.abs(((characterObject.x - wildObject.x) | 0)) < ((28 + wildObject.ms) | 0)) && (characterObject.vy <= ((wildObject.y + 31) | 0))) && (characterObject.y >= wildObject.y))) {
(bl = true);
}
if (((characterObject.c2 >= 1) && ((n6 = J.i(Math.sqrt(((Math.imul((n5 = ((((characterObject.x + 15) | 0) - ((wildObject.x + 15) | 0)) | 0)), n5) + Math.imul((n4 = ((characterObject.y - ((wildObject.y + 15) | 0)) | 0)), n4)) | 0)))) <= ((characterObject.c3 + 16) | 0)))) {
(bl = true);
}
if (bl) {
(wildObject.hp = ((wildObject.hp - 80) | 0));
(this.m_mf[n][n3] = true);
if ((wildObject.hp <= 0)) {
(wildObject.hp = 0);
(wildObject.c = 1000);
(wildObject.c1 = 55);
(wildObject.c2 = wildObject.pt);
(wildObject.fc = 0);
}
else {
(wildObject.fc = 10);
}
}
}
}
J.inc(()=>n3, v=>n3=v, 1, false, "int");
}
}
else {
if ((characterObject.ch == 1)) {
(n3 = 0);
while ((n3 <= 6)) {
(petObject = this.co_p[n3]);
if (((petObject.c >= 1000) && !this.m_mf[n][n3])) {
(bl = false);
if ((((J.abs(((characterObject.x - petObject.x) | 0)) < 28) && (characterObject.vy <= ((petObject.y + 31) | 0))) && (characterObject.y >= petObject.y))) {
(bl = true);
}
if (((characterObject.c2 >= 1) && ((n6 = J.i(Math.sqrt(((Math.imul((n5 = ((((characterObject.x + 15) | 0) - ((petObject.x + 15) | 0)) | 0)), n5) + Math.imul((n4 = ((characterObject.y - ((petObject.y + 15) | 0)) | 0)), n4)) | 0)))) <= ((characterObject.c3 + 16) | 0)))) {
(bl = true);
}
if (bl) {
(petObject.hp = ((petObject.hp - 80) | 0));
(this.m_mf[n][n3] = true);
if ((petObject.hp <= 0)) {
if ((n3 == 6)) {
(n2 = 1);
while ((n2 <= 15)) {
this.km.init1$1(n2);
J.inc(()=>n2, v=>n2=v, 1, false, "int");
}
this.km.init1$1(3);
this.km.addItem$2(3, this.name_crys);
this.km.addItem$2(3, "ふえーん、痛いよー。あたし、もうダメ。");
this.km.activeNigyou$5(3, 112, 64, 236, Color.magenta);
(this.km.mode = 900);
(petObject.c = 250);
(petObject.fc = 10);
}
else {
(petObject.hp = 0);
(petObject.c = 210);
(petObject.vy = (-(175) | 0));
if (!this.gym_f) {
this.km.init1$1(13);
this.km.addItem$2(13, petObject.name);
this.km.addItem$2(13, "えーん、痛いよー。");
this.km.activeNigyouTime$5(13, 300, 12, 144, Color.cyan);
}
}
}
else {
(petObject.fc = 10);
}
}
}
J.inc(()=>n3, v=>n3=v, 1, false, "int");
}
}
}
(characterObject.pt = 1000);
break;
}
case 1100:
{
if ((characterObject.c2 == 0)) {
(characterObject.c3 = ((characterObject.c3 - 8) | 0));
if ((characterObject.c3 <= 16)) {
(characterObject.c2 = 100);
}
if ((this.co_p[characterObject.vy].c != 1480)) {
(characterObject.c = 0);
}
}
else {
if ((characterObject.c2 == 100)) {
(characterObject.c3 = ((characterObject.c3 + 3) | 0));
if ((characterObject.c3 >= 34)) {
(characterObject.c3 = 34);
(characterObject.c2 = 200);
(characterObject.c4 = 7);
}
if ((this.co_p[characterObject.vy].c != 1480)) {
(characterObject.c = 0);
}
}
else {
if ((characterObject.c2 == 200)) {
(characterObject.x = ((characterObject.x + 30) | 0));
if ((characterObject.x >= ((this.maps.wx + 512) | 0))) {
(characterObject.x = ((this.maps.wx + 512) | 0));
}
if ((this.maps.getBGCode$2(characterObject.x, ((characterObject.y + 15) | 0)) >= 20)) {
(characterObject.x = ((Math.imul(J.div(characterObject.x, 32), 32) - 1) | 0));
}
if ((characterObject.c4 > 0)) {
J.inc(()=>characterObject.c4, v=>characterObject.c4=v, -1, false, "int");
}
else {
(characterObject.vx = ((characterObject.vx + 28) | 0));
if ((characterObject.vx >= characterObject.x)) {
(characterObject.c = 0);
}
(characterObject.c3 = (-(1) | 0));
}
(n3 = 0);
while ((n3 <= this.w_kazu)) {
if ((this.co_w[n3].ss >= 1)) {
(wildObject = this.co_w[n3]);
if (((wildObject.c >= 1100) && !this.m_mf[n][n3])) {
(bl = false);
if ((((characterObject.vx < ((wildObject.x + 28) | 0)) && (((characterObject.x - 4) | 0) > wildObject.x)) && (J.abs(((characterObject.y - wildObject.y) | 0)) < ((26 + wildObject.ms) | 0)))) {
(bl = true);
}
if (bl) {
(wildObject.hp = ((wildObject.hp - 60) | 0));
(this.m_mf[n][n3] = true);
if ((wildObject.hp <= 0)) {
(wildObject.hp = 0);
(wildObject.c = 1000);
(wildObject.c1 = 55);
(wildObject.c2 = wildObject.pt);
(wildObject.fc = 0);
}
else {
(wildObject.fc = 10);
}
}
}
}
J.inc(()=>n3, v=>n3=v, 1, false, "int");
}
}
}
}
(characterObject.pt = 1200);
break;
}
case 1150:
{
if ((characterObject.c2 == 0)) {
(characterObject.c3 = ((characterObject.c3 - 8) | 0));
if ((characterObject.c3 <= 16)) {
(characterObject.c2 = 100);
}
if (((this.co_w[characterObject.vy].c != 1720) && (this.co_w[characterObject.vy].c != 11480))) {
(characterObject.c = 0);
}
}
else {
if ((characterObject.c2 == 100)) {
(characterObject.c3 = ((characterObject.c3 + 3) | 0));
if ((characterObject.c3 >= 34)) {
(characterObject.c3 = 34);
(characterObject.c2 = 200);
(characterObject.c4 = 7);
}
if (((this.co_w[characterObject.vy].c != 1720) && (this.co_w[characterObject.vy].c != 11480))) {
(characterObject.c = 0);
}
}
else {
if ((characterObject.c2 == 200)) {
(characterObject.x = ((characterObject.x - 30) | 0));
if ((characterObject.x <= this.maps.wx)) {
(characterObject.x = this.maps.wx);
}
if ((this.maps.getBGCode$2(characterObject.x, ((characterObject.y + 15) | 0)) >= 20)) {
(characterObject.x = ((Math.imul(J.div(characterObject.x, 32), 32) + 32) | 0));
}
if ((characterObject.c4 > 0)) {
J.inc(()=>characterObject.c4, v=>characterObject.c4=v, -1, false, "int");
}
else {
(characterObject.vx = ((characterObject.vx - 28) | 0));
if ((characterObject.vx <= characterObject.x)) {
(characterObject.c = 0);
}
(characterObject.c3 = (-(1) | 0));
}
(n3 = 0);
while ((n3 <= 6)) {
(petObject = this.co_p[n3]);
if ((((((petObject.c >= 1000) && !this.m_mf[n][n3]) && (characterObject.x < ((petObject.x + 28) | 0))) && (((characterObject.vx - 4) | 0) > petObject.x)) && (J.abs(((characterObject.y - petObject.y) | 0)) < 26))) {
(petObject.hp = ((petObject.hp - 60) | 0));
(this.m_mf[n][n3] = true);
if ((petObject.hp <= 0)) {
if ((n3 == 6)) {
(n2 = 1);
while ((n2 <= 15)) {
this.km.init1$1(n2);
J.inc(()=>n2, v=>n2=v, 1, false, "int");
}
this.km.init1$1(3);
this.km.addItem$2(3, this.name_crys);
this.km.addItem$2(3, "ふえーん、痛いよー。あたし、もうダメ。");
this.km.activeNigyou$5(3, 112, 64, 236, Color.magenta);
(this.km.mode = 900);
(petObject.c = 250);
(petObject.fc = 10);
}
else {
(petObject.hp = 0);
(petObject.c = 210);
(petObject.vy = (-(175) | 0));
if (!this.gym_f) {
this.km.init1$1(13);
this.km.addItem$2(13, petObject.name);
this.km.addItem$2(13, "えーん、痛いよー。");
this.km.activeNigyouTime$5(13, 300, 12, 144, Color.cyan);
}
}
}
else {
(petObject.fc = 10);
}
}
J.inc(()=>n3, v=>n3=v, 1, false, "int");
}
}
}
}
(characterObject.pt = 1205);
break;
}
case 1200:
{
if ((characterObject.c2 == 0)) {
J.inc(()=>characterObject.c3, v=>characterObject.c3=v, 1, false, "int");
if ((characterObject.c3 >= 28)) {
(characterObject.c3 = 28);
(characterObject.c2 = 100);
}
if ((this.co_p[characterObject.c4].c != 2440)) {
(characterObject.c = 0);
}
}
else {
if ((characterObject.c2 == 100)) {
(characterObject.x = ((characterObject.x + J.div(characterObject.vx, 10)) | 0));
if (((characterObject.x <= ((((this.maps.wx - 32) | 0) - 64) | 0)) || (characterObject.x >= ((((this.maps.wx + 512) | 0) + 32) | 0)))) {
(characterObject.c = 0);
}
else {
if (((characterObject.y <= ((this.maps.wy - 48) | 0)) || (characterObject.y >= ((((this.maps.wy + 320) | 0) + 16) | 0)))) {
(characterObject.c = 0);
}
}
(n3 = 0);
while ((n3 <= this.w_kazu)) {
if ((this.co_w[n3].ss >= 1)) {
(wildObject = this.co_w[n3]);
if ((((wildObject.c >= 1100) && (J.abs(((characterObject.x - wildObject.x) | 0)) < 32)) && (J.abs(((characterObject.y - wildObject.y) | 0)) < ((36 + wildObject.ms) | 0)))) {
this.wDmage$2(wildObject, 40);
(characterObject.c = 0);
break;
}
}
J.inc(()=>n3, v=>n3=v, 1, false, "int");
}
}
}
(characterObject.pt = 1300);
break;
}
case 1300:
{
(characterObject.c3 = ((characterObject.c3 - 6) | 0));
if ((characterObject.c3 <= 12)) {
(characterObject.c = 0);
}
if ((this.co_p[characterObject.c4].c != 1490)) {
(characterObject.c = 0);
}
(characterObject.pt = 1400);
break;
}
case 1400:
{
if ((characterObject.c2 <= 100)) {
(characterObject.c3 = ((characterObject.c3 + 3) | 0));
if ((characterObject.c3 >= 28)) {
(characterObject.c3 = 28);
(characterObject.c2 = 200);
(characterObject.c4 = 4);
}
if ((this.co_p[characterObject.vy].c != 1485)) {
(characterObject.c = 0);
}
}
else {
if ((characterObject.c2 == 200)) {
(characterObject.x = ((characterObject.x + 30) | 0));
if ((characterObject.x >= ((this.maps.wx + 512) | 0))) {
(characterObject.x = ((this.maps.wx + 512) | 0));
}
if ((this.maps.getBGCode$2(characterObject.x, ((characterObject.y + 15) | 0)) >= 20)) {
(characterObject.x = ((Math.imul(J.div(characterObject.x, 32), 32) - 1) | 0));
}
if ((characterObject.c4 > 0)) {
J.inc(()=>characterObject.c4, v=>characterObject.c4=v, -1, false, "int");
}
else {
(characterObject.vx = ((characterObject.vx + 28) | 0));
if ((characterObject.vx >= characterObject.x)) {
(characterObject.c = 0);
}
(characterObject.c3 = (-(1) | 0));
}
(n3 = 0);
while ((n3 <= this.w_kazu)) {
if ((this.co_w[n3].ss >= 1)) {
(wildObject = this.co_w[n3]);
if (((wildObject.c >= 1100) && !this.m_mf[n][n3])) {
(bl = false);
if ((((characterObject.vx < ((wildObject.x + 28) | 0)) && (((characterObject.x - 4) | 0) > wildObject.x)) && (J.abs(((characterObject.y - wildObject.y) | 0)) < ((26 + wildObject.ms) | 0)))) {
(bl = true);
}
if (bl) {
(wildObject.hp = ((wildObject.hp - 50) | 0));
(this.m_mf[n][n3] = true);
if ((wildObject.hp <= 0)) {
(wildObject.hp = 0);
(wildObject.c = 1000);
(wildObject.c1 = 55);
(wildObject.c2 = wildObject.pt);
(wildObject.fc = 0);
}
else {
(wildObject.fc = 10);
}
}
}
}
J.inc(()=>n3, v=>n3=v, 1, false, "int");
}
}
}
(characterObject.pt = 1500);
break;
}
case 1500:
{
if ((this.km.mode == 60)) {
(characterObject.pt = 1610);
J.inc(()=>characterObject.c1, v=>characterObject.c1=v, 1, false, "int");
if ((characterObject.c1 <= 20)) {
break;
}
(characterObject.c = 0);
break;
}
if ((this.km.mode == 65)) {
(characterObject.c = 0);
break;
}
(characterObject.pt = 1600);
break;
}
case 1600:
{
var n4 = 0;
var n5 = 0;
if ((characterObject.c2 <= 0)) {
(characterObject.c5 = ((characterObject.c5 + 15) | 0));
if ((characterObject.c5 >= 360)) {
(characterObject.c5 = ((characterObject.c5 - 360) | 0));
}
if ((characterObject.c3 > 20)) {
(characterObject.c3 = ((characterObject.c3 - 10) | 0));
}
else {
(characterObject.c2 = 2);
(characterObject.c3 = 5);
(characterObject.c4 = 5);
(characterObject.c5 = 104);
}
if ((this.co_w[characterObject.ac].c != 3200)) {
(characterObject.c = 0);
}
}
else {
if ((characterObject.c2 == 1)) {
(characterObject.c5 = ((characterObject.c5 + 12) | 0));
if ((characterObject.c5 >= 360)) {
(characterObject.c5 = ((characterObject.c5 - 360) | 0));
}
if ((characterObject.c3 > 16)) {
(characterObject.c3 = ((characterObject.c3 - 4) | 0));
}
else {
(characterObject.c2 = 2);
(characterObject.c3 = 5);
(characterObject.c4 = 5);
(characterObject.c5 = 104);
}
if ((this.co_w[characterObject.ac].c != 3200)) {
(characterObject.c = 0);
}
}
else {
if ((characterObject.c2 == 2)) {
if ((characterObject.c3 < 530)) {
(characterObject.c3 = ((characterObject.c3 + 25) | 0));
}
if ((characterObject.c5 < 200)) {
(characterObject.c5 = ((characterObject.c5 + 2) | 0));
}
if ((characterObject.c5 >= 154)) {
(characterObject.c4 = ((characterObject.c4 + 25) | 0));
if ((characterObject.c4 >= 505)) {
(characterObject.c4 = 505);
(characterObject.c = 0);
}
}
else {
if ((this.co_w[characterObject.ac].c != 3200)) {
(characterObject.c4 = ((characterObject.c4 + 25) | 0));
if ((characterObject.c4 >= 505)) {
(characterObject.c4 = 505);
(characterObject.c = 0);
}
}
}
var d = ((characterObject.c5 * (Math.PI * 2)) / 360.0);
var n7 = ((((characterObject.x + 16) | 0) + J.i((Math.cos(d) * characterObject.c3))) | 0);
var n8 = ((((characterObject.y + 16) | 0) + J.i((Math.sin(d) * characterObject.c3))) | 0);
var n9 = ((((characterObject.x + 16) | 0) + J.i((Math.cos(d) * characterObject.c4))) | 0);
var n10 = ((((characterObject.y + 16) | 0) + J.i((Math.sin(d) * characterObject.c4))) | 0);
(n3 = 0);
while ((n3 <= 6)) {
(petObject = this.co_p[n3]);
if (((((petObject.c >= 1000) && !this.m_mf[n][n3]) && (((petObject.x + 15) | 0) >= n7)) && (((petObject.x + 15) | 0) <= n9))) {
(n5 = ((n9 - n7) | 0));
(n4 = ((n10 - n8) | 0));
if (((((petObject.y + 31) | 0) >= (n4 = ((J.div(Math.imul(((petObject.x - n7) | 0), n4), n5) + n8) | 0))) && (petObject.y <= n4))) {
(petObject.hp = ((petObject.hp - 40) | 0));
(this.m_mf[n][n3] = true);
if ((petObject.hp <= 0)) {
if ((n3 == 6)) {
(n2 = 1);
while ((n2 <= 15)) {
this.km.init1$1(n2);
J.inc(()=>n2, v=>n2=v, 1, false, "int");
}
this.km.init1$1(3);
this.km.addItem$2(3, this.name_crys);
this.km.addItem$2(3, "ふえーん、痛いよー。あたし、もうダメ。");
this.km.activeNigyou$5(3, 112, 64, 236, Color.magenta);
(this.km.mode = 900);
(petObject.c = 250);
(petObject.fc = 10);
}
else {
(petObject.hp = 0);
(petObject.c = 210);
(petObject.vy = (-(175) | 0));
if (!this.gym_f) {
this.km.init1$1(13);
this.km.addItem$2(13, petObject.name);
this.km.addItem$2(13, "えーん、痛いよー。");
this.km.activeNigyouTime$5(13, 300, 12, 144, Color.cyan);
}
}
}
else {
(petObject.fc = 10);
}
}
}
J.inc(()=>n3, v=>n3=v, 1, false, "int");
}
}
}
}
(characterObject.pt = 1700);
}
}
if ((characterObject.c == 0)) {
J.inc(()=>this.m_kazu, v=>this.m_kazu=v, -1, false, "int");
}
else {
if (((characterObject.ch == 0) && (characterObject.c != 750))) {
if (((characterObject.c >= 100) && (characterObject.c < 1000))) {
(n3 = 0);
while ((n3 <= this.w_kazu)) {
if ((this.co_w[n3].ss >= 1)) {
(wildObject = this.co_w[n3]);
if ((((wildObject.c >= 1100) && (J.abs(((characterObject.x - wildObject.x) | 0)) < ((26 + wildObject.ms) | 0))) && (J.abs(((characterObject.y - wildObject.y) | 0)) < ((26 + wildObject.ms) | 0)))) {
if ((characterObject.c == 300)) {
this.wDmage$2(wildObject, 60);
}
else {
if ((characterObject.c == 640)) {
this.wDmage$2(wildObject, this.pichika_waza2_ap);
}
else {
this.wDmage$2(wildObject, 20);
}
}
(characterObject.c = 0);
J.inc(()=>this.m_kazu, v=>this.m_kazu=v, -1, false, "int");
break;
}
}
J.inc(()=>n3, v=>n3=v, 1, false, "int");
}
}
}
else {
if ((((characterObject.ch == 1) && (characterObject.c >= 100)) && (characterObject.c < 1000))) {
(n3 = 0);
while ((n3 <= 6)) {
(petObject = this.co_p[n3]);
if (((((petObject.c >= 1000) && ((characterObject.c != 750) || (n3 != characterObject.c2))) && (J.abs(((characterObject.x - petObject.x) | 0)) < 26)) && (J.abs(((characterObject.y - petObject.y) | 0)) < 26))) {
if ((characterObject.c == 750)) {
petObject.addHP$1(20);
}
else {
(petObject.hp = ((characterObject.c == 300) ? (petObject.hp = ((petObject.hp - 60) | 0)) : ((characterObject.c == 640) ? (petObject.hp = ((petObject.hp - this.pichika_waza2_ap) | 0)) : (petObject.hp = ((petObject.hp - 20) | 0)))));
}
if ((petObject.hp <= 0)) {
if ((n3 == 6)) {
(n2 = 1);
while ((n2 <= 15)) {
this.km.init1$1(n2);
J.inc(()=>n2, v=>n2=v, 1, false, "int");
}
this.km.init1$1(3);
this.km.addItem$2(3, this.name_crys);
this.km.addItem$2(3, "ふえーん、痛いよー。あたし、もうダメ。");
this.km.activeNigyou$5(3, 112, 64, 236, Color.magenta);
(this.km.mode = 900);
(petObject.c = 250);
(petObject.fc = 10);
}
else {
(petObject.hp = 0);
(petObject.c = 210);
(petObject.vy = (-(175) | 0));
if (!this.gym_f) {
this.km.init1$1(13);
this.km.addItem$2(13, petObject.name);
this.km.addItem$2(13, "えーん、痛いよー。");
this.km.activeNigyouTime$5(13, 300, 12, 144, Color.cyan);
}
}
}
else {
(petObject.fc = 10);
}
(characterObject.c = 0);
J.inc(()=>this.m_kazu, v=>this.m_kazu=v, -1, false, "int");
break;
}
J.inc(()=>n3, v=>n3=v, 1, false, "int");
}
}
}
}
}
J.inc(()=>n, v=>n=v, 1, false, "int");
}
}
wDmage$2(wildObject, n) {
(wildObject.hp = ((wildObject.hp - n) | 0));
if ((wildObject.hp <= 0)) {
(wildObject.hp = 0);
(wildObject.c = 1000);
(wildObject.c1 = 55);
(wildObject.c2 = wildObject.pt);
(wildObject.fc = 0);
}
else {
(wildObject.fc = 10);
}
}
itemInit$0() {
var n = 0;
while ((n <= 9)) {
(this.item[n] = 0);
J.inc(()=>n, v=>n=v, 1, false, "int");
}
(this.item_kazu = 0);
(this.item_useID = 0);
}
itemAddItem$1(n) {
this.itemNarabikae$0();
if ((this.item_kazu < 10)) {
(this.item[this.item_kazu] = n);
}
}
itemDelItem$1(n) {
(this.item[n] = 0);
}
itemNarabikae$0() {
var bl = false;
(this.item_kazu = 0);
var n = 0;
while ((n <= 9)) {
if ((this.item[n] > 0)) {
J.inc(()=>this.item_kazu, v=>this.item_kazu=v, 1, false, "int");
}
J.inc(()=>n, v=>n=v, 1, false, "int");
}
if ((this.item_kazu <= 0)) {
return;
}
do {
(bl = false);
(n = 0);
while ((n <= 8)) {
if (((this.item[n] == 0) && (this.item[((n + 1) | 0)] > 0))) {
(this.item[n] = this.item[((n + 1) | 0)]);
(this.item[((n + 1) | 0)] = 0);
(bl = true);
}
J.inc(()=>n, v=>n=v, 1, false, "int");
}
}
while (bl);
}
itemGetKazu$0() {
(this.item_kazu = 0);
var n = 0;
while ((n <= 9)) {
if ((this.item[n] > 0)) {
J.inc(()=>this.item_kazu, v=>this.item_kazu=v, 1, false, "int");
}
J.inc(()=>n, v=>n=v, 1, false, "int");
}
return this.item_kazu;
}
}
globalThis.MainProgram = MainProgram;
