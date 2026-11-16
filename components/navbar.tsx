"use client"

import * as React from "react"
import Image from "next/image"
import Link from "next/link"
import { MenuIcon, XIcon } from "lucide-react"

import { Container } from "@/components/container"
import { Button } from "@/components/ui/button"
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"

const navLinks = [
  { label: "Browse Jobs", href: "/jobs" },
  { label: "Company", href: "/company" },
  { label: "Pricing", href: "/pricing" },
]

const brandButton =
  "h-10 rounded-xl bg-brand px-5 text-sm font-medium text-white hover:bg-brand-hover focus-visible:ring-brand/50 xl:h-11 xl:px-6"

export function Navbar() {
  const [menuOpen, setMenuOpen] = React.useState(false)

  return (
    <header className="sticky top-0 z-50 -mb-24 w-full py-4 xl:-mb-28 xl:py-5">
      <Container>
        <nav
          aria-label="Main"
          className="flex h-16 w-full items-center justify-between gap-4 rounded-2xl border border-white/[0.06] bg-[linear-gradient(180deg,#262626_0%,#222222_22%,#1f1f1f_100%)] px-4 shadow-[inset_0_1px_0_0_rgba(255,255,255,0.06),0_18px_40px_-24px_rgba(0,0,0,0.9)] sm:px-6 lg:px-8 xl:h-[4.5rem] xl:px-10"
        >
          <Link
            href="/"
            aria-label="Hireloop home"
            className="shrink-0 rounded-md focus-visible:ring-2 focus-visible:ring-brand focus-visible:outline-none"
          >
            <Image
              src="/assets/images/logo.png"
              alt="Hireloop"
              width={154}
              height={44}
              priority
              className="h-8 w-auto sm:h-10 xl:h-11"
            />
          </Link>

          <div className="hidden items-center gap-8 lg:flex xl:gap-10">
            <ul className="flex items-center gap-9 xl:gap-10">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm font-medium text-neutral-200 transition-colors hover:text-white focus-visible:text-white focus-visible:outline-none xl:text-[0.9rem]"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>

            <div aria-hidden className="h-6 w-px bg-white/20" />

            <div className="flex items-center gap-5">
              <Link
                href="/sign-in"
                className="text-sm font-medium text-brand-soft transition-colors hover:text-brand-soft-hover focus-visible:text-brand-soft-hover focus-visible:outline-none"
              >
                Sign In
              </Link>
              <Button
                render={<Link href="/sign-up" />}
                nativeButton={false}
                className={brandButton}
              >
                Get Started
              </Button>
            </div>
          </div>

          <Sheet open={menuOpen} onOpenChange={setMenuOpen}>
            <SheetTrigger
              aria-label="Open menu"
              className="inline-flex size-10 items-center justify-center rounded-xl text-neutral-200 transition-colors hover:bg-white/10 hover:text-white focus-visible:ring-2 focus-visible:ring-brand focus-visible:outline-none lg:hidden"
            >
              <MenuIcon className="size-5" />
            </SheetTrigger>

            <SheetContent
              side="right"
              showCloseButton={false}
              className="w-[min(20rem,85vw)] gap-0 border-white/10 bg-[#171717] text-white sm:max-w-xs"
            >
              <SheetHeader className="flex flex-row items-center justify-between border-b border-white/10 p-5">
                <SheetTitle className="sr-only">Navigation menu</SheetTitle>
                <Link href="/" aria-label="Hireloop home">
                  <Image
                    src="/assets/images/logo.png"
                    alt="Hireloop"
                    width={154}
                    height={44}
                    className="h-8 w-auto"
                  />
                </Link>
                <SheetClose
                  render={
                    <Button
                      variant="ghost"
                      size="icon"
                      className="text-neutral-300 hover:bg-white/10 hover:text-white"
                    />
                  }
                >
                  <XIcon />
                  <span className="sr-only">Close menu</span>
                </SheetClose>
              </SheetHeader>

              <nav aria-label="Mobile" className="flex-1 p-3">
                <ul className="flex flex-col">
                  {navLinks.map((link) => (
                    <li key={link.href}>
                      <Link
                        href={link.href}
                        onClick={() => setMenuOpen(false)}
                        className="flex h-11 items-center rounded-xl px-3 text-sm font-medium text-neutral-200 transition-colors hover:bg-white/5 hover:text-white"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </nav>

              <SheetFooter className="gap-3 border-t border-white/10 p-5">
                <Link
                  href="/sign-in"
                  onClick={() => setMenuOpen(false)}
                  className="inline-flex h-11 items-center justify-center rounded-xl border border-white/10 text-sm font-medium text-brand-soft transition-colors hover:bg-white/5 hover:text-brand-soft-hover"
                >
                  Sign In
                </Link>
                <Link
                  href="/sign-up"
                  onClick={() => setMenuOpen(false)}
                  className="inline-flex h-11 items-center justify-center rounded-xl bg-brand text-sm font-medium text-white transition-colors hover:bg-brand-hover"
                >
                  Get Started
                </Link>
              </SheetFooter>
            </SheetContent>
          </Sheet>
        </nav>
      </Container>
    </header>
  )
}
