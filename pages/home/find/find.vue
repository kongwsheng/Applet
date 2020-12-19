<template>
  <view class="find">
    <findCell title="面试技巧"></findCell>
    <view v-for="(item, index) of infoList" :key="index" class="shareItem">
      <shareItem :info="item"></shareItem>
    </view>
    <findCell title="市场数据"></findCell>
    <view class="marketData">
      <marketData :chart="marketData"></marketData>
    </view>
    <findCell @click="getMore" title="面经分享"></findCell>
    <view v-for="item of siList" :key="item.id" class="shareInterview">
      <shareInterview :info="item"></shareInterview>
    </view>
    <u-loadmore
      class="loadmore"
      color="#b4b4bd"
      font-size="14"
      bg-color="#F7F4F5"
      v-if="Bottom.statu"
      :status="Bottom.status"
      :load-text="Bottom"
    />
  </view>
</template>
<script>
import findCell from './findCell'
import shareItem from './share-item'
import marketData from './marketData'
import shareInterview from './shareInterview/shareInterview'
import { articlesTechnic, chartDataHot, articlesShare } from '@/api/find'
import '@/static/iconfont/iconfont.css'
export default {
  components: { findCell, shareItem, marketData, shareInterview },
  data () {
    return {
      infoList: [],
      marketData: {},
      siList: [],
      Bottom: {
        status: '',
        statu: '',
        nomore: '到底了'
      },
      qData: {
        start: 0,
        limit: 3,
        q: ''
      }
    }
  },
  onPullDownRefresh () {
    console.log('refresh')
    setTimeout(function () {
      uni.stopPullDownRefresh()
    }, 1000)
  },
  onReachBottom () {
    this.Bottom.statu = true
    console.log(123)
  },
  async mounted () {
    const res = await Promise.all([
      articlesTechnic(this.qData),
      chartDataHot(),
      articlesShare(this.qData)
    ])
    //面试技巧
    this.infoList = res[0].list
    // 市场数据
    res[1].yearSalary.reverse()
    this.marketData = res[1]
    // 面经分享 arguments
    this.siList = res[2].list
  },
  methods: {
    getMore () {
      uni.navigateTo({ url: '/pages/home/find/shareInterview/getMore' })
    }
  }
}
</script>

<style lang="scss" scoped>
.find {
  padding: 0 14.5px;
  .shareItem {
    padding: 14.5px 0;
  }
  .loadmore {
    height: 67px !important;
    margin: auto -15px;
  }
}
</style>
