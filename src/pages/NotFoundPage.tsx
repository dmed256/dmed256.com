import React from 'react';

import Code from '../common/Code';


const NotFoundPage = () => (
  <div>
    <Code
      source={"404: File not found"}
      lang="html"
    />
    <Code
      source={`
  Traceback (most recent call last):
    File "${window.location.pathname}", line 1, in <module>
      raise NotImplementedError('File not found')
  NotImplementedError: File not found
      `.trim()}
      lang="python"
    />
    <Code
      source={"Segmentation fault (core dumped)"}
      lang="cpp"
    />
    <Code
      source={"[Object object]"}
      lang="js"
    />
  </div>
);

export default NotFoundPage;
