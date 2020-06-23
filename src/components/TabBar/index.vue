<!--  -->
<template>
  <footer id="footer">
      <ul>
          <router-link tag="li" to="/movie" activeClass="active">
              <i class="iconfont icon-dianying"></i>
              <p>电影</p>
          </router-link>
          <router-link tag="li" to="/cinema" activeClass="active">
              <i class="iconfont icon-yingyuan"></i>
              <p>影院</p>
          </router-link>
          <router-link tag="li" to="/center" activeClass="active">
              <i class="iconfont icon-wode"></i>
              <p>我的</p>
          </router-link>
      </ul>
  </footer>
</template>

<script>
export default {
  name:'TabBar',
  data () {
    return {
    }
  }
}

</script>

<style lang='scss' scoped>
$maincolor:#e54847;
#footer{
  width: 100%;
  height: 50px;
  background-color: white;
  border-top: 2px  solid #ebe8e3;
  position: fixed;
  left: 0;
  bottom: 0;
  ul{
    display: flex;
    text-align: center;
    height: 50px;
    align-items: center;
    .active{
      color: $maincolor;
    }
    li{
      flex: 1;
      height: 40px;
      i{
        font-size: 20px;
      }
      p{
        font-size: 12px;
        line-height: 18px;
      }
    }
  }
}
</style>
