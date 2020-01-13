/**
 * 用来创建action对象工厂函数模块
 */

 import { reqLogin } from '../api'
 import { setItem } from '../utils/storage'
 import { SAVE_USER } from './action-types'

 const save_User = user => ({
     type: SAVE_USER, data: user
 })

 export const saveUserAsync = (username, password) => {
    return dispatch => {
        // 当前函数返回值，作为将来组件调用时的返回值
        return reqLogin(username, password).then(response => {
            // 登陆成功
            setItem('user', response)
            // 触发更新
            dispatch(saveUser(response))
        })
    }
 }