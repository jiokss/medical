<template>
    <div class="main-body" :style="{'-webkit-overflow-scrolling': scrollMode}">
        <search />
        <div class="screen-box">
            <div class="rep-box">
            	报告状态：
              <div class="rep-btn" href="javascript:;" @click="actionSheet">
                {{seleTitle}}
                <span class="rep-icon">></span>
              </div>
            </div>
            <div class="sDate-btn">
             	 送检时间：
              	<mt-button type="default">近3个月</mt-button>
             	<mt-button type="default">近6个月</mt-button>
             	<mt-button type="default">近一年</mt-button>
             	<mt-button type="default" @click="ShouPup">自定义搜索</mt-button>
            </div>
        </div>
  		<div id="moveList">
  			<mt-loadmore :bottom-method="loadBottom" :bottom-all-loaded="allLoaded" :auto-fill="false" ref="loadmore">
		      <ul class="list" >
		        <li class="list-li" v-for="(item,index) in pageList" :key="index">
		          <div class="examine-box">
		          	<div class="examine-box-top">
		          		<p><span>雪无语</span><span>检测编码<i>12878</i></span></p>
		          		<p><span>核基因定点项目(sanger测序)</span><span>></span></p>
		          	</div>
		          	<div class="examine-box-btm">
		          		<div class="exam-btn-date">
		          			<ul>
		          				<li>
		          					<span>送检时间</span>
		          					<span>11月2日</span>
		          				</li>
		          				<li>
		          					<span>预计发布时间</span>
		          					<span>11月2日</span>
		          				</li>
		          				<li>
		          					<span>剩余天数</span>
		          					<span>完成</span>
		          				</li>
		          			</ul>
		          		</div>
		          		<div class="exam-btm-btn">
		          			<mt-button type="default">遗传咨询</mt-button>
			             	<mt-button type="default">电子发票</mt-button>
			             	<mt-button type="default">申请单</mt-button>
			             	<mt-button type="default">待发布</mt-button>
		          		</div>
		          	</div>
		          </div>
		        </li>
		      </ul>
		    </mt-loadmore>
  		</div>
      <!-- 选择框 -->
      <mt-actionsheet v-if="actionSheet"
        :actions="actions" cancelText=""
        v-model="sheetVisible">
      </mt-actionsheet>
      <!--右侧搜索栏-->
      <mt-popup v-model="popupVisible" popup-transition="popup-fade" closeOnClickModal="true" position="right">
          <div class="search-box">
            <p>送检时间：</p>
            <div>
              <input type="text" class="search-time" @click="openPicker" v-model="sTimeStar" readonly> -
              <input type="text" class="search-time" @click="openPicker" v-model="sTimeStar" readonly>
            </div>
          </div>
          <div class="search-box">
            <p>送检时间：</p>
            <div>
              <input type="text" class="search-time" @click="openPicker" v-model="sTimeStar" readonly> -
              <input type="text" class="search-time" @click="openPicker" v-model="sTimeStar" readonly>
            </div>
          </div>
          <div class="search-box">
            <div class="search-box-list">
              <label>受检者姓名：</label><input class="search-text" type="text" />
            </div>
            <div class="search-box-list">
              <label>受检者姓名：</label><input class="search-text" type="text" />
            </div>
            <div class="search-box-list">
              <label>受检者姓名：</label><input class="search-text" type="text" />
            </div>
          </div>
          <div class="search-box">
            <div class="search-box-list search-select">
              <label>受检者姓名：</label>
              <select name="" id="">
                <option value="">全部</option>
                <option value="">已发布</option>
              </select>
            </div>
            <div class="search-box-list">
              <label>受检者姓名：</label><input class="search-text" type="text" />
            </div>
          </div>
          <div class="search-box-btn">
            <mt-button size="small" type="primary" @click="searchSubmit">确定</mt-button>
            <mt-button size="small" type="default" @click="propClone">取消</mt-button>
          </div>
      </mt-popup>
      <div class="datePicker">
       <mt-datetime-picker
          type="date"
          ref="picker"
          year-format="{value} 年"
          month-format="{value} 月"
          date-format="{value} 日"
          @confirm="handleConfirm"
          :startDate="startDate"
        >
        </mt-datetime-picker>
      </div>
    </div>
