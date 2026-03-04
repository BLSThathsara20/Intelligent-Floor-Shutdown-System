import { useParams, Link } from 'react-router-dom'
import { Zap, Leaf } from 'lucide-react'
import { SDGS } from '../data/sdgs'
import DetailLayout from '../components/DetailLayout'

const ICON_MAP = { 7: Zap, 13: Leaf }

export default function SDGDetailPage() {
  const { id } = useParams()
  const sdg = SDGS.find((s) => s.id === Number(id))

  if (!sdg) {
    return (
      <DetailLayout>
        <p className="text-slate-600">SDG not found.</p>
        <Link to="/" className="mt-4 inline-flex items-center gap-2 text-teal-600 hover:text-teal-700">
          Back to dashboard
        </Link>
      </DetailLayout>
    )
  }

  const Icon = ICON_MAP[sdg.id]

  return (
    <DetailLayout title={`SDG ${sdg.id}: ${sdg.title}`}>
      <div
        className={`rounded-2xl border bg-gradient-to-br p-6 ${sdg.border} ${sdg.gradient}`}
      >
        <div className="flex items-center gap-3">
          <div className="flex rounded-xl bg-white/60 p-3 shadow-sm">
            <Icon className="h-8 w-8" strokeWidth={2} />
          </div>
          <span className={`text-2xl font-bold ${sdg.id === 7 ? 'text-amber-800' : 'text-emerald-800'}`}>
            SDG {sdg.id}
          </span>
        </div>
        <p className="mt-4 text-lg font-semibold text-slate-800">{sdg.title}</p>
        <p className="mt-3 text-slate-600">{sdg.description}</p>
        <h3 className="mt-6 text-sm font-semibold text-slate-700">How this system contributes</h3>
        <ul className="mt-3 space-y-2">
          {sdg.targets.map((item, i) => (
            <li key={i} className="flex items-start gap-2 text-sm text-slate-600">
              <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-teal-500" />
              {item}
            </li>
          ))}
        </ul>
      </div>
    </DetailLayout>
  )
}
