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
