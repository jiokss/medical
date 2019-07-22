<template>
    <div>
      <div class="sreach-box">
          <div class="sreach-box-left">
              <span></span>
              <input type="text" placeholder="搜索/查找">
          </div>
          <a href="javascript:;">搜索</a>
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
<style lang="scss" scoped >
.sreach-box{
  background: #fff;
  border-bottom:1px solid #f2f2f2;
  padding: 6px 8px;
  clear: both;
  overflow: hidden;
  .sreach-box-left {
    float: left;
    width: 80%;
    border-radius: 3px;
    background-color:rgb(241,243,244);
    input{
      float:right;
      width: 90%;
      height:26px;
      line-height:26px;
      border:none;
      background-color:transparent;
      outline: none;
    }
  }
  a{
    float: left;
    display: block;
    width: 20%;
    height:26px;
    line-height:26px;
    text-align: center;
    color: #777;
    font-size: 0.9rem;
  }
}

</style>
