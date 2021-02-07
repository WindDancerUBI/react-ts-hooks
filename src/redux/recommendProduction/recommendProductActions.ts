/*
 * @Descripttion: your project
 * @Author: huangjitao
 * @Date: 2021-02-07 19:37:26
 * @Function: 描述一下模块的功能
 */
import axios from "axios";
import { ThunkAction } from "redux-thunk";
import { RootState } from "../store"

export const FETCH_PRODUCT_START = 'fetch_product_start'
export const FETCH_PRODUCT_SUCCESS = 'fetch_product_success'
export const FETCH_PRODUCT_FAILED = 'fetch_product_failed'

interface FetchProductStartAction {
  type: typeof FETCH_PRODUCT_START
}

interface FetchProductSuccesstAction {
  type: typeof FETCH_PRODUCT_SUCCESS,
  payload: any
}

interface FetchProductFailedAction {
  type: typeof FETCH_PRODUCT_FAILED,
  payload: any
}

export type FetchProductAction = FetchProductStartAction | FetchProductSuccesstAction | FetchProductFailedAction

export const fetchProductStartActionCreator = (): FetchProductStartAction => {
  return {
    type: FETCH_PRODUCT_START
  }
}

export const fetchProductSuccessActionCreator = (data): FetchProductSuccesstAction => {
  return {
    type: FETCH_PRODUCT_SUCCESS,
    payload: data
  }
}

export const fetchProductFailedActionCreator = (error): FetchProductFailedAction => {
  return {
    type: FETCH_PRODUCT_FAILED,
    payload: error
  }
}

// action除了为js对象，还可以是异步函数，但此时需要使用中间件redux-thunk来处理异步函数action
export const fetchProductListData = (): ThunkAction<void, RootState, unknown, FetchProductAction> => 
async(dispatch,getState) => {
  dispatch(fetchProductStartActionCreator())
  try {
    const { data } = await axios.get('http://123.56.149.216:8080/api/productCollections')
    dispatch(fetchProductSuccessActionCreator(data))
  } catch (error) {
    dispatch(fetchProductFailedActionCreator(error.message))
  }
}