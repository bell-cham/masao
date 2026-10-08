// Direct port of PetObject from petm_c.zip. Original method overloads use $arity.
class PetObject extends CharacterObject {
shurui = 0;
hp = 0;
hp_max = 0;
hp_max_kijun = 0;
hp_max_upkaisuu = 0;
pp = 0;
pp_max = 0;
pp_max_kijun = 0;
pp_max_upkaisuu = 0;
speed = 0;
meirei = 0;
waza_code = J.array([8], 0);
waza_name = J.array([8], null);
waza_kazu = 0;
optionwaza = 0;
position = 0;
move_wc = 0;
gym_wc = 0;
name = null;
ss = 0;
type = 0;
attack_f = false;
spt = J.array([3], 0);
boku = null;
mn = 0;
jumpkanou_f = false;
constructor() {
super();
this.init$0();
}
init$0() {
super.init$0();
(this.shurui = 0);
(this.hp = 100);
(this.hp_max = 100);
(this.hp_max_kijun = 100);
(this.hp_max_upkaisuu = 0);
(this.pp = 40);
(this.pp_max = 40);
(this.pp_max_upkaisuu = 0);
(this.pp_max_kijun = 40);
(this.speed = 40);
(this.meirei = 0);
(this.position = 0);
(this.move_wc = 0);
(this.gym_wc = 0);
(this.name = "名前不明");
(this.boku = "ぼく");
(this.ss = 0);
(this.type = 0);
(this.attack_f = false);
(this.mn = 1);
}
initShuruibetu$2(n, mainProgram) {
this.init$0();
(this.shurui = n);
(this.c = 20);
(this.optionwaza = 0);
(this.jumpkanou_f = false);
var n2 = 0;
while ((n2 <= 7)) {
(this.waza_code[n2] = 10);
(this.waza_name[n2] = "五芒星に戻す");
J.inc(()=>n2, v=>n2=v, 1, false, "int");
}
(this.waza_kazu = 0);
(this.spt[0] = 140);
(this.spt[1] = 141);
(this.spt[2] = 142);
(this.mn = J.div(((n - 1000) | 0), 100));
switch (n) {
case 1000:
{
(this.c = 10);
break;
}
case 1100:
{
(this.name = mainProgram.mn_pikachii);
(this.hp_max = 100);
(this.pp_max = 40);
(this.waza_code[0] = 30);
(this.waza_code[1] = 40);
(this.waza_code[2] = 70);
(this.waza_code[3] = 20);
(this.waza_code[4] = 10);
(this.waza_name[0] = mainProgram.mn_pikachii_w1);
(this.waza_name[1] = mainProgram.mn_pikachii_w2);
(this.waza_name[2] = mainProgram.mn_pikachii_w3);
(this.waza_name[3] = "ジャンプ");
(this.waza_name[4] = "五芒星に戻す");
(this.waza_kazu = 4);
(this.jumpkanou_f = true);
break;
}
case 1200:
{
(this.name = mainProgram.mn_chikorin);
(this.hp_max = 70);
(this.pp_max = 40);
(this.boku = "わたし");
(this.spt[0] = 150);
(this.spt[1] = 151);
(this.spt[2] = 152);
(this.waza_code[0] = 50);
(this.waza_code[1] = 60);
(this.waza_code[2] = 170);
(this.waza_code[3] = 40);
(this.waza_code[4] = 20);
(this.waza_code[5] = 10);
(this.waza_name[0] = mainProgram.mn_chikorin_w1);
(this.waza_name[1] = mainProgram.mn_chikorin_w2);
(this.waza_name[2] = mainProgram.mn_chikorin_w3);
(this.waza_name[3] = mainProgram.mn_chikorin_w4);
(this.waza_name[4] = "ジャンプ");
(this.waza_name[5] = "五芒星に戻す");
(this.waza_kazu = 5);
(this.jumpkanou_f = true);
break;
}
case 1300:
{
(this.name = mainProgram.mn_korat);
(this.hp_max = 50);
(this.pp_max = 30);
(this.spt[0] = 160);
(this.spt[1] = 161);
(this.spt[2] = 162);
(this.waza_code[0] = 40);
(this.waza_code[1] = 180);
(this.waza_code[2] = 20);
(this.waza_code[3] = 10);
(this.waza_name[0] = mainProgram.mn_korat_w1);
(this.waza_name[1] = mainProgram.mn_korat_w2);
(this.waza_name[2] = "ジャンプ");
(this.waza_name[3] = "五芒星に戻す");
(this.waza_kazu = 3);
(this.jumpkanou_f = true);
break;
}
case 1400:
{
(this.name = mainProgram.mn_mariri);
(this.hp_max = 120);
(this.pp_max = 40);
(this.spt[0] = 170);
(this.spt[1] = 171);
(this.spt[2] = 172);
(this.waza_code[0] = 100);
(this.waza_code[1] = 160);
(this.waza_code[2] = 40);
(this.waza_code[3] = 20);
(this.waza_code[4] = 10);
(this.waza_name[0] = mainProgram.mn_mariri_w1);
(this.waza_name[1] = mainProgram.mn_mariri_w2);
(this.waza_name[2] = mainProgram.mn_mariri_w3);
(this.waza_name[3] = "ジャンプ");
(this.waza_name[4] = "五芒星に戻す");
(this.waza_kazu = 4);
(this.jumpkanou_f = true);
break;
}
case 1500:
{
(this.name = mainProgram.mn_poppie);
(this.hp_max = 50);
(this.pp_max = 30);
(this.type = 1);
(this.speed = 80);
(this.spt[0] = 148);
(this.spt[1] = 148);
(this.spt[2] = 149);
(this.waza_code[0] = 110);
(this.waza_code[1] = 40);
(this.waza_code[2] = 10);
(this.waza_name[0] = mainProgram.mn_poppie_w1);
(this.waza_name[1] = mainProgram.mn_poppie_w2);
(this.waza_name[2] = "五芒星に戻す");
(this.waza_kazu = 2);
break;
}
case 1600:
{
(this.name = mainProgram.mn_bibidama);
(this.hp_max = 30);
(this.pp_max = 30);
(this.type = 1);
(this.speed = 20);
(this.spt[0] = 158);
(this.spt[1] = 158);
(this.spt[2] = 158);
(this.waza_code[0] = 80);
(this.waza_code[1] = 10);
(this.waza_name[0] = mainProgram.mn_bibidama_w1);
(this.waza_name[1] = "五芒星に戻す");
(this.waza_kazu = 1);
break;
}
case 1700:
{
(this.name = mainProgram.mn_chireihana);
(this.hp_max = 60);
(this.pp_max = 30);
(this.speed = 20);
(this.boku = "わたし");
(this.spt[0] = 180);
(this.spt[1] = 181);
(this.spt[2] = 182);
(this.waza_code[0] = 90);
(this.waza_code[1] = 170);
(this.waza_code[2] = 10);
(this.waza_name[0] = mainProgram.mn_chireihana_w1);
(this.waza_name[1] = mainProgram.mn_chireihana_w2);
(this.waza_name[2] = "五芒星に戻す");
(this.waza_kazu = 2);
break;
}
case 1800:
{
(this.name = mainProgram.mn_popoko);
(this.hp_max = 50);
(this.pp_max = 40);
(this.speed = 0);
(this.boku = "わたし");
(this.spt[0] = 169);
(this.spt[1] = 169);
(this.spt[2] = 169);
(this.waza_code[0] = 120);
(this.waza_code[1] = 130);
(this.waza_code[2] = 10);
(this.waza_name[0] = mainProgram.mn_popoko_w1);
(this.waza_name[1] = mainProgram.mn_popoko_w2);
(this.waza_name[2] = "五芒星に戻す");
(this.waza_kazu = 2);
break;
}
case 1900:
{
(this.name = mainProgram.mn_hinorarashi);
(this.hp_max = 100);
(this.pp_max = 40);
(this.spt[0] = 153);
(this.spt[1] = 154);
(this.spt[2] = 155);
(this.waza_code[0] = 140);
(this.waza_code[1] = 150);
(this.waza_code[2] = 40);
(this.waza_code[3] = 20);
(this.waza_code[4] = 10);
(this.waza_name[0] = mainProgram.mn_hinorarashi_w1);
(this.waza_name[1] = mainProgram.mn_hinorarashi_w2);
(this.waza_name[2] = mainProgram.mn_hinorarashi_w3);
(this.waza_name[3] = "ジャンプ");
(this.waza_name[4] = "五芒星に戻す");
(this.waza_kazu = 4);
(this.jumpkanou_f = true);
break;
}
case 2000:
{
(this.name = mainProgram.mn_airms);
(this.hp_max = 60);
(this.pp_max = 35);
(this.type = 1);
(this.speed = 80);
(this.spt[0] = 147);
(this.spt[1] = 147);
(this.spt[2] = 147);
(this.waza_code[0] = 130);
(this.waza_code[1] = 40);
(this.waza_code[2] = 10);
(this.waza_name[0] = mainProgram.mn_airms_w1);
(this.waza_name[1] = mainProgram.mn_airms_w2);
(this.waza_name[2] = "五芒星に戻す");
(this.waza_kazu = 2);
break;
}
case 2100:
{
(this.name = mainProgram.mn_mamezou);
(this.hp_max = 160);
(this.pp_max = 40);
(this.spt[0] = 190);
(this.spt[1] = 191);
(this.spt[2] = 192);
(this.waza_code[0] = 40);
(this.waza_code[1] = 190);
(this.waza_code[2] = 20);
(this.waza_code[3] = 10);
(this.waza_name[0] = mainProgram.mn_mamezou_w1);
(this.waza_name[1] = mainProgram.mn_mamezou_w2);
(this.waza_name[2] = "ジャンプ");
(this.waza_name[3] = "五芒星に戻す");
(this.waza_kazu = 3);
(this.jumpkanou_f = true);
break;
}
case 2200:
{
(this.name = mainProgram.mn_hitodeme);
(this.hp_max = 60);
(this.pp_max = 40);
(this.type = 1);
(this.speed = 20);
(this.boku = "わたし");
(this.spt[0] = 156);
(this.spt[1] = 156);
(this.spt[2] = 156);
(this.waza_code[0] = 100);
(this.waza_code[1] = 160);
(this.waza_code[2] = 10);
(this.waza_name[0] = mainProgram.mn_hitodeme_w1);
(this.waza_name[1] = mainProgram.mn_hitodeme_w2);
(this.waza_name[2] = "五芒星に戻す");
(this.waza_kazu = 2);
break;
}
case 2300:
{
(this.name = mainProgram.mn_miu);
(this.hp_max = 60);
(this.pp_max = 40);
(this.type = 1);
(this.speed = 60);
(this.spt[0] = 167);
(this.spt[1] = 167);
(this.spt[2] = 167);
(this.waza_code[0] = 200);
(this.waza_code[1] = 210);
(this.waza_code[2] = 10);
(this.waza_name[0] = mainProgram.mn_miu_w1);
(this.waza_name[1] = mainProgram.mn_miu_w2);
(this.waza_name[2] = "五芒星に戻す");
(this.waza_kazu = 2);
break;
}
case 2400:
{
(this.name = mainProgram.mn_suikuu);
(this.hp_max = 90);
(this.pp_max = 40);
(this.speed = 80);
(this.spt[0] = 177);
(this.spt[1] = 178);
(this.spt[2] = 179);
(this.waza_code[0] = 250);
(this.waza_code[1] = 40);
(this.waza_code[2] = 180);
(this.waza_code[3] = 20);
(this.waza_code[4] = 10);
(this.waza_name[0] = "オーロラビーム");
(this.waza_name[1] = "体当たり");
(this.waza_name[2] = "とびかかる");
(this.waza_name[3] = "ジャンプ");
(this.waza_name[4] = "五芒星に戻す");
(this.waza_kazu = 4);
(this.jumpkanou_f = true);
break;
}
case 2500:
{
(this.name = mainProgram.mn_thundara);
(this.hp_max = 60);
(this.pp_max = 30);
(this.type = 1);
(this.speed = 80);
(this.spt[0] = 145);
(this.spt[1] = 145);
(this.spt[2] = 145);
(this.waza_code[0] = 70);
(this.waza_code[1] = 30);
(this.waza_code[2] = 10);
(this.waza_name[0] = "かみなり");
(this.waza_name[1] = "でんきショック");
(this.waza_name[2] = "五芒星に戻す");
(this.waza_kazu = 2);
break;
}
case 2600:
{
(this.name = mainProgram.mn_makkalgo);
(this.hp_max = 140);
(this.pp_max = 35);
(this.speed = 10);
(this.spt[0] = 183);
(this.spt[1] = 183);
(this.spt[2] = 183);
(this.waza_code[0] = 140);
(this.waza_code[1] = 260);
(this.waza_code[2] = 10);
(this.waza_name[0] = mainProgram.mn_makkalgo_w1);
(this.waza_name[1] = mainProgram.mn_makkalgo_w2);
(this.waza_name[2] = "五芒星に戻す");
(this.waza_kazu = 2);
break;
}
case 2700:
{
(this.name = mainProgram.mn_taiking);
(this.hp_max = 50);
(this.pp_max = 30);
(this.speed = 0);
(this.spt[0] = 144);
(this.spt[1] = 144);
(this.spt[2] = 144);
(this.waza_code[0] = 180);
(this.waza_code[1] = 10);
(this.waza_name[0] = mainProgram.mn_taiking_w1);
(this.waza_name[1] = "五芒星に戻す");
(this.waza_kazu = 1);
break;
}
case 2800:
{
(this.name = mainProgram.pichika_name);
(this.hp_max = mainProgram.pichika_hp_max);
(this.pp_max = mainProgram.pichika_pp_max);
(this.speed = mainProgram.pichika_speed);
(this.boku = mainProgram.pichika_boku);
(this.spt[0] = 240);
(this.spt[1] = 241);
(this.spt[2] = 242);
(this.waza_code[0] = 40);
(this.waza_code[1] = 270);
(this.waza_code[2] = 280);
(this.waza_code[3] = 20);
(this.waza_code[4] = 10);
if (mainProgram.pichika_jump) {
(this.waza_name[0] = mainProgram.pichika_waza1_name);
(this.waza_name[1] = mainProgram.pichika_waza2_name);
(this.waza_name[2] = mainProgram.pichika_waza3_name);
(this.waza_name[3] = "ジャンプ");
(this.waza_name[4] = "五芒星に戻す");
(this.waza_kazu = 4);
(this.jumpkanou_f = true);
}
else {
(this.waza_code[3] = 10);
(this.waza_name[0] = mainProgram.pichika_waza1_name);
(this.waza_name[1] = mainProgram.pichika_waza2_name);
(this.waza_name[2] = mainProgram.pichika_waza3_name);
(this.waza_name[3] = "五芒星に戻す");
(this.waza_kazu = 3);
}
(this.type = mainProgram.pichika_type);
break;
}
case 2900:
{
(this.name = mainProgram.name_figa);
(this.hp_max = 280);
(this.pp_max = 200);
(this.type = 1);
(this.speed = 80);
(this.spt[0] = 274);
(this.spt[1] = 274);
(this.spt[2] = 274);
(this.waza_code[0] = 10);
(this.waza_name[0] = "五芒星に戻す");
(this.waza_kazu = 0);
break;
}
case 3000:
{
(this.name = mainProgram.name_thundaga);
(this.hp_max = 240);
(this.pp_max = 200);
(this.type = 1);
(this.speed = 80);
(this.spt[0] = 275);
(this.spt[1] = 275);
(this.spt[2] = 275);
(this.waza_code[0] = 10);
(this.waza_name[0] = "五芒星に戻す");
(this.waza_kazu = 0);
break;
}
case 3100:
{
(this.name = mainProgram.name_blizzaga);
(this.hp_max = 330);
(this.pp_max = 200);
(this.type = 1);
(this.speed = 80);
(this.spt[0] = 276);
(this.spt[1] = 276);
(this.spt[2] = 276);
(this.waza_code[0] = 10);
(this.waza_name[0] = "五芒星に戻す");
(this.waza_kazu = 0);
break;
}
case 3200:
{
(this.name = "ラギアス");
(this.name = mainProgram.name_ragias);
(this.hp_max = 300);
(this.pp_max = 200);
(this.type = 1);
(this.speed = 80);
(this.spt[0] = 277);
(this.spt[1] = 277);
(this.spt[2] = 277);
(this.waza_code[0] = 10);
(this.waza_name[0] = "五芒星に戻す");
(this.waza_kazu = 0);
}
}
(this.hp = this.hp_max);
(this.pp = this.pp_max);
(this.hp_max_kijun = this.hp_max);
(this.pp_max_kijun = this.pp_max);
}
setHPPPMax$0() {
(this.hp_max = ((this.hp_max_kijun + Math.imul(this.hp_max_upkaisuu, 30)) | 0));
(this.pp_max = ((this.pp_max_kijun + Math.imul(this.pp_max_upkaisuu, 20)) | 0));
if ((((this.hp_max_upkaisuu + this.pp_max_upkaisuu) | 0) >= 5)) {
(this.hp_max = 30);
if ((this.hp > 30)) {
(this.hp = 30);
}
(this.pp_max = 20);
if ((this.pp > 20)) {
(this.pp = 20);
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
addOptionwaza$1(n) {
if (((this.optionwaza > 0) || (n <= 0))) {
return;
}
if ((n == 1)) {
(this.waza_code[7] = 220);
(this.waza_name[7] = "バックアタック");
}
else {
if ((n == 2)) {
(this.waza_code[7] = 230);
(this.waza_name[7] = "大ジャンプ");
}
else {
if ((n == 3)) {
(this.waza_code[7] = 240);
(this.waza_name[7] = "自己再生");
}
}
}
(this.optionwaza = n);
J.inc(()=>this.waza_kazu, v=>this.waza_kazu=v, 1, false, "int");
var n2 = 7;
while ((n2 >= 1)) {
if ((((this.waza_code[((n2 - 1) | 0)] != 0) && (this.waza_code[((n2 - 1) | 0)] != 10)) && (this.waza_code[((n2 - 1) | 0)] != 20))) {
break;
}
var n3 = this.waza_code[((n2 - 1) | 0)];
var string = this.waza_name[((n2 - 1) | 0)];
(this.waza_code[((n2 - 1) | 0)] = this.waza_code[n2]);
(this.waza_name[((n2 - 1) | 0)] = this.waza_name[n2]);
(this.waza_code[n2] = n3);
(this.waza_name[n2] = string);
J.inc(()=>n2, v=>n2=v, -1, false, "int");
}
}
}
globalThis.PetObject = PetObject;
