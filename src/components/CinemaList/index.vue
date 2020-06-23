<!--  -->
<template>
    <div class="cinema_body">
        <div class="wrapper">
            <ul>
                <li>
                    <div>
                        <span>大地影院(一方城店)</span>
                        <span class="q"><span class="price">22.9</span>元起</span>
                    </div>
                    <div class="address">
                        <span>宝安区裕安一路365号一方城3层</span>
                        <span>177km</span>
                    </div>
                    <div class="card">
                        <div class="or">小吃</div>
                        <div class="bl">折扣卡</div>
                    </div>
                </li>
                <li>
                    <div>
                        <span>益达影院(万达店))</span>
                        <span class="q"> <span class="price">22.9</span>元起</span>
                    </div>
                    <div class="address">
                        <span>龙岗区坂田街道365号万达广场5楼</span>
                        <span>1km</span>
                    </div>
                    <div class="card">
                        <div class="or">小吃</div>
                        <div class="bl">折扣卡</div>
                    </div>
                </li>
                <li>
                    <div>
                        <span>益达影院(万达店))</span>
                        <span class="q"> <span class="price">22.9</span>元起</span>
                    </div>
                    <div class="address">
                        <span>龙岗区坂田街道365号万达广场5楼</span>
                        <span>1km</span>
                    </div>
                    <div class="card">
                        <div class="or">小吃</div>
                        <div class="bl">折扣卡</div>
                    </div>
                </li>
                <li>
                    <div>
                        <span>益达影院(万达店))</span>
                        <span class="q"> <span class="price">22.9</span>元起</span>
                    </div>
                    <div class="address">
                        <span>龙岗区坂田街道365号万达广场5楼</span>
                        <span>1km</span>
                    </div>
                    <div class="card">
                        <div class="or">小吃</div>
                        <div class="bl">折扣卡</div>
                    </div>
                </li>
                <li>
                    <div>
                        <span>益达影院(万达店))</span>
                        <span class="q"> <span class="price">22.9</span>元起</span>
                    </div>
                    <div class="address">
                        <span>龙岗区坂田街道365号万达广场5楼</span>
                        <span>1km</span>
                    </div>
                    <div class="card">
                        <div class="or">小吃</div>
                        <div class="bl">折扣卡</div>
                    </div>
                </li>
                <li>
                    <div>
                        <span>益达影院(万达店))</span>
                        <span class="q"> <span class="price">22.9</span>元起</span>
                    </div>
                    <div class="address">
                        <span>龙岗区坂田街道365号万达广场5楼</span>
                        <span>1km</span>
                    </div>
                    <div class="card">
                        <div class="or">小吃</div>
                        <div class="bl">折扣卡</div>
                    </div>
                </li>
                <li>
                    <div>
                        <span>益达影院(万达店))</span>
                        <span class="q"> <span class="price">22.9</span>元起</span>
                    </div>
                    <div class="address">
                        <span>龙岗区坂田街道365号万达广场5楼</span>
                        <span>1km</span>
                    </div>
                    <div class="card">
                        <div class="or">小吃</div>
                        <div class="bl">折扣卡</div>
                    </div>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
export default {
    name:"CinemaList",
  data () {
    return {
    }
  }
}

</script>

<style lang='scss' scoped>
.cinema_body{
    -webkit-box-flex: 1;
    flex: 1;
    overflow: auto;
    div{
        margin-bottom: 10px;
    }
    .wrapper{
        height: 100%;
        ul{
            padding: 20px;
            li{
                border-bottom: 1px solid #e6e6e6;
                margin-bottom: 20px;
                .q{
                    font-size: 11px;
                    color: #f03d37;
                    display: inline-block;
                    margin-left: 10px;
                    .price{
                        font-size: 18px;
                    }
                }
                .address{
                    font-size: 13px;
                    color: #666;
                    span{
                        &:last-of-type{
                            float: right;
                        }
                    }
                }
                .card{
                    display: flex;
                    div{
                        padding: 0 3px;
                        height: 15px;
                        border-radius: 2px;
                        color: #f90;
                        border: 1px solid #f90;
                        font-size: 13px;
                        margin-right: 5px;
                    }
                    .bl{
                        color: #589daf;
                        border: 1px solid #589daf;
                    }
                }
            }
        }
    }
}
</style>
