import { useState } from 'react'

const sections = [
  {
    kind: 'weekTodo',
    label: '本周待办',
    items: [
      { project: 'Project Alpha', color: '#0085ff', milestone: '交互原型制作', subtask: '低保真原型', reminder: null },
      { project: 'Dev Sandbox', color: '#ff9f0a', milestone: '文档完善', subtask: null, reminder: '06-02 10:00' },
    ],
  },
  {
    kind: 'weekDone',
    label: '本周完成',
    items: [
      { project: 'Project Alpha', color: '#0085ff', milestone: '需求调研' },
      { project: 'Dev Sandbox', color: '#ff9f0a', milestone: '测试覆盖' },
    ],
  },
  {
    kind: 'monthDone',
    label: '本月完成',
    items: [
      { project: 'Project Alpha', color: '#0085ff', milestone: '信息架构设计' },
      { project: 'Beta Launch', color: '#bf5af2', milestone: '竞品分析' },
    ],
  },
]

export default function ReportMockup() {
  const [copied, setCopied] = useState<string | null>(null)

  const copy = (kind: string) => {
    setCopied(kind)
    setTimeout(() => setCopied(null), 1200)
  }

  return (
    <div className="space-y-4">
      <div className="text-xs font-semibold text-[#6e6e73] dark:text-[#8e8e9a] uppercase tracking-wide mb-3">汇总报告</div>
      {sections.map(s => (
        <div key={s.kind}>
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm font-semibold text-[#1d1d1f] dark:text-[#e8e8ed]">{s.label}</span>
            <div className="flex items-center gap-2">
              {copied === s.kind && <span className="text-[10px] text-[#09CC9B] font-medium transition-opacity">已复制</span>}
              <button
                onClick={() => copy(s.kind)}
                className="text-[#aeaeb2] dark:text-[#5a5a6e] hover:text-[#0085ff] dark:hover:text-[#00bfff] transition-colors"
                disabled={s.items.length === 0}
              >
                <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><rect x="9" y="9" width="13" height="13" rx="2"/><path d="M5 15H4a2 2 0 01-2-2V4a2 2 0 012-2h9a2 2 0 012 2v1"/></svg>
              </button>
            </div>
          </div>
          {s.items.length === 0 ? (
            <div className="text-xs text-[#aeaeb2] dark:text-[#5a5a6e] py-3 text-center">暂无完成内容</div>
          ) : (
            <div className="space-y-1.5">
              {s.items.map((item, i) => (
                <div key={i}
                  className="flex items-center gap-2 bg-[#f5f5f7] dark:bg-[#1a1d28] border border-[#e5e5ea] dark:border-[#1e2230] rounded-lg px-3 py-2"
                >
                  <div className="w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ backgroundColor: item.color }} />
                  <span className="text-xs font-medium text-[#1d1d1f] dark:text-[#e8e8ed]">{item.project}</span>
                  <span className="text-[11px] text-[#aeaeb2] dark:text-[#5a5a6e]">·</span>
                  <span className="text-xs text-[#6e6e73] dark:text-[#8e8e9a]">{item.milestone}</span>
                  {'subtask' in item && item.subtask && <><span className="text-[11px] text-[#aeaeb2]">·</span><span className="text-xs text-[#8e8e93] dark:text-[#6a6a7a]">{item.subtask}</span></>}
                  {'reminder' in item && item.reminder && (
                    <span className="ml-auto text-[10px] text-[#ff9f0a] flex items-center gap-0.5">
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
