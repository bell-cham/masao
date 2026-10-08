// Direct port of GameGraphics from petm_c.zip. Original method overloads use $arity.
class GameGraphics {
spt_kazu_x = 10;
spt_kazu_y = 30;
spt_kazu = 300;
spt_h_kijyun = 10;
ap = null;
di = null;
mt = null;
backcolor = null;
os_img = null;
os_g = null;
os2_img = null;
os2_g = null;
apt_img = null;
pg = null;
li = J.array([10], null);
spt_img = J.array([4, this.spt_kazu], null);
spt_pa = J.array([4, this.spt_kazu, 1024], 0);
hi = null;
toumeishoku = 0;
constructor(applet) {
(this.ap = applet);
(this.di = this.ap.getSize());
(this.backcolor = Color.black);
(this.os_img = this.ap.createImage(512, 320));
(this.os_g = this.os_img.getGraphics());
(this.os2_img = this.ap.createImage(608, 416));
(this.os2_g = this.os2_img.getGraphics());
(this.mt = new MediaTracker(this.ap));
var string = this.ap.getParameter("filename_pattern");
(this.apt_img = this.ap.getImage(this.ap.getDocumentBase(), string));
this.mt.addImage(this.apt_img, 0);
var nArray = J.array([307200], 0);
(this.pg = new PixelGrabber(this.apt_img, 0, 0, 320, 960, nArray, 0, 320));
try {
this.pg.grabPixels();
}
catch (interruptedException) {
}
(this.toumeishoku = nArray[963]);
for (var i = 0; (i <= 29); J.inc(()=>i, v=>i=v, 1, false, "int")) {
for (var j = 0; (j <= 9); J.inc(()=>j, v=>j=v, 1, false, "int")) {
var n = ((Math.imul(Math.imul(i, 320), 32) + Math.imul(j, 32)) | 0);
var n2 = ((Math.imul(i, 10) + j) | 0);
for (var k = 0; (k <= 31); J.inc(()=>k, v=>k=v, 1, false, "int")) {
for (var i2 = 0; (i2 <= 31); J.inc(()=>i2, v=>i2=v, 1, false, "int")) {
(this.spt_pa[0][n2][((Math.imul(k, 32) + i2) | 0)] = nArray[((((n + Math.imul(k, 320)) | 0) + i2) | 0)]);
if ((i < 10)) {
continue;
}
(this.spt_pa[1][n2][((Math.imul(k, 32) + i2) | 0)] = nArray[((((n + Math.imul(k, 320)) | 0) + ((31 - i2) | 0)) | 0)]);
(this.spt_pa[2][n2][((Math.imul(k, 32) + i2) | 0)] = ((nArray[((((n + Math.imul(k, 320)) | 0) + i2) | 0)] == this.toumeishoku) ? this.toumeishoku : (-(1) | 0)));
(this.spt_pa[3][n2][((Math.imul(k, 32) + i2) | 0)] = ((nArray[((((n + Math.imul(k, 320)) | 0) + ((31 - i2) | 0)) | 0)] == this.toumeishoku) ? this.toumeishoku : (-(1) | 0)));
}
}
(this.spt_img[0][n2] = this.ap.createImage(new MemoryImageSource(32, 32, this.spt_pa[0][n2], 0, 32)));
if ((i >= 10)) {
(this.spt_img[1][n2] = this.ap.createImage(new MemoryImageSource(32, 32, this.spt_pa[1][n2], 0, 32)));
(this.spt_img[2][n2] = this.ap.createImage(new MemoryImageSource(32, 32, this.spt_pa[2][n2], 0, 32)));
(this.spt_img[3][n2] = this.ap.createImage(new MemoryImageSource(32, 32, this.spt_pa[3][n2], 0, 32)));
continue;
}
(this.spt_img[1][n2] = this.spt_img[0][n2]);
(this.spt_img[2][n2] = this.spt_img[0][n2]);
(this.spt_img[3][n2] = this.spt_img[0][n2]);
}
}
(this.hi = this.spt_img[0]);
}
addListImage$2(n, string) {
(this.li[n] = this.ap.getImage(this.ap.getDocumentBase(), string));
this.mt.addImage(this.li[n], 0);
}
loadImage$0() {
try {
this.mt.waitForID(0);
}
catch (interruptedException) {
}
}
copyOS$1(graphics) {
graphics.drawImage(this.os_img, 0, 0, this.ap);
}
fill$0() {
this.os_g.setColor(this.backcolor);
this.os_g.fillRect(0, 0, this.di.width, this.di.height);
}
fill2$0() {
this.os2_g.setColor(this.backcolor);
this.os2_g.fillRect(0, 0, ((this.di.width + 96) | 0), ((this.di.height + 96) | 0));
}
setBackcolor$1(color) {
(this.backcolor = color);
}
drawPT$4(n, n2, n3, n4) {
this.os_g.drawImage(this.spt_img[n4][n3], n, n2, this.ap);
}
drawPT2$3(n, n2, n3) {
this.os2_g.drawImage(this.hi[n3], n, n2, this.ap);
}
drawBG2$3(n, n2, n3) {
this.os2_g.setColor(this.backcolor);
this.os2_g.fillRect(n, n2, 32, 32);
this.os2_g.drawImage(this.hi[n3], n, n2, this.ap);
}
drawBG3$4(n, n2, n3, color) {
this.os2_g.setColor(color);
this.os2_g.fillRect(n, n2, 32, 32);
this.os2_g.drawImage(this.hi[n3], n, n2, this.ap);
}
drawListImage$3(n, n2, n3) {
this.os_g.drawImage(this.li[n3], n, n2, this.ap);
}
}
globalThis.GameGraphics = GameGraphics;
