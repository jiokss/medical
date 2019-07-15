<!-- 短信验证码组件 -->
<template>
    <div>
        <mt-button type="default" size="small" @click="tapShort" :disabled="canCheck">{{title}}</mt-button>
    </div>
</template>
<script>
export default {
   data() {
      return {
        title:'获取验证码',
        time:this.shortData.time,
        canCheck:false,
        getUrl:this.shortData.url,
      }
   },
   activated() {
   },
   methods:{
     tapShort(){
       //内容倒计时
       this.canCheck = true;
       let setInter = setInterval(()=>{
         this.title = this.time + 's后重新发送'
         if(this.time == 0){
            clearInterval(setInter);
            this.title = '获取验证码'
            this.canCheck = false
            this.time = this.shortData.time
         }
         this.time--
       },1000)
      //发送请求
      this.$axios.get(this.getUrl)
      .then((res)=>{

      })
      .catch((err)=>{

      })

     }
   },
   props:['shortData']
}
</script>
<style>
</style>
