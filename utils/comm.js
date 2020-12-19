import { baseUrl } from './baseUrl'
export default {
  install: function (Vue) {
    Vue.prototype.$baseUrl = baseUrl
  }
}
