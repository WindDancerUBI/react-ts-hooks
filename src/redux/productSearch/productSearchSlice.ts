/*
 * @Descripttion: 搜索redux
 * @Author: huangjitao
 * @Date: 2021-02-23 22:46:38
 * @Function: use of this file
 */
import { createSlice, PayloadAction, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'

interface stateType  {
  loading: boolean;
  error: string | null;
  data: any,
  pagination: any;
}

const initialState: stateType = {
  loading: true,
  error: null,
  data: null,
  pagination: null
}

// slice异步actioncreator
export const getProductSearch = createAsyncThunk(
  'productSearch/getProductSearch',
  async(
    paramaters: {
      nextPage: string | number,
      pageSize: string | number,
      keyword: string
    }
  ) => {
    let url = `http://123.56.149.216:8080/api/touristRoutes?pageNumber=${paramaters.nextPage}&pageSize=${paramaters.pageSize}`
    if(paramaters.keyword) {
      url = url + `&keyword=${paramaters.keyword}`
    }
    const res = await axios.get(url);
    return {
      data: res.data,
      pagination: JSON.parse(res.headers["x-pagination"])
    }
  }
)

export const ProductSearch = createSlice({
  name: 'productSearch',
  initialState,
  reducers: {},
  extraReducers: {
    [getProductSearch.pending.type]: (state) => {
      state.loading = true
    },
    [getProductSearch.fulfilled.type]: (state, action: PayloadAction<any>) => {
      state.loading = false
      state.data = action.payload.data
      state.pagination = action.payload.pagination
      state.error = null
    },
    [getProductSearch.rejected.type]: (state, action: PayloadAction<string|null>) => {
      state.loading = false
      state.error = action.payload
    },
  }
})