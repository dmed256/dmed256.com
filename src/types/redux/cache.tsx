import { Language } from '../Language';


export const SET_LANGUAGE = 'SET_LANGUAGE';

export interface State {
  language: Language,
}

export interface SetLanguageAction {
  type: typeof SET_LANGUAGE,
  language: Language,
}

export type Action = (
  SetLanguageAction
)
