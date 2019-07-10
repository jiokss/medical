<template>
    <div class="m-content">
      <router-view></router-view>
      <mt-tabbar v-model="selected" fixed>
        <mt-tab-item v-for="(itetm,index) in btmList" :id="itetm.value" :key="index">
          <span>3</span>
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
       if(newValue=='tab3'){
        this.$router.replace({ path: "/content/test" })
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
</style>
