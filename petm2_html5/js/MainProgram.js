// Direct port of MainProgram from petm2_c.zip. Original method overloads use $arity.
class MainProgram {
gg = null;
gm = null;
gk = null;
maps = null;
km = null;
ig = null;
hi = null;
hih = null;
hg = null;
ap = null;
co_mon = J.array([110], null);
co_m = J.array([48], null);
co_dt = null;
co_sodateya = J.array([2], null);
co_box = J.array([16], null);
co_j = null;
co_p = J.array([8], null);
co_w = J.array([100], null);
ran = null;
rgui_meirei = 0;
rgui_text = null;
rgui_name = null;
rgui_f = false;
mode = 10;
mode_c = 0;
g_c1 = 0;
g_c2 = 0;
g_c3 = 0;
g_ac = 0;
g_ac2 = 0;
score = 0;
highscore = 0;
stage = 1;
stage_cc = 0;
system_mode = 1;
debug_mode = 0;
j_jump_level = 0;
j_jump_type = 0;
ochiru_y = 0;
j_pt_ss = 0;
j_bu_seibetu = 0;
j_bu_name_id = 0;
j_okozukai = 0;
j_name_list = J.array([2, 5], null);
pn_syurui = 0;
w_kazu = 0;
m_kazu = 0;
m_mf = J.array([48, 100], false);
aisyou = J.array([20, 20], 0);
zokusei_name = J.array([20], null);
item = J.array([10], 0);
item_kazu = 0;
item_useID = 0;
item_data_name = J.array([32], null);
item_data_setumei = J.array([32], null);
item_data_teika = J.array([32], 0);
item_data_urine = J.array([32], 0);
item_data_wazacode = J.array([32], 0);
item_motenai_x = 0;
item_motenai_y = 0;
jishin_c = 0;
waza_dname = J.array([72], null);
waza_sk = J.array([2, 72], 0);
waza_zokusei = J.array([72], 0);
waza_rea = J.array([2, 72], 0);
waza_rea_kazu = J.array([2], 0);
vo_pa_x = J.array([6], 0);
vo_pa_y = J.array([6], 0);
de_1 = 0;
de_2 = 0;
de_st = "";
sodateya_type = 0;
sodateya_scc = J.array([3], 0);
gym_f = false;
gym_p_id = J.array([2, 2], 0);
gym_waza_p = J.array([2, 2], 0);
gym_boxno = J.array([2, 2], 0);
gym_kachimake = 0;
gym_double_f = false;
gym_gr_f = false;
gym_shiaino = 0;
gym_cyousen_kazu = 0;
gym_tenki = 0;
gym_tenki_c = 0;
sl_step = 0;
sl_wx = 0;
sl_wy = 0;
race_f = false;
race_time = 0;
race_goal_x = 0;
name_kidohakase = null;
name_jyuuisan = null;
name_teninsan = null;
name_sodateyasan = null;
name_dragontaxy = null;
name_furuure = null;
gym_name = null;
name_message1 = null;
name_message2 = null;
name_dokukinoko_s = null;
name_kinnotama_s = null;
name_fennec = null;
name_kametank = null;
name_sunvista = null;
name_butapig = null;
name_karara = null;
name_iwatops = null;
name_yachamo = null;
name_mariri = null;
name_chireihana = null;
name_poppie = null;
name_namakezaru = null;
name_lunarock = null;
name_pikachii = null;
name_sungoose = null;
name_starnal = null;
name_hercules = null;
name_lanster = null;
name_kamalike = null;
name_chirumichiru = null;
name_popony = null;
name_yureko = null;
name_sunnyna = null;
name_bibidama = null;
name_pichika = null;
name_blackal = null;
name_makkalgo = null;
name_rachi = null;
name_atis = null;
name_latis = null;
name_tubomushi = null;
name_taiking = null;
name_mirocureall = null;
name_airms = null;
name_grounder = null;
name_kaiole = null;
name_senkuuza = null;
constructor(gameGraphics, gameMouse, gameKey) {
(this.gg = gameGraphics);
(this.gm = gameMouse);
(this.gk = gameKey);
(this.maps = new MapSystem(200, 100, this.gg));
(this.km = new KeyboardMenu(this.gg, this.gk, this));
this.ranInit$0();
(this.hi = this.gg.spt_img[0]);
(this.hih = this.gg.spt_img);
(this.hg = this.gg.os_g);
(this.ap = this.gg.ap);
var n = 0;
while ((n <= 109)) {
(this.co_mon[n] = new MonsterObject());
++n;
}
(n = 0);
while ((n <= 7)) {
(this.co_p[n] = this.co_mon[n]);
++n;
}
(this.co_j = this.co_mon[6]);
(n = 0);
while ((n <= 99)) {
(this.co_w[n] = this.co_mon[((10 + n) | 0)]);
++n;
}
(n = 0);
while ((n <= 47)) {
(this.co_m[n] = new CharacterObject());
++n;
}
(this.co_dt = new CharacterObject());
(this.co_sodateya[0] = new MonsterObject());
(this.co_sodateya[1] = new MonsterObject());
(n = 0);
while ((n <= 15)) {
(this.co_box[n] = new MonsterObject());
++n;
}
(this.ig = new IdouGamen(this.gg, this.gk, this.km, this));
(this.rgui_meirei = 0);
(this.rgui_text = "");
(this.rgui_name = "");
(this.rgui_f = false);
(this.zokusei_name[1] = "ノーマル");
(this.zokusei_name[2] = "炎");
(this.zokusei_name[3] = "水");
(this.zokusei_name[4] = "草");
(this.zokusei_name[5] = "電気");
(this.zokusei_name[6] = "岩");
(this.zokusei_name[7] = "地面");
(this.zokusei_name[8] = "鳥");
(this.zokusei_name[9] = "虫");
(this.zokusei_name[10] = "格闘");
(this.zokusei_name[11] = "エスパー");
(this.zokusei_name[12] = "ゴースト");
(this.zokusei_name[13] = "鉄");
(this.zokusei_name[14] = "ドラゴン");
var n2 = 0;
while ((n2 <= 19)) {
var n3 = 0;
while ((n3 <= 19)) {
(this.aisyou[n2][n3] = 0);
++n3;
}
++n2;
}
(this.aisyou[1][1] = 0);
(this.aisyou[1][2] = 0);
(this.aisyou[1][3] = 0);
(this.aisyou[1][4] = 0);
(this.aisyou[1][5] = 0);
(this.aisyou[1][6] = 2);
(this.aisyou[1][7] = 0);
(this.aisyou[1][8] = 0);
(this.aisyou[1][9] = 0);
(this.aisyou[1][10] = 0);
(this.aisyou[1][11] = 0);
(this.aisyou[1][12] = 3);
(this.aisyou[1][13] = 2);
(this.aisyou[1][14] = 0);
(this.aisyou[2][1] = 0);
(this.aisyou[2][2] = 2);
(this.aisyou[2][3] = 2);
(this.aisyou[2][4] = 1);
(this.aisyou[2][5] = 0);
(this.aisyou[2][6] = 2);
(this.aisyou[2][7] = 0);
(this.aisyou[2][8] = 0);
(this.aisyou[2][9] = 1);
(this.aisyou[2][10] = 0);
(this.aisyou[2][11] = 0);
(this.aisyou[2][12] = 0);
(this.aisyou[2][13] = 1);
(this.aisyou[2][14] = 2);
(this.aisyou[3][1] = 0);
(this.aisyou[3][2] = 1);
(this.aisyou[3][3] = 2);
(this.aisyou[3][4] = 2);
(this.aisyou[3][5] = 0);
(this.aisyou[3][6] = 1);
(this.aisyou[3][7] = 1);
(this.aisyou[3][8] = 0);
(this.aisyou[3][9] = 0);
(this.aisyou[3][10] = 0);
(this.aisyou[3][11] = 0);
(this.aisyou[3][12] = 0);
(this.aisyou[3][13] = 0);
(this.aisyou[3][14] = 2);
(this.aisyou[4][1] = 0);
(this.aisyou[4][2] = 2);
(this.aisyou[4][3] = 1);
(this.aisyou[4][4] = 2);
(this.aisyou[4][5] = 0);
(this.aisyou[4][6] = 1);
(this.aisyou[4][7] = 1);
(this.aisyou[4][8] = 2);
(this.aisyou[4][9] = 2);
(this.aisyou[4][10] = 0);
(this.aisyou[4][11] = 0);
(this.aisyou[4][12] = 0);
(this.aisyou[4][13] = 2);
(this.aisyou[4][14] = 2);
(this.aisyou[5][1] = 0);
(this.aisyou[5][2] = 0);
(this.aisyou[5][3] = 1);
(this.aisyou[5][4] = 2);
(this.aisyou[5][5] = 2);
(this.aisyou[5][6] = 2);
(this.aisyou[5][7] = 3);
(this.aisyou[5][8] = 1);
(this.aisyou[5][9] = 0);
(this.aisyou[5][10] = 0);
(this.aisyou[5][11] = 0);
(this.aisyou[5][12] = 0);
(this.aisyou[5][13] = 0);
(this.aisyou[5][14] = 2);
(this.aisyou[6][1] = 0);
(this.aisyou[6][2] = 1);
(this.aisyou[6][3] = 0);
(this.aisyou[6][4] = 0);
(this.aisyou[6][5] = 0);
(this.aisyou[6][6] = 0);
(this.aisyou[6][7] = 2);
(this.aisyou[6][8] = 1);
(this.aisyou[6][9] = 1);
(this.aisyou[6][10] = 2);
(this.aisyou[6][11] = 0);
(this.aisyou[6][12] = 3);
(this.aisyou[6][13] = 2);
(this.aisyou[6][14] = 0);
(this.aisyou[7][1] = 0);
(this.aisyou[7][2] = 1);
(this.aisyou[7][3] = 0);
(this.aisyou[7][4] = 2);
(this.aisyou[7][5] = 1);
(this.aisyou[7][6] = 1);
(this.aisyou[7][7] = 0);
(this.aisyou[7][8] = 3);
(this.aisyou[7][9] = 2);
(this.aisyou[7][10] = 0);
(this.aisyou[7][11] = 0);
(this.aisyou[7][12] = 3);
(this.aisyou[7][13] = 0);
(this.aisyou[7][14] = 0);
(this.aisyou[8][1] = 0);
(this.aisyou[8][2] = 0);
(this.aisyou[8][3] = 0);
(this.aisyou[8][4] = 1);
(this.aisyou[8][5] = 2);
(this.aisyou[8][6] = 2);
(this.aisyou[8][7] = 0);
(this.aisyou[8][8] = 0);
(this.aisyou[8][9] = 1);
(this.aisyou[8][10] = 1);
(this.aisyou[8][11] = 0);
(this.aisyou[8][12] = 3);
(this.aisyou[8][13] = 2);
(this.aisyou[8][14] = 0);
(this.aisyou[9][1] = 0);
(this.aisyou[9][2] = 2);
(this.aisyou[9][3] = 0);
(this.aisyou[9][4] = 1);
(this.aisyou[9][5] = 0);
(this.aisyou[9][6] = 0);
(this.aisyou[9][7] = 0);
(this.aisyou[9][8] = 2);
(this.aisyou[9][9] = 0);
(this.aisyou[9][10] = 2);
(this.aisyou[9][11] = 1);
(this.aisyou[9][12] = 3);
(this.aisyou[9][13] = 2);
(this.aisyou[9][14] = 0);
(this.aisyou[10][1] = 1);
(this.aisyou[10][2] = 0);
(this.aisyou[10][3] = 0);
(this.aisyou[10][4] = 0);
(this.aisyou[10][5] = 0);
(this.aisyou[10][6] = 1);
(this.aisyou[10][7] = 0);
(this.aisyou[10][8] = 2);
(this.aisyou[10][9] = 2);
(this.aisyou[10][10] = 0);
(this.aisyou[10][11] = 2);
(this.aisyou[10][12] = 3);
(this.aisyou[10][13] = 1);
(this.aisyou[10][14] = 0);
(this.aisyou[11][1] = 0);
(this.aisyou[11][2] = 0);
(this.aisyou[11][3] = 0);
(this.aisyou[11][4] = 0);
(this.aisyou[11][5] = 0);
(this.aisyou[11][6] = 0);
(this.aisyou[11][7] = 0);
(this.aisyou[11][8] = 0);
(this.aisyou[11][9] = 0);
(this.aisyou[11][10] = 1);
(this.aisyou[11][11] = 2);
(this.aisyou[11][12] = 0);
(this.aisyou[11][13] = 0);
(this.aisyou[11][14] = 0);
(this.aisyou[12][1] = 3);
(this.aisyou[12][2] = 0);
(this.aisyou[12][3] = 0);
(this.aisyou[12][4] = 0);
(this.aisyou[12][5] = 0);
(this.aisyou[12][6] = 0);
(this.aisyou[12][7] = 0);
(this.aisyou[12][8] = 0);
(this.aisyou[12][9] = 0);
(this.aisyou[12][10] = 0);
(this.aisyou[12][11] = 1);
(this.aisyou[12][12] = 1);
(this.aisyou[12][13] = 0);
(this.aisyou[12][14] = 0);
(this.aisyou[13][1] = 0);
(this.aisyou[13][2] = 2);
(this.aisyou[13][3] = 2);
(this.aisyou[13][4] = 0);
(this.aisyou[13][5] = 2);
(this.aisyou[13][6] = 1);
(this.aisyou[13][7] = 0);
(this.aisyou[13][8] = 0);
(this.aisyou[13][9] = 0);
(this.aisyou[13][10] = 0);
(this.aisyou[13][11] = 0);
(this.aisyou[13][12] = 3);
(this.aisyou[13][13] = 2);
(this.aisyou[13][14] = 0);
(this.j_name_list[0][0] = "未定");
(this.j_name_list[1][0] = "未定");
(this.j_name_list[0][1] = this.ap.getParameter("name_boy1"));
(this.j_name_list[0][2] = this.ap.getParameter("name_boy2"));
(this.j_name_list[0][3] = this.ap.getParameter("name_boy3"));
(this.j_name_list[0][4] = this.ap.getParameter("name_boy4"));
(this.j_name_list[1][1] = this.ap.getParameter("name_girl1"));
(this.j_name_list[1][2] = this.ap.getParameter("name_girl2"));
(this.j_name_list[1][3] = this.ap.getParameter("name_girl3"));
(this.j_name_list[1][4] = this.ap.getParameter("name_girl4"));
(this.item_data_name[1] = this.ap.getParameter("name_kizugusuri"));
(this.item_data_name[2] = this.ap.getParameter("name_petdrink"));
(this.item_data_name[3] = this.ap.getParameter("name_kinomi"));
(this.item_data_name[4] = this.ap.getParameter("name_dokukinoko"));
(this.item_data_name[5] = this.ap.getParameter("name_upball"));
(this.item_data_name[6] = this.ap.getParameter("name_lineball"));
(this.item_data_name[7] = this.ap.getParameter("name_powerball"));
(this.item_data_name[8] = this.ap.getParameter("name_kinnotama"));
(this.item_data_name[10] = this.ap.getParameter("name_wazamachine01"));
(this.item_data_name[11] = this.ap.getParameter("name_wazamachine02"));
(this.item_data_name[12] = this.ap.getParameter("name_wazamachine03"));
(this.item_data_name[13] = this.ap.getParameter("name_wazamachine04"));
(this.item_data_name[14] = this.ap.getParameter("name_wazamachine05"));
(this.item_data_name[15] = this.ap.getParameter("name_wazamachine06"));
(this.item_data_setumei[1] = "ＨＰを、回復します。");
(this.item_data_setumei[2] = "ＰＰを、回復します。");
(this.item_data_setumei[3] = "ＨＰとＰＰを、少しだけ回復。");
(this.item_data_setumei[5] = "真上に発射するペットボール。");
(this.item_data_setumei[6] = "水平に飛ぶ、ペットボール。");
(this.item_data_setumei[7] = "高性能な、ペットボール。");
(this.item_data_setumei[10] = "破壊光線を、覚えさせる。");
(this.item_data_setumei[11] = "どくばりを、覚えさせる。");
(this.item_data_setumei[12] = "地震を、覚えさせる。");
(this.item_data_setumei[13] = "メガフレアを、覚えさせる。");
(this.item_data_setumei[14] = "自己再生を、覚えさせる。");
(this.item_data_setumei[15] = "ナイトヘッドを、覚えさせる。");
(this.item_data_setumei[4] = this.ap.getParameter("name_dokukinoko_setumei"));
(this.item_data_setumei[8] = this.ap.getParameter("name_kinnotama_setumei"));
(this.name_dokukinoko_s = this.ap.getParameter("name_dokukinoko_s"));
(this.name_kinnotama_s = this.ap.getParameter("name_kinnotama_s"));
(n = 0);
while ((n <= 31)) {
(this.item_data_teika[n] = 0);
++n;
}
if ((this.paraInt$1("system_mode") == 0)) {
(this.item_data_teika[1] = this.paraNedan$1("teika_kizugusuri"));
(this.item_data_teika[2] = this.paraNedan$1("teika_petdrink"));
(this.item_data_teika[3] = this.paraNedan$1("teika_kinomi"));
(this.item_data_teika[4] = this.paraNedan$1("teika_dokukinoko"));
(this.item_data_teika[5] = this.paraNedan$1("teika_upball"));
(this.item_data_teika[6] = this.paraNedan$1("teika_lineball"));
(this.item_data_teika[7] = this.paraNedan$1("teika_powerball"));
(this.item_data_teika[8] = this.paraNedan$1("teika_kinnotama"));
(this.item_data_teika[10] = this.paraNedan$1("teika_wazamachine01"));
(this.item_data_teika[11] = this.paraNedan$1("teika_wazamachine02"));
}
else {
(this.item_data_teika[1] = 20);
(this.item_data_teika[2] = 30);
(this.item_data_teika[3] = 10);
(this.item_data_teika[4] = 60);
(this.item_data_teika[5] = 50);
(this.item_data_teika[6] = 50);
(this.item_data_teika[7] = 50);
(this.item_data_teika[8] = 400);
(this.item_data_teika[10] = 300);
(this.item_data_teika[11] = 400);
}
(this.item_data_teika[12] = 1100);
(this.item_data_teika[13] = 1200);
(this.item_data_teika[14] = 1200);
(this.item_data_teika[15] = 1300);
(n = 0);
while ((n <= 31)) {
(this.item_data_urine[n] = J.div(this.item_data_teika[n], 2));
++n;
}
(this.item_data_wazacode[10] = 21);
(this.item_data_wazacode[11] = 39);
(this.item_data_wazacode[12] = 13);
(this.item_data_wazacode[13] = 42);
(this.item_data_wazacode[14] = 34);
(this.item_data_wazacode[15] = 61);
(n = 0);
while ((n <= 71)) {
(this.waza_dname[n] = "なし");
(this.waza_zokusei[n] = 1);
(this.waza_sk[0][n] = 0);
(this.waza_sk[1][n] = 0);
(this.waza_rea[0][n] = 0);
(this.waza_rea[1][n] = 0);
++n;
}
(this.waza_rea_kazu[0] = 0);
(this.waza_rea_kazu[1] = 0);
(this.waza_dname[0] = "なし");
(this.waza_sk[0][0] = 0);
(this.waza_sk[1][0] = 0);
(this.waza_zokusei[0] = 1);
(this.waza_dname[1] = "ペットボール");
(this.waza_sk[0][1] = 0);
(this.waza_sk[1][1] = 0);
(this.waza_zokusei[1] = 1);
(this.waza_dname[2] = "ジャンプ");
(this.waza_sk[0][2] = 0);
(this.waza_sk[1][2] = 0);
(this.waza_zokusei[2] = 1);
(this.waza_dname[3] = "体当たり");
(this.waza_sk[0][3] = 1);
(this.waza_sk[1][3] = 1);
(this.waza_zokusei[3] = 1);
(this.waza_dname[4] = "火炎放射");
(this.waza_sk[0][4] = 1);
(this.waza_sk[1][4] = 0);
(this.waza_zokusei[4] = 2);
(this.waza_dname[5] = "高射砲");
(this.waza_sk[0][5] = 1);
(this.waza_sk[1][5] = 0);
(this.waza_zokusei[5] = 2);
(this.waza_dname[6] = "みずでっぽう");
(this.waza_sk[0][6] = 1);
(this.waza_sk[1][6] = 1);
(this.waza_zokusei[6] = 3);
(this.waza_dname[7] = "ハイドロポンプ");
(this.waza_sk[0][7] = 1);
(this.waza_sk[1][7] = 1);
(this.waza_zokusei[7] = 3);
(this.waza_dname[8] = "はっぱカッター");
(this.waza_sk[0][8] = 1);
(this.waza_sk[1][8] = 0);
(this.waza_zokusei[8] = 4);
(this.waza_dname[9] = "はっぱ乱れ撃ち");
(this.waza_sk[0][9] = 1);
(this.waza_sk[1][9] = 0);
(this.waza_zokusei[9] = 4);
(this.waza_dname[10] = "空手パンチ");
(this.waza_sk[0][10] = 1);
(this.waza_sk[1][0] = 0);
(this.waza_zokusei[10] = 10);
(this.waza_dname[11] = "ドリルくちばし");
(this.waza_sk[0][11] = 1);
(this.waza_sk[1][11] = 1);
(this.waza_zokusei[11] = 8);
(this.waza_dname[12] = "みずでっぽう２");
(this.waza_sk[0][12] = 0);
(this.waza_sk[1][12] = 0);
(this.waza_zokusei[12] = 3);
(this.waza_dname[13] = "地震");
(this.waza_sk[0][13] = 1);
(this.waza_sk[1][13] = 1);
(this.waza_zokusei[13] = 7);
(this.waza_dname[14] = "穴を掘る");
(this.waza_sk[0][14] = 0);
(this.waza_sk[1][14] = 0);
(this.waza_zokusei[14] = 7);
(this.waza_dname[15] = "１０まんボルト");
(this.waza_sk[0][15] = 1);
(this.waza_sk[1][15] = 1);
(this.waza_zokusei[15] = 5);
(this.waza_dname[16] = "火の玉");
(this.waza_sk[0][16] = 1);
(this.waza_sk[1][16] = 1);
(this.waza_zokusei[16] = 2);
(this.waza_dname[17] = "ブレイククロウ");
(this.waza_sk[0][17] = 1);
(this.waza_sk[1][17] = 1);
(this.waza_zokusei[17] = 1);
(this.waza_dname[18] = "とびかかる");
(this.waza_sk[0][18] = 1);
(this.waza_sk[1][18] = 0);
(this.waza_zokusei[18] = 1);
(this.waza_dname[19] = "スカイアッパー");
(this.waza_sk[0][19] = 1);
(this.waza_sk[1][19] = 0);
(this.waza_zokusei[19] = 10);
(this.waza_dname[20] = "ソーラービーム");
(this.waza_sk[0][20] = 1);
(this.waza_sk[1][20] = 0);
(this.waza_zokusei[20] = 4);
(this.waza_dname[21] = "破壊光線");
(this.waza_sk[0][21] = 1);
(this.waza_sk[1][21] = 1);
(this.waza_zokusei[21] = 1);
(this.waza_dname[22] = "かみなり");
(this.waza_sk[0][22] = 1);
(this.waza_sk[1][22] = 1);
(this.waza_zokusei[22] = 5);
(this.waza_dname[23] = "ウインドカッター");
(this.waza_sk[0][23] = 0);
(this.waza_sk[1][23] = 1);
(this.waza_zokusei[23] = 8);
(this.waza_dname[24] = "ミサイルばり");
(this.waza_sk[0][24] = 1);
(this.waza_sk[1][24] = 1);
(this.waza_zokusei[24] = 9);
(this.waza_dname[25] = "岩落し");
(this.waza_sk[0][25] = 1);
(this.waza_sk[1][25] = 0);
(this.waza_zokusei[25] = 6);
(this.waza_dname[26] = "げんしのちから");
(this.waza_sk[0][26] = 0);
(this.waza_sk[1][26] = 1);
(this.waza_zokusei[26] = 6);
(this.waza_dname[27] = "ねがいごと");
(this.waza_sk[0][27] = 0);
(this.waza_sk[1][27] = 1);
(this.waza_zokusei[27] = 11);
(this.waza_dname[28] = "はなびらのまい");
(this.waza_sk[0][28] = 1);
(this.waza_sk[1][28] = 0);
(this.waza_zokusei[28] = 4);
(this.waza_dname[29] = "ハリケンブラスト");
(this.waza_sk[0][29] = 0);
(this.waza_sk[1][29] = 1);
(this.waza_zokusei[29] = 8);
(this.waza_dname[30] = "サイコキネシス");
(this.waza_sk[0][30] = 1);
(this.waza_sk[1][30] = 1);
(this.waza_zokusei[30] = 11);
(this.waza_dname[31] = "ワタゲばくだん");
(this.waza_sk[0][31] = 1);
(this.waza_sk[1][31] = 0);
(this.waza_zokusei[31] = 4);
(this.waza_dname[32] = "回復のワタゲ");
(this.waza_sk[0][32] = 1);
(this.waza_sk[1][32] = 0);
(this.waza_zokusei[32] = 4);
(this.waza_dname[33] = "マジカルリーフ");
(this.waza_sk[0][33] = 1);
(this.waza_sk[1][33] = 1);
(this.waza_zokusei[33] = 4);
(this.waza_dname[34] = "自己再生");
(this.waza_sk[0][34] = 1);
(this.waza_sk[1][34] = 1);
(this.waza_zokusei[34] = 11);
(this.waza_dname[35] = "コマネチ");
(this.waza_sk[0][35] = 0);
(this.waza_sk[1][35] = 0);
(this.waza_zokusei[35] = 1);
(this.waza_dname[36] = "マジカルショット");
(this.waza_sk[0][36] = 1);
(this.waza_sk[1][36] = 0);
(this.waza_zokusei[36] = 1);
(this.waza_dname[37] = "つるぎのまい");
(this.waza_sk[0][37] = 1);
(this.waza_sk[1][37] = 0);
(this.waza_zokusei[37] = 1);
(this.waza_dname[38] = "カマキリ拳法");
(this.waza_sk[0][38] = 1);
(this.waza_sk[1][38] = 0);
(this.waza_zokusei[38] = 9);
(this.waza_dname[39] = "どくばり");
(this.waza_sk[0][39] = 1);
(this.waza_sk[1][39] = 1);
(this.waza_zokusei[39] = 1);
(this.waza_dname[40] = "シャドーボール");
(this.waza_sk[0][40] = 1);
(this.waza_sk[1][40] = 1);
(this.waza_zokusei[40] = 12);
(this.waza_dname[41] = "じばく");
(this.waza_sk[0][41] = 0);
(this.waza_sk[1][41] = 1);
(this.waza_zokusei[41] = 1);
(this.waza_dname[42] = "メガフレア");
(this.waza_sk[0][42] = 1);
(this.waza_sk[1][42] = 1);
(this.waza_zokusei[42] = 2);
(this.waza_dname[43] = "岩雪崩");
(this.waza_sk[0][43] = 0);
(this.waza_sk[1][43] = 1);
(this.waza_zokusei[43] = 6);
(this.waza_dname[44] = "聖なる炎");
(this.waza_sk[0][44] = 0);
(this.waza_sk[1][44] = 1);
(this.waza_zokusei[44] = 2);
(this.waza_dname[45] = "オーバーヒート");
(this.waza_sk[0][45] = 1);
(this.waza_sk[1][45] = 1);
(this.waza_zokusei[45] = 2);
(this.waza_dname[46] = "ミストボール");
(this.waza_sk[0][46] = 0);
(this.waza_sk[1][46] = 1);
(this.waza_zokusei[46] = 11);
(this.waza_dname[47] = "透ける");
(this.waza_sk[0][47] = 0);
(this.waza_sk[1][47] = 1);
(this.waza_zokusei[47] = 11);
(this.waza_dname[48] = "ラスターパージ");
(this.waza_sk[0][48] = 0);
(this.waza_sk[1][48] = 1);
(this.waza_zokusei[48] = 11);
(this.waza_dname[49] = "いやしの雨");
(this.waza_sk[0][49] = 1);
(this.waza_sk[1][49] = 0);
(this.waza_zokusei[49] = 3);
(this.waza_dname[50] = "はめつの雨");
(this.waza_sk[0][50] = 1);
(this.waza_sk[1][50] = 0);
(this.waza_zokusei[50] = 3);
(this.waza_dname[51] = "はねる");
(this.waza_sk[0][51] = 1);
(this.waza_sk[1][51] = 0);
(this.waza_zokusei[51] = 1);
(this.waza_dname[52] = "機銃掃射");
(this.waza_sk[0][52] = 0);
(this.waza_sk[1][52] = 1);
(this.waza_zokusei[52] = 2);
(this.waza_dname[53] = "はがねのつばさ");
(this.waza_sk[0][53] = 0);
(this.waza_sk[1][53] = 1);
(this.waza_zokusei[53] = 13);
(this.waza_dname[54] = "水の波動");
(this.waza_sk[0][54] = 0);
(this.waza_sk[1][54] = 1);
(this.waza_zokusei[54] = 3);
(this.waza_dname[55] = "どくどくばり");
(this.waza_sk[0][55] = 1);
(this.waza_sk[1][55] = 1);
(this.waza_zokusei[55] = 1);
(this.waza_dname[56] = "百裂空手パンチ");
(this.waza_sk[0][56] = 1);
(this.waza_sk[1][56] = 0);
(this.waza_zokusei[56] = 10);
(this.waza_dname[57] = "超自己再生");
(this.waza_sk[0][57] = 1);
(this.waza_sk[1][57] = 1);
(this.waza_zokusei[57] = 11);
(this.waza_dname[58] = "大地震");
(this.waza_sk[0][58] = 1);
(this.waza_sk[1][58] = 1);
(this.waza_zokusei[58] = 7);
(this.waza_dname[59] = "電磁砲");
(this.waza_sk[0][59] = 1);
(this.waza_sk[1][59] = 1);
(this.waza_zokusei[59] = 5);
(this.waza_dname[60] = "噴火");
(this.waza_sk[0][60] = 1);
(this.waza_sk[1][60] = 0);
(this.waza_zokusei[60] = 2);
(this.waza_dname[61] = "ナイトヘッド");
(this.waza_sk[0][61] = 1);
(this.waza_sk[1][61] = 1);
(this.waza_zokusei[61] = 12);
if ((this.paraInt$1("waza_name_hf") == 1)) {
(this.waza_dname[0] = "なし");
(this.waza_dname[1] = "ペットボール");
(this.waza_dname[2] = this.ap.getParameter("waza_name1"));
(this.waza_dname[3] = this.ap.getParameter("waza_name2"));
(this.waza_dname[4] = this.ap.getParameter("waza_name3"));
(this.waza_dname[5] = this.ap.getParameter("waza_name4"));
(this.waza_dname[6] = this.ap.getParameter("waza_name5"));
(this.waza_dname[7] = this.ap.getParameter("waza_name6"));
(this.waza_dname[8] = this.ap.getParameter("waza_name7"));
(this.waza_dname[9] = this.ap.getParameter("waza_name8"));
(this.waza_dname[10] = this.ap.getParameter("waza_name9"));
(this.waza_dname[11] = this.ap.getParameter("waza_name10"));
(this.waza_dname[12] = "みずでっぽう２");
(this.waza_dname[13] = this.ap.getParameter("waza_name11"));
(this.waza_dname[14] = "穴を掘る");
(this.waza_dname[15] = this.ap.getParameter("waza_name12"));
(this.waza_dname[16] = this.ap.getParameter("waza_name13"));
(this.waza_dname[17] = this.ap.getParameter("waza_name14"));
(this.waza_dname[18] = this.ap.getParameter("waza_name15"));
(this.waza_dname[19] = this.ap.getParameter("waza_name16"));
(this.waza_dname[20] = this.ap.getParameter("waza_name17"));
(this.waza_dname[21] = this.ap.getParameter("waza_name18"));
(this.waza_dname[22] = this.ap.getParameter("waza_name19"));
(this.waza_dname[23] = this.ap.getParameter("waza_name20"));
(this.waza_dname[24] = this.ap.getParameter("waza_name21"));
(this.waza_dname[25] = this.ap.getParameter("waza_name22"));
(this.waza_dname[26] = this.ap.getParameter("waza_name23"));
(this.waza_dname[27] = this.ap.getParameter("waza_name24"));
(this.waza_dname[28] = this.ap.getParameter("waza_name25"));
(this.waza_dname[29] = this.ap.getParameter("waza_name26"));
(this.waza_dname[30] = this.ap.getParameter("waza_name27"));
(this.waza_dname[31] = this.ap.getParameter("waza_name28"));
(this.waza_dname[32] = this.ap.getParameter("waza_name29"));
(this.waza_dname[33] = this.ap.getParameter("waza_name30"));
(this.waza_dname[34] = this.ap.getParameter("waza_name31"));
(this.waza_dname[35] = "コマネチ");
(this.waza_dname[36] = this.ap.getParameter("waza_name32"));
(this.waza_dname[37] = this.ap.getParameter("waza_name33"));
(this.waza_dname[38] = this.ap.getParameter("waza_name34"));
(this.waza_dname[39] = this.ap.getParameter("waza_name35"));
(this.waza_dname[40] = this.ap.getParameter("waza_name36"));
(this.waza_dname[41] = this.ap.getParameter("waza_name37"));
(this.waza_dname[42] = this.ap.getParameter("waza_name38"));
(this.waza_dname[43] = this.ap.getParameter("waza_name39"));
(this.waza_dname[44] = this.ap.getParameter("waza_name40"));
(this.waza_dname[45] = this.ap.getParameter("waza_name41"));
(this.waza_dname[46] = this.ap.getParameter("waza_name42"));
(this.waza_dname[47] = this.ap.getParameter("waza_name43"));
(this.waza_dname[48] = this.ap.getParameter("waza_name44"));
(this.waza_dname[49] = this.ap.getParameter("waza_name45"));
(this.waza_dname[50] = this.ap.getParameter("waza_name46"));
(this.waza_dname[51] = this.ap.getParameter("waza_name47"));
(this.waza_dname[52] = this.ap.getParameter("waza_name48"));
(this.waza_dname[53] = this.ap.getParameter("waza_name49"));
(this.waza_dname[54] = this.ap.getParameter("waza_name50"));
(this.waza_dname[55] = this.ap.getParameter("waza_name51"));
(this.waza_dname[56] = this.ap.getParameter("waza_name52"));
(this.waza_dname[57] = this.ap.getParameter("waza_name53"));
(this.waza_dname[58] = this.ap.getParameter("waza_name54"));
(this.waza_dname[59] = this.ap.getParameter("waza_name55"));
(this.waza_dname[60] = this.ap.getParameter("waza_name56"));
(this.waza_dname[61] = this.ap.getParameter("waza_name57"));
(this.item_data_setumei[10] = (this.waza_dname[21] + "を、覚えさせる。"));
(this.item_data_setumei[11] = (this.waza_dname[39] + "を、覚えさせる。"));
(this.item_data_setumei[12] = (this.waza_dname[13] + "を、覚えさせる。"));
(this.item_data_setumei[13] = (this.waza_dname[42] + "を、覚えさせる。"));
(this.item_data_setumei[14] = (this.waza_dname[34] + "を、覚えさせる。"));
(this.item_data_setumei[15] = (this.waza_dname[61] + "を、覚えさせる。"));
}
(this.waza_rea[1][0] = 16);
(this.waza_rea[1][1] = 33);
(this.waza_rea[1][2] = 40);
(this.waza_rea[1][3] = 22);
(this.waza_rea[1][4] = 43);
(this.waza_rea[1][5] = 44);
(this.waza_rea[1][6] = 45);
(this.waza_rea[1][7] = 6);
(this.waza_rea[1][8] = 55);
(this.waza_rea[1][9] = 57);
(this.waza_rea[1][10] = 58);
(this.waza_rea[1][11] = 59);
(this.waza_rea_kazu[1] = 12);
(this.name_kidohakase = this.ap.getParameter("name_kidohakase"));
(this.name_jyuuisan = this.ap.getParameter("name_jyuuisan"));
(this.name_teninsan = this.ap.getParameter("name_teninsan"));
(this.name_sodateyasan = this.ap.getParameter("name_sodateyasan"));
(this.name_dragontaxy = this.ap.getParameter("name_dragontaxy"));
(this.name_furuure = this.ap.getParameter("name_furuure"));
(this.gym_name = this.ap.getParameter("gym_name"));
(this.name_message1 = this.ap.getParameter("name_message1"));
(this.name_message2 = this.ap.getParameter("name_message2"));
(this.name_fennec = this.ap.getParameter("name_fennec"));
(this.name_kametank = this.ap.getParameter("name_kametank"));
(this.name_sunvista = this.ap.getParameter("name_sunvista"));
(this.name_butapig = this.ap.getParameter("name_butapig"));
(this.name_karara = this.ap.getParameter("name_karara"));
(this.name_iwatops = this.ap.getParameter("name_iwatops"));
(this.name_yachamo = this.ap.getParameter("name_yachamo"));
(this.name_mariri = this.ap.getParameter("name_mariri"));
(this.name_chireihana = this.ap.getParameter("name_chireihana"));
(this.name_poppie = this.ap.getParameter("name_poppie"));
(this.name_namakezaru = this.ap.getParameter("name_namakezaru"));
(this.name_lunarock = this.ap.getParameter("name_lunarock"));
(this.name_pikachii = this.ap.getParameter("name_pikachii"));
(this.name_sungoose = this.ap.getParameter("name_sungoose"));
(this.name_starnal = this.ap.getParameter("name_starnal"));
(this.name_hercules = this.ap.getParameter("name_hercules"));
(this.name_lanster = this.ap.getParameter("name_lanster"));
(this.name_kamalike = this.ap.getParameter("name_kamalike"));
(this.name_chirumichiru = this.ap.getParameter("name_chirumichiru"));
(this.name_popony = this.ap.getParameter("name_popony"));
(this.name_yureko = this.ap.getParameter("name_yureko"));
(this.name_sunnyna = this.ap.getParameter("name_sunnyna"));
(this.name_bibidama = this.ap.getParameter("name_bibidama"));
(this.name_pichika = this.ap.getParameter("name_pichika"));
(this.name_blackal = this.ap.getParameter("name_blackal"));
(this.name_makkalgo = this.ap.getParameter("name_makkalgo"));
(this.name_rachi = this.ap.getParameter("name_rachi"));
(this.name_atis = this.ap.getParameter("name_atis"));
(this.name_latis = this.ap.getParameter("name_latis"));
(this.name_tubomushi = this.ap.getParameter("name_tubomushi"));
(this.name_taiking = this.ap.getParameter("name_taiking"));
(this.name_mirocureall = this.ap.getParameter("name_mirocureall"));
(this.name_airms = this.ap.getParameter("name_airms"));
(this.name_grounder = this.ap.getParameter("name_grounder"));
(this.name_kaiole = this.ap.getParameter("name_kaiole"));
(this.name_senkuuza = this.ap.getParameter("name_senkuuza"));
(this.gym_tenki = this.paraInt$1("gym_tenki"));
if (((this.gym_tenki < 0) || (this.gym_tenki > 5))) {
(this.gym_tenki = 0);
}
(this.mode = 10);
}
ranInit$0() {
(this.ran = new Random());
}
ranInt$1(n) {
return Math.abs((this.ran.nextInt() % n));
}
toJS$0() {
var n = this.highscore;
if ((n < this.score)) {
(n = this.score);
}
}
paraInt$1(string) {
var n = 0;
var string2 = this.gg.ap.getParameter(string);
try {
(n = Integer.valueOf(string2));
}
catch (numberFormatException) {
(n = -1);
}
return n;
}
paraNedan$1(string) {
var n = this.paraInt$1(string);
if ((n < 0)) {
(n = 0);
}
return n;
}
addScore$1(n) {
(this.score = ((this.score + n) | 0));
}
addSerifu$3(n, n2, n3) {
var n4 = 1;
while ((n4 <= n3)) {
var n5 = 0;
var string = this.ap.getParameter(((("serifu" + n2) + "-") + n4));
try {
(n5 = Integer.valueOf(string));
}
catch (numberFormatException) {
(n5 = -1);
}
if ((n5 != 0)) {
this.km.addItem$2(n, string);
}
++n4;
}
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
(n5 = -1);
}
if ((n5 != 0)) {
this.km.addItem$2(n, string);
}
++n4;
}
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
mainLoop$0() {
switch (this.mode) {
case 10:
{
(this.mode = 50);
break;
}
case 50:
{
this.toJS$0();
this.gg.setBackcolor$1(Color.black);
this.gg.fill$0();
this.gg.drawListImage$3(0, 0, 0);
if (((this.score > 0) || (this.highscore > 0))) {
this.gg.os_g.setColor(Color.black);
this.gg.os_g.setFont(new Font("Dialog", 1, 14));
this.gg.os_g.drawString((((("得点  " + this.score) + "点      最高得点  ") + this.highscore) + "点"), 224, 300);
}
if ((this.gm.button_f || this.gk.tr1_f)) {
break;
}
(this.mode = 60);
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
(this.mode = 1000);
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
this.init2$0();
this.gg.setBackcolor$1(Color.black);
this.gg.fill$0();
if (((this.system_mode == 10) || (this.system_mode == 11))) {
(this.mode = 150);
(this.mode_c = 2);
(this.gym_f = true);
(this.gym_double_f = (this.system_mode != 10));
var n = 0;
while ((n <= 7)) {
var n2 = ((n + 1) | 0);
var string = ("gym_pet_password" + n2);
(this.ig.pass_st = this.ap.getParameter(string));
var bl = ((this.ig.pass_st == null) ? false : this.ig.passToujyouPet$1(7));
if (bl) {
this.copyMonsterObject$2(this.co_p[7], this.co_box[n]);
}
++n;
}
this.gg.drawListImage$3(0, 0, 0);
this.init3$0();
this.gg.drawListImage$3(0, 0, 0);
break;
}
if ((this.system_mode == 20)) {
(this.mode = 160);
(this.mode_c = 2);
(this.gym_f = true);
(this.race_f = true);
(this.gym_double_f = (this.system_mode != 20));
var n = 0;
while ((n <= 7)) {
var n3 = ((n + 1) | 0);
var string = ("gym_pet_password" + n3);
(this.ig.pass_st = this.ap.getParameter(string));
var bl = ((this.ig.pass_st == null) ? false : this.ig.passToujyouPet$1(7));
if (bl) {
this.copyMonsterObject$2(this.co_p[7], this.co_box[n]);
}
++n;
}
this.init3$0();
this.gg.drawListImage$3(0, 0, 0);
this.gg.drawListImage$3(0, 0, 0);
break;
}
if (((this.debug_mode >= 1) && (this.debug_mode <= 4))) {
(this.stage = this.debug_mode);
this.co_p[0].initSyurui$2(1100, this);
this.co_p[1].initSyurui$2(1200, this);
this.co_p[2].initSyurui$2(1300, this);
(this.co_p[0].id = this.co_j.id);
(this.co_p[1].id = this.co_j.id);
(this.co_p[2].id = this.co_j.id);
this.init3$0();
this.ig.zukanTourokuPet$0();
(this.mode = 100);
break;
}
if ((this.debug_mode == 5)) {
this.ig.worldInit$0();
(this.mode = 200);
break;
}
(this.mode = 500);
this.km.initAll$0();
this.km.initSelectbox$5(1, 24, 32, 184, "君は、男の子、女の子？");
this.km.addItem$2(1, "男の子");
this.km.addItem$2(1, "女の子");
this.km.addItem$2(1, "パスワードを入力する");
this.km.active$1(1);
(this.km.mode = 200);
break;
}
case 70:
{
this.ig.worldInit2$0();
this.gg.setBackcolor$1(Color.black);
this.gg.fill$0();
(this.mode = 75);
(this.mode_c = 0);
break;
}
case 75:
{
++this.mode_c;
if ((this.mode_c <= 3)) {
break;
}
(this.mode = 200);
break;
}
case 80:
{
(this.stage = this.ig.checkStage$0());
this.init3$0();
this.gg.os_g.setColor(Color.black);
this.gg.os_g.fillRect(0, 0, this.gg.di.width, this.gg.di.height);
(this.mode = 85);
(this.mode_c = 0);
break;
}
case 85:
{
++this.mode_c;
if ((this.mode_c > 6)) {
(this.mode = (this.race_f ? 160 : (this.gym_f ? 150 : 100)));
}
if ((this.gk.key_code != 84)) {
break;
}
(this.gk.key_code = 0);
(this.mode = 50);
break;
}
case 90:
{
this.ig.worldInit2$0();
this.gg.setBackcolor$1(Color.black);
this.gg.fill$0();
(this.mode = 92);
(this.mode_c = 0);
break;
}
case 91:
{
this.ig.worldInit4$0();
this.gg.setBackcolor$1(Color.black);
this.gg.fill$0();
this.init4$0();
(this.mode = 92);
(this.mode_c = 0);
break;
}
case 92:
{
++this.mode_c;
if ((this.mode_c <= 6)) {
break;
}
(this.mode = 200);
break;
}
case 93:
{
this.ig.worldInit5$0();
this.gg.setBackcolor$1(Color.black);
this.gg.fill$0();
this.init4$0();
(this.mode = 92);
(this.mode_c = 0);
break;
}
case 95:
{
this.ig.worldInit3$0();
this.gg.setBackcolor$1(Color.black);
this.gg.fill$0();
(this.mode = 92);
(this.mode_c = 0);
break;
}
case 100:
{
break;
}
case 200:
{
this.ig.drawMap$0();
this.ig.mainProgram$0();
if ((this.ig.mode == 110)) {
(this.mode = 80);
(this.gym_f = false);
(this.race_f = false);
this.gg.setBackcolor$1(Color.black);
this.gg.fill$0();
}
else {
if ((this.ig.mode == 120)) {
(this.mode = 400);
}
else {
if ((this.ig.mode == 130)) {
(this.mode = 80);
(this.gym_f = true);
(this.race_f = false);
this.gg.setBackcolor$1(Color.black);
this.gg.fill$0();
}
else {
if ((this.ig.mode == 140)) {
(this.mode = 80);
(this.gym_f = true);
(this.race_f = true);
this.gg.setBackcolor$1(Color.black);
this.gg.fill$0();
}
}
}
}
if ((this.gk.key_code != 84)) {
break;
}
(this.gk.key_code = 0);
(this.mode = 50);
break;
}
case 300:
{
this.toJS$0();
this.gg.setBackcolor$1(Color.black);
this.gg.fill$0();
this.gg.drawListImage$3(0, 0, 2);
(this.mode = 310);
(this.mode_c = 0);
break;
}
case 310:
{
++this.mode_c;
if ((this.mode_c > 80)) {
(this.mode = 50);
}
if ((this.gk.key_code != 84)) {
break;
}
(this.gk.key_code = 0);
(this.mode = 50);
break;
}
case 400:
{
this.gg.os_g.setColor(Color.black);
this.gg.os_g.fillRect(0, 0, this.gg.di.width, this.gg.di.height);
(this.mode = 410);
(this.mode_c = 0);
this.addScore$1(1000);
this.toJS$0();
break;
}
case 410:
{
++this.mode_c;
if ((this.mode_c <= 6)) {
break;
}
this.gg.drawListImage$3(0, 0, 1);
(this.mode = 420);
(this.mode_c = 0);
break;
}
case 420:
{
++this.mode_c;
if ((this.mode_c > 150)) {
(this.mode = 50);
}
if ((this.gk.key_code != 84)) {
break;
}
(this.gk.key_code = 0);
(this.mode = 50);
break;
}
case 500:
{
this.km.move$0();
switch (this.km.mode) {
case 200:
{
if ((this.km.kettei_c != 1)) {
break;
}
this.co_j.init$0();
(this.j_pt_ss = 0);
(this.co_j.syurui = 9000);
(this.co_j.zokusei = 1);
(this.co_j.hp_max = 180);
(this.j_okozukai = 1000);
(this.co_j.id = this.ranInt$1(1000));
(this.co_j.name = "名無しさん");
(this.co_j.seibetu = 0);
(this.pn_syurui = 0);
if ((this.km.getSelectedIndex$1(1) == 0)) {
this.km.openCharacterbox$6(5, 310, 32, 100, 100, "");
(this.j_bu_seibetu = 0);
this.km.initSelectbox$5(2, 112, 64, 128, "名前は？");
this.km.addItem$2(2, "自分で決める");
this.km.addItem$2(2, this.j_name_list[this.j_bu_seibetu][1]);
this.km.addItem$2(2, this.j_name_list[this.j_bu_seibetu][2]);
this.km.addItem$2(2, this.j_name_list[this.j_bu_seibetu][3]);
this.km.addItem$2(2, this.j_name_list[this.j_bu_seibetu][4]);
this.km.active$1(2);
(this.km.mode = 300);
break;
}
if ((this.km.getSelectedIndex$1(1) == 1)) {
this.km.openCharacterbox$6(5, 310, 32, 100, 120, "");
(this.j_bu_seibetu = 1);
this.km.initSelectbox$5(2, 112, 64, 128, "名前は？");
this.km.addItem$2(2, "自分で決める");
this.km.addItem$2(2, this.j_name_list[this.j_bu_seibetu][1]);
this.km.addItem$2(2, this.j_name_list[this.j_bu_seibetu][2]);
this.km.addItem$2(2, this.j_name_list[this.j_bu_seibetu][3]);
this.km.addItem$2(2, this.j_name_list[this.j_bu_seibetu][4]);
this.km.active$1(2);
(this.km.mode = 300);
break;
}
this.km.openDialgKakuninBox2$4(11, 298, 160, 192);
this.km.addItem$2(11, "ダイアログに、主人公の");
this.km.addItem$2(11, "パスワードを、入力して下さい。");
this.km.active$1(14);
(this.rgui_text = "");
(this.rgui_f = false);
(this.rgui_meirei = 205);
(this.km.mode = 400);
break;
}
case 300:
{
if ((this.km.cancel_c == 1)) {
this.km.off$1(2);
this.km.off$1(5);
this.km.active$1(1);
(this.km.mode = 200);
break;
}
if ((this.km.kettei_c != 1)) {
break;
}
if ((this.km.getSelectedIndex$1(2) == 0)) {
this.km.initNameinputbox$4(6, 256, 128, "君の名前");
this.km.active$1(6);
(this.km.mode = 310);
break;
}
(this.km.kmo[5].title[0] = this.j_name_list[this.j_bu_seibetu][this.km.getSelectedIndex$1(2)]);
this.km.initSelectbox$5(4, 24, 216, 184, "これで、よろしいですか？");
this.km.addItem$2(4, "はい");
this.km.addItem$2(4, "いいえ");
this.km.active$1(4);
(this.km.mode = 330);
break;
}
case 310:
{
if ((this.km.cancel2_c == 1)) {
this.km.off$1(6);
this.km.active$1(2);
(this.km.mode = 300);
break;
}
if ((this.km.kettei2_c != 1)) {
break;
}
if ((this.km.name_code[0] <= 1)) {
this.km.initMessagebox$4(3, 24, 232, 184);
this.km.addItem$2(3, "名前が、入力されていません。");
this.km.active$1(3);
(this.km.mode = 350);
break;
}
this.km.setTitle$2(5, this.km.getNameString$0());
this.km.initSelectbox$5(4, 24, 216, 184, "これで、よろしいですか？");
this.km.addItem$2(4, "はい");
this.km.addItem$2(4, "いいえ");
this.km.active$1(4);
(this.km.mode = 320);
break;
}
case 320:
{
if ((this.km.cancel_c == 1)) {
this.km.off$1(4);
this.km.active$1(6);
this.km.setTitle$2(5, "");
(this.km.mode = 310);
break;
}
if ((this.km.kettei_c != 1)) {
break;
}
if ((this.km.getSelectedIndex$1(4) == 0)) {
(this.mode = 70);
(this.co_j.seibetu = this.j_bu_seibetu);
(this.j_pt_ss = ((this.co_j.seibetu == 1) ? 20 : 0));
(this.co_j.name = this.km.kmo[5].title[0]);
break;
}
this.km.off$1(4);
this.km.off$1(6);
this.km.off$1(5);
this.km.off$1(2);
this.km.active$1(1);
(this.km.mode = 200);
break;
}
case 330:
{
if ((this.km.cancel_c == 1)) {
this.km.off$1(4);
this.km.active$1(2);
this.km.setTitle$2(5, "");
(this.km.mode = 300);
break;
}
if ((this.km.kettei_c != 1)) {
break;
}
if ((this.km.getSelectedIndex$1(4) == 0)) {
(this.mode = 70);
(this.co_j.seibetu = this.j_bu_seibetu);
(this.j_pt_ss = ((this.co_j.seibetu == 1) ? 20 : 0));
(this.co_j.name = this.km.kmo[5].title[0]);
break;
}
this.km.off$1(4);
this.km.off$1(5);
this.km.off$1(2);
this.km.active$1(1);
(this.km.mode = 200);
break;
}
case 350:
{
if (((this.km.cancel_c != 1) && (this.km.kettei_c != 1))) {
break;
}
this.km.off$1(3);
this.km.off$1(6);
this.km.active$1(2);
this.km.setTitle$2(5, "");
(this.km.mode = 300);
break;
}
case 400:
{
if (!this.rgui_f) {
break;
}
(this.rgui_meirei = 0);
this.km.off$1(11);
this.km.active$1(1);
(this.gk.tr1_f = false);
(this.ig.pass_st = this.rgui_text);
if ((this.ig.pass_st === "cancel")) {
(this.km.mode = 200);
break;
}
(this.ig.pass_st = this.rgui_text);
var bl = this.ig.passToujyouSyujinkou$1(6);
if (bl) {
if ((this.co_j.seibetu == 1)) {
this.km.openCharacterbox$6(5, 184, 64, 100, 120, "");
}
else {
this.km.openCharacterbox$6(5, 184, 64, 100, 100, "");
}
(this.km.kmo[5].title[0] = this.co_j.name);
this.km.initSelectbox$5(4, 24, 216, 184, "これで、よろしいですか？");
this.km.addItem$2(4, "はい");
this.km.addItem$2(4, "いいえ");
this.km.active$1(4);
(this.km.mode = 450);
break;
}
this.km.initMessagebox$4(13, 298, 212, 192);
if ((this.rgui_text.length == 15)) {
this.km.addItem$2(13, "ペットのパスワードは、");
this.km.addItem$2(13, "ここでは、入力できません。");
}
else {
if ((this.ig.pass_error == 1)) {
this.km.addItem$2(13, "パスワードの");
this.km.addItem$2(13, "チャンネルが、違います。");
}
else {
this.km.addItem$2(13, "パスワードが、間違っています。");
}
}
this.km.active$1(13);
(this.km.mode = 410);
break;
}
case 410:
{
if (((this.km.cancel_c != 1) && (this.km.kettei_c != 1))) {
break;
}
this.km.off$1(13);
this.km.active$1(1);
(this.km.mode = 200);
break;
}
case 450:
{
if ((this.km.cancel_c == 1)) {
this.km.off$1(4);
this.km.off$1(5);
this.km.active$1(1);
(this.km.mode = 200);
break;
}
if ((this.km.kettei_c != 1)) {
break;
}
if ((this.km.getSelectedIndex$1(4) == 0)) {
(this.mode = 70);
if ((this.co_j.seibetu == 1)) {
(this.j_pt_ss = 20);
break;
}
(this.j_pt_ss = 0);
break;
}
this.km.off$1(4);
this.km.off$1(5);
this.km.active$1(1);
(this.km.mode = 200);
}
}
this.gg.setBackcolor$1(Color.black);
this.gg.fill$0();
this.km.drawMenus$0();
if ((this.gk.key_code != 84)) {
break;
}
(this.gk.key_code = 0);
(this.mode = 50);
break;
}
case 1000:
{
this.gg.setBackcolor$1(Color.black);
this.gg.fill$0();
this.hg.setFont(new Font("Dialog", 0, 46));
this.hg.setColor(Color.white);
this.hg.setFont(new Font("Dialog", 0, 20));
this.hg.drawString("Title        PETMON 2", 50, 50);
this.hg.drawString("Version      1.72", 50, 80);
this.hg.drawString("Language     Java2  SDK 1.3.1", 50, 110);
this.hg.drawString("OS           Windows XP", 50, 140);
this.hg.drawString("Browser      InternetExplorer 6.0", 50, 170);
this.hg.drawString("Programing   Fukuda Naoto", 50, 200);
this.hg.drawString("Date         2004/2", 50, 230);
(this.mode = 1010);
(this.mode_c = 0);
break;
}
case 1010:
{
++this.mode_c;
if ((this.mode_c <= 40)) {
break;
}
(this.mode = 50);
}
}
}
mL100$0() {
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
this.km.move$0();
this.csMove$0();
if ((this.co_j.c == 1000)) {
this.jM1000$0();
}
else {
this.jMove$0();
}
if ((this.sl_step == 1)) {
if ((this.maps.wx >= this.sl_wx)) {
(this.maps.wx = this.sl_wx);
(this.sl_step = 2);
}
}
else {
if ((this.sl_step == 2)) {
(this.maps.wx = this.sl_wx);
if ((this.co_j.x < ((this.sl_wx - 16) | 0))) {
(this.co_j.x = ((this.sl_wx - 16) | 0));
(this.co_j.vx = 0);
}
else {
if ((this.co_j.x > ((this.sl_wx + 496) | 0))) {
(this.co_j.x = ((this.sl_wx + 496) | 0));
(this.co_j.vx = 0);
}
}
if ((this.maps.wy >= this.sl_wy)) {
(this.maps.wy = this.sl_wy);
(this.sl_step = 3);
}
}
else {
if ((this.sl_step == 3)) {
(this.maps.wx = this.sl_wx);
(this.maps.wy = this.sl_wy);
if ((this.co_j.x < ((this.sl_wx - 16) | 0))) {
(this.co_j.x = ((this.sl_wx - 16) | 0));
(this.co_j.vx = 0);
}
else {
if ((this.co_j.x > ((this.sl_wx + 496) | 0))) {
(this.co_j.x = ((this.sl_wx + 496) | 0));
(this.co_j.vx = 0);
}
}
}
}
}
this.pMove$0();
this.wMove$0();
this.taiatariHantei$0();
if ((this.m_kazu > 0)) {
this.mMove$0();
}
if ((this.co_dt.c > 0)) {
this.dtMove$0();
}
if ((this.stage_cc > 0)) {
++this.stage_cc;
if ((this.stage_cc > 30)) {
(this.mode = 95);
if (((this.debug_mode >= 1) && (this.debug_mode <= 4))) {
(this.mode = 400);
}
}
}
this.drawGamescreen$0();
if ((this.gk.key_code == 84)) {
(this.gk.key_code = 0);
(this.mode = 50);
}
}
mL150$0() {
this.moveGameCounter$0();
this.km.move$0();
this.csMove$0();
if ((this.km.mode == 2100)) {
var n = this.gym_p_id[0][0];
if ((this.co_p[n].gym_wc > 0)) {
if (((this.co_p[n].c == 1000) || (this.co_p[n].c == 2000))) {
--this.co_p[n].gym_wc;
}
}
else {
if ((((this.co_p[n].x > ((this.co_w[10].x - 64) | 0)) || (this.co_p[n].x < ((this.co_j.x + 64) | 0))) && (this.co_p[n].c >= 1000))) {
(this.co_p[n].c = ((this.co_p[n].type == 1) ? 2900 : 1900));
(this.co_p[n].gym_wc = 10);
(this.co_p[n].move_wc = 30);
if ((this.co_p[n].type == 1)) {
(this.co_p[n].move_wc = 0);
}
}
else {
(this.co_p[n].meirei = this.co_p[n].waza_code[this.gym_waza_p[0][0]]);
var nArray = this.gym_waza_p[0];
(nArray[0] = ((nArray[0] + 1) | 0));
if ((this.co_p[n].syurui == 2100)) {
if ((this.gym_waza_p[0][0] >= ((this.co_p[n].waza_kazu + 1) | 0))) {
(this.gym_waza_p[0][0] = 0);
(this.co_p[n].meirei = 35);
}
}
else {
if ((this.gym_waza_p[0][0] >= this.co_p[n].waza_kazu)) {
(this.gym_waza_p[0][0] = 0);
}
}
(this.co_p[n].gym_wc = 14);
}
}
(n = 0);
if ((this.co_w[n].gym_wc > 0)) {
if (((this.co_w[n].c == 1100) || (this.co_w[n].c == 2000))) {
--this.co_w[n].gym_wc;
}
}
else {
if ((((this.co_w[n].x > ((this.co_w[10].x - 64) | 0)) || (this.co_w[n].x < ((this.co_j.x + 64) | 0))) && (this.co_w[n].c >= 1100))) {
(this.co_w[n].c = ((this.co_w[n].type == 1) ? 2900 : 1900));
(this.co_w[n].gym_wc = 10);
(this.co_w[n].move_wc = 30);
if ((this.co_w[n].type == 1)) {
(this.co_w[n].move_wc = 0);
}
}
else {
(this.co_w[n].meirei = this.co_w[n].waza_code[this.gym_waza_p[1][0]]);
var nArray = this.gym_waza_p[1];
(nArray[0] = ((nArray[0] + 1) | 0));
if ((this.co_w[n].syurui == 2100)) {
if ((this.gym_waza_p[1][0] >= ((this.co_w[n].waza_kazu + 1) | 0))) {
(this.gym_waza_p[1][0] = 0);
(this.co_w[n].meirei = 35);
}
}
else {
if ((this.gym_waza_p[1][0] >= this.co_w[n].waza_kazu)) {
(this.gym_waza_p[1][0] = 0);
}
}
(this.co_w[n].gym_wc = 14);
}
}
}
else {
if ((this.km.mode == 3100)) {
var n = 0;
var n2 = 0;
while ((n2 <= 1)) {
(n = this.gym_p_id[0][n2]);
if ((this.co_p[n].gym_wc > 0)) {
if (((this.co_p[n].c == 1000) || (this.co_p[n].c == 2000))) {
--this.co_p[n].gym_wc;
}
}
else {
if ((((this.co_p[n].x > ((this.co_w[10].x - 64) | 0)) || (this.co_p[n].x < ((this.co_j.x + 64) | 0))) && (this.co_p[n].c >= 1000))) {
(this.co_p[n].c = ((this.co_p[n].type == 1) ? 2900 : 1900));
(this.co_p[n].gym_wc = 10);
(this.co_p[n].move_wc = 30);
if ((this.co_p[n].type == 1)) {
(this.co_p[n].move_wc = 0);
}
}
else {
(this.co_p[n].meirei = this.co_p[n].waza_code[this.gym_waza_p[0][n2]]);
var nArray = this.gym_waza_p[0];
var n3 = n2;
(nArray[n3] = ((nArray[n3] + 1) | 0));
if ((this.co_p[n].syurui == 2100)) {
if ((this.gym_waza_p[0][n2] >= ((this.co_p[n].waza_kazu + 1) | 0))) {
(this.gym_waza_p[0][n2] = 0);
(this.co_p[n].meirei = 35);
}
}
else {
if ((this.gym_waza_p[0][n2] >= this.co_p[n].waza_kazu)) {
(this.gym_waza_p[0][n2] = 0);
}
}
(this.co_p[n].gym_wc = 14);
if ((this.co_p[n].type == 1)) {
(this.co_p[n].gym_wc = 12);
}
}
}
++n2;
}
(n2 = 0);
while ((n2 <= 1)) {
(n = n2);
if ((this.co_w[n].gym_wc > 0)) {
if (((this.co_w[n].c == 1100) || (this.co_w[n].c == 2000))) {
--this.co_w[n].gym_wc;
}
}
else {
if ((((this.co_w[n].x > ((this.co_w[10].x - 64) | 0)) || (this.co_w[n].x < ((this.co_j.x + 64) | 0))) && (this.co_w[n].c >= 1100))) {
(this.co_w[n].c = ((this.co_w[n].type == 1) ? 2900 : 1900));
(this.co_w[n].gym_wc = 10);
(this.co_w[n].move_wc = 30);
if ((this.co_w[n].type == 1)) {
(this.co_w[n].move_wc = 0);
}
}
else {
(this.co_w[n].meirei = this.co_w[n].waza_code[this.gym_waza_p[1][n2]]);
var nArray = this.gym_waza_p[1];
var n4 = n2;
(nArray[n4] = ((nArray[n4] + 1) | 0));
if ((this.co_w[n].syurui == 2100)) {
if ((this.gym_waza_p[1][n2] >= ((this.co_w[n].waza_kazu + 1) | 0))) {
(this.gym_waza_p[1][n2] = 0);
(this.co_w[n].meirei = 35);
}
}
else {
if ((this.gym_waza_p[1][n2] >= this.co_w[n].waza_kazu)) {
(this.gym_waza_p[1][n2] = 0);
}
}
(this.co_w[n].gym_wc = 14);
if ((this.co_w[n].type == 1)) {
(this.co_w[n].gym_wc = 12);
}
}
}
++n2;
}
}
}
if ((this.co_j.c == 1000)) {
this.jM1000$0();
}
else {
this.jMove$0();
}
this.pMove$0();
this.wMove$0();
this.taiatariHantei$0();
if ((this.m_kazu > 0)) {
this.mMove$0();
}
this.drawGamescreen$0();
if ((this.gk.key_code == 84)) {
(this.gk.key_code = 0);
(this.mode = 50);
}
}
mL160$0() {
var n = 0;
this.moveGameCounter$0();
this.km.move$0();
this.csMove$0();
if ((this.km.mode == 5100)) {
(n = this.gym_p_id[0][0]);
if ((this.co_p[n].gym_wc > 0)) {
if (((this.co_p[n].c == 1000) || (this.co_p[n].c == 2000))) {
--this.co_p[n].gym_wc;
}
}
else {
if ((this.co_p[n].x < this.race_goal_x)) {
(this.co_p[n].meirei = this.co_p[n].waza_code[this.gym_waza_p[0][0]]);
var nArray = this.gym_waza_p[0];
(nArray[0] = ((nArray[0] + 1) | 0));
if ((this.co_p[n].syurui == 2100)) {
if ((this.gym_waza_p[0][0] >= ((this.co_p[n].waza_kazu + 1) | 0))) {
(this.gym_waza_p[0][0] = 0);
(this.co_p[n].meirei = 35);
}
}
else {
if ((this.gym_waza_p[0][0] >= this.co_p[n].waza_kazu)) {
(this.gym_waza_p[0][0] = 0);
}
}
(this.co_p[n].gym_wc = 24);
}
}
}
if ((this.co_j.c == 1000)) {
this.jM1000$0();
}
else {
this.jMove$0();
}
this.pMove$0();
this.wMove$0();
this.taiatariHantei$0();
if ((this.m_kazu > 0)) {
this.mMove$0();
}
(n = this.gym_p_id[0][0]);
(this.co_p[n].wx = ((this.co_p[n].x - this.maps.wx) | 0));
if ((this.co_p[n].c >= 1000)) {
if ((this.co_p[n].wx < 96)) {
(this.maps.wx = ((this.co_p[n].x - 96) | 0));
}
else {
if ((this.co_p[n].wx > 224)) {
(this.maps.wx = ((this.co_p[n].x - 224) | 0));
}
}
}
(this.maps.wy = this.maps.wy_max);
if ((this.maps.wx < this.maps.wx_mini)) {
(this.maps.wx = this.maps.wx_mini);
}
else {
if ((this.maps.wx > this.maps.wx_max)) {
(this.maps.wx = this.maps.wx_max);
}
}
this.drawGamescreen$0();
if ((this.gk.key_code == 84)) {
(this.gk.key_code = 0);
(this.mode = 50);
}
}
init2$0() {
(this.gk.key_code = 0);
if ((this.score > this.highscore)) {
(this.highscore = this.score);
}
(this.score = 0);
(this.system_mode = this.paraInt$1("system_mode"));
(this.system_mode = ((this.system_mode == 1) ? 1 : ((this.system_mode == 2) ? 2 : ((this.system_mode == 10) ? 10 : ((this.system_mode == 11) ? 11 : ((this.system_mode == 20) ? 20 : 0))))));
(this.debug_mode = this.paraInt$1("debug_mode"));
if (((this.debug_mode < 1) || (this.debug_mode > 5))) {
(this.debug_mode = 0);
}
(this.g_c1 = 0);
(this.g_c2 = 0);
(this.g_c3 = 0);
(this.g_ac = 0);
(this.g_ac2 = 0);
(this.gym_f = false);
(this.gym_double_f = false);
(this.gym_gr_f = false);
(this.gym_cyousen_kazu = 0);
(this.race_f = false);
(this.race_time = 0);
(this.race_goal_x = 0);
this.co_j.init$0();
(this.j_pt_ss = 0);
(this.co_j.syurui = 9000);
(this.co_j.zokusei = 1);
(this.co_j.hp_max = 180);
(this.j_okozukai = 1000);
(this.co_j.id = this.ranInt$1(1000));
(this.co_j.name = this.j_name_list[0][1]);
(this.co_j.seibetu = 0);
this.ig.worldInit$0();
var n = 0;
while ((n <= 5)) {
this.co_p[n].init$0();
++n;
}
this.co_p[0].initSyurui$2(1000, this);
this.co_p[1].initSyurui$2(1000, this);
this.co_p[2].initSyurui$2(1000, this);
this.co_p[3].initSyurui$2(1000, this);
this.co_p[4].initSyurui$2(1000, this);
this.co_p[5].initSyurui$2(1000, this);
(this.co_p[0].seibetu = 1);
(this.pn_syurui = 0);
this.ig.zukanTourokuPet$0();
this.itemInit$0();
this.itemAddItem$1(1);
this.itemAddItem$1(1);
this.itemAddItem$1(2);
this.itemAddItem$1(2);
this.co_sodateya[0].initSyurui$2(1000, this);
this.co_sodateya[1].initSyurui$2(1000, this);
(this.sodateya_type = ((this.system_mode >= 1) ? 2 : 1));
(this.sodateya_scc[0] = 0);
(this.sodateya_scc[1] = 0);
(this.sodateya_scc[2] = 0);
}
init3$0() {
var n = 0;
var n2 = 0;
var monsterObject = new MonsterObject();
(this.g_c1 = 0);
(this.g_c2 = 0);
(this.g_c3 = 0);
(this.g_ac = 0);
(this.g_ac2 = 0);
(this.stage_cc = 0);
(monsterObject.syurui = this.co_j.syurui);
(monsterObject.zokusei = this.co_j.zokusei);
(monsterObject.name = this.co_j.name);
(monsterObject.hp_max = this.co_j.hp_max);
(monsterObject.seibetu = this.co_j.seibetu);
(monsterObject.id = this.co_j.id);
this.co_j.init$0();
(this.co_j.syurui = monsterObject.syurui);
(this.co_j.zokusei = monsterObject.zokusei);
(this.co_j.name = monsterObject.name);
(this.co_j.hp_max = monsterObject.hp_max);
(this.co_j.hp = monsterObject.hp_max);
(this.co_j.seibetu = monsterObject.seibetu);
(this.co_j.id = monsterObject.id);
(this.co_j.c = 1000);
(this.co_j.x = 100);
(this.co_j.y = 100);
(this.co_j.pt = 100);
(this.co_j.muki = 1);
(this.co_j.jimen_f = false);
(this.j_jump_level = 0);
(this.j_jump_type = 0);
(this.j_pt_ss = ((this.co_j.seibetu == 1) ? 20 : 0));
(this.gk.tr1_c = 0);
(this.gk.tr2_c = 0);
(this.ochiru_y = 9999);
(this.item_motenai_x = -1);
(this.item_motenai_y = -1);
(this.jishin_c = 0);
(this.sl_step = 0);
(this.sl_wx = 0);
(this.sl_wy = 0);
var n3 = 0;
while ((n3 <= 5)) {
if ((this.co_p[n3].syurui < 1000)) {
this.co_p[n3].initSyurui$2(1000, this);
}
else {
if ((this.co_p[n3].syurui == 1000)) {
(n2 = this.co_p[n3].pb_type);
this.co_p[n3].initSyurui$2(1000, this);
(this.co_p[n3].pb_type = n2);
}
else {
(monsterObject.syurui = this.co_p[n3].syurui);
(monsterObject.name = this.co_p[n3].name);
(monsterObject.name_df = this.co_p[n3].name_df);
(monsterObject.seibetu = this.co_p[n3].seibetu);
(monsterObject.hp = this.co_p[n3].hp);
(monsterObject.pp = this.co_p[n3].pp);
(monsterObject.pb_type = this.co_p[n3].pb_type);
(monsterObject.kotaisa = this.co_p[n3].kotaisa);
(monsterObject.id = this.co_p[n3].id);
(monsterObject.tuikawaza[0] = this.co_p[n3].tuikawaza[0]);
(monsterObject.tuikawaza[1] = this.co_p[n3].tuikawaza[1]);
(monsterObject.level = this.co_p[n3].level);
this.co_p[n3].initSyurui$2(monsterObject.syurui, this);
(this.co_p[n3].name = monsterObject.name);
(this.co_p[n3].name_df = monsterObject.name_df);
(this.co_p[n3].seibetu = monsterObject.seibetu);
(this.co_p[n3].pb_type = monsterObject.pb_type);
(this.co_p[n3].kotaisa = monsterObject.kotaisa);
(this.co_p[n3].id = monsterObject.id);
this.co_p[n3].setLevel$1(monsterObject.level);
(this.co_p[n3].hp = monsterObject.hp);
(this.co_p[n3].pp = monsterObject.pp);
(this.co_p[n3].tuikawaza[0] = monsterObject.tuikawaza[0]);
if ((this.co_p[n3].tuikawaza[0] > 0)) {
this.co_p[n3].insertWaza$2(monsterObject.tuikawaza[0], this.waza_dname[monsterObject.tuikawaza[0]]);
}
(this.co_p[n3].tuikawaza[1] = monsterObject.tuikawaza[1]);
if ((this.co_p[n3].tuikawaza[1] > 0)) {
this.co_p[n3].insertWaza$2(monsterObject.tuikawaza[1], this.waza_dname[monsterObject.tuikawaza[1]]);
}
}
}
++n3;
}
(n3 = 0);
while ((n3 <= 99)) {
this.co_w[n3].init$0();
++n3;
}
(this.w_kazu = -1);
(n3 = 0);
while ((n3 <= 47)) {
this.co_m[n3].init$0();
(n = 0);
while ((n <= 99)) {
(this.m_mf[n3][n] = false);
++n;
}
++n3;
}
(this.m_kazu = 0);
this.co_dt.init$0();
this.km.initAll$0();
this.km.initCS$1(0);
this.km.active$1(0);
(this.km.mode = 100);
(n3 = 0);
while ((n3 <= 1)) {
(n = 0);
while ((n <= 1)) {
(this.gym_p_id[n3][n] = 0);
++n;
}
++n3;
}
(this.gym_tenki_c = 0);
if (this.gym_f) {
(this.co_j.c = 1300);
(this.gym_shiaino = 0);
if (this.race_f) {
(this.km.mode = 5000);
}
else {
if (!this.gym_double_f) {
if (this.gym_gr_f) {
(this.km.mode = 2500);
(n = 0);
while ((n <= 2)) {
(n2 = ((n + 1) | 0));
var string = ("gym_password" + n2);
(this.ig.pass_st = this.ap.getParameter(string));
var bl = ((this.ig.pass_st == null) ? false : this.ig.passToujyouPet$1(7));
if (bl) {
this.copyMonsterObject$2(this.co_p[7], this.co_box[n]);
}
else {
(this.ig.pass_st = "3bxl3csgkc3xhvn");
(bl = this.ig.passToujyouPet$1(7));
this.copyMonsterObject$2(this.co_p[7], this.co_box[n]);
}
++n;
}
}
else {
(this.km.mode = 2000);
}
}
else {
(this.km.mode = 3000);
}
}
this.km.initIdlist$0();
if (((this.system_mode == 20) || (this.system_mode == 21))) {
(n3 = 0);
while ((n3 <= 7)) {
if (((this.co_box[n3].syurui >= 1100) && (this.co_box[n3].type == 0))) {
(this.km.idlist_item[this.km.idlist_kazu] = n3);
++this.km.idlist_kazu;
}
++n3;
}
if (!this.gym_double_f) {
this.km.initSelectboxSerifu$7(1, 8, 8, 144, "ペットレース ミニ", "誰が走る？", Color.yellow);
}
else {
this.km.initSelectbox$5(1, 8, 8, 140, "前から走るのは？");
}
(n3 = 0);
while ((n3 <= ((this.km.idlist_kazu - 1) | 0))) {
this.km.addItem$2(1, this.co_box[this.km.idlist_item[n3]].name);
++n3;
}
this.km.active$1(1);
}
else {
if (((this.system_mode == 10) || (this.system_mode == 11))) {
(n3 = 0);
while ((n3 <= 7)) {
if ((this.co_box[n3].syurui >= 1100)) {
(this.km.idlist_item[this.km.idlist_kazu] = n3);
++this.km.idlist_kazu;
}
++n3;
}
if (!this.gym_double_f) {
this.km.initSelectbox$5(1, 8, 8, 128, "左のペットは？");
}
else {
this.km.initSelectbox$5(1, 8, 8, 140, "左のチーム前は？");
}
(n3 = 0);
while ((n3 <= ((this.km.idlist_kazu - 1) | 0))) {
this.km.addItem$2(1, this.co_box[this.km.idlist_item[n3]].name);
++n3;
}
this.km.active$1(1);
}
else {
(n3 = 0);
while ((n3 <= 5)) {
if ((this.co_p[n3].syurui >= 1100)) {
if (this.race_f) {
if ((this.co_p[n3].type == 0)) {
(this.km.idlist_item[this.km.idlist_kazu] = n3);
++this.km.idlist_kazu;
}
}
else {
(this.km.idlist_item[this.km.idlist_kazu] = n3);
++this.km.idlist_kazu;
}
}
++n3;
}
if (!this.gym_double_f) {
if (this.gym_gr_f) {
(n2 = ((this.gym_shiaino + 1) | 0));
this.km.initSelectboxSerifu$7(1, 8, 8, 128, (("第 " + n2) + " 試合"), "戦うペットは？", Color.yellow);
}
else {
if (this.race_f) {
this.km.initSelectboxSerifu$7(1, 8, 8, 144, "ペットレース ミニ", "誰が走る？", Color.yellow);
}
else {
this.km.initSelectbox$5(1, 8, 8, 128, "左のペットは？");
}
}
}
else {
this.km.initSelectbox$5(1, 8, 8, 140, "左のチーム前は？");
}
(n3 = 0);
while ((n3 <= ((this.km.idlist_kazu - 1) | 0))) {
this.km.addItem$2(1, this.co_p[this.km.idlist_item[n3]].name);
++n3;
}
this.km.active$1(1);
}
}
}
this.mapsMakeStageData$1(this.stage);
this.maps.drawMap$2(this.maps.wx, this.maps.wy);
}
init4$0() {
(this.gym_kachimake = 0);
var n = 0;
while ((n <= 1)) {
var n2 = 0;
while ((n2 <= 1)) {
(this.gym_waza_p[n][n2] = 0);
(this.gym_boxno[n][n2] = 0);
++n2;
}
++n;
}
(n = 0);
while ((n <= 5)) {
if ((this.co_p[n].syurui >= 1100)) {
(this.co_p[n].c = 20);
(this.co_p[n].hp = this.co_p[n].hp_max);
(this.co_p[n].pp = this.co_p[n].pp_max);
(this.co_p[n].doku_c = 0);
(this.co_p[n].ss = 0);
(this.co_p[n].gym_wc = 0);
}
++n;
}
if ((this.km.mode != 5000)) {
(n = 0);
while ((n <= 1)) {
this.co_w[n].init$0();
++n;
}
}
(this.gym_tenki_c = 0);
(this.race_time = 0);
}
copyMonsterObject$2(monsterObject, monsterObject2) {
monsterObject2.initSyurui$2(monsterObject.syurui, this);
(monsterObject2.name = monsterObject.name);
(monsterObject2.name_df = monsterObject.name_df);
(monsterObject2.seibetu = monsterObject.seibetu);
(monsterObject2.pb_type = monsterObject.pb_type);
(monsterObject2.kotaisa = monsterObject.kotaisa);
(monsterObject2.id = monsterObject.id);
monsterObject2.setLevel$1(monsterObject.level);
(monsterObject2.hp = monsterObject.hp);
(monsterObject2.pp = monsterObject.pp);
(monsterObject2.tuikawaza[0] = monsterObject.tuikawaza[0]);
if ((monsterObject2.tuikawaza[0] > 0)) {
monsterObject2.insertWaza$2(monsterObject2.tuikawaza[0], this.waza_dname[monsterObject2.tuikawaza[0]]);
}
(monsterObject2.tuikawaza[1] = monsterObject.tuikawaza[1]);
if ((monsterObject2.tuikawaza[1] > 0)) {
monsterObject2.insertWaza$2(monsterObject2.tuikawaza[1], this.waza_dname[monsterObject2.tuikawaza[1]]);
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
if ((this.system_mode == 0)) {
(n5 = ((n5 + 100) | 0));
}
else {
if ((this.system_mode == 2)) {
(n5 = ((n5 + 10) | 0));
}
}
if (this.race_f) {
(n5 = 300);
}
else {
if (this.gym_f) {
(n5 = 200);
}
}
switch (n5) {
case 101:
{
this.setStagecolor$1(1);
(this.maps.wy_mini = 640);
(this.maps.wx_max = 4000);
(this.maps.wy_max = 960);
(n4 = 141);
(n3 = 0);
while ((n3 <= 19)) {
(string = ("." + this.gg.ap.getParameter(("stage1-0-" + n3))));
(stringArray[((n3 + 20) | 0)] = (string = (string + this.gg.ap.getParameter(("stage1-1-" + n3)))));
++n3;
}
break;
}
case 102:
{
this.setStagecolor$1(2);
(this.maps.wy_mini = 640);
(this.maps.wx_max = 4000);
(this.maps.wy_max = 960);
(n4 = 141);
(n3 = 0);
while ((n3 <= 19)) {
(string = ("." + this.gg.ap.getParameter(("stage2-0-" + n3))));
(stringArray[((n3 + 20) | 0)] = (string = (string + this.gg.ap.getParameter(("stage2-1-" + n3)))));
++n3;
}
break;
}
case 103:
{
this.setStagecolor$1(3);
(this.maps.wy_mini = 640);
(this.maps.wx_max = 4000);
(this.maps.wy_max = 960);
(n4 = 141);
(n3 = 0);
while ((n3 <= 19)) {
(string = ("." + this.gg.ap.getParameter(("stage3-0-" + n3))));
(stringArray[((n3 + 20) | 0)] = (string = (string + this.gg.ap.getParameter(("stage3-1-" + n3)))));
++n3;
}
break;
}
case 104:
{
this.setStagecolor$1(4);
(this.maps.wy_mini = 640);
(this.maps.wx_max = 4000);
(this.maps.wy_max = 960);
(n4 = 141);
(n3 = 0);
while ((n3 <= 19)) {
(string = ("." + this.gg.ap.getParameter(("stage4-0-" + n3))));
(stringArray[((n3 + 20) | 0)] = (string = (string + this.gg.ap.getParameter(("stage4-1-" + n3)))));
++n3;
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
(stringArray[27] = "...A........../.......................................................");
(stringArray[28] = ".fgffgffggffgffgfhffffffffffffffffffffffffffffffffffffffffffffffffffff");
(stringArray[29] = ".ffffffffffffffffhffffffffffffffffffffffffffffffffffffffffffffffffffff");
(stringArray[30] = ".ffffffffffffffffhffffffffffffffffffffffffffffffffffffffffffffffffffff");
break;
}
case 300:
{
var n6 = this.paraInt$1("race_backcolor_red");
var n7 = this.paraInt$1("race_backcolor_green");
var n8 = this.paraInt$1("race_backcolor_blue");
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
while ((n3 <= 9)) {
(string = ("." + this.gg.ap.getParameter(("race-0-" + n3))));
(stringArray[((n3 + 30) | 0)] = (string = (string + this.gg.ap.getParameter(("race-1-" + n3)))));
++n3;
}
break;
}
case 1:
{
this.maps.setBank$1(0);
this.setStagecolor$1(1);
(n4 = 175);
(this.maps.wx_max = 3968);
(this.maps.wy_max = 672);
(stringArray[14] = "......................................................................");
(stringArray[15] = "......................................................................");
(stringArray[16] = "......................................................................");
(stringArray[17] = "......................................................................");
(stringArray[18] = "......................................................................");
(stringArray[19] = "......................................................................");
(stringArray[20] = "......................................................................");
(stringArray[21] = "......................................................................");
(stringArray[22] = "......................................................................");
(stringArray[23] = "....12.....12.....12.......12.....12......12..........................");
(stringArray[24] = ".....................................................................H");
(stringArray[25] = "......................................................................");
(stringArray[26] = "............................................................3..3..F33.");
(stringArray[27] = "..............3.333.B.33.3.C33..................33.33.G.555.aaaaaaaaaa");
(stringArray[28] = "..A.3..3...B3.aaaaaaaaaaaaaaaa..3..B.3.3..E5.5.aaaaaaaaaaaaabbbbbbbbbb");
(stringArray[29] = ".aaaaaaaaaaaaabbbbbbbbbbbbbbbbaaaaaaaaaaaaaaaaabbbbbbbbbbbbbbbbbbbbbbb");
(stringArray[30] = ".bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb");
(stringArray[14] = (stringArray[14] + "....................................cccccccccccccccccccc.............."));
(stringArray[15] = (stringArray[15] + "....................................cccccccccccccccccccc.............."));
(stringArray[16] = (stringArray[16] + "....................................cccccccccccccccccccc.............."));
(stringArray[17] = (stringArray[17] + "....................................cccccccccccccccccccc.............."));
(stringArray[18] = (stringArray[18] + "....................................cccccccccccccccccccc.............."));
(stringArray[19] = (stringArray[19] + "....................................cccccccccccccccccccc.............."));
(stringArray[20] = (stringArray[20] + "....................................cccccccccccccccccccc.............."));
(stringArray[21] = (stringArray[21] + "..................................H.cccccccccccccccccccc.............."));
(stringArray[22] = (stringArray[22] + "....................................cccccccccccccccccccc......12...12."));
(stringArray[23] = (stringArray[23] + "...................................9ccccccccccc....cccccc............."));
(stringArray[24] = (stringArray[24] + "...............................cccccccccccccccc.cc.cccccc............."));
(stringArray[25] = (stringArray[25] + "..........................ccccccccccccccccccccc.cc.cccccc............."));
(stringArray[26] = (stringArray[26] + "3.........................ccccccccccccccccccccc.cc........G.8........."));
(stringArray[27] = (stringArray[27] + "a................ccc.......E....................ccccccccccccccc......."));
(stringArray[28] = (stringArray[28] + "b......F..B..B...ccccccccccccccccccccc.cccccccccccccccccccccccc......."));
(stringArray[29] = (stringArray[29] + "baaaaaaaaaaaaaa..cccccccccccccccc.6.6...6.6.ccccccccccccccccccc......."));
(stringArray[30] = (stringArray[30] + "bbbbbbbbbbbbbbb..cccccccccccccccccccccccccccccccccccccccccccccc......."));
break;
}
case 2:
{
this.maps.setBank$1(0);
this.setStagecolor$1(2);
(n4 = 175);
(this.maps.wx_max = 5088);
(this.maps.wy_max = 672);
(stringArray[24] = "...............O........................................J.............");
(stringArray[25] = "............O...........O.............................................");
(stringArray[26] = "..................O.......O.........C....C.......D....................");
(stringArray[27] = "..A.........................ffffffffffffffffffffffffffffff............");
(stringArray[28] = ".fffffff....................ffkkffkkffkkffkkffkkffkkffkkff.......D....");
(stringArray[29] = ".fmmfmmfffffffkkfffkkfffkkffffffffffffffffffffffffffffffffffffffffffff");
(stringArray[30] = ".fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff");
(stringArray[23] = (stringArray[23] + "..............H......................................................."));
(stringArray[24] = (stringArray[24] + "J...............H........(............................................"));
(stringArray[25] = (stringArray[25] + "......................................................................"));
(stringArray[26] = (stringArray[26] + "......................................................................"));
(stringArray[27] = (stringArray[27] + "..fffff......fffff......W.8..........................................."));
(stringArray[28] = (stringArray[28] + "..fmmmf...W.9fmmmf555fffffff.........................................."));
(stringArray[29] = (stringArray[29] + "ffffffffffffffffffffffkkfkkf.........................................."));
(stringArray[30] = (stringArray[30] + "ffffffffffffffffffffffffffff.........................................."));
break;
}
case 3:
{
this.maps.setBank$1(0);
this.setStagecolor$1(3);
(n4 = 175);
(this.maps.wx_max = 5088);
(this.maps.wy_max = 672);
(this.maps.wy_mini = 32);
(stringArray[1] = "......................................................................");
(stringArray[2] = "......................................................................");
(stringArray[3] = "......................................................................");
(stringArray[4] = "......................................................................");
(stringArray[5] = "......................................................................");
(stringArray[6] = "......................................................................");
(stringArray[7] = "......................................................................");
(stringArray[8] = "......................................................................");
(stringArray[9] = "......................................................................");
(stringArray[10] = "......................................................................");
(stringArray[11] = "......................................................................");
(stringArray[12] = "......................................................................");
(stringArray[13] = "......................................................................");
(stringArray[14] = "......................................................................");
(stringArray[15] = "......................................................................");
(stringArray[16] = "......................................................................");
(stringArray[17] = "......................................................................");
(stringArray[18] = ".................................................................ccccc");
(stringArray[19] = ".................................................................ccccc");
(stringArray[20] = ".................................................................ccccc");
(stringArray[21] = "...............................................................ccccccc");
(stringArray[22] = "...............................................................ccccccc");
(stringArray[23] = "........H.....H...............................................cccccccc");
(stringArray[24] = "..........H..................................................ccccccccc");
(stringArray[25] = ".............................................................ccccccccc");
(stringArray[26] = "..A...............H.........................................cccccccccc");
(stringArray[27] = ".dddddddddddddddd...................E.E.....D..D............cccccccccc");
(stringArray[28] = ".edededededededed.......E....E.ddddddddddddddddddd.....N....cccccccccc");
(stringArray[29] = ".dddddddddddddddddddddddddddddddedededededededededdddddddd..cccccccccc");
(stringArray[30] = ".ddddddddddddddddddddddddddddddddddddddddddddddddddddddddd..cccccccccc");
(stringArray[5] = (stringArray[5] + ".......................Q.............................................."));
(stringArray[6] = (stringArray[6] + "......................................Q...........H..................."));
(stringArray[7] = (stringArray[7] + "......................................................................"));
(stringArray[8] = (stringArray[8] + "...........................S...................H......................"));
(stringArray[9] = (stringArray[9] + "................cccccccccccccccccccc.............H...................."));
(stringArray[10] = (stringArray[10] + "................cccccccccccccccccccc..................T..............."));
(stringArray[11] = (stringArray[11] + "..............cccccccccccccccccccccc..ccc..ccccccccccccc.............."));
(stringArray[12] = (stringArray[12] + "..............cccccccccccccccccccccc..ccc..ccccccccccccc.....8........"));
(stringArray[13] = (stringArray[13] + ".........H....cccccccccccccccccccccc..ccc..ccccccccccccc..ccccccc....."));
(stringArray[14] = (stringArray[14] + ".......H.....ccccccccccccccccccccccc..ccc..ccccccccccccc..ccccccc....."));
(stringArray[15] = (stringArray[15] + "..........H.............cccccccccccc..ccc..cccccccccccc9..ccccccc....."));
(stringArray[16] = (stringArray[16] + ".............cccccccccc.cccccccccccc..ccc..ccccccccccccc..ccccccc....."));
(stringArray[17] = (stringArray[17] + "......V..5.5.cccccccccc......B555ccc..ccc..ccccccccccccc..ccccccc....."));
(stringArray[18] = (stringArray[18] + "cccccccccccccccccccccccccccccccccccc..ccc..ccccccccccccc...cccccc....."));
(stringArray[19] = (stringArray[19] + "cccccccccccccccccccccccccccccccccccc..ccc..ccccccccccccc..ccccccc....."));
(stringArray[20] = (stringArray[20] + "cccccccccccccccccccccccccccccccccccc..ccc..ccccccccccccc..ccccccc....."));
(stringArray[21] = (stringArray[21] + "cccccccccccccccccccccccccccccccccccc..ccc..cccccccccccc...ccccccc....."));
(stringArray[22] = (stringArray[22] + "cccccccccccccccccccccccccccccccccccc..ccc..ccccccccccccc..ccccccc....."));
(stringArray[23] = (stringArray[23] + "cccccccccccccccccccccccccccccccccccc..ccc..ccccccccccccc..ccccccc....."));
(stringArray[24] = (stringArray[24] + "cccccccccccccccccccccccccccccccccccc..ccc..cccccccccccccccccccccc....."));
(stringArray[25] = (stringArray[25] + "cccccccccccccccccccccccccccccccccccc..ccc..cccccccccccccccccccccc....."));
(stringArray[26] = (stringArray[26] + "cccccccccccccccccccccccccccccccccccc..ccc..cccccccccccccccccccccc....."));
(stringArray[27] = (stringArray[27] + "cccccccccccccccccccccccccccccccccccc..ccc..cccccccccccccccccccccc....."));
(stringArray[28] = (stringArray[28] + "cccccccccccccccccccccccccccccccccccc..ccc..cccccccccccccccccccccc....."));
(stringArray[29] = (stringArray[29] + "cccccccccccccccccccccccccccccccccccc..ccc..cccccccccccccccccccccc....."));
(stringArray[30] = (stringArray[30] + "cccccccccccccccccccccccccccccccccccc..ccc..cccccccccccccccccccccc....."));
break;
}
case 4:
{
this.maps.setBank$1(0);
this.setStagecolor$1(4);
(n4 = 175);
(this.maps.wx_max = 5088);
(this.maps.wy_max = 672);
(stringArray[22] = "....12....12....12......12.......12.....12......12.......12......12...");
(stringArray[23] = "......................................................................");
(stringArray[24] = "....................................M.................................");
(stringArray[25] = "..........................................M...........M...............");
(stringArray[26] = ".....................F......F.................M.........M...hh........");
(stringArray[27] = "..A........L...jjjjjjjjjjjjjjj...................M..........gg........");
(stringArray[28] = ".iiiiiiiiiiiii.jjjjjjjjjjjjjjj..............................gg..iiiiii");
(stringArray[29] = ".iiiiiiiiiiiii.jjjjjjjjjjjjjjj.jjjjjjjjjjjjjjjjjjjjjjjjjjj..hh..iiiiii");
(stringArray[30] = ".iiiiiiiiiiiii.jjjjjjjjjjjjjjj.jjjjjjjjjjjjjjjjjjjjjjjjjjj..gg..iiiiii");
(stringArray[22] = (stringArray[22] + "..12.....12..........................................................."));
(stringArray[26] = (stringArray[26] + "..............K......F.F...........................R........I.9......."));
(stringArray[27] = (stringArray[27] + ".....K..hggghggghggghgggh..........................jjjjjjjjjjjjj..5555"));
(stringArray[28] = (stringArray[28] + "iiiiiii.g...g...g...g...g..........R........L.LLRL.jjjjjjjjjjjjj..ffff"));
(stringArray[29] = (stringArray[29] + "iiiiiii.g...g...g...g...g...ffkkkffkkkffkkkffkkkff.jjjjjjjjjjjjj..fmmf"));
(stringArray[30] = (stringArray[30] + "iiiiiii.g...g...g...g...g...ffffffffffffffffffffff.jjjjjjjjjjjjj..ffff"));
(stringArray[27] = (stringArray[27] + ".6+66.8.6"));
(stringArray[28] = (stringArray[28] + "fffffffff"));
(stringArray[29] = (stringArray[29] + "mmfmmfmmf"));
(stringArray[30] = (stringArray[30] + "fffffffff"));
break;
}
case 11:
{
this.maps.setBank$1(0);
this.setStagecolor$1(1);
(n4 = 175);
(this.maps.wx_max = 3968);
(this.maps.wy_max = 672);
(stringArray[21] = "......................................................................");
(stringArray[22] = "..............................H....................Q..................");
(stringArray[23] = "...12.....12......12...............H........Q..........333............");
(stringArray[24] = ".................................H.....................aaa............");
(stringArray[25] = "........................3.3.B..333.333.33..............bbb............");
(stringArray[26] = ".............33.3..33.V.aaaaaaaaaaaaaaaaa..............bbb............");
(stringArray[27] = ".3A..........aaaaaaaaaaabbbbbbbbbbbbbbbbb...33B..3B.33.bbb............");
(stringArray[28] = ".aaa.333B3B3.bbbbbbbbbbbbbbbbbbbbbbbbbbbb..aaaaaaaaaaaabbb55..5.E.5..E");
(stringArray[29] = ".bbbaaaaaaaaabbbbbbbbbbbbbbbbbbbbbbbbbbbb..bbbbbbbbbbbbbbbaaaaaaaaaaaa");
(stringArray[30] = ".bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb..bbbbbbbbbbbbbbbbbbbbbbbbbbb");
(stringArray[21] = (stringArray[21] + "......................................H..............................."));
(stringArray[22] = (stringArray[22] + "....................................H................................."));
(stringArray[23] = (stringArray[23] + ".......................................H.............................."));
(stringArray[24] = (stringArray[24] + "......................................................................"));
(stringArray[25] = (stringArray[25] + ".............................3.3.33..3.39..3.N3833...................."));
(stringArray[26] = (stringArray[26] + ".........................3.X.aaaaaa..aaaa..aaaaaaa...................."));
(stringArray[27] = (stringArray[27] + "........B33B..B33.3..X3.aaaaabbbbbb..bbbb..bbbbbbb...................."));
(stringArray[28] = (stringArray[28] + "..G..aaaaaaaaaaaaaaaaaaabbbbbbbbbbb..bbbb..bbbbbbb...................."));
(stringArray[29] = (stringArray[29] + "aaaaabbbbbbbbbbbbbbbbbbbbbbbbbbbbbb..bbbb..bbbbbbb...................."));
(stringArray[30] = (stringArray[30] + "bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb..bbbb..bbbbbbb...................."));
break;
}
case 12:
{
this.maps.setBank$1(0);
this.setStagecolor$1(2);
(n4 = 175);
(this.maps.wx_max = 5088);
(this.maps.wy_max = 672);
(stringArray[11] = ".ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc");
(stringArray[12] = ".ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc");
(stringArray[13] = ".ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc");
(stringArray[14] = ".ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc");
(stringArray[15] = "...ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc");
(stringArray[16] = "....cc...ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc");
(stringArray[17] = "...........ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc");
(stringArray[18] = ".............ccccccccccccccccccccccccccccccccccccccccccccccccccccccccc");
(stringArray[19] = "..A...........cccccccccccccccccccccccccccccccccccccccccccccccccccccccc");
(stringArray[20] = ".cccccccc..L..cccccccccccccccccccccccccccccccccccccccccccccccccccccccc");
(stringArray[21] = ".ccccccccccc...ccccccccccccccccccccccccccccccccccccccccccccccccccccccc");
(stringArray[22] = ".cccccccccccc..cccccccccccccccccccccccccc.............................");
(stringArray[23] = ".cccccccccccc...cccccccccc............................................");
(stringArray[24] = ".ccccccccccccc...ccccccc............P............hh................O..");
(stringArray[25] = ".ccccccccccccc.....ccc..........iiiiii...........gg...hgghggh.........");
(stringArray[26] = ".cccccccccccccc............iiii.iiiiii....P..P...gg...g..g..g........O");
(stringArray[27] = ".cccccccccccccc.....L......iiii.iiiiii.iiiiiiii..hh...hgghggh.........");
(stringArray[28] = ".cccccccccccccccccccccccc..iiii.iiiiii.iiiiiiii6.gg6.6g..g..g.........");
(stringArray[29] = ".ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc");
(stringArray[30] = ".ccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccccc");
(stringArray[11] = (stringArray[11] + "ccccccccccc"));
(stringArray[12] = (stringArray[12] + "ccccccccccc"));
(stringArray[13] = (stringArray[13] + "ccccccccccc"));
(stringArray[14] = (stringArray[14] + "ccccccccccc"));
(stringArray[15] = (stringArray[15] + "ccccccccccc"));
(stringArray[16] = (stringArray[16] + "ccccccccccc"));
(stringArray[17] = (stringArray[17] + "ccccccccccc"));
(stringArray[18] = (stringArray[18] + "ccccccccccc"));
(stringArray[19] = (stringArray[19] + "ccccccccccc"));
(stringArray[20] = (stringArray[20] + "ccccccccccc"));
(stringArray[21] = (stringArray[21] + "ccccccccccc"));
(stringArray[22] = (stringArray[22] + "..ccccccccc.......O..................................................."));
(stringArray[23] = (stringArray[23] + "O..................O........................lll.....................8."));
(stringArray[24] = (stringArray[24] + "......................O....................llll.....................l."));
(stringArray[25] = (stringArray[25] + "..O.....................O.................lllll.........G..........lll"));
(stringArray[26] = (stringArray[26] + ".....ll..................................llllll.........l.........llll"));
(stringArray[27] = (stringArray[27] + ".....lll.lll...........................<lllllll........Gll.......lllll"));
(stringArray[28] = (stringArray[28] + "...lllll.llllll......llll.......llll...llllllll9.....G.lll....N.llllll"));
(stringArray[29] = (stringArray[29] + "cccccccl.llllll....llllll...ll..llll..llllllllllllllllllllllllllllllll"));
(stringArray[30] = (stringArray[30] + "cccccccccccccccccc.llllll...ll..llll..llllllllllllllllllllllllllllllll"));
(stringArray[26] = (stringArray[26] + "l..."));
(stringArray[27] = (stringArray[27] + "ll.."));
(stringArray[28] = (stringArray[28] + "lll."));
(stringArray[29] = (stringArray[29] + "llll"));
(stringArray[30] = (stringArray[30] + "llll"));
break;
}
case 13:
{
this.maps.setBank$1(0);
this.setStagecolor$1(3);
(n4 = 175);
(this.maps.wx_max = 5088);
(this.maps.wy_max = 672);
(this.maps.wy_mini = 32);
(stringArray[1] = ".fffffffffffffffffffffffffff..ffffffffffff..ffffffffffffffffffffffffff");
(stringArray[2] = ".fffffffffffffffffffffffffff..ffffffffffff..ffffffffffffffffffffffffff");
(stringArray[3] = ".fffffffffffffffffffffffffff..ffffffffffff..ffffffffffffffffffffffffff");
(stringArray[4] = ".fffffffffffffffffffffffffff..ffffffffffff..ffffffffffffffffffffffffff");
(stringArray[5] = ".fffffffffffffffffffffffffff..ffffffffffff...................fffffffff");
(stringArray[6] = ".fffffffffffffffffffffffffff..ffffffffffff...................fffffffff");
(stringArray[7] = ".fffffffffffffffffffffffffff..ffffffffffff...................fffffffff");
(stringArray[8] = ".fffffffffffffffffffffffffff..ffffffffffff..ffffffffffffff.fffffffffff");
(stringArray[9] = ".fffffffffffffffffffffffffff..ffffffffffff..ffffffffffffff.fffffffffff");
(stringArray[10] = ".fffffffffffffffffffffffffff..ffffffffffff..ffffffffff.mmm.........mmm");
(stringArray[11] = ".fffffffffffffffffffffffffff..ffffffffffff..ffffffffff.fff.fffffff.fff");
(stringArray[12] = ".fffffffffffffffffffffffffff..ffffffffffff..ffffffffff.mmm.55mmm9.....");
(stringArray[13] = ".fffffffffffffffffffffffffff..ffffffffffff..ffffffffff.fff.fffffff.fff");
(stringArray[14] = ".fffffffffffffffffffffffffff..ffffffffffff..ffffffffff.....55mmm5.....");
(stringArray[15] = ".fffffffffffffffffffffffffff..ffffffffffff..ffffffffff.fffffffffff.fff");
(stringArray[16] = ".fffffffffffffffffffffffffff..ffffffffffff..ffffffffff.fffffffffff.fff");
(stringArray[17] = ".fffffffffffffffffffffffffff..ffffffffffff..ffffffff.........mmm.....m");
(stringArray[18] = ".fffffffffffffffffffffffffff..ffffffffffff..ffffffff...ff.ffffffff.fff");
(stringArray[19] = ".fffffffffffffffffffffffffff..ffffffffffff..ffffffff...ff.ffffffff.fff");
(stringArray[20] = ".fffffffffffffffffffffffffff..ffffffffffff..ffffffff.........mmm.....m");
(stringArray[21] = ".fffffffffffffffffffffffffff..ffffffffffff..ffffffff...fffffffffff.fff");
(stringArray[22] = ".fffkkfffkkfffkkfffkkfffkkff..ffkkffffkkff..ffffffff...fffffffffff.fff");
(stringArray[23] = ".fffkkfffkkfffkkfffkkfffkkff..ffkkffffkkff..fffffff.....ffffffffff...m");
(stringArray[24] = ".fffkkfffkkfffffffffffffffff..ffffffffffff..ffffffff...fffffffffff.fff");
(stringArray[25] = ".fffffffffffff.......mmmmmmm.......D..D.D...fffffff.....ffffffffff.fff");
(stringArray[26] = ".....................fffffff..ffffffffffff..ffffffff...fffffffffff.fff");
(stringArray[27] = "..A..........E.......fffffff..ffffffffffff...................fffff.fff");
(stringArray[28] = ".fffffffffffff........E.E..E..ffffffffffff................>..fffff.fff");
(stringArray[29] = ".fffkkfffkkfffffffffffffffff..ffffffffffff.......N....N......fffff.fff");
(stringArray[30] = ".fffkkfffkkfffkkfffkkfffkkff..ffkkffffkkff..ffffffffffffffffffffff.fff");
(stringArray[1] = (stringArray[1] + "ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff"));
(stringArray[2] = (stringArray[2] + "ff..........ffffffffffffffffffffffffffffffffffffffffffffffffffffffffff"));
(stringArray[3] = (stringArray[3] + "ff6.6....6.6ffffffffffffffffffffffffffffffffffffffffffffffffffffffffff"));
(stringArray[4] = (stringArray[4] + "ffffff..ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff"));
(stringArray[5] = (stringArray[5] + "ffffff..ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff"));
(stringArray[6] = (stringArray[6] + "ffffff..ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff"));
(stringArray[7] = (stringArray[7] + "ffff......ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff"));
(stringArray[8] = (stringArray[8] + "ffffff..ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff"));
(stringArray[9] = (stringArray[9] + "ffffff..ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff"));
(stringArray[10] = (stringArray[10] + "mmmm......ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff"));
(stringArray[11] = (stringArray[11] + "ffffff..ffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff"));
(stringArray[12] = (stringArray[12] + "T........Tfffffffffffff..fffffffffffffffffffffffffffffffffffffffffffff"));
(stringArray[13] = (stringArray[13] + "ffffff..fffffffffffffff..fffffffffffffffffffffffffffffffffffffffffffff"));
(stringArray[14] = (stringArray[14] + "T.mm......fffffffffff......fffffffffffffffffffffffffffffffffffffffffff"));
(stringArray[15] = (stringArray[15] + "ffffff..fffffffffffffff..fffffffffffffffffffffffffffffffffffffffffffff"));
(stringArray[16] = (stringArray[16] + "ffffff..fffffffffffffff..fffffffffffffffffffffffffffffffffffffffffffff"));
(stringArray[17] = (stringArray[17] + "mmmm......mmmmm............fffffffffffffffffffffffffffffffffffffffffff"));
(stringArray[18] = (stringArray[18] + "ffffff..fffffff.fffffff..fffffffffffffffffffffffffffffffffffffffffffff"));
(stringArray[19] = (stringArray[19] + "ffffff..fffffff.fffffff..fffffffffffffffffffffffffffffffffffffffffffff"));
(stringArray[20] = (stringArray[20] + "mmmm............mmmmm......fffffffffkkkffkkkffkkkffkkkffkkkffkkkffkkkf"));
(stringArray[21] = (stringArray[21] + "ffffff..fffffffffffffff..fffffffffffkkkffkkkffkkkffkkkffkkkffkkkffkkkf"));
(stringArray[22] = (stringArray[22] + "ffffff..fffffffffffffff..fffffffffffkkkffkkkffkkkffkkkffkkkffkkkffkkkf"));
(stringArray[23] = (stringArray[23] + "mmmm......ffffffffff........ffffffff.................................."));
(stringArray[24] = (stringArray[24] + "ffffff..ffffffffffff........ffffffff.................................."));
(stringArray[25] = (stringArray[25] + "ffffff..ffffffffffff.................................................."));
(stringArray[26] = (stringArray[26] + "ffff......ffffffffff........ffffffff................Z................."));
(stringArray[27] = (stringArray[27] + "ffffff..ffffffffffff........ffffffff...................Z.............."));
(stringArray[28] = (stringArray[28] + "ffffff..ffffffffffffSS....SSffffffff.................................."));
(stringArray[29] = (stringArray[29] + "ffffff..fffffffffffffff..fffffffffff.......R..................P..R..P."));
(stringArray[30] = (stringArray[30] + "ffffff..fffffffffffffff..fffffffffffkkkffkkkffkkkffkkkffkkkffkkkffkkkf"));
(stringArray[11] = (stringArray[11] + "fffffffffffffffffffffffffffffffffffffffffffffffffffffffffff"));
(stringArray[12] = (stringArray[12] + "fffffffffffffffffffffffffffffffffffffffffffffffffffffffffff"));
(stringArray[13] = (stringArray[13] + "fffffffffffffffffffffffffffffffffffffffffffffffffffffffffff"));
(stringArray[14] = (stringArray[14] + "fffffffffffffffffffffffffffffffffffffffffffffffffffffffffff"));
(stringArray[15] = (stringArray[15] + "fffffffffffffffffffffffffffffffffffffffffffffffffffffffffff"));
(stringArray[16] = (stringArray[16] + "fffffffffffffffffffffffffffffffffffffffffffffffffffffffffff"));
(stringArray[17] = (stringArray[17] + "fffffffffffffffffffffffffffffffffffffffffffffffffffffffffff"));
(stringArray[18] = (stringArray[18] + "fffffffffffffffffffffffffffffffffffffffffffffffffffffffffff"));
(stringArray[19] = (stringArray[19] + "fffffffffffffffffffffffffffffffffffffffffffffffffffffffffff"));
(stringArray[20] = (stringArray[20] + "fkkkffkkkffkkkfffffffffffffffffffffffffffffffffffffffffffff"));
(stringArray[21] = (stringArray[21] + "fkkkffkkkffkkkfffffffffffffffffffffffffffffffffffffffffffff"));
(stringArray[22] = (stringArray[22] + "fkkkffkkkffkkkfffffffffffffffffffffffffffffffffffffffffffff"));
(stringArray[23] = (stringArray[23] + "......kkkffkkkfffffffffffffffffffffffffffffffffffffffffffff"));
(stringArray[24] = (stringArray[24] + "......kkkffkkkfffffffffffffffffffffffffffffffffffffffffffff"));
(stringArray[25] = (stringArray[25] + "....8.kkkffkkkfffffffffffffffffffffffffffffffffffffffffffff"));
(stringArray[26] = (stringArray[26] + "....ffkkkffkkkfffffffffffffffffffffffffffffffffffffffffffff"));
(stringArray[27] = (stringArray[27] + "....ffkkkffkkkfffffffffffffffffffffffffffffffffffffffffffff"));
(stringArray[28] = (stringArray[28] + "....ffkkkffkkkfffffffffffffffffffffffffffffffffffffffffffff"));
(stringArray[29] = (stringArray[29] + "P.R.ffkkkffkkkfffffffffffffffffffffffffffffffffffffffffffff"));
(stringArray[30] = (stringArray[30] + "fkkkffkkkffkkkfffffffffffffffffffffffffffffffffffffffffffff"));
break;
}
case 14:
{
this.maps.setBank$1(0);
this.setStagecolor$1(4);
(n4 = 199);
(this.maps.wx_max = 5856);
(this.maps.wy_max = 672);
(this.maps.wy_mini = 32);
(stringArray[1] = "......................................................................");
(stringArray[2] = "......................................................................");
(stringArray[3] = "......................................................................");
(stringArray[4] = "......................................................................");
(stringArray[5] = "......................................................................");
(stringArray[6] = "......................................................................");
(stringArray[7] = "......................................................................");
(stringArray[8] = "......................................................................");
(stringArray[9] = "......................................................................");
(stringArray[10] = "......................................................................");
(stringArray[11] = "......................................................................");
(stringArray[12] = "......................................................................");
(stringArray[13] = "......................................................................");
(stringArray[14] = "......................................................................");
(stringArray[15] = "....A.................................................................");
(stringArray[16] = "...oo.................................................................");
(stringArray[17] = ".oooo.................................................................");
(stringArray[18] = ".oooooo...............................................................");
(stringArray[19] = ".oooooo...............................................................");
(stringArray[20] = ".oooooo..........................................................K.K..");
(stringArray[21] = ".ooooooo.............................................K.....K.iiiiiii..");
(stringArray[22] = ".ooooooo....................................jjjjjjjjjjjjjjjj.iiiiiii..");
(stringArray[23] = ".ooooooo....................................jjjjjjjjjjjjjjjj.iiiiiii..");
(stringArray[24] = ".ooooooooo......F.........................M.jjjjjjjjjjjjjjjj.iiiiiii.h");
(stringArray[25] = ".oooooooooooooooo.......F.F.................jjjjjjjjjjjjjjjj.iiiiiii.g");
(stringArray[26] = ".ooooooooooooooooooooooooooo..........M...pppppppppppppppppppppppppp.g");
(stringArray[27] = ".ooooooooooooooooooooooooooo..............pppppppppppppppppppppppppp.g");
(stringArray[28] = ".ooooooooooooooooooooooooooo......F..F.F..pppppppppppppppppppppppppp.h");
(stringArray[29] = ".ooooooooooooooooooooooooooooooooooooooo..pppppppppppppppppppppppppp.g");
(stringArray[30] = ".ooooooooooooooooooooooooooooooooooooooo..pppppppppppppppppppppppppp.g");
(stringArray[1] = (stringArray[1] + "..................................................kk.................."));
(stringArray[2] = (stringArray[2] + "..................................................kk.................."));
(stringArray[3] = (stringArray[3] + "..................................................kk.................."));
(stringArray[4] = (stringArray[4] + "..................................................kk.kk.kk.kk........."));
(stringArray[5] = (stringArray[5] + "..................................................kk.kk.kk.kk........."));
(stringArray[6] = (stringArray[6] + ".......H.).....................................kk.kk.kk.kk.kk........."));
(stringArray[7] = (stringArray[7] + "....h..................................U.......kk.kk.kk.kk.kk........."));
(stringArray[8] = (stringArray[8] + "....g..........................................kk.kk.kk.kk.kk........."));
(stringArray[9] = (stringArray[9] + "....g..........................................kk.kk.kk.kk.kk........."));
(stringArray[10] = (stringArray[10] + "....g......H..............kk.kk.kk.kk.kk.kk.kk.kk.kk.kk.kk.kk........."));
(stringArray[11] = (stringArray[11] + "...hhh....................kk.kk.kk.kk.kk.kk.kk.kk.kk.kk.kk.kk........."));
(stringArray[12] = (stringArray[12] + "...g.g....H...............kk.kk.kk.kk.kk.kk.kk.kk.kk.kk.kk.kk........."));
(stringArray[13] = (stringArray[13] + "...g.g......H..........kk.kk.kk....kk.kk....kk.kk.kk.kk.kk.kk........."));
(stringArray[14] = (stringArray[14] + "..hhghh.......H........kk.kk.kk.kk.kk.kk.kk.kk.kk.kk.kk.kk.kk........."));
(stringArray[15] = (stringArray[15] + "..g...g...H............kk.kk....kk....kk.kk....kk.kk.kk.kk.kk........."));
(stringArray[16] = (stringArray[16] + "..g...g......H........fffffffffffffffffffffffffff.fffffffffffccccccccc"));
(stringArray[17] = (stringArray[17] + "fffffffff..........Q..fkkfkkfkkfkkfkkfkkfkkfkkfkk.kkfkkfkkfkkccccccccc"));
(stringArray[18] = (stringArray[18] + "fffffffff.............fkkfkkfkkfkkfkkfkkfkkfkkfkk.kkfkkfkkfkkccccccccc"));
(stringArray[19] = (stringArray[19] + "..g...g.....55.5..G55.fkkfkkfkkfkkfkkfkkfkkfkkfkk.kkfkkfkkfkkccccccccc"));
(stringArray[20] = (stringArray[20] + "..g...g....iiiiiiiiii.fkkfkkfkkfkkfkkcccccccccccc.cccccccccccccccccccc"));
(stringArray[21] = (stringArray[21] + "..hgggh....iiiiiiiiii.fkkfkkfkkfkkfkkcccccccccccc.cccccccccccccccccccc"));
(stringArray[22] = (stringArray[22] + "..g...g....iiiiiiiiii.fkkfkkfkkfkkfkkcccccccccccc.cccccccccccccccccccc"));
(stringArray[23] = (stringArray[23] + "55g...g9...iiiiiiiiii.fkkfkkfkkfkkfkkcccccccccccc.cccccccccccccccccccc"));
(stringArray[24] = (stringArray[24] + "gghggghggh.iiiiiiiiii.fkkfkkfkkfkkfkkccccccc......................6..6"));
(stringArray[25] = (stringArray[25] + "..g...g..g.iiiiiiiiii.fkkfkkfkkfkkfkkcccccccl...........S.cccccccccccc"));
(stringArray[26] = (stringArray[26] + "..g...g..g.iiiiiiiiii.fkkfkkfkkfkkfkkcccccccll.S........llcccccccccccc"));
(stringArray[27] = (stringArray[27] + "..g...g..g.iiiiiiiiii.fkkfkkfkkfkkfkkcccccccllll.......Sllcccccccccccc"));
(stringArray[28] = (stringArray[28] + "gghggghggh.iiiiiiiiii.fkkfkkfkkfkkfkkcccccccllll......Slllcccccccccccc"));
(stringArray[29] = (stringArray[29] + "..g...g..g.iiiiiiiiii.fkkfkkfkkfkkfkkccccccccccccccccccccccccccccccccc"));
(stringArray[30] = (stringArray[30] + "..g...g..g.iiiiiiiiii.fkkfkkfkkfkkfkkccccccccccccccccccccccccccccccccc"));
(stringArray[16] = (stringArray[16] + "cccccccccffffffffffffffff..............ffffffffffffffffffff"));
(stringArray[17] = (stringArray[17] + "cccccccccffffffffffffffff..............ffffffffffffffffffff"));
(stringArray[18] = (stringArray[18] + "cccccccccffffffffffffffff..............ffffffffffffffffffff"));
(stringArray[19] = (stringArray[19] + "cccccccccffffffffffffffff..............ffffffffffffffffffff"));
(stringArray[20] = (stringArray[20] + "cccccccccff............................ffffffffffffffffffff"));
(stringArray[21] = (stringArray[21] + "cccccccccff............................ffffffffffffffffffff"));
(stringArray[22] = (stringArray[22] + "c...6..................................ffffffffffffffffffff"));
(stringArray[23] = (stringArray[23] + "c.cccccccff............................ffffffffffffffffffff"));
(stringArray[24] = (stringArray[24] + "..cccccccff............U............U..ffffffffffffffffffff"));
(stringArray[25] = (stringArray[25] + "cccccccccff.........U..............U8..ffffffffffffffffffff"));
(stringArray[26] = (stringArray[26] + "cccccccccff.............U.........Ufff.ffffffffffffffffffff"));
(stringArray[27] = (stringArray[27] + "cccccccccff........................Uf..ffffffffffffffffffff"));
(stringArray[28] = (stringArray[28] + "cccccccccff..................U.....fff.ffffffffffffffffffff"));
(stringArray[29] = (stringArray[29] + "cccccccccffffffffffffffffffffffffffffffffffffffffffffffffff"));
(stringArray[30] = (stringArray[30] + "cccccccccffffffffffffffffffffffffffffffffffffffffffffffffff"));
}
}
(n3 = 0);
while ((n3 < this.maps.height)) {
if ((stringArray[n3].length < this.maps.width)) {
(n2 = (n5 = stringArray[n3].length));
while ((n2 < this.maps.width)) {
var n9 = n3;
(stringArray[n9] = (stringArray[n9] + "."));
++n2;
}
}
++n3;
}
var bl = false;
(n3 = 0);
while ((n3 < this.maps.height)) {
(n2 = 0);
while ((n2 < this.maps.width)) {
var c = J.charAt(stringArray[n3], n2);
var n10 = -1;
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
if ((c == 55)) {
(n10 = 7);
}
else {
if ((c == 56)) {
if (this.race_f) {
(n10 = 8);
(this.race_goal_x = Math.imul(n2, 32));
}
else {
(n10 = (!this.ig.stage_cf[((n - 1) | 0)] ? 8 : 0));
}
}
else {
if ((c == 57)) {
(n10 = (this.race_f ? 9 : (this.ig.kinnotama_f[((n - 1) | 0)] ? 9 : 0)));
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
if ((c == 111)) {
(n10 = 33);
}
else {
if ((c == 112)) {
(n10 = 34);
}
else {
if ((c == 113)) {
if ((!this.race_f && !this.ig.stage_cf[((n - 1) | 0)])) {
this.wSet$3(Math.imul(n2, 32), ((Math.imul(n3, 32) - 16) | 0), 4700);
(this.sl_step = 1);
(this.sl_wx = ((Math.imul(n2, 32) - 384) | 0));
(this.sl_wy = 960);
}
}
else {
if ((c == 114)) {
if ((!this.race_f && !this.ig.stage_cf[((n - 1) | 0)])) {
this.wSet$3(Math.imul(n2, 32), ((Math.imul(n3, 32) - 16) | 0), 4800);
(this.sl_step = 1);
(this.sl_wx = ((Math.imul(n2, 32) - 384) | 0));
(this.sl_wy = 960);
}
}
else {
if ((c == 115)) {
if ((!this.race_f && !this.ig.stage_cf[((n - 1) | 0)])) {
this.wSet$3(Math.imul(n2, 32), ((Math.imul(n3, 32) - 16) | 0), 4900);
(this.sl_step = 1);
(this.sl_wx = ((Math.imul(n2, 32) - 384) | 0));
(this.sl_wy = 960);
}
}
else {
if ((c == 65)) {
(this.co_j.x = Math.imul(n2, 32));
(this.co_j.y = Math.imul(n3, 32));
}
else {
if ((c == 65)) {
(this.co_j.x = Math.imul(n2, 32));
(this.co_j.y = Math.imul(n3, 32));
}
else {
if ((c == 66)) {
this.wSet$3(Math.imul(n2, 32), Math.imul(n3, 32), 1400);
}
else {
if ((c == 67)) {
this.wSet$3(Math.imul(n2, 32), Math.imul(n3, 32), 1500);
}
else {
if ((c == 68)) {
this.wSet$3(Math.imul(n2, 32), Math.imul(n3, 32), 1600);
}
else {
if ((c == 69)) {
this.wSet$3(Math.imul(n2, 32), Math.imul(n3, 32), 1700);
}
else {
if ((c == 70)) {
this.wSet$3(Math.imul(n2, 32), Math.imul(n3, 32), 1800);
}
else {
if ((c == 71)) {
this.wSet$3(Math.imul(n2, 32), Math.imul(n3, 32), 1900);
}
else {
if ((c == 72)) {
this.wSet$3(Math.imul(n2, 32), Math.imul(n3, 32), 2000);
}
else {
if ((c == 73)) {
this.wSet$3(Math.imul(n2, 32), Math.imul(n3, 32), 2100);
}
else {
if ((c == 74)) {
this.wSet$3(Math.imul(n2, 32), Math.imul(n3, 32), 2200);
}
else {
if ((c == 75)) {
this.wSet$3(Math.imul(n2, 32), Math.imul(n3, 32), 2300);
}
else {
if ((c == 76)) {
this.wSet$3(Math.imul(n2, 32), Math.imul(n3, 32), 2400);
}
else {
if ((c == 77)) {
this.wSet$3(Math.imul(n2, 32), Math.imul(n3, 32), 2500);
}
else {
if ((c == 78)) {
this.wSet$3(Math.imul(n2, 32), Math.imul(n3, 32), 2600);
}
else {
if ((c == 79)) {
this.wSet$3(Math.imul(n2, 32), Math.imul(n3, 32), 2700);
}
else {
if ((c == 80)) {
this.wSet$3(Math.imul(n2, 32), Math.imul(n3, 32), 2800);
}
else {
if ((c == 81)) {
this.wSet$3(Math.imul(n2, 32), Math.imul(n3, 32), 2900);
}
else {
if ((c == 82)) {
this.wSet$3(Math.imul(n2, 32), Math.imul(n3, 32), 3000);
}
else {
if ((c == 83)) {
this.wSet$3(Math.imul(n2, 32), Math.imul(n3, 32), 3100);
}
else {
if ((c == 84)) {
this.wSet$3(Math.imul(n2, 32), Math.imul(n3, 32), 3200);
}
else {
if ((c == 85)) {
this.wSet$3(Math.imul(n2, 32), Math.imul(n3, 32), 3300);
}
else {
if ((c == 86)) {
this.wSet$3(Math.imul(n2, 32), Math.imul(n3, 32), 3400);
}
else {
if ((c == 87)) {
this.wSet$3(Math.imul(n2, 32), Math.imul(n3, 32), 3500);
}
else {
if ((c == 88)) {
this.wSet$3(Math.imul(n2, 32), Math.imul(n3, 32), 3600);
}
else {
if ((c == 89)) {
this.wSet$3(Math.imul(n2, 32), Math.imul(n3, 32), 4000);
}
else {
if ((c == 90)) {
this.wSet$3(Math.imul(n2, 32), Math.imul(n3, 32), 4300);
}
else {
if (((c == 47) && this.gym_f)) {
this.wSetGym$4(Math.imul(n2, 32), Math.imul(n3, 32), 50, 10);
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
if ((this.system_mode >= 1)) {
if ((c == 40)) {
if ((this.ranInt$1(8) == 0)) {
this.wSet$3(Math.imul(n2, 32), Math.imul(n3, 32), 3700);
}
}
else {
if ((c == 41)) {
if ((this.ranInt$1(4) == 0)) {
this.wSet$3(Math.imul(n2, 32), Math.imul(n3, 32), 3800);
}
}
else {
if ((c == 62)) {
if ((this.ranInt$1(4) == 0)) {
this.wSet$3(Math.imul(n2, 32), Math.imul(n3, 32), 3900);
}
}
else {
if ((c == 60)) {
if ((this.ranInt$1(5) == 0)) {
this.wSet$3(Math.imul(n2, 32), Math.imul(n3, 32), 4000);
}
}
else {
if ((c == 43)) {
if ((this.ranInt$1(4) == 0)) {
this.wSet$3(Math.imul(n2, 32), Math.imul(n3, 32), 4100);
}
}
else {
if ((c == 45)) {
this.wSet$3(Math.imul(n2, 32), Math.imul(n3, 32), 1200);
}
else {
if ((c == 42)) {
this.wSet$3(Math.imul(n2, 32), Math.imul(n3, 32), 1300);
}
}
}
}
}
}
}
}
if ((n10 >= 0)) {
(this.maps.map_bg[n2][n3] = J.short(n10));
}
}
++n2;
}
++n3;
}
(n2 = 0);
while ((n2 <= ((this.maps.width - 1) | 0))) {
(this.maps.map_bg[n2][0] = J.short(20));
(this.maps.map_bg[n2][((this.maps.height - 1) | 0)] = J.short(20));
++n2;
}
(n3 = 0);
while ((n3 <= ((this.maps.height - 1) | 0))) {
(this.maps.map_bg[0][n3] = J.short(20));
(this.maps.map_bg[((this.maps.width - 1) | 0)][n3] = J.short(20));
(this.maps.map_bg[n4][n3] = J.short(20));
++n3;
}
(n2 = 0);
while ((n2 <= ((this.maps.width - 1) | 0))) {
(this.maps.map_bg[n2][J.div(((this.maps.wy_max + 320) | 0), 32)] = J.short(this.maps.map_bg[n2][((J.div(((this.maps.wy_max + 320) | 0), 32) - 1) | 0)]));
++n2;
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
var monsterObject = null;
var n = 0;
var n2 = 0;
var n3 = 0;
var n4 = this.maps.wx;
var n5 = this.maps.wy;
if ((!this.gym_f || this.race_f)) {
if ((this.jishin_c <= 0)) {
this.maps.drawMapScroll$1(this.g_ac2);
}
else {
++this.jishin_c;
if ((this.jishin_c <= 2)) {
(this.maps.wy = ((n5 - 16) | 0));
this.maps.drawMapScroll$1(this.g_ac2);
}
else {
if ((this.jishin_c <= 3)) {
(this.maps.wy = ((n5 + 16) | 0));
this.maps.drawMapScroll$1(this.g_ac2);
}
else {
if ((this.jishin_c <= 4)) {
(this.maps.wy = ((n5 - 16) | 0));
this.maps.drawMapScroll$1(this.g_ac2);
}
else {
if ((this.jishin_c <= 5)) {
(this.maps.wy = ((n5 + 16) | 0));
this.maps.drawMapScroll$1(this.g_ac2);
}
else {
if ((this.jishin_c <= 6)) {
(this.maps.wy = ((n5 - 16) | 0));
this.maps.drawMapScroll$1(this.g_ac2);
}
else {
if ((this.jishin_c <= 7)) {
(this.maps.wy = ((n5 + 12) | 0));
this.maps.drawMapScroll$1(this.g_ac2);
}
else {
if ((this.jishin_c <= 8)) {
(this.maps.wy = ((n5 - 12) | 0));
this.maps.drawMapScroll$1(this.g_ac2);
}
else {
if ((this.jishin_c <= 9)) {
(this.maps.wy = ((n5 + 8) | 0));
this.maps.drawMapScroll$1(this.g_ac2);
}
else {
if ((this.jishin_c <= 10)) {
(this.maps.wy = ((n5 - 8) | 0));
this.maps.drawMapScroll$1(this.g_ac2);
}
else {
(this.jishin_c = 0);
this.maps.drawMapScroll$1(this.g_ac2);
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
(this.maps.wy = n5);
}
else {
if ((this.jishin_c <= 0)) {
this.gg.drawListImage$3(0, -16, 4);
}
else {
++this.jishin_c;
if ((this.jishin_c <= 2)) {
this.gg.drawListImage$3(0, 0, 4);
}
else {
if ((this.jishin_c <= 3)) {
this.gg.drawListImage$3(0, -32, 4);
}
else {
if ((this.jishin_c <= 4)) {
this.gg.drawListImage$3(0, 0, 4);
}
else {
if ((this.jishin_c <= 5)) {
this.gg.drawListImage$3(0, -32, 4);
}
else {
if ((this.jishin_c <= 6)) {
this.gg.drawListImage$3(0, 0, 4);
}
else {
if ((this.jishin_c <= 7)) {
this.gg.drawListImage$3(0, -28, 4);
}
else {
if ((this.jishin_c <= 8)) {
this.gg.drawListImage$3(0, -4, 4);
}
else {
if ((this.jishin_c <= 9)) {
this.gg.drawListImage$3(0, -24, 4);
}
else {
if ((this.jishin_c <= 10)) {
this.gg.drawListImage$3(0, -8, 4);
}
else {
(this.jishin_c = 0);
this.gg.drawListImage$3(0, -16, 4);
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
if ((this.m_kazu > 0)) {
(n3 = 0);
while ((n3 <= 47)) {
if ((this.co_m[n3].c >= 50)) {
var characterObject = this.co_m[n3];
if ((characterObject.pt < 1000)) {
this.hg.drawImage(this.hih[characterObject.pth][characterObject.pt], ((characterObject.x - n4) | 0), ((characterObject.y - n5) | 0), this.ap);
}
else {
switch (characterObject.pt) {
case 1000:
{
if ((characterObject.c2 == 0)) {
this.gg.os_g.setColor(Color.white);
this.gg.os_g.drawOval(((((characterObject.vx - characterObject.c3) | 0) - n4) | 0), ((((((characterObject.y + 16) | 0) - characterObject.c3) | 0) - n5) | 0), Math.imul(characterObject.c3, 2), Math.imul(characterObject.c3, 2));
break;
}
if ((characterObject.c2 == 100)) {
this.gg.os_g.setColor(Color.white);
this.gg.os_g.fillOval(((((characterObject.vx - characterObject.c3) | 0) - n4) | 0), ((((((characterObject.y + 16) | 0) - characterObject.c3) | 0) - n5) | 0), Math.imul(characterObject.c3, 2), Math.imul(characterObject.c3, 2));
break;
}
if ((characterObject.c2 != 200)) {
break;
}
if ((characterObject.c3 > 0)) {
this.gg.os_g.setColor(Color.white);
this.gg.os_g.fillOval(((((characterObject.vx - characterObject.c3) | 0) - n4) | 0), ((((((characterObject.y + 16) | 0) - characterObject.c3) | 0) - n5) | 0), Math.imul(characterObject.c3, 2), Math.imul(characterObject.c3, 2));
}
this.gg.os_g.setColor(Color.white);
this.gg.os_g.fillRect(((characterObject.vx - n4) | 0), ((((characterObject.y - n5) | 0) + 12) | 0), ((((characterObject.x - characterObject.vx) | 0) + 1) | 0), 8);
break;
}
case 1005:
{
if ((characterObject.c2 == 0)) {
this.gg.os_g.setColor(Color.white);
this.gg.os_g.drawOval(((((characterObject.vx - characterObject.c3) | 0) - n4) | 0), ((((((characterObject.y + 16) | 0) - characterObject.c3) | 0) - n5) | 0), Math.imul(characterObject.c3, 2), Math.imul(characterObject.c3, 2));
break;
}
if ((characterObject.c2 == 100)) {
this.gg.os_g.setColor(Color.white);
this.gg.os_g.fillOval(((((characterObject.vx - characterObject.c3) | 0) - n4) | 0), ((((((characterObject.y + 16) | 0) - characterObject.c3) | 0) - n5) | 0), Math.imul(characterObject.c3, 2), Math.imul(characterObject.c3, 2));
break;
}
if ((characterObject.c2 != 200)) {
break;
}
if ((characterObject.c3 > 0)) {
this.gg.os_g.setColor(Color.white);
this.gg.os_g.fillOval(((((characterObject.vx - characterObject.c3) | 0) - n4) | 0), ((((((characterObject.y + 16) | 0) - characterObject.c3) | 0) - n5) | 0), Math.imul(characterObject.c3, 2), Math.imul(characterObject.c3, 2));
}
this.gg.os_g.setColor(Color.white);
this.gg.os_g.fillRect(((characterObject.x - n4) | 0), ((((characterObject.y - n5) | 0) + 12) | 0), ((((characterObject.vx - characterObject.x) | 0) + 1) | 0), 8);
break;
}
case 1100:
{
var d = 0;
var n6 = 0;
var d2 = 0;
if ((this.g_c1 == 0)) {
this.gg.os_g.setColor(new Color(255, 255, 32));
}
else {
this.gg.os_g.setColor(new Color(255, 160, 32));
}
if ((characterObject.c2 == 0)) {
(n2 = ((characterObject.vx - n4) | 0));
(n = ((((characterObject.y - n5) | 0) + 16) | 0));
(d2 = J.div(Math.PI, 180));
(n6 = 0);
while ((n6 <= 3)) {
(d = (((characterObject.c5 + Math.imul(n6, 90)) | 0) * d2));
(this.vo_pa_x[n6] = ((n2 + J.i((Math.cos(d) * characterObject.c3))) | 0));
(this.vo_pa_y[n6] = ((n + J.i((Math.sin(d) * characterObject.c3))) | 0));
++n6;
}
this.gg.os_g.fillPolygon(this.vo_pa_x, this.vo_pa_y, 4);
break;
}
if ((characterObject.c2 != 200)) {
break;
}
if ((characterObject.c3 > 0)) {
(n2 = ((characterObject.vx - n4) | 0));
(n = ((((characterObject.y - n5) | 0) + 16) | 0));
(d2 = J.div(Math.PI, 180));
(n6 = 0);
while ((n6 <= 3)) {
(d = (((characterObject.c5 + Math.imul(n6, 90)) | 0) * d2));
(this.vo_pa_x[n6] = ((n2 + J.i((Math.cos(d) * characterObject.c3))) | 0));
(this.vo_pa_y[n6] = ((n + J.i((Math.sin(d) * characterObject.c3))) | 0));
++n6;
}
this.gg.os_g.fillPolygon(this.vo_pa_x, this.vo_pa_y, 4);
}
this.gg.os_g.fillRect(((characterObject.vx - n4) | 0), ((((characterObject.y - n5) | 0) + 10) | 0), ((((characterObject.x - characterObject.vx) | 0) + 1) | 0), 12);
break;
}
case 1105:
{
var d = 0;
var n6 = 0;
var d2 = 0;
if ((this.g_c1 == 0)) {
this.gg.os_g.setColor(new Color(255, 255, 32));
}
else {
this.gg.os_g.setColor(new Color(255, 160, 32));
}
if ((characterObject.c2 == 0)) {
(n2 = ((characterObject.vx - n4) | 0));
(n = ((((characterObject.y - n5) | 0) + 16) | 0));
(d2 = J.div(Math.PI, 180));
(n6 = 0);
while ((n6 <= 3)) {
(d = (((characterObject.c5 + Math.imul(n6, 90)) | 0) * d2));
(this.vo_pa_x[n6] = ((n2 + J.i((Math.cos(d) * characterObject.c3))) | 0));
(this.vo_pa_y[n6] = ((n + J.i((Math.sin(d) * characterObject.c3))) | 0));
++n6;
}
this.gg.os_g.fillPolygon(this.vo_pa_x, this.vo_pa_y, 4);
break;
}
if ((characterObject.c2 != 200)) {
break;
}
if ((characterObject.c3 > 0)) {
(n2 = ((characterObject.vx - n4) | 0));
(n = ((((characterObject.y - n5) | 0) + 16) | 0));
(d2 = J.div(Math.PI, 180));
(n6 = 0);
while ((n6 <= 3)) {
(d = (((characterObject.c5 + Math.imul(n6, 90)) | 0) * d2));
(this.vo_pa_x[n6] = ((n2 + J.i((Math.cos(d) * characterObject.c3))) | 0));
(this.vo_pa_y[n6] = ((n + J.i((Math.sin(d) * characterObject.c3))) | 0));
++n6;
}
this.gg.os_g.fillPolygon(this.vo_pa_x, this.vo_pa_y, 4);
}
this.gg.os_g.fillRect(((characterObject.x - n4) | 0), ((((characterObject.y - n5) | 0) + 10) | 0), ((((characterObject.vx - characterObject.x) | 0) + 1) | 0), 12);
break;
}
case 1200:
{
if ((this.g_c1 == 0)) {
this.gg.os_g.setColor(Color.white);
}
else {
this.gg.os_g.setColor(Color.yellow);
}
if ((characterObject.c2 == 1)) {
this.gg.os_g.fillRect(((characterObject.x - n4) | 0), ((characterObject.vy - n5) | 0), 32, ((((characterObject.y - characterObject.vy) | 0) + 1) | 0));
}
if ((characterObject.c4 <= 0)) {
break;
}
this.gg.os_g.fillOval(((((((characterObject.x + 16) | 0) - characterObject.c3) | 0) - n4) | 0), ((((characterObject.y - characterObject.c3) | 0) - n5) | 0), Math.imul(characterObject.c3, 2), Math.imul(characterObject.c3, 2));
break;
}
case 1300:
{
if ((characterObject.zokusei == 5)) {
if ((this.g_c1 == 0)) {
this.gg.os_g.setColor(Color.white);
}
else {
this.gg.os_g.setColor(Color.yellow);
}
}
else {
this.gg.os_g.setColor(Color.white);
}
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
if ((this.g_c1 == 0)) {
this.gg.os_g.setColor(new Color(255, 0, 0));
}
else {
this.gg.os_g.setColor(new Color(255, 128, 0));
}
this.gg.os_g.fillOval(((((((characterObject.x + 16) | 0) - characterObject.c3) | 0) - n4) | 0), ((((characterObject.y - characterObject.c3) | 0) - n5) | 0), Math.imul(characterObject.c3, 2), Math.imul(characterObject.c3, 2));
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
case 1800:
{
var d = 0;
var n6 = 0;
var d2 = 0;
this.gg.os_g.setColor(Color.white);
if ((characterObject.c2 == 0)) {
(n2 = ((characterObject.vx - n4) | 0));
(n = ((((characterObject.y - n5) | 0) + 16) | 0));
(d2 = J.div(Math.PI, 180));
(n6 = 0);
while ((n6 <= 3)) {
(d = (((characterObject.c5 + Math.imul(n6, 90)) | 0) * d2));
(this.vo_pa_x[n6] = ((n2 + J.i((Math.cos(d) * characterObject.c3))) | 0));
(this.vo_pa_y[n6] = ((n + J.i((Math.sin(d) * characterObject.c3))) | 0));
++n6;
}
this.gg.os_g.drawPolygon(this.vo_pa_x, this.vo_pa_y, 4);
break;
}
if ((characterObject.c2 != 200)) {
break;
}
this.gg.os_g.fillRect(((characterObject.vx - n4) | 0), ((((characterObject.y - n5) | 0) + 11) | 0), ((((characterObject.x - characterObject.vx) | 0) + 1) | 0), 10);
break;
}
case 1805:
{
var d = 0;
var n6 = 0;
var d2 = 0;
this.gg.os_g.setColor(Color.white);
if ((characterObject.c2 == 0)) {
(n2 = ((characterObject.vx - n4) | 0));
(n = ((((characterObject.y - n5) | 0) + 16) | 0));
(d2 = J.div(Math.PI, 180));
(n6 = 0);
while ((n6 <= 3)) {
(d = (((characterObject.c5 + Math.imul(n6, 90)) | 0) * d2));
(this.vo_pa_x[n6] = ((n2 + J.i((Math.cos(d) * characterObject.c3))) | 0));
(this.vo_pa_y[n6] = ((n + J.i((Math.sin(d) * characterObject.c3))) | 0));
++n6;
}
this.gg.os_g.drawPolygon(this.vo_pa_x, this.vo_pa_y, 4);
break;
}
if ((characterObject.c2 != 200)) {
break;
}
this.gg.os_g.fillRect(((characterObject.x - n4) | 0), ((((characterObject.y - n5) | 0) + 11) | 0), ((((characterObject.vx - characterObject.x) | 0) + 1) | 0), 10);
break;
}
case 1900:
{
this.gg.os_g.setColor(new Color(0, 32, 255));
this.gg.os_g.fillOval(((((((characterObject.x + 16) | 0) - characterObject.c3) | 0) - n4) | 0), ((((((characterObject.y + 16) | 0) - characterObject.c3) | 0) - n5) | 0), Math.imul(characterObject.c3, 2), Math.imul(characterObject.c3, 2));
}
}
}
}
++n3;
}
}
(n3 = 0);
while ((n3 <= 5)) {
(monsterObject = this.co_p[n3]);
if ((monsterObject.ss >= 2)) {
if (((monsterObject.pt < 273) || (monsterObject.pt > 274))) {
this.hg.drawImage(this.hih[monsterObject.pth][monsterObject.pt], ((monsterObject.x - n4) | 0), ((monsterObject.y - n5) | 0), this.ap);
}
else {
(n2 = ((monsterObject.x - n4) | 0));
(n = ((monsterObject.y - n5) | 0));
if ((monsterObject.pt == 273)) {
if ((monsterObject.pth == 0)) {
this.hg.drawImage(this.hih[0][284], ((n2 - 16) | 0), ((n - 32) | 0), this.ap);
this.hg.drawImage(this.hih[0][285], ((n2 + 16) | 0), ((n - 32) | 0), this.ap);
this.hg.drawImage(this.hih[0][294], ((n2 - 16) | 0), n, this.ap);
this.hg.drawImage(this.hih[0][295], ((n2 + 16) | 0), n, this.ap);
}
else {
if ((monsterObject.pth == 1)) {
this.hg.drawImage(this.hih[1][285], ((n2 - 16) | 0), ((n - 32) | 0), this.ap);
this.hg.drawImage(this.hih[1][284], ((n2 + 16) | 0), ((n - 32) | 0), this.ap);
this.hg.drawImage(this.hih[1][295], ((n2 - 16) | 0), n, this.ap);
this.hg.drawImage(this.hih[1][294], ((n2 + 16) | 0), n, this.ap);
}
else {
if ((monsterObject.pth == 2)) {
this.hg.drawImage(this.hih[2][284], ((n2 - 16) | 0), ((n - 32) | 0), this.ap);
this.hg.drawImage(this.hih[2][285], ((n2 + 16) | 0), ((n - 32) | 0), this.ap);
this.hg.drawImage(this.hih[2][294], ((n2 - 16) | 0), n, this.ap);
this.hg.drawImage(this.hih[2][295], ((n2 + 16) | 0), n, this.ap);
}
else {
this.hg.drawImage(this.hih[3][285], ((n2 - 16) | 0), ((n - 32) | 0), this.ap);
this.hg.drawImage(this.hih[3][284], ((n2 + 16) | 0), ((n - 32) | 0), this.ap);
this.hg.drawImage(this.hih[3][295], ((n2 - 16) | 0), n, this.ap);
this.hg.drawImage(this.hih[3][294], ((n2 + 16) | 0), n, this.ap);
}
}
}
}
else {
if ((monsterObject.pth == 0)) {
this.hg.drawImage(this.hih[0][286], ((n2 - 16) | 0), ((n - 16) | 0), this.ap);
this.hg.drawImage(this.hih[0][287], ((n2 + 16) | 0), ((n - 16) | 0), this.ap);
this.hg.drawImage(this.hih[0][296], ((n2 - 16) | 0), ((n + 16) | 0), this.ap);
this.hg.drawImage(this.hih[0][297], ((n2 + 16) | 0), ((n + 16) | 0), this.ap);
}
else {
if ((monsterObject.pth == 1)) {
this.hg.drawImage(this.hih[1][287], ((n2 - 16) | 0), ((n - 16) | 0), this.ap);
this.hg.drawImage(this.hih[1][286], ((n2 + 16) | 0), ((n - 16) | 0), this.ap);
this.hg.drawImage(this.hih[1][297], ((n2 - 16) | 0), ((n + 16) | 0), this.ap);
this.hg.drawImage(this.hih[1][296], ((n2 + 16) | 0), ((n + 16) | 0), this.ap);
}
else {
if ((monsterObject.pth == 2)) {
this.hg.drawImage(this.hih[2][286], ((n2 - 16) | 0), ((n - 16) | 0), this.ap);
this.hg.drawImage(this.hih[2][287], ((n2 + 16) | 0), ((n - 16) | 0), this.ap);
this.hg.drawImage(this.hih[2][296], ((n2 - 16) | 0), ((n + 16) | 0), this.ap);
this.hg.drawImage(this.hih[2][297], ((n2 + 16) | 0), ((n + 16) | 0), this.ap);
}
else {
this.hg.drawImage(this.hih[3][287], ((n2 - 16) | 0), ((n - 16) | 0), this.ap);
this.hg.drawImage(this.hih[3][286], ((n2 + 16) | 0), ((n - 16) | 0), this.ap);
this.hg.drawImage(this.hih[3][297], ((n2 - 16) | 0), ((n + 16) | 0), this.ap);
this.hg.drawImage(this.hih[3][296], ((n2 + 16) | 0), ((n + 16) | 0), this.ap);
}
}
}
}
}
}
++n3;
}
(n3 = 0);
while ((n3 <= this.w_kazu)) {
if ((this.co_w[n3].ss >= 2)) {
(monsterObject = this.co_w[n3]);
if (((monsterObject.pt < 273) || (monsterObject.pt > 275))) {
this.hg.drawImage(this.hih[monsterObject.pth][monsterObject.pt], ((monsterObject.x - n4) | 0), ((monsterObject.y - n5) | 0), this.ap);
}
else {
(n2 = ((monsterObject.x - n4) | 0));
(n = ((monsterObject.y - n5) | 0));
if ((monsterObject.syurui == 4500)) {
(n = ((n - 16) | 0));
}
switch (monsterObject.pt) {
case 273:
{
if ((monsterObject.pth == 0)) {
this.hg.drawImage(this.hih[0][284], ((n2 - 16) | 0), ((n - 16) | 0), this.ap);
this.hg.drawImage(this.hih[0][285], ((n2 + 16) | 0), ((n - 16) | 0), this.ap);
this.hg.drawImage(this.hih[0][294], ((n2 - 16) | 0), ((n + 16) | 0), this.ap);
this.hg.drawImage(this.hih[0][295], ((n2 + 16) | 0), ((n + 16) | 0), this.ap);
break;
}
if ((monsterObject.pth == 1)) {
this.hg.drawImage(this.hih[1][285], ((n2 - 16) | 0), ((n - 16) | 0), this.ap);
this.hg.drawImage(this.hih[1][284], ((n2 + 16) | 0), ((n - 16) | 0), this.ap);
this.hg.drawImage(this.hih[1][295], ((n2 - 16) | 0), ((n + 16) | 0), this.ap);
this.hg.drawImage(this.hih[1][294], ((n2 + 16) | 0), ((n + 16) | 0), this.ap);
break;
}
if ((monsterObject.pth == 2)) {
this.hg.drawImage(this.hih[2][284], ((n2 - 16) | 0), ((n - 16) | 0), this.ap);
this.hg.drawImage(this.hih[2][285], ((n2 + 16) | 0), ((n - 16) | 0), this.ap);
this.hg.drawImage(this.hih[2][294], ((n2 - 16) | 0), ((n + 16) | 0), this.ap);
this.hg.drawImage(this.hih[2][295], ((n2 + 16) | 0), ((n + 16) | 0), this.ap);
break;
}
this.hg.drawImage(this.hih[3][285], ((n2 - 16) | 0), ((n - 16) | 0), this.ap);
this.hg.drawImage(this.hih[3][284], ((n2 + 16) | 0), ((n - 16) | 0), this.ap);
this.hg.drawImage(this.hih[3][295], ((n2 - 16) | 0), ((n + 16) | 0), this.ap);
this.hg.drawImage(this.hih[3][294], ((n2 + 16) | 0), ((n + 16) | 0), this.ap);
break;
}
case 274:
{
if ((monsterObject.pth == 0)) {
this.hg.drawImage(this.hih[0][286], ((n2 - 16) | 0), ((n - 16) | 0), this.ap);
this.hg.drawImage(this.hih[0][287], ((n2 + 16) | 0), ((n - 16) | 0), this.ap);
this.hg.drawImage(this.hih[0][296], ((n2 - 16) | 0), ((n + 16) | 0), this.ap);
this.hg.drawImage(this.hih[0][297], ((n2 + 16) | 0), ((n + 16) | 0), this.ap);
break;
}
if ((monsterObject.pth == 1)) {
this.hg.drawImage(this.hih[1][287], ((n2 - 16) | 0), ((n - 16) | 0), this.ap);
this.hg.drawImage(this.hih[1][286], ((n2 + 16) | 0), ((n - 16) | 0), this.ap);
this.hg.drawImage(this.hih[1][297], ((n2 - 16) | 0), ((n + 16) | 0), this.ap);
this.hg.drawImage(this.hih[1][296], ((n2 + 16) | 0), ((n + 16) | 0), this.ap);
break;
}
if ((monsterObject.pth == 2)) {
this.hg.drawImage(this.hih[2][286], ((n2 - 16) | 0), ((n - 16) | 0), this.ap);
this.hg.drawImage(this.hih[2][287], ((n2 + 16) | 0), ((n - 16) | 0), this.ap);
this.hg.drawImage(this.hih[2][296], ((n2 - 16) | 0), ((n + 16) | 0), this.ap);
this.hg.drawImage(this.hih[2][297], ((n2 + 16) | 0), ((n + 16) | 0), this.ap);
break;
}
this.hg.drawImage(this.hih[3][287], ((n2 - 16) | 0), ((n - 16) | 0), this.ap);
this.hg.drawImage(this.hih[3][286], ((n2 + 16) | 0), ((n - 16) | 0), this.ap);
this.hg.drawImage(this.hih[3][297], ((n2 - 16) | 0), ((n + 16) | 0), this.ap);
this.hg.drawImage(this.hih[3][296], ((n2 + 16) | 0), ((n + 16) | 0), this.ap);
break;
}
case 275:
{
if ((monsterObject.pth == 0)) {
this.hg.drawImage(this.hih[0][288], ((n2 - 16) | 0), ((n - 16) | 0), this.ap);
this.hg.drawImage(this.hih[0][289], ((n2 + 16) | 0), ((n - 16) | 0), this.ap);
this.hg.drawImage(this.hih[0][298], ((n2 - 16) | 0), ((n + 16) | 0), this.ap);
this.hg.drawImage(this.hih[0][299], ((n2 + 16) | 0), ((n + 16) | 0), this.ap);
break;
}
if ((monsterObject.pth == 1)) {
this.hg.drawImage(this.hih[1][289], ((n2 - 16) | 0), ((n - 16) | 0), this.ap);
this.hg.drawImage(this.hih[1][288], ((n2 + 16) | 0), ((n - 16) | 0), this.ap);
this.hg.drawImage(this.hih[1][299], ((n2 - 16) | 0), ((n + 16) | 0), this.ap);
this.hg.drawImage(this.hih[1][298], ((n2 + 16) | 0), ((n + 16) | 0), this.ap);
break;
}
if ((monsterObject.pth == 2)) {
this.hg.drawImage(this.hih[2][288], ((n2 - 16) | 0), ((n - 16) | 0), this.ap);
this.hg.drawImage(this.hih[2][289], ((n2 + 16) | 0), ((n - 16) | 0), this.ap);
this.hg.drawImage(this.hih[2][298], ((n2 - 16) | 0), ((n + 16) | 0), this.ap);
this.hg.drawImage(this.hih[2][299], ((n2 + 16) | 0), ((n + 16) | 0), this.ap);
break;
}
this.hg.drawImage(this.hih[3][289], ((n2 - 16) | 0), ((n - 16) | 0), this.ap);
this.hg.drawImage(this.hih[3][288], ((n2 + 16) | 0), ((n - 16) | 0), this.ap);
this.hg.drawImage(this.hih[3][299], ((n2 - 16) | 0), ((n + 16) | 0), this.ap);
this.hg.drawImage(this.hih[3][298], ((n2 + 16) | 0), ((n + 16) | 0), this.ap);
}
}
}
}
++n3;
}
if ((this.co_dt.c > 0)) {
(n2 = ((this.co_dt.x - n4) | 0));
(n = ((this.co_dt.y - n5) | 0));
this.hg.drawImage(this.hi[188], n2, n, this.ap);
this.hg.drawImage(this.hi[189], ((n2 + 32) | 0), n, this.ap);
this.hg.drawImage(this.hi[198], n2, ((n + 32) | 0), this.ap);
this.hg.drawImage(this.hi[199], ((n2 + 32) | 0), ((n + 32) | 0), this.ap);
}
if ((this.co_j.fc > 0)) {
--this.co_j.fc;
this.hg.drawImage(this.hih[((this.co_j.muki + 2) | 0)][((this.co_j.pt + this.j_pt_ss) | 0)], ((this.co_j.x - n4) | 0), ((this.co_j.y - n5) | 0), this.ap);
}
else {
this.hg.drawImage(this.hih[this.co_j.muki][((this.co_j.pt + this.j_pt_ss) | 0)], ((this.co_j.x - n4) | 0), ((this.co_j.y - n5) | 0), this.ap);
}
if (!this.gym_f) {
this.hg.drawImage(this.hi[80], 12, 288, this.ap);
this.hg.drawImage(this.hi[81], 40, 288, this.ap);
(n3 = 0);
while ((n3 <= 5)) {
if ((this.co_p[n3].syurui < 1000)) {
this.hg.drawImage(this.hi[86], ((68 + Math.imul(28, n3)) | 0), 288, this.ap);
}
else {
if ((this.co_p[n3].syurui == 1000)) {
if ((this.co_p[n3].c == 10)) {
if ((this.co_p[n3].pb_type > 0)) {
this.hg.drawImage(this.hi[((27 + Math.imul(this.co_p[n3].pb_type, 10)) | 0)], ((68 + Math.imul(28, n3)) | 0), 288, this.ap);
}
else {
this.hg.drawImage(this.hi[83], ((68 + Math.imul(28, n3)) | 0), 288, this.ap);
}
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
if ((this.co_p[n3].pb_type > 0)) {
this.hg.drawImage(this.hi[((26 + Math.imul(this.co_p[n3].pb_type, 10)) | 0)], ((68 + Math.imul(28, n3)) | 0), 288, this.ap);
}
else {
this.hg.drawImage(this.hi[82], ((68 + Math.imul(28, n3)) | 0), 288, this.ap);
}
}
else {
if ((this.co_p[n3].pb_type > 0)) {
this.hg.drawImage(this.hi[((29 + Math.imul(this.co_p[n3].pb_type, 10)) | 0)], ((68 + Math.imul(28, n3)) | 0), 288, this.ap);
}
else {
this.hg.drawImage(this.hi[88], ((68 + Math.imul(28, n3)) | 0), 288, this.ap);
}
}
}
else {
if ((this.co_p[n3].pb_type > 0)) {
this.hg.drawImage(this.hi[((28 + Math.imul(this.co_p[n3].pb_type, 10)) | 0)], ((68 + Math.imul(28, n3)) | 0), 288, this.ap);
}
else {
this.hg.drawImage(this.hi[84], ((68 + Math.imul(28, n3)) | 0), 288, this.ap);
}
}
}
}
}
++n3;
}
if (((this.km.fc <= 3) || (this.km.aw != 0))) {
this.hg.drawImage(this.hi[78], ((12 + Math.imul(this.km.kmo[0].selectedIndex, 28)) | 0), 288, this.ap);
}
else {
this.hg.drawImage(this.hi[79], ((12 + Math.imul(this.km.kmo[0].selectedIndex, 28)) | 0), 288, this.ap);
}
}
if (!this.gym_f) {
var n7 = 0;
if ((((((this.km.mode == 100) || ((this.km.mode >= 300) && (this.km.mode < 400))) && ((n7 = ((this.km.kmo[0].selectedIndex - 2) | 0)) >= 0)) && (n7 <= 5)) && (this.co_p[n7].syurui >= 1100))) {
var n8 = 0;
this.km.drawWindowbox$4(8, 8, 128, 58);
this.hg.setColor(Color.cyan);
this.hg.drawString(this.co_p[n7].name, 14, 26);
if ((this.co_p[n7].doku_c > 0)) {
this.hg.setColor(Color.yellow);
this.hg.drawString("どく", 78, 26);
}
else {
if ((this.co_p[n7].seibetu == 1)) {
this.hg.setColor(Color.magenta);
this.hg.drawString("♀", 78, 26);
}
else {
this.hg.setColor(Color.blue);
this.hg.drawString("♂", 78, 26);
}
}
this.hg.setColor(this.km.frontcolor);
this.hg.drawString(((("HP  " + this.co_p[n7].hp) + " / ") + this.co_p[n7].hp_max), 14, 44);
this.hg.drawString(((("PP  " + this.co_p[n7].pp) + " / ") + this.co_p[n7].pp_max), 14, 58);
if (((this.co_p[n7].c >= 1000) && ((n8 = this.pSearch$3(this.co_p[n7].x, this.co_p[n7].y, 0)) >= 0))) {
this.km.drawWindowbox$4(144, 8, 128, 58);
this.hg.setColor(Color.green);
this.hg.drawString(this.co_w[n8].name, 150, 26);
if (((this.co_w[n8].hp <= 0) || (this.co_w[n8].pp <= 0))) {
this.hg.setColor(Color.red);
this.hg.drawString("戦闘不能", 214, 26);
}
else {
if ((this.co_w[n8].doku_c > 0)) {
this.hg.setColor(Color.yellow);
this.hg.drawString("どく", 214, 26);
}
else {
if ((this.co_w[n8].seibetu == 1)) {
this.hg.setColor(Color.magenta);
this.hg.drawString("♀", 214, 26);
}
else {
this.hg.setColor(Color.blue);
this.hg.drawString("♂", 214, 26);
}
}
}
this.hg.setColor(this.km.frontcolor);
this.hg.drawString(((("HP  " + this.co_w[n8].hp) + " / ") + this.co_w[n8].hp_max), 150, 44);
this.hg.drawString(((("PP  " + this.co_w[n8].pp) + " / ") + this.co_w[n8].pp_max), 150, 58);
}
}
}
else {
if (this.race_f) {
this.km.drawWindowbox$4(344, 8, 160, 26);
this.hg.setColor(Color.yellow);
this.hg.drawString("タイム", 350, 26);
this.hg.setColor(Color.white);
var n9 = J.div(this.race_time, 1000);
this.hg.drawString((("" + n9) + " 秒"), 414, 26);
if ((((this.km.mode >= 5030) && (this.co_p[this.gym_p_id[0][0]].c >= 1000)) || (this.km.mode >= 5040))) {
var n10 = this.gym_p_id[0][0];
this.km.drawWindowbox$4(8, 8, 128, 58);
this.hg.setColor(Color.cyan);
this.hg.drawString(this.co_p[n10].name, 14, 26);
if ((this.co_p[n10].c == 210)) {
this.hg.setColor(Color.red);
this.hg.drawString("戦闘不能", 78, 26);
}
else {
if ((this.co_p[n10].doku_c > 0)) {
this.hg.setColor(Color.yellow);
this.hg.drawString("どく", 78, 26);
}
else {
if ((this.co_p[n10].seibetu == 1)) {
this.hg.setColor(Color.magenta);
this.hg.drawString("♀", 78, 26);
}
else {
this.hg.setColor(Color.blue);
this.hg.drawString("♂", 78, 26);
}
}
}
this.hg.setColor(this.km.frontcolor);
this.hg.drawString(((("HP  " + this.co_p[n10].hp) + " / ") + this.co_p[n10].hp_max), 14, 44);
this.hg.drawString(((("PP  " + this.co_p[n10].pp) + " / ") + this.co_p[n10].pp_max), 14, 58);
}
}
else {
if (!this.gym_double_f) {
if ((((this.km.mode >= 2040) && (this.km.mode < 2400)) || ((this.km.mode >= 2030) && (this.co_p[this.gym_p_id[0][0]].c >= 1000)))) {
var n11 = this.gym_p_id[0][0];
this.km.drawWindowbox$4(8, 8, 128, 58);
this.hg.setColor(Color.cyan);
this.hg.drawString(this.co_p[n11].name, 14, 26);
if ((this.co_p[n11].c == 210)) {
this.hg.setColor(Color.red);
this.hg.drawString("戦闘不能", 78, 26);
}
else {
if ((this.co_p[n11].doku_c > 0)) {
this.hg.setColor(Color.yellow);
this.hg.drawString("どく", 78, 26);
}
else {
if ((this.co_p[n11].seibetu == 1)) {
this.hg.setColor(Color.magenta);
this.hg.drawString("♀", 78, 26);
}
else {
this.hg.setColor(Color.blue);
this.hg.drawString("♂", 78, 26);
}
}
}
this.hg.setColor(this.km.frontcolor);
this.hg.drawString(((("HP  " + this.co_p[n11].hp) + " / ") + this.co_p[n11].hp_max), 14, 44);
this.hg.drawString(((("PP  " + this.co_p[n11].pp) + " / ") + this.co_p[n11].pp_max), 14, 58);
(n11 = 0);
this.km.drawWindowbox$4(144, 8, 128, 58);
this.hg.setColor(Color.cyan);
this.hg.drawString(this.co_w[n11].name, 150, 26);
if ((this.co_w[n11].c == 210)) {
this.hg.setColor(Color.red);
this.hg.drawString("戦闘不能", 214, 26);
}
else {
if ((this.co_w[n11].doku_c > 0)) {
this.hg.setColor(Color.yellow);
this.hg.drawString("どく", 214, 26);
}
else {
if ((this.co_w[n11].seibetu == 1)) {
this.hg.setColor(Color.magenta);
this.hg.drawString("♀", 214, 26);
}
else {
this.hg.setColor(Color.blue);
this.hg.drawString("♂", 214, 26);
}
}
}
this.hg.setColor(this.km.frontcolor);
this.hg.drawString(((("HP  " + this.co_w[n11].hp) + " / ") + this.co_w[n11].hp_max), 150, 44);
this.hg.drawString(((("PP  " + this.co_w[n11].pp) + " / ") + this.co_w[n11].pp_max), 150, 58);
}
}
else {
if (((this.km.mode >= 3100) || (((this.km.mode >= 2050) && (this.co_p[this.gym_p_id[0][0]].c >= 1000)) && (this.co_w[0].c >= 200)))) {
var n12 = this.gym_p_id[0][1];
this.km.drawWindowbox$4(5, 8, 248, 58);
this.hg.setColor(Color.cyan);
this.hg.drawString(this.co_p[n12].name, 11, 26);
if ((this.co_p[n12].c == 210)) {
this.hg.setColor(Color.red);
this.hg.drawString("戦闘不能", 75, 26);
}
else {
if ((this.co_p[n12].doku_c > 0)) {
this.hg.setColor(Color.yellow);
this.hg.drawString("どく", 75, 26);
}
else {
if ((this.co_p[n12].seibetu == 1)) {
this.hg.setColor(Color.magenta);
this.hg.drawString("♀", 75, 26);
}
else {
this.hg.setColor(Color.blue);
this.hg.drawString("♂", 75, 26);
}
}
}
this.hg.setColor(this.km.frontcolor);
this.hg.drawString(((("HP  " + this.co_p[n12].hp) + " / ") + this.co_p[n12].hp_max), 11, 44);
this.hg.drawString(((("PP  " + this.co_p[n12].pp) + " / ") + this.co_p[n12].pp_max), 11, 58);
(n12 = this.gym_p_id[0][0]);
this.hg.setColor(Color.cyan);
this.hg.drawString(this.co_p[n12].name, 131, 26);
if ((this.co_p[n12].c == 210)) {
this.hg.setColor(Color.red);
this.hg.drawString("戦闘不能", 195, 26);
}
else {
if ((this.co_p[n12].doku_c > 0)) {
this.hg.setColor(Color.yellow);
this.hg.drawString("どく", 195, 26);
}
else {
if ((this.co_p[n12].seibetu == 1)) {
this.hg.setColor(Color.magenta);
this.hg.drawString("♀", 195, 26);
}
else {
this.hg.setColor(Color.blue);
this.hg.drawString("♂", 195, 26);
}
}
}
this.hg.setColor(this.km.frontcolor);
this.hg.drawString(((("HP  " + this.co_p[n12].hp) + " / ") + this.co_p[n12].hp_max), 131, 44);
this.hg.drawString(((("PP  " + this.co_p[n12].pp) + " / ") + this.co_p[n12].pp_max), 131, 58);
if (((this.km.mode >= 3060) && (this.co_w[0].c >= 200))) {
(n12 = 0);
this.km.drawWindowbox$4(259, 8, 248, 58);
this.hg.setColor(Color.cyan);
this.hg.drawString(this.co_w[n12].name, 265, 26);
if ((this.co_w[n12].c == 210)) {
this.hg.setColor(Color.red);
this.hg.drawString("戦闘不能", 329, 26);
}
else {
if ((this.co_w[n12].doku_c > 0)) {
this.hg.setColor(Color.yellow);
this.hg.drawString("どく", 329, 26);
}
else {
if ((this.co_w[n12].seibetu == 1)) {
this.hg.setColor(Color.magenta);
this.hg.drawString("♀", 329, 26);
}
else {
this.hg.setColor(Color.blue);
this.hg.drawString("♂", 329, 26);
}
}
}
this.hg.setColor(this.km.frontcolor);
this.hg.drawString(((("HP  " + this.co_w[n12].hp) + " / ") + this.co_w[n12].hp_max), 265, 44);
this.hg.drawString(((("PP  " + this.co_w[n12].pp) + " / ") + this.co_w[n12].pp_max), 265, 58);
(n12 = 1);
this.hg.setColor(Color.cyan);
this.hg.drawString(this.co_w[n12].name, 385, 26);
if ((this.co_w[n12].c == 210)) {
this.hg.setColor(Color.red);
this.hg.drawString("戦闘不能", 449, 26);
}
else {
if ((this.co_w[n12].doku_c > 0)) {
this.hg.setColor(Color.yellow);
this.hg.drawString("どく", 449, 26);
}
else {
if ((this.co_w[n12].seibetu == 1)) {
this.hg.setColor(Color.magenta);
this.hg.drawString("♀", 449, 26);
}
else {
this.hg.setColor(Color.blue);
this.hg.drawString("♂", 449, 26);
}
}
}
this.hg.setColor(this.km.frontcolor);
this.hg.drawString(((("HP  " + this.co_w[n12].hp) + " / ") + this.co_w[n12].hp_max), 385, 44);
this.hg.drawString(((("PP  " + this.co_w[n12].pp) + " / ") + this.co_w[n12].pp_max), 385, 58);
}
}
}
}
}
this.km.drawMenus$0();
}
jMove$0() {
switch (this.co_j.c) {
case 1200:
{
if ((this.stage_cc > 0)) {
break;
}
++this.co_j.c1;
if ((this.co_j.c1 <= 3)) {
break;
}
var n = 1;
while ((n <= 15)) {
this.km.off$1(n);
++n;
}
if (((this.co_dt.c == 0) || (this.co_dt.c == 120))) {
(this.co_dt.c = 100);
(this.co_dt.x = ((this.maps.wx + 378) | 0));
(this.co_dt.y = ((this.maps.wy - 64) | 0));
}
if (((this.debug_mode >= 1) && (this.debug_mode <= 4))) {
this.km.initSerifubox$5(4, 188, 128, 160, this.name_dragontaxy);
this.km.addItem$2(4, "ゲームオーバーです。");
this.km.active$1(4);
(this.km.mode = 610);
(this.co_j.c = 1210);
break;
}
this.km.initSerifubox$5(3, 104, 88, 192, this.name_dragontaxy);
this.km.addItem$2(3, "救出費用は、200円です。");
this.km.active$1(3);
(this.km.mode = 650);
(this.co_j.c = 1210);
break;
}
case 1210:
{
break;
}
case 1250:
{
(this.co_j.y = ((this.co_j.y + 4) | 0));
if ((this.maps.getBGCode$2(((this.co_j.x + 15) | 0), ((this.co_j.y + 31) | 0)) >= 20)) {
(this.co_j.y = ((Math.imul(J.div(((this.co_j.y + 31) | 0), 32), 32) - 32) | 0));
}
(this.co_j.wx = ((this.co_j.x - this.maps.wx) | 0));
(this.co_j.wy = ((this.co_j.y - this.maps.wy) | 0));
if ((this.co_j.wy > 320)) {
(this.co_j.y = ((this.maps.wy + 320) | 0));
}
(this.co_j.pt = 113);
(this.co_j.muki = 0);
break;
}
case 1300:
{
(this.co_j.wx = ((this.co_j.x - this.maps.wx) | 0));
(this.co_j.wy = ((this.co_j.y - this.maps.wy) | 0));
(this.co_j.pt = 100);
(this.co_j.muki = 1);
break;
}
case 1900:
{
if (this.gk.up_f) {
(this.co_j.y = ((this.co_j.y - 8) | 0));
}
if (this.gk.down_f) {
(this.co_j.y = ((this.co_j.y + 8) | 0));
}
if (this.gk.left_f) {
(this.co_j.x = ((this.co_j.x - 8) | 0));
}
if (!this.gk.right_f) {
break;
}
(this.co_j.x = ((this.co_j.x + 8) | 0));
}
}
}
jM1000$0() {
var n = 0;
var n2 = 0;
var n3 = 0;
var s = 0;
var n4 = 0;
var s2 = 0;
var n5 = 0;
if (((this.gk.tr1_f && (this.km.mode == 100)) && (this.km.kmo[0].selectedIndex == 0))) {
if ((this.gk.tr1_c < 6)) {
++this.gk.tr1_c;
}
}
else {
if (this.gk.tr3_f) {
if ((this.gk.tr1_c < 6)) {
++this.gk.tr1_c;
}
}
else {
if ((((this.gk.key_code == 86) && (this.km.mode == 100)) && ((this.km.kmo[0].selectedIndex == 0) || (this.km.kmo[0].selectedIndex == 1)))) {
(this.gk.key_code = 0);
(this.gk.tr1_c = 1);
}
else {
(this.gk.tr1_c = 0);
}
}
}
var n6 = this.co_j.x;
var n7 = this.co_j.y;
(this.co_j.pt = 100);
var n8 = J.div(((n6 + 15) | 0), 32);
var n9 = J.div(((n7 + 31) | 0), 32);
var s3 = this.maps.map_bg[n8][n9];
var n10 = J.div(((n7 + 32) | 0), 32);
var s4 = this.maps.map_bg[n8][n10];
if ((s4 >= 20)) {
(this.co_j.jimen_f = true);
(this.j_jump_type = 2);
}
else {
(this.co_j.jimen_f = false);
}
if (this.co_j.jimen_f) {
if ((this.gk.left_f && (this.km.mode != 1000))) {
(this.co_j.vx = ((this.co_j.vx - 15) | 0));
if ((this.co_j.vx < -60)) {
(this.co_j.vx = -60);
}
if ((this.co_j.vx > 0)) {
(this.co_j.pt = 112);
(this.co_j.ac = 0);
}
else {
(this.co_j.pt = ((103 + J.div(this.co_j.ac, 2)) | 0));
++this.co_j.ac;
if ((this.co_j.ac > 3)) {
(this.co_j.ac = 0);
}
}
(this.co_j.muki = 0);
}
else {
if ((this.gk.right_f && (this.km.mode != 1000))) {
(this.co_j.vx = ((this.co_j.vx + 15) | 0));
if ((this.co_j.vx > 60)) {
(this.co_j.vx = 60);
}
if ((this.co_j.vx < 0)) {
(this.co_j.pt = 112);
(this.co_j.ac = 0);
}
else {
(this.co_j.pt = ((103 + J.div(this.co_j.ac, 2)) | 0));
++this.co_j.ac;
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
++this.co_j.ac;
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
++this.co_j.ac;
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
if ((this.gk.left_f && (this.km.mode != 1000))) {
if ((this.co_j.vx > -60)) {
(this.co_j.vx = ((this.co_j.vx - 10) | 0));
if ((this.co_j.vx < -60)) {
(this.co_j.vx = -60);
}
}
}
else {
if (((this.gk.right_f && (this.km.mode != 1000)) && (this.co_j.vx < 60))) {
(this.co_j.vx = ((this.co_j.vx + 10) | 0));
if ((this.co_j.vx > 60)) {
(this.co_j.vx = 60);
}
}
}
(this.co_j.pt = ((this.j_jump_type == 0) ? ((this.co_j.vy <= -80) ? 101 : 102) : ((this.j_jump_type == 2) ? ((Math.abs(this.co_j.vx) <= 60) ? 103 : 105) : 102)));
(this.co_j.ac = 2);
}
if ((this.co_j.vx < 0)) {
(this.co_j.x = ((this.co_j.x + J.div(this.co_j.vx, 10)) | 0));
(n5 = J.div(((this.co_j.x + 15) | 0), 32));
(s2 = J.short(this.maps.map_bg[n5][J.div(this.co_j.y, 32)]));
(n4 = J.div(((this.co_j.y + 31) | 0), 32));
(s = J.short(this.maps.map_bg[n5][n4]));
if (((s2 >= 20) || (s >= 20))) {
(this.co_j.x = ((Math.imul(n5, 32) + 17) | 0));
(this.co_j.vx = 0);
}
}
else {
if ((this.co_j.vx > 0)) {
(this.co_j.x = ((this.co_j.x + J.div(this.co_j.vx, 10)) | 0));
(n5 = J.div(((this.co_j.x + 15) | 0), 32));
(s2 = J.short(this.maps.map_bg[n5][J.div(this.co_j.y, 32)]));
(n4 = J.div(((this.co_j.y + 31) | 0), 32));
(s = J.short(this.maps.map_bg[n5][n4]));
if (((s2 >= 20) || (s >= 20))) {
(this.co_j.x = ((Math.imul(n5, 32) - 16) | 0));
(this.co_j.vx = 0);
}
}
}
if (this.co_j.jimen_f) {
var bl = false;
if (((this.gk.tr1_c >= 1) && (this.gk.tr1_c <= 5))) {
(bl = true);
}
if (bl) {
if ((this.maps.getBGCode$2(((this.co_j.x + 15) | 0), ((this.co_j.y - 1) | 0)) < 20)) {
(this.j_jump_type = 0);
(this.co_j.pt = 101);
(this.co_j.ac = 0);
(n3 = Math.abs(this.co_j.vx));
if ((n3 == 0)) {
(this.co_j.vy = -150);
(this.j_jump_level = 1);
}
else {
if ((n3 < 60)) {
(this.co_j.vy = -230);
(this.j_jump_level = 2);
}
else {
if ((n3 >= 60)) {
(this.co_j.vy = -260);
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
}
if ((this.co_j.vy < 0)) {
(n5 = J.div(((this.co_j.x + 15) | 0), 32));
var n11 = J.div(this.co_j.y, 32);
var s5 = this.maps.map_bg[n5][n11];
(n3 = this.co_j.vy);
if ((n3 < -320)) {
(n3 = -320);
}
(this.co_j.y = ((this.co_j.y + J.div(n3, 10)) | 0));
var n12 = J.div(this.co_j.y, 32);
(s2 = J.short(this.maps.map_bg[J.div(((this.co_j.x + 15) | 0), 32)][n12]));
if ((s2 >= 20)) {
(this.co_j.y = ((Math.imul(n12, 32) + 32) | 0));
(this.co_j.vy = 0);
}
if ((n11 > n12)) {
var s6 = 0;
if (this.gk.right_f) {
(s6 = J.short(this.maps.map_bg[J.div(((this.co_j.x + 16) | 0), 32)][n11]));
(n2 = this.maps.map_bg[J.div(((this.co_j.x + 16) | 0), 32)][n12]);
if (((s6 <= 9) && (n2 >= 20))) {
(this.co_j.y = ((Math.imul(n12, 32) + 32) | 0));
(this.co_j.vy = 0);
}
}
if (this.gk.left_f) {
(s6 = J.short(this.maps.map_bg[J.div(((this.co_j.x + 14) | 0), 32)][n11]));
(n2 = this.maps.map_bg[J.div(((this.co_j.x + 14) | 0), 32)][n12]);
if (((s6 <= 9) && (n2 >= 20))) {
(this.co_j.y = ((Math.imul(n12, 32) + 32) | 0));
(this.co_j.vy = 0);
}
}
}
}
else {
if ((this.co_j.vy > 0)) {
(n8 = J.div(((this.co_j.x + 15) | 0), 32));
(n9 = J.div(((this.co_j.y + 31) | 0), 32));
(s3 = J.short(this.maps.map_bg[n8][n9]));
(this.co_j.y = ((this.co_j.y + J.div(this.co_j.vy, 10)) | 0));
(n4 = J.div(((this.co_j.y + 31) | 0), 32));
(s = J.short(this.maps.map_bg[n8][n4]));
if ((s >= 20)) {
(this.co_j.y = ((Math.imul(n4, 32) - 32) | 0));
(this.co_j.vy = 0);
(n4 = J.div(((this.co_j.y + 31) | 0), 32));
(s = J.short(this.maps.map_bg[n8][n4]));
}
if ((n9 < n4)) {
var s7 = 0;
if (this.gk.right_f) {
(s7 = J.short(this.maps.map_bg[J.div(((this.co_j.x + 16) | 0), 32)][n9]));
(n2 = this.maps.map_bg[J.div(((this.co_j.x + 16) | 0), 32)][n4]);
if (((s7 <= 9) && (n2 >= 20))) {
(this.co_j.y = ((Math.imul(n4, 32) - 32) | 0));
(this.co_j.vy = 0);
(this.co_j.pt = 103);
(this.co_j.ac = 1);
++this.co_j.x;
}
}
if (this.gk.left_f) {
(s7 = J.short(this.maps.map_bg[J.div(((this.co_j.x + 14) | 0), 32)][n9]));
(n2 = this.maps.map_bg[J.div(((this.co_j.x + 14) | 0), 32)][n4]);
if (((s7 <= 9) && (n2 >= 20))) {
(this.co_j.y = ((Math.imul(n4, 32) - 32) | 0));
(this.co_j.vy = 0);
(this.co_j.pt = 103);
(this.co_j.ac = 1);
--this.co_j.x;
}
}
}
}
}
if (((n = this.maps.map_bg[J.div(((this.co_j.x + 15) | 0), 32)][J.div(((this.co_j.y + 15) | 0), 32)]) > 0)) {
(n2 = n);
if (((n == 6) || (n == 9))) {
(n2 = 5);
}
switch (n2) {
case 5:
{
var n13 = J.div(((this.co_j.x + 15) | 0), 32);
var n14 = J.div(((this.co_j.y + 15) | 0), 32);
if ((this.itemGetKazu$0() < 10)) {
this.maps.putBGCode$3(n13, n14, 0);
(this.item_motenai_x = n13);
(this.item_motenai_y = n14);
if ((n == 6)) {
this.itemAddItem$1(4);
break;
}
if ((n == 9)) {
this.itemAddItem$1(8);
(this.ig.kinnotama_f[((this.stage - 1) | 0)] = false);
break;
}
this.itemAddItem$1(3);
break;
}
if (((n13 == this.item_motenai_x) && (n14 == this.item_motenai_y))) {
break;
}
(this.item_motenai_x = n13);
(this.item_motenai_y = n14);
if ((this.co_j.seibetu == 1)) {
this.km.openTimeMessage$5(11, 344, 8, 160, this.co_j.name);
this.km.addItem$2(11, "何か、落ちてるかも。");
this.km.addItem$2(11, "でも、もう持てないわ。");
break;
}
this.km.openTimeMessage$5(11, 312, 8, 192, this.co_j.name);
this.km.addItem$2(11, "何か落ちてるけど、");
this.km.addItem$2(11, "そんなにたくさん、持てないよ。");
break;
}
case 8:
{
this.maps.putBGCode$3(J.div(((this.co_j.x + 15) | 0), 32), J.div(((this.co_j.y + 15) | 0), 32), 0);
(this.stage_cc = 1);
this.addScore$1(100);
}
}
}
if ((this.co_j.y >= this.ochiru_y)) {
(this.co_j.c = 1200);
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
switch (this.km.mode) {
case 100:
{
if ((this.gk.key_code == 65)) {
(this.gk.key_code = 0);
(this.km.kmo[0].selectedIndex = 2);
}
else {
if ((this.gk.key_code == 83)) {
(this.gk.key_code = 0);
(this.km.kmo[0].selectedIndex = 3);
}
else {
if ((this.gk.key_code == 68)) {
(this.gk.key_code = 0);
(this.km.kmo[0].selectedIndex = 4);
}
else {
if ((this.gk.key_code == 70)) {
(this.gk.key_code = 0);
(this.km.kmo[0].selectedIndex = 5);
}
else {
if ((this.gk.key_code == 71)) {
(this.gk.key_code = 0);
(this.km.kmo[0].selectedIndex = 6);
}
else {
if ((this.gk.key_code == 72)) {
(this.gk.key_code = 0);
(this.km.kmo[0].selectedIndex = 7);
}
}
}
}
}
}
if ((this.km.kmo[0].selectedIndex == 1)) {
if ((this.km.kettei_c != 1)) {
break;
}
this.km.initSelectbox$5(1, 8, 8, 144, "どうしますか？");
this.km.addItem$2(1, "持ち物");
this.km.addItem$2(1, "モンスター図鑑");
this.km.addItem$2(1, "ステータス");
this.km.addItem$2(1, "ニックネーム");
this.km.addItem$2(1, "帰る");
this.km.addItem$2(1, "キャンセル");
this.km.active$1(1);
(this.km.mode = 200);
break;
}
var n = ((this.km.kmo[0].selectedIndex - 2) | 0);
if (((n < 0) || (n > 5))) {
break;
}
if (((this.gk.key_code == 86) || (this.gk.key_code == 74))) {
(this.gk.key_code = 0);
if (((this.co_p[n].c >= 1000) && this.co_p[n].jumpkanou_f)) {
(this.co_p[n].meirei = 2);
}
}
if ((this.km.kettei_c > 1)) {
if ((this.co_p[n].c != 10)) {
break;
}
(this.co_p[n].c = 100);
(this.co_p[n].c1 = 0);
(this.co_p[n].x = this.co_j.x);
(this.co_p[n].y = this.co_j.y);
if ((this.co_p[n].pb_type == 1)) {
(this.co_p[n].vx = this.co_j.vx);
(this.co_p[n].vy = -255);
}
else {
if ((this.co_p[n].pb_type == 2)) {
(this.co_p[n].vx = ((this.co_j.muki == 0) ? ((-100 + this.co_j.vx) | 0) : ((100 + this.co_j.vx) | 0)));
(this.co_p[n].vy = 0);
}
else {
(this.co_p[n].vx = ((this.co_j.muki == 0) ? ((-70 + this.co_j.vx) | 0) : ((70 + this.co_j.vx) | 0)));
(this.co_p[n].vy = -175);
}
}
(this.km.kettei_c = 2);
break;
}
if ((this.km.kettei_c != 1)) {
break;
}
if ((this.co_p[n].c == 10)) {
(this.co_p[n].c = 100);
(this.co_p[n].c1 = 0);
(this.co_p[n].x = this.co_j.x);
(this.co_p[n].y = this.co_j.y);
if ((this.co_p[n].pb_type == 1)) {
(this.co_p[n].vx = this.co_j.vx);
(this.co_p[n].vy = -255);
}
else {
if ((this.co_p[n].pb_type == 2)) {
(this.co_p[n].vx = ((this.co_j.muki == 0) ? ((-100 + this.co_j.vx) | 0) : ((100 + this.co_j.vx) | 0)));
(this.co_p[n].vy = 0);
}
else {
(this.co_p[n].vx = ((this.co_j.muki == 0) ? ((-70 + this.co_j.vx) | 0) : ((70 + this.co_j.vx) | 0)));
(this.co_p[n].vy = -175);
}
}
(this.km.kettei_c = 2);
break;
}
if ((this.co_p[n].c == 20)) {
if (((this.co_p[n].hp <= 0) || (this.co_p[n].pp <= 0))) {
if ((this.co_p[n].pp <= 0)) {
this.km.initSerifubox$5(3, 8, 70, 192, this.co_p[n].name);
this.km.addItem$2(3, "疲れたから、イヤです。");
this.km.addItem$2(3, (this.co_j.name + "さん、がんばって。"));
this.km.active$1(3);
(this.km.mode = 320);
break;
}
this.km.initSerifubox$5(3, 8, 70, 192, this.co_p[n].name);
this.km.addItem$2(3, "痛いから、イヤです。");
this.km.addItem$2(3, (this.co_j.name + "さん、がんばって。"));
this.km.active$1(3);
(this.km.mode = 320);
break;
}
(this.co_p[n].c = 200);
(this.co_p[n].x = this.co_j.x);
(this.co_p[n].y = this.co_j.y);
(this.co_p[n].vx = ((this.co_j.muki == 0) ? ((-70 + this.co_j.vx) | 0) : ((70 + this.co_j.vx) | 0)));
(this.co_p[n].vy = -175);
(this.km.kettei_c = 2);
this.km.openTimeMessage$5(11, 344, 8, 160, this.co_j.name);
if ((this.co_j.seibetu == 1)) {
this.km.addItem$2(11, (("がんばって！ " + this.co_p[n].name) + "！"));
break;
}
this.km.addItem$2(11, (("行け！ " + this.co_p[n].name) + "！"));
(this.km.kmo[11].item_int[0] = 25);
break;
}
if ((this.co_p[n].c < 1000)) {
break;
}
var monsterObject = this.co_p[n];
this.km.initSelectbox$5(1, 8, 70, 128, "命令は？");
var n2 = 0;
while ((n2 <= monsterObject.waza_kazu)) {
this.km.addItem$2(1, monsterObject.waza_name[n2]);
++n2;
}
this.km.active$1(1);
(this.km.mode = 300);
break;
}
case 150:
{
if (((this.km.cancel_c != 1) && (this.km.kettei_c != 1))) {
break;
}
var n = 1;
while ((n <= 9)) {
this.km.off$1(n);
++n;
}
this.km.active$1(0);
(this.km.mode = 100);
break;
}
case 200:
{
if ((this.km.cancel_c == 1)) {
this.km.off$1(1);
this.km.active$1(0);
(this.km.mode = 100);
break;
}
if ((this.km.kettei_c != 1)) {
break;
}
if ((this.km.getSelectedIndex$1(1) == 0)) {
this.itemNarabikae$0();
if ((this.item_kazu <= 0)) {
this.km.initSerifubox$5(3, 160, 36, 168, this.co_j.name);
if ((this.co_j.seibetu == 1)) {
this.km.addItem$2(3, "そうだ、思い出したわ。");
}
else {
this.km.addItem$2(3, "そうだ、思い出した。");
}
this.km.addItem$2(3, "何も持っていなかったんだ。");
this.km.active$1(3);
(this.km.mode = 410);
break;
}
this.km.initSelectbox$5(2, 112, 56, 120, "どれを？");
var n = 0;
while ((n <= ((this.item_kazu - 1) | 0))) {
this.km.addItem$2(2, this.item_data_name[this.item[n]]);
++n;
}
this.km.active$1(2);
(this.km.mode = 400);
break;
}
if ((this.km.getSelectedIndex$1(1) == 1)) {
this.km.openZukanbar$4(8, 130, 22, "モンスター図鑑");
this.km.initIdlist$0();
var n = 1;
while ((n <= 39)) {
if (this.ig.zukan_mituketa_f[n]) {
(this.km.idlist_item[this.km.idlist_kazu] = n);
++this.km.idlist_kazu;
}
++n;
}
if ((this.km.idlist_kazu <= 15)) {
this.km.initSelectbox$5(2, 256, 72, 110, "どれを見る？");
(n = 0);
while ((n <= ((this.km.idlist_kazu - 1) | 0))) {
this.km.addItem$2(2, this.ig.zukan_name[this.km.idlist_item[n]]);
++n;
}
this.km.active$1(2);
(this.km.mode = 1300);
break;
}
this.km.initSelectbox$5(2, 256, 72, 110, "どれを見る？");
(n = 0);
while ((n <= 13)) {
this.km.addItem$2(2, this.ig.zukan_name[this.km.idlist_item[n]]);
++n;
}
this.km.addItem$2(2, "それ以外");
this.km.active$1(2);
(this.km.mode = 1330);
break;
}
if ((this.km.getSelectedIndex$1(1) == 2)) {
this.km.initIdlist$0();
var n = 0;
while ((n <= 6)) {
if ((this.co_p[n].syurui >= 1100)) {
(this.km.idlist_item[this.km.idlist_kazu] = n);
++this.km.idlist_kazu;
}
++n;
}
this.km.initSelectbox$5(2, 56, 90, 120, "誰の？");
(n = 0);
while ((n <= ((this.km.idlist_kazu - 1) | 0))) {
this.km.addItem$2(2, this.co_p[this.km.idlist_item[n]].name);
++n;
}
this.km.active$1(2);
(this.km.mode = 500);
break;
}
if ((this.km.getSelectedIndex$1(1) == 3)) {
this.km.initIdlist$0();
var n = 0;
while ((n <= 5)) {
if ((this.co_p[n].syurui >= 1100)) {
(this.km.idlist_item[this.km.idlist_kazu] = n);
++this.km.idlist_kazu;
}
++n;
}
if ((this.km.idlist_kazu <= 0)) {
this.km.initSerifubox$5(3, 160, 36, 168, this.co_j.name);
this.km.initMessagebox$4(3, 160, 64, 192);
this.km.addItem$2(3, "ニックネームを付けるペットが、");
this.km.addItem$2(3, "いません。");
this.km.active$1(3);
(this.km.mode = 410);
break;
}
this.km.initSelectbox$5(2, 72, 96, 120, "誰に付ける？");
(n = 0);
while ((n <= ((this.km.idlist_kazu - 1) | 0))) {
this.km.addItem$2(2, this.co_p[this.km.idlist_item[n]].name);
++n;
}
this.km.active$1(2);
(this.km.mode = 210);
break;
}
if ((this.km.getSelectedIndex$1(1) == 4)) {
if (((this.co_dt.c == 0) || (this.co_dt.c == 120))) {
(this.co_dt.c = 100);
(this.co_dt.x = ((this.maps.wx + 378) | 0));
(this.co_dt.y = ((((this.maps.wy - 64) | 0) - 24) | 0));
}
if (((this.debug_mode >= 1) && (this.debug_mode <= 4))) {
this.km.initSerifubox$5(3, 104, 88, 224, this.name_dragontaxy);
this.km.addItem$2(3, "デバッグモードなので、帰れません。");
this.km.active$1(3);
(this.km.mode = 620);
break;
}
var string = "運賃200円が必要です。帰りますか？";
this.km.initSelectboxSerifu$6(2, 104, 88, 236, this.name_dragontaxy, string);
this.km.addItem$2(2, "はい");
this.km.addItem$2(2, "いいえ");
this.km.active$1(2);
(this.km.mode = 600);
break;
}
this.km.off$1(1);
this.km.active$1(0);
(this.km.mode = 100);
break;
}
case 210:
{
if ((this.km.cancel_c == 1)) {
this.km.off$1(2);
this.km.active$1(1);
(this.km.mode = 200);
break;
}
if ((this.km.kettei_c != 1)) {
break;
}
var n = this.km.idlist_item[this.km.getSelectedIndex$1(2)];
if ((this.co_p[n].id == this.co_j.id)) {
this.km.initNameinputbox$4(6, 208, 58, "ニックネーム");
this.km.active$1(6);
(this.km.mode = 1000);
break;
}
this.km.initMessagebox$4(3, 208, 82, 192);
this.km.addItem$2(3, "ニックネームを付けられるのは、");
this.km.addItem$2(3, "親だけです。");
this.km.active$1(3);
(this.km.mode = 220);
break;
}
case 220:
{
if ((this.km.cancel_c == 1)) {
this.km.off$1(3);
this.km.active$1(2);
(this.km.mode = 210);
break;
}
if ((this.km.kettei_c != 1)) {
break;
}
this.km.off$1(3);
this.km.off$1(2);
this.km.off$1(1);
this.km.active$1(0);
(this.km.mode = 100);
break;
}
case 300:
{
var n = ((this.km.kmo[0].selectedIndex - 2) | 0);
if (((this.gk.key_code == 86) || (this.gk.key_code == 74))) {
(this.gk.key_code = 0);
if (((this.co_p[n].c >= 1000) && this.co_p[n].jumpkanou_f)) {
(this.co_p[n].meirei = 2);
}
}
var bl = false;
if ((this.gk.key_code == 65)) {
(this.gk.key_code = 0);
(this.km.kmo[0].selectedIndex = 2);
(bl = true);
}
else {
if ((this.gk.key_code == 83)) {
(this.gk.key_code = 0);
(this.km.kmo[0].selectedIndex = 3);
(bl = true);
}
else {
if ((this.gk.key_code == 68)) {
(this.gk.key_code = 0);
(this.km.kmo[0].selectedIndex = 4);
(bl = true);
}
else {
if ((this.gk.key_code == 70)) {
(this.gk.key_code = 0);
(this.km.kmo[0].selectedIndex = 5);
(bl = true);
}
else {
if ((this.gk.key_code == 71)) {
(this.gk.key_code = 0);
(this.km.kmo[0].selectedIndex = 6);
(bl = true);
}
else {
if ((this.gk.key_code == 72)) {
(this.gk.key_code = 0);
(this.km.kmo[0].selectedIndex = 7);
(bl = true);
}
}
}
}
}
}
if (bl) {
this.km.off$1(1);
this.km.active$1(0);
(this.km.mode = 100);
break;
}
if ((this.km.cancel_c == 1)) {
this.km.off$1(1);
this.km.active$1(0);
(this.km.mode = 100);
break;
}
if ((this.km.kettei_c != 1)) {
break;
}
(n = ((this.km.kmo[0].selectedIndex - 2) | 0));
(this.co_p[n].meirei = this.co_p[n].waza_code[this.km.kmo[1].selectedIndex]);
if ((((this.co_p[n].syurui == 2100) && (this.co_p[n].meirei != 1)) && (this.ranInt$1(3) == 0))) {
(this.co_p[n].meirei = 35);
this.km.initMessagebox$4(3, 8, 70, 192);
this.km.addItem$2(3, (this.co_p[n].name + "は、なまけている。"));
this.km.active$1(3);
this.km.openTimeMessage$5(11, 344, 8, 160, this.co_p[n].name);
this.km.addItem$2(11, "コマネチ、コマネチ。");
(this.km.kmo[11].item_int[0] = 40);
this.km.off$1(1);
(this.km.mode = 320);
break;
}
this.km.off$1(1);
this.km.active$1(0);
(this.km.mode = 100);
break;
}
case 310:
{
if ((this.km.cancel_c == 1)) {
this.km.off$1(3);
this.km.active$1(0);
(this.km.mode = 100);
break;
}
if ((this.km.kettei_c != 1)) {
break;
}
this.km.off$1(3);
(this.km.mode = 320);
var n = ((this.km.kmo[0].selectedIndex - 2) | 0);
this.km.initSerifubox$5(3, 8, 70, 192, this.co_p[n].name);
this.km.addItem$2(3, "コマネチ、コマネチ。");
this.km.active$1(3);
break;
}
case 320:
{
if (((this.km.cancel_c != 1) && (this.km.kettei_c != 1))) {
break;
}
this.km.off$1(3);
this.km.active$1(0);
(this.km.mode = 100);
break;
}
case 400:
{
if ((this.km.cancel_c == 1)) {
this.km.off$1(2);
this.km.active$1(1);
(this.km.mode = 200);
break;
}
if ((this.km.kettei_c != 1)) {
break;
}
this.km.initSelectbox$5(4, 240, 24, 120, "どうする？");
this.km.addItem$2(4, "使う");
this.km.addItem$2(4, "捨てる");
this.km.addItem$2(4, "説明");
this.km.active$1(4);
(this.km.mode = 420);
break;
}
case 410:
{
if ((this.km.cancel_c == 1)) {
this.km.off$1(3);
this.km.active$1(1);
(this.km.mode = 200);
break;
}
if ((this.km.kettei_c != 1)) {
break;
}
this.km.off$1(3);
this.km.off$1(1);
this.km.active$1(0);
(this.km.mode = 100);
break;
}
case 420:
{
if ((this.km.cancel_c == 1)) {
this.km.off$1(4);
this.km.active$1(2);
(this.km.mode = 400);
break;
}
if ((this.km.kettei_c != 1)) {
break;
}
if ((this.km.getSelectedIndex$1(4) == 0)) {
(this.item_useID = this.km.getSelectedIndex$1(2));
if (((this.item[this.item_useID] >= 10) && (this.item[this.item_useID] <= 19))) {
this.km.initMessagebox$4(3, 240, 104, 208);
this.km.addItem$2(3, (this.item_data_name[this.item[this.item_useID]] + "には、"));
this.km.addItem$2(3, (this.waza_dname[this.item_data_wazacode[this.item[this.item_useID]]] + "が、記録されていた。"));
this.km.active$1(3);
(this.km.mode = 1100);
break;
}
if (((this.item[this.item_useID] >= 5) && (this.item[this.item_useID] <= 7))) {
this.km.initIdlist$0();
var n = 0;
while ((n <= 5)) {
if (!(((((this.item[this.item_useID] == 5) && (this.co_p[n].pb_type == 1)) || ((this.item[this.item_useID] == 6) && (this.co_p[n].pb_type == 2))) || ((this.item[this.item_useID] == 7) && (this.co_p[n].pb_type == 3))) || (this.co_p[n].c != 10))) {
(this.km.idlist_item[this.km.idlist_kazu] = n);
++this.km.idlist_kazu;
}
++n;
}
if ((this.km.idlist_kazu <= 0)) {
this.km.initMessagebox$4(3, 240, 104, 192);
this.km.addItem$2(3, "入れ替える場所が、ありません。");
this.km.active$1(3);
(this.km.mode = 150);
break;
}
this.km.initSelectbox$5(5, 240, 104, 160, "何番目と入れ替える？");
(n = 0);
while ((n <= ((this.km.idlist_kazu - 1) | 0))) {
var n3 = ((this.km.idlist_item[n] + 1) | 0);
this.km.addItem$2(5, (("" + n3) + "番目"));
++n;
}
this.km.active$1(5);
(this.km.mode = 1200);
break;
}
this.km.initIdlist$0();
var n = 0;
while ((n <= 6)) {
if ((this.co_p[n].syurui >= 1100)) {
(this.km.idlist_item[this.km.idlist_kazu] = n);
++this.km.idlist_kazu;
}
++n;
}
this.km.initSelectbox$5(5, 240, 104, 120, "誰に？");
(n = 0);
while ((n <= ((this.km.idlist_kazu - 1) | 0))) {
this.km.addItem$2(5, this.co_p[this.km.idlist_item[n]].name);
++n;
}
this.km.active$1(5);
(this.km.mode = 450);
break;
}
if ((this.km.getSelectedIndex$1(4) == 1)) {
(this.item_useID = this.km.getSelectedIndex$1(2));
this.km.initMessagebox$4(3, 240, 104, 176);
this.km.addItem$2(3, (this.item_data_name[this.item[this.item_useID]] + "を、捨てた。"));
this.km.active$1(3);
this.itemDelItem$1(this.item_useID);
this.itemNarabikae$0();
(this.km.mode = 470);
break;
}
if ((this.km.getSelectedIndex$1(4) != 2)) {
break;
}
(this.item_useID = this.km.getSelectedIndex$1(2));
this.km.initSerifubox$6(3, 240, 104, 176, this.item_data_name[this.item[this.item_useID]], Color.yellow);
this.km.addItem$2(3, this.item_data_setumei[this.item[this.item_useID]]);
this.km.active$1(3);
(this.km.mode = 480);
break;
}
case 450:
{
if ((this.km.cancel_c == 1)) {
this.km.off$1(5);
this.km.active$1(4);
(this.km.mode = 420);
break;
}
if ((this.km.kettei_c != 1)) {
break;
}
(this.km.mode = 460);
(this.item_useID = this.km.getSelectedIndex$1(2));
var n = this.km.idlist_item[this.km.getSelectedIndex$1(5)];
if ((this.item[this.item_useID] == 1)) {
if ((this.co_p[n].syurui <= 1000)) {
this.km.initSerifubox$5(3, 8, 8, 192, this.co_j.name);
if ((this.co_j.seibetu == 1)) {
this.km.addItem$2(3, (("あれっ。" + this.co_p[n].name) + "が、いないわ。"));
}
else {
this.km.addItem$2(3, (("あれっ。" + this.co_p[n].name) + "が、いないぞ。"));
}
this.km.active$1(3);
}
else {
if ((n == 6)) {
if ((this.co_j.hp < this.co_j.hp_max)) {
this.itemDelItem$1(this.item_useID);
(this.co_p[n].hp = this.co_p[n].hp_max);
this.itemNarabikae$0();
this.km.initSerifubox$5(3, 8, 8, 160, this.co_j.name);
this.km.addItem$2(3, (this.item_data_name[1] + "を、塗ろっと。"));
if ((this.co_j.seibetu == 1)) {
this.km.addItem$2(3, "これで、もう痛くないわ。");
}
else {
this.km.addItem$2(3, "これで、もう痛くないぞ。");
}
this.km.active$1(3);
}
else {
this.itemDelItem$1(this.item_useID);
(this.co_p[n].hp = this.co_p[n].hp_max);
this.itemNarabikae$0();
this.km.initSerifubox$5(3, 8, 8, 160, this.co_j.name);
this.km.addItem$2(3, (this.item_data_name[1] + "を、塗ろっと。"));
this.km.addItem$2(3, "どこも痛くないけど。");
this.km.active$1(3);
}
}
else {
if ((this.co_p[n].hp < this.co_p[n].hp_max)) {
this.itemDelItem$1(this.item_useID);
(this.co_p[n].hp = this.co_p[n].hp_max);
this.itemNarabikae$0();
this.km.initDoubleSerifubox$5(3, 8, 8, 192, this.co_j.name);
if ((this.co_j.seibetu == 1)) {
this.km.addItem$2(3, (this.item_data_name[1] + "を、塗ってあげるわ。"));
}
else {
this.km.addItem$2(3, (this.item_data_name[1] + "を、塗るよ。"));
}
this.km.addItem$2(3, this.co_p[n].name);
this.km.addItem$2(3, "わーい。もう、痛くないよ。");
this.km.active$1(3);
}
else {
this.km.initDoubleSerifubox$5(3, 8, 8, 192, this.co_j.name);
if ((this.co_j.seibetu == 1)) {
this.km.addItem$2(3, (this.item_data_name[1] + "を、塗ってあげるわ。"));
}
else {
this.km.addItem$2(3, (this.item_data_name[1] + "を、塗るよ。"));
}
this.km.addItem$2(3, this.co_p[n].name);
if ((this.co_p[n].seibetu == 1)) {
this.km.addItem$2(3, "痛くないです。");
}
else {
this.km.addItem$2(3, "痛くなんかないもーん。");
}
this.km.addItem$2(3, "持ち物は、節約してね。");
this.km.active$1(3);
}
}
}
}
else {
if ((this.item[this.item_useID] == 2)) {
if ((this.co_p[n].syurui <= 1000)) {
this.km.initSerifubox$5(3, 8, 8, 192, this.co_j.name);
if ((this.co_j.seibetu == 1)) {
this.km.addItem$2(3, (("あれっ。" + this.co_p[n].name) + "が、いないわ。"));
}
else {
this.km.addItem$2(3, (("あれっ。" + this.co_p[n].name) + "が、いないぞ。"));
}
this.km.active$1(3);
}
else {
if ((n == 6)) {
this.itemDelItem$1(this.item_useID);
this.itemNarabikae$0();
this.km.initSerifubox$5(3, 8, 8, 192, this.co_j.name);
this.km.addItem$2(3, (this.item_data_name[2] + "を、飲もっと。"));
this.km.addItem$2(3, "人間が飲んでも、意味ないけど。");
this.km.active$1(3);
}
else {
if ((this.co_p[n].pp < this.co_p[n].pp_max)) {
this.itemDelItem$1(this.item_useID);
(this.co_p[n].pp = this.co_p[n].pp_max);
this.itemNarabikae$0();
this.km.initDoubleSerifubox$5(3, 8, 8, 208, this.co_j.name);
if ((this.co_j.seibetu == 1)) {
this.km.addItem$2(3, (this.item_data_name[2] + "を、飲んでちょうだい。"));
}
else {
this.km.addItem$2(3, (this.item_data_name[2] + "を、飲んでくれ。"));
}
this.km.addItem$2(3, this.co_p[n].name);
this.km.addItem$2(3, "わーい。元気になったよ。");
this.km.active$1(3);
}
else {
this.km.initDoubleSerifubox$5(3, 8, 8, 208, this.co_j.name);
if ((this.co_j.seibetu == 1)) {
this.km.addItem$2(3, (this.item_data_name[2] + "を、飲んでちょうだい。"));
}
else {
this.km.addItem$2(3, (this.item_data_name[2] + "を、飲んでくれ。"));
}
this.km.addItem$2(3, this.co_p[n].name);
if ((this.co_p[n].seibetu == 1)) {
this.km.addItem$2(3, "わたし、元気だから、飲まないよ。");
}
else {
this.km.addItem$2(3, "ぼく、元気だから、飲まないよ。");
}
this.km.addItem$2(3, "持ち物は、節約してね。");
this.km.active$1(3);
}
}
}
}
else {
if ((this.item[this.item_useID] == 3)) {
if ((this.co_p[n].syurui <= 1000)) {
this.km.initSerifubox$5(3, 8, 8, 192, this.co_j.name);
if ((this.co_j.seibetu == 1)) {
this.km.addItem$2(3, (("あれっ。" + this.co_p[n].name) + "が、いないわ。"));
}
else {
this.km.addItem$2(3, (("あれっ。" + this.co_p[n].name) + "が、いないぞ。"));
}
this.km.active$1(3);
}
else {
if ((n == 6)) {
this.itemDelItem$1(this.item_useID);
this.co_p[n].addHP$1(80);
this.itemNarabikae$0();
this.km.initSerifubox$5(3, 8, 8, 208, this.co_j.name);
if ((this.co_j.seibetu == 1)) {
this.km.addItem$2(3, (this.item_data_name[3] + "は、香ばしくて、おいしいわ。"));
}
else {
this.km.addItem$2(3, (this.item_data_name[3] + "は、香ばしくて、おいしい。"));
}
this.km.active$1(3);
}
else {
this.itemDelItem$1(this.item_useID);
this.co_p[n].addHP$1(80);
this.co_p[n].addPP$1(30);
this.itemNarabikae$0();
this.km.initDoubleSerifubox$5(3, 8, 8, 192, this.co_j.name);
if ((this.co_j.seibetu == 1)) {
this.km.addItem$2(3, (this.item_data_name[3] + "を、食べてちょうだい。"));
}
else {
this.km.addItem$2(3, (this.item_data_name[3] + "を、食べてくれ。"));
}
this.km.addItem$2(3, this.co_p[n].name);
this.km.addItem$2(3, "もぐもぐ。おいしい。");
this.km.active$1(3);
}
}
}
else {
if ((this.item[this.item_useID] == 4)) {
if ((this.co_p[n].syurui <= 1000)) {
if ((this.co_j.seibetu == 1)) {
this.km.initSerifubox$5(3, 8, 8, 224, this.co_j.name);
this.km.addItem$2(3, (("あれっ。" + this.co_p[n].name) + "が、いないわ。残念。"));
}
else {
this.km.initSerifubox$5(3, 8, 8, 192, this.co_j.name);
this.km.addItem$2(3, (("あれっ。" + this.co_p[n].name) + "が、いないぞ。"));
}
this.km.active$1(3);
}
else {
if ((n == 6)) {
this.itemDelItem$1(this.item_useID);
(this.co_p[n].hp = 0);
this.itemNarabikae$0();
this.km.initSerifubox$5(3, 120, 73, 208, this.co_j.name);
if ((this.co_j.seibetu == 1)) {
this.km.addItem$2(3, (("もぐもぐ。おいしい、" + this.name_dokukinoko_s) + "ね。"));
this.km.addItem$2(3, "でも、お腹がいたくて、もうダメ。");
}
else {
this.km.addItem$2(3, (("もぐもぐ。おいしい、" + this.name_dokukinoko_s) + "だな。"));
this.km.addItem$2(3, "でも、お腹がいたくて、もうダメだ。");
}
this.km.active$1(3);
(this.km.mode = 700);
(this.co_j.c = 1250);
}
else {
this.itemDelItem$1(this.item_useID);
this.itemNarabikae$0();
(this.co_p[n].hp = 0);
(this.co_p[n].pp = 0);
if ((this.co_p[n].c >= 1000)) {
(this.co_p[n].c = 210);
(this.co_p[n].vy = -175);
}
this.km.initDoubleSerifubox$5(3, 8, 8, 216, this.co_j.name);
if ((this.co_j.seibetu == 1)) {
this.km.addItem$2(3, (this.name_dokukinoko_s + "を食べてね。おいしいわよお。"));
}
else {
this.km.addItem$2(3, (this.name_dokukinoko_s + "を、食べてくれ。おいしいぞお。"));
}
this.km.addItem$2(3, this.co_p[n].name);
this.km.addItem$2(3, "わーい。もぐもぐ、ぐえっ！");
if ((this.co_p[n].seibetu == 1)) {
this.km.addItem$2(3, "わたし、もうダメ。");
}
else {
this.km.addItem$2(3, "ぼく、もうダメ。");
}
this.km.active$1(3);
}
}
}
else {
if ((this.item[this.item_useID] == 8)) {
if ((this.co_p[n].syurui <= 1000)) {
this.km.initSerifubox$5(3, 8, 8, 192, this.co_j.name);
if ((this.co_j.seibetu == 1)) {
this.km.addItem$2(3, (("あれっ。" + this.co_p[n].name) + "が、いないわ。"));
}
else {
this.km.addItem$2(3, (("あれっ。" + this.co_p[n].name) + "が、いないぞ。"));
}
this.km.active$1(3);
}
else {
if ((n == 6)) {
this.itemDelItem$1(this.item_useID);
this.itemNarabikae$0();
this.km.initSerifubox$5(3, 8, 8, 256, this.co_j.name);
if ((this.co_j.seibetu == 1)) {
this.km.addItem$2(3, "あたし、砲丸投げの選手に、あこがれてたの。");
this.km.addItem$2(3, "えいっ、やーー！");
this.km.addItem$2(3, "あらっ、どこかへ飛んでっちゃったわ。");
}
else {
this.km.addItem$2(3, "オリンピックの砲丸投げの選手に、ぜったい、");
this.km.addItem$2(3, "なってやるぜ。どりゃーー！");
this.km.addItem$2(3, "あれっ、どこかへ飛んでっちゃった。");
}
this.km.active$1(3);
}
else {
this.km.initDoubleSerifubox$5(3, 8, 8, 256, this.co_j.name);
if ((this.co_j.seibetu == 1)) {
this.km.addItem$2(3, (this.name_kinnotama_s + "を、背中に乗せてあげるわ。"));
}
else {
this.km.addItem$2(3, (this.name_kinnotama_s + "を、背中に乗せてみてくれ。"));
}
this.km.addItem$2(3, this.co_p[n].name);
this.km.addItem$2(3, "ううっ、重いです。つぶれちゃいますぅ。");
this.km.active$1(3);
}
}
}
}
}
}
}
this.km.off$1(1);
this.km.off$1(2);
this.km.off$1(4);
this.km.off$1(5);
break;
}
case 460:
{
if (((this.km.cancel_c != 1) && (this.km.kettei_c != 1))) {
break;
}
this.km.off$1(3);
this.km.active$1(0);
(this.km.mode = 100);
break;
}
case 470:
{
if (((this.km.cancel_c != 1) && (this.km.kettei_c != 1))) {
break;
}
this.km.off$1(3);
this.km.off$1(1);
this.km.off$1(2);
this.km.off$1(4);
this.km.active$1(0);
(this.km.mode = 100);
break;
}
case 480:
{
if ((this.km.cancel_c == 1)) {
this.km.off$1(3);
this.km.active$1(4);
(this.km.mode = 420);
break;
}
if ((this.km.kettei_c != 1)) {
break;
}
this.km.off$1(3);
this.km.off$1(1);
this.km.off$1(2);
this.km.off$1(4);
this.km.active$1(0);
(this.km.mode = 100);
break;
}
case 500:
{
if ((this.km.cancel_c == 1)) {
this.km.off$1(2);
this.km.active$1(1);
(this.km.mode = 200);
break;
}
if ((this.km.kettei_c != 1)) {
break;
}
var n = this.km.idlist_item[this.km.getSelectedIndex$1(2)];
if ((n == 6)) {
this.km.initJibunstatusbox$4(3, 198, 32, 144);
this.km.active$1(3);
}
else {
this.km.initPetstatusbox$5(3, 184, 32, 144, n);
this.km.active$1(3);
this.km.openWazaZokuseiBox$6(11, 336, 58, 168, "技のタイプ", this.co_p[n].zokusei);
var n4 = 0;
while ((n4 <= 9)) {
var n5 = this.co_p[n].waza_code[n4];
if ((n5 >= 3)) {
this.km.addItem$3(11, this.co_p[n].waza_name[n4], this.waza_zokusei[n5]);
}
++n4;
}
}
(this.km.mode = 510);
break;
}
case 510:
{
if ((this.km.cancel_c == 1)) {
this.km.off$1(3);
this.km.off$1(11);
this.km.active$1(2);
(this.km.mode = 500);
break;
}
if ((this.km.kettei_c != 1)) {
break;
}
this.km.off$1(1);
this.km.off$1(2);
this.km.off$1(3);
this.km.off$1(11);
this.km.active$1(0);
(this.km.mode = 100);
break;
}
case 600:
{
if ((this.km.cancel_c == 1)) {
this.km.off$1(2);
this.km.active$1(1);
(this.km.mode = 200);
if ((this.co_dt.c <= 0)) {
break;
}
(this.co_dt.c = 120);
break;
}
if ((this.km.kettei_c != 1)) {
break;
}
if ((this.km.getSelectedIndex$1(2) == 0)) {
if ((this.j_okozukai < 200)) {
this.km.initSerifubox$5(3, 192, 138, 256, this.name_dragontaxy);
this.km.addItem$2(3, "お金が足りないので、ゲームオーバーです。");
this.km.active$1(3);
(this.km.mode = 610);
break;
}
(this.j_okozukai = ((this.j_okozukai - 200) | 0));
(this.mode = 90);
break;
}
this.km.off$1(2);
this.km.off$1(1);
this.km.active$1(0);
(this.km.mode = 100);
if ((this.co_dt.c <= 0)) {
break;
}
(this.co_dt.c = 120);
break;
}
case 610:
{
if (((this.km.cancel_c != 1) && (this.km.kettei_c != 1))) {
break;
}
(this.mode = 300);
break;
}
case 620:
{
if ((this.km.cancel_c == 1)) {
this.km.off$1(3);
this.km.active$1(1);
(this.km.mode = 200);
if ((this.co_dt.c <= 0)) {
break;
}
(this.co_dt.c = 120);
break;
}
if ((this.km.kettei_c != 1)) {
break;
}
this.km.off$1(3);
this.km.off$1(1);
this.km.active$1(0);
(this.km.mode = 100);
if ((this.co_dt.c <= 0)) {
break;
}
(this.co_dt.c = 120);
break;
}
case 650:
{
if (((this.km.cancel_c != 1) && (this.km.kettei_c != 1))) {
break;
}
if ((this.j_okozukai < 200)) {
this.km.initSerifubox$5(4, 188, 128, 256, this.name_dragontaxy);
this.km.addItem$2(4, "お金が足りないので、ゲームオーバーです。");
this.km.active$1(4);
(this.km.mode = 610);
break;
}
(this.j_okozukai = ((this.j_okozukai - 200) | 0));
(this.mode = 90);
break;
}
case 700:
{
if (((this.km.cancel_c != 1) && (this.km.kettei_c != 1))) {
break;
}
if (((this.co_dt.c == 0) || (this.co_dt.c == 120))) {
(this.co_dt.c = 100);
(this.co_dt.x = ((this.maps.wx + 378) | 0));
(this.co_dt.y = ((this.maps.wy - 64) | 0));
}
if (((this.debug_mode >= 1) && (this.debug_mode <= 4))) {
this.km.initSerifubox$5(4, 188, 128, 160, this.name_dragontaxy);
this.km.addItem$2(4, "ゲームオーバーです。");
this.km.active$1(4);
(this.km.mode = 610);
break;
}
this.km.initSerifubox$5(4, 188, 128, 192, this.name_dragontaxy);
this.km.addItem$2(4, "救出費用は、200円です。");
this.km.active$1(4);
(this.km.mode = 650);
break;
}
case 1000:
{
if ((this.km.cancel2_c == 1)) {
this.km.off$1(6);
this.km.active$1(2);
(this.km.mode = 210);
break;
}
if ((this.km.kettei2_c != 1)) {
break;
}
if ((this.km.name_code[0] <= 1)) {
this.km.off$1(6);
this.km.initMessagebox$4(3, 208, 82, 232);
this.km.addItem$2(3, "ニックネームが、入力されていません。");
this.km.active$1(3);
(this.km.mode = 150);
break;
}
var n = this.km.idlist_item[this.km.getSelectedIndex$1(2)];
(this.co_p[n].name = this.km.getNameString$0());
this.km.off$1(6);
(this.co_p[n].name_df = false);
this.km.initSerifubox$5(3, 208, 82, 160, this.co_p[n].name);
this.km.addItem$2(3, "これからも、よろしくね！");
this.km.active$1(3);
(this.km.mode = 150);
break;
}
case 1100:
{
if ((this.km.cancel_c == 1)) {
this.km.off$1(3);
this.km.active$1(4);
(this.km.mode = 420);
break;
}
if ((this.km.kettei_c != 1)) {
break;
}
this.km.off$1(1);
this.km.off$1(2);
this.km.off$1(4);
this.km.off$1(3);
this.km.initSelectbox$5(2, 8, 8, 232, (this.waza_dname[this.item_data_wazacode[this.item[this.item_useID]]] + "を、覚えさせますか？"));
this.km.addItem$2(2, "はい");
this.km.addItem$2(2, "いいえ");
this.km.active$1(2);
(this.km.mode = 1110);
break;
}
case 1110:
{
if ((this.km.cancel_c == 1)) {
this.km.off$1(2);
this.km.active$1(0);
(this.km.mode = 100);
break;
}
if ((this.km.kettei_c != 1)) {
break;
}
if ((this.km.getSelectedIndex$1(2) == 0)) {
this.km.initIdlist$0();
var n = 0;
while ((n <= 5)) {
if ((this.co_p[n].syurui >= 1100)) {
(this.km.idlist_item[this.km.idlist_kazu] = n);
++this.km.idlist_kazu;
}
++n;
}
if ((this.km.idlist_kazu <= 0)) {
this.km.initSerifubox$5(3, 160, 36, 168, this.co_j.name);
this.km.initMessagebox$4(3, 8, 72, 224);
this.km.addItem$2(3, "技を覚えさせるペットが、いません。");
this.km.active$1(3);
(this.km.mode = 150);
break;
}
this.km.initSelectbox$5(4, 8, 72, 120, "誰に？");
(n = 0);
while ((n <= ((this.km.idlist_kazu - 1) | 0))) {
this.km.addItem$2(4, this.co_p[this.km.idlist_item[n]].name);
++n;
}
this.km.active$1(4);
(this.km.mode = 1120);
break;
}
this.km.off$1(2);
this.km.active$1(0);
(this.km.mode = 100);
break;
}
case 1120:
{
if ((this.km.cancel_c == 1)) {
this.km.off$1(4);
this.km.active$1(2);
(this.km.mode = 1110);
break;
}
if ((this.km.kettei_c != 1)) {
break;
}
var n = this.km.idlist_item[this.km.getSelectedIndex$1(4)];
if ((this.co_p[n].syurui <= 1000)) {
this.km.initSerifubox$5(3, 136, 72, 192, this.co_j.name);
if ((this.co_j.seibetu == 1)) {
this.km.addItem$2(3, (("あれっ。" + this.co_p[n].name) + "が、いないわ。"));
}
else {
this.km.addItem$2(3, (("あれっ。" + this.co_p[n].name) + "が、いないぞ。"));
}
this.km.active$1(3);
(this.km.mode = 150);
}
else {
if (((this.co_p[n].tuikawaza[0] > 0) && (this.co_p[n].tuikawaza[1] > 0))) {
this.km.initSerifubox$5(3, 136, 72, 144, this.co_p[n].name);
this.km.addItem$2(3, "そんなに、たくさん、");
this.km.addItem$2(3, "覚えられないよ。");
this.km.active$1(3);
(this.km.mode = 150);
}
else {
var string = this.waza_dname[this.item_data_wazacode[this.item[this.item_useID]]];
this.km.initSerifubox$5(3, 136, 72, 176, this.co_p[n].name);
this.km.addItem$2(3, (string + "を、覚えたよ！"));
this.km.active$1(3);
this.co_p[n].insertWaza$2(this.item_data_wazacode[this.item[this.item_useID]], string);
if ((this.co_p[n].tuikawaza[0] == 0)) {
(this.co_p[n].tuikawaza[0] = this.item_data_wazacode[this.item[this.item_useID]]);
}
else {
(this.co_p[n].tuikawaza[1] = this.item_data_wazacode[this.item[this.item_useID]]);
}
this.itemDelItem$1(this.item_useID);
this.itemNarabikae$0();
}
}
(this.km.mode = 150);
break;
}
case 1200:
{
if ((this.km.cancel_c == 1)) {
this.km.off$1(5);
this.km.active$1(4);
(this.km.mode = 420);
break;
}
if ((this.km.kettei_c != 1)) {
break;
}
var n = this.km.idlist_item[this.km.getSelectedIndex$1(5)];
this.km.initMessagebox$4(6, 320, 128, 172);
if ((this.item[this.item_useID] == 5)) {
(this.co_p[n].pb_type = 1);
this.km.addItem$2(6, (this.item_data_name[5] + "を、装備した。"));
}
else {
if ((this.item[this.item_useID] == 6)) {
(this.co_p[n].pb_type = 2);
this.km.addItem$2(6, (this.item_data_name[6] + "を、装備した。"));
}
else {
(this.co_p[n].pb_type = 3);
this.km.addItem$2(6, (this.item_data_name[7] + "を、装備した。"));
}
}
this.km.active$1(6);
this.itemDelItem$1(this.item_useID);
this.itemNarabikae$0();
(this.km.mode = 150);
break;
}
case 1300:
{
if ((this.km.cancel_c == 1)) {
this.km.off$1(8);
this.km.off$1(2);
this.km.active$1(1);
(this.km.mode = 200);
break;
}
if ((this.km.kettei_c != 1)) {
break;
}
var n = this.km.idlist_item[this.km.getSelectedIndex$1(2)];
this.km.initZukanbox$4(3, 130, 72, ((1000 + Math.imul(n, 100)) | 0));
this.km.active$1(3);
(this.km.mode = 1310);
break;
}
case 1310:
{
if ((this.km.cancel_c == 1)) {
this.km.off$1(3);
this.km.active$1(2);
(this.km.mode = 1300);
break;
}
if ((this.km.kettei_c != 1)) {
break;
}
this.km.off$1(3);
this.km.off$1(2);
this.km.off$1(8);
this.km.off$1(1);
this.km.active$1(0);
(this.km.mode = 100);
break;
}
case 1330:
{
if ((this.km.cancel_c == 1)) {
this.km.off$1(8);
this.km.off$1(2);
this.km.active$1(1);
(this.km.mode = 200);
break;
}
if ((this.km.kettei_c != 1)) {
break;
}
if ((this.km.getSelectedIndex$1(2) >= 14)) {
if ((this.ig.zukanGetMituketakazu$0() >= 30)) {
this.km.initSelectbox$5(4, 372, 22, 110, "どれを見る？");
}
else {
this.km.initSelectbox$5(4, 372, 72, 110, "どれを見る？");
}
var n = 14;
while ((n <= ((this.km.idlist_kazu - 1) | 0))) {
this.km.addItem$2(4, this.ig.zukan_name[this.km.idlist_item[n]]);
++n;
}
this.km.active$1(4);
(this.km.mode = 1350);
break;
}
var n = this.km.idlist_item[this.km.getSelectedIndex$1(2)];
this.km.initZukanbox$4(3, 130, 72, ((1000 + Math.imul(n, 100)) | 0));
this.km.active$1(3);
(this.km.mode = 1340);
break;
}
case 1340:
{
if ((this.km.cancel_c == 1)) {
this.km.off$1(3);
this.km.active$1(2);
(this.km.mode = 1330);
break;
}
if ((this.km.kettei_c != 1)) {
break;
}
this.km.off$1(3);
this.km.off$1(2);
this.km.off$1(8);
this.km.off$1(1);
this.km.active$1(0);
(this.km.mode = 100);
break;
}
case 1350:
{
if ((this.km.cancel_c == 1)) {
this.km.off$1(4);
this.km.active$1(2);
(this.km.mode = 1330);
break;
}
if ((this.km.kettei_c != 1)) {
break;
}
var n = this.km.idlist_item[((this.km.getSelectedIndex$1(4) + 14) | 0)];
this.km.initZukanbox$4(3, 130, 72, ((1000 + Math.imul(n, 100)) | 0));
this.km.active$1(3);
(this.km.mode = 1360);
break;
}
case 1360:
{
if ((this.km.cancel_c == 1)) {
this.km.off$1(3);
this.km.active$1(4);
(this.km.mode = 1350);
break;
}
if ((this.km.kettei_c != 1)) {
break;
}
this.km.off$1(3);
this.km.off$1(2);
this.km.off$1(4);
this.km.off$1(8);
this.km.off$1(1);
this.km.active$1(0);
(this.km.mode = 100);
break;
}
case 2000:
{
if ((this.km.kettei_c != 1)) {
break;
}
if ((this.system_mode == 10)) {
(this.gym_p_id[0][0] = 0);
(this.gym_boxno[0][0] = this.km.idlist_item[this.km.getSelectedIndex$1(1)]);
this.copyMonsterObject$2(this.co_box[this.gym_boxno[0][0]], this.co_p[0]);
this.km.initIdlist$0();
var n = 0;
while ((n <= 7)) {
if (((this.co_box[n].syurui >= 1100) && (n != this.gym_boxno[0][0]))) {
(this.km.idlist_item[this.km.idlist_kazu] = n);
++this.km.idlist_kazu;
}
++n;
}
this.km.initSelectbox$5(2, 144, 8, 128, "右のペットは？");
(n = 0);
while ((n <= ((this.km.idlist_kazu - 1) | 0))) {
this.km.addItem$2(2, this.co_box[this.km.idlist_item[n]].name);
++n;
}
this.km.active$1(2);
(this.km.mode = 2010);
break;
}
(this.gym_p_id[0][0] = this.km.idlist_item[this.km.getSelectedIndex$1(1)]);
this.km.initIdlist$0();
var n = 0;
while ((n <= 5)) {
if (((this.co_p[n].syurui >= 1100) && (n != this.gym_p_id[0][0]))) {
(this.km.idlist_item[this.km.idlist_kazu] = n);
++this.km.idlist_kazu;
}
++n;
}
this.km.initSelectbox$5(2, 144, 8, 128, "右のペットは？");
(n = 0);
while ((n <= ((this.km.idlist_kazu - 1) | 0))) {
this.km.addItem$2(2, this.co_p[this.km.idlist_item[n]].name);
++n;
}
this.km.active$1(2);
(this.km.mode = 2010);
break;
}
case 2010:
{
if ((this.km.cancel_c == 1)) {
this.km.off$1(2);
this.km.active$1(1);
(this.km.mode = 2000);
if ((this.system_mode == 10)) {
this.km.initIdlist$0();
var n = 0;
while ((n <= 7)) {
if ((this.co_box[n].syurui >= 1100)) {
(this.km.idlist_item[this.km.idlist_kazu] = n);
++this.km.idlist_kazu;
}
++n;
}
}
else {
this.km.initIdlist$0();
var n = 0;
while ((n <= 5)) {
if ((this.co_p[n].syurui >= 1100)) {
(this.km.idlist_item[this.km.idlist_kazu] = n);
++this.km.idlist_kazu;
}
++n;
}
}
break;
}
if ((this.km.kettei_c != 1)) {
break;
}
if ((this.system_mode == 10)) {
(this.gym_p_id[1][0] = 3);
(this.gym_boxno[1][0] = this.km.idlist_item[this.km.getSelectedIndex$1(2)]);
this.copyMonsterObject$2(this.co_box[this.gym_boxno[1][0]], this.co_p[3]);
}
else {
(this.gym_p_id[1][0] = this.km.idlist_item[this.km.getSelectedIndex$1(2)]);
}
this.km.initSelectbox$5(4, 240, 60, 184, "これで、よろしいですか？");
this.km.addItem$2(4, "はい");
this.km.addItem$2(4, "いいえ");
this.km.active$1(4);
(this.km.mode = 2020);
break;
}
case 2020:
{
if ((this.km.cancel_c == 1)) {
this.km.off$1(4);
this.km.active$1(2);
(this.km.mode = 2010);
break;
}
if ((this.km.kettei_c != 1)) {
break;
}
if ((this.km.getSelectedIndex$1(4) == 0)) {
this.km.off$1(4);
this.km.off$1(1);
this.km.off$1(2);
this.km.active$1(-1);
this.init4$0();
var n = this.gym_p_id[0][0];
(this.co_p[n].c = 200);
(this.co_p[n].x = this.co_j.x);
(this.co_p[n].y = this.co_j.y);
(this.co_p[n].vx = ((this.co_p[n].type == 1) ? 30 : 90));
(this.co_p[n].vy = -175);
this.wSetGymFromPet$2(0, this.gym_p_id[1][0]);
(this.co_w[0].c = 200);
(this.co_w[0].x = this.co_w[10].x);
(this.co_w[0].y = this.co_w[10].y);
(this.co_w[0].vx = ((this.co_w[0].type == 1) ? -30 : -90));
(this.co_w[0].vy = -175);
this.km.initDoubleSerifubox$5(5, 344, 8, 160, this.co_j.name);
if ((this.co_j.seibetu == 1)) {
this.km.addItem$2(5, (("がんばって！ " + this.co_p[this.gym_p_id[0][0]].name) + "！"));
}
else {
this.km.addItem$2(5, (("行け！ " + this.co_p[this.gym_p_id[0][0]].name) + "！"));
}
this.km.addItem$2(5, this.gym_name);
this.km.addItem$2(5, (("こちらは、" + this.co_p[this.gym_p_id[1][0]].name) + "です。"));
this.km.active$1(5);
(this.km.mode = 2030);
break;
}
this.km.off$1(2);
this.km.off$1(4);
this.km.active$1(1);
(this.km.mode = 2000);
if ((this.system_mode == 10)) {
this.km.initIdlist$0();
var n = 0;
while ((n <= 7)) {
if ((this.co_box[n].syurui >= 1100)) {
(this.km.idlist_item[this.km.idlist_kazu] = n);
++this.km.idlist_kazu;
}
++n;
}
}
else {
this.km.initIdlist$0();
var n = 0;
while ((n <= 5)) {
if ((this.co_p[n].syurui >= 1100)) {
(this.km.idlist_item[this.km.idlist_kazu] = n);
++this.km.idlist_kazu;
}
++n;
}
}
break;
}
case 2030:
{
if (((this.km.kettei_c != 1) && (this.km.cancel_c != 1))) {
break;
}
this.km.off$1(5);
this.km.active$1(-1);
(this.km.mode = 2035);
if (((this.co_p[this.gym_p_id[0][0]].x != ((this.co_j.x + 64) | 0)) || (this.co_w[0].x != ((this.co_w[10].x - 64) | 0)))) {
break;
}
this.mSet$9(((this.maps.wx + 208) | 0), ((this.maps.wy + 41) | 0), 1600, 150, 0, 0, 1, 0, 0);
break;
}
case 2035:
{
if (((this.co_p[this.gym_p_id[0][0]].x != ((this.co_j.x + 64) | 0)) || (this.co_w[0].x != ((this.co_w[10].x - 64) | 0)))) {
break;
}
this.mSet$9(((this.maps.wx + 208) | 0), ((this.maps.wy + 41) | 0), 1600, 150, 0, 0, 1, 0, 0);
(this.km.mode = 2040);
(this.mode_c = 0);
break;
}
case 2040:
{
++this.mode_c;
if ((this.mode_c < 30)) {
break;
}
(this.km.mode = 2100);
break;
}
case 2100:
{
if ((this.co_p[this.gym_p_id[0][0]].c == 210)) {
(this.gym_kachimake = 2);
(this.km.mode = 2200);
(this.mode_c = 0);
}
if ((this.co_w[0].c != 210)) {
break;
}
(this.gym_kachimake = 1);
(this.km.mode = 2200);
(this.mode_c = 0);
break;
}
case 2200:
{
++this.mode_c;
if ((((this.mode_c < 2) && (this.co_p[this.gym_p_id[0][0]].c == 210)) && (this.co_w[0].c == 210))) {
(this.gym_kachimake = 3);
}
if ((this.mode_c < 10)) {
break;
}
if ((this.gym_kachimake == 1)) {
this.km.initMessagebox$4(3, 244, 42, 240);
this.km.addItem$2(3, (this.co_p[this.gym_p_id[1][0]].name + "が、先に戦闘不能になったので、"));
this.km.addItem$2(3, (this.co_p[this.gym_p_id[0][0]].name + "の勝ちです。"));
this.km.active$1(3);
(this.km.mode = 2210);
break;
}
if ((this.gym_kachimake == 2)) {
this.km.initMessagebox$4(3, 244, 42, 244);
this.km.addItem$2(3, (this.co_p[this.gym_p_id[0][0]].name + "が、先に戦闘不能になったので、"));
this.km.addItem$2(3, (this.co_p[this.gym_p_id[1][0]].name + "の勝ちです。"));
this.km.active$1(3);
(this.km.mode = 2210);
break;
}
this.km.initMessagebox$4(3, 244, 42, 244);
this.km.addItem$2(3, "両方が、同時に戦闘不能になったので、");
this.km.addItem$2(3, "引き分けです。");
this.km.active$1(3);
(this.km.mode = 2210);
break;
}
case 2210:
{
if (((this.km.kettei_c != 1) && (this.km.cancel_c != 1))) {
break;
}
if (this.gym_gr_f) {
if ((this.gym_kachimake == 1)) {
(this.km.mode = ((this.gym_shiaino >= 2) ? 2320 : 2310));
this.km.initSerifubox$5(4, 168, 104, 176, this.gym_name);
this.addSerifuGym$3(4, 3, 1);
this.km.active$1(4);
break;
}
if ((this.gym_kachimake == 2)) {
this.km.initSerifubox$5(4, 168, 104, 176, this.gym_name);
this.addSerifuGym$3(4, 4, 1);
this.km.active$1(4);
(this.km.mode = 2300);
break;
}
this.km.initSerifubox$5(4, 168, 104, 176, this.gym_name);
this.addSerifuGym$3(4, 5, 1);
this.km.active$1(4);
(this.km.mode = 2300);
break;
}
this.km.initSelectbox$5(4, 174, 104, 164, "もう一度、やりますか？");
this.km.addItem$2(4, "はい");
this.km.addItem$2(4, "いいえ");
this.km.active$1(4);
(this.km.mode = 2220);
break;
}
case 2220:
{
if ((this.km.cancel_c == 1)) {
this.km.off$1(4);
this.km.active$1(3);
(this.km.mode = 2210);
break;
}
if ((this.km.kettei_c != 1)) {
break;
}
if ((this.km.getSelectedIndex$1(4) == 0)) {
this.km.off$1(4);
this.km.off$1(3);
this.init4$0();
this.km.initIdlist$0();
if ((this.system_mode == 10)) {
var n = 0;
while ((n <= 7)) {
if ((this.co_box[n].syurui >= 1100)) {
(this.km.idlist_item[this.km.idlist_kazu] = n);
++this.km.idlist_kazu;
}
++n;
}
this.km.initSelectbox$5(1, 8, 8, 128, "左のペットは？");
(n = 0);
while ((n <= ((this.km.idlist_kazu - 1) | 0))) {
this.km.addItem$2(1, this.co_box[this.km.idlist_item[n]].name);
++n;
}
this.km.active$1(1);
}
else {
var n = 0;
while ((n <= 5)) {
if ((this.co_p[n].syurui >= 1100)) {
(this.km.idlist_item[this.km.idlist_kazu] = n);
++this.km.idlist_kazu;
}
++n;
}
this.km.initSelectbox$5(1, 8, 8, 128, "左のペットは？");
(n = 0);
while ((n <= ((this.km.idlist_kazu - 1) | 0))) {
this.km.addItem$2(1, this.co_p[this.km.idlist_item[n]].name);
++n;
}
this.km.active$1(1);
}
(this.km.mode = 2000);
break;
}
if ((this.system_mode == 10)) {
(this.mode = 50);
break;
}
(this.mode = 91);
break;
}
case 2300:
{
if ((this.km.cancel_c == 1)) {
this.km.off$1(4);
this.km.active$1(3);
(this.km.mode = 2210);
break;
}
if ((this.km.kettei_c != 1)) {
break;
}
(this.mode = 91);
break;
}
case 2310:
{
if ((this.km.cancel_c == 1)) {
this.km.off$1(4);
this.km.active$1(3);
(this.km.mode = 2210);
break;
}
if ((this.km.kettei_c != 1)) {
break;
}
this.km.off$1(4);
this.km.off$1(3);
this.init4$0();
this.km.initIdlist$0();
var n = 0;
while ((n <= 5)) {
if ((this.co_p[n].syurui >= 1100)) {
(this.km.idlist_item[this.km.idlist_kazu] = n);
++this.km.idlist_kazu;
}
++n;
}
++this.gym_shiaino;
var n6 = ((this.gym_shiaino + 1) | 0);
this.km.initSelectboxSerifu$7(1, 8, 8, 128, (("第 " + n6) + " 試合"), "戦うペットは？", Color.yellow);
(n = 0);
while ((n <= ((this.km.idlist_kazu - 1) | 0))) {
this.km.addItem$2(1, this.co_p[this.km.idlist_item[n]].name);
++n;
}
this.km.active$1(1);
(this.km.mode = 2500);
break;
}
case 2320:
{
if ((this.km.cancel_c == 1)) {
this.km.off$1(4);
this.km.active$1(3);
(this.km.mode = 2210);
break;
}
if ((this.km.kettei_c != 1)) {
break;
}
(this.mode = 93);
break;
}
case 2500:
{
if ((this.km.kettei_c != 1)) {
break;
}
(this.gym_p_id[0][0] = this.km.idlist_item[this.km.getSelectedIndex$1(1)]);
(this.gym_p_id[1][0] = 7);
this.init4$0();
var n = this.gym_p_id[0][0];
(this.co_p[n].c = 200);
(this.co_p[n].x = this.co_j.x);
(this.co_p[n].y = this.co_j.y);
(this.co_p[n].vx = ((this.co_p[n].type == 1) ? 30 : 90));
(this.co_p[n].vy = -175);
this.copyMonsterObject$2(this.co_box[this.gym_shiaino], this.co_p[7]);
this.wSetGymFromPet$2(0, 7);
(this.co_w[0].c = 200);
(this.co_w[0].x = this.co_w[10].x);
(this.co_w[0].y = this.co_w[10].y);
(this.co_w[0].vx = ((this.co_w[0].type == 1) ? -30 : -90));
(this.co_w[0].vy = -175);
this.km.off$1(1);
this.km.initDoubleSerifubox$5(5, 344, 8, 160, this.co_j.name);
if ((this.co_j.seibetu == 1)) {
this.km.addItem$2(5, (("がんばって！ " + this.co_p[this.gym_p_id[0][0]].name) + "！"));
}
else {
this.km.addItem$2(5, (("行け！ " + this.co_p[this.gym_p_id[0][0]].name) + "！"));
}
this.km.addItem$2(5, this.gym_name);
this.addSerifuGym$3(5, ((8 + this.gym_shiaino) | 0), 2);
this.km.active$1(5);
(this.km.mode = 2030);
break;
}
case 3000:
{
if ((this.km.kettei_c != 1)) {
break;
}
if ((this.system_mode == 11)) {
(this.gym_p_id[0][0] = 0);
(this.gym_boxno[0][0] = this.km.idlist_item[this.km.getSelectedIndex$1(1)]);
this.copyMonsterObject$2(this.co_box[this.gym_boxno[0][0]], this.co_p[0]);
this.km.initIdlist$0();
var n = 0;
while ((n <= 7)) {
if (((this.co_box[n].syurui >= 1100) && (n != this.gym_boxno[0][0]))) {
(this.km.idlist_item[this.km.idlist_kazu] = n);
++this.km.idlist_kazu;
}
++n;
}
this.km.initSelectbox$5(2, 104, 54, 140, "左のチーム後は？");
(n = 0);
while ((n <= ((this.km.idlist_kazu - 1) | 0))) {
this.km.addItem$2(2, this.co_box[this.km.idlist_item[n]].name);
++n;
}
this.km.active$1(2);
(this.km.mode = 3010);
break;
}
(this.gym_p_id[0][0] = this.km.idlist_item[this.km.getSelectedIndex$1(1)]);
this.km.initIdlist$0();
var n = 0;
while ((n <= 5)) {
if (((this.co_p[n].syurui >= 1100) && (n != this.gym_p_id[0][0]))) {
(this.km.idlist_item[this.km.idlist_kazu] = n);
++this.km.idlist_kazu;
}
++n;
}
this.km.initSelectbox$5(2, 104, 54, 140, "左のチーム後は？");
(n = 0);
while ((n <= ((this.km.idlist_kazu - 1) | 0))) {
this.km.addItem$2(2, this.co_p[this.km.idlist_item[n]].name);
++n;
}
this.km.active$1(2);
(this.km.mode = 3010);
break;
}
case 3010:
{
if ((this.km.cancel_c == 1)) {
this.km.off$1(2);
this.km.active$1(1);
(this.km.mode = 3000);
if ((this.system_mode == 11)) {
this.km.initIdlist$0();
var n = 0;
while ((n <= 7)) {
if ((this.co_box[n].syurui >= 1100)) {
(this.km.idlist_item[this.km.idlist_kazu] = n);
++this.km.idlist_kazu;
}
++n;
}
}
else {
this.km.initIdlist$0();
var n = 0;
while ((n <= 5)) {
if ((this.co_p[n].syurui >= 1100)) {
(this.km.idlist_item[this.km.idlist_kazu] = n);
++this.km.idlist_kazu;
}
++n;
}
}
break;
}
if ((this.km.kettei_c != 1)) {
break;
}
if ((this.system_mode == 11)) {
(this.gym_p_id[0][1] = 1);
(this.gym_boxno[0][1] = this.km.idlist_item[this.km.getSelectedIndex$1(2)]);
this.copyMonsterObject$2(this.co_box[this.gym_boxno[0][1]], this.co_p[1]);
this.km.initIdlist$0();
var n = 0;
while ((n <= 7)) {
if ((((this.co_box[n].syurui >= 1100) && (n != this.gym_boxno[0][0])) && (n != this.gym_boxno[0][1]))) {
(this.km.idlist_item[this.km.idlist_kazu] = n);
++this.km.idlist_kazu;
}
++n;
}
this.km.initSelectbox$5(4, 268, 8, 140, "右のチーム前は？");
(n = 0);
while ((n <= ((this.km.idlist_kazu - 1) | 0))) {
this.km.addItem$2(4, this.co_box[this.km.idlist_item[n]].name);
++n;
}
this.km.active$1(4);
(this.km.mode = 3020);
break;
}
(this.gym_p_id[0][1] = this.km.idlist_item[this.km.getSelectedIndex$1(2)]);
this.km.initIdlist$0();
var n = 0;
while ((n <= 5)) {
if ((((this.co_p[n].syurui >= 1100) && (n != this.gym_p_id[0][0])) && (n != this.gym_p_id[0][1]))) {
(this.km.idlist_item[this.km.idlist_kazu] = n);
++this.km.idlist_kazu;
}
++n;
}
this.km.initSelectbox$5(4, 268, 8, 140, "右のチーム前は？");
(n = 0);
while ((n <= ((this.km.idlist_kazu - 1) | 0))) {
this.km.addItem$2(4, this.co_p[this.km.idlist_item[n]].name);
++n;
}
this.km.active$1(4);
(this.km.mode = 3020);
break;
}
case 3020:
{
if ((this.km.cancel_c == 1)) {
this.km.off$1(4);
this.km.active$1(2);
(this.km.mode = 3010);
if ((this.system_mode == 11)) {
this.km.initIdlist$0();
var n = 0;
while ((n <= 7)) {
if (((this.co_box[n].syurui >= 1100) && (n != this.gym_boxno[0][0]))) {
(this.km.idlist_item[this.km.idlist_kazu] = n);
++this.km.idlist_kazu;
}
++n;
}
}
else {
this.km.initIdlist$0();
var n = 0;
while ((n <= 5)) {
if (((this.co_p[n].syurui >= 1100) && (n != this.gym_p_id[0][0]))) {
(this.km.idlist_item[this.km.idlist_kazu] = n);
++this.km.idlist_kazu;
}
++n;
}
}
break;
}
if ((this.km.kettei_c != 1)) {
break;
}
if ((this.system_mode == 11)) {
(this.gym_p_id[1][0] = 2);
(this.gym_boxno[1][0] = this.km.idlist_item[this.km.getSelectedIndex$1(4)]);
this.copyMonsterObject$2(this.co_box[this.gym_boxno[1][0]], this.co_p[2]);
this.km.initIdlist$0();
var n = 0;
while ((n <= 7)) {
if (((((this.co_box[n].syurui >= 1100) && (n != this.gym_boxno[0][0])) && (n != this.gym_boxno[0][1])) && (n != this.gym_boxno[1][0]))) {
(this.km.idlist_item[this.km.idlist_kazu] = n);
++this.km.idlist_kazu;
}
++n;
}
this.km.initSelectbox$5(5, 364, 54, 140, "右のチーム後は？");
(n = 0);
while ((n <= ((this.km.idlist_kazu - 1) | 0))) {
this.km.addItem$2(5, this.co_box[this.km.idlist_item[n]].name);
++n;
}
this.km.active$1(5);
(this.km.mode = 3030);
break;
}
(this.gym_p_id[1][0] = this.km.idlist_item[this.km.getSelectedIndex$1(4)]);
this.km.initIdlist$0();
var n = 0;
while ((n <= 5)) {
if (((((this.co_p[n].syurui >= 1100) && (n != this.gym_p_id[0][0])) && (n != this.gym_p_id[0][1])) && (n != this.gym_p_id[1][0]))) {
(this.km.idlist_item[this.km.idlist_kazu] = n);
++this.km.idlist_kazu;
}
++n;
}
this.km.initSelectbox$5(5, 364, 54, 140, "右のチーム後は？");
(n = 0);
while ((n <= ((this.km.idlist_kazu - 1) | 0))) {
this.km.addItem$2(5, this.co_p[this.km.idlist_item[n]].name);
++n;
}
this.km.active$1(5);
(this.km.mode = 3030);
break;
}
case 3030:
{
if ((this.km.cancel_c == 1)) {
this.km.off$1(5);
this.km.active$1(4);
(this.km.mode = 3020);
if ((this.system_mode == 11)) {
this.km.initIdlist$0();
var n = 0;
while ((n <= 7)) {
if ((((this.co_box[n].syurui >= 1100) && (n != this.gym_boxno[0][0])) && (n != this.gym_boxno[0][1]))) {
(this.km.idlist_item[this.km.idlist_kazu] = n);
++this.km.idlist_kazu;
}
++n;
}
}
else {
this.km.initIdlist$0();
var n = 0;
while ((n <= 5)) {
if ((((this.co_p[n].syurui >= 1100) && (n != this.gym_p_id[0][0])) && (n != this.gym_p_id[0][1]))) {
(this.km.idlist_item[this.km.idlist_kazu] = n);
++this.km.idlist_kazu;
}
++n;
}
}
break;
}
if ((this.km.kettei_c != 1)) {
break;
}
if ((this.system_mode == 11)) {
(this.gym_p_id[1][1] = 3);
(this.gym_boxno[1][1] = this.km.idlist_item[this.km.getSelectedIndex$1(5)]);
this.copyMonsterObject$2(this.co_box[this.gym_boxno[1][1]], this.co_p[3]);
}
else {
(this.gym_p_id[1][1] = this.km.idlist_item[this.km.getSelectedIndex$1(5)]);
}
if ((this.system_mode == 11)) {
this.km.initSelectbox$5(6, 268, 162, 184, "これで、よろしいですか？");
}
else {
this.km.initSelectbox$5(6, 268, 134, 184, "これで、よろしいですか？");
}
this.km.addItem$2(6, "はい");
this.km.addItem$2(6, "いいえ");
this.km.active$1(6);
(this.km.mode = 3040);
break;
}
case 3040:
{
if ((this.km.cancel_c == 1)) {
this.km.off$1(6);
this.km.active$1(5);
(this.km.mode = 3030);
break;
}
if ((this.km.kettei_c != 1)) {
break;
}
if ((this.km.getSelectedIndex$1(6) == 0)) {
this.km.off$1(1);
this.km.off$1(2);
this.km.off$1(4);
this.km.off$1(5);
this.km.off$1(6);
this.km.active$1(-1);
(this.mode_c = 0);
this.init4$0();
var n = this.gym_p_id[0][1];
(this.co_p[n].c = 200);
(this.co_p[n].x = this.co_j.x);
(this.co_p[n].y = this.co_j.y);
(this.co_p[n].vx = ((this.co_p[n].type == 1) ? 20 : 100));
(this.co_p[n].vy = -175);
this.wSetGymFromPet$2(1, this.gym_p_id[1][1]);
(this.co_w[1].c = 200);
(this.co_w[1].x = this.co_w[10].x);
(this.co_w[1].y = this.co_w[10].y);
(this.co_w[1].vx = ((this.co_w[1].type == 1) ? -20 : -100));
(this.co_w[1].vy = -175);
this.km.initDoubleSerifubox$5(5, 311, 8, 196, this.co_j.name);
var string = ((this.co_p[this.gym_p_id[0][0]].name + "と、") + this.co_p[this.gym_p_id[0][1]].name);
if ((this.co_j.seibetu == 1)) {
this.km.addItem$2(5, (string + "よ！"));
}
else {
this.km.addItem$2(5, (("行け！ " + string) + "！"));
}
this.km.addItem$2(5, this.gym_name);
(string = (("こちらは、" + this.co_p[this.gym_p_id[1][0]].name) + "と、"));
this.km.addItem$2(5, string);
(string = (this.co_p[this.gym_p_id[1][1]].name + "です。"));
this.km.addItem$2(5, string);
this.km.active$1(5);
(this.km.mode = 3050);
break;
}
this.km.off$1(2);
this.km.off$1(4);
this.km.off$1(5);
this.km.off$1(6);
this.km.active$1(1);
(this.km.mode = 3000);
if ((this.system_mode == 11)) {
this.km.initIdlist$0();
var n = 0;
while ((n <= 7)) {
if ((this.co_box[n].syurui >= 1100)) {
(this.km.idlist_item[this.km.idlist_kazu] = n);
++this.km.idlist_kazu;
}
++n;
}
}
else {
this.km.initIdlist$0();
var n = 0;
while ((n <= 5)) {
if ((this.co_p[n].syurui >= 1100)) {
(this.km.idlist_item[this.km.idlist_kazu] = n);
++this.km.idlist_kazu;
}
++n;
}
}
break;
}
case 3050:
{
if (((this.km.kettei_c == 1) || (this.km.cancel_c == 1))) {
this.km.off$1(5);
this.km.active$1(-1);
(this.km.mode = 3060);
if (((((this.co_p[this.gym_p_id[0][0]].x == ((this.co_j.x + 128) | 0)) && (this.co_w[0].x == ((this.co_w[10].x - 128) | 0))) && (this.co_p[this.gym_p_id[0][1]].x == ((this.co_j.x + 64) | 0))) && (this.co_w[1].x == ((this.co_w[10].x - 64) | 0)))) {
this.mSet$9(((this.maps.wx + 208) | 0), ((this.maps.wy + 41) | 0), 1600, 150, 0, 0, 1, 0, 0);
(this.km.mode = 3070);
(this.mode_c = 0);
}
}
++this.mode_c;
if ((this.mode_c != 11)) {
break;
}
(this.mode_c = 12);
var n = this.gym_p_id[0][0];
(this.co_p[n].c = 200);
(this.co_p[n].x = this.co_j.x);
(this.co_p[n].y = this.co_j.y);
if ((this.co_p[n].type == 1)) {
(this.co_p[n].vx = 140);
if ((this.co_p[this.gym_p_id[0][1]].type == 0)) {
(this.co_p[n].vx = 30);
}
}
else {
(this.co_p[n].vx = 40);
if ((this.co_p[this.gym_p_id[0][1]].type == 1)) {
(this.co_p[n].vx = 60);
}
}
(this.co_p[n].vy = -175);
this.wSetGymFromPet$2(0, this.gym_p_id[1][0]);
(this.co_w[0].c = 200);
(this.co_w[0].x = this.co_w[10].x);
(this.co_w[0].y = this.co_w[10].y);
if ((this.co_w[0].type == 1)) {
(this.co_w[0].vx = -140);
if ((this.co_w[1].type == 0)) {
(this.co_w[0].vx = -30);
}
}
else {
(this.co_w[0].vx = -40);
if ((this.co_w[1].type == 1)) {
(this.co_w[0].vx = -60);
}
}
(this.co_w[0].vy = -175);
break;
}
case 3060:
{
if (((((this.co_p[this.gym_p_id[0][0]].x == ((this.co_j.x + 128) | 0)) && (this.co_w[0].x == ((this.co_w[10].x - 128) | 0))) && (this.co_p[this.gym_p_id[0][1]].x == ((this.co_j.x + 64) | 0))) && (this.co_w[1].x == ((this.co_w[10].x - 64) | 0)))) {
this.mSet$9(((this.maps.wx + 208) | 0), ((this.maps.wy + 41) | 0), 1600, 150, 0, 0, 1, 0, 0);
(this.km.mode = 3070);
(this.mode_c = 0);
}
++this.mode_c;
if ((this.mode_c != 11)) {
break;
}
(this.mode_c = 12);
var n = this.gym_p_id[0][0];
(this.co_p[n].c = 200);
(this.co_p[n].x = this.co_j.x);
(this.co_p[n].y = this.co_j.y);
if ((this.co_p[n].type == 1)) {
(this.co_p[n].vx = 140);
if ((this.co_p[this.gym_p_id[0][1]].type == 0)) {
(this.co_p[n].vx = 30);
}
}
else {
(this.co_p[n].vx = 40);
if ((this.co_p[this.gym_p_id[0][1]].type == 1)) {
(this.co_p[n].vx = 60);
}
}
(this.co_p[n].vy = -175);
this.wSetGymFromPet$2(0, this.gym_p_id[1][0]);
(this.co_w[0].c = 200);
(this.co_w[0].x = this.co_w[10].x);
(this.co_w[0].y = this.co_w[10].y);
if ((this.co_w[0].type == 1)) {
(this.co_w[0].vx = -140);
if ((this.co_w[1].type == 0)) {
(this.co_w[0].vx = -30);
}
}
else {
(this.co_w[0].vx = -40);
if ((this.co_w[1].type == 1)) {
(this.co_w[0].vx = -60);
}
}
(this.co_w[0].vy = -175);
break;
}
case 3070:
{
++this.mode_c;
if ((this.mode_c < 30)) {
break;
}
(this.km.mode = 3100);
break;
}
case 3100:
{
if (((this.co_p[this.gym_p_id[0][0]].c == 210) && (this.co_p[this.gym_p_id[0][1]].c == 210))) {
(this.gym_kachimake = 2);
(this.km.mode = 3200);
(this.mode_c = 0);
}
if (((this.co_w[0].c != 210) || (this.co_w[1].c != 210))) {
break;
}
(this.gym_kachimake = 1);
(this.km.mode = 3200);
(this.mode_c = 0);
break;
}
case 3200:
{
++this.mode_c;
if ((((((this.mode_c < 2) && (this.co_p[this.gym_p_id[0][0]].c == 210)) && (this.co_p[this.gym_p_id[0][1]].c == 210)) && (this.co_w[0].c == 210)) && (this.co_w[1].c == 210))) {
(this.gym_kachimake = 3);
}
if ((this.mode_c < 10)) {
break;
}
if ((this.gym_kachimake == 1)) {
this.km.initMessagebox$4(3, 217, 74, 290);
this.km.addItem$2(3, "右のチームの両方が、先に戦闘不能になったので、");
this.km.addItem$2(3, "左のチームの勝ちです。");
this.km.active$1(3);
(this.km.mode = 3210);
break;
}
if ((this.gym_kachimake == 2)) {
this.km.initMessagebox$4(3, 217, 74, 290);
this.km.addItem$2(3, "左のチームの両方が、先に戦闘不能になったので、");
this.km.addItem$2(3, "右のチームの勝ちです。");
this.km.active$1(3);
(this.km.mode = 3210);
break;
}
this.km.initMessagebox$4(3, 217, 74, 290);
this.km.addItem$2(3, "全てのペットが、同時に戦闘不能になったので、");
this.km.addItem$2(3, "引き分けです。");
this.km.active$1(3);
(this.km.mode = 3210);
break;
}
case 3210:
{
if (((this.km.kettei_c != 1) && (this.km.cancel_c != 1))) {
break;
}
this.km.initSelectbox$5(4, 174, 114, 164, "もう一度、やりますか？");
this.km.addItem$2(4, "はい");
this.km.addItem$2(4, "いいえ");
this.km.active$1(4);
(this.km.mode = 3220);
break;
}
case 3220:
{
if ((this.km.cancel_c == 1)) {
this.km.off$1(4);
this.km.active$1(3);
(this.km.mode = 3210);
break;
}
if ((this.km.kettei_c != 1)) {
break;
}
if ((this.km.getSelectedIndex$1(4) == 0)) {
this.km.off$1(4);
this.km.off$1(3);
this.init4$0();
if ((this.system_mode == 11)) {
this.km.initIdlist$0();
var n = 0;
while ((n <= 7)) {
if ((this.co_box[n].syurui >= 1100)) {
(this.km.idlist_item[this.km.idlist_kazu] = n);
++this.km.idlist_kazu;
}
++n;
}
this.km.initSelectbox$5(1, 8, 8, 128, "左のチーム前は？");
(n = 0);
while ((n <= ((this.km.idlist_kazu - 1) | 0))) {
this.km.addItem$2(1, this.co_box[this.km.idlist_item[n]].name);
++n;
}
this.km.active$1(1);
(this.km.mode = 3000);
break;
}
this.km.initIdlist$0();
var n = 0;
while ((n <= 5)) {
if ((this.co_p[n].syurui >= 1100)) {
(this.km.idlist_item[this.km.idlist_kazu] = n);
++this.km.idlist_kazu;
}
++n;
}
this.km.initSelectbox$5(1, 8, 8, 128, "左のチーム前は？");
(n = 0);
while ((n <= ((this.km.idlist_kazu - 1) | 0))) {
this.km.addItem$2(1, this.co_p[this.km.idlist_item[n]].name);
++n;
}
this.km.active$1(1);
(this.km.mode = 3000);
break;
}
if ((this.system_mode == 11)) {
(this.mode = 50);
break;
}
(this.mode = 91);
break;
}
case 5000:
{
if ((this.km.kettei_c != 1)) {
break;
}
if ((this.system_mode == 20)) {
(this.gym_p_id[0][0] = 0);
(this.gym_boxno[0][0] = this.km.idlist_item[this.km.getSelectedIndex$1(1)]);
this.copyMonsterObject$2(this.co_box[this.gym_boxno[0][0]], this.co_p[0]);
this.init4$0();
var n = this.gym_p_id[0][0];
(this.co_p[n].c = 200);
(this.co_p[n].x = this.co_j.x);
(this.co_p[n].y = this.co_j.y);
(this.co_p[n].vx = ((this.co_p[n].type == 1) ? 30 : 90));
(this.co_p[n].vy = -175);
this.km.initSerifubox$5(5, 344, 42, 160, this.co_j.name);
if ((this.co_j.seibetu == 1)) {
this.km.addItem$2(5, (("がんばって！ " + this.co_p[n].name) + "！"));
}
else {
this.km.addItem$2(5, (("行け！ " + this.co_p[n].name) + "！"));
}
this.km.active$1(5);
this.km.off$1(1);
(this.km.mode = 5030);
break;
}
(this.gym_p_id[0][0] = this.km.idlist_item[this.km.getSelectedIndex$1(1)]);
this.init4$0();
var n = this.gym_p_id[0][0];
(this.co_p[n].c = 200);
(this.co_p[n].x = this.co_j.x);
(this.co_p[n].y = this.co_j.y);
(this.co_p[n].vx = ((this.co_p[n].type == 1) ? 30 : 90));
(this.co_p[n].vy = -175);
this.km.initSerifubox$5(5, 344, 42, 160, this.co_j.name);
if ((this.co_j.seibetu == 1)) {
this.km.addItem$2(5, (("がんばって！ " + this.co_p[n].name) + "！"));
}
else {
this.km.addItem$2(5, (("行け！ " + this.co_p[n].name) + "！"));
}
this.km.active$1(5);
this.km.off$1(1);
(this.km.mode = 5030);
break;
}
case 5030:
{
if (((this.km.kettei_c != 1) && (this.km.cancel_c != 1))) {
break;
}
this.km.off$1(5);
(this.km.mode = 5035);
if ((this.co_p[this.gym_p_id[0][0]].x != ((this.co_j.x + 64) | 0))) {
break;
}
this.mSet$9(((this.maps.wx + 208) | 0), ((this.maps.wy + 41) | 0), 1600, 150, 0, 0, 1, 0, 0);
break;
}
case 5035:
{
if ((this.co_p[this.gym_p_id[0][0]].x != ((this.co_j.x + 64) | 0))) {
break;
}
this.mSet$9(((this.maps.wx + 208) | 0), ((this.maps.wy + 41) | 0), 1600, 150, 0, 0, 1, 0, 0);
(this.km.mode = 5040);
(this.mode_c = 0);
break;
}
case 5040:
{
++this.mode_c;
if ((this.mode_c < 30)) {
break;
}
(this.km.mode = 5100);
(this.co_p[this.gym_p_id[0][0]].gym_wc = 24);
break;
}
case 5100:
{
if ((this.co_p[this.gym_p_id[0][0]].x < this.race_goal_x)) {
(this.race_time = ((this.race_time + 70) | 0));
}
if ((this.km.kmo[4].c > 0)) {
if ((this.km.cancel_c == 1)) {
this.km.active$1(4);
this.km.off$1(4);
}
else {
if ((this.km.kettei_c == 1)) {
if ((this.km.getSelectedIndex$1(4) == 0)) {
(this.mode = ((this.system_mode == 20) ? 50 : 91));
}
else {
this.km.active$1(4);
this.km.off$1(4);
}
}
}
}
else {
if ((this.km.cancel_c == 1)) {
this.km.initSelectbox$5(4, 168, 88, 176, "レースを、中止しますか？");
this.km.addItem$2(4, "はい");
this.km.addItem$2(4, "いいえ");
this.km.active$1(4);
}
}
if ((this.co_p[this.gym_p_id[0][0]].x >= this.race_goal_x)) {
this.km.off$1(4);
this.km.initSerifubox$6(3, 144, 8, 152, "ゴールイン！", Color.yellow);
this.km.addItem$2(3, (this.co_p[this.gym_p_id[0][0]].name + "のタイムは、"));
var n = J.div(this.race_time, 1000);
this.km.addItem$2(3, (("" + n) + " 秒でした。"));
this.km.active$1(3);
(this.km.mode = 5200);
break;
}
if (((this.co_p[this.gym_p_id[0][0]].c == 1910) || (this.co_p[this.gym_p_id[0][0]].c == 1920))) {
this.km.off$1(4);
this.km.initSerifubox$6(3, 144, 8, 152, "失格", Color.yellow);
this.km.addItem$2(3, (this.co_p[this.gym_p_id[0][0]].name + "は、"));
var n = J.div(this.race_time, 1000);
this.km.addItem$2(3, "完走できませんでした。");
this.km.active$1(3);
(this.km.mode = 5200);
break;
}
if ((this.co_p[this.gym_p_id[0][0]].c != 210)) {
break;
}
this.km.off$1(4);
this.km.initSerifubox$6(3, 144, 8, 152, "失格", Color.yellow);
this.km.addItem$2(3, (this.co_p[this.gym_p_id[0][0]].name + "は、"));
var n = J.div(this.race_time, 1000);
this.km.addItem$2(3, "完走できませんでした。");
this.km.active$1(3);
(this.km.mode = 5200);
break;
}
case 5200:
{
if (((this.km.kettei_c != 1) && (this.km.cancel_c != 1))) {
break;
}
this.km.initSelectbox$5(4, 256, 64, 164, "もう一度、やりますか？");
this.km.addItem$2(4, "はい");
this.km.addItem$2(4, "いいえ");
this.km.active$1(4);
(this.km.mode = 5220);
break;
}
case 5220:
{
if ((this.km.cancel_c == 1)) {
this.km.off$1(4);
this.km.active$1(3);
(this.km.mode = 5200);
break;
}
if ((this.km.kettei_c != 1)) {
break;
}
if ((this.km.getSelectedIndex$1(4) == 0)) {
this.km.off$1(4);
this.km.off$1(3);
this.init4$0();
(this.maps.wx = ((this.co_j.x - 96) | 0));
(this.maps.wy = this.maps.wy_max);
if ((this.maps.wx < this.maps.wx_mini)) {
(this.maps.wx = this.maps.wx_mini);
}
else {
if ((this.maps.wx > this.maps.wx_max)) {
(this.maps.wx = this.maps.wx_max);
}
}
this.km.initIdlist$0();
if ((this.system_mode == 20)) {
var n = 0;
while ((n <= 7)) {
if (((this.co_box[n].syurui >= 1100) && (this.co_box[n].type == 0))) {
(this.km.idlist_item[this.km.idlist_kazu] = n);
++this.km.idlist_kazu;
}
++n;
}
this.km.initSelectboxSerifu$7(1, 8, 8, 144, "ペットレース ミニ", "誰が走る？", Color.yellow);
(n = 0);
while ((n <= ((this.km.idlist_kazu - 1) | 0))) {
this.km.addItem$2(1, this.co_box[this.km.idlist_item[n]].name);
++n;
}
this.km.active$1(1);
}
else {
var n = 0;
while ((n <= 5)) {
if ((this.co_p[n].syurui >= 1100)) {
if (this.race_f) {
if ((this.co_p[n].type == 0)) {
(this.km.idlist_item[this.km.idlist_kazu] = n);
++this.km.idlist_kazu;
}
}
else {
(this.km.idlist_item[this.km.idlist_kazu] = n);
++this.km.idlist_kazu;
}
}
++n;
}
this.km.initSelectboxSerifu$7(1, 8, 8, 144, "ペットレース ミニ", "誰が走る？", Color.yellow);
(n = 0);
while ((n <= ((this.km.idlist_kazu - 1) | 0))) {
this.km.addItem$2(1, this.co_p[this.km.idlist_item[n]].name);
++n;
}
this.km.active$1(1);
(n = 0);
while ((n <= 99)) {
this.co_w[n].init$0();
++n;
}
(this.w_kazu = -1);
this.mapsMakeStageData$1(this.stage);
}
(this.km.mode = 5000);
break;
}
(this.mode = ((this.system_mode == 20) ? 50 : 91));
}
}
}
pMove$0() {
var n = 0;
var n2 = 0;
while ((n2 <= 5)) {
if (((this.co_p[n2].syurui >= 1000) && (this.co_p[n2].c > 20))) {
var monsterObject = this.co_p[n2];
var n3 = monsterObject.x;
var n4 = monsterObject.y;
if ((monsterObject.c >= 1000)) {
switch (n) {
case 0:
{
(monsterObject.positionX = 64);
break;
}
case 1:
{
(monsterObject.positionX = 128);
break;
}
case 2:
{
(monsterObject.positionX = 96);
break;
}
case 3:
{
(monsterObject.positionX = 32);
break;
}
case 4:
{
(monsterObject.positionX = 160);
break;
}
default:
{
(monsterObject.positionX = 192);
}
}
++n;
if (this.gym_f) {
(monsterObject.positionX = (this.gym_double_f ? ((n2 == this.gym_p_id[0][0]) ? 128 : 64) : 64));
}
}
(monsterObject.taiatari_f = false);
switch (monsterObject.c) {
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
if (((this.maps.getBGCode$2((((n3 = ((n3 + J.div(monsterObject.vx, 10)) | 0)) + 15) | 0), ((n4 + 6) | 0)) >= 20) || (this.maps.getBGCode$2(((n3 + 15) | 0), ((n4 + 25) | 0)) >= 20))) {
(n3 = ((monsterObject.vx > 0) ? ((Math.imul(J.div(((n3 + 15) | 0), 32), 32) - 16) | 0) : ((((Math.imul(J.div(((n3 + 15) | 0), 32), 32) + 32) | 0) - 15) | 0)));
(monsterObject.vx = 0);
}
if (((this.co_p[n2].pb_type == 2) && (monsterObject.c1 < 12))) {
++monsterObject.c1;
}
else {
(monsterObject.vy = ((monsterObject.vy + 25) | 0));
if ((monsterObject.vy > 180)) {
(monsterObject.vy = 180);
}
}
(n4 = ((n4 + J.div(monsterObject.vy, 10)) | 0));
if ((monsterObject.vy < 0)) {
if ((this.maps.getBGCode$2(((n3 + 15) | 0), ((n4 + 6) | 0)) >= 20)) {
(n4 = ((((Math.imul(J.div(((n4 + 6) | 0), 32), 32) + 32) | 0) - 6) | 0));
(monsterObject.vy = 0);
}
}
else {
if (((monsterObject.vy > 0) && (this.maps.getBGCode$2(((n3 + 15) | 0), ((n4 + 25) | 0)) >= 20))) {
(n4 = ((Math.imul(J.div(((n4 + 25) | 0), 32), 32) - 26) | 0));
(monsterObject.vx = 0);
(monsterObject.c = 110);
}
}
if ((n4 >= this.ochiru_y)) {
if (this.race_f) {
(monsterObject.c = 1910);
}
else {
(monsterObject.syurui = 0);
(monsterObject.c = 0);
}
}
if ((((monsterObject.vy >= 50) && (Math.abs(((n3 - this.co_j.x) | 0)) <= 16)) && (Math.abs(((n4 - this.co_j.y) | 0)) <= 23))) {
(monsterObject.c = 10);
}
var n5 = 0;
while ((n5 <= this.w_kazu)) {
var monsterObject2 = this.co_w[n5];
if ((((monsterObject2.c >= 1000) && (Math.abs(((n3 - monsterObject2.x) | 0)) <= 22)) && (Math.abs(((n4 - monsterObject2.y) | 0)) <= 23))) {
if (((monsterObject2.syurui >= 4700) && (monsterObject2.syurui <= 4900))) {
this.km.openTimeMessage$5(11, 296, 8, 208, this.co_j.name);
if ((this.co_j.seibetu == 1)) {
this.km.addItem$2(11, "大き過ぎて、ゲットできないみたい。");
}
else {
this.km.addItem$2(11, "大き過ぎて、ゲットできないや。");
}
}
else {
(monsterObject2.c = 40);
(monsterObject.c = 300);
(monsterObject.c1 = 0);
(monsterObject.c2 = n5);
(n3 = monsterObject2.x);
(n4 = monsterObject2.y);
(monsterObject.vx = 0);
(monsterObject.vy = -125);
break;
}
}
++n5;
}
(monsterObject.pt = ((this.co_p[n2].pb_type > 0) ? ((27 + Math.imul(this.co_p[n2].pb_type, 10)) | 0) : 83));
(monsterObject.pth = 0);
break;
}
case 110:
{
if (((Math.abs(((n3 - this.co_j.x) | 0)) <= 16) && (Math.abs(((n4 - this.co_j.y) | 0)) <= 23))) {
(monsterObject.c = 10);
}
(monsterObject.pt = ((this.co_p[n2].pb_type > 0) ? ((27 + Math.imul(this.co_p[n2].pb_type, 10)) | 0) : 83));
(monsterObject.pth = 0);
break;
}
case 200:
{
if (((this.maps.getBGCode$2((((n3 = ((n3 + J.div(monsterObject.vx, 10)) | 0)) + 15) | 0), ((n4 + 6) | 0)) >= 20) || (this.maps.getBGCode$2(((n3 + 15) | 0), ((n4 + 25) | 0)) >= 20))) {
(n3 = ((monsterObject.vx > 0) ? ((Math.imul(J.div(((n3 + 15) | 0), 32), 32) - 16) | 0) : ((((Math.imul(J.div(((n3 + 15) | 0), 32), 32) + 32) | 0) - 15) | 0)));
(monsterObject.vx = 0);
}
(monsterObject.vy = ((monsterObject.vy + 25) | 0));
if ((monsterObject.vy > 180)) {
(monsterObject.vy = 180);
}
(n4 = ((n4 + J.div(monsterObject.vy, 10)) | 0));
if ((monsterObject.vy < 0)) {
if ((this.maps.getBGCode$2(((n3 + 15) | 0), ((n4 + 6) | 0)) >= 20)) {
(n4 = ((((Math.imul(J.div(((n4 + 6) | 0), 32), 32) + 32) | 0) - 6) | 0));
(monsterObject.vy = 0);
}
}
else {
if (((monsterObject.vy > 0) && (this.maps.getBGCode$2(((n3 + 15) | 0), ((n4 + 31) | 0)) >= 20))) {
(n4 = ((Math.imul(J.div(((n4 + 31) | 0), 32), 32) - 32) | 0));
(monsterObject.vx = 0);
(monsterObject.c = 1000);
(monsterObject.muki = 1);
(monsterObject.vx = 0);
(monsterObject.meirei = 0);
(monsterObject.move_wc = ((30 + Math.imul(n2, 3)) | 0));
if (this.gym_f) {
(monsterObject.move_wc = 25);
}
}
}
if (((monsterObject.type == 1) && (monsterObject.vy >= 0))) {
(monsterObject.c = 2000);
(monsterObject.muki = 1);
(monsterObject.vx = 0);
(monsterObject.meirei = 0);
(monsterObject.move_wc = ((30 + Math.imul(n2, 3)) | 0));
if (this.gym_f) {
(monsterObject.move_wc = 25);
}
}
if ((n4 >= this.ochiru_y)) {
if (this.race_f) {
(monsterObject.c = 1910);
}
else {
(monsterObject.syurui = 0);
(monsterObject.c = 0);
}
}
(monsterObject.pt = ((this.co_p[n2].pb_type > 0) ? ((26 + Math.imul(this.co_p[n2].pb_type, 10)) | 0) : 82));
(monsterObject.pth = 0);
break;
}
case 210:
{
(monsterObject.vy = ((monsterObject.vy + 25) | 0));
if ((monsterObject.vy > 180)) {
(monsterObject.vy = 180);
}
(n4 = ((n4 + J.div(monsterObject.vy, 10)) | 0));
if ((monsterObject.vy < 0)) {
if ((this.maps.getBGCode$2(((n3 + 15) | 0), ((n4 + 6) | 0)) >= 20)) {
(n4 = ((((Math.imul(J.div(((n4 + 6) | 0), 32), 32) + 32) | 0) - 6) | 0));
(monsterObject.vy = 0);
}
}
else {
if (((monsterObject.vy > 0) && (this.maps.getBGCode$2(((n3 + 15) | 0), ((n4 + 25) | 0)) >= 20))) {
(n4 = ((Math.imul(J.div(((n4 + 25) | 0), 32), 32) - 26) | 0));
}
}
if ((n4 >= this.ochiru_y)) {
if (this.race_f) {
(monsterObject.c = 1910);
}
else {
(monsterObject.syurui = 0);
(monsterObject.c = 0);
}
}
if ((((monsterObject.vy >= 0) && (Math.abs(((n3 - this.co_j.x) | 0)) <= 16)) && (Math.abs(((n4 - this.co_j.y) | 0)) <= 23))) {
(monsterObject.c = 20);
}
(monsterObject.pt = (((monsterObject.hp > 0) && (monsterObject.pp > 0)) ? ((this.co_p[n2].pb_type > 0) ? ((26 + Math.imul(this.co_p[n2].pb_type, 10)) | 0) : 82) : ((this.co_p[n2].pb_type > 0) ? ((29 + Math.imul(this.co_p[n2].pb_type, 10)) | 0) : 88)));
(monsterObject.pth = 0);
break;
}
case 300:
{
(monsterObject.vy = ((monsterObject.vy + 25) | 0));
if ((monsterObject.vy > 180)) {
(monsterObject.vy = 180);
}
(n4 = ((n4 + J.div(monsterObject.vy, 10)) | 0));
if ((monsterObject.vy < 0)) {
if ((this.maps.getBGCode$2(((n3 + 15) | 0), ((n4 + 6) | 0)) >= 20)) {
(n4 = ((((Math.imul(J.div(((n4 + 6) | 0), 32), 32) + 32) | 0) - 6) | 0));
(monsterObject.vy = 0);
}
}
else {
if (((monsterObject.vy > 0) && (this.maps.getBGCode$2(((n3 + 15) | 0), ((n4 + 25) | 0)) >= 20))) {
(n4 = ((Math.imul(J.div(((n4 + 25) | 0), 32), 32) - 26) | 0));
(monsterObject.vx = 0);
(monsterObject.c = 310);
}
}
if ((n4 >= this.ochiru_y)) {
(monsterObject.syurui = 0);
(monsterObject.c = 0);
this.co_w[monsterObject.c2].init$0();
}
(monsterObject.pt = ((this.g_ac == 0) ? ((this.co_p[n2].pb_type > 0) ? ((29 + Math.imul(this.co_p[n2].pb_type, 10)) | 0) : 88) : ((this.co_p[n2].pb_type > 0) ? ((27 + Math.imul(this.co_p[n2].pb_type, 10)) | 0) : 83)));
(monsterObject.pth = 0);
break;
}
case 310:
{
var n6 = 0;
++monsterObject.c1;
if ((monsterObject.c1 == 22)) {
(n6 = monsterObject.c2);
if ((((this.co_w[n6].hp > J.div(this.co_w[n6].hp_max, 2)) && (this.co_w[n6].doku_c <= 0)) && (this.co_p[n2].pb_type != 3))) {
(monsterObject.c = 110);
(this.co_w[n6].x = n3);
(this.co_w[n6].y = ((n4 - 6) | 0));
if ((this.co_w[n6].c_kihon == 11000)) {
(this.co_w[n6].c = 11000);
(this.co_w[n6].c1 = 0);
(this.co_w[n6].vx = 0);
(this.co_w[n6].vy = 0);
(this.co_w[n6].gym_wc = 0);
}
else {
if ((this.co_w[n6].c_kihon == 12000)) {
(this.co_w[n6].c = 12020);
(this.co_w[n6].vx = 0);
(this.co_w[n6].vy = 0);
(this.co_w[n6].c1 = 0);
(this.co_w[n6].gym_wc = 0);
}
}
this.km.openTimeMessage$5(11, 312, 8, 192, this.co_j.name);
if ((this.co_j.seibetu == 1)) {
this.km.addItem$2(11, "戦って、弱らせないと、ダメかも。");
}
else {
this.km.addItem$2(11, "バトルで、弱らせないと、ダメか。");
}
}
}
else {
if ((monsterObject.c1 >= 46)) {
(n6 = monsterObject.c2);
(this.co_w[n6].pb_type = monsterObject.pb_type);
(this.co_w[n6].x = n3);
(this.co_w[n6].y = n4);
monsterObject.initSyurui$2(this.co_w[n6].syurui, this);
(monsterObject.c = 210);
(monsterObject.x = this.co_w[n6].x);
(monsterObject.y = this.co_w[n6].y);
(monsterObject.hp = this.co_w[n6].hp);
(monsterObject.pp = this.co_w[n6].pp);
(monsterObject.seibetu = this.co_w[n6].seibetu);
(monsterObject.pb_type = this.co_w[n6].pb_type);
(monsterObject.id = this.co_j.id);
if (((this.ranInt$1(14) == 0) && ((this.system_mode == 1) || (this.system_mode == 2)))) {
(n6 = 0);
if (((monsterObject.syurui == 2800) || (monsterObject.syurui == 2600))) {
(n6 = 55);
}
else {
if (((monsterObject.syurui == 1500) || (monsterObject.syurui == 3400))) {
(n6 = 45);
}
else {
if (((monsterObject.syurui == 2400) || (monsterObject.syurui == 2300))) {
(n6 = 56);
}
else {
if (((monsterObject.syurui == 1800) || (monsterObject.syurui == 3500))) {
(n6 = 57);
}
else {
if (((monsterObject.syurui == 1600) || (monsterObject.syurui == 3600))) {
(n6 = 58);
}
else {
if (((monsterObject.syurui == 2100) || (monsterObject.syurui == 3100))) {
(n6 = 59);
}
}
}
}
}
}
if ((n6 > 0)) {
(monsterObject.tuikawaza[0] = n6);
monsterObject.insertWaza$2(n6, this.waza_dname[n6]);
}
}
if (!this.ig.zukan_tukamaeta_f[monsterObject.mn]) {
this.addScore$1(10);
}
else {
this.addScore$1(2);
}
this.ig.zukanTourokuPet$0();
this.km.openTimeMessage$5(11, 312, 8, 192, this.co_j.name);
if ((this.co_j.seibetu == 1)) {
this.km.addItem$2(11, (monsterObject.name + "を、ゲットしたわ。"));
}
else {
this.km.addItem$2(11, (monsterObject.name + "を、ゲットしたぜ！"));
}
this.co_w[n6].init$0();
}
}
(monsterObject.pt = ((this.g_ac == 0) ? ((this.co_p[n2].pb_type > 0) ? ((29 + Math.imul(this.co_p[n2].pb_type, 10)) | 0) : 88) : ((this.co_p[n2].pb_type > 0) ? ((27 + Math.imul(this.co_p[n2].pb_type, 10)) | 0) : 83)));
(monsterObject.pth = 0);
break;
}
case 1000:
{
if (((this.race_f && (this.km.mode >= 5100)) && (this.km.mode <= 5300))) {
if ((n3 < ((this.race_goal_x + 64) | 0))) {
(monsterObject.vx = monsterObject.speed);
(monsterObject.move_wc = 0);
}
else {
(monsterObject.vx = 0);
(monsterObject.move_wc = 25);
}
}
if ((monsterObject.move_wc > 0)) {
(monsterObject.move_wc = ((monsterObject.speed > 0) ? --monsterObject.move_wc : 10));
if ((n3 == ((this.co_j.x + monsterObject.positionX) | 0))) {
(monsterObject.vx = 0);
(monsterObject.move_wc = ((25 + Math.imul(n2, 8)) | 0));
if (this.gym_f) {
(monsterObject.move_wc = 30);
}
}
if ((monsterObject.move_wc <= 0)) {
if ((n3 > ((this.co_j.x + monsterObject.positionX) | 0))) {
(monsterObject.vx = -monsterObject.speed);
}
else {
if ((n3 < ((this.co_j.x + monsterObject.positionX) | 0))) {
(monsterObject.vx = monsterObject.speed);
}
else {
(monsterObject.vx = 0);
(monsterObject.move_wc = ((25 + Math.imul(n2, 5)) | 0));
if (this.gym_f) {
(monsterObject.move_wc = 30);
}
}
}
}
}
else {
(n3 = ((n3 + J.div(monsterObject.vx, 10)) | 0));
if ((monsterObject.vx < 0)) {
if (((this.maps.getBGCode$2(((n3 + 15) | 0), n4) >= 20) || (this.maps.getBGCode$2(((n3 + 15) | 0), ((n4 + 31) | 0)) >= 20))) {
(n3 = ((((Math.imul(J.div(((n3 + 15) | 0), 32), 32) + 32) | 0) - 15) | 0));
}
if ((n3 <= ((this.co_j.x + monsterObject.positionX) | 0))) {
(n3 = ((this.co_j.x + monsterObject.positionX) | 0));
(monsterObject.move_wc = ((30 + Math.imul(n2, 5)) | 0));
(monsterObject.vx = 0);
if (this.gym_f) {
(monsterObject.move_wc = 30);
}
}
}
else {
if (((this.maps.getBGCode$2(((n3 + 15) | 0), n4) >= 20) || (this.maps.getBGCode$2(((n3 + 15) | 0), ((n4 + 31) | 0)) >= 20))) {
(n3 = ((Math.imul(J.div(((n3 + 15) | 0), 32), 32) - 16) | 0));
if ((((this.race_f && !monsterObject.jumpkanou_f) && (this.km.mode == 5100)) && (n3 < ((this.race_goal_x + 64) | 0)))) {
(monsterObject.c = 1920);
}
}
if (((this.race_f && (this.km.mode >= 5100)) && (this.km.mode <= 5300))) {
if ((n3 >= ((this.race_goal_x + 64) | 0))) {
(n3 = ((this.race_goal_x + 64) | 0));
(monsterObject.move_wc = 25);
(monsterObject.vx = 0);
}
}
else {
if ((n3 >= ((this.co_j.x + monsterObject.positionX) | 0))) {
(n3 = ((this.co_j.x + monsterObject.positionX) | 0));
(monsterObject.move_wc = ((30 + Math.imul(n2, 5)) | 0));
(monsterObject.vx = 0);
if (this.gym_f) {
(monsterObject.move_wc = 30);
}
}
}
}
}
if ((this.maps.getBGCode$2(((n3 + 15) | 0), ((n4 + 32) | 0)) < 20)) {
(monsterObject.c = 1100);
(monsterObject.vy = 0);
(monsterObject.meirei = 0);
(monsterObject.muki = ((monsterObject.vx < 0) ? 0 : ((monsterObject.vx > 0) ? 1 : 1)));
}
if ((monsterObject.pp <= 0)) {
(monsterObject.meirei = 1);
if (!this.gym_f) {
this.km.openTimeMessage$5(11, 344, 8, 160, monsterObject.name);
if ((monsterObject.seibetu == 1)) {
this.km.addItem$2(11, "わたし、もう疲れた。");
}
else {
this.km.addItem$2(11, "ぼく、もう疲れた。");
}
}
}
if ((monsterObject.vx == 0)) {
(monsterObject.pt = monsterObject.spt[0]);
(monsterObject.pth = 1);
}
else {
if ((monsterObject.vx < 0)) {
(monsterObject.pt = monsterObject.spt[((1 + this.g_ac) | 0)]);
(monsterObject.pth = 0);
}
else {
(monsterObject.pt = monsterObject.spt[((1 + this.g_ac) | 0)]);
(monsterObject.pth = 1);
}
}
if ((monsterObject.meirei <= 0)) {
break;
}
if ((monsterObject.meirei == 14)) {
(n3 = Math.imul(J.div(((n3 + 15) | 0), 32), 32));
}
this.pWazaC$4(monsterObject, n3, n4, n2);
break;
}
case 1100:
{
var s = 0;
var s2 = 0;
if ((monsterObject.meirei == 1)) {
(monsterObject.c = 210);
(monsterObject.vy = -175);
}
(n3 = ((n3 + J.div(monsterObject.vx, 10)) | 0));
if ((monsterObject.vx < 0)) {
if (((this.maps.getBGCode$2(((n3 + 15) | 0), n4) >= 20) || (this.maps.getBGCode$2(((n3 + 15) | 0), ((n4 + 31) | 0)) >= 20))) {
(n3 = ((((Math.imul(J.div(((n3 + 15) | 0), 32), 32) + 32) | 0) - 15) | 0));
}
}
else {
if (((this.maps.getBGCode$2(((n3 + 15) | 0), n4) >= 20) || (this.maps.getBGCode$2(((n3 + 15) | 0), ((n4 + 31) | 0)) >= 20))) {
(n3 = ((Math.imul(J.div(((n3 + 15) | 0), 32), 32) - 16) | 0));
}
}
(monsterObject.vy = ((monsterObject.vy + 25) | 0));
if ((monsterObject.vy > 180)) {
(monsterObject.vy = 180);
}
(n4 = ((n4 + J.div(monsterObject.vy, 10)) | 0));
if ((monsterObject.vy < 0)) {
if ((this.maps.getBGCode$2(((n3 + 15) | 0), n4) >= 20)) {
(n4 = ((Math.imul(J.div(n4, 32), 32) + 32) | 0));
(monsterObject.vy = 0);
}
if ((J.div(monsterObject.y, 32) > J.div(n4, 32))) {
if ((monsterObject.vx > 0)) {
(s2 = J.short(this.maps.map_bg[J.div(((n3 + 16) | 0), 32)][J.div(this.co_p[n2].y, 32)]));
(s = J.short(this.maps.map_bg[J.div(((n3 + 16) | 0), 32)][J.div(n4, 32)]));
if (((s2 <= 9) && (s >= 20))) {
(n4 = ((Math.imul(J.div(n4, 32), 32) + 32) | 0));
(monsterObject.vy = 0);
}
}
if ((monsterObject.vx < 0)) {
(s2 = J.short(this.maps.map_bg[J.div(((n3 + 14) | 0), 32)][J.div(this.co_p[n2].y, 32)]));
(s = J.short(this.maps.map_bg[J.div(((n3 + 14) | 0), 32)][J.div(n4, 32)]));
if (((s2 <= 9) && (s >= 20))) {
(n4 = ((Math.imul(J.div(n4, 32), 32) + 32) | 0));
(monsterObject.vy = 0);
}
}
}
}
else {
if ((monsterObject.vy > 0)) {
if ((this.maps.getBGCode$2(((n3 + 15) | 0), ((n4 + 31) | 0)) >= 20)) {
(n4 = ((Math.imul(J.div(((n4 + 31) | 0), 32), 32) - 32) | 0));
(monsterObject.vx = 0);
(monsterObject.c = 1000);
(monsterObject.muki = 1);
(monsterObject.move_wc = 30);
}
if ((!this.gym_f && (J.div(((monsterObject.y + 31) | 0), 32) < J.div(((n4 + 31) | 0), 32)))) {
if ((monsterObject.vx > 0)) {
(s2 = J.short(this.maps.map_bg[J.div(((n3 + 16) | 0), 32)][J.div(((monsterObject.y + 31) | 0), 32)]));
(s = J.short(this.maps.map_bg[J.div(((n3 + 16) | 0), 32)][J.div(((n4 + 31) | 0), 32)]));
if (((s2 <= 9) && (s >= 20))) {
(n4 = ((Math.imul(J.div(((n4 + 31) | 0), 32), 32) - 32) | 0));
(monsterObject.vy = 0);
(monsterObject.vx = 0);
(monsterObject.c = 1000);
(monsterObject.muki = 1);
(monsterObject.move_wc = 30);
++n3;
}
}
if ((monsterObject.vx < 0)) {
(s2 = J.short(this.maps.map_bg[J.div(((n3 + 14) | 0), 32)][J.div(((monsterObject.y + 31) | 0), 32)]));
(s = J.short(this.maps.map_bg[J.div(((n3 + 14) | 0), 32)][J.div(((n4 + 31) | 0), 32)]));
if (((s2 <= 9) && (s >= 20))) {
(n4 = ((Math.imul(J.div(((n4 + 31) | 0), 32), 32) - 32) | 0));
(monsterObject.vy = 0);
(monsterObject.vx = 0);
(monsterObject.c = 1000);
(monsterObject.muki = 1);
(monsterObject.move_wc = 30);
--n3;
}
}
}
}
}
if ((n4 >= this.ochiru_y)) {
if (this.race_f) {
(monsterObject.c = 1910);
}
else {
(monsterObject.syurui = 0);
(monsterObject.c = 0);
}
}
(monsterObject.pt = monsterObject.spt[3]);
(monsterObject.pth = monsterObject.muki);
break;
}
case 1300:
{
(monsterObject.taiatari_f = true);
(n3 = ((n3 + J.div(monsterObject.vx, 10)) | 0));
if ((monsterObject.vx < 0)) {
if (((this.maps.getBGCode$2(((n3 + 15) | 0), n4) >= 20) || (this.maps.getBGCode$2(((n3 + 15) | 0), ((n4 + 31) | 0)) >= 20))) {
(n3 = ((((Math.imul(J.div(((n3 + 15) | 0), 32), 32) + 32) | 0) - 15) | 0));
(monsterObject.c = 1100);
}
}
else {
if (((this.maps.getBGCode$2(((n3 + 15) | 0), n4) >= 20) || (this.maps.getBGCode$2(((n3 + 15) | 0), ((n4 + 31) | 0)) >= 20))) {
(n3 = ((Math.imul(J.div(((n3 + 15) | 0), 32), 32) - 16) | 0));
(monsterObject.c = 1100);
}
}
(n4 = ((n4 + J.div(monsterObject.vy, 10)) | 0));
if ((monsterObject.vy < 0)) {
if ((this.maps.getBGCode$2(((n3 + 15) | 0), n4) >= 20)) {
(n4 = ((Math.imul(J.div(n4, 32), 32) + 32) | 0));
(monsterObject.vy = 0);
}
}
else {
if (((monsterObject.vy > 0) && (this.maps.getBGCode$2(((n3 + 15) | 0), ((n4 + 31) | 0)) >= 20))) {
(n4 = ((Math.imul(J.div(((n4 + 31) | 0), 32), 32) - 32) | 0));
(monsterObject.c = 1000);
(monsterObject.move_wc = 35);
}
}
--monsterObject.c1;
if ((monsterObject.c1 <= 0)) {
(monsterObject.c = 1100);
if (this.gym_f) {
(monsterObject.c = 1000);
(monsterObject.vx = 0);
}
(monsterObject.move_wc = 25);
}
if (this.gym_f) {
if (this.race_f) {
if ((n3 >= ((this.race_goal_x + 64) | 0))) {
(n3 = ((this.race_goal_x + 64) | 0));
(monsterObject.vx = 0);
(monsterObject.c = 1000);
(monsterObject.move_wc = 25);
}
}
else {
if ((n3 >= ((this.co_w[10].x + 48) | 0))) {
(n3 = ((this.co_w[10].x + 48) | 0));
(monsterObject.vx = 0);
(monsterObject.c = 1900);
(monsterObject.move_wc = 25);
}
}
}
if (((monsterObject.c == 1100) && (this.maps.getBGCode$2(((n3 + 15) | 0), ((n4 + 32) | 0)) >= 20))) {
(monsterObject.c = 1000);
(monsterObject.vx = 0);
(monsterObject.move_wc = 30);
}
if ((n4 >= this.ochiru_y)) {
if (this.race_f) {
(monsterObject.c = 1910);
}
else {
(monsterObject.syurui = 0);
(monsterObject.c = 0);
}
}
(monsterObject.pth = monsterObject.muki);
(monsterObject.pt = monsterObject.spt[4]);
break;
}
case 1350:
{
(monsterObject.taiatari_f = true);
(n3 = ((n3 + J.div(monsterObject.vx, 10)) | 0));
if ((monsterObject.vx < 0)) {
if (((this.maps.getBGCode$2(((n3 + 15) | 0), n4) >= 20) || (this.maps.getBGCode$2(((n3 + 15) | 0), ((n4 + 31) | 0)) >= 20))) {
(n3 = ((((Math.imul(J.div(((n3 + 15) | 0), 32), 32) + 32) | 0) - 15) | 0));
(monsterObject.vx = 0);
}
}
else {
if (((this.maps.getBGCode$2(((n3 + 15) | 0), n4) >= 20) || (this.maps.getBGCode$2(((n3 + 15) | 0), ((n4 + 31) | 0)) >= 20))) {
(n3 = ((Math.imul(J.div(((n3 + 15) | 0), 32), 32) - 16) | 0));
(monsterObject.vx = 0);
}
}
(monsterObject.vy = ((monsterObject.vy + 25) | 0));
if ((monsterObject.vy > 180)) {
(monsterObject.vy = 180);
}
(n4 = ((n4 + J.div(monsterObject.vy, 10)) | 0));
if ((monsterObject.vy < 0)) {
if ((this.maps.getBGCode$2(((n3 + 15) | 0), n4) >= 20)) {
(n4 = ((Math.imul(J.div(n4, 32), 32) + 32) | 0));
(monsterObject.vy = 0);
}
}
else {
if (((monsterObject.vy > 0) && (this.maps.getBGCode$2(((n3 + 15) | 0), ((n4 + 31) | 0)) >= 20))) {
(n4 = ((Math.imul(J.div(((n4 + 31) | 0), 32), 32) - 32) | 0));
(monsterObject.vx = 0);
(monsterObject.c = 1000);
(monsterObject.muki = 1);
(monsterObject.move_wc = 30);
}
}
if ((n4 >= this.ochiru_y)) {
if (this.race_f) {
(monsterObject.c = 1910);
}
else {
(monsterObject.syurui = 0);
(monsterObject.c = 0);
}
}
(monsterObject.pt = monsterObject.spt[4]);
(monsterObject.pth = monsterObject.muki);
break;
}
case 1400:
{
--monsterObject.c1;
if ((monsterObject.c1 <= 0)) {
(monsterObject.c = 1000);
(monsterObject.move_wc = 25);
}
(monsterObject.pt = monsterObject.spt[0]);
(monsterObject.pth = monsterObject.muki);
break;
}
case 1410:
{
--monsterObject.c1;
if ((monsterObject.c1 <= 0)) {
(monsterObject.c = 1000);
(monsterObject.move_wc = 25);
}
(monsterObject.pt = ((this.g_c3 <= 3) ? 193 : 194));
(monsterObject.pth = monsterObject.muki);
break;
}
case 1420:
{
--monsterObject.c1;
if ((monsterObject.c1 <= 0)) {
(monsterObject.c = 1000);
(monsterObject.move_wc = 25);
}
if ((monsterObject.c1 == 6)) {
this.mSetKakudouchi$10(n3, n4, 120, 0, 0, 0, monsterObject.zokusei, monsterObject.ap, n2, 18);
this.mSetKakudouchi$10(n3, n4, 120, 0, 0, 0, monsterObject.zokusei, monsterObject.ap, n2, 54);
}
(monsterObject.pt = monsterObject.spt[0]);
(monsterObject.pth = monsterObject.muki);
break;
}
case 1430:
{
++monsterObject.c1;
if ((monsterObject.c1 == 1)) {
this.mSet$9(n3, n4, 140, 90, -225, 0, monsterObject.zokusei, monsterObject.ap, n2);
}
else {
if ((monsterObject.c1 == 5)) {
this.mSet$9(n3, n4, 140, 60, -225, 0, monsterObject.zokusei, monsterObject.ap, n2);
}
else {
if ((monsterObject.c1 == 9)) {
this.mSet$9(n3, n4, 140, 105, -225, 0, monsterObject.zokusei, monsterObject.ap, n2);
}
else {
if ((monsterObject.c1 == 13)) {
this.mSet$9(n3, n4, 140, 45, -225, 0, monsterObject.zokusei, monsterObject.ap, n2);
}
else {
if ((monsterObject.c1 == 17)) {
this.mSet$9(n3, n4, 140, 75, -225, 0, monsterObject.zokusei, monsterObject.ap, n2);
}
else {
if ((monsterObject.c1 >= 20)) {
(monsterObject.c = 1000);
(monsterObject.move_wc = 25);
}
}
}
}
}
}
(monsterObject.pt = monsterObject.spt[0]);
(monsterObject.pth = monsterObject.muki);
break;
}
case 1440:
{
++monsterObject.c1;
if ((monsterObject.c1 >= 41)) {
(monsterObject.c = 1000);
(monsterObject.move_wc = 25);
}
(monsterObject.pt = ((monsterObject.c1 < 23) ? monsterObject.spt[0] : monsterObject.spt[4]));
(monsterObject.pth = monsterObject.muki);
break;
}
case 1450:
{
++monsterObject.c1;
if ((monsterObject.c1 >= 34)) {
(monsterObject.c = 1000);
(monsterObject.move_wc = 25);
}
(monsterObject.pt = ((monsterObject.c1 < 16) ? monsterObject.spt[0] : monsterObject.spt[4]));
(monsterObject.pth = monsterObject.muki);
break;
}
case 1460:
{
++monsterObject.c1;
if ((monsterObject.c1 == 1)) {
this.mSet$9(((((n3 + 64) | 0) + 84) | 0), ((this.maps.wy - 32) | 0), 190, 0, 0, 0, monsterObject.zokusei, monsterObject.ap, n2);
}
else {
if ((monsterObject.c1 == 5)) {
this.mSet$9(((((n3 + 64) | 0) + 28) | 0), ((this.maps.wy - 32) | 0), 190, 0, 0, 0, monsterObject.zokusei, monsterObject.ap, n2);
}
else {
if ((monsterObject.c1 == 9)) {
this.mSet$9(((((n3 + 64) | 0) + 112) | 0), ((this.maps.wy - 32) | 0), 190, 0, 0, 0, monsterObject.zokusei, monsterObject.ap, n2);
}
else {
if ((monsterObject.c1 == 13)) {
this.mSet$9(((((n3 + 64) | 0) + 0) | 0), ((this.maps.wy - 32) | 0), 190, 0, 0, 0, monsterObject.zokusei, monsterObject.ap, n2);
}
else {
if ((monsterObject.c1 == 17)) {
this.mSet$9(((((n3 + 64) | 0) + 56) | 0), ((this.maps.wy - 32) | 0), 190, 0, 0, 0, monsterObject.zokusei, monsterObject.ap, n2);
}
else {
if ((monsterObject.c1 >= 20)) {
(monsterObject.c = 1000);
(monsterObject.move_wc = 25);
}
}
}
}
}
}
(monsterObject.pt = monsterObject.spt[0]);
(monsterObject.pth = monsterObject.muki);
break;
}
case 1480:
{
++monsterObject.c1;
if ((monsterObject.c1 == 1)) {
this.mSet$9(n3, n4, 250, 50, -240, 0, monsterObject.zokusei, monsterObject.ap, n2);
}
else {
if ((monsterObject.c1 == 5)) {
this.mSet$9(n3, n4, 250, -50, -240, 0, monsterObject.zokusei, monsterObject.ap, n2);
}
else {
if ((monsterObject.c1 == 9)) {
this.mSet$9(n3, n4, 250, 110, -240, 0, monsterObject.zokusei, monsterObject.ap, n2);
}
else {
if ((monsterObject.c1 == 13)) {
this.mSet$9(n3, n4, 250, -20, -240, 0, monsterObject.zokusei, monsterObject.ap, n2);
}
else {
if ((monsterObject.c1 == 17)) {
this.mSet$9(n3, n4, 250, 80, -240, 0, monsterObject.zokusei, monsterObject.ap, n2);
}
else {
if ((monsterObject.c1 == 21)) {
this.mSet$9(n3, n4, 250, 140, -240, 0, monsterObject.zokusei, monsterObject.ap, n2);
}
else {
if ((monsterObject.c1 == 25)) {
this.mSet$9(n3, n4, 250, 20, -240, 0, monsterObject.zokusei, monsterObject.ap, n2);
}
else {
if ((monsterObject.c1 >= 28)) {
(monsterObject.c = 1000);
(monsterObject.move_wc = 25);
}
}
}
}
}
}
}
}
(monsterObject.pt = monsterObject.spt[0]);
(monsterObject.pth = monsterObject.muki);
break;
}
case 1490:
{
++monsterObject.c1;
if ((monsterObject.c1 == 1)) {
this.mSet$9(n3, n4, 260, 60, -240, 1, monsterObject.zokusei, monsterObject.ap, n2);
}
else {
if ((monsterObject.c1 == 5)) {
this.mSet$9(n3, n4, 260, -30, -240, 1, monsterObject.zokusei, monsterObject.ap, n2);
}
else {
if ((monsterObject.c1 == 9)) {
this.mSet$9(n3, n4, 260, 30, -240, 1, monsterObject.zokusei, monsterObject.ap, n2);
}
else {
if ((monsterObject.c1 == 13)) {
this.mSet$9(n3, n4, 260, -60, -240, 1, monsterObject.zokusei, monsterObject.ap, n2);
}
else {
if ((monsterObject.c1 == 17)) {
this.mSet$9(n3, n4, 260, 90, -240, 1, monsterObject.zokusei, monsterObject.ap, n2);
}
else {
if ((monsterObject.c1 == 21)) {
this.mSet$9(n3, n4, 260, 0, -240, 1, monsterObject.zokusei, monsterObject.ap, n2);
}
else {
if ((monsterObject.c1 >= 24)) {
(monsterObject.c = 1000);
(monsterObject.move_wc = 25);
}
}
}
}
}
}
}
(monsterObject.pt = monsterObject.spt[0]);
(monsterObject.pth = monsterObject.muki);
break;
}
case 1500:
{
(monsterObject.vy = ((monsterObject.vy + 25) | 0));
if ((monsterObject.vy > 180)) {
(monsterObject.vy = 180);
}
(n4 = ((n4 + J.div(monsterObject.vy, 10)) | 0));
if ((monsterObject.vy < 0)) {
if ((this.maps.getBGCode$2(((n3 + 15) | 0), n4) >= 20)) {
(n4 = ((Math.imul(J.div(n4, 32), 32) + 32) | 0));
(monsterObject.vy = 0);
}
}
else {
if (((monsterObject.vy > 0) && (this.maps.getBGCode$2(((n3 + 15) | 0), ((n4 + 31) | 0)) >= 20))) {
(n4 = ((Math.imul(J.div(((n4 + 31) | 0), 32), 32) - 32) | 0));
(monsterObject.vx = 0);
(monsterObject.c = 1000);
(monsterObject.move_wc = 30);
(this.jishin_c = 1);
this.mSet$9(n3, n4, 1700, 150, 0, 0, monsterObject.zokusei, monsterObject.ap, n2);
monsterObject.delPP$1(14);
}
}
if ((n4 >= this.ochiru_y)) {
if (this.race_f) {
(monsterObject.c = 1910);
}
else {
(monsterObject.syurui = 0);
(monsterObject.c = 0);
}
}
(monsterObject.pt = monsterObject.spt[0]);
(monsterObject.pth = monsterObject.muki);
break;
}
case 1505:
{
(monsterObject.vy = ((monsterObject.vy + 25) | 0));
if ((monsterObject.vy > 180)) {
(monsterObject.vy = 180);
}
(n4 = ((n4 + J.div(monsterObject.vy, 10)) | 0));
if ((monsterObject.vy < 0)) {
if ((this.maps.getBGCode$2(((n3 + 15) | 0), n4) >= 20)) {
(n4 = ((Math.imul(J.div(n4, 32), 32) + 32) | 0));
(monsterObject.vy = 0);
}
}
else {
if (((monsterObject.vy > 0) && (this.maps.getBGCode$2(((n3 + 15) | 0), ((n4 + 31) | 0)) >= 20))) {
(n4 = ((Math.imul(J.div(((n4 + 31) | 0), 32), 32) - 32) | 0));
(monsterObject.vx = 0);
(monsterObject.c = 1000);
(monsterObject.move_wc = 30);
(this.jishin_c = 1);
this.mSet$9(n3, n4, 1705, 150, 0, 0, monsterObject.zokusei, monsterObject.ap, n2);
monsterObject.delPP$1(18);
}
}
if ((n4 >= this.ochiru_y)) {
if (this.race_f) {
(monsterObject.c = 1910);
}
else {
(monsterObject.syurui = 0);
(monsterObject.c = 0);
}
}
(monsterObject.pt = monsterObject.spt[0]);
(monsterObject.pth = monsterObject.muki);
break;
}
case 1510:
{
var d = 0;
var d2 = 0;
var n6 = 0;
(monsterObject.vy = ((monsterObject.vy + 25) | 0));
if ((monsterObject.vy > 180)) {
(monsterObject.vy = 180);
}
if ((monsterObject.vy == 0)) {
(n6 = this.pSearch$3(n3, n4, 1));
if ((n6 >= 0)) {
this.mSetNeraiuchi$10(n3, n4, 160, 0, 0, 0, monsterObject.zokusei, monsterObject.ap, n2, n6);
if ((this.co_w[n6].x < n3)) {
(monsterObject.muki = 0);
}
}
else {
(d2 = Math.cos(5.934119456780721));
(d = Math.sin(5.934119456780721));
this.mSet$9(n3, n4, 160, J.i((d2 * 150.0)), J.i((-d * 150.0)), 0, monsterObject.zokusei, monsterObject.ap, n2);
}
monsterObject.delPP$1(4);
}
(n4 = ((n4 + J.div(monsterObject.vy, 10)) | 0));
if ((monsterObject.vy < 0)) {
if ((this.maps.getBGCode$2(((n3 + 15) | 0), n4) >= 20)) {
(n4 = ((Math.imul(J.div(n4, 32), 32) + 32) | 0));
(monsterObject.vy = 0);
(n6 = this.pSearch$3(n3, n4, 1));
if ((n6 >= 0)) {
this.mSetNeraiuchi$10(n3, n4, 160, 0, 0, 0, monsterObject.zokusei, monsterObject.ap, n2, n6);
if ((this.co_w[n6].x < n3)) {
(monsterObject.muki = 0);
}
}
else {
(d2 = Math.cos(5.934119456780721));
(d = Math.sin(5.934119456780721));
this.mSet$9(n3, n4, 160, J.i((d2 * 150.0)), J.i((-d * 150.0)), 0, monsterObject.zokusei, monsterObject.ap, n2);
}
monsterObject.delPP$1(4);
}
}
else {
if (((monsterObject.vy > 0) && (this.maps.getBGCode$2(((n3 + 15) | 0), ((n4 + 31) | 0)) >= 20))) {
(n4 = ((Math.imul(J.div(((n4 + 31) | 0), 32), 32) - 32) | 0));
(monsterObject.vx = 0);
(monsterObject.c = 1000);
(monsterObject.move_wc = 30);
}
}
if ((n4 >= this.ochiru_y)) {
if (this.race_f) {
(monsterObject.c = 1910);
}
else {
(monsterObject.syurui = 0);
(monsterObject.c = 0);
}
}
(monsterObject.pt = monsterObject.spt[0]);
(monsterObject.pth = monsterObject.muki);
if (((monsterObject.syurui != 2300) || (monsterObject.vy >= 0))) {
break;
}
(monsterObject.pt = 108);
break;
}
case 1520:
{
(monsterObject.vy = ((monsterObject.vy + 25) | 0));
if ((monsterObject.vy > 180)) {
(monsterObject.vy = 180);
}
(n4 = ((n4 + J.div(monsterObject.vy, 10)) | 0));
if ((monsterObject.vy < 0)) {
if ((this.maps.getBGCode$2(((n3 + 15) | 0), n4) >= 20)) {
(n4 = ((Math.imul(J.div(n4, 32), 32) + 32) | 0));
(monsterObject.vy = 0);
}
}
else {
if (((monsterObject.vy > 0) && (this.maps.getBGCode$2(((n3 + 15) | 0), ((n4 + 31) | 0)) >= 20))) {
(n4 = ((Math.imul(J.div(((n4 + 31) | 0), 32), 32) - 32) | 0));
(monsterObject.vx = 0);
(monsterObject.c = 1000);
(monsterObject.move_wc = 30);
}
}
if ((n4 >= this.ochiru_y)) {
if (this.race_f) {
(monsterObject.c = 1910);
}
else {
(monsterObject.syurui = 0);
(monsterObject.c = 0);
}
}
(monsterObject.pt = monsterObject.spt[0]);
(monsterObject.pth = monsterObject.muki);
if (((monsterObject.syurui != 2300) || (monsterObject.vy >= 0))) {
break;
}
(monsterObject.pt = 108);
break;
}
case 1530:
{
++monsterObject.c1;
if ((monsterObject.c1 >= 16)) {
(monsterObject.c = 1000);
(monsterObject.move_wc = 25);
}
(monsterObject.pt = monsterObject.spt[0]);
(monsterObject.pth = monsterObject.muki);
break;
}
case 1560:
{
var n6 = 0;
++monsterObject.c1;
if (((monsterObject.c1 == 1) || (monsterObject.c1 == 5))) {
(monsterObject.muki = 1);
(n6 = this.pSearch$3(n3, n4, 1));
if ((n6 >= 0)) {
this.mSetNeraiuchi$10(n3, n4, 100, 0, 0, 0, monsterObject.zokusei, monsterObject.ap, n2, n6);
if ((this.co_w[n6].x < n3)) {
(monsterObject.muki = 0);
}
}
else {
this.mSet$9(n3, n4, 100, 150, 0, 0, monsterObject.zokusei, monsterObject.ap, n2);
}
}
else {
if ((monsterObject.c1 >= 8)) {
(monsterObject.c = 1000);
(monsterObject.move_wc = 25);
}
}
(monsterObject.pt = monsterObject.spt[0]);
(monsterObject.pth = monsterObject.muki);
break;
}
case 1600:
{
--monsterObject.c1;
if ((monsterObject.c1 <= 0)) {
(monsterObject.c = 1000);
(monsterObject.move_wc = 25);
}
if ((monsterObject.c1 == 6)) {
this.mSetKakudouchi$10(n3, n4, 270, 0, 0, 0, monsterObject.zokusei, monsterObject.ap, n2, 35);
this.mSetKakudouchi$10(n3, n4, 270, 0, 0, 0, monsterObject.zokusei, monsterObject.ap, n2, 55);
}
(monsterObject.pt = monsterObject.spt[0]);
(monsterObject.pth = monsterObject.muki);
break;
}
case 1610:
{
--monsterObject.c1;
if ((monsterObject.c1 <= 0)) {
(monsterObject.c = 1000);
(monsterObject.move_wc = 25);
}
if ((monsterObject.c1 == 6)) {
this.mSetKakudouchi$10(n3, n4, 100, 0, 0, 0, monsterObject.zokusei, monsterObject.ap, n2, 35);
this.mSetKakudouchi$10(n3, n4, 100, 0, 0, 0, monsterObject.zokusei, monsterObject.ap, n2, 55);
}
(monsterObject.pt = monsterObject.spt[0]);
(monsterObject.pth = monsterObject.muki);
break;
}
case 1630:
{
++monsterObject.c1;
if ((monsterObject.c1 == 1)) {
this.mSet$9(((n3 + 96) | 0), ((this.maps.wy - 32) | 0), 330, 0, 0, 1, monsterObject.zokusei, monsterObject.ap, n2);
}
else {
if ((monsterObject.c1 == 4)) {
this.mSet$9(((n3 - 48) | 0), ((this.maps.wy - 32) | 0), 330, 0, 0, 1, monsterObject.zokusei, monsterObject.ap, n2);
}
else {
if ((monsterObject.c1 == 7)) {
this.mSet$9(((n3 + 48) | 0), ((this.maps.wy - 32) | 0), 330, 0, 0, 1, monsterObject.zokusei, monsterObject.ap, n2);
}
else {
if ((monsterObject.c1 == 10)) {
this.mSet$9(((n3 + 192) | 0), ((this.maps.wy - 32) | 0), 330, 0, 0, 1, monsterObject.zokusei, monsterObject.ap, n2);
}
else {
if ((monsterObject.c1 == 13)) {
this.mSet$9(((n3 + 0) | 0), ((this.maps.wy - 32) | 0), 330, 0, 0, 1, monsterObject.zokusei, monsterObject.ap, n2);
}
else {
if ((monsterObject.c1 == 16)) {
this.mSet$9(((n3 - 96) | 0), ((this.maps.wy - 32) | 0), 330, 0, 0, 1, monsterObject.zokusei, monsterObject.ap, n2);
}
else {
if ((monsterObject.c1 == 19)) {
this.mSet$9(((n3 + 144) | 0), ((this.maps.wy - 32) | 0), 330, 0, 0, 1, monsterObject.zokusei, monsterObject.ap, n2);
}
else {
if ((monsterObject.c1 == 22)) {
this.mSet$9(((n3 + 240) | 0), ((this.maps.wy - 32) | 0), 330, 0, 0, 1, monsterObject.zokusei, monsterObject.ap, n2);
}
else {
if ((monsterObject.c1 >= 24)) {
(monsterObject.c = 1000);
(monsterObject.move_wc = 25);
}
}
}
}
}
}
}
}
}
(monsterObject.pt = monsterObject.spt[0]);
(monsterObject.pth = monsterObject.muki);
break;
}
case 1640:
{
++monsterObject.c1;
if ((monsterObject.c1 == 1)) {
this.mSet$9(((((n3 + 48) | 0) + 32) | 0), ((this.maps.wy - 32) | 0), 140, 0, 140, 0, monsterObject.zokusei, monsterObject.ap, n2);
}
else {
if ((monsterObject.c1 == 5)) {
this.mSet$9(((((n3 + 48) | 0) + 160) | 0), ((this.maps.wy - 32) | 0), 140, 0, 140, 0, monsterObject.zokusei, monsterObject.ap, n2);
}
else {
if ((monsterObject.c1 == 9)) {
this.mSet$9(((((n3 + 48) | 0) + 128) | 0), ((this.maps.wy - 32) | 0), 140, 0, 140, 0, monsterObject.zokusei, monsterObject.ap, n2);
}
else {
if ((monsterObject.c1 == 13)) {
this.mSet$9(((((n3 + 48) | 0) + 0) | 0), ((this.maps.wy - 32) | 0), 140, 0, 140, 0, monsterObject.zokusei, monsterObject.ap, n2);
}
else {
if ((monsterObject.c1 == 17)) {
this.mSet$9(((((n3 + 48) | 0) + 192) | 0), ((this.maps.wy - 32) | 0), 140, 0, 140, 0, monsterObject.zokusei, monsterObject.ap, n2);
}
else {
if ((monsterObject.c1 == 21)) {
this.mSet$9(((((n3 + 48) | 0) + 64) | 0), ((this.maps.wy - 32) | 0), 140, 0, 140, 0, monsterObject.zokusei, monsterObject.ap, n2);
}
else {
if ((monsterObject.c1 == 25)) {
this.mSet$9(((((n3 + 48) | 0) + 128) | 0), ((this.maps.wy - 32) | 0), 140, 0, 140, 0, monsterObject.zokusei, monsterObject.ap, n2);
}
else {
if ((monsterObject.c1 >= 28)) {
(monsterObject.c = 1000);
(monsterObject.move_wc = 25);
}
}
}
}
}
}
}
}
(monsterObject.pt = monsterObject.spt[0]);
(monsterObject.pth = monsterObject.muki);
break;
}
case 1650:
{
++monsterObject.c1;
if ((monsterObject.c1 == 1)) {
this.mSet$9(n3, n4, 340, 65, -275, 0, monsterObject.zokusei, monsterObject.ap, n2);
}
else {
if ((monsterObject.c1 == 5)) {
this.mSet$9(n3, n4, 340, -35, -275, 0, monsterObject.zokusei, monsterObject.ap, n2);
}
else {
if ((monsterObject.c1 == 9)) {
this.mSet$9(n3, n4, 340, 110, -275, 0, monsterObject.zokusei, monsterObject.ap, n2);
}
else {
if ((monsterObject.c1 == 13)) {
this.mSet$9(n3, n4, 340, 35, -275, 0, monsterObject.zokusei, monsterObject.ap, n2);
}
else {
if ((monsterObject.c1 == 17)) {
this.mSet$9(n3, n4, 340, 80, -275, 0, monsterObject.zokusei, monsterObject.ap, n2);
}
else {
if ((monsterObject.c1 == 21)) {
this.mSet$9(n3, n4, 340, -65, -275, 0, monsterObject.zokusei, monsterObject.ap, n2);
}
else {
if ((monsterObject.c1 == 25)) {
this.mSet$9(n3, n4, 340, 125, -275, 0, monsterObject.zokusei, monsterObject.ap, n2);
}
else {
if ((monsterObject.c1 == 29)) {
this.mSet$9(n3, n4, 340, 50, -275, 0, monsterObject.zokusei, monsterObject.ap, n2);
}
else {
if ((monsterObject.c1 == 33)) {
this.mSet$9(n3, n4, 340, -50, -275, 0, monsterObject.zokusei, monsterObject.ap, n2);
}
else {
if ((monsterObject.c1 == 37)) {
this.mSet$9(n3, n4, 340, 95, -275, 0, monsterObject.zokusei, monsterObject.ap, n2);
}
else {
if ((monsterObject.c1 >= 40)) {
(monsterObject.c = 1000);
(monsterObject.move_wc = 25);
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
(monsterObject.pt = monsterObject.spt[0]);
(monsterObject.pth = monsterObject.muki);
break;
}
case 1900:
{
var n7 = ((monsterObject.speed >= 40) ? 60 : 40);
(monsterObject.vx = ((n3 > ((this.co_j.x + monsterObject.positionX) | 0)) ? -n7 : ((n3 < ((this.co_j.x + monsterObject.positionX) | 0)) ? n7 : 0)));
(n3 = ((n3 + J.div(monsterObject.vx, 10)) | 0));
if ((monsterObject.vx < 0)) {
if ((n3 <= ((this.co_j.x + monsterObject.positionX) | 0))) {
(n3 = ((this.co_j.x + monsterObject.positionX) | 0));
(monsterObject.vx = 0);
}
}
else {
if (((monsterObject.vx > 0) && (n3 >= ((this.co_j.x + monsterObject.positionX) | 0)))) {
(n3 = ((this.co_j.x + monsterObject.positionX) | 0));
(monsterObject.vx = 0);
}
}
if ((monsterObject.vx == 0)) {
(monsterObject.pt = monsterObject.spt[0]);
(monsterObject.pth = 1);
(monsterObject.move_wc = 30);
(monsterObject.c = 1000);
(monsterObject.gym_wc = 12);
break;
}
if ((monsterObject.vx < 0)) {
(monsterObject.pt = monsterObject.spt[((1 + this.g_ac) | 0)]);
(monsterObject.pth = 0);
break;
}
(monsterObject.pt = monsterObject.spt[((1 + this.g_ac) | 0)]);
(monsterObject.pth = 1);
break;
}
case 1910:
{
(n4 = this.ochiru_y);
(monsterObject.pt = 0);
(monsterObject.pth = 1);
break;
}
case 1920:
{
(monsterObject.pt = monsterObject.spt[0]);
(monsterObject.pth = 1);
break;
}
case 2000:
{
if ((monsterObject.move_wc > 0)) {
(monsterObject.move_wc = ((monsterObject.speed > 0) ? --monsterObject.move_wc : 10));
if ((n3 == ((this.co_j.x + monsterObject.positionX) | 0))) {
(monsterObject.vx = 0);
(monsterObject.move_wc = ((20 + Math.imul(n2, 8)) | 0));
if (this.gym_f) {
(monsterObject.move_wc = 20);
}
}
if ((monsterObject.move_wc <= 0)) {
if ((n3 > ((this.co_j.x + monsterObject.positionX) | 0))) {
(monsterObject.vx = -monsterObject.speed);
}
else {
if ((n3 < ((this.co_j.x + monsterObject.positionX) | 0))) {
(monsterObject.vx = monsterObject.speed);
}
else {
(monsterObject.vx = 0);
(monsterObject.move_wc = ((30 + Math.imul(n2, 5)) | 0));
if (this.gym_f) {
(monsterObject.move_wc = 30);
}
}
}
}
}
else {
(n3 = ((n3 + J.div(monsterObject.vx, 10)) | 0));
if ((monsterObject.vx < 0)) {
if (((this.maps.getBGCode$2(((n3 + 15) | 0), n4) >= 20) || (this.maps.getBGCode$2(((n3 + 15) | 0), ((n4 + 31) | 0)) >= 20))) {
(n3 = ((((Math.imul(J.div(((n3 + 15) | 0), 32), 32) + 32) | 0) - 15) | 0));
}
if ((n3 <= ((this.co_j.x + monsterObject.positionX) | 0))) {
(n3 = ((this.co_j.x + monsterObject.positionX) | 0));
(monsterObject.move_wc = ((30 + Math.imul(n2, 5)) | 0));
(monsterObject.vx = 0);
if (this.gym_f) {
(monsterObject.move_wc = 30);
}
}
}
else {
if (((this.maps.getBGCode$2(((n3 + 15) | 0), n4) >= 20) || (this.maps.getBGCode$2(((n3 + 15) | 0), ((n4 + 31) | 0)) >= 20))) {
(n3 = ((Math.imul(J.div(((n3 + 15) | 0), 32), 32) - 16) | 0));
}
if ((n3 >= ((this.co_j.x + monsterObject.positionX) | 0))) {
(n3 = ((this.co_j.x + monsterObject.positionX) | 0));
(monsterObject.move_wc = ((30 + Math.imul(n2, 5)) | 0));
(monsterObject.vx = 0);
if (this.gym_f) {
(monsterObject.move_wc = 30);
}
}
}
}
if ((monsterObject.meirei > 0)) {
(monsterObject.vy = 0);
}
else {
if ((Math.abs(((((this.co_j.y - 96) | 0) - n4) | 0)) <= 2)) {
(n4 = ((this.co_j.y - 96) | 0));
(monsterObject.vy = 0);
}
else {
(monsterObject.vy = ((((this.co_j.y - 96) | 0) < n4) ? -30 : ((((this.co_j.y - 96) | 0) > n4) ? 30 : 0)));
}
}
(n4 = ((n4 + J.div(monsterObject.vy, 10)) | 0));
if ((monsterObject.vy < 0)) {
if ((this.maps.getBGCode$2(((n3 + 15) | 0), n4) >= 20)) {
(n4 = ((Math.imul(J.div(n4, 32), 32) + 32) | 0));
(monsterObject.vy = 0);
}
}
else {
if (((monsterObject.vy > 0) && (this.maps.getBGCode$2(((n3 + 15) | 0), ((n4 + 31) | 0)) >= 20))) {
(n4 = ((Math.imul(J.div(((n4 + 31) | 0), 32), 32) - 32) | 0));
(monsterObject.vy = 0);
}
}
if ((monsterObject.pp <= 0)) {
(monsterObject.meirei = 1);
if (!this.gym_f) {
this.km.openTimeMessage$5(11, 344, 8, 160, monsterObject.name);
if ((monsterObject.seibetu == 1)) {
this.km.addItem$2(11, "わたし、もう疲れた。");
}
else {
this.km.addItem$2(11, "ぼく、もう疲れた。");
}
}
}
if ((((monsterObject.syurui == 2500) || (monsterObject.syurui == 3300)) || (monsterObject.syurui == 3600))) {
(monsterObject.pt = monsterObject.spt[0]);
(monsterObject.pth = 0);
if (((monsterObject.syurui == 2500) && (this.g_c3 >= 6))) {
(monsterObject.pt = 154);
}
}
else {
(monsterObject.pt = monsterObject.spt[((1 + this.g_ac) | 0)]);
(monsterObject.pth = ((monsterObject.vx < 0) ? 0 : 1));
}
if ((monsterObject.meirei <= 0)) {
break;
}
this.pWazaK$4(monsterObject, n3, n4, n2);
break;
}
case 2050:
{
--monsterObject.c1;
if ((monsterObject.c1 <= 0)) {
(monsterObject.c = 2000);
(monsterObject.move_wc = 3);
if ((monsterObject.taiatari_type == 3)) {
(monsterObject.move_wc = 30);
}
}
if ((((monsterObject.syurui == 2500) || (monsterObject.syurui == 3300)) || (monsterObject.syurui == 3600))) {
(monsterObject.pt = monsterObject.spt[0]);
(monsterObject.pth = 0);
break;
}
(monsterObject.pt = monsterObject.spt[((1 + this.g_ac) | 0)]);
(monsterObject.pth = monsterObject.muki);
break;
}
case 2100:
{
if ((monsterObject.meirei == 1)) {
(monsterObject.c = 210);
(monsterObject.vy = -175);
}
(monsterObject.vy = ((monsterObject.vy + 25) | 0));
if ((monsterObject.vy > 180)) {
(monsterObject.vy = 180);
}
(n4 = ((n4 + J.div(monsterObject.vy, 10)) | 0));
if ((monsterObject.vy < 0)) {
if ((this.maps.getBGCode$2(((n3 + 15) | 0), n4) >= 20)) {
(n4 = ((Math.imul(J.div(n4, 32), 32) + 32) | 0));
(monsterObject.c = 2000);
(monsterObject.move_wc = 40);
}
}
else {
if ((monsterObject.vy >= 0)) {
(monsterObject.c = 2000);
(monsterObject.move_wc = 45);
}
}
(monsterObject.pt = monsterObject.spt[2]);
(monsterObject.pth = 1);
break;
}
case 2300:
{
(monsterObject.taiatari_f = true);
(n3 = ((n3 + J.div(monsterObject.vx, 10)) | 0));
if ((monsterObject.vx < 0)) {
if (((this.maps.getBGCode$2(((n3 + 15) | 0), n4) >= 20) || (this.maps.getBGCode$2(((n3 + 15) | 0), ((n4 + 31) | 0)) >= 20))) {
(n3 = ((((Math.imul(J.div(((n3 + 15) | 0), 32), 32) + 32) | 0) - 15) | 0));
(monsterObject.c = 2000);
(monsterObject.vx = 0);
(monsterObject.move_wc = 10);
}
}
else {
if (((this.maps.getBGCode$2(((n3 + 15) | 0), n4) >= 20) || (this.maps.getBGCode$2(((n3 + 15) | 0), ((n4 + 31) | 0)) >= 20))) {
(n3 = ((Math.imul(J.div(((n3 + 15) | 0), 32), 32) - 16) | 0));
(monsterObject.c = 2000);
(monsterObject.vx = 0);
(monsterObject.move_wc = 10);
}
}
(n4 = ((n4 + J.div(monsterObject.vy, 10)) | 0));
if ((monsterObject.vy < 0)) {
if ((this.maps.getBGCode$2(((n3 + 15) | 0), n4) >= 20)) {
(n4 = ((Math.imul(J.div(n4, 32), 32) + 32) | 0));
(monsterObject.c = 2000);
(monsterObject.vx = 0);
(monsterObject.move_wc = 10);
}
}
else {
if (((monsterObject.vy > 0) && (this.maps.getBGCode$2(((n3 + 15) | 0), ((n4 + 31) | 0)) >= 20))) {
(n4 = ((Math.imul(J.div(((n4 + 31) | 0), 32), 32) - 32) | 0));
(monsterObject.c = 2000);
(monsterObject.vx = 0);
(monsterObject.move_wc = 10);
}
}
--monsterObject.c1;
if ((monsterObject.c1 <= 0)) {
(monsterObject.c = 2000);
(monsterObject.vx = 0);
(monsterObject.move_wc = 16);
}
if ((this.gym_f && (n3 >= ((this.co_w[10].x + 48) | 0)))) {
(n3 = ((this.co_w[10].x + 48) | 0));
(monsterObject.vx = 0);
(monsterObject.c = 2900);
(monsterObject.move_wc = 0);
}
if ((n4 >= ((this.ochiru_y - 16) | 0))) {
(monsterObject.c = 2000);
(monsterObject.vx = 0);
(monsterObject.move_wc = 10);
}
if ((n4 >= this.ochiru_y)) {
if (this.race_f) {
(monsterObject.c = 1910);
}
else {
(monsterObject.syurui = 0);
(monsterObject.c = 0);
(monsterObject.ss = 0);
}
}
if (((monsterObject.c == 2000) && (monsterObject.taiatari_type == 3))) {
(monsterObject.move_wc = 35);
}
if ((((monsterObject.syurui == 2500) || (monsterObject.syurui == 3300)) || (monsterObject.syurui == 3600))) {
(monsterObject.pt = monsterObject.spt[4]);
(monsterObject.pth = 0);
break;
}
if ((monsterObject.syurui == 2700)) {
(monsterObject.pt = monsterObject.spt[((1 + this.g_c1) | 0)]);
(monsterObject.pth = monsterObject.muki);
break;
}
(monsterObject.pt = monsterObject.spt[4]);
(monsterObject.pth = monsterObject.muki);
break;
}
case 2310:
{
(monsterObject.taiatari_f = true);
if (((monsterObject.vy > 0) && (this.maps.getBGCode$2(((n3 + 15) | 0), (((n4 = ((n4 + J.div(monsterObject.vy, 10)) | 0)) + 31) | 0)) >= 20))) {
(n4 = ((Math.imul(J.div(((n4 + 31) | 0), 32), 32) - 32) | 0));
(monsterObject.c = 2000);
(monsterObject.vx = 0);
(monsterObject.move_wc = 10);
var n8 = J.div(((n3 + 15) | 0), 32);
var n9 = J.div(((n4 + 32) | 0), 32);
this.maps.putBGCode$3(n8, n9, 0);
if ((this.maps.map_bg[n8][((n9 - 1) | 0)] == 3)) {
this.maps.putBGCode$3(n8, ((n9 - 1) | 0), 0);
}
(n3 = Math.imul(J.div(((n3 + 15) | 0), 32), 32));
}
--monsterObject.c1;
if ((monsterObject.c1 <= 0)) {
(monsterObject.c = 2000);
(monsterObject.vx = 0);
(monsterObject.move_wc = 10);
}
if ((n4 >= ((this.ochiru_y - 16) | 0))) {
(monsterObject.c = 2000);
(monsterObject.vx = 0);
(monsterObject.move_wc = 10);
}
if ((n4 >= this.ochiru_y)) {
if (this.race_f) {
(monsterObject.c = 1910);
}
else {
(monsterObject.syurui = 0);
(monsterObject.c = 0);
(monsterObject.ss = 0);
}
}
if ((monsterObject.c == 2000)) {
(monsterObject.move_wc = 35);
}
if ((((monsterObject.syurui == 2500) || (monsterObject.syurui == 3300)) || (monsterObject.syurui == 3600))) {
(monsterObject.pt = monsterObject.spt[0]);
(monsterObject.pth = 0);
break;
}
if ((monsterObject.syurui == 2700)) {
(monsterObject.pt = monsterObject.spt[((1 + this.g_c1) | 0)]);
(monsterObject.pth = monsterObject.muki);
break;
}
(monsterObject.pt = monsterObject.spt[4]);
(monsterObject.pth = monsterObject.muki);
break;
}
case 2400:
{
--monsterObject.c1;
if ((monsterObject.c1 <= 0)) {
(monsterObject.c = 2000);
(monsterObject.move_wc = 16);
}
if ((((monsterObject.syurui == 2500) || (monsterObject.syurui == 3300)) || (monsterObject.syurui == 3600))) {
(monsterObject.pt = monsterObject.spt[0]);
(monsterObject.pth = 0);
break;
}
(monsterObject.pt = monsterObject.spt[((1 + this.g_ac) | 0)]);
(monsterObject.pth = monsterObject.muki);
break;
}
case 2430:
{
++monsterObject.c1;
if ((monsterObject.c1 == 1)) {
this.mSet$9(n3, n4, 140, 90, -200, 0, monsterObject.zokusei, monsterObject.ap, n2);
}
else {
if ((monsterObject.c1 == 5)) {
this.mSet$9(n3, n4, 140, 60, -200, 0, monsterObject.zokusei, monsterObject.ap, n2);
}
else {
if ((monsterObject.c1 == 9)) {
this.mSet$9(n3, n4, 140, 105, -200, 0, monsterObject.zokusei, monsterObject.ap, n2);
}
else {
if ((monsterObject.c1 == 13)) {
this.mSet$9(n3, n4, 140, 45, -200, 0, monsterObject.zokusei, monsterObject.ap, n2);
}
else {
if ((monsterObject.c1 == 17)) {
this.mSet$9(n3, n4, 140, 75, -200, 0, monsterObject.zokusei, monsterObject.ap, n2);
}
else {
if ((monsterObject.c1 >= 20)) {
(monsterObject.c = 2000);
(monsterObject.move_wc = 16);
}
}
}
}
}
}
if ((((monsterObject.syurui == 2500) || (monsterObject.syurui == 3300)) || (monsterObject.syurui == 3600))) {
(monsterObject.pt = monsterObject.spt[0]);
(monsterObject.pth = 0);
break;
}
(monsterObject.pt = monsterObject.spt[((1 + this.g_ac) | 0)]);
(monsterObject.pth = monsterObject.muki);
break;
}
case 2450:
{
++monsterObject.c1;
if ((monsterObject.c1 >= 34)) {
(monsterObject.c = 2000);
(monsterObject.move_wc = 16);
}
if ((((monsterObject.syurui == 2500) || (monsterObject.syurui == 3300)) || (monsterObject.syurui == 3600))) {
(monsterObject.pt = monsterObject.spt[0]);
(monsterObject.pth = 0);
break;
}
(monsterObject.pt = monsterObject.spt[((1 + this.g_c1) | 0)]);
(monsterObject.pth = monsterObject.muki);
break;
}
case 2470:
{
++monsterObject.c1;
if ((monsterObject.c1 == 1)) {
this.mSet$9(n3, n4, 200, 90, -200, 0, monsterObject.zokusei, monsterObject.ap, n2);
}
else {
if ((monsterObject.c1 == 5)) {
this.mSet$9(n3, n4, 200, 60, -200, 0, monsterObject.zokusei, monsterObject.ap, n2);
}
else {
if ((monsterObject.c1 == 9)) {
this.mSet$9(n3, n4, 200, 105, -200, 0, monsterObject.zokusei, monsterObject.ap, n2);
}
else {
if ((monsterObject.c1 == 13)) {
this.mSet$9(n3, n4, 200, 45, -200, 0, monsterObject.zokusei, monsterObject.ap, n2);
}
else {
if ((monsterObject.c1 == 17)) {
this.mSet$9(n3, n4, 200, 75, -200, 0, monsterObject.zokusei, monsterObject.ap, n2);
}
else {
if ((monsterObject.c1 >= 20)) {
(monsterObject.c = 2000);
(monsterObject.move_wc = 16);
}
}
}
}
}
}
if ((((monsterObject.syurui == 2500) || (monsterObject.syurui == 3300)) || (monsterObject.syurui == 3600))) {
(monsterObject.pt = monsterObject.spt[0]);
(monsterObject.pth = 0);
break;
}
(monsterObject.pt = monsterObject.spt[((1 + this.g_ac) | 0)]);
(monsterObject.pth = monsterObject.muki);
break;
}
case 2480:
{
++monsterObject.c1;
if ((monsterObject.c1 == 1)) {
this.mSet$9(((n3 + 96) | 0), ((this.maps.wy - 32) | 0), 210, 0, 0, 1, monsterObject.zokusei, monsterObject.ap, n2);
}
else {
if ((monsterObject.c1 == 4)) {
this.mSet$9(((n3 - 96) | 0), ((this.maps.wy - 32) | 0), 210, 0, 0, 1, monsterObject.zokusei, monsterObject.ap, n2);
}
else {
if ((monsterObject.c1 == 7)) {
this.mSet$9(((n3 + 48) | 0), ((this.maps.wy - 32) | 0), 210, 0, 0, 1, monsterObject.zokusei, monsterObject.ap, n2);
}
else {
if ((monsterObject.c1 == 10)) {
this.mSet$9(((n3 - 48) | 0), ((this.maps.wy - 32) | 0), 210, 0, 0, 1, monsterObject.zokusei, monsterObject.ap, n2);
}
else {
if ((monsterObject.c1 == 13)) {
this.mSet$9(((((n3 - 96) | 0) - 32) | 0), ((this.maps.wy - 32) | 0), 210, 0, 0, 1, monsterObject.zokusei, monsterObject.ap, n2);
}
else {
if ((monsterObject.c1 == 16)) {
this.mSet$9(((((n3 + 96) | 0) + 32) | 0), ((this.maps.wy - 32) | 0), 210, 0, 0, 1, monsterObject.zokusei, monsterObject.ap, n2);
}
else {
if ((monsterObject.c1 == 19)) {
this.mSet$9(((n3 + 0) | 0), ((this.maps.wy - 32) | 0), 210, 0, 0, 1, monsterObject.zokusei, monsterObject.ap, n2);
}
else {
if ((monsterObject.c1 >= 21)) {
(monsterObject.c = 2000);
(monsterObject.move_wc = 16);
}
}
}
}
}
}
}
}
if ((((monsterObject.syurui == 2500) || (monsterObject.syurui == 3300)) || (monsterObject.syurui == 3600))) {
(monsterObject.pt = monsterObject.spt[0]);
(monsterObject.pth = 0);
break;
}
(monsterObject.pt = monsterObject.spt[((1 + this.g_ac) | 0)]);
(monsterObject.pth = monsterObject.muki);
break;
}
case 2530:
{
++monsterObject.c1;
if ((monsterObject.c1 >= 16)) {
(monsterObject.c = 2000);
(monsterObject.move_wc = 16);
}
if ((((monsterObject.syurui == 2500) || (monsterObject.syurui == 3300)) || (monsterObject.syurui == 3600))) {
(monsterObject.pt = monsterObject.spt[0]);
(monsterObject.pth = 0);
break;
}
(monsterObject.pt = monsterObject.spt[((1 + this.g_ac) | 0)]);
(monsterObject.pth = monsterObject.muki);
break;
}
case 2540:
{
--monsterObject.c1;
if ((monsterObject.c1 <= 0)) {
(monsterObject.hp = 0);
(monsterObject.c = 210);
(monsterObject.vy = -25);
(monsterObject.move_wc = 25);
}
(monsterObject.pt = monsterObject.spt[4]);
(monsterObject.pth = monsterObject.muki);
break;
}
case 2550:
{
++monsterObject.c1;
if ((monsterObject.c1 == 1)) {
this.mSet$9(((((n3 + 48) | 0) + 32) | 0), ((this.maps.wy - 32) | 0), 190, 0, 0, 0, monsterObject.zokusei, monsterObject.ap, n2);
}
else {
if ((monsterObject.c1 == 5)) {
this.mSet$9(((((n3 + 48) | 0) + 160) | 0), ((this.maps.wy - 32) | 0), 190, 0, 0, 0, monsterObject.zokusei, monsterObject.ap, n2);
}
else {
if ((monsterObject.c1 == 9)) {
this.mSet$9(((((n3 + 48) | 0) + 128) | 0), ((this.maps.wy - 32) | 0), 190, 0, 0, 0, monsterObject.zokusei, monsterObject.ap, n2);
}
else {
if ((monsterObject.c1 == 13)) {
this.mSet$9(((((n3 + 48) | 0) + 0) | 0), ((this.maps.wy - 32) | 0), 190, 0, 0, 0, monsterObject.zokusei, monsterObject.ap, n2);
}
else {
if ((monsterObject.c1 == 17)) {
this.mSet$9(((((n3 + 48) | 0) + 192) | 0), ((this.maps.wy - 32) | 0), 190, 0, 0, 0, monsterObject.zokusei, monsterObject.ap, n2);
}
else {
if ((monsterObject.c1 == 21)) {
this.mSet$9(((((n3 + 48) | 0) + 64) | 0), ((this.maps.wy - 32) | 0), 190, 0, 0, 0, monsterObject.zokusei, monsterObject.ap, n2);
}
else {
if ((monsterObject.c1 == 25)) {
this.mSet$9(((((n3 + 48) | 0) + 128) | 0), ((this.maps.wy - 32) | 0), 190, 0, 0, 0, monsterObject.zokusei, monsterObject.ap, n2);
}
else {
if ((monsterObject.c1 >= 28)) {
(monsterObject.c = 2000);
(monsterObject.move_wc = 16);
}
}
}
}
}
}
}
}
if ((((monsterObject.syurui == 2500) || (monsterObject.syurui == 3300)) || (monsterObject.syurui == 3600))) {
(monsterObject.pt = monsterObject.spt[0]);
(monsterObject.pth = 0);
break;
}
(monsterObject.pt = monsterObject.spt[((1 + this.g_ac) | 0)]);
(monsterObject.pth = monsterObject.muki);
break;
}
case 2560:
{
var n6 = 0;
++monsterObject.c1;
if (((monsterObject.c1 == 1) || (monsterObject.c1 == 5))) {
(monsterObject.muki = 1);
(n6 = this.pSearch$3(n3, n4, 1));
if ((n6 >= 0)) {
this.mSetNeraiuchi$10(n3, n4, 100, 0, 0, 0, monsterObject.zokusei, monsterObject.ap, n2, n6);
if ((this.co_w[n6].x < n3)) {
(monsterObject.muki = 0);
}
}
else {
this.mSet$9(n3, n4, 100, 150, 0, 0, monsterObject.zokusei, monsterObject.ap, n2);
}
}
else {
if ((monsterObject.c1 >= 8)) {
(monsterObject.c = 2000);
(monsterObject.move_wc = 16);
}
}
if ((((monsterObject.syurui == 2500) || (monsterObject.syurui == 3300)) || (monsterObject.syurui == 3600))) {
(monsterObject.pt = monsterObject.spt[0]);
(monsterObject.pth = 0);
break;
}
(monsterObject.pt = monsterObject.spt[((1 + this.g_ac) | 0)]);
(monsterObject.pth = monsterObject.muki);
break;
}
case 2620:
{
++monsterObject.c1;
if ((monsterObject.c1 >= 59)) {
(monsterObject.c = 2000);
(monsterObject.move_wc = 16);
}
if ((((monsterObject.c1 >= 8) && (monsterObject.c1 <= 52)) || ((monsterObject.c1 % 2) == 1))) {
(monsterObject.pt = 0);
(monsterObject.pth = 0);
break;
}
if ((((monsterObject.syurui == 2500) || (monsterObject.syurui == 3300)) || (monsterObject.syurui == 3600))) {
(monsterObject.pt = monsterObject.spt[0]);
(monsterObject.pth = 0);
break;
}
(monsterObject.pt = monsterObject.spt[((1 + this.g_ac) | 0)]);
(monsterObject.pth = monsterObject.muki);
break;
}
case 2640:
{
++monsterObject.c1;
if ((monsterObject.c1 == 1)) {
this.mSetKakudouchi$10(n3, n4, 100, 0, 0, 0, monsterObject.zokusei, monsterObject.ap, n2, 285);
}
else {
if ((monsterObject.c1 == 5)) {
this.mSetKakudouchi$10(n3, n4, 100, 0, 0, 0, monsterObject.zokusei, monsterObject.ap, n2, 295);
}
else {
if ((monsterObject.c1 == 9)) {
this.mSetKakudouchi$10(n3, n4, 100, 0, 0, 0, monsterObject.zokusei, monsterObject.ap, n2, 305);
}
else {
if ((monsterObject.c1 == 13)) {
this.mSetKakudouchi$10(n3, n4, 100, 0, 0, 0, monsterObject.zokusei, monsterObject.ap, n2, 315);
}
else {
if ((monsterObject.c1 == 17)) {
this.mSetKakudouchi$10(n3, n4, 100, 0, 0, 0, monsterObject.zokusei, monsterObject.ap, n2, 325);
}
else {
if ((monsterObject.c1 >= 20)) {
(monsterObject.c = 2000);
(monsterObject.move_wc = 16);
}
}
}
}
}
}
if ((((monsterObject.syurui == 2500) || (monsterObject.syurui == 3300)) || (monsterObject.syurui == 3600))) {
(monsterObject.pt = monsterObject.spt[0]);
(monsterObject.pth = 0);
break;
}
(monsterObject.pt = monsterObject.spt[((1 + this.g_ac) | 0)]);
(monsterObject.pth = monsterObject.muki);
break;
}
case 2900:
{
if ((monsterObject.move_wc > 0)) {
--monsterObject.move_wc;
}
if ((monsterObject.move_wc <= 0)) {
(monsterObject.vx = ((n3 > ((this.co_j.x + monsterObject.positionX) | 0)) ? -monsterObject.speed : ((n3 < ((this.co_j.x + monsterObject.positionX) | 0)) ? monsterObject.speed : 0)));
(n3 = ((n3 + J.div(monsterObject.vx, 10)) | 0));
if ((monsterObject.vx < 0)) {
if ((n3 <= ((this.co_j.x + monsterObject.positionX) | 0))) {
(n3 = ((this.co_j.x + monsterObject.positionX) | 0));
(monsterObject.vx = 0);
}
}
else {
if ((n3 >= ((this.co_j.x + monsterObject.positionX) | 0))) {
(n3 = ((this.co_j.x + monsterObject.positionX) | 0));
(monsterObject.vx = 0);
}
}
}
else {
(monsterObject.vx = 0);
}
if (((monsterObject.vx == 0) && (monsterObject.move_wc <= 0))) {
(monsterObject.move_wc = 30);
(monsterObject.c = 2000);
}
if ((Math.abs(((((this.co_j.y - 96) | 0) - n4) | 0)) <= 2)) {
(n4 = ((this.co_j.y - 96) | 0));
(monsterObject.vy = 0);
}
else {
(monsterObject.vy = ((((this.co_j.y - 96) | 0) < n4) ? -30 : ((((this.co_j.y - 96) | 0) > n4) ? 30 : 0)));
}
(n4 = ((n4 + J.div(monsterObject.vy, 10)) | 0));
if ((((monsterObject.syurui == 2500) || (monsterObject.syurui == 3300)) || (monsterObject.syurui == 3600))) {
(monsterObject.pt = monsterObject.spt[0]);
(monsterObject.pth = 0);
break;
}
(monsterObject.pt = monsterObject.spt[((1 + this.g_ac) | 0)]);
(monsterObject.pth = ((monsterObject.vx < 0) ? 0 : 1));
}
}
(monsterObject.x = n3);
(monsterObject.y = n4);
if ((monsterObject.fc > 0)) {
--monsterObject.fc;
}
if ((((((monsterObject.c > 50) && (((n3 - this.maps.wx) | 0) < 512)) && (((n3 - this.maps.wx) | 0) > -32)) && (((n4 - this.maps.wy) | 0) < 320)) && (((n4 - this.maps.wy) | 0) > -32))) {
(monsterObject.ss = 2);
if (((monsterObject.fc > 0) && (monsterObject.pth < 2))) {
(monsterObject.pth = ((monsterObject.pth + 2) | 0));
}
}
else {
(monsterObject.ss = 0);
}
}
++n2;
}
}
pWazaC$4(monsterObject, n, n2, n3) {
if ((monsterObject.meirei == 1)) {
(monsterObject.c = 210);
(monsterObject.vy = -175);
}
else {
if ((monsterObject.meirei == 2)) {
(monsterObject.c = 1100);
(monsterObject.vy = -240);
(monsterObject.muki = ((monsterObject.vx < 0) ? 0 : ((monsterObject.vx > 0) ? 1 : 1)));
}
else {
if ((monsterObject.meirei == 3)) {
(monsterObject.c = 1300);
(monsterObject.vx = 120);
(monsterObject.vy = 0);
(monsterObject.c1 = 12);
(monsterObject.taiatari_type = 1);
(monsterObject.muki = 1);
monsterObject.delPP$1(1);
}
else {
if ((monsterObject.meirei == 4)) {
(monsterObject.c = 1400);
(monsterObject.vx = 0);
(monsterObject.c1 = 8);
(monsterObject.meirei = 0);
(monsterObject.muki = 1);
this.mSet$9(n, n2, 100, 150, 0, 0, monsterObject.zokusei, monsterObject.ap, n3);
(monsterObject.pt = monsterObject.spt[0]);
(monsterObject.pth = monsterObject.muki);
monsterObject.delPP$1(3);
}
else {
if ((monsterObject.meirei == 5)) {
(monsterObject.c = 1610);
(monsterObject.vx = 0);
(monsterObject.c1 = 12);
this.mSetKakudouchi$10(n, n2, 100, 0, 0, 0, monsterObject.zokusei, monsterObject.ap, n3, 25);
this.mSetKakudouchi$10(n, n2, 100, 0, 0, 0, monsterObject.zokusei, monsterObject.ap, n3, 45);
this.mSetKakudouchi$10(n, n2, 100, 0, 0, 0, monsterObject.zokusei, monsterObject.ap, n3, 65);
(monsterObject.muki = 1);
(monsterObject.pt = monsterObject.spt[0]);
(monsterObject.pth = monsterObject.muki);
monsterObject.delPP$1(8);
}
else {
if ((monsterObject.meirei == 6)) {
(monsterObject.c = 1400);
(monsterObject.vx = 0);
(monsterObject.c1 = 8);
(monsterObject.meirei = 0);
(monsterObject.muki = 1);
this.mSet$9(n, n2, 110, 150, 0, 0, monsterObject.zokusei, monsterObject.ap, n3);
(monsterObject.pt = monsterObject.spt[0]);
(monsterObject.pth = monsterObject.muki);
monsterObject.delPP$1(3);
}
else {
if ((monsterObject.meirei == 7)) {
(monsterObject.c = 1430);
(monsterObject.vx = 0);
(monsterObject.c1 = 0);
(monsterObject.meirei = 0);
(monsterObject.muki = 1);
(monsterObject.pt = monsterObject.spt[0]);
(monsterObject.pth = monsterObject.muki);
monsterObject.delPP$1(8);
}
else {
if ((monsterObject.meirei == 8)) {
(monsterObject.c = 1400);
(monsterObject.vx = 0);
(monsterObject.c1 = 8);
(monsterObject.meirei = 0);
(monsterObject.muki = 1);
this.mSet$9(n, n2, 120, 150, 0, 0, monsterObject.zokusei, monsterObject.ap, n3);
(monsterObject.pt = monsterObject.spt[0]);
(monsterObject.pth = monsterObject.muki);
monsterObject.delPP$1(3);
}
else {
if ((monsterObject.meirei == 9)) {
(monsterObject.c = 1420);
(monsterObject.vx = 0);
(monsterObject.c1 = 12);
this.mSetKakudouchi$10(n, n2, 120, 0, 0, 0, monsterObject.zokusei, monsterObject.ap, n3, 0);
this.mSetKakudouchi$10(n, n2, 120, 0, 0, 0, monsterObject.zokusei, monsterObject.ap, n3, 36);
this.mSetKakudouchi$10(n, n2, 120, 0, 0, 0, monsterObject.zokusei, monsterObject.ap, n3, 72);
(monsterObject.muki = 1);
monsterObject.delPP$1(8);
}
else {
if ((monsterObject.meirei == 10)) {
(monsterObject.c = 1300);
(monsterObject.vx = 120);
(monsterObject.vy = 0);
(monsterObject.c1 = 12);
(monsterObject.taiatari_type = 2);
(monsterObject.muki = 1);
monsterObject.delPP$1(3);
}
else {
if ((monsterObject.meirei == 11)) {
(monsterObject.c = 1300);
(monsterObject.vx = 120);
(monsterObject.vy = 0);
(monsterObject.c1 = 12);
(monsterObject.taiatari_type = 3);
(monsterObject.muki = 1);
monsterObject.delPP$1(3);
}
else {
if ((monsterObject.meirei == 12)) {
(monsterObject.c = 1400);
(monsterObject.vx = 0);
(monsterObject.c1 = 8);
(monsterObject.muki = 1);
this.mSet$9(n, n2, 140, 80, -225, 0, monsterObject.zokusei, monsterObject.ap, n3);
(monsterObject.pt = monsterObject.spt[0]);
(monsterObject.pth = monsterObject.muki);
monsterObject.delPP$1(3);
}
else {
if ((monsterObject.meirei == 13)) {
(monsterObject.c = 1500);
(monsterObject.vx = 0);
(monsterObject.vy = -150);
(monsterObject.muki = 1);
(monsterObject.pt = monsterObject.spt[0]);
(monsterObject.pth = monsterObject.muki);
}
else {
if ((monsterObject.meirei == 14)) {
(monsterObject.c = 1400);
(monsterObject.c1 = 4);
(monsterObject.vx = 0);
(monsterObject.vy = 0);
var n4 = J.div(((n + 15) | 0), 32);
var n5 = J.div(((n2 + 32) | 0), 32);
this.maps.putBGCode$3(n4, n5, 0);
if ((this.maps.map_bg[n4][((n5 - 1) | 0)] == 3)) {
this.maps.putBGCode$3(n4, ((n5 - 1) | 0), 0);
}
(monsterObject.muki = 1);
(monsterObject.pt = monsterObject.spt[0]);
(monsterObject.pth = monsterObject.muki);
monsterObject.delPP$1(8);
}
else {
if ((monsterObject.meirei == 15)) {
(monsterObject.c = 1510);
(monsterObject.vx = 0);
(monsterObject.vy = -175);
(monsterObject.muki = 1);
(monsterObject.pt = monsterObject.spt[0]);
(monsterObject.pth = monsterObject.muki);
}
else {
if ((monsterObject.meirei == 16)) {
(monsterObject.c = 1400);
(monsterObject.vx = 0);
(monsterObject.c1 = 8);
(monsterObject.meirei = 0);
(monsterObject.muki = 1);
var n6 = this.pSearch$3(n, n2, 1);
if ((n6 >= 0)) {
this.mSetNeraiuchi$10(n, n2, 100, 0, 0, 0, monsterObject.zokusei, monsterObject.ap, n3, n6);
if ((this.co_w[n6].x < n)) {
(monsterObject.muki = 0);
}
}
else {
var d = Math.cos(0.0);
var d2 = Math.sin(0.0);
this.mSet$9(n, n2, 100, J.i((d * 150.0)), J.i((-d2 * 150.0)), 0, monsterObject.zokusei, monsterObject.ap, n3);
}
(monsterObject.pt = monsterObject.spt[0]);
(monsterObject.pth = monsterObject.muki);
monsterObject.delPP$1(4);
}
else {
if ((monsterObject.meirei == 17)) {
(monsterObject.c = 1300);
(monsterObject.vx = 120);
(monsterObject.vy = 0);
(monsterObject.c1 = 12);
(monsterObject.taiatari_type = 4);
(monsterObject.muki = 1);
monsterObject.delPP$1(3);
}
else {
if ((monsterObject.meirei == 18)) {
(monsterObject.c = 1350);
(monsterObject.vx = 30);
(monsterObject.vy = -255);
(monsterObject.taiatari_type = 5);
(monsterObject.muki = 1);
monsterObject.delPP$1(3);
}
else {
if ((monsterObject.meirei == 19)) {
(monsterObject.c = 1350);
(monsterObject.vx = 30);
(monsterObject.vy = -255);
(monsterObject.taiatari_type = 6);
(monsterObject.muki = 1);
monsterObject.delPP$1(3);
}
else {
if ((monsterObject.meirei == 20)) {
(monsterObject.c = 1440);
(monsterObject.vx = 0);
(monsterObject.c1 = 0);
(monsterObject.muki = 1);
this.mSet$9(n, n2, 1000, 0, 0, 0, monsterObject.zokusei, monsterObject.ap, n3);
(monsterObject.pt = monsterObject.spt[0]);
(monsterObject.pth = monsterObject.muki);
monsterObject.delPP$1(8);
}
else {
if ((monsterObject.meirei == 21)) {
(monsterObject.c = 1450);
(monsterObject.vx = 0);
(monsterObject.c1 = 0);
(monsterObject.meirei = 0);
(monsterObject.muki = 1);
this.mSet$9(n, n2, 1100, 0, 0, 0, monsterObject.zokusei, monsterObject.ap, n3);
(monsterObject.pt = monsterObject.spt[0]);
(monsterObject.pth = monsterObject.muki);
monsterObject.delPP$1(16);
}
else {
if ((monsterObject.meirei == 22)) {
(monsterObject.c = 1520);
(monsterObject.vx = 0);
(monsterObject.vy = -150);
(monsterObject.muki = 1);
var n7 = this.pSearch$3(n, n2, 3);
if ((n7 >= 0)) {
this.mSet$9(this.co_w[n7].x, n2, 1200, 0, 0, 0, monsterObject.zokusei, monsterObject.ap, n3);
}
else {
this.mSet$9(((n + 68) | 0), n2, 1200, 0, 0, 0, monsterObject.zokusei, monsterObject.ap, n3);
}
(monsterObject.pt = monsterObject.spt[0]);
(monsterObject.pth = monsterObject.muki);
monsterObject.delPP$1(8);
}
else {
if ((monsterObject.meirei == 24)) {
(monsterObject.c = 1400);
(monsterObject.vx = 0);
(monsterObject.c1 = 8);
(monsterObject.meirei = 0);
(monsterObject.muki = 1);
var n8 = this.pSearch$3(n, n2, 1);
if ((n8 >= 0)) {
this.mSetNeraiuchi$10(n, n2, 180, 0, 0, 0, monsterObject.zokusei, monsterObject.ap, n3, n8);
if ((this.co_w[n8].x < n)) {
(monsterObject.muki = 0);
}
}
else {
var d = Math.cos(0.0);
var d3 = Math.sin(0.0);
this.mSet$9(n, n2, 180, J.i((d * 150.0)), J.i((-d3 * 150.0)), 0, monsterObject.zokusei, monsterObject.ap, n3);
}
(monsterObject.pt = monsterObject.spt[0]);
(monsterObject.pth = monsterObject.muki);
monsterObject.delPP$1(4);
}
else {
if ((monsterObject.meirei == 25)) {
(monsterObject.c = 1460);
(monsterObject.vx = 0);
(monsterObject.c1 = 0);
(monsterObject.meirei = 0);
(monsterObject.muki = 1);
(monsterObject.pt = monsterObject.spt[0]);
(monsterObject.pth = monsterObject.muki);
monsterObject.delPP$1(8);
}
else {
if ((monsterObject.meirei == 28)) {
(monsterObject.c = 1400);
(monsterObject.vx = 0);
(monsterObject.c1 = 20);
(monsterObject.meirei = 0);
(monsterObject.muki = 1);
this.mSet$9(n, n2, 220, 30, 0, 0, monsterObject.zokusei, monsterObject.ap, n3);
this.mSet$9(n, n2, 220, 90, 0, 0, monsterObject.zokusei, monsterObject.ap, n3);
this.mSet$9(n, n2, 220, 150, 0, 0, monsterObject.zokusei, monsterObject.ap, n3);
this.mSet$9(n, n2, 220, 210, 0, 0, monsterObject.zokusei, monsterObject.ap, n3);
this.mSet$9(n, n2, 220, 270, 0, 0, monsterObject.zokusei, monsterObject.ap, n3);
this.mSet$9(n, n2, 220, 330, 0, 0, monsterObject.zokusei, monsterObject.ap, n3);
(monsterObject.pt = monsterObject.spt[0]);
(monsterObject.pth = monsterObject.muki);
monsterObject.delPP$1(8);
}
else {
if ((monsterObject.meirei == 30)) {
(monsterObject.c = 1400);
(monsterObject.vx = 0);
(monsterObject.c1 = 16);
(monsterObject.meirei = 0);
(monsterObject.muki = 1);
var n9 = this.pSearch$3(n, n2, 1);
if (((n9 >= 0) && (this.co_w[n9].x < n))) {
(monsterObject.muki = 0);
}
this.mSet$9(n, n2, 1300, 0, 0, 0, monsterObject.zokusei, monsterObject.ap, n3);
(monsterObject.pt = monsterObject.spt[0]);
(monsterObject.pth = monsterObject.muki);
monsterObject.delPP$1(8);
}
else {
if ((monsterObject.meirei == 31)) {
(monsterObject.c = 1480);
(monsterObject.vx = 0);
(monsterObject.c1 = 0);
(monsterObject.meirei = 0);
(monsterObject.muki = 1);
(monsterObject.pt = monsterObject.spt[0]);
(monsterObject.pth = monsterObject.muki);
monsterObject.delPP$1(8);
}
else {
if ((monsterObject.meirei == 32)) {
(monsterObject.c = 1490);
(monsterObject.vx = 0);
(monsterObject.c1 = 0);
(monsterObject.meirei = 0);
(monsterObject.muki = 1);
(monsterObject.pt = monsterObject.spt[0]);
(monsterObject.pth = monsterObject.muki);
monsterObject.delPP$1(12);
}
else {
if ((monsterObject.meirei == 33)) {
(monsterObject.c = 1400);
(monsterObject.vx = 0);
(monsterObject.c1 = 8);
(monsterObject.meirei = 0);
(monsterObject.muki = 1);
var n10 = this.pSearch$3(n, n2, 1);
if ((n10 >= 0)) {
this.mSetNeraiuchi$10(n, n2, 120, 0, 0, 0, monsterObject.zokusei, monsterObject.ap, n3, n10);
if ((this.co_w[n10].x < n)) {
(monsterObject.muki = 0);
}
}
else {
var d = Math.cos(0.0);
var d4 = Math.sin(0.0);
this.mSet$9(n, n2, 120, J.i((d * 150.0)), J.i((-d4 * 150.0)), 0, monsterObject.zokusei, monsterObject.ap, n3);
}
(monsterObject.pt = monsterObject.spt[0]);
(monsterObject.pth = monsterObject.muki);
monsterObject.delPP$1(4);
}
else {
if ((monsterObject.meirei == 34)) {
(monsterObject.c = 1530);
(monsterObject.vx = 0);
(monsterObject.c1 = 0);
(monsterObject.muki = 1);
this.mSet$9(n, n2, 1400, 0, 0, 0, monsterObject.zokusei, monsterObject.ap, n3);
(monsterObject.pt = monsterObject.spt[0]);
(monsterObject.pth = monsterObject.muki);
monsterObject.delPP$1(12);
}
else {
if ((monsterObject.meirei == 35)) {
(monsterObject.c = 1410);
(monsterObject.vx = 0);
(monsterObject.c1 = 45);
(monsterObject.muki = 1);
(monsterObject.pt = ((this.g_c3 <= 3) ? 193 : 194));
(monsterObject.pth = monsterObject.muki);
monsterObject.delPP$1(1);
}
else {
if ((monsterObject.meirei == 36)) {
(monsterObject.c = 1400);
(monsterObject.vx = 0);
(monsterObject.c1 = 8);
(monsterObject.meirei = 0);
(monsterObject.muki = 1);
this.mSet$9(n, n2, 270, 150, 0, 0, monsterObject.zokusei, monsterObject.ap, n3);
(monsterObject.pt = monsterObject.spt[0]);
(monsterObject.pth = monsterObject.muki);
monsterObject.delPP$1(3);
}
else {
if ((monsterObject.meirei == 37)) {
(monsterObject.c = 1600);
(monsterObject.vx = 0);
(monsterObject.c1 = 12);
this.mSetKakudouchi$10(n, n2, 270, 0, 0, 0, monsterObject.zokusei, monsterObject.ap, n3, 25);
this.mSetKakudouchi$10(n, n2, 270, 0, 0, 0, monsterObject.zokusei, monsterObject.ap, n3, 45);
this.mSetKakudouchi$10(n, n2, 270, 0, 0, 0, monsterObject.zokusei, monsterObject.ap, n3, 65);
(monsterObject.muki = 1);
(monsterObject.pt = monsterObject.spt[0]);
(monsterObject.pth = monsterObject.muki);
monsterObject.delPP$1(8);
}
else {
if ((monsterObject.meirei == 38)) {
(monsterObject.c = 1300);
(monsterObject.vx = 120);
(monsterObject.vy = 0);
(monsterObject.c1 = 12);
(monsterObject.taiatari_type = 7);
(monsterObject.muki = 1);
monsterObject.delPP$1(3);
}
else {
if (((monsterObject.meirei == 39) || (monsterObject.meirei == 55))) {
(monsterObject.c = 1400);
(monsterObject.vx = 0);
(monsterObject.c1 = 8);
(monsterObject.muki = 1);
var n11 = this.pSearch$3(n, n2, 1);
if ((n11 >= 0)) {
if ((monsterObject.meirei == 55)) {
this.mSetNeraiuchi$10(n, n2, 285, 0, 0, 0, monsterObject.zokusei, monsterObject.ap, n3, n11);
}
else {
this.mSetNeraiuchi$10(n, n2, 280, 0, 0, 0, monsterObject.zokusei, monsterObject.ap, n3, n11);
}
if ((this.co_w[n11].x < n)) {
(monsterObject.muki = 0);
}
}
else {
if ((monsterObject.meirei == 55)) {
this.mSet$9(n, n2, 285, 150, 0, 0, monsterObject.zokusei, monsterObject.ap, n3);
}
else {
this.mSet$9(n, n2, 280, 150, 0, 0, monsterObject.zokusei, monsterObject.ap, n3);
}
}
(monsterObject.pt = monsterObject.spt[0]);
(monsterObject.pth = monsterObject.muki);
if ((monsterObject.meirei == 55)) {
monsterObject.delPP$1(10);
}
else {
monsterObject.delPP$1(8);
}
}
else {
if (((monsterObject.meirei == 40) || (monsterObject.meirei == 61))) {
(monsterObject.c = 1400);
(monsterObject.vx = 0);
(monsterObject.c1 = 8);
(monsterObject.muki = 1);
var n12 = this.pSearch$3(n, n2, 1);
if ((n12 >= 0)) {
if ((monsterObject.meirei == 61)) {
this.mSetNeraiuchi$10(n, n2, 360, 0, 0, 0, monsterObject.zokusei, monsterObject.ap, n3, n12);
monsterObject.delPP$1(2);
}
else {
this.mSetNeraiuchi$10(n, n2, 290, 0, 0, 0, monsterObject.zokusei, monsterObject.ap, n3, n12);
}
if ((this.co_w[n12].x < n)) {
(monsterObject.muki = 0);
}
}
else {
if ((monsterObject.meirei == 61)) {
this.mSet$9(n, n2, 360, 150, 0, 0, monsterObject.zokusei, monsterObject.ap, n3);
monsterObject.delPP$1(2);
}
else {
if ((monsterObject.meirei == 61)) {
this.mSet$9(n, n2, 290, 150, 0, 0, monsterObject.zokusei, monsterObject.ap, n3);
}
}
}
(monsterObject.pt = monsterObject.spt[0]);
(monsterObject.pth = monsterObject.muki);
monsterObject.delPP$1(6);
}
else {
if ((monsterObject.meirei == 42)) {
(monsterObject.c = 1400);
(monsterObject.vx = 0);
(monsterObject.c1 = 8);
(monsterObject.muki = 1);
this.mSet$9(n, n2, 1500, 150, 0, 0, monsterObject.zokusei, monsterObject.ap, n3);
(monsterObject.pt = monsterObject.spt[0]);
(monsterObject.pth = monsterObject.muki);
monsterObject.delPP$1(8);
}
else {
if ((monsterObject.meirei == 45)) {
(monsterObject.c = 1560);
(monsterObject.vx = 0);
(monsterObject.c1 = 0);
(monsterObject.pt = monsterObject.spt[0]);
(monsterObject.pth = monsterObject.muki);
monsterObject.delPP$1(10);
}
else {
if ((monsterObject.meirei == 49)) {
(monsterObject.c = 1630);
(monsterObject.vx = 0);
(monsterObject.c1 = 0);
(monsterObject.meirei = 0);
(monsterObject.muki = 1);
(monsterObject.pt = monsterObject.spt[0]);
(monsterObject.pth = monsterObject.muki);
monsterObject.delPP$1(16);
}
else {
if ((monsterObject.meirei == 50)) {
(monsterObject.c = 1640);
(monsterObject.vx = 0);
(monsterObject.c1 = 0);
(monsterObject.meirei = 0);
(monsterObject.muki = 1);
(monsterObject.pt = monsterObject.spt[0]);
(monsterObject.pth = monsterObject.muki);
monsterObject.delPP$1(18);
}
else {
if ((monsterObject.meirei == 51)) {
(monsterObject.c = 1350);
(monsterObject.vx = 0);
(monsterObject.vy = -285);
(monsterObject.taiatari_type = 8);
(monsterObject.muki = 1);
monsterObject.delPP$1(3);
}
else {
if ((monsterObject.meirei == 56)) {
(monsterObject.c = 1300);
(monsterObject.vx = 120);
(monsterObject.vy = 0);
(monsterObject.c1 = 12);
(monsterObject.taiatari_type = 10);
(monsterObject.muki = 1);
monsterObject.delPP$1(8);
}
else {
if ((monsterObject.meirei == 57)) {
(monsterObject.c = 1530);
(monsterObject.vx = 0);
(monsterObject.c1 = 0);
(monsterObject.muki = 1);
this.mSet$9(n, n2, 1405, 0, 0, 0, monsterObject.zokusei, monsterObject.ap, n3);
(monsterObject.pt = monsterObject.spt[0]);
(monsterObject.pth = monsterObject.muki);
monsterObject.delPP$1(18);
}
else {
if ((monsterObject.meirei == 58)) {
(monsterObject.c = 1505);
(monsterObject.vx = 0);
(monsterObject.vy = -150);
(monsterObject.muki = 1);
(monsterObject.pt = monsterObject.spt[0]);
(monsterObject.pth = monsterObject.muki);
}
else {
if ((monsterObject.meirei == 59)) {
(monsterObject.c = 1400);
(monsterObject.vx = 0);
(monsterObject.c1 = 16);
(monsterObject.meirei = 0);
(monsterObject.muki = 1);
var n13 = this.pSearch$3(n, n2, 1);
if (((n13 >= 0) && (this.co_w[n13].x < n))) {
(monsterObject.muki = 0);
}
this.mSet$9(n, n2, 1305, 0, 0, 0, monsterObject.zokusei, monsterObject.ap, n3);
(monsterObject.pt = monsterObject.spt[0]);
(monsterObject.pth = monsterObject.muki);
monsterObject.delPP$1(10);
}
else {
if ((monsterObject.meirei == 60)) {
(monsterObject.c = 1650);
(monsterObject.vx = 0);
(monsterObject.c1 = 0);
(monsterObject.muki = 1);
(monsterObject.pt = monsterObject.spt[0]);
(monsterObject.pth = monsterObject.muki);
monsterObject.delPP$1(24);
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
}
(monsterObject.meirei = 0);
}
pWazaK$4(monsterObject, n, n2, n3) {
if ((monsterObject.meirei == 1)) {
(monsterObject.c = 210);
(monsterObject.vy = -125);
}
else {
if ((monsterObject.meirei == 3)) {
(monsterObject.c = 2300);
(monsterObject.vx = 120);
(monsterObject.vy = 0);
(monsterObject.c1 = 12);
(monsterObject.taiatari_type = 1);
(monsterObject.muki = 1);
monsterObject.delPP$1(1);
}
else {
if ((monsterObject.meirei == 6)) {
(monsterObject.c = 2400);
(monsterObject.vx = 0);
(monsterObject.c1 = 8);
(monsterObject.meirei = 0);
(monsterObject.muki = 1);
this.mSet$9(n, n2, 110, 150, 0, 0, monsterObject.zokusei, monsterObject.ap, n3);
monsterObject.delPP$1(3);
}
else {
if ((monsterObject.meirei == 7)) {
(monsterObject.c = 2430);
(monsterObject.vx = 0);
(monsterObject.c1 = 0);
(monsterObject.meirei = 0);
(monsterObject.muki = 1);
monsterObject.delPP$1(8);
}
else {
if ((monsterObject.meirei == 17)) {
(monsterObject.c = 2300);
(monsterObject.vx = 120);
(monsterObject.vy = 0);
(monsterObject.c1 = 12);
(monsterObject.taiatari_type = 4);
(monsterObject.muki = 1);
monsterObject.delPP$1(3);
}
else {
if ((monsterObject.meirei == 21)) {
(monsterObject.c = 2450);
(monsterObject.vx = 0);
(monsterObject.c1 = 0);
(monsterObject.meirei = 0);
(monsterObject.muki = 1);
this.mSet$9(n, n2, 1100, 0, 0, 0, monsterObject.zokusei, monsterObject.ap, n3);
monsterObject.delPP$1(16);
}
else {
if ((monsterObject.meirei == 13)) {
(monsterObject.c = 2400);
(monsterObject.vx = 0);
(monsterObject.c1 = 16);
(monsterObject.meirei = 0);
(monsterObject.muki = 1);
(this.jishin_c = 1);
this.mSet$9(n, n2, 1700, 150, 0, 0, monsterObject.zokusei, monsterObject.ap, n3);
monsterObject.delPP$1(14);
}
else {
if ((monsterObject.meirei == 22)) {
(monsterObject.c = 2400);
(monsterObject.vx = 0);
(monsterObject.c1 = 16);
(monsterObject.muki = 1);
var n4 = this.pSearch$3(n, n2, 3);
if ((n4 >= 0)) {
this.mSet$9(this.co_w[n4].x, n2, 1200, 0, 0, 0, monsterObject.zokusei, monsterObject.ap, n3);
if ((this.co_w[n4].x < n)) {
(monsterObject.muki = 0);
}
}
else {
this.mSet$9(((n + 68) | 0), n2, 1200, 0, 0, 0, monsterObject.zokusei, monsterObject.ap, n3);
}
monsterObject.delPP$1(8);
}
else {
if ((monsterObject.meirei == 23)) {
(monsterObject.c = 2400);
(monsterObject.vx = 0);
(monsterObject.c1 = 8);
(monsterObject.meirei = 0);
(monsterObject.muki = 1);
this.mSet$9(n, n2, 170, 200, 0, 0, monsterObject.zokusei, monsterObject.ap, n3);
monsterObject.delPP$1(3);
}
else {
if ((monsterObject.meirei == 24)) {
(monsterObject.c = 2400);
(monsterObject.vx = 0);
(monsterObject.c1 = 8);
(monsterObject.meirei = 0);
(monsterObject.muki = 1);
var n5 = this.pSearch$3(n, n2, 1);
if ((n5 >= 0)) {
this.mSetNeraiuchi$10(n, n2, 180, 0, 0, 0, monsterObject.zokusei, monsterObject.ap, n3, n5);
if ((this.co_w[n5].x < n)) {
(monsterObject.muki = 0);
}
}
else {
var d = Math.cos(0.0);
var d2 = Math.sin(0.0);
this.mSet$9(n, n2, 180, J.i((d * 150.0)), J.i((-d2 * 150.0)), 0, monsterObject.zokusei, monsterObject.ap, n3);
}
monsterObject.delPP$1(4);
}
else {
if ((monsterObject.meirei == 11)) {
(monsterObject.c = 2300);
(monsterObject.vx = 90);
(monsterObject.vy = 90);
(monsterObject.c1 = 13);
(monsterObject.taiatari_type = 3);
(monsterObject.muki = 1);
monsterObject.delPP$1(3);
}
else {
if ((monsterObject.meirei == 14)) {
(monsterObject.c = 2310);
(monsterObject.vx = 0);
(monsterObject.vy = 90);
(monsterObject.c1 = 17);
(monsterObject.taiatari_type = 1);
(monsterObject.muki = 1);
monsterObject.delPP$1(8);
}
else {
if (((((((monsterObject.meirei == 15) || (monsterObject.meirei == 16)) || (monsterObject.meirei == 33)) || (monsterObject.meirei == 40)) || (monsterObject.meirei == 46)) || (monsterObject.meirei == 61))) {
var n6 = 0;
(monsterObject.c = 2400);
(monsterObject.vx = 0);
(monsterObject.c1 = 8);
if ((monsterObject.meirei == 16)) {
(n6 = 100);
}
else {
if ((monsterObject.meirei == 33)) {
(n6 = 120);
}
else {
if ((monsterObject.meirei == 40)) {
(n6 = 290);
monsterObject.delPP$1(2);
}
else {
if ((monsterObject.meirei == 46)) {
(n6 = 320);
monsterObject.delPP$1(2);
}
else {
if ((monsterObject.meirei == 61)) {
(n6 = 360);
monsterObject.delPP$1(4);
}
else {
(n6 = 160);
}
}
}
}
}
(monsterObject.muki = 1);
var n7 = this.pSearch$3(n, n2, 1);
if ((n7 >= 0)) {
this.mSetNeraiuchi$10(n, n2, n6, 0, 0, 0, monsterObject.zokusei, monsterObject.ap, n3, n7);
if ((this.co_w[n7].x < n)) {
(monsterObject.muki = 0);
}
}
else {
this.mSet$9(n, n2, n6, 150, 0, 0, monsterObject.zokusei, monsterObject.ap, n3);
}
monsterObject.delPP$1(4);
}
else {
if ((monsterObject.meirei == 26)) {
(monsterObject.c = 2470);
(monsterObject.vx = 0);
(monsterObject.c1 = 0);
(monsterObject.meirei = 0);
(monsterObject.muki = 1);
monsterObject.delPP$1(8);
}
else {
if ((monsterObject.meirei == 29)) {
(monsterObject.c = 2400);
(monsterObject.vx = 0);
(monsterObject.c1 = 20);
(monsterObject.meirei = 0);
(monsterObject.muki = 1);
this.mSet$9(n, n2, 230, 0, 0, 0, monsterObject.zokusei, monsterObject.ap, n3);
this.mSet$9(n, n2, 230, 72, 0, 0, monsterObject.zokusei, monsterObject.ap, n3);
this.mSet$9(n, n2, 230, 144, 0, 0, monsterObject.zokusei, monsterObject.ap, n3);
this.mSet$9(n, n2, 230, 216, 0, 0, monsterObject.zokusei, monsterObject.ap, n3);
this.mSet$9(n, n2, 230, 288, 0, 0, monsterObject.zokusei, monsterObject.ap, n3);
monsterObject.delPP$1(8);
}
else {
if ((monsterObject.meirei == 30)) {
(monsterObject.c = 2400);
(monsterObject.vx = 0);
(monsterObject.c1 = 16);
(monsterObject.meirei = 0);
(monsterObject.muki = 1);
var n8 = this.pSearch$3(n, n2, 1);
if (((n8 >= 0) && (this.co_w[n8].x < n))) {
(monsterObject.muki = 0);
}
this.mSet$9(n, n2, 1300, 0, 0, 0, monsterObject.zokusei, monsterObject.ap, n3);
monsterObject.delPP$1(8);
}
else {
if ((monsterObject.meirei == 27)) {
(monsterObject.c = 2480);
(monsterObject.vx = 0);
(monsterObject.c1 = 0);
(monsterObject.muki = 1);
monsterObject.delPP$1(12);
}
else {
if ((monsterObject.meirei == 34)) {
(monsterObject.c = 2530);
(monsterObject.vx = 0);
(monsterObject.c1 = 0);
(monsterObject.muki = 1);
this.mSet$9(n, n2, 1400, 0, 0, 0, monsterObject.zokusei, monsterObject.ap, n3);
monsterObject.delPP$1(12);
}
else {
if (((monsterObject.meirei == 39) || (monsterObject.meirei == 55))) {
(monsterObject.c = 2400);
(monsterObject.vx = 0);
(monsterObject.c1 = 8);
(monsterObject.muki = 1);
var n9 = this.pSearch$3(n, n2, 1);
if ((n9 >= 0)) {
if ((monsterObject.meirei == 55)) {
this.mSetNeraiuchi$10(n, n2, 285, 0, 0, 0, monsterObject.zokusei, monsterObject.ap, n3, n9);
}
else {
this.mSetNeraiuchi$10(n, n2, 280, 0, 0, 0, monsterObject.zokusei, monsterObject.ap, n3, n9);
}
if ((this.co_w[n9].x < n)) {
(monsterObject.muki = 0);
}
}
else {
if ((monsterObject.meirei == 55)) {
this.mSet$9(n, n2, 285, 150, 0, 0, monsterObject.zokusei, monsterObject.ap, n3);
}
else {
this.mSet$9(n, n2, 280, 150, 0, 0, monsterObject.zokusei, monsterObject.ap, n3);
}
}
if ((monsterObject.meirei == 55)) {
monsterObject.delPP$1(10);
}
else {
monsterObject.delPP$1(8);
}
}
else {
if ((monsterObject.meirei == 41)) {
(monsterObject.c = 2540);
(monsterObject.vx = 0);
(monsterObject.c1 = 18);
(monsterObject.meirei = 0);
(monsterObject.muki = 1);
this.mSetKakudouchi$10(n, n2, 300, 0, 0, 0, monsterObject.zokusei, monsterObject.ap, n3, 0);
this.mSetKakudouchi$10(n, n2, 300, 0, 0, 0, monsterObject.zokusei, monsterObject.ap, n3, 270);
this.mSetKakudouchi$10(n, n2, 300, 0, 0, 0, monsterObject.zokusei, monsterObject.ap, n3, 180);
this.mSetKakudouchi$10(n, n2, 300, 0, 0, 0, monsterObject.zokusei, monsterObject.ap, n3, 90);
this.mSetKakudouchi$10(n, n2, 300, 0, 0, 0, monsterObject.zokusei, monsterObject.ap, n3, 330);
this.mSetKakudouchi$10(n, n2, 300, 0, 0, 0, monsterObject.zokusei, monsterObject.ap, n3, 240);
this.mSetKakudouchi$10(n, n2, 300, 0, 0, 0, monsterObject.zokusei, monsterObject.ap, n3, 150);
this.mSetKakudouchi$10(n, n2, 300, 0, 0, 0, monsterObject.zokusei, monsterObject.ap, n3, 60);
this.mSetKakudouchi$10(n, n2, 300, 0, 0, 0, monsterObject.zokusei, monsterObject.ap, n3, 300);
this.mSetKakudouchi$10(n, n2, 300, 0, 0, 0, monsterObject.zokusei, monsterObject.ap, n3, 210);
this.mSetKakudouchi$10(n, n2, 300, 0, 0, 0, monsterObject.zokusei, monsterObject.ap, n3, 120);
this.mSetKakudouchi$10(n, n2, 300, 0, 0, 0, monsterObject.zokusei, monsterObject.ap, n3, 30);
monsterObject.delPP$1(1);
}
else {
if ((monsterObject.meirei == 42)) {
(monsterObject.c = 2400);
(monsterObject.vx = 0);
(monsterObject.c1 = 8);
(monsterObject.muki = 1);
this.mSet$9(n, n2, 1500, 150, 0, 0, monsterObject.zokusei, monsterObject.ap, n3);
monsterObject.delPP$1(8);
}
else {
if ((monsterObject.meirei == 43)) {
(monsterObject.c = 2550);
(monsterObject.vx = 0);
(monsterObject.c1 = 0);
(monsterObject.muki = 1);
monsterObject.delPP$1(18);
}
else {
if ((monsterObject.meirei == 44)) {
(monsterObject.c = 2400);
(monsterObject.vx = 0);
(monsterObject.c1 = 20);
(monsterObject.muki = 1);
this.mSet$9(n, n2, 310, 30, 0, 0, monsterObject.zokusei, monsterObject.ap, n3);
this.mSet$9(n, n2, 310, 90, 0, 0, monsterObject.zokusei, monsterObject.ap, n3);
this.mSet$9(n, n2, 310, 150, 0, 0, monsterObject.zokusei, monsterObject.ap, n3);
this.mSet$9(n, n2, 310, 210, 0, 0, monsterObject.zokusei, monsterObject.ap, n3);
this.mSet$9(n, n2, 310, 270, 0, 0, monsterObject.zokusei, monsterObject.ap, n3);
this.mSet$9(n, n2, 310, 330, 0, 0, monsterObject.zokusei, monsterObject.ap, n3);
monsterObject.delPP$1(14);
}
else {
if ((monsterObject.meirei == 45)) {
(monsterObject.c = 2560);
(monsterObject.vx = 0);
(monsterObject.c1 = 0);
monsterObject.delPP$1(10);
}
else {
if ((monsterObject.meirei == 47)) {
(monsterObject.c = 2620);
(monsterObject.vx = 0);
(monsterObject.c1 = 0);
(monsterObject.meirei = 0);
(monsterObject.muki = 1);
monsterObject.delPP$1(10);
}
else {
if ((monsterObject.meirei == 48)) {
(monsterObject.c = 2450);
(monsterObject.vx = 0);
(monsterObject.c1 = 0);
(monsterObject.meirei = 0);
(monsterObject.muki = 1);
this.mSet$9(n, n2, 1800, 0, 0, 0, monsterObject.zokusei, monsterObject.ap, n3);
monsterObject.delPP$1(10);
}
else {
if ((monsterObject.meirei == 52)) {
(monsterObject.c = 2640);
(monsterObject.vx = 0);
(monsterObject.c1 = 0);
(monsterObject.muki = 1);
monsterObject.delPP$1(8);
}
else {
if ((monsterObject.meirei == 53)) {
(monsterObject.c = 2300);
(monsterObject.vx = 120);
(monsterObject.vy = 0);
(monsterObject.c1 = 12);
(monsterObject.taiatari_type = 9);
(monsterObject.muki = 1);
monsterObject.delPP$1(3);
}
else {
if ((monsterObject.meirei == 54)) {
(monsterObject.c = 2400);
(monsterObject.vx = 0);
(monsterObject.c1 = 12);
(monsterObject.meirei = 0);
(monsterObject.muki = 1);
var n10 = this.pSearch$3(n, n2, 1);
if (((n10 >= 0) && (this.co_w[n10].x < n))) {
(monsterObject.muki = 0);
}
this.mSet$9(n, n2, 1900, 0, 0, 0, monsterObject.zokusei, monsterObject.ap, n3);
monsterObject.delPP$1(10);
}
else {
if ((monsterObject.meirei == 57)) {
(monsterObject.c = 2530);
(monsterObject.vx = 0);
(monsterObject.c1 = 0);
(monsterObject.muki = 1);
this.mSet$9(n, n2, 1405, 0, 0, 0, monsterObject.zokusei, monsterObject.ap, n3);
monsterObject.delPP$1(18);
}
else {
if ((monsterObject.meirei == 58)) {
(monsterObject.c = 2400);
(monsterObject.vx = 0);
(monsterObject.c1 = 16);
(monsterObject.meirei = 0);
(monsterObject.muki = 1);
(this.jishin_c = 1);
this.mSet$9(n, n2, 1705, 150, 0, 0, monsterObject.zokusei, monsterObject.ap, n3);
monsterObject.delPP$1(18);
}
else {
if ((monsterObject.meirei == 59)) {
(monsterObject.c = 2400);
(monsterObject.vx = 0);
(monsterObject.c1 = 16);
(monsterObject.muki = 1);
var n11 = this.pSearch$3(n, n2, 1);
if (((n11 >= 0) && (this.co_w[n11].x < n))) {
(monsterObject.muki = 0);
}
this.mSet$9(n, n2, 1305, 0, 0, 0, monsterObject.zokusei, monsterObject.ap, n3);
monsterObject.delPP$1(10);
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
(monsterObject.meirei = 0);
}
pSearch$3(n, n2, n3) {
var n4 = -1;
var n5 = 9999;
var n6 = 0;
while ((n6 <= this.w_kazu)) {
if (((this.co_w[n6].c != 2620) && !((n3 == 0) ? (this.co_w[n6].c < 1000) : ((n3 == 1) ? (this.co_w[n6].c < 1100) : ((n3 == 2) ? (((((((this.co_w[n6].c < 1100) || (this.co_w[n6].hp >= this.co_w[n6].hp_max)) || (((n - 144) | 0) > this.co_w[n6].x)) || (((n + 64) | 0) < this.co_w[n6].x)) || (((n2 - 160) | 0) > this.co_w[n6].y)) || (this.maps.getBGCode$2(((n + 15) | 0), ((n2 - 1) | 0)) >= 20)) || ((n == this.co_w[n6].x) && (n2 == this.co_w[n6].y))) : ((n3 == 3) && ((this.co_w[n6].c < 1100) || (Math.abs(((n - this.co_w[n6].x) | 0)) > 112)))))))) {
var n7 = 0;
var monsterObject = this.co_w[n6];
if (((monsterObject.ss >= 2) && ((n7 = ((Math.abs(((monsterObject.x - n) | 0)) + Math.abs(((monsterObject.y - n2) | 0))) | 0)) < n5))) {
(n4 = n6);
(n5 = n7);
}
}
++n6;
}
return n4;
}
wSet$3(n, n2, n3) {
var n4 = 0;
while ((n4 <= 99)) {
if ((this.co_w[n4].c <= 0)) {
++this.w_kazu;
var monsterObject = this.co_w[n4];
monsterObject.init$0();
var monsterObject2 = new MonsterObject();
monsterObject2.initSyurui$2(n3, this);
(monsterObject.c = 11000);
(monsterObject.syurui = monsterObject2.syurui);
(monsterObject.c1 = 0);
(monsterObject.c2 = 0);
(monsterObject.c3 = 0);
(monsterObject.c4 = 0);
(monsterObject.x = n);
(monsterObject.y = n2);
(monsterObject.hp = monsterObject2.hp_max);
(monsterObject.hp_max = monsterObject2.hp_max);
(monsterObject.pp = monsterObject2.pp_max);
(monsterObject.pp_max = monsterObject2.pp_max);
(monsterObject.ap = monsterObject2.ap);
(monsterObject.dp = monsterObject2.dp);
(monsterObject.zokusei = monsterObject2.zokusei);
(monsterObject.type = monsterObject2.type);
(monsterObject.spt[0] = monsterObject2.spt[0]);
(monsterObject.spt[1] = monsterObject2.spt[1]);
(monsterObject.spt[2] = monsterObject2.spt[2]);
(monsterObject.spt[3] = monsterObject2.spt[3]);
(monsterObject.spt[4] = monsterObject2.spt[4]);
(monsterObject.waza_code[0] = monsterObject2.waza_code[0]);
(monsterObject.waza_code[1] = monsterObject2.waza_code[1]);
(monsterObject.positionX = n);
(monsterObject.positionY = n2);
(monsterObject.name = monsterObject2.name);
(monsterObject.mn = monsterObject2.mn);
(monsterObject.seibetu = this.ranInt$1(2));
(monsterObject.tukauwaza = monsterObject2.tukauwaza);
(monsterObject.ahs = monsterObject2.ahs);
if ((monsterObject.syurui == 3800)) {
(monsterObject.seibetu = ((this.ranInt$1(4) == 0) ? 0 : 1));
}
else {
if ((monsterObject.syurui == 3900)) {
(monsterObject.seibetu = ((this.ranInt$1(4) == 0) ? 1 : 0));
}
}
(monsterObject.c_kihon = monsterObject2.c_kihon);
(monsterObject.c_kihon2 = monsterObject2.c_kihon2);
(monsterObject.c = monsterObject2.c_kihon);
if (((monsterObject.syurui < 4700) || (monsterObject.syurui > 4900))) {
break;
}
(monsterObject.c = 30);
(monsterObject.x = ((monsterObject.x + 120) | 0));
break;
}
++n4;
}
}
wSetGym$4(n, n2, n3, n4) {
(this.w_kazu = 10);
var monsterObject = this.co_w[n4];
monsterObject.init$0();
var monsterObject2 = new MonsterObject();
if ((n3 == 50)) {
monsterObject2.initSyurui$2(1400, this);
}
else {
monsterObject2.initSyurui$2(n3, this);
}
(monsterObject.c = 11000);
(monsterObject.syurui = monsterObject2.syurui);
(monsterObject.c1 = 0);
(monsterObject.c2 = 0);
(monsterObject.c3 = 0);
(monsterObject.c4 = 0);
(monsterObject.x = n);
(monsterObject.y = n2);
(monsterObject.hp = monsterObject2.hp_max);
(monsterObject.hp_max = monsterObject2.hp_max);
(monsterObject.pp = monsterObject2.pp_max);
(monsterObject.pp_max = monsterObject2.pp_max);
(monsterObject.ap = monsterObject2.ap);
(monsterObject.dp = monsterObject2.dp);
(monsterObject.zokusei = monsterObject2.zokusei);
(monsterObject.type = monsterObject2.type);
(monsterObject.spt[0] = monsterObject2.spt[0]);
(monsterObject.spt[1] = monsterObject2.spt[1]);
(monsterObject.spt[2] = monsterObject2.spt[2]);
(monsterObject.spt[3] = monsterObject2.spt[3]);
(monsterObject.spt[4] = monsterObject2.spt[4]);
(monsterObject.waza_code[0] = monsterObject2.waza_code[0]);
(monsterObject.waza_code[1] = monsterObject2.waza_code[1]);
(monsterObject.positionX = n);
(monsterObject.positionY = n2);
(monsterObject.name = monsterObject2.name);
(monsterObject.mn = monsterObject2.mn);
(monsterObject.seibetu = this.ranInt$1(2));
(monsterObject.tukauwaza = monsterObject2.tukauwaza);
(monsterObject.c_kihon = monsterObject2.c_kihon);
(monsterObject.c_kihon2 = monsterObject2.c_kihon2);
(monsterObject.c = monsterObject2.c_kihon);
if ((n3 == 50)) {
(monsterObject.c = 50);
(monsterObject.spt[0] = 270);
(monsterObject.mn = 0);
}
}
wSetGymFromPet$2(n, n2) {
(this.w_kazu = 10);
var monsterObject = this.co_w[n];
var monsterObject2 = this.co_p[n2];
this.copyMonsterObject$2(monsterObject2, monsterObject);
(monsterObject.c_kihon = 1100);
if ((monsterObject.type == 1)) {
(monsterObject.c_kihon = 2000);
}
(monsterObject.c = 60);
(monsterObject.x = 32);
(monsterObject.y = 32);
}
wMove$0() {
var n = ((this.maps.wx + 640) | 0);
var n2 = ((this.maps.wx - 128) | 0);
var n3 = 0;
while ((n3 <= this.w_kazu)) {
if ((this.co_w[n3].c != 0)) {
var monsterObject = this.co_w[n3];
var n4 = monsterObject.x;
var n5 = monsterObject.y;
if (((n4 > n) || (n4 < n2))) {
(monsterObject.ss = 0);
}
else {
(monsterObject.ss = 1);
(monsterObject.taiatari_f = false);
if ((this.gym_f && !this.race_f)) {
(monsterObject.positionX = (this.gym_double_f ? ((n3 == 0) ? ((this.co_w[10].x - 128) | 0) : ((this.co_w[10].x - 64) | 0)) : ((this.co_w[10].x - 64) | 0)));
}
var n6 = monsterObject.c;
if (((this.race_f && (this.km.mode < 5100)) && (n6 >= 1100))) {
(n6 = ((monsterObject.type == 1) ? 2950 : 1950));
}
switch (n6) {
case 30:
{
(monsterObject.pt = 0);
(monsterObject.pth = 0);
if ((this.sl_step < 2)) {
break;
}
(monsterObject.c = 15900);
break;
}
case 31:
{
(monsterObject.pt = 0);
(monsterObject.pth = 0);
break;
}
case 40:
{
(monsterObject.pt = 0);
(monsterObject.pth = 0);
break;
}
case 50:
{
(monsterObject.pt = monsterObject.spt[0]);
(monsterObject.pth = 0);
break;
}
case 200:
{
(n4 = ((n4 + J.div(monsterObject.vx, 10)) | 0));
(monsterObject.vy = ((monsterObject.vy + 25) | 0));
if ((monsterObject.vy > 180)) {
(monsterObject.vy = 180);
}
if (((monsterObject.vy > 0) && (this.maps.getBGCode$2(((n4 + 15) | 0), (((n5 = ((n5 + J.div(monsterObject.vy, 10)) | 0)) + 31) | 0)) >= 20))) {
(n5 = ((Math.imul(J.div(((n5 + 31) | 0), 32), 32) - 32) | 0));
(monsterObject.vx = 0);
(monsterObject.c = 1100);
(monsterObject.muki = 0);
(monsterObject.vx = 0);
(monsterObject.meirei = 0);
(monsterObject.move_wc = 30);
}
if (((monsterObject.type == 1) && (monsterObject.vy >= 0))) {
(monsterObject.c = 2000);
(monsterObject.muki = 0);
(monsterObject.vx = 0);
(monsterObject.meirei = 0);
(monsterObject.move_wc = 30);
}
(monsterObject.pt = ((monsterObject.pb_type > 0) ? ((26 + Math.imul(monsterObject.pb_type, 10)) | 0) : 82));
(monsterObject.pth = 0);
break;
}
case 210:
{
(monsterObject.vy = ((monsterObject.vy + 25) | 0));
if ((monsterObject.vy > 180)) {
(monsterObject.vy = 180);
}
if (((monsterObject.vy > 0) && (this.maps.getBGCode$2(((n4 + 15) | 0), (((n5 = ((n5 + J.div(monsterObject.vy, 10)) | 0)) + 25) | 0)) >= 20))) {
(n5 = ((Math.imul(J.div(((n5 + 25) | 0), 32), 32) - 26) | 0));
}
(monsterObject.pt = ((this.co_w[n3].pb_type > 0) ? ((29 + Math.imul(this.co_w[n3].pb_type, 10)) | 0) : 88));
(monsterObject.pth = 0);
break;
}
case 1000:
{
--monsterObject.c1;
if ((monsterObject.c1 <= 0)) {
(monsterObject.c = 0);
if (!this.race_f) {
this.addScore$1(1);
}
if (((monsterObject.syurui >= 4700) && (monsterObject.syurui <= 4900))) {
this.addScore$1(9);
(this.stage_cc = 1);
(this.ig.zukan_tukamaeta_f[monsterObject.mn] = true);
}
}
if ((this.g_c1 == 0)) {
(monsterObject.pt = monsterObject.c2);
if ((monsterObject.pth == 2)) {
(monsterObject.pth = 0);
}
else {
if ((monsterObject.pth == 3)) {
(monsterObject.pth = 1);
}
}
}
else {
(monsterObject.pt = 0);
}
if ((!this.gym_f || this.race_f)) {
break;
}
(monsterObject.c = 210);
(monsterObject.vy = -150);
(n5 = ((n5 + J.div(monsterObject.vy, 10)) | 0));
(monsterObject.pt = ((this.co_w[n3].pb_type > 0) ? ((29 + Math.imul(this.co_w[n3].pb_type, 10)) | 0) : 88));
(monsterObject.pth = 0);
break;
}
case 1001:
{
--monsterObject.c1;
if ((monsterObject.c1 <= 0)) {
(monsterObject.c = 0);
}
if ((this.g_c1 == 0)) {
(monsterObject.pt = monsterObject.c2);
if ((monsterObject.pth == 2)) {
(monsterObject.pth = 0);
break;
}
if ((monsterObject.pth != 3)) {
break;
}
(monsterObject.pth = 1);
break;
}
(monsterObject.pt = 0);
break;
}
case 1100:
{
if ((monsterObject.move_wc > 0)) {
(monsterObject.move_wc = ((monsterObject.speed > 0) ? --monsterObject.move_wc : 10));
if ((n4 == monsterObject.positionX)) {
(monsterObject.vx = 0);
(monsterObject.move_wc = ((25 + Math.imul(n3, 8)) | 0));
if (this.gym_f) {
(monsterObject.move_wc = 30);
}
}
if ((monsterObject.move_wc <= 0)) {
if ((n4 > monsterObject.positionX)) {
(monsterObject.vx = -monsterObject.speed);
}
else {
if ((n4 < monsterObject.positionX)) {
(monsterObject.vx = monsterObject.speed);
}
else {
(monsterObject.vx = 0);
(monsterObject.move_wc = ((25 + Math.imul(n3, 5)) | 0));
if (this.gym_f) {
(monsterObject.move_wc = 30);
}
}
}
}
}
else {
(n4 = ((n4 + J.div(monsterObject.vx, 10)) | 0));
if ((monsterObject.vx < 0)) {
if (((this.maps.getBGCode$2(((n4 + 15) | 0), n5) >= 20) || (this.maps.getBGCode$2(((n4 + 15) | 0), ((n5 + 31) | 0)) >= 20))) {
(n4 = ((((Math.imul(J.div(((n4 + 15) | 0), 32), 32) + 32) | 0) - 15) | 0));
}
if ((n4 <= monsterObject.positionX)) {
(n4 = monsterObject.positionX);
(monsterObject.move_wc = ((30 + Math.imul(n3, 5)) | 0));
(monsterObject.vx = 0);
if (this.gym_f) {
(monsterObject.move_wc = 30);
}
}
}
else {
if (((this.maps.getBGCode$2(((n4 + 15) | 0), n5) >= 20) || (this.maps.getBGCode$2(((n4 + 15) | 0), ((n5 + 31) | 0)) >= 20))) {
(n4 = ((Math.imul(J.div(((n4 + 15) | 0), 32), 32) - 16) | 0));
}
if ((n4 >= monsterObject.positionX)) {
(n4 = monsterObject.positionX);
(monsterObject.move_wc = ((30 + Math.imul(n3, 5)) | 0));
(monsterObject.vx = 0);
if (this.gym_f) {
(monsterObject.move_wc = 30);
}
}
}
}
if ((monsterObject.pp <= 0)) {
(monsterObject.meirei = 1);
}
if ((monsterObject.vx == 0)) {
(monsterObject.pt = monsterObject.spt[0]);
(monsterObject.pth = 0);
}
else {
if ((monsterObject.vx < 0)) {
(monsterObject.pt = monsterObject.spt[((1 + this.g_ac) | 0)]);
(monsterObject.pth = 0);
}
else {
(monsterObject.pt = monsterObject.spt[((1 + this.g_ac) | 0)]);
(monsterObject.pth = 1);
}
}
if ((monsterObject.meirei <= 0)) {
break;
}
if ((monsterObject.meirei == 14)) {
(n4 = Math.imul(J.div(((n4 + 15) | 0), 32), 32));
}
this.wWazaC$5(monsterObject, n4, n5, n3, 0);
break;
}
case 1300:
{
(monsterObject.taiatari_f = true);
(n4 = ((n4 + J.div(monsterObject.vx, 10)) | 0));
if ((monsterObject.vx < 0)) {
if (((this.maps.getBGCode$2(((n4 + 15) | 0), n5) >= 20) || (this.maps.getBGCode$2(((n4 + 15) | 0), ((n5 + 31) | 0)) >= 20))) {
(n4 = ((((Math.imul(J.div(((n4 + 15) | 0), 32), 32) + 32) | 0) - 15) | 0));
(monsterObject.c = monsterObject.c_kihon);
(monsterObject.c1 = 0);
(monsterObject.c = 11030);
}
if ((this.maps.getBGCode$2(((n4 + 15) | 0), ((n5 + 32) | 0)) < 20)) {
(n4 = ((((Math.imul(J.div(((n4 + 15) | 0), 32), 32) + 32) | 0) - 15) | 0));
(monsterObject.c = monsterObject.c_kihon);
(monsterObject.c1 = 0);
(monsterObject.c = 11030);
}
}
else {
if (((this.maps.getBGCode$2(((n4 + 15) | 0), n5) >= 20) || (this.maps.getBGCode$2(((n4 + 15) | 0), ((n5 + 31) | 0)) >= 20))) {
(n4 = ((Math.imul(J.div(((n4 + 15) | 0), 32), 32) - 16) | 0));
(monsterObject.c = monsterObject.c_kihon);
(monsterObject.c1 = 0);
(monsterObject.c = 11030);
}
if ((this.maps.getBGCode$2(((n4 + 15) | 0), ((n5 + 32) | 0)) < 20)) {
(n4 = ((Math.imul(J.div(((n4 + 15) | 0), 32), 32) - 16) | 0));
(monsterObject.c = monsterObject.c_kihon);
(monsterObject.c1 = 0);
(monsterObject.c = 11030);
}
}
--monsterObject.c1;
if ((monsterObject.c1 <= 0)) {
(monsterObject.c = monsterObject.c_kihon);
(monsterObject.vx = 0);
(monsterObject.c1 = 0);
(monsterObject.move_wc = 25);
}
if ((this.gym_f && (n4 <= ((this.co_j.x - 48) | 0)))) {
(n4 = ((this.co_j.x - 48) | 0));
(monsterObject.vx = 0);
(monsterObject.c1 = 0);
(monsterObject.c = 1900);
(monsterObject.move_wc = 25);
}
(monsterObject.pt = monsterObject.spt[4]);
if ((monsterObject.vx <= 0)) {
(monsterObject.pth = 0);
break;
}
(monsterObject.pth = 1);
break;
}
case 1350:
{
(monsterObject.taiatari_f = true);
(n4 = ((n4 + J.div(monsterObject.vx, 10)) | 0));
if ((monsterObject.vx < 0)) {
if (((this.maps.getBGCode$2(((n4 + 15) | 0), n5) >= 20) || (this.maps.getBGCode$2(((n4 + 15) | 0), ((n5 + 31) | 0)) >= 20))) {
(n4 = ((((Math.imul(J.div(((n4 + 15) | 0), 32), 32) + 32) | 0) - 15) | 0));
(monsterObject.vx = 0);
}
}
else {
if (((this.maps.getBGCode$2(((n4 + 15) | 0), n5) >= 20) || (this.maps.getBGCode$2(((n4 + 15) | 0), ((n5 + 31) | 0)) >= 20))) {
(n4 = ((Math.imul(J.div(((n4 + 15) | 0), 32), 32) - 16) | 0));
(monsterObject.vx = 0);
}
}
(monsterObject.vy = ((monsterObject.vy + 25) | 0));
if ((monsterObject.vy > 180)) {
(monsterObject.vy = 180);
}
(n5 = ((n5 + J.div(monsterObject.vy, 10)) | 0));
if ((monsterObject.vy < 0)) {
if ((this.maps.getBGCode$2(((n4 + 15) | 0), n5) >= 20)) {
(n5 = ((Math.imul(J.div(n5, 32), 32) + 32) | 0));
(monsterObject.vy = 0);
}
}
else {
if (((monsterObject.vy > 0) && (this.maps.getBGCode$2(((n4 + 15) | 0), ((n5 + 31) | 0)) >= 20))) {
(n5 = ((Math.imul(J.div(((n5 + 31) | 0), 32), 32) - 32) | 0));
(monsterObject.vx = 0);
(monsterObject.move_wc = 30);
(monsterObject.c = monsterObject.c_kihon);
(monsterObject.c1 = 0);
}
}
if ((n5 >= this.ochiru_y)) {
(monsterObject.syurui = 0);
(monsterObject.c = 0);
}
(monsterObject.pt = monsterObject.spt[4]);
(monsterObject.pth = monsterObject.muki);
break;
}
case 1400:
{
--monsterObject.c1;
if ((monsterObject.c1 <= 0)) {
(monsterObject.c = monsterObject.c_kihon);
(monsterObject.c1 = 0);
(monsterObject.move_wc = 25);
}
(monsterObject.pt = monsterObject.spt[0]);
(monsterObject.pth = monsterObject.muki);
break;
}
case 1410:
{
--monsterObject.c1;
if ((monsterObject.c1 <= 0)) {
(monsterObject.c = monsterObject.c_kihon);
(monsterObject.move_wc = 25);
}
(monsterObject.pt = ((this.g_c3 <= 3) ? 193 : 194));
(monsterObject.pth = monsterObject.muki);
break;
}
case 1420:
{
--monsterObject.c1;
if ((monsterObject.c1 <= 0)) {
(monsterObject.c = monsterObject.c_kihon);
(monsterObject.c1 = 0);
(monsterObject.move_wc = 25);
}
if ((monsterObject.c1 == 6)) {
if ((monsterObject.muki == 0)) {
this.mSetKakudouchi$10(n4, n5, 120, 0, 0, 1, monsterObject.zokusei, monsterObject.ap, n3, 162);
this.mSetKakudouchi$10(n4, n5, 120, 0, 0, 1, monsterObject.zokusei, monsterObject.ap, n3, 126);
}
else {
this.mSetKakudouchi$10(n4, n5, 120, 0, 0, 1, monsterObject.zokusei, monsterObject.ap, n3, 18);
this.mSetKakudouchi$10(n4, n5, 120, 0, 0, 1, monsterObject.zokusei, monsterObject.ap, n3, 54);
}
}
(monsterObject.pt = monsterObject.spt[0]);
(monsterObject.pth = monsterObject.muki);
break;
}
case 1430:
{
++monsterObject.c1;
if ((monsterObject.muki == 0)) {
if ((monsterObject.c1 == 1)) {
this.mSet$9(n4, n5, 140, -90, -225, 1, monsterObject.zokusei, monsterObject.ap, n3);
}
else {
if ((monsterObject.c1 == 5)) {
this.mSet$9(n4, n5, 140, -60, -225, 1, monsterObject.zokusei, monsterObject.ap, n3);
}
else {
if ((monsterObject.c1 == 9)) {
this.mSet$9(n4, n5, 140, -105, -225, 1, monsterObject.zokusei, monsterObject.ap, n3);
}
else {
if ((monsterObject.c1 == 13)) {
this.mSet$9(n4, n5, 140, -45, -225, 1, monsterObject.zokusei, monsterObject.ap, n3);
}
else {
if ((monsterObject.c1 == 17)) {
this.mSet$9(n4, n5, 140, -75, -225, 1, monsterObject.zokusei, monsterObject.ap, n3);
}
else {
if ((monsterObject.c1 >= 20)) {
(monsterObject.c = monsterObject.c_kihon);
(monsterObject.c1 = 0);
(monsterObject.move_wc = 25);
}
}
}
}
}
}
}
else {
if ((monsterObject.c1 == 1)) {
this.mSet$9(n4, n5, 140, 90, -225, 1, monsterObject.zokusei, monsterObject.ap, n3);
}
else {
if ((monsterObject.c1 == 5)) {
this.mSet$9(n4, n5, 140, 60, -225, 1, monsterObject.zokusei, monsterObject.ap, n3);
}
else {
if ((monsterObject.c1 == 9)) {
this.mSet$9(n4, n5, 140, 105, -225, 1, monsterObject.zokusei, monsterObject.ap, n3);
}
else {
if ((monsterObject.c1 == 13)) {
this.mSet$9(n4, n5, 140, 45, -225, 1, monsterObject.zokusei, monsterObject.ap, n3);
}
else {
if ((monsterObject.c1 == 17)) {
this.mSet$9(n4, n5, 140, 75, -225, 1, monsterObject.zokusei, monsterObject.ap, n3);
}
else {
if ((monsterObject.c1 >= 20)) {
(monsterObject.c = monsterObject.c_kihon);
(monsterObject.c1 = 0);
(monsterObject.move_wc = 25);
}
}
}
}
}
}
}
(monsterObject.pt = monsterObject.spt[0]);
(monsterObject.pth = monsterObject.muki);
break;
}
case 1440:
{
++monsterObject.c1;
if ((monsterObject.c1 >= 41)) {
(monsterObject.c = monsterObject.c_kihon);
(monsterObject.c1 = 0);
(monsterObject.move_wc = 25);
}
(monsterObject.pt = ((monsterObject.c1 < 23) ? monsterObject.spt[0] : monsterObject.spt[4]));
(monsterObject.pth = monsterObject.muki);
break;
}
case 1450:
{
++monsterObject.c1;
if ((monsterObject.c1 >= 34)) {
(monsterObject.c = monsterObject.c_kihon);
(monsterObject.c1 = 0);
(monsterObject.move_wc = 25);
}
(monsterObject.pt = ((monsterObject.c1 < 16) ? monsterObject.spt[0] : monsterObject.spt[4]));
(monsterObject.pth = monsterObject.muki);
break;
}
case 1460:
{
++monsterObject.c1;
if ((monsterObject.muki == 0)) {
if ((monsterObject.c1 == 1)) {
this.mSet$9(((((n4 - 64) | 0) - 84) | 0), ((this.maps.wy - 32) | 0), 190, 0, 0, 1, monsterObject.zokusei, monsterObject.ap, n3);
}
else {
if ((monsterObject.c1 == 5)) {
this.mSet$9(((((n4 - 64) | 0) - 28) | 0), ((this.maps.wy - 32) | 0), 190, 0, 0, 1, monsterObject.zokusei, monsterObject.ap, n3);
}
else {
if ((monsterObject.c1 == 9)) {
this.mSet$9(((((n4 - 64) | 0) - 112) | 0), ((this.maps.wy - 32) | 0), 190, 0, 0, 1, monsterObject.zokusei, monsterObject.ap, n3);
}
else {
if ((monsterObject.c1 == 13)) {
this.mSet$9(((((n4 - 64) | 0) - 0) | 0), ((this.maps.wy - 32) | 0), 190, 0, 0, 1, monsterObject.zokusei, monsterObject.ap, n3);
}
else {
if ((monsterObject.c1 == 17)) {
this.mSet$9(((((n4 - 64) | 0) - 56) | 0), ((this.maps.wy - 32) | 0), 190, 0, 0, 1, monsterObject.zokusei, monsterObject.ap, n3);
}
else {
if ((monsterObject.c1 >= 20)) {
(monsterObject.c = monsterObject.c_kihon);
(monsterObject.c1 = 0);
(monsterObject.move_wc = 25);
}
}
}
}
}
}
}
else {
if ((monsterObject.c1 == 1)) {
this.mSet$9(((((n4 + 64) | 0) + 84) | 0), ((this.maps.wy - 32) | 0), 190, 0, 0, 1, monsterObject.zokusei, monsterObject.ap, n3);
}
else {
if ((monsterObject.c1 == 5)) {
this.mSet$9(((((n4 + 64) | 0) + 28) | 0), ((this.maps.wy - 32) | 0), 190, 0, 0, 1, monsterObject.zokusei, monsterObject.ap, n3);
}
else {
if ((monsterObject.c1 == 9)) {
this.mSet$9(((((n4 + 64) | 0) + 112) | 0), ((this.maps.wy - 32) | 0), 190, 0, 0, 1, monsterObject.zokusei, monsterObject.ap, n3);
}
else {
if ((monsterObject.c1 == 13)) {
this.mSet$9(((((n4 + 64) | 0) + 0) | 0), ((this.maps.wy - 32) | 0), 190, 0, 0, 1, monsterObject.zokusei, monsterObject.ap, n3);
}
else {
if ((monsterObject.c1 == 17)) {
this.mSet$9(((((n4 + 64) | 0) + 56) | 0), ((this.maps.wy - 32) | 0), 190, 0, 0, 1, monsterObject.zokusei, monsterObject.ap, n3);
}
else {
if ((monsterObject.c1 >= 20)) {
(monsterObject.c = monsterObject.c_kihon);
(monsterObject.c1 = 0);
(monsterObject.move_wc = 25);
}
}
}
}
}
}
}
(monsterObject.pt = monsterObject.spt[0]);
(monsterObject.pth = monsterObject.muki);
break;
}
case 1480:
{
++monsterObject.c1;
if ((monsterObject.c1 == 1)) {
this.mSet$9(n4, n5, 250, -50, -240, 1, monsterObject.zokusei, monsterObject.ap, n3);
}
else {
if ((monsterObject.c1 == 5)) {
this.mSet$9(n4, n5, 250, 50, -240, 1, monsterObject.zokusei, monsterObject.ap, n3);
}
else {
if ((monsterObject.c1 == 9)) {
this.mSet$9(n4, n5, 250, -110, -240, 1, monsterObject.zokusei, monsterObject.ap, n3);
}
else {
if ((monsterObject.c1 == 13)) {
this.mSet$9(n4, n5, 250, 20, -240, 1, monsterObject.zokusei, monsterObject.ap, n3);
}
else {
if ((monsterObject.c1 == 17)) {
this.mSet$9(n4, n5, 250, -80, -240, 1, monsterObject.zokusei, monsterObject.ap, n3);
}
else {
if ((monsterObject.c1 == 21)) {
this.mSet$9(n4, n5, 250, -140, -240, 1, monsterObject.zokusei, monsterObject.ap, n3);
}
else {
if ((monsterObject.c1 == 25)) {
this.mSet$9(n4, n5, 250, -20, -240, 1, monsterObject.zokusei, monsterObject.ap, n3);
}
else {
if ((monsterObject.c1 >= 28)) {
(monsterObject.c = monsterObject.c_kihon);
(monsterObject.c1 = 0);
(monsterObject.move_wc = 25);
}
}
}
}
}
}
}
}
(monsterObject.pt = monsterObject.spt[0]);
(monsterObject.pth = monsterObject.muki);
break;
}
case 1490:
{
++monsterObject.c1;
if ((monsterObject.c1 == 1)) {
this.mSet$9(n4, n5, 260, -60, -240, 0, monsterObject.zokusei, monsterObject.ap, n3);
}
else {
if ((monsterObject.c1 == 5)) {
this.mSet$9(n4, n5, 260, 30, -240, 0, monsterObject.zokusei, monsterObject.ap, n3);
}
else {
if ((monsterObject.c1 == 9)) {
this.mSet$9(n4, n5, 260, -30, -240, 0, monsterObject.zokusei, monsterObject.ap, n3);
}
else {
if ((monsterObject.c1 == 13)) {
this.mSet$9(n4, n5, 260, 60, -240, 0, monsterObject.zokusei, monsterObject.ap, n3);
}
else {
if ((monsterObject.c1 == 17)) {
this.mSet$9(n4, n5, 260, -90, -240, 0, monsterObject.zokusei, monsterObject.ap, n3);
}
else {
if ((monsterObject.c1 == 21)) {
this.mSet$9(n4, n5, 260, 0, -240, 0, monsterObject.zokusei, monsterObject.ap, n3);
}
else {
if ((monsterObject.c1 >= 24)) {
(monsterObject.c = monsterObject.c_kihon);
(monsterObject.c1 = 0);
(monsterObject.move_wc = 25);
}
}
}
}
}
}
}
(monsterObject.pt = monsterObject.spt[0]);
(monsterObject.pth = monsterObject.muki);
break;
}
case 1500:
{
(monsterObject.vy = ((monsterObject.vy + 25) | 0));
if ((monsterObject.vy > 180)) {
(monsterObject.vy = 180);
}
(n5 = ((n5 + J.div(monsterObject.vy, 10)) | 0));
if ((monsterObject.vy < 0)) {
if ((this.maps.getBGCode$2(((n4 + 15) | 0), n5) >= 20)) {
(n5 = ((Math.imul(J.div(n5, 32), 32) + 32) | 0));
(monsterObject.vy = 0);
}
}
else {
if (((monsterObject.vy > 0) && (this.maps.getBGCode$2(((n4 + 15) | 0), ((n5 + 31) | 0)) >= 20))) {
(n5 = ((Math.imul(J.div(((n5 + 31) | 0), 32), 32) - 32) | 0));
(monsterObject.vx = 0);
(monsterObject.c = monsterObject.c_kihon);
(monsterObject.c1 = 0);
(monsterObject.move_wc = 30);
(this.jishin_c = 1);
this.mSet$9(n4, n5, 1700, -150, 0, 1, monsterObject.zokusei, monsterObject.ap, n3);
monsterObject.delPP$1(14);
}
}
if ((n5 >= this.ochiru_y)) {
(monsterObject.syurui = 0);
(monsterObject.c = 0);
}
(monsterObject.pt = monsterObject.spt[0]);
(monsterObject.pth = monsterObject.muki);
break;
}
case 1505:
{
(monsterObject.vy = ((monsterObject.vy + 25) | 0));
if ((monsterObject.vy > 180)) {
(monsterObject.vy = 180);
}
(n5 = ((n5 + J.div(monsterObject.vy, 10)) | 0));
if ((monsterObject.vy < 0)) {
if ((this.maps.getBGCode$2(((n4 + 15) | 0), n5) >= 20)) {
(n5 = ((Math.imul(J.div(n5, 32), 32) + 32) | 0));
(monsterObject.vy = 0);
}
}
else {
if (((monsterObject.vy > 0) && (this.maps.getBGCode$2(((n4 + 15) | 0), ((n5 + 31) | 0)) >= 20))) {
(n5 = ((Math.imul(J.div(((n5 + 31) | 0), 32), 32) - 32) | 0));
(monsterObject.vx = 0);
(monsterObject.c = monsterObject.c_kihon);
(monsterObject.c1 = 0);
(monsterObject.move_wc = 30);
(this.jishin_c = 1);
this.mSet$9(n4, n5, 1705, -150, 0, 1, monsterObject.zokusei, monsterObject.ap, n3);
monsterObject.delPP$1(18);
}
}
if ((n5 >= this.ochiru_y)) {
(monsterObject.syurui = 0);
(monsterObject.c = 0);
}
(monsterObject.pt = monsterObject.spt[0]);
(monsterObject.pth = monsterObject.muki);
break;
}
case 1510:
{
var d = 0;
var d2 = 0;
(monsterObject.vy = ((monsterObject.vy + 25) | 0));
if ((monsterObject.vy > 180)) {
(monsterObject.vy = 180);
}
if ((monsterObject.vy == 0)) {
(n6 = this.wSearch$3(n4, n5, 6));
if ((n6 >= 0)) {
this.mSetNeraiuchi$10(n4, n5, 160, 0, 0, 1, monsterObject.zokusei, monsterObject.ap, n3, n6);
(monsterObject.muki = 0);
if ((this.co_p[n6].x > n4)) {
(monsterObject.muki = 1);
}
}
else {
(d2 = Math.cos(3.490658503988659));
(d = Math.sin(3.490658503988659));
this.mSet$9(n4, n5, 160, J.i((d2 * 150.0)), J.i((-d * 150.0)), 1, monsterObject.zokusei, monsterObject.ap, n3);
(monsterObject.muki = 0);
}
monsterObject.delPP$1(4);
}
(n5 = ((n5 + J.div(monsterObject.vy, 10)) | 0));
if ((monsterObject.vy < 0)) {
if ((this.maps.getBGCode$2(((n4 + 15) | 0), n5) >= 20)) {
(n5 = ((Math.imul(J.div(n5, 32), 32) + 32) | 0));
(monsterObject.vy = 0);
(n6 = this.wSearch$3(n4, n5, 4));
if ((n6 >= 0)) {
this.mSetNeraiuchi$10(n4, n5, 160, 0, 0, 1, monsterObject.zokusei, monsterObject.ap, n3, n6);
(monsterObject.muki = 0);
if ((this.co_p[n6].x > n4)) {
(monsterObject.muki = 1);
}
}
else {
(d2 = Math.cos(3.490658503988659));
(d = Math.sin(3.490658503988659));
this.mSet$9(n4, n5, 160, J.i((d2 * 150.0)), J.i((-d * 150.0)), 1, monsterObject.zokusei, monsterObject.ap, n3);
(monsterObject.muki = 0);
}
monsterObject.delPP$1(4);
}
}
else {
if (((monsterObject.vy > 0) && (this.maps.getBGCode$2(((n4 + 15) | 0), ((n5 + 31) | 0)) >= 20))) {
(n5 = ((Math.imul(J.div(((n5 + 31) | 0), 32), 32) - 32) | 0));
(monsterObject.vx = 0);
(monsterObject.c = monsterObject.c_kihon);
(monsterObject.c1 = 0);
(monsterObject.move_wc = 30);
}
}
if ((n5 >= this.ochiru_y)) {
(monsterObject.syurui = 0);
(monsterObject.c = 0);
}
(monsterObject.pt = monsterObject.spt[0]);
(monsterObject.pth = monsterObject.muki);
if (((monsterObject.syurui != 2300) || (monsterObject.vy >= 0))) {
break;
}
(monsterObject.pt = 108);
break;
}
case 1520:
{
(monsterObject.vy = ((monsterObject.vy + 25) | 0));
if ((monsterObject.vy > 180)) {
(monsterObject.vy = 180);
}
(n5 = ((n5 + J.div(monsterObject.vy, 10)) | 0));
if ((monsterObject.vy < 0)) {
if ((this.maps.getBGCode$2(((n4 + 15) | 0), n5) >= 20)) {
(n5 = ((Math.imul(J.div(n5, 32), 32) + 32) | 0));
(monsterObject.vy = 0);
}
}
else {
if (((monsterObject.vy > 0) && (this.maps.getBGCode$2(((n4 + 15) | 0), ((n5 + 31) | 0)) >= 20))) {
(n5 = ((Math.imul(J.div(((n5 + 31) | 0), 32), 32) - 32) | 0));
(monsterObject.vx = 0);
(monsterObject.move_wc = 30);
(monsterObject.c = monsterObject.c_kihon);
(monsterObject.c1 = 0);
}
}
if ((n5 >= this.ochiru_y)) {
(monsterObject.syurui = 0);
(monsterObject.c = 0);
}
(monsterObject.pt = monsterObject.spt[0]);
(monsterObject.pth = monsterObject.muki);
if (((monsterObject.syurui != 2300) || (monsterObject.vy >= 0))) {
break;
}
(monsterObject.pt = 108);
break;
}
case 1530:
{
++monsterObject.c1;
if ((monsterObject.c1 >= 16)) {
(monsterObject.c = monsterObject.c_kihon);
(monsterObject.c1 = 0);
(monsterObject.move_wc = 25);
}
(monsterObject.pt = monsterObject.spt[0]);
(monsterObject.pth = monsterObject.muki);
break;
}
case 1560:
{
++monsterObject.c1;
if (((monsterObject.c1 == 1) || (monsterObject.c1 == 5))) {
(n6 = this.wSearch$3(n4, n5, 6));
if ((n6 >= 0)) {
this.mSetNeraiuchi$10(n4, n5, 100, 0, 0, 1, monsterObject.zokusei, monsterObject.ap, n3, n6);
(monsterObject.muki = 0);
if ((this.co_p[n6].x > n4)) {
(monsterObject.muki = 1);
}
}
else {
this.mSet$9(n4, n5, 100, -150, 0, 1, monsterObject.zokusei, monsterObject.ap, n3);
(monsterObject.muki = 0);
}
}
else {
if ((monsterObject.c1 >= 8)) {
(monsterObject.c = monsterObject.c_kihon);
(monsterObject.c1 = 0);
(monsterObject.move_wc = 25);
}
}
(monsterObject.pt = monsterObject.spt[0]);
(monsterObject.pth = monsterObject.muki);
break;
}
case 1600:
{
--monsterObject.c1;
if ((monsterObject.c1 <= 0)) {
(monsterObject.c = monsterObject.c_kihon);
(monsterObject.c1 = 0);
(monsterObject.move_wc = 25);
}
if ((monsterObject.c1 == 6)) {
if ((monsterObject.muki == 0)) {
this.mSetKakudouchi$10(n4, n5, 270, 0, 0, 1, monsterObject.zokusei, monsterObject.ap, n3, 145);
this.mSetKakudouchi$10(n4, n5, 270, 0, 0, 1, monsterObject.zokusei, monsterObject.ap, n3, 125);
}
else {
this.mSetKakudouchi$10(n4, n5, 270, 0, 0, 1, monsterObject.zokusei, monsterObject.ap, n3, 35);
this.mSetKakudouchi$10(n4, n5, 270, 0, 0, 1, monsterObject.zokusei, monsterObject.ap, n3, 55);
}
}
(monsterObject.pt = monsterObject.spt[0]);
(monsterObject.pth = monsterObject.muki);
break;
}
case 1610:
{
--monsterObject.c1;
if ((monsterObject.c1 <= 0)) {
(monsterObject.c = monsterObject.c_kihon);
(monsterObject.c1 = 0);
(monsterObject.move_wc = 25);
}
if ((monsterObject.c1 == 6)) {
if ((monsterObject.muki == 0)) {
this.mSetKakudouchi$10(n4, n5, 100, 0, 0, 1, monsterObject.zokusei, monsterObject.ap, n3, 145);
this.mSetKakudouchi$10(n4, n5, 100, 0, 0, 1, monsterObject.zokusei, monsterObject.ap, n3, 125);
}
else {
this.mSetKakudouchi$10(n4, n5, 100, 0, 0, 1, monsterObject.zokusei, monsterObject.ap, n3, 35);
this.mSetKakudouchi$10(n4, n5, 100, 0, 0, 1, monsterObject.zokusei, monsterObject.ap, n3, 55);
}
}
(monsterObject.pt = monsterObject.spt[0]);
(monsterObject.pth = monsterObject.muki);
break;
}
case 1630:
{
++monsterObject.c1;
if ((monsterObject.c1 == 1)) {
this.mSet$9(((n4 - 96) | 0), ((this.maps.wy - 32) | 0), 330, 0, 0, 0, monsterObject.zokusei, monsterObject.ap, n3);
}
else {
if ((monsterObject.c1 == 4)) {
this.mSet$9(((n4 + 48) | 0), ((this.maps.wy - 32) | 0), 330, 0, 0, 0, monsterObject.zokusei, monsterObject.ap, n3);
}
else {
if ((monsterObject.c1 == 7)) {
this.mSet$9(((n4 - 48) | 0), ((this.maps.wy - 32) | 0), 330, 0, 0, 0, monsterObject.zokusei, monsterObject.ap, n3);
}
else {
if ((monsterObject.c1 == 10)) {
this.mSet$9(((n4 - 192) | 0), ((this.maps.wy - 32) | 0), 330, 0, 0, 0, monsterObject.zokusei, monsterObject.ap, n3);
}
else {
if ((monsterObject.c1 == 13)) {
this.mSet$9(((n4 - 0) | 0), ((this.maps.wy - 32) | 0), 330, 0, 0, 0, monsterObject.zokusei, monsterObject.ap, n3);
}
else {
if ((monsterObject.c1 == 16)) {
this.mSet$9(((n4 + 96) | 0), ((this.maps.wy - 32) | 0), 330, 0, 0, 0, monsterObject.zokusei, monsterObject.ap, n3);
}
else {
if ((monsterObject.c1 == 19)) {
this.mSet$9(((n4 - 144) | 0), ((this.maps.wy - 32) | 0), 330, 0, 0, 0, monsterObject.zokusei, monsterObject.ap, n3);
}
else {
if ((monsterObject.c1 == 22)) {
this.mSet$9(((n4 - 240) | 0), ((this.maps.wy - 32) | 0), 330, 0, 0, 0, monsterObject.zokusei, monsterObject.ap, n3);
}
else {
if ((monsterObject.c1 >= 24)) {
(monsterObject.c = monsterObject.c_kihon);
(monsterObject.c1 = 0);
(monsterObject.move_wc = 25);
}
}
}
}
}
}
}
}
}
(monsterObject.pt = monsterObject.spt[0]);
(monsterObject.pth = monsterObject.muki);
break;
}
case 1640:
{
++monsterObject.c1;
if ((monsterObject.c1 == 1)) {
this.mSet$9(((((n4 - 48) | 0) - 32) | 0), ((this.maps.wy - 32) | 0), 140, 0, 140, 1, monsterObject.zokusei, monsterObject.ap, n3);
}
else {
if ((monsterObject.c1 == 5)) {
this.mSet$9(((((n4 - 48) | 0) - 160) | 0), ((this.maps.wy - 32) | 0), 140, 0, 140, 1, monsterObject.zokusei, monsterObject.ap, n3);
}
else {
if ((monsterObject.c1 == 9)) {
this.mSet$9(((((n4 - 48) | 0) - 128) | 0), ((this.maps.wy - 32) | 0), 140, 0, 140, 1, monsterObject.zokusei, monsterObject.ap, n3);
}
else {
if ((monsterObject.c1 == 13)) {
this.mSet$9(((((n4 - 48) | 0) - 0) | 0), ((this.maps.wy - 32) | 0), 140, 0, 140, 1, monsterObject.zokusei, monsterObject.ap, n3);
}
else {
if ((monsterObject.c1 == 17)) {
this.mSet$9(((((n4 - 48) | 0) - 192) | 0), ((this.maps.wy - 32) | 0), 140, 0, 140, 1, monsterObject.zokusei, monsterObject.ap, n3);
}
else {
if ((monsterObject.c1 == 21)) {
this.mSet$9(((((n4 - 48) | 0) - 64) | 0), ((this.maps.wy - 32) | 0), 140, 0, 140, 1, monsterObject.zokusei, monsterObject.ap, n3);
}
else {
if ((monsterObject.c1 == 25)) {
this.mSet$9(((((n4 - 48) | 0) - 128) | 0), ((this.maps.wy - 32) | 0), 140, 0, 140, 1, monsterObject.zokusei, monsterObject.ap, n3);
}
else {
if ((monsterObject.c1 >= 28)) {
(monsterObject.c = monsterObject.c_kihon);
(monsterObject.c1 = 0);
(monsterObject.move_wc = 25);
}
}
}
}
}
}
}
}
(monsterObject.pt = monsterObject.spt[0]);
(monsterObject.pth = monsterObject.muki);
break;
}
case 1650:
{
++monsterObject.c1;
if ((monsterObject.c1 == 1)) {
this.mSet$9(n4, n5, 340, -65, -275, 1, monsterObject.zokusei, monsterObject.ap, n3);
}
else {
if ((monsterObject.c1 == 5)) {
this.mSet$9(n4, n5, 340, 35, -275, 1, monsterObject.zokusei, monsterObject.ap, n3);
}
else {
if ((monsterObject.c1 == 9)) {
this.mSet$9(n4, n5, 340, -110, -275, 1, monsterObject.zokusei, monsterObject.ap, n3);
}
else {
if ((monsterObject.c1 == 13)) {
this.mSet$9(n4, n5, 340, -35, -275, 1, monsterObject.zokusei, monsterObject.ap, n3);
}
else {
if ((monsterObject.c1 == 17)) {
this.mSet$9(n4, n5, 340, -80, -275, 1, monsterObject.zokusei, monsterObject.ap, n3);
}
else {
if ((monsterObject.c1 == 21)) {
this.mSet$9(n4, n5, 340, 65, -275, 1, monsterObject.zokusei, monsterObject.ap, n3);
}
else {
if ((monsterObject.c1 == 25)) {
this.mSet$9(n4, n5, 340, -125, -275, 1, monsterObject.zokusei, monsterObject.ap, n3);
}
else {
if ((monsterObject.c1 == 29)) {
this.mSet$9(n4, n5, 340, -50, -275, 1, monsterObject.zokusei, monsterObject.ap, n3);
}
else {
if ((monsterObject.c1 == 33)) {
this.mSet$9(n4, n5, 340, 50, -275, 1, monsterObject.zokusei, monsterObject.ap, n3);
}
else {
if ((monsterObject.c1 == 37)) {
this.mSet$9(n4, n5, 340, -95, -275, 1, monsterObject.zokusei, monsterObject.ap, n3);
}
else {
if ((monsterObject.c1 >= 40)) {
(monsterObject.c = monsterObject.c_kihon);
(monsterObject.c1 = 0);
(monsterObject.move_wc = 25);
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
(monsterObject.pt = monsterObject.spt[0]);
(monsterObject.pth = monsterObject.muki);
break;
}
case 1900:
{
var n7 = ((monsterObject.speed >= 40) ? 60 : 40);
(monsterObject.vx = ((n4 > monsterObject.positionX) ? -n7 : ((n4 < monsterObject.positionX) ? n7 : 0)));
(n4 = ((n4 + J.div(monsterObject.vx, 10)) | 0));
if ((monsterObject.vx < 0)) {
if ((n4 <= monsterObject.positionX)) {
(n4 = monsterObject.positionX);
(monsterObject.vx = 0);
}
}
else {
if (((monsterObject.vx > 0) && (n4 >= monsterObject.positionX))) {
(n4 = monsterObject.positionX);
(monsterObject.vx = 0);
}
}
if ((monsterObject.vx == 0)) {
(monsterObject.pt = monsterObject.spt[0]);
(monsterObject.pth = 0);
(monsterObject.move_wc = 30);
(monsterObject.c = monsterObject.c_kihon);
(monsterObject.gym_wc = 12);
break;
}
if ((monsterObject.vx < 0)) {
(monsterObject.pt = monsterObject.spt[((1 + this.g_ac) | 0)]);
(monsterObject.pth = 0);
break;
}
(monsterObject.pt = monsterObject.spt[((1 + this.g_ac) | 0)]);
(monsterObject.pth = 1);
break;
}
case 1950:
{
(monsterObject.pt = monsterObject.spt[0]);
(monsterObject.pth = 0);
break;
}
case 2000:
{
if ((monsterObject.move_wc > 0)) {
(monsterObject.move_wc = ((monsterObject.speed > 0) ? --monsterObject.move_wc : 10));
if ((n4 == monsterObject.positionX)) {
(monsterObject.vx = 0);
(monsterObject.move_wc = 20);
}
if ((monsterObject.move_wc <= 0)) {
if ((n4 > monsterObject.positionX)) {
(monsterObject.vx = -monsterObject.speed);
}
else {
if ((n4 < monsterObject.positionX)) {
(monsterObject.vx = monsterObject.speed);
}
else {
(monsterObject.vx = 0);
(monsterObject.move_wc = 30);
}
}
}
}
else {
(n4 = ((n4 + J.div(monsterObject.vx, 10)) | 0));
if ((monsterObject.vx < 0)) {
if (((this.maps.getBGCode$2(((n4 + 15) | 0), n5) >= 20) || (this.maps.getBGCode$2(((n4 + 15) | 0), ((n5 + 31) | 0)) >= 20))) {
(n4 = ((((Math.imul(J.div(((n4 + 15) | 0), 32), 32) + 32) | 0) - 15) | 0));
}
if ((n4 <= monsterObject.positionX)) {
(n4 = monsterObject.positionX);
(monsterObject.move_wc = 30);
(monsterObject.vx = 0);
}
}
else {
if (((this.maps.getBGCode$2(((n4 + 15) | 0), n5) >= 20) || (this.maps.getBGCode$2(((n4 + 15) | 0), ((n5 + 31) | 0)) >= 20))) {
(n4 = ((Math.imul(J.div(((n4 + 15) | 0), 32), 32) - 16) | 0));
}
if ((n4 >= monsterObject.positionX)) {
(n4 = monsterObject.positionX);
(monsterObject.move_wc = 30);
(monsterObject.vx = 0);
}
}
}
if ((monsterObject.meirei > 0)) {
(monsterObject.vy = 0);
}
else {
if ((Math.abs(((((this.co_w[10].y - 96) | 0) - n5) | 0)) <= 2)) {
(n5 = ((this.co_w[10].y - 96) | 0));
(monsterObject.vy = 0);
}
else {
(monsterObject.vy = ((((this.co_w[10].y - 96) | 0) < n5) ? -30 : ((((this.co_w[10].y - 96) | 0) > n5) ? 30 : 0)));
}
}
(n5 = ((n5 + J.div(monsterObject.vy, 10)) | 0));
if ((monsterObject.vy < 0)) {
if ((this.maps.getBGCode$2(((n4 + 15) | 0), n5) >= 20)) {
(n5 = ((Math.imul(J.div(n5, 32), 32) + 32) | 0));
(monsterObject.vy = 0);
}
}
else {
if (((monsterObject.vy > 0) && (this.maps.getBGCode$2(((n4 + 15) | 0), ((n5 + 31) | 0)) >= 20))) {
(n5 = ((Math.imul(J.div(((n5 + 31) | 0), 32), 32) - 32) | 0));
(monsterObject.vy = 0);
}
}
if ((monsterObject.pp <= 0)) {
(monsterObject.meirei = 1);
}
if ((((monsterObject.syurui == 2500) || (monsterObject.syurui == 3300)) || (monsterObject.syurui == 3600))) {
(monsterObject.pt = monsterObject.spt[0]);
(monsterObject.pth = 0);
if (((monsterObject.syurui == 2500) && (this.g_c3 >= 6))) {
(monsterObject.pt = 154);
}
}
else {
(monsterObject.pt = monsterObject.spt[((1 + this.g_ac) | 0)]);
(monsterObject.pth = ((monsterObject.vx <= 0) ? 0 : 1));
}
if ((monsterObject.meirei <= 0)) {
break;
}
this.wWazaK$5(monsterObject, n4, n5, n3, 0);
break;
}
case 2300:
{
(monsterObject.taiatari_f = true);
(n4 = ((n4 + J.div(monsterObject.vx, 10)) | 0));
if ((monsterObject.vx < 0)) {
if (((this.maps.getBGCode$2(((n4 + 15) | 0), n5) >= 20) || (this.maps.getBGCode$2(((n4 + 15) | 0), ((n5 + 31) | 0)) >= 20))) {
(n4 = ((((Math.imul(J.div(((n4 + 15) | 0), 32), 32) + 32) | 0) - 15) | 0));
(monsterObject.c = monsterObject.c_kihon);
(monsterObject.vx = 0);
(monsterObject.move_wc = 10);
}
}
else {
if (((this.maps.getBGCode$2(((n4 + 15) | 0), n5) >= 20) || (this.maps.getBGCode$2(((n4 + 15) | 0), ((n5 + 31) | 0)) >= 20))) {
(n4 = ((Math.imul(J.div(((n4 + 15) | 0), 32), 32) - 16) | 0));
(monsterObject.c = monsterObject.c_kihon);
(monsterObject.vx = 0);
(monsterObject.move_wc = 10);
}
}
(n5 = ((n5 + J.div(monsterObject.vy, 10)) | 0));
if ((monsterObject.vy < 0)) {
if ((this.maps.getBGCode$2(((n4 + 15) | 0), n5) >= 20)) {
(n5 = ((Math.imul(J.div(n5, 32), 32) + 32) | 0));
(monsterObject.c = monsterObject.c_kihon);
(monsterObject.vx = 0);
(monsterObject.move_wc = 10);
}
}
else {
if (((monsterObject.vy > 0) && (this.maps.getBGCode$2(((n4 + 15) | 0), ((n5 + 31) | 0)) >= 20))) {
(n5 = ((Math.imul(J.div(((n5 + 31) | 0), 32), 32) - 32) | 0));
(monsterObject.c = monsterObject.c_kihon);
(monsterObject.vx = 0);
(monsterObject.move_wc = 10);
}
}
--monsterObject.c1;
if ((monsterObject.c1 <= 0)) {
(monsterObject.c = monsterObject.c_kihon);
(monsterObject.vx = 0);
(monsterObject.move_wc = 16);
}
if ((this.gym_f && (n4 <= ((this.co_j.x - 48) | 0)))) {
(n4 = ((this.co_j.x - 48) | 0));
(monsterObject.vx = 0);
(monsterObject.c1 = 0);
(monsterObject.c = 2900);
(monsterObject.move_wc = 0);
}
if ((n5 >= ((this.ochiru_y - 16) | 0))) {
(monsterObject.c = monsterObject.c_kihon);
(monsterObject.vx = 0);
(monsterObject.move_wc = 10);
}
if ((n5 >= this.ochiru_y)) {
(monsterObject.c = 0);
(monsterObject.syurui = 0);
(monsterObject.ss = 0);
}
if (((monsterObject.c == monsterObject.c_kihon) && (monsterObject.taiatari_type == 3))) {
(monsterObject.move_wc = 35);
}
if ((((monsterObject.syurui == 2500) || (monsterObject.syurui == 3300)) || (monsterObject.syurui == 3600))) {
(monsterObject.pt = monsterObject.spt[4]);
(monsterObject.pth = 0);
break;
}
if ((monsterObject.syurui == 2700)) {
(monsterObject.pt = monsterObject.spt[((1 + this.g_c1) | 0)]);
(monsterObject.pth = monsterObject.muki);
break;
}
(monsterObject.pt = monsterObject.spt[4]);
(monsterObject.pth = monsterObject.muki);
break;
}
case 2400:
{
--monsterObject.c1;
if ((monsterObject.c1 <= 0)) {
(monsterObject.c = monsterObject.c_kihon);
(monsterObject.c1 = 0);
(monsterObject.move_wc = 16);
}
if ((((monsterObject.syurui == 2500) || (monsterObject.syurui == 3300)) || (monsterObject.syurui == 3600))) {
(monsterObject.pt = monsterObject.spt[0]);
(monsterObject.pth = 0);
break;
}
(monsterObject.pt = monsterObject.spt[((1 + this.g_ac) | 0)]);
(monsterObject.pth = monsterObject.muki);
break;
}
case 2430:
{
++monsterObject.c1;
if ((monsterObject.muki == 0)) {
if ((monsterObject.c1 == 1)) {
this.mSet$9(n4, n5, 140, -90, -200, 1, monsterObject.zokusei, monsterObject.ap, n3);
}
else {
if ((monsterObject.c1 == 5)) {
this.mSet$9(n4, n5, 140, -60, -200, 1, monsterObject.zokusei, monsterObject.ap, n3);
}
else {
if ((monsterObject.c1 == 9)) {
this.mSet$9(n4, n5, 140, -105, -200, 1, monsterObject.zokusei, monsterObject.ap, n3);
}
else {
if ((monsterObject.c1 == 13)) {
this.mSet$9(n4, n5, 140, -45, -200, 1, monsterObject.zokusei, monsterObject.ap, n3);
}
else {
if ((monsterObject.c1 == 17)) {
this.mSet$9(n4, n5, 140, -75, -200, 1, monsterObject.zokusei, monsterObject.ap, n3);
}
else {
if ((monsterObject.c1 >= 20)) {
(monsterObject.c = monsterObject.c_kihon);
(monsterObject.c1 = 0);
(monsterObject.move_wc = 16);
}
}
}
}
}
}
}
else {
if ((monsterObject.c1 == 1)) {
this.mSet$9(n4, n5, 140, 90, -200, 1, monsterObject.zokusei, monsterObject.ap, n3);
}
else {
if ((monsterObject.c1 == 5)) {
this.mSet$9(n4, n5, 140, 60, -200, 1, monsterObject.zokusei, monsterObject.ap, n3);
}
else {
if ((monsterObject.c1 == 9)) {
this.mSet$9(n4, n5, 140, 105, -200, 1, monsterObject.zokusei, monsterObject.ap, n3);
}
else {
if ((monsterObject.c1 == 13)) {
this.mSet$9(n4, n5, 140, 45, -200, 1, monsterObject.zokusei, monsterObject.ap, n3);
}
else {
if ((monsterObject.c1 == 17)) {
this.mSet$9(n4, n5, 140, 75, -200, 1, monsterObject.zokusei, monsterObject.ap, n3);
}
else {
if ((monsterObject.c1 >= 20)) {
(monsterObject.c = monsterObject.c_kihon);
(monsterObject.c1 = 0);
(monsterObject.move_wc = 25);
}
}
}
}
}
}
}
if ((((monsterObject.syurui == 2500) || (monsterObject.syurui == 3300)) || (monsterObject.syurui == 3600))) {
(monsterObject.pt = monsterObject.spt[0]);
(monsterObject.pth = 0);
break;
}
(monsterObject.pt = monsterObject.spt[((1 + this.g_ac) | 0)]);
(monsterObject.pth = monsterObject.muki);
break;
}
case 2450:
{
++monsterObject.c1;
if ((monsterObject.c1 >= 34)) {
(monsterObject.c = monsterObject.c_kihon);
(monsterObject.c1 = 0);
(monsterObject.move_wc = 16);
}
if ((((monsterObject.syurui == 2500) || (monsterObject.syurui == 3300)) || (monsterObject.syurui == 3600))) {
(monsterObject.pt = monsterObject.spt[0]);
(monsterObject.pth = 0);
break;
}
(monsterObject.pt = monsterObject.spt[((1 + this.g_ac) | 0)]);
(monsterObject.pth = monsterObject.muki);
break;
}
case 2470:
{
++monsterObject.c1;
if ((monsterObject.muki == 0)) {
if ((monsterObject.c1 == 1)) {
this.mSet$9(n4, n5, 200, -90, -200, 1, monsterObject.zokusei, monsterObject.ap, n3);
}
else {
if ((monsterObject.c1 == 5)) {
this.mSet$9(n4, n5, 200, -60, -200, 1, monsterObject.zokusei, monsterObject.ap, n3);
}
else {
if ((monsterObject.c1 == 9)) {
this.mSet$9(n4, n5, 200, -105, -200, 1, monsterObject.zokusei, monsterObject.ap, n3);
}
else {
if ((monsterObject.c1 == 13)) {
this.mSet$9(n4, n5, 200, -45, -200, 1, monsterObject.zokusei, monsterObject.ap, n3);
}
else {
if ((monsterObject.c1 == 17)) {
this.mSet$9(n4, n5, 200, -75, -200, 1, monsterObject.zokusei, monsterObject.ap, n3);
}
else {
if ((monsterObject.c1 >= 20)) {
(monsterObject.c = monsterObject.c_kihon);
(monsterObject.c1 = 0);
(monsterObject.move_wc = 16);
}
}
}
}
}
}
}
else {
if ((monsterObject.c1 == 1)) {
this.mSet$9(n4, n5, 200, 90, -200, 1, monsterObject.zokusei, monsterObject.ap, n3);
}
else {
if ((monsterObject.c1 == 5)) {
this.mSet$9(n4, n5, 200, 60, -200, 1, monsterObject.zokusei, monsterObject.ap, n3);
}
else {
if ((monsterObject.c1 == 9)) {
this.mSet$9(n4, n5, 200, 105, -200, 1, monsterObject.zokusei, monsterObject.ap, n3);
}
else {
if ((monsterObject.c1 == 13)) {
this.mSet$9(n4, n5, 200, 45, -200, 1, monsterObject.zokusei, monsterObject.ap, n3);
}
else {
if ((monsterObject.c1 == 17)) {
this.mSet$9(n4, n5, 200, 75, -200, 1, monsterObject.zokusei, monsterObject.ap, n3);
}
else {
if ((monsterObject.c1 >= 20)) {
(monsterObject.c = monsterObject.c_kihon);
(monsterObject.c1 = 0);
(monsterObject.move_wc = 16);
}
}
}
}
}
}
}
if ((((monsterObject.syurui == 2500) || (monsterObject.syurui == 3300)) || (monsterObject.syurui == 3600))) {
(monsterObject.pt = monsterObject.spt[0]);
(monsterObject.pth = 0);
break;
}
(monsterObject.pt = monsterObject.spt[((1 + this.g_ac) | 0)]);
(monsterObject.pth = monsterObject.muki);
break;
}
case 2480:
{
++monsterObject.c1;
if ((monsterObject.c1 == 1)) {
this.mSet$9(((n4 - 96) | 0), ((this.maps.wy - 32) | 0), 210, 0, 0, 0, monsterObject.zokusei, monsterObject.ap, n3);
}
else {
if ((monsterObject.c1 == 4)) {
this.mSet$9(((n4 + 96) | 0), ((this.maps.wy - 32) | 0), 210, 0, 0, 0, monsterObject.zokusei, monsterObject.ap, n3);
}
else {
if ((monsterObject.c1 == 7)) {
this.mSet$9(((n4 - 48) | 0), ((this.maps.wy - 32) | 0), 210, 0, 0, 0, monsterObject.zokusei, monsterObject.ap, n3);
}
else {
if ((monsterObject.c1 == 10)) {
this.mSet$9(((n4 + 48) | 0), ((this.maps.wy - 32) | 0), 210, 0, 0, 0, monsterObject.zokusei, monsterObject.ap, n3);
}
else {
if ((monsterObject.c1 == 13)) {
this.mSet$9(((((n4 + 96) | 0) + 32) | 0), ((this.maps.wy - 32) | 0), 210, 0, 0, 0, monsterObject.zokusei, monsterObject.ap, n3);
}
else {
if ((monsterObject.c1 == 16)) {
this.mSet$9(((((n4 - 96) | 0) - 32) | 0), ((this.maps.wy - 32) | 0), 210, 0, 0, 0, monsterObject.zokusei, monsterObject.ap, n3);
}
else {
if ((monsterObject.c1 == 19)) {
this.mSet$9(((n4 - 0) | 0), ((this.maps.wy - 32) | 0), 210, 0, 0, 0, monsterObject.zokusei, monsterObject.ap, n3);
}
else {
if ((monsterObject.c1 >= 21)) {
(monsterObject.c = monsterObject.c_kihon);
(monsterObject.c1 = 0);
(monsterObject.move_wc = 16);
}
}
}
}
}
}
}
}
if ((((monsterObject.syurui == 2500) || (monsterObject.syurui == 3300)) || (monsterObject.syurui == 3600))) {
(monsterObject.pt = monsterObject.spt[0]);
(monsterObject.pth = 0);
break;
}
(monsterObject.pt = monsterObject.spt[((1 + this.g_ac) | 0)]);
(monsterObject.pth = monsterObject.muki);
break;
}
case 2530:
{
++monsterObject.c1;
if ((monsterObject.c1 >= 16)) {
(monsterObject.c = monsterObject.c_kihon);
(monsterObject.c1 = 0);
(monsterObject.move_wc = 16);
}
if ((((monsterObject.syurui == 2500) || (monsterObject.syurui == 3300)) || (monsterObject.syurui == 3600))) {
(monsterObject.pt = monsterObject.spt[0]);
(monsterObject.pth = 0);
break;
}
(monsterObject.pt = monsterObject.spt[((1 + this.g_ac) | 0)]);
(monsterObject.pth = monsterObject.muki);
break;
}
case 2540:
{
--monsterObject.c1;
if ((monsterObject.c1 <= 0)) {
if (!this.gym_f) {
(monsterObject.hp = 0);
(monsterObject.c = 1001);
(monsterObject.c1 = 40);
(monsterObject.c2 = monsterObject.pt);
this.mSetKakudouchi$10(n4, n5, 300, 0, 0, 1, monsterObject.zokusei, monsterObject.ap, n3, 0);
this.mSetKakudouchi$10(n4, n5, 300, 0, 0, 1, monsterObject.zokusei, monsterObject.ap, n3, 270);
this.mSetKakudouchi$10(n4, n5, 300, 0, 0, 1, monsterObject.zokusei, monsterObject.ap, n3, 180);
this.mSetKakudouchi$10(n4, n5, 300, 0, 0, 1, monsterObject.zokusei, monsterObject.ap, n3, 90);
this.mSetKakudouchi$10(n4, n5, 300, 0, 0, 1, monsterObject.zokusei, monsterObject.ap, n3, 330);
this.mSetKakudouchi$10(n4, n5, 300, 0, 0, 1, monsterObject.zokusei, monsterObject.ap, n3, 240);
this.mSetKakudouchi$10(n4, n5, 300, 0, 0, 1, monsterObject.zokusei, monsterObject.ap, n3, 150);
this.mSetKakudouchi$10(n4, n5, 300, 0, 0, 1, monsterObject.zokusei, monsterObject.ap, n3, 60);
this.mSetKakudouchi$10(n4, n5, 300, 0, 0, 1, monsterObject.zokusei, monsterObject.ap, n3, 300);
this.mSetKakudouchi$10(n4, n5, 300, 0, 0, 1, monsterObject.zokusei, monsterObject.ap, n3, 210);
this.mSetKakudouchi$10(n4, n5, 300, 0, 0, 1, monsterObject.zokusei, monsterObject.ap, n3, 120);
this.mSetKakudouchi$10(n4, n5, 300, 0, 0, 1, monsterObject.zokusei, monsterObject.ap, n3, 30);
}
else {
(monsterObject.hp = 0);
(monsterObject.c = 210);
(monsterObject.vy = -25);
(monsterObject.move_wc = 25);
}
}
(monsterObject.pt = monsterObject.spt[4]);
(monsterObject.pth = monsterObject.muki);
break;
}
case 2550:
{
++monsterObject.c1;
if ((monsterObject.c1 == 1)) {
this.mSet$9(((((n4 - 48) | 0) - 32) | 0), ((this.maps.wy - 32) | 0), 190, 0, 0, 1, monsterObject.zokusei, monsterObject.ap, n3);
}
else {
if ((monsterObject.c1 == 5)) {
this.mSet$9(((((n4 - 48) | 0) - 160) | 0), ((this.maps.wy - 32) | 0), 190, 0, 0, 1, monsterObject.zokusei, monsterObject.ap, n3);
}
else {
if ((monsterObject.c1 == 9)) {
this.mSet$9(((((n4 - 48) | 0) - 128) | 0), ((this.maps.wy - 32) | 0), 190, 0, 0, 1, monsterObject.zokusei, monsterObject.ap, n3);
}
else {
if ((monsterObject.c1 == 13)) {
this.mSet$9(((((n4 - 48) | 0) - 0) | 0), ((this.maps.wy - 32) | 0), 190, 0, 0, 1, monsterObject.zokusei, monsterObject.ap, n3);
}
else {
if ((monsterObject.c1 == 17)) {
this.mSet$9(((((n4 - 48) | 0) - 192) | 0), ((this.maps.wy - 32) | 0), 190, 0, 0, 1, monsterObject.zokusei, monsterObject.ap, n3);
}
else {
if ((monsterObject.c1 == 21)) {
this.mSet$9(((((n4 - 48) | 0) - 64) | 0), ((this.maps.wy - 32) | 0), 190, 0, 0, 1, monsterObject.zokusei, monsterObject.ap, n3);
}
else {
if ((monsterObject.c1 == 25)) {
this.mSet$9(((((n4 - 48) | 0) - 128) | 0), ((this.maps.wy - 32) | 0), 190, 0, 0, 1, monsterObject.zokusei, monsterObject.ap, n3);
}
else {
if ((monsterObject.c1 >= 28)) {
(monsterObject.c = monsterObject.c_kihon);
(monsterObject.c1 = 0);
(monsterObject.move_wc = 16);
}
}
}
}
}
}
}
}
if ((((monsterObject.syurui == 2500) || (monsterObject.syurui == 3300)) || (monsterObject.syurui == 3600))) {
(monsterObject.pt = monsterObject.spt[0]);
(monsterObject.pth = 0);
break;
}
(monsterObject.pt = monsterObject.spt[((1 + this.g_ac) | 0)]);
(monsterObject.pth = monsterObject.muki);
break;
}
case 2560:
{
++monsterObject.c1;
if (((monsterObject.c1 == 1) || (monsterObject.c1 == 5))) {
(n6 = this.wSearch$3(n4, n5, 6));
if ((n6 >= 0)) {
this.mSetNeraiuchi$10(n4, n5, 100, 0, 0, 1, monsterObject.zokusei, monsterObject.ap, n3, n6);
(monsterObject.muki = 0);
if ((this.co_p[n6].x > n4)) {
(monsterObject.muki = 1);
}
}
else {
this.mSet$9(n4, n5, 100, -150, 0, 1, monsterObject.zokusei, monsterObject.ap, n3);
(monsterObject.muki = 0);
}
}
else {
if ((monsterObject.c1 >= 8)) {
(monsterObject.c = monsterObject.c_kihon);
(monsterObject.c1 = 0);
(monsterObject.move_wc = 16);
}
}
if ((((monsterObject.syurui == 2500) || (monsterObject.syurui == 3300)) || (monsterObject.syurui == 3600))) {
(monsterObject.pt = monsterObject.spt[0]);
(monsterObject.pth = 0);
break;
}
(monsterObject.pt = monsterObject.spt[((1 + this.g_ac) | 0)]);
(monsterObject.pth = monsterObject.muki);
break;
}
case 2620:
{
++monsterObject.c1;
if ((monsterObject.c1 >= 59)) {
(monsterObject.c = monsterObject.c_kihon);
(monsterObject.c1 = 0);
(monsterObject.move_wc = 16);
}
if ((((monsterObject.c1 >= 8) && (monsterObject.c1 <= 52)) || ((monsterObject.c1 % 2) == 1))) {
(monsterObject.pt = 0);
(monsterObject.pth = 0);
break;
}
if ((((monsterObject.syurui == 2500) || (monsterObject.syurui == 3300)) || (monsterObject.syurui == 3600))) {
(monsterObject.pt = monsterObject.spt[0]);
(monsterObject.pth = 0);
break;
}
(monsterObject.pt = monsterObject.spt[((1 + this.g_ac) | 0)]);
(monsterObject.pth = monsterObject.muki);
break;
}
case 2640:
{
++monsterObject.c1;
if ((monsterObject.muki == 0)) {
if ((monsterObject.c1 == 1)) {
this.mSetKakudouchi$10(n4, n5, 100, 0, 0, 1, monsterObject.zokusei, monsterObject.ap, n3, 255);
}
else {
if ((monsterObject.c1 == 5)) {
this.mSetKakudouchi$10(n4, n5, 100, 0, 0, 1, monsterObject.zokusei, monsterObject.ap, n3, 245);
}
else {
if ((monsterObject.c1 == 9)) {
this.mSetKakudouchi$10(n4, n5, 100, 0, 0, 1, monsterObject.zokusei, monsterObject.ap, n3, 235);
}
else {
if ((monsterObject.c1 == 13)) {
this.mSetKakudouchi$10(n4, n5, 100, 0, 0, 1, monsterObject.zokusei, monsterObject.ap, n3, 225);
}
else {
if ((monsterObject.c1 == 17)) {
this.mSetKakudouchi$10(n4, n5, 100, 0, 0, 1, monsterObject.zokusei, monsterObject.ap, n3, 215);
}
else {
if ((monsterObject.c1 >= 20)) {
(monsterObject.c = monsterObject.c_kihon);
(monsterObject.c1 = 0);
(monsterObject.move_wc = 16);
}
}
}
}
}
}
}
else {
if ((monsterObject.c1 == 1)) {
this.mSetKakudouchi$10(n4, n5, 100, 0, 0, 1, monsterObject.zokusei, monsterObject.ap, n3, 285);
}
else {
if ((monsterObject.c1 == 5)) {
this.mSetKakudouchi$10(n4, n5, 100, 0, 0, 1, monsterObject.zokusei, monsterObject.ap, n3, 295);
}
else {
if ((monsterObject.c1 == 9)) {
this.mSetKakudouchi$10(n4, n5, 100, 0, 0, 1, monsterObject.zokusei, monsterObject.ap, n3, 305);
}
else {
if ((monsterObject.c1 == 13)) {
this.mSetKakudouchi$10(n4, n5, 100, 0, 0, 1, monsterObject.zokusei, monsterObject.ap, n3, 315);
}
else {
if ((monsterObject.c1 == 17)) {
this.mSetKakudouchi$10(n4, n5, 100, 0, 0, 1, monsterObject.zokusei, monsterObject.ap, n3, 325);
}
else {
if ((monsterObject.c1 >= 20)) {
(monsterObject.c = monsterObject.c_kihon);
(monsterObject.c1 = 0);
(monsterObject.move_wc = 16);
}
}
}
}
}
}
}
if ((((monsterObject.syurui == 2500) || (monsterObject.syurui == 3300)) || (monsterObject.syurui == 3600))) {
(monsterObject.pt = monsterObject.spt[0]);
(monsterObject.pth = 0);
break;
}
(monsterObject.pt = monsterObject.spt[((1 + this.g_ac) | 0)]);
(monsterObject.pth = monsterObject.muki);
break;
}
case 2900:
{
if ((monsterObject.move_wc > 0)) {
--monsterObject.move_wc;
}
if ((monsterObject.move_wc <= 0)) {
(monsterObject.vx = ((n4 > monsterObject.positionX) ? -monsterObject.speed : ((n4 < monsterObject.positionX) ? monsterObject.speed : 0)));
(n4 = ((n4 + J.div(monsterObject.vx, 10)) | 0));
if ((monsterObject.vx < 0)) {
if ((n4 <= monsterObject.positionX)) {
(n4 = monsterObject.positionX);
(monsterObject.vx = 0);
}
}
else {
if ((n4 >= monsterObject.positionX)) {
(n4 = monsterObject.positionX);
(monsterObject.vx = 0);
}
}
}
else {
(monsterObject.vx = 0);
}
if (((monsterObject.vx == 0) && (monsterObject.move_wc <= 0))) {
(monsterObject.move_wc = 30);
(monsterObject.c = 2000);
}
if ((Math.abs(((((this.co_w[10].y - 96) | 0) - n5) | 0)) <= 2)) {
(n5 = ((this.co_w[10].y - 96) | 0));
(monsterObject.vy = 0);
}
else {
(monsterObject.vy = ((((this.co_w[10].y - 96) | 0) < n5) ? -30 : ((((this.co_w[10].y - 96) | 0) > n5) ? 30 : 0)));
}
(n5 = ((n5 + J.div(monsterObject.vy, 10)) | 0));
if ((((monsterObject.syurui == 2500) || (monsterObject.syurui == 3300)) || (monsterObject.syurui == 3600))) {
(monsterObject.pt = monsterObject.spt[0]);
(monsterObject.pth = 0);
break;
}
(monsterObject.pt = monsterObject.spt[((1 + this.g_ac) | 0)]);
if ((monsterObject.vx <= 0)) {
(monsterObject.pth = 0);
break;
}
(monsterObject.pth = 1);
break;
}
case 2950:
{
if ((((monsterObject.syurui == 2500) || (monsterObject.syurui == 3300)) || (monsterObject.syurui == 3600))) {
(monsterObject.pt = monsterObject.spt[0]);
(monsterObject.pth = 0);
break;
}
(monsterObject.pt = monsterObject.spt[((1 + this.g_ac) | 0)]);
(monsterObject.pth = 0);
break;
}
case 11000:
{
var n8 = 0;
var n9 = 0;
var bl = false;
(monsterObject.pt = monsterObject.spt[0]);
(monsterObject.pth = ((n4 >= this.co_j.x) ? 0 : 1));
if ((monsterObject.gym_wc > 0)) {
--monsterObject.gym_wc;
}
else {
if ((monsterObject.c_kihon2 == 0)) {
(bl = true);
}
else {
if ((monsterObject.c_kihon2 == 1)) {
if ((n4 != monsterObject.positionX)) {
(monsterObject.c = 11020);
}
else {
++monsterObject.c1;
if ((monsterObject.c1 > 30)) {
(monsterObject.c = 11040);
(monsterObject.c1 = 0);
(monsterObject.pt = monsterObject.spt[((1 + this.g_ac) | 0)]);
(monsterObject.pth = 0);
}
else {
(bl = true);
}
}
}
else {
if ((monsterObject.c_kihon2 == 2)) {
if (((n4 != monsterObject.positionX) && (n4 != ((monsterObject.positionX - 128) | 0)))) {
(monsterObject.c = 11020);
(monsterObject.pt = monsterObject.spt[((1 + this.g_ac) | 0)]);
(monsterObject.pth = ((n4 > monsterObject.positionX) ? 0 : 1));
}
else {
++monsterObject.c1;
if (((monsterObject.c1 > 40) || ((n4 == ((monsterObject.positionX - 128) | 0)) && (monsterObject.c1 > 20)))) {
if ((n4 == monsterObject.positionX)) {
if ((monsterObject.hp <= J.div(monsterObject.hp_max, 2))) {
(monsterObject.c1 = 0);
}
else {
(monsterObject.c = 11200);
(monsterObject.c1 = 0);
}
}
else {
(monsterObject.c = 11210);
(monsterObject.c1 = 0);
}
}
else {
if (((n4 == ((monsterObject.positionX - 128) | 0)) && (monsterObject.hp <= J.div(monsterObject.hp_max, 2)))) {
(monsterObject.c = 11210);
(monsterObject.c1 = 0);
}
else {
(bl = true);
}
}
}
}
}
}
}
if (bl) {
(n9 = monsterObject.waza_code[0]);
(n8 = monsterObject.waza_code[1]);
if ((monsterObject.syurui == 2300)) {
(n9 = 22);
(n8 = 15);
}
else {
if ((monsterObject.syurui == 3200)) {
(n9 = 34);
(n8 = 6);
}
else {
if ((monsterObject.syurui == 1600)) {
(n9 = 3);
(n8 = 25);
}
}
}
if (((monsterObject.tukauwaza > 0) && (monsterObject.pp >= 20))) {
(n6 = this.wWazaSyateiC$4(n4, n5, n9, n3));
if ((n6 >= 0)) {
(monsterObject.meirei = n9);
if ((this.co_p[n6].x <= n4)) {
this.wWazaC$5(monsterObject, n4, n5, n3, 0);
}
else {
this.wWazaC$5(monsterObject, n4, n5, n3, 1);
}
(monsterObject.gym_wc = 20);
}
else {
if ((monsterObject.tukauwaza > 1)) {
(n6 = this.wWazaSyateiC$4(n4, n5, n8, n3));
if ((n8 == 32)) {
if ((n6 >= 0)) {
(monsterObject.meirei = n8);
this.wWazaC$5(monsterObject, n4, n5, n3, 0);
}
}
else {
if ((n6 >= 0)) {
(monsterObject.meirei = n8);
if ((this.co_p[n6].x <= n4)) {
this.wWazaC$5(monsterObject, n4, n5, n3, 0);
}
else {
this.wWazaC$5(monsterObject, n4, n5, n3, 1);
}
(monsterObject.gym_wc = 20);
}
}
}
}
}
}
if ((this.maps.getBGCode$2(((n4 + 15) | 0), ((n5 + 32) | 0)) >= 20)) {
break;
}
(monsterObject.c = 11030);
(monsterObject.vx = 0);
(monsterObject.vy = 0);
(monsterObject.muki = 0);
break;
}
case 11020:
{
if ((Math.abs(((n4 - monsterObject.positionX) | 0)) < 4)) {
(n4 = monsterObject.positionX);
(monsterObject.c = 11000);
(monsterObject.c1 = 0);
(monsterObject.vx = 0);
(monsterObject.pt = monsterObject.spt[0]);
(monsterObject.pth = ((n4 >= this.co_j.x) ? 0 : 1));
}
else {
if ((n4 > monsterObject.positionX)) {
(monsterObject.vx = -40);
(monsterObject.pt = monsterObject.spt[((1 + this.g_ac) | 0)]);
(monsterObject.pth = 0);
if ((this.maps.getBGCode$2((n4 = ((n4 - 4) | 0)), ((n5 + 15) | 0)) >= 20)) {
(n4 = ((Math.imul(J.div(n4, 32), 32) + 32) | 0));
(monsterObject.c = 11000);
(monsterObject.c1 = 0);
(monsterObject.c_kihon2 = 0);
}
}
else {
(monsterObject.vx = 40);
(monsterObject.pt = monsterObject.spt[((1 + this.g_ac) | 0)]);
(monsterObject.pth = 1);
if ((this.maps.getBGCode$2((((n4 = ((n4 + 4) | 0)) + 31) | 0), ((n5 + 15) | 0)) >= 20)) {
(n4 = ((Math.imul(J.div(((n4 + 31) | 0), 32), 32) - 32) | 0));
(monsterObject.c = 11000);
(monsterObject.c1 = 0);
(monsterObject.c_kihon2 = 0);
}
}
}
if ((this.maps.getBGCode$2(((n4 + 15) | 0), ((n5 + 32) | 0)) >= 20)) {
break;
}
(monsterObject.c = 11030);
(monsterObject.vy = 0);
if ((monsterObject.vx <= 0)) {
(monsterObject.muki = 0);
break;
}
(monsterObject.muki = 1);
break;
}
case 11030:
{
(n4 = ((n4 + J.div(monsterObject.vx, 10)) | 0));
if ((monsterObject.vx < 0)) {
if (((this.maps.getBGCode$2(((n4 + 15) | 0), n5) >= 20) || (this.maps.getBGCode$2(((n4 + 15) | 0), ((n5 + 31) | 0)) >= 20))) {
(n4 = ((((Math.imul(J.div(((n4 + 15) | 0), 32), 32) + 32) | 0) - 15) | 0));
(monsterObject.vx = 0);
}
}
else {
if (((this.maps.getBGCode$2(((n4 + 15) | 0), n5) >= 20) || (this.maps.getBGCode$2(((n4 + 15) | 0), ((n5 + 31) | 0)) >= 20))) {
(n4 = ((Math.imul(J.div(((n4 + 15) | 0), 32), 32) - 16) | 0));
(monsterObject.vx = 0);
}
}
(monsterObject.vy = ((monsterObject.vy + 25) | 0));
if ((monsterObject.vy > 180)) {
(monsterObject.vy = 180);
}
(n5 = ((n5 + J.div(monsterObject.vy, 10)) | 0));
if ((monsterObject.vy < 0)) {
if ((this.maps.getBGCode$2(((n4 + 15) | 0), n5) >= 20)) {
(n5 = ((Math.imul(J.div(n5, 32), 32) + 32) | 0));
(monsterObject.vy = 0);
}
}
else {
if (((monsterObject.vy > 0) && (this.maps.getBGCode$2(((n4 + 15) | 0), ((n5 + 31) | 0)) >= 20))) {
(n5 = ((Math.imul(J.div(((n5 + 31) | 0), 32), 32) - 32) | 0));
(monsterObject.vx = 0);
(monsterObject.c = monsterObject.c_kihon);
(monsterObject.c1 = 0);
(monsterObject.move_wc = 30);
}
}
if ((n5 >= this.ochiru_y)) {
(monsterObject.syurui = 0);
(monsterObject.c = 0);
}
(monsterObject.pt = monsterObject.spt[3]);
(monsterObject.pth = monsterObject.muki);
break;
}
case 11040:
{
(monsterObject.vx = -40);
if ((((monsterObject.positionX - 64) | 0) >= (n4 = ((n4 - 4) | 0)))) {
(n4 = ((monsterObject.positionX - 64) | 0));
(monsterObject.c = 11020);
(monsterObject.c1 = 0);
}
if ((this.maps.getBGCode$2(n4, ((n5 + 15) | 0)) >= 20)) {
(n4 = ((Math.imul(J.div(n4, 32), 32) + 32) | 0));
(monsterObject.c = 11000);
(monsterObject.c1 = 0);
(monsterObject.c_kihon2 = 0);
}
if ((this.maps.getBGCode$2(n4, ((n5 + 32) | 0)) < 20)) {
(n4 = ((Math.imul(J.div(n4, 32), 32) + 32) | 0));
(monsterObject.c = 11000);
(monsterObject.c1 = 0);
(monsterObject.c_kihon2 = 0);
}
if ((this.maps.getBGCode$2(((n4 + 15) | 0), ((n5 + 32) | 0)) < 20)) {
(monsterObject.c = 11030);
(monsterObject.vy = 0);
(monsterObject.muki = ((monsterObject.vx <= 0) ? 0 : 1));
}
(monsterObject.pt = monsterObject.spt[((1 + this.g_ac) | 0)]);
(monsterObject.pth = 0);
break;
}
case 11050:
{
--monsterObject.c1;
if ((monsterObject.c1 <= 0)) {
(monsterObject.c = 11020);
}
(monsterObject.pt = monsterObject.spt[0]);
(monsterObject.pth = monsterObject.muki);
break;
}
case 11200:
{
(monsterObject.vx = -60);
if ((((monsterObject.positionX - 128) | 0) >= (n4 = ((n4 - 6) | 0)))) {
(n4 = ((monsterObject.positionX - 128) | 0));
(monsterObject.c = 11000);
(monsterObject.c1 = 0);
}
if ((this.maps.getBGCode$2(n4, ((n5 + 15) | 0)) >= 20)) {
(n4 = ((Math.imul(J.div(n4, 32), 32) + 32) | 0));
(monsterObject.c = 11000);
(monsterObject.c1 = 0);
(monsterObject.c_kihon2 = 0);
}
if ((this.maps.getBGCode$2(n4, ((n5 + 32) | 0)) < 20)) {
(n4 = ((Math.imul(J.div(n4, 32), 32) + 32) | 0));
(monsterObject.c = 11000);
(monsterObject.c1 = 0);
(monsterObject.c_kihon2 = 0);
}
if ((this.maps.getBGCode$2(((n4 + 15) | 0), ((n5 + 32) | 0)) < 20)) {
(monsterObject.c = 11030);
(monsterObject.vy = 0);
(monsterObject.muki = ((monsterObject.vx <= 0) ? 0 : 1));
}
(monsterObject.pt = monsterObject.spt[((1 + this.g_ac) | 0)]);
(monsterObject.pth = 0);
break;
}
case 11210:
{
if ((Math.abs(((n4 - monsterObject.positionX) | 0)) < 6)) {
(n4 = monsterObject.positionX);
(monsterObject.c = 11000);
(monsterObject.c1 = 0);
(monsterObject.vx = 0);
(monsterObject.pt = monsterObject.spt[0]);
(monsterObject.pth = ((n4 >= this.co_j.x) ? 0 : 1));
}
else {
if ((n4 > monsterObject.positionX)) {
(monsterObject.vx = -60);
(monsterObject.pt = monsterObject.spt[((1 + this.g_ac) | 0)]);
(monsterObject.pth = 0);
if ((this.maps.getBGCode$2((n4 = ((n4 - 6) | 0)), ((n5 + 15) | 0)) >= 20)) {
(n4 = ((Math.imul(J.div(n4, 32), 32) + 32) | 0));
(monsterObject.c = 11000);
(monsterObject.c1 = 0);
(monsterObject.c_kihon2 = 0);
}
}
else {
(monsterObject.vx = 60);
(monsterObject.pt = monsterObject.spt[((1 + this.g_ac) | 0)]);
(monsterObject.pth = 1);
if ((this.maps.getBGCode$2((((n4 = ((n4 + 6) | 0)) + 31) | 0), ((n5 + 15) | 0)) >= 20)) {
(n4 = ((Math.imul(J.div(((n4 + 31) | 0), 32), 32) - 32) | 0));
(monsterObject.c = 11000);
(monsterObject.c1 = 0);
(monsterObject.c_kihon2 = 0);
}
}
}
if ((this.maps.getBGCode$2(((n4 + 15) | 0), ((n5 + 32) | 0)) >= 20)) {
break;
}
(monsterObject.c = 11030);
(monsterObject.vy = 0);
if ((monsterObject.vx <= 0)) {
(monsterObject.muki = 0);
break;
}
(monsterObject.muki = 1);
break;
}
case 12000:
{
var bl = false;
if ((((monsterObject.syurui == 2500) || (monsterObject.syurui == 3300)) || (monsterObject.syurui == 3600))) {
(monsterObject.pt = monsterObject.spt[0]);
(monsterObject.pth = 0);
if (((monsterObject.syurui == 2500) && (this.g_c3 >= 6))) {
(monsterObject.pt = 154);
}
}
else {
if ((monsterObject.syurui == 2700)) {
(monsterObject.pt = monsterObject.spt[((1 + this.g_c1) | 0)]);
(monsterObject.pth = ((monsterObject.vx <= 0) ? 0 : 1));
}
else {
(monsterObject.pt = monsterObject.spt[((1 + this.g_ac) | 0)]);
(monsterObject.pth = ((monsterObject.vx < 0) ? 0 : ((monsterObject.vx > 0) ? 1 : ((n4 >= this.co_j.x) ? 0 : 1))));
}
}
if ((Math.abs(((n5 - monsterObject.positionY) | 0)) <= 2)) {
(n5 = monsterObject.positionY);
}
else {
if ((n5 < monsterObject.positionY)) {
(n5 = ((n5 + 3) | 0));
}
else {
if ((n5 > monsterObject.positionY)) {
(n5 = ((n5 - 3) | 0));
}
}
}
if ((n5 == monsterObject.positionY)) {
if ((monsterObject.gym_wc > 0)) {
--monsterObject.gym_wc;
}
else {
if ((monsterObject.c_kihon2 == 0)) {
(bl = true);
}
else {
if ((monsterObject.c_kihon2 == 1)) {
if ((n4 != monsterObject.positionX)) {
(monsterObject.c = 12020);
}
else {
++monsterObject.c1;
if ((monsterObject.c1 > 30)) {
(monsterObject.c = 12040);
(monsterObject.c1 = 0);
}
else {
(bl = true);
}
}
}
else {
if ((monsterObject.c_kihon2 == 2)) {
if (((n4 != monsterObject.positionX) && (n4 != ((monsterObject.positionX - 128) | 0)))) {
(monsterObject.c = 12020);
}
else {
++monsterObject.c1;
if (((monsterObject.c1 > 40) || ((n4 == ((monsterObject.positionX - 128) | 0)) && (monsterObject.c1 > 20)))) {
if ((n4 == monsterObject.positionX)) {
if ((monsterObject.hp <= J.div(monsterObject.hp_max, 2))) {
(monsterObject.c1 = 0);
}
else {
(monsterObject.c = 12200);
(monsterObject.c1 = 0);
}
}
else {
(monsterObject.c = 12210);
(monsterObject.c1 = 0);
}
}
else {
if (((n4 == ((monsterObject.positionX - 128) | 0)) && (monsterObject.hp <= J.div(monsterObject.hp_max, 2)))) {
(monsterObject.c = 12210);
(monsterObject.c1 = 0);
}
else {
(bl = true);
}
}
}
}
else {
if ((monsterObject.c_kihon2 == 10)) {
(monsterObject.name = "？？？？");
if ((monsterObject.hp < monsterObject.hp_max)) {
(monsterObject.c_kihon2 = 0);
(monsterObject.name = ((monsterObject.syurui == 3800) ? this.name_atis : this.name_latis));
(monsterObject.fc = 20);
}
(monsterObject.pt = 0);
(monsterObject.pth = 0);
}
else {
if ((monsterObject.c_kihon2 == 50)) {
if ((this.sl_step <= 1)) {
(monsterObject.pth = 0);
}
else {
(monsterObject.pth = 0);
if ((n4 != monsterObject.positionX)) {
(monsterObject.c = 12020);
}
else {
++monsterObject.c1;
if ((monsterObject.c1 > 30)) {
(monsterObject.c = 15100);
(monsterObject.c1 = 0);
}
else {
(bl = false);
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
if (!bl) {
break;
}
var n9 = monsterObject.waza_code[0];
var n8 = monsterObject.waza_code[1];
if (((monsterObject.tukauwaza <= 0) || (monsterObject.pp < 20))) {
break;
}
(n6 = this.wWazaSyateiK$4(n4, n5, n9, n3));
if ((n6 >= 0)) {
(monsterObject.meirei = n9);
if ((this.co_p[n6].x <= n4)) {
this.wWazaK$5(monsterObject, n4, n5, n3, 0);
}
else {
this.wWazaK$5(monsterObject, n4, n5, n3, 1);
}
(monsterObject.gym_wc = 20);
break;
}
if (((monsterObject.tukauwaza <= 1) || ((n6 = this.wWazaSyateiK$4(n4, n5, n8, n3)) < 0))) {
break;
}
(monsterObject.meirei = n8);
if ((this.co_p[n6].x <= n4)) {
this.wWazaK$5(monsterObject, n4, n5, n3, 0);
}
else {
this.wWazaK$5(monsterObject, n4, n5, n3, 1);
}
(monsterObject.gym_wc = 20);
break;
}
case 12020:
{
if ((Math.abs(((n5 - monsterObject.positionY) | 0)) <= 2)) {
(n5 = monsterObject.positionY);
}
else {
if ((n5 < monsterObject.positionY)) {
(n5 = ((n5 + 3) | 0));
}
else {
if ((n5 > monsterObject.positionY)) {
(n5 = ((n5 - 3) | 0));
}
}
}
if ((n5 != monsterObject.positionY)) {
(monsterObject.vx = 0);
(monsterObject.pt = monsterObject.spt[((1 + this.g_ac) | 0)]);
(monsterObject.pth = 0);
break;
}
if ((Math.abs(((n4 - monsterObject.positionX) | 0)) < 4)) {
(n4 = monsterObject.positionX);
(monsterObject.c = 12000);
(monsterObject.c1 = 0);
(monsterObject.vx = 0);
(monsterObject.pt = ((monsterObject.syurui == 2000) ? ((monsterObject.spt[1] + this.g_ac) | 0) : monsterObject.spt[0]));
if ((n4 >= this.co_j.x)) {
(monsterObject.pth = 0);
break;
}
(monsterObject.pth = 1);
break;
}
if ((n4 > monsterObject.positionX)) {
(monsterObject.vx = -40);
(n4 = ((n4 - 4) | 0));
(monsterObject.pt = monsterObject.spt[((1 + this.g_ac) | 0)]);
(monsterObject.pth = 0);
break;
}
(monsterObject.vx = 40);
(n4 = ((n4 + 4) | 0));
(monsterObject.pt = monsterObject.spt[((1 + this.g_ac) | 0)]);
(monsterObject.pth = 1);
break;
}
case 12030:
{
(n4 = ((n4 + J.div(monsterObject.vx, 10)) | 0));
if ((monsterObject.vx < 0)) {
if (((this.maps.getBGCode$2(((n4 + 15) | 0), n5) >= 20) || (this.maps.getBGCode$2(((n4 + 15) | 0), ((n5 + 31) | 0)) >= 20))) {
(n4 = ((((Math.imul(J.div(((n4 + 15) | 0), 32), 32) + 32) | 0) - 15) | 0));
}
}
else {
if (((this.maps.getBGCode$2(((n4 + 15) | 0), n5) >= 20) || (this.maps.getBGCode$2(((n4 + 15) | 0), ((n5 + 31) | 0)) >= 20))) {
(n4 = ((Math.imul(J.div(((n4 + 15) | 0), 32), 32) - 16) | 0));
}
}
(monsterObject.vy = ((monsterObject.vy + 25) | 0));
if ((monsterObject.vy > 180)) {
(monsterObject.vy = 180);
}
(n5 = ((n5 + J.div(monsterObject.vy, 10)) | 0));
if ((monsterObject.vy < 0)) {
if ((this.maps.getBGCode$2(((n4 + 15) | 0), n5) >= 20)) {
(n5 = ((Math.imul(J.div(n5, 32), 32) + 32) | 0));
(monsterObject.vy = 0);
}
}
else {
if (((monsterObject.vy > 0) && (this.maps.getBGCode$2(((n4 + 15) | 0), ((n5 + 31) | 0)) >= 20))) {
(n5 = ((Math.imul(J.div(((n5 + 31) | 0), 32), 32) - 32) | 0));
(monsterObject.vx = 0);
(monsterObject.c = 12020);
}
}
if ((n5 >= this.ochiru_y)) {
(monsterObject.syurui = 0);
(monsterObject.c = 0);
}
(monsterObject.pt = monsterObject.spt[3]);
(monsterObject.pth = monsterObject.muki);
break;
}
case 12040:
{
(monsterObject.vx = -40);
if ((((monsterObject.positionX - 64) | 0) >= (n4 = ((n4 - 4) | 0)))) {
(n4 = ((monsterObject.positionX - 64) | 0));
(monsterObject.c = 12020);
(monsterObject.c1 = 0);
}
if ((this.maps.getBGCode$2(n4, ((n5 + 15) | 0)) >= 20)) {
(n4 = ((Math.imul(J.div(n4, 32), 32) + 32) | 0));
(monsterObject.c = 12000);
(monsterObject.c1 = 0);
(monsterObject.c_kihon2 = 0);
}
(monsterObject.pt = ((monsterObject.syurui == 2000) ? monsterObject.spt[((1 + this.g_ac) | 0)] : monsterObject.spt[0]));
(monsterObject.pth = 0);
break;
}
case 12050:
{
--monsterObject.c1;
if ((monsterObject.c1 <= 0)) {
(monsterObject.c = 12020);
if (this.gym_f) {
(monsterObject.c = monsterObject.c_kihon);
}
}
(monsterObject.pt = ((monsterObject.syurui == 2000) ? monsterObject.spt[((1 + this.g_ac) | 0)] : monsterObject.spt[0]));
(monsterObject.pth = monsterObject.muki);
break;
}
case 12200:
{
(monsterObject.vx = -60);
if ((((monsterObject.positionX - 128) | 0) >= (n4 = ((n4 - 6) | 0)))) {
(n4 = ((monsterObject.positionX - 128) | 0));
(monsterObject.c = 12000);
(monsterObject.c1 = 0);
}
if ((this.maps.getBGCode$2(n4, ((n5 + 15) | 0)) >= 20)) {
(n4 = ((Math.imul(J.div(n4, 32), 32) + 32) | 0));
(monsterObject.c = 12000);
(monsterObject.c1 = 0);
(monsterObject.c_kihon2 = 0);
}
(monsterObject.pt = monsterObject.spt[((1 + this.g_ac) | 0)]);
(monsterObject.pth = 0);
if ((((monsterObject.syurui == 2500) || (monsterObject.syurui == 3300)) || (monsterObject.syurui == 3600))) {
(monsterObject.pt = monsterObject.spt[0]);
(monsterObject.pth = 0);
break;
}
(monsterObject.pt = monsterObject.spt[((1 + this.g_ac) | 0)]);
(monsterObject.pth = 0);
break;
}
case 12210:
{
if ((Math.abs(((n5 - monsterObject.positionY) | 0)) <= 2)) {
(n5 = monsterObject.positionY);
}
else {
if ((n5 < monsterObject.positionY)) {
(n5 = ((n5 + 3) | 0));
}
else {
if ((n5 > monsterObject.positionY)) {
(n5 = ((n5 - 3) | 0));
}
}
}
if ((n5 != monsterObject.positionY)) {
(monsterObject.vx = 0);
(monsterObject.pt = monsterObject.spt[((1 + this.g_ac) | 0)]);
(monsterObject.pth = 0);
break;
}
if ((Math.abs(((n4 - monsterObject.positionX) | 0)) < 6)) {
(n4 = monsterObject.positionX);
(monsterObject.c = 12000);
(monsterObject.c1 = 0);
(monsterObject.vx = 0);
(monsterObject.pt = ((monsterObject.syurui == 2000) ? ((monsterObject.spt[1] + this.g_ac) | 0) : monsterObject.spt[0]));
if ((n4 >= this.co_j.x)) {
(monsterObject.pth = 0);
break;
}
(monsterObject.pth = 1);
break;
}
if ((n4 > monsterObject.positionX)) {
(monsterObject.vx = -60);
(n4 = ((n4 - 6) | 0));
(monsterObject.pt = monsterObject.spt[((1 + this.g_ac) | 0)]);
(monsterObject.pth = 0);
break;
}
(monsterObject.vx = 60);
(n4 = ((n4 + 6) | 0));
(monsterObject.pt = monsterObject.spt[((1 + this.g_ac) | 0)]);
(monsterObject.pth = 1);
break;
}
case 15000:
{
(monsterObject.vx = -80);
if ((((this.maps.wx + 96) | 0) >= (n4 = ((n4 - 8) | 0)))) {
(n4 = ((this.maps.wx + 96) | 0));
(monsterObject.c1 = 0);
(monsterObject.c = ((monsterObject.syurui == 4800) ? 15210 : ((monsterObject.syurui == 4900) ? 15310 : 15110)));
}
(monsterObject.pt = monsterObject.spt[0]);
(monsterObject.pth = 0);
break;
}
case 15010:
{
(n5 = monsterObject.positionY);
if ((Math.abs(((n4 - monsterObject.positionX) | 0)) <= 8)) {
(n4 = monsterObject.positionX);
(monsterObject.c1 = 0);
(monsterObject.vx = 0);
(monsterObject.pt = monsterObject.spt[0]);
(monsterObject.pth = 1);
if ((monsterObject.syurui == 4800)) {
(monsterObject.c = 15200);
break;
}
if ((monsterObject.syurui == 4900)) {
(monsterObject.c = 15300);
break;
}
(monsterObject.c = 15120);
(monsterObject.vx = 0);
(monsterObject.vy = -190);
(monsterObject.pth = 0);
break;
}
(monsterObject.vx = 80);
(n4 = ((n4 + 8) | 0));
(monsterObject.pt = monsterObject.spt[0]);
(monsterObject.pth = 1);
break;
}
case 15100:
{
++monsterObject.c1;
if ((monsterObject.c1 == 1)) {
monsterObject.delPP$1(30);
}
if ((((monsterObject.c1 % 3) == 1) && (monsterObject.c1 <= 140))) {
this.mSet$9(n4, n5, 340, ((Math.imul(this.ranInt$1(25), -10) + 55) | 0), -270, 1, monsterObject.zokusei, monsterObject.ap, n3);
}
else {
if ((monsterObject.c1 >= 170)) {
(monsterObject.c1 = 0);
(monsterObject.move_wc = 16);
(monsterObject.c = ((monsterObject.pp < 100) ? 15800 : 15000));
}
}
(monsterObject.pt = monsterObject.spt[0]);
(monsterObject.pth = 0);
break;
}
case 15110:
{
++monsterObject.c1;
if ((monsterObject.c1 == 1)) {
monsterObject.delPP$1(30);
}
if ((((monsterObject.c1 % 3) == 1) && (monsterObject.c1 <= 120))) {
this.mSet$9(n4, n5, 340, ((Math.imul(this.ranInt$1(25), 10) - 55) | 0), -270, 1, monsterObject.zokusei, monsterObject.ap, n3);
}
else {
if ((monsterObject.c1 >= 170)) {
(monsterObject.c1 = 0);
(monsterObject.move_wc = 16);
(monsterObject.c = 15010);
}
}
(monsterObject.pt = monsterObject.spt[0]);
(monsterObject.pth = 1);
break;
}
case 15120:
{
(monsterObject.vy = ((monsterObject.vy + 25) | 0));
if ((monsterObject.vy > 180)) {
(monsterObject.vy = 180);
}
if (((monsterObject.vy > 0) && ((n5 = ((n5 + J.div(monsterObject.vy, 10)) | 0)) >= monsterObject.positionY))) {
(n5 = monsterObject.positionY);
(monsterObject.vx = 0);
(monsterObject.c = 15100);
(monsterObject.c1 = -20);
(monsterObject.move_wc = 30);
(this.jishin_c = 1);
this.mSet$9(n4, n5, 1700, -150, 0, 1, monsterObject.zokusei, monsterObject.ap, n3);
monsterObject.delPP$1(14);
}
if ((n5 >= this.ochiru_y)) {
(monsterObject.syurui = 0);
(monsterObject.c = 0);
}
(monsterObject.pt = monsterObject.spt[0]);
(monsterObject.pth = monsterObject.muki);
break;
}
case 15200:
{
++monsterObject.c1;
if ((((monsterObject.c1 % 12) == 1) && (monsterObject.c1 <= 110))) {
this.mSet$9(n4, n5, 1900, 0, 0, 1, monsterObject.zokusei, monsterObject.ap, n3);
monsterObject.delPP$1(10);
}
else {
if ((monsterObject.c1 >= 130)) {
(monsterObject.c1 = 0);
(monsterObject.move_wc = 16);
(monsterObject.c = ((monsterObject.pp < 100) ? 15800 : 15220));
}
}
(monsterObject.pt = monsterObject.spt[0]);
(monsterObject.pth = 0);
break;
}
case 15210:
{
++monsterObject.c1;
if ((((monsterObject.c1 % 12) == 1) && (monsterObject.c1 <= 70))) {
this.mSet$9(n4, n5, 1900, 0, 0, 1, monsterObject.zokusei, monsterObject.ap, n3);
monsterObject.delPP$1(10);
}
else {
if ((monsterObject.c1 >= 110)) {
(monsterObject.c1 = 0);
(monsterObject.move_wc = 16);
(monsterObject.c = 15230);
}
}
(monsterObject.pt = monsterObject.spt[0]);
(monsterObject.pth = 1);
break;
}
case 15220:
{
if ((monsterObject.c1 <= 0)) {
(n6 = this.wSearch$3(n4, n5, 10));
if ((n6 >= 0)) {
(monsterObject.c1 = 1);
}
else {
(monsterObject.vx = -80);
if ((((((this.maps.wx + 240) | 0) + 48) | 0) >= (n4 = ((n4 - 8) | 0)))) {
(n4 = ((((this.maps.wx + 240) | 0) + 48) | 0));
(monsterObject.c1 = 1);
}
}
}
else {
++monsterObject.c1;
if ((monsterObject.c1 == 10)) {
(n6 = this.wSearch$3(n4, n5, 10));
if ((n6 >= 0)) {
this.mSet$9(this.co_p[n6].x, n5, 1200, 0, 0, 1, monsterObject.zokusei, monsterObject.ap, n3);
}
else {
this.mSet$9(((n4 - 68) | 0), n5, 1200, 0, 0, 1, monsterObject.zokusei, monsterObject.ap, n3);
}
monsterObject.delPP$1(8);
}
else {
if ((monsterObject.c1 > 30)) {
(monsterObject.c1 = 0);
(monsterObject.c = 15000);
}
}
}
(monsterObject.pt = monsterObject.spt[0]);
(monsterObject.pth = 0);
break;
}
case 15230:
{
if ((monsterObject.c1 <= 0)) {
(n6 = this.wSearch$3(n4, n5, 10));
if ((n6 >= 0)) {
(monsterObject.c1 = 1);
}
else {
(monsterObject.vx = 80);
if ((((((this.maps.wx + 240) | 0) - 48) | 0) <= (n4 = ((n4 + 8) | 0)))) {
(n4 = ((((this.maps.wx + 240) | 0) - 48) | 0));
(monsterObject.c1 = 1);
}
}
}
else {
++monsterObject.c1;
if ((monsterObject.c1 == 10)) {
(n6 = this.wSearch$3(n4, n5, 10));
if ((n6 >= 0)) {
this.mSet$9(this.co_p[n6].x, n5, 1200, 0, 0, 1, monsterObject.zokusei, monsterObject.ap, n3);
}
else {
this.mSet$9(((n4 + 68) | 0), n5, 1200, 0, 0, 1, monsterObject.zokusei, monsterObject.ap, n3);
}
monsterObject.delPP$1(8);
}
else {
if ((monsterObject.c1 > 30)) {
(monsterObject.c1 = 0);
(monsterObject.c = 15010);
}
}
}
(monsterObject.pt = monsterObject.spt[0]);
(monsterObject.pth = 1);
break;
}
case 15300:
{
++monsterObject.c1;
if ((monsterObject.c1 == 5)) {
this.mSet$9(n4, n5, 230, 36, 0, 1, monsterObject.zokusei, monsterObject.ap, n3);
this.mSet$9(n4, n5, 230, 108, 0, 1, monsterObject.zokusei, monsterObject.ap, n3);
this.mSet$9(n4, n5, 230, 180, 0, 1, monsterObject.zokusei, monsterObject.ap, n3);
this.mSet$9(n4, n5, 230, 252, 0, 1, monsterObject.zokusei, monsterObject.ap, n3);
this.mSet$9(n4, n5, 230, 324, 0, 1, monsterObject.zokusei, monsterObject.ap, n3);
monsterObject.delPP$1(8);
}
else {
if (((((monsterObject.c1 % 7) == 1) && (monsterObject.c1 >= 55)) && (monsterObject.c1 <= 90))) {
(n6 = this.wSearch$3(n4, n5, 6));
if ((n6 >= 0)) {
this.mSetNeraiuchi$10(n4, n5, 1510, 0, 0, 1, monsterObject.zokusei, monsterObject.ap, n3, n6);
}
else {
this.mSet$9(n4, n5, 1510, -150, 0, 1, monsterObject.zokusei, monsterObject.ap, n3);
}
monsterObject.delPP$1(12);
}
else {
if ((monsterObject.c1 >= 110)) {
(monsterObject.c1 = 0);
(monsterObject.move_wc = 16);
(monsterObject.c = ((monsterObject.pp < 100) ? 15800 : 15000));
}
}
}
(monsterObject.pt = monsterObject.spt[0]);
(monsterObject.pth = 0);
break;
}
case 15310:
{
++monsterObject.c1;
if ((monsterObject.c1 == 5)) {
this.mSet$9(n4, n5, 230, 36, 0, 1, monsterObject.zokusei, monsterObject.ap, n3);
this.mSet$9(n4, n5, 230, 108, 0, 1, monsterObject.zokusei, monsterObject.ap, n3);
this.mSet$9(n4, n5, 230, 180, 0, 1, monsterObject.zokusei, monsterObject.ap, n3);
this.mSet$9(n4, n5, 230, 252, 0, 1, monsterObject.zokusei, monsterObject.ap, n3);
this.mSet$9(n4, n5, 230, 324, 0, 1, monsterObject.zokusei, monsterObject.ap, n3);
monsterObject.delPP$1(8);
}
else {
if (((((monsterObject.c1 % 7) == 1) && (monsterObject.c1 >= 55)) && (monsterObject.c1 <= 90))) {
(n6 = this.wSearch$3(n4, n5, 6));
if ((n6 >= 0)) {
this.mSetNeraiuchi$10(n4, n5, 1510, 0, 0, 1, monsterObject.zokusei, monsterObject.ap, n3, n6);
}
else {
this.mSet$9(n4, n5, 1510, -150, 0, 1, monsterObject.zokusei, monsterObject.ap, n3);
}
monsterObject.delPP$1(12);
}
else {
if ((monsterObject.c1 >= 130)) {
(monsterObject.c1 = 0);
(monsterObject.move_wc = 16);
(monsterObject.c = 15010);
}
}
}
(monsterObject.pt = monsterObject.spt[0]);
(monsterObject.pth = 1);
break;
}
case 15800:
{
(monsterObject.vx = 80);
if (((n4 = ((n4 + 8) | 0)) >= ((((this.maps.wx + 512) | 0) - 8) | 0))) {
(n4 = ((((this.maps.wx + 512) | 0) - 8) | 0));
(monsterObject.c = 31);
this.km.openTimeMessage$5(11, 312, 8, 192, this.co_j.name);
if ((this.co_j.seibetu == 1)) {
this.km.addItem$2(11, "あらっ、逃げられちゃったわ。");
}
else {
this.km.addItem$2(11, "あれっ、逃げられちゃった。");
}
}
(monsterObject.pt = monsterObject.spt[0]);
(monsterObject.pth = 1);
break;
}
case 15900:
{
(monsterObject.vx = -80);
if (((n4 = ((n4 - 8) | 0)) <= monsterObject.positionX)) {
(n4 = monsterObject.positionX);
(monsterObject.c1 = 0);
if ((monsterObject.syurui == 4800)) {
(monsterObject.c = 15200);
}
else {
if ((monsterObject.syurui == 4900)) {
(monsterObject.c = 15300);
}
else {
(monsterObject.c = 15120);
(monsterObject.vx = 0);
(monsterObject.vy = -190);
}
}
}
(monsterObject.pt = monsterObject.spt[0]);
(monsterObject.pth = 0);
}
}
if ((monsterObject.c == 0)) {
monsterObject.init$0();
}
else {
if ((monsterObject.fc > 0)) {
--monsterObject.fc;
}
if ((((((monsterObject.c >= 50) && (((n4 - this.maps.wx) | 0) < 512)) && (((n4 - this.maps.wx) | 0) > -32)) && (((n5 - this.maps.wy) | 0) < 336)) && (((n5 - this.maps.wy) | 0) > -48))) {
(monsterObject.ss = 2);
if (((monsterObject.fc > 0) && (monsterObject.pth < 2))) {
(monsterObject.pth = ((monsterObject.pth + 2) | 0));
}
(this.ig.zukan_mituketa_f[monsterObject.mn] = true);
}
(monsterObject.x = n4);
(monsterObject.y = n5);
}
}
}
++n3;
}
}
wSearch$3(n, n2, n3) {
var n4 = -1;
var n5 = 9999;
var n6 = 0;
while ((n6 <= 6)) {
var monsterObject = this.co_p[n6];
if ((((monsterObject.c >= 1000) && (monsterObject.c != 2620)) && ((n6 != 6) || (monsterObject.c == 1000)))) {
var n7 = 0;
var n8 = 0;
var n9 = 0;
var bl = false;
switch (n3) {
case 1:
{
if ((((Math.abs(((monsterObject.x - n) | 0)) > 128) || (Math.abs(((monsterObject.y - n2) | 0)) > 26)) || (monsterObject.zokusei == 12))) {
break;
}
(bl = true);
break;
}
case 2:
{
if (((Math.abs(((monsterObject.x - n) | 0)) > 224) || (Math.abs(((monsterObject.y - n2) | 0)) > 26))) {
break;
}
(bl = true);
break;
}
case 3:
{
(n9 = Math.abs(((monsterObject.x - n) | 0)));
(n8 = Math.abs(((monsterObject.y - n2) | 0)));
(n7 = J.i(Math.sqrt(((Math.imul(n9, n9) + Math.imul(n8, n8)) | 0))));
if ((((n7 > 192) || (((n2 + 24) | 0) <= monsterObject.y)) || ((n2 > monsterObject.y) && (this.maps.getBGCode$2(((n + 15) | 0), ((n2 - 1) | 0)) >= 20)))) {
break;
}
(bl = true);
break;
}
case 4:
{
(n9 = Math.abs(((monsterObject.x - n) | 0)));
(n8 = Math.abs(((monsterObject.y - n2) | 0)));
(n7 = J.i(Math.sqrt(((Math.imul(n9, n9) + Math.imul(n8, n8)) | 0))));
if (((n7 > 192) || ((n2 > monsterObject.y) && (this.maps.getBGCode$2(((n + 15) | 0), ((n2 - 1) | 0)) >= 20)))) {
break;
}
(bl = true);
break;
}
case 5:
{
if (((((Math.abs(((monsterObject.x - n) | 0)) > 144) || (Math.abs(((monsterObject.x - n) | 0)) < 64)) || (((n2 - 96) | 0) > monsterObject.y)) || (this.maps.getBGCode$2(((n + 15) | 0), ((n2 - 1) | 0)) >= 20))) {
break;
}
(bl = true);
break;
}
case 6:
{
(bl = true);
break;
}
case 7:
{
(n9 = Math.abs(((monsterObject.x - n) | 0)));
(n8 = Math.abs(((monsterObject.y - n2) | 0)));
(n7 = J.i(Math.sqrt(((Math.imul(n9, n9) + Math.imul(n8, n8)) | 0))));
if ((((n7 > 192) || (monsterObject.zokusei == 12)) || (this.maps.getBGCode$2(((monsterObject.x + 15) | 0), ((monsterObject.y + 32) | 0)) < 20))) {
break;
}
(bl = true);
break;
}
case 8:
{
if (((((Math.abs(((monsterObject.x - n) | 0)) > 64) || (((n2 - 96) | 0) > monsterObject.y)) || (((n2 + 24) | 0) <= monsterObject.y)) || (monsterObject.zokusei == 12))) {
break;
}
(bl = true);
break;
}
case 9:
{
if (((((Math.abs(((monsterObject.y - n2) | 0)) > 26) || (Math.abs(((monsterObject.x - n) | 0)) > 320)) || (((this.maps.wx + 464) | 0) < n)) || (monsterObject.x >= n))) {
break;
}
(bl = true);
break;
}
case 10:
{
if ((Math.abs(((monsterObject.x - n) | 0)) > 112)) {
break;
}
(bl = true);
break;
}
case 11:
{
if (((((Math.abs(((monsterObject.x - n) | 0)) > 184) || (Math.abs(((monsterObject.x - n) | 0)) < 56)) || (monsterObject.zokusei == 12)) || (this.maps.getBGCode$2(((n + 15) | 0), ((n2 - 1) | 0)) >= 20))) {
break;
}
(bl = true);
break;
}
case 12:
{
(n9 = Math.abs(((monsterObject.x - n) | 0)));
(n8 = Math.abs(((monsterObject.y - n2) | 0)));
(n7 = J.i(Math.sqrt(((Math.imul(n9, n9) + Math.imul(n8, n8)) | 0))));
if ((n7 > 144)) {
break;
}
(bl = true);
break;
}
case 13:
{
if (((((((n - 192) | 0) <= monsterObject.x) && (((n + 80) | 0) >= monsterObject.x)) && (((n2 - 160) | 0) <= monsterObject.y)) && (this.maps.getBGCode$2(((n + 15) | 0), ((n2 - 1) | 0)) < 20))) {
(bl = true);
}
}
case 14:
{
if (((((((n - 144) | 0) > monsterObject.x) || (((n + 64) | 0) < monsterObject.x)) || (((n2 - 160) | 0) > monsterObject.y)) || (this.maps.getBGCode$2(((n + 15) | 0), ((n2 - 1) | 0)) >= 20))) {
break;
}
(bl = true);
break;
}
case 15:
{
(n9 = Math.abs(((monsterObject.x - n) | 0)));
(n8 = Math.abs(((monsterObject.y - n2) | 0)));
(n7 = J.i(Math.sqrt(((Math.imul(n9, n9) + Math.imul(n8, n8)) | 0))));
if (((n7 > 192) || (((n2 - 32) | 0) <= monsterObject.y))) {
break;
}
(bl = true);
break;
}
case 16:
{
(n9 = Math.abs(((monsterObject.x - n) | 0)));
(n8 = Math.abs(((monsterObject.y - n2) | 0)));
(n7 = J.i(Math.sqrt(((Math.imul(n9, n9) + Math.imul(n8, n8)) | 0))));
if (((n7 > 192) || (n7 < 48))) {
break;
}
var n10 = J.i((Math.atan2(Math.imul(((monsterObject.y - n2) | 0), -1), ((monsterObject.x - n) | 0)) * 57.32));
if ((n10 < 0)) {
(n10 = ((n10 + 360) | 0));
}
if ((n10 >= 360)) {
(n10 = ((n10 - 360) | 0));
}
if (((((n10 <= 27) || (n10 >= 63)) && ((n10 >= 153) || (n10 <= 117))) || (monsterObject.zokusei == 12))) {
break;
}
(bl = true);
break;
}
case 17:
{
(n9 = Math.abs(((monsterObject.x - n) | 0)));
(n8 = Math.abs(((monsterObject.y - n2) | 0)));
(n7 = J.i(Math.sqrt(((Math.imul(n9, n9) + Math.imul(n8, n8)) | 0))));
if (((n7 > 192) || (monsterObject.zokusei == 1))) {
break;
}
(bl = true);
break;
}
case 18:
{
if ((((((Math.abs(((monsterObject.y - n2) | 0)) > 26) || (monsterObject.zokusei == 12)) || (Math.abs(((monsterObject.x - n) | 0)) > 320)) || (((this.maps.wx + 464) | 0) < n)) || (monsterObject.x >= n))) {
break;
}
(bl = true);
break;
}
case 19:
{
if ((((Math.abs(((monsterObject.x - n) | 0)) > 224) || (Math.abs(((monsterObject.y - n2) | 0)) > 26)) || (monsterObject.zokusei == 12))) {
break;
}
(bl = true);
break;
}
case 20:
{
if ((((Math.abs(((monsterObject.x - n) | 0)) > 152) || (Math.abs(((monsterObject.x - n) | 0)) < 72)) || (((n2 - 64) | 0) > monsterObject.y))) {
break;
}
(bl = true);
break;
}
case 21:
{
(n9 = Math.abs(((monsterObject.x - n) | 0)));
(n8 = Math.abs(((monsterObject.y - n2) | 0)));
(n7 = J.i(Math.sqrt(((Math.imul(n9, n9) + Math.imul(n8, n8)) | 0))));
if (((n7 > 192) || (monsterObject.zokusei == 12))) {
break;
}
(bl = true);
break;
}
case 22:
{
if (((((Math.abs(((monsterObject.x - n) | 0)) > 152) || (Math.abs(((monsterObject.x - n) | 0)) < 72)) || (((n2 - 64) | 0) > monsterObject.y)) || (monsterObject.zokusei == 12))) {
break;
}
(bl = true);
break;
}
case 23:
{
(n9 = Math.abs(((monsterObject.x - n) | 0)));
(n8 = Math.abs(((monsterObject.y - n2) | 0)));
(n7 = J.i(Math.sqrt(((Math.imul(n9, n9) + Math.imul(n8, n8)) | 0))));
if (((n7 > 144) || (monsterObject.zokusei == 12))) {
break;
}
(bl = true);
break;
}
case 24:
{
if ((((Math.abs(((monsterObject.x - n) | 0)) >= 112) || (Math.abs(((monsterObject.y - n2) | 0)) >= 144)) || (monsterObject.zokusei == 12))) {
break;
}
(bl = true);
break;
}
case 25:
{
(n9 = Math.abs(((monsterObject.x - n) | 0)));
(n8 = Math.abs(((monsterObject.y - n2) | 0)));
(n7 = J.i(Math.sqrt(((Math.imul(n9, n9) + Math.imul(n8, n8)) | 0))));
if (((n7 > 192) || (n7 < 48))) {
break;
}
var n10 = J.i((Math.atan2(Math.imul(((monsterObject.y - n2) | 0), -1), ((monsterObject.x - n) | 0)) * 57.32));
if ((n10 < 0)) {
(n10 = ((n10 + 360) | 0));
}
if ((n10 >= 360)) {
(n10 = ((n10 - 360) | 0));
}
if ((((n10 <= 209) || (n10 >= 245)) && ((n10 >= 331) || (n10 <= 295)))) {
break;
}
(bl = true);
}
}
if ((bl && ((n7 = J.i(Math.sqrt(((Math.imul((n9 = Math.abs(((monsterObject.x - n) | 0))), n9) + Math.imul((n8 = Math.abs(((monsterObject.y - n2) | 0))), n8)) | 0)))) < n5))) {
(n4 = n6);
(n5 = n7);
}
}
++n6;
}
return n4;
}
wWazaSyateiC$4(n, n2, n3, n4) {
var n5 = -1;
switch (n3) {
case 3:
{
(n5 = this.wSearch$3(n, n2, 1));
break;
}
case 4:
{
(n5 = this.wSearch$3(n, n2, 2));
break;
}
case 5:
{
(n5 = this.wSearch$3(n, n2, 2));
break;
}
case 6:
{
(n5 = this.wSearch$3(n, n2, 2));
break;
}
case 7:
{
(n5 = this.wSearch$3(n, n2, 5));
break;
}
case 8:
{
(n5 = this.wSearch$3(n, n2, 2));
break;
}
case 9:
{
(n5 = this.wSearch$3(n, n2, 2));
break;
}
case 10:
{
(n5 = this.wSearch$3(n, n2, 1));
break;
}
case 11:
{
(n5 = this.wSearch$3(n, n2, 1));
break;
}
case 13:
{
(n5 = this.wSearch$3(n, n2, 7));
break;
}
case 15:
{
(n5 = this.wSearch$3(n, n2, 4));
break;
}
case 16:
{
(n5 = this.wSearch$3(n, n2, 3));
break;
}
case 17:
{
(n5 = this.wSearch$3(n, n2, 1));
break;
}
case 18:
{
(n5 = this.wSearch$3(n, n2, 8));
break;
}
case 19:
{
(n5 = this.wSearch$3(n, n2, 8));
break;
}
case 20:
{
(n5 = this.wSearch$3(n, n2, 9));
break;
}
case 21:
{
(n5 = this.wSearch$3(n, n2, 18));
break;
}
case 22:
{
(n5 = this.wSearch$3(n, n2, 10));
break;
}
case 24:
{
(n5 = this.wSearch$3(n, n2, 21));
break;
}
case 25:
{
(n5 = this.wSearch$3(n, n2, 11));
break;
}
case 28:
{
(n5 = this.wSearch$3(n, n2, 12));
break;
}
case 30:
{
(n5 = this.wSearch$3(n, n2, 4));
break;
}
case 31:
{
(n5 = this.wSearch$3(n, n2, 13));
break;
}
case 32:
{
(n5 = this.pSearch$3(n, n2, 2));
break;
}
case 33:
{
(n5 = this.wSearch$3(n, n2, 15));
break;
}
case 34:
{
if ((this.co_w[n4].hp <= J.div(this.co_w[n4].hp_max, 2))) {
(n5 = 6);
break;
}
(n5 = -1);
break;
}
case 36:
{
(n5 = this.wSearch$3(n, n2, 19));
break;
}
case 37:
{
(n5 = this.wSearch$3(n, n2, 16));
break;
}
case 38:
{
(n5 = this.wSearch$3(n, n2, 1));
break;
}
case 39:
{
(n5 = this.wSearch$3(n, n2, 21));
break;
}
case 40:
{
(n5 = this.wSearch$3(n, n2, 17));
break;
}
case 42:
{
(n5 = this.wSearch$3(n, n2, 2));
break;
}
case 51:
{
(n5 = this.wSearch$3(n, n2, 4));
break;
}
case 55:
{
(n5 = this.wSearch$3(n, n2, 21));
}
}
return n5;
}
wWazaSyateiK$4(n, n2, n3, n4) {
var n5 = -1;
switch (n3) {
case 3:
{
(n5 = this.wSearch$3(n, n2, 1));
break;
}
case 4:
{
(n5 = this.wSearch$3(n, n2, 2));
break;
}
case 7:
{
(n5 = this.wSearch$3(n, n2, 20));
break;
}
case 15:
{
(n5 = this.wSearch$3(n, n2, 4));
break;
}
case 16:
{
(n5 = this.wSearch$3(n, n2, 4));
break;
}
case 23:
{
(n5 = this.wSearch$3(n, n2, 19));
break;
}
case 24:
{
(n5 = this.wSearch$3(n, n2, 21));
break;
}
case 26:
{
(n5 = this.wSearch$3(n, n2, 22));
break;
}
case 28:
{
(n5 = this.wSearch$3(n, n2, 12));
break;
}
case 29:
{
(n5 = this.wSearch$3(n, n2, 23));
break;
}
case 39:
{
(n5 = this.wSearch$3(n, n2, 21));
break;
}
case 41:
{
(n5 = this.wSearch$3(n, n2, 24));
break;
}
case 52:
{
(n5 = this.wSearch$3(n, n2, 25));
break;
}
case 53:
{
(n5 = this.wSearch$3(n, n2, 1));
break;
}
case 55:
{
(n5 = this.wSearch$3(n, n2, 21));
}
}
return n5;
}
wWazaC$5(monsterObject, n, n2, n3, n4) {
if ((monsterObject.meirei == 1)) {
(monsterObject.c = 210);
(monsterObject.vy = -175);
}
else {
if ((monsterObject.meirei == 2)) {
(monsterObject.c = 11030);
(monsterObject.vx = 0);
(monsterObject.vy = -240);
(monsterObject.muki = 0);
}
else {
if ((monsterObject.meirei == 3)) {
(monsterObject.c = 1300);
(monsterObject.taiatari_type = 1);
if ((n4 == 0)) {
(monsterObject.vx = -120);
(monsterObject.muki = 0);
}
else {
(monsterObject.vx = 120);
(monsterObject.muki = 1);
}
(monsterObject.vy = 0);
(monsterObject.c1 = 12);
monsterObject.delPP$1(1);
}
else {
if ((monsterObject.meirei == 4)) {
(monsterObject.c = 1400);
(monsterObject.vx = 0);
(monsterObject.c1 = 8);
(monsterObject.meirei = 0);
if ((n4 == 0)) {
this.mSet$9(n, n2, 100, -150, 0, 1, monsterObject.zokusei, monsterObject.ap, n3);
(monsterObject.muki = 0);
}
else {
this.mSet$9(n, n2, 100, 150, 0, 1, monsterObject.zokusei, monsterObject.ap, n3);
(monsterObject.muki = 1);
}
(monsterObject.pt = monsterObject.spt[0]);
(monsterObject.pth = monsterObject.muki);
monsterObject.delPP$1(3);
}
else {
if ((monsterObject.meirei == 5)) {
(monsterObject.c = 1610);
(monsterObject.vx = 0);
(monsterObject.c1 = 12);
if ((n4 == 0)) {
this.mSetKakudouchi$10(n, n2, 100, 0, 0, 1, monsterObject.zokusei, monsterObject.ap, n3, 155);
this.mSetKakudouchi$10(n, n2, 100, 0, 0, 1, monsterObject.zokusei, monsterObject.ap, n3, 135);
this.mSetKakudouchi$10(n, n2, 100, 0, 0, 1, monsterObject.zokusei, monsterObject.ap, n3, 115);
(monsterObject.muki = 0);
}
else {
this.mSetKakudouchi$10(n, n2, 100, 0, 0, 1, monsterObject.zokusei, monsterObject.ap, n3, 25);
this.mSetKakudouchi$10(n, n2, 100, 0, 0, 1, monsterObject.zokusei, monsterObject.ap, n3, 45);
this.mSetKakudouchi$10(n, n2, 100, 0, 0, 1, monsterObject.zokusei, monsterObject.ap, n3, 65);
(monsterObject.muki = 1);
}
(monsterObject.pt = monsterObject.spt[0]);
(monsterObject.pth = monsterObject.muki);
monsterObject.delPP$1(8);
}
else {
if ((monsterObject.meirei == 6)) {
(monsterObject.c = 1400);
(monsterObject.vx = 0);
(monsterObject.c1 = 8);
(monsterObject.meirei = 0);
if ((n4 == 0)) {
this.mSet$9(n, n2, 110, -150, 0, 1, monsterObject.zokusei, monsterObject.ap, n3);
(monsterObject.muki = 0);
}
else {
this.mSet$9(n, n2, 110, 150, 0, 1, monsterObject.zokusei, monsterObject.ap, n3);
(monsterObject.muki = 1);
}
(monsterObject.pt = monsterObject.spt[0]);
(monsterObject.pth = monsterObject.muki);
monsterObject.delPP$1(3);
}
else {
if ((monsterObject.meirei == 7)) {
(monsterObject.c = 1430);
(monsterObject.vx = 0);
(monsterObject.c1 = 0);
(monsterObject.meirei = 0);
(monsterObject.muki = ((n4 == 0) ? 0 : 1));
(monsterObject.pt = monsterObject.spt[0]);
(monsterObject.pth = monsterObject.muki);
monsterObject.delPP$1(8);
}
else {
if ((monsterObject.meirei == 8)) {
(monsterObject.c = 1400);
(monsterObject.vx = 0);
(monsterObject.c1 = 8);
(monsterObject.meirei = 0);
if ((n4 == 0)) {
this.mSet$9(n, n2, 120, -150, 0, 1, monsterObject.zokusei, monsterObject.ap, n3);
(monsterObject.muki = 0);
}
else {
this.mSet$9(n, n2, 120, 150, 0, 1, monsterObject.zokusei, monsterObject.ap, n3);
(monsterObject.muki = 1);
}
(monsterObject.pt = monsterObject.spt[0]);
(monsterObject.pth = monsterObject.muki);
monsterObject.delPP$1(3);
}
else {
if ((monsterObject.meirei == 9)) {
(monsterObject.c = 1420);
(monsterObject.vx = 0);
(monsterObject.c1 = 12);
if ((n4 == 0)) {
this.mSetKakudouchi$10(n, n2, 120, 0, 0, 1, monsterObject.zokusei, monsterObject.ap, n3, 180);
this.mSetKakudouchi$10(n, n2, 120, 0, 0, 1, monsterObject.zokusei, monsterObject.ap, n3, 144);
this.mSetKakudouchi$10(n, n2, 120, 0, 0, 1, monsterObject.zokusei, monsterObject.ap, n3, 108);
(monsterObject.muki = 0);
}
else {
this.mSetKakudouchi$10(n, n2, 120, 0, 0, 1, monsterObject.zokusei, monsterObject.ap, n3, 0);
this.mSetKakudouchi$10(n, n2, 120, 0, 0, 1, monsterObject.zokusei, monsterObject.ap, n3, 36);
this.mSetKakudouchi$10(n, n2, 120, 0, 0, 1, monsterObject.zokusei, monsterObject.ap, n3, 72);
(monsterObject.muki = 1);
}
(monsterObject.pt = monsterObject.spt[0]);
(monsterObject.pth = monsterObject.muki);
monsterObject.delPP$1(8);
}
else {
if ((monsterObject.meirei == 10)) {
(monsterObject.c = 1300);
(monsterObject.taiatari_type = 2);
if ((n4 == 0)) {
(monsterObject.vx = -120);
(monsterObject.muki = 0);
}
else {
(monsterObject.vx = 120);
(monsterObject.muki = 1);
}
(monsterObject.vy = 0);
(monsterObject.c1 = 12);
monsterObject.delPP$1(3);
}
else {
if ((monsterObject.meirei == 11)) {
(monsterObject.c = 1300);
(monsterObject.taiatari_type = 3);
if ((n4 == 0)) {
(monsterObject.vx = -120);
(monsterObject.muki = 0);
}
else {
(monsterObject.vx = 120);
(monsterObject.muki = 1);
}
(monsterObject.vy = 0);
(monsterObject.c1 = 12);
monsterObject.delPP$1(3);
}
else {
if ((monsterObject.meirei == 13)) {
(monsterObject.c = 1500);
(monsterObject.vx = 0);
(monsterObject.vy = -150);
(monsterObject.muki = 0);
(monsterObject.pt = monsterObject.spt[0]);
(monsterObject.pth = monsterObject.muki);
}
else {
if ((monsterObject.meirei == 15)) {
(monsterObject.c = 1510);
(monsterObject.vx = 0);
(monsterObject.vy = -175);
var n5 = this.wSearch$3(n, n2, 6);
(monsterObject.muki = 0);
if (((n5 >= 0) && (this.co_p[n5].x > n))) {
(monsterObject.muki = 1);
}
(monsterObject.pt = monsterObject.spt[0]);
(monsterObject.pth = monsterObject.muki);
}
else {
if ((monsterObject.meirei == 16)) {
(monsterObject.c = 1400);
(monsterObject.vx = 0);
(monsterObject.c1 = 8);
(monsterObject.meirei = 0);
var n6 = this.wSearch$3(n, n2, 3);
if (this.gym_f) {
(n6 = this.wSearch$3(n, n2, 6));
}
if ((n6 >= 0)) {
this.mSetNeraiuchi$10(n, n2, 100, 0, 0, 1, monsterObject.zokusei, monsterObject.ap, n3, n6);
(monsterObject.muki = 0);
if ((this.co_p[n6].x > n)) {
(monsterObject.muki = 1);
}
}
else {
var d = Math.cos(Math.PI);
var d2 = Math.sin(Math.PI);
this.mSet$9(n, n2, 100, J.i((d * 150.0)), J.i((-d2 * 150.0)), 1, monsterObject.zokusei, monsterObject.ap, n3);
(monsterObject.muki = 0);
}
(monsterObject.pt = monsterObject.spt[0]);
(monsterObject.pth = monsterObject.muki);
monsterObject.delPP$1(4);
}
else {
if ((monsterObject.meirei == 17)) {
(monsterObject.c = 1300);
(monsterObject.taiatari_type = 4);
if ((n4 == 0)) {
(monsterObject.vx = -120);
(monsterObject.muki = 0);
}
else {
(monsterObject.vx = 120);
(monsterObject.muki = 1);
}
(monsterObject.vy = 0);
(monsterObject.c1 = 12);
monsterObject.delPP$1(3);
}
else {
if ((monsterObject.meirei == 18)) {
(monsterObject.c = 1350);
(monsterObject.taiatari_type = 5);
if ((n4 == 0)) {
(monsterObject.vx = -30);
(monsterObject.muki = 0);
}
else {
(monsterObject.vx = 30);
(monsterObject.muki = 1);
}
(monsterObject.vy = -255);
monsterObject.delPP$1(3);
}
else {
if ((monsterObject.meirei == 19)) {
(monsterObject.c = 1350);
(monsterObject.vy = -255);
(monsterObject.taiatari_type = 6);
if ((n4 == 0)) {
(monsterObject.vx = -30);
(monsterObject.muki = 0);
}
else {
(monsterObject.vx = 30);
(monsterObject.muki = 1);
}
monsterObject.delPP$1(3);
}
else {
if ((monsterObject.meirei == 20)) {
(monsterObject.c = 1440);
(monsterObject.vx = 0);
(monsterObject.c1 = 0);
(monsterObject.muki = 0);
this.mSet$9(n, n2, 1005, 0, 0, 1, monsterObject.zokusei, monsterObject.ap, n3);
(monsterObject.pt = monsterObject.spt[0]);
(monsterObject.pth = monsterObject.muki);
monsterObject.delPP$1(8);
}
else {
if ((monsterObject.meirei == 21)) {
(monsterObject.c = 1450);
(monsterObject.vx = 0);
(monsterObject.c1 = 0);
(monsterObject.muki = 0);
this.mSet$9(n, n2, 1105, 0, 0, 1, monsterObject.zokusei, monsterObject.ap, n3);
(monsterObject.pt = monsterObject.spt[1]);
(monsterObject.pth = monsterObject.muki);
monsterObject.delPP$1(16);
}
else {
if ((monsterObject.meirei == 22)) {
(monsterObject.c = 1520);
(monsterObject.vx = 0);
(monsterObject.vy = -150);
(monsterObject.muki = 0);
var n7 = this.wSearch$3(n, n2, 10);
if ((n7 >= 0)) {
this.mSet$9(this.co_p[n7].x, n2, 1200, 0, 0, 1, monsterObject.zokusei, monsterObject.ap, n3);
(monsterObject.muki = 0);
if ((this.co_p[n7].x > n)) {
(monsterObject.muki = 1);
}
}
else {
this.mSet$9(((n - 68) | 0), n2, 1200, 0, 0, 1, monsterObject.zokusei, monsterObject.ap, n3);
(monsterObject.muki = 0);
}
(monsterObject.pt = monsterObject.spt[0]);
(monsterObject.pth = monsterObject.muki);
monsterObject.delPP$1(8);
}
else {
if ((monsterObject.meirei == 24)) {
(monsterObject.c = 1400);
(monsterObject.vx = 0);
(monsterObject.c1 = 8);
(monsterObject.meirei = 0);
var n8 = this.wSearch$3(n, n2, 21);
if (this.gym_f) {
(n8 = this.wSearch$3(n, n2, 6));
}
if ((n8 >= 0)) {
this.mSetNeraiuchi$10(n, n2, 180, 0, 0, 1, monsterObject.zokusei, monsterObject.ap, n3, n8);
(monsterObject.muki = 0);
if ((this.co_p[n8].x > n)) {
(monsterObject.muki = 1);
}
}
else {
var d = Math.cos(Math.PI);
var d3 = Math.sin(Math.PI);
this.mSet$9(n, n2, 180, J.i((d * 150.0)), J.i((-d3 * 150.0)), 1, monsterObject.zokusei, monsterObject.ap, n3);
(monsterObject.muki = 0);
}
(monsterObject.pt = monsterObject.spt[0]);
(monsterObject.pth = monsterObject.muki);
monsterObject.delPP$1(4);
}
else {
if ((monsterObject.meirei == 25)) {
(monsterObject.c = 1460);
(monsterObject.vx = 0);
(monsterObject.c1 = 0);
(monsterObject.muki = ((n4 == 0) ? 0 : 1));
(monsterObject.pt = monsterObject.spt[0]);
(monsterObject.pth = monsterObject.muki);
monsterObject.delPP$1(8);
}
else {
if ((monsterObject.meirei == 28)) {
(monsterObject.c = 1400);
(monsterObject.vx = 0);
(monsterObject.c1 = 20);
(monsterObject.muki = 0);
this.mSet$9(n, n2, 220, 30, 0, 1, monsterObject.zokusei, monsterObject.ap, n3);
this.mSet$9(n, n2, 220, 90, 0, 1, monsterObject.zokusei, monsterObject.ap, n3);
this.mSet$9(n, n2, 220, 150, 0, 1, monsterObject.zokusei, monsterObject.ap, n3);
this.mSet$9(n, n2, 220, 210, 0, 1, monsterObject.zokusei, monsterObject.ap, n3);
this.mSet$9(n, n2, 220, 270, 0, 1, monsterObject.zokusei, monsterObject.ap, n3);
this.mSet$9(n, n2, 220, 330, 0, 1, monsterObject.zokusei, monsterObject.ap, n3);
(monsterObject.pt = monsterObject.spt[0]);
(monsterObject.pth = monsterObject.muki);
monsterObject.delPP$1(8);
}
else {
if ((monsterObject.meirei == 30)) {
(monsterObject.c = 1400);
(monsterObject.vx = 0);
(monsterObject.c1 = 16);
this.mSet$9(n, n2, 1300, 0, 0, 1, monsterObject.zokusei, monsterObject.ap, n3);
var n9 = this.wSearch$3(n, n2, 6);
if ((n9 >= 0)) {
(monsterObject.muki = 0);
if ((this.co_p[n9].x > n)) {
(monsterObject.muki = 1);
}
}
else {
(monsterObject.muki = 0);
}
(monsterObject.pt = monsterObject.spt[0]);
(monsterObject.pth = monsterObject.muki);
monsterObject.delPP$1(8);
}
else {
if ((monsterObject.meirei == 31)) {
(monsterObject.c = 1480);
(monsterObject.vx = 0);
(monsterObject.c1 = 0);
(monsterObject.muki = 0);
(monsterObject.pt = monsterObject.spt[0]);
(monsterObject.pth = monsterObject.muki);
monsterObject.delPP$1(8);
}
else {
if ((monsterObject.meirei == 32)) {
(monsterObject.c = 1490);
(monsterObject.vx = 0);
(monsterObject.c1 = 0);
(monsterObject.muki = 0);
(monsterObject.pt = monsterObject.spt[0]);
(monsterObject.pth = monsterObject.muki);
monsterObject.delPP$1(12);
}
else {
if ((monsterObject.meirei == 33)) {
(monsterObject.c = 1400);
(monsterObject.vx = 0);
(monsterObject.c1 = 8);
(monsterObject.meirei = 0);
var n10 = this.wSearch$3(n, n2, 3);
if (this.gym_f) {
(n10 = this.wSearch$3(n, n2, 6));
}
if ((n10 >= 0)) {
this.mSetNeraiuchi$10(n, n2, 120, 0, 0, 1, monsterObject.zokusei, monsterObject.ap, n3, n10);
(monsterObject.muki = 0);
if ((this.co_p[n10].x > n)) {
(monsterObject.muki = 1);
}
}
else {
var d = Math.cos(Math.PI);
var d4 = Math.sin(Math.PI);
this.mSet$9(n, n2, 120, J.i((d * 150.0)), J.i((-d4 * 150.0)), 1, monsterObject.zokusei, monsterObject.ap, n3);
(monsterObject.muki = 0);
}
(monsterObject.pt = monsterObject.spt[0]);
(monsterObject.pth = monsterObject.muki);
monsterObject.delPP$1(4);
}
else {
if ((monsterObject.meirei == 34)) {
(monsterObject.c = 1530);
(monsterObject.vx = 0);
(monsterObject.c1 = 0);
(monsterObject.muki = 0);
this.mSet$9(n, n2, 1400, 0, 0, 1, monsterObject.zokusei, monsterObject.ap, n3);
(monsterObject.pt = monsterObject.spt[0]);
(monsterObject.pth = monsterObject.muki);
monsterObject.delPP$1(12);
}
else {
if ((monsterObject.meirei == 35)) {
(monsterObject.c = 1410);
(monsterObject.vx = 0);
(monsterObject.c1 = 45);
(monsterObject.muki = 0);
(monsterObject.pt = ((this.g_c3 <= 3) ? 193 : 194));
(monsterObject.pth = monsterObject.muki);
monsterObject.delPP$1(1);
}
else {
if ((monsterObject.meirei == 36)) {
(monsterObject.c = 1400);
(monsterObject.vx = 0);
(monsterObject.c1 = 8);
if ((n4 == 0)) {
this.mSet$9(n, n2, 270, -150, 0, 1, monsterObject.zokusei, monsterObject.ap, n3);
(monsterObject.muki = 0);
}
else {
this.mSet$9(n, n2, 270, 150, 0, 1, monsterObject.zokusei, monsterObject.ap, n3);
(monsterObject.muki = 1);
}
(monsterObject.pt = monsterObject.spt[0]);
(monsterObject.pth = monsterObject.muki);
monsterObject.delPP$1(3);
}
else {
if ((monsterObject.meirei == 37)) {
(monsterObject.c = 1600);
(monsterObject.vx = 0);
(monsterObject.c1 = 12);
if ((n4 == 0)) {
this.mSetKakudouchi$10(n, n2, 270, 0, 0, 1, monsterObject.zokusei, monsterObject.ap, n3, 155);
this.mSetKakudouchi$10(n, n2, 270, 0, 0, 1, monsterObject.zokusei, monsterObject.ap, n3, 135);
this.mSetKakudouchi$10(n, n2, 270, 0, 0, 1, monsterObject.zokusei, monsterObject.ap, n3, 115);
(monsterObject.muki = 0);
}
else {
this.mSetKakudouchi$10(n, n2, 270, 0, 0, 1, monsterObject.zokusei, monsterObject.ap, n3, 25);
this.mSetKakudouchi$10(n, n2, 270, 0, 0, 1, monsterObject.zokusei, monsterObject.ap, n3, 45);
this.mSetKakudouchi$10(n, n2, 270, 0, 0, 1, monsterObject.zokusei, monsterObject.ap, n3, 65);
(monsterObject.muki = 1);
}
(monsterObject.pt = monsterObject.spt[0]);
(monsterObject.pth = monsterObject.muki);
monsterObject.delPP$1(8);
}
else {
if ((monsterObject.meirei == 38)) {
(monsterObject.c = 1300);
(monsterObject.taiatari_type = 7);
if ((n4 == 0)) {
(monsterObject.vx = -120);
(monsterObject.muki = 0);
}
else {
(monsterObject.vx = 120);
(monsterObject.muki = 1);
}
(monsterObject.vy = 0);
(monsterObject.c1 = 12);
monsterObject.delPP$1(3);
}
else {
if (((monsterObject.meirei == 39) || (monsterObject.meirei == 55))) {
(monsterObject.c = 1400);
(monsterObject.vx = 0);
(monsterObject.c1 = 8);
var n11 = this.wSearch$3(n, n2, 21);
if (this.gym_f) {
(n11 = this.wSearch$3(n, n2, 6));
}
if ((n11 >= 0)) {
if ((monsterObject.meirei == 55)) {
this.mSetNeraiuchi$10(n, n2, 285, 0, 0, 1, monsterObject.zokusei, monsterObject.ap, n3, n11);
}
else {
this.mSetNeraiuchi$10(n, n2, 280, 0, 0, 1, monsterObject.zokusei, monsterObject.ap, n3, n11);
}
(monsterObject.muki = 0);
if ((this.co_p[n11].x > n)) {
(monsterObject.muki = 1);
}
}
else {
if ((monsterObject.meirei == 55)) {
this.mSet$9(n, n2, 285, -150, 0, 1, monsterObject.zokusei, monsterObject.ap, n3);
}
else {
this.mSet$9(n, n2, 280, -150, 0, 1, monsterObject.zokusei, monsterObject.ap, n3);
}
(monsterObject.muki = 0);
}
(monsterObject.pt = monsterObject.spt[0]);
(monsterObject.pth = monsterObject.muki);
if ((monsterObject.meirei == 55)) {
monsterObject.delPP$1(10);
}
else {
monsterObject.delPP$1(8);
}
}
else {
if (((monsterObject.meirei == 40) || (monsterObject.meirei == 61))) {
(monsterObject.c = 1400);
(monsterObject.vx = 0);
(monsterObject.c1 = 8);
var n12 = this.wSearch$3(n, n2, 17);
if (this.gym_f) {
(n12 = this.wSearch$3(n, n2, 6));
}
if ((n12 >= 0)) {
if ((monsterObject.meirei == 61)) {
this.mSetNeraiuchi$10(n, n2, 360, 0, 0, 1, monsterObject.zokusei, monsterObject.ap, n3, n12);
monsterObject.delPP$1(2);
}
else {
this.mSetNeraiuchi$10(n, n2, 290, 0, 0, 1, monsterObject.zokusei, monsterObject.ap, n3, n12);
}
(monsterObject.muki = 0);
if ((this.co_p[n12].x > n)) {
(monsterObject.muki = 1);
}
}
else {
if ((monsterObject.meirei == 61)) {
this.mSet$9(n, n2, 360, -150, 0, 1, monsterObject.zokusei, monsterObject.ap, n3);
monsterObject.delPP$1(2);
}
else {
this.mSet$9(n, n2, 290, -150, 0, 1, monsterObject.zokusei, monsterObject.ap, n3);
}
(monsterObject.muki = 0);
}
(monsterObject.pt = monsterObject.spt[0]);
(monsterObject.pth = monsterObject.muki);
monsterObject.delPP$1(6);
}
else {
if ((monsterObject.meirei == 42)) {
(monsterObject.c = 1400);
(monsterObject.vx = 0);
(monsterObject.c1 = 8);
(monsterObject.meirei = 0);
if ((n4 == 0)) {
this.mSet$9(n, n2, 1500, -150, 0, 1, monsterObject.zokusei, monsterObject.ap, n3);
(monsterObject.muki = 0);
}
else {
this.mSet$9(n, n2, 1500, 150, 0, 1, monsterObject.zokusei, monsterObject.ap, n3);
(monsterObject.muki = 1);
}
(monsterObject.pt = monsterObject.spt[0]);
(monsterObject.pth = monsterObject.muki);
monsterObject.delPP$1(8);
}
else {
if ((monsterObject.meirei == 45)) {
(monsterObject.c = 1560);
(monsterObject.vx = 0);
(monsterObject.c1 = 0);
(monsterObject.pt = monsterObject.spt[0]);
(monsterObject.pth = monsterObject.muki);
monsterObject.delPP$1(10);
}
else {
if ((monsterObject.meirei == 49)) {
(monsterObject.c = 1630);
(monsterObject.vx = 0);
(monsterObject.c1 = 0);
(monsterObject.muki = 0);
(monsterObject.pt = monsterObject.spt[0]);
(monsterObject.pth = monsterObject.muki);
monsterObject.delPP$1(16);
}
else {
if ((monsterObject.meirei == 50)) {
(monsterObject.c = 1640);
(monsterObject.vx = 0);
(monsterObject.c1 = 0);
(monsterObject.muki = ((n4 == 0) ? 0 : 1));
(monsterObject.pt = monsterObject.spt[0]);
(monsterObject.pth = monsterObject.muki);
monsterObject.delPP$1(18);
}
else {
if ((monsterObject.meirei == 51)) {
(monsterObject.c = 1350);
(monsterObject.taiatari_type = 8);
(monsterObject.vx = 0);
(monsterObject.muki = 0);
(monsterObject.vy = -285);
monsterObject.delPP$1(3);
}
else {
if ((monsterObject.meirei == 56)) {
(monsterObject.c = 1300);
(monsterObject.taiatari_type = 10);
if ((n4 == 0)) {
(monsterObject.vx = -120);
(monsterObject.muki = 0);
}
else {
(monsterObject.vx = 120);
(monsterObject.muki = 1);
}
(monsterObject.vy = 0);
(monsterObject.c1 = 12);
monsterObject.delPP$1(8);
}
else {
if ((monsterObject.meirei == 57)) {
(monsterObject.c = 1530);
(monsterObject.vx = 0);
(monsterObject.c1 = 0);
(monsterObject.muki = 0);
this.mSet$9(n, n2, 1405, 0, 0, 1, monsterObject.zokusei, monsterObject.ap, n3);
(monsterObject.pt = monsterObject.spt[0]);
(monsterObject.pth = monsterObject.muki);
monsterObject.delPP$1(18);
}
else {
if ((monsterObject.meirei == 58)) {
(monsterObject.c = 1505);
(monsterObject.vx = 0);
(monsterObject.vy = -150);
(monsterObject.muki = 0);
(monsterObject.pt = monsterObject.spt[0]);
(monsterObject.pth = monsterObject.muki);
}
else {
if ((monsterObject.meirei == 59)) {
(monsterObject.c = 1400);
(monsterObject.vx = 0);
(monsterObject.c1 = 16);
this.mSet$9(n, n2, 1305, 0, 0, 1, monsterObject.zokusei, monsterObject.ap, n3);
var n13 = this.wSearch$3(n, n2, 6);
if ((n13 >= 0)) {
(monsterObject.muki = 0);
if ((this.co_p[n13].x > n)) {
(monsterObject.muki = 1);
}
}
else {
(monsterObject.muki = 0);
}
(monsterObject.pt = monsterObject.spt[0]);
(monsterObject.pth = monsterObject.muki);
monsterObject.delPP$1(10);
}
else {
if ((monsterObject.meirei == 60)) {
(monsterObject.c = 1650);
(monsterObject.vx = 0);
(monsterObject.c1 = 0);
(monsterObject.meirei = 0);
(monsterObject.muki = 0);
(monsterObject.pt = monsterObject.spt[0]);
(monsterObject.pth = monsterObject.muki);
monsterObject.delPP$1(24);
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
(monsterObject.meirei = 0);
}
wWazaK$5(monsterObject, n, n2, n3, n4) {
if ((monsterObject.meirei == 1)) {
(monsterObject.c = 210);
(monsterObject.vy = -125);
}
else {
if ((monsterObject.meirei == 3)) {
(monsterObject.c = 2300);
(monsterObject.taiatari_type = 1);
if ((n4 == 0)) {
(monsterObject.vx = -120);
(monsterObject.muki = 0);
}
else {
(monsterObject.vx = 120);
(monsterObject.muki = 1);
}
(monsterObject.vy = 0);
(monsterObject.c1 = 12);
monsterObject.delPP$1(1);
}
else {
if ((monsterObject.meirei == 6)) {
(monsterObject.c = 2400);
(monsterObject.vx = 0);
(monsterObject.c1 = 8);
(monsterObject.meirei = 0);
if ((n4 == 0)) {
this.mSet$9(n, n2, 110, -150, 0, 1, monsterObject.zokusei, monsterObject.ap, n3);
(monsterObject.muki = 0);
}
else {
this.mSet$9(n, n2, 110, 150, 0, 1, monsterObject.zokusei, monsterObject.ap, n3);
(monsterObject.muki = 1);
}
(monsterObject.pt = monsterObject.spt[0]);
(monsterObject.pth = monsterObject.muki);
monsterObject.delPP$1(3);
}
else {
if ((monsterObject.meirei == 7)) {
(monsterObject.c = 2430);
(monsterObject.vx = 0);
(monsterObject.c1 = 0);
(monsterObject.meirei = 0);
(monsterObject.muki = ((n4 == 0) ? 0 : 1));
(monsterObject.pt = monsterObject.spt[0]);
(monsterObject.pth = monsterObject.muki);
monsterObject.delPP$1(8);
}
else {
if ((monsterObject.meirei == 11)) {
(monsterObject.c = 2300);
(monsterObject.taiatari_type = 3);
if ((n4 == 0)) {
(monsterObject.vx = -90);
(monsterObject.muki = 0);
}
else {
(monsterObject.vx = 90);
(monsterObject.muki = 1);
}
(monsterObject.vy = 90);
(monsterObject.c1 = 13);
monsterObject.delPP$1(3);
}
else {
if ((monsterObject.meirei == 13)) {
(monsterObject.c = 2400);
(monsterObject.vx = 0);
(monsterObject.c1 = 16);
(monsterObject.muki = 0);
(this.jishin_c = 1);
this.mSet$9(n, n2, 1700, -150, 0, 1, monsterObject.zokusei, monsterObject.ap, n3);
monsterObject.delPP$1(14);
}
else {
if (((((((monsterObject.meirei == 15) || (monsterObject.meirei == 16)) || (monsterObject.meirei == 33)) || (monsterObject.meirei == 40)) || (monsterObject.meirei == 46)) || (monsterObject.meirei == 61))) {
var n5 = 0;
(monsterObject.c = 2400);
(monsterObject.vx = 0);
(monsterObject.c1 = 8);
if ((monsterObject.meirei == 16)) {
(n5 = 100);
}
else {
if ((monsterObject.meirei == 33)) {
(n5 = 120);
}
else {
if ((monsterObject.meirei == 40)) {
(n5 = 290);
monsterObject.delPP$1(2);
}
else {
if ((monsterObject.meirei == 46)) {
(n5 = 320);
monsterObject.delPP$1(2);
}
else {
if ((monsterObject.meirei == 61)) {
(n5 = 360);
monsterObject.delPP$1(4);
}
else {
(n5 = 160);
}
}
}
}
}
var n6 = this.wSearch$3(n, n2, 6);
if ((n6 >= 0)) {
this.mSetNeraiuchi$10(n, n2, n5, 0, 0, 1, monsterObject.zokusei, monsterObject.ap, n3, n6);
(monsterObject.muki = 0);
if ((this.co_p[n6].x > n)) {
(monsterObject.muki = 1);
}
}
else {
this.mSet$9(n, n2, 160, -150, 0, 1, monsterObject.zokusei, monsterObject.ap, n3);
(monsterObject.muki = 0);
}
monsterObject.delPP$1(4);
}
else {
if ((monsterObject.meirei == 17)) {
(monsterObject.c = 2300);
(monsterObject.taiatari_type = 4);
if ((n4 == 0)) {
(monsterObject.vx = -120);
(monsterObject.muki = 0);
}
else {
(monsterObject.vx = 120);
(monsterObject.muki = 1);
}
(monsterObject.vy = 0);
(monsterObject.c1 = 12);
monsterObject.delPP$1(3);
}
else {
if ((monsterObject.meirei == 21)) {
(monsterObject.c = 2450);
(monsterObject.vx = 0);
(monsterObject.c1 = 0);
(monsterObject.muki = 0);
this.mSet$9(n, n2, 1105, 0, 0, 1, monsterObject.zokusei, monsterObject.ap, n3);
monsterObject.delPP$1(16);
}
else {
if ((monsterObject.meirei == 22)) {
(monsterObject.c = 2400);
(monsterObject.vx = 0);
(monsterObject.c1 = 16);
var n7 = this.wSearch$3(n, n2, 10);
if ((n7 >= 0)) {
this.mSet$9(this.co_p[n7].x, n2, 1200, 0, 0, 1, monsterObject.zokusei, monsterObject.ap, n3);
(monsterObject.muki = 0);
if ((this.co_p[n7].x > n)) {
(monsterObject.muki = 1);
}
}
else {
this.mSet$9(((n - 68) | 0), n2, 1200, 0, 0, 1, monsterObject.zokusei, monsterObject.ap, n3);
(monsterObject.muki = 0);
}
monsterObject.delPP$1(8);
}
else {
if ((monsterObject.meirei == 23)) {
(monsterObject.c = 2400);
(monsterObject.vx = 0);
(monsterObject.c1 = 8);
(monsterObject.meirei = 0);
if ((n4 == 0)) {
this.mSet$9(n, n2, 170, -200, 0, 1, monsterObject.zokusei, monsterObject.ap, n3);
(monsterObject.muki = 0);
}
else {
this.mSet$9(n, n2, 170, 200, 0, 1, monsterObject.zokusei, monsterObject.ap, n3);
(monsterObject.muki = 1);
}
(monsterObject.pt = monsterObject.spt[0]);
(monsterObject.pth = monsterObject.muki);
monsterObject.delPP$1(3);
}
else {
if ((monsterObject.meirei == 24)) {
(monsterObject.c = 2400);
(monsterObject.vx = 0);
(monsterObject.c1 = 8);
(monsterObject.meirei = 0);
var n8 = this.wSearch$3(n, n2, 4);
if (this.gym_f) {
(n8 = this.wSearch$3(n, n2, 6));
}
if ((n8 >= 0)) {
this.mSetNeraiuchi$10(n, n2, 180, 0, 0, 1, monsterObject.zokusei, monsterObject.ap, n3, n8);
(monsterObject.muki = 0);
if ((this.co_p[n8].x > n)) {
(monsterObject.muki = 1);
}
}
else {
var d = Math.cos(Math.PI);
var d2 = Math.sin(Math.PI);
this.mSet$9(n, n2, 180, J.i((d * 150.0)), J.i((-d2 * 150.0)), 1, monsterObject.zokusei, monsterObject.ap, n3);
(monsterObject.muki = 0);
}
(monsterObject.pt = monsterObject.spt[0]);
(monsterObject.pth = monsterObject.muki);
monsterObject.delPP$1(4);
}
else {
if ((monsterObject.meirei == 26)) {
(monsterObject.c = 2470);
(monsterObject.vx = 0);
(monsterObject.c1 = 0);
(monsterObject.meirei = 0);
(monsterObject.muki = ((n4 == 0) ? 0 : 1));
monsterObject.delPP$1(8);
}
else {
if ((monsterObject.meirei == 27)) {
(monsterObject.c = 2480);
(monsterObject.vx = 0);
(monsterObject.c1 = 0);
(monsterObject.muki = 0);
monsterObject.delPP$1(12);
}
else {
if ((monsterObject.meirei == 28)) {
(monsterObject.c = 2400);
(monsterObject.vx = 0);
(monsterObject.c1 = 20);
(monsterObject.muki = 0);
this.mSet$9(n, n2, 220, 30, 0, 1, monsterObject.zokusei, monsterObject.ap, n3);
this.mSet$9(n, n2, 220, 90, 0, 1, monsterObject.zokusei, monsterObject.ap, n3);
this.mSet$9(n, n2, 220, 150, 0, 1, monsterObject.zokusei, monsterObject.ap, n3);
this.mSet$9(n, n2, 220, 210, 0, 1, monsterObject.zokusei, monsterObject.ap, n3);
this.mSet$9(n, n2, 220, 270, 0, 1, monsterObject.zokusei, monsterObject.ap, n3);
this.mSet$9(n, n2, 220, 330, 0, 1, monsterObject.zokusei, monsterObject.ap, n3);
(monsterObject.pt = monsterObject.spt[0]);
(monsterObject.pth = monsterObject.muki);
monsterObject.delPP$1(8);
}
else {
if ((monsterObject.meirei == 29)) {
(monsterObject.c = 2400);
(monsterObject.vx = 0);
(monsterObject.c1 = 20);
(monsterObject.muki = 0);
this.mSet$9(n, n2, 230, 36, 0, 1, monsterObject.zokusei, monsterObject.ap, n3);
this.mSet$9(n, n2, 230, 108, 0, 1, monsterObject.zokusei, monsterObject.ap, n3);
this.mSet$9(n, n2, 230, 180, 0, 1, monsterObject.zokusei, monsterObject.ap, n3);
this.mSet$9(n, n2, 230, 252, 0, 1, monsterObject.zokusei, monsterObject.ap, n3);
this.mSet$9(n, n2, 230, 324, 0, 1, monsterObject.zokusei, monsterObject.ap, n3);
(monsterObject.pt = monsterObject.spt[0]);
(monsterObject.pth = monsterObject.muki);
monsterObject.delPP$1(8);
}
else {
if ((monsterObject.meirei == 30)) {
(monsterObject.c = 2400);
(monsterObject.vx = 0);
(monsterObject.c1 = 16);
(monsterObject.meirei = 0);
(monsterObject.muki = 0);
var n9 = this.wSearch$3(n, n2, 4);
if (this.gym_f) {
(n9 = this.wSearch$3(n, n2, 6));
}
if (((n9 >= 0) && (this.co_p[n9].x > n))) {
(monsterObject.muki = 1);
}
this.mSet$9(n, n2, 1300, 0, 0, 1, monsterObject.zokusei, monsterObject.ap, n3);
monsterObject.delPP$1(8);
}
else {
if ((monsterObject.meirei == 34)) {
(monsterObject.c = 2530);
(monsterObject.vx = 0);
(monsterObject.c1 = 0);
(monsterObject.muki = 0);
this.mSet$9(n, n2, 1400, 0, 0, 1, monsterObject.zokusei, monsterObject.ap, n3);
monsterObject.delPP$1(12);
}
else {
if (((monsterObject.meirei == 39) || (monsterObject.meirei == 55))) {
(monsterObject.c = 2400);
(monsterObject.vx = 0);
(monsterObject.c1 = 8);
var n10 = this.wSearch$3(n, n2, 4);
if (this.gym_f) {
(n10 = this.wSearch$3(n, n2, 6));
}
if ((n10 >= 0)) {
if ((monsterObject.meirei == 55)) {
this.mSetNeraiuchi$10(n, n2, 285, 0, 0, 1, monsterObject.zokusei, monsterObject.ap, n3, n10);
}
else {
this.mSetNeraiuchi$10(n, n2, 280, 0, 0, 1, monsterObject.zokusei, monsterObject.ap, n3, n10);
}
(monsterObject.muki = 0);
if ((this.co_p[n10].x > n)) {
(monsterObject.muki = 1);
}
}
else {
if ((monsterObject.meirei == 55)) {
this.mSet$9(n, n2, 285, -150, 0, 1, monsterObject.zokusei, monsterObject.ap, n3);
}
else {
this.mSet$9(n, n2, 280, -150, 0, 1, monsterObject.zokusei, monsterObject.ap, n3);
}
(monsterObject.muki = 0);
}
if ((monsterObject.meirei == 55)) {
monsterObject.delPP$1(10);
}
else {
monsterObject.delPP$1(8);
}
}
else {
if ((monsterObject.meirei == 41)) {
(monsterObject.c = 2540);
(monsterObject.vx = 0);
(monsterObject.c1 = 18);
(monsterObject.muki = 0);
if (this.gym_f) {
this.mSetKakudouchi$10(n, n2, 300, 0, 0, 1, monsterObject.zokusei, monsterObject.ap, n3, 0);
this.mSetKakudouchi$10(n, n2, 300, 0, 0, 1, monsterObject.zokusei, monsterObject.ap, n3, 270);
this.mSetKakudouchi$10(n, n2, 300, 0, 0, 1, monsterObject.zokusei, monsterObject.ap, n3, 180);
this.mSetKakudouchi$10(n, n2, 300, 0, 0, 1, monsterObject.zokusei, monsterObject.ap, n3, 90);
this.mSetKakudouchi$10(n, n2, 300, 0, 0, 1, monsterObject.zokusei, monsterObject.ap, n3, 330);
this.mSetKakudouchi$10(n, n2, 300, 0, 0, 1, monsterObject.zokusei, monsterObject.ap, n3, 240);
this.mSetKakudouchi$10(n, n2, 300, 0, 0, 1, monsterObject.zokusei, monsterObject.ap, n3, 150);
this.mSetKakudouchi$10(n, n2, 300, 0, 0, 1, monsterObject.zokusei, monsterObject.ap, n3, 60);
this.mSetKakudouchi$10(n, n2, 300, 0, 0, 1, monsterObject.zokusei, monsterObject.ap, n3, 300);
this.mSetKakudouchi$10(n, n2, 300, 0, 0, 1, monsterObject.zokusei, monsterObject.ap, n3, 210);
this.mSetKakudouchi$10(n, n2, 300, 0, 0, 1, monsterObject.zokusei, monsterObject.ap, n3, 120);
this.mSetKakudouchi$10(n, n2, 300, 0, 0, 1, monsterObject.zokusei, monsterObject.ap, n3, 30);
}
(monsterObject.pt = monsterObject.spt[0]);
(monsterObject.pth = monsterObject.muki);
monsterObject.delPP$1(1);
}
else {
if ((monsterObject.meirei == 42)) {
(monsterObject.c = 2400);
(monsterObject.vx = 0);
(monsterObject.c1 = 8);
(monsterObject.muki = 0);
this.mSet$9(n, n2, 1500, -150, 0, 1, monsterObject.zokusei, monsterObject.ap, n3);
(monsterObject.pth = monsterObject.muki);
monsterObject.delPP$1(8);
}
else {
if ((monsterObject.meirei == 43)) {
(monsterObject.c = 2550);
(monsterObject.vx = 0);
(monsterObject.c1 = 0);
(monsterObject.muki = ((n4 == 0) ? 0 : 1));
(monsterObject.pth = monsterObject.muki);
monsterObject.delPP$1(18);
}
else {
if ((monsterObject.meirei == 44)) {
(monsterObject.c = 2400);
(monsterObject.vx = 0);
(monsterObject.c1 = 20);
(monsterObject.muki = 0);
this.mSet$9(n, n2, 310, 30, 0, 1, monsterObject.zokusei, monsterObject.ap, n3);
this.mSet$9(n, n2, 310, 90, 0, 1, monsterObject.zokusei, monsterObject.ap, n3);
this.mSet$9(n, n2, 310, 150, 0, 1, monsterObject.zokusei, monsterObject.ap, n3);
this.mSet$9(n, n2, 310, 210, 0, 1, monsterObject.zokusei, monsterObject.ap, n3);
this.mSet$9(n, n2, 310, 270, 0, 1, monsterObject.zokusei, monsterObject.ap, n3);
this.mSet$9(n, n2, 310, 330, 0, 1, monsterObject.zokusei, monsterObject.ap, n3);
(monsterObject.pth = monsterObject.muki);
monsterObject.delPP$1(14);
}
else {
if ((monsterObject.meirei == 45)) {
(monsterObject.c = 2560);
(monsterObject.vx = 0);
(monsterObject.c1 = 0);
monsterObject.delPP$1(10);
}
else {
if ((monsterObject.meirei == 47)) {
(monsterObject.c = 2620);
(monsterObject.vx = 0);
(monsterObject.c1 = 0);
(monsterObject.meirei = 0);
(monsterObject.muki = 0);
monsterObject.delPP$1(10);
}
else {
if ((monsterObject.meirei == 48)) {
(monsterObject.c = 2450);
(monsterObject.vx = 0);
(monsterObject.c1 = 0);
(monsterObject.muki = 0);
this.mSet$9(n, n2, 1805, 0, 0, 1, monsterObject.zokusei, monsterObject.ap, n3);
monsterObject.delPP$1(10);
}
else {
if ((monsterObject.meirei == 52)) {
(monsterObject.c = 2640);
(monsterObject.vx = 0);
(monsterObject.c1 = 0);
(monsterObject.meirei = 0);
(monsterObject.muki = ((n4 == 0) ? 0 : 1));
(monsterObject.pt = monsterObject.spt[0]);
(monsterObject.pth = monsterObject.muki);
monsterObject.delPP$1(8);
}
else {
if ((monsterObject.meirei == 53)) {
(monsterObject.c = 2300);
(monsterObject.taiatari_type = 9);
if ((n4 == 0)) {
(monsterObject.vx = -120);
(monsterObject.muki = 0);
}
else {
(monsterObject.vx = 120);
(monsterObject.muki = 1);
}
(monsterObject.vy = 0);
(monsterObject.c1 = 12);
monsterObject.delPP$1(3);
}
else {
if ((monsterObject.meirei == 54)) {
(monsterObject.c = 2400);
(monsterObject.vx = 0);
(monsterObject.c1 = 12);
(monsterObject.meirei = 0);
(monsterObject.muki = 0);
var n11 = this.wSearch$3(n, n2, 4);
if (this.gym_f) {
(n11 = this.wSearch$3(n, n2, 6));
}
if (((n11 >= 0) && (this.co_p[n11].x > n))) {
(monsterObject.muki = 1);
}
this.mSet$9(n, n2, 1900, 0, 0, 1, monsterObject.zokusei, monsterObject.ap, n3);
monsterObject.delPP$1(10);
}
else {
if ((monsterObject.meirei == 57)) {
(monsterObject.c = 2530);
(monsterObject.vx = 0);
(monsterObject.c1 = 0);
(monsterObject.muki = 0);
this.mSet$9(n, n2, 1405, 0, 0, 1, monsterObject.zokusei, monsterObject.ap, n3);
monsterObject.delPP$1(18);
}
else {
if ((monsterObject.meirei == 58)) {
(monsterObject.c = 2400);
(monsterObject.vx = 0);
(monsterObject.c1 = 16);
(monsterObject.muki = 0);
(this.jishin_c = 1);
this.mSet$9(n, n2, 1705, -150, 0, 1, monsterObject.zokusei, monsterObject.ap, n3);
monsterObject.delPP$1(18);
}
else {
if ((monsterObject.meirei == 59)) {
(monsterObject.c = 2400);
(monsterObject.vx = 0);
(monsterObject.c1 = 16);
(monsterObject.meirei = 0);
(monsterObject.muki = 0);
var n12 = this.wSearch$3(n, n2, 4);
if (this.gym_f) {
(n12 = this.wSearch$3(n, n2, 6));
}
if (((n12 >= 0) && (this.co_p[n12].x > n))) {
(monsterObject.muki = 1);
}
this.mSet$9(n, n2, 1305, 0, 0, 1, monsterObject.zokusei, monsterObject.ap, n3);
monsterObject.delPP$1(10);
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
(monsterObject.meirei = 0);
}
taiatariHantei$0() {
var n = 0;
var n2 = 0;
var monsterObject = null;
var n3 = 0;
var bl = false;
var monsterObject2 = null;
var bl2 = false;
var bl3 = false;
if (((this.gym_f && !this.race_f) && ((this.km.mode == 2100) || (this.km.mode == 3100)))) {
(bl3 = true);
++this.gym_tenki_c;
if ((this.gym_tenki_c > 2)) {
(this.gym_tenki_c = 0);
}
}
var n4 = 0;
while ((n4 <= 5)) {
if ((this.co_p[n4].c >= 1000)) {
(monsterObject2 = this.co_p[n4]);
var n5 = monsterObject2.x;
var n6 = monsterObject2.y;
if ((monsterObject2.doku_c > 0)) {
if (((monsterObject2.doku_c % 2) == 0)) {
monsterObject2.delHP$1(1);
if ((monsterObject2.hp <= 0)) {
(monsterObject2.hp = 0);
(monsterObject2.c = 210);
(monsterObject2.vy = -175);
}
}
--monsterObject2.doku_c;
}
if (bl3) {
(bl = false);
if ((this.gym_tenki == 1)) {
if ((((monsterObject2.zokusei != 6) && (monsterObject2.zokusei != 7)) && (monsterObject2.zokusei != 13))) {
(bl = true);
}
}
else {
if ((this.gym_tenki == 2)) {
(bl = true);
}
else {
if (((this.gym_tenki == 3) && (monsterObject2.type == 1))) {
(bl = true);
}
}
}
if ((bl && (this.gym_tenki_c == 1))) {
monsterObject2.delHP$1(1);
if ((monsterObject2.hp <= 0)) {
(monsterObject2.hp = 0);
(monsterObject2.c = 210);
(monsterObject2.vy = -175);
}
}
}
if (monsterObject2.taiatari_f) {
(n3 = 0);
while ((n3 <= this.w_kazu)) {
if ((this.co_w[n3].ss >= 1)) {
(monsterObject = this.co_w[n3]);
if (((monsterObject.c >= 1100) && (monsterObject.c != 2620))) {
if ((monsterObject.zokusei == 12)) {
if ((((Math.abs(((n5 - monsterObject.x) | 0)) < ((28 + monsterObject.ahs) | 0)) && (Math.abs(((n6 - monsterObject.y) | 0)) < ((28 + monsterObject.ahs) | 0))) && !this.gym_f)) {
this.km.openTimeMessage$5(10, 240, 56, 152, this.co_p[n4].name);
if ((this.co_p[n4].seibetu == 1)) {
this.km.addItem$2(10, "効果、なしです。");
}
else {
this.km.addItem$2(10, "効果が、ないよ。");
}
(this.km.kmo[10].item_int[0] = 32);
}
}
else {
if (((Math.abs(((n5 - monsterObject.x) | 0)) < ((28 + monsterObject.ahs) | 0)) && (Math.abs(((n6 - monsterObject.y) | 0)) < ((28 + monsterObject.ahs) | 0)))) {
(monsterObject2.taiatari_f = false);
if (((monsterObject2.taiatari_type == 2) || (monsterObject2.taiatari_type == 6))) {
(n2 = ((monsterObject2.zokusei == 10) ? 60 : 40));
(n = this.aisyou[10][monsterObject.zokusei]);
}
else {
if ((monsterObject2.taiatari_type == 10)) {
(n2 = ((monsterObject2.zokusei == 10) ? 75 : 50));
(n = this.aisyou[10][monsterObject.zokusei]);
}
else {
if ((monsterObject2.taiatari_type == 3)) {
(n2 = ((monsterObject2.zokusei == 8) ? 60 : 40));
(n = this.aisyou[8][monsterObject.zokusei]);
}
else {
if ((((monsterObject2.taiatari_type == 4) || (monsterObject2.taiatari_type == 5)) || (monsterObject2.taiatari_type == 8))) {
(n2 = ((monsterObject2.zokusei == 1) ? 60 : 40));
(n = this.aisyou[1][monsterObject.zokusei]);
}
else {
if ((monsterObject2.taiatari_type == 7)) {
(n2 = ((monsterObject2.zokusei == 9) ? 60 : 40));
(n = this.aisyou[9][monsterObject.zokusei]);
}
else {
if ((monsterObject2.taiatari_type == 9)) {
(n2 = ((monsterObject2.zokusei == 13) ? 60 : 40));
(n = this.aisyou[13][monsterObject.zokusei]);
}
else {
(n2 = ((monsterObject2.zokusei == 1) ? 45 : 30));
(n = this.aisyou[1][monsterObject.zokusei]);
}
}
}
}
}
}
(n2 = ((((n2 + monsterObject2.ap) | 0) - monsterObject.dp) | 0));
(n2 = this.aisyoukouka$4(n, n2, monsterObject2.name, monsterObject2.seibetu));
if ((n2 <= 0)) {
(n2 = 1);
}
(monsterObject.hp = ((monsterObject.hp - n2) | 0));
if ((monsterObject2.type == 1)) {
(monsterObject2.c = 2050);
(monsterObject2.vx = 0);
(monsterObject2.c1 = 12);
(monsterObject2.move_wc = 3);
if (((monsterObject2.taiatari_type == 3) || (monsterObject2.c == 2310))) {
(monsterObject2.move_wc = 30);
(monsterObject2.taiatari_type = 3);
if (!this.gym_f) {
(monsterObject2.c1 = 0);
}
}
}
else {
(monsterObject2.c = 1100);
(monsterObject2.move_wc = 30);
if ((monsterObject2.taiatari_type == 8)) {
(monsterObject2.vx = 0);
(monsterObject2.vy = 0);
(monsterObject2.muki = 1);
}
else {
(monsterObject2.vy = -175);
(monsterObject2.vx = ((monsterObject2.muki == 1) ? -30 : 30));
}
}
if ((monsterObject.hp <= 0)) {
(monsterObject.hp = 0);
(monsterObject.c = 1000);
(monsterObject.c1 = 55);
(monsterObject.c2 = monsterObject.pt);
break;
}
(monsterObject.fc = 10);
break;
}
}
}
}
++n3;
}
}
}
++n4;
}
(n4 = 0);
while ((n4 <= this.w_kazu)) {
if (((this.co_w[n4].ss >= 1) && (this.co_w[n4].c != 0))) {
(monsterObject = this.co_w[n4]);
var n7 = monsterObject.x;
var n8 = monsterObject.y;
if (((monsterObject.doku_c > 0) && (monsterObject.c >= 1100))) {
if (((monsterObject.doku_c % 2) == 0)) {
monsterObject.delHP$1(1);
if ((monsterObject.hp <= 0)) {
(monsterObject.hp = 0);
(monsterObject.c = 1000);
(monsterObject.c1 = 55);
(monsterObject.c2 = monsterObject.pt);
}
}
--monsterObject.doku_c;
}
if ((bl3 && (monsterObject.c >= 1100))) {
(bl = false);
if ((this.gym_tenki == 1)) {
if ((((monsterObject.zokusei != 6) && (monsterObject.zokusei != 7)) && (monsterObject.zokusei != 13))) {
(bl = true);
}
}
else {
if ((this.gym_tenki == 2)) {
(bl = true);
}
else {
if (((this.gym_tenki == 3) && (monsterObject.type == 1))) {
(bl = true);
}
}
}
if ((bl && (this.gym_tenki_c == 1))) {
monsterObject.delHP$1(1);
if ((monsterObject.hp <= 0)) {
(monsterObject.hp = 0);
(monsterObject.c = 1000);
(monsterObject.c1 = 55);
(monsterObject.c2 = monsterObject.pt);
}
}
}
if (monsterObject.taiatari_f) {
(n3 = 0);
while ((n3 <= 6)) {
(monsterObject2 = this.co_p[n3]);
if (((((((monsterObject2.c >= 1000) && ((n3 != 6) || (monsterObject2.c == 1000))) && (monsterObject2.c != 2620)) && (monsterObject2.zokusei != 12)) && (Math.abs(((monsterObject2.x - n7) | 0)) < 28)) && (Math.abs(((monsterObject2.y - n8) | 0)) < 28))) {
(monsterObject.taiatari_f = false);
(monsterObject.vy = -175);
if ((monsterObject.vx > 0)) {
(monsterObject.vx = -30);
(monsterObject.muki = 1);
}
else {
if ((monsterObject.vx < 0)) {
(monsterObject.vx = 30);
(monsterObject.muki = 0);
}
else {
(monsterObject.vx = 0);
(monsterObject.muki = 0);
if ((monsterObject.taiatari_type == 8)) {
(monsterObject.vy = 0);
}
}
}
if ((monsterObject.c != 1000)) {
if ((monsterObject.type == 1)) {
(monsterObject.c = 12050);
(monsterObject.vx = 0);
(monsterObject.c1 = 12);
(monsterObject.move_wc = 3);
if (((monsterObject.taiatari_type == 3) || (monsterObject.c == 2310))) {
(monsterObject.move_wc = 30);
}
}
else {
(monsterObject.c = 11030);
(monsterObject.move_wc = 30);
if ((this.maps.getBGCode$2(((n7 + 15) | 0), ((n8 - 1) | 0)) >= 20)) {
(monsterObject.c = 11050);
(monsterObject.c1 = 12);
}
}
}
if (((monsterObject.taiatari_type == 2) || (monsterObject.taiatari_type == 6))) {
(n2 = ((monsterObject.zokusei == 10) ? 60 : 40));
(n = this.aisyou[10][monsterObject2.zokusei]);
}
else {
if ((monsterObject.taiatari_type == 10)) {
(n2 = ((monsterObject.zokusei == 10) ? 75 : 50));
(n = this.aisyou[10][monsterObject2.zokusei]);
}
else {
if ((monsterObject.taiatari_type == 3)) {
(n2 = ((monsterObject.zokusei == 8) ? 60 : 40));
(n = this.aisyou[8][monsterObject2.zokusei]);
}
else {
if ((((monsterObject.taiatari_type == 4) || (monsterObject.taiatari_type == 5)) || (monsterObject.taiatari_type == 8))) {
(n2 = ((monsterObject.zokusei == 1) ? 60 : 40));
(n = this.aisyou[1][monsterObject2.zokusei]);
}
else {
if ((monsterObject.taiatari_type == 7)) {
(n2 = ((monsterObject.zokusei == 9) ? 60 : 40));
(n = this.aisyou[9][monsterObject2.zokusei]);
}
else {
if ((monsterObject.taiatari_type == 9)) {
(n2 = ((monsterObject.zokusei == 13) ? 60 : 40));
(n = this.aisyou[13][monsterObject2.zokusei]);
}
else {
(n2 = ((monsterObject.zokusei == 1) ? 45 : 30));
(n = this.aisyou[1][monsterObject2.zokusei]);
}
}
}
}
}
}
(n2 = ((((n2 + monsterObject.ap) | 0) - monsterObject2.dp) | 0));
if ((n == 1)) {
(n2 = (Math.imul(n2, 2) | 0));
}
else {
if ((n == 2)) {
(n2 = J.i(J.div(n2, 2)));
}
else {
if ((n == 3)) {
(n2 = 0);
}
}
}
if ((n2 <= 0)) {
(n2 = 1);
}
(monsterObject2.hp = ((monsterObject2.hp - n2) | 0));
if ((monsterObject2.hp <= 0)) {
(monsterObject2.hp = 0);
if ((n3 == 6)) {
var n9 = 1;
while ((n9 <= 15)) {
this.km.off$1(n9);
++n9;
}
this.km.initSerifubox$5(3, 120, 87, 160, this.co_j.name);
if ((this.co_j.seibetu == 1)) {
this.km.addItem$2(3, "あたし、もうダメ。");
}
else {
this.km.addItem$2(3, "やられた．．．。");
}
this.km.active$1(3);
(this.km.mode = 700);
(monsterObject2.c = 1250);
(monsterObject2.fc = 10);
break;
}
var n10 = monsterObject2.c;
(monsterObject2.c = 210);
(monsterObject2.vy = -175);
if (this.gym_f) {
break;
}
this.km.openTimeMessage$5(11, 344, 8, 160, monsterObject2.name);
this.km.addItem$2(11, "えーん、痛いよー。");
break;
}
(monsterObject2.fc = 10);
break;
}
++n3;
}
}
}
++n4;
}
}
aisyoukouka$4(n, n2, string, n3) {
var n4 = n2;
if ((n == 1)) {
(n4 = (Math.imul(n4, 2) | 0));
if (!this.gym_f) {
this.km.openTimeMessage$5(10, 224, 56, 152, string);
if ((n3 == 1)) {
this.km.addItem$2(10, "効果は、抜群です。");
}
else {
this.km.addItem$2(10, "効果は、抜群だよ！");
}
(this.km.kmo[10].item_int[0] = 32);
}
}
else {
if ((n == 2)) {
(n4 = J.i(J.div(n4, 2)));
if (!this.gym_f) {
this.km.openTimeMessage$5(10, 224, 56, 152, string);
if ((n3 == 1)) {
this.km.addItem$2(10, "効果は、いまひとつです。");
}
else {
this.km.addItem$2(10, "効果は、いまひとつだよ。");
}
(this.km.kmo[10].item_int[0] = 32);
}
}
else {
if ((n == 3)) {
(n4 = 0);
if (!this.gym_f) {
this.km.openTimeMessage$5(10, 224, 56, 152, string);
if ((n3 == 1)) {
this.km.addItem$2(10, "効果、なしです。");
}
else {
this.km.addItem$2(10, "効果が、ないよ。");
}
(this.km.kmo[10].item_int[0] = 32);
}
}
}
}
return n4;
}
aisyoukoukaW$2(n, n2) {
var n3 = n2;
if ((n == 1)) {
(n3 = (Math.imul(n3, 2) | 0));
}
else {
if ((n == 2)) {
(n3 = J.i(J.div(n3, 2)));
}
else {
if ((n == 3)) {
(n3 = 0);
}
}
}
return n3;
}
wHaniDmage$6(n, n2, n3, n4, string, n5) {
var n6 = 0;
while ((n6 <= this.w_kazu)) {
if ((this.co_w[n6].ss >= 2)) {
var monsterObject = this.co_w[n6];
if (((((((monsterObject.c >= 1100) && (monsterObject.c != 2620)) && (((monsterObject.x - this.maps.wx) | 0) < 528)) && (((monsterObject.x - this.maps.wx) | 0) > -48)) && (((monsterObject.y - this.maps.wy) | 0) < 336)) && (((monsterObject.y - this.maps.wy) | 0) > -48))) {
var n7 = 0;
var n8 = 0;
var n9 = 0;
var bl = false;
if ((n3 == 0)) {
if ((this.maps.getBGCode$2(((monsterObject.x + 15) | 0), ((((monsterObject.y + 32) | 0) + monsterObject.ahs) | 0)) >= 20)) {
(bl = true);
}
else {
if (!this.gym_f) {
this.km.openTimeMessage$5(10, 240, 56, 152, string);
if ((n5 == 1)) {
this.km.addItem$2(10, "効果、なしです。");
}
else {
this.km.addItem$2(10, "効果が、ないよ。");
}
(this.km.kmo[10].item_int[0] = 32);
}
}
}
else {
if ((n3 == 1)) {
if (((((((this.co_m[n].vx - 16) | 0) <= monsterObject.x) && (this.co_m[n].x >= monsterObject.x)) && (Math.abs(((this.co_m[n].y - monsterObject.y) | 0)) < ((22 + monsterObject.ahs) | 0))) && !this.m_mf[n][n6])) {
(bl = true);
(this.m_mf[n][n6] = true);
}
}
else {
if ((n3 == 2)) {
if (((((((this.co_m[n].vx - 16) | 0) <= monsterObject.x) && (this.co_m[n].x >= monsterObject.x)) && (Math.abs(((this.co_m[n].y - monsterObject.y) | 0)) < ((24 + monsterObject.ahs) | 0))) && !this.m_mf[n][n6])) {
(bl = true);
(this.m_mf[n][n6] = true);
}
}
else {
if ((n3 == 3)) {
if (!this.m_mf[n][n6]) {
if (((((this.co_m[n].c2 == 1) && (((this.co_m[n].vy - 32) | 0) < monsterObject.y)) && (this.co_m[n].y >= monsterObject.y)) && (Math.abs(((this.co_m[n].x - monsterObject.x) | 0)) < ((28 + monsterObject.ahs) | 0)))) {
(bl = true);
(this.m_mf[n][n6] = true);
}
if (((this.co_m[n].c4 >= 1) && ((n9 = J.i(Math.sqrt(((Math.imul((n8 = ((((this.co_m[n].x + 15) | 0) - ((monsterObject.x + 15) | 0)) | 0)), n8) + Math.imul((n7 = ((this.co_m[n].y - ((monsterObject.y + 15) | 0)) | 0)), n7)) | 0)))) <= ((((this.co_m[n].c3 + 12) | 0) + monsterObject.ahs) | 0)))) {
(bl = true);
(this.m_mf[n][n6] = true);
}
}
}
else {
if ((n3 == 4)) {
if ((!this.m_mf[n][n6] && ((n9 = J.i(Math.sqrt(((Math.imul((n8 = ((((this.co_m[n].x + 15) | 0) - ((monsterObject.x + 15) | 0)) | 0)), n8) + Math.imul((n7 = ((this.co_m[n].y - ((monsterObject.y + 15) | 0)) | 0)), n7)) | 0)))) <= ((((this.co_m[n].c3 + 12) | 0) + monsterObject.ahs) | 0)))) {
(bl = true);
(this.m_mf[n][n6] = true);
}
}
else {
if ((((((n3 == 5) && (((this.co_m[n].vx - 16) | 0) <= monsterObject.x)) && (this.co_m[n].x >= monsterObject.x)) && (Math.abs(((this.co_m[n].y - monsterObject.y) | 0)) < ((24 + monsterObject.ahs) | 0))) && !this.m_mf[n][n6])) {
(bl = true);
(this.m_mf[n][n6] = true);
}
}
}
}
}
}
if (bl) {
var n10 = ((n4 - monsterObject.dp) | 0);
var n11 = this.aisyou[1][monsterObject.zokusei];
if ((n3 == 0)) {
(n11 = this.aisyou[7][monsterObject.zokusei]);
}
else {
if ((n3 == 1)) {
(n11 = this.aisyou[4][monsterObject.zokusei]);
}
else {
if ((n3 == 2)) {
(n11 = this.aisyou[1][monsterObject.zokusei]);
}
else {
if ((n3 == 3)) {
(n11 = this.aisyou[5][monsterObject.zokusei]);
}
else {
if ((n3 == 4)) {
(n11 = this.aisyou[2][monsterObject.zokusei]);
}
else {
if ((n3 == 5)) {
(n11 = this.aisyou[11][monsterObject.zokusei]);
}
}
}
}
}
}
if ((n11 == 3)) {
if (!this.gym_f) {
this.km.openTimeMessage$5(10, 240, 56, 152, string);
if ((n5 == 1)) {
this.km.addItem$2(10, "効果、なしです。");
}
else {
this.km.addItem$2(10, "効果が、ないよ。");
}
(this.km.kmo[10].item_int[0] = 32);
}
}
else {
if (((n10 = this.aisyoukouka$4(n11, n10, string, n5)) <= 0)) {
(n10 = 1);
}
(monsterObject.hp = ((monsterObject.hp - n10) | 0));
if ((monsterObject.hp <= 0)) {
(monsterObject.hp = 0);
(monsterObject.c = 1000);
(monsterObject.c1 = 55);
(monsterObject.c2 = monsterObject.pt);
}
else {
(monsterObject.fc = 10);
}
}
}
}
}
++n6;
}
}
pHaniDmage$4(n, n2, n3, n4) {
var n5 = 0;
while ((n5 <= 6)) {
var monsterObject = this.co_p[n5];
if ((((((((monsterObject.c >= 1000) && (monsterObject.c != 2620)) && ((n5 != 6) || (monsterObject.c == 1000))) && (((monsterObject.x - this.maps.wx) | 0) < 528)) && (((monsterObject.x - this.maps.wx) | 0) > -48)) && (((monsterObject.y - this.maps.wy) | 0) < 336)) && (((monsterObject.y - this.maps.wy) | 0) > -48))) {
var n6 = 0;
var n7 = 0;
var n8 = 0;
var bl = false;
if ((n3 == 0)) {
if ((this.maps.getBGCode$2(((monsterObject.x + 15) | 0), ((monsterObject.y + 32) | 0)) >= 20)) {
(bl = true);
}
}
else {
if ((n3 == 1)) {
if (((((((this.co_m[n].vx - 16) | 0) >= monsterObject.x) && (this.co_m[n].x <= ((monsterObject.x + 32) | 0))) && (Math.abs(((this.co_m[n].y - monsterObject.y) | 0)) < 22)) && !this.m_mf[n][n5])) {
(bl = true);
(this.m_mf[n][n5] = true);
}
}
else {
if ((n3 == 2)) {
if (((((((this.co_m[n].vx - 16) | 0) >= monsterObject.x) && (this.co_m[n].x <= ((monsterObject.x + 32) | 0))) && (Math.abs(((this.co_m[n].y - monsterObject.y) | 0)) < 24)) && !this.m_mf[n][n5])) {
(bl = true);
(this.m_mf[n][n5] = true);
}
}
else {
if ((n3 == 3)) {
if (!this.m_mf[n][n5]) {
if (((((this.co_m[n].c2 == 1) && (((this.co_m[n].vy - 32) | 0) < monsterObject.y)) && (this.co_m[n].y >= monsterObject.y)) && (Math.abs(((this.co_m[n].x - monsterObject.x) | 0)) < 28))) {
(bl = true);
(this.m_mf[n][n5] = true);
}
if (((this.co_m[n].c4 >= 1) && ((n8 = J.i(Math.sqrt(((Math.imul((n7 = ((((this.co_m[n].x + 15) | 0) - ((monsterObject.x + 15) | 0)) | 0)), n7) + Math.imul((n6 = ((this.co_m[n].y - ((monsterObject.y + 15) | 0)) | 0)), n6)) | 0)))) <= ((this.co_m[n].c3 + 12) | 0)))) {
(bl = true);
(this.m_mf[n][n5] = true);
}
}
}
else {
if ((n3 == 4)) {
if ((!this.m_mf[n][n5] && ((n8 = J.i(Math.sqrt(((Math.imul((n7 = ((((this.co_m[n].x + 15) | 0) - ((monsterObject.x + 15) | 0)) | 0)), n7) + Math.imul((n6 = ((this.co_m[n].y - ((monsterObject.y + 15) | 0)) | 0)), n6)) | 0)))) <= ((this.co_m[n].c3 + 12) | 0)))) {
(bl = true);
(this.m_mf[n][n5] = true);
}
}
else {
if ((((((n3 == 5) && (((this.co_m[n].vx - 16) | 0) >= monsterObject.x)) && (this.co_m[n].x <= ((monsterObject.x + 32) | 0))) && (Math.abs(((this.co_m[n].y - monsterObject.y) | 0)) < 24)) && !this.m_mf[n][n5])) {
(bl = true);
(this.m_mf[n][n5] = true);
}
}
}
}
}
}
if (bl) {
var n9 = ((n4 - monsterObject.dp) | 0);
var n10 = this.aisyou[1][monsterObject.zokusei];
if ((n3 == 0)) {
(n10 = this.aisyou[7][monsterObject.zokusei]);
}
else {
if ((n3 == 1)) {
(n10 = this.aisyou[4][monsterObject.zokusei]);
}
else {
if ((n3 == 2)) {
(n10 = this.aisyou[1][monsterObject.zokusei]);
}
else {
if ((n3 == 3)) {
(n10 = this.aisyou[5][monsterObject.zokusei]);
}
else {
if ((n3 == 4)) {
(n10 = this.aisyou[2][monsterObject.zokusei]);
}
else {
if ((n3 == 5)) {
(n10 = this.aisyou[11][monsterObject.zokusei]);
}
}
}
}
}
}
if ((n10 != 3)) {
if (((n9 = this.aisyoukoukaW$2(n10, n9)) <= 0)) {
(n9 = 1);
}
(monsterObject.hp = ((monsterObject.hp - n9) | 0));
if ((monsterObject.hp <= 0)) {
(monsterObject.hp = 0);
if ((n5 == 6)) {
var n11 = 1;
while ((n11 <= 15)) {
this.km.off$1(n11);
++n11;
}
this.km.initSerifubox$5(3, 120, 87, 160, this.co_j.name);
if ((this.co_j.seibetu == 1)) {
this.km.addItem$2(3, "あたし、もうダメ。");
}
else {
this.km.addItem$2(3, "やられた．．．。");
}
this.km.active$1(3);
(this.km.mode = 700);
(monsterObject.c = 1250);
(monsterObject.fc = 10);
}
else {
(monsterObject.c = 210);
(monsterObject.vy = -175);
if (!this.gym_f) {
this.km.openTimeMessage$5(11, 344, 8, 160, monsterObject.name);
this.km.addItem$2(11, "えーん、痛いよー。");
}
}
}
else {
(monsterObject.fc = 10);
if ((monsterObject.pth < 2)) {
(monsterObject.pth = ((monsterObject.pth + 2) | 0));
}
}
}
}
}
++n5;
}
}
mSet$9(n, n2, n3, n4, n5, n6, n7, n8, n9) {
var n10 = 0;
while ((n10 <= 47)) {
if ((this.co_m[n10].c <= 0)) {
var characterObject = this.co_m[n10];
(characterObject.c = n3);
(characterObject.x = n);
(characterObject.y = n2);
(characterObject.c1 = 0);
(characterObject.vx = n4);
(characterObject.vy = n5);
(characterObject.team = n6);
(characterObject.zokusei = 1);
(characterObject.ap = 20);
(characterObject.mid = n9);
++this.m_kazu;
switch (n3) {
case 100:
{
(characterObject.zokusei = 2);
(characterObject.ap = 20);
break;
}
case 110:
{
(characterObject.zokusei = 3);
(characterObject.ap = 20);
break;
}
case 120:
{
(characterObject.zokusei = 4);
(characterObject.ap = 20);
break;
}
case 140:
{
(characterObject.zokusei = 3);
(characterObject.ap = 20);
break;
}
case 160:
{
(characterObject.zokusei = 5);
(characterObject.ap = 20);
break;
}
case 170:
{
(characterObject.zokusei = 8);
(characterObject.ap = 20);
break;
}
case 180:
{
(characterObject.zokusei = 9);
(characterObject.ap = 20);
var n11 = J.i((Math.atan2(-characterObject.vy, characterObject.vx) * 57.32));
if ((n11 < 0)) {
(n11 = ((n11 + 360) | 0));
}
if ((n11 >= 360)) {
(n11 = ((n11 - 360) | 0));
}
if ((n11 <= 22)) {
(characterObject.pt = 250);
(characterObject.pth = 0);
break;
}
if ((n11 <= 67)) {
(characterObject.pt = 251);
(characterObject.pth = 0);
break;
}
if ((n11 <= 113)) {
(characterObject.pt = 252);
(characterObject.pth = 0);
break;
}
if ((n11 <= 158)) {
(characterObject.pt = 251);
(characterObject.pth = 1);
break;
}
if ((n11 <= 202)) {
(characterObject.pt = 250);
(characterObject.pth = 1);
break;
}
if ((n11 <= 247)) {
(characterObject.pt = 253);
(characterObject.pth = 0);
break;
}
if ((n11 <= 293)) {
(characterObject.pt = 254);
(characterObject.pth = 0);
break;
}
if ((n11 <= 338)) {
(characterObject.pt = 253);
(characterObject.pth = 1);
break;
}
(characterObject.pt = 250);
(characterObject.pth = 0);
break;
}
case 190:
{
(characterObject.zokusei = 6);
(characterObject.ap = 20);
break;
}
case 200:
{
(characterObject.zokusei = 6);
(characterObject.ap = 20);
break;
}
case 210:
{
(characterObject.zokusei = 11);
(characterObject.ap = 50);
break;
}
case 220:
{
(characterObject.zokusei = 4);
(characterObject.ap = 20);
(characterObject.vx = n);
(characterObject.vy = n2);
(characterObject.c2 = n4);
(characterObject.c3 = 42);
(characterObject.ac = 0);
break;
}
case 230:
{
(characterObject.zokusei = 8);
(characterObject.ap = 20);
(characterObject.vx = n);
(characterObject.vy = n2);
(characterObject.c2 = n4);
(characterObject.c3 = 42);
(characterObject.ac = 0);
break;
}
case 240:
{
(characterObject.zokusei = 11);
(characterObject.ap = 30);
break;
}
case 250:
{
(characterObject.zokusei = 4);
(characterObject.ap = 20);
break;
}
case 260:
{
(characterObject.zokusei = 4);
(characterObject.ap = 50);
break;
}
case 270:
{
(characterObject.zokusei = 1);
(characterObject.ap = 20);
break;
}
case 280:
{
(characterObject.zokusei = 1);
(characterObject.ap = 40);
var n12 = J.i((Math.atan2(-characterObject.vy, characterObject.vx) * 57.32));
if ((n12 < 0)) {
(n12 = ((n12 + 360) | 0));
}
if ((n12 >= 360)) {
(n12 = ((n12 - 360) | 0));
}
if ((n12 <= 22)) {
(characterObject.pt = 250);
(characterObject.pth = 0);
break;
}
if ((n12 <= 67)) {
(characterObject.pt = 251);
(characterObject.pth = 0);
break;
}
if ((n12 <= 113)) {
(characterObject.pt = 252);
(characterObject.pth = 0);
break;
}
if ((n12 <= 158)) {
(characterObject.pt = 251);
(characterObject.pth = 1);
break;
}
if ((n12 <= 202)) {
(characterObject.pt = 250);
(characterObject.pth = 1);
break;
}
if ((n12 <= 247)) {
(characterObject.pt = 253);
(characterObject.pth = 0);
break;
}
if ((n12 <= 293)) {
(characterObject.pt = 254);
(characterObject.pth = 0);
break;
}
if ((n12 <= 338)) {
(characterObject.pt = 253);
(characterObject.pth = 1);
break;
}
(characterObject.pt = 250);
(characterObject.pth = 0);
break;
}
case 285:
{
(characterObject.c = 280);
(characterObject.zokusei = 1);
(characterObject.ap = 60);
var n13 = J.i((Math.atan2(-characterObject.vy, characterObject.vx) * 57.32));
if ((n13 < 0)) {
(n13 = ((n13 + 360) | 0));
}
if ((n13 >= 360)) {
(n13 = ((n13 - 360) | 0));
}
if ((n13 <= 22)) {
(characterObject.pt = 250);
(characterObject.pth = 0);
break;
}
if ((n13 <= 67)) {
(characterObject.pt = 251);
(characterObject.pth = 0);
break;
}
if ((n13 <= 113)) {
(characterObject.pt = 252);
(characterObject.pth = 0);
break;
}
if ((n13 <= 158)) {
(characterObject.pt = 251);
(characterObject.pth = 1);
break;
}
if ((n13 <= 202)) {
(characterObject.pt = 250);
(characterObject.pth = 1);
break;
}
if ((n13 <= 247)) {
(characterObject.pt = 253);
(characterObject.pth = 0);
break;
}
if ((n13 <= 293)) {
(characterObject.pt = 254);
(characterObject.pth = 0);
break;
}
if ((n13 <= 338)) {
(characterObject.pt = 253);
(characterObject.pth = 1);
break;
}
(characterObject.pt = 250);
(characterObject.pth = 0);
break;
}
case 290:
{
(characterObject.zokusei = 12);
(characterObject.ap = 20);
break;
}
case 300:
{
(characterObject.zokusei = 1);
(characterObject.ap = 80);
break;
}
case 310:
{
(characterObject.zokusei = 2);
(characterObject.ap = 20);
(characterObject.vx = n);
(characterObject.vy = n2);
(characterObject.c2 = n4);
(characterObject.c3 = 42);
(characterObject.ac = 0);
break;
}
case 320:
{
(characterObject.zokusei = 11);
(characterObject.ap = 20);
break;
}
case 330:
{
(characterObject.zokusei = 3);
(characterObject.ap = 50);
(characterObject.vy = 150);
break;
}
case 340:
{
(characterObject.zokusei = 2);
(characterObject.ap = 20);
break;
}
case 360:
{
(characterObject.zokusei = 12);
(characterObject.ap = 8);
break;
}
case 1000:
{
(characterObject.zokusei = 4);
(characterObject.ap = 50);
(characterObject.x = ((n + 16) | 0));
(characterObject.y = n2);
(characterObject.vx = ((n + 16) | 0));
(characterObject.c2 = 0);
(characterObject.c3 = 144);
var n14 = 0;
while ((n14 <= 99)) {
(this.m_mf[n10][n14] = false);
++n14;
}
break;
}
case 1005:
{
(characterObject.zokusei = 4);
(characterObject.ap = 50);
(characterObject.x = ((n + 16) | 0));
(characterObject.y = n2);
(characterObject.vx = ((n + 16) | 0));
(characterObject.c2 = 0);
(characterObject.c3 = 144);
var n15 = 0;
while ((n15 <= 99)) {
(this.m_mf[n10][n15] = false);
++n15;
}
break;
}
case 1100:
{
(characterObject.zokusei = 1);
(characterObject.ap = 80);
(characterObject.x = ((n + 16) | 0));
(characterObject.y = n2);
(characterObject.vx = ((n + 16) | 0));
(characterObject.c2 = 0);
(characterObject.c3 = 96);
(characterObject.c5 = 0);
var n16 = 0;
while ((n16 <= 99)) {
(this.m_mf[n10][n16] = false);
++n16;
}
break;
}
case 1105:
{
(characterObject.zokusei = 1);
(characterObject.ap = 80);
(characterObject.x = ((n + 16) | 0));
(characterObject.y = n2);
(characterObject.vx = ((n + 16) | 0));
(characterObject.c2 = 0);
(characterObject.c3 = 96);
(characterObject.c5 = 180);
var n17 = 0;
while ((n17 <= 99)) {
(this.m_mf[n10][n17] = false);
++n17;
}
break;
}
case 1200:
{
(characterObject.zokusei = 5);
(characterObject.ap = 50);
(characterObject.x = n);
(characterObject.y = this.maps.wy);
(characterObject.vy = this.maps.wy);
(characterObject.c1 = 0);
(characterObject.c2 = 1);
(characterObject.c3 = 0);
(characterObject.c4 = 0);
var n18 = 0;
while ((n18 <= 99)) {
(this.m_mf[n10][n18] = false);
++n18;
}
break;
}
case 1300:
{
(characterObject.zokusei = 11);
(characterObject.ap = 30);
(characterObject.c3 = 6);
break;
}
case 1305:
{
(characterObject.c = 1300);
(characterObject.zokusei = 5);
(characterObject.ap = 40);
(characterObject.c3 = 6);
break;
}
case 1400:
{
(characterObject.zokusei = 11);
(characterObject.ap = 60);
(characterObject.c3 = 90);
break;
}
case 1405:
{
(characterObject.c = 1400);
(characterObject.zokusei = 11);
(characterObject.ap = 80);
(characterObject.c3 = 90);
break;
}
case 1500:
{
(characterObject.zokusei = 2);
(characterObject.ap = 50);
var n19 = 0;
while ((n19 <= 99)) {
(this.m_mf[n10][n19] = false);
++n19;
}
break;
}
case 1510:
{
(characterObject.c = 1500);
(characterObject.c1 = -14);
(characterObject.zokusei = 2);
(characterObject.ap = 50);
var n20 = 0;
while ((n20 <= 99)) {
(this.m_mf[n10][n20] = false);
++n20;
}
break;
}
case 1600:
{
(characterObject.zokusei = 1);
(characterObject.ap = 0);
break;
}
case 1700:
{
(characterObject.zokusei = 7);
(characterObject.ap = 40);
var n21 = 0;
while ((n21 <= 99)) {
(this.m_mf[n10][n21] = false);
++n21;
}
break;
}
case 1705:
{
(characterObject.c = 1700);
(characterObject.zokusei = 7);
(characterObject.ap = 50);
var n22 = 0;
while ((n22 <= 99)) {
(this.m_mf[n10][n22] = false);
++n22;
}
break;
}
case 1800:
{
(characterObject.zokusei = 11);
(characterObject.ap = 50);
(characterObject.x = ((n + 16) | 0));
(characterObject.y = n2);
(characterObject.vx = ((n + 16) | 0));
(characterObject.c2 = 0);
(characterObject.c3 = 76);
(characterObject.c5 = 0);
var n23 = 0;
while ((n23 <= 99)) {
(this.m_mf[n10][n23] = false);
++n23;
}
break;
}
case 1805:
{
(characterObject.zokusei = 11);
(characterObject.ap = 50);
(characterObject.x = ((n + 16) | 0));
(characterObject.y = n2);
(characterObject.vx = ((n + 16) | 0));
(characterObject.c2 = 0);
(characterObject.c3 = 76);
(characterObject.c5 = 180);
var n24 = 0;
while ((n24 <= 99)) {
(this.m_mf[n10][n24] = false);
++n24;
}
break;
}
case 1900:
{
(characterObject.zokusei = 3);
(characterObject.ap = 30);
(characterObject.c3 = 8);
}
}
if (((characterObject.zokusei == n7) && (characterObject.c != 280))) {
(characterObject.ap = J.div(Math.imul(characterObject.ap, 3), 2));
}
if ((this.gym_f && !this.race_f)) {
if ((this.gym_tenki == 4)) {
if ((characterObject.zokusei == 2)) {
(characterObject.ap = J.div(Math.imul(characterObject.ap, 3), 2));
}
}
else {
if (((this.gym_tenki == 5) && (characterObject.zokusei == 3))) {
(characterObject.ap = J.div(Math.imul(characterObject.ap, 3), 2));
}
}
}
if (((((((characterObject.c == 210) || (characterObject.c == 260)) || (characterObject.c == 330)) || (characterObject.c == 1400)) || (characterObject.c == 280)) || (characterObject.c == 360))) {
break;
}
(characterObject.ap = ((characterObject.ap + n8) | 0));
break;
}
++n10;
}
}
mSetNeraiuchi$10(n, n2, n3, n4, n5, n6, n7, n8, n9, n10) {
var n11 = 0;
var n12 = 0;
var n13 = 0;
var n14 = 0;
if ((n6 == 0)) {
(n14 = ((this.co_w[n10].x - n) | 0));
(n13 = ((this.co_w[n10].y - n2) | 0));
}
else {
(n14 = ((this.co_p[n10].x - n) | 0));
(n13 = ((this.co_p[n10].y - n2) | 0));
}
var n15 = J.i(Math.sqrt(((Math.imul(n14, n14) + Math.imul(n13, n13)) | 0)));
if ((n15 < 16)) {
if ((n6 == 0)) {
(n12 = 150);
(n11 = 0);
}
else {
(n12 = -150);
(n11 = 0);
}
}
else {
(n12 = J.div(Math.imul(150, n14), n15));
(n11 = J.div(Math.imul(150, n13), n15));
}
this.mSet$9(n, n2, n3, n12, n11, n6, n7, n8, n9);
}
mSetKakudouchi$10(n, n2, n3, n4, n5, n6, n7, n8, n9, n10) {
this.mSet$9(n, n2, n3, J.i((Math.cos(((n10 * Math.PI) / 180.0)) * 150.0)), J.i((-Math.sin(((n10 * Math.PI) / 180.0)) * 150.0)), n6, n7, n8, n9);
}
wDmage$2(monsterObject, n) {
(monsterObject.hp = ((monsterObject.hp - n) | 0));
if ((monsterObject.hp <= 0)) {
(monsterObject.hp = 0);
(monsterObject.c = 1000);
(monsterObject.c1 = 55);
(monsterObject.c2 = monsterObject.pt);
(monsterObject.fc = 0);
}
else {
(monsterObject.fc = 10);
}
}
dtMove$0() {
if ((this.co_dt.c <= 0)) {
return;
}
switch (this.co_dt.c) {
case 100:
{
(this.co_dt.y = ((this.co_dt.y + 8) | 0));
if ((this.co_dt.y < ((this.maps.wy + 30) | 0))) {
break;
}
(this.co_dt.y = ((this.maps.wy + 30) | 0));
(this.co_dt.c = 110);
break;
}
case 110:
{
if (((this.co_dt.x <= ((this.maps.wx - 64) | 0)) || (this.co_dt.x >= ((this.maps.wx + 512) | 0)))) {
(this.co_dt.c = 0);
}
if (((this.co_dt.y > ((this.maps.wy - 64) | 0)) && (this.co_dt.y < ((this.maps.wy + 320) | 0)))) {
break;
}
(this.co_dt.c = 0);
break;
}
case 120:
{
(this.co_dt.y = ((this.co_dt.y - 12) | 0));
if ((this.co_dt.y > ((this.maps.wy - 64) | 0))) {
break;
}
(this.co_dt.c = 0);
}
}
}
itemInit$0() {
var n = 0;
while ((n <= 9)) {
(this.item[n] = 0);
++n;
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
++this.item_kazu;
}
++n;
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
++n;
}
}
while (bl);
}
itemGetKazu$0() {
(this.item_kazu = 0);
var n = 0;
while ((n <= 9)) {
if ((this.item[n] > 0)) {
++this.item_kazu;
}
++n;
}
return this.item_kazu;
}
mMove$0() {
const s=[], l=new Array(25).fill(0); l[0]=this; let pc=0, a,b,o,v;
for (;;) { switch(pc) {
case 0: {
s.push(0);
pc=1; continue;
}
case 1: {
l[18]=s.pop();
pc=3; continue;
}
case 3: {
s.push(0);
pc=4; continue;
}
case 4: {
l[1]=s.pop();
pc=5; continue;
}
case 5: {
pc=13186; continue;
}
case 8: {
s.push(l[0]);
pc=9; continue;
}
case 9: {
o=s.pop(); s.push(o.co_m);
pc=12; continue;
}
case 12: {
s.push(l[1]);
pc=13; continue;
}
case 13: {
a=s.pop(); o=s.pop(); s.push(o[a]);
pc=14; continue;
}
case 14: {
o=s.pop(); s.push(o.c);
pc=17; continue;
}
case 17: {
a=s.pop();
pc=(a!=0)?23:20; continue;
}
case 20: {
pc=13183; continue;
}
case 23: {
s.push(l[0]);
pc=24; continue;
}
case 24: {
o=s.pop(); s.push(o.co_m);
pc=27; continue;
}
case 27: {
s.push(l[1]);
pc=28; continue;
}
case 28: {
a=s.pop(); o=s.pop(); s.push(o[a]);
pc=29; continue;
}
case 29: {
l[15]=s.pop();
pc=31; continue;
}
case 31: {
s.push(l[15]);
pc=33; continue;
}
case 33: {
o=s.pop(); s.push(o.c);
pc=36; continue;
}
case 36: {
switch(s.pop()) {
case 100:pc=360;break;
case 110:pc=577;break;
case 120:pc=793;break;
case 140:pc=1091;break;
case 160:pc=1386;break;
case 170:pc=1603;break;
case 180:pc=1832;break;
case 190:pc=2030;break;
case 200:pc=2207;break;
case 210:pc=2480;break;
case 220:pc=2660;break;
case 230:pc=3169;break;
case 240:pc=3678;break;
case 250:pc=3856;break;
case 260:pc=4074;break;
case 270:pc=4292;break;
case 280:pc=4575;break;
case 290:pc=4773;break;
case 300:pc=4985;break;
case 310:pc=5175;break;
case 320:pc=5468;break;
case 330:pc=5680;break;
case 340:pc=5831;break;
case 350:pc=6121;break;
case 360:pc=6299;break;
case 1000:pc=6511;break;
case 1005:pc=6866;break;
case 1100:pc=7188;break;
case 1105:pc=7563;break;
case 1200:pc=7901;break;
case 1300:pc=8373;break;
case 1400:pc=8919;break;
case 1500:pc=9115;break;
case 1510:pc=9619;break;
case 1600:pc=9895;break;
case 1700:pc=10027;break;
case 1800:pc=10148;break;
case 1805:pc=10480;break;
case 1900:pc=10774;break;
default:pc=11361;
} continue;
}
case 360: {
s.push(l[15]);
pc=362; continue;
}
case 362: {
s.push(s[s.length-1]);
pc=363; continue;
}
case 363: {
o=s.pop(); s.push(o.x);
pc=366; continue;
}
case 366: {
s.push(l[15]);
pc=368; continue;
}
case 368: {
o=s.pop(); s.push(o.vx);
pc=371; continue;
}
case 371: {
s.push(10);
pc=373; continue;
}
case 373: {
b=s.pop(); a=s.pop(); s.push(J.div(a,b));
pc=374; continue;
}
case 374: {
b=s.pop(); a=s.pop(); s.push((a + b) | 0);
pc=375; continue;
}
case 375: {
v=s.pop(); o=s.pop(); o.x=v;
pc=378; continue;
}
case 378: {
s.push(l[15]);
pc=380; continue;
}
case 380: {
s.push(s[s.length-1]);
pc=381; continue;
}
case 381: {
o=s.pop(); s.push(o.y);
pc=384; continue;
}
case 384: {
s.push(l[15]);
pc=386; continue;
}
case 386: {
o=s.pop(); s.push(o.vy);
pc=389; continue;
}
case 389: {
s.push(10);
pc=391; continue;
}
case 391: {
b=s.pop(); a=s.pop(); s.push(J.div(a,b));
pc=392; continue;
}
case 392: {
b=s.pop(); a=s.pop(); s.push((a + b) | 0);
pc=393; continue;
}
case 393: {
v=s.pop(); o=s.pop(); o.y=v;
pc=396; continue;
}
case 396: {
s.push(l[0]);
pc=397; continue;
}
case 397: {
o=s.pop(); s.push(o.maps);
pc=400; continue;
}
case 400: {
s.push(l[15]);
pc=402; continue;
}
case 402: {
o=s.pop(); s.push(o.x);
pc=405; continue;
}
case 405: {
s.push(15);
pc=407; continue;
}
case 407: {
b=s.pop(); a=s.pop(); s.push((a + b) | 0);
pc=408; continue;
}
case 408: {
s.push(l[15]);
pc=410; continue;
}
case 410: {
o=s.pop(); s.push(o.y);
pc=413; continue;
}
case 413: {
s.push(15);
pc=415; continue;
}
case 415: {
b=s.pop(); a=s.pop(); s.push((a + b) | 0);
pc=416; continue;
}
case 416: {
v=s.splice(s.length-2,2);
o=s.pop();
s.push(o.getBGCode$2(v[0],v[1]));
pc=419; continue;
}
case 419: {
s.push(20);
pc=421; continue;
}
case 421: {
b=s.pop(); a=s.pop();
pc=(a<b)?430:424; continue;
}
case 424: {
s.push(l[15]);
pc=426; continue;
}
case 426: {
s.push(0);
pc=427; continue;
}
case 427: {
v=s.pop(); o=s.pop(); o.c=v;
pc=430; continue;
}
case 430: {
s.push(l[15]);
pc=432; continue;
}
case 432: {
o=s.pop(); s.push(o.x);
pc=435; continue;
}
case 435: {
s.push(l[0]);
pc=436; continue;
}
case 436: {
o=s.pop(); s.push(o.maps);
pc=439; continue;
}
case 439: {
o=s.pop(); s.push(o.wx);
pc=442; continue;
}
case 442: {
s.push(32);
pc=444; continue;
}
case 444: {
b=s.pop(); a=s.pop(); s.push((a - b) | 0);
pc=445; continue;
}
case 445: {
s.push(64);
pc=447; continue;
}
case 447: {
b=s.pop(); a=s.pop(); s.push((a - b) | 0);
pc=448; continue;
}
case 448: {
b=s.pop(); a=s.pop();
pc=(a<=b)?473:451; continue;
}
case 451: {
s.push(l[15]);
pc=453; continue;
}
case 453: {
o=s.pop(); s.push(o.x);
pc=456; continue;
}
case 456: {
s.push(l[0]);
pc=457; continue;
}
case 457: {
o=s.pop(); s.push(o.maps);
pc=460; continue;
}
case 460: {
o=s.pop(); s.push(o.wx);
pc=463; continue;
}
case 463: {
s.push(512);
pc=466; continue;
}
case 466: {
b=s.pop(); a=s.pop(); s.push((a + b) | 0);
pc=467; continue;
}
case 467: {
s.push(64);
pc=469; continue;
}
case 469: {
b=s.pop(); a=s.pop(); s.push((a + b) | 0);
pc=470; continue;
}
case 470: {
b=s.pop(); a=s.pop();
pc=(a<b)?482:473; continue;
}
case 473: {
s.push(l[15]);
pc=475; continue;
}
case 475: {
s.push(0);
pc=476; continue;
}
case 476: {
v=s.pop(); o=s.pop(); o.c=v;
pc=479; continue;
}
case 479: {
pc=528; continue;
}
case 482: {
s.push(l[15]);
pc=484; continue;
}
case 484: {
o=s.pop(); s.push(o.y);
pc=487; continue;
}
case 487: {
s.push(l[0]);
pc=488; continue;
}
case 488: {
o=s.pop(); s.push(o.maps);
pc=491; continue;
}
case 491: {
o=s.pop(); s.push(o.wy);
pc=494; continue;
}
case 494: {
s.push(32);
pc=496; continue;
}
case 496: {
b=s.pop(); a=s.pop(); s.push((a - b) | 0);
pc=497; continue;
}
case 497: {
b=s.pop(); a=s.pop();
pc=(a<=b)?522:500; continue;
}
case 500: {
s.push(l[15]);
pc=502; continue;
}
case 502: {
o=s.pop(); s.push(o.y);
pc=505; continue;
}
case 505: {
s.push(l[0]);
pc=506; continue;
}
case 506: {
o=s.pop(); s.push(o.maps);
pc=509; continue;
}
case 509: {
o=s.pop(); s.push(o.wy);
pc=512; continue;
}
case 512: {
s.push(320);
pc=515; continue;
}
case 515: {
b=s.pop(); a=s.pop(); s.push((a + b) | 0);
pc=516; continue;
}
case 516: {
s.push(32);
pc=518; continue;
}
case 518: {
b=s.pop(); a=s.pop(); s.push((a + b) | 0);
pc=519; continue;
}
case 519: {
b=s.pop(); a=s.pop();
pc=(a<b)?528:522; continue;
}
case 522: {
s.push(l[15]);
pc=524; continue;
}
case 524: {
s.push(0);
pc=525; continue;
}
case 525: {
v=s.pop(); o=s.pop(); o.c=v;
pc=528; continue;
}
case 528: {
s.push(l[15]);
pc=530; continue;
}
case 530: {
s.push(s[s.length-1]);
pc=531; continue;
}
case 531: {
o=s.pop(); s.push(o.c1);
pc=534; continue;
}
case 534: {
s.push(1);
pc=535; continue;
}
case 535: {
b=s.pop(); a=s.pop(); s.push((a + b) | 0);
pc=536; continue;
}
case 536: {
v=s.pop(); o=s.pop(); o.c1=v;
pc=539; continue;
}
case 539: {
s.push(l[15]);
pc=541; continue;
}
case 541: {
o=s.pop(); s.push(o.c1);
pc=544; continue;
}
case 544: {
s.push(18);
pc=546; continue;
}
case 546: {
b=s.pop(); a=s.pop();
pc=(a<=b)?555:549; continue;
}
case 549: {
s.push(l[15]);
pc=551; continue;
}
case 551: {
s.push(0);
pc=552; continue;
}
case 552: {
v=s.pop(); o=s.pop(); o.c=v;
pc=555; continue;
}
case 555: {
s.push(l[15]);
pc=557; continue;
}
case 557: {
s.push(220);
pc=560; continue;
}
case 560: {
s.push(l[0]);
pc=561; continue;
}
case 561: {
o=s.pop(); s.push(o.g_c1);
pc=564; continue;
}
case 564: {
b=s.pop(); a=s.pop(); s.push((a + b) | 0);
pc=565; continue;
}
case 565: {
v=s.pop(); o=s.pop(); o.pt=v;
pc=568; continue;
}
case 568: {
s.push(l[15]);
pc=570; continue;
}
case 570: {
s.push(0);
pc=571; continue;
}
case 571: {
v=s.pop(); o=s.pop(); o.pth=v;
pc=574; continue;
}
case 574: {
pc=11361; continue;
}
case 577: {
s.push(l[15]);
pc=579; continue;
}
case 579: {
s.push(s[s.length-1]);
pc=580; continue;
}
case 580: {
o=s.pop(); s.push(o.x);
pc=583; continue;
}
case 583: {
s.push(l[15]);
pc=585; continue;
}
case 585: {
o=s.pop(); s.push(o.vx);
pc=588; continue;
}
case 588: {
s.push(10);
pc=590; continue;
}
case 590: {
b=s.pop(); a=s.pop(); s.push(J.div(a,b));
pc=591; continue;
}
case 591: {
b=s.pop(); a=s.pop(); s.push((a + b) | 0);
pc=592; continue;
}
case 592: {
v=s.pop(); o=s.pop(); o.x=v;
pc=595; continue;
}
case 595: {
s.push(l[0]);
pc=596; continue;
}
case 596: {
o=s.pop(); s.push(o.maps);
pc=599; continue;
}
case 599: {
s.push(l[15]);
pc=601; continue;
}
case 601: {
o=s.pop(); s.push(o.x);
pc=604; continue;
}
case 604: {
s.push(15);
pc=606; continue;
}
case 606: {
b=s.pop(); a=s.pop(); s.push((a + b) | 0);
pc=607; continue;
}
case 607: {
s.push(l[15]);
pc=609; continue;
}
case 609: {
o=s.pop(); s.push(o.y);
pc=612; continue;
}
case 612: {
s.push(15);
pc=614; continue;
}
case 614: {
b=s.pop(); a=s.pop(); s.push((a + b) | 0);
pc=615; continue;
}
case 615: {
v=s.splice(s.length-2,2);
o=s.pop();
s.push(o.getBGCode$2(v[0],v[1]));
pc=618; continue;
}
case 618: {
s.push(20);
pc=620; continue;
}
case 620: {
b=s.pop(); a=s.pop();
pc=(a<b)?629:623; continue;
}
case 623: {
s.push(l[15]);
pc=625; continue;
}
case 625: {
s.push(0);
pc=626; continue;
}
case 626: {
v=s.pop(); o=s.pop(); o.c=v;
pc=629; continue;
}
case 629: {
s.push(l[15]);
pc=631; continue;
}
case 631: {
o=s.pop(); s.push(o.x);
pc=634; continue;
}
case 634: {
s.push(l[0]);
pc=635; continue;
}
case 635: {
o=s.pop(); s.push(o.maps);
pc=638; continue;
}
case 638: {
o=s.pop(); s.push(o.wx);
pc=641; continue;
}
case 641: {
s.push(32);
pc=643; continue;
}
case 643: {
b=s.pop(); a=s.pop(); s.push((a - b) | 0);
pc=644; continue;
}
case 644: {
s.push(64);
pc=646; continue;
}
case 646: {
b=s.pop(); a=s.pop(); s.push((a - b) | 0);
pc=647; continue;
}
case 647: {
b=s.pop(); a=s.pop();
pc=(a<=b)?672:650; continue;
}
case 650: {
s.push(l[15]);
pc=652; continue;
}
case 652: {
o=s.pop(); s.push(o.x);
pc=655; continue;
}
case 655: {
s.push(l[0]);
pc=656; continue;
}
case 656: {
o=s.pop(); s.push(o.maps);
pc=659; continue;
}
case 659: {
o=s.pop(); s.push(o.wx);
pc=662; continue;
}
case 662: {
s.push(512);
pc=665; continue;
}
case 665: {
b=s.pop(); a=s.pop(); s.push((a + b) | 0);
pc=666; continue;
}
case 666: {
s.push(64);
pc=668; continue;
}
case 668: {
b=s.pop(); a=s.pop(); s.push((a + b) | 0);
pc=669; continue;
}
case 669: {
b=s.pop(); a=s.pop();
pc=(a<b)?681:672; continue;
}
case 672: {
s.push(l[15]);
pc=674; continue;
}
case 674: {
s.push(0);
pc=675; continue;
}
case 675: {
v=s.pop(); o=s.pop(); o.c=v;
pc=678; continue;
}
case 678: {
pc=727; continue;
}
case 681: {
s.push(l[15]);
pc=683; continue;
}
case 683: {
o=s.pop(); s.push(o.y);
pc=686; continue;
}
case 686: {
s.push(l[0]);
pc=687; continue;
}
case 687: {
o=s.pop(); s.push(o.maps);
pc=690; continue;
}
case 690: {
o=s.pop(); s.push(o.wy);
pc=693; continue;
}
case 693: {
s.push(32);
pc=695; continue;
}
case 695: {
b=s.pop(); a=s.pop(); s.push((a - b) | 0);
pc=696; continue;
}
case 696: {
b=s.pop(); a=s.pop();
pc=(a<=b)?721:699; continue;
}
case 699: {
s.push(l[15]);
pc=701; continue;
}
case 701: {
o=s.pop(); s.push(o.y);
pc=704; continue;
}
case 704: {
s.push(l[0]);
pc=705; continue;
}
case 705: {
o=s.pop(); s.push(o.maps);
pc=708; continue;
}
case 708: {
o=s.pop(); s.push(o.wy);
pc=711; continue;
}
case 711: {
s.push(320);
pc=714; continue;
}
case 714: {
b=s.pop(); a=s.pop(); s.push((a + b) | 0);
pc=715; continue;
}
case 715: {
s.push(32);
pc=717; continue;
}
case 717: {
b=s.pop(); a=s.pop(); s.push((a + b) | 0);
pc=718; continue;
}
case 718: {
b=s.pop(); a=s.pop();
pc=(a<b)?727:721; continue;
}
case 721: {
s.push(l[15]);
pc=723; continue;
}
case 723: {
s.push(0);
pc=724; continue;
}
case 724: {
v=s.pop(); o=s.pop(); o.c=v;
pc=727; continue;
}
case 727: {
s.push(l[15]);
pc=729; continue;
}
case 729: {
s.push(s[s.length-1]);
pc=730; continue;
}
case 730: {
o=s.pop(); s.push(o.c1);
pc=733; continue;
}
case 733: {
s.push(1);
pc=734; continue;
}
case 734: {
b=s.pop(); a=s.pop(); s.push((a + b) | 0);
pc=735; continue;
}
case 735: {
v=s.pop(); o=s.pop(); o.c1=v;
pc=738; continue;
}
case 738: {
s.push(l[15]);
pc=740; continue;
}
case 740: {
o=s.pop(); s.push(o.c1);
pc=743; continue;
}
case 743: {
s.push(18);
pc=745; continue;
}
case 745: {
b=s.pop(); a=s.pop();
pc=(a<=b)?754:748; continue;
}
case 748: {
s.push(l[15]);
pc=750; continue;
}
case 750: {
s.push(0);
pc=751; continue;
}
case 751: {
v=s.pop(); o=s.pop(); o.c=v;
pc=754; continue;
}
case 754: {
s.push(l[15]);
pc=756; continue;
}
case 756: {
s.push(222);
pc=759; continue;
}
case 759: {
s.push(l[0]);
pc=760; continue;
}
case 760: {
o=s.pop(); s.push(o.g_c1);
pc=763; continue;
}
case 763: {
b=s.pop(); a=s.pop(); s.push((a + b) | 0);
pc=764; continue;
}
case 764: {
v=s.pop(); o=s.pop(); o.pt=v;
pc=767; continue;
}
case 767: {
s.push(l[15]);
pc=769; continue;
}
case 769: {
o=s.pop(); s.push(o.vx);
pc=772; continue;
}
case 772: {
a=s.pop();
pc=(a<0)?784:775; continue;
}
case 775: {
s.push(l[15]);
pc=777; continue;
}
case 777: {
s.push(1);
pc=778; continue;
}
case 778: {
v=s.pop(); o=s.pop(); o.pth=v;
pc=781; continue;
}
case 781: {
pc=11361; continue;
}
case 784: {
s.push(l[15]);
pc=786; continue;
}
case 786: {
s.push(0);
pc=787; continue;
}
case 787: {
v=s.pop(); o=s.pop(); o.pth=v;
pc=790; continue;
}
case 790: {
pc=11361; continue;
}
case 793: {
s.push(l[15]);
pc=795; continue;
}
case 795: {
s.push(s[s.length-1]);
pc=796; continue;
}
case 796: {
o=s.pop(); s.push(o.x);
pc=799; continue;
}
case 799: {
s.push(l[15]);
pc=801; continue;
}
case 801: {
o=s.pop(); s.push(o.vx);
pc=804; continue;
}
case 804: {
s.push(10);
pc=806; continue;
}
case 806: {
b=s.pop(); a=s.pop(); s.push(J.div(a,b));
pc=807; continue;
}
case 807: {
b=s.pop(); a=s.pop(); s.push((a + b) | 0);
pc=808; continue;
}
case 808: {
v=s.pop(); o=s.pop(); o.x=v;
pc=811; continue;
}
case 811: {
s.push(l[15]);
pc=813; continue;
}
case 813: {
s.push(s[s.length-1]);
pc=814; continue;
}
case 814: {
o=s.pop(); s.push(o.y);
pc=817; continue;
}
case 817: {
s.push(l[15]);
pc=819; continue;
}
case 819: {
o=s.pop(); s.push(o.vy);
pc=822; continue;
}
case 822: {
s.push(10);
pc=824; continue;
}
case 824: {
b=s.pop(); a=s.pop(); s.push(J.div(a,b));
pc=825; continue;
}
case 825: {
b=s.pop(); a=s.pop(); s.push((a + b) | 0);
pc=826; continue;
}
case 826: {
v=s.pop(); o=s.pop(); o.y=v;
pc=829; continue;
}
case 829: {
s.push(l[0]);
pc=830; continue;
}
case 830: {
o=s.pop(); s.push(o.maps);
pc=833; continue;
}
case 833: {
s.push(l[15]);
pc=835; continue;
}
case 835: {
o=s.pop(); s.push(o.x);
pc=838; continue;
}
case 838: {
s.push(15);
pc=840; continue;
}
case 840: {
b=s.pop(); a=s.pop(); s.push((a + b) | 0);
pc=841; continue;
}
case 841: {
s.push(l[15]);
pc=843; continue;
}
case 843: {
o=s.pop(); s.push(o.y);
pc=846; continue;
}
case 846: {
s.push(15);
pc=848; continue;
}
case 848: {
b=s.pop(); a=s.pop(); s.push((a + b) | 0);
pc=849; continue;
}
case 849: {
v=s.splice(s.length-2,2);
o=s.pop();
s.push(o.getBGCode$2(v[0],v[1]));
pc=852; continue;
}
case 852: {
s.push(20);
pc=854; continue;
}
case 854: {
b=s.pop(); a=s.pop();
pc=(a<b)?863:857; continue;
}
case 857: {
s.push(l[15]);
pc=859; continue;
}
case 859: {
s.push(0);
pc=860; continue;
}
case 860: {
v=s.pop(); o=s.pop(); o.c=v;
pc=863; continue;
}
case 863: {
s.push(l[15]);
pc=865; continue;
}
case 865: {
o=s.pop(); s.push(o.x);
pc=868; continue;
}
case 868: {
s.push(l[0]);
pc=869; continue;
}
case 869: {
o=s.pop(); s.push(o.maps);
pc=872; continue;
}
case 872: {
o=s.pop(); s.push(o.wx);
pc=875; continue;
}
case 875: {
s.push(32);
pc=877; continue;
}
case 877: {
b=s.pop(); a=s.pop(); s.push((a - b) | 0);
pc=878; continue;
}
case 878: {
s.push(64);
pc=880; continue;
}
case 880: {
b=s.pop(); a=s.pop(); s.push((a - b) | 0);
pc=881; continue;
}
case 881: {
b=s.pop(); a=s.pop();
pc=(a<=b)?906:884; continue;
}
case 884: {
s.push(l[15]);
pc=886; continue;
}
case 886: {
o=s.pop(); s.push(o.x);
pc=889; continue;
}
case 889: {
s.push(l[0]);
pc=890; continue;
}
case 890: {
o=s.pop(); s.push(o.maps);
pc=893; continue;
}
case 893: {
o=s.pop(); s.push(o.wx);
pc=896; continue;
}
case 896: {
s.push(512);
pc=899; continue;
}
case 899: {
b=s.pop(); a=s.pop(); s.push((a + b) | 0);
pc=900; continue;
}
case 900: {
s.push(64);
pc=902; continue;
}
case 902: {
b=s.pop(); a=s.pop(); s.push((a + b) | 0);
pc=903; continue;
}
case 903: {
b=s.pop(); a=s.pop();
pc=(a<b)?915:906; continue;
}
case 906: {
s.push(l[15]);
pc=908; continue;
}
case 908: {
s.push(0);
pc=909; continue;
}
case 909: {
v=s.pop(); o=s.pop(); o.c=v;
pc=912; continue;
}
case 912: {
pc=961; continue;
}
case 915: {
s.push(l[15]);
pc=917; continue;
}
case 917: {
o=s.pop(); s.push(o.y);
pc=920; continue;
}
case 920: {
s.push(l[0]);
pc=921; continue;
}
case 921: {
o=s.pop(); s.push(o.maps);
pc=924; continue;
}
case 924: {
o=s.pop(); s.push(o.wy);
pc=927; continue;
}
case 927: {
s.push(32);
pc=929; continue;
}
case 929: {
b=s.pop(); a=s.pop(); s.push((a - b) | 0);
pc=930; continue;
}
case 930: {
b=s.pop(); a=s.pop();
pc=(a<=b)?955:933; continue;
}
case 933: {
s.push(l[15]);
pc=935; continue;
}
case 935: {
o=s.pop(); s.push(o.y);
pc=938; continue;
}
case 938: {
s.push(l[0]);
pc=939; continue;
}
case 939: {
o=s.pop(); s.push(o.maps);
pc=942; continue;
}
case 942: {
o=s.pop(); s.push(o.wy);
pc=945; continue;
}
case 945: {
s.push(320);
pc=948; continue;
}
case 948: {
b=s.pop(); a=s.pop(); s.push((a + b) | 0);
pc=949; continue;
}
case 949: {
s.push(32);
pc=951; continue;
}
case 951: {
b=s.pop(); a=s.pop(); s.push((a + b) | 0);
pc=952; continue;
}
case 952: {
b=s.pop(); a=s.pop();
pc=(a<b)?961:955; continue;
}
case 955: {
s.push(l[15]);
pc=957; continue;
}
case 957: {
s.push(0);
pc=958; continue;
}
case 958: {
v=s.pop(); o=s.pop(); o.c=v;
pc=961; continue;
}
case 961: {
s.push(l[15]);
pc=963; continue;
}
case 963: {
s.push(s[s.length-1]);
pc=964; continue;
}
case 964: {
o=s.pop(); s.push(o.c1);
pc=967; continue;
}
case 967: {
s.push(1);
pc=968; continue;
}
case 968: {
b=s.pop(); a=s.pop(); s.push((a + b) | 0);
pc=969; continue;
}
case 969: {
v=s.pop(); o=s.pop(); o.c1=v;
pc=972; continue;
}
case 972: {
s.push(l[15]);
pc=974; continue;
}
case 974: {
o=s.pop(); s.push(o.c1);
pc=977; continue;
}
case 977: {
s.push(18);
pc=979; continue;
}
case 979: {
b=s.pop(); a=s.pop();
pc=(a<=b)?988:982; continue;
}
case 982: {
s.push(l[15]);
pc=984; continue;
}
case 984: {
s.push(0);
pc=985; continue;
}
case 985: {
v=s.pop(); o=s.pop(); o.c=v;
pc=988; continue;
}
case 988: {
s.push(l[0]);
pc=989; continue;
}
case 989: {
o=s.pop(); s.push(o.g_c2);
pc=992; continue;
}
case 992: {
switch(s.pop()) {
case 0:pc=1024;break;
case 1:pc=1035;break;
case 2:pc=1046;break;
case 3:pc=1057;break;
default:pc=1065;
} continue;
}
case 1024: {
s.push(l[15]);
pc=1026; continue;
}
case 1026: {
s.push(224);
pc=1029; continue;
}
case 1029: {
v=s.pop(); o=s.pop(); o.pt=v;
pc=1032; continue;
}
case 1032: {
pc=1065; continue;
}
case 1035: {
s.push(l[15]);
pc=1037; continue;
}
case 1037: {
s.push(225);
pc=1040; continue;
}
case 1040: {
v=s.pop(); o=s.pop(); o.pt=v;
pc=1043; continue;
}
case 1043: {
pc=1065; continue;
}
case 1046: {
s.push(l[15]);
pc=1048; continue;
}
case 1048: {
s.push(226);
pc=1051; continue;
}
case 1051: {
v=s.pop(); o=s.pop(); o.pt=v;
pc=1054; continue;
}
case 1054: {
pc=1065; continue;
}
case 1057: {
s.push(l[15]);
pc=1059; continue;
}
case 1059: {
s.push(227);
pc=1062; continue;
}
case 1062: {
v=s.pop(); o=s.pop(); o.pt=v;
pc=1065; continue;
}
case 1065: {
s.push(l[15]);
pc=1067; continue;
}
case 1067: {
o=s.pop(); s.push(o.vx);
pc=1070; continue;
}
case 1070: {
a=s.pop();
pc=(a<0)?1082:1073; continue;
}
case 1073: {
s.push(l[15]);
pc=1075; continue;
}
case 1075: {
s.push(1);
pc=1076; continue;
}
case 1076: {
v=s.pop(); o=s.pop(); o.pth=v;
pc=1079; continue;
}
case 1079: {
pc=11361; continue;
}
case 1082: {
s.push(l[15]);
pc=1084; continue;
}
case 1084: {
s.push(0);
pc=1085; continue;
}
case 1085: {
v=s.pop(); o=s.pop(); o.pth=v;
pc=1088; continue;
}
case 1088: {
pc=11361; continue;
}
case 1091: {
s.push(l[15]);
pc=1093; continue;
}
case 1093: {
s.push(s[s.length-1]);
pc=1094; continue;
}
case 1094: {
o=s.pop(); s.push(o.x);
pc=1097; continue;
}
case 1097: {
s.push(l[15]);
pc=1099; continue;
}
case 1099: {
o=s.pop(); s.push(o.vx);
pc=1102; continue;
}
case 1102: {
s.push(10);
pc=1104; continue;
}
case 1104: {
b=s.pop(); a=s.pop(); s.push(J.div(a,b));
pc=1105; continue;
}
case 1105: {
b=s.pop(); a=s.pop(); s.push((a + b) | 0);
pc=1106; continue;
}
case 1106: {
v=s.pop(); o=s.pop(); o.x=v;
pc=1109; continue;
}
case 1109: {
s.push(l[15]);
pc=1111; continue;
}
case 1111: {
s.push(s[s.length-1]);
pc=1112; continue;
}
case 1112: {
o=s.pop(); s.push(o.vy);
pc=1115; continue;
}
case 1115: {
s.push(25);
pc=1117; continue;
}
case 1117: {
b=s.pop(); a=s.pop(); s.push((a + b) | 0);
pc=1118; continue;
}
case 1118: {
v=s.pop(); o=s.pop(); o.vy=v;
pc=1121; continue;
}
case 1121: {
s.push(l[15]);
pc=1123; continue;
}
case 1123: {
o=s.pop(); s.push(o.vy);
pc=1126; continue;
}
case 1126: {
s.push(150);
pc=1129; continue;
}
case 1129: {
b=s.pop(); a=s.pop();
pc=(a<=b)?1140:1132; continue;
}
case 1132: {
s.push(l[15]);
pc=1134; continue;
}
case 1134: {
s.push(150);
pc=1137; continue;
}
case 1137: {
v=s.pop(); o=s.pop(); o.vy=v;
pc=1140; continue;
}
case 1140: {
s.push(l[15]);
pc=1142; continue;
}
case 1142: {
o=s.pop(); s.push(o.vy);
pc=1145; continue;
}
case 1145: {
s.push(120);
pc=1147; continue;
}
case 1147: {
b=s.pop(); a=s.pop();
pc=(a<=b)?1215:1150; continue;
}
case 1150: {
s.push(l[15]);
pc=1152; continue;
}
case 1152: {
o=s.pop(); s.push(o.vx);
pc=1155; continue;
}
case 1155: {
v=s.splice(s.length-1,1);
s.push(Math.abs(v[0]));
pc=1158; continue;
}
case 1158: {
s.push(10);
pc=1160; continue;
}
case 1160: {
b=s.pop(); a=s.pop();
pc=(a>b)?1172:1163; continue;
}
case 1163: {
s.push(l[15]);
pc=1165; continue;
}
case 1165: {
s.push(0);
pc=1166; continue;
}
case 1166: {
v=s.pop(); o=s.pop(); o.vx=v;
pc=1169; continue;
}
case 1169: {
pc=1215; continue;
}
case 1172: {
s.push(l[15]);
pc=1174; continue;
}
case 1174: {
o=s.pop(); s.push(o.vx);
pc=1177; continue;
}
case 1177: {
a=s.pop();
pc=(a<=0)?1195:1180; continue;
}
case 1180: {
s.push(l[15]);
pc=1182; continue;
}
case 1182: {
s.push(s[s.length-1]);
pc=1183; continue;
}
case 1183: {
o=s.pop(); s.push(o.vx);
pc=1186; continue;
}
case 1186: {
s.push(10);
pc=1188; continue;
}
case 1188: {
b=s.pop(); a=s.pop(); s.push((a - b) | 0);
pc=1189; continue;
}
case 1189: {
v=s.pop(); o=s.pop(); o.vx=v;
pc=1192; continue;
}
case 1192: {
pc=1215; continue;
}
case 1195: {
s.push(l[15]);
pc=1197; continue;
}
case 1197: {
o=s.pop(); s.push(o.vx);
pc=1200; continue;
}
case 1200: {
a=s.pop();
pc=(a>=0)?1215:1203; continue;
}
case 1203: {
s.push(l[15]);
pc=1205; continue;
}
case 1205: {
s.push(s[s.length-1]);
pc=1206; continue;
}
case 1206: {
o=s.pop(); s.push(o.vx);
pc=1209; continue;
}
case 1209: {
s.push(10);
pc=1211; continue;
}
case 1211: {
b=s.pop(); a=s.pop(); s.push((a + b) | 0);
pc=1212; continue;
}
case 1212: {
v=s.pop(); o=s.pop(); o.vx=v;
pc=1215; continue;
}
case 1215: {
s.push(l[15]);
pc=1217; continue;
}
case 1217: {
s.push(s[s.length-1]);
pc=1218; continue;
}
case 1218: {
o=s.pop(); s.push(o.y);
pc=1221; continue;
}
case 1221: {
s.push(l[15]);
pc=1223; continue;
}
case 1223: {
o=s.pop(); s.push(o.vy);
pc=1226; continue;
}
case 1226: {
s.push(10);
pc=1228; continue;
}
case 1228: {
b=s.pop(); a=s.pop(); s.push(J.div(a,b));
pc=1229; continue;
}
case 1229: {
b=s.pop(); a=s.pop(); s.push((a + b) | 0);
pc=1230; continue;
}
case 1230: {
v=s.pop(); o=s.pop(); o.y=v;
pc=1233; continue;
}
case 1233: {
s.push(l[0]);
pc=1234; continue;
}
case 1234: {
o=s.pop(); s.push(o.maps);
pc=1237; continue;
}
case 1237: {
s.push(l[15]);
pc=1239; continue;
}
case 1239: {
o=s.pop(); s.push(o.x);
pc=1242; continue;
}
case 1242: {
s.push(15);
pc=1244; continue;
}
case 1244: {
b=s.pop(); a=s.pop(); s.push((a + b) | 0);
pc=1245; continue;
}
case 1245: {
s.push(l[15]);
pc=1247; continue;
}
case 1247: {
o=s.pop(); s.push(o.y);
pc=1250; continue;
}
case 1250: {
s.push(15);
pc=1252; continue;
}
case 1252: {
b=s.pop(); a=s.pop(); s.push((a + b) | 0);
pc=1253; continue;
}
case 1253: {
v=s.splice(s.length-2,2);
o=s.pop();
s.push(o.getBGCode$2(v[0],v[1]));
pc=1256; continue;
}
case 1256: {
s.push(20);
pc=1258; continue;
}
case 1258: {
b=s.pop(); a=s.pop();
pc=(a<b)?1267:1261; continue;
}
case 1261: {
s.push(l[15]);
pc=1263; continue;
}
case 1263: {
s.push(0);
pc=1264; continue;
}
case 1264: {
v=s.pop(); o=s.pop(); o.c=v;
pc=1267; continue;
}
case 1267: {
s.push(l[15]);
pc=1269; continue;
}
case 1269: {
o=s.pop(); s.push(o.x);
pc=1272; continue;
}
case 1272: {
s.push(l[0]);
pc=1273; continue;
}
case 1273: {
o=s.pop(); s.push(o.maps);
pc=1276; continue;
}
case 1276: {
o=s.pop(); s.push(o.wx);
pc=1279; continue;
}
case 1279: {
s.push(32);
pc=1281; continue;
}
case 1281: {
b=s.pop(); a=s.pop(); s.push((a - b) | 0);
pc=1282; continue;
}
case 1282: {
s.push(64);
pc=1284; continue;
}
case 1284: {
b=s.pop(); a=s.pop(); s.push((a - b) | 0);
pc=1285; continue;
}
case 1285: {
b=s.pop(); a=s.pop();
pc=(a<=b)?1310:1288; continue;
}
case 1288: {
s.push(l[15]);
pc=1290; continue;
}
case 1290: {
o=s.pop(); s.push(o.x);
pc=1293; continue;
}
case 1293: {
s.push(l[0]);
pc=1294; continue;
}
case 1294: {
o=s.pop(); s.push(o.maps);
pc=1297; continue;
}
case 1297: {
o=s.pop(); s.push(o.wx);
pc=1300; continue;
}
case 1300: {
s.push(512);
pc=1303; continue;
}
case 1303: {
b=s.pop(); a=s.pop(); s.push((a + b) | 0);
pc=1304; continue;
}
case 1304: {
s.push(64);
pc=1306; continue;
}
case 1306: {
b=s.pop(); a=s.pop(); s.push((a + b) | 0);
pc=1307; continue;
}
case 1307: {
b=s.pop(); a=s.pop();
pc=(a<b)?1319:1310; continue;
}
case 1310: {
s.push(l[15]);
pc=1312; continue;
}
case 1312: {
s.push(0);
pc=1313; continue;
}
case 1313: {
v=s.pop(); o=s.pop(); o.c=v;
pc=1316; continue;
}
case 1316: {
pc=1347; continue;
}
case 1319: {
s.push(l[15]);
pc=1321; continue;
}
case 1321: {
o=s.pop(); s.push(o.y);
pc=1324; continue;
}
case 1324: {
s.push(l[0]);
pc=1325; continue;
}
case 1325: {
o=s.pop(); s.push(o.maps);
pc=1328; continue;
}
case 1328: {
o=s.pop(); s.push(o.wy);
pc=1331; continue;
}
case 1331: {
s.push(320);
pc=1334; continue;
}
case 1334: {
b=s.pop(); a=s.pop(); s.push((a + b) | 0);
pc=1335; continue;
}
case 1335: {
s.push(32);
pc=1337; continue;
}
case 1337: {
b=s.pop(); a=s.pop(); s.push((a + b) | 0);
pc=1338; continue;
}
case 1338: {
b=s.pop(); a=s.pop();
pc=(a<b)?1347:1341; continue;
}
case 1341: {
s.push(l[15]);
pc=1343; continue;
}
case 1343: {
s.push(0);
pc=1344; continue;
}
case 1344: {
v=s.pop(); o=s.pop(); o.c=v;
pc=1347; continue;
}
case 1347: {
s.push(l[15]);
pc=1349; continue;
}
case 1349: {
s.push(230);
pc=1352; continue;
}
case 1352: {
s.push(l[0]);
pc=1353; continue;
}
case 1353: {
o=s.pop(); s.push(o.g_c1);
pc=1356; continue;
}
case 1356: {
b=s.pop(); a=s.pop(); s.push((a + b) | 0);
pc=1357; continue;
}
case 1357: {
v=s.pop(); o=s.pop(); o.pt=v;
pc=1360; continue;
}
case 1360: {
s.push(l[15]);
pc=1362; continue;
}
case 1362: {
o=s.pop(); s.push(o.vx);
pc=1365; continue;
}
case 1365: {
a=s.pop();
pc=(a<0)?1377:1368; continue;
}
case 1368: {
s.push(l[15]);
pc=1370; continue;
}
case 1370: {
s.push(1);
pc=1371; continue;
}
case 1371: {
v=s.pop(); o=s.pop(); o.pth=v;
pc=1374; continue;
}
case 1374: {
pc=11361; continue;
}
case 1377: {
s.push(l[15]);
pc=1379; continue;
}
case 1379: {
s.push(0);
pc=1380; continue;
}
case 1380: {
v=s.pop(); o=s.pop(); o.pth=v;
pc=1383; continue;
}
case 1383: {
pc=11361; continue;
}
case 1386: {
s.push(l[15]);
pc=1388; continue;
}
case 1388: {
s.push(s[s.length-1]);
pc=1389; continue;
}
case 1389: {
o=s.pop(); s.push(o.x);
pc=1392; continue;
}
case 1392: {
s.push(l[15]);
pc=1394; continue;
}
case 1394: {
o=s.pop(); s.push(o.vx);
pc=1397; continue;
}
case 1397: {
s.push(10);
pc=1399; continue;
}
case 1399: {
b=s.pop(); a=s.pop(); s.push(J.div(a,b));
pc=1400; continue;
}
case 1400: {
b=s.pop(); a=s.pop(); s.push((a + b) | 0);
pc=1401; continue;
}
case 1401: {
v=s.pop(); o=s.pop(); o.x=v;
pc=1404; continue;
}
case 1404: {
s.push(l[15]);
pc=1406; continue;
}
case 1406: {
s.push(s[s.length-1]);
pc=1407; continue;
}
case 1407: {
o=s.pop(); s.push(o.y);
pc=1410; continue;
}
case 1410: {
s.push(l[15]);
pc=1412; continue;
}
case 1412: {
o=s.pop(); s.push(o.vy);
pc=1415; continue;
}
case 1415: {
s.push(10);
pc=1417; continue;
}
case 1417: {
b=s.pop(); a=s.pop(); s.push(J.div(a,b));
pc=1418; continue;
}
case 1418: {
b=s.pop(); a=s.pop(); s.push((a + b) | 0);
pc=1419; continue;
}
case 1419: {
v=s.pop(); o=s.pop(); o.y=v;
pc=1422; continue;
}
case 1422: {
s.push(l[0]);
pc=1423; continue;
}
case 1423: {
o=s.pop(); s.push(o.maps);
pc=1426; continue;
}
case 1426: {
s.push(l[15]);
pc=1428; continue;
}
case 1428: {
o=s.pop(); s.push(o.x);
pc=1431; continue;
}
case 1431: {
s.push(15);
pc=1433; continue;
}
case 1433: {
b=s.pop(); a=s.pop(); s.push((a + b) | 0);
pc=1434; continue;
}
case 1434: {
s.push(l[15]);
pc=1436; continue;
}
case 1436: {
o=s.pop(); s.push(o.y);
pc=1439; continue;
}
case 1439: {
s.push(15);
pc=1441; continue;
}
case 1441: {
b=s.pop(); a=s.pop(); s.push((a + b) | 0);
pc=1442; continue;
}
case 1442: {
v=s.splice(s.length-2,2);
o=s.pop();
s.push(o.getBGCode$2(v[0],v[1]));
pc=1445; continue;
}
case 1445: {
s.push(20);
pc=1447; continue;
}
case 1447: {
b=s.pop(); a=s.pop();
pc=(a<b)?1456:1450; continue;
}
case 1450: {
s.push(l[15]);
pc=1452; continue;
}
case 1452: {
s.push(0);
pc=1453; continue;
}
case 1453: {
v=s.pop(); o=s.pop(); o.c=v;
pc=1456; continue;
}
case 1456: {
s.push(l[15]);
pc=1458; continue;
}
case 1458: {
o=s.pop(); s.push(o.x);
pc=1461; continue;
}
case 1461: {
s.push(l[0]);
pc=1462; continue;
}
case 1462: {
o=s.pop(); s.push(o.maps);
pc=1465; continue;
}
case 1465: {
o=s.pop(); s.push(o.wx);
pc=1468; continue;
}
case 1468: {
s.push(32);
pc=1470; continue;
}
case 1470: {
b=s.pop(); a=s.pop(); s.push((a - b) | 0);
pc=1471; continue;
}
case 1471: {
s.push(64);
pc=1473; continue;
}
case 1473: {
b=s.pop(); a=s.pop(); s.push((a - b) | 0);
pc=1474; continue;
}
case 1474: {
b=s.pop(); a=s.pop();
pc=(a<=b)?1499:1477; continue;
}
case 1477: {
s.push(l[15]);
pc=1479; continue;
}
case 1479: {
o=s.pop(); s.push(o.x);
pc=1482; continue;
}
case 1482: {
s.push(l[0]);
pc=1483; continue;
}
case 1483: {
o=s.pop(); s.push(o.maps);
pc=1486; continue;
}
case 1486: {
o=s.pop(); s.push(o.wx);
pc=1489; continue;
}
case 1489: {
s.push(512);
pc=1492; continue;
}
case 1492: {
b=s.pop(); a=s.pop(); s.push((a + b) | 0);
pc=1493; continue;
}
case 1493: {
s.push(64);
pc=1495; continue;
}
case 1495: {
b=s.pop(); a=s.pop(); s.push((a + b) | 0);
pc=1496; continue;
}
case 1496: {
b=s.pop(); a=s.pop();
pc=(a<b)?1508:1499; continue;
}
case 1499: {
s.push(l[15]);
pc=1501; continue;
}
case 1501: {
s.push(0);
pc=1502; continue;
}
case 1502: {
v=s.pop(); o=s.pop(); o.c=v;
pc=1505; continue;
}
case 1505: {
pc=1554; continue;
}
case 1508: {
s.push(l[15]);
pc=1510; continue;
}
case 1510: {
o=s.pop(); s.push(o.y);
pc=1513; continue;
}
case 1513: {
s.push(l[0]);
pc=1514; continue;
}
case 1514: {
o=s.pop(); s.push(o.maps);
pc=1517; continue;
}
case 1517: {
o=s.pop(); s.push(o.wy);
pc=1520; continue;
}
case 1520: {
s.push(32);
pc=1522; continue;
}
case 1522: {
b=s.pop(); a=s.pop(); s.push((a - b) | 0);
pc=1523; continue;
}
case 1523: {
b=s.pop(); a=s.pop();
pc=(a<=b)?1548:1526; continue;
}
case 1526: {
s.push(l[15]);
pc=1528; continue;
}
case 1528: {
o=s.pop(); s.push(o.y);
pc=1531; continue;
}
case 1531: {
s.push(l[0]);
pc=1532; continue;
}
case 1532: {
o=s.pop(); s.push(o.maps);
pc=1535; continue;
}
case 1535: {
o=s.pop(); s.push(o.wy);
pc=1538; continue;
}
case 1538: {
s.push(320);
pc=1541; continue;
}
case 1541: {
b=s.pop(); a=s.pop(); s.push((a + b) | 0);
pc=1542; continue;
}
case 1542: {
s.push(32);
pc=1544; continue;
}
case 1544: {
b=s.pop(); a=s.pop(); s.push((a + b) | 0);
pc=1545; continue;
}
case 1545: {
b=s.pop(); a=s.pop();
pc=(a<b)?1554:1548; continue;
}
case 1548: {
s.push(l[15]);
pc=1550; continue;
}
case 1550: {
s.push(0);
pc=1551; continue;
}
case 1551: {
v=s.pop(); o=s.pop(); o.c=v;
pc=1554; continue;
}
case 1554: {
s.push(l[15]);
pc=1556; continue;
}
case 1556: {
s.push(s[s.length-1]);
pc=1557; continue;
}
case 1557: {
o=s.pop(); s.push(o.c1);
pc=1560; continue;
}
case 1560: {
s.push(1);
pc=1561; continue;
}
case 1561: {
b=s.pop(); a=s.pop(); s.push((a + b) | 0);
pc=1562; continue;
}
case 1562: {
v=s.pop(); o=s.pop(); o.c1=v;
pc=1565; continue;
}
case 1565: {
s.push(l[15]);
pc=1567; continue;
}
case 1567: {
o=s.pop(); s.push(o.c1);
pc=1570; continue;
}
case 1570: {
s.push(18);
pc=1572; continue;
}
case 1572: {
b=s.pop(); a=s.pop();
pc=(a<=b)?1581:1575; continue;
}
case 1575: {
s.push(l[15]);
pc=1577; continue;
}
case 1577: {
s.push(0);
pc=1578; continue;
}
case 1578: {
v=s.pop(); o=s.pop(); o.c=v;
pc=1581; continue;
}
case 1581: {
s.push(l[15]);
pc=1583; continue;
}
case 1583: {
s.push(232);
pc=1586; continue;
}
case 1586: {
s.push(l[0]);
pc=1587; continue;
}
case 1587: {
o=s.pop(); s.push(o.g_c1);
pc=1590; continue;
}
case 1590: {
b=s.pop(); a=s.pop(); s.push((a + b) | 0);
pc=1591; continue;
}
case 1591: {
v=s.pop(); o=s.pop(); o.pt=v;
pc=1594; continue;
}
case 1594: {
s.push(l[15]);
pc=1596; continue;
}
case 1596: {
s.push(0);
pc=1597; continue;
}
case 1597: {
v=s.pop(); o=s.pop(); o.pth=v;
pc=1600; continue;
}
case 1600: {
pc=11361; continue;
}
case 1603: {
s.push(l[15]);
pc=1605; continue;
}
case 1605: {
s.push(s[s.length-1]);
pc=1606; continue;
}
case 1606: {
o=s.pop(); s.push(o.x);
pc=1609; continue;
}
case 1609: {
s.push(l[15]);
pc=1611; continue;
}
case 1611: {
o=s.pop(); s.push(o.vx);
pc=1614; continue;
}
case 1614: {
s.push(10);
pc=1616; continue;
}
case 1616: {
b=s.pop(); a=s.pop(); s.push(J.div(a,b));
pc=1617; continue;
}
case 1617: {
b=s.pop(); a=s.pop(); s.push((a + b) | 0);
pc=1618; continue;
}
case 1618: {
v=s.pop(); o=s.pop(); o.x=v;
pc=1621; continue;
}
case 1621: {
s.push(l[15]);
pc=1623; continue;
}
case 1623: {
s.push(s[s.length-1]);
pc=1624; continue;
}
case 1624: {
o=s.pop(); s.push(o.y);
pc=1627; continue;
}
case 1627: {
s.push(l[15]);
pc=1629; continue;
}
case 1629: {
o=s.pop(); s.push(o.vy);
pc=1632; continue;
}
case 1632: {
s.push(10);
pc=1634; continue;
}
case 1634: {
b=s.pop(); a=s.pop(); s.push(J.div(a,b));
pc=1635; continue;
}
case 1635: {
b=s.pop(); a=s.pop(); s.push((a + b) | 0);
pc=1636; continue;
}
case 1636: {
v=s.pop(); o=s.pop(); o.y=v;
pc=1639; continue;
}
case 1639: {
s.push(l[0]);
pc=1640; continue;
}
case 1640: {
o=s.pop(); s.push(o.maps);
pc=1643; continue;
}
case 1643: {
s.push(l[15]);
pc=1645; continue;
}
case 1645: {
o=s.pop(); s.push(o.x);
pc=1648; continue;
}
case 1648: {
s.push(15);
pc=1650; continue;
}
case 1650: {
b=s.pop(); a=s.pop(); s.push((a + b) | 0);
pc=1651; continue;
}
case 1651: {
s.push(l[15]);
pc=1653; continue;
}
case 1653: {
o=s.pop(); s.push(o.y);
pc=1656; continue;
}
case 1656: {
s.push(15);
pc=1658; continue;
}
case 1658: {
b=s.pop(); a=s.pop(); s.push((a + b) | 0);
pc=1659; continue;
}
case 1659: {
v=s.splice(s.length-2,2);
o=s.pop();
s.push(o.getBGCode$2(v[0],v[1]));
pc=1662; continue;
}
case 1662: {
s.push(20);
pc=1664; continue;
}
case 1664: {
b=s.pop(); a=s.pop();
pc=(a<b)?1673:1667; continue;
}
case 1667: {
s.push(l[15]);
pc=1669; continue;
}
case 1669: {
s.push(0);
pc=1670; continue;
}
case 1670: {
v=s.pop(); o=s.pop(); o.c=v;
pc=1673; continue;
}
case 1673: {
s.push(l[15]);
pc=1675; continue;
}
case 1675: {
o=s.pop(); s.push(o.x);
pc=1678; continue;
}
case 1678: {
s.push(l[0]);
pc=1679; continue;
}
case 1679: {
o=s.pop(); s.push(o.maps);
pc=1682; continue;
}
case 1682: {
o=s.pop(); s.push(o.wx);
pc=1685; continue;
}
case 1685: {
s.push(32);
pc=1687; continue;
}
case 1687: {
b=s.pop(); a=s.pop(); s.push((a - b) | 0);
pc=1688; continue;
}
case 1688: {
s.push(64);
pc=1690; continue;
}
case 1690: {
b=s.pop(); a=s.pop(); s.push((a - b) | 0);
pc=1691; continue;
}
case 1691: {
b=s.pop(); a=s.pop();
pc=(a<=b)?1716:1694; continue;
}
case 1694: {
s.push(l[15]);
pc=1696; continue;
}
case 1696: {
o=s.pop(); s.push(o.x);
pc=1699; continue;
}
case 1699: {
s.push(l[0]);
pc=1700; continue;
}
case 1700: {
o=s.pop(); s.push(o.maps);
pc=1703; continue;
}
case 1703: {
o=s.pop(); s.push(o.wx);
pc=1706; continue;
}
case 1706: {
s.push(512);
pc=1709; continue;
}
case 1709: {
b=s.pop(); a=s.pop(); s.push((a + b) | 0);
pc=1710; continue;
}
case 1710: {
s.push(64);
pc=1712; continue;
}
case 1712: {
b=s.pop(); a=s.pop(); s.push((a + b) | 0);
pc=1713; continue;
}
case 1713: {
b=s.pop(); a=s.pop();
pc=(a<b)?1725:1716; continue;
}
case 1716: {
s.push(l[15]);
pc=1718; continue;
}
case 1718: {
s.push(0);
pc=1719; continue;
}
case 1719: {
v=s.pop(); o=s.pop(); o.c=v;
pc=1722; continue;
}
case 1722: {
pc=1771; continue;
}
case 1725: {
s.push(l[15]);
pc=1727; continue;
}
case 1727: {
o=s.pop(); s.push(o.y);
pc=1730; continue;
}
case 1730: {
s.push(l[0]);
pc=1731; continue;
}
case 1731: {
o=s.pop(); s.push(o.maps);
pc=1734; continue;
}
case 1734: {
o=s.pop(); s.push(o.wy);
pc=1737; continue;
}
case 1737: {
s.push(32);
pc=1739; continue;
}
case 1739: {
b=s.pop(); a=s.pop(); s.push((a - b) | 0);
pc=1740; continue;
}
case 1740: {
b=s.pop(); a=s.pop();
pc=(a<=b)?1765:1743; continue;
}
case 1743: {
s.push(l[15]);
pc=1745; continue;
}
case 1745: {
o=s.pop(); s.push(o.y);
pc=1748; continue;
}
case 1748: {
s.push(l[0]);
pc=1749; continue;
}
case 1749: {
o=s.pop(); s.push(o.maps);
pc=1752; continue;
}
case 1752: {
o=s.pop(); s.push(o.wy);
pc=1755; continue;
}
case 1755: {
s.push(320);
pc=1758; continue;
}
case 1758: {
b=s.pop(); a=s.pop(); s.push((a + b) | 0);
pc=1759; continue;
}
case 1759: {
s.push(32);
pc=1761; continue;
}
case 1761: {
b=s.pop(); a=s.pop(); s.push((a + b) | 0);
pc=1762; continue;
}
case 1762: {
b=s.pop(); a=s.pop();
pc=(a<b)?1771:1765; continue;
}
case 1765: {
s.push(l[15]);
pc=1767; continue;
}
case 1767: {
s.push(0);
pc=1768; continue;
}
case 1768: {
v=s.pop(); o=s.pop(); o.c=v;
pc=1771; continue;
}
case 1771: {
s.push(l[15]);
pc=1773; continue;
}
case 1773: {
s.push(s[s.length-1]);
pc=1774; continue;
}
case 1774: {
o=s.pop(); s.push(o.c1);
pc=1777; continue;
}
case 1777: {
s.push(1);
pc=1778; continue;
}
case 1778: {
b=s.pop(); a=s.pop(); s.push((a + b) | 0);
pc=1779; continue;
}
case 1779: {
v=s.pop(); o=s.pop(); o.c1=v;
pc=1782; continue;
}
case 1782: {
s.push(l[15]);
pc=1784; continue;
}
case 1784: {
o=s.pop(); s.push(o.c1);
pc=1787; continue;
}
case 1787: {
s.push(12);
pc=1789; continue;
}
case 1789: {
b=s.pop(); a=s.pop();
pc=(a<=b)?1798:1792; continue;
}
case 1792: {
s.push(l[15]);
pc=1794; continue;
}
case 1794: {
s.push(0);
pc=1795; continue;
}
case 1795: {
v=s.pop(); o=s.pop(); o.c=v;
pc=1798; continue;
}
case 1798: {
s.push(l[15]);
pc=1800; continue;
}
case 1800: {
s.push(244);
pc=1803; continue;
}
case 1803: {
v=s.pop(); o=s.pop(); o.pt=v;
pc=1806; continue;
}
case 1806: {
s.push(l[15]);
pc=1808; continue;
}
case 1808: {
o=s.pop(); s.push(o.vx);
pc=1811; continue;
}
case 1811: {
a=s.pop();
pc=(a<0)?1823:1814; continue;
}
case 1814: {
s.push(l[15]);
pc=1816; continue;
}
case 1816: {
s.push(1);
pc=1817; continue;
}
case 1817: {
v=s.pop(); o=s.pop(); o.pth=v;
pc=1820; continue;
}
case 1820: {
pc=11361; continue;
}
case 1823: {
s.push(l[15]);
pc=1825; continue;
}
case 1825: {
s.push(0);
pc=1826; continue;
}
case 1826: {
v=s.pop(); o=s.pop(); o.pth=v;
pc=1829; continue;
}
case 1829: {
pc=11361; continue;
}
case 1832: {
s.push(l[15]);
pc=1834; continue;
}
case 1834: {
s.push(s[s.length-1]);
pc=1835; continue;
}
case 1835: {
o=s.pop(); s.push(o.x);
pc=1838; continue;
}
case 1838: {
s.push(l[15]);
pc=1840; continue;
}
case 1840: {
o=s.pop(); s.push(o.vx);
pc=1843; continue;
}
case 1843: {
s.push(10);
pc=1845; continue;
}
case 1845: {
b=s.pop(); a=s.pop(); s.push(J.div(a,b));
pc=1846; continue;
}
case 1846: {
b=s.pop(); a=s.pop(); s.push((a + b) | 0);
pc=1847; continue;
}
case 1847: {
v=s.pop(); o=s.pop(); o.x=v;
pc=1850; continue;
}
case 1850: {
s.push(l[15]);
pc=1852; continue;
}
case 1852: {
s.push(s[s.length-1]);
pc=1853; continue;
}
case 1853: {
o=s.pop(); s.push(o.y);
pc=1856; continue;
}
case 1856: {
s.push(l[15]);
pc=1858; continue;
}
case 1858: {
o=s.pop(); s.push(o.vy);
pc=1861; continue;
}
case 1861: {
s.push(10);
pc=1863; continue;
}
case 1863: {
b=s.pop(); a=s.pop(); s.push(J.div(a,b));
pc=1864; continue;
}
case 1864: {
b=s.pop(); a=s.pop(); s.push((a + b) | 0);
pc=1865; continue;
}
case 1865: {
v=s.pop(); o=s.pop(); o.y=v;
pc=1868; continue;
}
case 1868: {
s.push(l[0]);
pc=1869; continue;
}
case 1869: {
o=s.pop(); s.push(o.maps);
pc=1872; continue;
}
case 1872: {
s.push(l[15]);
pc=1874; continue;
}
case 1874: {
o=s.pop(); s.push(o.x);
pc=1877; continue;
}
case 1877: {
s.push(15);
pc=1879; continue;
}
case 1879: {
b=s.pop(); a=s.pop(); s.push((a + b) | 0);
pc=1880; continue;
}
case 1880: {
s.push(l[15]);
pc=1882; continue;
}
case 1882: {
o=s.pop(); s.push(o.y);
pc=1885; continue;
}
case 1885: {
s.push(15);
pc=1887; continue;
}
case 1887: {
b=s.pop(); a=s.pop(); s.push((a + b) | 0);
pc=1888; continue;
}
case 1888: {
v=s.splice(s.length-2,2);
o=s.pop();
s.push(o.getBGCode$2(v[0],v[1]));
pc=1891; continue;
}
case 1891: {
s.push(20);
pc=1893; continue;
}
case 1893: {
b=s.pop(); a=s.pop();
pc=(a<b)?1902:1896; continue;
}
case 1896: {
s.push(l[15]);
pc=1898; continue;
}
case 1898: {
s.push(0);
pc=1899; continue;
}
case 1899: {
v=s.pop(); o=s.pop(); o.c=v;
pc=1902; continue;
}
case 1902: {
s.push(l[15]);
pc=1904; continue;
}
case 1904: {
o=s.pop(); s.push(o.x);
pc=1907; continue;
}
case 1907: {
s.push(l[0]);
pc=1908; continue;
}
case 1908: {
o=s.pop(); s.push(o.maps);
pc=1911; continue;
}
case 1911: {
o=s.pop(); s.push(o.wx);
pc=1914; continue;
}
case 1914: {
s.push(32);
pc=1916; continue;
}
case 1916: {
b=s.pop(); a=s.pop(); s.push((a - b) | 0);
pc=1917; continue;
}
case 1917: {
s.push(64);
pc=1919; continue;
}
case 1919: {
b=s.pop(); a=s.pop(); s.push((a - b) | 0);
pc=1920; continue;
}
case 1920: {
b=s.pop(); a=s.pop();
pc=(a<=b)?1945:1923; continue;
}
case 1923: {
s.push(l[15]);
pc=1925; continue;
}
case 1925: {
o=s.pop(); s.push(o.x);
pc=1928; continue;
}
case 1928: {
s.push(l[0]);
pc=1929; continue;
}
case 1929: {
o=s.pop(); s.push(o.maps);
pc=1932; continue;
}
case 1932: {
o=s.pop(); s.push(o.wx);
pc=1935; continue;
}
case 1935: {
s.push(512);
pc=1938; continue;
}
case 1938: {
b=s.pop(); a=s.pop(); s.push((a + b) | 0);
pc=1939; continue;
}
case 1939: {
s.push(64);
pc=1941; continue;
}
case 1941: {
b=s.pop(); a=s.pop(); s.push((a + b) | 0);
pc=1942; continue;
}
case 1942: {
b=s.pop(); a=s.pop();
pc=(a<b)?1954:1945; continue;
}
case 1945: {
s.push(l[15]);
pc=1947; continue;
}
case 1947: {
s.push(0);
pc=1948; continue;
}
case 1948: {
v=s.pop(); o=s.pop(); o.c=v;
pc=1951; continue;
}
case 1951: {
pc=2000; continue;
}
case 1954: {
s.push(l[15]);
pc=1956; continue;
}
case 1956: {
o=s.pop(); s.push(o.y);
pc=1959; continue;
}
case 1959: {
s.push(l[0]);
pc=1960; continue;
}
case 1960: {
o=s.pop(); s.push(o.maps);
pc=1963; continue;
}
case 1963: {
o=s.pop(); s.push(o.wy);
pc=1966; continue;
}
case 1966: {
s.push(32);
pc=1968; continue;
}
case 1968: {
b=s.pop(); a=s.pop(); s.push((a - b) | 0);
pc=1969; continue;
}
case 1969: {
b=s.pop(); a=s.pop();
pc=(a<=b)?1994:1972; continue;
}
case 1972: {
s.push(l[15]);
pc=1974; continue;
}
case 1974: {
o=s.pop(); s.push(o.y);
pc=1977; continue;
}
case 1977: {
s.push(l[0]);
pc=1978; continue;
}
case 1978: {
o=s.pop(); s.push(o.maps);
pc=1981; continue;
}
case 1981: {
o=s.pop(); s.push(o.wy);
pc=1984; continue;
}
case 1984: {
s.push(320);
pc=1987; continue;
}
case 1987: {
b=s.pop(); a=s.pop(); s.push((a + b) | 0);
pc=1988; continue;
}
case 1988: {
s.push(32);
pc=1990; continue;
}
case 1990: {
b=s.pop(); a=s.pop(); s.push((a + b) | 0);
pc=1991; continue;
}
case 1991: {
b=s.pop(); a=s.pop();
pc=(a<b)?2000:1994; continue;
}
case 1994: {
s.push(l[15]);
pc=1996; continue;
}
case 1996: {
s.push(0);
pc=1997; continue;
}
case 1997: {
v=s.pop(); o=s.pop(); o.c=v;
pc=2000; continue;
}
case 2000: {
s.push(l[15]);
pc=2002; continue;
}
case 2002: {
s.push(s[s.length-1]);
pc=2003; continue;
}
case 2003: {
o=s.pop(); s.push(o.c1);
pc=2006; continue;
}
case 2006: {
s.push(1);
pc=2007; continue;
}
case 2007: {
b=s.pop(); a=s.pop(); s.push((a + b) | 0);
pc=2008; continue;
}
case 2008: {
v=s.pop(); o=s.pop(); o.c1=v;
pc=2011; continue;
}
case 2011: {
s.push(l[15]);
pc=2013; continue;
}
case 2013: {
o=s.pop(); s.push(o.c1);
pc=2016; continue;
}
case 2016: {
s.push(18);
pc=2018; continue;
}
case 2018: {
b=s.pop(); a=s.pop();
pc=(a<=b)?11361:2021; continue;
}
case 2021: {
s.push(l[15]);
pc=2023; continue;
}
case 2023: {
s.push(0);
pc=2024; continue;
}
case 2024: {
v=s.pop(); o=s.pop(); o.c=v;
pc=2027; continue;
}
case 2027: {
pc=11361; continue;
}
case 2030: {
s.push(l[15]);
pc=2032; continue;
}
case 2032: {
s.push(s[s.length-1]);
pc=2033; continue;
}
case 2033: {
o=s.pop(); s.push(o.vy);
pc=2036; continue;
}
case 2036: {
s.push(10);
pc=2038; continue;
}
case 2038: {
b=s.pop(); a=s.pop(); s.push((a + b) | 0);
pc=2039; continue;
}
case 2039: {
v=s.pop(); o=s.pop(); o.vy=v;
pc=2042; continue;
}
case 2042: {
s.push(l[15]);
pc=2044; continue;
}
case 2044: {
o=s.pop(); s.push(o.vy);
pc=2047; continue;
}
case 2047: {
s.push(200);
pc=2050; continue;
}
case 2050: {
b=s.pop(); a=s.pop();
pc=(a<=b)?2061:2053; continue;
}
case 2053: {
s.push(l[15]);
pc=2055; continue;
}
case 2055: {
s.push(200);
pc=2058; continue;
}
case 2058: {
v=s.pop(); o=s.pop(); o.vy=v;
pc=2061; continue;
}
case 2061: {
s.push(l[15]);
pc=2063; continue;
}
case 2063: {
s.push(s[s.length-1]);
pc=2064; continue;
}
case 2064: {
o=s.pop(); s.push(o.y);
pc=2067; continue;
}
case 2067: {
s.push(l[15]);
pc=2069; continue;
}
case 2069: {
o=s.pop(); s.push(o.vy);
pc=2072; continue;
}
case 2072: {
s.push(10);
pc=2074; continue;
}
case 2074: {
b=s.pop(); a=s.pop(); s.push(J.div(a,b));
pc=2075; continue;
}
case 2075: {
b=s.pop(); a=s.pop(); s.push((a + b) | 0);
pc=2076; continue;
}
case 2076: {
v=s.pop(); o=s.pop(); o.y=v;
pc=2079; continue;
}
case 2079: {
s.push(l[0]);
pc=2080; continue;
}
case 2080: {
o=s.pop(); s.push(o.maps);
pc=2083; continue;
}
case 2083: {
s.push(l[15]);
pc=2085; continue;
}
case 2085: {
o=s.pop(); s.push(o.x);
pc=2088; continue;
}
case 2088: {
s.push(15);
pc=2090; continue;
}
case 2090: {
b=s.pop(); a=s.pop(); s.push((a + b) | 0);
pc=2091; continue;
}
case 2091: {
s.push(l[15]);
pc=2093; continue;
}
case 2093: {
o=s.pop(); s.push(o.y);
pc=2096; continue;
}
case 2096: {
s.push(15);
pc=2098; continue;
}
case 2098: {
b=s.pop(); a=s.pop(); s.push((a + b) | 0);
pc=2099; continue;
}
case 2099: {
v=s.splice(s.length-2,2);
o=s.pop();
s.push(o.getBGCode$2(v[0],v[1]));
pc=2102; continue;
}
case 2102: {
s.push(20);
pc=2104; continue;
}
case 2104: {
b=s.pop(); a=s.pop();
pc=(a<b)?2113:2107; continue;
}
case 2107: {
s.push(l[15]);
pc=2109; continue;
}
case 2109: {
s.push(0);
pc=2110; continue;
}
case 2110: {
v=s.pop(); o=s.pop(); o.c=v;
pc=2113; continue;
}
case 2113: {
s.push(l[15]);
pc=2115; continue;
}
case 2115: {
o=s.pop(); s.push(o.x);
pc=2118; continue;
}
case 2118: {
s.push(l[0]);
pc=2119; continue;
}
case 2119: {
o=s.pop(); s.push(o.maps);
pc=2122; continue;
}
case 2122: {
o=s.pop(); s.push(o.wx);
pc=2125; continue;
}
case 2125: {
s.push(32);
pc=2127; continue;
}
case 2127: {
b=s.pop(); a=s.pop(); s.push((a - b) | 0);
pc=2128; continue;
}
case 2128: {
s.push(64);
pc=2130; continue;
}
case 2130: {
b=s.pop(); a=s.pop(); s.push((a - b) | 0);
pc=2131; continue;
}
case 2131: {
b=s.pop(); a=s.pop();
pc=(a<=b)?2156:2134; continue;
}
case 2134: {
s.push(l[15]);
pc=2136; continue;
}
case 2136: {
o=s.pop(); s.push(o.x);
pc=2139; continue;
}
case 2139: {
s.push(l[0]);
pc=2140; continue;
}
case 2140: {
o=s.pop(); s.push(o.maps);
pc=2143; continue;
}
case 2143: {
o=s.pop(); s.push(o.wx);
pc=2146; continue;
}
case 2146: {
s.push(512);
pc=2149; continue;
}
case 2149: {
b=s.pop(); a=s.pop(); s.push((a + b) | 0);
pc=2150; continue;
}
case 2150: {
s.push(64);
pc=2152; continue;
}
case 2152: {
b=s.pop(); a=s.pop(); s.push((a + b) | 0);
pc=2153; continue;
}
case 2153: {
b=s.pop(); a=s.pop();
pc=(a<b)?2162:2156; continue;
}
case 2156: {
s.push(l[15]);
pc=2158; continue;
}
case 2158: {
s.push(0);
pc=2159; continue;
}
case 2159: {
v=s.pop(); o=s.pop(); o.c=v;
pc=2162; continue;
}
case 2162: {
s.push(l[15]);
pc=2164; continue;
}
case 2164: {
o=s.pop(); s.push(o.y);
pc=2167; continue;
}
case 2167: {
s.push(l[0]);
pc=2168; continue;
}
case 2168: {
o=s.pop(); s.push(o.maps);
pc=2171; continue;
}
case 2171: {
o=s.pop(); s.push(o.wy);
pc=2174; continue;
}
case 2174: {
s.push(320);
pc=2177; continue;
}
case 2177: {
b=s.pop(); a=s.pop(); s.push((a + b) | 0);
pc=2178; continue;
}
case 2178: {
s.push(32);
pc=2180; continue;
}
case 2180: {
b=s.pop(); a=s.pop(); s.push((a + b) | 0);
pc=2181; continue;
}
case 2181: {
b=s.pop(); a=s.pop();
pc=(a<b)?2190:2184; continue;
}
case 2184: {
s.push(l[15]);
pc=2186; continue;
}
case 2186: {
s.push(0);
pc=2187; continue;
}
case 2187: {
v=s.pop(); o=s.pop(); o.c=v;
pc=2190; continue;
}
case 2190: {
s.push(l[15]);
pc=2192; continue;
}
case 2192: {
s.push(237);
pc=2195; continue;
}
case 2195: {
v=s.pop(); o=s.pop(); o.pt=v;
pc=2198; continue;
}
case 2198: {
s.push(l[15]);
pc=2200; continue;
}
case 2200: {
s.push(0);
pc=2201; continue;
}
case 2201: {
v=s.pop(); o=s.pop(); o.pth=v;
pc=2204; continue;
}
case 2204: {
pc=11361; continue;
}
case 2207: {
s.push(l[15]);
pc=2209; continue;
}
case 2209: {
s.push(s[s.length-1]);
pc=2210; continue;
}
case 2210: {
o=s.pop(); s.push(o.x);
pc=2213; continue;
}
case 2213: {
s.push(l[15]);
pc=2215; continue;
}
case 2215: {
o=s.pop(); s.push(o.vx);
pc=2218; continue;
}
case 2218: {
s.push(10);
pc=2220; continue;
}
case 2220: {
b=s.pop(); a=s.pop(); s.push(J.div(a,b));
pc=2221; continue;
}
case 2221: {
b=s.pop(); a=s.pop(); s.push((a + b) | 0);
pc=2222; continue;
}
case 2222: {
v=s.pop(); o=s.pop(); o.x=v;
pc=2225; continue;
}
case 2225: {
s.push(l[15]);
pc=2227; continue;
}
case 2227: {
s.push(s[s.length-1]);
pc=2228; continue;
}
case 2228: {
o=s.pop(); s.push(o.vy);
pc=2231; continue;
}
case 2231: {
s.push(25);
pc=2233; continue;
}
case 2233: {
b=s.pop(); a=s.pop(); s.push((a + b) | 0);
pc=2234; continue;
}
case 2234: {
v=s.pop(); o=s.pop(); o.vy=v;
pc=2237; continue;
}
case 2237: {
s.push(l[15]);
pc=2239; continue;
}
case 2239: {
o=s.pop(); s.push(o.vy);
pc=2242; continue;
}
case 2242: {
s.push(150);
pc=2245; continue;
}
case 2245: {
b=s.pop(); a=s.pop();
pc=(a<=b)?2256:2248; continue;
}
case 2248: {
s.push(l[15]);
pc=2250; continue;
}
case 2250: {
s.push(150);
pc=2253; continue;
}
case 2253: {
v=s.pop(); o=s.pop(); o.vy=v;
pc=2256; continue;
}
case 2256: {
s.push(l[15]);
pc=2258; continue;
}
case 2258: {
o=s.pop(); s.push(o.vy);
pc=2261; continue;
}
case 2261: {
s.push(120);
pc=2263; continue;
}
case 2263: {
b=s.pop(); a=s.pop();
pc=(a<=b)?2331:2266; continue;
}
case 2266: {
s.push(l[15]);
pc=2268; continue;
}
case 2268: {
o=s.pop(); s.push(o.vx);
pc=2271; continue;
}
case 2271: {
v=s.splice(s.length-1,1);
s.push(Math.abs(v[0]));
pc=2274; continue;
}
case 2274: {
s.push(15);
pc=2276; continue;
}
case 2276: {
b=s.pop(); a=s.pop();
pc=(a>b)?2288:2279; continue;
}
case 2279: {
s.push(l[15]);
pc=2281; continue;
}
case 2281: {
s.push(0);
pc=2282; continue;
}
case 2282: {
v=s.pop(); o=s.pop(); o.vx=v;
pc=2285; continue;
}
case 2285: {
pc=2331; continue;
}
case 2288: {
s.push(l[15]);
pc=2290; continue;
}
case 2290: {
o=s.pop(); s.push(o.vx);
pc=2293; continue;
}
case 2293: {
a=s.pop();
pc=(a<=0)?2311:2296; continue;
}
case 2296: {
s.push(l[15]);
pc=2298; continue;
}
case 2298: {
s.push(s[s.length-1]);
pc=2299; continue;
}
case 2299: {
o=s.pop(); s.push(o.vx);
pc=2302; continue;
}
case 2302: {
s.push(15);
pc=2304; continue;
}
case 2304: {
b=s.pop(); a=s.pop(); s.push((a - b) | 0);
pc=2305; continue;
}
case 2305: {
v=s.pop(); o=s.pop(); o.vx=v;
pc=2308; continue;
}
case 2308: {
pc=2331; continue;
}
case 2311: {
s.push(l[15]);
pc=2313; continue;
}
case 2313: {
o=s.pop(); s.push(o.vx);
pc=2316; continue;
}
case 2316: {
a=s.pop();
pc=(a>=0)?2331:2319; continue;
}
case 2319: {
s.push(l[15]);
pc=2321; continue;
}
case 2321: {
s.push(s[s.length-1]);
pc=2322; continue;
}
case 2322: {
o=s.pop(); s.push(o.vx);
pc=2325; continue;
}
case 2325: {
s.push(15);
pc=2327; continue;
}
case 2327: {
b=s.pop(); a=s.pop(); s.push((a + b) | 0);
pc=2328; continue;
}
case 2328: {
v=s.pop(); o=s.pop(); o.vx=v;
pc=2331; continue;
}
case 2331: {
s.push(l[15]);
pc=2333; continue;
}
case 2333: {
s.push(s[s.length-1]);
pc=2334; continue;
}
case 2334: {
o=s.pop(); s.push(o.y);
pc=2337; continue;
}
case 2337: {
s.push(l[15]);
pc=2339; continue;
}
case 2339: {
o=s.pop(); s.push(o.vy);
pc=2342; continue;
}
case 2342: {
s.push(10);
pc=2344; continue;
}
case 2344: {
b=s.pop(); a=s.pop(); s.push(J.div(a,b));
pc=2345; continue;
}
case 2345: {
b=s.pop(); a=s.pop(); s.push((a + b) | 0);
pc=2346; continue;
}
case 2346: {
v=s.pop(); o=s.pop(); o.y=v;
pc=2349; continue;
}
case 2349: {
s.push(l[0]);
pc=2350; continue;
}
case 2350: {
o=s.pop(); s.push(o.maps);
pc=2353; continue;
}
case 2353: {
s.push(l[15]);
pc=2355; continue;
}
case 2355: {
o=s.pop(); s.push(o.x);
pc=2358; continue;
}
case 2358: {
s.push(15);
pc=2360; continue;
}
case 2360: {
b=s.pop(); a=s.pop(); s.push((a + b) | 0);
pc=2361; continue;
}
case 2361: {
s.push(l[15]);
pc=2363; continue;
}
case 2363: {
o=s.pop(); s.push(o.y);
pc=2366; continue;
}
case 2366: {
s.push(15);
pc=2368; continue;
}
case 2368: {
b=s.pop(); a=s.pop(); s.push((a + b) | 0);
pc=2369; continue;
}
case 2369: {
v=s.splice(s.length-2,2);
o=s.pop();
s.push(o.getBGCode$2(v[0],v[1]));
pc=2372; continue;
}
case 2372: {
s.push(20);
pc=2374; continue;
}
case 2374: {
b=s.pop(); a=s.pop();
pc=(a<b)?2383:2377; continue;
}
case 2377: {
s.push(l[15]);
pc=2379; continue;
}
case 2379: {
s.push(0);
pc=2380; continue;
}
case 2380: {
v=s.pop(); o=s.pop(); o.c=v;
pc=2383; continue;
}
case 2383: {
s.push(l[15]);
pc=2385; continue;
}
case 2385: {
o=s.pop(); s.push(o.x);
pc=2388; continue;
}
case 2388: {
s.push(l[0]);
pc=2389; continue;
}
case 2389: {
o=s.pop(); s.push(o.maps);
pc=2392; continue;
}
case 2392: {
o=s.pop(); s.push(o.wx);
pc=2395; continue;
}
case 2395: {
s.push(32);
pc=2397; continue;
}
case 2397: {
b=s.pop(); a=s.pop(); s.push((a - b) | 0);
pc=2398; continue;
}
case 2398: {
s.push(64);
pc=2400; continue;
}
case 2400: {
b=s.pop(); a=s.pop(); s.push((a - b) | 0);
pc=2401; continue;
}
case 2401: {
b=s.pop(); a=s.pop();
pc=(a<=b)?2426:2404; continue;
}
case 2404: {
s.push(l[15]);
pc=2406; continue;
}
case 2406: {
o=s.pop(); s.push(o.x);
pc=2409; continue;
}
case 2409: {
s.push(l[0]);
pc=2410; continue;
}
case 2410: {
o=s.pop(); s.push(o.maps);
pc=2413; continue;
}
case 2413: {
o=s.pop(); s.push(o.wx);
pc=2416; continue;
}
case 2416: {
s.push(512);
pc=2419; continue;
}
case 2419: {
b=s.pop(); a=s.pop(); s.push((a + b) | 0);
pc=2420; continue;
}
case 2420: {
s.push(64);
pc=2422; continue;
}
case 2422: {
b=s.pop(); a=s.pop(); s.push((a + b) | 0);
pc=2423; continue;
}
case 2423: {
b=s.pop(); a=s.pop();
pc=(a<b)?2435:2426; continue;
}
case 2426: {
s.push(l[15]);
pc=2428; continue;
}
case 2428: {
s.push(0);
pc=2429; continue;
}
case 2429: {
v=s.pop(); o=s.pop(); o.c=v;
pc=2432; continue;
}
case 2432: {
pc=2463; continue;
}
case 2435: {
s.push(l[15]);
pc=2437; continue;
}
case 2437: {
o=s.pop(); s.push(o.y);
pc=2440; continue;
}
case 2440: {
s.push(l[0]);
pc=2441; continue;
}
case 2441: {
o=s.pop(); s.push(o.maps);
pc=2444; continue;
}
case 2444: {
o=s.pop(); s.push(o.wy);
pc=2447; continue;
}
case 2447: {
s.push(320);
pc=2450; continue;
}
case 2450: {
b=s.pop(); a=s.pop(); s.push((a + b) | 0);
pc=2451; continue;
}
case 2451: {
s.push(32);
pc=2453; continue;
}
case 2453: {
b=s.pop(); a=s.pop(); s.push((a + b) | 0);
pc=2454; continue;
}
case 2454: {
b=s.pop(); a=s.pop();
pc=(a<b)?2463:2457; continue;
}
case 2457: {
s.push(l[15]);
pc=2459; continue;
}
case 2459: {
s.push(0);
pc=2460; continue;
}
case 2460: {
v=s.pop(); o=s.pop(); o.c=v;
pc=2463; continue;
}
case 2463: {
s.push(l[15]);
pc=2465; continue;
}
case 2465: {
s.push(237);
pc=2468; continue;
}
case 2468: {
v=s.pop(); o=s.pop(); o.pt=v;
pc=2471; continue;
}
case 2471: {
s.push(l[15]);
pc=2473; continue;
}
case 2473: {
s.push(0);
pc=2474; continue;
}
case 2474: {
v=s.pop(); o=s.pop(); o.pth=v;
pc=2477; continue;
}
case 2477: {
pc=11361; continue;
}
case 2480: {
s.push(l[15]);
pc=2482; continue;
}
case 2482: {
s.push(s[s.length-1]);
pc=2483; continue;
}
case 2483: {
o=s.pop(); s.push(o.vy);
pc=2486; continue;
}
case 2486: {
s.push(10);
pc=2488; continue;
}
case 2488: {
b=s.pop(); a=s.pop(); s.push((a + b) | 0);
pc=2489; continue;
}
case 2489: {
v=s.pop(); o=s.pop(); o.vy=v;
pc=2492; continue;
}
case 2492: {
s.push(l[15]);
pc=2494; continue;
}
case 2494: {
o=s.pop(); s.push(o.vy);
pc=2497; continue;
}
case 2497: {
s.push(80);
pc=2499; continue;
}
case 2499: {
b=s.pop(); a=s.pop();
pc=(a<=b)?2509:2502; continue;
}
case 2502: {
s.push(l[15]);
pc=2504; continue;
}
case 2504: {
s.push(80);
pc=2506; continue;
}
case 2506: {
v=s.pop(); o=s.pop(); o.vy=v;
pc=2509; continue;
}
case 2509: {
s.push(l[15]);
pc=2511; continue;
}
case 2511: {
s.push(s[s.length-1]);
pc=2512; continue;
}
case 2512: {
o=s.pop(); s.push(o.y);
pc=2515; continue;
}
case 2515: {
s.push(l[15]);
pc=2517; continue;
}
case 2517: {
o=s.pop(); s.push(o.vy);
pc=2520; continue;
}
case 2520: {
s.push(10);
pc=2522; continue;
}
case 2522: {
b=s.pop(); a=s.pop(); s.push(J.div(a,b));
pc=2523; continue;
}
case 2523: {
b=s.pop(); a=s.pop(); s.push((a + b) | 0);
pc=2524; continue;
}
case 2524: {
v=s.pop(); o=s.pop(); o.y=v;
pc=2527; continue;
}
case 2527: {
s.push(l[0]);
pc=2528; continue;
}
case 2528: {
o=s.pop(); s.push(o.maps);
pc=2531; continue;
}
case 2531: {
s.push(l[15]);
pc=2533; continue;
}
case 2533: {
o=s.pop(); s.push(o.x);
pc=2536; continue;
}
case 2536: {
s.push(15);
pc=2538; continue;
}
case 2538: {
b=s.pop(); a=s.pop(); s.push((a + b) | 0);
pc=2539; continue;
}
case 2539: {
s.push(l[15]);
pc=2541; continue;
}
case 2541: {
o=s.pop(); s.push(o.y);
pc=2544; continue;
}
case 2544: {
s.push(15);
pc=2546; continue;
}
case 2546: {
b=s.pop(); a=s.pop(); s.push((a + b) | 0);
pc=2547; continue;
}
case 2547: {
v=s.splice(s.length-2,2);
o=s.pop();
s.push(o.getBGCode$2(v[0],v[1]));
pc=2550; continue;
}
case 2550: {
s.push(20);
pc=2552; continue;
}
case 2552: {
b=s.pop(); a=s.pop();
pc=(a<b)?2561:2555; continue;
}
case 2555: {
s.push(l[15]);
pc=2557; continue;
}
case 2557: {
s.push(0);
pc=2558; continue;
}
case 2558: {
v=s.pop(); o=s.pop(); o.c=v;
pc=2561; continue;
}
case 2561: {
s.push(l[15]);
pc=2563; continue;
}
case 2563: {
o=s.pop(); s.push(o.x);
pc=2566; continue;
}
case 2566: {
s.push(l[0]);
pc=2567; continue;
}
case 2567: {
o=s.pop(); s.push(o.maps);
pc=2570; continue;
}
case 2570: {
o=s.pop(); s.push(o.wx);
pc=2573; continue;
}
case 2573: {
s.push(32);
pc=2575; continue;
}
case 2575: {
b=s.pop(); a=s.pop(); s.push((a - b) | 0);
pc=2576; continue;
}
case 2576: {
s.push(64);
pc=2578; continue;
}
case 2578: {
b=s.pop(); a=s.pop(); s.push((a - b) | 0);
pc=2579; continue;
}
case 2579: {
b=s.pop(); a=s.pop();
pc=(a<=b)?2604:2582; continue;
}
case 2582: {
s.push(l[15]);
pc=2584; continue;
}
case 2584: {
o=s.pop(); s.push(o.x);
pc=2587; continue;
}
case 2587: {
s.push(l[0]);
pc=2588; continue;
}
case 2588: {
o=s.pop(); s.push(o.maps);
pc=2591; continue;
}
case 2591: {
o=s.pop(); s.push(o.wx);
pc=2594; continue;
}
case 2594: {
s.push(512);
pc=2597; continue;
}
case 2597: {
b=s.pop(); a=s.pop(); s.push((a + b) | 0);
pc=2598; continue;
}
case 2598: {
s.push(64);
pc=2600; continue;
}
case 2600: {
b=s.pop(); a=s.pop(); s.push((a + b) | 0);
pc=2601; continue;
}
case 2601: {
b=s.pop(); a=s.pop();
pc=(a<b)?2610:2604; continue;
}
case 2604: {
s.push(l[15]);
pc=2606; continue;
}
case 2606: {
s.push(0);
pc=2607; continue;
}
case 2607: {
v=s.pop(); o=s.pop(); o.c=v;
pc=2610; continue;
}
case 2610: {
s.push(l[15]);
pc=2612; continue;
}
case 2612: {
o=s.pop(); s.push(o.y);
pc=2615; continue;
}
case 2615: {
s.push(l[0]);
pc=2616; continue;
}
case 2616: {
o=s.pop(); s.push(o.maps);
pc=2619; continue;
}
case 2619: {
o=s.pop(); s.push(o.wy);
pc=2622; continue;
}
case 2622: {
s.push(320);
pc=2625; continue;
}
case 2625: {
b=s.pop(); a=s.pop(); s.push((a + b) | 0);
pc=2626; continue;
}
case 2626: {
s.push(32);
pc=2628; continue;
}
case 2628: {
b=s.pop(); a=s.pop(); s.push((a + b) | 0);
pc=2629; continue;
}
case 2629: {
b=s.pop(); a=s.pop();
pc=(a<b)?2638:2632; continue;
}
case 2632: {
s.push(l[15]);
pc=2634; continue;
}
case 2634: {
s.push(0);
pc=2635; continue;
}
case 2635: {
v=s.pop(); o=s.pop(); o.c=v;
pc=2638; continue;
}
case 2638: {
s.push(l[15]);
pc=2640; continue;
}
case 2640: {
s.push(260);
pc=2643; continue;
}
case 2643: {
s.push(l[0]);
pc=2644; continue;
}
case 2644: {
o=s.pop(); s.push(o.g_c1);
pc=2647; continue;
}
case 2647: {
b=s.pop(); a=s.pop(); s.push((a + b) | 0);
pc=2648; continue;
}
case 2648: {
v=s.pop(); o=s.pop(); o.pt=v;
pc=2651; continue;
}
case 2651: {
s.push(l[15]);
pc=2653; continue;
}
case 2653: {
s.push(0);
pc=2654; continue;
}
case 2654: {
v=s.pop(); o=s.pop(); o.pth=v;
pc=2657; continue;
}
case 2657: {
pc=11361; continue;
}
case 2660: {
s.push(l[15]);
pc=2662; continue;
}
case 2662: {
o=s.pop(); s.push(o.team);
pc=2665; continue;
}
case 2665: {
a=s.pop();
pc=(a!=0)?2707:2668; continue;
}
case 2668: {
s.push(l[15]);
pc=2670; continue;
}
case 2670: {
s.push(s[s.length-1]);
pc=2671; continue;
}
case 2671: {
o=s.pop(); s.push(o.c2);
pc=2674; continue;
}
case 2674: {
s.push(10);
pc=2676; continue;
}
case 2676: {
b=s.pop(); a=s.pop(); s.push((a + b) | 0);
pc=2677; continue;
}
case 2677: {
v=s.pop(); o=s.pop(); o.c2=v;
pc=2680; continue;
}
case 2680: {
s.push(l[15]);
pc=2682; continue;
}
case 2682: {
o=s.pop(); s.push(o.c2);
pc=2685; continue;
}
case 2685: {
s.push(360);
pc=2688; continue;
}
case 2688: {
b=s.pop(); a=s.pop();
pc=(a<b)?2740:2691; continue;
}
case 2691: {
s.push(l[15]);
pc=2693; continue;
}
case 2693: {
s.push(s[s.length-1]);
pc=2694; continue;
}
case 2694: {
o=s.pop(); s.push(o.c2);
pc=2697; continue;
}
case 2697: {
s.push(360);
pc=2700; continue;
}
case 2700: {
b=s.pop(); a=s.pop(); s.push((a - b) | 0);
pc=2701; continue;
}
case 2701: {
v=s.pop(); o=s.pop(); o.c2=v;
pc=2704; continue;
}
case 2704: {
pc=2740; continue;
}
case 2707: {
s.push(l[15]);
pc=2709; continue;
}
case 2709: {
s.push(s[s.length-1]);
pc=2710; continue;
}
case 2710: {
o=s.pop(); s.push(o.c2);
pc=2713; continue;
}
case 2713: {
s.push(10);
pc=2715; continue;
}
case 2715: {
b=s.pop(); a=s.pop(); s.push((a - b) | 0);
pc=2716; continue;
}
case 2716: {
v=s.pop(); o=s.pop(); o.c2=v;
pc=2719; continue;
}
case 2719: {
s.push(l[15]);
pc=2721; continue;
}
case 2721: {
o=s.pop(); s.push(o.c2);
pc=2724; continue;
}
case 2724: {
a=s.pop();
pc=(a>=0)?2740:2727; continue;
}
case 2727: {
s.push(l[15]);
pc=2729; continue;
}
case 2729: {
s.push(s[s.length-1]);
pc=2730; continue;
}
case 2730: {
o=s.pop(); s.push(o.c2);
pc=2733; continue;
}
case 2733: {
s.push(360);
pc=2736; continue;
}
case 2736: {
b=s.pop(); a=s.pop(); s.push((a + b) | 0);
pc=2737; continue;
}
case 2737: {
v=s.pop(); o=s.pop(); o.c2=v;
pc=2740; continue;
}
case 2740: {
s.push(l[15]);
pc=2742; continue;
}
case 2742: {
s.push(s[s.length-1]);
pc=2743; continue;
}
case 2743: {
o=s.pop(); s.push(o.c3);
pc=2746; continue;
}
case 2746: {
s.push(3);
pc=2747; continue;
}
case 2747: {
b=s.pop(); a=s.pop(); s.push((a + b) | 0);
pc=2748; continue;
}
case 2748: {
v=s.pop(); o=s.pop(); o.c3=v;
pc=2751; continue;
}
case 2751: {
s.push(l[15]);
pc=2753; continue;
}
case 2753: {
o=s.pop(); s.push(o.c3);
pc=2756; continue;
}
case 2756: {
s.push(175);
pc=2759; continue;
}
case 2759: {
b=s.pop(); a=s.pop();
pc=(a<=b)?2768:2762; continue;
}
case 2762: {
s.push(l[15]);
pc=2764; continue;
}
case 2764: {
s.push(0);
pc=2765; continue;
}
case 2765: {
v=s.pop(); o=s.pop(); o.c=v;
pc=2768; continue;
}
case 2768: {
s.push(l[15]);
pc=2770; continue;
}
case 2770: {
o=s.pop(); s.push(o.c2);
pc=2773; continue;
}
case 2773: {
pc=2774; continue;
}
case 2774: {
s.push(3.141592653589793);
pc=2777; continue;
}
case 2777: {
b=s.pop(); a=s.pop(); s.push((a * b));
pc=2778; continue;
}
case 2778: {
s.push(180.0);
pc=2781; continue;
}
case 2781: {
b=s.pop(); a=s.pop(); s.push((a / b));
pc=2782; continue;
}
case 2782: {
v=s.splice(s.length-1,1);
s.push(Math.cos(v[0]));
pc=2785; continue;
}
case 2785: {
l[21]=s.pop();
pc=2787; continue;
}
case 2787: {
s.push(l[15]);
pc=2789; continue;
}
case 2789: {
o=s.pop(); s.push(o.c2);
pc=2792; continue;
}
case 2792: {
pc=2793; continue;
}
case 2793: {
s.push(3.141592653589793);
pc=2796; continue;
}
case 2796: {
b=s.pop(); a=s.pop(); s.push((a * b));
pc=2797; continue;
}
case 2797: {
s.push(180.0);
pc=2800; continue;
}
case 2800: {
b=s.pop(); a=s.pop(); s.push((a / b));
pc=2801; continue;
}
case 2801: {
v=s.splice(s.length-1,1);
s.push(Math.sin(v[0]));
pc=2804; continue;
}
case 2804: {
l[23]=s.pop();
pc=2806; continue;
}
case 2806: {
s.push(l[15]);
pc=2808; continue;
}
case 2808: {
s.push(l[15]);
pc=2810; continue;
}
case 2810: {
o=s.pop(); s.push(o.vx);
pc=2813; continue;
}
case 2813: {
s.push(l[21]);
pc=2815; continue;
}
case 2815: {
s.push(l[15]);
pc=2817; continue;
}
case 2817: {
o=s.pop(); s.push(o.c3);
pc=2820; continue;
}
case 2820: {
pc=2821; continue;
}
case 2821: {
b=s.pop(); a=s.pop(); s.push((a * b));
pc=2822; continue;
}
case 2822: {
s.push(J.i(s.pop()));
pc=2823; continue;
}
case 2823: {
b=s.pop(); a=s.pop(); s.push((a + b) | 0);
pc=2824; continue;
}
case 2824: {
v=s.pop(); o=s.pop(); o.x=v;
pc=2827; continue;
}
case 2827: {
s.push(l[15]);
pc=2829; continue;
}
case 2829: {
s.push(l[15]);
pc=2831; continue;
}
case 2831: {
o=s.pop(); s.push(o.vy);
pc=2834; continue;
}
case 2834: {
s.push(l[23]);
pc=2836; continue;
}
case 2836: {
s.push(-s.pop());
pc=2837; continue;
}
case 2837: {
s.push(l[15]);
pc=2839; continue;
}
case 2839: {
o=s.pop(); s.push(o.c3);
pc=2842; continue;
}
case 2842: {
pc=2843; continue;
}
case 2843: {
b=s.pop(); a=s.pop(); s.push((a * b));
pc=2844; continue;
}
case 2844: {
s.push(J.i(s.pop()));
pc=2845; continue;
}
case 2845: {
b=s.pop(); a=s.pop(); s.push((a + b) | 0);
pc=2846; continue;
}
case 2846: {
v=s.pop(); o=s.pop(); o.y=v;
pc=2849; continue;
}
case 2849: {
s.push(l[15]);
pc=2851; continue;
}
case 2851: {
o=s.pop(); s.push(o.x);
pc=2854; continue;
}
case 2854: {
s.push(l[0]);
pc=2855; continue;
}
case 2855: {
o=s.pop(); s.push(o.maps);
pc=2858; continue;
}
case 2858: {
o=s.pop(); s.push(o.wx);
pc=2861; continue;
}
case 2861: {
s.push(32);
pc=2863; continue;
}
case 2863: {
b=s.pop(); a=s.pop(); s.push((a - b) | 0);
pc=2864; continue;
}
case 2864: {
b=s.pop(); a=s.pop();
pc=(a<=b)?2923:2867; continue;
}
case 2867: {
s.push(l[15]);
pc=2869; continue;
}
case 2869: {
o=s.pop(); s.push(o.x);
pc=2872; continue;
}
case 2872: {
s.push(l[0]);
pc=2873; continue;
}
case 2873: {
o=s.pop(); s.push(o.maps);
pc=2876; continue;
}
case 2876: {
o=s.pop(); s.push(o.wx);
pc=2879; continue;
}
case 2879: {
s.push(512);
pc=2882; continue;
}
case 2882: {
b=s.pop(); a=s.pop(); s.push((a + b) | 0);
pc=2883; continue;
}
case 2883: {
b=s.pop(); a=s.pop();
pc=(a>=b)?2923:2886; continue;
}
case 2886: {
s.push(l[15]);
pc=2888; continue;
}
case 2888: {
o=s.pop(); s.push(o.y);
pc=2891; continue;
}
case 2891: {
s.push(l[0]);
pc=2892; continue;
}
case 2892: {
o=s.pop(); s.push(o.maps);
pc=2895; continue;
}
case 2895: {
o=s.pop(); s.push(o.wy);
pc=2898; continue;
}
case 2898: {
s.push(32);
pc=2900; continue;
}
case 2900: {
b=s.pop(); a=s.pop(); s.push((a - b) | 0);
pc=2901; continue;
}
case 2901: {
b=s.pop(); a=s.pop();
pc=(a<=b)?2923:2904; continue;
}
case 2904: {
s.push(l[15]);
pc=2906; continue;
}
case 2906: {
o=s.pop(); s.push(o.y);
pc=2909; continue;
}
case 2909: {
s.push(l[0]);
pc=2910; continue;
}
case 2910: {
o=s.pop(); s.push(o.maps);
pc=2913; continue;
}
case 2913: {
o=s.pop(); s.push(o.wy);
pc=2916; continue;
}
case 2916: {
s.push(320);
pc=2919; continue;
}
case 2919: {
b=s.pop(); a=s.pop(); s.push((a + b) | 0);
pc=2920; continue;
}
case 2920: {
b=s.pop(); a=s.pop();
pc=(a<b)?2931:2923; continue;
}
case 2923: {
s.push(l[15]);
pc=2925; continue;
}
case 2925: {
s.push(-512);
pc=2928; continue;
}
case 2928: {
v=s.pop(); o=s.pop(); o.x=v;
pc=2931; continue;
}
case 2931: {
s.push(l[15]);
pc=2933; continue;
}
case 2933: {
o=s.pop(); s.push(o.c2);
pc=2936; continue;
}
case 2936: {
s.push(22);
pc=2938; continue;
}
case 2938: {
b=s.pop(); a=s.pop();
pc=(a>b)?2958:2941; continue;
}
case 2941: {
s.push(l[15]);
pc=2943; continue;
}
case 2943: {
s.push(236);
pc=2946; continue;
}
case 2946: {
v=s.pop(); o=s.pop(); o.pt=v;
pc=2949; continue;
}
case 2949: {
s.push(l[15]);
pc=2951; continue;
}
case 2951: {
s.push(0);
pc=2952; continue;
}
case 2952: {
v=s.pop(); o=s.pop(); o.pth=v;
pc=2955; continue;
}
case 2955: {
pc=11361; continue;
}
case 2958: {
s.push(l[15]);
pc=2960; continue;
}
case 2960: {
o=s.pop(); s.push(o.c2);
pc=2963; continue;
}
case 2963: {
s.push(67);
pc=2965; continue;
}
case 2965: {
b=s.pop(); a=s.pop();
pc=(a>b)?2985:2968; continue;
}
case 2968: {
s.push(l[15]);
pc=2970; continue;
}
case 2970: {
s.push(235);
pc=2973; continue;
}
case 2973: {
v=s.pop(); o=s.pop(); o.pt=v;
pc=2976; continue;
}
case 2976: {
s.push(l[15]);
pc=2978; continue;
}
case 2978: {
s.push(1);
pc=2979; continue;
}
case 2979: {
v=s.pop(); o=s.pop(); o.pth=v;
pc=2982; continue;
}
case 2982: {
pc=11361; continue;
}
case 2985: {
s.push(l[15]);
pc=2987; continue;
}
case 2987: {
o=s.pop(); s.push(o.c2);
pc=2990; continue;
}
case 2990: {
s.push(113);
pc=2992; continue;
}
case 2992: {
b=s.pop(); a=s.pop();
pc=(a>b)?3012:2995; continue;
}
case 2995: {
s.push(l[15]);
pc=2997; continue;
}
case 2997: {
s.push(234);
pc=3000; continue;
}
case 3000: {
v=s.pop(); o=s.pop(); o.pt=v;
pc=3003; continue;
}
case 3003: {
s.push(l[15]);
pc=3005; continue;
}
case 3005: {
s.push(0);
pc=3006; continue;
}
case 3006: {
v=s.pop(); o=s.pop(); o.pth=v;
pc=3009; continue;
}
case 3009: {
pc=11361; continue;
}
case 3012: {
s.push(l[15]);
pc=3014; continue;
}
case 3014: {
o=s.pop(); s.push(o.c2);
pc=3017; continue;
}
case 3017: {
s.push(158);
pc=3020; continue;
}
case 3020: {
b=s.pop(); a=s.pop();
pc=(a>b)?3040:3023; continue;
}
case 3023: {
s.push(l[15]);
pc=3025; continue;
}
case 3025: {
s.push(235);
pc=3028; continue;
}
case 3028: {
v=s.pop(); o=s.pop(); o.pt=v;
pc=3031; continue;
}
case 3031: {
s.push(l[15]);
pc=3033; continue;
}
case 3033: {
s.push(0);
pc=3034; continue;
}
case 3034: {
v=s.pop(); o=s.pop(); o.pth=v;
pc=3037; continue;
}
case 3037: {
pc=11361; continue;
}
case 3040: {
s.push(l[15]);
pc=3042; continue;
}
case 3042: {
o=s.pop(); s.push(o.c2);
pc=3045; continue;
}
case 3045: {
s.push(202);
pc=3048; continue;
}
case 3048: {
b=s.pop(); a=s.pop();
pc=(a>b)?3068:3051; continue;
}
case 3051: {
s.push(l[15]);
pc=3053; continue;
}
case 3053: {
s.push(236);
pc=3056; continue;
}
case 3056: {
v=s.pop(); o=s.pop(); o.pt=v;
pc=3059; continue;
}
case 3059: {
s.push(l[15]);
pc=3061; continue;
}
case 3061: {
s.push(0);
pc=3062; continue;
}
case 3062: {
v=s.pop(); o=s.pop(); o.pth=v;
pc=3065; continue;
}
case 3065: {
pc=11361; continue;
}
case 3068: {
s.push(l[15]);
pc=3070; continue;
}
case 3070: {
o=s.pop(); s.push(o.c2);
pc=3073; continue;
}
case 3073: {
s.push(247);
pc=3076; continue;
}
case 3076: {
b=s.pop(); a=s.pop();
pc=(a>b)?3096:3079; continue;
}
case 3079: {
s.push(l[15]);
pc=3081; continue;
}
case 3081: {
s.push(235);
pc=3084; continue;
}
case 3084: {
v=s.pop(); o=s.pop(); o.pt=v;
pc=3087; continue;
}
case 3087: {
s.push(l[15]);
pc=3089; continue;
}
case 3089: {
s.push(1);
pc=3090; continue;
}
case 3090: {
v=s.pop(); o=s.pop(); o.pth=v;
pc=3093; continue;
}
case 3093: {
pc=11361; continue;
}
case 3096: {
s.push(l[15]);
pc=3098; continue;
}
case 3098: {
o=s.pop(); s.push(o.c2);
pc=3101; continue;
}
case 3101: {
s.push(293);
pc=3104; continue;
}
case 3104: {
b=s.pop(); a=s.pop();
pc=(a>b)?3124:3107; continue;
}
case 3107: {
s.push(l[15]);
pc=3109; continue;
}
case 3109: {
s.push(234);
pc=3112; continue;
}
case 3112: {
v=s.pop(); o=s.pop(); o.pt=v;
pc=3115; continue;
}
case 3115: {
s.push(l[15]);
pc=3117; continue;
}
case 3117: {
s.push(0);
pc=3118; continue;
}
case 3118: {
v=s.pop(); o=s.pop(); o.pth=v;
pc=3121; continue;
}
case 3121: {
pc=11361; continue;
}
case 3124: {
s.push(l[15]);
pc=3126; continue;
}
case 3126: {
o=s.pop(); s.push(o.c2);
pc=3129; continue;
}
case 3129: {
s.push(338);
pc=3132; continue;
}
case 3132: {
b=s.pop(); a=s.pop();
pc=(a>b)?3152:3135; continue;
}
case 3135: {
s.push(l[15]);
pc=3137; continue;
}
case 3137: {
s.push(235);
pc=3140; continue;
}
case 3140: {
v=s.pop(); o=s.pop(); o.pt=v;
pc=3143; continue;
}
case 3143: {
s.push(l[15]);
pc=3145; continue;
}
case 3145: {
s.push(0);
pc=3146; continue;
}
case 3146: {
v=s.pop(); o=s.pop(); o.pth=v;
pc=3149; continue;
}
case 3149: {
pc=11361; continue;
}
case 3152: {
s.push(l[15]);
pc=3154; continue;
}
case 3154: {
s.push(236);
pc=3157; continue;
}
case 3157: {
v=s.pop(); o=s.pop(); o.pt=v;
pc=3160; continue;
}
case 3160: {
s.push(l[15]);
pc=3162; continue;
}
case 3162: {
s.push(0);
pc=3163; continue;
}
case 3163: {
v=s.pop(); o=s.pop(); o.pth=v;
pc=3166; continue;
}
case 3166: {
pc=11361; continue;
}
case 3169: {
s.push(l[15]);
pc=3171; continue;
}
case 3171: {
o=s.pop(); s.push(o.team);
pc=3174; continue;
}
case 3174: {
a=s.pop();
pc=(a!=0)?3216:3177; continue;
}
case 3177: {
s.push(l[15]);
pc=3179; continue;
}
case 3179: {
s.push(s[s.length-1]);
pc=3180; continue;
}
case 3180: {
o=s.pop(); s.push(o.c2);
pc=3183; continue;
}
case 3183: {
s.push(10);
pc=3185; continue;
}
case 3185: {
b=s.pop(); a=s.pop(); s.push((a + b) | 0);
pc=3186; continue;
}
case 3186: {
v=s.pop(); o=s.pop(); o.c2=v;
pc=3189; continue;
}
case 3189: {
s.push(l[15]);
pc=3191; continue;
}
case 3191: {
o=s.pop(); s.push(o.c2);
pc=3194; continue;
}
case 3194: {
s.push(360);
pc=3197; continue;
}
case 3197: {
b=s.pop(); a=s.pop();
pc=(a<b)?3249:3200; continue;
}
case 3200: {
s.push(l[15]);
pc=3202; continue;
}
case 3202: {
s.push(s[s.length-1]);
pc=3203; continue;
}
case 3203: {
o=s.pop(); s.push(o.c2);
pc=3206; continue;
}
case 3206: {
s.push(360);
pc=3209; continue;
}
case 3209: {
b=s.pop(); a=s.pop(); s.push((a - b) | 0);
pc=3210; continue;
}
case 3210: {
v=s.pop(); o=s.pop(); o.c2=v;
pc=3213; continue;
}
case 3213: {
pc=3249; continue;
}
case 3216: {
s.push(l[15]);
pc=3218; continue;
}
case 3218: {
s.push(s[s.length-1]);
pc=3219; continue;
}
case 3219: {
o=s.pop(); s.push(o.c2);
pc=3222; continue;
}
case 3222: {
s.push(10);
pc=3224; continue;
}
case 3224: {
b=s.pop(); a=s.pop(); s.push((a - b) | 0);
pc=3225; continue;
}
case 3225: {
v=s.pop(); o=s.pop(); o.c2=v;
pc=3228; continue;
}
case 3228: {
s.push(l[15]);
pc=3230; continue;
}
case 3230: {
o=s.pop(); s.push(o.c2);
pc=3233; continue;
}
case 3233: {
a=s.pop();
pc=(a>=0)?3249:3236; continue;
}
case 3236: {
s.push(l[15]);
pc=3238; continue;
}
case 3238: {
s.push(s[s.length-1]);
pc=3239; continue;
}
case 3239: {
o=s.pop(); s.push(o.c2);
pc=3242; continue;
}
case 3242: {
s.push(360);
pc=3245; continue;
}
case 3245: {
b=s.pop(); a=s.pop(); s.push((a + b) | 0);
pc=3246; continue;
}
case 3246: {
v=s.pop(); o=s.pop(); o.c2=v;
pc=3249; continue;
}
case 3249: {
s.push(l[15]);
pc=3251; continue;
}
case 3251: {
s.push(s[s.length-1]);
pc=3252; continue;
}
case 3252: {
o=s.pop(); s.push(o.c3);
pc=3255; continue;
}
case 3255: {
s.push(3);
pc=3256; continue;
}
case 3256: {
b=s.pop(); a=s.pop(); s.push((a + b) | 0);
pc=3257; continue;
}
case 3257: {
v=s.pop(); o=s.pop(); o.c3=v;
pc=3260; continue;
}
case 3260: {
s.push(l[15]);
pc=3262; continue;
}
case 3262: {
o=s.pop(); s.push(o.c3);
pc=3265; continue;
}
case 3265: {
s.push(175);
pc=3268; continue;
}
case 3268: {
b=s.pop(); a=s.pop();
pc=(a<=b)?3277:3271; continue;
}
case 3271: {
s.push(l[15]);
pc=3273; continue;
}
case 3273: {
s.push(0);
pc=3274; continue;
}
case 3274: {
v=s.pop(); o=s.pop(); o.c=v;
pc=3277; continue;
}
case 3277: {
s.push(l[15]);
pc=3279; continue;
}
case 3279: {
o=s.pop(); s.push(o.c2);
pc=3282; continue;
}
case 3282: {
pc=3283; continue;
}
case 3283: {
s.push(3.141592653589793);
pc=3286; continue;
}
case 3286: {
b=s.pop(); a=s.pop(); s.push((a * b));
pc=3287; continue;
}
case 3287: {
s.push(180.0);
pc=3290; continue;
}
case 3290: {
b=s.pop(); a=s.pop(); s.push((a / b));
pc=3291; continue;
}
case 3291: {
v=s.splice(s.length-1,1);
s.push(Math.cos(v[0]));
pc=3294; continue;
}
case 3294: {
l[21]=s.pop();
pc=3296; continue;
}
case 3296: {
s.push(l[15]);
pc=3298; continue;
}
case 3298: {
o=s.pop(); s.push(o.c2);
pc=3301; continue;
}
case 3301: {
pc=3302; continue;
}
case 3302: {
s.push(3.141592653589793);
pc=3305; continue;
}
case 3305: {
b=s.pop(); a=s.pop(); s.push((a * b));
pc=3306; continue;
}
case 3306: {
s.push(180.0);
pc=3309; continue;
}
case 3309: {
b=s.pop(); a=s.pop(); s.push((a / b));
pc=3310; continue;
}
case 3310: {
v=s.splice(s.length-1,1);
s.push(Math.sin(v[0]));
pc=3313; continue;
}
case 3313: {
l[23]=s.pop();
pc=3315; continue;
}
case 3315: {
s.push(l[15]);
pc=3317; continue;
}
case 3317: {
s.push(l[15]);
pc=3319; continue;
}
case 3319: {
o=s.pop(); s.push(o.vx);
pc=3322; continue;
}
case 3322: {
s.push(l[21]);
pc=3324; continue;
}
case 3324: {
s.push(l[15]);
pc=3326; continue;
}
case 3326: {
o=s.pop(); s.push(o.c3);
pc=3329; continue;
}
case 3329: {
pc=3330; continue;
}
case 3330: {
b=s.pop(); a=s.pop(); s.push((a * b));
pc=3331; continue;
}
case 3331: {
s.push(J.i(s.pop()));
pc=3332; continue;
}
case 3332: {
b=s.pop(); a=s.pop(); s.push((a + b) | 0);
pc=3333; continue;
}
case 3333: {
v=s.pop(); o=s.pop(); o.x=v;
pc=3336; continue;
}
case 3336: {
s.push(l[15]);
pc=3338; continue;
}
case 3338: {
s.push(l[15]);
pc=3340; continue;
}
case 3340: {
o=s.pop(); s.push(o.vy);
pc=3343; continue;
}
case 3343: {
s.push(l[23]);
pc=3345; continue;
}
case 3345: {
s.push(-s.pop());
pc=3346; continue;
}
case 3346: {
s.push(l[15]);
pc=3348; continue;
}
case 3348: {
o=s.pop(); s.push(o.c3);
pc=3351; continue;
}
case 3351: {
pc=3352; continue;
}
case 3352: {
b=s.pop(); a=s.pop(); s.push((a * b));
pc=3353; continue;
}
case 3353: {
s.push(J.i(s.pop()));
pc=3354; continue;
}
case 3354: {
b=s.pop(); a=s.pop(); s.push((a + b) | 0);
pc=3355; continue;
}
case 3355: {
v=s.pop(); o=s.pop(); o.y=v;
pc=3358; continue;
}
case 3358: {
s.push(l[15]);
pc=3360; continue;
}
case 3360: {
o=s.pop(); s.push(o.x);
pc=3363; continue;
}
case 3363: {
s.push(l[0]);
pc=3364; continue;
}
case 3364: {
o=s.pop(); s.push(o.maps);
pc=3367; continue;
}
case 3367: {
o=s.pop(); s.push(o.wx);
pc=3370; continue;
}
case 3370: {
s.push(32);
pc=3372; continue;
}
case 3372: {
b=s.pop(); a=s.pop(); s.push((a - b) | 0);
pc=3373; continue;
}
case 3373: {
b=s.pop(); a=s.pop();
pc=(a<=b)?3432:3376; continue;
}
case 3376: {
s.push(l[15]);
pc=3378; continue;
}
case 3378: {
o=s.pop(); s.push(o.x);
pc=3381; continue;
}
case 3381: {
s.push(l[0]);
pc=3382; continue;
}
case 3382: {
o=s.pop(); s.push(o.maps);
pc=3385; continue;
}
case 3385: {
o=s.pop(); s.push(o.wx);
pc=3388; continue;
}
case 3388: {
s.push(512);
pc=3391; continue;
}
case 3391: {
b=s.pop(); a=s.pop(); s.push((a + b) | 0);
pc=3392; continue;
}
case 3392: {
b=s.pop(); a=s.pop();
pc=(a>=b)?3432:3395; continue;
}
case 3395: {
s.push(l[15]);
pc=3397; continue;
}
case 3397: {
o=s.pop(); s.push(o.y);
pc=3400; continue;
}
case 3400: {
s.push(l[0]);
pc=3401; continue;
}
case 3401: {
o=s.pop(); s.push(o.maps);
pc=3404; continue;
}
case 3404: {
o=s.pop(); s.push(o.wy);
pc=3407; continue;
}
case 3407: {
s.push(32);
pc=3409; continue;
}
case 3409: {
b=s.pop(); a=s.pop(); s.push((a - b) | 0);
pc=3410; continue;
}
case 3410: {
b=s.pop(); a=s.pop();
pc=(a<=b)?3432:3413; continue;
}
case 3413: {
s.push(l[15]);
pc=3415; continue;
}
case 3415: {
o=s.pop(); s.push(o.y);
pc=3418; continue;
}
case 3418: {
s.push(l[0]);
pc=3419; continue;
}
case 3419: {
o=s.pop(); s.push(o.maps);
pc=3422; continue;
}
case 3422: {
o=s.pop(); s.push(o.wy);
pc=3425; continue;
}
case 3425: {
s.push(320);
pc=3428; continue;
}
case 3428: {
b=s.pop(); a=s.pop(); s.push((a + b) | 0);
pc=3429; continue;
}
case 3429: {
b=s.pop(); a=s.pop();
pc=(a<b)?3440:3432; continue;
}
case 3432: {
s.push(l[15]);
pc=3434; continue;
}
case 3434: {
s.push(-512);
pc=3437; continue;
}
case 3437: {
v=s.pop(); o=s.pop(); o.x=v;
pc=3440; continue;
}
case 3440: {
s.push(l[15]);
pc=3442; continue;
}
case 3442: {
o=s.pop(); s.push(o.c2);
pc=3445; continue;
}
case 3445: {
s.push(22);
pc=3447; continue;
}
case 3447: {
b=s.pop(); a=s.pop();
pc=(a>b)?3467:3450; continue;
}
case 3450: {
s.push(l[15]);
pc=3452; continue;
}
case 3452: {
s.push(264);
pc=3455; continue;
}
case 3455: {
v=s.pop(); o=s.pop(); o.pt=v;
pc=3458; continue;
}
case 3458: {
s.push(l[15]);
pc=3460; continue;
}
case 3460: {
s.push(0);
pc=3461; continue;
}
case 3461: {
v=s.pop(); o=s.pop(); o.pth=v;
pc=3464; continue;
}
case 3464: {
pc=11361; continue;
}
case 3467: {
s.push(l[15]);
pc=3469; continue;
}
case 3469: {
o=s.pop(); s.push(o.c2);
pc=3472; continue;
}
case 3472: {
s.push(67);
pc=3474; continue;
}
case 3474: {
b=s.pop(); a=s.pop();
pc=(a>b)?3494:3477; continue;
}
case 3477: {
s.push(l[15]);
pc=3479; continue;
}
case 3479: {
s.push(263);
pc=3482; continue;
}
case 3482: {
v=s.pop(); o=s.pop(); o.pt=v;
pc=3485; continue;
}
case 3485: {
s.push(l[15]);
pc=3487; continue;
}
case 3487: {
s.push(1);
pc=3488; continue;
}
case 3488: {
v=s.pop(); o=s.pop(); o.pth=v;
pc=3491; continue;
}
case 3491: {
pc=11361; continue;
}
case 3494: {
s.push(l[15]);
pc=3496; continue;
}
case 3496: {
o=s.pop(); s.push(o.c2);
pc=3499; continue;
}
case 3499: {
s.push(113);
pc=3501; continue;
}
case 3501: {
b=s.pop(); a=s.pop();
pc=(a>b)?3521:3504; continue;
}
case 3504: {
s.push(l[15]);
pc=3506; continue;
}
case 3506: {
s.push(262);
pc=3509; continue;
}
case 3509: {
v=s.pop(); o=s.pop(); o.pt=v;
pc=3512; continue;
}
case 3512: {
s.push(l[15]);
pc=3514; continue;
}
case 3514: {
s.push(0);
pc=3515; continue;
}
case 3515: {
v=s.pop(); o=s.pop(); o.pth=v;
pc=3518; continue;
}
case 3518: {
pc=11361; continue;
}
case 3521: {
s.push(l[15]);
pc=3523; continue;
}
case 3523: {
o=s.pop(); s.push(o.c2);
pc=3526; continue;
}
case 3526: {
s.push(158);
pc=3529; continue;
}
case 3529: {
b=s.pop(); a=s.pop();
pc=(a>b)?3549:3532; continue;
}
case 3532: {
s.push(l[15]);
pc=3534; continue;
}
case 3534: {
s.push(263);
pc=3537; continue;
}
case 3537: {
v=s.pop(); o=s.pop(); o.pt=v;
pc=3540; continue;
}
case 3540: {
s.push(l[15]);
pc=3542; continue;
}
case 3542: {
s.push(0);
pc=3543; continue;
}
case 3543: {
v=s.pop(); o=s.pop(); o.pth=v;
pc=3546; continue;
}
case 3546: {
pc=11361; continue;
}
case 3549: {
s.push(l[15]);
pc=3551; continue;
}
case 3551: {
o=s.pop(); s.push(o.c2);
pc=3554; continue;
}
case 3554: {
s.push(202);
pc=3557; continue;
}
case 3557: {
b=s.pop(); a=s.pop();
pc=(a>b)?3577:3560; continue;
}
case 3560: {
s.push(l[15]);
pc=3562; continue;
}
case 3562: {
s.push(264);
pc=3565; continue;
}
case 3565: {
v=s.pop(); o=s.pop(); o.pt=v;
pc=3568; continue;
}
case 3568: {
s.push(l[15]);
pc=3570; continue;
}
case 3570: {
s.push(0);
pc=3571; continue;
}
case 3571: {
v=s.pop(); o=s.pop(); o.pth=v;
pc=3574; continue;
}
case 3574: {
pc=11361; continue;
}
case 3577: {
s.push(l[15]);
pc=3579; continue;
}
case 3579: {
o=s.pop(); s.push(o.c2);
pc=3582; continue;
}
case 3582: {
s.push(247);
pc=3585; continue;
}
case 3585: {
b=s.pop(); a=s.pop();
pc=(a>b)?3605:3588; continue;
}
case 3588: {
s.push(l[15]);
pc=3590; continue;
}
case 3590: {
s.push(263);
pc=3593; continue;
}
case 3593: {
v=s.pop(); o=s.pop(); o.pt=v;
pc=3596; continue;
}
case 3596: {
s.push(l[15]);
pc=3598; continue;
}
case 3598: {
s.push(1);
pc=3599; continue;
}
case 3599: {
v=s.pop(); o=s.pop(); o.pth=v;
pc=3602; continue;
}
case 3602: {
pc=11361; continue;
}
case 3605: {
s.push(l[15]);
pc=3607; continue;
}
case 3607: {
o=s.pop(); s.push(o.c2);
pc=3610; continue;
}
case 3610: {
s.push(293);
pc=3613; continue;
}
case 3613: {
b=s.pop(); a=s.pop();
pc=(a>b)?3633:3616; continue;
}
case 3616: {
s.push(l[15]);
pc=3618; continue;
}
case 3618: {
s.push(262);
pc=3621; continue;
}
case 3621: {
v=s.pop(); o=s.pop(); o.pt=v;
pc=3624; continue;
}
case 3624: {
s.push(l[15]);
pc=3626; continue;
}
case 3626: {
s.push(0);
pc=3627; continue;
}
case 3627: {
v=s.pop(); o=s.pop(); o.pth=v;
pc=3630; continue;
}
case 3630: {
pc=11361; continue;
}
case 3633: {
s.push(l[15]);
pc=3635; continue;
}
case 3635: {
o=s.pop(); s.push(o.c2);
pc=3638; continue;
}
case 3638: {
s.push(338);
pc=3641; continue;
}
case 3641: {
b=s.pop(); a=s.pop();
pc=(a>b)?3661:3644; continue;
}
case 3644: {
s.push(l[15]);
pc=3646; continue;
}
case 3646: {
s.push(263);
pc=3649; continue;
}
case 3649: {
v=s.pop(); o=s.pop(); o.pt=v;
pc=3652; continue;
}
case 3652: {
s.push(l[15]);
pc=3654; continue;
}
case 3654: {
s.push(0);
pc=3655; continue;
}
case 3655: {
v=s.pop(); o=s.pop(); o.pth=v;
pc=3658; continue;
}
case 3658: {
pc=11361; continue;
}
case 3661: {
s.push(l[15]);
pc=3663; continue;
}
case 3663: {
s.push(264);
pc=3666; continue;
}
case 3666: {
v=s.pop(); o=s.pop(); o.pt=v;
pc=3669; continue;
}
case 3669: {
s.push(l[15]);
pc=3671; continue;
}
case 3671: {
s.push(0);
pc=3672; continue;
}
case 3672: {
v=s.pop(); o=s.pop(); o.pth=v;
pc=3675; continue;
}
case 3675: {
pc=11361; continue;
}
case 3678: {
s.push(l[15]);
pc=3680; continue;
}
case 3680: {
s.push(s[s.length-1]);
pc=3681; continue;
}
case 3681: {
o=s.pop(); s.push(o.x);
pc=3684; continue;
}
case 3684: {
s.push(l[15]);
pc=3686; continue;
}
case 3686: {
o=s.pop(); s.push(o.vx);
pc=3689; continue;
}
case 3689: {
s.push(10);
pc=3691; continue;
}
case 3691: {
b=s.pop(); a=s.pop(); s.push(J.div(a,b));
pc=3692; continue;
}
case 3692: {
b=s.pop(); a=s.pop(); s.push((a + b) | 0);
pc=3693; continue;
}
case 3693: {
v=s.pop(); o=s.pop(); o.x=v;
pc=3696; continue;
}
case 3696: {
s.push(l[15]);
pc=3698; continue;
}
case 3698: {
s.push(s[s.length-1]);
pc=3699; continue;
}
case 3699: {
o=s.pop(); s.push(o.y);
pc=3702; continue;
}
case 3702: {
s.push(l[15]);
pc=3704; continue;
}
case 3704: {
o=s.pop(); s.push(o.vy);
pc=3707; continue;
}
case 3707: {
s.push(10);
pc=3709; continue;
}
case 3709: {
b=s.pop(); a=s.pop(); s.push(J.div(a,b));
pc=3710; continue;
}
case 3710: {
b=s.pop(); a=s.pop(); s.push((a + b) | 0);
pc=3711; continue;
}
case 3711: {
v=s.pop(); o=s.pop(); o.y=v;
pc=3714; continue;
}
case 3714: {
s.push(l[15]);
pc=3716; continue;
}
case 3716: {
o=s.pop(); s.push(o.x);
pc=3719; continue;
}
case 3719: {
s.push(l[0]);
pc=3720; continue;
}
case 3720: {
o=s.pop(); s.push(o.maps);
pc=3723; continue;
}
case 3723: {
o=s.pop(); s.push(o.wx);
pc=3726; continue;
}
case 3726: {
s.push(32);
pc=3728; continue;
}
case 3728: {
b=s.pop(); a=s.pop(); s.push((a - b) | 0);
pc=3729; continue;
}
case 3729: {
s.push(64);
pc=3731; continue;
}
case 3731: {
b=s.pop(); a=s.pop(); s.push((a - b) | 0);
pc=3732; continue;
}
case 3732: {
b=s.pop(); a=s.pop();
pc=(a<=b)?3757:3735; continue;
}
case 3735: {
s.push(l[15]);
pc=3737; continue;
}
case 3737: {
o=s.pop(); s.push(o.x);
pc=3740; continue;
}
case 3740: {
s.push(l[0]);
pc=3741; continue;
}
case 3741: {
o=s.pop(); s.push(o.maps);
pc=3744; continue;
}
case 3744: {
o=s.pop(); s.push(o.wx);
pc=3747; continue;
}
case 3747: {
s.push(512);
pc=3750; continue;
}
case 3750: {
b=s.pop(); a=s.pop(); s.push((a + b) | 0);
pc=3751; continue;
}
case 3751: {
s.push(64);
pc=3753; continue;
}
case 3753: {
b=s.pop(); a=s.pop(); s.push((a + b) | 0);
pc=3754; continue;
}
case 3754: {
b=s.pop(); a=s.pop();
pc=(a<b)?3766:3757; continue;
}
case 3757: {
s.push(l[15]);
pc=3759; continue;
}
case 3759: {
s.push(0);
pc=3760; continue;
}
case 3760: {
v=s.pop(); o=s.pop(); o.c=v;
pc=3763; continue;
}
case 3763: {
pc=3812; continue;
}
case 3766: {
s.push(l[15]);
pc=3768; continue;
}
case 3768: {
o=s.pop(); s.push(o.y);
pc=3771; continue;
}
case 3771: {
s.push(l[0]);
pc=3772; continue;
}
case 3772: {
o=s.pop(); s.push(o.maps);
pc=3775; continue;
}
case 3775: {
o=s.pop(); s.push(o.wy);
pc=3778; continue;
}
case 3778: {
s.push(32);
pc=3780; continue;
}
case 3780: {
b=s.pop(); a=s.pop(); s.push((a - b) | 0);
pc=3781; continue;
}
case 3781: {
b=s.pop(); a=s.pop();
pc=(a<=b)?3806:3784; continue;
}
case 3784: {
s.push(l[15]);
pc=3786; continue;
}
case 3786: {
o=s.pop(); s.push(o.y);
pc=3789; continue;
}
case 3789: {
s.push(l[0]);
pc=3790; continue;
}
case 3790: {
o=s.pop(); s.push(o.maps);
pc=3793; continue;
}
case 3793: {
o=s.pop(); s.push(o.wy);
pc=3796; continue;
}
case 3796: {
s.push(320);
pc=3799; continue;
}
case 3799: {
b=s.pop(); a=s.pop(); s.push((a + b) | 0);
pc=3800; continue;
}
case 3800: {
s.push(32);
pc=3802; continue;
}
case 3802: {
b=s.pop(); a=s.pop(); s.push((a + b) | 0);
pc=3803; continue;
}
case 3803: {
b=s.pop(); a=s.pop();
pc=(a<b)?3812:3806; continue;
}
case 3806: {
s.push(l[15]);
pc=3808; continue;
}
case 3808: {
s.push(0);
pc=3809; continue;
}
case 3809: {
v=s.pop(); o=s.pop(); o.c=v;
pc=3812; continue;
}
case 3812: {
s.push(l[15]);
pc=3814; continue;
}
case 3814: {
s.push(s[s.length-1]);
pc=3815; continue;
}
case 3815: {
o=s.pop(); s.push(o.c1);
pc=3818; continue;
}
case 3818: {
s.push(1);
pc=3819; continue;
}
case 3819: {
b=s.pop(); a=s.pop(); s.push((a + b) | 0);
pc=3820; continue;
}
case 3820: {
v=s.pop(); o=s.pop(); o.c1=v;
pc=3823; continue;
}
case 3823: {
s.push(l[15]);
pc=3825; continue;
}
case 3825: {
o=s.pop(); s.push(o.c1);
pc=3828; continue;
}
case 3828: {
s.push(18);
pc=3830; continue;
}
case 3830: {
b=s.pop(); a=s.pop();
pc=(a<=b)?3839:3833; continue;
}
case 3833: {
s.push(l[15]);
pc=3835; continue;
}
case 3835: {
s.push(0);
pc=3836; continue;
}
case 3836: {
v=s.pop(); o=s.pop(); o.c=v;
pc=3839; continue;
}
case 3839: {
s.push(l[15]);
pc=3841; continue;
}
case 3841: {
s.push(1300);
pc=3844; continue;
}
case 3844: {
v=s.pop(); o=s.pop(); o.pt=v;
pc=3847; continue;
}
case 3847: {
s.push(l[15]);
pc=3849; continue;
}
case 3849: {
s.push(0);
pc=3850; continue;
}
case 3850: {
v=s.pop(); o=s.pop(); o.pth=v;
pc=3853; continue;
}
case 3853: {
pc=11361; continue;
}
case 3856: {
s.push(l[15]);
pc=3858; continue;
}
case 3858: {
s.push(s[s.length-1]);
pc=3859; continue;
}
case 3859: {
o=s.pop(); s.push(o.x);
pc=3862; continue;
}
case 3862: {
s.push(l[15]);
pc=3864; continue;
}
case 3864: {
o=s.pop(); s.push(o.vx);
pc=3867; continue;
}
case 3867: {
s.push(10);
pc=3869; continue;
}
case 3869: {
b=s.pop(); a=s.pop(); s.push(J.div(a,b));
pc=3870; continue;
}
case 3870: {
b=s.pop(); a=s.pop(); s.push((a + b) | 0);
pc=3871; continue;
}
case 3871: {
v=s.pop(); o=s.pop(); o.x=v;
pc=3874; continue;
}
case 3874: {
s.push(l[15]);
pc=3876; continue;
}
case 3876: {
s.push(245);
pc=3879; continue;
}
case 3879: {
v=s.pop(); o=s.pop(); o.pt=v;
pc=3882; continue;
}
case 3882: {
s.push(l[15]);
pc=3884; continue;
}
case 3884: {
s.push(0);
pc=3885; continue;
}
case 3885: {
v=s.pop(); o=s.pop(); o.pth=v;
pc=3888; continue;
}
case 3888: {
s.push(l[15]);
pc=3890; continue;
}
case 3890: {
s.push(s[s.length-1]);
pc=3891; continue;
}
case 3891: {
o=s.pop(); s.push(o.vy);
pc=3894; continue;
}
case 3894: {
s.push(15);
pc=3896; continue;
}
case 3896: {
b=s.pop(); a=s.pop(); s.push((a + b) | 0);
pc=3897; continue;
}
case 3897: {
v=s.pop(); o=s.pop(); o.vy=v;
pc=3900; continue;
}
case 3900: {
s.push(l[15]);
pc=3902; continue;
}
case 3902: {
o=s.pop(); s.push(o.vy);
pc=3905; continue;
}
case 3905: {
a=s.pop();
pc=(a<0)?3922:3908; continue;
}
case 3908: {
s.push(l[15]);
pc=3910; continue;
}
case 3910: {
s.push(0);
pc=3911; continue;
}
case 3911: {
v=s.pop(); o=s.pop(); o.vx=v;
pc=3914; continue;
}
case 3914: {
s.push(l[15]);
pc=3916; continue;
}
case 3916: {
s.push(246);
pc=3919; continue;
}
case 3919: {
v=s.pop(); o=s.pop(); o.pt=v;
pc=3922; continue;
}
case 3922: {
s.push(l[15]);
pc=3924; continue;
}
case 3924: {
o=s.pop(); s.push(o.vy);
pc=3927; continue;
}
case 3927: {
s.push(100);
pc=3929; continue;
}
case 3929: {
b=s.pop(); a=s.pop();
pc=(a<=b)?3939:3932; continue;
}
case 3932: {
s.push(l[15]);
pc=3934; continue;
}
case 3934: {
s.push(100);
pc=3936; continue;
}
case 3936: {
v=s.pop(); o=s.pop(); o.vy=v;
pc=3939; continue;
}
case 3939: {
s.push(l[15]);
pc=3941; continue;
}
case 3941: {
s.push(s[s.length-1]);
pc=3942; continue;
}
case 3942: {
o=s.pop(); s.push(o.y);
pc=3945; continue;
}
case 3945: {
s.push(l[15]);
pc=3947; continue;
}
case 3947: {
o=s.pop(); s.push(o.vy);
pc=3950; continue;
}
case 3950: {
s.push(10);
pc=3952; continue;
}
case 3952: {
b=s.pop(); a=s.pop(); s.push(J.div(a,b));
pc=3953; continue;
}
case 3953: {
b=s.pop(); a=s.pop(); s.push((a + b) | 0);
pc=3954; continue;
}
case 3954: {
v=s.pop(); o=s.pop(); o.y=v;
pc=3957; continue;
}
case 3957: {
s.push(l[0]);
pc=3958; continue;
}
case 3958: {
o=s.pop(); s.push(o.maps);
pc=3961; continue;
}
case 3961: {
s.push(l[15]);
pc=3963; continue;
}
case 3963: {
o=s.pop(); s.push(o.x);
pc=3966; continue;
}
case 3966: {
s.push(15);
pc=3968; continue;
}
case 3968: {
b=s.pop(); a=s.pop(); s.push((a + b) | 0);
pc=3969; continue;
}
case 3969: {
s.push(l[15]);
pc=3971; continue;
}
case 3971: {
o=s.pop(); s.push(o.y);
pc=3974; continue;
}
case 3974: {
s.push(15);
pc=3976; continue;
}
case 3976: {
b=s.pop(); a=s.pop(); s.push((a + b) | 0);
pc=3977; continue;
}
case 3977: {
v=s.splice(s.length-2,2);
o=s.pop();
s.push(o.getBGCode$2(v[0],v[1]));
pc=3980; continue;
}
case 3980: {
s.push(20);
pc=3982; continue;
}
case 3982: {
b=s.pop(); a=s.pop();
pc=(a<b)?3991:3985; continue;
}
case 3985: {
s.push(l[15]);
pc=3987; continue;
}
case 3987: {
s.push(0);
pc=3988; continue;
}
case 3988: {
v=s.pop(); o=s.pop(); o.c=v;
pc=3991; continue;
}
case 3991: {
s.push(l[15]);
pc=3993; continue;
}
case 3993: {
o=s.pop(); s.push(o.x);
pc=3996; continue;
}
case 3996: {
s.push(l[0]);
pc=3997; continue;
}
case 3997: {
o=s.pop(); s.push(o.maps);
pc=4000; continue;
}
case 4000: {
o=s.pop(); s.push(o.wx);
pc=4003; continue;
}
case 4003: {
s.push(32);
pc=4005; continue;
}
case 4005: {
b=s.pop(); a=s.pop(); s.push((a - b) | 0);
pc=4006; continue;
}
case 4006: {
s.push(64);
pc=4008; continue;
}
case 4008: {
b=s.pop(); a=s.pop(); s.push((a - b) | 0);
pc=4009; continue;
}
case 4009: {
b=s.pop(); a=s.pop();
pc=(a<=b)?4034:4012; continue;
}
case 4012: {
s.push(l[15]);
pc=4014; continue;
}
case 4014: {
o=s.pop(); s.push(o.x);
pc=4017; continue;
}
case 4017: {
s.push(l[0]);
pc=4018; continue;
}
case 4018: {
o=s.pop(); s.push(o.maps);
pc=4021; continue;
}
case 4021: {
o=s.pop(); s.push(o.wx);
pc=4024; continue;
}
case 4024: {
s.push(512);
pc=4027; continue;
}
case 4027: {
b=s.pop(); a=s.pop(); s.push((a + b) | 0);
pc=4028; continue;
}
case 4028: {
s.push(64);
pc=4030; continue;
}
case 4030: {
b=s.pop(); a=s.pop(); s.push((a + b) | 0);
pc=4031; continue;
}
case 4031: {
b=s.pop(); a=s.pop();
pc=(a<b)?4043:4034; continue;
}
case 4034: {
s.push(l[15]);
pc=4036; continue;
}
case 4036: {
s.push(0);
pc=4037; continue;
}
case 4037: {
v=s.pop(); o=s.pop(); o.c=v;
pc=4040; continue;
}
case 4040: {
pc=11361; continue;
}
case 4043: {
s.push(l[15]);
pc=4045; continue;
}
case 4045: {
o=s.pop(); s.push(o.y);
pc=4048; continue;
}
case 4048: {
s.push(l[0]);
pc=4049; continue;
}
case 4049: {
o=s.pop(); s.push(o.maps);
pc=4052; continue;
}
case 4052: {
o=s.pop(); s.push(o.wy);
pc=4055; continue;
}
case 4055: {
s.push(320);
pc=4058; continue;
}
case 4058: {
b=s.pop(); a=s.pop(); s.push((a + b) | 0);
pc=4059; continue;
}
case 4059: {
s.push(32);
pc=4061; continue;
}
case 4061: {
b=s.pop(); a=s.pop(); s.push((a + b) | 0);
pc=4062; continue;
}
case 4062: {
b=s.pop(); a=s.pop();
pc=(a<b)?11361:4065; continue;
}
case 4065: {
s.push(l[15]);
pc=4067; continue;
}
case 4067: {
s.push(0);
pc=4068; continue;
}
case 4068: {
v=s.pop(); o=s.pop(); o.c=v;
pc=4071; continue;
}
case 4071: {
pc=11361; continue;
}
case 4074: {
s.push(l[15]);
pc=4076; continue;
}
case 4076: {
s.push(s[s.length-1]);
pc=4077; continue;
}
case 4077: {
o=s.pop(); s.push(o.x);
pc=4080; continue;
}
case 4080: {
s.push(l[15]);
pc=4082; continue;
}
case 4082: {
o=s.pop(); s.push(o.vx);
pc=4085; continue;
}
case 4085: {
s.push(10);
pc=4087; continue;
}
case 4087: {
b=s.pop(); a=s.pop(); s.push(J.div(a,b));
pc=4088; continue;
}
case 4088: {
b=s.pop(); a=s.pop(); s.push((a + b) | 0);
pc=4089; continue;
}
case 4089: {
v=s.pop(); o=s.pop(); o.x=v;
pc=4092; continue;
}
case 4092: {
s.push(l[15]);
pc=4094; continue;
}
case 4094: {
s.push(247);
pc=4097; continue;
}
case 4097: {
v=s.pop(); o=s.pop(); o.pt=v;
pc=4100; continue;
}
case 4100: {
s.push(l[15]);
pc=4102; continue;
}
case 4102: {
s.push(0);
pc=4103; continue;
}
case 4103: {
v=s.pop(); o=s.pop(); o.pth=v;
pc=4106; continue;
}
case 4106: {
s.push(l[15]);
pc=4108; continue;
}
case 4108: {
s.push(s[s.length-1]);
pc=4109; continue;
}
case 4109: {
o=s.pop(); s.push(o.vy);
pc=4112; continue;
}
case 4112: {
s.push(15);
pc=4114; continue;
}
case 4114: {
b=s.pop(); a=s.pop(); s.push((a + b) | 0);
pc=4115; continue;
}
case 4115: {
v=s.pop(); o=s.pop(); o.vy=v;
pc=4118; continue;
}
case 4118: {
s.push(l[15]);
pc=4120; continue;
}
case 4120: {
o=s.pop(); s.push(o.vy);
pc=4123; continue;
}
case 4123: {
a=s.pop();
pc=(a<0)?4140:4126; continue;
}
case 4126: {
s.push(l[15]);
pc=4128; continue;
}
case 4128: {
s.push(0);
pc=4129; continue;
}
case 4129: {
v=s.pop(); o=s.pop(); o.vx=v;
pc=4132; continue;
}
case 4132: {
s.push(l[15]);
pc=4134; continue;
}
case 4134: {
s.push(248);
pc=4137; continue;
}
case 4137: {
v=s.pop(); o=s.pop(); o.pt=v;
pc=4140; continue;
}
case 4140: {
s.push(l[15]);
pc=4142; continue;
}
case 4142: {
o=s.pop(); s.push(o.vy);
pc=4145; continue;
}
case 4145: {
s.push(100);
pc=4147; continue;
}
case 4147: {
b=s.pop(); a=s.pop();
pc=(a<=b)?4157:4150; continue;
}
case 4150: {
s.push(l[15]);
pc=4152; continue;
}
case 4152: {
s.push(100);
pc=4154; continue;
}
case 4154: {
v=s.pop(); o=s.pop(); o.vy=v;
pc=4157; continue;
}
case 4157: {
s.push(l[15]);
pc=4159; continue;
}
case 4159: {
s.push(s[s.length-1]);
pc=4160; continue;
}
case 4160: {
o=s.pop(); s.push(o.y);
pc=4163; continue;
}
case 4163: {
s.push(l[15]);
pc=4165; continue;
}
case 4165: {
o=s.pop(); s.push(o.vy);
pc=4168; continue;
}
case 4168: {
s.push(10);
pc=4170; continue;
}
case 4170: {
b=s.pop(); a=s.pop(); s.push(J.div(a,b));
pc=4171; continue;
}
case 4171: {
b=s.pop(); a=s.pop(); s.push((a + b) | 0);
pc=4172; continue;
}
case 4172: {
v=s.pop(); o=s.pop(); o.y=v;
pc=4175; continue;
}
case 4175: {
s.push(l[0]);
pc=4176; continue;
}
case 4176: {
o=s.pop(); s.push(o.maps);
pc=4179; continue;
}
case 4179: {
s.push(l[15]);
pc=4181; continue;
}
case 4181: {
o=s.pop(); s.push(o.x);
pc=4184; continue;
}
case 4184: {
s.push(15);
pc=4186; continue;
}
case 4186: {
b=s.pop(); a=s.pop(); s.push((a + b) | 0);
pc=4187; continue;
}
case 4187: {
s.push(l[15]);
pc=4189; continue;
}
case 4189: {
o=s.pop(); s.push(o.y);
pc=4192; continue;
}
case 4192: {
s.push(15);
pc=4194; continue;
}
case 4194: {
b=s.pop(); a=s.pop(); s.push((a + b) | 0);
pc=4195; continue;
}
case 4195: {
v=s.splice(s.length-2,2);
o=s.pop();
s.push(o.getBGCode$2(v[0],v[1]));
pc=4198; continue;
}
case 4198: {
s.push(20);
pc=4200; continue;
}
case 4200: {
b=s.pop(); a=s.pop();
pc=(a<b)?4209:4203; continue;
}
case 4203: {
s.push(l[15]);
pc=4205; continue;
}
case 4205: {
s.push(0);
pc=4206; continue;
}
case 4206: {
v=s.pop(); o=s.pop(); o.c=v;
pc=4209; continue;
}
case 4209: {
s.push(l[15]);
pc=4211; continue;
}
case 4211: {
o=s.pop(); s.push(o.x);
pc=4214; continue;
}
case 4214: {
s.push(l[0]);
pc=4215; continue;
}
case 4215: {
o=s.pop(); s.push(o.maps);
pc=4218; continue;
}
case 4218: {
o=s.pop(); s.push(o.wx);
pc=4221; continue;
}
case 4221: {
s.push(32);
pc=4223; continue;
}
case 4223: {
b=s.pop(); a=s.pop(); s.push((a - b) | 0);
pc=4224; continue;
}
case 4224: {
s.push(64);
pc=4226; continue;
}
case 4226: {
b=s.pop(); a=s.pop(); s.push((a - b) | 0);
pc=4227; continue;
}
case 4227: {
b=s.pop(); a=s.pop();
pc=(a<=b)?4252:4230; continue;
}
case 4230: {
s.push(l[15]);
pc=4232; continue;
}
case 4232: {
o=s.pop(); s.push(o.x);
pc=4235; continue;
}
case 4235: {
s.push(l[0]);
pc=4236; continue;
}
case 4236: {
o=s.pop(); s.push(o.maps);
pc=4239; continue;
}
case 4239: {
o=s.pop(); s.push(o.wx);
pc=4242; continue;
}
case 4242: {
s.push(512);
pc=4245; continue;
}
case 4245: {
b=s.pop(); a=s.pop(); s.push((a + b) | 0);
pc=4246; continue;
}
case 4246: {
s.push(64);
pc=4248; continue;
}
case 4248: {
b=s.pop(); a=s.pop(); s.push((a + b) | 0);
pc=4249; continue;
}
case 4249: {
b=s.pop(); a=s.pop();
pc=(a<b)?4261:4252; continue;
}
case 4252: {
s.push(l[15]);
pc=4254; continue;
}
case 4254: {
s.push(0);
pc=4255; continue;
}
case 4255: {
v=s.pop(); o=s.pop(); o.c=v;
pc=4258; continue;
}
case 4258: {
pc=11361; continue;
}
case 4261: {
s.push(l[15]);
pc=4263; continue;
}
case 4263: {
o=s.pop(); s.push(o.y);
pc=4266; continue;
}
case 4266: {
s.push(l[0]);
pc=4267; continue;
}
case 4267: {
o=s.pop(); s.push(o.maps);
pc=4270; continue;
}
case 4270: {
o=s.pop(); s.push(o.wy);
pc=4273; continue;
}
case 4273: {
s.push(320);
pc=4276; continue;
}
case 4276: {
b=s.pop(); a=s.pop(); s.push((a + b) | 0);
pc=4277; continue;
}
case 4277: {
s.push(32);
pc=4279; continue;
}
case 4279: {
b=s.pop(); a=s.pop(); s.push((a + b) | 0);
pc=4280; continue;
}
case 4280: {
b=s.pop(); a=s.pop();
pc=(a<b)?11361:4283; continue;
}
case 4283: {
s.push(l[15]);
pc=4285; continue;
}
case 4285: {
s.push(0);
pc=4286; continue;
}
case 4286: {
v=s.pop(); o=s.pop(); o.c=v;
pc=4289; continue;
}
case 4289: {
pc=11361; continue;
}
case 4292: {
s.push(l[15]);
pc=4294; continue;
}
case 4294: {
s.push(s[s.length-1]);
pc=4295; continue;
}
case 4295: {
o=s.pop(); s.push(o.x);
pc=4298; continue;
}
case 4298: {
s.push(l[15]);
pc=4300; continue;
}
case 4300: {
o=s.pop(); s.push(o.vx);
pc=4303; continue;
}
case 4303: {
s.push(10);
pc=4305; continue;
}
case 4305: {
b=s.pop(); a=s.pop(); s.push(J.div(a,b));
pc=4306; continue;
}
case 4306: {
b=s.pop(); a=s.pop(); s.push((a + b) | 0);
pc=4307; continue;
}
case 4307: {
v=s.pop(); o=s.pop(); o.x=v;
pc=4310; continue;
}
case 4310: {
s.push(l[15]);
pc=4312; continue;
}
case 4312: {
s.push(s[s.length-1]);
pc=4313; continue;
}
case 4313: {
o=s.pop(); s.push(o.y);
pc=4316; continue;
}
case 4316: {
s.push(l[15]);
pc=4318; continue;
}
case 4318: {
o=s.pop(); s.push(o.vy);
pc=4321; continue;
}
case 4321: {
s.push(10);
pc=4323; continue;
}
case 4323: {
b=s.pop(); a=s.pop(); s.push(J.div(a,b));
pc=4324; continue;
}
case 4324: {
b=s.pop(); a=s.pop(); s.push((a + b) | 0);
pc=4325; continue;
}
case 4325: {
v=s.pop(); o=s.pop(); o.y=v;
pc=4328; continue;
}
case 4328: {
s.push(l[0]);
pc=4329; continue;
}
case 4329: {
o=s.pop(); s.push(o.maps);
pc=4332; continue;
}
case 4332: {
s.push(l[15]);
pc=4334; continue;
}
case 4334: {
o=s.pop(); s.push(o.x);
pc=4337; continue;
}
case 4337: {
s.push(15);
pc=4339; continue;
}
case 4339: {
b=s.pop(); a=s.pop(); s.push((a + b) | 0);
pc=4340; continue;
}
case 4340: {
s.push(l[15]);
pc=4342; continue;
}
case 4342: {
o=s.pop(); s.push(o.y);
pc=4345; continue;
}
case 4345: {
s.push(15);
pc=4347; continue;
}
case 4347: {
b=s.pop(); a=s.pop(); s.push((a + b) | 0);
pc=4348; continue;
}
case 4348: {
v=s.splice(s.length-2,2);
o=s.pop();
s.push(o.getBGCode$2(v[0],v[1]));
pc=4351; continue;
}
case 4351: {
s.push(20);
pc=4353; continue;
}
case 4353: {
b=s.pop(); a=s.pop();
pc=(a<b)?4362:4356; continue;
}
case 4356: {
s.push(l[15]);
pc=4358; continue;
}
case 4358: {
s.push(0);
pc=4359; continue;
}
case 4359: {
v=s.pop(); o=s.pop(); o.c=v;
pc=4362; continue;
}
case 4362: {
s.push(l[15]);
pc=4364; continue;
}
case 4364: {
o=s.pop(); s.push(o.x);
pc=4367; continue;
}
case 4367: {
s.push(l[0]);
pc=4368; continue;
}
case 4368: {
o=s.pop(); s.push(o.maps);
pc=4371; continue;
}
case 4371: {
o=s.pop(); s.push(o.wx);
pc=4374; continue;
}
case 4374: {
s.push(32);
pc=4376; continue;
}
case 4376: {
b=s.pop(); a=s.pop(); s.push((a - b) | 0);
pc=4377; continue;
}
case 4377: {
s.push(64);
pc=4379; continue;
}
case 4379: {
b=s.pop(); a=s.pop(); s.push((a - b) | 0);
pc=4380; continue;
}
case 4380: {
b=s.pop(); a=s.pop();
pc=(a<=b)?4405:4383; continue;
}
case 4383: {
s.push(l[15]);
pc=4385; continue;
}
case 4385: {
o=s.pop(); s.push(o.x);
pc=4388; continue;
}
case 4388: {
s.push(l[0]);
pc=4389; continue;
}
case 4389: {
o=s.pop(); s.push(o.maps);
pc=4392; continue;
}
case 4392: {
o=s.pop(); s.push(o.wx);
pc=4395; continue;
}
case 4395: {
s.push(512);
pc=4398; continue;
}
case 4398: {
b=s.pop(); a=s.pop(); s.push((a + b) | 0);
pc=4399; continue;
}
case 4399: {
s.push(64);
pc=4401; continue;
}
case 4401: {
b=s.pop(); a=s.pop(); s.push((a + b) | 0);
pc=4402; continue;
}
case 4402: {
b=s.pop(); a=s.pop();
pc=(a<b)?4414:4405; continue;
}
case 4405: {
s.push(l[15]);
pc=4407; continue;
}
case 4407: {
s.push(0);
pc=4408; continue;
}
case 4408: {
v=s.pop(); o=s.pop(); o.c=v;
pc=4411; continue;
}
case 4411: {
pc=4460; continue;
}
case 4414: {
s.push(l[15]);
pc=4416; continue;
}
case 4416: {
o=s.pop(); s.push(o.y);
pc=4419; continue;
}
case 4419: {
s.push(l[0]);
pc=4420; continue;
}
case 4420: {
o=s.pop(); s.push(o.maps);
pc=4423; continue;
}
case 4423: {
o=s.pop(); s.push(o.wy);
pc=4426; continue;
}
case 4426: {
s.push(32);
pc=4428; continue;
}
case 4428: {
b=s.pop(); a=s.pop(); s.push((a - b) | 0);
pc=4429; continue;
}
case 4429: {
b=s.pop(); a=s.pop();
pc=(a<=b)?4454:4432; continue;
}
case 4432: {
s.push(l[15]);
pc=4434; continue;
}
case 4434: {
o=s.pop(); s.push(o.y);
pc=4437; continue;
}
case 4437: {
s.push(l[0]);
pc=4438; continue;
}
case 4438: {
o=s.pop(); s.push(o.maps);
pc=4441; continue;
}
case 4441: {
o=s.pop(); s.push(o.wy);
pc=4444; continue;
}
case 4444: {
s.push(320);
pc=4447; continue;
}
case 4447: {
b=s.pop(); a=s.pop(); s.push((a + b) | 0);
pc=4448; continue;
}
case 4448: {
s.push(32);
pc=4450; continue;
}
case 4450: {
b=s.pop(); a=s.pop(); s.push((a + b) | 0);
pc=4451; continue;
}
case 4451: {
b=s.pop(); a=s.pop();
pc=(a<b)?4460:4454; continue;
}
case 4454: {
s.push(l[15]);
pc=4456; continue;
}
case 4456: {
s.push(0);
pc=4457; continue;
}
case 4457: {
v=s.pop(); o=s.pop(); o.c=v;
pc=4460; continue;
}
case 4460: {
s.push(l[15]);
pc=4462; continue;
}
case 4462: {
s.push(s[s.length-1]);
pc=4463; continue;
}
case 4463: {
o=s.pop(); s.push(o.c1);
pc=4466; continue;
}
case 4466: {
s.push(1);
pc=4467; continue;
}
case 4467: {
b=s.pop(); a=s.pop(); s.push((a + b) | 0);
pc=4468; continue;
}
case 4468: {
v=s.pop(); o=s.pop(); o.c1=v;
pc=4471; continue;
}
case 4471: {
s.push(l[15]);
pc=4473; continue;
}
case 4473: {
o=s.pop(); s.push(o.c1);
pc=4476; continue;
}
case 4476: {
s.push(18);
pc=4478; continue;
}
case 4478: {
b=s.pop(); a=s.pop();
pc=(a<=b)?4487:4481; continue;
}
case 4481: {
s.push(l[15]);
pc=4483; continue;
}
case 4483: {
s.push(0);
pc=4484; continue;
}
case 4484: {
v=s.pop(); o=s.pop(); o.c=v;
pc=4487; continue;
}
case 4487: {
s.push(l[15]);
pc=4489; continue;
}
case 4489: {
o=s.pop(); s.push(o.vy);
pc=4492; continue;
}
case 4492: {
a=s.pop();
pc=(a!=0)?4531:4495; continue;
}
case 4495: {
s.push(l[15]);
pc=4497; continue;
}
case 4497: {
s.push(240);
pc=4500; continue;
}
case 4500: {
s.push(l[0]);
pc=4501; continue;
}
case 4501: {
o=s.pop(); s.push(o.g_c1);
pc=4504; continue;
}
case 4504: {
b=s.pop(); a=s.pop(); s.push((a + b) | 0);
pc=4505; continue;
}
case 4505: {
v=s.pop(); o=s.pop(); o.pt=v;
pc=4508; continue;
}
case 4508: {
s.push(l[15]);
pc=4510; continue;
}
case 4510: {
s.push(0);
pc=4511; continue;
}
case 4511: {
v=s.pop(); o=s.pop(); o.pth=v;
pc=4514; continue;
}
case 4514: {
s.push(l[15]);
pc=4516; continue;
}
case 4516: {
o=s.pop(); s.push(o.vx);
pc=4519; continue;
}
case 4519: {
a=s.pop();
pc=(a<=0)?11361:4522; continue;
}
case 4522: {
s.push(l[15]);
pc=4524; continue;
}
case 4524: {
s.push(1);
pc=4525; continue;
}
case 4525: {
v=s.pop(); o=s.pop(); o.pth=v;
pc=4528; continue;
}
case 4528: {
pc=11361; continue;
}
case 4531: {
s.push(l[15]);
pc=4533; continue;
}
case 4533: {
o=s.pop(); s.push(o.vy);
pc=4536; continue;
}
case 4536: {
a=s.pop();
pc=(a>=0)?11361:4539; continue;
}
case 4539: {
s.push(l[15]);
pc=4541; continue;
}
case 4541: {
s.push(242);
pc=4544; continue;
}
case 4544: {
s.push(l[0]);
pc=4545; continue;
}
case 4545: {
o=s.pop(); s.push(o.g_c1);
pc=4548; continue;
}
case 4548: {
b=s.pop(); a=s.pop(); s.push((a + b) | 0);
pc=4549; continue;
}
case 4549: {
v=s.pop(); o=s.pop(); o.pt=v;
pc=4552; continue;
}
case 4552: {
s.push(l[15]);
pc=4554; continue;
}
case 4554: {
s.push(0);
pc=4555; continue;
}
case 4555: {
v=s.pop(); o=s.pop(); o.pth=v;
pc=4558; continue;
}
case 4558: {
s.push(l[15]);
pc=4560; continue;
}
case 4560: {
o=s.pop(); s.push(o.vx);
pc=4563; continue;
}
case 4563: {
a=s.pop();
pc=(a<=0)?11361:4566; continue;
}
case 4566: {
s.push(l[15]);
pc=4568; continue;
}
case 4568: {
s.push(1);
pc=4569; continue;
}
case 4569: {
v=s.pop(); o=s.pop(); o.pth=v;
pc=4572; continue;
}
case 4572: {
pc=11361; continue;
}
case 4575: {
s.push(l[15]);
pc=4577; continue;
}
case 4577: {
s.push(s[s.length-1]);
pc=4578; continue;
}
case 4578: {
o=s.pop(); s.push(o.x);
pc=4581; continue;
}
case 4581: {
s.push(l[15]);
pc=4583; continue;
}
case 4583: {
o=s.pop(); s.push(o.vx);
pc=4586; continue;
}
case 4586: {
s.push(10);
pc=4588; continue;
}
case 4588: {
b=s.pop(); a=s.pop(); s.push(J.div(a,b));
pc=4589; continue;
}
case 4589: {
b=s.pop(); a=s.pop(); s.push((a + b) | 0);
pc=4590; continue;
}
case 4590: {
v=s.pop(); o=s.pop(); o.x=v;
pc=4593; continue;
}
case 4593: {
s.push(l[15]);
pc=4595; continue;
}
case 4595: {
s.push(s[s.length-1]);
pc=4596; continue;
}
case 4596: {
o=s.pop(); s.push(o.y);
pc=4599; continue;
}
case 4599: {
s.push(l[15]);
pc=4601; continue;
}
case 4601: {
o=s.pop(); s.push(o.vy);
pc=4604; continue;
}
case 4604: {
s.push(10);
pc=4606; continue;
}
case 4606: {
b=s.pop(); a=s.pop(); s.push(J.div(a,b));
pc=4607; continue;
}
case 4607: {
b=s.pop(); a=s.pop(); s.push((a + b) | 0);
pc=4608; continue;
}
case 4608: {
v=s.pop(); o=s.pop(); o.y=v;
pc=4611; continue;
}
case 4611: {
s.push(l[0]);
pc=4612; continue;
}
case 4612: {
o=s.pop(); s.push(o.maps);
pc=4615; continue;
}
case 4615: {
s.push(l[15]);
pc=4617; continue;
}
case 4617: {
o=s.pop(); s.push(o.x);
pc=4620; continue;
}
case 4620: {
s.push(15);
pc=4622; continue;
}
case 4622: {
b=s.pop(); a=s.pop(); s.push((a + b) | 0);
pc=4623; continue;
}
case 4623: {
s.push(l[15]);
pc=4625; continue;
}
case 4625: {
o=s.pop(); s.push(o.y);
pc=4628; continue;
}
case 4628: {
s.push(15);
pc=4630; continue;
}
case 4630: {
b=s.pop(); a=s.pop(); s.push((a + b) | 0);
pc=4631; continue;
}
case 4631: {
v=s.splice(s.length-2,2);
o=s.pop();
s.push(o.getBGCode$2(v[0],v[1]));
pc=4634; continue;
}
case 4634: {
s.push(20);
pc=4636; continue;
}
case 4636: {
b=s.pop(); a=s.pop();
pc=(a<b)?4645:4639; continue;
}
case 4639: {
s.push(l[15]);
pc=4641; continue;
}
case 4641: {
s.push(0);
pc=4642; continue;
}
case 4642: {
v=s.pop(); o=s.pop(); o.c=v;
pc=4645; continue;
}
case 4645: {
s.push(l[15]);
pc=4647; continue;
}
case 4647: {
o=s.pop(); s.push(o.x);
pc=4650; continue;
}
case 4650: {
s.push(l[0]);
pc=4651; continue;
}
case 4651: {
o=s.pop(); s.push(o.maps);
pc=4654; continue;
}
case 4654: {
o=s.pop(); s.push(o.wx);
pc=4657; continue;
}
case 4657: {
s.push(32);
pc=4659; continue;
}
case 4659: {
b=s.pop(); a=s.pop(); s.push((a - b) | 0);
pc=4660; continue;
}
case 4660: {
s.push(64);
pc=4662; continue;
}
case 4662: {
b=s.pop(); a=s.pop(); s.push((a - b) | 0);
pc=4663; continue;
}
case 4663: {
b=s.pop(); a=s.pop();
pc=(a<=b)?4688:4666; continue;
}
case 4666: {
s.push(l[15]);
pc=4668; continue;
}
case 4668: {
o=s.pop(); s.push(o.x);
pc=4671; continue;
}
case 4671: {
s.push(l[0]);
pc=4672; continue;
}
case 4672: {
o=s.pop(); s.push(o.maps);
pc=4675; continue;
}
case 4675: {
o=s.pop(); s.push(o.wx);
pc=4678; continue;
}
case 4678: {
s.push(512);
pc=4681; continue;
}
case 4681: {
b=s.pop(); a=s.pop(); s.push((a + b) | 0);
pc=4682; continue;
}
case 4682: {
s.push(64);
pc=4684; continue;
}
case 4684: {
b=s.pop(); a=s.pop(); s.push((a + b) | 0);
pc=4685; continue;
}
case 4685: {
b=s.pop(); a=s.pop();
pc=(a<b)?4697:4688; continue;
}
case 4688: {
s.push(l[15]);
pc=4690; continue;
}
case 4690: {
s.push(0);
pc=4691; continue;
}
case 4691: {
v=s.pop(); o=s.pop(); o.c=v;
pc=4694; continue;
}
case 4694: {
pc=4743; continue;
}
case 4697: {
s.push(l[15]);
pc=4699; continue;
}
case 4699: {
o=s.pop(); s.push(o.y);
pc=4702; continue;
}
case 4702: {
s.push(l[0]);
pc=4703; continue;
}
case 4703: {
o=s.pop(); s.push(o.maps);
pc=4706; continue;
}
case 4706: {
o=s.pop(); s.push(o.wy);
pc=4709; continue;
}
case 4709: {
s.push(32);
pc=4711; continue;
}
case 4711: {
b=s.pop(); a=s.pop(); s.push((a - b) | 0);
pc=4712; continue;
}
case 4712: {
b=s.pop(); a=s.pop();
pc=(a<=b)?4737:4715; continue;
}
case 4715: {
s.push(l[15]);
pc=4717; continue;
}
case 4717: {
o=s.pop(); s.push(o.y);
pc=4720; continue;
}
case 4720: {
s.push(l[0]);
pc=4721; continue;
}
case 4721: {
o=s.pop(); s.push(o.maps);
pc=4724; continue;
}
case 4724: {
o=s.pop(); s.push(o.wy);
pc=4727; continue;
}
case 4727: {
s.push(320);
pc=4730; continue;
}
case 4730: {
b=s.pop(); a=s.pop(); s.push((a + b) | 0);
pc=4731; continue;
}
case 4731: {
s.push(32);
pc=4733; continue;
}
case 4733: {
b=s.pop(); a=s.pop(); s.push((a + b) | 0);
pc=4734; continue;
}
case 4734: {
b=s.pop(); a=s.pop();
pc=(a<b)?4743:4737; continue;
}
case 4737: {
s.push(l[15]);
pc=4739; continue;
}
case 4739: {
s.push(0);
pc=4740; continue;
}
case 4740: {
v=s.pop(); o=s.pop(); o.c=v;
pc=4743; continue;
}
case 4743: {
s.push(l[15]);
pc=4745; continue;
}
case 4745: {
s.push(s[s.length-1]);
pc=4746; continue;
}
case 4746: {
o=s.pop(); s.push(o.c1);
pc=4749; continue;
}
case 4749: {
s.push(1);
pc=4750; continue;
}
case 4750: {
b=s.pop(); a=s.pop(); s.push((a + b) | 0);
pc=4751; continue;
}
case 4751: {
v=s.pop(); o=s.pop(); o.c1=v;
pc=4754; continue;
}
case 4754: {
s.push(l[15]);
pc=4756; continue;
}
case 4756: {
o=s.pop(); s.push(o.c1);
pc=4759; continue;
}
case 4759: {
s.push(18);
pc=4761; continue;
}
case 4761: {
b=s.pop(); a=s.pop();
pc=(a<=b)?11361:4764; continue;
}
case 4764: {
s.push(l[15]);
pc=4766; continue;
}
case 4766: {
s.push(0);
pc=4767; continue;
}
case 4767: {
v=s.pop(); o=s.pop(); o.c=v;
pc=4770; continue;
}
case 4770: {
pc=11361; continue;
}
case 4773: {
s.push(l[15]);
pc=4775; continue;
}
case 4775: {
s.push(s[s.length-1]);
pc=4776; continue;
}
case 4776: {
o=s.pop(); s.push(o.x);
pc=4779; continue;
}
case 4779: {
s.push(l[15]);
pc=4781; continue;
}
case 4781: {
o=s.pop(); s.push(o.vx);
pc=4784; continue;
}
case 4784: {
s.push(10);
pc=4786; continue;
}
case 4786: {
b=s.pop(); a=s.pop(); s.push(J.div(a,b));
pc=4787; continue;
}
case 4787: {
b=s.pop(); a=s.pop(); s.push((a + b) | 0);
pc=4788; continue;
}
case 4788: {
v=s.pop(); o=s.pop(); o.x=v;
pc=4791; continue;
}
case 4791: {
s.push(l[15]);
pc=4793; continue;
}
case 4793: {
s.push(s[s.length-1]);
pc=4794; continue;
}
case 4794: {
o=s.pop(); s.push(o.y);
pc=4797; continue;
}
case 4797: {
s.push(l[15]);
pc=4799; continue;
}
case 4799: {
o=s.pop(); s.push(o.vy);
pc=4802; continue;
}
case 4802: {
s.push(10);
pc=4804; continue;
}
case 4804: {
b=s.pop(); a=s.pop(); s.push(J.div(a,b));
pc=4805; continue;
}
case 4805: {
b=s.pop(); a=s.pop(); s.push((a + b) | 0);
pc=4806; continue;
}
case 4806: {
v=s.pop(); o=s.pop(); o.y=v;
pc=4809; continue;
}
case 4809: {
s.push(l[0]);
pc=4810; continue;
}
case 4810: {
o=s.pop(); s.push(o.maps);
pc=4813; continue;
}
case 4813: {
s.push(l[15]);
pc=4815; continue;
}
case 4815: {
o=s.pop(); s.push(o.x);
pc=4818; continue;
}
case 4818: {
s.push(15);
pc=4820; continue;
}
case 4820: {
b=s.pop(); a=s.pop(); s.push((a + b) | 0);
pc=4821; continue;
}
case 4821: {
s.push(l[15]);
pc=4823; continue;
}
case 4823: {
o=s.pop(); s.push(o.y);
pc=4826; continue;
}
case 4826: {
s.push(15);
pc=4828; continue;
}
case 4828: {
b=s.pop(); a=s.pop(); s.push((a + b) | 0);
pc=4829; continue;
}
case 4829: {
v=s.splice(s.length-2,2);
o=s.pop();
s.push(o.getBGCode$2(v[0],v[1]));
pc=4832; continue;
}
case 4832: {
s.push(20);
pc=4834; continue;
}
case 4834: {
b=s.pop(); a=s.pop();
pc=(a<b)?4843:4837; continue;
}
case 4837: {
s.push(l[15]);
pc=4839; continue;
}
case 4839: {
s.push(0);
pc=4840; continue;
}
case 4840: {
v=s.pop(); o=s.pop(); o.c=v;
pc=4843; continue;
}
case 4843: {
s.push(l[15]);
pc=4845; continue;
}
case 4845: {
o=s.pop(); s.push(o.x);
pc=4848; continue;
}
case 4848: {
s.push(l[0]);
pc=4849; continue;
}
case 4849: {
o=s.pop(); s.push(o.maps);
pc=4852; continue;
}
case 4852: {
o=s.pop(); s.push(o.wx);
pc=4855; continue;
}
case 4855: {
s.push(32);
pc=4857; continue;
}
case 4857: {
b=s.pop(); a=s.pop(); s.push((a - b) | 0);
pc=4858; continue;
}
case 4858: {
s.push(64);
pc=4860; continue;
}
case 4860: {
b=s.pop(); a=s.pop(); s.push((a - b) | 0);
pc=4861; continue;
}
case 4861: {
b=s.pop(); a=s.pop();
pc=(a<=b)?4886:4864; continue;
}
case 4864: {
s.push(l[15]);
pc=4866; continue;
}
case 4866: {
o=s.pop(); s.push(o.x);
pc=4869; continue;
}
case 4869: {
s.push(l[0]);
pc=4870; continue;
}
case 4870: {
o=s.pop(); s.push(o.maps);
pc=4873; continue;
}
case 4873: {
o=s.pop(); s.push(o.wx);
pc=4876; continue;
}
case 4876: {
s.push(512);
pc=4879; continue;
}
case 4879: {
b=s.pop(); a=s.pop(); s.push((a + b) | 0);
pc=4880; continue;
}
case 4880: {
s.push(64);
pc=4882; continue;
}
case 4882: {
b=s.pop(); a=s.pop(); s.push((a + b) | 0);
pc=4883; continue;
}
case 4883: {
b=s.pop(); a=s.pop();
pc=(a<b)?4895:4886; continue;
}
case 4886: {
s.push(l[15]);
pc=4888; continue;
}
case 4888: {
s.push(0);
pc=4889; continue;
}
case 4889: {
v=s.pop(); o=s.pop(); o.c=v;
pc=4892; continue;
}
case 4892: {
pc=4941; continue;
}
case 4895: {
s.push(l[15]);
pc=4897; continue;
}
case 4897: {
o=s.pop(); s.push(o.y);
pc=4900; continue;
}
case 4900: {
s.push(l[0]);
pc=4901; continue;
}
case 4901: {
o=s.pop(); s.push(o.maps);
pc=4904; continue;
}
case 4904: {
o=s.pop(); s.push(o.wy);
pc=4907; continue;
}
case 4907: {
s.push(32);
pc=4909; continue;
}
case 4909: {
b=s.pop(); a=s.pop(); s.push((a - b) | 0);
pc=4910; continue;
}
case 4910: {
b=s.pop(); a=s.pop();
pc=(a<=b)?4935:4913; continue;
}
case 4913: {
s.push(l[15]);
pc=4915; continue;
}
case 4915: {
o=s.pop(); s.push(o.y);
pc=4918; continue;
}
case 4918: {
s.push(l[0]);
pc=4919; continue;
}
case 4919: {
o=s.pop(); s.push(o.maps);
pc=4922; continue;
}
case 4922: {
o=s.pop(); s.push(o.wy);
pc=4925; continue;
}
case 4925: {
s.push(320);
pc=4928; continue;
}
case 4928: {
b=s.pop(); a=s.pop(); s.push((a + b) | 0);
pc=4929; continue;
}
case 4929: {
s.push(32);
pc=4931; continue;
}
case 4931: {
b=s.pop(); a=s.pop(); s.push((a + b) | 0);
pc=4932; continue;
}
case 4932: {
b=s.pop(); a=s.pop();
pc=(a<b)?4941:4935; continue;
}
case 4935: {
s.push(l[15]);
pc=4937; continue;
}
case 4937: {
s.push(0);
pc=4938; continue;
}
case 4938: {
v=s.pop(); o=s.pop(); o.c=v;
pc=4941; continue;
}
case 4941: {
s.push(l[15]);
pc=4943; continue;
}
case 4943: {
s.push(s[s.length-1]);
pc=4944; continue;
}
case 4944: {
o=s.pop(); s.push(o.c1);
pc=4947; continue;
}
case 4947: {
s.push(1);
pc=4948; continue;
}
case 4948: {
b=s.pop(); a=s.pop(); s.push((a + b) | 0);
pc=4949; continue;
}
case 4949: {
v=s.pop(); o=s.pop(); o.c1=v;
pc=4952; continue;
}
case 4952: {
s.push(l[15]);
pc=4954; continue;
}
case 4954: {
o=s.pop(); s.push(o.c1);
pc=4957; continue;
}
case 4957: {
s.push(18);
pc=4959; continue;
}
case 4959: {
b=s.pop(); a=s.pop();
pc=(a<=b)?4968:4962; continue;
}
case 4962: {
s.push(l[15]);
pc=4964; continue;
}
case 4964: {
s.push(0);
pc=4965; continue;
}
case 4965: {
v=s.pop(); o=s.pop(); o.c=v;
pc=4968; continue;
}
case 4968: {
s.push(l[15]);
pc=4970; continue;
}
case 4970: {
s.push(249);
pc=4973; continue;
}
case 4973: {
v=s.pop(); o=s.pop(); o.pt=v;
pc=4976; continue;
}
case 4976: {
s.push(l[15]);
pc=4978; continue;
}
case 4978: {
s.push(0);
pc=4979; continue;
}
case 4979: {
v=s.pop(); o=s.pop(); o.pth=v;
pc=4982; continue;
}
case 4982: {
pc=11361; continue;
}
case 4985: {
s.push(l[15]);
pc=4987; continue;
}
case 4987: {
s.push(s[s.length-1]);
pc=4988; continue;
}
case 4988: {
o=s.pop(); s.push(o.x);
pc=4991; continue;
}
case 4991: {
s.push(l[15]);
pc=4993; continue;
}
case 4993: {
o=s.pop(); s.push(o.vx);
pc=4996; continue;
}
case 4996: {
s.push(10);
pc=4998; continue;
}
case 4998: {
b=s.pop(); a=s.pop(); s.push(J.div(a,b));
pc=4999; continue;
}
case 4999: {
b=s.pop(); a=s.pop(); s.push((a + b) | 0);
pc=5000; continue;
}
case 5000: {
v=s.pop(); o=s.pop(); o.x=v;
pc=5003; continue;
}
case 5003: {
s.push(l[15]);
pc=5005; continue;
}
case 5005: {
s.push(s[s.length-1]);
pc=5006; continue;
}
case 5006: {
o=s.pop(); s.push(o.y);
pc=5009; continue;
}
case 5009: {
s.push(l[15]);
pc=5011; continue;
}
case 5011: {
o=s.pop(); s.push(o.vy);
pc=5014; continue;
}
case 5014: {
s.push(10);
pc=5016; continue;
}
case 5016: {
b=s.pop(); a=s.pop(); s.push(J.div(a,b));
pc=5017; continue;
}
case 5017: {
b=s.pop(); a=s.pop(); s.push((a + b) | 0);
pc=5018; continue;
}
case 5018: {
v=s.pop(); o=s.pop(); o.y=v;
pc=5021; continue;
}
case 5021: {
s.push(l[0]);
pc=5022; continue;
}
case 5022: {
o=s.pop(); s.push(o.maps);
pc=5025; continue;
}
case 5025: {
s.push(l[15]);
pc=5027; continue;
}
case 5027: {
o=s.pop(); s.push(o.x);
pc=5030; continue;
}
case 5030: {
s.push(15);
pc=5032; continue;
}
case 5032: {
b=s.pop(); a=s.pop(); s.push((a + b) | 0);
pc=5033; continue;
}
case 5033: {
s.push(l[15]);
pc=5035; continue;
}
case 5035: {
o=s.pop(); s.push(o.y);
pc=5038; continue;
}
case 5038: {
s.push(15);
pc=5040; continue;
}
case 5040: {
b=s.pop(); a=s.pop(); s.push((a + b) | 0);
pc=5041; continue;
}
case 5041: {
v=s.splice(s.length-2,2);
o=s.pop();
s.push(o.getBGCode$2(v[0],v[1]));
pc=5044; continue;
}
case 5044: {
s.push(20);
pc=5046; continue;
}
case 5046: {
b=s.pop(); a=s.pop();
pc=(a<b)?5055:5049; continue;
}
case 5049: {
s.push(l[15]);
pc=5051; continue;
}
case 5051: {
s.push(0);
pc=5052; continue;
}
case 5052: {
v=s.pop(); o=s.pop(); o.c=v;
pc=5055; continue;
}
case 5055: {
s.push(l[15]);
pc=5057; continue;
}
case 5057: {
o=s.pop(); s.push(o.x);
pc=5060; continue;
}
case 5060: {
s.push(l[0]);
pc=5061; continue;
}
case 5061: {
o=s.pop(); s.push(o.maps);
pc=5064; continue;
}
case 5064: {
o=s.pop(); s.push(o.wx);
pc=5067; continue;
}
case 5067: {
s.push(32);
pc=5069; continue;
}
case 5069: {
b=s.pop(); a=s.pop(); s.push((a - b) | 0);
pc=5070; continue;
}
case 5070: {
s.push(64);
pc=5072; continue;
}
case 5072: {
b=s.pop(); a=s.pop(); s.push((a - b) | 0);
pc=5073; continue;
}
case 5073: {
b=s.pop(); a=s.pop();
pc=(a<=b)?5098:5076; continue;
}
case 5076: {
s.push(l[15]);
pc=5078; continue;
}
case 5078: {
o=s.pop(); s.push(o.x);
pc=5081; continue;
}
case 5081: {
s.push(l[0]);
pc=5082; continue;
}
case 5082: {
o=s.pop(); s.push(o.maps);
pc=5085; continue;
}
case 5085: {
o=s.pop(); s.push(o.wx);
pc=5088; continue;
}
case 5088: {
s.push(512);
pc=5091; continue;
}
case 5091: {
b=s.pop(); a=s.pop(); s.push((a + b) | 0);
pc=5092; continue;
}
case 5092: {
s.push(64);
pc=5094; continue;
}
case 5094: {
b=s.pop(); a=s.pop(); s.push((a + b) | 0);
pc=5095; continue;
}
case 5095: {
b=s.pop(); a=s.pop();
pc=(a<b)?5107:5098; continue;
}
case 5098: {
s.push(l[15]);
pc=5100; continue;
}
case 5100: {
s.push(0);
pc=5101; continue;
}
case 5101: {
v=s.pop(); o=s.pop(); o.c=v;
pc=5104; continue;
}
case 5104: {
pc=5153; continue;
}
case 5107: {
s.push(l[15]);
pc=5109; continue;
}
case 5109: {
o=s.pop(); s.push(o.y);
pc=5112; continue;
}
case 5112: {
s.push(l[0]);
pc=5113; continue;
}
case 5113: {
o=s.pop(); s.push(o.maps);
pc=5116; continue;
}
case 5116: {
o=s.pop(); s.push(o.wy);
pc=5119; continue;
}
case 5119: {
s.push(32);
pc=5121; continue;
}
case 5121: {
b=s.pop(); a=s.pop(); s.push((a - b) | 0);
pc=5122; continue;
}
case 5122: {
b=s.pop(); a=s.pop();
pc=(a<=b)?5147:5125; continue;
}
case 5125: {
s.push(l[15]);
pc=5127; continue;
}
case 5127: {
o=s.pop(); s.push(o.y);
pc=5130; continue;
}
case 5130: {
s.push(l[0]);
pc=5131; continue;
}
case 5131: {
o=s.pop(); s.push(o.maps);
pc=5134; continue;
}
case 5134: {
o=s.pop(); s.push(o.wy);
pc=5137; continue;
}
case 5137: {
s.push(320);
pc=5140; continue;
}
case 5140: {
b=s.pop(); a=s.pop(); s.push((a + b) | 0);
pc=5141; continue;
}
case 5141: {
s.push(32);
pc=5143; continue;
}
case 5143: {
b=s.pop(); a=s.pop(); s.push((a + b) | 0);
pc=5144; continue;
}
case 5144: {
b=s.pop(); a=s.pop();
pc=(a<b)?5153:5147; continue;
}
case 5147: {
s.push(l[15]);
pc=5149; continue;
}
case 5149: {
s.push(0);
pc=5150; continue;
}
case 5150: {
v=s.pop(); o=s.pop(); o.c=v;
pc=5153; continue;
}
case 5153: {
s.push(l[15]);
pc=5155; continue;
}
case 5155: {
s.push(228);
pc=5158; continue;
}
case 5158: {
s.push(l[0]);
pc=5159; continue;
}
case 5159: {
o=s.pop(); s.push(o.g_c1);
pc=5162; continue;
}
case 5162: {
b=s.pop(); a=s.pop(); s.push((a + b) | 0);
pc=5163; continue;
}
case 5163: {
v=s.pop(); o=s.pop(); o.pt=v;
pc=5166; continue;
}
case 5166: {
s.push(l[15]);
pc=5168; continue;
}
case 5168: {
s.push(0);
pc=5169; continue;
}
case 5169: {
v=s.pop(); o=s.pop(); o.pth=v;
pc=5172; continue;
}
case 5172: {
pc=11361; continue;
}
case 5175: {
s.push(l[15]);
pc=5177; continue;
}
case 5177: {
o=s.pop(); s.push(o.team);
pc=5180; continue;
}
case 5180: {
a=s.pop();
pc=(a!=0)?5222:5183; continue;
}
case 5183: {
s.push(l[15]);
pc=5185; continue;
}
case 5185: {
s.push(s[s.length-1]);
pc=5186; continue;
}
case 5186: {
o=s.pop(); s.push(o.c2);
pc=5189; continue;
}
case 5189: {
s.push(10);
pc=5191; continue;
}
case 5191: {
b=s.pop(); a=s.pop(); s.push((a + b) | 0);
pc=5192; continue;
}
case 5192: {
v=s.pop(); o=s.pop(); o.c2=v;
pc=5195; continue;
}
case 5195: {
s.push(l[15]);
pc=5197; continue;
}
case 5197: {
o=s.pop(); s.push(o.c2);
pc=5200; continue;
}
case 5200: {
s.push(360);
pc=5203; continue;
}
case 5203: {
b=s.pop(); a=s.pop();
pc=(a<b)?5255:5206; continue;
}
case 5206: {
s.push(l[15]);
pc=5208; continue;
}
case 5208: {
s.push(s[s.length-1]);
pc=5209; continue;
}
case 5209: {
o=s.pop(); s.push(o.c2);
pc=5212; continue;
}
case 5212: {
s.push(360);
pc=5215; continue;
}
case 5215: {
b=s.pop(); a=s.pop(); s.push((a - b) | 0);
pc=5216; continue;
}
case 5216: {
v=s.pop(); o=s.pop(); o.c2=v;
pc=5219; continue;
}
case 5219: {
pc=5255; continue;
}
case 5222: {
s.push(l[15]);
pc=5224; continue;
}
case 5224: {
s.push(s[s.length-1]);
pc=5225; continue;
}
case 5225: {
o=s.pop(); s.push(o.c2);
pc=5228; continue;
}
case 5228: {
s.push(10);
pc=5230; continue;
}
case 5230: {
b=s.pop(); a=s.pop(); s.push((a - b) | 0);
pc=5231; continue;
}
case 5231: {
v=s.pop(); o=s.pop(); o.c2=v;
pc=5234; continue;
}
case 5234: {
s.push(l[15]);
pc=5236; continue;
}
case 5236: {
o=s.pop(); s.push(o.c2);
pc=5239; continue;
}
case 5239: {
a=s.pop();
pc=(a>=0)?5255:5242; continue;
}
case 5242: {
s.push(l[15]);
pc=5244; continue;
}
case 5244: {
s.push(s[s.length-1]);
pc=5245; continue;
}
case 5245: {
o=s.pop(); s.push(o.c2);
pc=5248; continue;
}
case 5248: {
s.push(360);
pc=5251; continue;
}
case 5251: {
b=s.pop(); a=s.pop(); s.push((a + b) | 0);
pc=5252; continue;
}
case 5252: {
v=s.pop(); o=s.pop(); o.c2=v;
pc=5255; continue;
}
case 5255: {
s.push(l[15]);
pc=5257; continue;
}
case 5257: {
s.push(s[s.length-1]);
pc=5258; continue;
}
case 5258: {
o=s.pop(); s.push(o.c3);
pc=5261; continue;
}
case 5261: {
s.push(3);
pc=5262; continue;
}
case 5262: {
b=s.pop(); a=s.pop(); s.push((a + b) | 0);
pc=5263; continue;
}
case 5263: {
v=s.pop(); o=s.pop(); o.c3=v;
pc=5266; continue;
}
case 5266: {
s.push(l[15]);
pc=5268; continue;
}
case 5268: {
o=s.pop(); s.push(o.c3);
pc=5271; continue;
}
case 5271: {
s.push(175);
pc=5274; continue;
}
case 5274: {
b=s.pop(); a=s.pop();
pc=(a<=b)?5283:5277; continue;
}
case 5277: {
s.push(l[15]);
pc=5279; continue;
}
case 5279: {
s.push(0);
pc=5280; continue;
}
case 5280: {
v=s.pop(); o=s.pop(); o.c=v;
pc=5283; continue;
}
case 5283: {
s.push(l[15]);
pc=5285; continue;
}
case 5285: {
o=s.pop(); s.push(o.c2);
pc=5288; continue;
}
case 5288: {
pc=5289; continue;
}
case 5289: {
s.push(3.141592653589793);
pc=5292; continue;
}
case 5292: {
b=s.pop(); a=s.pop(); s.push((a * b));
pc=5293; continue;
}
case 5293: {
s.push(180.0);
pc=5296; continue;
}
case 5296: {
b=s.pop(); a=s.pop(); s.push((a / b));
pc=5297; continue;
}
case 5297: {
v=s.splice(s.length-1,1);
s.push(Math.cos(v[0]));
pc=5300; continue;
}
case 5300: {
l[21]=s.pop();
pc=5302; continue;
}
case 5302: {
s.push(l[15]);
pc=5304; continue;
}
case 5304: {
o=s.pop(); s.push(o.c2);
pc=5307; continue;
}
case 5307: {
pc=5308; continue;
}
case 5308: {
s.push(3.141592653589793);
pc=5311; continue;
}
case 5311: {
b=s.pop(); a=s.pop(); s.push((a * b));
pc=5312; continue;
}
case 5312: {
s.push(180.0);
pc=5315; continue;
}
case 5315: {
b=s.pop(); a=s.pop(); s.push((a / b));
pc=5316; continue;
}
case 5316: {
v=s.splice(s.length-1,1);
s.push(Math.sin(v[0]));
pc=5319; continue;
}
case 5319: {
l[23]=s.pop();
pc=5321; continue;
}
case 5321: {
s.push(l[15]);
pc=5323; continue;
}
case 5323: {
s.push(l[15]);
pc=5325; continue;
}
case 5325: {
o=s.pop(); s.push(o.vx);
pc=5328; continue;
}
case 5328: {
s.push(l[21]);
pc=5330; continue;
}
case 5330: {
s.push(l[15]);
pc=5332; continue;
}
case 5332: {
o=s.pop(); s.push(o.c3);
pc=5335; continue;
}
case 5335: {
pc=5336; continue;
}
case 5336: {
b=s.pop(); a=s.pop(); s.push((a * b));
pc=5337; continue;
}
case 5337: {
s.push(J.i(s.pop()));
pc=5338; continue;
}
case 5338: {
b=s.pop(); a=s.pop(); s.push((a + b) | 0);
pc=5339; continue;
}
case 5339: {
v=s.pop(); o=s.pop(); o.x=v;
pc=5342; continue;
}
case 5342: {
s.push(l[15]);
pc=5344; continue;
}
case 5344: {
s.push(l[15]);
pc=5346; continue;
}
case 5346: {
o=s.pop(); s.push(o.vy);
pc=5349; continue;
}
case 5349: {
s.push(l[23]);
pc=5351; continue;
}
case 5351: {
s.push(-s.pop());
pc=5352; continue;
}
case 5352: {
s.push(l[15]);
pc=5354; continue;
}
case 5354: {
o=s.pop(); s.push(o.c3);
pc=5357; continue;
}
case 5357: {
pc=5358; continue;
}
case 5358: {
b=s.pop(); a=s.pop(); s.push((a * b));
pc=5359; continue;
}
case 5359: {
s.push(J.i(s.pop()));
pc=5360; continue;
}
case 5360: {
b=s.pop(); a=s.pop(); s.push((a + b) | 0);
pc=5361; continue;
}
case 5361: {
v=s.pop(); o=s.pop(); o.y=v;
pc=5364; continue;
}
case 5364: {
s.push(l[15]);
pc=5366; continue;
}
case 5366: {
o=s.pop(); s.push(o.x);
pc=5369; continue;
}
case 5369: {
s.push(l[0]);
pc=5370; continue;
}
case 5370: {
o=s.pop(); s.push(o.maps);
pc=5373; continue;
}
case 5373: {
o=s.pop(); s.push(o.wx);
pc=5376; continue;
}
case 5376: {
s.push(32);
pc=5378; continue;
}
case 5378: {
b=s.pop(); a=s.pop(); s.push((a - b) | 0);
pc=5379; continue;
}
case 5379: {
b=s.pop(); a=s.pop();
pc=(a<=b)?5438:5382; continue;
}
case 5382: {
s.push(l[15]);
pc=5384; continue;
}
case 5384: {
o=s.pop(); s.push(o.x);
pc=5387; continue;
}
case 5387: {
s.push(l[0]);
pc=5388; continue;
}
case 5388: {
o=s.pop(); s.push(o.maps);
pc=5391; continue;
}
case 5391: {
o=s.pop(); s.push(o.wx);
pc=5394; continue;
}
case 5394: {
s.push(512);
pc=5397; continue;
}
case 5397: {
b=s.pop(); a=s.pop(); s.push((a + b) | 0);
pc=5398; continue;
}
case 5398: {
b=s.pop(); a=s.pop();
pc=(a>=b)?5438:5401; continue;
}
case 5401: {
s.push(l[15]);
pc=5403; continue;
}
case 5403: {
o=s.pop(); s.push(o.y);
pc=5406; continue;
}
case 5406: {
s.push(l[0]);
pc=5407; continue;
}
case 5407: {
o=s.pop(); s.push(o.maps);
pc=5410; continue;
}
case 5410: {
o=s.pop(); s.push(o.wy);
pc=5413; continue;
}
case 5413: {
s.push(32);
pc=5415; continue;
}
case 5415: {
b=s.pop(); a=s.pop(); s.push((a - b) | 0);
pc=5416; continue;
}
case 5416: {
b=s.pop(); a=s.pop();
pc=(a<=b)?5438:5419; continue;
}
case 5419: {
s.push(l[15]);
pc=5421; continue;
}
case 5421: {
o=s.pop(); s.push(o.y);
pc=5424; continue;
}
case 5424: {
s.push(l[0]);
pc=5425; continue;
}
case 5425: {
o=s.pop(); s.push(o.maps);
pc=5428; continue;
}
case 5428: {
o=s.pop(); s.push(o.wy);
pc=5431; continue;
}
case 5431: {
s.push(320);
pc=5434; continue;
}
case 5434: {
b=s.pop(); a=s.pop(); s.push((a + b) | 0);
pc=5435; continue;
}
case 5435: {
b=s.pop(); a=s.pop();
pc=(a<b)?5446:5438; continue;
}
case 5438: {
s.push(l[15]);
pc=5440; continue;
}
case 5440: {
s.push(-512);
pc=5443; continue;
}
case 5443: {
v=s.pop(); o=s.pop(); o.x=v;
pc=5446; continue;
}
case 5446: {
s.push(l[15]);
pc=5448; continue;
}
case 5448: {
s.push(220);
pc=5451; continue;
}
case 5451: {
s.push(l[0]);
pc=5452; continue;
}
case 5452: {
o=s.pop(); s.push(o.g_c1);
pc=5455; continue;
}
case 5455: {
b=s.pop(); a=s.pop(); s.push((a + b) | 0);
pc=5456; continue;
}
case 5456: {
v=s.pop(); o=s.pop(); o.pt=v;
pc=5459; continue;
}
case 5459: {
s.push(l[15]);
pc=5461; continue;
}
case 5461: {
s.push(0);
pc=5462; continue;
}
case 5462: {
v=s.pop(); o=s.pop(); o.pth=v;
pc=5465; continue;
}
case 5465: {
pc=11361; continue;
}
case 5468: {
s.push(l[15]);
pc=5470; continue;
}
case 5470: {
s.push(s[s.length-1]);
pc=5471; continue;
}
case 5471: {
o=s.pop(); s.push(o.x);
pc=5474; continue;
}
case 5474: {
s.push(l[15]);
pc=5476; continue;
}
case 5476: {
o=s.pop(); s.push(o.vx);
pc=5479; continue;
}
case 5479: {
s.push(10);
pc=5481; continue;
}
case 5481: {
b=s.pop(); a=s.pop(); s.push(J.div(a,b));
pc=5482; continue;
}
case 5482: {
b=s.pop(); a=s.pop(); s.push((a + b) | 0);
pc=5483; continue;
}
case 5483: {
v=s.pop(); o=s.pop(); o.x=v;
pc=5486; continue;
}
case 5486: {
s.push(l[15]);
pc=5488; continue;
}
case 5488: {
s.push(s[s.length-1]);
pc=5489; continue;
}
case 5489: {
o=s.pop(); s.push(o.y);
pc=5492; continue;
}
case 5492: {
s.push(l[15]);
pc=5494; continue;
}
case 5494: {
o=s.pop(); s.push(o.vy);
pc=5497; continue;
}
case 5497: {
s.push(10);
pc=5499; continue;
}
case 5499: {
b=s.pop(); a=s.pop(); s.push(J.div(a,b));
pc=5500; continue;
}
case 5500: {
b=s.pop(); a=s.pop(); s.push((a + b) | 0);
pc=5501; continue;
}
case 5501: {
v=s.pop(); o=s.pop(); o.y=v;
pc=5504; continue;
}
case 5504: {
s.push(l[0]);
pc=5505; continue;
}
case 5505: {
o=s.pop(); s.push(o.maps);
pc=5508; continue;
}
case 5508: {
s.push(l[15]);
pc=5510; continue;
}
case 5510: {
o=s.pop(); s.push(o.x);
pc=5513; continue;
}
case 5513: {
s.push(15);
pc=5515; continue;
}
case 5515: {
b=s.pop(); a=s.pop(); s.push((a + b) | 0);
pc=5516; continue;
}
case 5516: {
s.push(l[15]);
pc=5518; continue;
}
case 5518: {
o=s.pop(); s.push(o.y);
pc=5521; continue;
}
case 5521: {
s.push(15);
pc=5523; continue;
}
case 5523: {
b=s.pop(); a=s.pop(); s.push((a + b) | 0);
pc=5524; continue;
}
case 5524: {
v=s.splice(s.length-2,2);
o=s.pop();
s.push(o.getBGCode$2(v[0],v[1]));
pc=5527; continue;
}
case 5527: {
s.push(20);
pc=5529; continue;
}
case 5529: {
b=s.pop(); a=s.pop();
pc=(a<b)?5538:5532; continue;
}
case 5532: {
s.push(l[15]);
pc=5534; continue;
}
case 5534: {
s.push(0);
pc=5535; continue;
}
case 5535: {
v=s.pop(); o=s.pop(); o.c=v;
pc=5538; continue;
}
case 5538: {
s.push(l[15]);
pc=5540; continue;
}
case 5540: {
o=s.pop(); s.push(o.x);
pc=5543; continue;
}
case 5543: {
s.push(l[0]);
pc=5544; continue;
}
case 5544: {
o=s.pop(); s.push(o.maps);
pc=5547; continue;
}
case 5547: {
o=s.pop(); s.push(o.wx);
pc=5550; continue;
}
case 5550: {
s.push(32);
pc=5552; continue;
}
case 5552: {
b=s.pop(); a=s.pop(); s.push((a - b) | 0);
pc=5553; continue;
}
case 5553: {
s.push(64);
pc=5555; continue;
}
case 5555: {
b=s.pop(); a=s.pop(); s.push((a - b) | 0);
pc=5556; continue;
}
case 5556: {
b=s.pop(); a=s.pop();
pc=(a<=b)?5581:5559; continue;
}
case 5559: {
s.push(l[15]);
pc=5561; continue;
}
case 5561: {
o=s.pop(); s.push(o.x);
pc=5564; continue;
}
case 5564: {
s.push(l[0]);
pc=5565; continue;
}
case 5565: {
o=s.pop(); s.push(o.maps);
pc=5568; continue;
}
case 5568: {
o=s.pop(); s.push(o.wx);
pc=5571; continue;
}
case 5571: {
s.push(512);
pc=5574; continue;
}
case 5574: {
b=s.pop(); a=s.pop(); s.push((a + b) | 0);
pc=5575; continue;
}
case 5575: {
s.push(64);
pc=5577; continue;
}
case 5577: {
b=s.pop(); a=s.pop(); s.push((a + b) | 0);
pc=5578; continue;
}
case 5578: {
b=s.pop(); a=s.pop();
pc=(a<b)?5590:5581; continue;
}
case 5581: {
s.push(l[15]);
pc=5583; continue;
}
case 5583: {
s.push(0);
pc=5584; continue;
}
case 5584: {
v=s.pop(); o=s.pop(); o.c=v;
pc=5587; continue;
}
case 5587: {
pc=5636; continue;
}
case 5590: {
s.push(l[15]);
pc=5592; continue;
}
case 5592: {
o=s.pop(); s.push(o.y);
pc=5595; continue;
}
case 5595: {
s.push(l[0]);
pc=5596; continue;
}
case 5596: {
o=s.pop(); s.push(o.maps);
pc=5599; continue;
}
case 5599: {
o=s.pop(); s.push(o.wy);
pc=5602; continue;
}
case 5602: {
s.push(32);
pc=5604; continue;
}
case 5604: {
b=s.pop(); a=s.pop(); s.push((a - b) | 0);
pc=5605; continue;
}
case 5605: {
b=s.pop(); a=s.pop();
pc=(a<=b)?5630:5608; continue;
}
case 5608: {
s.push(l[15]);
pc=5610; continue;
}
case 5610: {
o=s.pop(); s.push(o.y);
pc=5613; continue;
}
case 5613: {
s.push(l[0]);
pc=5614; continue;
}
case 5614: {
o=s.pop(); s.push(o.maps);
pc=5617; continue;
}
case 5617: {
o=s.pop(); s.push(o.wy);
pc=5620; continue;
}
case 5620: {
s.push(320);
pc=5623; continue;
}
case 5623: {
b=s.pop(); a=s.pop(); s.push((a + b) | 0);
pc=5624; continue;
}
case 5624: {
s.push(32);
pc=5626; continue;
}
case 5626: {
b=s.pop(); a=s.pop(); s.push((a + b) | 0);
pc=5627; continue;
}
case 5627: {
b=s.pop(); a=s.pop();
pc=(a<b)?5636:5630; continue;
}
case 5630: {
s.push(l[15]);
pc=5632; continue;
}
case 5632: {
s.push(0);
pc=5633; continue;
}
case 5633: {
v=s.pop(); o=s.pop(); o.c=v;
pc=5636; continue;
}
case 5636: {
s.push(l[15]);
pc=5638; continue;
}
case 5638: {
s.push(s[s.length-1]);
pc=5639; continue;
}
case 5639: {
o=s.pop(); s.push(o.c1);
pc=5642; continue;
}
case 5642: {
s.push(1);
pc=5643; continue;
}
case 5643: {
b=s.pop(); a=s.pop(); s.push((a + b) | 0);
pc=5644; continue;
}
case 5644: {
v=s.pop(); o=s.pop(); o.c1=v;
pc=5647; continue;
}
case 5647: {
s.push(l[15]);
pc=5649; continue;
}
case 5649: {
o=s.pop(); s.push(o.c1);
pc=5652; continue;
}
case 5652: {
s.push(18);
pc=5654; continue;
}
case 5654: {
b=s.pop(); a=s.pop();
pc=(a<=b)?5663:5657; continue;
}
case 5657: {
s.push(l[15]);
pc=5659; continue;
}
case 5659: {
s.push(0);
pc=5660; continue;
}
case 5660: {
v=s.pop(); o=s.pop(); o.c=v;
pc=5663; continue;
}
case 5663: {
s.push(l[15]);
pc=5665; continue;
}
case 5665: {
s.push(255);
pc=5668; continue;
}
case 5668: {
v=s.pop(); o=s.pop(); o.pt=v;
pc=5671; continue;
}
case 5671: {
s.push(l[15]);
pc=5673; continue;
}
case 5673: {
s.push(0);
pc=5674; continue;
}
case 5674: {
v=s.pop(); o=s.pop(); o.pth=v;
pc=5677; continue;
}
case 5677: {
pc=11361; continue;
}
case 5680: {
s.push(l[15]);
pc=5682; continue;
}
case 5682: {
s.push(s[s.length-1]);
pc=5683; continue;
}
case 5683: {
o=s.pop(); s.push(o.y);
pc=5686; continue;
}
case 5686: {
s.push(l[15]);
pc=5688; continue;
}
case 5688: {
o=s.pop(); s.push(o.vy);
pc=5691; continue;
}
case 5691: {
s.push(10);
pc=5693; continue;
}
case 5693: {
b=s.pop(); a=s.pop(); s.push(J.div(a,b));
pc=5694; continue;
}
case 5694: {
b=s.pop(); a=s.pop(); s.push((a + b) | 0);
pc=5695; continue;
}
case 5695: {
v=s.pop(); o=s.pop(); o.y=v;
pc=5698; continue;
}
case 5698: {
s.push(l[0]);
pc=5699; continue;
}
case 5699: {
o=s.pop(); s.push(o.maps);
pc=5702; continue;
}
case 5702: {
s.push(l[15]);
pc=5704; continue;
}
case 5704: {
o=s.pop(); s.push(o.x);
pc=5707; continue;
}
case 5707: {
s.push(15);
pc=5709; continue;
}
case 5709: {
b=s.pop(); a=s.pop(); s.push((a + b) | 0);
pc=5710; continue;
}
case 5710: {
s.push(l[15]);
pc=5712; continue;
}
case 5712: {
o=s.pop(); s.push(o.y);
pc=5715; continue;
}
case 5715: {
s.push(15);
pc=5717; continue;
}
case 5717: {
b=s.pop(); a=s.pop(); s.push((a + b) | 0);
pc=5718; continue;
}
case 5718: {
v=s.splice(s.length-2,2);
o=s.pop();
s.push(o.getBGCode$2(v[0],v[1]));
pc=5721; continue;
}
case 5721: {
s.push(20);
pc=5723; continue;
}
case 5723: {
b=s.pop(); a=s.pop();
pc=(a<b)?5732:5726; continue;
}
case 5726: {
s.push(l[15]);
pc=5728; continue;
}
case 5728: {
s.push(0);
pc=5729; continue;
}
case 5729: {
v=s.pop(); o=s.pop(); o.c=v;
pc=5732; continue;
}
case 5732: {
s.push(l[15]);
pc=5734; continue;
}
case 5734: {
o=s.pop(); s.push(o.x);
pc=5737; continue;
}
case 5737: {
s.push(l[0]);
pc=5738; continue;
}
case 5738: {
o=s.pop(); s.push(o.maps);
pc=5741; continue;
}
case 5741: {
o=s.pop(); s.push(o.wx);
pc=5744; continue;
}
case 5744: {
s.push(32);
pc=5746; continue;
}
case 5746: {
b=s.pop(); a=s.pop(); s.push((a - b) | 0);
pc=5747; continue;
}
case 5747: {
s.push(64);
pc=5749; continue;
}
case 5749: {
b=s.pop(); a=s.pop(); s.push((a - b) | 0);
pc=5750; continue;
}
case 5750: {
b=s.pop(); a=s.pop();
pc=(a<=b)?5775:5753; continue;
}
case 5753: {
s.push(l[15]);
pc=5755; continue;
}
case 5755: {
o=s.pop(); s.push(o.x);
pc=5758; continue;
}
case 5758: {
s.push(l[0]);
pc=5759; continue;
}
case 5759: {
o=s.pop(); s.push(o.maps);
pc=5762; continue;
}
case 5762: {
o=s.pop(); s.push(o.wx);
pc=5765; continue;
}
case 5765: {
s.push(512);
pc=5768; continue;
}
case 5768: {
b=s.pop(); a=s.pop(); s.push((a + b) | 0);
pc=5769; continue;
}
case 5769: {
s.push(64);
pc=5771; continue;
}
case 5771: {
b=s.pop(); a=s.pop(); s.push((a + b) | 0);
pc=5772; continue;
}
case 5772: {
b=s.pop(); a=s.pop();
pc=(a<b)?5781:5775; continue;
}
case 5775: {
s.push(l[15]);
pc=5777; continue;
}
case 5777: {
s.push(0);
pc=5778; continue;
}
case 5778: {
v=s.pop(); o=s.pop(); o.c=v;
pc=5781; continue;
}
case 5781: {
s.push(l[15]);
pc=5783; continue;
}
case 5783: {
o=s.pop(); s.push(o.y);
pc=5786; continue;
}
case 5786: {
s.push(l[0]);
pc=5787; continue;
}
case 5787: {
o=s.pop(); s.push(o.maps);
pc=5790; continue;
}
case 5790: {
o=s.pop(); s.push(o.wy);
pc=5793; continue;
}
case 5793: {
s.push(320);
pc=5796; continue;
}
case 5796: {
b=s.pop(); a=s.pop(); s.push((a + b) | 0);
pc=5797; continue;
}
case 5797: {
s.push(32);
pc=5799; continue;
}
case 5799: {
b=s.pop(); a=s.pop(); s.push((a + b) | 0);
pc=5800; continue;
}
case 5800: {
b=s.pop(); a=s.pop();
pc=(a<b)?5809:5803; continue;
}
case 5803: {
s.push(l[15]);
pc=5805; continue;
}
case 5805: {
s.push(0);
pc=5806; continue;
}
case 5806: {
v=s.pop(); o=s.pop(); o.c=v;
pc=5809; continue;
}
case 5809: {
s.push(l[15]);
pc=5811; continue;
}
case 5811: {
s.push(256);
pc=5814; continue;
}
case 5814: {
s.push(l[0]);
pc=5815; continue;
}
case 5815: {
o=s.pop(); s.push(o.g_c1);
pc=5818; continue;
}
case 5818: {
b=s.pop(); a=s.pop(); s.push((a + b) | 0);
pc=5819; continue;
}
case 5819: {
v=s.pop(); o=s.pop(); o.pt=v;
pc=5822; continue;
}
case 5822: {
s.push(l[15]);
pc=5824; continue;
}
case 5824: {
s.push(0);
pc=5825; continue;
}
case 5825: {
v=s.pop(); o=s.pop(); o.pth=v;
pc=5828; continue;
}
case 5828: {
pc=11361; continue;
}
case 5831: {
s.push(l[15]);
pc=5833; continue;
}
case 5833: {
s.push(s[s.length-1]);
pc=5834; continue;
}
case 5834: {
o=s.pop(); s.push(o.x);
pc=5837; continue;
}
case 5837: {
s.push(l[15]);
pc=5839; continue;
}
case 5839: {
o=s.pop(); s.push(o.vx);
pc=5842; continue;
}
case 5842: {
s.push(10);
pc=5844; continue;
}
case 5844: {
b=s.pop(); a=s.pop(); s.push(J.div(a,b));
pc=5845; continue;
}
case 5845: {
b=s.pop(); a=s.pop(); s.push((a + b) | 0);
pc=5846; continue;
}
case 5846: {
v=s.pop(); o=s.pop(); o.x=v;
pc=5849; continue;
}
case 5849: {
s.push(l[15]);
pc=5851; continue;
}
case 5851: {
s.push(s[s.length-1]);
pc=5852; continue;
}
case 5852: {
o=s.pop(); s.push(o.vy);
pc=5855; continue;
}
case 5855: {
s.push(25);
pc=5857; continue;
}
case 5857: {
b=s.pop(); a=s.pop(); s.push((a + b) | 0);
pc=5858; continue;
}
case 5858: {
v=s.pop(); o=s.pop(); o.vy=v;
pc=5861; continue;
}
case 5861: {
s.push(l[15]);
pc=5863; continue;
}
case 5863: {
o=s.pop(); s.push(o.vy);
pc=5866; continue;
}
case 5866: {
s.push(150);
pc=5869; continue;
}
case 5869: {
b=s.pop(); a=s.pop();
pc=(a<=b)?5880:5872; continue;
}
case 5872: {
s.push(l[15]);
pc=5874; continue;
}
case 5874: {
s.push(150);
pc=5877; continue;
}
case 5877: {
v=s.pop(); o=s.pop(); o.vy=v;
pc=5880; continue;
}
case 5880: {
s.push(l[15]);
pc=5882; continue;
}
case 5882: {
o=s.pop(); s.push(o.vy);
pc=5885; continue;
}
case 5885: {
s.push(120);
pc=5887; continue;
}
case 5887: {
b=s.pop(); a=s.pop();
pc=(a<=b)?5955:5890; continue;
}
case 5890: {
s.push(l[15]);
pc=5892; continue;
}
case 5892: {
o=s.pop(); s.push(o.vx);
pc=5895; continue;
}
case 5895: {
v=s.splice(s.length-1,1);
s.push(Math.abs(v[0]));
pc=5898; continue;
}
case 5898: {
s.push(10);
pc=5900; continue;
}
case 5900: {
b=s.pop(); a=s.pop();
pc=(a>b)?5912:5903; continue;
}
case 5903: {
s.push(l[15]);
pc=5905; continue;
}
case 5905: {
s.push(0);
pc=5906; continue;
}
case 5906: {
v=s.pop(); o=s.pop(); o.vx=v;
pc=5909; continue;
}
case 5909: {
pc=5955; continue;
}
case 5912: {
s.push(l[15]);
pc=5914; continue;
}
case 5914: {
o=s.pop(); s.push(o.vx);
pc=5917; continue;
}
case 5917: {
a=s.pop();
pc=(a<=0)?5935:5920; continue;
}
case 5920: {
s.push(l[15]);
pc=5922; continue;
}
case 5922: {
s.push(s[s.length-1]);
pc=5923; continue;
}
case 5923: {
o=s.pop(); s.push(o.vx);
pc=5926; continue;
}
case 5926: {
s.push(10);
pc=5928; continue;
}
case 5928: {
b=s.pop(); a=s.pop(); s.push((a - b) | 0);
pc=5929; continue;
}
case 5929: {
v=s.pop(); o=s.pop(); o.vx=v;
pc=5932; continue;
}
case 5932: {
pc=5955; continue;
}
case 5935: {
s.push(l[15]);
pc=5937; continue;
}
case 5937: {
o=s.pop(); s.push(o.vx);
pc=5940; continue;
}
case 5940: {
a=s.pop();
pc=(a>=0)?5955:5943; continue;
}
case 5943: {
s.push(l[15]);
pc=5945; continue;
}
case 5945: {
s.push(s[s.length-1]);
pc=5946; continue;
}
case 5946: {
o=s.pop(); s.push(o.vx);
pc=5949; continue;
}
case 5949: {
s.push(10);
pc=5951; continue;
}
case 5951: {
b=s.pop(); a=s.pop(); s.push((a + b) | 0);
pc=5952; continue;
}
case 5952: {
v=s.pop(); o=s.pop(); o.vx=v;
pc=5955; continue;
}
case 5955: {
s.push(l[15]);
pc=5957; continue;
}
case 5957: {
s.push(s[s.length-1]);
pc=5958; continue;
}
case 5958: {
o=s.pop(); s.push(o.y);
pc=5961; continue;
}
case 5961: {
s.push(l[15]);
pc=5963; continue;
}
case 5963: {
o=s.pop(); s.push(o.vy);
pc=5966; continue;
}
case 5966: {
s.push(10);
pc=5968; continue;
}
case 5968: {
b=s.pop(); a=s.pop(); s.push(J.div(a,b));
pc=5969; continue;
}
case 5969: {
b=s.pop(); a=s.pop(); s.push((a + b) | 0);
pc=5970; continue;
}
case 5970: {
v=s.pop(); o=s.pop(); o.y=v;
pc=5973; continue;
}
case 5973: {
s.push(l[0]);
pc=5974; continue;
}
case 5974: {
o=s.pop(); s.push(o.maps);
pc=5977; continue;
}
case 5977: {
s.push(l[15]);
pc=5979; continue;
}
case 5979: {
o=s.pop(); s.push(o.x);
pc=5982; continue;
}
case 5982: {
s.push(15);
pc=5984; continue;
}
case 5984: {
b=s.pop(); a=s.pop(); s.push((a + b) | 0);
pc=5985; continue;
}
case 5985: {
s.push(l[15]);
pc=5987; continue;
}
case 5987: {
o=s.pop(); s.push(o.y);
pc=5990; continue;
}
case 5990: {
s.push(15);
pc=5992; continue;
}
case 5992: {
b=s.pop(); a=s.pop(); s.push((a + b) | 0);
pc=5993; continue;
}
case 5993: {
v=s.splice(s.length-2,2);
o=s.pop();
s.push(o.getBGCode$2(v[0],v[1]));
pc=5996; continue;
}
case 5996: {
s.push(20);
pc=5998; continue;
}
case 5998: {
b=s.pop(); a=s.pop();
pc=(a<b)?6007:6001; continue;
}
case 6001: {
s.push(l[15]);
pc=6003; continue;
}
case 6003: {
s.push(0);
pc=6004; continue;
}
case 6004: {
v=s.pop(); o=s.pop(); o.c=v;
pc=6007; continue;
}
case 6007: {
s.push(l[15]);
pc=6009; continue;
}
case 6009: {
o=s.pop(); s.push(o.x);
pc=6012; continue;
}
case 6012: {
s.push(l[0]);
pc=6013; continue;
}
case 6013: {
o=s.pop(); s.push(o.maps);
pc=6016; continue;
}
case 6016: {
o=s.pop(); s.push(o.wx);
pc=6019; continue;
}
case 6019: {
s.push(32);
pc=6021; continue;
}
case 6021: {
b=s.pop(); a=s.pop(); s.push((a - b) | 0);
pc=6022; continue;
}
case 6022: {
s.push(64);
pc=6024; continue;
}
case 6024: {
b=s.pop(); a=s.pop(); s.push((a - b) | 0);
pc=6025; continue;
}
case 6025: {
b=s.pop(); a=s.pop();
pc=(a<=b)?6050:6028; continue;
}
case 6028: {
s.push(l[15]);
pc=6030; continue;
}
case 6030: {
o=s.pop(); s.push(o.x);
pc=6033; continue;
}
case 6033: {
s.push(l[0]);
pc=6034; continue;
}
case 6034: {
o=s.pop(); s.push(o.maps);
pc=6037; continue;
}
case 6037: {
o=s.pop(); s.push(o.wx);
pc=6040; continue;
}
case 6040: {
s.push(512);
pc=6043; continue;
}
case 6043: {
b=s.pop(); a=s.pop(); s.push((a + b) | 0);
pc=6044; continue;
}
case 6044: {
s.push(64);
pc=6046; continue;
}
case 6046: {
b=s.pop(); a=s.pop(); s.push((a + b) | 0);
pc=6047; continue;
}
case 6047: {
b=s.pop(); a=s.pop();
pc=(a<b)?6059:6050; continue;
}
case 6050: {
s.push(l[15]);
pc=6052; continue;
}
case 6052: {
s.push(0);
pc=6053; continue;
}
case 6053: {
v=s.pop(); o=s.pop(); o.c=v;
pc=6056; continue;
}
case 6056: {
pc=6087; continue;
}
case 6059: {
s.push(l[15]);
pc=6061; continue;
}
case 6061: {
o=s.pop(); s.push(o.y);
pc=6064; continue;
}
case 6064: {
s.push(l[0]);
pc=6065; continue;
}
case 6065: {
o=s.pop(); s.push(o.maps);
pc=6068; continue;
}
case 6068: {
o=s.pop(); s.push(o.wy);
pc=6071; continue;
}
case 6071: {
s.push(320);
pc=6074; continue;
}
case 6074: {
b=s.pop(); a=s.pop(); s.push((a + b) | 0);
pc=6075; continue;
}
case 6075: {
s.push(32);
pc=6077; continue;
}
case 6077: {
b=s.pop(); a=s.pop(); s.push((a + b) | 0);
pc=6078; continue;
}
case 6078: {
b=s.pop(); a=s.pop();
pc=(a<b)?6087:6081; continue;
}
case 6081: {
s.push(l[15]);
pc=6083; continue;
}
case 6083: {
s.push(0);
pc=6084; continue;
}
case 6084: {
v=s.pop(); o=s.pop(); o.c=v;
pc=6087; continue;
}
case 6087: {
s.push(l[15]);
pc=6089; continue;
}
case 6089: {
s.push(265);
pc=6092; continue;
}
case 6092: {
v=s.pop(); o=s.pop(); o.pt=v;
pc=6095; continue;
}
case 6095: {
s.push(l[15]);
pc=6097; continue;
}
case 6097: {
o=s.pop(); s.push(o.vx);
pc=6100; continue;
}
case 6100: {
a=s.pop();
pc=(a<0)?6112:6103; continue;
}
case 6103: {
s.push(l[15]);
pc=6105; continue;
}
case 6105: {
s.push(1);
pc=6106; continue;
}
case 6106: {
v=s.pop(); o=s.pop(); o.pth=v;
pc=6109; continue;
}
case 6109: {
pc=11361; continue;
}
case 6112: {
s.push(l[15]);
pc=6114; continue;
}
case 6114: {
s.push(0);
pc=6115; continue;
}
case 6115: {
v=s.pop(); o=s.pop(); o.pth=v;
pc=6118; continue;
}
case 6118: {
pc=11361; continue;
}
case 6121: {
s.push(l[15]);
pc=6123; continue;
}
case 6123: {
s.push(s[s.length-1]);
pc=6124; continue;
}
case 6124: {
o=s.pop(); s.push(o.x);
pc=6127; continue;
}
case 6127: {
s.push(l[15]);
pc=6129; continue;
}
case 6129: {
o=s.pop(); s.push(o.vx);
pc=6132; continue;
}
case 6132: {
s.push(10);
pc=6134; continue;
}
case 6134: {
b=s.pop(); a=s.pop(); s.push(J.div(a,b));
pc=6135; continue;
}
case 6135: {
b=s.pop(); a=s.pop(); s.push((a + b) | 0);
pc=6136; continue;
}
case 6136: {
v=s.pop(); o=s.pop(); o.x=v;
pc=6139; continue;
}
case 6139: {
s.push(l[15]);
pc=6141; continue;
}
case 6141: {
s.push(s[s.length-1]);
pc=6142; continue;
}
case 6142: {
o=s.pop(); s.push(o.y);
pc=6145; continue;
}
case 6145: {
s.push(l[15]);
pc=6147; continue;
}
case 6147: {
o=s.pop(); s.push(o.vy);
pc=6150; continue;
}
case 6150: {
s.push(10);
pc=6152; continue;
}
case 6152: {
b=s.pop(); a=s.pop(); s.push(J.div(a,b));
pc=6153; continue;
}
case 6153: {
b=s.pop(); a=s.pop(); s.push((a + b) | 0);
pc=6154; continue;
}
case 6154: {
v=s.pop(); o=s.pop(); o.y=v;
pc=6157; continue;
}
case 6157: {
s.push(l[15]);
pc=6159; continue;
}
case 6159: {
o=s.pop(); s.push(o.x);
pc=6162; continue;
}
case 6162: {
s.push(l[0]);
pc=6163; continue;
}
case 6163: {
o=s.pop(); s.push(o.maps);
pc=6166; continue;
}
case 6166: {
o=s.pop(); s.push(o.wx);
pc=6169; continue;
}
case 6169: {
s.push(32);
pc=6171; continue;
}
case 6171: {
b=s.pop(); a=s.pop(); s.push((a - b) | 0);
pc=6172; continue;
}
case 6172: {
s.push(64);
pc=6174; continue;
}
case 6174: {
b=s.pop(); a=s.pop(); s.push((a - b) | 0);
pc=6175; continue;
}
case 6175: {
b=s.pop(); a=s.pop();
pc=(a<=b)?6200:6178; continue;
}
case 6178: {
s.push(l[15]);
pc=6180; continue;
}
case 6180: {
o=s.pop(); s.push(o.x);
pc=6183; continue;
}
case 6183: {
s.push(l[0]);
pc=6184; continue;
}
case 6184: {
o=s.pop(); s.push(o.maps);
pc=6187; continue;
}
case 6187: {
o=s.pop(); s.push(o.wx);
pc=6190; continue;
}
case 6190: {
s.push(512);
pc=6193; continue;
}
case 6193: {
b=s.pop(); a=s.pop(); s.push((a + b) | 0);
pc=6194; continue;
}
case 6194: {
s.push(64);
pc=6196; continue;
}
case 6196: {
b=s.pop(); a=s.pop(); s.push((a + b) | 0);
pc=6197; continue;
}
case 6197: {
b=s.pop(); a=s.pop();
pc=(a<b)?6209:6200; continue;
}
case 6200: {
s.push(l[15]);
pc=6202; continue;
}
case 6202: {
s.push(0);
pc=6203; continue;
}
case 6203: {
v=s.pop(); o=s.pop(); o.c=v;
pc=6206; continue;
}
case 6206: {
pc=6255; continue;
}
case 6209: {
s.push(l[15]);
pc=6211; continue;
}
case 6211: {
o=s.pop(); s.push(o.y);
pc=6214; continue;
}
case 6214: {
s.push(l[0]);
pc=6215; continue;
}
case 6215: {
o=s.pop(); s.push(o.maps);
pc=6218; continue;
}
case 6218: {
o=s.pop(); s.push(o.wy);
pc=6221; continue;
}
case 6221: {
s.push(32);
pc=6223; continue;
}
case 6223: {
b=s.pop(); a=s.pop(); s.push((a - b) | 0);
pc=6224; continue;
}
case 6224: {
b=s.pop(); a=s.pop();
pc=(a<=b)?6249:6227; continue;
}
case 6227: {
s.push(l[15]);
pc=6229; continue;
}
case 6229: {
o=s.pop(); s.push(o.y);
pc=6232; continue;
}
case 6232: {
s.push(l[0]);
pc=6233; continue;
}
case 6233: {
o=s.pop(); s.push(o.maps);
pc=6236; continue;
}
case 6236: {
o=s.pop(); s.push(o.wy);
pc=6239; continue;
}
case 6239: {
s.push(320);
pc=6242; continue;
}
case 6242: {
b=s.pop(); a=s.pop(); s.push((a + b) | 0);
pc=6243; continue;
}
case 6243: {
s.push(32);
pc=6245; continue;
}
case 6245: {
b=s.pop(); a=s.pop(); s.push((a + b) | 0);
pc=6246; continue;
}
case 6246: {
b=s.pop(); a=s.pop();
pc=(a<b)?6255:6249; continue;
}
case 6249: {
s.push(l[15]);
pc=6251; continue;
}
case 6251: {
s.push(0);
pc=6252; continue;
}
case 6252: {
v=s.pop(); o=s.pop(); o.c=v;
pc=6255; continue;
}
case 6255: {
s.push(l[15]);
pc=6257; continue;
}
case 6257: {
s.push(s[s.length-1]);
pc=6258; continue;
}
case 6258: {
o=s.pop(); s.push(o.c1);
pc=6261; continue;
}
case 6261: {
s.push(1);
pc=6262; continue;
}
case 6262: {
b=s.pop(); a=s.pop(); s.push((a + b) | 0);
pc=6263; continue;
}
case 6263: {
v=s.pop(); o=s.pop(); o.c1=v;
pc=6266; continue;
}
case 6266: {
s.push(l[15]);
pc=6268; continue;
}
case 6268: {
o=s.pop(); s.push(o.c1);
pc=6271; continue;
}
case 6271: {
s.push(32);
pc=6273; continue;
}
case 6273: {
b=s.pop(); a=s.pop();
pc=(a<=b)?6282:6276; continue;
}
case 6276: {
s.push(l[15]);
pc=6278; continue;
}
case 6278: {
s.push(0);
pc=6279; continue;
}
case 6279: {
v=s.pop(); o=s.pop(); o.c=v;
pc=6282; continue;
}
case 6282: {
s.push(l[15]);
pc=6284; continue;
}
case 6284: {
s.push(1900);
pc=6287; continue;
}
case 6287: {
v=s.pop(); o=s.pop(); o.pt=v;
pc=6290; continue;
}
case 6290: {
s.push(l[15]);
pc=6292; continue;
}
case 6292: {
s.push(0);
pc=6293; continue;
}
case 6293: {
v=s.pop(); o=s.pop(); o.pth=v;
pc=6296; continue;
}
case 6296: {
pc=11361; continue;
}
case 6299: {
s.push(l[15]);
pc=6301; continue;
}
case 6301: {
s.push(s[s.length-1]);
pc=6302; continue;
}
case 6302: {
o=s.pop(); s.push(o.x);
pc=6305; continue;
}
case 6305: {
s.push(l[15]);
pc=6307; continue;
}
case 6307: {
o=s.pop(); s.push(o.vx);
pc=6310; continue;
}
case 6310: {
s.push(10);
pc=6312; continue;
}
case 6312: {
b=s.pop(); a=s.pop(); s.push(J.div(a,b));
pc=6313; continue;
}
case 6313: {
b=s.pop(); a=s.pop(); s.push((a + b) | 0);
pc=6314; continue;
}
case 6314: {
v=s.pop(); o=s.pop(); o.x=v;
pc=6317; continue;
}
case 6317: {
s.push(l[15]);
pc=6319; continue;
}
case 6319: {
s.push(s[s.length-1]);
pc=6320; continue;
}
case 6320: {
o=s.pop(); s.push(o.y);
pc=6323; continue;
}
case 6323: {
s.push(l[15]);
pc=6325; continue;
}
case 6325: {
o=s.pop(); s.push(o.vy);
pc=6328; continue;
}
case 6328: {
s.push(10);
pc=6330; continue;
}
case 6330: {
b=s.pop(); a=s.pop(); s.push(J.div(a,b));
pc=6331; continue;
}
case 6331: {
b=s.pop(); a=s.pop(); s.push((a + b) | 0);
pc=6332; continue;
}
case 6332: {
v=s.pop(); o=s.pop(); o.y=v;
pc=6335; continue;
}
case 6335: {
s.push(l[0]);
pc=6336; continue;
}
case 6336: {
o=s.pop(); s.push(o.maps);
pc=6339; continue;
}
case 6339: {
s.push(l[15]);
pc=6341; continue;
}
case 6341: {
o=s.pop(); s.push(o.x);
pc=6344; continue;
}
case 6344: {
s.push(15);
pc=6346; continue;
}
case 6346: {
b=s.pop(); a=s.pop(); s.push((a + b) | 0);
pc=6347; continue;
}
case 6347: {
s.push(l[15]);
pc=6349; continue;
}
case 6349: {
o=s.pop(); s.push(o.y);
pc=6352; continue;
}
case 6352: {
s.push(15);
pc=6354; continue;
}
case 6354: {
b=s.pop(); a=s.pop(); s.push((a + b) | 0);
pc=6355; continue;
}
case 6355: {
v=s.splice(s.length-2,2);
o=s.pop();
s.push(o.getBGCode$2(v[0],v[1]));
pc=6358; continue;
}
case 6358: {
s.push(20);
pc=6360; continue;
}
case 6360: {
b=s.pop(); a=s.pop();
pc=(a<b)?6369:6363; continue;
}
case 6363: {
s.push(l[15]);
pc=6365; continue;
}
case 6365: {
s.push(0);
pc=6366; continue;
}
case 6366: {
v=s.pop(); o=s.pop(); o.c=v;
pc=6369; continue;
}
case 6369: {
s.push(l[15]);
pc=6371; continue;
}
case 6371: {
o=s.pop(); s.push(o.x);
pc=6374; continue;
}
case 6374: {
s.push(l[0]);
pc=6375; continue;
}
case 6375: {
o=s.pop(); s.push(o.maps);
pc=6378; continue;
}
case 6378: {
o=s.pop(); s.push(o.wx);
pc=6381; continue;
}
case 6381: {
s.push(32);
pc=6383; continue;
}
case 6383: {
b=s.pop(); a=s.pop(); s.push((a - b) | 0);
pc=6384; continue;
}
case 6384: {
s.push(64);
pc=6386; continue;
}
case 6386: {
b=s.pop(); a=s.pop(); s.push((a - b) | 0);
pc=6387; continue;
}
case 6387: {
b=s.pop(); a=s.pop();
pc=(a<=b)?6412:6390; continue;
}
case 6390: {
s.push(l[15]);
pc=6392; continue;
}
case 6392: {
o=s.pop(); s.push(o.x);
pc=6395; continue;
}
case 6395: {
s.push(l[0]);
pc=6396; continue;
}
case 6396: {
o=s.pop(); s.push(o.maps);
pc=6399; continue;
}
case 6399: {
o=s.pop(); s.push(o.wx);
pc=6402; continue;
}
case 6402: {
s.push(512);
pc=6405; continue;
}
case 6405: {
b=s.pop(); a=s.pop(); s.push((a + b) | 0);
pc=6406; continue;
}
case 6406: {
s.push(64);
pc=6408; continue;
}
case 6408: {
b=s.pop(); a=s.pop(); s.push((a + b) | 0);
pc=6409; continue;
}
case 6409: {
b=s.pop(); a=s.pop();
pc=(a<b)?6421:6412; continue;
}
case 6412: {
s.push(l[15]);
pc=6414; continue;
}
case 6414: {
s.push(0);
pc=6415; continue;
}
case 6415: {
v=s.pop(); o=s.pop(); o.c=v;
pc=6418; continue;
}
case 6418: {
pc=6467; continue;
}
case 6421: {
s.push(l[15]);
pc=6423; continue;
}
case 6423: {
o=s.pop(); s.push(o.y);
pc=6426; continue;
}
case 6426: {
s.push(l[0]);
pc=6427; continue;
}
case 6427: {
o=s.pop(); s.push(o.maps);
pc=6430; continue;
}
case 6430: {
o=s.pop(); s.push(o.wy);
pc=6433; continue;
}
case 6433: {
s.push(32);
pc=6435; continue;
}
case 6435: {
b=s.pop(); a=s.pop(); s.push((a - b) | 0);
pc=6436; continue;
}
case 6436: {
b=s.pop(); a=s.pop();
pc=(a<=b)?6461:6439; continue;
}
case 6439: {
s.push(l[15]);
pc=6441; continue;
}
case 6441: {
o=s.pop(); s.push(o.y);
pc=6444; continue;
}
case 6444: {
s.push(l[0]);
pc=6445; continue;
}
case 6445: {
o=s.pop(); s.push(o.maps);
pc=6448; continue;
}
case 6448: {
o=s.pop(); s.push(o.wy);
pc=6451; continue;
}
case 6451: {
s.push(320);
pc=6454; continue;
}
case 6454: {
b=s.pop(); a=s.pop(); s.push((a + b) | 0);
pc=6455; continue;
}
case 6455: {
s.push(32);
pc=6457; continue;
}
case 6457: {
b=s.pop(); a=s.pop(); s.push((a + b) | 0);
pc=6458; continue;
}
case 6458: {
b=s.pop(); a=s.pop();
pc=(a<b)?6467:6461; continue;
}
case 6461: {
s.push(l[15]);
pc=6463; continue;
}
case 6463: {
s.push(0);
pc=6464; continue;
}
case 6464: {
v=s.pop(); o=s.pop(); o.c=v;
pc=6467; continue;
}
case 6467: {
s.push(l[15]);
pc=6469; continue;
}
case 6469: {
s.push(s[s.length-1]);
pc=6470; continue;
}
case 6470: {
o=s.pop(); s.push(o.c1);
pc=6473; continue;
}
case 6473: {
s.push(1);
pc=6474; continue;
}
case 6474: {
b=s.pop(); a=s.pop(); s.push((a + b) | 0);
pc=6475; continue;
}
case 6475: {
v=s.pop(); o=s.pop(); o.c1=v;
pc=6478; continue;
}
case 6478: {
s.push(l[15]);
pc=6480; continue;
}
case 6480: {
o=s.pop(); s.push(o.c1);
pc=6483; continue;
}
case 6483: {
s.push(18);
pc=6485; continue;
}
case 6485: {
b=s.pop(); a=s.pop();
pc=(a<=b)?6494:6488; continue;
}
case 6488: {
s.push(l[15]);
pc=6490; continue;
}
case 6490: {
s.push(0);
pc=6491; continue;
}
case 6491: {
v=s.pop(); o=s.pop(); o.c=v;
pc=6494; continue;
}
case 6494: {
s.push(l[15]);
pc=6496; continue;
}
case 6496: {
s.push(249);
pc=6499; continue;
}
case 6499: {
v=s.pop(); o=s.pop(); o.pt=v;
pc=6502; continue;
}
case 6502: {
s.push(l[15]);
pc=6504; continue;
}
case 6504: {
s.push(0);
pc=6505; continue;
}
case 6505: {
v=s.pop(); o=s.pop(); o.pth=v;
pc=6508; continue;
}
case 6508: {
pc=11361; continue;
}
case 6511: {
s.push(l[15]);
pc=6513; continue;
}
case 6513: {
o=s.pop(); s.push(o.c2);
pc=6516; continue;
}
case 6516: {
a=s.pop();
pc=(a!=0)?6576:6519; continue;
}
case 6519: {
s.push(l[15]);
pc=6521; continue;
}
case 6521: {
s.push(s[s.length-1]);
pc=6522; continue;
}
case 6522: {
o=s.pop(); s.push(o.c3);
pc=6525; continue;
}
case 6525: {
s.push(8);
pc=6527; continue;
}
case 6527: {
b=s.pop(); a=s.pop(); s.push((a - b) | 0);
pc=6528; continue;
}
case 6528: {
v=s.pop(); o=s.pop(); o.c3=v;
pc=6531; continue;
}
case 6531: {
s.push(l[15]);
pc=6533; continue;
}
case 6533: {
o=s.pop(); s.push(o.c3);
pc=6536; continue;
}
case 6536: {
s.push(16);
pc=6538; continue;
}
case 6538: {
b=s.pop(); a=s.pop();
pc=(a>b)?6548:6541; continue;
}
case 6541: {
s.push(l[15]);
pc=6543; continue;
}
case 6543: {
s.push(100);
pc=6545; continue;
}
case 6545: {
v=s.pop(); o=s.pop(); o.c2=v;
pc=6548; continue;
}
case 6548: {
s.push(l[0]);
pc=6549; continue;
}
case 6549: {
o=s.pop(); s.push(o.co_p);
pc=6552; continue;
}
case 6552: {
s.push(l[15]);
pc=6554; continue;
}
case 6554: {
o=s.pop(); s.push(o.mid);
pc=6557; continue;
}
case 6557: {
a=s.pop(); o=s.pop(); s.push(o[a]);
pc=6558; continue;
}
case 6558: {
o=s.pop(); s.push(o.c);
pc=6561; continue;
}
case 6561: {
s.push(1440);
pc=6564; continue;
}
case 6564: {
b=s.pop(); a=s.pop();
pc=(a===b)?6855:6567; continue;
}
case 6567: {
s.push(l[15]);
pc=6569; continue;
}
case 6569: {
s.push(0);
pc=6570; continue;
}
case 6570: {
v=s.pop(); o=s.pop(); o.c=v;
pc=6573; continue;
}
case 6573: {
pc=6855; continue;
}
case 6576: {
s.push(l[15]);
pc=6578; continue;
}
case 6578: {
o=s.pop(); s.push(o.c2);
pc=6581; continue;
}
case 6581: {
s.push(100);
pc=6583; continue;
}
case 6583: {
b=s.pop(); a=s.pop();
pc=(a!==b)?6657:6586; continue;
}
case 6586: {
s.push(l[15]);
pc=6588; continue;
}
case 6588: {
s.push(s[s.length-1]);
pc=6589; continue;
}
case 6589: {
o=s.pop(); s.push(o.c3);
pc=6592; continue;
}
case 6592: {
s.push(3);
pc=6593; continue;
}
case 6593: {
b=s.pop(); a=s.pop(); s.push((a + b) | 0);
pc=6594; continue;
}
case 6594: {
v=s.pop(); o=s.pop(); o.c3=v;
pc=6597; continue;
}
case 6597: {
s.push(l[15]);
pc=6599; continue;
}
case 6599: {
o=s.pop(); s.push(o.c3);
pc=6602; continue;
}
case 6602: {
s.push(34);
pc=6604; continue;
}
case 6604: {
b=s.pop(); a=s.pop();
pc=(a<b)?6629:6607; continue;
}
case 6607: {
s.push(l[15]);
pc=6609; continue;
}
case 6609: {
s.push(34);
pc=6611; continue;
}
case 6611: {
v=s.pop(); o=s.pop(); o.c3=v;
pc=6614; continue;
}
case 6614: {
s.push(l[15]);
pc=6616; continue;
}
case 6616: {
s.push(200);
pc=6619; continue;
}
case 6619: {
v=s.pop(); o=s.pop(); o.c2=v;
pc=6622; continue;
}
case 6622: {
s.push(l[15]);
pc=6624; continue;
}
case 6624: {
s.push(7);
pc=6626; continue;
}
case 6626: {
v=s.pop(); o=s.pop(); o.c4=v;
pc=6629; continue;
}
case 6629: {
s.push(l[0]);
pc=6630; continue;
}
case 6630: {
o=s.pop(); s.push(o.co_p);
pc=6633; continue;
}
case 6633: {
s.push(l[15]);
pc=6635; continue;
}
case 6635: {
o=s.pop(); s.push(o.mid);
pc=6638; continue;
}
case 6638: {
a=s.pop(); o=s.pop(); s.push(o[a]);
pc=6639; continue;
}
case 6639: {
o=s.pop(); s.push(o.c);
pc=6642; continue;
}
case 6642: {
s.push(1440);
pc=6645; continue;
}
case 6645: {
b=s.pop(); a=s.pop();
pc=(a===b)?6855:6648; continue;
}
case 6648: {
s.push(l[15]);
pc=6650; continue;
}
case 6650: {
s.push(0);
pc=6651; continue;
}
case 6651: {
v=s.pop(); o=s.pop(); o.c=v;
pc=6654; continue;
}
case 6654: {
pc=6855; continue;
}
case 6657: {
s.push(l[15]);
pc=6659; continue;
}
case 6659: {
o=s.pop(); s.push(o.c2);
pc=6662; continue;
}
case 6662: {
s.push(200);
pc=6665; continue;
}
case 6665: {
b=s.pop(); a=s.pop();
pc=(a!==b)?6855:6668; continue;
}
case 6668: {
s.push(l[15]);
pc=6670; continue;
}
case 6670: {
s.push(s[s.length-1]);
pc=6671; continue;
}
case 6671: {
o=s.pop(); s.push(o.x);
pc=6674; continue;
}
case 6674: {
s.push(30);
pc=6676; continue;
}
case 6676: {
b=s.pop(); a=s.pop(); s.push((a + b) | 0);
pc=6677; continue;
}
case 6677: {
v=s.pop(); o=s.pop(); o.x=v;
pc=6680; continue;
}
case 6680: {
s.push(l[15]);
pc=6682; continue;
}
case 6682: {
o=s.pop(); s.push(o.x);
pc=6685; continue;
}
case 6685: {
s.push(l[0]);
pc=6686; continue;
}
case 6686: {
o=s.pop(); s.push(o.maps);
pc=6689; continue;
}
case 6689: {
o=s.pop(); s.push(o.wx);
pc=6692; continue;
}
case 6692: {
s.push(512);
pc=6695; continue;
}
case 6695: {
b=s.pop(); a=s.pop(); s.push((a + b) | 0);
pc=6696; continue;
}
case 6696: {
b=s.pop(); a=s.pop();
pc=(a<b)?6715:6699; continue;
}
case 6699: {
s.push(l[15]);
pc=6701; continue;
}
case 6701: {
s.push(l[0]);
pc=6702; continue;
}
case 6702: {
o=s.pop(); s.push(o.maps);
pc=6705; continue;
}
case 6705: {
o=s.pop(); s.push(o.wx);
pc=6708; continue;
}
case 6708: {
s.push(512);
pc=6711; continue;
}
case 6711: {
b=s.pop(); a=s.pop(); s.push((a + b) | 0);
pc=6712; continue;
}
case 6712: {
v=s.pop(); o=s.pop(); o.x=v;
pc=6715; continue;
}
case 6715: {
s.push(l[0]);
pc=6716; continue;
}
case 6716: {
o=s.pop(); s.push(o.maps);
pc=6719; continue;
}
case 6719: {
s.push(l[15]);
pc=6721; continue;
}
case 6721: {
o=s.pop(); s.push(o.x);
pc=6724; continue;
}
case 6724: {
s.push(l[15]);
pc=6726; continue;
}
case 6726: {
o=s.pop(); s.push(o.y);
pc=6729; continue;
}
case 6729: {
s.push(15);
pc=6731; continue;
}
case 6731: {
b=s.pop(); a=s.pop(); s.push((a + b) | 0);
pc=6732; continue;
}
case 6732: {
v=s.splice(s.length-2,2);
o=s.pop();
s.push(o.getBGCode$2(v[0],v[1]));
pc=6735; continue;
}
case 6735: {
s.push(20);
pc=6737; continue;
}
case 6737: {
b=s.pop(); a=s.pop();
pc=(a<b)?6758:6740; continue;
}
case 6740: {
s.push(l[15]);
pc=6742; continue;
}
case 6742: {
s.push(l[15]);
pc=6744; continue;
}
case 6744: {
o=s.pop(); s.push(o.x);
pc=6747; continue;
}
case 6747: {
s.push(32);
pc=6749; continue;
}
case 6749: {
b=s.pop(); a=s.pop(); s.push(J.div(a,b));
pc=6750; continue;
}
case 6750: {
s.push(32);
pc=6752; continue;
}
case 6752: {
b=s.pop(); a=s.pop(); s.push(Math.imul(a,b));
pc=6753; continue;
}
case 6753: {
s.push(1);
pc=6754; continue;
}
case 6754: {
b=s.pop(); a=s.pop(); s.push((a - b) | 0);
pc=6755; continue;
}
case 6755: {
v=s.pop(); o=s.pop(); o.x=v;
pc=6758; continue;
}
case 6758: {
s.push(l[15]);
pc=6760; continue;
}
case 6760: {
o=s.pop(); s.push(o.c4);
pc=6763; continue;
}
case 6763: {
a=s.pop();
pc=(a<=0)?6780:6766; continue;
}
case 6766: {
s.push(l[15]);
pc=6768; continue;
}
case 6768: {
s.push(s[s.length-1]);
pc=6769; continue;
}
case 6769: {
o=s.pop(); s.push(o.c4);
pc=6772; continue;
}
case 6772: {
s.push(1);
pc=6773; continue;
}
case 6773: {
b=s.pop(); a=s.pop(); s.push((a - b) | 0);
pc=6774; continue;
}
case 6774: {
v=s.pop(); o=s.pop(); o.c4=v;
pc=6777; continue;
}
case 6777: {
pc=6817; continue;
}
case 6780: {
s.push(l[15]);
pc=6782; continue;
}
case 6782: {
s.push(s[s.length-1]);
pc=6783; continue;
}
case 6783: {
o=s.pop(); s.push(o.vx);
pc=6786; continue;
}
case 6786: {
s.push(30);
pc=6788; continue;
}
case 6788: {
b=s.pop(); a=s.pop(); s.push((a + b) | 0);
pc=6789; continue;
}
case 6789: {
v=s.pop(); o=s.pop(); o.vx=v;
pc=6792; continue;
}
case 6792: {
s.push(l[15]);
pc=6794; continue;
}
case 6794: {
o=s.pop(); s.push(o.vx);
pc=6797; continue;
}
case 6797: {
s.push(l[15]);
pc=6799; continue;
}
case 6799: {
o=s.pop(); s.push(o.x);
pc=6802; continue;
}
case 6802: {
b=s.pop(); a=s.pop();
pc=(a<b)?6811:6805; continue;
}
case 6805: {
s.push(l[15]);
pc=6807; continue;
}
case 6807: {
s.push(0);
pc=6808; continue;
}
case 6808: {
v=s.pop(); o=s.pop(); o.c=v;
pc=6811; continue;
}
case 6811: {
s.push(l[15]);
pc=6813; continue;
}
case 6813: {
s.push(-1);
pc=6814; continue;
}
case 6814: {
v=s.pop(); o=s.pop(); o.c3=v;
pc=6817; continue;
}
case 6817: {
s.push(l[0]);
pc=6818; continue;
}
case 6818: {
s.push(l[1]);
pc=6819; continue;
}
case 6819: {
s.push(0);
pc=6820; continue;
}
case 6820: {
s.push(1);
pc=6821; continue;
}
case 6821: {
s.push(l[15]);
pc=6823; continue;
}
case 6823: {
o=s.pop(); s.push(o.ap);
pc=6826; continue;
}
case 6826: {
s.push(l[0]);
pc=6827; continue;
}
case 6827: {
o=s.pop(); s.push(o.co_p);
pc=6830; continue;
}
case 6830: {
s.push(l[15]);
pc=6832; continue;
}
case 6832: {
o=s.pop(); s.push(o.mid);
pc=6835; continue;
}
case 6835: {
a=s.pop(); o=s.pop(); s.push(o[a]);
pc=6836; continue;
}
case 6836: {
o=s.pop(); s.push(o.name);
pc=6839; continue;
}
case 6839: {
s.push(l[0]);
pc=6840; continue;
}
case 6840: {
o=s.pop(); s.push(o.co_p);
pc=6843; continue;
}
case 6843: {
s.push(l[15]);
pc=6845; continue;
}
case 6845: {
o=s.pop(); s.push(o.mid);
pc=6848; continue;
}
case 6848: {
a=s.pop(); o=s.pop(); s.push(o[a]);
pc=6849; continue;
}
case 6849: {
o=s.pop(); s.push(o.seibetu);
pc=6852; continue;
}
case 6852: {
v=s.splice(s.length-6,6);
o=s.pop();
o.wHaniDmage$6(v[0],v[1],v[2],v[3],v[4],v[5]);
pc=6855; continue;
}
case 6855: {
s.push(l[15]);
pc=6857; continue;
}
case 6857: {
s.push(1000);
pc=6860; continue;
}
case 6860: {
v=s.pop(); o=s.pop(); o.pt=v;
pc=6863; continue;
}
case 6863: {
pc=11361; continue;
}
case 6866: {
s.push(l[15]);
pc=6868; continue;
}
case 6868: {
o=s.pop(); s.push(o.c2);
pc=6871; continue;
}
case 6871: {
a=s.pop();
pc=(a!=0)?6931:6874; continue;
}
case 6874: {
s.push(l[15]);
pc=6876; continue;
}
case 6876: {
s.push(s[s.length-1]);
pc=6877; continue;
}
case 6877: {
o=s.pop(); s.push(o.c3);
pc=6880; continue;
}
case 6880: {
s.push(8);
pc=6882; continue;
}
case 6882: {
b=s.pop(); a=s.pop(); s.push((a - b) | 0);
pc=6883; continue;
}
case 6883: {
v=s.pop(); o=s.pop(); o.c3=v;
pc=6886; continue;
}
case 6886: {
s.push(l[15]);
pc=6888; continue;
}
case 6888: {
o=s.pop(); s.push(o.c3);
pc=6891; continue;
}
case 6891: {
s.push(16);
pc=6893; continue;
}
case 6893: {
b=s.pop(); a=s.pop();
pc=(a>b)?6903:6896; continue;
}
case 6896: {
s.push(l[15]);
pc=6898; continue;
}
case 6898: {
s.push(100);
pc=6900; continue;
}
case 6900: {
v=s.pop(); o=s.pop(); o.c2=v;
pc=6903; continue;
}
case 6903: {
s.push(l[0]);
pc=6904; continue;
}
case 6904: {
o=s.pop(); s.push(o.co_w);
pc=6907; continue;
}
case 6907: {
s.push(l[15]);
pc=6909; continue;
}
case 6909: {
o=s.pop(); s.push(o.mid);
pc=6912; continue;
}
case 6912: {
a=s.pop(); o=s.pop(); s.push(o[a]);
pc=6913; continue;
}
case 6913: {
o=s.pop(); s.push(o.c);
pc=6916; continue;
}
case 6916: {
s.push(1440);
pc=6919; continue;
}
case 6919: {
b=s.pop(); a=s.pop();
pc=(a===b)?7177:6922; continue;
}
case 6922: {
s.push(l[15]);
pc=6924; continue;
}
case 6924: {
s.push(0);
pc=6925; continue;
}
case 6925: {
v=s.pop(); o=s.pop(); o.c=v;
pc=6928; continue;
}
case 6928: {
pc=7177; continue;
}
case 6931: {
s.push(l[15]);
pc=6933; continue;
}
case 6933: {
o=s.pop(); s.push(o.c2);
pc=6936; continue;
}
case 6936: {
s.push(100);
pc=6938; continue;
}
case 6938: {
b=s.pop(); a=s.pop();
pc=(a!==b)?7012:6941; continue;
}
case 6941: {
s.push(l[15]);
pc=6943; continue;
}
case 6943: {
s.push(s[s.length-1]);
pc=6944; continue;
}
case 6944: {
o=s.pop(); s.push(o.c3);
pc=6947; continue;
}
case 6947: {
s.push(3);
pc=6948; continue;
}
case 6948: {
b=s.pop(); a=s.pop(); s.push((a + b) | 0);
pc=6949; continue;
}
case 6949: {
v=s.pop(); o=s.pop(); o.c3=v;
pc=6952; continue;
}
case 6952: {
s.push(l[15]);
pc=6954; continue;
}
case 6954: {
o=s.pop(); s.push(o.c3);
pc=6957; continue;
}
case 6957: {
s.push(34);
pc=6959; continue;
}
case 6959: {
b=s.pop(); a=s.pop();
pc=(a<b)?6984:6962; continue;
}
case 6962: {
s.push(l[15]);
pc=6964; continue;
}
case 6964: {
s.push(34);
pc=6966; continue;
}
case 6966: {
v=s.pop(); o=s.pop(); o.c3=v;
pc=6969; continue;
}
case 6969: {
s.push(l[15]);
pc=6971; continue;
}
case 6971: {
s.push(200);
pc=6974; continue;
}
case 6974: {
v=s.pop(); o=s.pop(); o.c2=v;
pc=6977; continue;
}
case 6977: {
s.push(l[15]);
pc=6979; continue;
}
case 6979: {
s.push(7);
pc=6981; continue;
}
case 6981: {
v=s.pop(); o=s.pop(); o.c4=v;
pc=6984; continue;
}
case 6984: {
s.push(l[0]);
pc=6985; continue;
}
case 6985: {
o=s.pop(); s.push(o.co_w);
pc=6988; continue;
}
case 6988: {
s.push(l[15]);
pc=6990; continue;
}
case 6990: {
o=s.pop(); s.push(o.mid);
pc=6993; continue;
}
case 6993: {
a=s.pop(); o=s.pop(); s.push(o[a]);
pc=6994; continue;
}
case 6994: {
o=s.pop(); s.push(o.c);
pc=6997; continue;
}
case 6997: {
s.push(1440);
pc=7000; continue;
}
case 7000: {
b=s.pop(); a=s.pop();
pc=(a===b)?7177:7003; continue;
}
case 7003: {
s.push(l[15]);
pc=7005; continue;
}
case 7005: {
s.push(0);
pc=7006; continue;
}
case 7006: {
v=s.pop(); o=s.pop(); o.c=v;
pc=7009; continue;
}
case 7009: {
pc=7177; continue;
}
case 7012: {
s.push(l[15]);
pc=7014; continue;
}
case 7014: {
o=s.pop(); s.push(o.c2);
pc=7017; continue;
}
case 7017: {
s.push(200);
pc=7020; continue;
}
case 7020: {
b=s.pop(); a=s.pop();
pc=(a!==b)?7177:7023; continue;
}
case 7023: {
s.push(l[15]);
pc=7025; continue;
}
case 7025: {
s.push(s[s.length-1]);
pc=7026; continue;
}
case 7026: {
o=s.pop(); s.push(o.x);
pc=7029; continue;
}
case 7029: {
s.push(30);
pc=7031; continue;
}
case 7031: {
b=s.pop(); a=s.pop(); s.push((a - b) | 0);
pc=7032; continue;
}
case 7032: {
v=s.pop(); o=s.pop(); o.x=v;
pc=7035; continue;
}
case 7035: {
s.push(l[15]);
pc=7037; continue;
}
case 7037: {
o=s.pop(); s.push(o.x);
pc=7040; continue;
}
case 7040: {
s.push(l[0]);
pc=7041; continue;
}
case 7041: {
o=s.pop(); s.push(o.maps);
pc=7044; continue;
}
case 7044: {
o=s.pop(); s.push(o.wx);
pc=7047; continue;
}
case 7047: {
b=s.pop(); a=s.pop();
pc=(a>b)?7062:7050; continue;
}
case 7050: {
s.push(l[15]);
pc=7052; continue;
}
case 7052: {
s.push(l[0]);
pc=7053; continue;
}
case 7053: {
o=s.pop(); s.push(o.maps);
pc=7056; continue;
}
case 7056: {
o=s.pop(); s.push(o.wx);
pc=7059; continue;
}
case 7059: {
v=s.pop(); o=s.pop(); o.x=v;
pc=7062; continue;
}
case 7062: {
s.push(l[0]);
pc=7063; continue;
}
case 7063: {
o=s.pop(); s.push(o.maps);
pc=7066; continue;
}
case 7066: {
s.push(l[15]);
pc=7068; continue;
}
case 7068: {
o=s.pop(); s.push(o.x);
pc=7071; continue;
}
case 7071: {
s.push(l[15]);
pc=7073; continue;
}
case 7073: {
o=s.pop(); s.push(o.y);
pc=7076; continue;
}
case 7076: {
s.push(15);
pc=7078; continue;
}
case 7078: {
b=s.pop(); a=s.pop(); s.push((a + b) | 0);
pc=7079; continue;
}
case 7079: {
v=s.splice(s.length-2,2);
o=s.pop();
s.push(o.getBGCode$2(v[0],v[1]));
pc=7082; continue;
}
case 7082: {
s.push(20);
pc=7084; continue;
}
case 7084: {
b=s.pop(); a=s.pop();
pc=(a<b)?7106:7087; continue;
}
case 7087: {
s.push(l[15]);
pc=7089; continue;
}
case 7089: {
s.push(l[15]);
pc=7091; continue;
}
case 7091: {
o=s.pop(); s.push(o.x);
pc=7094; continue;
}
case 7094: {
s.push(32);
pc=7096; continue;
}
case 7096: {
b=s.pop(); a=s.pop(); s.push(J.div(a,b));
pc=7097; continue;
}
case 7097: {
s.push(32);
pc=7099; continue;
}
case 7099: {
b=s.pop(); a=s.pop(); s.push(Math.imul(a,b));
pc=7100; continue;
}
case 7100: {
s.push(32);
pc=7102; continue;
}
case 7102: {
b=s.pop(); a=s.pop(); s.push((a + b) | 0);
pc=7103; continue;
}
case 7103: {
v=s.pop(); o=s.pop(); o.x=v;
pc=7106; continue;
}
case 7106: {
s.push(l[15]);
pc=7108; continue;
}
case 7108: {
o=s.pop(); s.push(o.c4);
pc=7111; continue;
}
case 7111: {
a=s.pop();
pc=(a<=0)?7128:7114; continue;
}
case 7114: {
s.push(l[15]);
pc=7116; continue;
}
case 7116: {
s.push(s[s.length-1]);
pc=7117; continue;
}
case 7117: {
o=s.pop(); s.push(o.c4);
pc=7120; continue;
}
case 7120: {
s.push(1);
pc=7121; continue;
}
case 7121: {
b=s.pop(); a=s.pop(); s.push((a - b) | 0);
pc=7122; continue;
}
case 7122: {
v=s.pop(); o=s.pop(); o.c4=v;
pc=7125; continue;
}
case 7125: {
pc=7165; continue;
}
case 7128: {
s.push(l[15]);
pc=7130; continue;
}
case 7130: {
s.push(s[s.length-1]);
pc=7131; continue;
}
case 7131: {
o=s.pop(); s.push(o.vx);
pc=7134; continue;
}
case 7134: {
s.push(30);
pc=7136; continue;
}
case 7136: {
b=s.pop(); a=s.pop(); s.push((a - b) | 0);
pc=7137; continue;
}
case 7137: {
v=s.pop(); o=s.pop(); o.vx=v;
pc=7140; continue;
}
case 7140: {
s.push(l[15]);
pc=7142; continue;
}
case 7142: {
o=s.pop(); s.push(o.vx);
pc=7145; continue;
}
case 7145: {
s.push(l[15]);
pc=7147; continue;
}
case 7147: {
o=s.pop(); s.push(o.x);
pc=7150; continue;
}
case 7150: {
b=s.pop(); a=s.pop();
pc=(a>b)?7159:7153; continue;
}
case 7153: {
s.push(l[15]);
pc=7155; continue;
}
case 7155: {
s.push(0);
pc=7156; continue;
}
case 7156: {
v=s.pop(); o=s.pop(); o.c=v;
pc=7159; continue;
}
case 7159: {
s.push(l[15]);
pc=7161; continue;
}
case 7161: {
s.push(-1);
pc=7162; continue;
}
case 7162: {
v=s.pop(); o=s.pop(); o.c3=v;
pc=7165; continue;
}
case 7165: {
s.push(l[0]);
pc=7166; continue;
}
case 7166: {
s.push(l[1]);
pc=7167; continue;
}
case 7167: {
s.push(0);
pc=7168; continue;
}
case 7168: {
s.push(1);
pc=7169; continue;
}
case 7169: {
s.push(l[15]);
pc=7171; continue;
}
case 7171: {
o=s.pop(); s.push(o.ap);
pc=7174; continue;
}
case 7174: {
v=s.splice(s.length-4,4);
o=s.pop();
o.pHaniDmage$4(v[0],v[1],v[2],v[3]);
pc=7177; continue;
}
case 7177: {
s.push(l[15]);
pc=7179; continue;
}
case 7179: {
s.push(1005);
pc=7182; continue;
}
case 7182: {
v=s.pop(); o=s.pop(); o.pt=v;
pc=7185; continue;
}
case 7185: {
pc=11361; continue;
}
case 7188: {
s.push(l[15]);
pc=7190; continue;
}
case 7190: {
o=s.pop(); s.push(o.c2);
pc=7193; continue;
}
case 7193: {
a=s.pop();
pc=(a!=0)?7320:7196; continue;
}
case 7196: {
s.push(l[15]);
pc=7198; continue;
}
case 7198: {
s.push(s[s.length-1]);
pc=7199; continue;
}
case 7199: {
o=s.pop(); s.push(o.c3);
pc=7202; continue;
}
case 7202: {
s.push(4);
pc=7203; continue;
}
case 7203: {
b=s.pop(); a=s.pop(); s.push((a - b) | 0);
pc=7204; continue;
}
case 7204: {
v=s.pop(); o=s.pop(); o.c3=v;
pc=7207; continue;
}
case 7207: {
s.push(l[15]);
pc=7209; continue;
}
case 7209: {
o=s.pop(); s.push(o.c3);
pc=7212; continue;
}
case 7212: {
s.push(32);
pc=7214; continue;
}
case 7214: {
b=s.pop(); a=s.pop();
pc=(a>b)?7239:7217; continue;
}
case 7217: {
s.push(l[15]);
pc=7219; continue;
}
case 7219: {
s.push(32);
pc=7221; continue;
}
case 7221: {
v=s.pop(); o=s.pop(); o.c3=v;
pc=7224; continue;
}
case 7224: {
s.push(l[15]);
pc=7226; continue;
}
case 7226: {
s.push(200);
pc=7229; continue;
}
case 7229: {
v=s.pop(); o=s.pop(); o.c2=v;
pc=7232; continue;
}
case 7232: {
s.push(l[15]);
pc=7234; continue;
}
case 7234: {
s.push(7);
pc=7236; continue;
}
case 7236: {
v=s.pop(); o=s.pop(); o.c4=v;
pc=7239; continue;
}
case 7239: {
s.push(l[15]);
pc=7241; continue;
}
case 7241: {
s.push(s[s.length-1]);
pc=7242; continue;
}
case 7242: {
o=s.pop(); s.push(o.c5);
pc=7245; continue;
}
case 7245: {
s.push(15);
pc=7247; continue;
}
case 7247: {
b=s.pop(); a=s.pop(); s.push((a + b) | 0);
pc=7248; continue;
}
case 7248: {
v=s.pop(); o=s.pop(); o.c5=v;
pc=7251; continue;
}
case 7251: {
s.push(l[15]);
pc=7253; continue;
}
case 7253: {
o=s.pop(); s.push(o.c5);
pc=7256; continue;
}
case 7256: {
s.push(90);
pc=7258; continue;
}
case 7258: {
b=s.pop(); a=s.pop();
pc=(a<b)?7273:7261; continue;
}
case 7261: {
s.push(l[15]);
pc=7263; continue;
}
case 7263: {
s.push(s[s.length-1]);
pc=7264; continue;
}
case 7264: {
o=s.pop(); s.push(o.c5);
pc=7267; continue;
}
case 7267: {
s.push(90);
pc=7269; continue;
}
case 7269: {
b=s.pop(); a=s.pop(); s.push((a - b) | 0);
pc=7270; continue;
}
case 7270: {
v=s.pop(); o=s.pop(); o.c5=v;
pc=7273; continue;
}
case 7273: {
s.push(l[0]);
pc=7274; continue;
}
case 7274: {
o=s.pop(); s.push(o.co_p);
pc=7277; continue;
}
case 7277: {
s.push(l[15]);
pc=7279; continue;
}
case 7279: {
o=s.pop(); s.push(o.mid);
pc=7282; continue;
}
case 7282: {
a=s.pop(); o=s.pop(); s.push(o[a]);
pc=7283; continue;
}
case 7283: {
o=s.pop(); s.push(o.c);
pc=7286; continue;
}
case 7286: {
s.push(1450);
pc=7289; continue;
}
case 7289: {
b=s.pop(); a=s.pop();
pc=(a===b)?7552:7292; continue;
}
case 7292: {
s.push(l[0]);
pc=7293; continue;
}
case 7293: {
o=s.pop(); s.push(o.co_p);
pc=7296; continue;
}
case 7296: {
s.push(l[15]);
pc=7298; continue;
}
case 7298: {
o=s.pop(); s.push(o.mid);
pc=7301; continue;
}
case 7301: {
a=s.pop(); o=s.pop(); s.push(o[a]);
pc=7302; continue;
}
case 7302: {
o=s.pop(); s.push(o.c);
pc=7305; continue;
}
case 7305: {
s.push(2450);
pc=7308; continue;
}
case 7308: {
b=s.pop(); a=s.pop();
pc=(a===b)?7552:7311; continue;
}
case 7311: {
s.push(l[15]);
pc=7313; continue;
}
case 7313: {
s.push(0);
pc=7314; continue;
}
case 7314: {
v=s.pop(); o=s.pop(); o.c=v;
pc=7317; continue;
}
case 7317: {
pc=7552; continue;
}
case 7320: {
s.push(l[15]);
pc=7322; continue;
}
case 7322: {
o=s.pop(); s.push(o.c2);
pc=7325; continue;
}
case 7325: {
s.push(200);
pc=7328; continue;
}
case 7328: {
b=s.pop(); a=s.pop();
pc=(a!==b)?7552:7331; continue;
}
case 7331: {
s.push(l[15]);
pc=7333; continue;
}
case 7333: {
s.push(s[s.length-1]);
pc=7334; continue;
}
case 7334: {
o=s.pop(); s.push(o.x);
pc=7337; continue;
}
case 7337: {
s.push(30);
pc=7339; continue;
}
case 7339: {
b=s.pop(); a=s.pop(); s.push((a + b) | 0);
pc=7340; continue;
}
case 7340: {
v=s.pop(); o=s.pop(); o.x=v;
pc=7343; continue;
}
case 7343: {
s.push(l[15]);
pc=7345; continue;
}
case 7345: {
o=s.pop(); s.push(o.x);
pc=7348; continue;
}
case 7348: {
s.push(l[0]);
pc=7349; continue;
}
case 7349: {
o=s.pop(); s.push(o.maps);
pc=7352; continue;
}
case 7352: {
o=s.pop(); s.push(o.wx);
pc=7355; continue;
}
case 7355: {
s.push(512);
pc=7358; continue;
}
case 7358: {
b=s.pop(); a=s.pop(); s.push((a + b) | 0);
pc=7359; continue;
}
case 7359: {
b=s.pop(); a=s.pop();
pc=(a<b)?7378:7362; continue;
}
case 7362: {
s.push(l[15]);
pc=7364; continue;
}
case 7364: {
s.push(l[0]);
pc=7365; continue;
}
case 7365: {
o=s.pop(); s.push(o.maps);
pc=7368; continue;
}
case 7368: {
o=s.pop(); s.push(o.wx);
pc=7371; continue;
}
case 7371: {
s.push(512);
pc=7374; continue;
}
case 7374: {
b=s.pop(); a=s.pop(); s.push((a + b) | 0);
pc=7375; continue;
}
case 7375: {
v=s.pop(); o=s.pop(); o.x=v;
pc=7378; continue;
}
case 7378: {
s.push(l[0]);
pc=7379; continue;
}
case 7379: {
o=s.pop(); s.push(o.maps);
pc=7382; continue;
}
case 7382: {
s.push(l[15]);
pc=7384; continue;
}
case 7384: {
o=s.pop(); s.push(o.x);
pc=7387; continue;
}
case 7387: {
s.push(l[15]);
pc=7389; continue;
}
case 7389: {
o=s.pop(); s.push(o.y);
pc=7392; continue;
}
case 7392: {
s.push(15);
pc=7394; continue;
}
case 7394: {
b=s.pop(); a=s.pop(); s.push((a + b) | 0);
pc=7395; continue;
}
case 7395: {
v=s.splice(s.length-2,2);
o=s.pop();
s.push(o.getBGCode$2(v[0],v[1]));
pc=7398; continue;
}
case 7398: {
s.push(20);
pc=7400; continue;
}
case 7400: {
b=s.pop(); a=s.pop();
pc=(a<b)?7421:7403; continue;
}
case 7403: {
s.push(l[15]);
pc=7405; continue;
}
case 7405: {
s.push(l[15]);
pc=7407; continue;
}
case 7407: {
o=s.pop(); s.push(o.x);
pc=7410; continue;
}
case 7410: {
s.push(32);
pc=7412; continue;
}
case 7412: {
b=s.pop(); a=s.pop(); s.push(J.div(a,b));
pc=7413; continue;
}
case 7413: {
s.push(32);
pc=7415; continue;
}
case 7415: {
b=s.pop(); a=s.pop(); s.push(Math.imul(a,b));
pc=7416; continue;
}
case 7416: {
s.push(1);
pc=7417; continue;
}
case 7417: {
b=s.pop(); a=s.pop(); s.push((a - b) | 0);
pc=7418; continue;
}
case 7418: {
v=s.pop(); o=s.pop(); o.x=v;
pc=7421; continue;
}
case 7421: {
s.push(l[15]);
pc=7423; continue;
}
case 7423: {
o=s.pop(); s.push(o.c4);
pc=7426; continue;
}
case 7426: {
a=s.pop();
pc=(a<=0)?7477:7429; continue;
}
case 7429: {
s.push(l[15]);
pc=7431; continue;
}
case 7431: {
s.push(s[s.length-1]);
pc=7432; continue;
}
case 7432: {
o=s.pop(); s.push(o.c4);
pc=7435; continue;
}
case 7435: {
s.push(1);
pc=7436; continue;
}
case 7436: {
b=s.pop(); a=s.pop(); s.push((a - b) | 0);
pc=7437; continue;
}
case 7437: {
v=s.pop(); o=s.pop(); o.c4=v;
pc=7440; continue;
}
case 7440: {
s.push(l[15]);
pc=7442; continue;
}
case 7442: {
s.push(s[s.length-1]);
pc=7443; continue;
}
case 7443: {
o=s.pop(); s.push(o.c5);
pc=7446; continue;
}
case 7446: {
s.push(15);
pc=7448; continue;
}
case 7448: {
b=s.pop(); a=s.pop(); s.push((a + b) | 0);
pc=7449; continue;
}
case 7449: {
v=s.pop(); o=s.pop(); o.c5=v;
pc=7452; continue;
}
case 7452: {
s.push(l[15]);
pc=7454; continue;
}
case 7454: {
o=s.pop(); s.push(o.c5);
pc=7457; continue;
}
case 7457: {
s.push(90);
pc=7459; continue;
}
case 7459: {
b=s.pop(); a=s.pop();
pc=(a<b)?7514:7462; continue;
}
case 7462: {
s.push(l[15]);
pc=7464; continue;
}
case 7464: {
s.push(s[s.length-1]);
pc=7465; continue;
}
case 7465: {
o=s.pop(); s.push(o.c5);
pc=7468; continue;
}
case 7468: {
s.push(90);
pc=7470; continue;
}
case 7470: {
b=s.pop(); a=s.pop(); s.push((a - b) | 0);
pc=7471; continue;
}
case 7471: {
v=s.pop(); o=s.pop(); o.c5=v;
pc=7474; continue;
}
case 7474: {
pc=7514; continue;
}
case 7477: {
s.push(l[15]);
pc=7479; continue;
}
case 7479: {
s.push(s[s.length-1]);
pc=7480; continue;
}
case 7480: {
o=s.pop(); s.push(o.vx);
pc=7483; continue;
}
case 7483: {
s.push(30);
pc=7485; continue;
}
case 7485: {
b=s.pop(); a=s.pop(); s.push((a + b) | 0);
pc=7486; continue;
}
case 7486: {
v=s.pop(); o=s.pop(); o.vx=v;
pc=7489; continue;
}
case 7489: {
s.push(l[15]);
pc=7491; continue;
}
case 7491: {
o=s.pop(); s.push(o.vx);
pc=7494; continue;
}
case 7494: {
s.push(l[15]);
pc=7496; continue;
}
case 7496: {
o=s.pop(); s.push(o.x);
pc=7499; continue;
}
case 7499: {
b=s.pop(); a=s.pop();
pc=(a<b)?7508:7502; continue;
}
case 7502: {
s.push(l[15]);
pc=7504; continue;
}
case 7504: {
s.push(0);
pc=7505; continue;
}
case 7505: {
v=s.pop(); o=s.pop(); o.c=v;
pc=7508; continue;
}
case 7508: {
s.push(l[15]);
pc=7510; continue;
}
case 7510: {
s.push(-1);
pc=7511; continue;
}
case 7511: {
v=s.pop(); o=s.pop(); o.c3=v;
pc=7514; continue;
}
case 7514: {
s.push(l[0]);
pc=7515; continue;
}
case 7515: {
s.push(l[1]);
pc=7516; continue;
}
case 7516: {
s.push(0);
pc=7517; continue;
}
case 7517: {
s.push(2);
pc=7518; continue;
}
case 7518: {
s.push(l[15]);
pc=7520; continue;
}
case 7520: {
o=s.pop(); s.push(o.ap);
pc=7523; continue;
}
case 7523: {
s.push(l[0]);
pc=7524; continue;
}
case 7524: {
o=s.pop(); s.push(o.co_p);
pc=7527; continue;
}
case 7527: {
s.push(l[15]);
pc=7529; continue;
}
case 7529: {
o=s.pop(); s.push(o.mid);
pc=7532; continue;
}
case 7532: {
a=s.pop(); o=s.pop(); s.push(o[a]);
pc=7533; continue;
}
case 7533: {
o=s.pop(); s.push(o.name);
pc=7536; continue;
}
case 7536: {
s.push(l[0]);
pc=7537; continue;
}
case 7537: {
o=s.pop(); s.push(o.co_p);
pc=7540; continue;
}
case 7540: {
s.push(l[15]);
pc=7542; continue;
}
case 7542: {
o=s.pop(); s.push(o.mid);
pc=7545; continue;
}
case 7545: {
a=s.pop(); o=s.pop(); s.push(o[a]);
pc=7546; continue;
}
case 7546: {
o=s.pop(); s.push(o.seibetu);
pc=7549; continue;
}
case 7549: {
v=s.splice(s.length-6,6);
o=s.pop();
o.wHaniDmage$6(v[0],v[1],v[2],v[3],v[4],v[5]);
pc=7552; continue;
}
case 7552: {
s.push(l[15]);
pc=7554; continue;
}
case 7554: {
s.push(1100);
pc=7557; continue;
}
case 7557: {
v=s.pop(); o=s.pop(); o.pt=v;
pc=7560; continue;
}
case 7560: {
pc=11361; continue;
}
case 7563: {
s.push(l[15]);
pc=7565; continue;
}
case 7565: {
o=s.pop(); s.push(o.c2);
pc=7568; continue;
}
case 7568: {
a=s.pop();
pc=(a!=0)?7693:7571; continue;
}
case 7571: {
s.push(l[15]);
pc=7573; continue;
}
case 7573: {
s.push(s[s.length-1]);
pc=7574; continue;
}
case 7574: {
o=s.pop(); s.push(o.c3);
pc=7577; continue;
}
case 7577: {
s.push(4);
pc=7578; continue;
}
case 7578: {
b=s.pop(); a=s.pop(); s.push((a - b) | 0);
pc=7579; continue;
}
case 7579: {
v=s.pop(); o=s.pop(); o.c3=v;
pc=7582; continue;
}
case 7582: {
s.push(l[15]);
pc=7584; continue;
}
case 7584: {
o=s.pop(); s.push(o.c3);
pc=7587; continue;
}
case 7587: {
s.push(32);
pc=7589; continue;
}
case 7589: {
b=s.pop(); a=s.pop();
pc=(a>b)?7614:7592; continue;
}
case 7592: {
s.push(l[15]);
pc=7594; continue;
}
case 7594: {
s.push(32);
pc=7596; continue;
}
case 7596: {
v=s.pop(); o=s.pop(); o.c3=v;
pc=7599; continue;
}
case 7599: {
s.push(l[15]);
pc=7601; continue;
}
case 7601: {
s.push(200);
pc=7604; continue;
}
case 7604: {
v=s.pop(); o=s.pop(); o.c2=v;
pc=7607; continue;
}
case 7607: {
s.push(l[15]);
pc=7609; continue;
}
case 7609: {
s.push(7);
pc=7611; continue;
}
case 7611: {
v=s.pop(); o=s.pop(); o.c4=v;
pc=7614; continue;
}
case 7614: {
s.push(l[15]);
pc=7616; continue;
}
case 7616: {
s.push(s[s.length-1]);
pc=7617; continue;
}
case 7617: {
o=s.pop(); s.push(o.c5);
pc=7620; continue;
}
case 7620: {
s.push(15);
pc=7622; continue;
}
case 7622: {
b=s.pop(); a=s.pop(); s.push((a - b) | 0);
pc=7623; continue;
}
case 7623: {
v=s.pop(); o=s.pop(); o.c5=v;
pc=7626; continue;
}
case 7626: {
s.push(l[15]);
pc=7628; continue;
}
case 7628: {
o=s.pop(); s.push(o.c5);
pc=7631; continue;
}
case 7631: {
a=s.pop();
pc=(a>=0)?7646:7634; continue;
}
case 7634: {
s.push(l[15]);
pc=7636; continue;
}
case 7636: {
s.push(s[s.length-1]);
pc=7637; continue;
}
case 7637: {
o=s.pop(); s.push(o.c5);
pc=7640; continue;
}
case 7640: {
s.push(90);
pc=7642; continue;
}
case 7642: {
b=s.pop(); a=s.pop(); s.push((a + b) | 0);
pc=7643; continue;
}
case 7643: {
v=s.pop(); o=s.pop(); o.c5=v;
pc=7646; continue;
}
case 7646: {
s.push(l[0]);
pc=7647; continue;
}
case 7647: {
o=s.pop(); s.push(o.co_w);
pc=7650; continue;
}
case 7650: {
s.push(l[15]);
pc=7652; continue;
}
case 7652: {
o=s.pop(); s.push(o.mid);
pc=7655; continue;
}
case 7655: {
a=s.pop(); o=s.pop(); s.push(o[a]);
pc=7656; continue;
}
case 7656: {
o=s.pop(); s.push(o.c);
pc=7659; continue;
}
case 7659: {
s.push(1450);
pc=7662; continue;
}
case 7662: {
b=s.pop(); a=s.pop();
pc=(a===b)?7890:7665; continue;
}
case 7665: {
s.push(l[0]);
pc=7666; continue;
}
case 7666: {
o=s.pop(); s.push(o.co_w);
pc=7669; continue;
}
case 7669: {
s.push(l[15]);
pc=7671; continue;
}
case 7671: {
o=s.pop(); s.push(o.mid);
pc=7674; continue;
}
case 7674: {
a=s.pop(); o=s.pop(); s.push(o[a]);
pc=7675; continue;
}
case 7675: {
o=s.pop(); s.push(o.c);
pc=7678; continue;
}
case 7678: {
s.push(2450);
pc=7681; continue;
}
case 7681: {
b=s.pop(); a=s.pop();
pc=(a===b)?7890:7684; continue;
}
case 7684: {
s.push(l[15]);
pc=7686; continue;
}
case 7686: {
s.push(0);
pc=7687; continue;
}
case 7687: {
v=s.pop(); o=s.pop(); o.c=v;
pc=7690; continue;
}
case 7690: {
pc=7890; continue;
}
case 7693: {
s.push(l[15]);
pc=7695; continue;
}
case 7695: {
o=s.pop(); s.push(o.c2);
pc=7698; continue;
}
case 7698: {
s.push(200);
pc=7701; continue;
}
case 7701: {
b=s.pop(); a=s.pop();
pc=(a!==b)?7890:7704; continue;
}
case 7704: {
s.push(l[15]);
pc=7706; continue;
}
case 7706: {
s.push(s[s.length-1]);
pc=7707; continue;
}
case 7707: {
o=s.pop(); s.push(o.x);
pc=7710; continue;
}
case 7710: {
s.push(30);
pc=7712; continue;
}
case 7712: {
b=s.pop(); a=s.pop(); s.push((a - b) | 0);
pc=7713; continue;
}
case 7713: {
v=s.pop(); o=s.pop(); o.x=v;
pc=7716; continue;
}
case 7716: {
s.push(l[15]);
pc=7718; continue;
}
case 7718: {
o=s.pop(); s.push(o.x);
pc=7721; continue;
}
case 7721: {
s.push(l[0]);
pc=7722; continue;
}
case 7722: {
o=s.pop(); s.push(o.maps);
pc=7725; continue;
}
case 7725: {
o=s.pop(); s.push(o.wx);
pc=7728; continue;
}
case 7728: {
b=s.pop(); a=s.pop();
pc=(a>b)?7743:7731; continue;
}
case 7731: {
s.push(l[15]);
pc=7733; continue;
}
case 7733: {
s.push(l[0]);
pc=7734; continue;
}
case 7734: {
o=s.pop(); s.push(o.maps);
pc=7737; continue;
}
case 7737: {
o=s.pop(); s.push(o.wx);
pc=7740; continue;
}
case 7740: {
v=s.pop(); o=s.pop(); o.x=v;
pc=7743; continue;
}
case 7743: {
s.push(l[0]);
pc=7744; continue;
}
case 7744: {
o=s.pop(); s.push(o.maps);
pc=7747; continue;
}
case 7747: {
s.push(l[15]);
pc=7749; continue;
}
case 7749: {
o=s.pop(); s.push(o.x);
pc=7752; continue;
}
case 7752: {
s.push(l[15]);
pc=7754; continue;
}
case 7754: {
o=s.pop(); s.push(o.y);
pc=7757; continue;
}
case 7757: {
s.push(15);
pc=7759; continue;
}
case 7759: {
b=s.pop(); a=s.pop(); s.push((a + b) | 0);
pc=7760; continue;
}
case 7760: {
v=s.splice(s.length-2,2);
o=s.pop();
s.push(o.getBGCode$2(v[0],v[1]));
pc=7763; continue;
}
case 7763: {
s.push(20);
pc=7765; continue;
}
case 7765: {
b=s.pop(); a=s.pop();
pc=(a<b)?7787:7768; continue;
}
case 7768: {
s.push(l[15]);
pc=7770; continue;
}
case 7770: {
s.push(l[15]);
pc=7772; continue;
}
case 7772: {
o=s.pop(); s.push(o.x);
pc=7775; continue;
}
case 7775: {
s.push(32);
pc=7777; continue;
}
case 7777: {
b=s.pop(); a=s.pop(); s.push(J.div(a,b));
pc=7778; continue;
}
case 7778: {
s.push(32);
pc=7780; continue;
}
case 7780: {
b=s.pop(); a=s.pop(); s.push(Math.imul(a,b));
pc=7781; continue;
}
case 7781: {
s.push(32);
pc=7783; continue;
}
case 7783: {
b=s.pop(); a=s.pop(); s.push((a + b) | 0);
pc=7784; continue;
}
case 7784: {
v=s.pop(); o=s.pop(); o.x=v;
pc=7787; continue;
}
case 7787: {
s.push(l[15]);
pc=7789; continue;
}
case 7789: {
o=s.pop(); s.push(o.c4);
pc=7792; continue;
}
case 7792: {
a=s.pop();
pc=(a<=0)?7841:7795; continue;
}
case 7795: {
s.push(l[15]);
pc=7797; continue;
}
case 7797: {
s.push(s[s.length-1]);
pc=7798; continue;
}
case 7798: {
o=s.pop(); s.push(o.c4);
pc=7801; continue;
}
case 7801: {
s.push(1);
pc=7802; continue;
}
case 7802: {
b=s.pop(); a=s.pop(); s.push((a - b) | 0);
pc=7803; continue;
}
case 7803: {
v=s.pop(); o=s.pop(); o.c4=v;
pc=7806; continue;
}
case 7806: {
s.push(l[15]);
pc=7808; continue;
}
case 7808: {
s.push(s[s.length-1]);
pc=7809; continue;
}
case 7809: {
o=s.pop(); s.push(o.c5);
pc=7812; continue;
}
case 7812: {
s.push(15);
pc=7814; continue;
}
case 7814: {
b=s.pop(); a=s.pop(); s.push((a - b) | 0);
pc=7815; continue;
}
case 7815: {
v=s.pop(); o=s.pop(); o.c5=v;
pc=7818; continue;
}
case 7818: {
s.push(l[15]);
pc=7820; continue;
}
case 7820: {
o=s.pop(); s.push(o.c5);
pc=7823; continue;
}
case 7823: {
a=s.pop();
pc=(a>=0)?7878:7826; continue;
}
case 7826: {
s.push(l[15]);
pc=7828; continue;
}
case 7828: {
s.push(s[s.length-1]);
pc=7829; continue;
}
case 7829: {
o=s.pop(); s.push(o.c5);
pc=7832; continue;
}
case 7832: {
s.push(90);
pc=7834; continue;
}
case 7834: {
b=s.pop(); a=s.pop(); s.push((a + b) | 0);
pc=7835; continue;
}
case 7835: {
v=s.pop(); o=s.pop(); o.c5=v;
pc=7838; continue;
}
case 7838: {
pc=7878; continue;
}
case 7841: {
s.push(l[15]);
pc=7843; continue;
}
case 7843: {
s.push(s[s.length-1]);
pc=7844; continue;
}
case 7844: {
o=s.pop(); s.push(o.vx);
pc=7847; continue;
}
case 7847: {
s.push(30);
pc=7849; continue;
}
case 7849: {
b=s.pop(); a=s.pop(); s.push((a - b) | 0);
pc=7850; continue;
}
case 7850: {
v=s.pop(); o=s.pop(); o.vx=v;
pc=7853; continue;
}
case 7853: {
s.push(l[15]);
pc=7855; continue;
}
case 7855: {
o=s.pop(); s.push(o.vx);
pc=7858; continue;
}
case 7858: {
s.push(l[15]);
pc=7860; continue;
}
case 7860: {
o=s.pop(); s.push(o.x);
pc=7863; continue;
}
case 7863: {
b=s.pop(); a=s.pop();
pc=(a>b)?7872:7866; continue;
}
case 7866: {
s.push(l[15]);
pc=7868; continue;
}
case 7868: {
s.push(0);
pc=7869; continue;
}
case 7869: {
v=s.pop(); o=s.pop(); o.c=v;
pc=7872; continue;
}
case 7872: {
s.push(l[15]);
pc=7874; continue;
}
case 7874: {
s.push(-1);
pc=7875; continue;
}
case 7875: {
v=s.pop(); o=s.pop(); o.c3=v;
pc=7878; continue;
}
case 7878: {
s.push(l[0]);
pc=7879; continue;
}
case 7879: {
s.push(l[1]);
pc=7880; continue;
}
case 7880: {
s.push(0);
pc=7881; continue;
}
case 7881: {
s.push(2);
pc=7882; continue;
}
case 7882: {
s.push(l[15]);
pc=7884; continue;
}
case 7884: {
o=s.pop(); s.push(o.ap);
pc=7887; continue;
}
case 7887: {
v=s.splice(s.length-4,4);
o=s.pop();
o.pHaniDmage$4(v[0],v[1],v[2],v[3]);
pc=7890; continue;
}
case 7890: {
s.push(l[15]);
pc=7892; continue;
}
case 7892: {
s.push(1105);
pc=7895; continue;
}
case 7895: {
v=s.pop(); o=s.pop(); o.pt=v;
pc=7898; continue;
}
case 7898: {
pc=11361; continue;
}
case 7901: {
s.push(l[15]);
pc=7903; continue;
}
case 7903: {
o=s.pop(); s.push(o.c2);
pc=7906; continue;
}
case 7906: {
s.push(1);
pc=7907; continue;
}
case 7907: {
b=s.pop(); a=s.pop();
pc=(a!==b)?8081:7910; continue;
}
case 7910: {
s.push(l[15]);
pc=7912; continue;
}
case 7912: {
s.push(s[s.length-1]);
pc=7913; continue;
}
case 7913: {
o=s.pop(); s.push(o.y);
pc=7916; continue;
}
case 7916: {
s.push(30);
pc=7918; continue;
}
case 7918: {
b=s.pop(); a=s.pop(); s.push((a + b) | 0);
pc=7919; continue;
}
case 7919: {
v=s.pop(); o=s.pop(); o.y=v;
pc=7922; continue;
}
case 7922: {
s.push(l[15]);
pc=7924; continue;
}
case 7924: {
o=s.pop(); s.push(o.y);
pc=7927; continue;
}
case 7927: {
s.push(l[0]);
pc=7928; continue;
}
case 7928: {
o=s.pop(); s.push(o.maps);
pc=7931; continue;
}
case 7931: {
o=s.pop(); s.push(o.wy);
pc=7934; continue;
}
case 7934: {
s.push(320);
pc=7937; continue;
}
case 7937: {
b=s.pop(); a=s.pop(); s.push((a + b) | 0);
pc=7938; continue;
}
case 7938: {
b=s.pop(); a=s.pop();
pc=(a<b)?7957:7941; continue;
}
case 7941: {
s.push(l[15]);
pc=7943; continue;
}
case 7943: {
s.push(l[0]);
pc=7944; continue;
}
case 7944: {
o=s.pop(); s.push(o.maps);
pc=7947; continue;
}
case 7947: {
o=s.pop(); s.push(o.wy);
pc=7950; continue;
}
case 7950: {
s.push(320);
pc=7953; continue;
}
case 7953: {
b=s.pop(); a=s.pop(); s.push((a + b) | 0);
pc=7954; continue;
}
case 7954: {
v=s.pop(); o=s.pop(); o.y=v;
pc=7957; continue;
}
case 7957: {
s.push(l[0]);
pc=7958; continue;
}
case 7958: {
o=s.pop(); s.push(o.maps);
pc=7961; continue;
}
case 7961: {
s.push(l[15]);
pc=7963; continue;
}
case 7963: {
o=s.pop(); s.push(o.x);
pc=7966; continue;
}
case 7966: {
s.push(15);
pc=7968; continue;
}
case 7968: {
b=s.pop(); a=s.pop(); s.push((a + b) | 0);
pc=7969; continue;
}
case 7969: {
s.push(l[15]);
pc=7971; continue;
}
case 7971: {
o=s.pop(); s.push(o.y);
pc=7974; continue;
}
case 7974: {
v=s.splice(s.length-2,2);
o=s.pop();
s.push(o.getBGCode$2(v[0],v[1]));
pc=7977; continue;
}
case 7977: {
s.push(20);
pc=7979; continue;
}
case 7979: {
b=s.pop(); a=s.pop();
pc=(a<b)?8014:7982; continue;
}
case 7982: {
s.push(l[15]);
pc=7984; continue;
}
case 7984: {
s.push(l[15]);
pc=7986; continue;
}
case 7986: {
o=s.pop(); s.push(o.y);
pc=7989; continue;
}
case 7989: {
s.push(32);
pc=7991; continue;
}
case 7991: {
b=s.pop(); a=s.pop(); s.push(J.div(a,b));
pc=7992; continue;
}
case 7992: {
s.push(32);
pc=7994; continue;
}
case 7994: {
b=s.pop(); a=s.pop(); s.push(Math.imul(a,b));
pc=7995; continue;
}
case 7995: {
s.push(1);
pc=7996; continue;
}
case 7996: {
b=s.pop(); a=s.pop(); s.push((a - b) | 0);
pc=7997; continue;
}
case 7997: {
v=s.pop(); o=s.pop(); o.y=v;
pc=8000; continue;
}
case 8000: {
s.push(l[15]);
pc=8002; continue;
}
case 8002: {
o=s.pop(); s.push(o.c4);
pc=8005; continue;
}
case 8005: {
a=s.pop();
pc=(a!=0)?8014:8008; continue;
}
case 8008: {
s.push(l[15]);
pc=8010; continue;
}
case 8010: {
s.push(1);
pc=8011; continue;
}
case 8011: {
v=s.pop(); o=s.pop(); o.c4=v;
pc=8014; continue;
}
case 8014: {
s.push(l[15]);
pc=8016; continue;
}
case 8016: {
o=s.pop(); s.push(o.c1);
pc=8019; continue;
}
case 8019: {
s.push(7);
pc=8021; continue;
}
case 8021: {
b=s.pop(); a=s.pop();
pc=(a>=b)?8050:8024; continue;
}
case 8024: {
s.push(l[15]);
pc=8026; continue;
}
case 8026: {
s.push(s[s.length-1]);
pc=8027; continue;
}
case 8027: {
o=s.pop(); s.push(o.c1);
pc=8030; continue;
}
case 8030: {
s.push(1);
pc=8031; continue;
}
case 8031: {
b=s.pop(); a=s.pop(); s.push((a + b) | 0);
pc=8032; continue;
}
case 8032: {
v=s.pop(); o=s.pop(); o.c1=v;
pc=8035; continue;
}
case 8035: {
s.push(l[15]);
pc=8037; continue;
}
case 8037: {
s.push(l[0]);
pc=8038; continue;
}
case 8038: {
o=s.pop(); s.push(o.maps);
pc=8041; continue;
}
case 8041: {
o=s.pop(); s.push(o.wy);
pc=8044; continue;
}
case 8044: {
v=s.pop(); o=s.pop(); o.vy=v;
pc=8047; continue;
}
case 8047: {
pc=8081; continue;
}
case 8050: {
s.push(l[15]);
pc=8052; continue;
}
case 8052: {
s.push(s[s.length-1]);
pc=8053; continue;
}
case 8053: {
o=s.pop(); s.push(o.vy);
pc=8056; continue;
}
case 8056: {
s.push(30);
pc=8058; continue;
}
case 8058: {
b=s.pop(); a=s.pop(); s.push((a + b) | 0);
pc=8059; continue;
}
case 8059: {
v=s.pop(); o=s.pop(); o.vy=v;
pc=8062; continue;
}
case 8062: {
s.push(l[15]);
pc=8064; continue;
}
case 8064: {
o=s.pop(); s.push(o.vy);
pc=8067; continue;
}
case 8067: {
s.push(l[15]);
pc=8069; continue;
}
case 8069: {
o=s.pop(); s.push(o.y);
pc=8072; continue;
}
case 8072: {
b=s.pop(); a=s.pop();
pc=(a<b)?8081:8075; continue;
}
case 8075: {
s.push(l[15]);
pc=8077; continue;
}
case 8077: {
s.push(0);
pc=8078; continue;
}
case 8078: {
v=s.pop(); o=s.pop(); o.c2=v;
pc=8081; continue;
}
case 8081: {
s.push(l[15]);
pc=8083; continue;
}
case 8083: {
o=s.pop(); s.push(o.c4);
pc=8086; continue;
}
case 8086: {
a=s.pop();
pc=(a<=0)?8279:8089; continue;
}
case 8089: {
s.push(l[15]);
pc=8091; continue;
}
case 8091: {
o=s.pop(); s.push(o.c4);
pc=8094; continue;
}
case 8094: {
switch(s.pop()) {
case 1:pc=8148;break;
case 2:pc=8158;break;
case 3:pc=8168;break;
case 4:pc=8178;break;
case 5:pc=8188;break;
case 6:pc=8198;break;
case 7:pc=8208;break;
case 8:pc=8218;break;
case 9:pc=8228;break;
case 10:pc=8238;break;
default:pc=8245;
} continue;
}
case 8148: {
s.push(l[15]);
pc=8150; continue;
}
case 8150: {
s.push(20);
pc=8152; continue;
}
case 8152: {
v=s.pop(); o=s.pop(); o.c3=v;
pc=8155; continue;
}
case 8155: {
pc=8245; continue;
}
case 8158: {
s.push(l[15]);
pc=8160; continue;
}
case 8160: {
s.push(34);
pc=8162; continue;
}
case 8162: {
v=s.pop(); o=s.pop(); o.c3=v;
pc=8165; continue;
}
case 8165: {
pc=8245; continue;
}
case 8168: {
s.push(l[15]);
pc=8170; continue;
}
case 8170: {
s.push(46);
pc=8172; continue;
}
case 8172: {
v=s.pop(); o=s.pop(); o.c3=v;
pc=8175; continue;
}
case 8175: {
pc=8245; continue;
}
case 8178: {
s.push(l[15]);
pc=8180; continue;
}
case 8180: {
s.push(56);
pc=8182; continue;
}
case 8182: {
v=s.pop(); o=s.pop(); o.c3=v;
pc=8185; continue;
}
case 8185: {
pc=8245; continue;
}
case 8188: {
s.push(l[15]);
pc=8190; continue;
}
case 8190: {
s.push(64);
pc=8192; continue;
}
case 8192: {
v=s.pop(); o=s.pop(); o.c3=v;
pc=8195; continue;
}
case 8195: {
pc=8245; continue;
}
case 8198: {
s.push(l[15]);
pc=8200; continue;
}
case 8200: {
s.push(70);
pc=8202; continue;
}
case 8202: {
v=s.pop(); o=s.pop(); o.c3=v;
pc=8205; continue;
}
case 8205: {
pc=8245; continue;
}
case 8208: {
s.push(l[15]);
pc=8210; continue;
}
case 8210: {
s.push(74);
pc=8212; continue;
}
case 8212: {
v=s.pop(); o=s.pop(); o.c3=v;
pc=8215; continue;
}
case 8215: {
pc=8245; continue;
}
case 8218: {
s.push(l[15]);
pc=8220; continue;
}
case 8220: {
s.push(77);
pc=8222; continue;
}
case 8222: {
v=s.pop(); o=s.pop(); o.c3=v;
pc=8225; continue;
}
case 8225: {
pc=8245; continue;
}
case 8228: {
s.push(l[15]);
pc=8230; continue;
}
case 8230: {
s.push(79);
pc=8232; continue;
}
case 8232: {
v=s.pop(); o=s.pop(); o.c3=v;
pc=8235; continue;
}
case 8235: {
pc=8245; continue;
}
case 8238: {
s.push(l[15]);
pc=8240; continue;
}
case 8240: {
s.push(80);
pc=8242; continue;
}
case 8242: {
v=s.pop(); o=s.pop(); o.c3=v;
pc=8245; continue;
}
case 8245: {
s.push(l[15]);
pc=8247; continue;
}
case 8247: {
s.push(s[s.length-1]);
pc=8248; continue;
}
case 8248: {
o=s.pop(); s.push(o.c4);
pc=8251; continue;
}
case 8251: {
s.push(1);
pc=8252; continue;
}
case 8252: {
b=s.pop(); a=s.pop(); s.push((a + b) | 0);
pc=8253; continue;
}
case 8253: {
v=s.pop(); o=s.pop(); o.c4=v;
pc=8256; continue;
}
case 8256: {
s.push(l[15]);
pc=8258; continue;
}
case 8258: {
o=s.pop(); s.push(o.c4);
pc=8261; continue;
}
case 8261: {
s.push(10);
pc=8263; continue;
}
case 8263: {
b=s.pop(); a=s.pop();
pc=(a<=b)?8279:8266; continue;
}
case 8266: {
s.push(l[15]);
pc=8268; continue;
}
case 8268: {
s.push(10);
pc=8270; continue;
}
case 8270: {
v=s.pop(); o=s.pop(); o.c4=v;
pc=8273; continue;
}
case 8273: {
s.push(l[15]);
pc=8275; continue;
}
case 8275: {
s.push(0);
pc=8276; continue;
}
case 8276: {
v=s.pop(); o=s.pop(); o.c=v;
pc=8279; continue;
}
case 8279: {
s.push(l[15]);
pc=8281; continue;
}
case 8281: {
o=s.pop(); s.push(o.c2);
pc=8284; continue;
}
case 8284: {
a=s.pop();
pc=(a!=0)?8301:8287; continue;
}
case 8287: {
s.push(l[15]);
pc=8289; continue;
}
case 8289: {
o=s.pop(); s.push(o.c4);
pc=8292; continue;
}
case 8292: {
a=s.pop();
pc=(a!=0)?8301:8295; continue;
}
case 8295: {
s.push(l[15]);
pc=8297; continue;
}
case 8297: {
s.push(0);
pc=8298; continue;
}
case 8298: {
v=s.pop(); o=s.pop(); o.c=v;
pc=8301; continue;
}
case 8301: {
s.push(l[15]);
pc=8303; continue;
}
case 8303: {
o=s.pop(); s.push(o.team);
pc=8306; continue;
}
case 8306: {
a=s.pop();
pc=(a!=0)?8350:8309; continue;
}
case 8309: {
s.push(l[0]);
pc=8310; continue;
}
case 8310: {
s.push(l[1]);
pc=8311; continue;
}
case 8311: {
s.push(0);
pc=8312; continue;
}
case 8312: {
s.push(3);
pc=8313; continue;
}
case 8313: {
s.push(l[15]);
pc=8315; continue;
}
case 8315: {
o=s.pop(); s.push(o.ap);
pc=8318; continue;
}
case 8318: {
s.push(l[0]);
pc=8319; continue;
}
case 8319: {
o=s.pop(); s.push(o.co_p);
pc=8322; continue;
}
case 8322: {
s.push(l[15]);
pc=8324; continue;
}
case 8324: {
o=s.pop(); s.push(o.mid);
pc=8327; continue;
}
case 8327: {
a=s.pop(); o=s.pop(); s.push(o[a]);
pc=8328; continue;
}
case 8328: {
o=s.pop(); s.push(o.name);
pc=8331; continue;
}
case 8331: {
s.push(l[0]);
pc=8332; continue;
}
case 8332: {
o=s.pop(); s.push(o.co_p);
pc=8335; continue;
}
case 8335: {
s.push(l[15]);
pc=8337; continue;
}
case 8337: {
o=s.pop(); s.push(o.mid);
pc=8340; continue;
}
case 8340: {
a=s.pop(); o=s.pop(); s.push(o[a]);
pc=8341; continue;
}
case 8341: {
o=s.pop(); s.push(o.seibetu);
pc=8344; continue;
}
case 8344: {
v=s.splice(s.length-6,6);
o=s.pop();
o.wHaniDmage$6(v[0],v[1],v[2],v[3],v[4],v[5]);
pc=8347; continue;
}
case 8347: {
pc=8362; continue;
}
case 8350: {
s.push(l[0]);
pc=8351; continue;
}
case 8351: {
s.push(l[1]);
pc=8352; continue;
}
case 8352: {
s.push(0);
pc=8353; continue;
}
case 8353: {
s.push(3);
pc=8354; continue;
}
case 8354: {
s.push(l[15]);
pc=8356; continue;
}
case 8356: {
o=s.pop(); s.push(o.ap);
pc=8359; continue;
}
case 8359: {
v=s.splice(s.length-4,4);
o=s.pop();
o.pHaniDmage$4(v[0],v[1],v[2],v[3]);
pc=8362; continue;
}
case 8362: {
s.push(l[15]);
pc=8364; continue;
}
case 8364: {
s.push(1200);
pc=8367; continue;
}
case 8367: {
v=s.pop(); o=s.pop(); o.pt=v;
pc=8370; continue;
}
case 8370: {
pc=11361; continue;
}
case 8373: {
s.push(l[15]);
pc=8375; continue;
}
case 8375: {
s.push(s[s.length-1]);
pc=8376; continue;
}
case 8376: {
o=s.pop(); s.push(o.c3);
pc=8379; continue;
}
case 8379: {
s.push(2);
pc=8380; continue;
}
case 8380: {
b=s.pop(); a=s.pop(); s.push((a + b) | 0);
pc=8381; continue;
}
case 8381: {
v=s.pop(); o=s.pop(); o.c3=v;
pc=8384; continue;
}
case 8384: {
s.push(l[15]);
pc=8386; continue;
}
case 8386: {
o=s.pop(); s.push(o.c3);
pc=8389; continue;
}
case 8389: {
s.push(32);
pc=8391; continue;
}
case 8391: {
b=s.pop(); a=s.pop();
pc=(a<b)?8809:8394; continue;
}
case 8394: {
s.push(l[15]);
pc=8396; continue;
}
case 8396: {
s.push(32);
pc=8398; continue;
}
case 8398: {
v=s.pop(); o=s.pop(); o.c3=v;
pc=8401; continue;
}
case 8401: {
s.push(l[15]);
pc=8403; continue;
}
case 8403: {
s.push(240);
pc=8406; continue;
}
case 8406: {
v=s.pop(); o=s.pop(); o.c=v;
pc=8409; continue;
}
case 8409: {
s.push(l[15]);
pc=8411; continue;
}
case 8411: {
o=s.pop(); s.push(o.team);
pc=8414; continue;
}
case 8414: {
a=s.pop();
pc=(a!=0)?8614:8417; continue;
}
case 8417: {
s.push(l[0]);
pc=8418; continue;
}
case 8418: {
s.push(l[15]);
pc=8420; continue;
}
case 8420: {
o=s.pop(); s.push(o.x);
pc=8423; continue;
}
case 8423: {
s.push(l[15]);
pc=8425; continue;
}
case 8425: {
o=s.pop(); s.push(o.y);
pc=8428; continue;
}
case 8428: {
s.push(1);
pc=8429; continue;
}
case 8429: {
v=s.splice(s.length-3,3);
o=s.pop();
s.push(o.pSearch$3(v[0],v[1],v[2]));
pc=8432; continue;
}
case 8432: {
l[4]=s.pop();
pc=8434; continue;
}
case 8434: {
s.push(l[4]);
pc=8436; continue;
}
case 8436: {
a=s.pop();
pc=(a<0)?8597:8439; continue;
}
case 8439: {
s.push(l[0]);
pc=8440; continue;
}
case 8440: {
o=s.pop(); s.push(o.co_w);
pc=8443; continue;
}
case 8443: {
s.push(l[4]);
pc=8445; continue;
}
case 8445: {
a=s.pop(); o=s.pop(); s.push(o[a]);
pc=8446; continue;
}
case 8446: {
o=s.pop(); s.push(o.x);
pc=8449; continue;
}
case 8449: {
s.push(l[15]);
pc=8451; continue;
}
case 8451: {
o=s.pop(); s.push(o.x);
pc=8454; continue;
}
case 8454: {
b=s.pop(); a=s.pop(); s.push((a - b) | 0);
pc=8455; continue;
}
case 8455: {
l[8]=s.pop();
pc=8457; continue;
}
case 8457: {
s.push(l[0]);
pc=8458; continue;
}
case 8458: {
o=s.pop(); s.push(o.co_w);
pc=8461; continue;
}
case 8461: {
s.push(l[4]);
pc=8463; continue;
}
case 8463: {
a=s.pop(); o=s.pop(); s.push(o[a]);
pc=8464; continue;
}
case 8464: {
o=s.pop(); s.push(o.y);
pc=8467; continue;
}
case 8467: {
s.push(l[15]);
pc=8469; continue;
}
case 8469: {
o=s.pop(); s.push(o.y);
pc=8472; continue;
}
case 8472: {
b=s.pop(); a=s.pop(); s.push((a - b) | 0);
pc=8473; continue;
}
case 8473: {
l[9]=s.pop();
pc=8475; continue;
}
case 8475: {
s.push(l[15]);
pc=8477; continue;
}
case 8477: {
o=s.pop(); s.push(o.x);
pc=8480; continue;
}
case 8480: {
s.push(l[0]);
pc=8481; continue;
}
case 8481: {
o=s.pop(); s.push(o.co_w);
pc=8484; continue;
}
case 8484: {
s.push(l[4]);
pc=8486; continue;
}
case 8486: {
a=s.pop(); o=s.pop(); s.push(o[a]);
pc=8487; continue;
}
case 8487: {
o=s.pop(); s.push(o.x);
pc=8490; continue;
}
case 8490: {
b=s.pop(); a=s.pop();
pc=(a<=b)?8510:8493; continue;
}
case 8493: {
s.push(l[0]);
pc=8494; continue;
}
case 8494: {
o=s.pop(); s.push(o.co_p);
pc=8497; continue;
}
case 8497: {
s.push(l[15]);
pc=8499; continue;
}
case 8499: {
o=s.pop(); s.push(o.mid);
pc=8502; continue;
}
case 8502: {
a=s.pop(); o=s.pop(); s.push(o[a]);
pc=8503; continue;
}
case 8503: {
s.push(0);
pc=8504; continue;
}
case 8504: {
v=s.pop(); o=s.pop(); o.muki=v;
pc=8507; continue;
}
case 8507: {
pc=8524; continue;
}
case 8510: {
s.push(l[0]);
pc=8511; continue;
}
case 8511: {
o=s.pop(); s.push(o.co_p);
pc=8514; continue;
}
case 8514: {
s.push(l[15]);
pc=8516; continue;
}
case 8516: {
o=s.pop(); s.push(o.mid);
pc=8519; continue;
}
case 8519: {
a=s.pop(); o=s.pop(); s.push(o[a]);
pc=8520; continue;
}
case 8520: {
s.push(1);
pc=8521; continue;
}
case 8521: {
v=s.pop(); o=s.pop(); o.muki=v;
pc=8524; continue;
}
case 8524: {
s.push(l[8]);
pc=8526; continue;
}
case 8526: {
s.push(l[8]);
pc=8528; continue;
}
case 8528: {
b=s.pop(); a=s.pop(); s.push(Math.imul(a,b));
pc=8529; continue;
}
case 8529: {
s.push(l[9]);
pc=8531; continue;
}
case 8531: {
s.push(l[9]);
pc=8533; continue;
}
case 8533: {
b=s.pop(); a=s.pop(); s.push(Math.imul(a,b));
pc=8534; continue;
}
case 8534: {
b=s.pop(); a=s.pop(); s.push((a + b) | 0);
pc=8535; continue;
}
case 8535: {
pc=8536; continue;
}
case 8536: {
v=s.splice(s.length-1,1);
s.push(Math.sqrt(v[0]));
pc=8539; continue;
}
case 8539: {
s.push(J.i(s.pop()));
pc=8540; continue;
}
case 8540: {
l[14]=s.pop();
pc=8542; continue;
}
case 8542: {
s.push(l[14]);
pc=8544; continue;
}
case 8544: {
s.push(16);
pc=8546; continue;
}
case 8546: {
b=s.pop(); a=s.pop();
pc=(a>=b)?8566:8549; continue;
}
case 8549: {
s.push(l[15]);
pc=8551; continue;
}
case 8551: {
s.push(150);
pc=8554; continue;
}
case 8554: {
v=s.pop(); o=s.pop(); o.vx=v;
pc=8557; continue;
}
case 8557: {
s.push(l[15]);
pc=8559; continue;
}
case 8559: {
s.push(0);
pc=8560; continue;
}
case 8560: {
v=s.pop(); o=s.pop(); o.vy=v;
pc=8563; continue;
}
case 8563: {
pc=8809; continue;
}
case 8566: {
s.push(l[15]);
pc=8568; continue;
}
case 8568: {
s.push(150);
pc=8571; continue;
}
case 8571: {
s.push(l[8]);
pc=8573; continue;
}
case 8573: {
b=s.pop(); a=s.pop(); s.push(Math.imul(a,b));
pc=8574; continue;
}
case 8574: {
s.push(l[14]);
pc=8576; continue;
}
case 8576: {
b=s.pop(); a=s.pop(); s.push(J.div(a,b));
pc=8577; continue;
}
case 8577: {
v=s.pop(); o=s.pop(); o.vx=v;
pc=8580; continue;
}
case 8580: {
s.push(l[15]);
pc=8582; continue;
}
case 8582: {
s.push(150);
pc=8585; continue;
}
case 8585: {
s.push(l[9]);
pc=8587; continue;
}
case 8587: {
b=s.pop(); a=s.pop(); s.push(Math.imul(a,b));
pc=8588; continue;
}
case 8588: {
s.push(l[14]);
pc=8590; continue;
}
case 8590: {
b=s.pop(); a=s.pop(); s.push(J.div(a,b));
pc=8591; continue;
}
case 8591: {
v=s.pop(); o=s.pop(); o.vy=v;
pc=8594; continue;
}
case 8594: {
pc=8809; continue;
}
case 8597: {
s.push(l[15]);
pc=8599; continue;
}
case 8599: {
s.push(150);
pc=8602; continue;
}
case 8602: {
v=s.pop(); o=s.pop(); o.vx=v;
pc=8605; continue;
}
case 8605: {
s.push(l[15]);
pc=8607; continue;
}
case 8607: {
s.push(0);
pc=8608; continue;
}
case 8608: {
v=s.pop(); o=s.pop(); o.vy=v;
pc=8611; continue;
}
case 8611: {
pc=8809; continue;
}
case 8614: {
s.push(l[0]);
pc=8615; continue;
}
case 8615: {
s.push(l[15]);
pc=8617; continue;
}
case 8617: {
o=s.pop(); s.push(o.x);
pc=8620; continue;
}
case 8620: {
s.push(l[15]);
pc=8622; continue;
}
case 8622: {
o=s.pop(); s.push(o.y);
pc=8625; continue;
}
case 8625: {
s.push(6);
pc=8627; continue;
}
case 8627: {
v=s.splice(s.length-3,3);
o=s.pop();
s.push(o.wSearch$3(v[0],v[1],v[2]));
pc=8630; continue;
}
case 8630: {
l[4]=s.pop();
pc=8632; continue;
}
case 8632: {
s.push(l[4]);
pc=8634; continue;
}
case 8634: {
a=s.pop();
pc=(a<0)?8795:8637; continue;
}
case 8637: {
s.push(l[0]);
pc=8638; continue;
}
case 8638: {
o=s.pop(); s.push(o.co_p);
pc=8641; continue;
}
case 8641: {
s.push(l[4]);
pc=8643; continue;
}
case 8643: {
a=s.pop(); o=s.pop(); s.push(o[a]);
pc=8644; continue;
}
case 8644: {
o=s.pop(); s.push(o.x);
pc=8647; continue;
}
case 8647: {
s.push(l[15]);
pc=8649; continue;
}
case 8649: {
o=s.pop(); s.push(o.x);
pc=8652; continue;
}
case 8652: {
b=s.pop(); a=s.pop(); s.push((a - b) | 0);
pc=8653; continue;
}
case 8653: {
l[8]=s.pop();
pc=8655; continue;
}
case 8655: {
s.push(l[0]);
pc=8656; continue;
}
case 8656: {
o=s.pop(); s.push(o.co_p);
pc=8659; continue;
}
case 8659: {
s.push(l[4]);
pc=8661; continue;
}
case 8661: {
a=s.pop(); o=s.pop(); s.push(o[a]);
pc=8662; continue;
}
case 8662: {
o=s.pop(); s.push(o.y);
pc=8665; continue;
}
case 8665: {
s.push(l[15]);
pc=8667; continue;
}
case 8667: {
o=s.pop(); s.push(o.y);
pc=8670; continue;
}
case 8670: {
b=s.pop(); a=s.pop(); s.push((a - b) | 0);
pc=8671; continue;
}
case 8671: {
l[9]=s.pop();
pc=8673; continue;
}
case 8673: {
s.push(l[15]);
pc=8675; continue;
}
case 8675: {
o=s.pop(); s.push(o.x);
pc=8678; continue;
}
case 8678: {
s.push(l[0]);
pc=8679; continue;
}
case 8679: {
o=s.pop(); s.push(o.co_p);
pc=8682; continue;
}
case 8682: {
s.push(l[4]);
pc=8684; continue;
}
case 8684: {
a=s.pop(); o=s.pop(); s.push(o[a]);
pc=8685; continue;
}
case 8685: {
o=s.pop(); s.push(o.x);
pc=8688; continue;
}
case 8688: {
b=s.pop(); a=s.pop();
pc=(a<=b)?8708:8691; continue;
}
case 8691: {
s.push(l[0]);
pc=8692; continue;
}
case 8692: {
o=s.pop(); s.push(o.co_w);
pc=8695; continue;
}
case 8695: {
s.push(l[15]);
pc=8697; continue;
}
case 8697: {
o=s.pop(); s.push(o.mid);
pc=8700; continue;
}
case 8700: {
a=s.pop(); o=s.pop(); s.push(o[a]);
pc=8701; continue;
}
case 8701: {
s.push(0);
pc=8702; continue;
}
case 8702: {
v=s.pop(); o=s.pop(); o.muki=v;
pc=8705; continue;
}
case 8705: {
pc=8722; continue;
}
case 8708: {
s.push(l[0]);
pc=8709; continue;
}
case 8709: {
o=s.pop(); s.push(o.co_w);
pc=8712; continue;
}
case 8712: {
s.push(l[15]);
pc=8714; continue;
}
case 8714: {
o=s.pop(); s.push(o.mid);
pc=8717; continue;
}
case 8717: {
a=s.pop(); o=s.pop(); s.push(o[a]);
pc=8718; continue;
}
case 8718: {
s.push(1);
pc=8719; continue;
}
case 8719: {
v=s.pop(); o=s.pop(); o.muki=v;
pc=8722; continue;
}
case 8722: {
s.push(l[8]);
pc=8724; continue;
}
case 8724: {
s.push(l[8]);
pc=8726; continue;
}
case 8726: {
b=s.pop(); a=s.pop(); s.push(Math.imul(a,b));
pc=8727; continue;
}
case 8727: {
s.push(l[9]);
pc=8729; continue;
}
case 8729: {
s.push(l[9]);
pc=8731; continue;
}
case 8731: {
b=s.pop(); a=s.pop(); s.push(Math.imul(a,b));
pc=8732; continue;
}
case 8732: {
b=s.pop(); a=s.pop(); s.push((a + b) | 0);
pc=8733; continue;
}
case 8733: {
pc=8734; continue;
}
case 8734: {
v=s.splice(s.length-1,1);
s.push(Math.sqrt(v[0]));
pc=8737; continue;
}
case 8737: {
s.push(J.i(s.pop()));
pc=8738; continue;
}
case 8738: {
l[14]=s.pop();
pc=8740; continue;
}
case 8740: {
s.push(l[14]);
pc=8742; continue;
}
case 8742: {
s.push(16);
pc=8744; continue;
}
case 8744: {
b=s.pop(); a=s.pop();
pc=(a>=b)?8764:8747; continue;
}
case 8747: {
s.push(l[15]);
pc=8749; continue;
}
case 8749: {
s.push(-150);
pc=8752; continue;
}
case 8752: {
v=s.pop(); o=s.pop(); o.vx=v;
pc=8755; continue;
}
case 8755: {
s.push(l[15]);
pc=8757; continue;
}
case 8757: {
s.push(0);
pc=8758; continue;
}
case 8758: {
v=s.pop(); o=s.pop(); o.vy=v;
pc=8761; continue;
}
case 8761: {
pc=8809; continue;
}
case 8764: {
s.push(l[15]);
pc=8766; continue;
}
case 8766: {
s.push(150);
pc=8769; continue;
}
case 8769: {
s.push(l[8]);
pc=8771; continue;
}
case 8771: {
b=s.pop(); a=s.pop(); s.push(Math.imul(a,b));
pc=8772; continue;
}
case 8772: {
s.push(l[14]);
pc=8774; continue;
}
case 8774: {
b=s.pop(); a=s.pop(); s.push(J.div(a,b));
pc=8775; continue;
}
case 8775: {
v=s.pop(); o=s.pop(); o.vx=v;
pc=8778; continue;
}
case 8778: {
s.push(l[15]);
pc=8780; continue;
}
case 8780: {
s.push(150);
pc=8783; continue;
}
case 8783: {
s.push(l[9]);
pc=8785; continue;
}
case 8785: {
b=s.pop(); a=s.pop(); s.push(Math.imul(a,b));
pc=8786; continue;
}
case 8786: {
s.push(l[14]);
pc=8788; continue;
}
case 8788: {
b=s.pop(); a=s.pop(); s.push(J.div(a,b));
pc=8789; continue;
}
case 8789: {
v=s.pop(); o=s.pop(); o.vy=v;
pc=8792; continue;
}
case 8792: {
pc=8809; continue;
}
case 8795: {
s.push(l[15]);
pc=8797; continue;
}
case 8797: {
s.push(-150);
pc=8800; continue;
}
case 8800: {
v=s.pop(); o=s.pop(); o.vx=v;
pc=8803; continue;
}
case 8803: {
s.push(l[15]);
pc=8805; continue;
}
case 8805: {
s.push(0);
pc=8806; continue;
}
case 8806: {
v=s.pop(); o=s.pop(); o.vy=v;
pc=8809; continue;
}
case 8809: {
s.push(l[15]);
pc=8811; continue;
}
case 8811: {
o=s.pop(); s.push(o.team);
pc=8814; continue;
}
case 8814: {
a=s.pop();
pc=(a!=0)?8864:8817; continue;
}
case 8817: {
s.push(l[0]);
pc=8818; continue;
}
case 8818: {
o=s.pop(); s.push(o.co_p);
pc=8821; continue;
}
case 8821: {
s.push(l[15]);
pc=8823; continue;
}
case 8823: {
o=s.pop(); s.push(o.mid);
pc=8826; continue;
}
case 8826: {
a=s.pop(); o=s.pop(); s.push(o[a]);
pc=8827; continue;
}
case 8827: {
o=s.pop(); s.push(o.c);
pc=8830; continue;
}
case 8830: {
s.push(1400);
pc=8833; continue;
}
case 8833: {
b=s.pop(); a=s.pop();
pc=(a===b)?8908:8836; continue;
}
case 8836: {
s.push(l[0]);
pc=8837; continue;
}
case 8837: {
o=s.pop(); s.push(o.co_p);
pc=8840; continue;
}
case 8840: {
s.push(l[15]);
pc=8842; continue;
}
case 8842: {
o=s.pop(); s.push(o.mid);
pc=8845; continue;
}
case 8845: {
a=s.pop(); o=s.pop(); s.push(o[a]);
pc=8846; continue;
}
case 8846: {
o=s.pop(); s.push(o.c);
pc=8849; continue;
}
case 8849: {
s.push(2400);
pc=8852; continue;
}
case 8852: {
b=s.pop(); a=s.pop();
pc=(a===b)?8908:8855; continue;
}
case 8855: {
s.push(l[15]);
pc=8857; continue;
}
case 8857: {
s.push(0);
pc=8858; continue;
}
case 8858: {
v=s.pop(); o=s.pop(); o.c=v;
pc=8861; continue;
}
case 8861: {
pc=8908; continue;
}
case 8864: {
s.push(l[0]);
pc=8865; continue;
}
case 8865: {
o=s.pop(); s.push(o.co_w);
pc=8868; continue;
}
case 8868: {
s.push(l[15]);
pc=8870; continue;
}
case 8870: {
o=s.pop(); s.push(o.mid);
pc=8873; continue;
}
case 8873: {
a=s.pop(); o=s.pop(); s.push(o[a]);
pc=8874; continue;
}
case 8874: {
o=s.pop(); s.push(o.c);
pc=8877; continue;
}
case 8877: {
s.push(1400);
pc=8880; continue;
}
case 8880: {
b=s.pop(); a=s.pop();
pc=(a===b)?8908:8883; continue;
}
case 8883: {
s.push(l[0]);
pc=8884; continue;
}
case 8884: {
o=s.pop(); s.push(o.co_w);
pc=8887; continue;
}
case 8887: {
s.push(l[15]);
pc=8889; continue;
}
case 8889: {
o=s.pop(); s.push(o.mid);
pc=8892; continue;
}
case 8892: {
a=s.pop(); o=s.pop(); s.push(o[a]);
pc=8893; continue;
}
case 8893: {
o=s.pop(); s.push(o.c);
pc=8896; continue;
}
case 8896: {
s.push(2400);
pc=8899; continue;
}
case 8899: {
b=s.pop(); a=s.pop();
pc=(a===b)?8908:8902; continue;
}
case 8902: {
s.push(l[15]);
pc=8904; continue;
}
case 8904: {
s.push(0);
pc=8905; continue;
}
case 8905: {
v=s.pop(); o=s.pop(); o.c=v;
pc=8908; continue;
}
case 8908: {
s.push(l[15]);
pc=8910; continue;
}
case 8910: {
s.push(1300);
pc=8913; continue;
}
case 8913: {
v=s.pop(); o=s.pop(); o.pt=v;
pc=8916; continue;
}
case 8916: {
pc=11361; continue;
}
case 8919: {
s.push(l[15]);
pc=8921; continue;
}
case 8921: {
s.push(s[s.length-1]);
pc=8922; continue;
}
case 8922: {
o=s.pop(); s.push(o.c3);
pc=8925; continue;
}
case 8925: {
s.push(6);
pc=8927; continue;
}
case 8927: {
b=s.pop(); a=s.pop(); s.push((a - b) | 0);
pc=8928; continue;
}
case 8928: {
v=s.pop(); o=s.pop(); o.c3=v;
pc=8931; continue;
}
case 8931: {
s.push(l[15]);
pc=8933; continue;
}
case 8933: {
o=s.pop(); s.push(o.team);
pc=8936; continue;
}
case 8936: {
a=s.pop();
pc=(a!=0)?9023:8939; continue;
}
case 8939: {
s.push(l[0]);
pc=8940; continue;
}
case 8940: {
o=s.pop(); s.push(o.co_p);
pc=8943; continue;
}
case 8943: {
s.push(l[15]);
pc=8945; continue;
}
case 8945: {
o=s.pop(); s.push(o.mid);
pc=8948; continue;
}
case 8948: {
a=s.pop(); o=s.pop(); s.push(o[a]);
pc=8949; continue;
}
case 8949: {
o=s.pop(); s.push(o.c);
pc=8952; continue;
}
case 8952: {
s.push(1530);
pc=8955; continue;
}
case 8955: {
b=s.pop(); a=s.pop();
pc=(a===b)?8986:8958; continue;
}
case 8958: {
s.push(l[0]);
pc=8959; continue;
}
case 8959: {
o=s.pop(); s.push(o.co_p);
pc=8962; continue;
}
case 8962: {
s.push(l[15]);
pc=8964; continue;
}
case 8964: {
o=s.pop(); s.push(o.mid);
pc=8967; continue;
}
case 8967: {
a=s.pop(); o=s.pop(); s.push(o[a]);
pc=8968; continue;
}
case 8968: {
o=s.pop(); s.push(o.c);
pc=8971; continue;
}
case 8971: {
s.push(2530);
pc=8974; continue;
}
case 8974: {
b=s.pop(); a=s.pop();
pc=(a===b)?8986:8977; continue;
}
case 8977: {
s.push(l[15]);
pc=8979; continue;
}
case 8979: {
s.push(0);
pc=8980; continue;
}
case 8980: {
v=s.pop(); o=s.pop(); o.c=v;
pc=8983; continue;
}
case 8983: {
pc=9104; continue;
}
case 8986: {
s.push(l[15]);
pc=8988; continue;
}
case 8988: {
o=s.pop(); s.push(o.c3);
pc=8991; continue;
}
case 8991: {
s.push(12);
pc=8993; continue;
}
case 8993: {
b=s.pop(); a=s.pop();
pc=(a>b)?9104:8996; continue;
}
case 8996: {
s.push(l[0]);
pc=8997; continue;
}
case 8997: {
o=s.pop(); s.push(o.co_p);
pc=9000; continue;
}
case 9000: {
s.push(l[15]);
pc=9002; continue;
}
case 9002: {
o=s.pop(); s.push(o.mid);
pc=9005; continue;
}
case 9005: {
a=s.pop(); o=s.pop(); s.push(o[a]);
pc=9006; continue;
}
case 9006: {
s.push(l[15]);
pc=9008; continue;
}
case 9008: {
o=s.pop(); s.push(o.ap);
pc=9011; continue;
}
case 9011: {
v=s.splice(s.length-1,1);
o=s.pop();
o.addHP$1(v[0]);
pc=9014; continue;
}
case 9014: {
s.push(l[15]);
pc=9016; continue;
}
case 9016: {
s.push(0);
pc=9017; continue;
}
case 9017: {
v=s.pop(); o=s.pop(); o.c=v;
pc=9020; continue;
}
case 9020: {
pc=9104; continue;
}
case 9023: {
s.push(l[0]);
pc=9024; continue;
}
case 9024: {
o=s.pop(); s.push(o.co_w);
pc=9027; continue;
}
case 9027: {
s.push(l[15]);
pc=9029; continue;
}
case 9029: {
o=s.pop(); s.push(o.mid);
pc=9032; continue;
}
case 9032: {
a=s.pop(); o=s.pop(); s.push(o[a]);
pc=9033; continue;
}
case 9033: {
o=s.pop(); s.push(o.c);
pc=9036; continue;
}
case 9036: {
s.push(1530);
pc=9039; continue;
}
case 9039: {
b=s.pop(); a=s.pop();
pc=(a===b)?9070:9042; continue;
}
case 9042: {
s.push(l[0]);
pc=9043; continue;
}
case 9043: {
o=s.pop(); s.push(o.co_w);
pc=9046; continue;
}
case 9046: {
s.push(l[15]);
pc=9048; continue;
}
case 9048: {
o=s.pop(); s.push(o.mid);
pc=9051; continue;
}
case 9051: {
a=s.pop(); o=s.pop(); s.push(o[a]);
pc=9052; continue;
}
case 9052: {
o=s.pop(); s.push(o.c);
pc=9055; continue;
}
case 9055: {
s.push(2530);
pc=9058; continue;
}
case 9058: {
b=s.pop(); a=s.pop();
pc=(a===b)?9070:9061; continue;
}
case 9061: {
s.push(l[15]);
pc=9063; continue;
}
case 9063: {
s.push(0);
pc=9064; continue;
}
case 9064: {
v=s.pop(); o=s.pop(); o.c=v;
pc=9067; continue;
}
case 9067: {
pc=9104; continue;
}
case 9070: {
s.push(l[15]);
pc=9072; continue;
}
case 9072: {
o=s.pop(); s.push(o.c3);
pc=9075; continue;
}
case 9075: {
s.push(12);
pc=9077; continue;
}
case 9077: {
b=s.pop(); a=s.pop();
pc=(a>b)?9104:9080; continue;
}
case 9080: {
s.push(l[0]);
pc=9081; continue;
}
case 9081: {
o=s.pop(); s.push(o.co_w);
pc=9084; continue;
}
case 9084: {
s.push(l[15]);
pc=9086; continue;
}
case 9086: {
o=s.pop(); s.push(o.mid);
pc=9089; continue;
}
case 9089: {
a=s.pop(); o=s.pop(); s.push(o[a]);
pc=9090; continue;
}
case 9090: {
s.push(l[15]);
pc=9092; continue;
}
case 9092: {
o=s.pop(); s.push(o.ap);
pc=9095; continue;
}
case 9095: {
v=s.splice(s.length-1,1);
o=s.pop();
o.addHP$1(v[0]);
pc=9098; continue;
}
case 9098: {
s.push(l[15]);
pc=9100; continue;
}
case 9100: {
s.push(0);
pc=9101; continue;
}
case 9101: {
v=s.pop(); o=s.pop(); o.c=v;
pc=9104; continue;
}
case 9104: {
s.push(l[15]);
pc=9106; continue;
}
case 9106: {
s.push(1400);
pc=9109; continue;
}
case 9109: {
v=s.pop(); o=s.pop(); o.pt=v;
pc=9112; continue;
}
case 9112: {
pc=11361; continue;
}
case 9115: {
s.push(l[15]);
pc=9117; continue;
}
case 9117: {
s.push(s[s.length-1]);
pc=9118; continue;
}
case 9118: {
o=s.pop(); s.push(o.x);
pc=9121; continue;
}
case 9121: {
s.push(l[15]);
pc=9123; continue;
}
case 9123: {
o=s.pop(); s.push(o.vx);
pc=9126; continue;
}
case 9126: {
s.push(10);
pc=9128; continue;
}
case 9128: {
b=s.pop(); a=s.pop(); s.push(J.div(a,b));
pc=9129; continue;
}
case 9129: {
b=s.pop(); a=s.pop(); s.push((a + b) | 0);
pc=9130; continue;
}
case 9130: {
v=s.pop(); o=s.pop(); o.x=v;
pc=9133; continue;
}
case 9133: {
s.push(l[15]);
pc=9135; continue;
}
case 9135: {
s.push(s[s.length-1]);
pc=9136; continue;
}
case 9136: {
o=s.pop(); s.push(o.y);
pc=9139; continue;
}
case 9139: {
s.push(l[15]);
pc=9141; continue;
}
case 9141: {
o=s.pop(); s.push(o.vy);
pc=9144; continue;
}
case 9144: {
s.push(10);
pc=9146; continue;
}
case 9146: {
b=s.pop(); a=s.pop(); s.push(J.div(a,b));
pc=9147; continue;
}
case 9147: {
b=s.pop(); a=s.pop(); s.push((a + b) | 0);
pc=9148; continue;
}
case 9148: {
v=s.pop(); o=s.pop(); o.y=v;
pc=9151; continue;
}
case 9151: {
s.push(l[0]);
pc=9152; continue;
}
case 9152: {
o=s.pop(); s.push(o.maps);
pc=9155; continue;
}
case 9155: {
o=s.pop(); s.push(o.map_bg);
pc=9158; continue;
}
case 9158: {
s.push(l[15]);
pc=9160; continue;
}
case 9160: {
o=s.pop(); s.push(o.x);
pc=9163; continue;
}
case 9163: {
s.push(15);
pc=9165; continue;
}
case 9165: {
b=s.pop(); a=s.pop(); s.push((a + b) | 0);
pc=9166; continue;
}
case 9166: {
s.push(32);
pc=9168; continue;
}
case 9168: {
b=s.pop(); a=s.pop(); s.push(J.div(a,b));
pc=9169; continue;
}
case 9169: {
a=s.pop(); o=s.pop(); s.push(o[a]);
pc=9170; continue;
}
case 9170: {
s.push(l[15]);
pc=9172; continue;
}
case 9172: {
o=s.pop(); s.push(o.y);
pc=9175; continue;
}
case 9175: {
s.push(15);
pc=9177; continue;
}
case 9177: {
b=s.pop(); a=s.pop(); s.push((a + b) | 0);
pc=9178; continue;
}
case 9178: {
s.push(32);
pc=9180; continue;
}
case 9180: {
b=s.pop(); a=s.pop(); s.push(J.div(a,b));
pc=9181; continue;
}
case 9181: {
a=s.pop(); o=s.pop(); s.push(o[a]);
pc=9182; continue;
}
case 9182: {
s.push(20);
pc=9184; continue;
}
case 9184: {
b=s.pop(); a=s.pop();
pc=(a<b)?9201:9187; continue;
}
case 9187: {
s.push(l[15]);
pc=9189; continue;
}
case 9189: {
s.push(1510);
pc=9192; continue;
}
case 9192: {
v=s.pop(); o=s.pop(); o.c=v;
pc=9195; continue;
}
case 9195: {
s.push(l[15]);
pc=9197; continue;
}
case 9197: {
s.push(1);
pc=9198; continue;
}
case 9198: {
v=s.pop(); o=s.pop(); o.c4=v;
pc=9201; continue;
}
case 9201: {
s.push(l[15]);
pc=9203; continue;
}
case 9203: {
o=s.pop(); s.push(o.x);
pc=9206; continue;
}
case 9206: {
s.push(l[0]);
pc=9207; continue;
}
case 9207: {
o=s.pop(); s.push(o.maps);
pc=9210; continue;
}
case 9210: {
o=s.pop(); s.push(o.wx);
pc=9213; continue;
}
case 9213: {
s.push(32);
pc=9215; continue;
}
case 9215: {
b=s.pop(); a=s.pop(); s.push((a - b) | 0);
pc=9216; continue;
}
case 9216: {
s.push(64);
pc=9218; continue;
}
case 9218: {
b=s.pop(); a=s.pop(); s.push((a - b) | 0);
pc=9219; continue;
}
case 9219: {
b=s.pop(); a=s.pop();
pc=(a<=b)?9244:9222; continue;
}
case 9222: {
s.push(l[15]);
pc=9224; continue;
}
case 9224: {
o=s.pop(); s.push(o.x);
pc=9227; continue;
}
case 9227: {
s.push(l[0]);
pc=9228; continue;
}
case 9228: {
o=s.pop(); s.push(o.maps);
pc=9231; continue;
}
case 9231: {
o=s.pop(); s.push(o.wx);
pc=9234; continue;
}
case 9234: {
s.push(512);
pc=9237; continue;
}
case 9237: {
b=s.pop(); a=s.pop(); s.push((a + b) | 0);
pc=9238; continue;
}
case 9238: {
s.push(64);
pc=9240; continue;
}
case 9240: {
b=s.pop(); a=s.pop(); s.push((a + b) | 0);
pc=9241; continue;
}
case 9241: {
b=s.pop(); a=s.pop();
pc=(a<b)?9253:9244; continue;
}
case 9244: {
s.push(l[15]);
pc=9246; continue;
}
case 9246: {
s.push(0);
pc=9247; continue;
}
case 9247: {
v=s.pop(); o=s.pop(); o.c=v;
pc=9250; continue;
}
case 9250: {
pc=9299; continue;
}
case 9253: {
s.push(l[15]);
pc=9255; continue;
}
case 9255: {
o=s.pop(); s.push(o.y);
pc=9258; continue;
}
case 9258: {
s.push(l[0]);
pc=9259; continue;
}
case 9259: {
o=s.pop(); s.push(o.maps);
pc=9262; continue;
}
case 9262: {
o=s.pop(); s.push(o.wy);
pc=9265; continue;
}
case 9265: {
s.push(32);
pc=9267; continue;
}
case 9267: {
b=s.pop(); a=s.pop(); s.push((a - b) | 0);
pc=9268; continue;
}
case 9268: {
b=s.pop(); a=s.pop();
pc=(a<=b)?9293:9271; continue;
}
case 9271: {
s.push(l[15]);
pc=9273; continue;
}
case 9273: {
o=s.pop(); s.push(o.y);
pc=9276; continue;
}
case 9276: {
s.push(l[0]);
pc=9277; continue;
}
case 9277: {
o=s.pop(); s.push(o.maps);
pc=9280; continue;
}
case 9280: {
o=s.pop(); s.push(o.wy);
pc=9283; continue;
}
case 9283: {
s.push(320);
pc=9286; continue;
}
case 9286: {
b=s.pop(); a=s.pop(); s.push((a + b) | 0);
pc=9287; continue;
}
case 9287: {
s.push(32);
pc=9289; continue;
}
case 9289: {
b=s.pop(); a=s.pop(); s.push((a + b) | 0);
pc=9290; continue;
}
case 9290: {
b=s.pop(); a=s.pop();
pc=(a<b)?9299:9293; continue;
}
case 9293: {
s.push(l[15]);
pc=9295; continue;
}
case 9295: {
s.push(0);
pc=9296; continue;
}
case 9296: {
v=s.pop(); o=s.pop(); o.c=v;
pc=9299; continue;
}
case 9299: {
s.push(l[15]);
pc=9301; continue;
}
case 9301: {
s.push(s[s.length-1]);
pc=9302; continue;
}
case 9302: {
o=s.pop(); s.push(o.c1);
pc=9305; continue;
}
case 9305: {
s.push(1);
pc=9306; continue;
}
case 9306: {
b=s.pop(); a=s.pop(); s.push((a + b) | 0);
pc=9307; continue;
}
case 9307: {
v=s.pop(); o=s.pop(); o.c1=v;
pc=9310; continue;
}
case 9310: {
s.push(l[15]);
pc=9312; continue;
}
case 9312: {
o=s.pop(); s.push(o.c1);
pc=9315; continue;
}
case 9315: {
s.push(12);
pc=9317; continue;
}
case 9317: {
b=s.pop(); a=s.pop();
pc=(a<=b)?9334:9320; continue;
}
case 9320: {
s.push(l[15]);
pc=9322; continue;
}
case 9322: {
s.push(1510);
pc=9325; continue;
}
case 9325: {
v=s.pop(); o=s.pop(); o.c=v;
pc=9328; continue;
}
case 9328: {
s.push(l[15]);
pc=9330; continue;
}
case 9330: {
s.push(1);
pc=9331; continue;
}
case 9331: {
v=s.pop(); o=s.pop(); o.c4=v;
pc=9334; continue;
}
case 9334: {
s.push(l[15]);
pc=9336; continue;
}
case 9336: {
o=s.pop(); s.push(o.team);
pc=9339; continue;
}
case 9339: {
a=s.pop();
pc=(a!=0)?9476:9342; continue;
}
case 9342: {
s.push(0);
pc=9343; continue;
}
case 9343: {
l[2]=s.pop();
pc=9344; continue;
}
case 9344: {
pc=9465; continue;
}
case 9347: {
s.push(l[0]);
pc=9348; continue;
}
case 9348: {
o=s.pop(); s.push(o.co_w);
pc=9351; continue;
}
case 9351: {
s.push(l[2]);
pc=9352; continue;
}
case 9352: {
a=s.pop(); o=s.pop(); s.push(o[a]);
pc=9353; continue;
}
case 9353: {
o=s.pop(); s.push(o.ss);
pc=9356; continue;
}
case 9356: {
s.push(1);
pc=9357; continue;
}
case 9357: {
b=s.pop(); a=s.pop();
pc=(a>=b)?9363:9360; continue;
}
case 9360: {
pc=9462; continue;
}
case 9363: {
s.push(l[0]);
pc=9364; continue;
}
case 9364: {
o=s.pop(); s.push(o.co_w);
pc=9367; continue;
}
case 9367: {
s.push(l[2]);
pc=9368; continue;
}
case 9368: {
a=s.pop(); o=s.pop(); s.push(o[a]);
pc=9369; continue;
}
case 9369: {
l[16]=s.pop();
pc=9371; continue;
}
case 9371: {
s.push(l[16]);
pc=9373; continue;
}
case 9373: {
o=s.pop(); s.push(o.c);
pc=9376; continue;
}
case 9376: {
s.push(1100);
pc=9379; continue;
}
case 9379: {
b=s.pop(); a=s.pop();
pc=(a>=b)?9385:9382; continue;
}
case 9382: {
pc=9462; continue;
}
case 9385: {
s.push(l[15]);
pc=9387; continue;
}
case 9387: {
o=s.pop(); s.push(o.x);
pc=9390; continue;
}
case 9390: {
s.push(l[16]);
pc=9392; continue;
}
case 9392: {
o=s.pop(); s.push(o.x);
pc=9395; continue;
}
case 9395: {
b=s.pop(); a=s.pop(); s.push((a - b) | 0);
pc=9396; continue;
}
case 9396: {
v=s.splice(s.length-1,1);
s.push(Math.abs(v[0]));
pc=9399; continue;
}
case 9399: {
s.push(18);
pc=9401; continue;
}
case 9401: {
s.push(l[16]);
pc=9403; continue;
}
case 9403: {
o=s.pop(); s.push(o.ahs);
pc=9406; continue;
}
case 9406: {
b=s.pop(); a=s.pop(); s.push((a + b) | 0);
pc=9407; continue;
}
case 9407: {
b=s.pop(); a=s.pop();
pc=(a>=b)?9462:9410; continue;
}
case 9410: {
s.push(l[15]);
pc=9412; continue;
}
case 9412: {
o=s.pop(); s.push(o.y);
pc=9415; continue;
}
case 9415: {
s.push(l[16]);
pc=9417; continue;
}
case 9417: {
o=s.pop(); s.push(o.y);
pc=9420; continue;
}
case 9420: {
b=s.pop(); a=s.pop(); s.push((a - b) | 0);
pc=9421; continue;
}
case 9421: {
v=s.splice(s.length-1,1);
s.push(Math.abs(v[0]));
pc=9424; continue;
}
case 9424: {
s.push(26);
pc=9426; continue;
}
case 9426: {
s.push(l[16]);
pc=9428; continue;
}
case 9428: {
o=s.pop(); s.push(o.ahs);
pc=9431; continue;
}
case 9431: {
b=s.pop(); a=s.pop(); s.push((a + b) | 0);
pc=9432; continue;
}
case 9432: {
b=s.pop(); a=s.pop();
pc=(a>=b)?9462:9435; continue;
}
case 9435: {
s.push(l[15]);
pc=9437; continue;
}
case 9437: {
s.push(1510);
pc=9440; continue;
}
case 9440: {
v=s.pop(); o=s.pop(); o.c=v;
pc=9443; continue;
}
case 9443: {
s.push(l[15]);
pc=9445; continue;
}
case 9445: {
s.push(1);
pc=9446; continue;
}
case 9446: {
v=s.pop(); o=s.pop(); o.c4=v;
pc=9449; continue;
}
case 9449: {
s.push(l[15]);
pc=9451; continue;
}
case 9451: {
s.push(l[16]);
pc=9453; continue;
}
case 9453: {
o=s.pop(); s.push(o.x);
pc=9456; continue;
}
case 9456: {
v=s.pop(); o=s.pop(); o.x=v;
pc=9459; continue;
}
case 9459: {
pc=9597; continue;
}
case 9462: {
l[2]=(l[2]+1)|0;
pc=9465; continue;
}
case 9465: {
s.push(l[2]);
pc=9466; continue;
}
case 9466: {
s.push(l[0]);
pc=9467; continue;
}
case 9467: {
o=s.pop(); s.push(o.w_kazu);
pc=9470; continue;
}
case 9470: {
b=s.pop(); a=s.pop();
pc=(a<=b)?9347:9473; continue;
}
case 9473: {
pc=9597; continue;
}
case 9476: {
s.push(0);
pc=9477; continue;
}
case 9477: {
l[2]=s.pop();
pc=9478; continue;
}
case 9478: {
pc=9591; continue;
}
case 9481: {
s.push(l[0]);
pc=9482; continue;
}
case 9482: {
o=s.pop(); s.push(o.co_p);
pc=9485; continue;
}
case 9485: {
s.push(l[2]);
pc=9486; continue;
}
case 9486: {
a=s.pop(); o=s.pop(); s.push(o[a]);
pc=9487; continue;
}
case 9487: {
l[17]=s.pop();
pc=9489; continue;
}
case 9489: {
s.push(l[17]);
pc=9491; continue;
}
case 9491: {
o=s.pop(); s.push(o.c);
pc=9494; continue;
}
case 9494: {
s.push(1000);
pc=9497; continue;
}
case 9497: {
b=s.pop(); a=s.pop();
pc=(a>=b)?9503:9500; continue;
}
case 9500: {
pc=9588; continue;
}
case 9503: {
s.push(l[2]);
pc=9504; continue;
}
case 9504: {
s.push(6);
pc=9506; continue;
}
case 9506: {
b=s.pop(); a=s.pop();
pc=(a!==b)?9523:9509; continue;
}
case 9509: {
s.push(l[17]);
pc=9511; continue;
}
case 9511: {
o=s.pop(); s.push(o.c);
pc=9514; continue;
}
case 9514: {
s.push(1000);
pc=9517; continue;
}
case 9517: {
b=s.pop(); a=s.pop();
pc=(a===b)?9523:9520; continue;
}
case 9520: {
pc=9588; continue;
}
case 9523: {
s.push(l[15]);
pc=9525; continue;
}
case 9525: {
o=s.pop(); s.push(o.x);
pc=9528; continue;
}
case 9528: {
s.push(l[17]);
pc=9530; continue;
}
case 9530: {
o=s.pop(); s.push(o.x);
pc=9533; continue;
}
case 9533: {
b=s.pop(); a=s.pop(); s.push((a - b) | 0);
pc=9534; continue;
}
case 9534: {
v=s.splice(s.length-1,1);
s.push(Math.abs(v[0]));
pc=9537; continue;
}
case 9537: {
s.push(18);
pc=9539; continue;
}
case 9539: {
b=s.pop(); a=s.pop();
pc=(a>=b)?9588:9542; continue;
}
case 9542: {
s.push(l[15]);
pc=9544; continue;
}
case 9544: {
o=s.pop(); s.push(o.y);
pc=9547; continue;
}
case 9547: {
s.push(l[17]);
pc=9549; continue;
}
case 9549: {
o=s.pop(); s.push(o.y);
pc=9552; continue;
}
case 9552: {
b=s.pop(); a=s.pop(); s.push((a - b) | 0);
pc=9553; continue;
}
case 9553: {
v=s.splice(s.length-1,1);
s.push(Math.abs(v[0]));
pc=9556; continue;
}
case 9556: {
s.push(26);
pc=9558; continue;
}
case 9558: {
b=s.pop(); a=s.pop();
pc=(a>=b)?9588:9561; continue;
}
case 9561: {
s.push(l[15]);
pc=9563; continue;
}
case 9563: {
s.push(1510);
pc=9566; continue;
}
case 9566: {
v=s.pop(); o=s.pop(); o.c=v;
pc=9569; continue;
}
case 9569: {
s.push(l[15]);
pc=9571; continue;
}
case 9571: {
s.push(1);
pc=9572; continue;
}
case 9572: {
v=s.pop(); o=s.pop(); o.c4=v;
pc=9575; continue;
}
case 9575: {
s.push(l[15]);
pc=9577; continue;
}
case 9577: {
s.push(l[17]);
pc=9579; continue;
}
case 9579: {
o=s.pop(); s.push(o.x);
pc=9582; continue;
}
case 9582: {
v=s.pop(); o=s.pop(); o.x=v;
pc=9585; continue;
}
case 9585: {
pc=9597; continue;
}
case 9588: {
l[2]=(l[2]+1)|0;
pc=9591; continue;
}
case 9591: {
s.push(l[2]);
pc=9592; continue;
}
case 9592: {
s.push(6);
pc=9594; continue;
}
case 9594: {
b=s.pop(); a=s.pop();
pc=(a<=b)?9481:9597; continue;
}
case 9597: {
s.push(l[15]);
pc=9599; continue;
}
case 9599: {
s.push(238);
pc=9602; continue;
}
case 9602: {
s.push(l[0]);
pc=9603; continue;
}
case 9603: {
o=s.pop(); s.push(o.g_c1);
pc=9606; continue;
}
case 9606: {
b=s.pop(); a=s.pop(); s.push((a + b) | 0);
pc=9607; continue;
}
case 9607: {
v=s.pop(); o=s.pop(); o.pt=v;
pc=9610; continue;
}
case 9610: {
s.push(l[15]);
pc=9612; continue;
}
case 9612: {
s.push(0);
pc=9613; continue;
}
case 9613: {
v=s.pop(); o=s.pop(); o.pth=v;
pc=9616; continue;
}
case 9616: {
pc=11361; continue;
}
case 9619: {
s.push(l[15]);
pc=9621; continue;
}
case 9621: {
o=s.pop(); s.push(o.c4);
pc=9624; continue;
}
case 9624: {
switch(s.pop()) {
case 1:pc=9680;break;
case 2:pc=9702;break;
case 3:pc=9712;break;
case 4:pc=9722;break;
case 5:pc=9732;break;
case 6:pc=9742;break;
case 7:pc=9752;break;
case 8:pc=9762;break;
case 9:pc=9772;break;
case 10:pc=9782;break;
default:pc=9789;
} continue;
}
case 9680: {
s.push(l[15]);
pc=9682; continue;
}
case 9682: {
s.push(s[s.length-1]);
pc=9683; continue;
}
case 9683: {
o=s.pop(); s.push(o.y);
pc=9686; continue;
}
case 9686: {
s.push(16);
pc=9688; continue;
}
case 9688: {
b=s.pop(); a=s.pop(); s.push((a + b) | 0);
pc=9689; continue;
}
case 9689: {
v=s.pop(); o=s.pop(); o.y=v;
pc=9692; continue;
}
case 9692: {
s.push(l[15]);
pc=9694; continue;
}
case 9694: {
s.push(20);
pc=9696; continue;
}
case 9696: {
v=s.pop(); o=s.pop(); o.c3=v;
pc=9699; continue;
}
case 9699: {
pc=9789; continue;
}
case 9702: {
s.push(l[15]);
pc=9704; continue;
}
case 9704: {
s.push(34);
pc=9706; continue;
}
case 9706: {
v=s.pop(); o=s.pop(); o.c3=v;
pc=9709; continue;
}
case 9709: {
pc=9789; continue;
}
case 9712: {
s.push(l[15]);
pc=9714; continue;
}
case 9714: {
s.push(46);
pc=9716; continue;
}
case 9716: {
v=s.pop(); o=s.pop(); o.c3=v;
pc=9719; continue;
}
case 9719: {
pc=9789; continue;
}
case 9722: {
s.push(l[15]);
pc=9724; continue;
}
case 9724: {
s.push(56);
pc=9726; continue;
}
case 9726: {
v=s.pop(); o=s.pop(); o.c3=v;
pc=9729; continue;
}
case 9729: {
pc=9789; continue;
}
case 9732: {
s.push(l[15]);
pc=9734; continue;
}
case 9734: {
s.push(64);
pc=9736; continue;
}
case 9736: {
v=s.pop(); o=s.pop(); o.c3=v;
pc=9739; continue;
}
case 9739: {
pc=9789; continue;
}
case 9742: {
s.push(l[15]);
pc=9744; continue;
}
case 9744: {
s.push(70);
pc=9746; continue;
}
case 9746: {
v=s.pop(); o=s.pop(); o.c3=v;
pc=9749; continue;
}
case 9749: {
pc=9789; continue;
}
case 9752: {
s.push(l[15]);
pc=9754; continue;
}
case 9754: {
s.push(74);
pc=9756; continue;
}
case 9756: {
v=s.pop(); o=s.pop(); o.c3=v;
pc=9759; continue;
}
case 9759: {
pc=9789; continue;
}
case 9762: {
s.push(l[15]);
pc=9764; continue;
}
case 9764: {
s.push(77);
pc=9766; continue;
}
case 9766: {
v=s.pop(); o=s.pop(); o.c3=v;
pc=9769; continue;
}
case 9769: {
pc=9789; continue;
}
case 9772: {
s.push(l[15]);
pc=9774; continue;
}
case 9774: {
s.push(79);
pc=9776; continue;
}
case 9776: {
v=s.pop(); o=s.pop(); o.c3=v;
pc=9779; continue;
}
case 9779: {
pc=9789; continue;
}
case 9782: {
s.push(l[15]);
pc=9784; continue;
}
case 9784: {
s.push(80);
pc=9786; continue;
}
case 9786: {
v=s.pop(); o=s.pop(); o.c3=v;
pc=9789; continue;
}
case 9789: {
s.push(l[15]);
pc=9791; continue;
}
case 9791: {
s.push(s[s.length-1]);
pc=9792; continue;
}
case 9792: {
o=s.pop(); s.push(o.c4);
pc=9795; continue;
}
case 9795: {
s.push(1);
pc=9796; continue;
}
case 9796: {
b=s.pop(); a=s.pop(); s.push((a + b) | 0);
pc=9797; continue;
}
case 9797: {
v=s.pop(); o=s.pop(); o.c4=v;
pc=9800; continue;
}
case 9800: {
s.push(l[15]);
pc=9802; continue;
}
case 9802: {
o=s.pop(); s.push(o.c4);
pc=9805; continue;
}
case 9805: {
s.push(10);
pc=9807; continue;
}
case 9807: {
b=s.pop(); a=s.pop();
pc=(a<=b)?9823:9810; continue;
}
case 9810: {
s.push(l[15]);
pc=9812; continue;
}
case 9812: {
s.push(10);
pc=9814; continue;
}
case 9814: {
v=s.pop(); o=s.pop(); o.c4=v;
pc=9817; continue;
}
case 9817: {
s.push(l[15]);
pc=9819; continue;
}
case 9819: {
s.push(0);
pc=9820; continue;
}
case 9820: {
v=s.pop(); o=s.pop(); o.c=v;
pc=9823; continue;
}
case 9823: {
s.push(l[15]);
pc=9825; continue;
}
case 9825: {
o=s.pop(); s.push(o.team);
pc=9828; continue;
}
case 9828: {
a=s.pop();
pc=(a!=0)?9872:9831; continue;
}
case 9831: {
s.push(l[0]);
pc=9832; continue;
}
case 9832: {
s.push(l[1]);
pc=9833; continue;
}
case 9833: {
s.push(0);
pc=9834; continue;
}
case 9834: {
s.push(4);
pc=9835; continue;
}
case 9835: {
s.push(l[15]);
pc=9837; continue;
}
case 9837: {
o=s.pop(); s.push(o.ap);
pc=9840; continue;
}
case 9840: {
s.push(l[0]);
pc=9841; continue;
}
case 9841: {
o=s.pop(); s.push(o.co_p);
pc=9844; continue;
}
case 9844: {
s.push(l[15]);
pc=9846; continue;
}
case 9846: {
o=s.pop(); s.push(o.mid);
pc=9849; continue;
}
case 9849: {
a=s.pop(); o=s.pop(); s.push(o[a]);
pc=9850; continue;
}
case 9850: {
o=s.pop(); s.push(o.name);
pc=9853; continue;
}
case 9853: {
s.push(l[0]);
pc=9854; continue;
}
case 9854: {
o=s.pop(); s.push(o.co_p);
pc=9857; continue;
}
case 9857: {
s.push(l[15]);
pc=9859; continue;
}
case 9859: {
o=s.pop(); s.push(o.mid);
pc=9862; continue;
}
case 9862: {
a=s.pop(); o=s.pop(); s.push(o[a]);
pc=9863; continue;
}
case 9863: {
o=s.pop(); s.push(o.seibetu);
pc=9866; continue;
}
case 9866: {
v=s.splice(s.length-6,6);
o=s.pop();
o.wHaniDmage$6(v[0],v[1],v[2],v[3],v[4],v[5]);
pc=9869; continue;
}
case 9869: {
pc=9884; continue;
}
case 9872: {
s.push(l[0]);
pc=9873; continue;
}
case 9873: {
s.push(l[1]);
pc=9874; continue;
}
case 9874: {
s.push(0);
pc=9875; continue;
}
case 9875: {
s.push(4);
pc=9876; continue;
}
case 9876: {
s.push(l[15]);
pc=9878; continue;
}
case 9878: {
o=s.pop(); s.push(o.ap);
pc=9881; continue;
}
case 9881: {
v=s.splice(s.length-4,4);
o=s.pop();
o.pHaniDmage$4(v[0],v[1],v[2],v[3]);
pc=9884; continue;
}
case 9884: {
s.push(l[15]);
pc=9886; continue;
}
case 9886: {
s.push(1500);
pc=9889; continue;
}
case 9889: {
v=s.pop(); o=s.pop(); o.pt=v;
pc=9892; continue;
}
case 9892: {
pc=11361; continue;
}
case 9895: {
s.push(l[15]);
pc=9897; continue;
}
case 9897: {
s.push(l[0]);
pc=9898; continue;
}
case 9898: {
o=s.pop(); s.push(o.maps);
pc=9901; continue;
}
case 9901: {
o=s.pop(); s.push(o.wx);
pc=9904; continue;
}
case 9904: {
s.push(208);
pc=9907; continue;
}
case 9907: {
b=s.pop(); a=s.pop(); s.push((a + b) | 0);
pc=9908; continue;
}
case 9908: {
v=s.pop(); o=s.pop(); o.x=v;
pc=9911; continue;
}
case 9911: {
s.push(l[15]);
pc=9913; continue;
}
case 9913: {
s.push(l[0]);
pc=9914; continue;
}
case 9914: {
o=s.pop(); s.push(o.maps);
pc=9917; continue;
}
case 9917: {
o=s.pop(); s.push(o.wy);
pc=9920; continue;
}
case 9920: {
s.push(72);
pc=9922; continue;
}
case 9922: {
b=s.pop(); a=s.pop(); s.push((a + b) | 0);
pc=9923; continue;
}
case 9923: {
v=s.pop(); o=s.pop(); o.y=v;
pc=9926; continue;
}
case 9926: {
s.push(l[0]);
pc=9927; continue;
}
case 9927: {
o=s.pop(); s.push(o.km);
pc=9930; continue;
}
case 9930: {
o=s.pop(); s.push(o.mode);
pc=9933; continue;
}
case 9933: {
s.push(2040);
pc=9936; continue;
}
case 9936: {
b=s.pop(); a=s.pop();
pc=(a<=b)?9978:9939; continue;
}
case 9939: {
s.push(l[0]);
pc=9940; continue;
}
case 9940: {
o=s.pop(); s.push(o.km);
pc=9943; continue;
}
case 9943: {
o=s.pop(); s.push(o.mode);
pc=9946; continue;
}
case 9946: {
s.push(3070);
pc=9949; continue;
}
case 9949: {
b=s.pop(); a=s.pop();
pc=(a===b)?9978:9952; continue;
}
case 9952: {
s.push(l[0]);
pc=9953; continue;
}
case 9953: {
o=s.pop(); s.push(o.km);
pc=9956; continue;
}
case 9956: {
o=s.pop(); s.push(o.mode);
pc=9959; continue;
}
case 9959: {
s.push(5000);
pc=9962; continue;
}
case 9962: {
b=s.pop(); a=s.pop();
pc=(a<b)?9989:9965; continue;
}
case 9965: {
s.push(l[0]);
pc=9966; continue;
}
case 9966: {
o=s.pop(); s.push(o.km);
pc=9969; continue;
}
case 9969: {
o=s.pop(); s.push(o.mode);
pc=9972; continue;
}
case 9972: {
s.push(5040);
pc=9975; continue;
}
case 9975: {
b=s.pop(); a=s.pop();
pc=(a>b)?9989:9978; continue;
}
case 9978: {
s.push(l[15]);
pc=9980; continue;
}
case 9980: {
s.push(1600);
pc=9983; continue;
}
case 9983: {
v=s.pop(); o=s.pop(); o.pt=v;
pc=9986; continue;
}
case 9986: {
pc=11361; continue;
}
case 9989: {
s.push(l[15]);
pc=9991; continue;
}
case 9991: {
s.push(1610);
pc=9994; continue;
}
case 9994: {
v=s.pop(); o=s.pop(); o.pt=v;
pc=9997; continue;
}
case 9997: {
s.push(l[15]);
pc=9999; continue;
}
case 9999: {
s.push(s[s.length-1]);
pc=10000; continue;
}
case 10000: {
o=s.pop(); s.push(o.c1);
pc=10003; continue;
}
case 10003: {
s.push(1);
pc=10004; continue;
}
case 10004: {
b=s.pop(); a=s.pop(); s.push((a + b) | 0);
pc=10005; continue;
}
case 10005: {
v=s.pop(); o=s.pop(); o.c1=v;
pc=10008; continue;
}
case 10008: {
s.push(l[15]);
pc=10010; continue;
}
case 10010: {
o=s.pop(); s.push(o.c1);
pc=10013; continue;
}
case 10013: {
s.push(20);
pc=10015; continue;
}
case 10015: {
b=s.pop(); a=s.pop();
pc=(a<=b)?11361:10018; continue;
}
case 10018: {
s.push(l[15]);
pc=10020; continue;
}
case 10020: {
s.push(0);
pc=10021; continue;
}
case 10021: {
v=s.pop(); o=s.pop(); o.c=v;
pc=10024; continue;
}
case 10024: {
pc=11361; continue;
}
case 10027: {
s.push(l[15]);
pc=10029; continue;
}
case 10029: {
s.push(s[s.length-1]);
pc=10030; continue;
}
case 10030: {
o=s.pop(); s.push(o.c1);
pc=10033; continue;
}
case 10033: {
s.push(1);
pc=10034; continue;
}
case 10034: {
b=s.pop(); a=s.pop(); s.push((a + b) | 0);
pc=10035; continue;
}
case 10035: {
v=s.pop(); o=s.pop(); o.c1=v;
pc=10038; continue;
}
case 10038: {
s.push(l[15]);
pc=10040; continue;
}
case 10040: {
o=s.pop(); s.push(o.c1);
pc=10043; continue;
}
case 10043: {
s.push(1);
pc=10044; continue;
}
case 10044: {
b=s.pop(); a=s.pop();
pc=(a!==b)?10111:10047; continue;
}
case 10047: {
s.push(l[15]);
pc=10049; continue;
}
case 10049: {
o=s.pop(); s.push(o.team);
pc=10052; continue;
}
case 10052: {
a=s.pop();
pc=(a!=0)?10096:10055; continue;
}
case 10055: {
s.push(l[0]);
pc=10056; continue;
}
case 10056: {
s.push(0);
pc=10057; continue;
}
case 10057: {
s.push(0);
pc=10058; continue;
}
case 10058: {
s.push(0);
pc=10059; continue;
}
case 10059: {
s.push(l[15]);
pc=10061; continue;
}
case 10061: {
o=s.pop(); s.push(o.ap);
pc=10064; continue;
}
case 10064: {
s.push(l[0]);
pc=10065; continue;
}
case 10065: {
o=s.pop(); s.push(o.co_p);
pc=10068; continue;
}
case 10068: {
s.push(l[15]);
pc=10070; continue;
}
case 10070: {
o=s.pop(); s.push(o.mid);
pc=10073; continue;
}
case 10073: {
a=s.pop(); o=s.pop(); s.push(o[a]);
pc=10074; continue;
}
case 10074: {
o=s.pop(); s.push(o.name);
pc=10077; continue;
}
case 10077: {
s.push(l[0]);
pc=10078; continue;
}
case 10078: {
o=s.pop(); s.push(o.co_p);
pc=10081; continue;
}
case 10081: {
s.push(l[15]);
pc=10083; continue;
}
case 10083: {
o=s.pop(); s.push(o.mid);
pc=10086; continue;
}
case 10086: {
a=s.pop(); o=s.pop(); s.push(o[a]);
pc=10087; continue;
}
case 10087: {
o=s.pop(); s.push(o.seibetu);
pc=10090; continue;
}
case 10090: {
v=s.splice(s.length-6,6);
o=s.pop();
o.wHaniDmage$6(v[0],v[1],v[2],v[3],v[4],v[5]);
pc=10093; continue;
}
case 10093: {
pc=10133; continue;
}
case 10096: {
s.push(l[0]);
pc=10097; continue;
}
case 10097: {
s.push(0);
pc=10098; continue;
}
case 10098: {
s.push(0);
pc=10099; continue;
}
case 10099: {
s.push(0);
pc=10100; continue;
}
case 10100: {
s.push(l[15]);
pc=10102; continue;
}
case 10102: {
o=s.pop(); s.push(o.ap);
pc=10105; continue;
}
case 10105: {
v=s.splice(s.length-4,4);
o=s.pop();
o.pHaniDmage$4(v[0],v[1],v[2],v[3]);
pc=10108; continue;
}
case 10108: {
pc=10133; continue;
}
case 10111: {
s.push(l[15]);
pc=10113; continue;
}
case 10113: {
o=s.pop(); s.push(o.c1);
pc=10116; continue;
}
case 10116: {
s.push(5);
pc=10117; continue;
}
case 10117: {
b=s.pop(); a=s.pop();
pc=(a<=b)?10133:10120; continue;
}
case 10120: {
s.push(l[15]);
pc=10122; continue;
}
case 10122: {
s.push(6);
pc=10124; continue;
}
case 10124: {
v=s.pop(); o=s.pop(); o.c1=v;
pc=10127; continue;
}
case 10127: {
s.push(l[15]);
pc=10129; continue;
}
case 10129: {
s.push(0);
pc=10130; continue;
}
case 10130: {
v=s.pop(); o=s.pop(); o.c=v;
pc=10133; continue;
}
case 10133: {
s.push(l[15]);
pc=10135; continue;
}
case 10135: {
s.push(0);
pc=10136; continue;
}
case 10136: {
v=s.pop(); o=s.pop(); o.pt=v;
pc=10139; continue;
}
case 10139: {
s.push(l[15]);
pc=10141; continue;
}
case 10141: {
s.push(0);
pc=10142; continue;
}
case 10142: {
v=s.pop(); o=s.pop(); o.pth=v;
pc=10145; continue;
}
case 10145: {
pc=11361; continue;
}
case 10148: {
s.push(l[15]);
pc=10150; continue;
}
case 10150: {
o=s.pop(); s.push(o.c2);
pc=10153; continue;
}
case 10153: {
a=s.pop();
pc=(a!=0)?10280:10156; continue;
}
case 10156: {
s.push(l[15]);
pc=10158; continue;
}
case 10158: {
s.push(s[s.length-1]);
pc=10159; continue;
}
case 10159: {
o=s.pop(); s.push(o.c3);
pc=10162; continue;
}
case 10162: {
s.push(4);
pc=10163; continue;
}
case 10163: {
b=s.pop(); a=s.pop(); s.push((a - b) | 0);
pc=10164; continue;
}
case 10164: {
v=s.pop(); o=s.pop(); o.c3=v;
pc=10167; continue;
}
case 10167: {
s.push(l[15]);
pc=10169; continue;
}
case 10169: {
o=s.pop(); s.push(o.c3);
pc=10172; continue;
}
case 10172: {
s.push(12);
pc=10174; continue;
}
case 10174: {
b=s.pop(); a=s.pop();
pc=(a>b)?10199:10177; continue;
}
case 10177: {
s.push(l[15]);
pc=10179; continue;
}
case 10179: {
s.push(32);
pc=10181; continue;
}
case 10181: {
v=s.pop(); o=s.pop(); o.c3=v;
pc=10184; continue;
}
case 10184: {
s.push(l[15]);
pc=10186; continue;
}
case 10186: {
s.push(200);
pc=10189; continue;
}
case 10189: {
v=s.pop(); o=s.pop(); o.c2=v;
pc=10192; continue;
}
case 10192: {
s.push(l[15]);
pc=10194; continue;
}
case 10194: {
s.push(7);
pc=10196; continue;
}
case 10196: {
v=s.pop(); o=s.pop(); o.c4=v;
pc=10199; continue;
}
case 10199: {
s.push(l[15]);
pc=10201; continue;
}
case 10201: {
s.push(s[s.length-1]);
pc=10202; continue;
}
case 10202: {
o=s.pop(); s.push(o.c5);
pc=10205; continue;
}
case 10205: {
s.push(15);
pc=10207; continue;
}
case 10207: {
b=s.pop(); a=s.pop(); s.push((a + b) | 0);
pc=10208; continue;
}
case 10208: {
v=s.pop(); o=s.pop(); o.c5=v;
pc=10211; continue;
}
case 10211: {
s.push(l[15]);
pc=10213; continue;
}
case 10213: {
o=s.pop(); s.push(o.c5);
pc=10216; continue;
}
case 10216: {
s.push(90);
pc=10218; continue;
}
case 10218: {
b=s.pop(); a=s.pop();
pc=(a<b)?10233:10221; continue;
}
case 10221: {
s.push(l[15]);
pc=10223; continue;
}
case 10223: {
s.push(s[s.length-1]);
pc=10224; continue;
}
case 10224: {
o=s.pop(); s.push(o.c5);
pc=10227; continue;
}
case 10227: {
s.push(90);
pc=10229; continue;
}
case 10229: {
b=s.pop(); a=s.pop(); s.push((a - b) | 0);
pc=10230; continue;
}
case 10230: {
v=s.pop(); o=s.pop(); o.c5=v;
pc=10233; continue;
}
case 10233: {
s.push(l[0]);
pc=10234; continue;
}
case 10234: {
o=s.pop(); s.push(o.co_p);
pc=10237; continue;
}
case 10237: {
s.push(l[15]);
pc=10239; continue;
}
case 10239: {
o=s.pop(); s.push(o.mid);
pc=10242; continue;
}
case 10242: {
a=s.pop(); o=s.pop(); s.push(o[a]);
pc=10243; continue;
}
case 10243: {
o=s.pop(); s.push(o.c);
pc=10246; continue;
}
case 10246: {
s.push(1450);
pc=10249; continue;
}
case 10249: {
b=s.pop(); a=s.pop();
pc=(a===b)?10469:10252; continue;
}
case 10252: {
s.push(l[0]);
pc=10253; continue;
}
case 10253: {
o=s.pop(); s.push(o.co_p);
pc=10256; continue;
}
case 10256: {
s.push(l[15]);
pc=10258; continue;
}
case 10258: {
o=s.pop(); s.push(o.mid);
pc=10261; continue;
}
case 10261: {
a=s.pop(); o=s.pop(); s.push(o[a]);
pc=10262; continue;
}
case 10262: {
o=s.pop(); s.push(o.c);
pc=10265; continue;
}
case 10265: {
s.push(2450);
pc=10268; continue;
}
case 10268: {
b=s.pop(); a=s.pop();
pc=(a===b)?10469:10271; continue;
}
case 10271: {
s.push(l[15]);
pc=10273; continue;
}
case 10273: {
s.push(0);
pc=10274; continue;
}
case 10274: {
v=s.pop(); o=s.pop(); o.c=v;
pc=10277; continue;
}
case 10277: {
pc=10469; continue;
}
case 10280: {
s.push(l[15]);
pc=10282; continue;
}
case 10282: {
o=s.pop(); s.push(o.c2);
pc=10285; continue;
}
case 10285: {
s.push(200);
pc=10288; continue;
}
case 10288: {
b=s.pop(); a=s.pop();
pc=(a!==b)?10469:10291; continue;
}
case 10291: {
s.push(l[15]);
pc=10293; continue;
}
case 10293: {
s.push(s[s.length-1]);
pc=10294; continue;
}
case 10294: {
o=s.pop(); s.push(o.x);
pc=10297; continue;
}
case 10297: {
s.push(30);
pc=10299; continue;
}
case 10299: {
b=s.pop(); a=s.pop(); s.push((a + b) | 0);
pc=10300; continue;
}
case 10300: {
v=s.pop(); o=s.pop(); o.x=v;
pc=10303; continue;
}
case 10303: {
s.push(l[15]);
pc=10305; continue;
}
case 10305: {
o=s.pop(); s.push(o.x);
pc=10308; continue;
}
case 10308: {
s.push(l[0]);
pc=10309; continue;
}
case 10309: {
o=s.pop(); s.push(o.maps);
pc=10312; continue;
}
case 10312: {
o=s.pop(); s.push(o.wx);
pc=10315; continue;
}
case 10315: {
s.push(512);
pc=10318; continue;
}
case 10318: {
b=s.pop(); a=s.pop(); s.push((a + b) | 0);
pc=10319; continue;
}
case 10319: {
b=s.pop(); a=s.pop();
pc=(a<b)?10338:10322; continue;
}
case 10322: {
s.push(l[15]);
pc=10324; continue;
}
case 10324: {
s.push(l[0]);
pc=10325; continue;
}
case 10325: {
o=s.pop(); s.push(o.maps);
pc=10328; continue;
}
case 10328: {
o=s.pop(); s.push(o.wx);
pc=10331; continue;
}
case 10331: {
s.push(512);
pc=10334; continue;
}
case 10334: {
b=s.pop(); a=s.pop(); s.push((a + b) | 0);
pc=10335; continue;
}
case 10335: {
v=s.pop(); o=s.pop(); o.x=v;
pc=10338; continue;
}
case 10338: {
s.push(l[15]);
pc=10340; continue;
}
case 10340: {
o=s.pop(); s.push(o.c4);
pc=10343; continue;
}
case 10343: {
a=s.pop();
pc=(a<=0)?10394:10346; continue;
}
case 10346: {
s.push(l[15]);
pc=10348; continue;
}
case 10348: {
s.push(s[s.length-1]);
pc=10349; continue;
}
case 10349: {
o=s.pop(); s.push(o.c4);
pc=10352; continue;
}
case 10352: {
s.push(1);
pc=10353; continue;
}
case 10353: {
b=s.pop(); a=s.pop(); s.push((a - b) | 0);
pc=10354; continue;
}
case 10354: {
v=s.pop(); o=s.pop(); o.c4=v;
pc=10357; continue;
}
case 10357: {
s.push(l[15]);
pc=10359; continue;
}
case 10359: {
s.push(s[s.length-1]);
pc=10360; continue;
}
case 10360: {
o=s.pop(); s.push(o.c5);
pc=10363; continue;
}
case 10363: {
s.push(15);
pc=10365; continue;
}
case 10365: {
b=s.pop(); a=s.pop(); s.push((a + b) | 0);
pc=10366; continue;
}
case 10366: {
v=s.pop(); o=s.pop(); o.c5=v;
pc=10369; continue;
}
case 10369: {
s.push(l[15]);
pc=10371; continue;
}
case 10371: {
o=s.pop(); s.push(o.c5);
pc=10374; continue;
}
case 10374: {
s.push(90);
pc=10376; continue;
}
case 10376: {
b=s.pop(); a=s.pop();
pc=(a<b)?10431:10379; continue;
}
case 10379: {
s.push(l[15]);
pc=10381; continue;
}
case 10381: {
s.push(s[s.length-1]);
pc=10382; continue;
}
case 10382: {
o=s.pop(); s.push(o.c5);
pc=10385; continue;
}
case 10385: {
s.push(90);
pc=10387; continue;
}
case 10387: {
b=s.pop(); a=s.pop(); s.push((a - b) | 0);
pc=10388; continue;
}
case 10388: {
v=s.pop(); o=s.pop(); o.c5=v;
pc=10391; continue;
}
case 10391: {
pc=10431; continue;
}
case 10394: {
s.push(l[15]);
pc=10396; continue;
}
case 10396: {
s.push(s[s.length-1]);
pc=10397; continue;
}
case 10397: {
o=s.pop(); s.push(o.vx);
pc=10400; continue;
}
case 10400: {
s.push(30);
pc=10402; continue;
}
case 10402: {
b=s.pop(); a=s.pop(); s.push((a + b) | 0);
pc=10403; continue;
}
case 10403: {
v=s.pop(); o=s.pop(); o.vx=v;
pc=10406; continue;
}
case 10406: {
s.push(l[15]);
pc=10408; continue;
}
case 10408: {
o=s.pop(); s.push(o.vx);
pc=10411; continue;
}
case 10411: {
s.push(l[15]);
pc=10413; continue;
}
case 10413: {
o=s.pop(); s.push(o.x);
pc=10416; continue;
}
case 10416: {
b=s.pop(); a=s.pop();
pc=(a<b)?10425:10419; continue;
}
case 10419: {
s.push(l[15]);
pc=10421; continue;
}
case 10421: {
s.push(0);
pc=10422; continue;
}
case 10422: {
v=s.pop(); o=s.pop(); o.c=v;
pc=10425; continue;
}
case 10425: {
s.push(l[15]);
pc=10427; continue;
}
case 10427: {
s.push(-1);
pc=10428; continue;
}
case 10428: {
v=s.pop(); o=s.pop(); o.c3=v;
pc=10431; continue;
}
case 10431: {
s.push(l[0]);
pc=10432; continue;
}
case 10432: {
s.push(l[1]);
pc=10433; continue;
}
case 10433: {
s.push(0);
pc=10434; continue;
}
case 10434: {
s.push(5);
pc=10435; continue;
}
case 10435: {
s.push(l[15]);
pc=10437; continue;
}
case 10437: {
o=s.pop(); s.push(o.ap);
pc=10440; continue;
}
case 10440: {
s.push(l[0]);
pc=10441; continue;
}
case 10441: {
o=s.pop(); s.push(o.co_p);
pc=10444; continue;
}
case 10444: {
s.push(l[15]);
pc=10446; continue;
}
case 10446: {
o=s.pop(); s.push(o.mid);
pc=10449; continue;
}
case 10449: {
a=s.pop(); o=s.pop(); s.push(o[a]);
pc=10450; continue;
}
case 10450: {
o=s.pop(); s.push(o.name);
pc=10453; continue;
}
case 10453: {
s.push(l[0]);
pc=10454; continue;
}
case 10454: {
o=s.pop(); s.push(o.co_p);
pc=10457; continue;
}
case 10457: {
s.push(l[15]);
pc=10459; continue;
}
case 10459: {
o=s.pop(); s.push(o.mid);
pc=10462; continue;
}
case 10462: {
a=s.pop(); o=s.pop(); s.push(o[a]);
pc=10463; continue;
}
case 10463: {
o=s.pop(); s.push(o.seibetu);
pc=10466; continue;
}
case 10466: {
v=s.splice(s.length-6,6);
o=s.pop();
o.wHaniDmage$6(v[0],v[1],v[2],v[3],v[4],v[5]);
pc=10469; continue;
}
case 10469: {
s.push(l[15]);
pc=10471; continue;
}
case 10471: {
s.push(1800);
pc=10474; continue;
}
case 10474: {
v=s.pop(); o=s.pop(); o.pt=v;
pc=10477; continue;
}
case 10477: {
pc=11361; continue;
}
case 10480: {
s.push(l[15]);
pc=10482; continue;
}
case 10482: {
o=s.pop(); s.push(o.c2);
pc=10485; continue;
}
case 10485: {
a=s.pop();
pc=(a!=0)?10610:10488; continue;
}
case 10488: {
s.push(l[15]);
pc=10490; continue;
}
case 10490: {
s.push(s[s.length-1]);
pc=10491; continue;
}
case 10491: {
o=s.pop(); s.push(o.c3);
pc=10494; continue;
}
case 10494: {
s.push(4);
pc=10495; continue;
}
case 10495: {
b=s.pop(); a=s.pop(); s.push((a - b) | 0);
pc=10496; continue;
}
case 10496: {
v=s.pop(); o=s.pop(); o.c3=v;
pc=10499; continue;
}
case 10499: {
s.push(l[15]);
pc=10501; continue;
}
case 10501: {
o=s.pop(); s.push(o.c3);
pc=10504; continue;
}
case 10504: {
s.push(12);
pc=10506; continue;
}
case 10506: {
b=s.pop(); a=s.pop();
pc=(a>b)?10531:10509; continue;
}
case 10509: {
s.push(l[15]);
pc=10511; continue;
}
case 10511: {
s.push(32);
pc=10513; continue;
}
case 10513: {
v=s.pop(); o=s.pop(); o.c3=v;
pc=10516; continue;
}
case 10516: {
s.push(l[15]);
pc=10518; continue;
}
case 10518: {
s.push(200);
pc=10521; continue;
}
case 10521: {
v=s.pop(); o=s.pop(); o.c2=v;
pc=10524; continue;
}
case 10524: {
s.push(l[15]);
pc=10526; continue;
}
case 10526: {
s.push(7);
pc=10528; continue;
}
case 10528: {
v=s.pop(); o=s.pop(); o.c4=v;
pc=10531; continue;
}
case 10531: {
s.push(l[15]);
pc=10533; continue;
}
case 10533: {
s.push(s[s.length-1]);
pc=10534; continue;
}
case 10534: {
o=s.pop(); s.push(o.c5);
pc=10537; continue;
}
case 10537: {
s.push(15);
pc=10539; continue;
}
case 10539: {
b=s.pop(); a=s.pop(); s.push((a - b) | 0);
pc=10540; continue;
}
case 10540: {
v=s.pop(); o=s.pop(); o.c5=v;
pc=10543; continue;
}
case 10543: {
s.push(l[15]);
pc=10545; continue;
}
case 10545: {
o=s.pop(); s.push(o.c5);
pc=10548; continue;
}
case 10548: {
a=s.pop();
pc=(a>=0)?10563:10551; continue;
}
case 10551: {
s.push(l[15]);
pc=10553; continue;
}
case 10553: {
s.push(s[s.length-1]);
pc=10554; continue;
}
case 10554: {
o=s.pop(); s.push(o.c5);
pc=10557; continue;
}
case 10557: {
s.push(90);
pc=10559; continue;
}
case 10559: {
b=s.pop(); a=s.pop(); s.push((a + b) | 0);
pc=10560; continue;
}
case 10560: {
v=s.pop(); o=s.pop(); o.c5=v;
pc=10563; continue;
}
case 10563: {
s.push(l[0]);
pc=10564; continue;
}
case 10564: {
o=s.pop(); s.push(o.co_w);
pc=10567; continue;
}
case 10567: {
s.push(l[15]);
pc=10569; continue;
}
case 10569: {
o=s.pop(); s.push(o.mid);
pc=10572; continue;
}
case 10572: {
a=s.pop(); o=s.pop(); s.push(o[a]);
pc=10573; continue;
}
case 10573: {
o=s.pop(); s.push(o.c);
pc=10576; continue;
}
case 10576: {
s.push(1450);
pc=10579; continue;
}
case 10579: {
b=s.pop(); a=s.pop();
pc=(a===b)?10763:10582; continue;
}
case 10582: {
s.push(l[0]);
pc=10583; continue;
}
case 10583: {
o=s.pop(); s.push(o.co_w);
pc=10586; continue;
}
case 10586: {
s.push(l[15]);
pc=10588; continue;
}
case 10588: {
o=s.pop(); s.push(o.mid);
pc=10591; continue;
}
case 10591: {
a=s.pop(); o=s.pop(); s.push(o[a]);
pc=10592; continue;
}
case 10592: {
o=s.pop(); s.push(o.c);
pc=10595; continue;
}
case 10595: {
s.push(2450);
pc=10598; continue;
}
case 10598: {
b=s.pop(); a=s.pop();
pc=(a===b)?10763:10601; continue;
}
case 10601: {
s.push(l[15]);
pc=10603; continue;
}
case 10603: {
s.push(0);
pc=10604; continue;
}
case 10604: {
v=s.pop(); o=s.pop(); o.c=v;
pc=10607; continue;
}
case 10607: {
pc=10763; continue;
}
case 10610: {
s.push(l[15]);
pc=10612; continue;
}
case 10612: {
o=s.pop(); s.push(o.c2);
pc=10615; continue;
}
case 10615: {
s.push(200);
pc=10618; continue;
}
case 10618: {
b=s.pop(); a=s.pop();
pc=(a!==b)?10763:10621; continue;
}
case 10621: {
s.push(l[15]);
pc=10623; continue;
}
case 10623: {
s.push(s[s.length-1]);
pc=10624; continue;
}
case 10624: {
o=s.pop(); s.push(o.x);
pc=10627; continue;
}
case 10627: {
s.push(30);
pc=10629; continue;
}
case 10629: {
b=s.pop(); a=s.pop(); s.push((a - b) | 0);
pc=10630; continue;
}
case 10630: {
v=s.pop(); o=s.pop(); o.x=v;
pc=10633; continue;
}
case 10633: {
s.push(l[15]);
pc=10635; continue;
}
case 10635: {
o=s.pop(); s.push(o.x);
pc=10638; continue;
}
case 10638: {
s.push(l[0]);
pc=10639; continue;
}
case 10639: {
o=s.pop(); s.push(o.maps);
pc=10642; continue;
}
case 10642: {
o=s.pop(); s.push(o.wx);
pc=10645; continue;
}
case 10645: {
b=s.pop(); a=s.pop();
pc=(a>b)?10660:10648; continue;
}
case 10648: {
s.push(l[15]);
pc=10650; continue;
}
case 10650: {
s.push(l[0]);
pc=10651; continue;
}
case 10651: {
o=s.pop(); s.push(o.maps);
pc=10654; continue;
}
case 10654: {
o=s.pop(); s.push(o.wx);
pc=10657; continue;
}
case 10657: {
v=s.pop(); o=s.pop(); o.x=v;
pc=10660; continue;
}
case 10660: {
s.push(l[15]);
pc=10662; continue;
}
case 10662: {
o=s.pop(); s.push(o.c4);
pc=10665; continue;
}
case 10665: {
a=s.pop();
pc=(a<=0)?10714:10668; continue;
}
case 10668: {
s.push(l[15]);
pc=10670; continue;
}
case 10670: {
s.push(s[s.length-1]);
pc=10671; continue;
}
case 10671: {
o=s.pop(); s.push(o.c4);
pc=10674; continue;
}
case 10674: {
s.push(1);
pc=10675; continue;
}
case 10675: {
b=s.pop(); a=s.pop(); s.push((a - b) | 0);
pc=10676; continue;
}
case 10676: {
v=s.pop(); o=s.pop(); o.c4=v;
pc=10679; continue;
}
case 10679: {
s.push(l[15]);
pc=10681; continue;
}
case 10681: {
s.push(s[s.length-1]);
pc=10682; continue;
}
case 10682: {
o=s.pop(); s.push(o.c5);
pc=10685; continue;
}
case 10685: {
s.push(15);
pc=10687; continue;
}
case 10687: {
b=s.pop(); a=s.pop(); s.push((a - b) | 0);
pc=10688; continue;
}
case 10688: {
v=s.pop(); o=s.pop(); o.c5=v;
pc=10691; continue;
}
case 10691: {
s.push(l[15]);
pc=10693; continue;
}
case 10693: {
o=s.pop(); s.push(o.c5);
pc=10696; continue;
}
case 10696: {
a=s.pop();
pc=(a>=0)?10751:10699; continue;
}
case 10699: {
s.push(l[15]);
pc=10701; continue;
}
case 10701: {
s.push(s[s.length-1]);
pc=10702; continue;
}
case 10702: {
o=s.pop(); s.push(o.c5);
pc=10705; continue;
}
case 10705: {
s.push(90);
pc=10707; continue;
}
case 10707: {
b=s.pop(); a=s.pop(); s.push((a + b) | 0);
pc=10708; continue;
}
case 10708: {
v=s.pop(); o=s.pop(); o.c5=v;
pc=10711; continue;
}
case 10711: {
pc=10751; continue;
}
case 10714: {
s.push(l[15]);
pc=10716; continue;
}
case 10716: {
s.push(s[s.length-1]);
pc=10717; continue;
}
case 10717: {
o=s.pop(); s.push(o.vx);
pc=10720; continue;
}
case 10720: {
s.push(30);
pc=10722; continue;
}
case 10722: {
b=s.pop(); a=s.pop(); s.push((a - b) | 0);
pc=10723; continue;
}
case 10723: {
v=s.pop(); o=s.pop(); o.vx=v;
pc=10726; continue;
}
case 10726: {
s.push(l[15]);
pc=10728; continue;
}
case 10728: {
o=s.pop(); s.push(o.vx);
pc=10731; continue;
}
case 10731: {
s.push(l[15]);
pc=10733; continue;
}
case 10733: {
o=s.pop(); s.push(o.x);
pc=10736; continue;
}
case 10736: {
b=s.pop(); a=s.pop();
pc=(a>b)?10745:10739; continue;
}
case 10739: {
s.push(l[15]);
pc=10741; continue;
}
case 10741: {
s.push(0);
pc=10742; continue;
}
case 10742: {
v=s.pop(); o=s.pop(); o.c=v;
pc=10745; continue;
}
case 10745: {
s.push(l[15]);
pc=10747; continue;
}
case 10747: {
s.push(-1);
pc=10748; continue;
}
case 10748: {
v=s.pop(); o=s.pop(); o.c3=v;
pc=10751; continue;
}
case 10751: {
s.push(l[0]);
pc=10752; continue;
}
case 10752: {
s.push(l[1]);
pc=10753; continue;
}
case 10753: {
s.push(0);
pc=10754; continue;
}
case 10754: {
s.push(5);
pc=10755; continue;
}
case 10755: {
s.push(l[15]);
pc=10757; continue;
}
case 10757: {
o=s.pop(); s.push(o.ap);
pc=10760; continue;
}
case 10760: {
v=s.splice(s.length-4,4);
o=s.pop();
o.pHaniDmage$4(v[0],v[1],v[2],v[3]);
pc=10763; continue;
}
case 10763: {
s.push(l[15]);
pc=10765; continue;
}
case 10765: {
s.push(1805);
pc=10768; continue;
}
case 10768: {
v=s.pop(); o=s.pop(); o.pt=v;
pc=10771; continue;
}
case 10771: {
pc=11361; continue;
}
case 10774: {
s.push(l[15]);
pc=10776; continue;
}
case 10776: {
s.push(s[s.length-1]);
pc=10777; continue;
}
case 10777: {
o=s.pop(); s.push(o.c3);
pc=10780; continue;
}
case 10780: {
s.push(4);
pc=10781; continue;
}
case 10781: {
b=s.pop(); a=s.pop(); s.push((a + b) | 0);
pc=10782; continue;
}
case 10782: {
v=s.pop(); o=s.pop(); o.c3=v;
pc=10785; continue;
}
case 10785: {
s.push(l[15]);
pc=10787; continue;
}
case 10787: {
o=s.pop(); s.push(o.c3);
pc=10790; continue;
}
case 10790: {
s.push(32);
pc=10792; continue;
}
case 10792: {
b=s.pop(); a=s.pop();
pc=(a<b)?11254:10795; continue;
}
case 10795: {
s.push(l[15]);
pc=10797; continue;
}
case 10797: {
s.push(32);
pc=10799; continue;
}
case 10799: {
v=s.pop(); o=s.pop(); o.c3=v;
pc=10802; continue;
}
case 10802: {
s.push(l[15]);
pc=10804; continue;
}
case 10804: {
s.push(350);
pc=10807; continue;
}
case 10807: {
v=s.pop(); o=s.pop(); o.c=v;
pc=10810; continue;
}
case 10810: {
s.push(l[15]);
pc=10812; continue;
}
case 10812: {
o=s.pop(); s.push(o.team);
pc=10815; continue;
}
case 10815: {
a=s.pop();
pc=(a!=0)?11015:10818; continue;
}
case 10818: {
s.push(l[0]);
pc=10819; continue;
}
case 10819: {
s.push(l[15]);
pc=10821; continue;
}
case 10821: {
o=s.pop(); s.push(o.x);
pc=10824; continue;
}
case 10824: {
s.push(l[15]);
pc=10826; continue;
}
case 10826: {
o=s.pop(); s.push(o.y);
pc=10829; continue;
}
case 10829: {
s.push(1);
pc=10830; continue;
}
case 10830: {
v=s.splice(s.length-3,3);
o=s.pop();
s.push(o.pSearch$3(v[0],v[1],v[2]));
pc=10833; continue;
}
case 10833: {
l[4]=s.pop();
pc=10835; continue;
}
case 10835: {
s.push(l[4]);
pc=10837; continue;
}
case 10837: {
a=s.pop();
pc=(a<0)?10998:10840; continue;
}
case 10840: {
s.push(l[0]);
pc=10841; continue;
}
case 10841: {
o=s.pop(); s.push(o.co_w);
pc=10844; continue;
}
case 10844: {
s.push(l[4]);
pc=10846; continue;
}
case 10846: {
a=s.pop(); o=s.pop(); s.push(o[a]);
pc=10847; continue;
}
case 10847: {
o=s.pop(); s.push(o.x);
pc=10850; continue;
}
case 10850: {
s.push(l[15]);
pc=10852; continue;
}
case 10852: {
o=s.pop(); s.push(o.x);
pc=10855; continue;
}
case 10855: {
b=s.pop(); a=s.pop(); s.push((a - b) | 0);
pc=10856; continue;
}
case 10856: {
l[8]=s.pop();
pc=10858; continue;
}
case 10858: {
s.push(l[0]);
pc=10859; continue;
}
case 10859: {
o=s.pop(); s.push(o.co_w);
pc=10862; continue;
}
case 10862: {
s.push(l[4]);
pc=10864; continue;
}
case 10864: {
a=s.pop(); o=s.pop(); s.push(o[a]);
pc=10865; continue;
}
case 10865: {
o=s.pop(); s.push(o.y);
pc=10868; continue;
}
case 10868: {
s.push(l[15]);
pc=10870; continue;
}
case 10870: {
o=s.pop(); s.push(o.y);
pc=10873; continue;
}
case 10873: {
b=s.pop(); a=s.pop(); s.push((a - b) | 0);
pc=10874; continue;
}
case 10874: {
l[9]=s.pop();
pc=10876; continue;
}
case 10876: {
s.push(l[15]);
pc=10878; continue;
}
case 10878: {
o=s.pop(); s.push(o.x);
pc=10881; continue;
}
case 10881: {
s.push(l[0]);
pc=10882; continue;
}
case 10882: {
o=s.pop(); s.push(o.co_w);
pc=10885; continue;
}
case 10885: {
s.push(l[4]);
pc=10887; continue;
}
case 10887: {
a=s.pop(); o=s.pop(); s.push(o[a]);
pc=10888; continue;
}
case 10888: {
o=s.pop(); s.push(o.x);
pc=10891; continue;
}
case 10891: {
b=s.pop(); a=s.pop();
pc=(a<=b)?10911:10894; continue;
}
case 10894: {
s.push(l[0]);
pc=10895; continue;
}
case 10895: {
o=s.pop(); s.push(o.co_p);
pc=10898; continue;
}
case 10898: {
s.push(l[15]);
pc=10900; continue;
}
case 10900: {
o=s.pop(); s.push(o.mid);
pc=10903; continue;
}
case 10903: {
a=s.pop(); o=s.pop(); s.push(o[a]);
pc=10904; continue;
}
case 10904: {
s.push(0);
pc=10905; continue;
}
case 10905: {
v=s.pop(); o=s.pop(); o.muki=v;
pc=10908; continue;
}
case 10908: {
pc=10925; continue;
}
case 10911: {
s.push(l[0]);
pc=10912; continue;
}
case 10912: {
o=s.pop(); s.push(o.co_p);
pc=10915; continue;
}
case 10915: {
s.push(l[15]);
pc=10917; continue;
}
case 10917: {
o=s.pop(); s.push(o.mid);
pc=10920; continue;
}
case 10920: {
a=s.pop(); o=s.pop(); s.push(o[a]);
pc=10921; continue;
}
case 10921: {
s.push(1);
pc=10922; continue;
}
case 10922: {
v=s.pop(); o=s.pop(); o.muki=v;
pc=10925; continue;
}
case 10925: {
s.push(l[8]);
pc=10927; continue;
}
case 10927: {
s.push(l[8]);
pc=10929; continue;
}
case 10929: {
b=s.pop(); a=s.pop(); s.push(Math.imul(a,b));
pc=10930; continue;
}
case 10930: {
s.push(l[9]);
pc=10932; continue;
}
case 10932: {
s.push(l[9]);
pc=10934; continue;
}
case 10934: {
b=s.pop(); a=s.pop(); s.push(Math.imul(a,b));
pc=10935; continue;
}
case 10935: {
b=s.pop(); a=s.pop(); s.push((a + b) | 0);
pc=10936; continue;
}
case 10936: {
pc=10937; continue;
}
case 10937: {
v=s.splice(s.length-1,1);
s.push(Math.sqrt(v[0]));
pc=10940; continue;
}
case 10940: {
s.push(J.i(s.pop()));
pc=10941; continue;
}
case 10941: {
l[14]=s.pop();
pc=10943; continue;
}
case 10943: {
s.push(l[14]);
pc=10945; continue;
}
case 10945: {
s.push(16);
pc=10947; continue;
}
case 10947: {
b=s.pop(); a=s.pop();
pc=(a>=b)?10967:10950; continue;
}
case 10950: {
s.push(l[15]);
pc=10952; continue;
}
case 10952: {
s.push(150);
pc=10955; continue;
}
case 10955: {
v=s.pop(); o=s.pop(); o.vx=v;
pc=10958; continue;
}
case 10958: {
s.push(l[15]);
pc=10960; continue;
}
case 10960: {
s.push(0);
pc=10961; continue;
}
case 10961: {
v=s.pop(); o=s.pop(); o.vy=v;
pc=10964; continue;
}
case 10964: {
pc=11254; continue;
}
case 10967: {
s.push(l[15]);
pc=10969; continue;
}
case 10969: {
s.push(150);
pc=10972; continue;
}
case 10972: {
s.push(l[8]);
pc=10974; continue;
}
case 10974: {
b=s.pop(); a=s.pop(); s.push(Math.imul(a,b));
pc=10975; continue;
}
case 10975: {
s.push(l[14]);
pc=10977; continue;
}
case 10977: {
b=s.pop(); a=s.pop(); s.push(J.div(a,b));
pc=10978; continue;
}
case 10978: {
v=s.pop(); o=s.pop(); o.vx=v;
pc=10981; continue;
}
case 10981: {
s.push(l[15]);
pc=10983; continue;
}
case 10983: {
s.push(150);
pc=10986; continue;
}
case 10986: {
s.push(l[9]);
pc=10988; continue;
}
case 10988: {
b=s.pop(); a=s.pop(); s.push(Math.imul(a,b));
pc=10989; continue;
}
case 10989: {
s.push(l[14]);
pc=10991; continue;
}
case 10991: {
b=s.pop(); a=s.pop(); s.push(J.div(a,b));
pc=10992; continue;
}
case 10992: {
v=s.pop(); o=s.pop(); o.vy=v;
pc=10995; continue;
}
case 10995: {
pc=11254; continue;
}
case 10998: {
s.push(l[15]);
pc=11000; continue;
}
case 11000: {
s.push(150);
pc=11003; continue;
}
case 11003: {
v=s.pop(); o=s.pop(); o.vx=v;
pc=11006; continue;
}
case 11006: {
s.push(l[15]);
pc=11008; continue;
}
case 11008: {
s.push(0);
pc=11009; continue;
}
case 11009: {
v=s.pop(); o=s.pop(); o.vy=v;
pc=11012; continue;
}
case 11012: {
pc=11254; continue;
}
case 11015: {
s.push(l[0]);
pc=11016; continue;
}
case 11016: {
s.push(l[15]);
pc=11018; continue;
}
case 11018: {
o=s.pop(); s.push(o.x);
pc=11021; continue;
}
case 11021: {
s.push(l[15]);
pc=11023; continue;
}
case 11023: {
o=s.pop(); s.push(o.y);
pc=11026; continue;
}
case 11026: {
s.push(6);
pc=11028; continue;
}
case 11028: {
v=s.splice(s.length-3,3);
o=s.pop();
s.push(o.wSearch$3(v[0],v[1],v[2]));
pc=11031; continue;
}
case 11031: {
l[4]=s.pop();
pc=11033; continue;
}
case 11033: {
s.push(l[4]);
pc=11035; continue;
}
case 11035: {
a=s.pop();
pc=(a<0)?11196:11038; continue;
}
case 11038: {
s.push(l[0]);
pc=11039; continue;
}
case 11039: {
o=s.pop(); s.push(o.co_p);
pc=11042; continue;
}
case 11042: {
s.push(l[4]);
pc=11044; continue;
}
case 11044: {
a=s.pop(); o=s.pop(); s.push(o[a]);
pc=11045; continue;
}
case 11045: {
o=s.pop(); s.push(o.x);
pc=11048; continue;
}
case 11048: {
s.push(l[15]);
pc=11050; continue;
}
case 11050: {
o=s.pop(); s.push(o.x);
pc=11053; continue;
}
case 11053: {
b=s.pop(); a=s.pop(); s.push((a - b) | 0);
pc=11054; continue;
}
case 11054: {
l[8]=s.pop();
pc=11056; continue;
}
case 11056: {
s.push(l[0]);
pc=11057; continue;
}
case 11057: {
o=s.pop(); s.push(o.co_p);
pc=11060; continue;
}
case 11060: {
s.push(l[4]);
pc=11062; continue;
}
case 11062: {
a=s.pop(); o=s.pop(); s.push(o[a]);
pc=11063; continue;
}
case 11063: {
o=s.pop(); s.push(o.y);
pc=11066; continue;
}
case 11066: {
s.push(l[15]);
pc=11068; continue;
}
case 11068: {
o=s.pop(); s.push(o.y);
pc=11071; continue;
}
case 11071: {
b=s.pop(); a=s.pop(); s.push((a - b) | 0);
pc=11072; continue;
}
case 11072: {
l[9]=s.pop();
pc=11074; continue;
}
case 11074: {
s.push(l[15]);
pc=11076; continue;
}
case 11076: {
o=s.pop(); s.push(o.x);
pc=11079; continue;
}
case 11079: {
s.push(l[0]);
pc=11080; continue;
}
case 11080: {
o=s.pop(); s.push(o.co_p);
pc=11083; continue;
}
case 11083: {
s.push(l[4]);
pc=11085; continue;
}
case 11085: {
a=s.pop(); o=s.pop(); s.push(o[a]);
pc=11086; continue;
}
case 11086: {
o=s.pop(); s.push(o.x);
pc=11089; continue;
}
case 11089: {
b=s.pop(); a=s.pop();
pc=(a<=b)?11109:11092; continue;
}
case 11092: {
s.push(l[0]);
pc=11093; continue;
}
case 11093: {
o=s.pop(); s.push(o.co_w);
pc=11096; continue;
}
case 11096: {
s.push(l[15]);
pc=11098; continue;
}
case 11098: {
o=s.pop(); s.push(o.mid);
pc=11101; continue;
}
case 11101: {
a=s.pop(); o=s.pop(); s.push(o[a]);
pc=11102; continue;
}
case 11102: {
s.push(0);
pc=11103; continue;
}
case 11103: {
v=s.pop(); o=s.pop(); o.muki=v;
pc=11106; continue;
}
case 11106: {
pc=11123; continue;
}
case 11109: {
s.push(l[0]);
pc=11110; continue;
}
case 11110: {
o=s.pop(); s.push(o.co_w);
pc=11113; continue;
}
case 11113: {
s.push(l[15]);
pc=11115; continue;
}
case 11115: {
o=s.pop(); s.push(o.mid);
pc=11118; continue;
}
case 11118: {
a=s.pop(); o=s.pop(); s.push(o[a]);
pc=11119; continue;
}
case 11119: {
s.push(1);
pc=11120; continue;
}
case 11120: {
v=s.pop(); o=s.pop(); o.muki=v;
pc=11123; continue;
}
case 11123: {
s.push(l[8]);
pc=11125; continue;
}
case 11125: {
s.push(l[8]);
pc=11127; continue;
}
case 11127: {
b=s.pop(); a=s.pop(); s.push(Math.imul(a,b));
pc=11128; continue;
}
case 11128: {
s.push(l[9]);
pc=11130; continue;
}
case 11130: {
s.push(l[9]);
pc=11132; continue;
}
case 11132: {
b=s.pop(); a=s.pop(); s.push(Math.imul(a,b));
pc=11133; continue;
}
case 11133: {
b=s.pop(); a=s.pop(); s.push((a + b) | 0);
pc=11134; continue;
}
case 11134: {
pc=11135; continue;
}
case 11135: {
v=s.splice(s.length-1,1);
s.push(Math.sqrt(v[0]));
pc=11138; continue;
}
case 11138: {
s.push(J.i(s.pop()));
pc=11139; continue;
}
case 11139: {
l[14]=s.pop();
pc=11141; continue;
}
case 11141: {
s.push(l[14]);
pc=11143; continue;
}
case 11143: {
s.push(16);
pc=11145; continue;
}
case 11145: {
b=s.pop(); a=s.pop();
pc=(a>=b)?11165:11148; continue;
}
case 11148: {
s.push(l[15]);
pc=11150; continue;
}
case 11150: {
s.push(-150);
pc=11153; continue;
}
case 11153: {
v=s.pop(); o=s.pop(); o.vx=v;
pc=11156; continue;
}
case 11156: {
s.push(l[15]);
pc=11158; continue;
}
case 11158: {
s.push(0);
pc=11159; continue;
}
case 11159: {
v=s.pop(); o=s.pop(); o.vy=v;
pc=11162; continue;
}
case 11162: {
pc=11254; continue;
}
case 11165: {
s.push(l[15]);
pc=11167; continue;
}
case 11167: {
s.push(150);
pc=11170; continue;
}
case 11170: {
s.push(l[8]);
pc=11172; continue;
}
case 11172: {
b=s.pop(); a=s.pop(); s.push(Math.imul(a,b));
pc=11173; continue;
}
case 11173: {
s.push(l[14]);
pc=11175; continue;
}
case 11175: {
b=s.pop(); a=s.pop(); s.push(J.div(a,b));
pc=11176; continue;
}
case 11176: {
v=s.pop(); o=s.pop(); o.vx=v;
pc=11179; continue;
}
case 11179: {
s.push(l[15]);
pc=11181; continue;
}
case 11181: {
s.push(150);
pc=11184; continue;
}
case 11184: {
s.push(l[9]);
pc=11186; continue;
}
case 11186: {
b=s.pop(); a=s.pop(); s.push(Math.imul(a,b));
pc=11187; continue;
}
case 11187: {
s.push(l[14]);
pc=11189; continue;
}
case 11189: {
b=s.pop(); a=s.pop(); s.push(J.div(a,b));
pc=11190; continue;
}
case 11190: {
v=s.pop(); o=s.pop(); o.vy=v;
pc=11193; continue;
}
case 11193: {
pc=11254; continue;
}
case 11196: {
s.push(l[15]);
pc=11198; continue;
}
case 11198: {
o=s.pop(); s.push(o.x);
pc=11201; continue;
}
case 11201: {
s.push(l[0]);
pc=11202; continue;
}
case 11202: {
o=s.pop(); s.push(o.maps);
pc=11205; continue;
}
case 11205: {
o=s.pop(); s.push(o.wx);
pc=11208; continue;
}
case 11208: {
s.push(256);
pc=11211; continue;
}
case 11211: {
b=s.pop(); a=s.pop(); s.push((a + b) | 0);
pc=11212; continue;
}
case 11212: {
b=s.pop(); a=s.pop();
pc=(a>b)?11223:11215; continue;
}
case 11215: {
s.push(l[0]);
pc=11216; continue;
}
case 11216: {
o=s.pop(); s.push(o.gym_f);
pc=11219; continue;
}
case 11219: {
s.push(1);
pc=11220; continue;
}
case 11220: {
b=s.pop(); a=s.pop();
pc=(a!==b)?11240:11223; continue;
}
case 11223: {
s.push(l[15]);
pc=11225; continue;
}
case 11225: {
s.push(-150);
pc=11228; continue;
}
case 11228: {
v=s.pop(); o=s.pop(); o.vx=v;
pc=11231; continue;
}
case 11231: {
s.push(l[15]);
pc=11233; continue;
}
case 11233: {
s.push(0);
pc=11234; continue;
}
case 11234: {
v=s.pop(); o=s.pop(); o.vy=v;
pc=11237; continue;
}
case 11237: {
pc=11254; continue;
}
case 11240: {
s.push(l[15]);
pc=11242; continue;
}
case 11242: {
s.push(150);
pc=11245; continue;
}
case 11245: {
v=s.pop(); o=s.pop(); o.vx=v;
pc=11248; continue;
}
case 11248: {
s.push(l[15]);
pc=11250; continue;
}
case 11250: {
s.push(0);
pc=11251; continue;
}
case 11251: {
v=s.pop(); o=s.pop(); o.vy=v;
pc=11254; continue;
}
case 11254: {
s.push(l[15]);
pc=11256; continue;
}
case 11256: {
o=s.pop(); s.push(o.team);
pc=11259; continue;
}
case 11259: {
a=s.pop();
pc=(a!=0)?11290:11262; continue;
}
case 11262: {
s.push(l[0]);
pc=11263; continue;
}
case 11263: {
o=s.pop(); s.push(o.co_p);
pc=11266; continue;
}
case 11266: {
s.push(l[15]);
pc=11268; continue;
}
case 11268: {
o=s.pop(); s.push(o.mid);
pc=11271; continue;
}
case 11271: {
a=s.pop(); o=s.pop(); s.push(o[a]);
pc=11272; continue;
}
case 11272: {
o=s.pop(); s.push(o.c);
pc=11275; continue;
}
case 11275: {
s.push(2400);
pc=11278; continue;
}
case 11278: {
b=s.pop(); a=s.pop();
pc=(a===b)?11353:11281; continue;
}
case 11281: {
s.push(l[15]);
pc=11283; continue;
}
case 11283: {
s.push(0);
pc=11284; continue;
}
case 11284: {
v=s.pop(); o=s.pop(); o.c=v;
pc=11287; continue;
}
case 11287: {
pc=11353; continue;
}
case 11290: {
s.push(l[0]);
pc=11291; continue;
}
case 11291: {
o=s.pop(); s.push(o.co_w);
pc=11294; continue;
}
case 11294: {
s.push(l[15]);
pc=11296; continue;
}
case 11296: {
o=s.pop(); s.push(o.mid);
pc=11299; continue;
}
case 11299: {
a=s.pop(); o=s.pop(); s.push(o[a]);
pc=11300; continue;
}
case 11300: {
o=s.pop(); s.push(o.c);
pc=11303; continue;
}
case 11303: {
s.push(15200);
pc=11306; continue;
}
case 11306: {
b=s.pop(); a=s.pop();
pc=(a===b)?11353:11309; continue;
}
case 11309: {
s.push(l[0]);
pc=11310; continue;
}
case 11310: {
o=s.pop(); s.push(o.co_w);
pc=11313; continue;
}
case 11313: {
s.push(l[15]);
pc=11315; continue;
}
case 11315: {
o=s.pop(); s.push(o.mid);
pc=11318; continue;
}
case 11318: {
a=s.pop(); o=s.pop(); s.push(o[a]);
pc=11319; continue;
}
case 11319: {
o=s.pop(); s.push(o.c);
pc=11322; continue;
}
case 11322: {
s.push(15210);
pc=11325; continue;
}
case 11325: {
b=s.pop(); a=s.pop();
pc=(a===b)?11353:11328; continue;
}
case 11328: {
s.push(l[0]);
pc=11329; continue;
}
case 11329: {
o=s.pop(); s.push(o.co_w);
pc=11332; continue;
}
case 11332: {
s.push(l[15]);
pc=11334; continue;
}
case 11334: {
o=s.pop(); s.push(o.mid);
pc=11337; continue;
}
case 11337: {
a=s.pop(); o=s.pop(); s.push(o[a]);
pc=11338; continue;
}
case 11338: {
o=s.pop(); s.push(o.c);
pc=11341; continue;
}
case 11341: {
s.push(2400);
pc=11344; continue;
}
case 11344: {
b=s.pop(); a=s.pop();
pc=(a===b)?11353:11347; continue;
}
case 11347: {
s.push(l[15]);
pc=11349; continue;
}
case 11349: {
s.push(0);
pc=11350; continue;
}
case 11350: {
v=s.pop(); o=s.pop(); o.c=v;
pc=11353; continue;
}
case 11353: {
s.push(l[15]);
pc=11355; continue;
}
case 11355: {
s.push(1900);
pc=11358; continue;
}
case 11358: {
v=s.pop(); o=s.pop(); o.pt=v;
pc=11361; continue;
}
case 11361: {
s.push(l[15]);
pc=11363; continue;
}
case 11363: {
o=s.pop(); s.push(o.c);
pc=11366; continue;
}
case 11366: {
a=s.pop();
pc=(a!=0)?11382:11369; continue;
}
case 11369: {
s.push(l[0]);
pc=11370; continue;
}
case 11370: {
s.push(s[s.length-1]);
pc=11371; continue;
}
case 11371: {
o=s.pop(); s.push(o.m_kazu);
pc=11374; continue;
}
case 11374: {
s.push(1);
pc=11375; continue;
}
case 11375: {
b=s.pop(); a=s.pop(); s.push((a - b) | 0);
pc=11376; continue;
}
case 11376: {
v=s.pop(); o=s.pop(); o.m_kazu=v;
pc=11379; continue;
}
case 11379: {
pc=13183; continue;
}
case 11382: {
s.push(l[15]);
pc=11384; continue;
}
case 11384: {
o=s.pop(); s.push(o.team);
pc=11387; continue;
}
case 11387: {
a=s.pop();
pc=(a!=0)?12338:11390; continue;
}
case 11390: {
s.push(l[15]);
pc=11392; continue;
}
case 11392: {
o=s.pop(); s.push(o.c);
pc=11395; continue;
}
case 11395: {
s.push(100);
pc=11397; continue;
}
case 11397: {
b=s.pop(); a=s.pop();
pc=(a<b)?13183:11400; continue;
}
case 11400: {
s.push(l[15]);
pc=11402; continue;
}
case 11402: {
o=s.pop(); s.push(o.c);
pc=11405; continue;
}
case 11405: {
s.push(1000);
pc=11408; continue;
}
case 11408: {
b=s.pop(); a=s.pop();
pc=(a>=b)?13183:11411; continue;
}
case 11411: {
s.push(0);
pc=11412; continue;
}
case 11412: {
l[2]=s.pop();
pc=11413; continue;
}
case 11413: {
pc=12327; continue;
}
case 11416: {
s.push(l[0]);
pc=11417; continue;
}
case 11417: {
o=s.pop(); s.push(o.co_w);
pc=11420; continue;
}
case 11420: {
s.push(l[2]);
pc=11421; continue;
}
case 11421: {
a=s.pop(); o=s.pop(); s.push(o[a]);
pc=11422; continue;
}
case 11422: {
o=s.pop(); s.push(o.ss);
pc=11425; continue;
}
case 11425: {
s.push(1);
pc=11426; continue;
}
case 11426: {
b=s.pop(); a=s.pop();
pc=(a>=b)?11432:11429; continue;
}
case 11429: {
pc=12324; continue;
}
case 11432: {
s.push(l[0]);
pc=11433; continue;
}
case 11433: {
o=s.pop(); s.push(o.co_w);
pc=11436; continue;
}
case 11436: {
s.push(l[2]);
pc=11437; continue;
}
case 11437: {
a=s.pop(); o=s.pop(); s.push(o[a]);
pc=11438; continue;
}
case 11438: {
l[16]=s.pop();
pc=11440; continue;
}
case 11440: {
s.push(l[16]);
pc=11442; continue;
}
case 11442: {
o=s.pop(); s.push(o.c);
pc=11445; continue;
}
case 11445: {
s.push(1100);
pc=11448; continue;
}
case 11448: {
b=s.pop(); a=s.pop();
pc=(a>=b)?11454:11451; continue;
}
case 11451: {
pc=12324; continue;
}
case 11454: {
s.push(0);
pc=11455; continue;
}
case 11455: {
l[18]=s.pop();
pc=11457; continue;
}
case 11457: {
s.push(l[16]);
pc=11459; continue;
}
case 11459: {
o=s.pop(); s.push(o.c);
pc=11462; continue;
}
case 11462: {
s.push(2620);
pc=11465; continue;
}
case 11465: {
b=s.pop(); a=s.pop();
pc=(a!==b)?11471:11468; continue;
}
case 11468: {
pc=11803; continue;
}
case 11471: {
s.push(l[15]);
pc=11473; continue;
}
case 11473: {
o=s.pop(); s.push(o.c);
pc=11476; continue;
}
case 11476: {
s.push(240);
pc=11479; continue;
}
case 11479: {
b=s.pop(); a=s.pop();
pc=(a===b)?11493:11482; continue;
}
case 11482: {
s.push(l[15]);
pc=11484; continue;
}
case 11484: {
o=s.pop(); s.push(o.c);
pc=11487; continue;
}
case 11487: {
s.push(350);
pc=11490; continue;
}
case 11490: {
b=s.pop(); a=s.pop();
pc=(a!==b)?11553:11493; continue;
}
case 11493: {
s.push(l[15]);
pc=11495; continue;
}
case 11495: {
o=s.pop(); s.push(o.x);
pc=11498; continue;
}
case 11498: {
s.push(l[16]);
pc=11500; continue;
}
case 11500: {
o=s.pop(); s.push(o.x);
pc=11503; continue;
}
case 11503: {
b=s.pop(); a=s.pop(); s.push((a - b) | 0);
pc=11504; continue;
}
case 11504: {
l[8]=s.pop();
pc=11506; continue;
}
case 11506: {
s.push(l[15]);
pc=11508; continue;
}
case 11508: {
o=s.pop(); s.push(o.y);
pc=11511; continue;
}
case 11511: {
s.push(l[16]);
pc=11513; continue;
}
case 11513: {
o=s.pop(); s.push(o.y);
pc=11516; continue;
}
case 11516: {
b=s.pop(); a=s.pop(); s.push((a - b) | 0);
pc=11517; continue;
}
case 11517: {
l[9]=s.pop();
pc=11519; continue;
}
case 11519: {
s.push(l[8]);
pc=11521; continue;
}
case 11521: {
s.push(l[8]);
pc=11523; continue;
}
case 11523: {
b=s.pop(); a=s.pop(); s.push(Math.imul(a,b));
pc=11524; continue;
}
case 11524: {
s.push(l[9]);
pc=11526; continue;
}
case 11526: {
s.push(l[9]);
pc=11528; continue;
}
case 11528: {
b=s.pop(); a=s.pop(); s.push(Math.imul(a,b));
pc=11529; continue;
}
case 11529: {
b=s.pop(); a=s.pop(); s.push((a + b) | 0);
pc=11530; continue;
}
case 11530: {
pc=11531; continue;
}
case 11531: {
v=s.splice(s.length-1,1);
s.push(Math.sqrt(v[0]));
pc=11534; continue;
}
case 11534: {
s.push(36);
pc=11536; continue;
}
case 11536: {
s.push(l[16]);
pc=11538; continue;
}
case 11538: {
o=s.pop(); s.push(o.ahs);
pc=11541; continue;
}
case 11541: {
b=s.pop(); a=s.pop(); s.push((a + b) | 0);
pc=11542; continue;
}
case 11542: {
pc=11543; continue;
}
case 11543: {
b=s.pop(); a=s.pop(); s.push(a>b?1:a<b?-1:a===b?0:1);
pc=11544; continue;
}
case 11544: {
a=s.pop();
pc=(a>=0)?11803:11547; continue;
}
case 11547: {
s.push(1);
pc=11548; continue;
}
case 11548: {
l[18]=s.pop();
pc=11550; continue;
}
case 11550: {
pc=11803; continue;
}
case 11553: {
s.push(l[15]);
pc=11555; continue;
}
case 11555: {
o=s.pop(); s.push(o.zokusei);
pc=11558; continue;
}
case 11558: {
s.push(12);
pc=11560; continue;
}
case 11560: {
b=s.pop(); a=s.pop();
pc=(a!==b)?11572:11563; continue;
}
case 11563: {
s.push(l[16]);
pc=11565; continue;
}
case 11565: {
o=s.pop(); s.push(o.zokusei);
pc=11568; continue;
}
case 11568: {
s.push(1);
pc=11569; continue;
}
case 11569: {
b=s.pop(); a=s.pop();
pc=(a===b)?11599:11572; continue;
}
case 11572: {
s.push(l[16]);
pc=11574; continue;
}
case 11574: {
o=s.pop(); s.push(o.zokusei);
pc=11577; continue;
}
case 11577: {
s.push(12);
pc=11579; continue;
}
case 11579: {
b=s.pop(); a=s.pop();
pc=(a!==b)?11750:11582; continue;
}
case 11582: {
s.push(l[0]);
pc=11583; continue;
}
case 11583: {
o=s.pop(); s.push(o.aisyou);
pc=11586; continue;
}
case 11586: {
s.push(l[15]);
pc=11588; continue;
}
case 11588: {
o=s.pop(); s.push(o.zokusei);
pc=11591; continue;
}
case 11591: {
a=s.pop(); o=s.pop(); s.push(o[a]);
pc=11592; continue;
}
case 11592: {
s.push(12);
pc=11594; continue;
}
case 11594: {
a=s.pop(); o=s.pop(); s.push(o[a]);
pc=11595; continue;
}
case 11595: {
s.push(3);
pc=11596; continue;
}
case 11596: {
b=s.pop(); a=s.pop();
pc=(a!==b)?11750:11599; continue;
}
case 11599: {
s.push(l[15]);
pc=11601; continue;
}
case 11601: {
o=s.pop(); s.push(o.x);
pc=11604; continue;
}
case 11604: {
s.push(l[16]);
pc=11606; continue;
}
case 11606: {
o=s.pop(); s.push(o.x);
pc=11609; continue;
}
case 11609: {
b=s.pop(); a=s.pop(); s.push((a - b) | 0);
pc=11610; continue;
}
case 11610: {
v=s.splice(s.length-1,1);
s.push(Math.abs(v[0]));
pc=11613; continue;
}
case 11613: {
s.push(26);
pc=11615; continue;
}
case 11615: {
s.push(l[16]);
pc=11617; continue;
}
case 11617: {
o=s.pop(); s.push(o.ahs);
pc=11620; continue;
}
case 11620: {
b=s.pop(); a=s.pop(); s.push((a + b) | 0);
pc=11621; continue;
}
case 11621: {
b=s.pop(); a=s.pop();
pc=(a>=b)?11803:11624; continue;
}
case 11624: {
s.push(l[15]);
pc=11626; continue;
}
case 11626: {
o=s.pop(); s.push(o.y);
pc=11629; continue;
}
case 11629: {
s.push(l[16]);
pc=11631; continue;
}
case 11631: {
o=s.pop(); s.push(o.y);
pc=11634; continue;
}
case 11634: {
b=s.pop(); a=s.pop(); s.push((a - b) | 0);
pc=11635; continue;
}
case 11635: {
v=s.splice(s.length-1,1);
s.push(Math.abs(v[0]));
pc=11638; continue;
}
case 11638: {
s.push(26);
pc=11640; continue;
}
case 11640: {
s.push(l[16]);
pc=11642; continue;
}
case 11642: {
o=s.pop(); s.push(o.ahs);
pc=11645; continue;
}
case 11645: {
b=s.pop(); a=s.pop(); s.push((a + b) | 0);
pc=11646; continue;
}
case 11646: {
b=s.pop(); a=s.pop();
pc=(a>=b)?11803:11649; continue;
}
case 11649: {
s.push(l[0]);
pc=11650; continue;
}
case 11650: {
o=s.pop(); s.push(o.gym_f);
pc=11653; continue;
}
case 11653: {
a=s.pop();
pc=(a!=0)?11803:11656; continue;
}
case 11656: {
s.push(l[0]);
pc=11657; continue;
}
case 11657: {
o=s.pop(); s.push(o.km);
pc=11660; continue;
}
case 11660: {
s.push(10);
pc=11662; continue;
}
case 11662: {
s.push(240);
pc=11665; continue;
}
case 11665: {
s.push(56);
pc=11667; continue;
}
case 11667: {
s.push(152);
pc=11670; continue;
}
case 11670: {
s.push(l[0]);
pc=11671; continue;
}
case 11671: {
o=s.pop(); s.push(o.co_p);
pc=11674; continue;
}
case 11674: {
s.push(l[15]);
pc=11676; continue;
}
case 11676: {
o=s.pop(); s.push(o.mid);
pc=11679; continue;
}
case 11679: {
a=s.pop(); o=s.pop(); s.push(o[a]);
pc=11680; continue;
}
case 11680: {
o=s.pop(); s.push(o.name);
pc=11683; continue;
}
case 11683: {
v=s.splice(s.length-5,5);
o=s.pop();
o.openTimeMessage$5(v[0],v[1],v[2],v[3],v[4]);
pc=11686; continue;
}
case 11686: {
s.push(l[0]);
pc=11687; continue;
}
case 11687: {
o=s.pop(); s.push(o.co_p);
pc=11690; continue;
}
case 11690: {
s.push(l[15]);
pc=11692; continue;
}
case 11692: {
o=s.pop(); s.push(o.mid);
pc=11695; continue;
}
case 11695: {
a=s.pop(); o=s.pop(); s.push(o[a]);
pc=11696; continue;
}
case 11696: {
o=s.pop(); s.push(o.seibetu);
pc=11699; continue;
}
case 11699: {
s.push(1);
pc=11700; continue;
}
case 11700: {
b=s.pop(); a=s.pop();
pc=(a!==b)?11718:11703; continue;
}
case 11703: {
s.push(l[0]);
pc=11704; continue;
}
case 11704: {
o=s.pop(); s.push(o.km);
pc=11707; continue;
}
case 11707: {
s.push(10);
pc=11709; continue;
}
case 11709: {
s.push("効果、なしです。");
pc=11712; continue;
}
case 11712: {
v=s.splice(s.length-2,2);
o=s.pop();
o.addItem$2(v[0],v[1]);
pc=11715; continue;
}
case 11715: {
pc=11730; continue;
}
case 11718: {
s.push(l[0]);
pc=11719; continue;
}
case 11719: {
o=s.pop(); s.push(o.km);
pc=11722; continue;
}
case 11722: {
s.push(10);
pc=11724; continue;
}
case 11724: {
s.push("効果が、ないよ。");
pc=11727; continue;
}
case 11727: {
v=s.splice(s.length-2,2);
o=s.pop();
o.addItem$2(v[0],v[1]);
pc=11730; continue;
}
case 11730: {
s.push(l[0]);
pc=11731; continue;
}
case 11731: {
o=s.pop(); s.push(o.km);
pc=11734; continue;
}
case 11734: {
o=s.pop(); s.push(o.kmo);
pc=11737; continue;
}
case 11737: {
s.push(10);
pc=11739; continue;
}
case 11739: {
a=s.pop(); o=s.pop(); s.push(o[a]);
pc=11740; continue;
}
case 11740: {
o=s.pop(); s.push(o.item_int);
pc=11743; continue;
}
case 11743: {
s.push(0);
pc=11744; continue;
}
case 11744: {
s.push(32);
pc=11746; continue;
}
case 11746: {
v=s.pop(); a=s.pop(); o=s.pop(); o[a]=v;
pc=11747; continue;
}
case 11747: {
pc=11803; continue;
}
case 11750: {
s.push(l[15]);
pc=11752; continue;
}
case 11752: {
o=s.pop(); s.push(o.x);
pc=11755; continue;
}
case 11755: {
s.push(l[16]);
pc=11757; continue;
}
case 11757: {
o=s.pop(); s.push(o.x);
pc=11760; continue;
}
case 11760: {
b=s.pop(); a=s.pop(); s.push((a - b) | 0);
pc=11761; continue;
}
case 11761: {
v=s.splice(s.length-1,1);
s.push(Math.abs(v[0]));
pc=11764; continue;
}
case 11764: {
s.push(26);
pc=11766; continue;
}
case 11766: {
s.push(l[16]);
pc=11768; continue;
}
case 11768: {
o=s.pop(); s.push(o.ahs);
pc=11771; continue;
}
case 11771: {
b=s.pop(); a=s.pop(); s.push((a + b) | 0);
pc=11772; continue;
}
case 11772: {
b=s.pop(); a=s.pop();
pc=(a>=b)?11803:11775; continue;
}
case 11775: {
s.push(l[15]);
pc=11777; continue;
}
case 11777: {
o=s.pop(); s.push(o.y);
pc=11780; continue;
}
case 11780: {
s.push(l[16]);
pc=11782; continue;
}
case 11782: {
o=s.pop(); s.push(o.y);
pc=11785; continue;
}
case 11785: {
b=s.pop(); a=s.pop(); s.push((a - b) | 0);
pc=11786; continue;
}
case 11786: {
v=s.splice(s.length-1,1);
s.push(Math.abs(v[0]));
pc=11789; continue;
}
case 11789: {
s.push(26);
pc=11791; continue;
}
case 11791: {
s.push(l[16]);
pc=11793; continue;
}
case 11793: {
o=s.pop(); s.push(o.ahs);
pc=11796; continue;
}
case 11796: {
b=s.pop(); a=s.pop(); s.push((a + b) | 0);
pc=11797; continue;
}
case 11797: {
b=s.pop(); a=s.pop();
pc=(a>=b)?11803:11800; continue;
}
case 11800: {
s.push(1);
pc=11801; continue;
}
case 11801: {
l[18]=s.pop();
pc=11803; continue;
}
case 11803: {
s.push(l[18]);
pc=11805; continue;
}
case 11805: {
s.push(1);
pc=11806; continue;
}
case 11806: {
b=s.pop(); a=s.pop();
pc=(a!==b)?12324:11809; continue;
}
case 11809: {
s.push(l[15]);
pc=11811; continue;
}
case 11811: {
o=s.pop(); s.push(o.c);
pc=11814; continue;
}
case 11814: {
s.push(210);
pc=11817; continue;
}
case 11817: {
b=s.pop(); a=s.pop();
pc=(a===b)?11831:11820; continue;
}
case 11820: {
s.push(l[15]);
pc=11822; continue;
}
case 11822: {
o=s.pop(); s.push(o.c);
pc=11825; continue;
}
case 11825: {
s.push(330);
pc=11828; continue;
}
case 11828: {
b=s.pop(); a=s.pop();
pc=(a!==b)?11867:11831; continue;
}
case 11831: {
s.push(l[16]);
pc=11833; continue;
}
case 11833: {
s.push(l[15]);
pc=11835; continue;
}
case 11835: {
o=s.pop(); s.push(o.ap);
pc=11838; continue;
}
case 11838: {
v=s.splice(s.length-1,1);
o=s.pop();
o.addHP$1(v[0]);
pc=11841; continue;
}
case 11841: {
s.push(l[16]);
pc=11843; continue;
}
case 11843: {
s.push(10);
pc=11845; continue;
}
case 11845: {
v=s.pop(); o=s.pop(); o.fc=v;
pc=11848; continue;
}
case 11848: {
s.push(l[15]);
pc=11850; continue;
}
case 11850: {
s.push(0);
pc=11851; continue;
}
case 11851: {
v=s.pop(); o=s.pop(); o.c=v;
pc=11854; continue;
}
case 11854: {
s.push(l[0]);
pc=11855; continue;
}
case 11855: {
s.push(s[s.length-1]);
pc=11856; continue;
}
case 11856: {
o=s.pop(); s.push(o.m_kazu);
pc=11859; continue;
}
case 11859: {
s.push(1);
pc=11860; continue;
}
case 11860: {
b=s.pop(); a=s.pop(); s.push((a - b) | 0);
pc=11861; continue;
}
case 11861: {
v=s.pop(); o=s.pop(); o.m_kazu=v;
pc=11864; continue;
}
case 11864: {
pc=13183; continue;
}
case 11867: {
s.push(l[15]);
pc=11869; continue;
}
case 11869: {
o=s.pop(); s.push(o.c);
pc=11872; continue;
}
case 11872: {
s.push(260);
pc=11875; continue;
}
case 11875: {
b=s.pop(); a=s.pop();
pc=(a!==b)?11934:11878; continue;
}
case 11878: {
s.push(l[2]);
pc=11879; continue;
}
case 11879: {
s.push(l[15]);
pc=11881; continue;
}
case 11881: {
o=s.pop(); s.push(o.mid);
pc=11884; continue;
}
case 11884: {
b=s.pop(); a=s.pop();
pc=(a!==b)?11898:11887; continue;
}
case 11887: {
s.push(l[15]);
pc=11889; continue;
}
case 11889: {
o=s.pop(); s.push(o.vy);
pc=11892; continue;
}
case 11892: {
a=s.pop();
pc=(a>=0)?11898:11895; continue;
}
case 11895: {
pc=12324; continue;
}
case 11898: {
s.push(l[16]);
pc=11900; continue;
}
case 11900: {
s.push(l[15]);
pc=11902; continue;
}
case 11902: {
o=s.pop(); s.push(o.ap);
pc=11905; continue;
}
case 11905: {
v=s.splice(s.length-1,1);
o=s.pop();
o.addHP$1(v[0]);
pc=11908; continue;
}
case 11908: {
s.push(l[16]);
pc=11910; continue;
}
case 11910: {
s.push(10);
pc=11912; continue;
}
case 11912: {
v=s.pop(); o=s.pop(); o.fc=v;
pc=11915; continue;
}
case 11915: {
s.push(l[15]);
pc=11917; continue;
}
case 11917: {
s.push(0);
pc=11918; continue;
}
case 11918: {
v=s.pop(); o=s.pop(); o.c=v;
pc=11921; continue;
}
case 11921: {
s.push(l[0]);
pc=11922; continue;
}
case 11922: {
s.push(s[s.length-1]);
pc=11923; continue;
}
case 11923: {
o=s.pop(); s.push(o.m_kazu);
pc=11926; continue;
}
case 11926: {
s.push(1);
pc=11927; continue;
}
case 11927: {
b=s.pop(); a=s.pop(); s.push((a - b) | 0);
pc=11928; continue;
}
case 11928: {
v=s.pop(); o=s.pop(); o.m_kazu=v;
pc=11931; continue;
}
case 11931: {
pc=13183; continue;
}
case 11934: {
s.push(l[15]);
pc=11936; continue;
}
case 11936: {
o=s.pop(); s.push(o.c);
pc=11939; continue;
}
case 11939: {
s.push(280);
pc=11942; continue;
}
case 11942: {
b=s.pop(); a=s.pop();
pc=(a!==b)?11998:11945; continue;
}
case 11945: {
s.push(l[16]);
pc=11947; continue;
}
case 11947: {
s.push(10);
pc=11949; continue;
}
case 11949: {
v=s.pop(); o=s.pop(); o.fc=v;
pc=11952; continue;
}
case 11952: {
s.push(l[16]);
pc=11954; continue;
}
case 11954: {
o=s.pop(); s.push(o.doku_c);
pc=11957; continue;
}
case 11957: {
s.push(l[15]);
pc=11959; continue;
}
case 11959: {
o=s.pop(); s.push(o.ap);
pc=11962; continue;
}
case 11962: {
s.push(2);
pc=11963; continue;
}
case 11963: {
b=s.pop(); a=s.pop(); s.push(Math.imul(a,b));
pc=11964; continue;
}
case 11964: {
b=s.pop(); a=s.pop();
pc=(a>=b)?11979:11967; continue;
}
case 11967: {
s.push(l[16]);
pc=11969; continue;
}
case 11969: {
s.push(l[15]);
pc=11971; continue;
}
case 11971: {
o=s.pop(); s.push(o.ap);
pc=11974; continue;
}
case 11974: {
s.push(2);
pc=11975; continue;
}
case 11975: {
b=s.pop(); a=s.pop(); s.push(Math.imul(a,b));
pc=11976; continue;
}
case 11976: {
v=s.pop(); o=s.pop(); o.doku_c=v;
pc=11979; continue;
}
case 11979: {
s.push(l[15]);
pc=11981; continue;
}
case 11981: {
s.push(0);
pc=11982; continue;
}
case 11982: {
v=s.pop(); o=s.pop(); o.c=v;
pc=11985; continue;
}
case 11985: {
s.push(l[0]);
pc=11986; continue;
}
case 11986: {
s.push(s[s.length-1]);
pc=11987; continue;
}
case 11987: {
o=s.pop(); s.push(o.m_kazu);
pc=11990; continue;
}
case 11990: {
s.push(1);
pc=11991; continue;
}
case 11991: {
b=s.pop(); a=s.pop(); s.push((a - b) | 0);
pc=11992; continue;
}
case 11992: {
v=s.pop(); o=s.pop(); o.m_kazu=v;
pc=11995; continue;
}
case 11995: {
pc=13183; continue;
}
case 11998: {
s.push(l[15]);
pc=12000; continue;
}
case 12000: {
o=s.pop(); s.push(o.c);
pc=12003; continue;
}
case 12003: {
s.push(360);
pc=12006; continue;
}
case 12006: {
b=s.pop(); a=s.pop();
pc=(a!==b)?12099:12009; continue;
}
case 12009: {
s.push(l[16]);
pc=12011; continue;
}
case 12011: {
s.push(10);
pc=12013; continue;
}
case 12013: {
v=s.pop(); o=s.pop(); o.fc=v;
pc=12016; continue;
}
case 12016: {
s.push(l[16]);
pc=12018; continue;
}
case 12018: {
s.push(l[15]);
pc=12020; continue;
}
case 12020: {
o=s.pop(); s.push(o.ap);
pc=12023; continue;
}
case 12023: {
v=s.splice(s.length-1,1);
o=s.pop();
o.delPP$1(v[0]);
pc=12026; continue;
}
case 12026: {
s.push(l[0]);
pc=12027; continue;
}
case 12027: {
o=s.pop(); s.push(o.gym_f);
pc=12030; continue;
}
case 12030: {
a=s.pop();
pc=(a==0)?12041:12033; continue;
}
case 12033: {
s.push(l[0]);
pc=12034; continue;
}
case 12034: {
o=s.pop(); s.push(o.race_f);
pc=12037; continue;
}
case 12037: {
s.push(1);
pc=12038; continue;
}
case 12038: {
b=s.pop(); a=s.pop();
pc=(a!==b)?12080:12041; continue;
}
case 12041: {
s.push(l[16]);
pc=12043; continue;
}
case 12043: {
o=s.pop(); s.push(o.pp);
pc=12046; continue;
}
case 12046: {
a=s.pop();
pc=(a>0)?12080:12049; continue;
}
case 12049: {
s.push(l[16]);
pc=12051; continue;
}
case 12051: {
s.push(1000);
pc=12054; continue;
}
case 12054: {
v=s.pop(); o=s.pop(); o.c=v;
pc=12057; continue;
}
case 12057: {
s.push(l[16]);
pc=12059; continue;
}
case 12059: {
s.push(55);
pc=12061; continue;
}
case 12061: {
v=s.pop(); o=s.pop(); o.c1=v;
pc=12064; continue;
}
case 12064: {
s.push(l[16]);
pc=12066; continue;
}
case 12066: {
s.push(l[16]);
pc=12068; continue;
}
case 12068: {
o=s.pop(); s.push(o.pt);
pc=12071; continue;
}
case 12071: {
v=s.pop(); o=s.pop(); o.c2=v;
pc=12074; continue;
}
case 12074: {
s.push(l[16]);
pc=12076; continue;
}
case 12076: {
s.push(0);
pc=12077; continue;
}
case 12077: {
v=s.pop(); o=s.pop(); o.fc=v;
pc=12080; continue;
}
case 12080: {
s.push(l[15]);
pc=12082; continue;
}
case 12082: {
s.push(0);
pc=12083; continue;
}
case 12083: {
v=s.pop(); o=s.pop(); o.c=v;
pc=12086; continue;
}
case 12086: {
s.push(l[0]);
pc=12087; continue;
}
case 12087: {
s.push(s[s.length-1]);
pc=12088; continue;
}
case 12088: {
o=s.pop(); s.push(o.m_kazu);
pc=12091; continue;
}
case 12091: {
s.push(1);
pc=12092; continue;
}
case 12092: {
b=s.pop(); a=s.pop(); s.push((a - b) | 0);
pc=12093; continue;
}
case 12093: {
v=s.pop(); o=s.pop(); o.m_kazu=v;
pc=12096; continue;
}
case 12096: {
pc=13183; continue;
}
case 12099: {
s.push(l[15]);
pc=12101; continue;
}
case 12101: {
o=s.pop(); s.push(o.ap);
pc=12104; continue;
}
case 12104: {
s.push(l[16]);
pc=12106; continue;
}
case 12106: {
o=s.pop(); s.push(o.dp);
pc=12109; continue;
}
case 12109: {
b=s.pop(); a=s.pop(); s.push((a - b) | 0);
pc=12110; continue;
}
case 12110: {
l[5]=s.pop();
pc=12112; continue;
}
case 12112: {
s.push(l[0]);
pc=12113; continue;
}
case 12113: {
o=s.pop(); s.push(o.aisyou);
pc=12116; continue;
}
case 12116: {
s.push(l[15]);
pc=12118; continue;
}
case 12118: {
o=s.pop(); s.push(o.zokusei);
pc=12121; continue;
}
case 12121: {
a=s.pop(); o=s.pop(); s.push(o[a]);
pc=12122; continue;
}
case 12122: {
s.push(l[16]);
pc=12124; continue;
}
case 12124: {
o=s.pop(); s.push(o.zokusei);
pc=12127; continue;
}
case 12127: {
a=s.pop(); o=s.pop(); s.push(o[a]);
pc=12128; continue;
}
case 12128: {
l[6]=s.pop();
pc=12130; continue;
}
case 12130: {
s.push(l[6]);
pc=12132; continue;
}
case 12132: {
s.push(3);
pc=12133; continue;
}
case 12133: {
b=s.pop(); a=s.pop();
pc=(a!==b)?12253:12136; continue;
}
case 12136: {
s.push(l[15]);
pc=12138; continue;
}
case 12138: {
s.push(0);
pc=12139; continue;
}
case 12139: {
v=s.pop(); o=s.pop(); o.c=v;
pc=12142; continue;
}
case 12142: {
s.push(l[0]);
pc=12143; continue;
}
case 12143: {
s.push(s[s.length-1]);
pc=12144; continue;
}
case 12144: {
o=s.pop(); s.push(o.m_kazu);
pc=12147; continue;
}
case 12147: {
s.push(1);
pc=12148; continue;
}
case 12148: {
b=s.pop(); a=s.pop(); s.push((a - b) | 0);
pc=12149; continue;
}
case 12149: {
v=s.pop(); o=s.pop(); o.m_kazu=v;
pc=12152; continue;
}
case 12152: {
s.push(l[0]);
pc=12153; continue;
}
case 12153: {
o=s.pop(); s.push(o.gym_f);
pc=12156; continue;
}
case 12156: {
a=s.pop();
pc=(a!=0)?13183:12159; continue;
}
case 12159: {
s.push(l[0]);
pc=12160; continue;
}
case 12160: {
o=s.pop(); s.push(o.km);
pc=12163; continue;
}
case 12163: {
s.push(10);
pc=12165; continue;
}
case 12165: {
s.push(240);
pc=12168; continue;
}
case 12168: {
s.push(56);
pc=12170; continue;
}
case 12170: {
s.push(152);
pc=12173; continue;
}
case 12173: {
s.push(l[0]);
pc=12174; continue;
}
case 12174: {
o=s.pop(); s.push(o.co_p);
pc=12177; continue;
}
case 12177: {
s.push(l[15]);
pc=12179; continue;
}
case 12179: {
o=s.pop(); s.push(o.mid);
pc=12182; continue;
}
case 12182: {
a=s.pop(); o=s.pop(); s.push(o[a]);
pc=12183; continue;
}
case 12183: {
o=s.pop(); s.push(o.name);
pc=12186; continue;
}
case 12186: {
v=s.splice(s.length-5,5);
o=s.pop();
o.openTimeMessage$5(v[0],v[1],v[2],v[3],v[4]);
pc=12189; continue;
}
case 12189: {
s.push(l[0]);
pc=12190; continue;
}
case 12190: {
o=s.pop(); s.push(o.co_p);
pc=12193; continue;
}
case 12193: {
s.push(l[15]);
pc=12195; continue;
}
case 12195: {
o=s.pop(); s.push(o.mid);
pc=12198; continue;
}
case 12198: {
a=s.pop(); o=s.pop(); s.push(o[a]);
pc=12199; continue;
}
case 12199: {
o=s.pop(); s.push(o.seibetu);
pc=12202; continue;
}
case 12202: {
s.push(1);
pc=12203; continue;
}
case 12203: {
b=s.pop(); a=s.pop();
pc=(a!==b)?12221:12206; continue;
}
case 12206: {
s.push(l[0]);
pc=12207; continue;
}
case 12207: {
o=s.pop(); s.push(o.km);
pc=12210; continue;
}
case 12210: {
s.push(10);
pc=12212; continue;
}
case 12212: {
s.push("効果、なしです。");
pc=12215; continue;
}
case 12215: {
v=s.splice(s.length-2,2);
o=s.pop();
o.addItem$2(v[0],v[1]);
pc=12218; continue;
}
case 12218: {
pc=12233; continue;
}
case 12221: {
s.push(l[0]);
pc=12222; continue;
}
case 12222: {
o=s.pop(); s.push(o.km);
pc=12225; continue;
}
case 12225: {
s.push(10);
pc=12227; continue;
}
case 12227: {
s.push("効果が、ないよ。");
pc=12230; continue;
}
case 12230: {
v=s.splice(s.length-2,2);
o=s.pop();
o.addItem$2(v[0],v[1]);
pc=12233; continue;
}
case 12233: {
s.push(l[0]);
pc=12234; continue;
}
case 12234: {
o=s.pop(); s.push(o.km);
pc=12237; continue;
}
case 12237: {
o=s.pop(); s.push(o.kmo);
pc=12240; continue;
}
case 12240: {
s.push(10);
pc=12242; continue;
}
case 12242: {
a=s.pop(); o=s.pop(); s.push(o[a]);
pc=12243; continue;
}
case 12243: {
o=s.pop(); s.push(o.item_int);
pc=12246; continue;
}
case 12246: {
s.push(0);
pc=12247; continue;
}
case 12247: {
s.push(32);
pc=12249; continue;
}
case 12249: {
v=s.pop(); a=s.pop(); o=s.pop(); o[a]=v;
pc=12250; continue;
}
case 12250: {
pc=13183; continue;
}
case 12253: {
s.push(l[0]);
pc=12254; continue;
}
case 12254: {
s.push(l[6]);
pc=12256; continue;
}
case 12256: {
s.push(l[5]);
pc=12258; continue;
}
case 12258: {
s.push(l[0]);
pc=12259; continue;
}
case 12259: {
o=s.pop(); s.push(o.co_p);
pc=12262; continue;
}
case 12262: {
s.push(l[15]);
pc=12264; continue;
}
case 12264: {
o=s.pop(); s.push(o.mid);
pc=12267; continue;
}
case 12267: {
a=s.pop(); o=s.pop(); s.push(o[a]);
pc=12268; continue;
}
case 12268: {
o=s.pop(); s.push(o.name);
pc=12271; continue;
}
case 12271: {
s.push(l[0]);
pc=12272; continue;
}
case 12272: {
o=s.pop(); s.push(o.co_p);
pc=12275; continue;
}
case 12275: {
s.push(l[15]);
pc=12277; continue;
}
case 12277: {
o=s.pop(); s.push(o.mid);
pc=12280; continue;
}
case 12280: {
a=s.pop(); o=s.pop(); s.push(o[a]);
pc=12281; continue;
}
case 12281: {
o=s.pop(); s.push(o.seibetu);
pc=12284; continue;
}
case 12284: {
v=s.splice(s.length-4,4);
o=s.pop();
s.push(o.aisyoukouka$4(v[0],v[1],v[2],v[3]));
pc=12287; continue;
}
case 12287: {
l[5]=s.pop();
pc=12289; continue;
}
case 12289: {
s.push(l[5]);
pc=12291; continue;
}
case 12291: {
a=s.pop();
pc=(a>0)?12297:12294; continue;
}
case 12294: {
s.push(1);
pc=12295; continue;
}
case 12295: {
l[5]=s.pop();
pc=12297; continue;
}
case 12297: {
s.push(l[0]);
pc=12298; continue;
}
case 12298: {
s.push(l[16]);
pc=12300; continue;
}
case 12300: {
s.push(l[5]);
pc=12302; continue;
}
case 12302: {
v=s.splice(s.length-2,2);
o=s.pop();
o.wDmage$2(v[0],v[1]);
pc=12305; continue;
}
case 12305: {
s.push(l[15]);
pc=12307; continue;
}
case 12307: {
s.push(0);
pc=12308; continue;
}
case 12308: {
v=s.pop(); o=s.pop(); o.c=v;
pc=12311; continue;
}
case 12311: {
s.push(l[0]);
pc=12312; continue;
}
case 12312: {
s.push(s[s.length-1]);
pc=12313; continue;
}
case 12313: {
o=s.pop(); s.push(o.m_kazu);
pc=12316; continue;
}
case 12316: {
s.push(1);
pc=12317; continue;
}
case 12317: {
b=s.pop(); a=s.pop(); s.push((a - b) | 0);
pc=12318; continue;
}
case 12318: {
v=s.pop(); o=s.pop(); o.m_kazu=v;
pc=12321; continue;
}
case 12321: {
pc=13183; continue;
}
case 12324: {
l[2]=(l[2]+1)|0;
pc=12327; continue;
}
case 12327: {
s.push(l[2]);
pc=12328; continue;
}
case 12328: {
s.push(l[0]);
pc=12329; continue;
}
case 12329: {
o=s.pop(); s.push(o.w_kazu);
pc=12332; continue;
}
case 12332: {
b=s.pop(); a=s.pop();
pc=(a<=b)?11416:12335; continue;
}
case 12335: {
pc=13183; continue;
}
case 12338: {
s.push(l[15]);
pc=12340; continue;
}
case 12340: {
o=s.pop(); s.push(o.team);
pc=12343; continue;
}
case 12343: {
s.push(1);
pc=12344; continue;
}
case 12344: {
b=s.pop(); a=s.pop();
pc=(a!==b)?13183:12347; continue;
}
case 12347: {
s.push(l[15]);
pc=12349; continue;
}
case 12349: {
o=s.pop(); s.push(o.c);
pc=12352; continue;
}
case 12352: {
s.push(100);
pc=12354; continue;
}
case 12354: {
b=s.pop(); a=s.pop();
pc=(a<b)?13183:12357; continue;
}
case 12357: {
s.push(l[15]);
pc=12359; continue;
}
case 12359: {
o=s.pop(); s.push(o.c);
pc=12362; continue;
}
case 12362: {
s.push(1000);
pc=12365; continue;
}
case 12365: {
b=s.pop(); a=s.pop();
pc=(a>=b)?13183:12368; continue;
}
case 12368: {
s.push(0);
pc=12369; continue;
}
case 12369: {
l[2]=s.pop();
pc=12370; continue;
}
case 12370: {
pc=13177; continue;
}
case 12373: {
s.push(l[0]);
pc=12374; continue;
}
case 12374: {
o=s.pop(); s.push(o.co_p);
pc=12377; continue;
}
case 12377: {
s.push(l[2]);
pc=12378; continue;
}
case 12378: {
a=s.pop(); o=s.pop(); s.push(o[a]);
pc=12379; continue;
}
case 12379: {
l[17]=s.pop();
pc=12381; continue;
}
case 12381: {
s.push(l[17]);
pc=12383; continue;
}
case 12383: {
o=s.pop(); s.push(o.c);
pc=12386; continue;
}
case 12386: {
s.push(1000);
pc=12389; continue;
}
case 12389: {
b=s.pop(); a=s.pop();
pc=(a>=b)?12395:12392; continue;
}
case 12392: {
pc=13174; continue;
}
case 12395: {
s.push(l[2]);
pc=12396; continue;
}
case 12396: {
s.push(6);
pc=12398; continue;
}
case 12398: {
b=s.pop(); a=s.pop();
pc=(a!==b)?12415:12401; continue;
}
case 12401: {
s.push(l[17]);
pc=12403; continue;
}
case 12403: {
o=s.pop(); s.push(o.c);
pc=12406; continue;
}
case 12406: {
s.push(1000);
pc=12409; continue;
}
case 12409: {
b=s.pop(); a=s.pop();
pc=(a===b)?12415:12412; continue;
}
case 12412: {
pc=13174; continue;
}
case 12415: {
s.push(0);
pc=12416; continue;
}
case 12416: {
l[18]=s.pop();
pc=12418; continue;
}
case 12418: {
s.push(l[17]);
pc=12420; continue;
}
case 12420: {
o=s.pop(); s.push(o.c);
pc=12423; continue;
}
case 12423: {
s.push(2620);
pc=12426; continue;
}
case 12426: {
b=s.pop(); a=s.pop();
pc=(a!==b)?12432:12429; continue;
}
case 12429: {
pc=12601; continue;
}
case 12432: {
s.push(l[15]);
pc=12434; continue;
}
case 12434: {
o=s.pop(); s.push(o.c);
pc=12437; continue;
}
case 12437: {
s.push(240);
pc=12440; continue;
}
case 12440: {
b=s.pop(); a=s.pop();
pc=(a===b)?12454:12443; continue;
}
case 12443: {
s.push(l[15]);
pc=12445; continue;
}
case 12445: {
o=s.pop(); s.push(o.c);
pc=12448; continue;
}
case 12448: {
s.push(350);
pc=12451; continue;
}
case 12451: {
b=s.pop(); a=s.pop();
pc=(a!==b)?12508:12454; continue;
}
case 12454: {
s.push(l[15]);
pc=12456; continue;
}
case 12456: {
o=s.pop(); s.push(o.x);
pc=12459; continue;
}
case 12459: {
s.push(l[17]);
pc=12461; continue;
}
case 12461: {
o=s.pop(); s.push(o.x);
pc=12464; continue;
}
case 12464: {
b=s.pop(); a=s.pop(); s.push((a - b) | 0);
pc=12465; continue;
}
case 12465: {
l[8]=s.pop();
pc=12467; continue;
}
case 12467: {
s.push(l[15]);
pc=12469; continue;
}
case 12469: {
o=s.pop(); s.push(o.y);
pc=12472; continue;
}
case 12472: {
s.push(l[17]);
pc=12474; continue;
}
case 12474: {
o=s.pop(); s.push(o.y);
pc=12477; continue;
}
case 12477: {
b=s.pop(); a=s.pop(); s.push((a - b) | 0);
pc=12478; continue;
}
case 12478: {
l[9]=s.pop();
pc=12480; continue;
}
case 12480: {
s.push(l[8]);
pc=12482; continue;
}
case 12482: {
s.push(l[8]);
pc=12484; continue;
}
case 12484: {
b=s.pop(); a=s.pop(); s.push(Math.imul(a,b));
pc=12485; continue;
}
case 12485: {
s.push(l[9]);
pc=12487; continue;
}
case 12487: {
s.push(l[9]);
pc=12489; continue;
}
case 12489: {
b=s.pop(); a=s.pop(); s.push(Math.imul(a,b));
pc=12490; continue;
}
case 12490: {
b=s.pop(); a=s.pop(); s.push((a + b) | 0);
pc=12491; continue;
}
case 12491: {
pc=12492; continue;
}
case 12492: {
v=s.splice(s.length-1,1);
s.push(Math.sqrt(v[0]));
pc=12495; continue;
}
case 12495: {
s.push(36.0);
pc=12498; continue;
}
case 12498: {
b=s.pop(); a=s.pop(); s.push(a>b?1:a<b?-1:a===b?0:1);
pc=12499; continue;
}
case 12499: {
a=s.pop();
pc=(a>=0)?12601:12502; continue;
}
case 12502: {
s.push(1);
pc=12503; continue;
}
case 12503: {
l[18]=s.pop();
pc=12505; continue;
}
case 12505: {
pc=12601; continue;
}
case 12508: {
s.push(l[15]);
pc=12510; continue;
}
case 12510: {
o=s.pop(); s.push(o.zokusei);
pc=12513; continue;
}
case 12513: {
s.push(12);
pc=12515; continue;
}
case 12515: {
b=s.pop(); a=s.pop();
pc=(a!==b)?12530:12518; continue;
}
case 12518: {
s.push(l[17]);
pc=12520; continue;
}
case 12520: {
o=s.pop(); s.push(o.zokusei);
pc=12523; continue;
}
case 12523: {
s.push(1);
pc=12524; continue;
}
case 12524: {
b=s.pop(); a=s.pop();
pc=(a!==b)?12530:12527; continue;
}
case 12527: {
pc=12601; continue;
}
case 12530: {
s.push(l[17]);
pc=12532; continue;
}
case 12532: {
o=s.pop(); s.push(o.zokusei);
pc=12535; continue;
}
case 12535: {
s.push(12);
pc=12537; continue;
}
case 12537: {
b=s.pop(); a=s.pop();
pc=(a!==b)?12560:12540; continue;
}
case 12540: {
s.push(l[0]);
pc=12541; continue;
}
case 12541: {
o=s.pop(); s.push(o.aisyou);
pc=12544; continue;
}
case 12544: {
s.push(l[15]);
pc=12546; continue;
}
case 12546: {
o=s.pop(); s.push(o.zokusei);
pc=12549; continue;
}
case 12549: {
a=s.pop(); o=s.pop(); s.push(o[a]);
pc=12550; continue;
}
case 12550: {
s.push(12);
pc=12552; continue;
}
case 12552: {
a=s.pop(); o=s.pop(); s.push(o[a]);
pc=12553; continue;
}
case 12553: {
s.push(3);
pc=12554; continue;
}
case 12554: {
b=s.pop(); a=s.pop();
pc=(a!==b)?12560:12557; continue;
}
case 12557: {
pc=12601; continue;
}
case 12560: {
s.push(l[15]);
pc=12562; continue;
}
case 12562: {
o=s.pop(); s.push(o.x);
pc=12565; continue;
}
case 12565: {
s.push(l[17]);
pc=12567; continue;
}
case 12567: {
o=s.pop(); s.push(o.x);
pc=12570; continue;
}
case 12570: {
b=s.pop(); a=s.pop(); s.push((a - b) | 0);
pc=12571; continue;
}
case 12571: {
v=s.splice(s.length-1,1);
s.push(Math.abs(v[0]));
pc=12574; continue;
}
case 12574: {
s.push(26);
pc=12576; continue;
}
case 12576: {
b=s.pop(); a=s.pop();
pc=(a>=b)?12601:12579; continue;
}
case 12579: {
s.push(l[15]);
pc=12581; continue;
}
case 12581: {
o=s.pop(); s.push(o.y);
pc=12584; continue;
}
case 12584: {
s.push(l[17]);
pc=12586; continue;
}
case 12586: {
o=s.pop(); s.push(o.y);
pc=12589; continue;
}
case 12589: {
b=s.pop(); a=s.pop(); s.push((a - b) | 0);
pc=12590; continue;
}
case 12590: {
v=s.splice(s.length-1,1);
s.push(Math.abs(v[0]));
pc=12593; continue;
}
case 12593: {
s.push(26);
pc=12595; continue;
}
case 12595: {
b=s.pop(); a=s.pop();
pc=(a>=b)?12601:12598; continue;
}
case 12598: {
s.push(1);
pc=12599; continue;
}
case 12599: {
l[18]=s.pop();
pc=12601; continue;
}
case 12601: {
s.push(l[18]);
pc=12603; continue;
}
case 12603: {
s.push(1);
pc=12604; continue;
}
case 12604: {
b=s.pop(); a=s.pop();
pc=(a!==b)?13174:12607; continue;
}
case 12607: {
s.push(l[15]);
pc=12609; continue;
}
case 12609: {
o=s.pop(); s.push(o.c);
pc=12612; continue;
}
case 12612: {
s.push(210);
pc=12615; continue;
}
case 12615: {
b=s.pop(); a=s.pop();
pc=(a===b)?12629:12618; continue;
}
case 12618: {
s.push(l[15]);
pc=12620; continue;
}
case 12620: {
o=s.pop(); s.push(o.c);
pc=12623; continue;
}
case 12623: {
s.push(330);
pc=12626; continue;
}
case 12626: {
b=s.pop(); a=s.pop();
pc=(a!==b)?12665:12629; continue;
}
case 12629: {
s.push(l[17]);
pc=12631; continue;
}
case 12631: {
s.push(l[15]);
pc=12633; continue;
}
case 12633: {
o=s.pop(); s.push(o.ap);
pc=12636; continue;
}
case 12636: {
v=s.splice(s.length-1,1);
o=s.pop();
o.addHP$1(v[0]);
pc=12639; continue;
}
case 12639: {
s.push(l[17]);
pc=12641; continue;
}
case 12641: {
s.push(10);
pc=12643; continue;
}
case 12643: {
v=s.pop(); o=s.pop(); o.fc=v;
pc=12646; continue;
}
case 12646: {
s.push(l[15]);
pc=12648; continue;
}
case 12648: {
s.push(0);
pc=12649; continue;
}
case 12649: {
v=s.pop(); o=s.pop(); o.c=v;
pc=12652; continue;
}
case 12652: {
s.push(l[0]);
pc=12653; continue;
}
case 12653: {
s.push(s[s.length-1]);
pc=12654; continue;
}
case 12654: {
o=s.pop(); s.push(o.m_kazu);
pc=12657; continue;
}
case 12657: {
s.push(1);
pc=12658; continue;
}
case 12658: {
b=s.pop(); a=s.pop(); s.push((a - b) | 0);
pc=12659; continue;
}
case 12659: {
v=s.pop(); o=s.pop(); o.m_kazu=v;
pc=12662; continue;
}
case 12662: {
pc=13183; continue;
}
case 12665: {
s.push(l[15]);
pc=12667; continue;
}
case 12667: {
o=s.pop(); s.push(o.c);
pc=12670; continue;
}
case 12670: {
s.push(260);
pc=12673; continue;
}
case 12673: {
b=s.pop(); a=s.pop();
pc=(a!==b)?12732:12676; continue;
}
case 12676: {
s.push(l[2]);
pc=12677; continue;
}
case 12677: {
s.push(l[15]);
pc=12679; continue;
}
case 12679: {
o=s.pop(); s.push(o.mid);
pc=12682; continue;
}
case 12682: {
b=s.pop(); a=s.pop();
pc=(a!==b)?12696:12685; continue;
}
case 12685: {
s.push(l[15]);
pc=12687; continue;
}
case 12687: {
o=s.pop(); s.push(o.vy);
pc=12690; continue;
}
case 12690: {
a=s.pop();
pc=(a>=0)?12696:12693; continue;
}
case 12693: {
pc=13174; continue;
}
case 12696: {
s.push(l[17]);
pc=12698; continue;
}
case 12698: {
s.push(l[15]);
pc=12700; continue;
}
case 12700: {
o=s.pop(); s.push(o.ap);
pc=12703; continue;
}
case 12703: {
v=s.splice(s.length-1,1);
o=s.pop();
o.addHP$1(v[0]);
pc=12706; continue;
}
case 12706: {
s.push(l[17]);
pc=12708; continue;
}
case 12708: {
s.push(10);
pc=12710; continue;
}
case 12710: {
v=s.pop(); o=s.pop(); o.fc=v;
pc=12713; continue;
}
case 12713: {
s.push(l[15]);
pc=12715; continue;
}
case 12715: {
s.push(0);
pc=12716; continue;
}
case 12716: {
v=s.pop(); o=s.pop(); o.c=v;
pc=12719; continue;
}
case 12719: {
s.push(l[0]);
pc=12720; continue;
}
case 12720: {
s.push(s[s.length-1]);
pc=12721; continue;
}
case 12721: {
o=s.pop(); s.push(o.m_kazu);
pc=12724; continue;
}
case 12724: {
s.push(1);
pc=12725; continue;
}
case 12725: {
b=s.pop(); a=s.pop(); s.push((a - b) | 0);
pc=12726; continue;
}
case 12726: {
v=s.pop(); o=s.pop(); o.m_kazu=v;
pc=12729; continue;
}
case 12729: {
pc=13183; continue;
}
case 12732: {
s.push(l[15]);
pc=12734; continue;
}
case 12734: {
o=s.pop(); s.push(o.c);
pc=12737; continue;
}
case 12737: {
s.push(280);
pc=12740; continue;
}
case 12740: {
b=s.pop(); a=s.pop();
pc=(a!==b)?12796:12743; continue;
}
case 12743: {
s.push(l[17]);
pc=12745; continue;
}
case 12745: {
s.push(10);
pc=12747; continue;
}
case 12747: {
v=s.pop(); o=s.pop(); o.fc=v;
pc=12750; continue;
}
case 12750: {
s.push(l[17]);
pc=12752; continue;
}
case 12752: {
o=s.pop(); s.push(o.doku_c);
pc=12755; continue;
}
case 12755: {
s.push(l[15]);
pc=12757; continue;
}
case 12757: {
o=s.pop(); s.push(o.ap);
pc=12760; continue;
}
case 12760: {
s.push(2);
pc=12761; continue;
}
case 12761: {
b=s.pop(); a=s.pop(); s.push(Math.imul(a,b));
pc=12762; continue;
}
case 12762: {
b=s.pop(); a=s.pop();
pc=(a>=b)?12777:12765; continue;
}
case 12765: {
s.push(l[17]);
pc=12767; continue;
}
case 12767: {
s.push(l[15]);
pc=12769; continue;
}
case 12769: {
o=s.pop(); s.push(o.ap);
pc=12772; continue;
}
case 12772: {
s.push(2);
pc=12773; continue;
}
case 12773: {
b=s.pop(); a=s.pop(); s.push(Math.imul(a,b));
pc=12774; continue;
}
case 12774: {
v=s.pop(); o=s.pop(); o.doku_c=v;
pc=12777; continue;
}
case 12777: {
s.push(l[15]);
pc=12779; continue;
}
case 12779: {
s.push(0);
pc=12780; continue;
}
case 12780: {
v=s.pop(); o=s.pop(); o.c=v;
pc=12783; continue;
}
case 12783: {
s.push(l[0]);
pc=12784; continue;
}
case 12784: {
s.push(s[s.length-1]);
pc=12785; continue;
}
case 12785: {
o=s.pop(); s.push(o.m_kazu);
pc=12788; continue;
}
case 12788: {
s.push(1);
pc=12789; continue;
}
case 12789: {
b=s.pop(); a=s.pop(); s.push((a - b) | 0);
pc=12790; continue;
}
case 12790: {
v=s.pop(); o=s.pop(); o.m_kazu=v;
pc=12793; continue;
}
case 12793: {
pc=13183; continue;
}
case 12796: {
s.push(l[15]);
pc=12798; continue;
}
case 12798: {
o=s.pop(); s.push(o.c);
pc=12801; continue;
}
case 12801: {
s.push(360);
pc=12804; continue;
}
case 12804: {
b=s.pop(); a=s.pop();
pc=(a!==b)?12843:12807; continue;
}
case 12807: {
s.push(l[17]);
pc=12809; continue;
}
case 12809: {
s.push(10);
pc=12811; continue;
}
case 12811: {
v=s.pop(); o=s.pop(); o.fc=v;
pc=12814; continue;
}
case 12814: {
s.push(l[17]);
pc=12816; continue;
}
case 12816: {
s.push(l[15]);
pc=12818; continue;
}
case 12818: {
o=s.pop(); s.push(o.ap);
pc=12821; continue;
}
case 12821: {
v=s.splice(s.length-1,1);
o=s.pop();
o.delPP$1(v[0]);
pc=12824; continue;
}
case 12824: {
s.push(l[15]);
pc=12826; continue;
}
case 12826: {
s.push(0);
pc=12827; continue;
}
case 12827: {
v=s.pop(); o=s.pop(); o.c=v;
pc=12830; continue;
}
case 12830: {
s.push(l[0]);
pc=12831; continue;
}
case 12831: {
s.push(s[s.length-1]);
pc=12832; continue;
}
case 12832: {
o=s.pop(); s.push(o.m_kazu);
pc=12835; continue;
}
case 12835: {
s.push(1);
pc=12836; continue;
}
case 12836: {
b=s.pop(); a=s.pop(); s.push((a - b) | 0);
pc=12837; continue;
}
case 12837: {
v=s.pop(); o=s.pop(); o.m_kazu=v;
pc=12840; continue;
}
case 12840: {
pc=13183; continue;
}
case 12843: {
s.push(l[15]);
pc=12845; continue;
}
case 12845: {
o=s.pop(); s.push(o.ap);
pc=12848; continue;
}
case 12848: {
s.push(l[17]);
pc=12850; continue;
}
case 12850: {
o=s.pop(); s.push(o.dp);
pc=12853; continue;
}
case 12853: {
b=s.pop(); a=s.pop(); s.push((a - b) | 0);
pc=12854; continue;
}
case 12854: {
l[5]=s.pop();
pc=12856; continue;
}
case 12856: {
s.push(l[0]);
pc=12857; continue;
}
case 12857: {
o=s.pop(); s.push(o.aisyou);
pc=12860; continue;
}
case 12860: {
s.push(l[15]);
pc=12862; continue;
}
case 12862: {
o=s.pop(); s.push(o.zokusei);
pc=12865; continue;
}
case 12865: {
a=s.pop(); o=s.pop(); s.push(o[a]);
pc=12866; continue;
}
case 12866: {
s.push(l[17]);
pc=12868; continue;
}
case 12868: {
o=s.pop(); s.push(o.zokusei);
pc=12871; continue;
}
case 12871: {
a=s.pop(); o=s.pop(); s.push(o[a]);
pc=12872; continue;
}
case 12872: {
l[6]=s.pop();
pc=12874; continue;
}
case 12874: {
s.push(l[6]);
pc=12876; continue;
}
case 12876: {
s.push(1);
pc=12877; continue;
}
case 12877: {
b=s.pop(); a=s.pop();
pc=(a!==b)?12889:12880; continue;
}
case 12880: {
s.push(l[5]);
pc=12882; continue;
}
case 12882: {
s.push(2);
pc=12883; continue;
}
case 12883: {
b=s.pop(); a=s.pop(); s.push(Math.imul(a,b));
pc=12884; continue;
}
case 12884: {
l[5]=s.pop();
pc=12886; continue;
}
case 12886: {
pc=12932; continue;
}
case 12889: {
s.push(l[6]);
pc=12891; continue;
}
case 12891: {
s.push(2);
pc=12892; continue;
}
case 12892: {
b=s.pop(); a=s.pop();
pc=(a!==b)?12904:12895; continue;
}
case 12895: {
s.push(l[5]);
pc=12897; continue;
}
case 12897: {
s.push(2);
pc=12898; continue;
}
case 12898: {
b=s.pop(); a=s.pop(); s.push(J.div(a,b));
pc=12899; continue;
}
case 12899: {
l[5]=s.pop();
pc=12901; continue;
}
case 12901: {
pc=12932; continue;
}
case 12904: {
s.push(l[6]);
pc=12906; continue;
}
case 12906: {
s.push(3);
pc=12907; continue;
}
case 12907: {
b=s.pop(); a=s.pop();
pc=(a!==b)?12932:12910; continue;
}
case 12910: {
s.push(0);
pc=12911; continue;
}
case 12911: {
l[5]=s.pop();
pc=12913; continue;
}
case 12913: {
s.push(l[15]);
pc=12915; continue;
}
case 12915: {
s.push(0);
pc=12916; continue;
}
case 12916: {
v=s.pop(); o=s.pop(); o.c=v;
pc=12919; continue;
}
case 12919: {
s.push(l[0]);
pc=12920; continue;
}
case 12920: {
s.push(s[s.length-1]);
pc=12921; continue;
}
case 12921: {
o=s.pop(); s.push(o.m_kazu);
pc=12924; continue;
}
case 12924: {
s.push(1);
pc=12925; continue;
}
case 12925: {
b=s.pop(); a=s.pop(); s.push((a - b) | 0);
pc=12926; continue;
}
case 12926: {
v=s.pop(); o=s.pop(); o.m_kazu=v;
pc=12929; continue;
}
case 12929: {
pc=13183; continue;
}
case 12932: {
s.push(l[5]);
pc=12934; continue;
}
case 12934: {
a=s.pop();
pc=(a>0)?12940:12937; continue;
}
case 12937: {
s.push(1);
pc=12938; continue;
}
case 12938: {
l[5]=s.pop();
pc=12940; continue;
}
case 12940: {
s.push(l[17]);
pc=12942; continue;
}
case 12942: {
s.push(s[s.length-1]);
pc=12943; continue;
}
case 12943: {
o=s.pop(); s.push(o.hp);
pc=12946; continue;
}
case 12946: {
s.push(l[5]);
pc=12948; continue;
}
case 12948: {
b=s.pop(); a=s.pop(); s.push((a - b) | 0);
pc=12949; continue;
}
case 12949: {
v=s.pop(); o=s.pop(); o.hp=v;
pc=12952; continue;
}
case 12952: {
s.push(l[17]);
pc=12954; continue;
}
case 12954: {
o=s.pop(); s.push(o.hp);
pc=12957; continue;
}
case 12957: {
a=s.pop();
pc=(a>0)?13148:12960; continue;
}
case 12960: {
s.push(l[17]);
pc=12962; continue;
}
case 12962: {
s.push(0);
pc=12963; continue;
}
case 12963: {
v=s.pop(); o=s.pop(); o.hp=v;
pc=12966; continue;
}
case 12966: {
s.push(l[2]);
pc=12967; continue;
}
case 12967: {
s.push(6);
pc=12969; continue;
}
case 12969: {
b=s.pop(); a=s.pop();
pc=(a!==b)?13088:12972; continue;
}
case 12972: {
s.push(1);
pc=12973; continue;
}
case 12973: {
l[3]=s.pop();
pc=12974; continue;
}
case 12974: {
pc=12988; continue;
}
case 12977: {
s.push(l[0]);
pc=12978; continue;
}
case 12978: {
o=s.pop(); s.push(o.km);
pc=12981; continue;
}
case 12981: {
s.push(l[3]);
pc=12982; continue;
}
case 12982: {
v=s.splice(s.length-1,1);
o=s.pop();
o.off$1(v[0]);
pc=12985; continue;
}
case 12985: {
l[3]=(l[3]+1)|0;
pc=12988; continue;
}
case 12988: {
s.push(l[3]);
pc=12989; continue;
}
case 12989: {
s.push(15);
pc=12991; continue;
}
case 12991: {
b=s.pop(); a=s.pop();
pc=(a<=b)?12977:12994; continue;
}
case 12994: {
s.push(l[0]);
pc=12995; continue;
}
case 12995: {
o=s.pop(); s.push(o.km);
pc=12998; continue;
}
case 12998: {
s.push(3);
pc=12999; continue;
}
case 12999: {
s.push(120);
pc=13001; continue;
}
case 13001: {
s.push(87);
pc=13003; continue;
}
case 13003: {
s.push(160);
pc=13006; continue;
}
case 13006: {
s.push(l[0]);
pc=13007; continue;
}
case 13007: {
o=s.pop(); s.push(o.co_j);
pc=13010; continue;
}
case 13010: {
o=s.pop(); s.push(o.name);
pc=13013; continue;
}
case 13013: {
v=s.splice(s.length-5,5);
o=s.pop();
o.initSerifubox$5(v[0],v[1],v[2],v[3],v[4]);
pc=13016; continue;
}
case 13016: {
s.push(l[0]);
pc=13017; continue;
}
case 13017: {
o=s.pop(); s.push(o.co_j);
pc=13020; continue;
}
case 13020: {
o=s.pop(); s.push(o.seibetu);
pc=13023; continue;
}
case 13023: {
s.push(1);
pc=13024; continue;
}
case 13024: {
b=s.pop(); a=s.pop();
pc=(a!==b)?13041:13027; continue;
}
case 13027: {
s.push(l[0]);
pc=13028; continue;
}
case 13028: {
o=s.pop(); s.push(o.km);
pc=13031; continue;
}
case 13031: {
s.push(3);
pc=13032; continue;
}
case 13032: {
s.push("あたし、もうダメ。");
pc=13035; continue;
}
case 13035: {
v=s.splice(s.length-2,2);
o=s.pop();
o.addItem$2(v[0],v[1]);
pc=13038; continue;
}
case 13038: {
pc=13052; continue;
}
case 13041: {
s.push(l[0]);
pc=13042; continue;
}
case 13042: {
o=s.pop(); s.push(o.km);
pc=13045; continue;
}
case 13045: {
s.push(3);
pc=13046; continue;
}
case 13046: {
s.push("やられた．．．。");
pc=13049; continue;
}
case 13049: {
v=s.splice(s.length-2,2);
o=s.pop();
o.addItem$2(v[0],v[1]);
pc=13052; continue;
}
case 13052: {
s.push(l[0]);
pc=13053; continue;
}
case 13053: {
o=s.pop(); s.push(o.km);
pc=13056; continue;
}
case 13056: {
s.push(3);
pc=13057; continue;
}
case 13057: {
v=s.splice(s.length-1,1);
o=s.pop();
o.active$1(v[0]);
pc=13060; continue;
}
case 13060: {
s.push(l[0]);
pc=13061; continue;
}
case 13061: {
o=s.pop(); s.push(o.km);
pc=13064; continue;
}
case 13064: {
s.push(700);
pc=13067; continue;
}
case 13067: {
v=s.pop(); o=s.pop(); o.mode=v;
pc=13070; continue;
}
case 13070: {
s.push(l[17]);
pc=13072; continue;
}
case 13072: {
s.push(1250);
pc=13075; continue;
}
case 13075: {
v=s.pop(); o=s.pop(); o.c=v;
pc=13078; continue;
}
case 13078: {
s.push(l[17]);
pc=13080; continue;
}
case 13080: {
s.push(10);
pc=13082; continue;
}
case 13082: {
v=s.pop(); o=s.pop(); o.fc=v;
pc=13085; continue;
}
case 13085: {
pc=13155; continue;
}
case 13088: {
s.push(l[17]);
pc=13090; continue;
}
case 13090: {
s.push(210);
pc=13093; continue;
}
case 13093: {
v=s.pop(); o=s.pop(); o.c=v;
pc=13096; continue;
}
case 13096: {
s.push(l[17]);
pc=13098; continue;
}
case 13098: {
s.push(-175);
pc=13101; continue;
}
case 13101: {
v=s.pop(); o=s.pop(); o.vy=v;
pc=13104; continue;
}
case 13104: {
s.push(l[0]);
pc=13105; continue;
}
case 13105: {
o=s.pop(); s.push(o.gym_f);
pc=13108; continue;
}
case 13108: {
a=s.pop();
pc=(a!=0)?13155:13111; continue;
}
case 13111: {
s.push(l[0]);
pc=13112; continue;
}
case 13112: {
o=s.pop(); s.push(o.km);
pc=13115; continue;
}
case 13115: {
s.push(11);
pc=13117; continue;
}
case 13117: {
s.push(344);
pc=13120; continue;
}
case 13120: {
s.push(8);
pc=13122; continue;
}
case 13122: {
s.push(160);
pc=13125; continue;
}
case 13125: {
s.push(l[17]);
pc=13127; continue;
}
case 13127: {
o=s.pop(); s.push(o.name);
pc=13130; continue;
}
case 13130: {
v=s.splice(s.length-5,5);
o=s.pop();
o.openTimeMessage$5(v[0],v[1],v[2],v[3],v[4]);
pc=13133; continue;
}
case 13133: {
s.push(l[0]);
pc=13134; continue;
}
case 13134: {
o=s.pop(); s.push(o.km);
pc=13137; continue;
}
case 13137: {
s.push(11);
pc=13139; continue;
}
case 13139: {
s.push("えーん、痛いよー。");
pc=13142; continue;
}
case 13142: {
v=s.splice(s.length-2,2);
o=s.pop();
o.addItem$2(v[0],v[1]);
pc=13145; continue;
}
case 13145: {
pc=13155; continue;
}
case 13148: {
s.push(l[17]);
pc=13150; continue;
}
case 13150: {
s.push(10);
pc=13152; continue;
}
case 13152: {
v=s.pop(); o=s.pop(); o.fc=v;
pc=13155; continue;
}
case 13155: {
s.push(l[15]);
pc=13157; continue;
}
case 13157: {
s.push(0);
pc=13158; continue;
}
case 13158: {
v=s.pop(); o=s.pop(); o.c=v;
pc=13161; continue;
}
case 13161: {
s.push(l[0]);
pc=13162; continue;
}
case 13162: {
s.push(s[s.length-1]);
pc=13163; continue;
}
case 13163: {
o=s.pop(); s.push(o.m_kazu);
pc=13166; continue;
}
case 13166: {
s.push(1);
pc=13167; continue;
}
case 13167: {
b=s.pop(); a=s.pop(); s.push((a - b) | 0);
pc=13168; continue;
}
case 13168: {
v=s.pop(); o=s.pop(); o.m_kazu=v;
pc=13171; continue;
}
case 13171: {
pc=13183; continue;
}
case 13174: {
l[2]=(l[2]+1)|0;
pc=13177; continue;
}
case 13177: {
s.push(l[2]);
pc=13178; continue;
}
case 13178: {
s.push(6);
pc=13180; continue;
}
case 13180: {
b=s.pop(); a=s.pop();
pc=(a<=b)?12373:13183; continue;
}
case 13183: {
l[1]=(l[1]+1)|0;
pc=13186; continue;
}
case 13186: {
s.push(l[1]);
pc=13187; continue;
}
case 13187: {
s.push(47);
pc=13189; continue;
}
case 13189: {
b=s.pop(); a=s.pop();
pc=(a<=b)?8:13192; continue;
}
case 13192: {
return;
}
default:throw new Error("Invalid mMove branch "+pc);
} }
}
}
globalThis.MainProgram = MainProgram;
