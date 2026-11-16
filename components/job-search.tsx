import Link from "next/link"
import { LocateFixed, Search } from "lucide-react"
import type { LucideIcon } from "lucide-react"

import { Button } from "@/components/ui/button"

const trendingPositions = [
  "Product Designer",
  "AI Engineering",
  "Dev-ops Engineer",
]

type SearchFieldProps = {
  icon: LucideIcon
  name: string
  placeholder: string
}

function SearchField({ icon: Icon, name, placeholder }: SearchFieldProps) {
  return (
    <div className="flex min-w-0 flex-1 items-center gap-3 px-3">
      <Icon
        aria-hidden
        className="size-5 shrink-0 text-neutral-400"
        strokeWidth={1.75}
      />
      <input
        type="text"
        name={name}
        placeholder={placeholder}
        aria-label={placeholder}
        className="h-12 w-full min-w-0 bg-transparent text-sm text-white placeholder:text-neutral-400 focus:outline-none sm:h-11 xl:h-12 xl:text-base"
      />
    </div>
  )
}

export function JobSearch() {
  return (
    <div className="mx-auto mt-10 w-full max-w-3xl xl:mt-12 xl:max-w-4xl 2xl:max-w-[1080px]">
      <form
        action="/jobs"
        method="get"
        className="flex flex-col gap-1 rounded-2xl border border-white/10 bg-[#171717] p-2 shadow-lg shadow-black/20 sm:flex-row sm:items-center sm:gap-0 xl:p-2.5"
      >
        <SearchField
          icon={Search}
          name="q"
          placeholder="Job title, skill or company"
        />
        <div
          aria-hidden
          className="mx-3 h-px bg-white/10 sm:mx-1 sm:h-10 sm:w-px"
        />
        <SearchField
          icon={LocateFixed}
          name="location"
          placeholder="Location or Remote"
        />
        <Button
          type="submit"
          aria-label="Search jobs"
          className="h-12 shrink-0 rounded-xl bg-brand px-5 text-sm font-medium text-white hover:bg-brand-hover focus-visible:ring-brand/50 sm:w-12 sm:px-0 xl:h-[3.25rem] xl:w-[3.25rem]"
        >
          <Search aria-hidden className="size-5" />
          <span className="sm:hidden">Search</span>
        </Button>
      </form>

      <div className="mt-4 flex flex-wrap items-center justify-center gap-2 sm:gap-3">
        <span className="text-sm text-neutral-300 underline decoration-neutral-500 underline-offset-4">
          Trending Position
        </span>
        {trendingPositions.map((position) => (
          <Link
            key={position}
            href={`/jobs?q=${encodeURIComponent(position)}`}
            className="rounded-full border border-white/10 bg-[#181818] px-4 py-1.5 text-sm text-neutral-300 transition-colors hover:border-white/20 hover:bg-white/5 hover:text-white"
          >
            {position}
          </Link>
        ))}
      </div>
    </div>
  )
}
