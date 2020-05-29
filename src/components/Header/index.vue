<!--  -->
<template>
  <header id="header">
      <h1>{{title}}</h1>
  </header>
</template>

<script>
export default {
  name:'Header',
  props: {
    title:{
      type:String,
      default:"喵喵电影"
    }
  },
  data () {
    return {
    }
  }
}

</script>

<style lang='scss' scoped>

</style>
