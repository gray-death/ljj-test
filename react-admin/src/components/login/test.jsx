import React from 'react'
//引入axious
import axios from 'axios'
import { message } from 'antd'

export default function Test(){
    // 配置axios拦截器
    
    // 创建axios实例,可以修改axios默认配置
    const axiosInstance = axios.create({
        baseURL: '/api',
        timeout: 20000,
        header: {

        }
    });

    axiosInstance.intercepetors.request.use(
        config => {
            if (token) {
                config.headers.authorization = `Bearer ${token}`;
            }

            if(config.method === 'post') {
                const keys = object.keys(config.data)
                const data = keys
                
                .reduce((prev, curr) => {
                    prev += `&${curr}=${config.data[curr]}`
                    return prev;
                }, '')
                .slice(1)
                
                config.data = data
                config.headers['content-type'] = 'application/x-www-from-ur'
            }

            return config;     
        }
    )
        // 响应拦截器

    axiosInstance.intercepetors.response.use(
        // 请求/响应成功
        response => {
            if (response.data.status === 0){
                return response.data.data;
            }else{
                // 功能失败
                return Promise.reject(response.)
            }
        },
        err => {
            const errCode = {
                401: '没有权限访问当前接口',
                403: 'nnn'
            }
        }
    )
}