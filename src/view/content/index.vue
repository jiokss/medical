<template>
    <div class="m-content">
      <router-view></router-view>
      <mt-tabbar v-model="selected" fixed>
        <mt-tab-item v-for="(itetm,index) in btmList" :id="itetm.value" :key="index" >
          {{itetm.title}}
        </mt-tab-item>
      </mt-tabbar>
    </div>
</template>
<script>
export default {
   data() {
      return {
        selected:'',
        btmList:[
          {
            title:'检测单',
            value:'0'
          },
          {
            title:'项目册',
            value:'3'
          },
          {
            title:'服务',
            value:'1'
          },
          {
            title:'我的',
            value:'2'
          }
        ]
      }
   },
   activated() {
   },
   methods:{

   },
   watch:{
     selected:function(newValue,oldValue){
       if(newValue=='0'){
        this.$router.replace({ path: "/content/test" })
       }else if(newValue=='1'){
         this.$router.replace({ path: "/content/service" })
       }else if(newValue=='2'){
         this.$router.replace({ path: "/content/mine" })
       }else if(newValue=='3'){
         this.$router.replace({ path: "/content/itemBook" })
       }
       console.log(oldValue)
       console.log(newValue)
     }
   }
}
</script>
<style lang="scss">
  .m-content{
    padding:40px 0;

  }
  .mint-tabbar{
  	border-top:1px solid #f5f5f5;
  	background-color:#fff ;
  	min-height: 40px;
  	line-height: 40px;
  }
</style>
