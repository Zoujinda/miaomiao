<!--  -->
<template>
  <div id="main">
    hello cinema
      <Header title="喵喵影院"></Header>
      <div id="content">
        <div class="cinema_menu">
          <div class="city_switch">
            全城 <i class="iconfont icon-lower-triangle"></i>
          </div>
          <div class="brand_switch">
            品牌 <i class="iconfont icon-lower-triangle"></i>
          </div>
          <div class="feature_switch">
            特色 <i class="iconfont icon-lower-triangle"></i>
          </div>
        </div>
      </div>
      <CinemaList></CinemaList>
      <TabBar></TabBar>
  </div>
</template>

<script>
import Header from '@/components/Header/index'
import TabBar from '@/components/TabBar/index'
import CinemaList from '@/components/CinemaList/index'
export default {
  name:'Cinema',
  components: {
    Header,
    TabBar,
    CinemaList
  },
  data () {
    return {
    }
  }
}

</script>

<style lang='scss' scopeds>

</style>
