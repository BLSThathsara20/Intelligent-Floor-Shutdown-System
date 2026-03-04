import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from 'recharts'

const BASE_DATA = [
  { day: 'Mon', full: 100, actual: 85 },
  { day: 'Tue', full: 100, actual: 92 },
  { day: 'Wed', full: 100, actual: 88 },
  { day: 'Thu', full: 100, actual: 90 },
  { day: 'Fri', full: 100, actual: 45 },
  { day: 'Sat', full: 100, actual: 25 },
  { day: 'Sun', full: 100, actual: 28 },
]

const CHART_COLORS = {
  full: '#e2e8f0',
  actual: '#0d9488',
}

export default function EnergySavings({ liveData }) {
  const energySaved = liveData?.energySavedPercent ?? 42
  const data = BASE_DATA.map((d, i) =>
    i === BASE_DATA.length - 1 ? { ...d, actual: energySaved } : d
  )

  return (
    <section className="card-base p-4 sm:p-6" aria-labelledby="energy-title">
      <h2
        id="energy-title"
        className="mb-4 text-base font-semibold text-slate-900 sm:text-lg"
      >
        Energy Consumption
      </h2>
      <p className="mb-4 text-xs text-slate-500">vs. full operation (baseline 100%)</p>
      <div className="h-56 sm:h-64">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={data} margin={{ top: 8, right: 8, left: -16, bottom: 0 }}>
            <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" vertical={false} />
            <XAxis
              dataKey="day"
              tick={{ fontSize: 12, fill: '#64748b' }}
              axisLine={{ stroke: '#e2e8f0' }}
              tickLine={false}
            />
            <YAxis
              tick={{ fontSize: 12, fill: '#64748b' }}
              axisLine={false}
              tickLine={false}
            />
            <Tooltip
              contentStyle={{
                backgroundColor: '#ffffff',
                border: '1px solid #e2e8f0',
                borderRadius: '12px',
                boxShadow: '0 4px 12px rgba(0,0,0,0.08)',
                padding: '12px 16px',
              }}
              labelStyle={{ color: '#0f172a', fontWeight: 600 }}
            />
            <Bar
              dataKey="full"
              fill={CHART_COLORS.full}
              name="Full operation (%)"
              radius={[6, 6, 0, 0]}
            />
            <Bar
              dataKey="actual"
              fill={CHART_COLORS.actual}
              name="Actual (%)"
              radius={[6, 6, 0, 0]}
              isAnimationActive={true}
              animationDuration={800}
            />
          </BarChart>
        </ResponsiveContainer>
      </div>
      <p className="mt-3 text-xs text-slate-500">
        Today: {energySaved}% · Weekend shutdowns show largest savings.
      </p>
    </section>
  )
}
