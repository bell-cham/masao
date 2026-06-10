//  プラグイン  雑魚敵  Version 0.5

//  仕掛けの設定値
//  3000  ヒノララシ  動かない
//  3001  ポッピー    動かない
//  3002  ヒノララシ  定所左右移動  左へ
//  3003  ヒノララシ  定所左右移動  右へ
//  3004  ポッピー  左右移動  壁で反転
//  3005  ヒノララシ  その場でジャンプ
//  3006  空中コイン  上下移動  上へ
//  3007  空中コイン  上下移動  下へ
//  3008  コイン  はねる
//  3009  コイン  高くはねる
//  3010  空中コイン  左右移動  壁で反転
//  3011  拡張コインを全部取ると開く扉
//  3012  左の拡張コインを全部取ると開く扉
//  3013  右の拡張コインを全部取ると開く扉
//  3014  上の拡張コインを全部取ると開く扉
//  3015  下の拡張コインを全部取ると開く扉
//  3016  メッセージが出る人面星
//  3017  メッセージが出るミレニアム人面星

var PluginZakoteki = (function(){
	//  クロージャ内変数
	var plugin_manager = null;	//  プラグインマネージャー

	//  拡張敵
	var ac_4 = 0;			//  アニメーションカウンター  0 - 3
	var ac_8 = 0;			//  アニメーションカウンター  0 - 7
	var ee_id_max = 0;		//  拡張敵ＩＤ最大値
	var ee_con = new Array();	//  状態
	var ee_x = new Array();		//  Ｘ座標
	var ee_y = new Array();		//  Ｙ座標
	var ee_pt = new Array();	//  パターン
	var ee_ptr = new Array();	//  パターン反転
	var ee_vx = new Array();	//  Ｘ方向の速度
	var ee_vy = new Array();	//  Ｙ方向の速度
	var ee_c1 = new Array();	//  汎用
	var ee_c2 = new Array();	//  汎用
	var ee_x1 = new Array();	//  基準Ｘ座標
	var ee_y1 = new Array();	//  基準Ｙ座標
	var my_stage_cc = 0;		//  ステージクリアカウンター


	//  起動時の初期化
	function initLoad(){
		//  イベントの設定
		plugin_manager.addEventListener("gamestart",PluginZakoteki.gameStartEvent);
		plugin_manager.addEventListener("game",PluginZakoteki.gameEvent);
		plugin_manager.addEventListener("putathletic",PluginZakoteki.putAthleticEvent);
	}


	//  ゲーム開始時の初期化
	function initGameStart(ap){
		//  拡張敵の初期化
		ac_4 = 0;
		ac_8 = 0;
		my_stage_cc = 0;
		ee_id_max = 0;
		for(var i = 0;i < 300;i++){
			ee_con[i] = 0;
		}
	}


	//  拡張敵  設置
	function setExtendEnemy(code,x,y,ap){
		var n;


		for(var i = 0;i < 300;i++){
			if(ee_con[i] != 0) continue;

			//  拡張敵  初期設定
			ee_x[i] = x;
			ee_y[i] = y;
			ee_pt[i] = 0;
			ee_ptr[i] = 0;

			//  種類別の設定
			switch(code){
				case 3000:	//  ヒノララシ  動かない
					ee_con[i] = 1000;
					break;
				case 3001:	//  ポッピー  動かない
					ee_con[i] = 1100;
					break;
				case 3002:	//  ヒノララシ  定所左右移動  左へ
					ee_con[i] = 1010;
					ee_vx[i] = -4;
					ee_x1[i] = x;	//  基準座標
					break;
				case 3003:	//  ヒノララシ  定所左右移動  右へ
					ee_con[i] = 1010;
					ee_vx[i] = 4;
					ee_x1[i] = x;	//  基準座標
					ee_x[i] = x-160;
					break;
				case 3004:	//  ポッピー  左右移動  壁で反転
					ee_con[i] = 1110;
					ee_vx[i] = -3;
					break;
				case 3005:	//  ヒノララシ  その場でジャンプ
					ee_con[i] = 1020;
					ee_vy[i] = 0;
					break;
				case 3006:	//  空中コイン  上下移動  上へ
					ee_con[i] = 2000;
					ee_vy[i] = -4;
					ee_y1[i] = y;	//  基準座標
					ee_y[i] = y-8;
					break;
				case 3007:	//  空中コイン  上下移動  下へ
					ee_con[i] = 2000;
					ee_vy[i] = 4;
					ee_y1[i] = y;	//  基準座標
					ee_y[i] = y-128+8;
					break;
				case 3008:	//  コイン  はねる
					ee_con[i] = 2010;
					ee_c2[i] = 0;
					ee_vy[i] = 0;
					break;
				case 3009:	//  コイン  高くはねる
					ee_con[i] = 2010;
					ee_c2[i] = 1;
					ee_vy[i] = 0;
					break;
				case 3010:	//  空中コイン  左右移動  壁で反転
					ee_con[i] = 2020;
					ee_vx[i] = -4;
					break;
				case 3011:	//  拡張コインを全部取ると開く扉
					ee_con[i] = 2100;
					ee_c1[i] = 0;
					ee_c2[i] = 0;
					ap.setMapchip(Math.floor(x/32)-1,Math.floor(y/32)-10,213);
					break;
				case 3012:	//  左の拡張コインを全部取ると開く扉
					ee_con[i] = 2100;
					ee_c1[i] = 0;
					ee_c2[i] = 1;	//  左
					ap.setMapchip(Math.floor(x/32)-1,Math.floor(y/32)-10,213);
					break;
				case 3013:	//  右の拡張コインを全部取ると開く扉
					ee_con[i] = 2100;
					ee_c1[i] = 0;
					ee_c2[i] = 2;	//  右
					ap.setMapchip(Math.floor(x/32)-1,Math.floor(y/32)-10,213);
					break;
				case 3014:	//  上の拡張コインを全部取ると開く扉
					ee_con[i] = 2100;
					ee_c1[i] = 0;
					ee_c2[i] = 3;	//  上
					ap.setMapchip(Math.floor(x/32)-1,Math.floor(y/32)-10,213);
					break;
				case 3015:	//  下の拡張コインを全部取ると開く扉
					ee_con[i] = 2100;
					ee_c1[i] = 0;
					ee_c2[i] = 4;	//  下
					ap.setMapchip(Math.floor(x/32)-1,Math.floor(y/32)-10,213);
					break;
				case 3016:	//  メッセージが出る人面星
					ee_con[i] = 2200;
					ee_c2[i] = 0;

					//  左が水
					if(ap.getMapchip(Math.floor(x/32)-2,Math.floor(y/32)-10) == 4){
						ap.setMapchip(Math.floor(x/32)-1,Math.floor(y/32)-10,4);
					}

					break;
				case 3017:	//  メッセージが出るミレニアム人面星
					ee_con[i] = 2200;
					ee_c2[i] = 1;	//  ミレニアム人面星

					//  左が水
					if(ap.getMapchip(Math.floor(x/32)-2,Math.floor(y/32)-10) == 4){
						ap.setMapchip(Math.floor(x/32)-1,Math.floor(y/32)-10,4);
					}

					break;
			}

			if(i > ee_id_max) ee_id_max = i;
			break;
		}
	}


	//  拡張敵  動かす
	function moveExtendEnemy(ap,view_x,view_y){
		var n;

		//  自分
		var my_x = ap.getMyXReal();	//  Ｘ座標
		var my_y = ap.getMyYReal();	//  Ｙ座標
		var my_fumi_f = false;		//  踏み潰しフラグ


		for(var i = 0;i <= ee_id_max;i++){
			if(ee_con[i] == 0) continue;
			switch(ee_con[i]){
				case 500:	//  潰れた  ポッピー
					ee_pt[i] = 149;
					ee_c1[i]++;
					if(ee_c1[i] >= 10){
						//  消える
						ee_con[i] = 0;
						ap.addScore(10);
					}
					break;
				case 1000:	//  ヒノララシ  動かない

					//  画面外
					if(ee_x[i]-view_x < -31  ||  ee_x[i]-view_x > 519  || 
						ee_y[i]-view_y < -31  ||  ee_y[i]-view_y > 319){
						ee_pt[i] = 0;
						break;
					}

					//  パターン
					if(ac_4 <= 1){
						ee_pt[i] = 152;
					}
					else{
						ee_pt[i] = 153;
					}

					//  自分との当たり判定
					if(my_x+31 >= ee_x[i]+4  &&  my_x <= ee_x[i]+31-4  && 
						my_y+31 >= ee_y[i]+8  &&  my_y <= ee_y[i]+31){
						ap.setMyMiss(2);
					}
					break;
				case 1010:	//  ヒノララシ  定所左右移動

					//  移動
					ee_x[i] += ee_vx[i];
					if(ee_x[i] <= ee_x1[i]-160){
						ee_x[i] = ee_x1[i]-160;
						ee_vx[i] = 4;
					}
					else if(ee_x[i] >= ee_x1[i]){
						ee_x[i] = ee_x1[i];
						ee_vx[i] = -4;
					}

					//  画面外
					if(ee_x[i]-view_x < -31  ||  ee_x[i]-view_x > 519  || 
						ee_y[i]-view_y < -31  ||  ee_y[i]-view_y > 319){
						ee_pt[i] = 0;
						break;
					}

					//  パターン
					if(ac_4 <= 1){
						ee_pt[i] = 152;
					}
					else{
						ee_pt[i] = 153;
					}
					//  パターン反転
					if(ee_vx[i] > 0){
						ee_ptr[i] = 1;
					}
					else{
						ee_ptr[i] = 0;
					}

					//  自分との当たり判定
					if(my_x+31 >= ee_x[i]+4  &&  my_x <= ee_x[i]+31-4  && 
						my_y+31 >= ee_y[i]+8  &&  my_y <= ee_y[i]+31){
						ap.setMyMiss(2);
					}
					break;
				case 1020:	//  ヒノララシ  その場でジャンプ

					//  移動
					ee_vy[i] += 1;		//  重力
					if(ee_vy[i] > 12) ee_vy[i] = 12;
					n = ee_vy[i];
					if(n < -12) n = -12;
					ee_y[i] += n;
					if(ee_vy[i] > 0){
						n = ap.getMapchip(Math.floor(ee_x[i]/32)-1,Math.floor((ee_y[i]+31)/32)-10);
						if(n >= 20){
							ee_y[i] = Math.floor((ee_y[i]+31)/32)*32-32;
							ee_vy[i] = -19;
						}
					}
					else{
						n = ap.getMapchip(Math.floor(ee_x[i]/32)-1,Math.floor(ee_y[i]/32)-10);
						if(n >= 18){
							ee_y[i] = Math.floor(ee_y[i]/32)*32+32;
							ee_vy[i] = 0;
						}
					}

					//  マップ外へ落ちる
					if(ee_y[i] >= 40*32){
						ee_con[i] = 0;
						break;
					}

					//  画面外
					if(ee_x[i]-view_x < -31  ||  ee_x[i]-view_x > 519  || 
						ee_y[i]-view_y < -31  ||  ee_y[i]-view_y > 319){
						ee_pt[i] = 0;
						break;
					}

					//  パターン
					if(ee_vy[i] < 4){
						ee_pt[i] = 153;
					}
					else{
						ee_pt[i] = 152;
					}
					if(my_x >= ee_x[i]+32){
						ee_ptr[i] = 1;
					}
					else{
						ee_ptr[i] = 0;
					}

					//  自分との当たり判定
					if(my_x+31 >= ee_x[i]+4  &&  my_x <= ee_x[i]+31-4  && 
						my_y+31 >= ee_y[i]+8  &&  my_y <= ee_y[i]+31){
						ap.setMyMiss(2);
					}
					break;
				case 1100:	//  ポッピー  動かない

					//  画面外
					if(ee_x[i]-view_x < -31  ||  ee_x[i]-view_x > 519  || 
						ee_y[i]-view_y < -31  ||  ee_y[i]-view_y > 319){
						ee_pt[i] = 0;
						break;
					}

					//  パターン
					if(ac_4 <= 1){
						ee_pt[i] = 147;
					}
					else{
						ee_pt[i] = 148;
					}

					//  自分との当たり判定
					if(my_x+31 >= ee_x[i]+4  &&  my_x <= ee_x[i]+31-4  && 
						my_y+31 >= ee_y[i]+8  &&  my_y <= ee_y[i]+31){
						if(ap.getMyVY() > 10  ||  my_fumi_f == true){
							//  自分が降下中

							//  踏み潰す
							ee_con[i] = 500;
							ee_pt[i] = 149;
							ee_c1[i] = 0;
							my_fumi_f = true;

							//  自分
							ap.setMyPress(2);
							ap.setMyYReal(ee_y[i]-12);
						}
						else{
							//  自分  死亡
							ap.setMyMiss(2);
						}
					}
					break;
				case 1110:	//  ポッピー  左右移動  壁で反転

					//  移動
					ee_x[i] += ee_vx[i];
					if(ee_vx[i] < 0){
						n = ap.getMapchip(Math.floor(ee_x[i]/32)-1,Math.floor(ee_y[i]/32)-10);
						if(n >= 18  ||  n < 0){
							ee_x[i] = Math.floor(ee_x[i]/32)*32+32;
							ee_vx[i] = 3;
							ee_ptr[i] = 1;
							n = ap.getMapchip(Math.floor(ee_x[i]/32),Math.floor(ee_y[i]/32)-10);
							if(n >= 18){
								ee_vx[i] = -3;
								ee_ptr[i] = 0;
							}
						}
					}
					else{
						n = ap.getMapchip(Math.floor((ee_x[i]+31)/32)-1,Math.floor(ee_y[i]/32)-10);
						if(n >= 18  ||  n < 0){
							ee_x[i] = Math.floor((ee_x[i]+31)/32)*32-32;
							ee_vx[i] = -3;
							ee_ptr[i] = 0;
						}
					}

					//  画面外
					if(ee_x[i]-view_x < -31  ||  ee_x[i]-view_x > 519  || 
						ee_y[i]-view_y < -31  ||  ee_y[i]-view_y > 319){
						ee_pt[i] = 0;
						break;
					}

					//  パターン
					if(ac_4 <= 1){
						ee_pt[i] = 147;
					}
					else{
						ee_pt[i] = 148;
					}

					//  自分との当たり判定
					if(my_x+31 >= ee_x[i]+4  &&  my_x <= ee_x[i]+31-4  && 
						my_y+31 >= ee_y[i]+8  &&  my_y <= ee_y[i]+31){
						if(ap.getMyVY() > 10  ||  my_fumi_f == true){
							//  自分が降下中

							//  踏み潰す
							ee_con[i] = 500;
							ee_pt[i] = 149;
							ee_c1[i] = 0;
							my_fumi_f = true;

							//  自分
							ap.setMyPress(2);
							ap.setMyYReal(ee_y[i]-12);
						}
						else{
							//  自分  死亡
							ap.setMyMiss(2);
						}
					}
					break;
				case 2000:	//  空中コイン  上下移動

					//  移動
					n = ee_vy[i];		//  速度
					if(ee_y[i] < ee_y1[i]-128+8  ||  ee_y[i] > ee_y1[i]-8){
						//  減速
						n /= 2;
					}
					if(n < 0){
						ee_y[i] += n;
						if(ee_y[i] <= ee_y1[i]-128){
							ee_y[i] = ee_y1[i]-128;
							ee_vy[i] = 4;
						}
					}
					else{
						ee_y[i] += n;
						if(ee_y[i] >= ee_y1[i]){
							ee_y[i] = ee_y1[i];
							ee_vy[i] = -4;
						}
					}

					//  画面外
					if(ee_x[i]-view_x < -31  ||  ee_x[i]-view_x > 519  || 
						ee_y[i]-view_y < -31  ||  ee_y[i]-view_y > 319){
						ee_pt[i] = 0;
						break;
					}

					//  パターン
					ee_pt[i] = 90 + Math.floor(ac_8/2);

					//  自分との当たり判定
					if(my_x+15 >= ee_x[i]  &&  my_x+15 <= ee_x[i]+31  && 
						my_y+15 >= ee_y[i]  &&  my_y+15 <= ee_y[i]+31){
						//  消える
						ee_con[i] = 0;
						ap.addScore(5);

						ap.playSound(7);	//  効果音  コイン
					}
					break;
				case 2010:	//  コイン  はねる

					//  移動
					ee_vy[i] += 1;		//  重力
					if(ee_vy[i] > 10) ee_vy[i] = 10;
					n = ee_vy[i];
					if(n < -10) n = -10;
					ee_y[i] += n;
					if(ee_vy[i] > 0){
						n = ap.getMapchip(Math.floor(ee_x[i]/32)-1,Math.floor((ee_y[i]+31)/32)-10);
						if(n >= 20){
							ee_y[i] = Math.floor((ee_y[i]+31)/32)*32-32;
							if(ee_c2[i] == 1){
								ee_vy[i] = -24;
							}
							else{
								ee_vy[i] = -15;
							}
						}
					}
					else{
						n = ap.getMapchip(Math.floor(ee_x[i]/32)-1,Math.floor(ee_y[i]/32)-10);
						if(n >= 18){
							ee_y[i] = Math.floor(ee_y[i]/32)*32+32;
							ee_vy[i] = 0;
						}
					}

					//  マップ外へ落ちる
					if(ee_y[i] >= 40*32){
						ee_con[i] = 0;
						break;
					}

					//  画面外
					if(ee_x[i]-view_x < -31  ||  ee_x[i]-view_x > 519  || 
						ee_y[i]-view_y < -31  ||  ee_y[i]-view_y > 319){
						ee_pt[i] = 0;
						break;
					}

					//  パターン
					ee_pt[i] = 90 + Math.floor(ac_8/2);

					//  自分との当たり判定
					if(my_x+15 >= ee_x[i]  &&  my_x+15 <= ee_x[i]+31  && 
						my_y+15 >= ee_y[i]  &&  my_y+15 <= ee_y[i]+31){
						//  消える
						ee_con[i] = 0;
						ap.addScore(5);

						ap.playSound(7);	//  効果音  コイン
					}
					break;
				case 2020:	//  空中コイン  左右移動  壁で反転

					//  移動
					ee_x[i] += ee_vx[i];
					if(ee_vx[i] < 0){
						n = ap.getMapchip(Math.floor(ee_x[i]/32)-1,Math.floor(ee_y[i]/32)-10);
						if(n >= 18  ||  n < 0){
							ee_x[i] = Math.floor(ee_x[i]/32)*32+32;
							ee_vx[i] = 4;
							ee_ptr[i] = 1;
						}
					}
					else{
						n = ap.getMapchip(Math.floor((ee_x[i]+31)/32)-1,Math.floor(ee_y[i]/32)-10);
						if(n >= 18  ||  n < 0){
							ee_x[i] = Math.floor((ee_x[i]+31)/32)*32-32;
							ee_vx[i] = -4;
							ee_ptr[i] = 0;
						}
					}

					//  画面外
					if(ee_x[i]-view_x < -31  ||  ee_x[i]-view_x > 519  || 
						ee_y[i]-view_y < -31  ||  ee_y[i]-view_y > 319){
						ee_pt[i] = 0;
						break;
					}

					//  パターン
					ee_pt[i] = 90 + Math.floor(ac_8/2);

					//  自分との当たり判定
					if(my_x+15 >= ee_x[i]  &&  my_x+15 <= ee_x[i]+31  && 
						my_y+15 >= ee_y[i]  &&  my_y+15 <= ee_y[i]+31){
						//  消える
						ee_con[i] = 0;
						ap.addScore(5);

						ap.playSound(7);	//  効果音  コイン
					}
					break;
				case 2100:	//  拡張コインを全部取ると開く扉
					if(ee_c1[i] < 100){
						//  残っている拡張コイン
						n = 0;
						for(var i2 = 0;i2 <= ee_id_max;i2++){
							if(ee_con[i2] >= 2000  &&  ee_con[i2] < 2100){
								//  拡張コイン
								if(ee_c2[i] == 1  &&  ee_x[i] <= ee_x[i2]) continue;
								else if(ee_c2[i] == 2  &&  ee_x[i] >= ee_x[i2]) continue;
								else if(ee_c2[i] == 3  &&  ee_y[i] <= ee_y[i2]) continue;
								else if(ee_c2[i] == 4  &&  ee_y[i] >= ee_y[i2]) continue;

								n++;
								break;
							}
						}
						if(n == 0){
							//  扉が開く
							if(ee_x[i] >= view_x  &&  ee_x[i] < view_x+512-32 
								&&  ee_y[i] >= view_y  &&  ee_y[i] < view_y+320-32){
								ee_c1[i] = 100;
							}
						}
					}
					else{
						//  扉が開くアニメーション
						ee_c1[i]++;
						n = ee_c1[i]-100;
						if(n == 4){
							ap.setMapchip(Math.floor(ee_x[i]/32)-1,Math.floor(ee_y[i]/32)-10,0);
							ap.playSound(8);	//  効果音  アイテムを取る
						}
						if(n > 4){
							if(n % 4 >= 2){
								ee_pt[i] = 213;
							}
							else{
								ee_pt[i] = 0;
							}
						}
						if(n >= 24) ee_con[i] = 0;
					}
					break;
				case 2200:	//  メッセージが出る人面星
					//  画面外
					if(ee_x[i]-view_x < -31  ||  ee_x[i]-view_x > 519  || 
						ee_y[i]-view_y < -31  ||  ee_y[i]-view_y > 319){
						ee_pt[i] = 0;
						break;
					}

					//  パターン
					if(ee_c2[i] == 1){
						//  ミレニアム人面星
						if(ac_4 > 2){
							ee_pt[i] = 99;
						}
						else{
							ee_pt[i] = 98;
						}
					}
					else{
						//  人面星
						if(ac_4 > 2){
							ee_pt[i] = 95;
						}
						else{
							ee_pt[i] = 94;
						}
					}

					//  自分との当たり判定
					if(my_x+15 >= ee_x[i]  &&  my_x+15 <= ee_x[i]+31  && 
						my_y+15 >= ee_y[i]  &&  my_y+15 <= ee_y[i]+31){
						//  消える
						ee_con[i] = 0;
						my_stage_cc = 1;
						if(ee_c2[i] == 1){
							//  ミレニアム人面星
							ap.addScore(1000);
						}
						else{
							//  人面星
							ap.addScore(100);
						}

						ap.setStageClear();	//  ステージクリア
					}
					break;
			}
		}
	}


	//  拡張敵  描画
	function drawExtendEnemy(os_g,ap,view_x,view_y){
		for(var i = 0;i <= ee_id_max;i++){
			if(ee_con[i] == 0  ||  ee_pt[i] == 0) continue;
			ap.drawPattern(ee_x[i]-view_x,ee_y[i]-view_y,ee_pt[i],ee_ptr[i]);
		}
	}


	//  ステージクリアのメッセージを表示する
	function drawClearString(os_g,ap){
		var ctx = os_g._ctx;
		var str1 = "STAGE CLEAR!";


		ctx.fillStyle = "rgb(255,255,32)";
		ctx.font = "italic bold 48px Arial";

		ctx.textAlign = "start";
		ctx.textBaseline = "alphabetic";

		ctx.fillStyle = "rgb(64,64,0)";
		ctx.fillText(str1,80-1,80);
		ctx.fillText(str1,80+1,80);
		ctx.fillText(str1,80,80-1);
		ctx.fillText(str1,80,80+1);

		ctx.fillStyle = "rgb(255,255,32)";
		ctx.fillText(str1,80,80);

		ctx.fillStyle = "rgb(255,255,255)";
	}


	//  公開メソッド
	return {
		setPluginManager: function(pm){
			//  プラグインマネージャーをセット
			plugin_manager = pm;
			//  拡張仕掛けを使う
			plugin_manager.setExtendAthleticEnable(true);
			//  起動時に呼び出す関数
			plugin_manager.addEventListener("onload",PluginZakoteki.onLoadEvent);
		},
		onLoadEvent: function(os_g,ap){
			//  起動

			//  起動時の初期化
			initLoad();
		},
		gameStartEvent: function(os_g,ap,stage){
			//  ゲーム開始

			//  ゲーム開始時の初期化
			initGameStart(ap);
		},
		gameEvent: function(os_g,ap,view_x,view_y){
			//  ゲーム中

			//  カウンター
			ac_4++;
			if(ac_4 > 3) ac_4 = 0;
			ac_8++;
			if(ac_8 > 7) ac_8 = 0;

			//  拡張敵  動かす
			moveExtendEnemy(ap,view_x,view_y);

			//  拡張敵  描画
			drawExtendEnemy(os_g,ap,view_x,view_y);

			//  ステージクリアーのメッセージ
			if(my_stage_cc > 0){
				drawClearString(os_g,ap)
			}
		},
		putAthleticEvent: function(code,chip_x,chip_y,ap){
			//  拡張仕掛け設置

			//  ピクセル座標
			var px = (chip_x+1)*32;
			var py = (chip_y+10)*32;

			//  拡張敵を設置する
			setExtendEnemy(code,px,py,ap);
		}
	};
})();