</template>
<script>
import Search from '../../components/wSearch'
export default {
   data() {
      return {
        sTimeStar:'',
        sTimeEnd:'',
        startDate: new Date('1900-01-01'),
        pickerVisible:true,
      	searchCondition:{                       //分页属性
          pageNo:"1",                           //页数
          pageSize:"10"                         //每页条数
        },
        pageList:[1,2,3,4],
        //请求的数据
        allLoaded: false,                       //是否可以上拉属性，false可以上拉，true为禁止上拉，就是不让往上划加载数据了
        scrollMode:"auto",                       //移动端弹性滚动效果，touch为弹性滚动，auto是非弹性滚动

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
        popupVisible: false,
      }
   },
   activated() {
   },
   created(){

   },
   methods:{

    openPicker () {
        this.$refs.picker.open()
    },
    handleConfirm (data) {

        this.sTimeStar = data;   //获取的时间为时间戳，getdata是自己写的一个转换时间的方法
    },
    propClone(){
      this.popupVisible = false
    },
    searchSubmit(){

    },
    ShouPup(){
      this.popupVisible = true
    },
    getLibrary(title,index){
	    console.log(title)
	    console.log(index)
	    this.seleTitle = title.name
    },
    actionSheet(){
    	this.sheetVisible = true;
    },
    loadTop() {                                //组件提供的下拉触发方法
      this.loadPageList();                     //下拉加载
      this.$refs.loadmore.onTopLoaded();       // 固定方法，查询完要调用一次，用于重新定位
    },
    loadBottom() {
      this.more();                             // 上拉触发的分页查询
      this.$refs.loadmore.onBottomLoaded();    // 固定方法，查询完要调用一次，用于重新定位
    },
    loadPageList(){
      // 查询数据
      this.$http.get('https://api.myjson.com/bins/17nnh6').then(res =>{
      // 是否还有下一页，加个方法判断，没有下一页要禁止上拉
      this.isHaveMore(1);
      this.pageList =[...this.pageList,...res.data] ;//
      console.log(res.data);
      this.$nextTick(function () {
      this.scrollMode = "touch";           // 原因是DOM更新循环结束时调用延迟回调函数，大意就是DOM元素在因为某些原因要进行修改就在这里写，要在修改某些数据后才能写，
      // 这里之所以加是因为有个坑，iphone在使用-webkit-overflow-scrolling属性，就是移动端弹性滚动效果时会屏蔽loadmore的上拉加载效果，
      // 花了好久才解决这个问题，就是用这个函数，意思就是先设置属性为auto，正常滑动，加载完数据后改成弹性滑动，安卓没有这个问题，移动端弹性滑动体验会更好
          });
      });
    },
    more(){
      this.loadPageList();                      // 分页查询
    },
    isHaveMore(HaveMore){                     // 是否还有下一页，如果没有就禁止上拉刷新
      this.allLoaded = true;                    //true是禁止上拉加载
      if(HaveMore){
          this.allLoaded = false;
      }
    }
  },
  components:{
    Search,
  }



}
</script>
<style lang="scss" scoped >
  .mint-popup-right{
    padding-top: 20px;
    width: 80%;
    height: 100%;
  }
	#moveList{
		position: fixed;
		top: 140px;
		left: 0;
		right: 0;
		bottom: 0;
		overflow-y: auto;
	}
  .screen-box{
  	border-bottom:1px solid #ddd ;
  	color: #555;
  	font-size: 0.8px;
  	background-color:#fff ;
  	padding: 5px;
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
    	}
    }

  }
  .exam-btm-btn{
	button{
    	font-size: 0.8rem;
		height: 26px;
		line-height: 26px;
		padding: 0 4px;
		margin-left: 5px;

	}
}
.list{
	padding: 10px;
	.list-li{
		margin-bottom: 10px;
		border: 1px solid #ddd;
		border-radius: 6px;
		overflow: hidden;
	}
}
.examine-box{
	font-size: 0.8rem;
	.examine-box-top{
		padding: 5px;
		background-color: #5fb5ea;
		color: #fff;
		P{
			margin-bottom: 5px;
			clear: both;
			overflow: hidden;
			span:first-child{
				float: left;
			}
			span:last-child{
				float: right;
			}
		}
	}
	.exam-btn-date{
		clear: both;
		overflow: hidden;
		li{
			float: left;
			width: 33.33%;
			text-align: center;
			span{
				display: block;
				padding:5px 0 3px 0 ;
				color: #555;
			}
			span:first-child{
				color: #777;
			}
		}
	}
	.examine-box-btm{
		background-color: #fff;
	}
	.exam-btm-btn{
		padding: 10px 5px;
		text-align: right;
	}
}
.search-box{
  margin: 10px 0;
  font-size: 0.8rem;
  padding: 0 10px 10px 10px;
  border-bottom:1px dotted #999;
  color: #666;
  p{
    margin-bottom:10px;
  }
  input{
    height:22px;
    line-height: 22px;
    width: 45%;
  }
  .search-text{
    width: 60%;
  }
  .search-box-list{
    margin-bottom: 10px;
    clear: both;
    overflow: hidden;
    label{
      float: left;
      width: 35%;
      margin-top:4px;
    }
    input{
      float: right;
      width: 60%;
    }
  }
  .search-select{
    select{
      height: 22px;
      line-height: 22px;
      margin-left: 7px;
      border:none;
    }
  }
}
.search-box-btn{
  text-align: center;
  button:first-child{
    margin-right: 10px;
  }
}
</style>
