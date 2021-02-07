/*
 * @Descripttion: your project
 * @Author: huangjitao
 * @Date: 2021-02-06 16:12:30
 * @Function: 描述一下模块的功能
 */

import { createStore, combineReducers, applyMiddleware } from 'redux'
import languageReducer from "./language/languageReducers";
import recommendProductReducer from './recommendProduction/recommendProductReducers';
import thunk from 'redux-thunk'
import { actionLog, changeLanguage } from './middlewares'

const rootReducer = combineReducers({
  language: languageReducer,
  recommendProduct: recommendProductReducer
})

const store = createStore(rootReducer, applyMiddleware(thunk, actionLog, changeLanguage))
export type RootState = ReturnType<typeof store.getState>

export default store
