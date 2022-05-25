import axios from '@/api/axios.js'

// 按需导出  Menu 数据
export const getMenu = (data) => {
  return axios.request({
    url: '/permission/getMenu',
    method: 'post',
    data
  })
}

// 按需导出  图表数据
export const getData = () => {
  return axios.request({
    url: '/home/getData'
  })
}

// 按需导出 用户信息
export const getUser = (params) => {
  return axios.request({
    url: '/user/getUser',
    method: 'get',
    params
  })
}
