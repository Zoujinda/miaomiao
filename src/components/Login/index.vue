<!--  -->
<template>
  <div>
    <div class="login_body">
      <div>
        <input class="login_text" type="text" placeholder="账户名/手机号/邮箱">
      </div>
      <div>
        <input class="login_text" type="password" placeholder="请输入您的密码">
      </div>
      <div class="login_btn">
        <input type="submit" value="登录">
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
.login_body{
  width: 100%;
  div{
    .login_text{
      width: 100%;
      height: 40px;
      border: none;
      border-bottom: 1px solid #ccc;
      margin-bottom: 5px;
      outline: none;
      text-indent: 10px;
    }
  }
  .login_btn{
    height: 50px;
    margin: 10px;
    input{
      width: 100%;
      height: 100%;
      background: #e54847;
      border-radius: 3px;
      border: none;
      display: block;
      color: #fff;
      font-size: 20px;
    }
  }
  .login_link{
    display: flex;
    -webkit-box-pack: justify;
    justify-content: space-between;
    a{
      margin: 0 5px;
      font-size: 12px;
      color: #e54847;
      text-decoration: none;
    }
  }
}
</style>
