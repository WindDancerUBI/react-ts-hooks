/*
 * @Descripttion: your project
 * @Author: huangjitao
 * @Date: 2021-02-06 20:44:57
 * @Function: 描述一下模块的功能
 */

import { useSelector as useReduxSelector, TypedUseSelectorHook } from 'react-redux'
import { RootState } from './store'

export const useSelector: TypedUseSelectorHook<RootState> = useReduxSelector