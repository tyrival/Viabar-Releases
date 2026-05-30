import { useI18n } from '../i18n/I18nContext'

const cards = [
  { name: 'Project Alpha', color: '#0085ff', milestones: 4, progress: 60, topTask: '信息架构设计', topSub: '用户流程梳理', reminder: '06-02 14:00' },
  { name: 'Dev Sandbox', color: '#ff9f0a', milestones: 5, progress: 80, topTask: 'CI/CD 部署配置', topSub: null, reminder: null },
  { name: 'Beta Launch', color: '#bf5af2', milestones: 3, progress: 35, topTask: '市场调研分析', topSub: null, reminder: '06-05 10:00' },
]

const reportSections = [
  { kind: 'weekTodo', labelKey: 'weekTodo' as const, items: [
    { project: 'Project Alpha', color: '#0085ff', milestone: '交互原型制作', subtask: '低保真原型', reminder: null },
    { project: 'Dev Sandbox', color: '#ff9f0a', milestone: '文档完善', subtask: null, reminder: '06-02 10:00' },
  ]},
  { kind: 'weekDone', labelKey: 'weekDone' as const, items: [
    { project: 'Project Alpha', color: '#0085ff', milestone: '需求调研' },
    { project: 'Dev Sandbox', color: '#ff9f0a', milestone: '测试覆盖' },
  ]},
  { kind: 'monthDone', labelKey: 'monthDone' as const, items: [
    { project: 'Project Alpha', color: '#0085ff', milestone: '信息架构设计' },
  ]},
]

