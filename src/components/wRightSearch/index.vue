<template>
    <div>
      <div class="right-search-box">
        <mt-popup v-model="popupVisible" @chaneType="propClone" popup-transition="popup-fade" closeOnClickModal="true" position="right">
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
      </div>
      <div>
      <div class="datePicker">
        <mt-datetime-picker
            type="date"
            ref="picker"
            year-format="{value} 年"
            month-format="{value} 月"
            date-format="{value} 日"
            @confirm="handleConfirm"
            :startDate="startDate"
            v-model="mytime"
          >
          </mt-datetime-picker>
        </div>
      </div>
    </div>
</template>
<script>
export default {
   data() {
      return {
        mytime:new Date('2019-07-22'),
        show:false,
        startDate: new Date('1900-01-01'),
        sTimeStar:'',
        sTimeEnd:'',
      	sheetVisible:false,
        seleTitle:'全部',
        popupVisible: this.showprop

      }
   },
   activated() {
   },
   methods:{
      openPicker () {
          this.$refs.picker.open()
      },

      propClone(){
        //this.popupVisible = false
        this.$emit('childByValue', !this.popupVisible)
      },
      searchSubmit(){

      },
      handleConfirm (data) {
        this.sTimeStar = data;   //获取的时间为时间戳，getdata是自己写的一个转换时间的方法
      },
      getLibrary(title,index){
        console.log(title)
        console.log(index)
        this.seleTitle = title.name
      },

   },
   watch:{
     showprop(n,o){
       this.popupVisible = this.showprop
     },
     popupVisible(newVle,oldVle){
       console.log(newVle)
       console.log(oldVle)
     }
   },
  props:['showprop']
}
</script>
<style lang="scss" scoped >
.search-box{
  margin: 10px 0;
  font-size: 0.9rem;
  padding: 0 10px 10px 10px;
  border-bottom:1px dotted #dedede;
  color: #666;
  p{
    margin-bottom:10px;
  }
  input{
    border:1px solid #ddd;
    padding:0 1%;
    height:26px;
    line-height: 26px;
    width: 43%;
    outline:none;
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
      height: 26px;
      line-height: 26px;
      margin-left: 7px;
      border:1px solid #ddd;
      background:#fff;
    }
  }
}
.search-box-btn{
  text-align: center;
  button:first-child{
    margin-right: 10px;
  }
}
.right-search-box .mint-popup{
  top:0;
  bottom:0;
  left:60px;
  -webkit-transform:none;
  transform:none;
  -webkit-backface-visibility:none;
  backface-visibility:none;
  -webkit-transition:none;
  transition:none;
}
.right-search-box .mint-popup-right{
  -webkit-transform:none;
  transform:none;

}
</style>
