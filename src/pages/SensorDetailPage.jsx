import { useParams, Link } from 'react-router-dom'
import { MapPin, Video, Thermometer, Lightbulb, CreditCard } from 'lucide-react'
import { SENSORS } from '../data/sensors'
import DetailLayout from '../components/DetailLayout'

const ICON_MAP = {
  occupancy: MapPin,
  'computer-vision': Video,
  temperature: Thermometer,
  lighting: Lightbulb,
  'entry-swipes': CreditCard,
}

const COLOR_MAP = {
  teal: 'bg-teal-500/10 text-teal-700',
  violet: 'bg-violet-500/10 text-violet-700',
  amber: 'bg-amber-500/10 text-amber-700',
}

export default function SensorDetailPage() {
  const { id } = useParams()
  const sensor = SENSORS.find((s) => s.id === id)

  if (!sensor) {
    return (
      <DetailLayout>
        <p className="text-slate-600">Sensor not found.</p>
        <Link to="/" className="mt-4 inline-flex items-center gap-2 text-teal-600 hover:text-teal-700">
          Back to dashboard
        </Link>
      </DetailLayout>
    )
  }

  const Icon = ICON_MAP[sensor.id] || MapPin

  return (
    <DetailLayout title={`${sensor.type} Sensor`}>
      <div className="card-base overflow-hidden">
        <div className="border-b border-slate-200/80 bg-slate-50/50 p-4 sm:p-6">
          <div className="flex items-start justify-between gap-4">
            <div className="flex items-center gap-4">
              <div
                className={`flex rounded-xl p-3 ${COLOR_MAP[sensor.color] || COLOR_MAP.teal}`}
              >
                <Icon className="h-8 w-8" strokeWidth={2} />
              </div>
              <div>
                <h2 className="text-lg font-semibold text-slate-900">{sensor.type}</h2>
                <p className="mt-1 text-sm text-slate-500">{sensor.count} devices · {sensor.status}</p>
              </div>
            </div>
            <span className="rounded-full bg-emerald-500/10 px-3 py-1 text-xs font-semibold text-emerald-700">
              {sensor.status}
            </span>
          </div>
        </div>
        <div className="p-4 sm:p-6">
          <p className="text-slate-600">{sensor.description}</p>
          <h3 className="mt-6 text-sm font-semibold text-slate-700">Details</h3>
          <ul className="mt-3 space-y-2">
            {sensor.details.map((item, i) => (
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
