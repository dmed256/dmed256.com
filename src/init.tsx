import { extendLanguage } from './common/prism';

const init = () => {
  initPrism();
};

const initPrism = () => {
  // Init OKL and Bibtex languages
  extendLanguage('okl', 'cpp', {
    annotation: {
      pattern: /@[a-zA-Z][a-zA-Z0-9_]*/,
      greedy: true,
    },
  });
  extendLanguage('bibtex', 'latex');
};

export default init;
