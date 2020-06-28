<!--  -->
<template>
    <div class="search_body">
        <div class="search_input">
            <div class="search_input_wrapper">
                <i class="iconfont icon-search"></i>
                <input type="text" v-model="message">
            </div>
        </div>
        <div class="search_result">
            <h3>电影/电视剧/综艺</h3>
            <ul>
                <li v-for="data in movieList" :key="data.id">
                  <div class="img"><img :src="data.img" alt=""></div>
                  <div class="info">
                  <p><span class="theme">{{data.moviename}}</span>
                  <p>{{data.movietype}}</p>
                  <p>{{data.playtimes}}</p>
                  </div>
                  <div class="grade">
                    {{data.grade}}
                  </div>
                </li>
            </ul>
        </div>
  </div>
</template>

<script>
export default {
    name:"Search",
  data () {
    return {
      message:'',
      movieList:[]
    }
  },
  watch: {
    message(value) {
      let that = this;
      this.cancelRequest();
      this.axios.get(`http://localhost:8080/static/search&kw=${value}.json`,{
                cancelToken: new this.axios.CancelToken(function(c){
                    that.source = c;
                })
                }).then((res) => {
          this.movieList = res.data.data.movieList;  
      }).catch((err) => {
        if(this.axios.isCancel(err)){
          console.log('Rquest canceled',err.message);//请求如果被取消，这里是返回取消的message
        }else{
          this.movieList = [];
        }
        
      })
    }
  },
  methods:{
    cancelRequest(){
            if(typeof this.source ==='function'){
                this.source('终止请求')
            }
        }
  }
}

</script>

<style lang='scss' scoped>
.search_body{
  -webkit-box-flex: 1;
  flex: 1;
  overflow: auto;
  .search_input{
    padding: 8px 10px;
    background-color: #f5f5f5;
    border-bottom: 1px solid #e5e5e5;
    .search_input_wrapper{
      padding: 0 10px;
      border: 1px solid #e6e6e6;
      border-radius: 5px;
      background-color: #fff;
      display: flex;
      line-height: 20px;
      i{
        font-size: 16px;
        padding: 4px 0;
      }
      input{
        border: none;
        font-size: 13px;
        color: #333;
        padding: 4px 0;
        outline: none;
        margin-left: 5px;
        width: 100%;
      }
    }
  }
  .search_result{
    h3{
      font-size: 15px;
      color: #999;
      padding: 9px 15px;
      border-bottom: 1px solid #e6e6e6;
    }
    ul li{
            margin-top: 12px;
            display: flex;
            border-bottom: 1px solid #e6e6e6;
            padding-bottom: 10px;
            align-items: center;
            .img{
                width: 64px;
                height: 90px;
                img{
                    width: 64px;
                    height: 90px;
                }
            }
            .info{
                margin-left: 10px;
                flex: 1;
                .theme{
                    font-weight: 700;
                    font-size: 17px;
                    line-height: 24px;
                    color: black;
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
                }
            }
            .grade{
              font-weight: 700;
              color: #faaf00;
              font-size: 15px;
              align-self: flex-start;
            }
    }
  }
}
</style>
