import { Download, Sun, Moon } from 'lucide-react'
import { useI18n } from '../i18n/I18nContext'
import { useTheme } from '../theme/ThemeContext'
import logoDark from '../assets/logo-dark.png'
import logoLight from '../assets/logo-light.png'

export default function Navbar() {
  const { t, lang, setLang } = useI18n()
  const { theme, toggle } = useTheme()

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[#f8f9fb]/80 dark:bg-[#0a0d14]/75 backdrop-blur-xl border-b border-[#e5e5ea] dark:border-[#1e2230]">
      <div className="max-w-6xl mx-auto px-6 h-14 flex items-center justify-between">
        <a href="#" className="flex items-center gap-2.5 no-underline group">
          <img src={theme === 'dark' ? logoDark : logoLight} alt="Viabar" className="h-7 w-auto rounded-lg" />
          <span className="text-lg font-bold text-[#1d1d1f] dark:text-[#e8e8ed] tracking-tight group-hover:text-[#0085ff] dark:group-hover:text-[#00bfff] transition-colors">Viabar</span>
        </a>

        <div className="flex items-center gap-1.5">
          <button onClick={() => setLang(lang === 'en' ? 'zh' : 'en')}
            className="px-2 py-1 text-xs font-medium text-[#6e6e73] dark:text-[#8e8e9a] hover:text-[#1d1d1f] dark:hover:text-[#e8e8ed] hover:bg-[#e5e5ea] dark:hover:bg-[#1e2230] rounded-md transition-colors"
          >
            {lang === 'en' ? '中文' : 'EN'}
          </button>
          <button onClick={toggle}
            className="w-8 h-8 flex items-center justify-center rounded-lg text-[#6e6e73] dark:text-[#8e8e9a] hover:text-[#1d1d1f] dark:hover:text-[#e8e8ed] hover:bg-[#e5e5ea] dark:hover:bg-[#1e2230] transition-colors"
          >
            {theme === 'dark' ? <Sun size={15} /> : <Moon size={15} />}
          </button>
          <a href="https://github.com/tyrival/Viabar-Releases/releases/latest/download/Viabar-1.0.5.dmg"
            className="flex items-center justify-center gap-1.5 px-4 py-1.5 text-sm font-semibold text-white bg-[#0085ff] hover:bg-[#0070e0] rounded-lg transition-colors no-underline ml-1 w-[120px]"
          >
            <Download size={14} />
            <span>{t.nav.download}</span>
          </a>
        </div>
      </div>
    </nav>
  )
}
