import { Link } from 'react-router-dom'
import { Zap, Leaf } from 'lucide-react'
import { ChevronRight } from 'lucide-react'
import { SDGS } from '../data/sdgs'

const ICON_MAP = { 7: Zap, 13: Leaf }

export default function SDGAlignment() {
  return (
    <section className="card-base p-4 sm:p-6" aria-labelledby="sdg-title">
      <h2
        id="sdg-title"
        className="mb-4 text-base font-semibold text-slate-900 sm:text-lg"
      >
        UN SDG Alignment
      </h2>
      <div className="space-y-4">
        {SDGS.map((sdg) => {
          const Icon = ICON_MAP[sdg.id]
          return (
            <Link
              key={sdg.id}
              to={`/sdg/${sdg.id}`}
              className={`group block rounded-xl border bg-gradient-to-br p-4 transition-shadow hover:shadow-[0_4px_12px_-2px_rgba(0,0,0,0.06)] ${sdg.border} ${sdg.gradient}`}
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="flex rounded-lg bg-white/60 p-2 shadow-sm">
                    <Icon className="h-5 w-5" strokeWidth={2} aria-hidden />
                  </div>
                  <div>
                    <span className={`text-lg font-bold ${sdg.text}`}>
                      SDG {sdg.id}
                    </span>
                    <p className="mt-1 font-semibold text-slate-800">{sdg.title}</p>
                    <p className="mt-0.5 text-sm text-slate-600">{sdg.desc}</p>
                  </div>
                </div>
                <ChevronRight className="h-5 w-5 text-slate-400 group-hover:text-slate-600" aria-hidden />
              </div>
            </Link>
          )
        })}
      </div>
      <p className="mt-4 text-xs text-slate-500">
        This prototype demonstrates how smart building tech supports sustainability goals.
      </p>
    </section>
  )
}
