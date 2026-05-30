import { Download } from 'lucide-react'

export default function CTA() {
  return (
    <section className="py-32 relative">
      {/* Glow */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none overflow-hidden">
        <div className="w-[500px] h-[500px] rounded-full bg-[#0085ff]/8 blur-[120px]" />
      </div>
      <div className="max-w-2xl mx-auto px-6 text-center relative z-10">
        <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-[#e8e8ed] mb-4">
          开始总览你的全局
        </h2>
        <p className="text-lg text-[#9494a0] mb-8">免费、无广告、Apple 原生体验。支持 macOS 26+。</p>
        <a
          href="https://github.com/tyrival/Viabar-Releases/releases/latest"
          className="inline-flex items-center gap-2 px-8 py-3.5 text-lg font-semibold text-white bg-[#0085ff] hover:bg-[#0070e0] rounded-xl shadow-[0_0_48px_rgba(0,133,255,0.3)] transition-all hover:-translate-y-0.5 no-underline"
        >
          <Download size={20} />
          下载 macOS 版
        </a>
      </div>
    </section>
  )
}
