// Direct port of MonsterObject from petm2_c.zip. Original method overloads use $arity.
class MonsterObject extends CharacterObject {
syurui = 0;
hp = 0;
hp_max = 0;
pp = 0;
pp_max = 0;
l1n_hp_max = 0;
l1n_pp_max = 0;
l1n_ap = 0;
l1n_dp = 0;
speed = 0;
meirei = 0;
waza_code = J.array([10], 0);
waza_name = J.array([10], null);
waza_kazu = 0;
tuikawaza = J.array([2], 0);
positionX = 0;
positionY = 0;
c_kihon = 0;
c_kihon2 = 0;
move_wc = 0;
name = null;
ss = 0;
type = 0;
taiatari_f = false;
taiatari_type = 0;
spt = J.array([5], 0);
seibetu = 0;
mn = 0;
jumpkanou_f = false;
oya_name = null;
level = 0;
doku_c = 0;
gym_wc = 0;
tukauwaza = 0;
name_df = false;
pb_type = 0;
kotaisa = 0;
id = 0;
ahs = 0;
constructor() {
super();
this.init$0();
}
init$0() {
super.init$0();
(this.syurui = 0);
(this.hp = 120);
(this.hp_max = 120);
(this.pp = 60);
(this.pp_max = 60);
(this.l1n_hp_max = 120);
(this.l1n_pp_max = 60);
(this.l1n_ap = 20);
(this.l1n_dp = 20);
(this.speed = 40);
(this.meirei = 0);
(this.positionX = 0);
(this.positionY = 0);
(this.c_kihon = 11000);
(this.c_kihon2 = 0);
(this.move_wc = 0);
(this.name = "名称不明");
(this.seibetu = 0);
(this.ss = 0);
(this.type = 0);
(this.taiatari_f = false);
(this.taiatari_type = 1);
(this.mn = 1);
(this.oya_name = "不明");
(this.level = 1);
(this.doku_c = 0);
(this.gym_wc = 0);
(this.tukauwaza = 1);
(this.name_df = true);
(this.pb_type = 0);
(this.kotaisa = 0);
(this.id = 0);
(this.ahs = 0);
}
initSyurui$2(n, mainProgram) {
this.init$0();
(this.syurui = n);
(this.seibetu = mainProgram.ranInt$1(2));
(this.c = 20);
(this.jumpkanou_f = false);
(this.oya_name = mainProgram.co_j.name);
(this.kotaisa = mainProgram.ranInt$1(16));
(this.id = mainProgram.ranInt$1(1000));
var n2 = 0;
while ((n2 <= 9)) {
(this.waza_code[n2] = 1);
(this.waza_name[n2] = "五芒星に戻す");
++n2;
}
(this.waza_kazu = 0);
(this.tuikawaza[0] = 0);
(this.tuikawaza[1] = 0);
(this.spt[0] = 140);
(this.spt[1] = 141);
(this.spt[2] = 142);
(this.spt[3] = 141);
(this.spt[4] = 141);
(this.mn = J.div(((n - 1000) | 0), 100));
(this.c_kihon = 11000);
(this.c_kihon2 = 0);
switch (n) {
case 1000:
{
(this.c = 10);
break;
}
case 1100:
{
(this.name = mainProgram.name_fennec);
(this.hp_max = 160);
(this.pp_max = 80);
(this.ap = 30);
(this.dp = 20);
(this.zokusei = 2);
(this.waza_code[0] = 4);
(this.waza_code[1] = 5);
(this.waza_code[2] = 3);
(this.waza_code[3] = 2);
(this.waza_code[4] = 1);
(this.waza_name[0] = "火炎放射");
(this.waza_name[1] = "高射砲");
(this.waza_name[2] = "体当たり");
(this.waza_name[3] = "ジャンプ");
(this.waza_name[4] = "五芒星に戻す");
(this.waza_kazu = 4);
(this.jumpkanou_f = true);
break;
}
case 1200:
{
(this.name = mainProgram.name_kametank);
(this.hp_max = 160);
(this.pp_max = 80);
(this.ap = 30);
(this.dp = 20);
(this.zokusei = 3);
(this.spt[0] = 150);
(this.spt[1] = 151);
(this.spt[2] = 152);
(this.spt[3] = 151);
(this.spt[4] = 151);
(this.waza_code[0] = 6);
(this.waza_code[1] = 7);
(this.waza_code[2] = 3);
(this.waza_code[3] = 2);
(this.waza_code[4] = 1);
(this.waza_name[0] = "水圧砲");
(this.waza_name[1] = "高角水圧砲");
(this.waza_name[2] = "体当たり");
(this.waza_name[3] = "ジャンプ");
(this.waza_name[4] = "五芒星に戻す");
(this.waza_kazu = 4);
(this.jumpkanou_f = true);
break;
}
case 1300:
{
(this.name = mainProgram.name_sunvista);
(this.hp_max = 160);
(this.pp_max = 80);
(this.ap = 30);
(this.dp = 20);
(this.zokusei = 4);
(this.spt[0] = 160);
(this.spt[1] = 161);
(this.spt[2] = 162);
(this.spt[3] = 161);
(this.spt[4] = 161);
(this.waza_code[0] = 8);
(this.waza_code[1] = 9);
(this.waza_code[2] = 3);
(this.waza_code[3] = 2);
(this.waza_code[4] = 1);
(this.waza_name[0] = "はっぱカッター");
(this.waza_name[1] = "はっぱ乱れ撃ち");
(this.waza_name[2] = "体当たり");
(this.waza_name[3] = "ジャンプ");
(this.waza_name[4] = "五芒星に戻す");
(this.waza_kazu = 4);
(this.jumpkanou_f = true);
break;
}
case 1400:
{
(this.name = mainProgram.name_butapig);
(this.hp_max = 120);
(this.pp_max = 60);
(this.ap = 20);
(this.dp = 20);
(this.zokusei = 1);
(this.c_kihon2 = 1);
(this.spt[0] = 170);
(this.spt[1] = 171);
(this.spt[2] = 172);
(this.spt[3] = 171);
(this.spt[4] = 171);
(this.waza_code[0] = 3);
(this.waza_code[1] = 17);
(this.waza_code[2] = 2);
(this.waza_code[3] = 1);
(this.waza_name[0] = "体当たり");
(this.waza_name[1] = "突進");
(this.waza_name[2] = "ジャンプ");
(this.waza_name[3] = "五芒星に戻す");
(this.waza_kazu = 3);
(this.jumpkanou_f = true);
break;
}
case 1500:
{
(this.name = mainProgram.name_karara);
(this.hp_max = 160);
(this.pp_max = 60);
(this.ap = 40);
(this.dp = 20);
(this.zokusei = 10);
(this.tukauwaza = 2);
(this.c_kihon2 = 2);
(this.spt[0] = 180);
(this.spt[1] = 181);
(this.spt[2] = 182);
(this.spt[3] = 181);
(this.spt[4] = 181);
(this.waza_code[0] = 10);
(this.waza_code[1] = 19);
(this.waza_code[2] = 2);
(this.waza_code[3] = 1);
(this.waza_name[0] = "空手パンチ");
(this.waza_name[1] = "スカイアッパー");
(this.waza_name[2] = "ジャンプ");
(this.waza_name[3] = "五芒星に戻す");
(this.waza_kazu = 3);
(this.jumpkanou_f = true);
break;
}
case 1600:
{
(this.name = mainProgram.name_iwatops);
(this.hp_max = 140);
(this.pp_max = 70);
(this.ap = 30);
(this.dp = 25);
(this.zokusei = 6);
(this.tukauwaza = 2);
(this.c_kihon2 = 2);
(this.spt[0] = 190);
(this.spt[1] = 191);
(this.spt[2] = 192);
(this.spt[3] = 191);
(this.spt[4] = 191);
(this.waza_code[0] = 25);
(this.waza_code[1] = 17);
(this.waza_code[2] = 2);
(this.waza_code[3] = 1);
(this.waza_name[0] = "岩落し");
(this.waza_name[1] = "突進");
(this.waza_name[2] = "ジャンプ");
(this.waza_name[3] = "五芒星に戻す");
(this.waza_kazu = 3);
(this.jumpkanou_f = true);
break;
}
case 1700:
{
(this.name = mainProgram.name_yachamo);
(this.hp_max = 140);
(this.pp_max = 80);
(this.ap = 30);
(this.dp = 20);
(this.zokusei = 2);
(this.c_kihon2 = 2);
(this.spt[0] = 125);
(this.spt[1] = 126);
(this.spt[2] = 127);
(this.spt[3] = 126);
(this.spt[4] = 126);
(this.waza_code[0] = 16);
(this.waza_code[1] = 11);
(this.waza_code[2] = 2);
(this.waza_code[3] = 1);
(this.waza_name[0] = "火の玉");
(this.waza_name[1] = "ドリルくちばし");
(this.waza_name[2] = "ジャンプ");
(this.waza_name[3] = "五芒星に戻す");
(this.waza_kazu = 3);
(this.jumpkanou_f = true);
break;
}
case 1800:
{
(this.name = mainProgram.name_mariri);
(this.hp_max = 170);
(this.pp_max = 90);
(this.ap = 20);
(this.dp = 20);
(this.zokusei = 3);
(this.tukauwaza = 2);
(this.c_kihon2 = 2);
(this.spt[0] = 115);
(this.spt[1] = 116);
(this.spt[2] = 117);
(this.spt[3] = 118);
(this.spt[4] = 118);
(this.waza_code[0] = 6);
(this.waza_code[1] = 7);
(this.waza_code[2] = 17);
(this.waza_code[3] = 2);
(this.waza_code[4] = 1);
(this.waza_name[0] = "みずでっぽう");
(this.waza_name[1] = "ハイドロポンプ");
(this.waza_name[2] = "突進");
(this.waza_name[3] = "ジャンプ");
(this.waza_name[4] = "五芒星に戻す");
(this.waza_kazu = 4);
(this.jumpkanou_f = true);
break;
}
case 1900:
{
(this.name = mainProgram.name_chireihana);
(this.hp_max = 140);
(this.pp_max = 80);
(this.ap = 20);
(this.dp = 25);
(this.zokusei = 4);
(this.tukauwaza = 2);
(this.c_kihon2 = 0);
(this.spt[0] = 145);
(this.spt[1] = 146);
(this.spt[2] = 147);
(this.spt[3] = 146);
(this.spt[4] = 146);
(this.waza_code[0] = 28);
(this.waza_code[1] = 20);
(this.waza_code[2] = 1);
(this.waza_name[0] = "はなびらのまい");
(this.waza_name[1] = "ソーラービーム");
(this.waza_name[2] = "五芒星に戻す");
(this.waza_kazu = 2);
(this.jumpkanou_f = false);
break;
}
case 2000:
{
(this.name = mainProgram.name_poppie);
(this.hp_max = 80);
(this.pp_max = 60);
(this.ap = 20);
(this.dp = 20);
(this.type = 1);
(this.speed = 80);
(this.zokusei = 8);
(this.c_kihon2 = 0);
(this.spt[0] = 173);
(this.spt[1] = 173);
(this.spt[2] = 174);
(this.spt[3] = 174);
(this.spt[4] = 173);
(this.waza_code[0] = 23);
(this.waza_code[1] = 11);
(this.waza_code[2] = 1);
(this.waza_name[0] = "ウインドカッター");
(this.waza_name[1] = "ドリルくちばし");
(this.waza_name[2] = "五芒星に戻す");
(this.waza_kazu = 2);
(this.jumpkanou_f = false);
break;
}
case 2100:
{
(this.name = mainProgram.name_namakezaru);
(this.hp_max = 160);
(this.pp_max = 70);
(this.ap = 50);
(this.dp = 25);
(this.speed = 20);
(this.zokusei = 1);
(this.tukauwaza = 2);
(this.c_kihon2 = 0);
(this.spt[0] = 184);
(this.spt[1] = 184);
(this.spt[2] = 184);
(this.spt[3] = 184);
(this.spt[4] = 184);
(this.waza_code[0] = 8);
(this.waza_code[1] = 16);
(this.waza_code[2] = 1);
(this.waza_name[0] = "はっぱカッター");
(this.waza_name[1] = "火の玉");
(this.waza_name[2] = "五芒星に戻す");
(this.waza_kazu = 2);
(this.jumpkanou_f = false);
break;
}
case 2200:
{
(this.name = mainProgram.name_lunarock);
(this.hp_max = 110);
(this.pp_max = 60);
(this.ap = 20);
(this.dp = 25);
(this.type = 1);
(this.speed = 80);
(this.zokusei = 6);
(this.c_kihon2 = 2);
(this.spt[0] = 183);
(this.spt[1] = 183);
(this.spt[2] = 183);
(this.spt[3] = 183);
(this.spt[4] = 183);
(this.waza_code[0] = 26);
(this.waza_code[1] = 30);
(this.waza_code[2] = 1);
(this.waza_name[0] = "げんしのちから");
(this.waza_name[1] = "サイコキネシス");
(this.waza_name[2] = "五芒星に戻す");
(this.waza_kazu = 2);
(this.jumpkanou_f = false);
break;
}
case 2300:
{
(this.name = mainProgram.name_pikachii);
(this.hp_max = 140);
(this.pp_max = 80);
(this.ap = 30);
(this.dp = 20);
(this.zokusei = 5);
(this.tukauwaza = 2);
(this.c_kihon2 = 2);
(this.spt[0] = 105);
(this.spt[1] = 106);
(this.spt[2] = 107);
(this.spt[3] = 106);
(this.spt[4] = 106);
(this.waza_code[0] = 15);
(this.waza_code[1] = 3);
(this.waza_code[2] = 22);
(this.waza_code[3] = 2);
(this.waza_code[4] = 1);
(this.waza_name[0] = "１０まんボルト");
(this.waza_name[1] = "でんこうせっか");
(this.waza_name[2] = "かみなり");
(this.waza_name[3] = "ジャンプ");
(this.waza_name[4] = "五芒星に戻す");
(this.waza_kazu = 4);
(this.jumpkanou_f = true);
break;
}
case 2400:
{
(this.name = mainProgram.name_sungoose);
(this.hp_max = 160);
(this.pp_max = 60);
(this.ap = 40);
(this.dp = 20);
(this.zokusei = 1);
(this.tukauwaza = 2);
(this.c_kihon2 = 2);
(this.spt[0] = 155);
(this.spt[1] = 156);
(this.spt[2] = 157);
(this.spt[3] = 156);
(this.spt[4] = 158);
(this.waza_code[0] = 17);
(this.waza_code[1] = 18);
(this.waza_code[2] = 2);
(this.waza_code[3] = 1);
(this.waza_name[0] = "ブレイククロウ");
(this.waza_name[1] = "とびかかる");
(this.waza_name[2] = "ジャンプ");
(this.waza_name[3] = "五芒星に戻す");
(this.waza_kazu = 3);
(this.jumpkanou_f = true);
break;
}
case 2500:
{
(this.name = mainProgram.name_starnal);
(this.hp_max = 120);
(this.pp_max = 70);
(this.ap = 20);
(this.dp = 20);
(this.type = 1);
(this.speed = 80);
(this.zokusei = 3);
(this.c_kihon2 = 2);
(this.spt[0] = 153);
(this.spt[1] = 153);
(this.spt[2] = 153);
(this.spt[3] = 153);
(this.spt[4] = 153);
(this.waza_code[0] = 7);
(this.waza_code[1] = 15);
(this.waza_code[2] = 1);
(this.waza_name[0] = "ハイドロポンプ");
(this.waza_name[1] = "１０まんボルト");
(this.waza_name[2] = "五芒星に戻す");
(this.waza_kazu = 2);
(this.jumpkanou_f = false);
break;
}
case 2600:
{
(this.name = mainProgram.name_hercules);
(this.hp_max = 140);
(this.pp_max = 70);
(this.ap = 30);
(this.dp = 25);
(this.zokusei = 7);
(this.tukauwaza = 1);
(this.c_kihon2 = 1);
(this.spt[0] = 175);
(this.spt[1] = 176);
(this.spt[2] = 177);
(this.spt[3] = 176);
(this.spt[4] = 176);
(this.waza_code[0] = 13);
(this.waza_code[1] = 38);
(this.waza_code[2] = 1);
(this.waza_name[0] = "地震");
(this.waza_name[1] = "メガホーン");
(this.waza_name[2] = "五芒星に戻す");
(this.waza_kazu = 2);
(this.jumpkanou_f = false);
break;
}
case 2700:
{
(this.name = mainProgram.name_lanster);
(this.hp_max = 120);
(this.pp_max = 60);
(this.ap = 30);
(this.dp = 20);
(this.type = 1);
(this.speed = 80);
(this.zokusei = 9);
(this.c_kihon2 = 2);
(this.spt[0] = 163);
(this.spt[1] = 163);
(this.spt[2] = 164);
(this.spt[3] = 164);
(this.spt[4] = 163);
(this.waza_code[0] = 24);
(this.waza_code[1] = 39);
(this.waza_code[2] = 3);
(this.waza_code[3] = 1);
(this.waza_name[0] = "ミサイルばり");
(this.waza_name[1] = "どくばり");
(this.waza_name[2] = "体当たり");
(this.waza_name[3] = "五芒星に戻す");
(this.waza_kazu = 3);
(this.jumpkanou_f = false);
break;
}
case 2800:
{
(this.name = mainProgram.name_kamalike);
(this.hp_max = 150);
(this.pp_max = 60);
(this.ap = 40);
(this.dp = 20);
(this.zokusei = 9);
(this.tukauwaza = 2);
(this.c_kihon2 = 1);
(this.spt[0] = 195);
(this.spt[1] = 196);
(this.spt[2] = 197);
(this.spt[3] = 196);
(this.spt[4] = 196);
(this.waza_code[0] = 38);
(this.waza_code[1] = 33);
(this.waza_code[2] = 2);
(this.waza_code[3] = 1);
(this.waza_name[0] = "カマキリ拳法");
(this.waza_name[1] = "マジカルリーフ");
(this.waza_name[2] = "ジャンプ");
(this.waza_name[3] = "五芒星に戻す");
(this.waza_kazu = 3);
(this.jumpkanou_f = true);
break;
}
case 2900:
{
(this.name = mainProgram.name_chirumichiru);
(this.hp_max = 130);
(this.pp_max = 60);
(this.ap = 30);
(this.dp = 20);
(this.type = 1);
(this.speed = 80);
(this.zokusei = 8);
(this.tukauwaza = 2);
(this.c_kihon2 = 2);
(this.spt[0] = 143);
(this.spt[1] = 143);
(this.spt[2] = 144);
(this.spt[3] = 144);
(this.spt[4] = 143);
(this.waza_code[0] = 23);
(this.waza_code[1] = 29);
(this.waza_code[2] = 3);
(this.waza_code[3] = 1);
(this.waza_name[0] = "ウインドカッター");
(this.waza_name[1] = "ハリケンブラスト");
(this.waza_name[2] = "体当たり");
(this.waza_name[3] = "五芒星に戻す");
(this.waza_kazu = 3);
(this.jumpkanou_f = false);
break;
}
case 3000:
{
(this.name = mainProgram.name_popony);
(this.hp_max = 140);
(this.pp_max = 90);
(this.ap = 20);
(this.dp = 20);
(this.zokusei = 4);
(this.tukauwaza = 2);
(this.c_kihon2 = 0);
(this.spt[0] = 165);
(this.spt[1] = 166);
(this.spt[2] = 167);
(this.spt[3] = 166);
(this.spt[4] = 166);
(this.waza_code[0] = 31);
(this.waza_code[1] = 32);
(this.waza_code[2] = 1);
(this.waza_name[0] = "ワタゲばくだん");
(this.waza_name[1] = "回復のワタゲ");
(this.waza_name[2] = "五芒星に戻す");
(this.waza_kazu = 2);
(this.jumpkanou_f = false);
break;
}
case 3100:
{
(this.name = mainProgram.name_yureko);
(this.hp_max = 70);
(this.pp_max = 70);
(this.ap = 20);
(this.dp = 10);
(this.zokusei = 12);
(this.c_kihon2 = 0);
(this.spt[0] = 168);
(this.spt[1] = 168);
(this.spt[2] = 168);
(this.spt[3] = 168);
(this.spt[4] = 168);
(this.waza_code[0] = 40);
(this.waza_code[1] = 1);
(this.waza_name[0] = "シャドーボール");
(this.waza_name[1] = "五芒星に戻す");
(this.waza_kazu = 1);
(this.jumpkanou_f = false);
break;
}
case 3200:
{
(this.name = mainProgram.name_sunnyna);
(this.hp_max = 160);
(this.pp_max = 70);
(this.ap = 20);
(this.dp = 30);
(this.zokusei = 6);
(this.tukauwaza = 2);
(this.c_kihon2 = 0);
(this.spt[0] = 148);
(this.spt[1] = 149);
(this.spt[2] = 149);
(this.spt[3] = 149);
(this.spt[4] = 149);
(this.waza_code[0] = 6);
(this.waza_code[1] = 34);
(this.waza_code[4] = 1);
(this.waza_name[0] = "みずでっぽう");
(this.waza_name[1] = "自己再生");
(this.waza_name[2] = "五芒星に戻す");
(this.waza_kazu = 2);
(this.jumpkanou_f = false);
break;
}
case 3300:
{
(this.name = mainProgram.name_bibidama);
(this.hp_max = 90);
(this.pp_max = 50);
(this.ap = 50);
(this.dp = 20);
(this.type = 1);
(this.speed = 80);
(this.zokusei = 1);
(this.c_kihon2 = 2);
(this.spt[0] = 178);
(this.spt[1] = 178);
(this.spt[2] = 178);
(this.spt[3] = 179);
(this.spt[4] = 179);
(this.waza_code[0] = 41);
(this.waza_code[1] = 1);
(this.waza_name[0] = "じばく");
(this.waza_name[1] = "五芒星に戻す");
(this.waza_kazu = 1);
(this.jumpkanou_f = false);
break;
}
case 3400:
{
(this.name = mainProgram.name_pichika);
(this.hp_max = 140);
(this.pp_max = 80);
(this.ap = 30);
(this.dp = 20);
(this.zokusei = 1);
(this.tukauwaza = 2);
(this.c_kihon2 = 2);
(this.spt[0] = 135);
(this.spt[1] = 136);
(this.spt[2] = 137);
(this.spt[3] = 136);
(this.spt[4] = 138);
(this.waza_code[0] = 36);
(this.waza_code[1] = 37);
(this.waza_code[2] = 17);
(this.waza_code[3] = 2);
(this.waza_code[4] = 1);
(this.waza_name[0] = "マジカルショット");
(this.waza_name[1] = "つるぎのまい");
(this.waza_name[2] = "ピカ剣");
(this.waza_name[3] = "ジャンプ");
(this.waza_name[4] = "五芒星に戻す");
(this.waza_kazu = 4);
(this.jumpkanou_f = true);
break;
}
case 3500:
{
(this.name = mainProgram.name_blackal);
(this.hp_max = 160);
(this.pp_max = 80);
(this.ap = 20);
(this.dp = 25);
(this.zokusei = 11);
(this.c_kihon2 = 0);
(this.spt[0] = 185);
(this.spt[1] = 186);
(this.spt[2] = 187);
(this.spt[3] = 186);
(this.spt[4] = 186);
(this.waza_code[0] = 30);
(this.waza_code[1] = 3);
(this.waza_code[2] = 2);
(this.waza_code[3] = 1);
(this.waza_name[0] = "サイコキネシス");
(this.waza_name[1] = "体当たり");
(this.waza_name[2] = "ジャンプ");
(this.waza_name[3] = "五芒星に戻す");
(this.waza_kazu = 3);
(this.jumpkanou_f = true);
break;
}
case 3600:
{
(this.name = mainProgram.name_makkalgo);
(this.hp_max = 150);
(this.pp_max = 70);
(this.ap = 20);
(this.dp = 30);
(this.speed = 20);
(this.zokusei = 2);
(this.tukauwaza = 2);
(this.c_kihon2 = 0);
(this.spt[0] = 169);
(this.spt[1] = 169);
(this.spt[2] = 169);
(this.spt[3] = 169);
(this.spt[4] = 169);
(this.waza_code[0] = 4);
(this.waza_code[1] = 25);
(this.waza_code[2] = 1);
(this.waza_name[0] = "火炎放射");
(this.waza_name[1] = "岩落し");
(this.waza_name[2] = "五芒星に戻す");
(this.waza_kazu = 2);
(this.jumpkanou_f = false);
break;
}
case 3700:
{
(this.name = mainProgram.name_rachi);
(this.hp_max = 130);
(this.pp_max = 70);
(this.ap = 20);
(this.dp = 20);
(this.type = 1);
(this.speed = 80);
(this.zokusei = 11);
(this.tukauwaza = 0);
(this.c_kihon2 = 0);
(this.spt[0] = 159);
(this.spt[1] = 159);
(this.spt[2] = 159);
(this.spt[3] = 159);
(this.spt[4] = 159);
(this.waza_code[0] = 27);
(this.waza_code[1] = 30);
(this.waza_code[2] = 1);
(this.waza_name[0] = "ねがいごと");
(this.waza_name[1] = "サイコキネシス");
(this.waza_name[2] = "五芒星に戻す");
(this.waza_kazu = 2);
(this.jumpkanou_f = false);
break;
}
case 3800:
{
(this.name = mainProgram.name_atis);
(this.hp_max = 130);
(this.pp_max = 70);
(this.ap = 20);
(this.dp = 25);
(this.type = 1);
(this.speed = 80);
(this.zokusei = 11);
(this.tukauwaza = 0);
(this.c_kihon2 = 10);
(this.spt[0] = 119);
(this.spt[1] = 119);
(this.spt[2] = 119);
(this.spt[3] = 119);
(this.spt[4] = 119);
(this.waza_code[0] = 46);
(this.waza_code[1] = 47);
(this.waza_code[2] = 3);
(this.waza_code[3] = 1);
(this.waza_name[0] = "ミストボール");
(this.waza_name[1] = "透ける");
(this.waza_name[2] = "体当たり");
(this.waza_name[3] = "五芒星に戻す");
(this.waza_kazu = 3);
(this.jumpkanou_f = false);
break;
}
case 3900:
{
(this.name = mainProgram.name_latis);
(this.hp_max = 130);
(this.pp_max = 70);
(this.ap = 20);
(this.dp = 25);
(this.type = 1);
(this.speed = 80);
(this.zokusei = 11);
(this.tukauwaza = 0);
(this.c_kihon2 = 10);
(this.spt[0] = 109);
(this.spt[1] = 109);
(this.spt[2] = 109);
(this.spt[3] = 109);
(this.spt[4] = 109);
(this.waza_code[0] = 48);
(this.waza_code[1] = 47);
(this.waza_code[2] = 17);
(this.waza_code[3] = 1);
(this.waza_name[0] = "ラスターパージ");
(this.waza_name[1] = "透ける");
(this.waza_name[2] = "ブレイククロウ");
(this.waza_name[3] = "五芒星に戻す");
(this.waza_kazu = 3);
(this.jumpkanou_f = false);
break;
}
case 4000:
{
(this.name = mainProgram.name_tubomushi);
(this.hp_max = 170);
(this.pp_max = 60);
(this.ap = 10);
(this.dp = 35);
(this.speed = 20);
(this.zokusei = 9);
(this.tukauwaza = ((mainProgram.system_mode == 0) ? 1 : 0));
(this.c_kihon2 = 0);
(this.spt[0] = 128);
(this.spt[1] = 129);
(this.spt[2] = 128);
(this.spt[3] = 128);
(this.spt[4] = 128);
(this.waza_code[0] = 24);
(this.waza_code[1] = 1);
(this.waza_name[0] = "ミサイルばり");
(this.waza_name[1] = "五芒星に戻す");
(this.waza_kazu = 1);
(this.jumpkanou_f = false);
break;
}
case 4100:
{
(this.name = mainProgram.name_taiking);
(this.hp_max = 140);
(this.pp_max = 60);
(this.ap = 20);
(this.dp = 20);
(this.zokusei = 3);
(this.tukauwaza = 1);
(this.c_kihon2 = 0);
(this.spt[0] = 208);
(this.spt[1] = 208);
(this.spt[2] = 208);
(this.spt[3] = 208);
(this.spt[4] = 208);
(this.waza_code[0] = 51);
(this.waza_code[1] = 1);
(this.waza_name[0] = "はねる");
(this.waza_name[1] = "五芒星に戻す");
(this.waza_kazu = 1);
(this.jumpkanou_f = false);
break;
}
case 4200:
{
(this.name = mainProgram.name_mirocureall);
(this.hp_max = 150);
(this.pp_max = 70);
(this.ap = 20);
(this.dp = 30);
(this.zokusei = 3);
(this.tukauwaza = 0);
(this.c_kihon2 = 0);
(this.spt[0] = 209);
(this.spt[1] = 209);
(this.spt[2] = 209);
(this.spt[3] = 209);
(this.spt[4] = 209);
(this.waza_code[0] = 49);
(this.waza_code[1] = 50);
(this.waza_code[2] = 1);
(this.waza_name[0] = "いやしの雨");
(this.waza_name[1] = "はめつの雨");
(this.waza_name[2] = "五芒星に戻す");
(this.waza_kazu = 2);
(this.jumpkanou_f = false);
break;
}
case 4300:
{
(this.name = mainProgram.name_airms);
(this.hp_max = 110);
(this.pp_max = 60);
(this.ap = 20);
(this.dp = 25);
(this.type = 1);
(this.speed = 80);
(this.zokusei = 13);
(this.tukauwaza = 2);
(this.c_kihon2 = 2);
(this.spt[0] = 139);
(this.spt[1] = 139);
(this.spt[2] = 139);
(this.spt[3] = 139);
(this.spt[4] = 139);
(this.waza_code[0] = 52);
(this.waza_code[1] = 53);
(this.waza_code[2] = 1);
(this.waza_name[0] = "機銃掃射");
(this.waza_name[1] = "はがねのつばさ");
(this.waza_name[2] = "五芒星に戻す");
(this.waza_kazu = 2);
(this.jumpkanou_f = false);
break;
}
case 4400:
{
(this.name = "優勝記念品");
(this.hp_max = 130);
(this.pp_max = 70);
(this.ap = 20);
(this.dp = 25);
(this.type = 1);
(this.speed = 80);
(this.zokusei = 3);
(this.tukauwaza = 0);
(this.c_kihon2 = 2);
(this.spt[0] = 274);
(this.spt[1] = 274);
(this.spt[2] = 274);
(this.spt[3] = 274);
(this.spt[4] = 274);
(this.waza_code[0] = 54);
(this.waza_code[1] = 17);
(this.waza_code[2] = 1);
(this.waza_name[0] = "水の波動");
(this.waza_name[1] = "のしかかり");
(this.waza_name[2] = "五芒星に戻す");
(this.waza_kazu = 2);
(this.jumpkanou_f = false);
break;
}
case 4500:
{
(this.name = "優勝記念品");
(this.hp_max = 160);
(this.pp_max = 80);
(this.ap = 30);
(this.dp = 25);
(this.zokusei = 7);
(this.tukauwaza = 1);
(this.c_kihon2 = 1);
(this.spt[0] = 273);
(this.spt[1] = 273);
(this.spt[2] = 273);
(this.spt[3] = 273);
(this.spt[4] = 273);
(this.waza_code[0] = 60);
(this.waza_code[1] = 1);
(this.waza_name[0] = "噴火");
(this.waza_name[1] = "五芒星に戻す");
(this.waza_kazu = 1);
(this.jumpkanou_f = false);
break;
}
case 4700:
{
(this.name = mainProgram.name_grounder);
(this.pp_max = 350);
(this.ap = 30);
(this.dp = 30);
(this.hp_max = mainProgram.paraInt$1("grounder_hp"));
if ((this.hp_max <= 0)) {
(this.hp_max = 880);
}
(this.type = 1);
(this.speed = 80);
(this.ahs = 16);
(this.zokusei = 7);
(this.tukauwaza = 0);
(this.c_kihon2 = 50);
(this.spt[0] = 273);
(this.spt[1] = 273);
(this.spt[2] = 273);
(this.spt[3] = 273);
(this.spt[4] = 273);
(this.waza_code[0] = 1);
(this.waza_name[0] = "五芒星に戻す");
(this.waza_kazu = 0);
(this.jumpkanou_f = false);
break;
}
case 4800:
{
(this.name = mainProgram.name_kaiole);
(this.pp_max = 660);
(this.ap = 30);
(this.dp = 25);
(this.hp_max = mainProgram.paraInt$1("kaiole_hp"));
if ((this.hp_max <= 0)) {
(this.hp_max = 920);
}
(this.type = 1);
(this.speed = 80);
(this.ahs = 16);
(this.zokusei = 3);
(this.tukauwaza = 0);
(this.c_kihon2 = 0);
(this.spt[0] = 274);
(this.spt[1] = 274);
(this.spt[2] = 274);
(this.spt[3] = 274);
(this.spt[4] = 274);
(this.waza_code[0] = 1);
(this.waza_name[0] = "五芒星に戻す");
(this.waza_kazu = 0);
(this.jumpkanou_f = false);
break;
}
case 4900:
{
(this.name = mainProgram.name_senkuuza);
(this.hp_max = 650);
(this.pp_max = 550);
(this.ap = 30);
(this.dp = 25);
(this.hp_max = mainProgram.paraInt$1("senkuuza_hp"));
if ((this.hp_max <= 0)) {
(this.hp_max = 650);
}
(this.type = 1);
(this.speed = 80);
(this.ahs = 16);
(this.zokusei = 14);
(this.tukauwaza = 0);
(this.c_kihon2 = 0);
(this.spt[0] = 275);
(this.spt[1] = 275);
(this.spt[2] = 275);
(this.spt[3] = 275);
(this.spt[4] = 275);
(this.waza_code[0] = 1);
(this.waza_name[0] = "五芒星に戻す");
(this.waza_kazu = 0);
(this.jumpkanou_f = false);
}
}
(this.hp = this.hp_max);
(this.pp = this.pp_max);
(this.l1n_hp_max = this.hp_max);
(this.l1n_pp_max = this.pp_max);
(this.l1n_ap = this.ap);
(this.l1n_dp = this.dp);
(this.c_kihon = ((this.type == 1) ? 12000 : 11000));
if ((mainProgram.paraInt$1("waza_name_hf") == 1)) {
(n2 = 0);
while ((n2 <= 9)) {
(this.waza_name[n2] = mainProgram.waza_dname[this.waza_code[n2]]);
++n2;
}
}
}
addHP$1(n) {
(this.hp = ((this.hp + n) | 0));
if ((this.hp > this.hp_max)) {
(this.hp = this.hp_max);
}
}
delHP$1(n) {
(this.hp = ((this.hp - n) | 0));
if ((this.hp < 0)) {
(this.hp = 0);
}
}
addPP$1(n) {
(this.pp = ((this.pp + n) | 0));
if ((this.pp > this.pp_max)) {
(this.pp = this.pp_max);
}
}
delPP$1(n) {
(this.pp = ((this.pp - n) | 0));
if ((this.pp < 0)) {
(this.pp = 0);
}
}
setLevel$1(n) {
(this.level = n);
if ((this.level > 5)) {
(this.level = 5);
}
if ((this.level < 1)) {
(this.level = 1);
}
(this.hp_max = ((this.type == 1) ? ((this.l1n_hp_max + Math.imul(((this.level - 1) | 0), 50)) | 0) : ((this.l1n_hp_max + Math.imul(((this.level - 1) | 0), 60)) | 0)));
(this.hp = this.hp_max);
(this.pp = (this.pp_max = ((this.l1n_pp_max + Math.imul(((this.level - 1) | 0), 20)) | 0)));
if ((this.level >= 3)) {
(this.ap = ((this.l1n_ap + 10) | 0));
(this.dp = ((this.l1n_dp + 5) | 0));
}
if ((this.level >= 5)) {
switch (this.kotaisa) {
case 0:
{
(this.hp_max = ((this.hp_max + 120) | 0));
break;
}
case 1:
{
(this.hp_max = ((this.hp_max + 60) | 0));
(this.pp_max = ((this.pp_max + 20) | 0));
break;
}
case 2:
{
(this.hp_max = ((this.hp_max + 60) | 0));
(this.ap = ((this.ap + 10) | 0));
break;
}
case 3:
{
(this.hp_max = ((this.hp_max + 60) | 0));
(this.dp = ((this.dp + 5) | 0));
break;
}
case 4:
{
(this.pp_max = ((this.pp_max + 80) | 0));
break;
}
case 5:
{
(this.pp_max = ((this.pp_max + 20) | 0));
(this.ap = ((this.ap + 10) | 0));
break;
}
case 6:
{
(this.pp_max = ((this.pp_max + 20) | 0));
(this.dp = ((this.dp + 5) | 0));
break;
}
case 7:
{
(this.ap = ((this.ap + 20) | 0));
break;
}
case 8:
{
(this.ap = ((this.ap + 10) | 0));
(this.dp = ((this.dp + 5) | 0));
break;
}
case 9:
{
(this.dp = ((this.dp + 10) | 0));
break;
}
case 10:
{
(this.hp_max = ((this.hp_max + 60) | 0));
(this.pp_max = ((this.pp_max + 10) | 0));
(this.ap = ((this.ap + 5) | 0));
break;
}
case 11:
{
(this.hp_max = ((this.hp_max + 30) | 0));
(this.pp_max = ((this.pp_max + 20) | 0));
(this.ap = ((this.ap + 5) | 0));
break;
}
case 12:
{
(this.hp_max = ((this.hp_max + 30) | 0));
(this.pp_max = ((this.pp_max + 10) | 0));
(this.ap = ((this.ap + 10) | 0));
break;
}
case 13:
{
(this.pp_max = ((this.pp_max + 10) | 0));
(this.ap = ((this.ap + 5) | 0));
(this.dp = ((this.dp + 5) | 0));
break;
}
case 14:
{
(this.hp_max = ((this.hp_max + 30) | 0));
(this.ap = ((this.ap + 5) | 0));
(this.dp = ((this.dp + 5) | 0));
break;
}
case 15:
{
(this.hp_max = ((this.hp_max + 30) | 0));
(this.pp_max = ((this.pp_max + 10) | 0));
(this.dp = ((this.dp + 5) | 0));
}
}
(this.hp = this.hp_max);
(this.pp = this.pp_max);
}
}
insertWaza$2(n, string) {
++this.waza_kazu;
(this.waza_code[9] = n);
(this.waza_name[9] = string);
var n2 = 9;
while ((n2 >= 1)) {
if ((((this.waza_code[((n2 - 1) | 0)] != 0) && (this.waza_code[((n2 - 1) | 0)] != 1)) && (this.waza_code[((n2 - 1) | 0)] != 2))) {
break;
}
var n3 = this.waza_code[((n2 - 1) | 0)];
var string2 = this.waza_name[((n2 - 1) | 0)];
(this.waza_code[((n2 - 1) | 0)] = n);
(this.waza_name[((n2 - 1) | 0)] = string);
(this.waza_code[n2] = n3);
(this.waza_name[n2] = string2);
--n2;
}
}
}
globalThis.MonsterObject = MonsterObject;
