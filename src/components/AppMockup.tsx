export default function AppMockup() {
  const projects = [
    { name: 'Project Alpha', color: '#0085ff', milestones: 4, progress: 60, tasks: ['需求调研', '信息架构', '交互原型', '视觉设计'] },
    { name: 'Dev Sandbox', color: '#ff9f0a', milestones: 5, progress: 80, tasks: ['环境搭建', 'CI/CD 配置', '测试覆盖', '性能优化', '文档完善'] },
    { name: 'Beta Launch', color: '#bf5af2', milestones: 3, progress: 35, tasks: ['市场调研', '竞品分析', 'MVP 规划'] },
  ]

  const sidebarProjects = [
    { name: 'Project Alpha', color: '#0085ff' },
    { name: 'Dev Sandbox', color: '#ff9f0a' },
    { name: 'Beta Launch', color: '#bf5af2' },
    { name: '年度规划', color: '#30d158' },
    { name: '个人学习', color: '#5e5ce6' },
  ]

  const selectedProject = projects[0]

  return (
    <div className="rounded-xl overflow-hidden border border-[#252530] bg-[#13131a] shadow-[0_0_80px_rgba(0,133,255,0.06),0_20px_60px_rgba(0,0,0,0.6)]">
      {/* Titlebar */}
      <div className="h-9 bg-[#1a1a24] flex items-center px-3 gap-2 border-b border-[#252530]">
        <div className="flex gap-1.5">
          <div className="w-3 h-3 rounded-full bg-[#ff5f57]" />
          <div className="w-3 h-3 rounded-full bg-[#febc2e]" />
          <div className="w-3 h-3 rounded-full bg-[#28c840]" />
        </div>
        <div className="flex-1 text-center text-xs text-[#5e5e6e] font-medium -ml-10">Viabar</div>
      </div>

      {/* Body */}
      <div className="flex h-[380px] relative overflow-hidden">
        {/* Sidebar */}
        <div className="w-44 flex-shrink-0 bg-[#13131a] border-r border-[#252530] p-4 hidden sm:block">
          <div className="text-[10px] font-bold text-[#5e5e6e] uppercase tracking-widest mb-3">总览</div>
          {sidebarProjects.slice(0, 3).map((p, i) => (
            <div key={p.name} className={`flex items-center gap-2 px-2 py-1.5 rounded-md text-xs mb-0.5 ${i === 0 ? 'bg-[#0085ff]/10 text-[#0085ff] font-semibold' : 'text-[#9494a0]'}`}>
              <div className="w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ backgroundColor: p.color }} />
              {p.name}
            </div>
          ))}
          <div className="text-[10px] font-bold text-[#5e5e6e] uppercase tracking-widest mt-5 mb-3">归档</div>
          {sidebarProjects.slice(3).map(p => (
            <div key={p.name} className="flex items-center gap-2 px-2 py-1.5 rounded-md text-xs text-[#9494a0] mb-0.5">
              <div className="w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ backgroundColor: p.color }} />
              {p.name}
            </div>
          ))}
        </div>

        {/* Main - Project Cards */}
        <div className="flex-1 p-4 flex flex-col gap-2.5 overflow-hidden">
          {projects.map(p => (
            <div key={p.name} className="bg-[#1a1a24] border border-[#252530] rounded-lg px-3.5 py-2.5 flex items-center gap-3 hover:border-[#3a3a4a] transition-colors cursor-default">
              <div className="w-0.5 h-8 rounded-sm flex-shrink-0" style={{ backgroundColor: p.color }} />
              <div className="flex-1 min-w-0">
                <div className="text-sm font-semibold text-[#e8e8ed] truncate">{p.name}</div>
                <div className="flex gap-3 text-[11px] text-[#5e5e6e] mt-0.5">
                  <span>{p.milestones} 里程碑</span>
                  <span>进度 {p.progress}%</span>
                </div>
              </div>
              {/* Progress Ring */}
              <svg width="38" height="38" viewBox="0 0 38 38" className="flex-shrink-0">
                <circle cx="19" cy="19" r="15" fill="none" stroke="#252530" strokeWidth="3" />
                <circle
                  cx="19" cy="19" r="15" fill="none"
                  stroke={p.color} strokeWidth="3"
                  strokeDasharray={`${p.progress * 0.94} 94`}
                  strokeLinecap="round"
                  transform="rotate(-90 19 19)"
                />
              </svg>
            </div>
          ))}
        </div>

        {/* Detail Panel */}
        <div className="w-56 flex-shrink-0 bg-[#13131a] border-l border-[#252530] p-4 hidden lg:flex flex-col gap-2 shadow-[-8px_0_40px_rgba(0,0,0,0.4)] relative z-10">
          <div className="text-sm font-bold text-[#e8e8ed]">{selectedProject.name}</div>
          <div className="h-1 bg-[#252530] rounded-full overflow-hidden">
            <div className="h-full rounded-full transition-all" style={{ width: `${selectedProject.progress}%`, backgroundColor: selectedProject.color }} />
          </div>
          <div className="text-[11px] font-semibold text-[#5e5e6e] uppercase tracking-wide mt-2">里程碑</div>
          {selectedProject.tasks.map((t, i) => (
            <div key={t} className="flex items-center gap-2 text-xs py-1">
              <div className={`w-3.5 h-3.5 rounded-full border flex-shrink-0 flex items-center justify-center ${i < 2 ? 'bg-[#30d158] border-[#30d158]' : 'border-[#3a3a4a]'}`}>
                {i < 2 && <svg width="8" height="8" viewBox="0 0 24 24" fill="none" stroke="#000" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg>}
              </div>
              <span className={i < 2 ? 'text-[#9494a0] line-through' : 'text-[#e8e8ed]'}>{t}</span>
            </div>
          ))}
          <div className="text-[11px] font-semibold text-[#5e5e6e] uppercase tracking-wide mt-2">备忘录</div>
          <div className="text-[11px] text-[#5e5e6e] leading-relaxed">用户访谈安排在周四下午...</div>
          <div className="text-[11px] text-[#5e5e6e] leading-relaxed">竞品分析链接已保存至备忘录</div>
        </div>
      </div>
    </div>
  )
}
