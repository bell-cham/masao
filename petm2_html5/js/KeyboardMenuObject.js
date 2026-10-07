// Direct port of KeyboardMenuObject from petm2_c.zip. Original method overloads use $arity.
class KeyboardMenuObject {
gg = null;
gk = null;
c = 0;
x = 0;
y = 0;
width = 0;
height = 0;
selectedIndex = 0;
item_kazu = 0;
title = J.array([4], null);
title_color = J.array([4], null);
item = J.array([20], null);
item_int = J.array([20], 0);
constructor(gameGraphics, gameKey) {
(this.gg = gameGraphics);
(this.gk = gameKey);
this.init$0();
}
init$0() {
(this.c = 0);
(this.x = 0);
(this.y = 0);
(this.width = 0);
(this.height = 0);
(this.selectedIndex = 0);
(this.item_kazu = 0);
var n = 0;
while ((n <= 3)) {
(this.title[n] = "");
(this.title_color[n] = Color.cyan);
++n;
}
(n = 0);
while ((n <= 19)) {
(this.item[n] = "");
(this.item_int[n] = 0);
++n;
}
}
addItem$1(string) {
(this.item[this.item_kazu] = string);
++this.item_kazu;
}
addItem$2(string, n) {
(this.item[this.item_kazu] = string);
(this.item_int[this.item_kazu] = n);
++this.item_kazu;
}
addIntItem$1(n) {
(this.item_int[this.item_kazu] = n);
++this.item_kazu;
}
}
globalThis.KeyboardMenuObject = KeyboardMenuObject;
