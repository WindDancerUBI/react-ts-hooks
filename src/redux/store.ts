/*
 * @Descripttion: your project
 * @Author: huangjitao
 * @Date: 2021-02-06 16:12:30
 * @Function: 描述一下模块的功能
 */

import { createStore } from 'redux'
import languageReducer from "./language/languageReducers";

const store = createStore(languageReducer)

export type RootState = ReturnType<typeof store.getState>
export default store