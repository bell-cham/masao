JSMasao.replace("applet1_id", { userJSCallback: userJS });


//  グローバル変数
var Applet1 = 0;			//  JavaApplet
var init_f = 0;				//  JavaApplet 起動時の初期化をしたかどうかのフラグ
var unload_f = 0;			//  このページが閉じられると 1 になる

var teki_l = new array();//敵の生死（0=生　1=潰れ中　2=消滅)
var teki_x = new array();
var teki_y = new array();
var teki_c = new array();//攻撃カウンター
var teki_d = new array();//向き
var teki_n;//敵の数
var teki_img = new array();
var teki_imgc = new array();

//  JavaApplet から全てのモードで  描画直前に呼び出される
function userJS(Offscreen_g, mode, view_x, view_y, ap) {


    //  このページが閉じられたので終了
    if (unload_f > 0) return;

    //  JavaApplet 起動時の初期化
    if (init_f != 1) {
        init_f = 1;

        //  JavaApplet 起動時の初期化
        userInitJS(ap);
    }


    if (mode >= 100 && mode < 200) {
        //  ゲーム中
        if (Applet1.getJSMes() >= 1) {
            //  ゲーム開始

            //  JavaApplet からのメッセージをクリアー
            Applet1.setJSMes(0);

            //  JavaScript ゲーム開始
            userGameStartJS();
        }
        else {
            //  JavaScript ゲーム中
            userGameJS(Offscreen_g, view_x, view_y);
        }
    }
}


//  JavaApplet 起動時に JavaScript から１回だけ呼び出される
function userInitJS(ap) {
    
    //  JavaApplet を取得
    Applet1 = ap;

    /*★★★敵(ヤチャモ)の場所を把握★★★*/

    teki_img_ = Applet1.newChipImage('g_ele.png', 32, 32, 10, 25);
}


//  ゲーム開始時に JavaScript から１回だけ呼び出される
function userGameStartJS() {
        //  敵の初期化
    for (i = 0; i <= 9; i++) {
        teki_c[i] = 0;
    }
    teki_img[0] = Applet1.getChipImage(teki_img, 158, 0);
    teki_img[1] = Applet1.getChipImage(teki_img, 158, 1);
    teki_imgc[0] = Applet1.getChipImage(teki_img, 159, 0);
    teki_imgc[1] = Applet1.getChipImage(teki_img, 159, 1);
}


//  ゲーム中    描画直前に JavaScript から呼び出される
function userGameJS(Offscreen_g, view_x, view_y) {
          
    //  主人公の座標を取得
    var my_x = Applet1.getMyXReal();
    var my_y = Applet1.getMyYReal();
    var my_vx = Applet1.getMyVX();
    var my_vy = Applet1.getMyVY();



    for(i=0;i<teki_n;i++)
    {
        if(teki_l[i]=0)
        {
            if(my_x<teki_x[i])
            {
                teki_d[i] = 0;
                drawImage(teki_img[0], teki_x[i], teki_y[i]);
                if(teki_x[i]-my_x<32*7&&((my_x+48<teki_x[i])||(my_y+48<teki_y[i]&&my_y>teki_y[i])))
                {
                    teki_c[i]++;
                    if (teki_c[i]=1)
                    {
                        setEnemy(16, teki_x[i] / 32, teki_y[i] / 32);
                    }
                    if(teki_c[i]=25)
                    {
                        teki_c[i] = 0;
                    }
                }
            }
            if (my_x > teki_x[i])
            {
                teki_d[i] = 1;
                drawImage(teki_img[1], teki_x[i], teki_y[i]);
                if (teki_x[i] - my_x < 32 * 7 && ((my_x - 48 > teki_x[i]) || (my_y + 48 < teki_y[i] && my_y > teki_y[i])))
                {
                    teki_c[i]++;
                    if (teki_c[i] = 1) {
                        setEnemy(16, teki_x[i] / 32, teki_y[i] / 32);
                    }
                    if (teki_c[i] = 25) {
                        teki_c[i] = 0;
                    }
                }
            }
            
            if (Applet1.getMyXReal() > teki_x[i] - 32 && Applet1.getMyXReal() < teki_x[i] + 32) {
                if (Applet1.getMyYReal() > teki_y[i] - 32 && Applet1.getMyYReal() < teki_y[i] + 32) {
                    if (my_vx > 10) {
                        setMyPress(1);
                        teki_c[i]=0;
                        teki_l[i] = 1;
                    }
                    else {
                        Applet1.setMyMiss(2);
                    }
                }
            }
        }
        if(teki_l[i]=1)
        {
            teki_c[i]++;
            drawImage(teki_imgc[teki_d[i]], teki_x[i], teki_y[i]);
            if(teki_c[i]=10)
            {
                teki_l[i] = 2;
            }
        }

    }

}





//  このページが閉じられると呼び出される
function onUnloadJS() {


    unload_f = 1;
}