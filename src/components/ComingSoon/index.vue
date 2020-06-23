<!--  -->
<template>
  <div>
      <div class="movie_body">
          <ul>
            <li>
                <div class="pic_show"><img src="/images/tiaojiushi.jpg" alt=""></div>
                <div class="info_list">
                    <h2>调酒师</h2>
                    <p>观众评分：<span class="grade">9.2</span></p>
                    <p>主演：刘挺,陆莹,张如意</p>
                    <p>2020-04-15上映</p>
                </div>
                <div class="btn_buy">
                    预售
                </div>
            </li>
           <li>
                <div class="pic_show"><img src="/images/chenxiang.jpg" alt=""></div>
                <div class="info_list">
                    <h2>沉香</h2>
                    <p>观众评分：<span class="grade">8.2</span></p>
                    <p>主演：朱仲春,尹航,梁靖晨</p>
                     <p>2020-01-20上映</p>
                </div>
                <div class="btn_buy">
                    预售
                </div>
            </li>
            <li>
                <div class="pic_show"><img src="/images/zhanzhuxiaotou.jpg" alt=""></div>
                <div class="info_list">
                    <h2>站住！小偷</h2>
                    <p>观众评分：<span class="grade">0</span></p>
                    <p>主演：郑云,梁小龙,尤勇</p>
                     <p>2020-06-15上映</p>
                </div>
                <div class="btn_buy">
                    预售
                </div>
            </li>
            <li>
                <div class="pic_show"><img src="/images/yujianni.jpg" alt=""></div>
                <div class="info_list">
                    <h2>今生只为遇见你</h2>
                    <p>观众评分：<span class="grade">9.2</span></p>
                    <p>主演：田志斌,于苏桐,何海蓝</p>
                     <p>2020-07-15上映</p>
                </div>
                <div class="btn_buy">
                    预售
                </div>
            </li>
            <li>
                <div class="pic_show"><img src="/images/beiping.jpg" alt=""></div>
                <div class="info_list">
                    <h2>北平会馆</h2>
                    <p>观众评分：<span class="grade">9.2</span></p>
                    <p>主演：吴大可,朱梓瑜,刘亦彤</p>
                     <p>2020-08-25上映</p>
                </div>
                <div class="btn_buy">
                    预售
                </div>
            </li>
            <li>
                <div class="pic_show"><img src="/images/liuren.jpg" alt=""></div>
                <div class="info_list">
                    <h2>六人-泰坦尼克号上的故事</h2>
                    <p>观众评分：<span class="grade">9.2</span></p>
                    <p>主演：詹姆斯·卡梅隆,施万克,方国民</p>
                     <p>2020-09-23上映</p>
                </div>
                <div class="btn_buy">
                    预售
                </div>
            </li>
            <li>
                <div class="pic_show"><img src="/images/tiaojiushi.jpg" alt=""></div>
                <div class="info_list">
                    <h2>小公主艾薇拉与神秘王国</h2>
                    <p>观众评分：<span class="grade">9.2</span></p>
                    <p>主演：</p>
                     <p>2020-09-25上映</p>
                </div>
                <div class="btn_buy">
                    预售
                </div>
            </li>
            <li>
                <div class="pic_show"><img src="/images/fennu.jpg" alt=""></div>
                <div class="info_list">
                    <h2>愤怒的心</h2>
                    <p>观众评分：<span class="grade">9.2</span></p>
                    <p>主演：吴琼，阳蕾，王之民</p>
                     <p>2020-10-09上映</p>
                </div>
                <div class="btn_buy">
                    预售
                </div>
            </li>
            <li>
                <div class="pic_show"><img src="/images/qimiao.jpg" alt=""></div>
                <div class="info_list">
                    <h2>奇妙王国之魔法奇缘</h2>
                    <p>观众评分：<span class="grade">9.2</span></p>
                    <p>主演：卢瑶，张洋，陈新玥</p>
                     <p>2020-11-02上映</p>
                </div>
                <div class="btn_buy">
                    预售
                </div>
            </li>
        </ul>
      </div>
  </div>
</template>

<script>
export default {
    name:"ComingSoon",
  data () {
    return {
    }
  }
}

</script>

<style lang='scss'>
.movie_body{
    flex: 1;
    overflow: auto;
    ul{
        height: 100%;
        margin: 0 12px;
        li{
            margin-top: 12px;
            display: flex;
            border-bottom: 1px solid #e6e6e6;
            padding-bottom: 10px;
            align-items: center;
            .pic_show{
                width: 64px;
                height: 90px;
                img{
                    width: 100%;
                }
            }
            .info_list{
                margin-left: 10px;
                flex: 1;
                h2{
                    font-size: 17px;
                    line-height: 24px;
                    width: 150px;
                    overflow: hidden;
                    white-space: nowrap; //不让内容换行
                    text-overflow: ellipsis;  //添加省略号
                }
                p{
                    font-size: 13px;
                    color: #666;
                    line-height: 22px;
                    width: 200px;
                    white-space: nowrap; 
                    text-overflow: ellipsis;
                    .grade{
                        font-weight: 700;
                        color: #faaf00;
                        font-size: 15px;
                    }  
                }
            }
            .btn_buy{
                width: 47px;
                height: 27px;
                line-height: 28px;
                text-align: center;
                background-color: #f03d37;
                color: white;
                border-radius: 4px;
                font-size: 12px;
                cursor: pointer;
            }
        }
    }
}
</style>
