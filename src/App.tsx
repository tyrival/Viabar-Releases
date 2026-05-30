import { I18nProvider } from './i18n/I18nContext'
import { ThemeProvider } from './theme/ThemeContext'
import Navbar from './components/Navbar'
import HeroSection from './components/HeroSection'
import FeatureSection from './components/FeatureSection'
import PainMatrix from './components/PainMatrix'
import CTA from './components/CTA'
import Footer from './components/Footer'
import { Milestone, LayoutPanelTop, Smartphone, BellRing, Layers, ClipboardCheck } from 'lucide-react'
import ProjectCardMockup from './components/mockups/ProjectCardMockup'
import MilestoneTimelineMockup from './components/mockups/MilestoneTimelineMockup'
import MemoTimelineMockup from './components/mockups/MemoTimelineMockup'
import MenuBarMockup from './components/mockups/MenuBarMockup'
import ReportMockup from './components/mockups/ReportMockup'

export default function App() {
  return (
    <ThemeProvider>
      <I18nProvider>
        <AppContent />
      </I18nProvider>
    </ThemeProvider>
  )
}

function AppContent() {
  return (
    <div className="bg-surface min-h-screen relative">
      <Navbar />
      <HeroSection />
      <FeatureSection
        id="milestone"
        icon={Milestone}
        mockup={<MilestoneTimelineMockup />}
        reverse={false}
      />
      <FeatureSection
        id="kanban"
        icon={LayoutPanelTop}
        mockup={<MemoTimelineMockup />}
        reverse={true}
      />
      <FeatureSection
        id="ecosystem"
        icon={Smartphone}
        mockup={<MenuBarMockup />}
        reverse={false}
      />
      <FeatureSection
        id="notify"
        icon={BellRing}
        mockup={<ProjectCardMockup />}
        reverse={true}
      />
      <FeatureSection
        id="template"
        icon={Layers}
        mockup={<ProjectCardMockup showTemplate />}
        reverse={false}
      />
      <FeatureSection
        id="report"
        icon={ClipboardCheck}
        mockup={<ReportMockup />}
        reverse={true}
      />
      <PainMatrix />
      <CTA />
      <Footer />
    </div>
  )
}
