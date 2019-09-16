import React from 'react';
import { connect } from 'react-redux'

import { Code, translateString } from '../common';
import * as types from '../types';


interface Props {
  languageCode: types.LanguageCode,
}

const NotFoundPage = ({
  languageCode,
}: Props) => {

  const fileNotFound = translateString({
    languageCode,
    en: 'File not found',
    zh: '文件未找到',
  });

  return (
    <div>
      <Code
        source={`404: ${fileNotFound}`}
        lang="html"
      />
      <Code
        source={`
Traceback (most recent call last):
  File "${window.location.pathname}", line 1, in <module>
    raise NotImplementedError('${fileNotFound}')
NotImplementedError: ${fileNotFound}
        `.trim()}
        lang="python"
      />
      <Code
        source="Segmentation fault (core dumped)"
        lang="cpp"
      />
      <Code
        source="[Object object]"
        lang="js"
      />
    </div>
  );
}

export default connect((state: types.redux.State) => ({
  languageCode: state.cache.languageCode,
}))(NotFoundPage);
