<template>
  <u-cell-group>
    <u-cell-item class="findCell">
      <view slot="title" class="title">
        {{ title }}
      </view>

      <view class="value" @click="getMore">
        查看更多
      </view>

      <u-icon slot="right-icon" class="iconfont"></u-icon>
    </u-cell-item>
  </u-cell-group>
</template>

<script>
export default {
  props: ['title'],
  methods: {
    getMore () {
      this.$emit('click')
    }
  }
}
</script>

<style lang="scss" scoped>
.findCell {
  padding: 14.5px 0;
  .title {
    padding-left: 10px;
    font-size: 18px;
    font-family: PingFangSC, PingFangSC-Medium;
    font-weight: 600;
    text-align: left;
    color: #222222;
    line-height: 25px;
    letter-spacing: 0.21px;
    padding: 0;
  }
  .value {
    font-size: 14px;
    font-family: PingFangSC, PingFangSC-Regular;
    font-weight: 400;
    text-align: right;
    color: #5b5d75;
    line-height: 20px;
    letter-spacing: 0.16px;
  }
  .img {
    width: 40px;
    height: 40px;
    border-radius: 50%;
  }
}
</style>
