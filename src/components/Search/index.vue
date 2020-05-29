<!--  -->
<template>
  <div>
      hello search
      <div class="search_body">
          <div class="search_input">
              <div class="search_input_wrapper">
                  <i class="iconfont icon-sousuo"></i>
                  <input type="text">
              </div>
          </div>
          <div class="search_result">
              <h2>电影/电视剧/综艺</h2>
              <ul>
                  <li>
                    <div class="img"><img src="/images/bmw.jpg" alt=""></div>
                    <div class="info">
                    <p><span>宝马敞篷</span><span>9.2</span></p>
                    <p>剧情，热血，激情</p>
                    <p>2018-11-18</p>
                  </div>
                  </li>
              </ul>
          </div>
      </div>
  </div>
</template>

<script>
export default {
    name:"Search",
  data () {
    return {
    }
  }
}

</script>

<style lang='scss'>

</style>
