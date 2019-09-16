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
  Component?: React.ElementType<any>,
  children: React.ReactNode,
}

const BaseTranslate = ({
  languageCode,
  Component,
  children,
  ...props
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

  if (!Component) {
    return renderedChild;
  }

  return (
    <Component {...props}>
      {renderedChild}
    </Component>
  );
};

export const Translate = (
  connect((state: types.redux.State) => ({
    languageCode: state.cache.languageCode,
  }))(BaseTranslate)
);
