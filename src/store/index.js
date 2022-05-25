import Vue from 'vue'
import Vuex from 'vuex'
import tab from '@/store/tab.js'
import user from '@/store/user.js'
// 将Vuex安装为Vue的插件
Vue.use(Vuex)

const store = new Vuex.Store({
  modules: {
    tab,
    user
  }
})

export default store
