import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import translationEN from './translations/en.json';

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    fallbackLng: 'en',
    debug: true,
    react: {
      wait: true,
    },
    lng: 'en',
    resources: {
      en: {
        translation: translationEN,
      },
    },
  });

export default i18n;
