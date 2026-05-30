import { useState } from 'react'
import { useI18n } from '../../i18n/I18nContext'

const sections: { kind: string; labelKey: 'weekTodo' | 'weekDone' | 'monthDone'; copyKey: 'copyWeekTodo' | 'copyWeekDone' | 'copyMonthDone'; items: { project: string; color: string; milestone: string; subtask?: string; reminder?: string }[] }[] = [
  { kind: 'weekTodo', labelKey: 'weekTodo', copyKey: 'copyWeekTodo', items: [
    { project: 'Project Alpha', color: '#0085ff', milestone: '交互原型制作', subtask: '低保真原型' as string | undefined, reminder: '' as string | undefined },
    { project: 'Dev Sandbox', color: '#ff9f0a', milestone: '文档完善', subtask: undefined, reminder: '06-02 10:00' },
  ]},
  { kind: 'weekDone', labelKey: 'weekDone', copyKey: 'copyWeekDone', items: [
    { project: 'Project Alpha', color: '#0085ff', milestone: '需求调研' },
    { project: 'Dev Sandbox', color: '#ff9f0a', milestone: '测试覆盖' },
  ]},
  { kind: 'monthDone', labelKey: 'monthDone', copyKey: 'copyMonthDone', items: [
    { project: 'Project Alpha', color: '#0085ff', milestone: '信息架构设计' },
  ]},
]

export default function ReportMockup() {
  const { t } = useI18n()
  const [copied, setCopied] = useState<string | null>(null)

  const copySection = (kind: string) => {
    setCopied(kind)
    setTimeout(() => setCopied(null), 1200)
  }

  return (
    <div className="space-y-4">
      <div className="text-xs font-semibold text-[#6e6e73] dark:text-[#8e8e9a] uppercase tracking-wide mb-3">{t.mockup.report}</div>
      {sections.map(s => (
        <div key={s.kind}>
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm font-semibold text-[#1d1d1f] dark:text-[#e8e8ed]">{t.mockup[s.labelKey]}</span>
            <div className="flex items-center gap-2">
              {copied === s.kind && <span className="text-[10px] text-[#09CC9B] font-medium">{t.mockup.copied}</span>}
              <button onClick={() => copySection(s.kind)}
                className="text-[#aeaeb2] dark:text-[#5a5a6e] hover:text-[#0085ff] dark:hover:text-[#00bfff] transition-colors"
                disabled={s.items.length === 0}
              >
                <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><rect x="9" y="9" width="13" height="13" rx="2"/><path d="M5 15H4a2 2 0 01-2-2V4a2 2 0 012-2h9a2 2 0 012 2v1"/></svg>
              </button>
            </div>
          </div>
          {s.items.length === 0 ? (
            <div className="text-xs text-[#aeaeb2] dark:text-[#5a5a6e] py-3 text-center">-</div>
          ) : (
            <div className="space-y-1.5">
              {s.items.map((item, i) => (
                <div key={i} className="flex items-center gap-2 bg-[#f5f5f7] dark:bg-[#1a1d28] border border-[#e5e5ea] dark:border-[#1e2230] rounded-lg px-3 py-2">
                  <div className="w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ backgroundColor: item.color }} />
                  <span className="text-xs font-medium text-[#1d1d1f] dark:text-[#e8e8ed]">{item.project}</span>
                  <span className="text-[11px] text-[#aeaeb2] dark:text-[#5a5a6e]">{item.milestone}</span>
                  {item.subtask && <><span className="text-[11px] text-[#aeaeb2]">·</span><span className="text-xs text-[#8e8e93] dark:text-[#6a6a7a]">{item.subtask}</span></>}
                  {item.reminder && (
                    <span className="ml-auto text-[10px] text-[#ff9f0a] flex items-center gap-0.5 flex-shrink-0">
                      <svg width="9" height="9" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><circle cx="12" cy="13" r="8"/><path d="M12 9v4l2.5 2.5"/></svg>
                      {item.reminder}
                    </span>
                  )}
                </div>
              ))}
            </div>
          )}
        </div>
      ))}
    </div>
  )
}
