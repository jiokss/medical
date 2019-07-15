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
        <form class="loginFrom">


          <mt-field label="手机号码" type="text" v-model="phoneNum" v-if="value==1" :attr="{ maxlength: 18}"></mt-field>
          <mt-field label="账号" type="text" v-model="user" v-if="value==0" :attr="{ maxlength: 18}"></mt-field>
          <mt-field label="验证码" v-model="verCode" :attr="{ maxlength: 6 }">
            <img :src="verImg" height="45px" width="100px" @click="changeVer">
          </mt-field>
          <mt-field label="密码" type="text" v-model="password" v-if="value==1" :attr="{ maxlength: 18 }"></mt-field>
          <mt-field label="短信验证码" type="text" v-model="shortCode" v-if="value==0" :attr="{ maxlength: 6 }">

            <!-- <mt-button type="default" size="small">获取验证码</mt-button> -->
          <short :shortData='shortData'></short>
          </mt-field>
        </form>
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
        phoneNum:'',
        user:'',
        verImg:'',
        password:'',
        verCode:'',
        shortCode:'',
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
    mounted(){
      this.verImg = 'https://ss1.bdstatic.com/5eN1bjq8AAUYm2zgoY3K/r/www/cache/static/protocol/https/home/img/qrcode/zbios_09b6296.png'
    },
    watch:{
      value(){
        this.verCode = ''
        this.email = ''
        this.user = ''
        this.password = ''
        this.shortCode = ''
      },

    },
    methods:{
      showToast(title){
          this.$toast({
            message: title,
            position: 'bottom',
            duration: 2000
          });
      },
      submitLogin(){
        /*if(this.value=='0'){ //个人客户
          //验证账号
          if(this.user == ''){
            this.showToast("账号不能为空")
            return false;
          }
          if(!/^[0-9a-zA-Z]*$/.test(this.user)){
            this.showToast("请输入正确的账号")
            this.user = ''
            return false;
          }
          //验证短信
          if(this.shortCode == ''){
            this.showToast("短信验证码不能为空")
            return false;
          }
          if(!/^[0-9a-zA-Z]{6}$/.test(this.shortCode)){
            this.showToast("请输入正确的短信验证码")
            this.shortCode = ''
            return false;
          }
        }else{ //机构用户
          //手机号码
          if(this.phoneNum == ''){
            this.showToast("手机号码不能为空")
            return false;
          }
          if(!/^1\d{10}$/.test(this.phoneNum)){
            this.showToast("请输入正确的手机号")
            this.phoneNum = ''
            return false;
          }
          if(this.password == ''){
            this.showToast("请输入正确的密码")
            return false;
          }
        }
        //验证码
          if(this.verCode == ''){
            this.showToast("验证码不能为空")
            return false;
          }
          if(!/^[0-9a-zA-Z]{6}$/.test(this.verCode)){
            this.showToast("请输入正确的验证码")
            this.verCode = ''
            return false;
          }
          this.$axios.get("/login?user=jiokss&psw=123456")
          .then(res=>{
            if(res.status == 200){
               this.$router.replace({ path: "/content" })
            }
            console.log(res)
          })
          .catch(err=>{
            console.log(err)
          })*/
          //登录跳转
          this.$router.replace({ path: "/content" })
      },
      changeVer(){
        this.verImg = 'https://ss0.baidu.com/73t1bjeh1BF3odCf/it/u=1375098467,448534472&fm=85&s=F1167295440279471016CDC8030030AB'
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


