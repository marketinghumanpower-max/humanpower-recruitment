import { useTranslation } from 'react-i18next'

export const LanguageSwitcher = () => {
  const { i18n } = useTranslation()

  const toggleLanguage = () => {
    const currentLang = i18n.language.startsWith('vi') ? 'vi' : 'en'
    const nextLang = currentLang === 'vi' ? 'en' : 'vi'
    i18n.changeLanguage(nextLang)
  }

  const currentLang = i18n.language.startsWith('vi') ? 'VI' : 'EN'

  return (
    <button
      onClick={toggleLanguage}
      className="px-3 py-1 text-xs font-semibold rounded-md border border-slate-300 hover:bg-slate-100 text-slate-700 transition-colors cursor-pointer flex items-center gap-1.5"
      title="Change language"
    >
      <span>🌐</span>
      <span>{currentLang}</span>
    </button>
  )
}
