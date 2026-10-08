// Direct port of MapSystem from petm_c.zip. Original method overloads use $arity.
class MapSystem {
gg = null;
width = 0;
height = 0;
map_bg = null;
map_string = null;
wx = 0;
wy = 0;
wx_mini = 0;
wy_mini = 0;
wx_max = 0;
wy_max = 0;
os2_wx = 0;
os2_wy = 0;
bg_space = null;
hi = null;
g2 = null;
ap = null;
constructor(n, n2, gameGraphics) {
(this.width = n);
(this.height = n2);
(this.gg = gameGraphics);
(this.map_bg = J.array([this.width, this.height], 0));
(this.map_string = J.array([this.height], null));
(this.bg_space = "");
var n3 = 0;
while ((n3 <= this.width)) {
(this.bg_space = (this.bg_space + "."));
J.inc(()=>n3, v=>n3=v, 1, false, "int");
}
this.init$0();
(this.hi = this.gg.spt_img[0]);
(this.g2 = this.gg.os2_g);
(this.ap = this.gg.ap);
}
init$0() {
(this.wx = 0);
(this.wy = 0);
(this.os2_wx = 0);
(this.os2_wy = 0);
var n = 0;
while ((n < this.height)) {
var n2 = 0;
while ((n2 < this.width)) {
(this.map_bg[n2][n] = J.short(0));
J.inc(()=>n2, v=>n2=v, 1, false, "int");
}
J.inc(()=>n, v=>n=v, 1, false, "int");
}
(n = 0);
while ((n < this.height)) {
(this.map_string[n] = this.bg_space);
J.inc(()=>n, v=>n=v, 1, false, "int");
}
}
setBank$1(n) {
var n2 = ((n == 1) ? 40 : ((n == 2) ? 50 : ((n == 4) ? 60 : 30)));
var n3 = 0;
while ((n3 <= 9)) {
(this.gg.spt_img[0][((10 + n3) | 0)] = this.gg.spt_img[0][((n2 + n3) | 0)]);
J.inc(()=>n3, v=>n3=v, 1, false, "int");
}
}
drawMap$2(n, n2) {
(this.wx = n);
(this.wy = n2);
var n3 = J.rem(this.wx, 32);
var n4 = J.rem(this.wy, 32);
(this.os2_wx = J.div(this.wx, 32));
(this.os2_wy = J.div(this.wy, 32));
this.gg.fill2$0();
var n5 = 0;
while ((n5 <= 10)) {
var n6 = 0;
while ((n6 <= 16)) {
var s = this.map_bg[((this.os2_wx + n6) | 0)][((this.os2_wy + n5) | 0)];
if ((s > 0)) {
this.gg.drawPT2$3(((32 + Math.imul(n6, 32)) | 0), ((32 + Math.imul(n5, 32)) | 0), this.map_bg[((this.os2_wx + n6) | 0)][((this.os2_wy + n5) | 0)]);
}
J.inc(()=>n6, v=>n6=v, 1, false, "int");
}
J.inc(()=>n5, v=>n5=v, 1, false, "int");
}
this.gg.os_g.drawImage(this.gg.os2_img, (((-(32) | 0) - n3) | 0), (((-(32) | 0) - n4) | 0), this.gg.ap);
}
drawMapScroll$1(n) {
var n2 = J.rem(this.wx, 32);
var n3 = J.rem(this.wy, 32);
var n4 = J.div(this.wx, 32);
var n5 = J.div(this.wy, 32);
if (((((n4 > ((this.os2_wx + 1) | 0)) || (n4 < ((this.os2_wx - 1) | 0))) || (n5 > ((this.os2_wy + 1) | 0))) || (n5 < ((this.os2_wy - 1) | 0)))) {
this.drawMap$2(this.wx, this.wy);
}
else {
if ((n5 > this.os2_wy)) {
if ((n4 > this.os2_wx)) {
this.g2.copyArea(64, 64, 544, 352, (-(32) | 0), (-(32) | 0));
(this.os2_wx = n4);
(this.os2_wy = n5);
var n6 = ((this.os2_wy + 10) | 0);
var n7 = 0;
while ((n7 <= 16)) {
if ((this.map_bg[((this.os2_wx + n7) | 0)][n6] > 0)) {
this.g2.drawImage(this.hi[this.map_bg[((this.os2_wx + n7) | 0)][n6]], ((32 + Math.imul(n7, 32)) | 0), 352, this.ap);
}
J.inc(()=>n7, v=>n7=v, 1, false, "int");
}
var n8 = ((this.os2_wx + 16) | 0);
var n9 = 0;
while ((n9 <= 9)) {
if ((this.map_bg[n8][((this.os2_wy + n9) | 0)] > 0)) {
this.g2.drawImage(this.hi[this.map_bg[n8][((this.os2_wy + n9) | 0)]], 544, ((32 + Math.imul(n9, 32)) | 0), this.ap);
}
J.inc(()=>n9, v=>n9=v, 1, false, "int");
}
}
else {
if ((n4 < this.os2_wx)) {
this.g2.copyArea(0, 64, 544, 352, 32, (-(32) | 0));
(this.os2_wx = n4);
(this.os2_wy = n5);
var n10 = ((this.os2_wy + 10) | 0);
var n11 = 0;
while ((n11 <= 16)) {
if ((this.map_bg[((this.os2_wx + n11) | 0)][n10] > 0)) {
this.g2.drawImage(this.hi[this.map_bg[((this.os2_wx + n11) | 0)][n10]], ((32 + Math.imul(n11, 32)) | 0), 352, this.ap);
}
J.inc(()=>n11, v=>n11=v, 1, false, "int");
}
var n12 = 0;
while ((n12 <= 9)) {
if ((this.map_bg[this.os2_wx][((this.os2_wy + n12) | 0)] > 0)) {
this.g2.drawImage(this.hi[this.map_bg[this.os2_wx][((this.os2_wy + n12) | 0)]], 32, ((32 + Math.imul(n12, 32)) | 0), this.ap);
}
J.inc(()=>n12, v=>n12=v, 1, false, "int");
}
}
else {
this.g2.copyArea(32, 64, 544, 352, 0, (-(32) | 0));
(this.os2_wy = n5);
var n13 = ((this.os2_wy + 10) | 0);
var n14 = 0;
while ((n14 <= 16)) {
if ((this.map_bg[((this.os2_wx + n14) | 0)][n13] > 0)) {
this.g2.drawImage(this.hi[this.map_bg[((this.os2_wx + n14) | 0)][n13]], ((32 + Math.imul(n14, 32)) | 0), 352, this.ap);
}
J.inc(()=>n14, v=>n14=v, 1, false, "int");
}
}
}
}
else {
if ((n5 < this.os2_wy)) {
if ((n4 > this.os2_wx)) {
this.g2.copyArea(64, 0, 544, 352, (-(32) | 0), 32);
(this.os2_wx = n4);
(this.os2_wy = n5);
var n15 = 0;
while ((n15 <= 16)) {
if ((this.map_bg[((this.os2_wx + n15) | 0)][this.os2_wy] > 0)) {
this.g2.drawImage(this.hi[this.map_bg[((this.os2_wx + n15) | 0)][this.os2_wy]], ((32 + Math.imul(n15, 32)) | 0), 32, this.ap);
}
J.inc(()=>n15, v=>n15=v, 1, false, "int");
}
var n16 = ((this.os2_wx + 16) | 0);
var n17 = 1;
while ((n17 <= 10)) {
if ((this.map_bg[n16][((this.os2_wy + n17) | 0)] > 0)) {
this.g2.drawImage(this.hi[this.map_bg[n16][((this.os2_wy + n17) | 0)]], 544, ((32 + Math.imul(n17, 32)) | 0), this.ap);
}
J.inc(()=>n17, v=>n17=v, 1, false, "int");
}
}
else {
if ((n4 < this.os2_wx)) {
this.g2.copyArea(0, 0, 544, 352, 32, 32);
(this.os2_wx = n4);
(this.os2_wy = n5);
var n18 = 0;
while ((n18 <= 16)) {
if ((this.map_bg[((this.os2_wx + n18) | 0)][this.os2_wy] > 0)) {
this.g2.drawImage(this.hi[this.map_bg[((this.os2_wx + n18) | 0)][this.os2_wy]], ((32 + Math.imul(n18, 32)) | 0), 32, this.ap);
}
J.inc(()=>n18, v=>n18=v, 1, false, "int");
}
var n19 = 1;
while ((n19 <= 10)) {
if ((this.map_bg[this.os2_wx][((this.os2_wy + n19) | 0)] > 0)) {
this.g2.drawImage(this.hi[this.map_bg[this.os2_wx][((this.os2_wy + n19) | 0)]], 32, ((32 + Math.imul(n19, 32)) | 0), this.ap);
}
J.inc(()=>n19, v=>n19=v, 1, false, "int");
}
}
else {
this.g2.copyArea(32, 0, 544, 352, 0, 32);
(this.os2_wy = n5);
var n20 = 0;
while ((n20 <= 16)) {
if ((this.map_bg[((this.os2_wx + n20) | 0)][this.os2_wy] > 0)) {
this.g2.drawImage(this.hi[this.map_bg[((this.os2_wx + n20) | 0)][this.os2_wy]], ((32 + Math.imul(n20, 32)) | 0), 32, this.ap);
}
J.inc(()=>n20, v=>n20=v, 1, false, "int");
}
}
}
}
else {
if ((n4 > this.os2_wx)) {
this.g2.copyArea(64, 32, 544, 352, (-(32) | 0), 0);
(this.os2_wx = n4);
var n21 = ((this.os2_wx + 16) | 0);
var n22 = 0;
while ((n22 <= 10)) {
if ((this.map_bg[n21][((this.os2_wy + n22) | 0)] > 0)) {
this.g2.drawImage(this.hi[this.map_bg[n21][((this.os2_wy + n22) | 0)]], 544, ((32 + Math.imul(n22, 32)) | 0), this.ap);
}
J.inc(()=>n22, v=>n22=v, 1, false, "int");
}
}
else {
if ((n4 < this.os2_wx)) {
this.g2.copyArea(0, 32, 544, 352, 32, 0);
(this.os2_wx = n4);
var n23 = 0;
while ((n23 <= 10)) {
if ((this.map_bg[this.os2_wx][((this.os2_wy + n23) | 0)] > 0)) {
this.g2.drawImage(this.hi[this.map_bg[this.os2_wx][((this.os2_wy + n23) | 0)]], 32, ((32 + Math.imul(n23, 32)) | 0), this.ap);
}
J.inc(()=>n23, v=>n23=v, 1, false, "int");
}
}
}
}
}
}
this.gg.os_g.drawImage(this.gg.os2_img, (((-(32) | 0) - n2) | 0), (((-(32) | 0) - n3) | 0), this.ap);
}
getBGCode$2(n, n2) {
return this.map_bg[J.div(n, 32)][J.div(n2, 32)];
}
putBGCode$3(n, n2, n3) {
(this.map_bg[n][n2] = J.short(J.short(n3)));
if (((((this.os2_wx <= n) && (((this.os2_wx + 16) | 0) >= n)) && (this.os2_wy <= n2)) && (((this.os2_wy + 10) | 0) >= n2))) {
this.gg.drawBG2$3(((Math.imul(((n - this.os2_wx) | 0), 32) + 32) | 0), ((Math.imul(((n2 - this.os2_wy) | 0), 32) + 32) | 0), n3);
}
}
}
globalThis.MapSystem = MapSystem;
