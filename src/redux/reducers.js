/*
包含n个reducer函数的模块
reducer函数：根据老的state和指定的action生产新的state
*/
import {combineReducers} from 'redux'

const initXxx = 1
function xxx (state=initXxx,action) {
  switch (action.type) {
    default:
      return state
  }
}

const initYyy = {}
function yyy (state=initYyy,action) {
  switch (action.type) {
    default:
      return state
  }
}

export default combineReducers({
  xxx,
  yyy
})