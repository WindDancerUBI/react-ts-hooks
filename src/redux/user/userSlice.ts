/*
 * @Descripttion: your project
 * @Author: huangjitao
 * @Date: 2021-02-11 11:41:49
 * @Function: use of this file
 */

import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit'
import axios from 'axios'

interface StateType {
  loading: boolean;
  error: string | null;
  token: string | null
}

const initialState: StateType = {
  loading: false,
  error: null,
  token: null
}

export const signIn = createAsyncThunk(
  'user/signIn',
  async (params: {
    email: string,
    password: string
  }, thunkAPI) => {
    const { data } = await axios.post(
      `http://123.56.149.216:8080/auth/login`,{
          email: params.email,
          password: params.password
      }
    );
    return data.token
  }
)

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    logOut: state => {
      state.token = null;
      state.loading = false;
      state.error = null
    }
  },
  extraReducers: {
    [signIn.pending.type]: (state) => {
      state.error = null;
      state.loading = true
    },
    [signIn.fulfilled.type]: (state, action: PayloadAction<string, string>) => {
      state.token = action.payload
    },
    [signIn.rejected.type]: (state, action: PayloadAction<string | null>) => {
      state.loading = false;
      state.error = action.payload;
    },
  }
})
