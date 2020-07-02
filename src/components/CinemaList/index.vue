<!--  -->
<template>
    <div class="cinema_body">
        <div class="wrapper">
            <Loading v-if="isLoading"></Loading>
            <Scroller v-else>
                <ul>
                    <li v-for="data in cinemaList" :key="data.id">
                        <div>
                            <span>{{data.name}}</span>
                            <span class="q"><span class="price">{{data.price}}</span>元起</span>
                        </div>
                        <div class="address">
                            <span>{{data.address}}</span>
                            <span>{{data.distance}}</span>
                        </div>
                        <div class="card">
                            <div v-for="(value,key) in data.tag" :key="key" v-if="value" :class="key | classCard(key)">{{key | formatCard(key)}}</div>
                        </div>
                    </li>
                </ul>
            </Scroller>
        </div>
    </div>
</template>

<script>
export default {
    name:"CinemaList",
  data () {
    return {
        cinemaList:[],
        isLoading:true
    }
  },
  mounted() {
      let cinemaList = window.localStorage.getItem('cinemaList');
      if(cinemaList){
          this.cinemaList = JSON.parse(cinemaList);
          this.isLoading = false;
      }else{
          this.getCinema();
      }
  },
  methods:{
      getCinema() {
          this.axios.get('http://localhost:8080/static/cinemalist.json').then((response) => {
                this.cinemaList = response.data.data.cinema;
                window.localStorage.setItem('cinemaList',JSON.stringify(this.cinemaList));
                this.isLoading = false;
            }, (error) => {
                console.log("error");
            });
      }
  },
  filters:{
      formatCard(key) {
          let card = [
              { key : "allowRefound" , value : "改签" },
              { key : "endorse" , value : "退" },
              { key : "sell" , value : "折扣卡" },
              { key : "snack" , value : "小吃" }
          ];
        for(let i = 0;i<card.length;i++){
            if(card[i].key == key){
                return card[i].value;
            }
        }
         return '';
      },
      classCard(key) {
          let cardClass = [
              { key : "allowRefound" , value : "or" },
              { key : "endorse" , value : "or" },
              { key : "sell" , value : "bl" },
              { key : "snack" , value : "bl" }
          ];
        for(let i = 0;i<cardClass.length;i++){
            if(cardClass[i].key === key){
                return cardClass[i].value;
                //如果这里加上else{return '';}那么在动态传入key中，第二个开始全部都执行else中的逻辑就结束了，所以不能在这里加
            }
        }
         return '';
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
                        font-size: 13px;
                        margin-right: 5px;
                    }
                    .or{
                        color: #f90;
                        border: 1px solid #f90;
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
