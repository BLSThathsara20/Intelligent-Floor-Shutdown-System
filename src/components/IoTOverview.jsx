import { Link } from 'react-router-dom'
import { MapPin, Video, Thermometer, Lightbulb, CreditCard } from 'lucide-react'
import { ChevronRight } from 'lucide-react'
import { SENSORS } from '../data/sensors'

const ICON_MAP = {
  Occupancy: MapPin,
  'Computer Vision': Video,
  Temperature: Thermometer,
  Lighting: Lightbulb,
  'Entry Swipes': CreditCard,
}

const COLOR_MAP = {
  teal: 'bg-teal-500/10 text-teal-600',
  violet: 'bg-violet-500/10 text-violet-600',
  amber: 'bg-amber-500/10 text-amber-600',
}

export default function IoTOverview() {
  return (
    <section className="card-base p-4 sm:p-6" aria-labelledby="iot-title">
      <h2
        id="iot-title"
        className="mb-4 text-base font-semibold text-slate-900 sm:text-lg"
      >
        IoT & Sensor Network
      </h2>
      <div className="space-y-2">
        {SENSORS.map((sensor) => {
          const Icon = ICON_MAP[sensor.type] || MapPin
          return (
            <Link
              key={sensor.id}
              to={`/sensor/${sensor.id}`}
              className="group flex items-center justify-between gap-3 rounded-xl border border-slate-100 bg-[#f5f4f2]/50 p-3 transition-colors hover:bg-slate-50/50"
            >
              <div className="flex items-center gap-3">
                <div
                  className={`flex rounded-xl p-2 ${COLOR_MAP[sensor.color] || COLOR_MAP.teal}`}
                  aria-hidden
                >
                  <Icon className="h-5 w-5" strokeWidth={2} />
                </div>
                <div>
                  <p className="font-medium text-slate-900">{sensor.type}</p>
                  <p className="text-xs text-slate-500">{sensor.count} devices</p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <span className="flex items-center gap-1.5 rounded-full bg-emerald-500/10 px-2.5 py-0.5 text-xs font-semibold text-emerald-700">
                  <span className="h-1.5 w-1.5 animate-live-blink rounded-full bg-emerald-500" aria-hidden />
                  {sensor.status}
                </span>
                <ChevronRight className="h-4 w-4 text-slate-300 group-hover:text-slate-400" aria-hidden />
              </div>
            </Link>
          )
        })}
      </div>
      <div className="mt-4 rounded-xl border border-primary-100 bg-primary-50/30 p-3">
        <p className="text-xs font-semibold text-primary-800">
          Data sources feeding AI model
        </p>
        <p className="mt-1 text-xs text-primary-700/90">
          Timetable API · Student swipes · Historical patterns · Real-time occupancy
        </p>
      </div>
    </section>
  )
}
