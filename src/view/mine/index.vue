<template>
    <div>
      <div class="user-box">
        <img src="../../lib/imgs/logo.png" />
        <p>用户：<span>132457859849</span></p>
      </div>
      <div class="list-box">
        <mt-cell title="修改手机号" to="/changePhone" is-link></mt-cell>
        <mt-cell title="遗传咨询记录" to="/consultation" is-link></mt-cell>
        <mt-cell title="意见反馈" is-link></mt-cell>
      </div>
      <div class="mine-btn">
        <mt-button type="primary" size="large">退出登录</mt-button>
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
  .user-box{
    padding: 40px 20px;
    margin-bottom: 20px;
    text-align: center;
    background: #fff;

    p{
      margin-top:10px;
      height: 25px;
      line-height: 25px;
      font-size: 1.0rem;
      color: #666;
    }
    img{
      width: 240px;
      padding-bottom: 20px;
      border-bottom:1px solid #dedede
    }
  }
  .mint-cell,.user-box{
    border-bottom: 1px dotted #dedede;
  }
  .list-box{
    border-top: 1px dotted #dedede;
  }
  .mine-btn{
    padding: 20px
  }
</style>


</style>
