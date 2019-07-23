<template>
    <div>
      <div class="test-sheet">
        <div class="test-title">
          <span class="test-user">张小佳</span>
          <span class="test-code">检测编码：12566</span>
        </div>
        <div class="test-content">
          <ul>
            <li>
              <span>申请项目</span>
              <span>高精度临床外显PLUS</span>
            </li>
            <li>
              <span>送检时间</span>
              <span>2018-09-15</span>
            </li>
            <li>
              <span>嘉捡条码</span>
              <span>00000771</span>
            </li>
            <li>
              <span>预计发布时间</span>
              <span>2018-11-14</span>
            </li>
          </ul>
        </div>
        <div class="test-pay">
          <div class="test-span">实付款</div>
          <div class="test-pay-right">¥<span class="pay-money">9500</span>元</div>
        </div>
        <div class="test-btn">
          <mt-button size="small" type="default">遗传咨询</mt-button>
          <mt-button size="small" type="default">电子发票</mt-button>
          <mt-button size="small" type="default">申请单</mt-button>
          <mt-button size="small" type="default">报告单</mt-button>
        </div>
      </div>
    </div>
</template>
<script>
export default {
   data() {
      return {
      }
   },
   activated() {
   }
}
</script>
<style lang="scss" scoped>
  .test-sheet{
    //height: 38px;
    line-height: 36px;
    color: #777;
    background: #fff;
    .test-title{
      border-bottom:1px dotted #ddd;
      padding: 0 10px;
      clear: both;
      overflow: hidden;
      .test-user{
        float: left;
        color: orangered;
        font-weight: bold;
      }
      .test-code{
        float:right;
      }
    }
    .test-content{
      padding: 10px 5px;
      border-bottom: 1px dotted #ddd;
      span:first-child{
        margin-right:10px;
      }
    }
    .test-pay{
      padding: 5px 10px;
      border-bottom:1px dotted #ddd;
      clear: both;
      overflow: hidden;
      .test-span{
        float: left;
      }
      .test-pay-right{
        float:right;
      }
      .pay-money{
        margin: 0 10px;
        font-size: 1.4rem;
        font-weight: bold;
        color: red;
      }
    }
    .test-btn{
      padding: 10px;
      text-align: right
    }
  }
</style>

