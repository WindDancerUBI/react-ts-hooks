import { FetchProductAction, FETCH_PRODUCT_START, FETCH_PRODUCT_SUCCESS, FETCH_PRODUCT_FAILED } from './recommendProductActions'

interface RecommendProductsState {
  productList: any[];
  loading: boolean;
  error: string | null;
}

const defaultState: RecommendProductsState = {
  loading: true,
  error: null,
  productList: []
}

const recommendProductReducer = (state = defaultState, action: FetchProductAction) => {
  switch (action.type) {
    case FETCH_PRODUCT_START:
      return {...state, loading: true}
    case FETCH_PRODUCT_SUCCESS:
      return {...state, loading: false, productList: action.payload}
    case FETCH_PRODUCT_FAILED:
      return {...state, loading: false, error: action.payload}
    default:
      return state
  }
}

export default recommendProductReducer