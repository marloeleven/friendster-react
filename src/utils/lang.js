import in_object from './in_object';

import lang_en from 'lang/login.en';
import lang_es from 'lang/login.es';
import lang_da from 'lang/login.da';
import lang_de from 'lang/login.de';
import lang_fr from 'lang/login.fr';
import lang_ko from 'lang/login.ko';
import lang_ru from 'lang/login.ru';
import lang_zh_cn from 'lang/login.zh-cn';
import lang_zh_tw from 'lang/login.zh-tw';
import lang_ja from 'lang/login.ja';
import lang_pt_br from 'lang/login.pt-br';

const EN = 'en';
const ES_US = 'es-us';
const DA = 'da';
const DE = 'de';
const FR = 'fr';
const KO = 'ko';
const RU = 'ru';
const ZH_CN = 'zh-cn';
const ZH_TW = 'zh-tw';
const JA = 'ja';
const PT_BR = 'pt-br';

export const LANG_PROPER_NAMES = {
  [EN]: 'English',
  [ES_US]: 'Español',
  [DA]: 'Dansk',
  [DE]: 'Deutsch',
  [FR]: 'Français',
  [KO]: '한국어',
  [RU]: 'Русский',
  [ZH_CN]: '简体中文',
  [ZH_TW]: '繁体中文',
  [JA]: '日本語',
  [PT_BR]: 'Português Brasileiro',
};

const LANG = {
  [EN]: lang_en,
  [ES_US]: lang_es,
  [DA]: lang_da,
  [DE]: lang_de,
  [FR]: lang_fr,
  [KO]: lang_ko,
  [RU]: lang_ru,
  [ZH_CN]: lang_zh_cn,
  [ZH_TW]: lang_zh_tw,
  [JA]: lang_ja,
  [PT_BR]: lang_pt_br,
};

export const DEFAULT_LANG = EN;

export const getLang = lang => in_object(LANG, lang, LANG[DEFAULT_LANG]);

export const defaultLanguage = getLang(DEFAULT_LANG);

export const Lang = lang => {
  const languages = getLang(lang);

  return {
    get: key => {
      return (
        in_object(languages, key, false) || in_object(defaultLanguage, key, key)
      );
    },
  };
};
