// 拦截
import Mock from 'mockjs'

import permissionApi from '@/api/mockServerData/permission.js'
import homeApi from '@/api/mockServerData/home.js'
import userApi from '@/api/mockServerData/user.js'

Mock.mock(/permission\/getMenu/, 'post', permissionApi.getMenu)
Mock.mock('/home/getData', homeApi.getStatisticalData)

// 获取用户列表——请求数据 get
Mock.mock(/user\/getUser/, 'get', userApi.getUserList)
// 新增用户请求——发送数据post
Mock.mock(/user\/add/, 'post', userApi.createUser)
// 编辑用户请求——发送数据post
Mock.mock(/user\/edit/, 'post', userApi.updateUser)
// 删除用户数据——请求数据 get
Mock.mock(/user\/del/, 'get', userApi.deleteUser)
