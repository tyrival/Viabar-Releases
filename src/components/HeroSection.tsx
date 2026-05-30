import { Download, ArrowDown } from 'lucide-react'
import { useI18n } from '../i18n/I18nContext'
import AppMockup from './AppMockup'

export default function HeroSection() {
  const { t } = useI18n()

  return (
    <section className="pt-32 pb-12 relative">
      <div className="max-w-6xl mx-auto px-6 text-center relative z-10">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-medium
          text-[#0085ff] dark:text-[#00bfff] bg-[#0085ff]/8 dark:bg-[#00bfff]/8
          border border-[#0085ff]/20 dark:border-[#00bfff]/20 mb-8 tracking-wide">
          <span className="w-1.5 h-1.5 rounded-full bg-[#0085ff] dark:bg-[#00bfff] shadow-[0_0_6px_rgba(0,133,255,0.6)]" />
          {t.hero.badge}
        </div>

        <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight leading-[1.08] mb-5">
          <span className="bg-gradient-to-r from-[#0085ff] via-[#00a8ff] to-[#00bfff] bg-clip-text text-transparent">{t.hero.title1}{t.hero.title2}</span>
        </h1>

        <p className="text-lg md:text-xl text-[#6e6e73] dark:text-[#8e8e9a] max-w-lg mx-auto mt-5 leading-relaxed">
          {t.hero.subtitle}
        </p>

        <div className="flex items-center justify-center gap-4 mt-9 flex-wrap">
          <a href="https://github.com/tyrival/Viabar-Releases/releases/latest/download/Viabar-1.0.5.dmg"
            className="inline-flex items-center gap-2 px-7 py-3 text-base font-semibold text-white
              bg-gradient-to-r from-[#0085ff] to-[#00a0ff] hover:from-[#0070e0] hover:to-[#0085ff]
              rounded-xl shadow-[0_4px_24px_rgba(0,133,255,0.3)] dark:shadow-[0_4px_32px_rgba(0,133,255,0.4)]
              transition-all hover:-translate-y-0.5 no-underline"
          >
            <Download size={18} />
            {t.hero.download}
          </a>
          <a href="#milestone"
            className="inline-flex items-center gap-2 px-7 py-3 text-base font-semibold
              text-[#1d1d1f] dark:text-[#e8e8ed]
              border border-[#d5d5dd] dark:border-[#2a2d3a]
              hover:bg-[#e5e5ea] dark:hover:bg-[#1a1d28]
              rounded-xl transition-all no-underline"
          >
            {t.hero.learn}
            <ArrowDown size={16} />
          </a>
        </div>
        <p className="text-xs text-[#aeaeb2] dark:text-[#5a5a6e] mt-4">{t.hero.note}</p>
      </div>

      <div className="max-w-5xl mx-auto px-4 mt-12 relative z-10">
        <AppMockup />
      </div>
    </section>
  )
}
