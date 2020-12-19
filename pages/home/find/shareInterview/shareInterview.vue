<template>
  <view class="shareInterview">
    <view class="left">
      <view class="title"> {{ info.title }} </view>

      <view class="content u-line-3">
        {{ info.content.slice(2, info.content.length) }}
      </view>

      <view class="other">
        <image
          v-if="info.cover"
          class="o1"
          :src="String($baseUrl) + info.author.avatar"
        />

        <view class="o2"> {{ info.author.nickname }} </view>

        <view class="o3">
          {{ Date.parse(info.updated_at) | timeFrom('yyyy.mm.dd') }}
        </view>
        <!-- | formatTime-->
        <view class="o4 iconfont">&#xe65b;</view>

        <view class="o5">{{ info.read }}</view>

        <view class="o6 iconfont">&#xe638;</view>

        <view class="o7">{{ info.star }}</view>
      </view>
    </view>
  </view>
</template>

<script>
export default {
  props: ['info']
}
</script>

<style lang="scss" scoped>
.shareInterview {
  height: 170px;
  border-bottom: 1px solid #f7f4f5;
  .title {
    font-size: 16px;
    font-family: PingFangSC, PingFangSC-Medium;
    font-weight: 600;
    text-align: left;
    color: #181a39;
    line-height: 22.5px;
    letter-spacing: 0.19px;
    padding-top: 16.5px;
    margin-bottom: 10.25px;
  }
  .content {
    font-size: 13px;
    font-family: PingFangSC, PingFangSC-Regular;
    font-weight: 400;
    text-align: left;
    color: #545671;
    line-height: 18.5px;
    letter-spacing: 0.15px;
    margin-bottom: 17.25px;
  }
  .other {
    display: flex;
    .o1 {
      width: 22px;
      height: 22px;
      border-radius: 50%;
      margin-right: 10px;
    }
    .o2 {
      font-size: 12px;
      font-family: PingFangSC, PingFangSC-Regular;
      font-weight: 400;
      text-align: left;
      color: #545671;
      line-height: 16.5px;
      letter-spacing: 0.14px;
      margin-right: 69px;
    }
    .o3,
    .o4,
    .o5,
    .o6,
    .o7 {
      font-size: 12px;
      font-family: PingFangSC, PingFangSC-Regular;
      font-weight: 400;
      text-align: left;
      color: #b4b4bd;
      line-height: 16.5px;
      letter-spacing: 0.14px;
    }
    .o3 {
      margin-right: 21px;
    }
    .o4 {
      margin-right: 7px;
    }
    .o5 {
      margin-right: 23px;
    }
    .o6 {
      margin-right: 9.5px;
    }
  }
}
</style>
