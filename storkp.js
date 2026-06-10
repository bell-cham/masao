// 自分の方向に弾を飛ばす
// d_x:初めの点X　d_y:初めの点Y　p:弾の画像 ph:弾の一辺の長さ s:速度 a_p:弾と床が食い込む許容量 a_m:弾と自分が食い込む許容量
//　必要なグローバル変数：カウンターc_stork[k]、自分の場所my_x,my_y、空中床の左上の座標kyuka_x(31*32固定),kyuka_y,攻撃フラグstorkf(1:攻撃中）,発動フラグf_stork
//　使う数だけ、mainloopで変数を用意(hpの場合は６個）
//発動直前にc_storkを0に、f_storkを1にする


function storkp(d_x,d_y,p,ph,s,a_p,a_m){
    if(Applet1.getMode()<2) {return;}
    if (Applet1.getJSMes() == 1) { Applet1.setJSMes(0); userInitJS(); }
    if (f_stork = 1) {
        c_stork[k]++;

        p_x;
        p_y;
        mc_x;
        mc_y;



        //発動時の自分の位置を保管
        if (storkf = 0) {
            mc_x = my_x;
            mc_y = my_y;
            storkf = 1;
        }

        //弾を移動
        l_mxy = Math.sqrt(Math.pow(mc_x - d_x, 2) + Math.pow(mc_y - d_y, 2));
        p_x = d_x + ((mc_x - d_x) / l_mxy) * s*c_stork;
        p_y = d_y + ((mc_y - d_y) / l_mxy) * s*c_stork;
        if ((my_x - p_x > -32 + a_m || my_x - p_x < ph - a_m) && (my_y - p_y > -32 + a_m || my_y - p_y < ph - a_m)) {
            Applet1.setMyMiss(1);
        }

        //弾を描画
        Applet1.drawImage(p, p_x, p_y);
    }

    //一定期間経ったら終わり t=20000
    if (c_stork[k]<= 20000) {
        f_stork[k]= 0;
        storkf = 0;
        c_stork[k] = 0;
    }
}
