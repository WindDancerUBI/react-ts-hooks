/*
 * @Descripttion: your project
 * @Author: huangjitao
 * @Date: 2021-02-07 22:38:57
 * @Function: 描述一下模块的功能
 */
import { Middleware } from 'redux'

export const actionLog: Middleware = (store) => (next) => (action) => {
  console.log('更新之前的state：', store.getState())
  console.log('当前执行的action：', action);
  next(action)
  console.log('更新之后的state：', store.getState());
}
