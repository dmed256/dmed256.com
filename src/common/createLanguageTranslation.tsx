import React from 'react';
import { connect } from 'react-redux'

import * as types from '../types';


interface Props {
  languageCode: types.LanguageCode,
  currentLanguageCode: types.LanguageCode,
  Component: any,
  [prop: string]: any,
}

const LanguageTranslation = ({
  languageCode,
  currentLanguageCode,
  Component,
  ...props
}: Props) => {
  if (currentLanguageCode !== languageCode) {
    return null;
  }
  if (Component) {
    return <Component {...props} />;
  }
  if (props.children) {
    return props.children;
  }
  return null;
};

const createLanguageTranslation = (
  languageCode: types.LanguageCode,
) => (
  connect((state: types.redux.State) => ({
    languageCode,
    currentLanguageCode: state.cache.languageCode,
  }))(LanguageTranslation)
);

export default createLanguageTranslation;
