<template>
  <view class="marketData">
    <view class="tag">
      <view class="t1">{{ chart.city }}</view>
      <view class="t1">{{ chart.position }}</view>
    </view>

    <view class="datas" v-for="(item, index) in chart.yearSalary" :key="index">
      <view class="d1">{{ item.year.substr(0, 5) }}</view>
      <view class="d2">
        <view class="d2a">
          <view
            class="d2b"
            :style="{ width: (item.salary / chart.topSalary) * 100 + '%' }"
          >
            ¥{{ item.salary }}
          </view>
        </view>
      </view>

      <view class="d3 iconfont">
        <span v-if="item.percent">
          <span class="iconfont" v-if="item.percent > 0"> &#xe651;</span>
          <span class="iconfont d3a" v-else>&#xe64e;</span>
        </span>
      </view>
      <view class="d3a iconfont"></view>
      <view class="d4">{{ item.percent ? item.percent : 0 }}%</view>
    </view>
  </view>
</template>

<script>
export default {
  props: ['chart']
}
</script>

<style lang="scss" scoped>
.marketData {
  .tag {
    display: flex;
    margin: 27.75px 0 21.75px;
    .t1 {
      background: #eceaea;
      border-radius: 4px;
      text-align: center;
      font-size: 14px;
      font-family: PingFangSC, PingFangSC-Regular;
      font-weight: 400;
      text-align: center;
      color: #545671;
      line-height: 20px;
      letter-spacing: 0.16px;
      margin-right: 15px;
      padding: 5.75px;
    }
  }
  .datas {
    display: flex;
    .d1 {
      font-size: 14px;
      font-family: PingFangSC, PingFangSC-Regular;
      font-weight: 400;
      text-align: center;
      color: #545671;
      line-height: 20px;
      letter-spacing: 0.16px;
      margin-right: 11.15px;
    }
    .d2 {
      height: 12px;
      flex: 1;
      fnt-size: 11px;
      font-family: PingFangSC, PingFangSC-Regular;
      font-weight: 400;
      text-align: center;
      color: #ffffff;
      line-height: 15px;
      letter-spacing: 0.13px;
      .d2a {
        background: #ebdfdf;
        border-radius: 4px;
        .d2b {
          // width: 80%;
          background: #fe6d67;
          border-radius: 4px;
        }
      }
    }
    .d3 {
      width: 16px;
      margin: 0 8px 0 14px;
    }
    .d3 {
      color: #60d183;
    }
    .d3a {
      color: #fe6d67;
    }
    .d4 {
      width: 37px;
      text-align: center;
    }
  }
}
</style>
