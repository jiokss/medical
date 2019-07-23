<template>
  <div id="myAppointment">
    <div class="contentWrap">
      <div class="head">
        <span>尊敬的:</span>
        <span>张薛佳</span>
      </div>
      <div class="content">
        <div class="wrap">
          <transition :name="showCalendar?'fade':'you'" mode="out-in">
            <inlineCalendar v-if="showCalendar" @change="onChange"/>

            <div v-if="!showCalendar" class="hebdomad">
              <div class="hebdomadTitle">
                <span v-for="(item,index) in hebdomadTitle" :key="index" class="item">{{item}}</span>
              </div>
              <div class="hebdomadDate">
                <span
                  @click="setNowDateFocus(index,item)"
                  v-for="(item,index) in hebdomadDate"
                  :key="index"
                  :class="[item === nowDate?'isNow':'',nowIdx === index?'isFocus':'']"
                  class="item"
                >{{item}}</span>
              </div>
            </div>
          </transition>

          <div class="close">
            <div @click="showCalendar = !showCalendar" class="btn">
              <span :class="showCalendar?'top':'down'" class="icon iconfont icon-icon"></span>
            </div>
          </div>
        </div>

        <div class="dateList">
          <div @click="showRotate = !showRotate" class="title focus_fb5">
            <transition name="opacity" mode="out-in">
              <span key="save" v-if="showRotate">收起</span>
              <span key="edit" v-if="!showRotate">展开</span>
            </transition>
            <span :class="showRotate?'top':'down'" class="icon iconfont icon-icon focus_fb5"></span>
          </div>

          <transition name="fade">
            <div v-show="showRotate" class="item-list">
              <div class="item">
                <div>
                  <span>下午&nbsp;&nbsp;15:00</span>
                  -
                  <span>15:30</span>
                </div>

                <span @click="setAppointment(1)" class="focus_fb5">可预约</span>
              </div>
              <div class="item">
                <div>
                  <span>下午&nbsp;&nbsp;15:30</span>
                  -
                  <span>16:00</span>
                </div>

                <span>已约满</span>
              </div>
              <div class="item">
                <div>
                  <span>下午&nbsp;&nbsp;16:30</span>
                  -
                  <span>17:00</span>
                </div>

                <span @click="setAppointment(2)" class="focus_fb5">可预约</span>
              </div>
              <div class="item">
                <div>
                  <span>下午&nbsp;&nbsp;17:00</span>
                  -
                  <span>18:00</span>
                </div>

                <span>已约满</span>
              </div>
            </div>
          </transition>
        </div>
      </div>
    </div>

  </div>
</template>
<script>

