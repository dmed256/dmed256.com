import React from 'react';
import { connect } from 'react-redux'

import * as types from '../types';


type BaseProps = Record<types.LanguageCode, React.ReactNode>

interface Props extends BaseProps {
  languageCode: types.LanguageCode,
}

const Translate = ({
  languageCode,
  ...nodeByLanguage
}: Props) => (
  nodeByLanguage[languageCode]
);

export default connect((state: types.redux.State) => ({
  languageCode: state.cache.languageCode,
}))(Translate as React.FC<BaseProps>);
