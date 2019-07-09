<template>
  <div class="login-concent">
    <div class="login-concent-from">
      <div class="login-concent-img">
        <img src="@/view/login/lib/logo.png">
      </div>
      <div class="wLogin">
          <mt-field label="手机号码" type="text" v-model="email"></mt-field>
          <mt-field label="验证码" type="text" v-model="user"></mt-field>
          <mt-field label="短信验证码" type="text" v-model="password">
            <mt-button type="default" size="small">获取验证码</mt-button>
          </mt-field>
      </div>
    </div>
  </div>

</template>
<script>
export default {
    name:'login',
    data() {
      return {
        email:'',
        user:'',
        password:'',
      }
    },
    activated() {
    }
}
</script>
<style lang="scss" rel="stylesheet/scss">
  .login-concent{
    height: 100%;
    display: flex;
    align-items: center;

  }
  .wLogin .mint-cell{
    border-bottom: 1px solid #eee;
    color: #888;
  }
  .login-concent-from{
    width: 100%;
    .login-concent-img{
      width: 200px;
      margin: 0 auto;
      padding-bottom: 35px;
      img{
        width: 100%;
      }
    }
  }
</style>


