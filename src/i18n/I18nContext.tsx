import { createContext, useContext, useEffect, useState, type ReactNode } from 'react'
import { type Lang, type Translations, translations, LANG_HTML } from './translations'

interface I18nCtx {
  lang: Lang
  t: Translations
  setLang: (l: Lang) => void
}

const LANGS: Lang[] = ['en', 'zh', 'ja', 'ko', 'de', 'fr', 'es']

function isValidLang(v: string): v is Lang {
  return (LANGS as string[]).includes(v)
}

const I18nContext = createContext<I18nCtx>({
  lang: 'en',
  t: translations.en,
  setLang: () => {},
})

export function I18nProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<Lang>(() => {
    const saved = localStorage.getItem('viabar-lang')
    if (saved && isValidLang(saved)) return saved
    const nav = navigator.language.toLowerCase()
    if (nav.startsWith('zh')) return 'zh'
    if (nav.startsWith('ja')) return 'ja'
    if (nav.startsWith('ko')) return 'ko'
    if (nav.startsWith('de')) return 'de'
    if (nav.startsWith('fr')) return 'fr'
    if (nav.startsWith('es')) return 'es'
    return 'en'
  })

  useEffect(() => {
    document.documentElement.lang = LANG_HTML[lang]
    document.title = `${translations[lang].hero.title1}${translations[lang].hero.title2} — Viabar`
  }, [lang])

  return (
    <I18nContext.Provider value={{ lang, t: translations[lang], setLang: (l) => { setLang(l); localStorage.setItem('viabar-lang', l) } }}>
      {children}
    </I18nContext.Provider>
  )
}

export const useI18n = () => useContext(I18nContext)
