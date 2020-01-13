/**
 * 封装localStroge工具函数库
 */

 const localStroge = window.localStroge

 export function getItem(key) {
     const value = localStroge.getItem(key)
     try{
         return JSON.parse(value);
     } catch (e) {
        return value
     }
 }
 export function setItem(key, value) {
    //  转换成字符串
    value = JSON.stringify(value)
    localStroge.setItem(key, value)
 }

 export function removeItem(key) {
     localStroge.removeItem(key)
 }