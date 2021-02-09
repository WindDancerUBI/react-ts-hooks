import { createSlice, PayloadAction } from '@reduxjs/toolkit'

interface stateType  {
  loading: boolean;
  error: string | null;
  data: any
}

const initialState: stateType = {
  loading: true,
  error: null,
  data: null
}

export const ProductDetail = createSlice({
  name: 'productDetail',
  initialState,
  reducers: {
    fetchStart: (state) => {
      state.loading = true
    },
    fetchSuccess: (state, action: PayloadAction<any>) => {
      state.loading = false
      state.data = action.payload
      state.error = null
    },
    fetchFailed: (state, action: PayloadAction<string | null>) => {
      state.loading = true
      state.error = action.payload
    }
  }
})