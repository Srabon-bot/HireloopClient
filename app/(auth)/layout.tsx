import type { ReactNode } from "react"
import Image from "next/image"
import Link from "next/link"

import { Container } from "@/components/container"

export default function AuthLayout({ children }: { children: ReactNode }) {
  return (
    <div className="relative isolate flex min-h-svh flex-col overflow-hidden bg-[#0a0a0a] text-white [color-scheme:dark]">
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_50%_at_50%_0%,rgba(88,80,248,0.18),transparent_70%)]" />
        <Image
          src="/assets/images/globe-purple.png"
          alt=""
          width={1440}
          height={1882}
          loading="eager"
          sizes="(min-width: 1024px) 1400px, 900px"
          className="absolute bottom-0 left-1/2 w-[900px] max-w-none -translate-x-1/2 translate-y-[42%] [mask-image:linear-gradient(to_bottom,transparent_0%,black_35%)] opacity-35 lg:w-[1400px]"
        />
        <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-[#0a0a0a] to-transparent" />
      </div>

      <header className="relative z-10">
        <Container className="flex h-20 items-center justify-between sm:h-24">
          <Link
            href="/"
            aria-label="Hireloop home"
            className="rounded-md focus-visible:ring-2 focus-visible:ring-brand focus-visible:outline-none"
          >
            <Image
              src="/assets/images/logo.png"
              alt="Hireloop"
              width={154}
              height={44}
              priority
              className="h-8 w-auto sm:h-9"
            />
          </Link>
          <Link
            href="/"
            className="text-sm font-medium text-neutral-400 transition-colors hover:text-white focus-visible:text-white focus-visible:outline-none"
          >
            Back to home
          </Link>
        </Container>
      </header>

      <main className="relative z-10 flex flex-1 items-center justify-center px-4 py-10 sm:py-14">
        {children}
      </main>
    </div>
  )
}
