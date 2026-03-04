import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Legend,
} from 'recharts'

const LINE_COLOR = '#7c3aed'

export default function AttendanceChart({ liveData }) {
  const occupancyHistory = liveData?.occupancyHistory ?? [
    { time: '08:00', occupancy: 5 },
    { time: '09:00', occupancy: 18 },
    { time: '10:00', occupancy: 28 },
    { time: '11:00', occupancy: 32 },
    { time: '12:00', occupancy: 34 },
    { time: '13:00', occupancy: 30 },
    { time: '14:00', occupancy: 28 },
    { time: '15:00', occupancy: 22 },
    { time: '16:00', occupancy: 15 },
    { time: '17:00', occupancy: 8 },
  ]
  const currentOccupancy = liveData?.totalOccupancy ?? 34

  return (
    <section className="card-base p-4 sm:p-6" aria-labelledby="attendance-title">
      <h2
        id="attendance-title"
        className="mb-4 text-base font-semibold text-slate-900 sm:text-lg"
      >
        Real-time Occupancy
      </h2>
      <p className="mb-4 text-xs text-slate-500">
        Today · from sensors + computer vision · Live: <span className="font-semibold tabular-nums text-violet-600">{currentOccupancy}</span>
      </p>
      <div className="h-64 sm:h-72">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={occupancyHistory} margin={{ top: 8, right: 8, left: -16, bottom: 0 }}>
            <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" vertical={false} />
            <XAxis
              dataKey="time"
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
            <Legend
              wrapperStyle={{ fontSize: 12 }}
              formatter={() => 'Occupancy count'}
            />
            <Line
              type="monotone"
              dataKey="occupancy"
              stroke={LINE_COLOR}
              strokeWidth={2.5}
              dot={{ fill: LINE_COLOR, strokeWidth: 0, r: 4 }}
              activeDot={{ r: 6, strokeWidth: 2, stroke: '#fff' }}
              name="occupancy"
              isAnimationActive={true}
              animationDuration={600}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
      <p className="mt-3 text-xs text-slate-500">
        Data streams from occupancy sensors + computer vision. Updates every few seconds.
      </p>
    </section>
  )
}
