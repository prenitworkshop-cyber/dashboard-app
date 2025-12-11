import { Bar, BarChart, ResponsiveContainer, Tooltip } from 'recharts'

type StatCardProps = {
  label: string
  value: string
  data: number[]
  color: string
}

const MiniTooltip = ({ active, payload }: any) => {
  if (!active || !payload?.length) return null
  return (
    <div className="rounded-md border border-gray-200 bg-white px-2 py-1 text-xs shadow-sm">
      {payload[0]?.value}
    </div>
  )
}

export default function StatCard({ label, value, data, color }: StatCardProps) {
  const sparkData = data.map((v, idx) => ({ name: `pt-${idx}`, value: v }))

  return (
    <div className="flex flex-col justify-between rounded-xl border border-gray-100 bg-white px-4 py-3 shadow-sm">
      <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-gray-500">
        {label}
      </p>
      <p className="mt-1 text-2xl font-bold text-gray-900">{value}</p>
      <div className="mt-3 h-16">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={sparkData} barSize={12} barGap={4}>
            <Tooltip cursor={{ fill: '#f3f4f6' }} content={<MiniTooltip />} />
            <Bar dataKey="value" radius={[6, 6, 6, 6]} fill={color} />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  )
}