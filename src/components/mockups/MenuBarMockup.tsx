const items = [
  { project: 'Project Alpha', task: '信息架构设计', reminder: '14:00', color: '#0085ff' },
  { project: 'Dev Sandbox', task: 'CI/CD 部署配置', reminder: '明天', color: '#ff9f0a' },
  { project: 'Beta Launch', task: '市场调研分析', reminder: '06-05', color: '#bf5af2' },
]

export default function MenuBarMockup() {
  return (
    <div className="space-y-3">
      <div className="text-xs font-semibold text-[#6e6e73] dark:text-[#8e8e9a] uppercase tracking-wide mb-3">菜单栏面板</div>
      {/* Menu bar icon */}
      <div className="flex items-center gap-2 mb-4">
        <div className="w-8 h-5 rounded-full bg-[#0085ff]/15 dark:bg-[#00bfff]/15 border border-[#0085ff]/30 dark:border-[#00bfff]/30 flex items-center justify-center">
          <svg width="10" height="10" viewBox="0 0 24 24" fill="#0085ff"><path d="M4 4h6v6H4V4zM14 4h6v6h-6V4zM4 14h6v6H4v-6zM14 14h6v6h-6v-6z"/></svg>
        </div>
        <span className="text-[11px] text-[#6e6e73] dark:text-[#8e8e9a]">Viabar 菜单栏</span>
      </div>
      <div className="w-64 rounded-xl border border-[#e5e5ea] dark:border-[#1e2230] bg-white dark:bg-[#13161f] overflow-hidden shadow-lg">
        <div className="px-3 py-2 border-b border-[#e5e5ea] dark:border-[#1e2230] flex items-center justify-between">
          <span className="text-[11px] font-semibold text-[#6e6e73] dark:text-[#8e8e9a]">全部项目</span>
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-[#aeaeb2] dark:text-[#5a5a6e]"><polyline points="6 9 12 15 18 9"/></svg>
        </div>
        {items.map((item, i) => (
          <div key={i} className={`px-3 py-2.5 flex items-center gap-3 ${i !== 0 ? 'border-t border-[#f0f0f3] dark:border-[#1a1d28]' : ''}`}>
            <div className="w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ backgroundColor: item.color }} />
            <div className="flex-1 min-w-0">
              <div className="text-xs font-semibold text-[#1d1d1f] dark:text-[#e8e8ed] truncate">{item.project}</div>
              <div className="text-[11px] text-[#aeaeb2] dark:text-[#5a5a6e] truncate">{item.task}</div>
            </div>
            <div className="flex items-center gap-1 text-[11px] font-medium" style={{ color: item.color }}>
              <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><circle cx="12" cy="13" r="8"/><path d="M12 9v4l2.5 2.5"/><line x1="10" y1="2" x2="14" y2="2"/></svg>
              {item.reminder}
            </div>
          </div>
        ))}
      </div>
      {/* Widget preview */}
      <div className="mt-4">
        <div className="text-xs font-semibold text-[#6e6e73] dark:text-[#8e8e9a] uppercase tracking-wide mb-3">桌面 Widget</div>
        <div className="w-56 rounded-xl border border-[#e5e5ea] dark:border-[#1e2230] bg-white dark:bg-[#13161f] p-3">
          {items.slice(0, 2).map((item, i) => (
            <div key={i} className={`flex items-center gap-2 ${i === 0 ? 'mb-2' : ''}`}>
              <div className="w-1 h-7 rounded-sm flex-shrink-0" style={{ backgroundColor: item.color }} />
              <div className="flex-1 min-w-0">
                <div className="text-[11px] font-semibold text-[#1d1d1f] dark:text-[#e8e8ed] truncate">{item.project}</div>
                <div className="text-[10px] text-[#aeaeb2] dark:text-[#5a5a6e]">进度 60%</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
