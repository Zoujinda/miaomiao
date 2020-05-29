<!--  -->
<template>
  <div>
    hello Login
    <div class="login_body">
      <div>
        <input class="login_text" type="text" placeholder="账户名/手机号/邮箱">
      </div>
      <div>
        <input class="login_text" type="password" placeholder="请输入您的密码">
      </div>
      <div class="login_link">
        <a href="#">立即注册</a>
        <a href="#">找回密码</a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
    name:"Login",
  data () {
    return {
    }
  }
}

</script>

<style lang='scss' scoped>

</style>
