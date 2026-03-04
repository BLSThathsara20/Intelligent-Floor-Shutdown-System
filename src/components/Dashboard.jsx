import { useState } from 'react'
import { Building2, Users, Zap, Leaf } from 'lucide-react'
import { useLiveSimulation } from '../hooks/useLiveSimulation'
import Header from './Header'
import BottomNav from './BottomNav'
import FloorStatus from './FloorStatus'
import IoTOverview from './IoTOverview'
import AIPredictions from './AIPredictions'
import EnergySavings from './EnergySavings'
import AttendanceChart from './AttendanceChart'
import TechnologyStack from './TechnologyStack'
import SDGAlignment from './SDGAlignment'
import ShareAccessCard from './ShareAccessCard'

export default function Dashboard() {
  const [activeTab, setActiveTab] = useState('overview')
  const liveData = useLiveSimulation()

  return (
    <div className="min-h-screen bg-[#faf9f7] pb-24 md:pb-0">
      <Header lastUpdated={liveData.lastUpdated} />
      <main className="mx-auto max-w-7xl px-4 py-5 sm:px-6 sm:py-6 lg:px-8">
        <div className="md:hidden animate-fade-in">
          {activeTab === 'overview' && <OverviewTab liveData={liveData} />}
          {activeTab === 'floors' && <FloorsTab liveData={liveData} />}
          {activeTab === 'energy' && <EnergyTab liveData={liveData} />}
          {activeTab === 'more' && <MoreTab />}
        </div>
        <div className="hidden md:block">
          <FullDashboard liveData={liveData} />
        </div>
      </main>
      <BottomNav activeTab={activeTab} onTabChange={setActiveTab} />
    </div>
  )
}

function OverviewTab({ liveData }) {
  return (
    <div className="space-y-6">
      <div className="grid grid-cols-2 gap-3">
        <MetricCard
          title="Active Floors"
          value={String(liveData.activeFloors)}
          subtitle="of 5"
          Icon={Building2}
          accent="teal"
        />
        <MetricCard
          title="Occupancy"
          value={String(liveData.totalOccupancy)}
          subtitle="students"
          Icon={Users}
          accent="violet"
        />
        <MetricCard
          title="Energy Saved"
          value={`${liveData.energySavedPercent}%`}
          subtitle="today"
          Icon={Zap}
          accent="amber"
        />
        <MetricCard
          title="CO₂ Avoided"
          value={`${liveData.co2AvoidedKg} kg`}
          subtitle="this week"
          Icon={Leaf}
          accent="emerald"
        />
      </div>
      <FloorStatus liveData={liveData} />
      <IoTOverview />
    </div>
  )
}

function FloorsTab({ liveData }) {
  return (
    <div className="space-y-6">
      <FloorStatus liveData={liveData} />
      <IoTOverview />
    </div>
  )
}

function EnergyTab({ liveData }) {
  return (
    <div className="space-y-6">
      <AIPredictions liveData={liveData} />
      <EnergySavings liveData={liveData} />
      <AttendanceChart liveData={liveData} />
    </div>
  )
}

function MoreTab() {
  return (
    <div className="space-y-6">
      <ShareAccessCard />
      <TechnologyStack />
      <SDGAlignment />
    </div>
  )
}

function FullDashboard({ liveData }) {
  return (
    <>
      <div className="mb-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        <MetricCard
          title="Active Floors"
          value={String(liveData.activeFloors)}
          subtitle="of 5 floors"
          Icon={Building2}
          accent="teal"
        />
        <MetricCard
          title="Current Occupancy"
          value={String(liveData.totalOccupancy)}
          subtitle="students in building"
          Icon={Users}
          accent="violet"
        />
        <MetricCard
          title="Energy Saved Today"
          value={`${liveData.energySavedPercent}%`}
          subtitle="vs. full operation"
          Icon={Zap}
          accent="amber"
        />
        <MetricCard
          title="CO₂ Avoided"
          value={`${liveData.co2AvoidedKg} kg`}
          subtitle="this week"
          Icon={Leaf}
          accent="emerald"
        />
      </div>
      <div className="mb-8 grid gap-6 lg:grid-cols-3">
        <div className="lg:col-span-2">
          <FloorStatus liveData={liveData} />
        </div>
        <div>
          <IoTOverview />
        </div>
      </div>
      <div className="mb-8 grid gap-6 lg:grid-cols-2">
        <AIPredictions liveData={liveData} />
        <EnergySavings liveData={liveData} />
      </div>
      <div className="mb-8">
        <AttendanceChart liveData={liveData} />
      </div>
      <div className="grid gap-6 lg:grid-cols-2">
        <div className="lg:col-span-2">
          <ShareAccessCard />
        </div>
        <TechnologyStack />
        <SDGAlignment />
      </div>
    </>
  )
}

const ACCENT_STYLES = {
  teal: 'bg-teal-500/10 text-teal-700',
  violet: 'bg-violet-500/10 text-violet-700',
  amber: 'bg-amber-500/10 text-amber-700',
  emerald: 'bg-emerald-500/10 text-emerald-700',
}

function MetricCard({ title, value, subtitle, Icon, accent = 'teal' }) {
  return (
    <article
      className="card-base overflow-hidden p-4 transition-shadow duration-200 hover:shadow-card-hover sm:p-5"
      aria-labelledby={`metric-${title.replace(/\s/g, '-')}`}
    >
      <div className="flex items-start justify-between gap-3">
        <div className="min-w-0">
          <p
            id={`metric-${title.replace(/\s/g, '-')}`}
            className="text-xs font-semibold uppercase tracking-wider text-slate-500 sm:text-sm"
          >
            {title}
          </p>
          <p
            className="live-value mt-1 text-xl font-bold tabular-nums text-slate-900 sm:text-2xl"
            key={value}
          >
            {value}
          </p>
          <p className="text-xs text-slate-500">{subtitle}</p>
        </div>
        <div
          className={`flex shrink-0 rounded-xl p-2.5 ${ACCENT_STYLES[accent]}`}
          aria-hidden
        >
          <Icon className="h-6 w-6 sm:h-7 sm:w-7" strokeWidth={2} />
        </div>
      </div>
    </article>
  )
}
