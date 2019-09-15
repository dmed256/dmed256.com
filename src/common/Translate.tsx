import React from 'react';


interface Props {
  en: React.ReactNode,
  ch: React.ReactNode,
}

const Translate = (
  props: Props,
) => (
  props.en
);

export default Translate as React.FC<Props>;
