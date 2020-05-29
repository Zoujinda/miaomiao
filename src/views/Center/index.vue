<!--  -->
<template>
  <div id="main">
    hello center
      <Header title="个人中心"></Header>
      <Login></Login>
      <TabBar></TabBar>
  </div>
</template>

<script>
import Header from '@/components/Header/index'
import TabBar from '@/components/TabBar/index'
import Login from '@/components/Login/index'
export default {
    name:'Center',
    components: {
    Header,
    TabBar,
    Login
  },
  data () {
    return {
    }
  }
}

</script>

<style lang='scss'>

</style>
