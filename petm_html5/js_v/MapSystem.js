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
for (var i = 0; (i <= this.width); J.inc(()=>i, v=>i=v, 1, false, "int")) {
(this.bg_space = (this.bg_space + "."));
}
this.init$0();
(this.hi = this.gg.spt_img[0]);
(this.g2 = this.gg.os2_g);
(this.ap = this.gg.ap);
}
init$0() {
var n = 0;
(this.wx = 0);
(this.wy = 0);
(this.os2_wx = 0);
(this.os2_wy = 0);
for ((n = 0); (n < this.height); J.inc(()=>n, v=>n=v, 1, false, "int")) {
for (var i = 0; (i < this.width); J.inc(()=>i, v=>i=v, 1, false, "int")) {
(this.map_bg[i][n] = J.short(0));
}
}
for ((n = 0); (n < this.height); J.inc(()=>n, v=>n=v, 1, false, "int")) {
(this.map_string[n] = this.bg_space);
}
}
setBank$1(n) {
var n2 = ((n == 1) ? 40 : ((n == 2) ? 50 : ((n == 4) ? 60 : 30)));
for (var i = 0; (i <= 9); J.inc(()=>i, v=>i=v, 1, false, "int")) {
(this.gg.spt_img[0][((10 + i) | 0)] = this.gg.spt_img[0][((n2 + i) | 0)]);
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
for (var i = 0; (i <= 10); J.inc(()=>i, v=>i=v, 1, false, "int")) {
for (var j = 0; (j <= 16); J.inc(()=>j, v=>j=v, 1, false, "int")) {
var s = this.map_bg[((this.os2_wx + j) | 0)][((this.os2_wy + i) | 0)];
if ((s <= 0)) {
continue;
}
this.gg.drawPT2$3(((32 + Math.imul(j, 32)) | 0), ((32 + Math.imul(i, 32)) | 0), this.map_bg[((this.os2_wx + j) | 0)][((this.os2_wy + i) | 0)]);
}
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
for (var i = 0; (i <= 16); J.inc(()=>i, v=>i=v, 1, false, "int")) {
if ((this.map_bg[((this.os2_wx + i) | 0)][n6] <= 0)) {
continue;
}
this.g2.drawImage(this.hi[this.map_bg[((this.os2_wx + i) | 0)][n6]], ((32 + Math.imul(i, 32)) | 0), 352, this.ap);
}
var n7 = ((this.os2_wx + 16) | 0);
for (var i = 0; (i <= 9); J.inc(()=>i, v=>i=v, 1, false, "int")) {
if ((this.map_bg[n7][((this.os2_wy + i) | 0)] <= 0)) {
continue;
}
this.g2.drawImage(this.hi[this.map_bg[n7][((this.os2_wy + i) | 0)]], 544, ((32 + Math.imul(i, 32)) | 0), this.ap);
}
}
else {
if ((n4 < this.os2_wx)) {
this.g2.copyArea(0, 64, 544, 352, 32, (-(32) | 0));
(this.os2_wx = n4);
(this.os2_wy = n5);
var n8 = ((this.os2_wy + 10) | 0);
for (var i = 0; (i <= 16); J.inc(()=>i, v=>i=v, 1, false, "int")) {
if ((this.map_bg[((this.os2_wx + i) | 0)][n8] <= 0)) {
continue;
}
this.g2.drawImage(this.hi[this.map_bg[((this.os2_wx + i) | 0)][n8]], ((32 + Math.imul(i, 32)) | 0), 352, this.ap);
}
for (var i = 0; (i <= 9); J.inc(()=>i, v=>i=v, 1, false, "int")) {
if ((this.map_bg[this.os2_wx][((this.os2_wy + i) | 0)] <= 0)) {
continue;
}
this.g2.drawImage(this.hi[this.map_bg[this.os2_wx][((this.os2_wy + i) | 0)]], 32, ((32 + Math.imul(i, 32)) | 0), this.ap);
}
}
else {
this.g2.copyArea(32, 64, 544, 352, 0, (-(32) | 0));
(this.os2_wy = n5);
var n9 = ((this.os2_wy + 10) | 0);
for (var i = 0; (i <= 16); J.inc(()=>i, v=>i=v, 1, false, "int")) {
if ((this.map_bg[((this.os2_wx + i) | 0)][n9] <= 0)) {
continue;
}
this.g2.drawImage(this.hi[this.map_bg[((this.os2_wx + i) | 0)][n9]], ((32 + Math.imul(i, 32)) | 0), 352, this.ap);
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
for (var i = 0; (i <= 16); J.inc(()=>i, v=>i=v, 1, false, "int")) {
if ((this.map_bg[((this.os2_wx + i) | 0)][this.os2_wy] <= 0)) {
continue;
}
this.g2.drawImage(this.hi[this.map_bg[((this.os2_wx + i) | 0)][this.os2_wy]], ((32 + Math.imul(i, 32)) | 0), 32, this.ap);
}
var n10 = ((this.os2_wx + 16) | 0);
for (var i = 1; (i <= 10); J.inc(()=>i, v=>i=v, 1, false, "int")) {
if ((this.map_bg[n10][((this.os2_wy + i) | 0)] <= 0)) {
continue;
}
this.g2.drawImage(this.hi[this.map_bg[n10][((this.os2_wy + i) | 0)]], 544, ((32 + Math.imul(i, 32)) | 0), this.ap);
}
}
else {
if ((n4 < this.os2_wx)) {
this.g2.copyArea(0, 0, 544, 352, 32, 32);
(this.os2_wx = n4);
(this.os2_wy = n5);
for (var i = 0; (i <= 16); J.inc(()=>i, v=>i=v, 1, false, "int")) {
if ((this.map_bg[((this.os2_wx + i) | 0)][this.os2_wy] <= 0)) {
continue;
}
this.g2.drawImage(this.hi[this.map_bg[((this.os2_wx + i) | 0)][this.os2_wy]], ((32 + Math.imul(i, 32)) | 0), 32, this.ap);
}
for (var i = 1; (i <= 10); J.inc(()=>i, v=>i=v, 1, false, "int")) {
if ((this.map_bg[this.os2_wx][((this.os2_wy + i) | 0)] <= 0)) {
continue;
}
this.g2.drawImage(this.hi[this.map_bg[this.os2_wx][((this.os2_wy + i) | 0)]], 32, ((32 + Math.imul(i, 32)) | 0), this.ap);
}
}
else {
this.g2.copyArea(32, 0, 544, 352, 0, 32);
(this.os2_wy = n5);
for (var i = 0; (i <= 16); J.inc(()=>i, v=>i=v, 1, false, "int")) {
if ((this.map_bg[((this.os2_wx + i) | 0)][this.os2_wy] <= 0)) {
continue;
}
this.g2.drawImage(this.hi[this.map_bg[((this.os2_wx + i) | 0)][this.os2_wy]], ((32 + Math.imul(i, 32)) | 0), 32, this.ap);
}
}
}
}
else {
if ((n4 > this.os2_wx)) {
this.g2.copyArea(64, 32, 544, 352, (-(32) | 0), 0);
(this.os2_wx = n4);
var n11 = ((this.os2_wx + 16) | 0);
for (var i = 0; (i <= 10); J.inc(()=>i, v=>i=v, 1, false, "int")) {
if ((this.map_bg[n11][((this.os2_wy + i) | 0)] <= 0)) {
continue;
}
this.g2.drawImage(this.hi[this.map_bg[n11][((this.os2_wy + i) | 0)]], 544, ((32 + Math.imul(i, 32)) | 0), this.ap);
}
}
else {
if ((n4 < this.os2_wx)) {
this.g2.copyArea(0, 32, 544, 352, 32, 0);
(this.os2_wx = n4);
for (var i = 0; (i <= 10); J.inc(()=>i, v=>i=v, 1, false, "int")) {
if ((this.map_bg[this.os2_wx][((this.os2_wy + i) | 0)] <= 0)) {
continue;
}
this.g2.drawImage(this.hi[this.map_bg[this.os2_wx][((this.os2_wy + i) | 0)]], 32, ((32 + Math.imul(i, 32)) | 0), this.ap);
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
