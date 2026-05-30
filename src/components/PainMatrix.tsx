import { useI18n } from '../i18n/I18nContext'

export default function PainMatrix() {
  const { t } = useI18n()
  const { items } = t.painMatrix

  return (
    <section className="py-24">
      <div className="max-w-5xl mx-auto px-6">
        <div className="text-center mb-14">
          <div className="text-xs font-bold text-[#0085ff] dark:text-[#00bfff] uppercase tracking-[2px] mb-3">{t.painMatrix.heading}</div>
          <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-[#1d1d1f] dark:text-[#e8e8ed]">
            {t.painMatrix.title}，<span className="bg-gradient-to-r from-[#0085ff] to-[#00bfff] bg-clip-text text-transparent">{t.painMatrix.titleHighlight}</span>
          </h2>
        </div>

        <div className="border border-[#e5e5ea] dark:border-[#1e2230] rounded-2xl overflow-hidden">
          {items.map((item, i) => (
            <div key={i} className={`grid grid-cols-1 md:grid-cols-2 ${i !== 0 ? 'border-t border-[#e5e5ea] dark:border-[#1e2230]' : ''}`}>
              <div className="p-5 md:p-7 md:border-r border-[#e5e5ea] dark:border-[#1e2230] bg-white dark:bg-[#11141c]">
                <div className="text-[10px] font-bold text-[#ff5252] tracking-[1.5px] mb-2">痛点 {String(i + 1).padStart(2, '0')}</div>
                <h3 className="text-sm font-bold text-[#ff5252] mb-1.5">{item.pain}</h3>
                <p className="text-xs text-[#8e8e93] dark:text-[#6a6a7a] leading-relaxed">{item.painDesc}</p>
              </div>
              <div className="p-5 md:p-7 bg-[#fafafa] dark:bg-[#0f1118]">
                <div className="text-[10px] font-bold text-[#09CC9B] tracking-[1.5px] mb-2">{t.painMatrix.solution}</div>
                <h3 className="text-sm font-bold text-[#1d1d1f] dark:text-[#e8e8ed] mb-1.5">{item.solution}</h3>
                <p className="text-xs text-[#8e8e93] dark:text-[#6a6a7a] leading-relaxed">{item.solnDesc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
