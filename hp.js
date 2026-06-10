<script type="text/javascript">

var userJS = (function() {

// グローバル変数
// 全ての関数から使える変数です
var Applet1;		// メソッドが入っているオブジェクト
var init_f = 0;		// 起動時の初期化をしたかどうかのフラグ

var boss_chip;		// ボスのチップ画像
var boss_img = [];	// ボスの画像の配列
var img;
var base_y = 0;		// 地面の高さ

var boss = {};	// ボスのオブジェクト
boss.x = 0;
boss.y = 0;
boss.vx = 0;
boss.count = 0;	// カウンター
boss.con = 0;	// 状態
boss.shot_c = 0;
boss.ex_c = 0;




// userInitJS
// ロード完了時に一度だけ呼び出される
function userInitJS() {

	// 画像をロード
	boss_chip = Applet1.newChipImage('seinakakusei.png', 128, 96, 4, 1);
img = Applet1.newImageOnLoad("cutin/seinacutin.png");
}


// userGameStartJS
// ゲームスタート時に呼び出される
function userGameStartJS() {
	var i;

	// ボスの画像の配列を作る
	// 14 = 画像の枚数
	for (i = 0; i < 4; i++) {
		boss_img[i] = Applet1.getChipImage(boss_chip, i);
	}
	

	// ボスの初期化
	boss.x = (17 + 1) * 32;
	boss.y = (24 + 10) * 32;
	boss.count = 0;
	boss.con = 100;
	boss.shot_c = 0;
	boss.ex_c = 0;
	boss.hp = 120;
	cutin_sc = 331;
	base_y = boss.y;	// 地面の高さ
/*    Applet1.setMyHP(10);*/
	// 喋らせる
	Applet1.showMessage(11, "セイナ", "・・・", "0", "0");
       Applet1.setOffscreenColor(255,255,255,255);
}


// userGameJS
// ゲーム中のフレーム毎に呼び出される
function userGameJS(Offscreen_g, view_x, view_y) {

	// 操作キャラの情報を取得
	var my_x = Applet1.getMyXReal();
	var my_y = Applet1.getMyYReal();
	var my_vx = Applet1.getMyVX();
	var my_vy = Applet1.getMyVY();
	
	var x = 0;				// 二次関数
	var chip_code = 1;		// 表示する画像
	
	// ボスを動かす
	boss.count ++;
	
	// 状態別の動作
	// 待機
	if (boss.con == 50) {
		chip_code = 3;
		
		if (boss.count > 60) {
			Applet1.setStageClear();
		}
	}
	// 待機
	else if (boss.con == 100) {
		boss.vx = 0;
		
		// 10フレーム待ったら
		if (boss.count > 10) {
			// 移動
			bossMove();
			
			// せりふ
			jumpLine();
		}
	}
	// ジャンプ中
	else if (boss.con == 110) {
		x = boss.count;
		
		chip_code = 3;

		// 着地
		if (boss.count >= 4) {
			// 座標と速度をリセット
			boss.vx = 0;
			// 立つ
			boss.con = 100;
			bossAttack();
		}
	}
	
	else if (boss.con == 101) {
		x = boss.count;
		
		chip_code = 3;

		// 着地
		if (boss.count >= 4) {
			// 座標と速度をリセット
			boss.vx = 0;
			// 立つ
			boss.con = 100;
			bossAttack();
		}
	}
	else if (boss.con == 102) {
		x = boss.count;
		
		// x^2 - 32x の二次関数
		boss.y = (base_y + (x * x - 8 * x) * 2)^0;
		
		chip_code = 3;

		// 着地
		if (boss.count >= 2) {
			// 座標と速度をリセット
			boss.y = base_y;
			boss.vx = 0;
			
			// 立つ
			boss.con = 101;
			boss.count = 0;
			
			// 攻撃
			bossAttack();
		}
	}
	// 後退
	else if (boss.con == 103) {
		chip_code = 3;

		// 着地
		if (boss.count >= 2) {
			// 座標と速度をリセット
			boss.vx = 0;
			// 立つ
			boss.con = 100;
			bossAttack();
		}
	}
	
		else if (boss.con == 104) {
		chip_code = 3;

		// 着地
		if (boss.count >= 14) {
			// 座標と速度をリセット
			boss.vx = 0;
			// 立つ
			boss.con = 100;
			bossAttack();
		}
	}
	// バブル光線
	else if (boss.con == 200) {
		// 着地
		if (boss.count == 1) {
			chip_code = 3;
			Applet1.showMessage(11, "ショックカノン", "0", "0", "0");
		}
		// それ以外
		else {
			chip_code = 3;
		}

		// 発射する
		if (boss.count == 5) {
			Applet1.setEnemy(Math.floor((boss.x + 56)/32-1), Math.floor((boss.y + 32)/32-10), 69);
			Applet1.setEnemy(Math.floor((boss.x + 56)/32-1), Math.floor((boss.y + 32)/32-10), 70);
		}
		
		// 攻撃終了
		if (boss.count > 10) {
			boss.con = 100;
			boss.count = 0;
		}
	}
	// 電撃
	else if (boss.con == 201) {
		// 着地
		if (boss.count == 1) {
			chip_code = 3;
			Applet1.showMessage(11, "バニッシュ", "0", "0", "0");
		}
		// それ以外
		else {
			chip_code = 3;
		}

		// 発射する
		if (boss.count >= 5 && boss.count < 8) {
			Applet1.setEnemy(Math.floor((boss.x + 56)/32-1), Math.floor((boss.y + 32)/32-10), 27);
			Applet1.setEnemy(Math.floor((boss.x + 56)/32-1), Math.floor((boss.y + 32)/32-10), 29);
			Applet1.setEnemy(Math.floor((boss.x + 56)/32-1), Math.floor((boss.y + 32)/32-10), 77);
			Applet1.setEnemy(Math.floor((boss.x + 56)/32-1), Math.floor((boss.y + 32)/32-10), 79);
		}
		
		// 攻撃終了
		if (boss.count > 10) {
			boss.con = 100;
			boss.count = 0;
		}
	}
	// 大技１、ジャンプ
	else if (boss.con == 210) {
		/*boss.y -= 20;*/
		chip_code = 3;

		if (boss.count == 1) {
			Applet1.showMessage(11, "セイナ", "・・・ターゲット", "ロックオン", "0");
		}

		if (boss.count > 10) {
			boss.con = 211;
			boss.count = 0;
		}
	}
	// 大技１、攻撃
	else if (boss.con == 211) {
		chip_code = 3;


		if (boss.count == 1) {
			Applet1.showMessage(21, "エレクトリック・ロスティーナ", "0", "0", "0");
		}
		if (boss.count == 6) {
			Applet1.showMessage(31, "エレクトリック・ロスティーナ　パージ", "0", "0", "0");
		}
		if (boss.count == 20) {
			Applet1.setEnemy(Math.floor((boss.x + 64 )/32-1), Math.floor((boss.y + 128)/32-10), 16);
			Applet1.setEnemy(Math.floor((boss.x + 64 - 192)/32-1), Math.floor(boss.y+ 32/32-10), 16);
			Applet1.setEnemy(Math.floor((boss.x + 64 + 192)/32-1), Math.floor(boss.y+ 32/32-10), 16);
		}

		if (boss.count == 21) {
			Applet1.setEnemy(Math.floor((boss.x + 16 )/32-1), Math.floor((boss.y - 128)/32-10), 16);
			Applet1.setEnemy(Math.floor((boss.x + 18 - 192)/32-1), Math.floor((boss.y - 32)/32-10), 16);
			Applet1.setEnemy(Math.floor((boss.x + 20 + 192)/32-1), Math.floor((boss.y + 32)/32-10), 16);
		}

		if (boss.count == 22) {
			Applet1.setEnemy(Math.floor((boss.x + 16 )/32-1), Math.floor((boss.y)/32-10), 16);
			Applet1.setEnemy(Math.floor((boss.x + 18 - 192)/32-1), Math.floor((boss.y + 128)/32-10), 16);
			Applet1.setEnemy(Math.floor((boss.x + 20 + 192)/32-1), Math.floor((boss.y + + 64)/32-10), 16);
		}
		if (boss.count == 23) {
			Applet1.setEnemy(Math.floor((boss.x + 20 )/32-1), Math.floor((boss.y)/32-10), 16);
			Applet1.setEnemy(Math.floor((boss.x + 22 - 192)/32-1), Math.floor((boss.y + 64)/32-10), 16);
			Applet1.setEnemy(Math.floor((boss.x + 24 + 192)/32-1), Math.floor((boss.y + 128)/32-10), 16);
		}
		if (boss.count == 24) {
			Applet1.setEnemy(Math.floor((boss.x + 68 )/32-1), Math.floor((boss.y + 128)/32-10), 16);
			Applet1.setEnemy(Math.floor((boss.x + 69 - 192)/32-1), Math.floor((boss.y - 128)/32-10), 16);
			Applet1.setEnemy(Math.floor((boss.x + 67 + 192)/32-1), Math.floor((boss.y )/32-10), 16);
		}
		if (boss.count > 30) {
			boss.con = 110;
			boss.count = 16;
			cutin_sc = 331;
		}
	}
	// 大技２
	else if (boss.con == 220) {
		chip_code = 3;
		if (boss.count == 1) {
			Applet1.showMessage(11, "セイナ", "繋げ","0", "0");
		}
		if (boss.count == 15) {
			Applet1.showMessage(31, "エレクトリック・ロスティーナ　 レクトライン", "0", "0", "0");
		}

		if (boss.count == 20) {
			Applet1.setEnemy(Math.floor((boss.x + 16 - 32)/32-1), Math.floor((boss.y + 32)/32-10), 82);
			Applet1.setEnemy(Math.floor((boss.x + 16 + 32)/32-1), Math.floor((boss.y + 32)/32+10), 82);
		}

		if (boss.count == 22) {
			Applet1.setEnemy(Math.floor((boss.x + 16 - 64)/32-1), Math.floor((boss.y + 32)/32-10), 82);
			Applet1.setEnemy(Math.floor((boss.x + 16 + 64)/32-1), Math.floor((boss.y + 32)/32+10), 82);
		}

		if (boss.count == 24) {
			Applet1.setEnemy(Math.floor((boss.x + 16 - 96)/32-1), Math.floor((boss.y + 32)/32-10), 82);
			Applet1.setEnemy(Math.floor((boss.x + 16 + 96)/32-1), Math.floor((boss.y + 32)/32+10), 82);
		}
		if (boss.count == 26) {
			Applet1.setEnemy(Math.floor((boss.x + 16 - 128)/32-1), Math.floor((boss.y + 32)/32-10), 82);
			Applet1.setEnemy(Math.floor((boss.x + 16 + 128)/32-1), Math.floor((boss.y + 32)/32+10), 82);
		}
		if (boss.count == 28) {
			Applet1.setEnemy(Math.floor((boss.x + 16 - 164)/32-1), Math.floor((boss.y + 32)/32-10), 82);
			Applet1.setEnemy(Math.floor((boss.x + 16 + 164)/32-1), Math.floor((boss.y + 32)/32+10), 82);
		}
		if (boss.count > 29) {
			boss.con = 100;
			boss.count = 0;
			cutin_sc = 331;
		}
	}

	// 標準の動作
	// 座標に速度を加算
	boss.x += boss.vx;
	
	// ステージ外から出ないように
	if (boss.x < (1 + 1) * 32 + 32 || boss.x + 32 > (35 + 1) * 32) {
		boss.vx *= -1;
	}
	
	// プレイヤーより左にいるなら右向きの画像に変更
	if (boss.x < my_x) {
		chip_code --;
	}
	
	// ファイアボールとの当たり判定
	boss.hp -= Applet1.attackFire(boss.x, boss.y, 128, 96);
	
	// HPが0になった
	if (boss.hp <= 0) {
		boss.hp = 0;
		
		if (boss.con != 50) {
			boss.con = 50;
			boss.count = 0;
			Applet1.showMessage(41, "セイナ", "っ・・・！", "0", "0");
		}
	}
	
	// ボスを表示
	Offscreen_g.drawImage(boss_img[chip_code], boss.x - view_x, boss.y - view_y);

	// ゲージを表示
	Applet1.showGauge(((boss.hp / 120) * 200)^0, "セイナ");
	if (boss.con == 211 && (boss.count < 20)||boss.con == 220 && (boss.count < 20)) {
cutin_sc--;
if(cutin_sc==330){	Applet1.playSound(7);}
if(cutin_sc <= 329 && cutin_sc >= 300){
if(cutin_sc == 329 || cutin_sc == 300) {Applet1.drawImageAlphaComposite(img,0,0,0);}
else if(cutin_sc <= 328 && cutin_sc >= 320) {Applet1.drawImageAlphaComposite(img,0,0,(328-cutin_sc)*Math.floor(255/8));}
else if(cutin_sc==319) {Applet1.drawImageAlphaComposite(img,0,1,(-310+cutin_sc)*Math.floor(255/8));}
else if(cutin_sc==318) {Applet1.drawImageAlphaComposite(img,0,2,(-310+cutin_sc)*Math.floor(255/8));}
else if(cutin_sc==317) {Applet1.drawImageAlphaComposite(img,0,3,(-310+cutin_sc)*Math.floor(255/8));}
else if(cutin_sc==316) {Applet1.drawImageAlphaComposite(img,0,4,(-310+cutin_sc)*Math.floor(255/8));}
else if(cutin_sc==315) {Applet1.drawImageAlphaComposite(img,0,5,(-310+cutin_sc)*Math.floor(255/8));}
else if(cutin_sc <= 314 && cutin_sc >= 312){Applet1.drawImageAlphaComposite(img,0,6,(-310+cutin_sc)*Math.floor(255/8));}
}
}
}

// junpLine
// ジャンプしたときのセリフ
function jumpLine() {

	var line = jump_line[(Math.random() * jump_line.length)^0];

	Applet1.showMessage(11, "セイナ", line, "0", "0");

}


// bossAttack
// ボスの行動回数に応じて適切な攻撃をさせる
function bossAttack() {

	if (boss.shot_c == 0) {
		boss.ex_c ++;
	}

	boss.shot_c ++;

	if (boss.shot_c == 1 ) {
		// バブル光線
		boss.con = 200;
	}
	else if (boss.shot_c == 2|| boss.shot_c == 3) {
		// 電撃
		boss.con = 201;

		if (boss.hp > 15 && boss.ex_c != 3) {
			boss.shot_c = 0;
		}
	}
	else if (boss.shot_c == 4) {
		// 大技
		if (Math.abs(boss.x - Applet1.getMyXReal()) > 160) {
			boss.con = 210;
		}
		else {
			boss.con = 220;
		}
		
		boss.ex_c = 0;
		boss.shot_c = 0;
	}
	
	boss.count = 0;
}

// bossAttack
// ボスにランダムでジャンプ・後退などの動きをさせる
function bossMove() {
	var my_x = Applet1.getMyXReal();

	// 一定確率で後退
	if (Math.random()<0.3) {
		boss.con = 103;

		if (boss.x > my_x) {
			boss.vx = 2;
		}
		else {
			boss.vx = -2;
		}
	
	}
		else if (Math.random()<0.6) {
		boss.con = 104;

		if (boss.x > my_x) {
			boss.vx = -2;
		}
		else {
			boss.vx = 2;
		}
		}
	
	// 基本的にはジャンプ
	else {
		boss.con = 110;

		if (boss.x > my_x) {
			boss.vx = -4;
		}
		else {
			boss.vx = 4;
		}
	}

	boss.count = 0;
}


// 正男に渡す関数
// 以下変更不要
return function(g, mode, view_x, view_y, ap) {
	// 初期化
	if (init_f == 0) {
		init_f = 1;
		Applet1 = ap;
		userInitJS();
	}

	// ゲーム中の動作
	if (mode >= 100 && mode < 200) {
		// ゲーム開始
		if (ap.getJSMes() >= 1) {
			ap.setJSMes(0);
			userGameStartJS();
			return;
		}

		userGameJS(g, view_x, view_y);
	}
};


})();
</script>