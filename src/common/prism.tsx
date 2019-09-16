import React from 'react';
import Prism from 'prismjs';
import 'prismjs/components/prism-c.min';
import 'prismjs/components/prism-clike.min';
import 'prismjs/components/prism-cpp.min';
import 'prismjs/components/prism-css.min';
import 'prismjs/components/prism-docker.min';
import 'prismjs/components/prism-fortran.min';
import 'prismjs/components/prism-glsl.min';
import 'prismjs/components/prism-javascript.min';
import 'prismjs/components/prism-latex.min';
import 'prismjs/components/prism-lisp.min';
import 'prismjs/components/prism-makefile.min';
import 'prismjs/components/prism-markdown.min';
import 'prismjs/components/prism-markup.min';
import 'prismjs/components/prism-opencl.min';
import 'prismjs/components/prism-python';
import 'prismjs/components/prism-python.min';
import 'prismjs/components/prism-typescript.min';
import 'prismjs/components/prism-yaml.min';


const extendLanguage = (newLang: string, lang: string, options?: any) => {
  Prism.languages[newLang] = Prism.languages.extend(lang, options);
};

const highlight = (text: string, lang?: string) => {
  const grammar = lang && Prism.languages[lang];
  if (!lang || !grammar) {
    return text;
  }
  return (
    <div
      dangerouslySetInnerHTML={{
        __html: Prism.highlight(text, grammar, lang as any),
      }}
    />
  );
};

export {
  extendLanguage,
  highlight,
};
