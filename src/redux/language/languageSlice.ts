import { createSlice } from '@reduxjs/toolkit'

interface stateType {
  language: string;
  languageList: {
    name: string;
    code: string
  }[]
}

const initialState: stateType = {
  language: 'zh',
  languageList: [
    { name: "中文", code: "zh" },
    { name: "English", code: "en" },
  ]
}

export const languageSlice = createSlice({
  name: 'language',
  initialState,
  reducers: {
    changeLanguage: (state, action) => {
      state.language = action.payload
    },
    addLanguage: (state, action) => {
      state.languageList.push(action.payload)
    }
  }
})