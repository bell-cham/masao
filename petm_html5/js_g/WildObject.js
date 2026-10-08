// Direct port of WildObject from petm_c.zip. Original method overloads use $arity.
class WildObject extends CharacterObject {
shurui = 0;
hp = 0;
hp_max = 0;
pp = 0;
pp_max = 0;
meirei = 0;
positionX = 0;
positionY = 0;
move_wc = 0;
gym_wc = 0;
name = null;
ss = 0;
attack_f = false;
spt = J.array([3], 0);
mn = 0;
speed = 0;
waza_code = J.array([8], 0);
waza_kazu = 0;
type = 0;
ms = 0;
constructor() {
super();
this.init$0();
}
init$0() {
super.init$0();
(this.shurui = 0);
(this.hp = 100);
(this.hp_max = 100);
(this.pp = 100);
(this.pp_max = 100);
(this.meirei = 10);
(this.positionX = 0);
(this.positionY = 0);
(this.move_wc = 0);
(this.gym_wc = 0);
(this.name = "名前未定");
(this.ss = 0);
(this.attack_f = false);
(this.mn = 1);
(this.speed = 40);
(this.move_wc = 0);
(this.meirei = 0);
(this.type = 0);
(this.ms = 0);
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
}
globalThis.WildObject = WildObject;
