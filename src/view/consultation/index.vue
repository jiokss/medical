<template>
    <div>
      <div class="cons-box">
        <h4 class="cons-title">您的报告遗传咨询已经预约成功</h4>
        <p class="cons-date">2018-09-08 15:00-16:30</p>
        <p>嘉捡医学专业遗传咨询师将在约定时间内致电您登录的手机号进行解答，请保持电话畅通。</p>
        <p>预约记录可在“我的”里面查看。</p>
        <p class="cons-tips">温馨提示:请在预约前与您的家属列出想咨询的内容清单。</p>
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
  .cons-box{
    margin-top: 40px;
    padding: 20px;
    line-height: 30px;
    background: #fff;
    .cons-title,.cons-date{
      margin-bottom: 20px;
      text-align: center;
    }
    p{
      font-size: 0.9rem;
      margin-bottom: 10px;
    }
    .cons-tips{
      border-top: 1px dashed #ddd;
      padding-top: 10px;
      font-size: 0.8rem;
      color: #888;
    }
  }
</style>

