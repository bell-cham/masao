// Direct port of MessageBox from petm2_c.zip. Original method overloads use $arity.
class MessageBox extends Dialog {
bu_1 = null;
bu_2 = null;
pa_1 = new Panel();
pa_2 = new Panel();
la_1 = null;
tf_1 = null;
type = 0;
index = 0;
constructor(n, string, frame) {
super(frame, string, true);
(this.type = n);
this.setLocation(128, 300);
(this.index = -1);
this.setFont$1(new Font("Dialog", 0, 12));
if ((n == 1)) {
this.pa_2.setLayout(new BorderLayout());
(this.la_1 = new Label(""));
this.pa_2.add("Center", this.la_1);
(this.tf_1 = new TextField(""));
this.pa_2.add("South", this.tf_1);
(this.bu_1 = new Button(" ＯＫ "));
this.pa_1.add("Center", this.bu_1);
this.add$2("South", this.pa_1);
this.add$2("Center", this.pa_2);
this.bu_1.addActionListener(this);
}
else {
if ((n == 2)) {
this.pa_2.setLayout(new BorderLayout());
(this.la_1 = new Label(""));
this.pa_2.add("Center", this.la_1);
(this.tf_1 = new TextField(""));
this.pa_2.add("South", this.tf_1);
(this.bu_1 = new Button(" 決定 "));
this.pa_1.add("Center", this.bu_1);
(this.bu_2 = new Button("キャンセル"));
this.pa_1.add("Center", this.bu_2);
this.add$2("South", this.pa_1);
this.add$2("Center", this.pa_2);
this.bu_1.addActionListener(this);
this.bu_2.addActionListener(this);
}
}
this.addWindowListener$1(this);
}
open$3(string, string2, string3) {
this.setTitle$1(string);
this.la_1.setText(string2);
this.tf_1.setText(string3);
this.setSize(256, 128);
this.setVisible(true);
(this.index = -1);
}
getSelectedIndex$0() {
return this.index;
}
actionPerformed$1(actionEvent) {
if ((actionEvent.getSource() == this.bu_1)) {
(this.index = 1);
this.setVisible(false);
}
else {
if ((actionEvent.getSource() == this.bu_2)) {
(this.index = 2);
this.tf_1.setText("cancel");
this.setVisible(false);
}
}
}
windowOpened$1(windowEvent) {
}
windowClosed$1(windowEvent) {
}
windowIconified$1(windowEvent) {
}
windowDeiconified$1(windowEvent) {
}
windowActivated$1(windowEvent) {
}
windowDeactivated$1(windowEvent) {
}
windowClosing$1(windowEvent) {
(this.index = 0);
this.tf_1.setText("cancel");
this.setVisible(false);
}
}
globalThis.MessageBox = MessageBox;
