/*
 * @Descripttion: i18n语言切换自定义组件
 * @Author: huangjitao
 * @Date: 2021-02-07 22:47:00
 * @Function: 描述一下模块的功能
 */

import { Middleware } from "redux"
import i18n from "i18next";

interface IAction {
  type: string,
  payload: any
}

// 用了redux-toolkit后，他的action.type会有所不同，特别注意
export const changeLanguage: Middleware = (store) => (next) => (action: IAction) => {
  if (action.type === 'language/changeLanguage') {
    i18n.changeLanguage(action.payload)
  }
  next(action)
}
