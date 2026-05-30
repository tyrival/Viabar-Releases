import { useState } from 'react'
import { useI18n } from '../../i18n/I18nContext'

interface Sub { id: string; title: string; done: boolean }
interface Mil { id: string; title: string; done: boolean; sub?: Sub[] }

function buildMils(data: string[]): Mil[] {
  return [
    { id: '1', title: data[0], done: true },
    { id: '2', title: data[1], done: false, sub: [{ id: '2a', title: data[2], done: false }, { id: '2b', title: data[3], done: false }] },
    { id: '3', title: data[4], done: false },
    { id: '4', title: data[5], done: false },
  ]
}

export default function MilestoneTimelineMockup() {
  const { t } = useI18n()
  const [items, setItems] = useState<Mil[]>(() => buildMils(t.mockup.milestoneData))
  const [hideCompleted, setHideCompleted] = useState(false)
  const [text, setText] = useState('')
  const [nextId, setNextId] = useState(5)
  const [lang, setLang] = useState(t.mockup.milestoneData[0])

  // Rebuild data when language changes
  if (t.mockup.milestoneData[0] !== lang) {
    setLang(t.mockup.milestoneData[0])
    setItems(buildMils(t.mockup.milestoneData))
  }

  const toggle = (id: string) => {
    setItems(prev => prev.map(m => {
      if (m.id === id) {
        const newDone = !m.done
        return { ...m, done: newDone, sub: m.sub?.map(s => ({ ...s, done: newDone })) }
      }
      if (m.sub?.some(s => s.id === id)) {
        const newSub = m.sub.map(s => s.id === id ? { ...s, done: !s.done } : s)
        return { ...m, sub: newSub, done: newSub.every(s => s.done) }
      }
      return m
    }))
  }

  const send = () => {
    if (!text.trim()) return
    setItems(prev => [...prev, { id: String(nextId), title: text.trim(), done: false }])
    setText('')
    setNextId(n => n + 1)
  }

  const visibleItems = hideCompleted
    ? items.filter(m => !m.done || (m.sub && m.sub.some(s => !s.done)))
    : items

  return (
    <div className="flex flex-col" style={{ maxHeight: 460 }}>
      <div className="flex items-center justify-between mb-3 px-1">
        <span className="text-xs font-semibold text-[#6e6e73] dark:text-[#8e8e9a] uppercase tracking-wide">{t.mockup.milestones}</span>
        <label className="flex items-center gap-1.5 text-[11px] text-[#aeaeb2] dark:text-[#5a5a6e] cursor-pointer select-none">
          <input type="checkbox" className="w-3 h-3 rounded accent-[#0085ff]" checked={hideCompleted} onChange={e => setHideCompleted(e.target.checked)} />
          {t.mockup.hideCompleted}
        </label>
      </div>
      <div className="flex-1 space-y-0 overflow-y-auto pr-1" style={{ maxHeight: 320 }}>
        {visibleItems.length === 0 ? (
          <div className="text-center py-8 text-xs text-[#aeaeb2] dark:text-[#5a5a6e]">{t.mockup.noMilestones}</div>
        ) : (
          visibleItems.map(m => (
            <div key={m.id}>
              <div onClick={() => toggle(m.id)}
                className="flex items-center gap-2.5 px-2 py-1.5 rounded-lg hover:bg-[#f5f5f7] dark:hover:bg-[#1a1d28] cursor-pointer transition-colors"
                style={m.done && !hideCompleted ? { opacity: 0.5 } : {}}
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" className="flex-shrink-0">
                  {m.done ? <><circle cx="12" cy="12" r="11" fill="#09CC9B" stroke="#09CC9B" strokeWidth="2" /><polyline points="7 12 10.5 15.5 17 8.5" stroke="#fff" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" /></> : <circle cx="12" cy="12" r="10.5" fill="none" stroke="#c0c0c8" strokeWidth="1.5" />}
                </svg>
                <span className={`text-sm ${m.done ? 'line-through text-[#aeaeb2] dark:text-[#5a5a6e]' : 'text-[#1d1d1f] dark:text-[#e8e8ed] font-medium'}`}>{m.title}</span>
              </div>
              {m.sub?.map(s => (
                <div key={s.id} onClick={() => toggle(s.id)}
                  className="flex items-center gap-2.5 px-2 py-1 ml-8 rounded-lg hover:bg-[#f5f5f7] dark:hover:bg-[#1a1d28] cursor-pointer transition-colors"
                  style={(!hideCompleted && s.done) ? { opacity: 0.5 } : {}}
                >
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" className="flex-shrink-0">
                    {s.done ? <><circle cx="12" cy="12" r="11" fill="#09CC9B" stroke="#09CC9B" strokeWidth="2" /><polyline points="7 12 10.5 15.5 17 8.5" stroke="#fff" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" /></> : <circle cx="12" cy="12" r="10.5" fill="none" stroke="#c0c0c8" strokeWidth="1.5" />}
                  </svg>
                  <span className={`text-xs ${s.done ? 'line-through text-[#aeaeb2] dark:text-[#5a5a6e]' : 'text-[#6e6e73] dark:text-[#8e8e9a]'}`}>{s.title}</span>
                </div>
              ))}
            </div>
          ))
        )}
      </div>
      <div className="mt-3 pt-3 border-t border-[#e5e5ea] dark:border-[#1e2230] flex items-center gap-2">
        <input value={text} onChange={e => setText(e.target.value)}
          onKeyDown={e => { if (e.key === 'Enter') { e.preventDefault(); send() } }}
          className="flex-1 bg-[#f5f5f7] dark:bg-[#0f1219] border border-[#e5e5ea] dark:border-[#1e2230] rounded-lg px-3 py-2 text-sm text-[#1d1d1f] dark:text-[#e8e8ed] placeholder-[#aeaeb2] dark:placeholder-[#5a5a6e] outline-none focus:border-[#0085ff] dark:focus:border-[#00bfff] transition-colors"
          placeholder={t.mockup.addMilestone}
        />
        <button onClick={send} disabled={!text.trim()} className="text-[#52ADFF] disabled:text-[#ccc] dark:disabled:text-[#3a3a4a] transition-colors p-1">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><line x1="22" y1="2" x2="11" y2="13"/><polygon points="22 2 15 22 11 13 2 9 22 2"/></svg>
        </button>
      </div>
    </div>
  )
}
