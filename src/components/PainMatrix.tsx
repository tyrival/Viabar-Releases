const pains = [
  {
    pain: '缺乏全局感',
    painDesc: '多项目并行，切换频繁，没有统一视图掌控全局进度。',
    solution: 'Dashboard 总览',
    solnDesc: '高信息密度全局看板，一屏聚合所有项目进度与健康度。',
  },
  {
    pain: '管理成本过高',
    painDesc: '以原子任务为单位管理，越管越细，本末倒置。',
    solution: '里程碑驱动',
    solnDesc: '弱化流水线式原子任务，以里程碑为核心，辅以轻量子任务。',
  },
  {
    pain: '已完成任务一刀切',
    painDesc: '完成任务后自动隐藏，不便查看历史节点中隐藏的关键信息。',
    solution: '灵活显隐策略',
    solnDesc: '按项目配置默认显隐规则，主界面一键切换，随时可查。',
  },
  {
    pain: '功能过于繁杂',
    painDesc: '日历、提醒、甘特图堆叠，工具反而成了注意力的黑洞。',
    solution: '双栏极简看板',
    solnDesc: '去冗余，仅保留里程碑与备忘录两个核心维度，零学习成本。',
  },
  {
    pain: '进度中断与遗忘',
    painDesc: '项目搁置后上下文丢失，需要花大量时间重新梳理。',
    solution: '间歇性唤醒提醒',
    solnDesc: '项目级周期性提醒，触发时穿透到当前节点，告知下一步。',
  },
  {
    pain: '细节信息随时间丢失',
    painDesc: '临时想法、会议纪要散落各处，过一段时间再也找不到。',
    solution: '上下文备忘录',
    solnDesc: '与项目强绑定的流式备忘录，即输即发，集中管理。',
  },
  {
    pain: '多端不同步',
    painDesc: 'Mac 和 iPhone 数据割裂，手动同步麻烦且易出错。',
    solution: 'iCloud 秒级同步',
    solnDesc: '统一数据模型，Apple 原生 iCloud 私有数据库，零配置静默同步。',
  },
  {
    pain: '重复创建项目繁琐',
    painDesc: '同类项目每次手动规划结构，初始化低效且容易遗漏。',
    solution: '模板化初始化',
    solnDesc: '预设模板，一键生成空白项目，自动填充基础框架。',
  },
  {
    pain: '触达路径长',
    painDesc: '每次查看进度都要打开主 App，操作路径太长。',
    solution: '外延生态常驻',
    solnDesc: '菜单栏下拉面板 + 桌面 Widget，不打开主 App 也能掌握进度。',
  },
  {
    pain: '复盘汇报压力',
    painDesc: '手动拼凑周报月报，从各项目收集信息耗时耗力。',
    solution: '自动化报告生成',
    solnDesc: '一键提取周期内完成与待办，自动生成报告，复制即用。',
  },
  {
    pain: '数据离散不易查找',
    painDesc: '历史项目数据分散，想回头查老项目却发现已被删除。',
    solution: '本地定时备份',
    solnDesc: '多级备份策略，明文 JSON 格式，数据安全永不丢失。',
  },
]

export default function PainMatrix() {
  return (
    <section className="py-24">
      <div className="max-w-5xl mx-auto px-6">
        <div className="text-center mb-16">
          <div className="text-xs font-bold text-[#0085ff] uppercase tracking-[2px] mb-3">Pain Points & Solutions</div>
          <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-[#e8e8ed]">
            11 个痛点，<span className="bg-gradient-to-r from-[#0085ff] to-[#00bfff] bg-clip-text text-transparent">一个方案</span>
          </h2>
        </div>

        <div className="border border-[#252530] rounded-2xl overflow-hidden">
          {pains.map((item, i) => (
            <div
              key={i}
              className={`grid grid-cols-1 md:grid-cols-2 ${i !== 0 ? 'border-t border-[#252530]' : ''}`}
            >
              {/* Pain */}
              <div className="p-6 md:p-8 md:border-r border-[#252530] bg-[#13131a]">
                <div className="text-[11px] font-bold text-[#ff5252] tracking-widest mb-2">痛点 {String(i + 1).padStart(2, '0')}</div>
                <h3 className="text-base font-bold text-[#ff5252] mb-2">{item.pain}</h3>
                <p className="text-sm text-[#9494a0] leading-relaxed">{item.painDesc}</p>
              </div>
              {/* Solution */}
              <div className="p-6 md:p-8 bg-[#0f0f16]">
                <div className="text-[11px] font-bold text-[#30d158] tracking-widest mb-2">解决方案</div>
                <h3 className="text-base font-bold text-[#e8e8ed] mb-2">{item.solution}</h3>
                <p className="text-sm text-[#9494a0] leading-relaxed">{item.solnDesc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
