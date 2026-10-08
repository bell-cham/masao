// Direct port of CharacterObject from petm2_c.zip. Original method overloads use $arity.
class CharacterObject {
c = 0;
x = 0;
y = 0;
vx = 0;
vy = 0;
wx = 0;
wy = 0;
c1 = 0;
c2 = 0;
c3 = 0;
c4 = 0;
c5 = 0;
pt = 0;
pth = 0;
muki = 0;
ac = 0;
jimen_f = false;
score = 0;
gf = false;
team = 0;
fc = 0;
zokusei = 0;
ap = 0;
dp = 0;
mid = 0;
constructor() {
this.init$0();
}
init$0() {
(this.c = 0);
(this.x = 0);
(this.y = 0);
(this.vx = 0);
(this.vy = 0);
(this.wx = 0);
(this.wy = 0);
(this.c1 = 0);
(this.c2 = 0);
(this.c3 = 0);
(this.c4 = 0);
(this.c5 = 0);
(this.pt = 0);
(this.pth = 0);
(this.ac = 0);
(this.jimen_f = false);
(this.muki = 0);
(this.score = 0);
(this.gf = false);
(this.team = 0);
(this.fc = 0);
(this.zokusei = 1);
(this.ap = 20);
(this.dp = 20);
(this.mid = 0);
}
}
globalThis.CharacterObject = CharacterObject;
