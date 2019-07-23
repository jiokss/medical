<template>
    <div>
      <div class="search-box">
        <div class="search-left">
          <select class="search-select" name="" id="">
            <option value="">全部分类</option>
            <option value="">高精度基因包</option>
            <option value="">线粒体病</option>
            <option value="">定点检测</option>
          </select>
        </div>
        <div class="search-right">
          <input type="text" placeholder="搜索所有项目">
        </div>
      </div>

      <div class="item-box">
          <div class="item-ul">
              <ul class="item-ul-box">
                <li class="item-box-li" v-for="(item,index) in list" :key="index">
                  <div class="item-list">
                    <div class="item-list-title" @click="changeContent(index)" >{{ item.title }}<span class="show-down">收起</span></div>
                    <div class="item-list-cont" v-show="item.showContent">
                      <ul>
                        <li class="item-cont-tabe">
                          <span class="item-tabe-name">基因信息</span>
                          <span class="item-tabe-val">{{ item.jy }}</span>
                        </li>
                        <li class="item-cont-tabe">
                          <span class="item-tabe-name">基因信息</span>
                          <span class="item-tabe-val">{{ item.jc }}</span>
                        </li>
                        <li class="item-cont-tabe">
                          <span class="item-tabe-name">基因信息</span>
                          <span class="item-tabe-val">{{ item.dx }}</span>
                        </li>
                        <li class="item-cont-tabe">
                          <span class="item-tabe-name">基因信息</span>
                          <span class="item-tabe-val">{{ item.cx }}</span>
                        </li>
                        <li class="item-cont-tabe">
                          <span class="item-tabe-name">基因信息</span>
                          <span class="item-tabe-val">{{ item.bg }}</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </li>

              </ul>
          </div>
      </div>

    </div>
</template>
<script>
export default {
   data() {
      return {
        showList:false,
         list:[
           {title:'分类一',showContent:false,jy:'2000个一直致病基因',jc:'NGS',dx:'先整着+父母',cx:'父母免费二代',bg:'先证者临床报告'},
           {title:'分类二',showContent:false,jy:'2000个一直致病基因',jc:'NGS',dx:'先整着+父母',cx:'父母免费二代',bg:'先证者临床报告'}
          ]
      }
   },
   activated() {
   },
   methods:{
      changeContent(index){                       //通过index拿到当前值
        this.list[index].showContent=!this.list[index].showContent;
      }
   }
}
</script>
<style lang="scss" scoped>
  .search-box{
    padding: 10px;
    border-bottom:1px solid #dedede;
    clear: both;
    overflow: hidden;
    background: #fff;
    .search-left{
      float: left;
      width: 30%;
      .search-select{
        height: 26px;
        line-height: 26px;
        border: 1px solid #dedede;
       // background: #eee;
        outline: none;
      }
    }
    .search-right{
      float: left;
      width: 70%;
      box-sizing: border-box;
      border:1px solid #dedede;
      padding: 0 40px 0 10px;
      input{
        width: 100%;
        height: 24px;
        border: none;
        line-height: 24px;
        outline: none;
      }
    }
  }
  .item-box{
    position: fixed;
    top: 95px;
    left:0;
    right:0;
    bottom:0;
    overflow-y: auto;
  }
  .item-ul-box{
    //background: #fff;
  }
  .item-list{
    font-size: 0.8rem;
    margin-top:-1px;
    li,.item-list-title{
      padding: 0 10px;
      height: 32px;
      line-height: 32px;
    }
    .item-list-title{
      border-top:1px dotted #eee;
      border-bottom:1px dotted #eee;
      background: #fff;
      span{
        float: right;
      }
    }
    .item-list-cont{
      background: #fff;
      margin-bottom: 5px;
    }
    .item-cont-tabe{
      clear: both;
      overflow: hidden;
      .item-tabe-name{
        float: left;
        width: 18%;
        padding:0 2%;
        color:#777;
      }
      .item-tabe-val{
        float: left;
        width: 78%;
        color:#666;
      }
    }
  }


</style>