export default {
  name: "myAppointment",
  data() {
    return {
      // 图片IP地址
      serverImgUrl: this.$photoIp,
      isLastPage: false,
      showToast: false,
      showLoading: false,
      //弹出的描述文本
      descText: "",
      // 时间
      date: "",
      date2: "",
      mode: "single",
      //   提示框基础
      showToast_check: false,

      toastTooltip: {
        title: "拒绝访问",
        content: "该账户/手机号非嘉检医学用户",
        btn: "确定",
        icon: "icon-gantanhao"
      },
      // 图标旋转
      showRotate: true,
      // 一周
      hebdomadDate: [],
      // 一周标题
      hebdomadTitle: ["周一", "周二", "周三", "周四", "周五", "周六", "周七"],
      // 当前日期
      nowDate: "",
      // 点击选中焦点
      nowIdx: "",
      // 是否显示日历
      showCalendar: false
    };
  },
  created() {
    // console.log(this.$route.query.pId);
  },
  mounted() {
    // this.toast("功能准备中...");

    this.hebdomadDate.push(
      this.GetDateStr(-3),
      this.GetDateStr(-2),
      this.GetDateStr(-1),
      this.GetDateStr(0),
      this.GetDateStr(1),
      this.GetDateStr(2),
      this.GetDateStr(3)
    );
    this.nowDate = this.GetDateStr(0);
  },
  computed: {},
  methods: {
    toast(descText) {
      this.descText = descText;
      this.showToast = true;
    },
    // 获取小日历时间
    setNowDateFocus(e, date) {
      let Arr = [];
      this.nowIdx = e;

      Arr = this.getNowFormatDate().split("-");

      this.date = Arr[0] + "-" + Arr[1] + "-" + date;

      this.toast(this.date);
    },
    // 获取大日历时间
    onChange(date) {
      //   console.log(date.format("YY-MM-DD"));

      this.date = date.format("YYYY-MM-DD");
      console.log(this.date);
      this.toast(this.date);
    },
    closeToast() {
      //关闭toast
      this.showToast = false;
    },
    setAppointment(e) {
      let date = [],
        that = this;

      if (!this.date) {
        this.date = this.getNowFormatDate();
      }

      if (e == 1) {
        date = ["15:00", "15:30"];
      }
      if (e == 2) {
        date = ["17:00", "18:00"];
      }

      //   console.log(date);
      this.date2 = date;

      let txt =
        "您预约的时间为 " + this.date + "  " + date[0] + " - " + date[1];

      this.$alert(txt)
        .then(msg => {
          setTimeout(() => {
            that.$router.push({
              path: "/myExamine/myAppointmentOk",
              query: { date: that.date, date2: that.date2 }
            });
          }, 500);
        })
        .catch(err => {
          console.log(err);
        });
    },
    getNowFormatDate() {
      let date = new Date();
      let seperator1 = "-";
      let seperator2 = ":";
      let month = date.getMonth() + 1;
      let strDate = date.getDate();
      if (month >= 1 && month <= 9) {
        month = "0" + month;
      }
      if (strDate >= 0 && strDate <= 9) {
        strDate = "0" + strDate;
      }
      let currentdate =
        date.getFullYear() + seperator1 + month + seperator1 + strDate;
      return currentdate;
    },
    ok() {
      console.log("ok");
      // this.showToast_check = false;
    },
    // 关闭
    close() {
      console.log("close");
      this.showToast_check = false;
    },
    // 获取日历一周时间
    GetDateStr(AddDayCount) {
      let dd = new Date();
      dd.setDate(dd.getDate() + AddDayCount); //获取AddDayCount天后的日期
      let y = dd.getFullYear();
      let m =
        dd.getMonth() + 1 < 10 ? "0" + (dd.getMonth() + 1) : dd.getMonth() + 1; //获取当前月份的日期，不足10补0
      let d = dd.getDate() < 10 ? "0" + dd.getDate() : dd.getDate(); //获取当前几号，不足10补0
      // return y + "-" + m + "-" + d;
      return d;
    }
  },

};
</script>
<style lang="scss">
#myAppointment {
  width: 100%;
  .contentWrap {
    width: 100%;
    margin-bottom: px2rem(50);
    overflow-y: auto;
    .head {
      padding: px2rem(20);
      font-size: px2rem(28);
      color: #333;
      border-bottom: 1px solid #eee;
      box-shadow: 1px 5px 5px #eee;

      span:last-child {
        color: #5fb5ea;
      }
    }
    .content {
      width: 100%;
      padding: px2rem(30);

      .wrap {
        position: relative;
        margin-bottom: px2rem(150);

        .close {
          width: 100%;
          display: -webkit-box;
          display: -ms-flexbox;
          display: flex;
          display: -webkit-flex;
          justify-content: center;
          align-items: center;
          position: absolute;
          bottom: px2rem(-50);
          left: 0;

          .btn {
            display: -webkit-box;
            display: -ms-flexbox;
            display: flex;
            display: -webkit-flex;
            justify-content: center;
            align-items: center;
            width: px2rem(220);
            height: px2rem(50);
            background-color: #f7f7f8;
            border-bottom-left-radius: 100%;
            border-bottom-right-radius: 100%;
            border-left: 1px solid #eee;
            border-right: 1px solid #eee;
            border-bottom: 1px solid #eee;
            font-size: px2rem(28);
            color: #5fb5ea;

            .icon-icon {
              transition: all 0.5s;
            }
            .top {
              transform: rotate(180deg);
            }
            .down {
              transform: rotate(360deg);
            }
          }
        }
      }

      .dateList {
        margin-top: px2rem(50);

        .title {
          display: -webkit-box;
          display: -ms-flexbox;
          display: flex;
          display: -webkit-flex;
          -webkit-box-align: center;
          -ms-flex-align: center;
          align-items: center;
          justify-content: center;

          font-size: px2rem(32);
          color: #333;

          .icon-icon {
            font-size: px2rem(35);
            font-weight: bold;
            transition: all 0.5s;
          }

          .top {
            transform: rotate(180deg);
          }
          .down {
            transform: rotate(360deg);
          }
        }
        .item-list {
          width: 100%;
          border: 1px solid #ccc;
          border-radius: px2rem(10);
          margin-top: px2rem(50);

          .item + .item {
            border-top: 1px solid #eee;
          }
          .item {
            padding: px2rem(30);
            display: -webkit-box;
            display: -ms-flexbox;
            display: flex;
            display: -webkit-flex;
            -webkit-box-pack: justify;
            -ms-flex-pack: justify;
            justify-content: space-between;
            font-size: px2rem(28);
            color: #666;
          }
        }
      }

      .hebdomad {
        width: 100%;

        .hebdomadTitle,
        .hebdomadDate {
          display: -webkit-box;
          display: -ms-flexbox;
          display: flex;
          display: -webkit-flex;
          -webkit-box-pack: justify;
          -ms-flex-pack: justify;
          justify-content: space-between;
          // padding: px2rem(20);
          background-color: #f7f7f8;
          border-radius: px2rem(10);
          .item {
            color: #333;
            font-size: px2rem(24);
            // padding: 0 px2rem(20);
          }
        }
        .hebdomadTitle {
          padding: px2rem(20);
        }
        .hebdomadDate {
          padding: px2rem(20) px2rem(10);
          background-color: #fff;
          border-left: 1px solid #f7f7f8;
          border-right: 1px solid #f7f7f8;
          border-bottom: 1px solid #f7f7f8;
          background-color: #fff;
          z-index: 99;
          .item {
            display: -webkit-box;
            display: -ms-flexbox;
            display: flex;
            display: -webkit-flex;
            width: px2rem(60);
            height: px2rem(60);
            justify-content: center;
            align-items: center;
            border-radius: 50%;
          }
          .isNow {
            background-color: #e3e3e3;
            color: #333;
          }
          .isFocus {
            background-color: #5fb5ea;
            color: #fff;
          }
        }
      }
    }
  }

  .toast-container {
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate3d(-50%, -50%, 0);
  }
  .loading-container {
    position: fixed;
    left: 0;
    right: 0;
    bottom: 0;
    top: 0;
  }

  .fade-enter-active,
  .fade-leave-active {
    transition: all 0.5s;
  }
  .fade-enter,
  .fade-leave-to {
    transform: translate3d(0, -20%, 0);
  }

  .you-enter-active,
  .you-leave-active {
    transition: all 0.5s;
  }
  .you-enter,
  .you-leave-to {
    transform: translate3d(20%, 0, 0);
  }

  .opacity-enter-active,
  .opacity-leave-active {
    transition: opacity 0.35s;
  }
  .opacity-enter,
  .opacity-leave-to {
    opacity: 0;
  }

  .m-next-btn {
    //background-image: url(./img/you.png) !important;
  }
  .m-prev-btn {
    //background-image: url(./img/zuo.png) !important;
  }
  .m-select {
    background-color: #5fb5ea !important;
  }
}
</style>
