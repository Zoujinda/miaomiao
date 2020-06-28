<!--  -->
<template>
    <div class="movie_body">
        <ul>
            <li v-for="data in movieList" :key="data.id">
                <div class="pic_show"><img :src="data.img" alt=""></div>
                <div class="info_list">
                    <h2>{{data.moviename}}</h2>
                    <p>观众评分：<span class="grade">{{data.grade}}</span></p>
                    <p>主演：{{data.actor}}</p>
                    <p>{{data.playtimes}}</p>
                </div>
                <div class="btn_buy">
                    购票
                </div>
            </li>
           
        </ul>
    </div>
</template>

<script>
export default {
    name:"NowPlaying",
    mounted(){
        this.getMovie();
    },
  data () {
    return {
        movieList:[]
    }
  },
  methods:{
      getMovie() {
          this.axios.get('http://localhost:8080/static/nowmovie.json').then((response) => {
                console.log(response);
                if(response.data.msg === "ok"){
                    this.movieList = response.data.data.movieList;
                    console.log(this.movieList);
                }
            }, response => {
                console.log("error");
            });
      }
  }
}

</script>

<style lang='scss' scoped>
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
