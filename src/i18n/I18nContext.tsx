import { createContext, useContext, useState, type ReactNode } from 'react'
import { type Lang, type Translations, translations } from './translations'

interface I18nCtx {
  lang: Lang
  t: Translations
  setLang: (l: Lang) => void
}

const I18nContext = createContext<I18nCtx>({
  lang: 'en',
  t: translations.en,
  setLang: () => {},
})

export function I18nProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<Lang>(() => {
    const saved = localStorage.getItem('viabar-lang')
    if (saved === 'en' || saved === 'zh') return saved
    const nav = navigator.language.toLowerCase()
    return nav.startsWith('zh') ? 'zh' : 'en'
  })

  return (
    <I18nContext.Provider value={{ lang, t: translations[lang], setLang: (l) => { setLang(l); localStorage.setItem('viabar-lang', l) } }}>
      {children}
    </I18nContext.Provider>
  )
}

export const useI18n = () => useContext(I18nContext)
