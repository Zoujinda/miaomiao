<!--  -->
<template>
  <div id="main">
      <Header title="喵喵影院"></Header>
      <div id="content">
        <div class="cinema_menu">
          <div class="city_switch">
            全城 <i class="iconfont icon-sanjiaoxing"></i>
          </div>
          <div class="brand_switch">
            品牌 <i class="iconfont icon-sanjiaoxing"></i>
          </div>
          <div class="feature_switch">
            特色 <i class="iconfont icon-sanjiaoxing"></i>
          </div>
        </div>
        <CinemaList></CinemaList>
      </div>
      
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

<style lang='scss' scoped>
.cinema_menu{
  width: 100%;
  height: 45px;
  border-bottom: 1px solid #e6e6e6;
  display: flex;
  justify-content: space-around;
  -webkit-box-align: center;
  align-items: center;
  background: #fff;
  div i{
    font-size: 10px;
  }
}
</style>
