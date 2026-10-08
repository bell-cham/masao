// Direct port of GameMouse from petm_c.zip. Original method overloads use $arity.
class GameMouse extends MouseAdapter {
button_f = false;
click_x = 0;
click_y = 0;
constructor() {
super();
this.init$0();
}
init$0() {
(this.button_f = false);
(this.click_x = 0);
(this.click_y = 0);
}
mousePressed$1(mouseEvent) {
(this.button_f = true);
(this.click_x = mouseEvent.getX());
(this.click_y = mouseEvent.getY());
}
mouseReleased$1(mouseEvent) {
(this.button_f = false);
}
}
globalThis.GameMouse = GameMouse;
