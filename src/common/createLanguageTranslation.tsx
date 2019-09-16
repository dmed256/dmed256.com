import React from 'react';


interface Props {
  children: React.ReactNode,
}

const LanguageTranslation = ({ children }: Props) => (
  <React.Fragment>
    {children}
  </React.Fragment>
);

const createLanguageTranslation = () => (
  (props: Props) => (
    <LanguageTranslation {...props} />
  )
);

export default createLanguageTranslation;
