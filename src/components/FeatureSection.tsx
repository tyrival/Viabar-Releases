import { type ReactNode } from 'react'
import { type LucideIcon } from 'lucide-react'
import { useI18n } from '../i18n/I18nContext'

type FeatureKey = 'milestone' | 'kanban' | 'ecosystem' | 'notify' | 'template' | 'report'

interface Props {
  id: FeatureKey
  icon: LucideIcon
  mockup: ReactNode
  reverse: boolean
}

export default function FeatureSection({ id, icon: Icon, mockup, reverse }: Props) {
  const { t } = useI18n()
  const feat = t.features[id]

  return (
    <section id={id} className="py-24 relative">
      <div className="max-w-6xl mx-auto px-6">
        <div className={`flex flex-col ${reverse ? 'lg:flex-row-reverse' : 'lg:flex-row'} items-center gap-12 lg:gap-20`}>
          {/* Mockup */}
          <div className="flex-1 w-full max-w-lg lg:max-w-none">
            <div className="relative rounded-2xl border border-[#e5e5ea] dark:border-[#1e2230]
              bg-white dark:bg-[#13161f] overflow-hidden
              shadow-[0_8px_40px_rgba(0,0,0,0.04)] dark:shadow-[0_8px_40px_rgba(0,0,0,0.4)]
              p-4 sm:p-6">
              {/* Decorative top bar */}
              <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#0085ff]/40 dark:via-[#00bfff]/40 to-transparent" />
              {mockup}
            </div>
          </div>

          {/* Text */}
          <div className="flex-1">
            <div className="accent-line mb-6" />
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-xl bg-[#0085ff]/10 dark:bg-[#00bfff]/10 flex items-center justify-center">
                <Icon size={20} className="text-[#0085ff] dark:text-[#00bfff]" strokeWidth={1.5} />
              </div>
              <h3 className="text-2xl md:text-3xl font-extrabold tracking-tight text-[#1d1d1f] dark:text-[#e8e8ed]">
                {feat.title}
              </h3>
            </div>
            <p className="text-base text-[#6e6e73] dark:text-[#8e8e9a] mb-2 font-medium">{feat.subtitle}</p>
            <p className="text-sm text-[#8e8e93] dark:text-[#6a6a7a] leading-relaxed mb-6">{feat.desc}</p>
            <div className="flex flex-wrap gap-2">
              {feat.tags.map((tag, i) => (
                <span key={i} className="px-3 py-1.5 text-xs font-medium
                  text-[#0085ff] dark:text-[#00bfff]
                  bg-[#0085ff]/6 dark:bg-[#00bfff]/8
                  border border-[#0085ff]/15 dark:border-[#00bfff]/15
                  rounded-full">
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
