import Cookie from 'js-cookie'

export default {
  state: {
    menu: [],
    tabsList: [{
      path: '/',
      name: 'home',
      label: '首页',
      icon: 'home'
    }],
    // 当前 menu 为空
    currentMenu: null,
    isCollapse: false
  },
  //  更改 vuex 的 store 中的状态的唯一方法：提交 mutation
  mutations: {
    // 是否改变侧边栏状态
    collapseMenu(state) {
      // 变更状态
      state.isCollapse = !state.isCollapse
    },
    // 选择 menu
    selectMenu(state, value) {
      // 不是首页
      if (value.name !== 'home') {
        state.currentMenu = value
        // findeIndex 返回数组中满足 [传来的 value.name === tabslist数组中每一项的name] 的第一个元素的索引，若没有返回 -1
        const result = state.tabsList.findIndex(item => item.name === value.name)
        // 没有找到
        if (result === -1) {
          state.tabsList.push(value)
        }
      } else {
        // 是首页就重置
        state.currentMenu = null
      }
    },
    // 设置 Menu
    setMenu(state, value) {
      state.menu = value
      // JSON.stringify(): 将对象转为JSON字符串
      Cookie.set('menu', JSON.stringify(value))
    },
    // 清空 Menu
    clearMenu(state) {
      state.menu = []
      Cookie.remove('menu')
    },
    // 增加 menu
    addMenu(state, router) {
      // Cookie.get('menu') 这里是undefined
      if (!Cookie.get('menu')) {
        return
      }
      // JSON.parse(): 解析JSON字符串，将JSON字符串转为对象
      // JSON.parse(undefined)：报错
      const menu = JSON.parse(Cookie.get('menu'))
      state.menu = menu
      const menuArray = []
      // forEach 调用数组的每一个元素
      menu.forEach(item => {
        // 如果当前元素有孩子节点
        if (item.children) {
          // map 指定函数处理数组的每个元素 返回处理后的数组
          // 处理当前元素的孩子节点中的每个元素，为每个元素指定组件
          item.children = item.children.map(item => {
            item.component = () => import(`@/views/${item.url}`)
            return item
          })
          // Spread/Rest操作符 ...
          // 将每个 item.children 元素迭代存入menuArray数组中
          menuArray.push(...item.children)
        } else {
          // 如果当前元素没有还在节点
          // 为该节点指定组件地址
          item.component = () => import(`@/views/${item.url}`)
          // 将元素存入menuArray数组中
          menuArray.push(item)
        }
      })
      // 路由的动态添加
      // 遍历每一个元素
      menuArray.forEach(item => {
        // router.addRoute 新版vue提供的动态添加路由的固定方法
        router.addRoute('main', item)
      })
    },
    // 关闭 tag
    closeTag(state, value) {
      const result = state.tabsList.findIndex(item => item.name === value.name)
      state.tabsList.splice(result, 1)
    }
  }
}
