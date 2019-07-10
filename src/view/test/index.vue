<template>
    <div>
        <div class="sreach-box">
            <div class="sreach-box-left">
                <span></span>
                <input type="text" placeholder="搜索/查找">
            </div>
            <a href="javascript:;">搜索</a>
        </div>
        <div class="screen-box">
            <div class="rep-box">
              报告状态:
              <div class="rep-btn" href="javascript:;" @click="actionSheet">
                {{seleTitle}}
                <span class="rep-icon">></span>
              </div>
            </div>
            <div>
              送检时间:
              <button>近3个月</button>
              <button>近6个月</button>
              <button>近一年</button>
              <button>自定义搜索</button>
            </div>
        </div>
        <mt-actionsheet v-if="actionSheet"
        :actions="actions" cancelText=""
        v-model="sheetVisible">
    </mt-actionsheet>
    </div>
</template>
<script>
export default {
   data() {
      return {
        sheetVisible:false,
        seleTitle:'全部',
        actions:[{
          name: '全部',
          method : this.getLibrary// 调用methods中的函数
        }, {
          name: '已发布', 
          method : this.getLibrary	// 调用methods中的函数
        }, {
          name: '待发布', 
          method : this.getLibrary	// 调用methods中的函数
        }, {
          name: '待发布(迟发)', 
          method : this.getLibrary	// 调用methods中的函数
        }, {
          name: '已终止(退单)', 
          method : this.getLibrary	// 调用methods中的函数
        }],
      }
   },
   activated() {
   },
   methods:{
     getLibrary(title,index){
       console.log(title)
       console.log(index)
       this.seleTitle = title.name
     },
     actionSheet(){
       this.sheetVisible = true;
     }
   }
}
</script>
<style lang="scss" scoped >
  .sreach-box{
    background: #fff;
    border-bottom:1px solid #ddd;
    padding: 6px 8px;
    clear: both;
    overflow: hidden;
    .sreach-box-left {
      float: left;
      width: 80%;
      border-radius: 3px;
      background-color:#f9f9f9;
      input{
        float:right;
        width: 90%;
        height:20px;
        line-height:20px;
        border:none;
        background-color:transparent;
        outline: none;
      }
    }
    a{
      float: left;
      display: block;
      width: 20%;
      text-align: center;
      color: #777;
      font-size: 0.9rem;
    }
  }
  .screen-box{
    .rep-btn{
      position: relative;
      display: inline-block;
      width: 120px;
      height: 24px;
      padding-left: 10px;
      line-height: 24px;
      border: 1px solid #ddd;
      border-radius: 6px;
    }
    .rep-icon{
      position: absolute;
      right:10px;
      top:0px;
    }
  }
</style>
