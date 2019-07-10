<template>
  <div class="login-concent">
    <div class="login-concent-from">
      <div class="login-concent-img">
        <img src="@/view/login/lib/logo.png">
      </div>
      <div class="wLogin">
        <mt-radio
          v-model="value"
          :options="options">
        </mt-radio>
          <mt-field label="手机号码" type="text" v-model="email" v-if="value==1"></mt-field>
          <mt-field label="账号" type="text" v-model="user" v-if="value==0"></mt-field>
          <mt-field label="验证码" type="text" v-model="user"></mt-field>
          <mt-field label="密码" type="text" v-model="password" v-if="value==1"></mt-field>
          <mt-field label="短信验证码" type="text" v-model="password" v-if="value==0">
            <!-- <mt-button type="default" size="small">获取验证码</mt-button> -->
            <short :shortData='shortData'></short>
          </mt-field>
          <div class="submitBox">
              <mt-button type="primary" size="large" @click="submitLogin">确 定</mt-button>
          </div>

      </div>
    </div>
  </div>

</template>
<script>
import Short from '../../components/wShort'

export default {
    name:'login',
    data() {
      return {
        shortData:{
          time:10,
          url:'http://www.baidu.com'
        },
        email:'',
        user:'',
        password:'',
        value:'0',
        options:[
          {
            label: '个人客户',
            value: '0',
          },
          {
            label: '医疗机构',
            value: '1'
          }
        ]
      }
    },
    activated() {
    },
    methods:{
      submitLogin(){
          //登录跳转
          this.$router.replace({ path: "/content" })
      }
    },
    components:{
      Short
    }
}
</script>
<style lang="scss" rel="stylesheet/scss">
  .mint-radiolist{
    clear: both;
    overflow: hidden;
    a{
      float: left;
      width: 50%;
      text-align: center;
      background-color: transparent;
    }
  }
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
  .submitBox{
    padding: 15px;
  }
</style>


