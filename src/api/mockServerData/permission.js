// 用 Mock 模拟后台数据
import Mock from 'mockjs'
export default {
  getMenu: config => {
    console.log(config)
    const {
      username,
      password
    } = JSON.parse(config.body)
    console.log(JSON.parse(config.body))
    // 先判断用户是否存在
    // 判断账号和密码是否对应
    if (username === 'admin' && password === 'admin') {
      return {
        code: 20000,
        data: {
          menu: [
            {
              path: '/main/home',
              name: 'home',
              label: '首页',
              icon: 's-home',
              url: 'Home/Home'
            },
            {
              path: '/main/goods',
              name: 'goods',
              label: '商品管理',
              icon: 'video-play',
              url: 'Goods/Goods'
            },
            {
              path: '/main/user',
              name: 'user',
              label: '用户管理',
              icon: 'user',
              url: 'User/User'
            },
            {
              label: '其他',
              icon: 'location',
              children: [{
                path: '/main/page1',
                name: 'page1',
                label: '页面1',
                icon: 'setting',
                url: 'Others/PageOne.vue'
              },
              {
                path: '/main/page2',
                name: 'page2',
                label: '页面2',
                icon: 'setting',
                url: 'Others/PageTwo.vue'
              }]
            }
          ],
          token: 'Bearer ' + Mock.Random.guid(),
          message: '获取成功'
        }
      }
    } else if (username === 'xiaoxiao' && password === 'xiaoxiao') {
      return {
        code: 20000,
        data: {
          menu: [{
            path: '/',
            name: 'home',
            label: '首页',
            icon: 's-home',
            url: 'Home/home'
          },
          {
            path: '/goods',
            name: 'goods',
            label: '商品管理',
            icon: 'video-play',
            url: 'Goods/goods'
          }
          ],
          token: 'Bearer ' + Mock.Random.guid(),
          message: '获取成功'
        }
      }
    } else {
      return {
        code: -999,
        data: {
          message: '密码错误'
        }
      }
    }
  }
}
