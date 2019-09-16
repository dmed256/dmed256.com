import * as types from '../types';


type TranslationArgs = Record<types.LanguageCode, string>

interface Args extends TranslationArgs {
  languageCode: types.LanguageCode,
}

const translateString = ({
  languageCode,
  ...stringsByLanguage
}: Args) => (
  stringsByLanguage[languageCode]
);

export default translateString;
