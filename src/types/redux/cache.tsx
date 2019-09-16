import { Language } from '../Language';
import { PostView } from '../PostView';


export const SET_LANGUAGE = 'SET_LANGUAGE';
export const SET_POST_VIEW = 'SET_POST_VIEW';

export interface State {
  language: Language,
  postView: PostView,
}

export interface SetLanguageAction {
  type: typeof SET_LANGUAGE,
  language: Language,
}

export interface SetPostViewAction {
  type: typeof SET_POST_VIEW,
  postView: PostView,
}

export type Action = (
  SetLanguageAction
  | SetPostViewAction
)
