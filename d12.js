// 7方向に弾飛ばす
// d_x:初めの点X　d_y:初めの点Y　p:弾の画像 ph:弾の一辺の長さ s:速度 a_p:弾と床が食い込む許容量 a_m:弾と自分が食い込む許容量
//　必要なグローバル変数：カウンターc_12d、自分の場所my_x,my_y、空中床の左上の座標kyuka_x(31*32固定),kyuka_y,
function d12(d_x,d_y,p,ph,s,a_p,a_m){
    if(Applet1.getMode()<2) {return;}
    if(Applet1.getJSMes()==1) {Applet1.setJSMes(0);userInitJS();}

    p_x = new Array();
    p_y = new Array();
	
    // 弾の位置、動かす
    for (i=0;i<7;i++)
    {
        p_x[i]=d_x+Math.floor(s*Math.cos(30*i*(Math.PI / 180)));
        p_y[i]=d_y+Math.floor(s*Math.sin(30*i*(Math.PI / 180)));
        //当り判定
        if((my_x-p_x>-32+a_m||my_x-p_x<ph-a_m) && (my_y-p_y>-32+a_m||my_y-p_y<ph-a_m)) {
            Applet1.setMyMiss(1);
        }
    }



    //弾を描画
    for(i=0;i<7;i++)
    {
        Applet1.drawImage(p,p_x[i],p_y[i]);
    }
}