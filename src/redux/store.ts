/*
 * @Descripttion: your project
 * @Author: huangjitao
 * @Date: 2021-02-06 16:12:30
 * @Function: 描述一下模块的功能
 */

// import { createStore, applyMiddleware } from 'redux'
import { languageSlice } from "./language/languageSlice";
import recommendProductReducer from './recommendProduction/recommendProductReducers';
import { ProductDetail } from './productDetail/productDetailSlice'
// import thunk from 'redux-thunk'
import { actionLog, changeLanguage } from './middlewares'
import { combineReducers, configureStore } from '@reduxjs/toolkit'

const rootReducer = combineReducers({
  language: languageSlice.reducer,
  recommendProduct: recommendProductReducer,
  productDetail: ProductDetail.reducer,
})

// @reduxjs/toolkit默认开启thunk
const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) => [...getDefaultMiddleware(), actionLog, changeLanguage],
  devTools: true
})

export type RootState = ReturnType<typeof store.getState>
export default store
