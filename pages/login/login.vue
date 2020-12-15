<template>
  <view id="app">
    <!-- <uni-nav-bar class="status_bar" left-icon="arrowthinleft"></uni-nav-bar> -->
    <view class="box1">您好，请登录</view>
    <u-form :model="form" ref="uForm">
      <u-form-item prop="mobile" class="mobile">
        <view>
          <span class="iconfont f60">&#xe60b;</span>
          <u-input
            type="number"
            v-model="form.mobile"
            placeholder="请输入手机号"
          />
        </view>
      </u-form-item>

      <view class="code0">
        <u-form-item prop="code" class="code">
          <view>
            <span class="iconfont f60">&#xe60c;</span>
            <u-input v-model="form.code" placeholder="请输入验证码" />
          </view>
        </u-form-item>
        <!-- <view class="code1" @click="getCode">获取验证码</view> -->
        <view class="code1">
          <u-toast ref="uToast"></u-toast>
          <u-verification-code
            :seconds="seconds"
            @end="end"
            @start="start"
            ref="uCode"
            @change="codeChange"
          ></u-verification-code>
          <button @tap="getCode" class="code2">{{ tips }}</button>
        </view>
      </view>
    </u-form>
    <view class="deal">
      登录既同意<span>《用户使用协议》</span>和<span>《隐私协议》</span></view
    >
    <button class="btn" @click="submit">确定</button>
  </view>
</template>

<script>
import '@/static/iconfont/iconfont.css'
import { auCode, auLogin } from '@/api/login'
import { setLocal } from '@/utils/local'
export default {
  data () {
    return {
      tips: '',
      seconds: 60,
      form: {
        mobile: 18511111111,
        code: ''
      },
      rules: {
        mobile: [
          {
            required: true,
            message: '请输入手机号',
            trigger: ['change', 'blur']
          }
        ],
        code: [
          {
            required: true,
            message: '验证码未填写',
            trigger: ['change', 'blur']
          }
        ]
      }
    }
  },
  methods: {
    submit () {
      // sets
      // console.log(123)
      // console.log(this.$refs.uForm)
      this.$refs.uForm.validate(valid => {
        if (valid) {
          console.log('验证通过')
          auLogin(this.form).then(({ data }) => {
            console.log({ data }, setLocal)
            setLocal('token', data.jwt)
            // 保存用户信息到vuex
            this.$store.commit('setUserInfo', data.user)
            // 修改登陆状态
            this.$store.commit('setIsLogin', true)
          })
          uni.switchTab({ url: '/pages/home/my/my' })
        } else {
          console.log('验证失败')
        }
      })
    },
    codeChange (text) {
      this.tips = text
    },
    async getCode () {
      if (this.$refs.uCode.canGetCode) {
        // 模拟向后端请求验证码
        uni.showLoading({
          title: '正在获取验证码'
        })
        setTimeout(() => {
          uni.hideLoading()
          // 这里此提示会被this.start()方法中的提示覆盖
          this.$u.toast('验证码已发送')
          // 通知验证码组件内部开始倒计时
          this.$refs.uCode.start()
          auCode(this.form).then(({ data }) => {
            this.$u.toast(data)
            this.form.code = data
          })
        }, 2000)
      } else {
        this.$u.toast('倒计时结束后再发送')
      }
    },
    end () {
      this.$u.toast('倒计时结束')
    },
    start () {
      this.$u.toast('倒计时开始')
    }
  },
  onReady () {
    this.$refs.uForm.setRules(this.rules)
  }
}
</script>

<style lang="scss" scoped>
page {
  height: 100%;
  background: #f9f9f9;
}
#app {
  padding: 0 15px;
  background-color: #f9f9f9;
  .box1 {
    font-size: 18px;
    font-family: PingFangSC, PingFangSC-Semibold;
    font-weight: 600;
    text-align: left;
    color: #222222;
    line-height: 100px;
    letter-spacing: 0.21px;
    // margin: 50px 15px;
  }
  .status_bar {
    width: 100%;
  }
  .code0 {
    display: flex;
  }
  .mobile,
  .code {
    display: flex;
    padding: 0 15px;
    margin-bottom: 5px;
    background-color: #fff;
    view {
      display: flex;
    }
  }
  .code {
    width: 58%;
  }
  .code1 {
    width: 41%;
    font-size: 16px;
    text-align: center;
    line-height: 45px;
    uni-button:after {
      border: none !important;
    }
    .code2 {
      color: #00b8d4;
    }
  }
  .deal {
    font-size: 12px;
    font-family: PingFangSC, PingFangSC-Regular;
    font-weight: 400;
    text-align: left;
    line-height: 16.5px;
    letter-spacing: 0.14px;
    margin-bottom: 40px;
  }
  .deal span {
    color: #00b8d4;
  }
  .btn {
    height: 44px;
    background: #e40137;
    border-radius: 22px;
    color: #fff;
    font-size: 18px;
  }
  .f60 {
    margin-right: 8px;
  }
}
</style>
