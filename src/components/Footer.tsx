export default function Footer() {
  return (
    <footer className="border-t border-[#252530] py-8 text-center relative z-10">
      <div className="flex justify-center gap-8 mb-3">
        <a href="https://t.me/viabarapp" className="text-sm text-[#9494a0] hover:text-[#e8e8ed] transition-colors no-underline">Telegram 社区</a>
        <a href="https://github.com/tyrival/Viabar-Releases/releases" className="text-sm text-[#9494a0] hover:text-[#e8e8ed] transition-colors no-underline">更新日志</a>
        <a href="https://github.com/tyrival/Viabar-Releases/releases/latest" className="text-sm text-[#9494a0] hover:text-[#e8e8ed] transition-colors no-underline">下载</a>
      </div>
      <p className="text-xs text-[#5e5e6e]">&copy; 2026 Viabar</p>
    </footer>
  )
}
