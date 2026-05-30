import { useState, useEffect } from 'react'
import Navbar from './components/Navbar'
import HeroSection from './components/HeroSection'
import FeatureSection from './components/FeatureSection'
import PainMatrix from './components/PainMatrix'
import CTA from './components/CTA'
import Footer from './components/Footer'
import { Milestone, LayoutPanelTop, BellRing, Sparkles, Smartphone, ClipboardCheck, Layers, Zap, FileText, Globe, Shield } from 'lucide-react'

function App() {
  const [dark, setDark] = useState(true)

  useEffect(() => {
    document.documentElement.classList.toggle('dark', dark)
    document.documentElement.classList.toggle('light', !dark)
  }, [dark])

  return (
    <div className={dark ? 'dark' : 'light'}>
      <div className="min-h-screen bg-[#0a0a0f] text-[#e8e8ed] relative">
        <Navbar dark={dark} onToggleTheme={() => setDark(!dark)} />
        <HeroSection />
        <FeatureSection
          id="milestone"
          icon={Milestone}
          title="里程碑驱动"
          subtitle="弱化流水线式的原子任务，主打关键节点管理"
          description="不以原子任务为管理单位，以里程碑为关键节点。辅以轻量级子任务与上下文流式备忘录（Context Memo），降低管理成本，保持项目推进的连续性。"
          features={['关键节点聚焦', '轻量子任务拆解', '上下文流式备忘']}
          reverse={false}
        />
        <FeatureSection
          id="kanban"
          icon={LayoutPanelTop}
          title="极简双栏看板"
          subtitle="核心界面去冗余，仅保留最核心的任务与备忘维度"
          description="侧边栏 + 详情区双栏布局，左侧项目列表一目了然，右侧里程碑与备忘录同屏展示。一键切换已完任务的显隐，灵活掌控信息密度。"
          features={['零学习成本', '双栏高效布局', '灵活显隐控制']}
          reverse={true}
        />
        <FeatureSection
          id="ecosystem"
          icon={Smartphone}
          title="外延生态常驻"
          subtitle="桌面 Widget 与菜单栏一键触达，不打开主 App 也能掌握进度"
          description="macOS 菜单栏下拉面板提供快捷入口，实时查看当前任务和提醒。搭配桌面 Widget，锁屏或桌面直接展示项目进度条，用完即走。"
          features={['菜单栏快捷面板', '桌面小组件', '常驻触达']}
          reverse={false}
        />
        <FeatureSection
          id="notify"
          icon={BellRing}
          title="间歇性唤醒提醒"
          subtitle="项目级周期性提醒，不让你遗忘任何一个搁置中的项目"
          description={'按项目维度设置周期性提醒，触发时自动穿透到当前未完成的顶层任务，告知"下一步是什么"，无需重新梳理上下文，保持推进惯性。'}
          features={['项目级提醒', '上下文穿透', '单次/重复灵活配置']}
          reverse={true}
        />
        <FeatureSection
          id="template"
          icon={Layers}
          title="模板化初始化"
          subtitle="一键按模板生成空白项目，告别重复的规划工作"
          description="创建不同类型的项目模板，预设里程碑和子任务结构。新建同类项目时，一键从模板生成，自动填充基础框架，即开即用。"
          features={['项目模板库', '一键初始化', '灵活编辑']}
          reverse={false}
        />
        <FeatureSection
          id="report"
          icon={ClipboardCheck}
          title="自动化报告生成"
          subtitle="一键提取周期内的完成和待办节点，生成周报月报"
          description="不再手动拼凑周报——自动提取本周完成、下周待办、本月完成等数据，一键复制粘贴即用。支持周报、月报、下周计划三种报告类型。"
          features={['周报 / 月报 / 计划', '一键复制', '自动汇总']}
          reverse={true}
        />
        <FeatureSection
          id="sync"
          icon={Globe}
          title="多端秒级同步"
          subtitle="macOS + iOS 共享数据模型，iCloud 私有数据库自动同步"
          description="两端共用同一套 SwiftData 数据结构和 CloudKit 容器，基于 Apple 原生 iCloud 私有数据库实现多端秒级静默同步。零配置，零感知，数据归你所有。"
          features={['iCloud 私有数据库', '秒级同步', '零配置']}
          reverse={false}
        />
        <FeatureSection
          id="backup"
          icon={Shield}
          title="本地定时备份"
          subtitle="多级备份策略，明文 JSON 格式，数据永不丢失"
          description="过去 24 小时每小时备份、过去 7 天每天备份、过去 6 个月每周备份。以明文 JSON 格式保存至本地文件夹，随时可查看和恢复。"
          features={['多级备份策略', '明文 JSON', '一键恢复']}
          reverse={true}
        />
        <PainMatrix />
        <CTA />
        <Footer />
      </div>
    </div>
  )
}

export default App
