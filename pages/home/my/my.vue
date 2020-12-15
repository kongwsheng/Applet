<template>
  <view class="my">
    <view class="top">
      <view class="top1">
        <view class="left">
          <view v-if="userInfo.nickname" class="left-name">
            {{ userInfo.nickname }}
          </view>
          <view v-else class="left-name" @click="login">立即登录</view>

          <view v-if="userInfo.intro" class="left-text">
            {{ userInfo.intro }}
          </view>
          <view v-else class="left-text">黑马面面移动端</view>
        </view>
        <image
          class="right"
          v-if="userInfo.avatar"
          :src="baseUrl + userInfo.avatar"
          alt=""
          @click="goInfo"
        />
        <image
          class="right"
          @click="goInfo"
          v-else
          src="@/static/logo.png"
          alt=""
        />
      </view>
      <view class="top2">
        <view class="top2-item">
          <view class="num">298</view>
          <view class="txt">累计答题</view>
        </view>
        <view class="top2-item">
          <view class="num">98</view>
          <view class="txt">收藏答题</view>
        </view>
        <view class="top2-item">
          <view class="num">198</view>
          <view class="txt">我的错题</view>
        </view>
        <view class="top2-item">
          <view class="num">76%</view>
          <view class="txt">正确率</view>
        </view>
        <!-- </view>
      <view class="top3">
        <! van-cell
        title:左边文本
        value:右边文本
        is-viewnk右边小剪头
        icon:vant自带图标
        center:true:上下居中对齐
        slot="title/defaviewt/icon/right-icon"
        -->
        <!--  -->
      </view>
      <view class="top3">
        <myCell
          class="cell"
          title="我的岗位"
          :value="userInfo.position"
          icon="&#xe64d;"
        ></myCell>
      </view>
    </view>
    <view class="content">
      <view class="middle">
        <h3 class="middle-title">面经数据</h3>
        <view class="middle-content">
          <view class="middle-item">
            <view class="item-top">昨日阅读<span>+300</span></view>
            <view class="item-middle">17</view>
            <view class="item-bottom">
              阅读总数
            </view>
          </view>
          <view class="middle-item">
            <view class="item-top">昨日获赞<span>+300</span></view>
            <view class="item-middle">17</view>
            <view class="item-bottom">
              获赞总数
            </view>
          </view>
          <view class="middle-item">
            <view class="item-top">昨日新增<span>+300</span></view>
            <view class="item-middle">17</view>
            <view class="item-bottom">
              评论总数
            </view>
          </view>
        </view>
      </view>
      <view class="bottom">
        <myCell icon="&#xe655;" title="我的面经分享" value="21"></myCell>
        <myCell icon="&#xe656;" title="我的消息" value="21"></myCell>
        <myCell icon="&#xe654;" title="收藏的题库" value="21"></myCell>
        <myCell icon="&#xe64f;" title="收藏的企业" value="21"></myCell>
        <myCell icon="&#xe64f;" title="我的错题" value="21"></myCell>
        <myCell icon="&#xe611;" title="收藏的面试经验" value="21"></myCell>
      </view>
    </view>
  </view>
</template>

<script>
import myCell from './myCell'
import { mapState } from 'vuex'
export default {
  components: { myCell },
  data () {
    return {}
  },
  methods: {
    login () {
      uni.navigateTo({ url: '/pages/login/login' })
    },
    goInfo () {
      this.$router.push('/home/myInfo')
    }
  },
  computed: {
    ...mapState(['userInfo', 'isLogin'])
  }
}
</script>

<style lang="scss" scoped>
.my {
  // height: 100%;
  background-color: #f7f4f5;
  .top {
    background-color: #b90837;
    padding: 31px 15px 0;
    position: relative;
    .top1 {
      display: flex;
      justify-content: space-between;
      .left {
        flex: 1;
        .left-name {
          font-size: 21px;
          font-family: PingFangSC, PingFangSC-Semibold;
          font-weight: 600;
          text-align: left;
          color: #ffffff;
          line-height: 30px;
          letter-spacing: 0px;
        }
        .left-text {
          opacity: 0.7;
          font-size: 12px;
          font-family: PingFangSC, PingFangSC-Regular;
          font-weight: 400;
          text-align: left;
          color: #ffffff;
          line-height: 16px;
          letter-spacing: 0px;
        }
      }
      .right {
        width: 50px;
        height: 50px;
        border: 3px solid rgba(255, 255, 255, 0.38);
        border-radius: 50%;
      }
    }
    .top2 {
      margin-top: 28px;
      padding-bottom: 55px;
      display: flex;
      justify-content: space-between;
      .top2-item {
        text-align: center;
        .num {
          font-size: 16px;
          font-family: DINAlternate, DINAlternate-Bold;
          font-weight: 700;
          text-align: center;
          color: #ffffff;
          line-height: 24px;
          letter-spacing: 0px;
        }
        .txt {
          opacity: 0.7;
          font-size: 12px;
          font-family: PingFangSC, PingFangSC-Regular;
          font-weight: 400;
          text-align: center;
          color: #ffffff;
          line-height: 16px;
          letter-spacing: 0px;
        }
      }
    }
    .top3 {
      position: absolute;
      left: 0;
      bottom: -16px;
      width: 100%;
      padding: 0 15px;
      .cell {
        border-radius: 8px;
      }
    }
  }
  .content {
    padding: 26px 15px 0;

    .middle {
      background-color: #fff;
      padding: 19px 15px;
      .middle-title {
        font-size: 14px;
        font-family: PingFangSC, PingFangSC-Semibold;
        font-weight: 600;
        text-align: left;
        color: #181a39;
        line-height: 20px;
        letter-spacing: 0px;
        margin-bottom: 17px;
      }
      .middle-content {
        display: flex;
        text-align: center;
        justify-content: space-between;
        .item-top {
          font-size: 12px;
          font-family: PingFangSC, PingFangSC-Regular;
          font-weight: 400;
          text-align: center;
          color: #b4b4bd;
          line-height: 14px;
          letter-spacing: 0px;
          span {
            color: #00b8d4;
          }
        }
        .item-middle {
          font-size: 21px;
          font-family: DINAlternate, DINAlternate-Bold;
          font-weight: 700;
          text-align: center;
          color: #181a39;
          line-height: 24px;
          letter-spacing: 0px;
          margin: 10px 0 6px;
        }
        .item-bottom {
          font-size: 12px;
          font-family: PingFangSC, PingFangSC-Regular;
          font-weight: 400;
          text-align: center;
          color: #545671;
          line-height: 16px;
          letter-spacing: 0px;
        }
      }
    }
    .bottom {
      margin-top: 10px;
    }
  }
}
</style>
