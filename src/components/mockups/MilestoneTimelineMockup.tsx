import { useState } from 'react'

const mils = [
  { id: '1', title: '需求分析与调研', done: true },
  { id: '2', title: '信息架构设计', done: true, sub: [{ id: '2a', title: '用户流程图', done: true }, { id: '2b', title: '页面结构梳理', done: false }] },
  { id: '3', title: '交互原型制作', done: false },
  { id: '4', title: '视觉设计与规范', done: false },
]

export default function MilestoneTimelineMockup() {
  const [items, setItems] = useState(mils)

  const toggle = (id: string) => {
    setItems(prev => prev.map(m =>
      m.id === id ? { ...m, done: !m.done } :
      { ...m, sub: m.sub?.map(s => s.id === id ? { ...s, done: !s.done } : s) }
    ))
  }

  return (
    <div className="space-y-0.5">
      <div className="flex items-center justify-between mb-3 px-1">
        <span className="text-xs font-semibold text-[#6e6e73] dark:text-[#8e8e9a] uppercase tracking-wide">里程碑</span>
        <label className="flex items-center gap-1.5 text-[11px] text-[#aeaeb2] dark:text-[#5a5a6e] cursor-pointer">
          <input type="checkbox" className="w-3 h-3 rounded accent-[#0085ff]" defaultChecked />
          隐藏已完成
        </label>
      </div>
      {items.map(m => (
        <div key={m.id}>
          <div
            onClick={() => toggle(m.id)}
            className="flex items-center gap-2.5 px-2 py-1.5 rounded-lg hover:bg-[#f5f5f7] dark:hover:bg-[#1a1d28] cursor-pointer transition-colors group"
            style={m.done ? { opacity: 0.55 } : {}}
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" className="flex-shrink-0">
              {m.done
                ? <><circle cx="12" cy="12" r="11" fill="#09CC9B" stroke="#09CC9B" strokeWidth="2" /><polyline points="7 12 10.5 15.5 17 8.5" stroke="#fff" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" /></>
                : <circle cx="12" cy="12" r="10.5" fill="none" stroke="#c0c0c8" strokeWidth="1.5" />
              }
            </svg>
            <span className={`text-sm ${m.done ? 'line-through text-[#aeaeb2] dark:text-[#5a5a6e]' : 'text-[#1d1d1f] dark:text-[#e8e8ed] font-medium'}`}>{m.title}</span>
          </div>
          {m.sub?.map(s => (
            <div
              key={s.id}
              onClick={() => toggle(s.id)}
              className="flex items-center gap-2.5 px-2 py-1 ml-8 rounded-lg hover:bg-[#f5f5f7] dark:hover:bg-[#1a1d28] cursor-pointer transition-colors"
              style={s.done ? { opacity: 0.5 } : {}}
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" className="flex-shrink-0">
                {s.done
                  ? <><circle cx="12" cy="12" r="11" fill="#09CC9B" stroke="#09CC9B" strokeWidth="2" /><polyline points="7 12 10.5 15.5 17 8.5" stroke="#fff" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" /></>
                  : <circle cx="12" cy="12" r="10.5" fill="none" stroke="#c0c0c8" strokeWidth="1.5" />
                }
              </svg>
              <span className={`text-xs ${s.done ? 'line-through text-[#aeaeb2] dark:text-[#5a5a6e]' : 'text-[#6e6e73] dark:text-[#8e8e9a]'}`}>{s.title}</span>
            </div>
          ))}
        </div>
      ))}
      {/* Input bar */}
      <div className="mt-4 flex items-center gap-2 bg-[#f5f5f7] dark:bg-[#0f1219] border border-[#e5e5ea] dark:border-[#1e2230] rounded-lg px-3 py-2">
        <input
          className="flex-1 bg-transparent text-sm text-[#1d1d1f] dark:text-[#e8e8ed] placeholder-[#aeaeb2] dark:placeholder-[#5a5a6e] outline-none"
          placeholder="添加里程碑..."
        />
        <button className="text-[#52ADFF] disabled:opacity-30" disabled>
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><line x1="22" y1="2" x2="11" y2="13"/><polygon points="22 2 15 22 11 13 2 9 22 2"/></svg>
        </button>
      </div>
    </div>
  )
}
