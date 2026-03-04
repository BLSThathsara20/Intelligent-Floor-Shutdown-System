import { Link } from 'react-router-dom'
import { ArrowLeft, Lightbulb, Thermometer, Monitor, ArrowUpDown } from 'lucide-react'

export default function FloorDetail({ floor, onBack, backTo }) {
  const isActive = floor.status === 'active'
  const systemItems = [
    { key: 'lighting', label: 'Lighting', Icon: Lightbulb, value: floor.systems.lighting },
    { key: 'hvac', label: 'HVAC', Icon: Thermometer, value: floor.systems.hvac },
    { key: 'computers', label: 'Computers', Icon: Monitor, value: floor.systems.computers },
    { key: 'lifts', label: 'Lifts', Icon: ArrowUpDown, value: floor.systems.lifts },
  ]

  return (
    <section className="card-base overflow-hidden" aria-labelledby="floor-detail-title">
      <div className="border-b border-slate-200/80 bg-slate-50/50 p-4 sm:p-5">
        {backTo ? (
          <Link
            to={backTo}
            className="mb-3 flex items-center gap-2 text-sm font-medium text-slate-600 transition-colors hover:text-slate-900"
          >
            <ArrowLeft className="h-4 w-4" strokeWidth={2} />
            Back to dashboard
          </Link>
        ) : (
          <button
            type="button"
            onClick={onBack}
            className="mb-3 flex items-center gap-2 text-sm font-medium text-slate-600 transition-colors hover:text-slate-900"
          >
            <ArrowLeft className="h-4 w-4" strokeWidth={2} />
            Back to floors
          </button>
        )}
        <div className="flex items-start justify-between gap-4">
          <div>
            <h2 id="floor-detail-title" className="text-lg font-semibold text-slate-900 sm:text-xl">
              {floor.name}
            </h2>
            <span
              className={`mt-2 inline-block rounded-full px-3 py-1 text-xs font-semibold ${
                isActive ? 'bg-emerald-500/10 text-emerald-700' : 'bg-slate-100 text-slate-500'
              }`}
            >
              {floor.status === 'active' ? 'Active' : 'Shutdown'}
            </span>
          </div>
          <span
            className={`h-3 w-3 rounded-full ${
              isActive ? 'bg-emerald-500 ring-2 ring-emerald-500/30' : 'bg-slate-300'
            }`}
            aria-hidden
          />
        </div>
      </div>

      <div className="p-4 sm:p-6">
        <div className="mb-6 grid grid-cols-2 gap-3 sm:grid-cols-4">
          <div className="rounded-xl bg-slate-50 p-4">
            <p className="text-xs font-semibold uppercase tracking-wider text-slate-500">
              Occupancy
            </p>
            <p className="mt-1 text-2xl font-bold tabular-nums text-slate-900">
              {floor.occupancy}
            </p>
          </div>
          <div className="rounded-xl bg-slate-50 p-4">
            <p className="text-xs font-semibold uppercase tracking-wider text-slate-500">
              Zones
            </p>
            <p className="mt-1 text-2xl font-bold tabular-nums text-slate-900">
              {floor.zones}
            </p>
          </div>
          <div className="rounded-xl bg-slate-50 p-4">
            <p className="text-xs font-semibold uppercase tracking-wider text-slate-500">
              Area
            </p>
            <p className="mt-1 text-lg font-bold text-slate-900">{floor.area}</p>
          </div>
          <div className="rounded-xl bg-slate-50 p-4">
            <p className="text-xs font-semibold uppercase tracking-wider text-slate-500">
              Peak hours
            </p>
            <p className="mt-1 text-sm font-semibold text-slate-900">{floor.peakHours}</p>
          </div>
        </div>

        <h3 className="mb-3 text-sm font-semibold text-slate-700">Systems status</h3>
        <div className="grid gap-3 sm:grid-cols-2">
          {systemItems.map(({ key, label, Icon, value }) => (
            <div
              key={key}
              className="flex items-center justify-between rounded-xl border border-slate-100 bg-slate-50/50 p-4"
            >
              <div className="flex items-center gap-3">
                <div className="rounded-lg bg-white p-2 shadow-sm">
                  <Icon className="h-5 w-5 text-slate-600" strokeWidth={2} aria-hidden />
                </div>
                <span className="font-medium text-slate-900">{label}</span>
              </div>
              <span
                className={`rounded-full px-2.5 py-1 text-xs font-semibold capitalize ${
                  value === 'on'
                    ? 'bg-emerald-500/10 text-emerald-700'
                    : value === 'standby'
                      ? 'bg-amber-500/10 text-amber-700'
                      : 'bg-slate-100 text-slate-500'
                }`}
              >
                {value}
              </span>
            </div>
          ))}
        </div>

        <p className="mt-4 text-xs text-slate-500">
          {isActive
            ? 'This floor is fully operational. Digital signage directs students here.'
            : 'This floor is in shutdown mode. Emergency lighting and lift access remain available.'}
        </p>
      </div>
    </section>
  )
}
