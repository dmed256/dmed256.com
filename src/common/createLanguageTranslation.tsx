import React from 'react';


interface Props {
  children: React.ReactNode,
}

const LanguageTranslation = ({ children }: Props) => (
  <>
    {children}
  </>
);

const createLanguageTranslation = () => (
  (props: Props) => (
    <LanguageTranslation {...props} />
  )
);

export default createLanguageTranslation;
