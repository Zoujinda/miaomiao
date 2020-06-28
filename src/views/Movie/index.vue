<!--  -->
<template>
  <div id="main">
      <Header></Header>
        <div id="content">
            <div class="moview_menu">
                <router-link to="/movie/city" tag="div" class="city_name" activeClass="active">
                    <span>深圳</span><i class="iconfont icon-sanjiaoxing"></i>
                </router-link>
                <div class="hot_will">
                  <router-link tag="div" to="/movie/nowplaying" class="hotwill_item" activeClass="active">正在热映</router-link>
                  <router-link tag="div" to="/movie/comingsoon" class="hotwill_item" activeClass="active">即将上映</router-link>
                </div>
                <router-link tag="div" to="/movie/search" class="search_btn" activeClass="active">
                  <i class="iconfont icon-search"></i>
                </router-link>
            </div>
            <keep-alive>
              <router-view></router-view>
            </keep-alive>
        </div>
      <TabBar></TabBar>
  </div>
</template>

<script>
import Header from '@/components/Header/index'
import TabBar from '@/components/TabBar/index'
export default {
  name:'Movie',
  components:{
    Header,
    TabBar
  },
  data () {
    return {
    }
  }
}

</script>

<style lang='scss'>
#main{
  height: 100%;
  display: flex;
  flex-direction: column;
}
#content{
  flex: 1;
  margin-bottom: 50px;
  display: flex;
  flex-direction: column;
  overflow: auto;
  position: relative;
  .moview_menu{
    width: 100%;
    height: 45px;
    border-bottom: 1px solid #e6e6e6;
    display: flex;
    justify-content: space-between;
    background-color: white;
    z-index: 10;
    .city_name{
      height: 100%;
      margin-left: 20px;
      line-height: 45px;
      i{
        font-size: 8px;
      }
    }
    .hot_will{
      height: 100%;
      display: flex;
      line-height: 45px;
      .hotwill_item{
        font-size: 15px;
        width: 80px;
        text-align: center;
        margin: 0 12px;
        font-weight: 700;
        color: #666;
      }
      .active{
        color: #ef4238;
        border-bottom: 2px solid #ef4238;
      }
    }
    .search_btn{
      margin-right: 20px;
      height: 100%;
      line-height: 45px;
      i{
        font-size: 24px;
        color: red;
      }
    }
  }
}
</style>
