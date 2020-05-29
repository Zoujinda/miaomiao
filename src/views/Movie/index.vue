<!--  -->
<template>
  <div id="main">
    hello movie
      <Header></Header>
        <div id="content">
            <div class="moview_menu">
                <router-link to="/movie/city" tag="div" class="city_name" activeClass="active">
                    <span>深圳</span><i class="icontont icon-lower-triangle"></i>
                </router-link>
                <div class="hot_will">
                  <router-link tag="div" to="/movie/nowplaying" class="hotwill_item" activeClass="active">正在热映</router-link>
                  <router-link tag="div" to="/movie/comingsoon" class="hotwill_item" activeClass="active">即将上映</router-link>
                </div>
                <router-link tag="div" to="/movie/search" class="search_btn" activeClass="active">
                  <i class="iconfont icon-sousuo"></i>
                </router-link>
            </div>
        </div>
        <keep-alive>
            <router-view></router-view>
        </keep-alive>
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

</style>
