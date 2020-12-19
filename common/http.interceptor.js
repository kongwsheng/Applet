import { baseUrl } from '@/utils/baseUrl'
// 这里的vm，就是我们在vue文件里面的this，所以我们能在这里获取vuex的变量，比如存放在里面的token
const install = (Vue, vm) => {
  Vue.prototype.$u.http.setConfig({
    baseUrl
    // 设置自定义头部content-type
    // header: {
    // 	'content-type': 'xxx'
    // }
  })
  // 请求拦截，配置Token等参数
  Vue.prototype.$u.http.interceptor.request = config => {
    // config.header.Token = 'xxxxxx'
    // console.log(config)
    return config
  }
  // 响应拦截，判断状态码是否通过
  Vue.prototype.$u.http.interceptor.response = res => {
    // 如果把originalData设置为了true，这里得到将会是服务器返回的所有的原始数据
    // 判断可能变成了res.statueCode，或者res.data.code之类的，请打印查看结果
    if (res.code == 200) {
      // 如果把originalData设置为了true，这里return回什么，this.$u.post的then回调中就会得到什么
      console.log(res)
      return res.data
    } else return false
  }
}

export default {
  install
}
