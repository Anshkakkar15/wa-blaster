import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import enTranslation from './resources/en.json'
import grTranslation from './resources/gr.json'

i18n.use(initReactI18next).init({
  lng: 'en',
  fallbackLng: 'en',
  interpolation: {
    escapeValue: false,
  },
  resources: {
    en: {
      translation: enTranslation,
    },
    gr: {
      translation: grTranslation,
    },
  },
})

export default i18n
