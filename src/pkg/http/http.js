import axios from 'axios'

const http = axios.create({
    withCredentials: true,  // 允许携带cookie
    timeout: 10000,         // 超时时间
    headers: {
        'Content-Type': 'application/json;charset=UTF-8',
        'Accept': 'application/json',
        'Access-Control-Allow-Credentials': 'true',
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
        'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept, Authorization'
    }
})

// 设置请求基础路径
if(process.env.NODE_ENV == 'development') {
    http.defaults.baseURL = 'http://localhost:3000'
}
if (process.env.NODE_ENV == 'production') {
    http.defaults.baseURL = 'http://localhost:3000'
}

// 请求拦截器
const beforeRequest = (config) => {
    const token = localStorage.getItem('token')

    token && (config.headers.Authorization = token)

    return config
}

http.interceptors.request.use(beforeRequest)

// 响应拦截器
const responseSuccess = (response) => {
    return Promise.resolve(response.data)
}

const responseError = (error) => {
    const { response } = error
    if (response) {
        // logInfo(response)
        console.log(response)

        return Promise.reject()
    } else if (!window.navigator.onLine) {
        // 断网处理
        return Promise.reject()
    }

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