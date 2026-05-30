import { useI18n } from '../i18n/I18nContext'

export default function AppMockup() {
  const { t } = useI18n()
  const cards = t.mockup.mockProjects
  const rd = t.mockup.reportData

  return (
    <div className="rounded-2xl overflow-hidden bg-[#f0f0f3] dark:bg-[#0e1119] p-3 sm:p-4
      shadow-[0_0_60px_rgba(0,133,255,0.04),0_16px_48px_rgba(0,0,0,0.06)] dark:shadow-[0_0_80px_rgba(0,0,0,0.5)]">
      <div className="flex gap-3 h-[360px] relative">
        <div className="w-40 sm:w-48 flex-shrink-0 rounded-2xl bg-white dark:bg-[#151821]
          border border-[#e5e5ea] dark:border-[#1e2230]
          shadow-[0_4px_24px_rgba(0,0,0,0.04)] dark:shadow-[0_4px_24px_rgba(0,0,0,0.3)]
          p-3 sm:p-4 flex flex-col overflow-hidden">
          <div className="text-[9px] sm:text-[10px] font-bold text-[#aeaeb2] dark:text-[#5a5a6e] uppercase tracking-[1.5px] mb-3">{t.mockup.overview}</div>
          {[{ key: 'allProjects' as const, active: true, color: '#0085ff' }, { key: 'starred' as const, active: false, color: '#ff9f0a' }].map(item => (
            <div key={item.key} className={`flex items-center gap-2 px-2 py-1.5 rounded-lg text-[11px] sm:text-xs mb-0.5 ${item.active ? 'bg-[#0085ff]/10 text-[#0085ff] dark:text-[#00bfff] font-semibold' : 'text-[#aeaeb2] dark:text-[#5a5a6e]'}`}>
              <div className={`w-1.5 h-1.5 rounded-full flex-shrink-0 ${item.active ? '' : 'opacity-0'}`} style={{ backgroundColor: item.color }} />
              {t.mockup[item.key]}
            </div>
          ))}
          <div className="text-[9px] sm:text-[10px] font-bold text-[#aeaeb2] dark:text-[#5a5a6e] uppercase tracking-[1.5px] mt-5 mb-3">{t.mockup.archive}</div>
          <div className="flex items-center gap-2 px-2 py-1.5 rounded-lg text-[11px] sm:text-xs text-[#aeaeb2] dark:text-[#5a5a6e]">
            <div className="w-1.5 h-1.5 opacity-0" />{t.mockup.defaultArchive}
          </div>
        </div>

        <div className="flex-1 flex flex-col gap-2 overflow-hidden">
          {cards.map((p, i) => {
            const isOverdue = p.reminder ? false : false
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
                      <div className="text-[10px] sm:text-[11px] text-[#aeaeb2] dark:text-[#5a5a6e] ml-1.5 mt-0.5"><span>{p.topSub}</span></div>
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
                        <defs><linearGradient id="amg" x1="0%" y1="0%" x2="100%" y2="100%"><stop offset="0%" stopColor="#00BBE1" /><stop offset="100%" stopColor="#00F9D0" /></linearGradient></defs>
                      </svg>
                      <span className="text-xs font-bold text-[#00BBE1] tabular-nums">{p.progress}%</span>
                    </div>
                  </div>
                </div>
              </div>
            )
          })}
        </div>

        <div className="hidden lg:flex w-56 flex-shrink-0 rounded-2xl bg-white dark:bg-[#151821]
          border border-[#e5e5ea] dark:border-[#1e2230]
          shadow-[0_4px_24px_rgba(0,0,0,0.04)] dark:shadow-[0_4px_24px_rgba(0,0,0,0.3)]
          p-3 flex-col gap-2.5 overflow-y-auto">
          <div className="text-[10px] font-bold text-[#aeaeb2] dark:text-[#5a5a6e] uppercase tracking-[1.5px]">{t.mockup.report}</div>
          {[
            { key: 'weekTodo' as const, items: rd.weekTodo },
            { key: 'weekDone' as const, items: rd.weekDone },
            { key: 'monthDone' as const, items: rd.monthDone },
          ].map(s => (
            <div key={s.key}>
              <div className="text-[11px] font-semibold text-[#1d1d1f] dark:text-[#e8e8ed] mb-1.5">{t.mockup[s.key]}</div>
              {s.items.map((item, j) => (
                <div key={j} className="flex items-center gap-1.5 text-[10px] py-0.5">
                  <div className="w-1 h-1 rounded-full flex-shrink-0" style={{ backgroundColor: item.color }} />
                  <span className="font-medium text-[#1d1d1f] dark:text-[#e8e8ed] truncate">{item.project}</span>
                  <span className="text-[#aeaeb2]">{item.subtask ?? item.milestone}</span>
                  {item.reminder && (
                    <span className="ml-auto text-[#ff9f0a] flex items-center gap-0.5 flex-shrink-0">
                      <svg width="8" height="8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><circle cx="12" cy="13" r="8"/><path d="M12 9v4l2 2"/></svg>{item.reminder}
                    </span>
                  )}
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
