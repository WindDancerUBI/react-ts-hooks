/*
 * @Descripttion: your project
 * @Author: huangjitao
 * @Date: 2021-02-06 16:14:19
 * @Function: 描述一下模块的功能
 */
export const CHANGE_LANGUAGE = 'change_language'
export const ADD_LANGUAGE = 'add_language'

interface ChangeLanguageAction {
  type: typeof CHANGE_LANGUAGE,
  payload: string
}

interface AddLanguageAction {
  type: typeof ADD_LANGUAGE,
  payload: {name: string, code: string}
}

export type LanguageActionType = AddLanguageAction | ChangeLanguageAction

export const changeLanguageActionCreator = (languageCode: string): ChangeLanguageAction => {
  return {
    type: CHANGE_LANGUAGE,
    payload: languageCode
  }
}

export const addLanguageActionCreator = (name: string, code: string): AddLanguageAction => {
  return {
    type: ADD_LANGUAGE,
    payload: {name,code}
  }
}