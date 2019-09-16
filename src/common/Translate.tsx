import React from 'react';
import { connect } from 'react-redux'

import * as types from '../types';


type BaseProps = Record<types.Language, React.ReactNode>

interface Props extends BaseProps {
  language: types.Language,
}

const Translate = ({
  language,
  ...nodeByLanguage
}: Props) => (
  nodeByLanguage[language]
);

export default connect((state: types.redux.State) => ({
  language: state.cache.language,
}))(Translate as React.FC<BaseProps>);
