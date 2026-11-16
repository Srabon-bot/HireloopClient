import type { LucideIcon } from "lucide-react"

type StatCardProps = {
  icon: LucideIcon
  value: string
  label: string
}

export function StatCard({ icon: Icon, value, label }: StatCardProps) {
  return (
    <div className="relative flex min-h-44 flex-col justify-between gap-8 overflow-hidden rounded-2xl border border-white/[0.08] bg-[linear-gradient(180deg,rgba(3,3,5,0.94)_0%,rgba(12,12,13,0.92)_55%,rgba(24,24,26,0.9)_100%)] p-5 shadow-[inset_0_1px_0_0_rgba(255,255,255,0.05),0_24px_48px_-24px_rgba(0,0,0,0.9)] backdrop-blur-md sm:p-6 lg:min-h-52 xl:min-h-60 xl:p-7 2xl:min-h-64">
      <span
        aria-hidden
        className="pointer-events-none absolute inset-x-6 top-0 h-px bg-gradient-to-r from-transparent via-white/25 to-transparent"
      />
      <Icon
        aria-hidden
        className="size-5 text-neutral-300 xl:size-6"
        strokeWidth={1.75}
      />
      <div>
        <p className="text-4xl font-medium tracking-tight text-white sm:text-5xl xl:text-6xl">
          {value}
        </p>
        <p className="mt-1.5 text-sm text-neutral-400 xl:text-base">{label}</p>
      </div>
    </div>
  )
}
