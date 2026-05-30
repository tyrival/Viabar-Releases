import { useState } from 'react'

const memos = [
  { id: '1', content: '用户访谈安排在周四下午 3 点，会议室已预定。重点讨论工作流痛点和当前工具的使用障碍。', time: '今天 10:42' },
  { id: '2', content: '竞品分析报告链接已保存在 Documents 目录下，覆盖了 Notion、Linear 和 Todoist 的核心功能对比。', time: '今天 09:15' },
  { id: '3', content: '信息架构初稿完成，主要的导航层级确定为三层。需要评审后进入交互原型阶段。', time: '昨天 16:30' },
]

export default function MemoTimelineMockup() {
  const [text, setText] = useState('')
  const [items, setItems] = useState(memos)
  const [copied, setCopied] = useState<string | null>(null)

  const send = () => {
    if (!text.trim()) return
    setItems([{ id: Date.now().toString(), content: text, time: '刚刚' }, ...items])
    setText('')
  }

  const copy = (id: string, content: string) => {
    navigator.clipboard.writeText(content)
    setCopied(id)
    setTimeout(() => setCopied(null), 1200)
  }

  return (
    <div className="flex flex-col" style={{ maxHeight: 480 }}>
      {/* Memo list */}
      <div className="flex-1 space-y-2 overflow-y-auto pr-1" style={{ maxHeight: 340 }}>
        <div className="text-xs font-semibold text-[#6e6e73] dark:text-[#8e8e9a] uppercase tracking-wide mb-3">备忘录</div>
        {items.map(m => (
          <div key={m.id}
            className="rounded-xl border border-[#e5e5ea] dark:border-[#1e2230]
              bg-white dark:bg-[#1a1d28] px-4 py-3
              hover:shadow-sm transition-all group/card"
          >
            <div className="flex items-center justify-between mb-2">
              <span className="text-[11px] text-[#aeaeb2] dark:text-[#5a5a6e]">{m.time}</span>
              <div className="flex items-center gap-2 opacity-0 group-hover/card:opacity-100 transition-opacity">
                {copied === m.id && <span className="text-[10px] text-[#09CC9B] font-medium">已复制</span>}
                <button onClick={() => copy(m.id, m.content)} className="text-[#aeaeb2] dark:text-[#5a5a6e] hover:text-[#0085ff] dark:hover:text-[#00bfff] transition-colors">
                  <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><rect x="9" y="9" width="13" height="13" rx="2"/><path d="M5 15H4a2 2 0 01-2-2V4a2 2 0 012-2h9a2 2 0 012 2v1"/></svg>
                </button>
              </div>
            </div>
            <p className="text-sm text-[#1d1d1f] dark:text-[#e8e8ed] leading-relaxed select-text">{m.content}</p>
          </div>
        ))}
      </div>
      {/* Input bar */}
      <div className="mt-3 pt-3 border-t border-[#e5e5ea] dark:border-[#1e2230] flex items-center gap-2">
        <input
          value={text}
          onChange={e => setText(e.target.value)}
          onKeyDown={e => { if (e.key === 'Enter' && !e.shiftKey) { e.preventDefault(); send() } }}
          className="flex-1 bg-[#f5f5f7] dark:bg-[#0f1219] border border-[#e5e5ea] dark:border-[#1e2230] rounded-lg px-3 py-2 text-sm text-[#1d1d1f] dark:text-[#e8e8ed] placeholder-[#aeaeb2] dark:placeholder-[#5a5a6e] outline-none focus:border-[#0085ff] dark:focus:border-[#00bfff] transition-colors"
          placeholder="添加备忘录..."
        />
        <button
          onClick={send}
          disabled={!text.trim()}
          className="text-[#52ADFF] disabled:text-[#ccc] dark:disabled:text-[#3a3a4a] transition-colors p-1"
        >
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><line x1="22" y1="2" x2="11" y2="13"/><polygon points="22 2 15 22 11 13 2 9 22 2"/></svg>
        </button>
      </div>
    </div>
  )
}
