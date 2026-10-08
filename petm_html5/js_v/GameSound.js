// Direct port of GameSound from petm_c.zip. Original method overloads use $arity.
class GameSound {
midi_data = J.array([19], null);
mute_f = false;
midi_f = false;
midi_kyoku = (-(1) | 0);
ap = null;
constructor(applet) {
(this.ap = applet);
(this.mute_f = false);
(this.midi_f = false);
}
loadMidi$1(n) {
for (var i = 0; (i < 19); J.inc(()=>i, v=>i=v, 1, false, "int")) {
(this.midi_data[0] = null);
}
(this.midi_f = true);
(this.midi_kyoku = (-(1) | 0));
(this.midi_data[0] = this.ap.getAudioClip(this.ap.getDocumentBase(), "kt_mothership_s.mid"));
(this.midi_data[1] = this.ap.getAudioClip(this.ap.getDocumentBase(), "kuchibue.mid"));
(this.midi_data[4] = this.ap.getAudioClip(this.ap.getDocumentBase(), "kt_battle3_s.mid"));
if ((n == 2)) {
(this.midi_data[2] = this.ap.getAudioClip(this.ap.getDocumentBase(), "kitten.mid"));
(this.midi_data[8] = this.ap.getAudioClip(this.ap.getDocumentBase(), "kt_enemyphase_s.mid"));
(this.midi_data[9] = this.ap.getAudioClip(this.ap.getDocumentBase(), "running.mid"));
(this.midi_data[10] = this.ap.getAudioClip(this.ap.getDocumentBase(), "kt_gunsling_s.mid"));
}
else {
if ((n == 3)) {
(this.midi_data[3] = this.ap.getAudioClip(this.ap.getDocumentBase(), "garia.mid"));
(this.midi_data[11] = this.ap.getAudioClip(this.ap.getDocumentBase(), "ovreneli.mid"));
(this.midi_data[12] = this.ap.getAudioClip(this.ap.getDocumentBase(), "kt_afterrest_s.mid"));
(this.midi_data[13] = this.midi_data[12]);
(this.midi_data[15] = this.ap.getAudioClip(this.ap.getDocumentBase(), "newworld1.mid"));
(this.midi_data[16] = this.ap.getAudioClip(this.ap.getDocumentBase(), "kt_ast_s.mid"));
(this.midi_data[17] = this.midi_data[16]);
(this.midi_data[18] = this.ap.getAudioClip(this.ap.getDocumentBase(), "kt_bossbattle2_s.mid"));
}
else {
(this.midi_data[2] = this.ap.getAudioClip(this.ap.getDocumentBase(), "kitten.mid"));
(this.midi_data[5] = this.ap.getAudioClip(this.ap.getDocumentBase(), "prairie.mid"));
(this.midi_data[6] = this.ap.getAudioClip(this.ap.getDocumentBase(), "kt_bystander_s.mid"));
(this.midi_data[7] = this.ap.getAudioClip(this.ap.getDocumentBase(), "moldau.mid"));
}
}
}
playMidi$1(n) {
if (this.mute_f) {
return;
}
if ((n == this.midi_kyoku)) {
return;
}
if (((this.midi_kyoku >= 0) && (this.midi_data[this.midi_kyoku] != null))) {
this.midi_data[this.midi_kyoku].stop();
}
(this.midi_kyoku = n);
if (((n >= 0) && (this.midi_data[n] != null))) {
this.midi_data[n].play();
}
}
playMidiLoop$1(n) {
if (this.mute_f) {
return;
}
if ((n == this.midi_kyoku)) {
return;
}
if (((this.midi_kyoku >= 0) && (this.midi_data[this.midi_kyoku] != null))) {
this.midi_data[this.midi_kyoku].stop();
}
(this.midi_kyoku = n);
if (((n >= 0) && (this.midi_data[n] != null))) {
this.midi_data[n].loop();
}
}
}
globalThis.GameSound = GameSound;
