import { useState } from 'react'
import {
  Area,
  AreaChart,
  Bar,
  BarChart,
  CartesianGrid,
  Legend,
  PolarAngleAxis,
  PolarGrid,
  Radar,
  RadarChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
  Pie,
  PieChart,
  Cell,
  Label,
} from 'recharts'
import { CalendarRange, Download, MoreHorizontal, MoreVertical, SlidersHorizontal } from 'lucide-react'
import {
  employeesData,
  periodOptions,
  radarData,
  revenueSeries,
  salaryData,
  statCards,
  summaryStats,
} from '../mockData'
import StatCard from './StatCard'
import SummaryItem from './SummaryItem'

const areaGradientId = 'areaGradient'
const donutColors = ['#8b5cf6', '#22d3ee', '#f97316', '#cbd5e1']

const AreaTooltip = ({ active, payload }: any) => {
  if (!active || !payload?.length) return null
  const item = payload[0]
  return (
    <div className="rounded-xl border border-gray-100 bg-white px-3 py-2 shadow-sm">
      <p className="text-xs text-gray-500">{item.payload.month}</p>
      <p className="text-sm font-semibold text-gray-900">${item.value.toLocaleString()}M</p>
    </div>
  )
}

export function Dashboard() {
  const [activePeriod, setActivePeriod] = useState(periodOptions[0])

  return (
    <div className="min-h-screen bg-gray-50/50">
      <div className="mx-auto max-w-6xl space-y-6 px-4 py-8 lg:px-6 lg:py-10">
        {/* Header */}
        <header className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <div className="flex flex-col gap-3">
            <h2 className="text-xl font-semibold tracking-tight text-slate-900">REPORT</h2>
            <div className="flex items-center gap-2 rounded-full border border-gray-200 bg-white px-1 py-1 shadow-sm">
              {periodOptions.map((option) => (
                <button
                  key={option}
                  onClick={() => setActivePeriod(option)}
                  className={`rounded-full px-3 py-1 text-xs font-medium transition ${
                    activePeriod === option
                      ? 'bg-gray-900 text-white shadow-sm'
                      : 'text-gray-600 hover:bg-gray-100'
                  }`}
                >
                  {option}
                </button>
              ))}
            </div>
          </div>
          <div className="flex items-center gap-2">
            <button className="inline-flex items-center gap-2 rounded-full border border-gray-200 bg-white px-3 py-2 text-sm font-medium text-gray-700 shadow-sm transition hover:bg-gray-100">
              <CalendarRange size={16} />
              Select dates
            </button>
            <button className="inline-flex items-center gap-2 rounded-full border border-gray-200 bg-white px-3 py-2 text-sm font-medium text-gray-700 shadow-sm transition hover:bg-gray-100">
              <SlidersHorizontal size={16} />
              Filters
            </button>
          </div>
        </header>

        {/* KPI row */}
        <section className="grid grid-cols-1 items-stretch gap-3 md:grid-cols-2 xl:grid-cols-4">
          {statCards.map((card) => (
            <StatCard key={card.id} {...card} />
          ))}
          <div className="flex items-center justify-center">
            <button className="inline-flex w-full items-center justify-center rounded-xl bg-amber-400 px-4 py-3 text-sm font-semibold text-gray-900 shadow-sm transition hover:bg-amber-300 md:h-full">
              View Analytic
            </button>
          </div>
        </section>

        {/* Area chart + summary */}
        <section className="grid grid-cols-1 gap-4 lg:grid-cols-[2fr,1fr]">
          <div className="rounded-2xl border border-gray-100 bg-white p-5 shadow-sm md:p-6">
            <div className="flex items-center justify-between">
              <p className="text-sm font-medium text-slate-900">Performance</p>
              <div className="flex items-center gap-2">
                <button className="inline-flex items-center gap-1 rounded-full border border-gray-200 px-3 py-1.5 text-xs font-medium text-gray-700 transition hover:bg-gray-100">
                  <Download size={14} />
                  Export
                </button>
                <button className="rounded-full border border-gray-200 p-1.5 text-gray-500 hover:bg-gray-100">
                  <MoreVertical size={16} />
                </button>
              </div>
            </div>
            <div className="mt-4 h-72 w-full md:h-80">
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart data={revenueSeries} margin={{ top: 10, right: 10, left: 0, bottom: 0 }}>
                  <defs>
                    <linearGradient id={areaGradientId} x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#8b5cf6" stopOpacity={0.35} />
                      <stop offset="95%" stopColor="#8b5cf6" stopOpacity={0.02} />
                    </linearGradient>
                  </defs>
                  <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#e5e7eb" />
                  <XAxis dataKey="month" tickLine={false} axisLine={false} tickMargin={12} />
                  <YAxis
                    tickLine={false}
                    axisLine={false}
                    tickFormatter={(v) => `${v}M`}
                    width={40}
                  />
                  <Tooltip cursor={{ stroke: '#c4b5fd', strokeWidth: 1 }} content={<AreaTooltip />} />
                  <Area
                    type="monotone"
                    dataKey="value"
                    stroke="#8b5cf6"
                    strokeWidth={2.5}
                    fillOpacity={1}
                    fill={`url(#${areaGradientId})`}
                  />
                </AreaChart>
              </ResponsiveContainer>
            </div>
          </div>

          <div className="flex flex-col justify-between rounded-2xl border border-gray-100 bg-white p-5 shadow-sm md:p-6">
            <div className="flex items-center justify-between">
              <p className="text-sm font-medium text-slate-900">Summary</p>
              <button className="rounded-full border border-gray-200 p-1.5 text-gray-500 hover:bg-gray-100">
                <MoreHorizontal size={16} />
              </button>
            </div>
            <div className="mt-4 space-y-6">
              {summaryStats.map((item) => (
                <SummaryItem key={item.id} {...item} />
              ))}
            </div>
          </div>
        </section>

        {/* Bottom grid */}
        <section className="grid grid-cols-1 gap-4 lg:grid-cols-3">
          {/* Salary */}
          <div className="rounded-2xl border border-gray-100 bg-white p-5 shadow-sm md:p-6">
            <div className="flex items-center justify-between">
              <p className="text-sm font-semibold text-slate-900">Gross Salary Breakdown</p>
              <button className="rounded-full border border-gray-200 p-1.5 text-gray-500 hover:bg-gray-100">
                <MoreVertical size={16} />
              </button>
            </div>
            <div className="mt-4 h-64">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart
                  data={salaryData}
                  layout="vertical"
                  margin={{ left: 0, right: 16, top: 0, bottom: 0 }}
                  barCategoryGap={10}
                >
                  <CartesianGrid strokeDasharray="3 3" horizontal={false} stroke="#e5e7eb" />
                  <XAxis type="number" hide />
                  <YAxis
                    type="category"
                    dataKey="name"
                    width={110}
                    tickLine={false}
                    axisLine={false}
                    tick={{ fill: '#64748b', fontSize: 12 }}
                  />
                  <Tooltip
                    cursor={{ fill: '#f8fafc' }}
                    content={({ active, payload }) => {
                      if (!active || !payload?.length) return null
                      const item = payload[0]
                      return (
                        <div className="rounded-lg border border-gray-200 bg-white px-3 py-2 text-sm shadow-sm">
                          <p className="font-medium text-gray-900">{item.payload.name}</p>
                          <p className="text-gray-600">${item.value?.toLocaleString()}</p>
                        </div>
                      )
                    }}
                  />
                  <Bar dataKey="value" radius={[0, 6, 6, 0]} fill="#8b5cf6" />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>

          {/* Employees */}
          <div className="rounded-2xl border border-gray-100 bg-white p-5 shadow-sm md:p-6">
            <div className="flex items-center justify-between">
              <p className="text-sm font-semibold text-slate-900">All Employees</p>
              <button className="rounded-full border border-gray-200 p-1.5 text-gray-500 hover:bg-gray-100">
                <MoreVertical size={16} />
              </button>
            </div>
            <div className="mt-2 flex h-64 items-center justify-center">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Tooltip
                    content={({ active, payload }) => {
                      if (!active || !payload?.length) return null
                      const item = payload[0]
                      return (
                        <div className="rounded-lg border border-gray-200 bg-white px-3 py-2 text-sm shadow-sm">
                          <p className="font-medium text-gray-900">{item.name}</p>
                          <p className="text-gray-600">{item.value}%</p>
                        </div>
                      )
                    }}
                  />
                  <Pie
                    data={employeesData}
                    dataKey="value"
                    nameKey="name"
                    cx="50%"
                    cy="50%"
                    innerRadius={60}
                    outerRadius={86}
                    paddingAngle={2}
                  >
                    {employeesData.map((entry, index) => (
                      <Cell key={entry.name} fill={donutColors[index % donutColors.length]} />
                    ))}
                    <Label
                      position="center"
                      content={({ viewBox }) => {
                        if (!viewBox || !('cx' in viewBox) || !('cy' in viewBox)) return null
                        const cx = viewBox.cx ?? 0
                        const cy = viewBox.cy ?? 0
                        const working = employeesData.find((d) => d.name === 'Working')
                        return (
                          <text x={cx} y={cy} textAnchor="middle" dominantBaseline="middle">
                            <tspan className="text-sm font-semibold fill-gray-900">Working</tspan>
                            <tspan x={cx} dy="1.4em" className="text-lg font-bold fill-gray-900">
                              {working?.value ?? 0}%
                            </tspan>
                          </text>
                        )
                      }}
                    />
                  </Pie>
                </PieChart>
              </ResponsiveContainer>
            </div>
          </div>

          {/* Traffic */}
          <div className="rounded-2xl border border-gray-100 bg-white p-5 shadow-sm md:p-6">
            <div className="flex items-center justify-between">
              <p className="text-sm font-semibold text-slate-900">Traffic Sources</p>
              <button className="rounded-full border border-gray-200 p-1.5 text-gray-500 hover:bg-gray-100">
                <MoreVertical size={16} />
              </button>
            </div>
            <div className="mt-2 h-64">
              <ResponsiveContainer width="100%" height="100%">
                <RadarChart data={radarData} margin={{ top: 10, right: 20, left: 10, bottom: 10 }}>
                  <PolarGrid stroke="#e5e7eb" />
                  <PolarAngleAxis dataKey="year" tick={{ fill: '#94a3b8', fontSize: 12 }} />
                  <Legend iconSize={12} wrapperStyle={{ fontSize: 12 }} />
                  <Radar
                    name="Marketing"
                    dataKey="marketing"
                    stroke="#f87171"
                    fill="#f87171"
                    fillOpacity={0.2}
                  />
                  <Radar name="Sales" dataKey="sales" stroke="#facc15" fill="#facc15" fillOpacity={0.25} />
                  <Radar
                    name="Finance"
                    dataKey="finance"
                    stroke="#a78bfa"
                    fill="#a78bfa"
                    fillOpacity={0.25}
                  />
                </RadarChart>
              </ResponsiveContainer>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}