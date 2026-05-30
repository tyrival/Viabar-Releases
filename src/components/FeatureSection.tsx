import { type LucideIcon } from 'lucide-react'

interface Props {
  id: string
  icon: LucideIcon
  title: string
  subtitle: string
  description: string
  features: string[]
  reverse: boolean
}

export default function FeatureSection({ id, icon: Icon, title, subtitle, description, features, reverse }: Props) {
  return (
    <section id={id} className="py-24 relative">
      <div className="max-w-6xl mx-auto px-6">
        <div className={`flex flex-col ${reverse ? 'md:flex-row-reverse' : 'md:flex-row'} items-center gap-16`}>
          {/* Visual Card */}
          <div className="flex-1 w-full max-w-md">
            <div className="relative rounded-2xl bg-[#13131a] border border-[#252530] p-8 aspect-square flex items-center justify-center overflow-hidden">
              {/* Glow */}
              <div className="absolute inset-0 bg-gradient-to-br from-[#0085ff]/5 to-transparent" />
              {/* Icon area */}
              <div className="relative z-10 text-center">
                <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-[#0085ff]/10 to-[#00bfff]/10 border border-[#252530] flex items-center justify-center mx-auto mb-5">
                  <Icon size={36} className="text-[#0085ff]" strokeWidth={1.5} />
                </div>
                <div className="text-lg font-bold text-[#e8e8ed] mb-2">{title}</div>
                <div className="text-sm text-[#9494a0]">{subtitle}</div>
              </div>
            </div>
          </div>

          {/* Text */}
          <div className="flex-1">
            <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-[#e8e8ed] mb-4">{title}</h2>
            <p className="text-lg text-[#9494a0] leading-relaxed mb-6">{description}</p>
            <div className="flex flex-wrap gap-2">
              {features.map((f, i) => (
                <span key={i} className="px-3 py-1.5 text-xs font-medium text-[#0085ff] bg-[#0085ff]/8 border border-[#0085ff]/15 rounded-full">
                  {f}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
