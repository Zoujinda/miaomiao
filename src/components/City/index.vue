<!--  -->
<template>
    <div class="city_body">
        <div class="city_list">
            <Loading v-if="isLoading"></Loading>
            <Scroller ref="city_list">
                <div>
                    <div class="city_hot">
                        <h2>热门城市</h2>
                        <ul class="clearfix">
                            <li v-for="data in hotCity" :key="data.id" @tap="handleToCity(data.hotcity,data.id)">{{data.hotcity}}</li>
                        </ul>
                    </div>
                    <div class="city_sort" ref="city_sort">
                        <div v-for="city in datalist" :key="city.idx">
                            <h2>{{city.idx}}</h2>
                            <ul>
                                <li v-for="nameList in city.cities" :key="nameList.id" @tap="handleToCity(nameList.name,nameList.id)">{{nameList.name}}</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </Scroller>
        </div>
        <div class="city_index">
            <!-- 在下面的li中为什么还是touchstart事件而不是tap事件 -->
                <ul>                                                            
                    <li v-for="(firstAlp,index) in datalist" :key="firstAlp.idx" @touchstart="toIndex(index)">{{firstAlp.idx}}</li>
                </ul>
        </div>
    </div>
</template>

<script>
export default {
    name:"City",
    mounted(){
        var cityList = window.localStorage.getItem('cityList');
        if(cityList){
            this.datalist = JSON.parse(cityList);
            this.isLoading = false;
        }else{
            this.getData();
        }
    },
    methods:{
        getData() {
            this.axios.get('http://localhost:8080/static/city_list.json').then((response) => {
                this.datalist = response.data.cityList;
                this.isLoading = false;;
                window.localStorage.setItem('cityList',JSON.stringify(this.datalist));
            }, response => {
                console.log("error");
            });
        },
        toIndex(index) {
            // touchstart事件在移动端中点击和滑动都是会触发的
            let h2=this.$refs.city_sort.getElementsByTagName('h2');
            this.$refs.city_list.toScrollTop(-h2[index].offsetTop);
        },
        handleToCity(nm,id){
            this.$store.commit('city/CITY_INFO',{nm,id});
            window.localStorage.setItem('nownm',nm);
            window.localStorage.setItem('nowid',id);
            this.$router.push('/movie/nowplaying');
        }
    },
    
  data () {
    return {
        datalist:[],
        hotCity:[
            {
                hotcity:"深圳",
                id:11
            },
            {
                hotcity:"北京",
                id:3
            },
            {
                hotcity:"上海",
                id:1
            },
            {
                hotcity:"广州",
                id:4
            },
            {
                hotcity:"东莞",
                id:51
            }
        ],
        isLoading:true
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
