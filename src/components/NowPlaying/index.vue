<!--  -->
<template>
  <div>
      hello Nowplaying
      <div class="movie_body">
          <ul>
              <li>
                  <div class="pic_show"><img src="/images/bmw.jpg" alt=""></div>
                  <div class="info_list">
                      <h2>宝马敞篷</h2>
                      <p>观众评分：<span class="grade">9.2</span></p>
                      <p>主演：XXX,YYY,ZZZ</p>
                      <p>今天55家影院放映660场</p>
                  </div>
                  <div class="btn_buy">
                      购票
                  </div>
              </li>
          </ul>
      </div>
  </div>
</template>

<script>
export default {
    name:"NowPlaying",
  data () {
    return {
    }
  }
}

</script>

<style lang='scss' scoped>

</style>
