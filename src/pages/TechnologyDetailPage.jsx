import { useParams, Link } from 'react-router-dom'
import { Cpu, Video, Brain, Building2, Monitor, CreditCard } from 'lucide-react'
import { TECH } from '../data/technology'
import DetailLayout from '../components/DetailLayout'

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

export default function TechnologyDetailPage() {
  const { id } = useParams()
  const tech = TECH.find((t) => t.id === id)

  if (!tech) {
    return (
      <DetailLayout>
        <p className="text-slate-600">Technology not found.</p>
        <Link to="/" className="mt-4 inline-flex items-center gap-2 text-teal-600 hover:text-teal-700">
          Back to dashboard
        </Link>
      </DetailLayout>
    )
  }

  const Icon = ICON_MAP[tech.id] || Cpu

  return (
    <DetailLayout title={tech.name}>
      <div className={`card-base overflow-hidden ${COLOR_MAP[tech.color] || COLOR_MAP.teal}`}>
        <div className="border-b border-slate-200/60 p-4 sm:p-6">
          <div className="flex items-center gap-4">
            <div className="flex rounded-xl bg-white/80 p-3 shadow-sm">
              <Icon className="h-8 w-8 text-slate-600" strokeWidth={2} />
            </div>
            <div>
              <h2 className="text-lg font-semibold text-slate-900">{tech.name}</h2>
              <p className="mt-1 text-sm text-slate-600">{tech.desc}</p>
            </div>
          </div>
        </div>
        <div className="p-4 sm:p-6">
          <p className="text-slate-600">{tech.description}</p>
          <h3 className="mt-6 text-sm font-semibold text-slate-700">Key aspects</h3>
          <ul className="mt-3 space-y-2">
            {tech.details.map((item, i) => (
              <li key={i} className="flex items-start gap-2 text-sm text-slate-600">
                <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-teal-500" />
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </DetailLayout>
  )
}
