import { Download, ChevronDown } from 'lucide-react'
import AppMockup from './AppMockup'

export default function HeroSection() {
  return (
    <section className="pt-32 pb-16 relative">
      <div className="max-w-6xl mx-auto px-6 text-center relative z-10">
        {/* Badge */}
        <div className="inline-block px-4 py-1.5 rounded-full text-xs font-medium text-[#00bfff] bg-[#00bfff]/8 border border-[#00bfff]/20 mb-7 tracking-wide">
          Via Nodes, View Bars. Less is more.
        </div>

        {/* Title */}
        <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight leading-none mb-5">
          <span className="text-[#e8e8ed]">ViaBar: </span>
          <span className="bg-gradient-to-r from-[#0085ff] via-[#00bfff] to-[#6ec6ff] bg-clip-text text-transparent">
            经由节点
          </span>
          <span className="text-[#e8e8ed]">，</span>
          <br className="md:hidden" />
          <span className="bg-gradient-to-r from-[#0085ff] via-[#00bfff] to-[#6ec6ff] bg-clip-text text-transparent">
            总览全局
          </span>
        </h1>

        {/* Subtitle */}
        <p className="text-lg md:text-xl text-[#9494a0] max-w-xl mx-auto mt-5 leading-relaxed">
          一款聚焦于"多项目全局进度"与"里程碑管理"的轻量化生产力工具。
        </p>

        {/* CTA Buttons */}
        <div className="flex items-center justify-center gap-4 mt-8 flex-wrap">
          <a
            href="https://github.com/tyrival/Viabar-Releases/releases/latest"
            className="inline-flex items-center gap-2 px-7 py-3 text-base font-semibold text-white bg-[#0085ff] hover:bg-[#0070e0] rounded-xl shadow-[0_0_40px_rgba(0,133,255,0.3)] transition-all hover:-translate-y-0.5 no-underline"
          >
            <Download size={18} />
            免费下载
          </a>
          <a
            href="#milestone"
            className="inline-flex items-center gap-2 px-7 py-3 text-base font-semibold text-[#e8e8ed] border border-[#252530] hover:bg-[#1a1a24] rounded-xl transition-all no-underline"
          >
            了解特性
            <ChevronDown size={16} />
          </a>
        </div>
        <p className="text-xs text-[#5e5e6e] mt-4">要求 macOS 26+ &middot; 完全免费 &middot; 开源</p>
      </div>

      {/* App Mockup */}
      <div className="max-w-5xl mx-auto px-4 mt-12 relative z-10">
        <AppMockup />
      </div>
    </section>
  )
}
