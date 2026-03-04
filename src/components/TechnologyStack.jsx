import { Link } from 'react-router-dom'
import { Cpu, Video, Brain, Building2, Monitor, CreditCard } from 'lucide-react'
import { ChevronRight } from 'lucide-react'
import { TECH } from '../data/technology'

const ICON_MAP = {
  'iot-sensors': Cpu,
  'computer-vision': Video,
  'ai-ml-model': Brain,
  'building-automation': Building2,
  'digital-signage': Monitor,
  'student-swipe': CreditCard,
}

const COLOR_MAP = {
  teal: 'border-teal-200/60 bg-teal-50/40',
  violet: 'border-violet-200/60 bg-violet-50/40',
  amber: 'border-amber-200/60 bg-amber-50/40',
}

export default function TechnologyStack() {
  return (
    <section className="card-base p-4 sm:p-6" aria-labelledby="tech-title">
      <h2
        id="tech-title"
        className="mb-4 text-base font-semibold text-slate-900 sm:text-lg"
      >
        Technology Stack
      </h2>
      <div className="grid gap-3 sm:grid-cols-2">
        {TECH.map((t) => {
          const Icon = ICON_MAP[t.id]
          return (
            <Link
              key={t.id}
              to={`/tech/${t.id}`}
              className={`group flex gap-3 rounded-xl border p-4 transition-colors hover:shadow-[0_2px_8px_-2px_rgba(0,0,0,0.05)] ${COLOR_MAP[t.color] || COLOR_MAP.teal}`}
            >
              <div className="shrink-0 rounded-lg bg-white/80 p-2 shadow-sm">
                <Icon className="h-5 w-5 text-slate-600" strokeWidth={2} aria-hidden />
              </div>
              <div className="min-w-0 flex-1">
                <p className="font-semibold text-slate-900">{t.name}</p>
                <p className="mt-0.5 text-sm text-slate-600">{t.desc}</p>
              </div>
              <ChevronRight className="h-4 w-4 shrink-0 self-center text-slate-300 group-hover:text-slate-500" aria-hidden />
            </Link>
          )
        })}
      </div>
      <p className="mt-4 text-xs text-slate-500">
        Compact 5-floor footprint makes NUL ideal — larger campuses cannot consolidate as effectively.
      </p>
    </section>
  )
}
