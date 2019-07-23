<template>
    <div>
      <div class="order-box">
        <div class="order-title">
          尊敬的：张小嘉
        </div>
        <div class="order-content">
          <div class="order-con">
            <div class="order-con-title">
                预约遗传咨询须知
            </div>
            <p>收费标准：500/次，持嘉检医学报告单享有首次遗传咨询免费。</p>
            <p>咨询方式：有嘉检医学专业遗传咨询师在预约时间内致电进行解答。</p>
            <p>温馨提示：请在预约前与您的家属列出想咨询的内容清单。</p>
            <div class="order-btn">
                <mt-button type="default" size="small" @click="orderConsultation">我已知悉，现在预约</mt-button>
            </div>

          </div>

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
   },
   methods:{
     orderConsultation(){
       this.$router.replace("/orderConsultation")
     }
   }
}
</script>
<style lang="scss" scoped>
  .order-title{
    height: 38px;
    line-height: 38px;
    padding:0 10px;
    border-bottom:1px solid #ddd;
    background: #fff;
  }
  .order-content{
    //padding:5px 15px;
    // border: 1px solid #ddd;
    // background: #fff;
    .order-con{
      margin-top: 10px;
      padding:20px 10px 50px 10px;
      border-top: 1px dotted #ddd;
      border-bottom: 1px dotted #ddd;
      background: #fff;
    }
    .order-con-title{
      margin: 10px 0 20px 0;
      text-align: center;
    }
    p{
      margin-bottom:20px;
      font-size: 1rem;
      color: orangered
    }
    .order-btn{
      margin-top: 50px;
      text-align: center;
    }
  }
</style>

