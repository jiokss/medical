<template>
    <div class="main-body" :style="{'-webkit-overflow-scrolling': scrollMode}">
        <search />
        <div class="screen-box">
            <div class="rep-box">
            	<span>报告状态：</span>
              <select class="rep-type">
                <option>全部</option>
                <option>已发布</option>
                <option>待发布</option>
                <option>待发布(迟发)</option>
                <option>已终止(退单)</option>
              </select>
            </div>
            <div class="sDate-btn">
             	<span>送检时间：</span>
              <mt-button type="default">近3个月</mt-button>
             	<mt-button type="default">近6个月</mt-button>
             	<mt-button type="default">近一年</mt-button>
             	<mt-button type="default" @click="ShouPup">自定义搜索</mt-button>
            </div>
        </div>
  		<div id="moveList">
          <repList></repList>

  		</div>
      <!-- 选择框 -->
      <mt-actionsheet v-if="actionSheet"
        :actions="actions" cancelText=""
        v-model="sheetVisible">
      </mt-actionsheet>
      <!--右侧搜索栏-->
      <rightSearch :showprop="showprop" v-on:childByValue="childByValue"></rightSearch>


    </div>
</template>
<script>
import Search from '../../components/wSearchInput'
import RightSearch from '../../components/wRightSearch'
import RepList from '../../components/wRepList'
export default {
   data() {
      return {
        showprop:false,
      	popVisible:false,
        scrollMode:"auto",
        actionSheet:false,

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
   created(){

   },
   methods:{
     ShouPup(){
        this.showprop = !this.showprop
      },

      childByValue(childValue){
        this.showprop = childValue
        console.log(this.showprop)
      }
  },
  components:{
    Search,
    RightSearch,
    RepList
  }



}
</script>
<style lang="scss" scoped >
  .mint-popup-right{
    padding-top: 20px;
    width: 80%;
    height: 100%;
    //background-color:#fafafa;
  }
  .rep-type{
    height: 26px;
    line-height: 26px;
    border:1px solid #ddd;
  }
	#moveList{
		position: fixed;
		top: 150px;
		left: 0;
		right: 0;
		bottom: 40px;
		overflow-y: auto;
	}
  .screen-box{
  	border-bottom:1px solid #ddd ;
  	color: #555;
  	font-size: 0.9rem;
  	background-color:#fff ;
  	padding: 5px;
    position:relative;
    // z-index:999;
  	.rep-box{
  		margin-bottom: 5px;
  	}
    .rep-btn{
      position: relative;
      display: inline-block;
      width: 120px;
      height: 24px;
      padding-left: 10px;
      line-height: 24px;
      border: 1px solid #ddd;
      border-radius: 4px;
    }
    .rep-icon{
      position: absolute;
      right:10px;
      top:0px;
    }
    .sDate-btn{
    	button{
    		font-size: 0.8rem;
    		height: 26px;
    		line-height: 26px;
    		padding: 0 4px;
        margin-right:4px;
    	}

    }

  }


@media (max-width: 320px) {
  .sDate-btn button{
    margin-right:0px !important;
  }
  .search-box,.screen-box{
    font-size:0.8rem;
  }
}
</style>
