import { LayoutDashboard, Building2, Zap, MoreHorizontal } from 'lucide-react'

const TABS = [
  { id: 'overview', label: 'Overview', Icon: LayoutDashboard },
  { id: 'floors', label: 'Floors', Icon: Building2 },
  { id: 'energy', label: 'Energy', Icon: Zap },
  { id: 'more', label: 'More', Icon: MoreHorizontal },
]

export default function BottomNav({ activeTab, onTabChange }) {
  return (
    <nav
      className="fixed bottom-0 left-0 right-0 z-50 border-t border-slate-200/80 bg-white/95 backdrop-blur-lg pb-[env(safe-area-inset-bottom)] md:hidden"
      aria-label="Main navigation"
    >
      <div className="flex justify-around">
        {TABS.map((tab) => {
          const Icon = tab.Icon
          const isActive = activeTab === tab.id
          return (
            <button
              key={tab.id}
              onClick={() => onTabChange(tab.id)}
              aria-current={isActive ? 'page' : undefined}
              className={`flex flex-1 flex-col items-center gap-1 py-3 text-xs font-medium transition-all duration-200 ${
                isActive
                  ? 'text-accent-teal'
                  : 'text-slate-400 hover:text-slate-600'
              }`}
            >
              <span
                className={`flex items-center justify-center rounded-xl p-2 transition-colors ${
                  isActive ? 'bg-accent-teal/10' : ''
                }`}
              >
                <Icon
                  className="h-5 w-5"
                  strokeWidth={isActive ? 2.5 : 2}
                  aria-hidden
                />
              </span>
              <span>{tab.label}</span>
            </button>
          )
        })}
      </div>
    </nav>
  )
}
