import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';
import Backend from 'i18next-http-backend';

i18n
  .use(Backend) // Loads translations from files
  .use(LanguageDetector) // Auto-detects browser language
  .use(initReactI18next) // Connects to React
  .init({
    fallbackLng: 'en', // Default if detection fails
    debug: false, // Disables console logging
    interpolation: {
      escapeValue: false, // Allows HTML in translations
    },
    backend: {
      loadPath: '/locales/{{lng}}/{{ns}}.json', // Translation file path
    }
  });

export default i18n;