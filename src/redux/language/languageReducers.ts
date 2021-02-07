/*
 * @Descripttion: your project
 * @Author: huangjitao
 * @Date: 2021-02-06 16:18:47
 * @Function: 描述一下模块的功能
 */
// import i18n from 'i18next';
import { ADD_LANGUAGE, CHANGE_LANGUAGE, LanguageActionType } from './languageActions'

export interface LanguageState {
  language: string,
  languageList: {name: string, code: string}[]
}

const defaultState: LanguageState = {
  language: 'zh',
  languageList: [
    {name: '中文', code: 'zh'},
    {name: 'english', code: 'en'}
  ]
}

const languageReducer =  (state = defaultState, action: LanguageActionType) => {
  switch (action.type) {
    case CHANGE_LANGUAGE:
      // i18n.changeLanguage(action.payload)
      return {...state, language: action.payload}

    case ADD_LANGUAGE:
      return {...state, languageList: [...state.languageList, action.payload]}
      
    default:
      return state
  }
}

export default languageReducer

