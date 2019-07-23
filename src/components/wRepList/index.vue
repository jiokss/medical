<template>
    <div>
      <mt-loadmore :bottom-method="loadBottom" :bottom-all-loaded="allLoaded" :auto-fill="false" ref="loadmore">
       <ul class="list" >
		        <li class="list-li" v-for="(item,index) in pageList" :key="index">
		          <div class="examine-box">
		          	<div class="examine-box-top" @click="showRepData">
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
		          			<mt-button type="default" @click="order">遗传咨询</mt-button>
			             	<mt-button type="default" @click="showPic">电子发票</mt-button>
			             	<mt-button type="default" @click="showPic">申请单</mt-button>
			             	<mt-button type="default">待发布</mt-button>
		          		</div>
		          	</div>
		          </div>
		        </li>
		      </ul>
        </mt-loadmore>
    </div>
</template>
<script>
export default {
   data() {
      return {
        pageList:[1,2,3,4],

        //请求的数据
        allLoaded: false,                       //是否可以上拉属性，false可以上拉，true为禁止上拉，就是不让往上划加载数据了
        scrollMode:"auto",                       //移动端弹性滚动效果，touch为弹性滚动，auto是非弹性滚动
         searchCondition:{                       //分页属性
          pageNo:"1",                           //页数
          pageSize:"10"                         //每页条数
        },

      }
   },
   activated() {
   },
   methods:{
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
        this.$axios.get('/dataList').then(res =>{
          this.pageList.push(res.data)
        // 是否还有下一页，加个方法判断，没有下一页要禁止上拉
        // this.isHaveMore(1);
        // this.pageList =[...this.pageList,...res.data] ;//
        // console.log(res.data);
        // this.$nextTick(function () {
        // this.scrollMode = "touch";           // 原因是DOM更新循环结束时调用延迟回调函数，大意就是DOM元素在因为某些原因要进行修改就在这里写，要在修改某些数据后才能写，
        // 这里之所以加是因为有个坑，iphone在使用-webkit-overflow-scrolling属性，就是移动端弹性滚动效果时会屏蔽loadmore的上拉加载效果，
        // 花了好久才解决这个问题，就是用这个函数，意思就是先设置属性为auto，正常滑动，加载完数据后改成弹性滑动，安卓没有这个问题，移动端弹性滑动体验会更好
        //     });
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
      },
      showPic(){
          this.$router.replace({ path: "/showImages" })
      },
      showRepData(){
          this.$router.replace({ path: "/testSheet" })
      },
      order(){
          this.$router.replace({ path: "/order" })
      }
   }
}
</script>
<style lang="scss" scoped >
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
	padding: 0 10px 10px;
	.list-li{
		margin-bottom: 10px;
		//border: 1px solid #ddd;
		border-radius: 3px;
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
    border-left:1px solid #ddd;
    border-right:1px solid #ddd;
    border-bottom:1px solid #ddd;
    border-radius:0 0 4px 4px;
	}
	.exam-btm-btn{
		padding: 10px 5px;
		text-align: right;
	}
}
</style>
