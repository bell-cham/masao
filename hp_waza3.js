//必要なグローバル関数：発動フラグf_waza3(0禁止1許可)、X座標固定フラグfallf、my_x、カウンターc_waza3、空中床のy座標kyuka_y、ビームのy座標fall_y、画面左上端x座標view_y
//p_fall:ビームの画像

function waza3(p_fall) {
    if (Applet1.getMode() < 2) { return; }
    if (Applet1.getJSMes() == 1) { Applet1.setJSMes(0); userInitJS(); }
    if (f_waza3 = 1) {
        c_waza3++;

        p_x;
        p_y;
        mc_x;
        mc_y;



        //発動時の自分の位置を保管
        if (fallf = 0) {
            mc_x = my_x;
            fallf = 1;
        }

        if (kyuka_y = 14 * 32) {
            //雪崩　数字は適宜変える
            if (c_waza3 = 100) {
                for (i = 32; i <= 35; i++) {
                    setEnemy(25, i, 17);
                }
            }

            //雪崩　数字は適宜変える
            if (c_waza3 = 110) {
                for (i = 32; i <= 35; i++) {
                    setEnemy(25, i, 17);
                }
            }

            //雪崩　数字は適宜変える
            if (c_waza3 = 125) {
                for (i = 32; i <= 35; i++) {
                    setEnemy(25, i, 17);
                }
            }
        }
        //ビーム
        if (c_waza3 >= 200) {
            fall_y += 3;
            if ((my_x - mc_x > -32 + 8 || my_x - mc_x < 32 - a_m) && (my_y - beam_y > -32 + 8 || my_y - beam_y < 32 - 8)) {
                Applet1.setMyMiss(1);
            }
            Applet1.drawImage(p_fall, mc_x, beam_y);
            if (beam_y >= 25 * 32) {

                //d12発動
                d12(mc_x, beam_y, p, 32, 3, 8, 8);


                beam_y = view_y;
                c_waza3 = 0;
                f_waza3 = 0;
            }
        }

    }
}