import { Sun, Moon, Download } from 'lucide-react'

interface Props {
  dark: boolean
  onToggleTheme: () => void
}

export default function Navbar({ dark, onToggleTheme }: Props) {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[#0a0a0f]/75 backdrop-blur-xl border-b border-[#252530]">
      <div className="max-w-6xl mx-auto px-6 h-14 flex items-center justify-between">
        {/* Brand */}
        <a href="#" className="flex items-center gap-3 text-lg font-bold text-[#e8e8ed] no-underline tracking-tight">
          <div className="w-7 h-7 rounded-lg bg-gradient-to-br from-[#0085ff] to-[#00bfff] shadow-[0_0_20px_rgba(0,133,255,0.35)]" />
          Viabar
        </a>

        {/* Links */}
        <div className="hidden md:flex items-center gap-1">
          {['里程碑', '看板', '生态'].map(l => (
            <a key={l} href={`#${l}`} className="px-3 py-1.5 text-sm text-[#9494a0] hover:text-[#e8e8ed] hover:bg-[#1a1a24] rounded-md transition-colors no-underline">
              {l}
            </a>
          ))}
        </div>

        {/* Actions */}
        <div className="flex items-center gap-2">
          <button
            onClick={onToggleTheme}
            className="w-8 h-8 flex items-center justify-center rounded-lg text-[#9494a0] hover:text-[#e8e8ed] hover:bg-[#1a1a24] transition-colors"
          >
            {dark ? <Sun size={16} /> : <Moon size={16} />}
          </button>
          <a
            href="https://github.com/tyrival/Viabar-Releases/releases/latest"
            className="flex items-center gap-2 px-4 py-1.5 text-sm font-semibold text-white bg-[#0085ff] hover:bg-[#0070e0] rounded-lg transition-colors no-underline ml-2"
          >
            <Download size={14} />
            下载
          </a>
        </div>
      </div>
    </nav>
  )
}
