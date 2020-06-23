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
$maincolor:#e54847;
#header{
  width: 100%;
  height: 50px;
  background-color: $maincolor;
  border-bottom: 1px solid $maincolor;
  h1{
    font-size: 18px;
    text-align: center;
    height: 50px;
    font-weight: 400;
    line-height: 50px;
    color: white;
  }
}
</style>
