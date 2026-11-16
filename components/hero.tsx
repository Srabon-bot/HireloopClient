import Image from "next/image"
import { Briefcase, Building2, Star, Users } from "lucide-react"

import { Container } from "@/components/container"
import { JobSearch } from "@/components/job-search"
import { StatCard } from "@/components/stat-card"

const stats = [
  { icon: Briefcase, value: "50K", label: "Active Jobs" },
  { icon: Building2, value: "12K", label: "Companies" },
  { icon: Users, value: "2M", label: "Job Seekers" },
  { icon: Star, value: "97%", label: "Satisfaction Rate" },
]

export function Hero() {
  return (
    <section className="relative isolate overflow-hidden pb-16 sm:pb-20 xl:pb-28">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10 overflow-hidden"
      >
        <Image
          src="/assets/images/globe-purple.png"
          alt=""
          width={1440}
          height={1882}
          loading="eager"
          sizes="100vw"
          className="absolute top-[25rem] left-1/2 w-[820px] max-w-none -translate-x-1/2 [mask-image:linear-gradient(to_bottom,transparent_0%,transparent_12%,black_40%)] sm:top-[14rem] sm:w-[1100px] lg:top-[calc(54vh_-_48.3vw_+_6rem)] lg:w-screen lg:[mask-image:linear-gradient(to_bottom,transparent_0%,black_26%)] xl:top-[calc(54vh_-_48.3vw_+_7rem)]"
        />
      </div>

      <Container className="relative z-10 pt-[8.5rem] sm:pt-40 lg:pt-44 xl:pt-52 2xl:pt-56">
        <div className="flex items-center justify-center gap-2">
          <span
            aria-hidden
            className="hidden h-px w-24 bg-gradient-to-r from-transparent to-white/20 sm:block lg:w-32 xl:w-40"
          />
          <span
            aria-hidden
            className="hidden size-1 rounded-full bg-white/40 sm:block"
          />

          <div className="inline-flex items-center gap-2.5 rounded-full border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.07),rgba(255,255,255,0.015))] py-1.5 pr-4 pl-1.5 shadow-[inset_0_1px_0_0_rgba(255,255,255,0.07),0_12px_30px_-16px_rgba(0,0,0,0.9)] backdrop-blur xl:gap-3 xl:py-2 xl:pr-5 xl:pl-2">
            <span className="grid size-7 place-items-center rounded-full bg-[radial-gradient(circle_at_50%_120%,rgba(249,115,22,0.4),rgba(249,115,22,0.08))] xl:size-8">
              <Briefcase
                aria-hidden
                className="size-3.5 text-orange-400 xl:size-4"
                strokeWidth={2}
              />
            </span>
            <span className="text-sm font-semibold text-white xl:text-base">
              50,000+
            </span>
            <span className="text-[0.65rem] font-medium tracking-[0.18em] text-neutral-400 sm:text-xs xl:text-[0.8rem]">
              NEW JOBS THIS MONTH
            </span>
          </div>

          <span
            aria-hidden
            className="hidden size-1 rounded-full bg-white/40 sm:block"
          />
          <span
            aria-hidden
            className="hidden h-px w-24 bg-gradient-to-l from-transparent to-white/20 sm:block lg:w-32 xl:w-40"
          />
        </div>

        <h1 className="mx-auto mt-7 max-w-4xl text-center text-4xl font-semibold tracking-[-0.03em] text-balance text-white sm:text-5xl lg:text-6xl xl:mt-8 xl:max-w-5xl xl:text-7xl 2xl:text-[4.5rem]">
          Find Your Dream Job Today
        </h1>
        <p className="mx-auto mt-5 max-w-2xl text-center text-base leading-relaxed text-balance text-neutral-400 sm:text-lg xl:mt-6 xl:max-w-3xl xl:text-xl 2xl:max-w-4xl">
          HireLoop connects top talent with world-class companies. Browse
          thousands of curated opportunities and land your next role — faster.
        </p>

        <JobSearch />
      </Container>

      <Container className="relative z-10 mt-40 sm:mt-64 lg:mt-80 2xl:mt-[22rem]">
        <p className="mx-auto max-w-3xl text-center text-2xl leading-snug text-balance text-neutral-200/90 sm:text-3xl lg:text-[2.5rem] xl:max-w-4xl xl:text-[2.75rem] 2xl:text-5xl">
          Assisting over 15,000 job seekers find their dream positions.
        </p>

        <div className="mt-12 grid grid-cols-2 gap-3 sm:gap-4 lg:grid-cols-4 lg:gap-5 xl:mt-16 xl:gap-6">
          {stats.map((stat) => (
            <StatCard key={stat.label} {...stat} />
          ))}
        </div>
      </Container>
    </section>
  )
}
