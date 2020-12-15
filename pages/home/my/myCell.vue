<template>
  <u-cell-group>
    <u-cell-item class="myCell">
      <view slot="icon" class="iconfont" v-html="icon"></view>

      <view slot="title" class="title">
        {{ title }}
      </view>

      <image
        class="image"
        v-if="type === 'image' && value"
        :src="baseUrl + value"
        alt=""
      />

      <image
        class="image"
        v-else-if="type === 'image' && !value"
        src="@/static/logo.png"
        alt=""
      />

      <view v-else class="value">
        {{ value }}
      </view>

      <u-icon slot="right-icon" class="iconfont"></u-icon>
    </u-cell-item>
  </u-cell-group>
</template>

<script>
import '@/static/iconfont/iconfont.css'
export default {
  props: ['title', 'value', 'icon', 'type']
}
</script>

<style lang="scss" scoped>
.myCell {
  .title {
    padding-left: 10px;
    font-size: 14px;
    font-family: PingFangSC, PingFangSC-Regular;
    font-weight: 400;
    text-align: left;
    color: #181a39;
    line-height: 20px;
    letter-spacing: 0px;
  }
  .value {
    font-size: 14px;
    font-family: PingFangSC, PingFangSC-Regular;
    font-weight: 400;
    text-align: right;
    color: #5b5d75;
    line-height: 20px;
    letter-spacing: 0px;
  }
  .img {
    width: 40px;
    height: 40px;
    border-radius: 50%;
  }
}
</style>
