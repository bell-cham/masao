//ice_gp:氷の変化 fl:フレームレート s:速度 g:重力加速度
//必要なグローバル関数：氷の位置ice_x,ice_y,氷の速度ice_vx,ice_vy,ボスの位置bp_f(左→0,右→1),技５のカウンターc_waza5,技５の発動許可f_waza5(0:禁止　1:許可)
//発動直前にc_waza5=0、f_waza5=1に設定する
//１，２（雲）は氷の変化中の画像
//usergamestartの中で床を作っておく


function waza5(ice_gp, fl, s) {
    if (Applet1.getMode() < 2) { return; }
    if (Applet1.getJSMes() == 1) { Applet1.setJSMes(0); userInitJS(); }
    if (f_waza5 = 1) {
        c_waza5++;
        if (bp_f = 0) {
            if (c_waza5 = 3 * fl) {
                for (ix = 27; ix <= 28; ix++) {
                    for (iy = 20; iy <= 25; iy++) {
                        setMapchip(ix, iy, 1);
                        if ((my_x - 27 * 32 > -32 + 8 || my_x - 27 * 32 < ph - a_m) && (my_y - 20 * 32 > -32 + 8 || my_y - 20 * 32 < ph - 8)) {
                            Applet1.setMyMiss(1);
                        }
                    }
                }
            }
            if (c_waza5 = 6 * fl) {
                for (ix = 27; ix <= 28; ix++) {
                    for (iy = 20; iy <= 25; iy++) {
                        setMapchip(ix, iy, 0);
                        if ((my_x - 27 * 32 > -32 + 8 || my_x - 27 * 32 < ph - a_m) && (my_y - 20 * 32 > -32 + 8 || my_y - 20 * 32 < ph - 8)) {
                            Applet1.setMyMiss(1);
                        }
                    }
                }
                for (ix = 27; ix <= 28; ix++) {
                    for (iy = 20; iy <= 25; iy++) {
                        setMapchip(ix, iy, 2);
                        if ((my_x - 27 * 32 > -32 + 8 || my_x - 27 * 32 < ph - a_m) && (my_y - 20 * 32 > -32 + 8 || my_y - 20 * 32 < ph - 8)) {
                            Applet1.setMyMiss(1);
                        }
                    }
                }
            }
            if (c_waza5 = 9 * fl) {
                for (ix = 27; ix <= 28; ix++) {
                    for (iy = 20; iy <= 25; iy++) {
                        setMapchip(ix, iy, 0);
                        //床作成
                        ice_x = 27 * 32;
                        ice_y = 20 * 32;

                    }
                }
            }
            if (c_waza5 <= 16 * fl) {
                ice_vx = s * fl;
                if (ice_x > 43 * 32) {
                    ice_vx += g;
                }
            }


        }


        if (bp_f = 1) {
            if (c_waza5 = 3 * fl) {
                for (ix = 39; ix <= 40; ix++) {
                    for (iy = 20; iy <= 25; iy++) {
                        setMapchip(ix, iy, 1);
                        if ((my_x - 39 * 32 > -32 + 8 || my_x - 39 * 32 < ph - a_m) && (my_y - 20 * 32 > -32 + 8 || my_y - 20 * 32 < ph - 8)) {
                            Applet1.setMyMiss(1);
                        }
                    }
                }
            }
            if (c_waza5 = 6 * fl) {
                for (ix = 39; ix <= 40; ix++) {
                    for (iy = 20; iy <= 25; iy++) {
                        setMapchip(ix, iy, 0);
                        if ((my_x - 39 * 32 > -32 + 8 || my_x - 39 * 32 < ph - a_m) && (my_y - 20 * 32 > -32 + 8 || my_y - 20 * 32 < ph - 8)) {
                            Applet1.setMyMiss(1);
                        }
                    }
                }
                for (ix = 39; ix <= 40; ix++) {
                    for (iy = 20; iy <= 25; iy++) {
                        setMapchip(ix, iy, 2);
                        if ((my_x - 39 * 32 > -32 + 8 || my_x - 39 * 32 < ph - a_m) && (my_y - 20 * 32 > -32 + 8 || my_y - 20 * 32 < ph - 8)) {
                            Applet1.setMyMiss(1);
                        }
                    }
                }
            }
            if (c_waza5 = 9 * fl) {
                for (ix = 39; ix <= 40; ix++) {
                    for (iy = 20; iy <= 25; iy++) {
                        setMapchip(ix, iy, 0);
                        //床作成
                        ice_x = 27 * 32;
                        ice_y = 20 * 32;

                    }
                }
            }
            if (c_waza5 <= 16 * fl) {
                ice_vx = -s * fl;
                if (ice_x < 23 * 32) {
                    ice_vx += g;
                }
            }
        }
    }
    if(c_waza5<=200*fl)
    {
        c_waza5 = 0;
        f_waza = 0;
    }
}