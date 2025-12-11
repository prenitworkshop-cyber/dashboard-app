import { ArrowDownRight, ArrowUpRight } from 'lucide-react'

type SummaryItemProps = {
  label: string
  value: string
  delta: string
  isPositive?: boolean
}

export default function SummaryItem({ label, value, delta, isPositive = true }: SummaryItemProps) {
  const Icon = isPositive ? ArrowUpRight : ArrowDownRight
  const color = isPositive ? 'text-emerald-600' : 'text-rose-500'

  return (
    <div className="flex items-center justify-between rounded-lg border border-gray-100 px-3 py-3">
      <div>
        <p className="text-xs uppercase tracking-[0.14em] text-gray-500">{label}</p>
        <p className="mt-1 text-xl font-semibold text-gray-900">{value}</p>
      </div>
      <div className={`inline-flex items-center gap-1 rounded-full bg-emerald-50 px-2 py-1 text-xs font-semibold ${color}`}>
        <Icon size={14} />
        <span>{delta}</span>
      </div>
    </div>
  )
}

