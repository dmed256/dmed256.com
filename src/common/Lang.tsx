import React from 'react';
import { connect } from 'react-redux';
import createLanguageTranslation from './createLanguageTranslation';

import * as types from '../types';


export const English = createLanguageTranslation();
export const Chinese = createLanguageTranslation();

type LanguageComponents = {
  [languageCode in types.LanguageCode]: React.ElementType<any>
};

const languageComponents: LanguageComponents = {
  en: English,
  zh: Chinese,
}

interface Props {
  languageCode: types.LanguageCode,
  children: React.ReactNode
}

const BaseTranslate = ({
  languageCode,
  children,
}: Props) => {
  const currentComponent = languageComponents[languageCode];
  const childrenArray = React.Children.toArray(children);

  // Find targetted language child
  let renderedChild: any = childrenArray.find((child: any) => (
    child.type === currentComponent
  ));

  // Fallback to English
  if (!renderedChild) {
    renderedChild = childrenArray.find((child: any) => (
      child.type === English
    ));
  }

  return renderedChild;
};

export const Translate = (
  connect((state: types.redux.State) => ({
    languageCode: state.cache.languageCode,
  }))(BaseTranslate)
);
