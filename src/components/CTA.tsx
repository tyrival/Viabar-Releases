import { Download } from 'lucide-react'
import { useI18n } from '../i18n/I18nContext'

export default function CTA() {
  const { t } = useI18n()

  return (
    <section className="py-28 relative">
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none overflow-hidden">
        <div className="w-[400px] h-[400px] rounded-full bg-[#0085ff]/5 dark:bg-[#00bfff]/6 blur-[100px]" />
      </div>
      <div className="max-w-2xl mx-auto px-6 text-center relative z-10">
        <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-[#1d1d1f] dark:text-[#e8e8ed] mb-3">{t.cta.title}</h2>
        <p className="text-base text-[#6e6e73] dark:text-[#8e8e9a] mb-8">{t.cta.desc}</p>
        <a
          href="https://github.com/tyrival/Viabar-Releases/releases/latest/download/Viabar-1.0.5.dmg"
          className="inline-flex items-center gap-2.5 px-8 py-3.5 text-base font-semibold text-white
            bg-gradient-to-r from-[#0085ff] to-[#00a0ff] hover:from-[#0070e0] hover:to-[#0085ff]
            rounded-xl shadow-[0_4px_30px_rgba(0,133,255,0.3)] dark:shadow-[0_4px_36px_rgba(0,133,255,0.45)]
            transition-all hover:-translate-y-0.5 no-underline"
        >
          <Download size={20} />
          {t.cta.download}
        </a>
      </div>
    </section>
  )
}
