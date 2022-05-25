import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from '@/store/index.js'
import axios from 'axios'
import '@/api/mock.js'
import 'element-ui/lib/theme-chalk/index.css'
import '@/assets/less/index.less'
import {
  Form,
  FormItem,
  Input,
  Button,
  Container,
  Header,
  Aside,
  Main,
  Menu,
  Submenu,
  MenuItem,
  MenuItemGroup,
  Dropdown,
  DropdownMenu,
  DropdownItem,
  Breadcrumb,
  BreadcrumbItem,
  Row,
  Col,
  Card,
  Table,
  TableColumn,
  Tag,
  Dialog,
  DatePicker,
  Select,
  Option,
  Pagination,
  Message,
  MessageBox
} from 'element-ui'

Vue.config.productionTip = false
Vue.prototype.$http = axios
Vue.prototype.$message = Message
Vue.prototype.$confirm = MessageBox.confirm

Vue.use(Form)
Vue.use(FormItem)
Vue.use(Input)
Vue.use(Button)
Vue.use(Container)
Vue.use(Header)
Vue.use(Aside)
Vue.use(Main)
Vue.use(Menu)
Vue.use(Submenu)
Vue.use(MenuItem)
Vue.use(MenuItemGroup)
Vue.use(Dropdown)
Vue.use(DropdownMenu)
Vue.use(DropdownItem)
Vue.use(Breadcrumb)
Vue.use(BreadcrumbItem)
Vue.use(Row)
Vue.use(Col)
Vue.use(Card)
Vue.use(Table)
Vue.use(TableColumn)
Vue.use(Tag)
Vue.use(Dialog)
Vue.use(DatePicker)
Vue.use(Select)
Vue.use(Option)
Vue.use(Pagination)

// 导航守卫
router.beforeEach((to, from, next) => {
  // 获取 token 信息
  store.commit('getToken')
  const token = store.state.user.token
  // 如果 token 不存在 和 要跳转的页面不是 login
  if (!token && to.name !== 'login') {
    // 强制跳转到 login 页面
    next({ name: 'login' })
  } else if (token && to.name === 'login') {
    // 如果 token 存在 并且 要跳转的页面是 login
    // 强制跳转到 main 主页
    next({ name: 'main' })
  } else {
    // 其他的都放行
    next()
  }
})

new Vue({
  router,
  store,
  render: h => h(App),
  // 防止重新渲染时页面白屏
  created() {
    store.commit('addMenu', router)
  }
}).$mount('#app')
