<!--  -->
<template>
    <div class="city_body">
        <div class="city_list">
            <div class="city_hot">
                <h2>热门城市</h2>
                <ul class="clearfix">
                    <li>深圳</li>
                    <li>北京</li>
                    <li>上海</li>
                    <li>广州</li>
                    <li>东莞</li>
                    <li>济南</li>
                    <li>杭州</li>
                    <li>成都</li>
                </ul>
            </div>
            <div class="city_sort">
                <div>
                    <h2>A</h2>
                    <ul>
                        <li>阿拉兽盟</li>
                        <li>鞍山</li>
                        <li>安庆</li>
                        <li>安庆</li>
                    </ul>
                </div>
                <div>
                    <h2>B</h2>
                    <ul>
                        <li>北京</li>
                        <li>保定</li>
                        <li>包头</li>
                        <li>白山</li>
                    </ul>
                </div>
                <div>
                    <h2>C</h2>
                    <ul>
                        <li>重庆</li>
                        <li>承德</li>
                        <li>长春</li>
                        <li>从化</li>
                    </ul>
                </div>
                <div>
                    <h2>D</h2>
                    <ul>
                        <li>东莞</li>
                        <li>大连</li>
                        <li>丹东</li>
                        <li>大理</li>
                    </ul>
                </div>
                <div>
                    <h2>E</h2>
                    <ul>
                        <li>恩平</li>
                        <li>恩施</li>
                        <li>鄂尔多斯</li>
                        <li>峨眉山</li>
                    </ul>
                </div>
            </div>
        </div>
        <div class="city_index">
                <ul>
                    <li>A</li>
                    <li>B</li>
                    <li>C</li>
                    <li>D</li>
                    <li>E</li>
                </ul>
        </div>
    </div>
</template>

<script>
export default {
    name:"City",
  data () {
    return {
    }
  }
}

</script>

<style lang='scss' scoped>
.city_body{
    margin-top: 45px;
    display: flex;
    width: 100%;
    position: absolute;
    top: 0;
    bottom: 0;
    .city_list{
        flex: 1;
        background:#fff5f0;
        overflow: auto;
        &::-webkit-scrollbar{
            display: none;  //隐藏滚动条
        }
        .city_hot{
            margin-top: 20px;
            h2{
                padding-left: 15px;
                line-height: 30px;
                font-size: 14px;
                font-weight: 400;
                background-color: rgb(240,240,240);
            }
            ul li{
                float: left;
                width: 29%;
                height: 33px;
                margin-top: 15px;
                margin-left: 3%;
                line-height: 33px;
                text-align: center;
                box-sizing: border-box;
                background-color: rgb(255,255,255);
                padding: 0 4px;
                border: 1px solid rgb(230,230,230);
                border-image: initial;
                border-radius: 3px;
               
            }
        }
        .city_sort{
            div{
                margin-top: 20px;
                h2{
                    padding-left: 15px;
                    line-height: 30px;
                    font-size: 14px;
                    font-weight: 400;
                    background-color: rgb(240,240,240);
                }
                ul{
                    padding-left: 10px;
                    margin-top:10px;
                    li{
                        line-height: 30px;
                    }
                }
            }
        }
    }
    
    .city_index{
        width: 20px;
        display: flex;
        -webkit-box-orient: vertical;
        -webkit-box-direction: normal;
        flex-direction: column;
        -webkit-box-pack: center;
        justify-content: center;
        text-align: center;
        border-left:1px solid #e6e6e6 ;
        overflow: auto;
    }
}
</style>
