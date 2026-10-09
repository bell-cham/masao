// Direct port of GameKey from petm_c.zip. Original method overloads use $arity.
class GameKey extends KeyAdapter {
key_code = 0;
key_char = 0;
up_f = false;
down_f = false;
left_f = false;
right_f = false;
tr1_f = false;
tr2_f = false;
tr3_f = false;
c_jump_f = false; // 【追加】Cを押した瞬間を記録
start_f = false;
up_c = 0;
down_c = 0;
constructor() {
super();
this.init$0();
}
init$0() {
(this.key_code = 0);
(this.key_char = ((0) & 65535));
(this.up_f = false);
(this.down_f = false);
(this.left_f = false);
(this.right_f = false);
(this.tr1_f = false);
(this.tr2_f = false);
(this.tr3_f = false);
(this.c_jump_f = false); // 【追加】
(this.start_f = false);
(this.up_c = 0);
(this.down_c = 0);
}
keyPressed$1(keyEvent) {
(this.key_code = keyEvent.getKeyCode());
(this.key_char = ((keyEvent.getKeyChar()) & 65535));

// 【追加】VをJとして扱う
if (this.key_code === 86) {
(this.key_code = 74);
(this.key_char = 106);
}

switch (this.key_code) {
case 38:
{
(this.up_f = true);
break;
}
case 40:
{
(this.down_f = true);
break;
}
case 37:
{
(this.left_f = true);
break;
}
case 39:
{
(this.right_f = true);
break;
}
case 104:
{
(this.up_f = true);
break;
}
case 98:
{
(this.down_f = true);
break;
}
case 100:
{
(this.left_f = true);
break;
}
case 102:
{
(this.right_f = true);
break;
}
case 90:
{
(this.tr1_f = true);
break;
}
case 88:
{
(this.tr2_f = true);
break;
}
case 67:
{
// 【追加】押しっぱなしによるキーリピートは除外
if (!this.tr3_f) {
(this.c_jump_f = true);
}
//追加ここまで
(this.tr3_f = true);
break;
}
case 32:
{
(this.tr1_f = true);
break;
}
case 83:
{
(this.start_f = true);
}
}
}
keyReleased$1(keyEvent) {
var n = keyEvent.getKeyCode();
switch (n) {
case 38:
{
(this.up_f = false);
(this.up_c = 0);
break;
}
case 40:
{
(this.down_f = false);
(this.down_c = 0);
break;
}
case 37:
{
(this.left_f = false);
break;
}
case 39:
{
(this.right_f = false);
break;
}
case 104:
{
(this.up_f = false);
(this.up_c = 0);
break;
}
case 98:
{
(this.down_f = false);
(this.down_c = 0);
break;
}
case 100:
{
(this.left_f = false);
break;
}
case 102:
{
(this.right_f = false);
break;
}
case 90:
{
(this.tr1_f = false);
break;
}
case 88:
{
(this.tr2_f = false);
break;
}
case 67:
{
(this.tr3_f = false);
break;
}
case 32:
{
(this.tr1_f = false);
break;
}
case 83:
{
(this.start_f = false);
}
}
}
getKeyCode$0() {
return this.key_code;
}
getKeyChar$0() {
return this.key_char;
}
}
globalThis.GameKey = GameKey;
