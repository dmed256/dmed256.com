import { LanguageCode } from '../Language';
import { PostView } from '../PostView';


export const SET_LANGUAGE_CODE = 'SET_LANGUAGE_CODE';
export const SET_POST_VIEW = 'SET_POST_VIEW';

export interface State {
  languageCode: LanguageCode,
  postView: PostView,
}

export interface SetLanguageCodeAction {
  type: typeof SET_LANGUAGE_CODE,
  languageCode: LanguageCode,
}

export interface SetPostViewAction {
  type: typeof SET_POST_VIEW,
  postView: PostView,
}

export type Action = (
  SetLanguageCodeAction
  | SetPostViewAction
)
