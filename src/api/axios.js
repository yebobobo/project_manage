// 配置 axios
import axios from 'axios'
import config from '@/config/index.js'

const baseUrl = process.env.NODE_ENV === 'development' ? config.baseUrl.dev : config.baseUrl.pro

class HttpRequest {
  // constructor 是一种用于创建和初始化 class 创建的对象的特殊方法
  constructor(baseUrl) {
    this.baseUrl = baseUrl
  }

  // 获取实例的配置
  getInsideConfig() {
    const config = {
      baseUrl: this.baseUrl
    }
    return config
  }

  // 拦截器
  interceptors(instance) {
    // 添加请求拦截器
    instance.interceptors.request.use((config) => {
      // 请求成功
      return config
    }, (err) => {
      // 请求错误
      return Promise.reject(err)
    })
    // 添加响应拦截器
    instance.interceptors.response.use((response) => {
      // 响应成功
      return response
    }, (err) => {
      // 响应错误
      return Promise.reject(err)
    })
  }

  request(options) {
    // 使用由库提供的配置的默认值来创建实例
    // axios.create() 创建一个新的 axios
    const instance = axios.create()
    options = { ...this.getInsideConfig(), ...options }
    // 拦截器
    this.interceptors(instance)
    return instance(options)
  }
}

export default new HttpRequest(baseUrl)
