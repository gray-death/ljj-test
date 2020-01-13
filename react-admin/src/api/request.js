import axios from 'axios'
import errCode from '../config/error-code';

// 创建axios实例
const axiosInstance = axios.create({
    baseURL: '/api',
    timeout: 20000,
    headers:{

    }
});


// 请求拦截器
axiosInstance.interceptors.request.use(config => {
    let token = '';

    if (token) {
        config.headers.authorization = `Beraer ${token}`
    }
    if (config.method === 'post') {
        console.data = Object.keys(config.data)
        .reduce((p,c) => {
            p += `&${c}=${config.data[c]}`;
            return p;
        }, '')
        .slice(1);
        config.headers['content-type'] = 'application/x-www-form-urlencoded'
    }

    return config
})
// 响应拦截器
axiosInstance.interceptors.response.use(
    response => {
        if (response.data.status === 0) {
            return response.data.data;
        }else{
            return Promise.reject(response.data.msg)
        }
    },
    err => {
        let errMsg = '';

        if(err.response) {
            errMsg = errCode[err.response.status]
        }else{
            if(err.message.indexOf('timeout') !== -1){
                errMsg = '网络连接超时，请连上wifi试试'
            }
        }
        return Promise.reject(errMSg || '发生未知错误，请联系管理员~')
    }
)

export default axiosInstance;