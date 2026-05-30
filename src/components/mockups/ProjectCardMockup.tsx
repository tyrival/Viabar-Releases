import { useI18n } from '../../i18n/I18nContext'

interface Props { showTemplate?: boolean }

const projects = [
  { name: 'Project Alpha', color: '#0085ff', progress: 60, milestones: 4, topMilestone: '信息架构设计', subtask: '用户流程梳理', reminder: { date: '06-02', time: '14:00', overdue: false } },
  { name: 'Dev Sandbox', color: '#ff9f0a', progress: 80, milestones: 5, topMilestone: 'CI/CD 部署配置', subtask: null, reminder: { date: '05-28', time: '10:00', overdue: true } },
  { name: 'Beta Launch', color: '#bf5af2', progress: 35, milestones: 4, topMilestone: '市场调研分析', subtask: null, reminder: { date: '06-05', time: '10:00', overdue: false } },
]

const templates = [
  { name: '客户项目', color: '#30d158', milestones: 5, subtasks: 12 },
  { name: '课程设计', color: '#5e5ce6', milestones: 3, subtasks: 8 },
  { name: '个人规划', color: '#ff375f', milestones: 4, subtasks: 6 },
]

export default function ProjectCardMockup({ showTemplate }: Props) {
  const { t } = useI18n()

  if (showTemplate) {
    return (
      <div className="space-y-3">
        <div className="text-xs font-semibold text-[#6e6e73] dark:text-[#8e8e9a] uppercase tracking-wide mb-3">{t.mockup.template}</div>
        {templates.map(p => (
          <div key={p.name} className="flex items-center gap-3 bg-[#f5f5f7] dark:bg-[#1a1d28] border border-[#e5e5ea] dark:border-[#1e2230] rounded-lg px-4 py-3 hover:border-[#0085ff]/30 transition-colors cursor-default">
            <div className="w-2.5 h-2.5 rounded-full flex-shrink-0" style={{ backgroundColor: p.color }} />
            <div className="flex-1 min-w-0">
              <div className="text-sm font-semibold text-[#1d1d1f] dark:text-[#e8e8ed]">{p.name}</div>
              <div className="text-[11px] text-[#aeaeb2] dark:text-[#5a5a6e]">{p.milestones} milestones · {p.subtasks} subtasks</div>
            </div>
            <div className="text-[10px] px-2 py-0.5 rounded-full bg-[#0085ff]/10 text-[#0085ff] dark:text-[#00bfff] font-medium">{t.mockup.use}</div>
          </div>
        ))}
      </div>
    )
  }

  return (
    <div className="space-y-2.5">
      <div className="text-xs font-semibold text-[#6e6e73] dark:text-[#8e8e9a] uppercase tracking-wide mb-3">Project Overview</div>
      {projects.map(p => (
        <div key={p.name}
          className="flex items-stretch rounded-xl overflow-hidden border border-[#e5e5ea] dark:border-[#1e2230]
            bg-[#f5f5f7] dark:bg-[#1a1d28] hover:shadow-md hover:-translate-y-0.5 transition-all duration-150 cursor-default"
          style={{ height: 150 }}
        >
          <div className="w-1 flex-shrink-0" style={{ backgroundColor: p.progress >= 100 ? '#09CC9B' : p.color }} />
          <div className="flex-1 flex flex-col justify-between px-3.5 py-3">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <span className="text-sm font-semibold text-[#1d1d1f] dark:text-[#e8e8ed]">{p.name}</span>
                {p.name === 'Project Alpha' && <span className="text-[10px] text-[#FFBF00]">★</span>}
              </div>
              <div className="flex items-center gap-1.5 text-[11px] text-[#aeaeb2] dark:text-[#5a5a6e]">
                <span className="text-[#6e6e73] dark:text-[#8e8e9a]">{p.topMilestone}</span>
              </div>
              {p.subtask && (
                <div className="flex items-center gap-1.5 text-[11px] text-[#aeaeb2] dark:text-[#5a5a6e] ml-5 mt-0.5">
                  <span>· {p.subtask}</span>
                </div>
              )}
            </div>
            <div className="flex items-center justify-between">
              <div className={`flex items-center gap-1 text-[10px] ${p.reminder.overdue ? 'text-[#ff5252]' : 'text-[#ff9f0a]'}`}>
                <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><circle cx="12" cy="13" r="8"/><path d="M12 9v4l2 2"/></svg>
                <span className="font-medium">{p.reminder.date} {p.reminder.time}</span>
              </div>
              <div className="flex items-center gap-3">
                <svg width="28" height="28" viewBox="0 0 28 28">
                  <circle cx="14" cy="14" r="11" fill="none" stroke="#00BBE1" strokeOpacity="0.15" strokeWidth="6" />
                  <circle cx="14" cy="14" r="11" fill="none" stroke="url(#pg2)" strokeWidth="6"
                    strokeDasharray={`${p.progress * 0.69} 69`} strokeLinecap="round" transform="rotate(-90 14 14)" />
                  <defs>
                    <linearGradient id="pg2" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#00BBE1" /><stop offset="100%" stopColor="#00F9D0" />
                    </linearGradient>
                  </defs>
                </svg>
                <span className="text-sm font-bold text-[#00BBE1] tabular-nums w-9 text-right">{p.progress}%</span>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}
