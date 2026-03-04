import { Brain } from 'lucide-react'

const PREDICTIONS = [
  { day: 'Mon', predicted: 180, actual: 175 },
  { day: 'Tue', predicted: 220, actual: 215 },
  { day: 'Wed', predicted: 195, actual: 198 },
  { day: 'Thu', predicted: 210, actual: 205 },
  { day: 'Fri', predicted: 85, actual: 34 },
  { day: 'Sat', predicted: 25, actual: 12 },
  { day: 'Sun', predicted: 30, actual: 22 },
]

export default function AIPredictions({ liveData }) {
  const todayPrediction = liveData?.todayPrediction ?? 34
  const totalOccupancy = liveData?.totalOccupancy ?? 34

  return (
    <section className="card-base p-4 sm:p-6" aria-labelledby="ai-predictions-title">
      <div className="mb-4 flex items-center gap-2">
        <div className="rounded-xl bg-violet-500/10 p-2">
          <Brain className="h-5 w-5 text-violet-600" strokeWidth={2} aria-hidden />
        </div>
        <h2
          id="ai-predictions-title"
          className="text-base font-semibold text-slate-900 sm:text-lg"
        >
          AI Attendance Prediction
        </h2>
      </div>
      <div className="mb-4 rounded-xl border border-violet-200/60 bg-violet-50/50 p-4">
        <p className="text-xs font-semibold uppercase tracking-wider text-violet-600">
          Today&apos;s prediction
        </p>
        <p className="live-value mt-1 text-2xl font-bold tabular-nums text-slate-900" key={todayPrediction}>
          {todayPrediction} students
        </p>
        <p className="mt-1 text-xs text-slate-600">
          Actual: {totalOccupancy} · 2 floors sufficient. Model accuracy: 94%
        </p>
      </div>
      <div className="space-y-2">
        {PREDICTIONS.map((p) => (
          <div
            key={p.day}
            className="flex items-center justify-between rounded-lg py-2 text-sm"
          >
            <span className="font-medium text-slate-600">{p.day}</span>
            <div className="flex gap-6 tabular-nums">
              <span className="text-slate-400">Pred: {p.predicted}</span>
              <span className="font-medium text-slate-700">Actual: {p.actual}</span>
            </div>
          </div>
        ))}
      </div>
      <p className="mt-4 text-xs text-slate-500">
        ML model uses: timetable data, entry swipes, day-of-week, holidays,
        historical attendance.
      </p>
    </section>
  )
}
