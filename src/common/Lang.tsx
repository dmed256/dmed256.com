import React from 'react';
import createLanguageTranslation from './createLanguageTranslation';


export const English = createLanguageTranslation('en');
export const Chinese = createLanguageTranslation('zh');

export const Translate = ({
  Component,
  children,
  ...props
}: any) => {
  if (!Component) {
    return children;
  }
  return (
    <React.Fragment>
      {
        React.Children.map(children, (child: any) => (
          React.cloneElement(child, {
            Component,
            ...props
          })
        ))
      }
    </React.Fragment>
  );
};
