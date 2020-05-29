<!--  -->
<template>
  <footer id="footer">
      <ul>
          <router-link tag="li" to="/movie" activeClass="active">
              <i class="icontont icon-dianying"></i>
              <p>电影</p>
          </router-link>
          <router-link tag="li" to="/cinema" activeClass="active">
              <i class="icontont icon-yingyuan"></i>
              <p>影院</p>
          </router-link>
          <router-link tag="li" to="/center" activeClass="active">
              <i class="icontont icon-wode"></i>
              <p>w我的</p>
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

</style>
