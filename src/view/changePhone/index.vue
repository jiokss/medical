<template>
    <div>
      <div>
        <mt-field label="旧手机号码" placeholder="请输入旧手机号码" type="number"></mt-field>
        <mt-field label="新手机号码" placeholder="请输入新手机号码" type="number"></mt-field>
        <mt-field label="新手机号码" placeholder="请输入新手机号码" type="number"></mt-field>
      </div>
      <div class="from-btn">
        <mt-button type="primary" size="large">确认修改</mt-button>
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
  .from-btn{
    padding: 20px;
  }
</style>

