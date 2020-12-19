<template>
  <!-- pages/home/find/shareInterview/getMore -->
  <view class="getMore">
    <u-search
      class="search"
      margin="30rpx"
      :input-style="{ 'text-indent': '50px' }"
      placeholder="请输入关键字"
      input-align="center"
      v-model="keyword"
    >
      <span></span>
    </u-search>
    <view class="list" v-for="(item, index) in list" :key="index">
      <shareInterview :info="item"></shareInterview>
    </view>
  </view>
</template>

<script>
import shareInterview from './shareInterview'
import { articlesShare } from '@/api/find'
export default {
  components: { shareInterview },
  data () {
    return {
      list: [],
      keyword: '',
      qData: {
        start: 0,
        limit: 3,
        q: ''
      }
    }
  },
  mounted () {
    this.request()
  },
  methods: {
    async request () {
      const res = await articlesShare(this.qData)
      this.list = res.list
    }
  }
}
</script>

<style lang="scss" scoped>
.getMore {
  margin: auto 15px;
  .search {
    margin: 11.3px auto !important;
  }
}
</style>
