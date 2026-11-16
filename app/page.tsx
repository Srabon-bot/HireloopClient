import { Hero } from "@/components/hero"
import { Navbar } from "@/components/navbar"

export default function Page() {
  return (
    <main className="min-h-svh bg-[#0a0a0a]">
      <Navbar />
      <Hero />
    </main>
  )
}
