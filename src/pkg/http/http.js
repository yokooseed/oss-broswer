import axios from 'axios'
import { snackbarStore } from '@/store/snackbar.js'
import { globalStore } from '@/store/global.js'
import { dialogStore } from '@/store/dialog.js'
import pinia from '@/store/init.js'

const snackbar = snackbarStore(pinia)
const global = globalStore(pinia)
const dialog = dialogStore(pinia)

const http = axios.create({
    withCredentials: true,  // 允许携带cookie
    timeout: 10000,         // 超时时间
    headers: {
        'Content-Type': 'multipart/form-data',
        'Accept': 'application/json',
        'Access-Control-Allow-Credentials': 'true',
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
        'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept, Authorization'
    },
})

// transform data -> FormData(data)
function stringify (data) {
    const formData = new FormData()
    for (const key in data) {
      // eslint-disable-next-line no-prototype-builtins
      if (data.hasOwnProperty(key)) {
        if (data[key]) {
          if (data[key].constructor === Array) {
            if (data[key][0]) {
              if (data[key][0].constructor === Object) {
                formData.append(key, JSON.stringify(data[key]))
              } else {
                data[key].forEach((item, index) => {
                  formData.append(key + `[${index}]`, item)
                })
              }
            } else {
              formData.append(key + '[]', '')
            }
          } else if (data[key].constructor === Object) {
            formData.append(key, JSON.stringify(data[key]))
          } else {
            formData.append(key, data[key])
          }
        } else {
          if (data[key] === 0) {
            formData.append(key, 0)
          } else {
            formData.append(key, '')
          }
        }
      }
    }
    return formData
  }

// 设置请求基础路径
if(process.env.NODE_ENV == 'development') {
    http.defaults.baseURL = 'http://47.113.216.236:9739/'
}
if (process.env.NODE_ENV == 'production') {
    http.defaults.baseURL = 'http://47.113.216.236:9739/'
}

// 请求拦截器
const beforeRequest = (config) => {
    const token = localStorage.getItem('token')

    token && (config.headers.token = token)
    config.data = stringify(config.data)

    return config
}

http.interceptors.request.use(beforeRequest)

// 响应拦截器
const responseSuccess = (response) => {
    var result = JSON.parse(JSON.stringify(response.data))

    if(result.code == 200) {
        snackbar.show(result.msg)
        return Promise.resolve(result)
    } else if(result.code == 500) {
        snackbar.show("[ERROR] " + result.msg, 3000)
        dialog.show("用户鉴权异常", "请求出现用户鉴权异常，请重新登录")
        global.logout()
    } else {
        snackbar.show("[ERROR] " + result.msg, 3000)
        return Promise.reject(result)
    }
}

const responseError = (error) => {
    const { response } = error
    if (response) {
        snackbar.show("[ERROR] 请求出错", 3000)
        console.log(response)   // 打印输出日志
        return Promise.reject()
    } else if (!window.navigator.onLine) {
        snackbar.show("[ERROR] 网络连接失败", 3000)
        return Promise.reject()
    }
    snackbar.show("[ERROR] 未知异常错误", 3000)
    return Promise.reject(error)
}

http.interceptors.response.use(responseSuccess, responseError)

export default {
    get(url, params)  {
        return http.get(url, { params });
    },
    post(url, data) {
        return http.post(url, data);
    },
    put(url, data) {
        return http.put(url, data);
    },
    delete(url) {
        return http.delete(url);
    },
    test(url) {
        return http.get(url);
    }
}