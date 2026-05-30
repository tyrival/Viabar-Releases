const projects = [
  { name: 'Project Alpha', color: '#0085ff', milestones: 4, progress: 60, topTask: '信息架构设计', topSub: '用户流程梳理', reminder: '明天 14:00' },
  { name: 'Dev Sandbox', color: '#ff9f0a', milestones: 5, progress: 80, topTask: 'CI/CD 部署配置', topSub: '自动化测试', reminder: null },
  { name: 'Beta Launch', color: '#bf5af2', milestones: 3, progress: 35, topTask: '市场调研分析', topSub: null, reminder: '06-05 10:00' },
]

export default function AppMockup() {
  return (
    <div className="rounded-xl overflow-hidden border border-[#d5d5dd] dark:border-[#1e2230] bg-white dark:bg-[#13161f]
      shadow-[0_0_60px_rgba(0,133,255,0.04),0_16px_48px_rgba(0,0,0,0.08)] dark:shadow-[0_0_80px_rgba(0,0,0,0.5)]">
      {/* Titlebar */}
      <div className="h-9 bg-[#f0f0f3] dark:bg-[#1a1d28] flex items-center px-3 gap-2 border-b border-[#e5e5ea] dark:border-[#1e2230]">
        <div className="flex gap-1.5">
          <div className="w-3 h-3 rounded-full bg-[#ff5f57]" />
          <div className="w-3 h-3 rounded-full bg-[#febc2e]" />
          <div className="w-3 h-3 rounded-full bg-[#28c840]" />
        </div>
        <div className="flex-1 text-center text-xs text-[#aeaeb2] dark:text-[#5a5a6e] font-medium -ml-10">Viabar</div>
      </div>

      <div className="flex h-[340px] relative overflow-hidden">
        {/* Sidebar */}
        <div className="w-36 sm:w-44 flex-shrink-0 border-r border-[#f0f0f3] dark:border-[#1a1d28] p-3 sm:p-4 bg-[#fafafa] dark:bg-[#11141c]">
          <div className="text-[9px] sm:text-[10px] font-bold text-[#aeaeb2] dark:text-[#5a5a6e] uppercase tracking-[1.5px] mb-3">总览</div>
          {[{ name: '全部项目', active: true, color: '#0085ff' }, { name: '星标项目', active: false, color: '#ff9f0a' }].map(item => (
            <div key={item.name} className={`flex items-center gap-2 px-2 py-1.5 rounded-md text-[11px] sm:text-xs mb-0.5 ${item.active ? 'bg-[#0085ff]/10 text-[#0085ff] dark:text-[#00bfff] font-semibold' : 'text-[#aeaeb2] dark:text-[#5a5a6e]'}`}>
              {item.active && <div className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: item.color }} />}
              {!item.active && <div className="w-1.5 h-1.5" />}
              {item.name}
            </div>
          ))}
          <div className="text-[9px] sm:text-[10px] font-bold text-[#aeaeb2] dark:text-[#5a5a6e] uppercase tracking-[1.5px] mt-5 mb-3">归档</div>
          {['默认归档'].map(name => (
            <div key={name} className="flex items-center gap-2 px-2 py-1.5 rounded-md text-[11px] sm:text-xs text-[#aeaeb2] dark:text-[#5a5a6e] mb-0.5">
              <div className="w-1.5 h-1.5" />
              {name}
            </div>
          ))}
        </div>

        {/* Main cards */}
        <div className="flex-1 p-3 sm:p-4 flex flex-col gap-2 overflow-hidden">
          {projects.map((p, i) => (
            <div key={p.name}
              className={`flex items-stretch rounded-lg overflow-hidden border border-[#e5e5ea] dark:border-[#1e2230]
                bg-[#fafafa] dark:bg-[#161923] hover:shadow-sm hover:-translate-y-px transition-all duration-150 cursor-default
                ${i === 0 ? 'shadow-[0_2px_12px_rgba(0,133,255,0.06)] dark:shadow-[0_2px_12px_rgba(0,0,0,0.3)] ring-1 ring-[#0085ff]/10 dark:ring-[#00bfff]/10' : ''}`}
            >
              {/* Accent bar */}
              <div className="w-1 flex-shrink-0" style={{ backgroundColor: p.progress >= 100 ? '#09CC9B' : p.color }} />
              <div className="flex-1 flex flex-col justify-between pt-2 pb-1.5 px-2.5 sm:px-3">
                <div>
                  <div className="flex items-center gap-1.5 mb-1.5">
                    <span className="text-xs sm:text-sm font-semibold text-[#1d1d1f] dark:text-[#e8e8ed]">{p.name}</span>
                    {i === 0 && <span className="text-[10px] text-[#FFBF00]">★</span>}
                  </div>
                  <div className="flex items-center gap-1 text-[10px] sm:text-[11px] text-[#aeaeb2] dark:text-[#5a5a6e]">
                    <svg width="9" height="9" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><line x1="12" y1="5" x2="12" y2="19"/><polyline points="19 12 12 19 5 12"/></svg>
                    <span className="text-[#6e6e73] dark:text-[#8e8e9a]">{p.topTask}</span>
                  </div>
                  {p.topSub && (
                    <div className="flex items-center gap-1 text-[10px] sm:text-[11px] text-[#aeaeb2] dark:text-[#5a5a6e] ml-3.5 mt-0.5">
                      <span>·</span><span>{p.topSub}</span>
                    </div>
                  )}
                </div>
                <div className="flex items-center justify-between mt-1">
                  <div className="flex items-center gap-3 text-[10px] text-[#aeaeb2] dark:text-[#5a5a6e]">
                    <span>{p.milestones} 里程碑</span>
                    {p.reminder && (
                      <span className="flex items-center gap-1 text-[#ff9f0a]">
                        <svg width="9" height="9" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><circle cx="12" cy="13" r="8"/><path d="M12 9v4l2 2"/></svg>
                        {p.reminder}
                      </span>
                    )}
                  </div>
                  <div className="flex items-center gap-2.5">
                    <svg width="26" height="26" viewBox="0 0 26 26" className="flex-shrink-0">
                      <circle cx="13" cy="13" r="10" fill="none" stroke="#00BBE1" strokeOpacity="0.12" strokeWidth="5" />
                      <circle cx="13" cy="13" r="10" fill="none" stroke="url(#mg)" strokeWidth="5"
                        strokeDasharray={`${p.progress * 0.628} 62.8`} strokeLinecap="round" transform="rotate(-90 13 13)" />
                      <defs>
                        <linearGradient id="mg" x1="0%" y1="0%" x2="100%" y2="100%">
                          <stop offset="0%" stopColor="#00BBE1" />
                          <stop offset="100%" stopColor="#00F9D0" />
                        </linearGradient>
                      </defs>
                    </svg>
                    <span className="text-xs font-bold text-[#00BBE1] tabular-nums">{p.progress}%</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Detail panel */}
        <div className="hidden lg:flex w-52 flex-shrink-0 border-l border-[#f0f0f3] dark:border-[#1a1d28] p-3 flex-col gap-2 bg-[#fafafa] dark:bg-[#11141c]">
          <div className="text-xs font-bold text-[#1d1d1f] dark:text-[#e8e8ed]">{projects[0].name}</div>
          <div className="h-1 bg-[#e5e5ea] dark:bg-[#1e2230] rounded-full overflow-hidden">
            <div className="h-full bg-gradient-to-r from-[#00BBE1] to-[#00F9D0] rounded-full transition-all" style={{ width: '60%' }} />
          </div>
          <div className="text-[10px] font-semibold text-[#aeaeb2] dark:text-[#5a5a6e] uppercase tracking-wide mt-1.5">里程碑</div>
          {['需求调研', '信息架构', '交互原型', '视觉设计'].map((t, i) => (
            <div key={t} className="flex items-center gap-2 text-[11px] py-0.5">
              <div className={`w-3.5 h-3.5 rounded-full border flex-shrink-0 flex items-center justify-center ${i < 2 ? 'bg-[#09CC9B] border-[#09CC9B]' : 'border-[#d5d5dd] dark:border-[#2a2d3a]'}`}>
                {i < 2 && <svg width="8" height="8" viewBox="0 0 24 24" fill="none" stroke="#000" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg>}
              </div>
              <span className={i < 2 ? 'text-[#aeaeb2] dark:text-[#5a5a6e] line-through' : 'text-[#6e6e73] dark:text-[#8e8e9a]'}>{t}</span>
            </div>
          ))}
          <div className="text-[10px] font-semibold text-[#aeaeb2] dark:text-[#5a5a6e] uppercase tracking-wide mt-1.5">备忘录</div>
          <div className="text-[10px] text-[#aeaeb2] dark:text-[#5a5a6e] leading-relaxed">用户访谈安排在周四下午...</div>
        </div>
      </div>
    </div>
  )
}
