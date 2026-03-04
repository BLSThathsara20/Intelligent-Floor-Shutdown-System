import { Link } from 'react-router-dom'
import { ChevronRight } from 'lucide-react'
import { FLOORS } from '../data/floors'

export default function FloorStatus({ liveData }) {
  const floorOccupancy = liveData?.floorOccupancy ?? [18, 16, 0, 0, 0]
  const activeFloors = liveData?.activeFloors ?? 2

  const floors = FLOORS.map((floor, i) => ({
    ...floor,
    occupancy: floorOccupancy[i] ?? floor.occupancy,
    status: i < activeFloors ? 'active' : 'shutdown',
  }))

  return (
    <section className="card-base p-4 sm:p-6" aria-labelledby="floor-status-title">
      <h2
        id="floor-status-title"
        className="mb-4 text-base font-semibold text-slate-900 sm:text-lg"
      >
        Floor Status Overview
      </h2>
      <div className="space-y-2">
        {floors.map((floor) => (
          <Link
            key={floor.id}
            to={`/floor/${floor.id}`}
            className="group flex w-full items-center justify-between gap-3 rounded-xl border border-slate-100 bg-[#f5f4f2]/50 p-3 transition-colors hover:bg-slate-50/80 sm:p-4"
          >
            <div className="flex min-w-0 flex-1 items-center gap-3 sm:gap-4">
              <span
                className={`h-2.5 w-2.5 shrink-0 rounded-full ${
                  floor.status === 'active'
                    ? 'animate-live-blink bg-emerald-500 ring-2 ring-emerald-500/30'
                    : 'bg-slate-300'
                }`}
                aria-hidden
              />
              <div className="min-w-0">
                <p className="font-medium text-slate-900">{floor.name}</p>
                <p className="text-xs text-slate-500 sm:whitespace-normal">
                  {floor.status === 'active'
                    ? `${floor.occupancy} occupants · Systems ON`
                    : 'Systems OFF'}
                </p>
              </div>
            </div>
            <span
              className={`shrink-0 rounded-full px-2.5 py-1 text-xs font-semibold sm:px-3 ${
                floor.status === 'active'
                  ? 'bg-emerald-500/10 text-emerald-700'
                  : 'bg-slate-100 text-slate-500'
              }`}
            >
              {floor.status === 'active' ? 'Active' : 'Shutdown'}
            </span>
            <ChevronRight className="h-4 w-4 shrink-0 text-slate-300 group-hover:text-slate-400" aria-hidden />
          </Link>
        ))}
      </div>
      <p className="mt-4 text-xs text-slate-500">
        Digital signage directs students to Floors 1–{activeFloors}. Consolidation based on
        AI prediction (low attendance day).
      </p>
    </section>
  )
}
