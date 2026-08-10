import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import LanguageDetector from 'i18next-browser-languagedetector'

import viTranslation from './locales/vi.json'
import enTranslation from './locales/en.json'

export const defaultNS = 'common'
export const resources = {
  vi: {
    common: viTranslation.common,
    home: viTranslation.home,
    recruitment: viTranslation.recruitment,
  },
  en: {
    common: enTranslation.common,
    home: enTranslation.home,
    recruitment: enTranslation.recruitment,
  },
} as const


i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    defaultNS,
    resources,
    fallbackLng: 'vi',
    interpolation: {
      escapeValue: false, // React already escapes values
    },
    detection: {
      order: ['localStorage', 'navigator'],
      caches: ['localStorage'],
    },
  })

export default i18n