export default function AppMockup() {
  const { t } = useI18n()

  return (
    <div className="rounded-2xl overflow-hidden bg-[#f0f0f3] dark:bg-[#0e1119] p-3 sm:p-4
      shadow-[0_0_60px_rgba(0,133,255,0.04),0_16px_48px_rgba(0,0,0,0.06)] dark:shadow-[0_0_80px_rgba(0,0,0,0.5)]">
      <div className="flex gap-3 h-[360px] relative">

        {/* Floating sidebar drawer */}
        <div className="w-40 sm:w-48 flex-shrink-0 rounded-2xl bg-white dark:bg-[#151821]
          border border-[#e5e5ea] dark:border-[#1e2230]
          shadow-[0_4px_24px_rgba(0,0,0,0.04)] dark:shadow-[0_4px_24px_rgba(0,0,0,0.3)]
          p-3 sm:p-4 flex flex-col overflow-hidden">
          <div className="text-[9px] sm:text-[10px] font-bold text-[#aeaeb2] dark:text-[#5a5a6e] uppercase tracking-[1.5px] mb-3">{t.mockup.overview}</div>
          {[{ key: 'allProjects', active: true, color: '#0085ff' }, { key: 'starred', active: false, color: '#ff9f0a' }].map((item, i) => (
            <div key={item.key} className={`flex items-center gap-2 px-2 py-1.5 rounded-lg text-[11px] sm:text-xs mb-0.5 ${item.active ? 'bg-[#0085ff]/10 text-[#0085ff] dark:text-[#00bfff] font-semibold' : 'text-[#aeaeb2] dark:text-[#5a5a6e]'}`}>
              <div className={`w-1.5 h-1.5 rounded-full flex-shrink-0 ${item.active ? '' : 'opacity-0'}`} style={{ backgroundColor: item.color }} />
              {t.mockup[item.key as keyof typeof t.mockup]}
            </div>
          ))}
          <div className="text-[9px] sm:text-[10px] font-bold text-[#aeaeb2] dark:text-[#5a5a6e] uppercase tracking-[1.5px] mt-5 mb-3">{t.mockup.archive}</div>
          <div className="flex items-center gap-2 px-2 py-1.5 rounded-lg text-[11px] sm:text-xs text-[#aeaeb2] dark:text-[#5a5a6e]">
            <div className="w-1.5 h-1.5 opacity-0" />
            {t.mockup.defaultArchive}
          </div>
        </div>

        {/* Main content area */}
        <div className="flex-1 flex flex-col gap-2 overflow-hidden">
          {cards.map((p, i) => {
            const isOverdue = p.reminder ? new Date(`2026-${p.reminder.replace('-', '-')}`) < new Date('2026-06-01') : false
            return (
              <div key={p.name}
                className={`flex items-stretch rounded-xl overflow-hidden border border-[#e5e5ea] dark:border-[#1e2230]
                  bg-white dark:bg-[#151821] hover:shadow-md hover:-translate-y-px transition-all duration-150 cursor-default
                  ${i === 0 ? 'shadow-[0_2px_12px_rgba(0,133,255,0.06)] dark:shadow-[0_2px_12px_rgba(0,0,0,0.3)] ring-1 ring-[#0085ff]/10 dark:ring-[#00bfff]/10' : ''}`}
              >
                <div className="w-1 flex-shrink-0 rounded-l-xl" style={{ backgroundColor: p.progress >= 100 ? '#09CC9B' : p.color }} />
                <div className="flex-1 flex flex-col justify-between pt-2.5 pb-2 px-3">
                  <div>
                    <div className="flex items-center gap-1.5 mb-1.5">
                      <span className="text-xs sm:text-sm font-semibold text-[#1d1d1f] dark:text-[#e8e8ed]">{p.name}</span>
                      {i === 0 && <span className="text-[10px] text-[#FFBF00]">★</span>}
                    </div>
                    <div className="flex items-center gap-1 text-[10px] sm:text-[11px] text-[#aeaeb2] dark:text-[#5a5a6e]">
                      <span className="text-[#6e6e73] dark:text-[#8e8e9a]">{p.topTask}</span>
                    </div>
                    {p.topSub && (
                      <div className="text-[10px] sm:text-[11px] text-[#aeaeb2] dark:text-[#5a5a6e] ml-1.5 mt-0.5">
                        <span>{p.topSub}</span>
                      </div>
                    )}
                  </div>
                  <div className="flex items-center justify-between mt-1">
                    <div className="flex items-center gap-2">
                      {p.reminder && (
                        <span className={`flex items-center gap-1 text-[10px] ${isOverdue ? 'text-[#ff5252]' : 'text-[#ff9f0a]'}`}>
                          <svg width="9" height="9" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><circle cx="12" cy="13" r="8"/><path d="M12 9v4l2 2"/></svg>
                          {p.reminder}
                        </span>
                      )}
                    </div>
                    <div className="flex items-center gap-2.5">
                      <svg width="24" height="24" viewBox="0 0 24 24" className="flex-shrink-0">
                        <circle cx="12" cy="12" r="9" fill="none" stroke="#00BBE1" strokeOpacity="0.12" strokeWidth="4" />
                        <circle cx="12" cy="12" r="9" fill="none" stroke="url(#amg)" strokeWidth="4"
                          strokeDasharray={`${p.progress * 0.565} 56.5`} strokeLinecap="round" transform="rotate(-90 12 12)" />
                        <defs>
                          <linearGradient id="amg" x1="0%" y1="0%" x2="100%" y2="100%">
                            <stop offset="0%" stopColor="#00BBE1" /><stop offset="100%" stopColor="#00F9D0" />
                          </linearGradient>
                        </defs>
                      </svg>
                      <span className="text-xs font-bold text-[#00BBE1] tabular-nums">{p.progress}%</span>
                    </div>
                  </div>
                </div>
              </div>
            )
          })}
        </div>

        {/* Detail panel - Report style */}
        <div className="hidden lg:flex w-56 flex-shrink-0 rounded-2xl bg-white dark:bg-[#151821]
          border border-[#e5e5ea] dark:border-[#1e2230]
          shadow-[0_4px_24px_rgba(0,0,0,0.04)] dark:shadow-[0_4px_24px_rgba(0,0,0,0.3)]
          p-3 flex-col gap-2.5 overflow-y-auto">
          <div className="text-[10px] font-bold text-[#aeaeb2] dark:text-[#5a5a6e] uppercase tracking-[1.5px]">{t.mockup.report}</div>
          {reportSections.map(s => (
            <div key={s.kind}>
              <div className="text-[11px] font-semibold text-[#1d1d1f] dark:text-[#e8e8ed] mb-1.5">{t.mockup[s.labelKey]}</div>
              {s.items.length === 0 ? (
                <div className="text-[10px] text-[#aeaeb2] dark:text-[#5a5a6e] py-1">-</div>
              ) : (
                s.items.map((item, j) => (
                  <div key={j} className="flex items-center gap-1.5 text-[10px] py-0.5">
                    <div className="w-1 h-1 rounded-full flex-shrink-0" style={{ backgroundColor: item.color }} />
                    <span className="font-medium text-[#1d1d1f] dark:text-[#e8e8ed] truncate">{item.project}</span>
                    <span className="text-[#aeaeb2]">{'subtask' in item && item.subtask ? item.subtask : item.milestone}</span>
                    {'reminder' in item && item.reminder && (
                      <span className="ml-auto text-[#ff9f0a] flex items-center gap-0.5 flex-shrink-0">
                        <svg width="8" height="8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><circle cx="12" cy="13" r="8"/><path d="M12 9v4l2 2"/></svg>
                        {item.reminder}
                      </span>
                    )}
                  </div>
                ))
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
