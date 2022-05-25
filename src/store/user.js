import Cookie from 'js-cookie'
export default {
  state: {
    token: ''
  },
  mutations: {
    // 设置 token
    setToken(state, value) {
      state.token = value
      Cookie.set('token', value)
    },
    // 清空 token
    clearToken(state) {
      state.token = ''
      Cookie.remove('token')
    },
    // 获取token
    getToken(state) {
      state.token = state.token || Cookie.get('token')
    }
  }
}
