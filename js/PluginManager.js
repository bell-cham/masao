//  ＪＳまさお  プラグインマネージャー  Version 0.5
var PluginManager = (function(){
	//  クロージャ内変数
	var init_load_f = false;			//  起動時の初期化フラグ

	//  ハイスコアイベント
	var eh_highscore = null;			//  イベントハンドラー
	var highscore_send = -1;			//  送ったハイスコア

	//  イベントハンドラー
	var eh_onload = new Array();
	var eh_title = new Array();
	var eh_gamestart = new Array();
	var eh_game = new Array();
	var eh_putathletic = new Array();
	var eh_onload_count = 0;
	var eh_title_count = 0;
	var eh_gamestart_count = 0;
	var eh_game_count = 0;
	var eh_putathletic_count = 0;

	//  拡張仕掛け
	var extend_athletic_enable = false;		//  マップの文字列で設置
	var param_map = {};				//  param       マップ用
	var param_name_map = new Array;			//  param name  マップ用
	var param_name_map_count = 0;			//  param name  マップ用の数
	var athletic_char_count = 0;			//  仕掛けの文字の数
	var athletic_char = new Array;			//  仕掛けの文字
	var athletic_config = new Array;		//  仕掛けの設定値
	var param_name_athletic = new Array;		//  param name  仕掛け用
	var stage_max = 1;				//  ステージ数
	var stage_number = 1;				//  ステージ番号
	var stage_print_f = false;			//  ステージ番号表示の有無
	var stage_print_time = 28;			//  ステージ番号の表示時間
	var stage_print_c = 0;				//  ステージ番号のカウンター
	var init_wm_f = false;				//  地図画面での初期化フラグ


	//  拡張仕掛けを初期化
	initExtendAthletic();


	//  起動
	function userOnLoad(os_g,ap){
		//  イベント関数を呼び出す
		if(eh_onload_count > 0){
			for(var i = 0;i < eh_onload_count;i++){
				eh_onload[i](os_g,ap);
			}
		}

		//  拡張仕掛け  初期化
		if(extend_athletic_enable){
			//initExtendAthletic();		//  拡張仕掛けを初期化
			readParam(ap);			//  ＪＳまさおから param を読み込む
			deleteAthleticChar(ap);		//  ＪＳまさおから 設定値 1000 以上の仕掛けの文字を削除
		}
	}


	//  タイトル画面
	function userTitle(os_g,ap){
		//  イベント関数を呼び出す
		if(eh_title_count > 0){
			for(var i = 0;i < eh_title_count;i++){
				eh_title[i](os_g,ap);
			}
		}
	}


	//  ゲーム開始
	function userGameStart(os_g,ap,mode) {
		//  ステージ番号
		stage_number = mode-100;
		if(stage_number < 1) stage_number = 1;
		else if(stage_number > 4) stage_number = 4;
		init_wm_f = false;

		//  イベント関数を呼び出す
		if(eh_gamestart_count > 0){
			for(var i = 0;i < eh_gamestart_count;i++){
				eh_gamestart[i](os_g,ap,stage_number);
			}
		}

		if(stage_print_f){
			//  ステージ番号表示あり
			stage_print_c = 0;
		}
		else{
			//  ステージ番号表示なし

			//  拡張仕掛け  設置
			if(extend_athletic_enable){
				makeStageAthletic(ap,stage_number);
			}
		}
	}


	//  ゲーム中
	function userGame(os_g,ap,view_x,view_y) {
		if(stage_print_f){
			//  ステージ番号表示あり
			if(stage_print_c < stage_print_time+2){
				stage_print_c++;
				if(stage_print_c >= stage_print_time+2){
					//  拡張仕掛け  設置
					if(extend_athletic_enable){
						makeStageAthletic(ap,stage_number);
					}
				}
			}
		}

		//  イベント関数を呼び出す
		if(eh_game_count > 0){
			for(var i = 0;i < eh_game_count;i++){
				eh_game[i](os_g,ap,view_x,view_y);
			}
		}
	}


	//  拡張仕掛けを初期化
	function initExtendAthletic(){
		//  仕掛けの文字の数
		athletic_char_count = 12;

		//  仕掛け用 param name
		param_name_athletic[0] = "ugokuyuka1_type";	//  マップ上の文字 K
		param_name_athletic[1] = "ugokuyuka2_type";	//  マップ上の文字 L
		param_name_athletic[2] = "ugokuyuka3_type";	//  マップ上の文字 M
		param_name_athletic[3] = "dossunsun_type";	//  マップ上の文字 N
		param_name_athletic[4] = "firebar1_type";	//  マップ上の文字 U
		param_name_athletic[5] = "firebar2_type";	//  マップ上の文字 V
		param_name_athletic[6] = "coin1_type";		//  マップ上の文字 k
		param_name_athletic[7] = "coin3_type";		//  マップ上の文字 l
		param_name_athletic[8] = "dokan1_type";		//  マップ上の文字 u
		param_name_athletic[9] = "dokan2_type";		//  マップ上の文字 v
		param_name_athletic[10] = "dokan3_type";	//  マップ上の文字 w
		param_name_athletic[11] = "dokan4_type";	//  マップ上の文字 x

		//  仕掛けの文字
		athletic_char[0] = "K";
		athletic_char[1] = "L";
		athletic_char[2] = "M";
		athletic_char[3] = "N";
		athletic_char[4] = "U";
		athletic_char[5] = "V";
		athletic_char[6] = "k";
		athletic_char[7] = "l";
		athletic_char[8] = "u";
		athletic_char[9] = "v";
		athletic_char[10] ="w";
		athletic_char[11] ="x";

		//  仕掛けのデフォルト設定値
		for(var i = 0;i < athletic_char_count;i++){
			athletic_config[i] = 1;
		}
	}


	//  ＪＳまさおから param を読み込む
	function readParam(ap){
		var s_str,name_str;


		//  ステージ数
		stage_max = myParseInt(ap.getParamValue("stage_max"));
		if(stage_max < 1) stage_max = 1;
		else if(stage_max > 4) stage_max = 4;
		if(stage_max > 1){
			stage_print_f = true;
		}
		else{
			stage_print_f = false;
			if(myParseInt(ap.getParamValue("jibun_left_shoki")) > 1){
				stage_print_f = true;
			}
		}
		if(myParseInt(ap.getParamValue("stage_select")) == 2){
			stage_max = 4;
			stage_print_f = true;
			stage_print_time = 8;
		}
		ap.setModeWait(2,stage_print_time);

		//  マップデーター用 param name
		param_name_map_count = 0;
		for(var is = 1;is <= stage_max;is++){
			if(is == 2){
				s_str = "-s";
			}
			else if(is == 3){
				s_str = "-t";
			}
			else if(is == 4){
				s_str = "-f";
			}
			else{
				s_str = "";
			}
			for(var ib = 0;ib <= 2;ib++){
				name_str = "map" + ib + "-";
				for(var iy = 0;iy <= 29;iy++){
					param_name_map[param_name_map_count] = name_str + iy + s_str;
					param_map[param_name_map[param_name_map_count]] = "";
					param_name_map_count++;
				}
			}
		}

		//  ＪＳまさおから param を読み込む
		for(var i = 0;i < param_name_map_count;i++){
			param_map[param_name_map[i]] = ap.getParamValue(param_name_map[i]);
		}

		//  仕掛けの設定値を読み込む
		for(var i = 0;i < 12;i++){
			athletic_config[i] = myParseInt(ap.getParamValue(param_name_athletic[i]));
			if(athletic_config[i] < 1) athletic_config[i] = 1;
		}
	}


	//  文字列を整数化
	function myParseInt(st) {
		if(st == null  ||  isNaN(st)) return 0;
		return parseInt(st,10);
	}


	//  ＪＳまさおから 設定値 1000以上の仕掛けの文字を削除
	function deleteAthleticChar(ap){
		var map_str,a_char,n_f;


		for(var i = 0;i < param_name_map_count;i++){
			map_str = ap.getParamValue(param_name_map[i]);
			if(map_str == null  ||  map_str == "") continue;
			for(var i2 = 0;i2 < athletic_char_count;i2++){
				if(i2 < 12){
					//  標準の仕掛け
					if(athletic_config[i2] < 1000) continue;
				}
				else{
					//  追加された仕掛け
					if(athletic_config[i2] < 2) continue;
				}
				a_char = athletic_char[i2];
				do{
					n_f = false;
					if(map_str.indexOf(a_char) >= 0){
						map_str = map_str.replace(a_char,".");
						n_f = true;
					}
				}while(n_f);
			}
			ap.setParamValue(param_name_map[i],map_str);
		}
	}


	//  拡張仕掛けを設置する
	function makeStageAthletic(ap,stage_number){
		var s_str,map_str,n_str;


		if(stage_number == 2){
			s_str = "-s";
		}
		else if(stage_number == 3){
			s_str = "-t";
		}
		else if(stage_number == 4){
			s_str = "-f";
		}
		else{
			s_str = "";
		}
		for(var iy = 0;iy <= 29;iy++){
			map_str = "";
			n_str = param_map["map0-" + iy + s_str];
			if(n_str != null) map_str += n_str;
			n_str = param_map["map1-" + iy + s_str];
			if(n_str != null) map_str += n_str;
			n_str = param_map["map2-" + iy + s_str];
			if(n_str != null) map_str += n_str;

			if(map_str.length < 1) continue;
			for(var ix = 0;ix < 180;ix++){
				if(ix >= map_str.length) break;
				n_str = map_str.charAt(ix);
				for(var ic = 0;ic < athletic_char_count;ic++){
					if(n_str != athletic_char[ic]) continue;
					if(ic < 12){
						//  標準の仕掛け
						if(athletic_config[ic] < 1000) continue;
					}
					else{
						//  追加された仕掛け
						if(athletic_config[ic] < 2) continue;
					}

					//  拡張仕掛けを設置する

					//  イベント関数を呼び出す
					if(eh_putathletic_count > 0){
						for(var ie = 0;ie < eh_putathletic_count;ie++){
							eh_putathletic[ie](athletic_config[ic],ix,iy,ap);
						}
					}
				}
			}
		}
	}


	//  公開メソッド
	return {
		main: function(os_g,mode,view_x,view_y,ap){
			//  起動時の初期化
			if(init_load_f == false){
				init_load_f = true;

				//  起動時
				userOnLoad(os_g,ap);
			}

			if(mode == 1){
				//  タイトル画面
				userTitle(os_g,ap);
			}
			else if(mode >= 100  &&  mode < 200){
				//  ゲーム中
				if(ap.getJSMes() >= 1){
					//  ゲーム開始
					//  メッセージをクリアー
					ap.setJSMes(0);
					userGameStart(os_g,ap,mode);
				}
				else {
					//  ゲーム中
					userGame(os_g,ap,view_x,view_y);
				}
			}
			else if(mode == 400){
				//  地図画面
				if(init_wm_f == false){
					init_wm_f == true;

					//  ゲーム開始時の初期化をさせる
					//  ゲーム開始のイベント関数を呼び出す
					if(eh_gamestart_count > 0){
						for(var i = 0;i < eh_gamestart_count;i++){
							eh_gamestart[i](os_g,ap,0);
						}
					}
				}
			}

			//  ハイスコアを送信する
			if(eh_highscore != null){
				if(ap.getScore() > highscore_send) {
					highscore_send = ap.getScore();
					eh_highscore(highscore_send);
				}
			}
		},
		setExtendAthleticEnable: function(f){
			//  拡張仕掛けを使う
			if(f == false){
				extend_athletic_enable = false;
			}
			else{
				extend_athletic_enable = true;
			}
		},
		addExtendAthletic: function(c,code){
			//  拡張仕掛けを追加する

			//  マップデーター上の１文字
			athletic_char[athletic_char_count] = c;
			//  設定値
			athletic_config[athletic_char_count] = code;
			//  仕掛けを増やす
			athletic_char_count++;
		},
		addEventListener: function(event_name,callback_func){
			//  イベントを追加する
			if(event_name == "highscore"){
				//  ハイスコア
				eh_highscore = callback_func;
			}
			else if(event_name == "onload"){
				//  起動
				if(eh_onload_count >= 100) return;
				eh_onload[eh_onload_count] = callback_func;
				eh_onload_count++;
			}
			else if(event_name == "title"){
				//  タイトル画面
				if(eh_title_count >= 100) return;
				eh_title[eh_title_count] = callback_func;
				eh_title_count++;
			}
			else if(event_name == "gamestart"){
				//  ゲーム開始
				if(eh_gamestart_count >= 100) return;
				eh_gamestart[eh_gamestart_count] = callback_func;
				eh_gamestart_count++;
			}
			else if(event_name == "game"){
				//  ゲーム中
				if(eh_game_count >= 100) return;
				eh_game[eh_game_count] = callback_func;
				eh_game_count++;
			}
			else if(event_name == "putathletic"){
				//  拡張仕掛け設置
				if(eh_putathletic_count >= 100) return;
				eh_putathletic[eh_putathletic_count] = callback_func;
				eh_putathletic_count++;
			}
		}
	};
})();
