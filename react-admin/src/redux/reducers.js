/**
 * 用来根据prevState和action生成newState函数模块
 */
import { combineReducers } from 'redux';
import { getItem } from '../utils/storage';

const initUser = getItem('user') || {};

function aaa(prevState = 111, action) {
  switch (action.type) {
    default:
      return prevState;
  }
}

function bbb(prevState = 222, action) {
  switch (action.type) {
    default:
      return prevState;
  }
}

export default combineReducers({
  aaa,
  bbb
});
