<template>
  <view class="technic-item">
    <view class="left">
      <view class="title"> {{ info.title }} </view>
      <view class="other">
        <view class="o1">
          {{ Date.parse(info.updated_at) | timeFrom('yyyy.mm.dd') }}
        </view>
        <!-- | formatTime-->
        <view class="o2 iconfont">&#xe644;</view>
        <view class="o3">{{ info.read }}</view>
        <view class="o4 iconfont">&#xe638;</view>
        <view class="o5">{{ info.star }}</view>
      </view>
    </view>
    <img
      v-if="info.cover"
      class="right"
      :src="String($baseUrl) + info.cover"
      alt=""
    />
    <!-- <img  class="right" src="@/assets/logo.png" alt="" /> -->
  </view>
</template>

<script>
export default {
  props: ['info'],
  data () {
    return {
      // baseUrl: this.$baseUrl
    }
  }
}
</script>

<style lang="scss" scoped>
.technic-item {
  display: flex;
  justify-content: space-between;

  .left {
    flex: 2;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    .title {
      font-size: 16px;
      font-family: PingFangSC, PingFangSC-Medium;
      font-weight: 500;
      text-align: left;
      color: #181a39;
      line-height: 22.5px;
      letter-spacing: 0.19px;
    }
    .other {
      display: flex;
      font-size: 12px;
      font-family: PingFangSC, PingFangSC-Regular;
      font-weight: 400;
      text-align: left;
      color: #b4b4bd;
      line-height: 16.5px;
      letter-spacing: 0.14px;
      .o1 {
        flex: 1;
      }
      .o3 {
        margin-right: 21px;
      }
      .iconfont {
        margin-right: 7px;
      }
    }
  }
  .right {
    flex: 1;
    // text-align: right;
    width: 113px;
    height: 75px;
    margin-left: 15.9px;
    object-fit: cover;
  }
}
</style>
