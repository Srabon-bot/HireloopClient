"use client"

import * as React from "react"
import Link from "next/link"
import { EyeIcon, EyeOffIcon } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { cn } from "@/lib/utils"

export type AuthMode = "sign-in" | "sign-up"

const content = {
  "sign-in": {
    title: "Welcome back",
    subtitle: "Sign in to keep track of your applications.",
    submit: "Sign In",
    prompt: "Don't have an account?",
    switchLabel: "Sign up",
    switchHref: "/sign-up",
  },
  "sign-up": {
    title: "Create your account",
    subtitle: "Join HireLoop and land your next role faster.",
    submit: "Create Account",
    prompt: "Already have an account?",
    switchLabel: "Sign in",
    switchHref: "/sign-in",
  },
} as const

const inputStyles =
  "h-11 rounded-xl border-white/10 bg-white/[0.03] px-3.5 text-sm text-white shadow-none transition-colors placeholder:text-neutral-500 focus-visible:border-brand/60 focus-visible:ring-brand/25"

type FieldProps = React.ComponentProps<"input"> & {
  label: string
}

function Field({ label, id, className, ...props }: FieldProps) {
  return (
    <div className="grid gap-2">
      <Label htmlFor={id} className="text-neutral-300">
        {label}
      </Label>
      <Input id={id} className={cn(inputStyles, className)} {...props} />
    </div>
  )
}

function PasswordField({ label, id, ...props }: FieldProps) {
  const [visible, setVisible] = React.useState(false)

  return (
    <div className="grid gap-2">
      <Label htmlFor={id} className="text-neutral-300">
        {label}
      </Label>
      <div className="relative">
        <Input
          id={id}
          type={visible ? "text" : "password"}
          className={cn(inputStyles, "pr-11")}
          {...props}
        />
        <button
          type="button"
          onClick={() => setVisible((value) => !value)}
          aria-label={visible ? "Hide password" : "Show password"}
          className="absolute inset-y-0 right-0 grid w-11 place-items-center rounded-r-xl text-neutral-500 transition-colors hover:text-white focus-visible:ring-2 focus-visible:ring-brand focus-visible:outline-none"
        >
          {visible ? (
            <EyeOffIcon className="size-4" />
          ) : (
            <EyeIcon className="size-4" />
          )}
        </button>
      </div>
    </div>
  )
}

function AuthTab({
  href,
  active,
  children,
}: {
  href: string
  active: boolean
  children: React.ReactNode
}) {
  return (
    <Link
      href={href}
      aria-current={active ? "page" : undefined}
      className={cn(
        "rounded-lg py-2 text-center text-sm font-medium transition-colors focus-visible:ring-2 focus-visible:ring-brand focus-visible:outline-none",
        active
          ? "bg-white/10 text-white shadow-sm shadow-black/20"
          : "text-neutral-400 hover:text-white"
      )}
    >
      {children}
    </Link>
  )
}

export function AuthForm({ mode }: { mode: AuthMode }) {
  const copy = content[mode]

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()

    const formData = new FormData(event.currentTarget)
    const values = Object.fromEntries(formData.entries())

    // TODO: send `values` to your auth provider.
    console.log(`[auth:${mode}] form data`, values)
  }

  return (
    <div className="w-full max-w-md">
      <div className="rounded-3xl border border-white/10 bg-[#101010]/85 p-6 shadow-[inset_0_1px_0_0_rgba(255,255,255,0.05),0_40px_80px_-40px_rgba(0,0,0,0.9)] backdrop-blur-xl sm:p-8">
        <div className="text-center">
          <h1 className="text-2xl font-semibold tracking-tight text-white sm:text-3xl">
            {copy.title}
          </h1>
          <p className="mt-2 text-sm text-neutral-400">{copy.subtitle}</p>
        </div>

        <div className="mt-6 grid grid-cols-2 gap-1 rounded-xl border border-white/10 bg-white/[0.03] p-1">
          <AuthTab href="/sign-in" active={mode === "sign-in"}>
            Sign in
          </AuthTab>
          <AuthTab href="/sign-up" active={mode === "sign-up"}>
            Sign up
          </AuthTab>
        </div>

        <form onSubmit={handleSubmit} className="mt-6 grid gap-4">
          {mode === "sign-up" ? (
            <Field
              id="name"
              name="name"
              label="Full name"
              type="text"
              placeholder="Jane Doe"
              autoComplete="name"
              required
            />
          ) : null}

          <Field
            id="email"
            name="email"
            label="Email"
            type="email"
            placeholder="you@example.com"
            autoComplete="email"
            required
          />

          <PasswordField
            id="password"
            name="password"
            label="Password"
            placeholder="Enter your password"
            autoComplete={
              mode === "sign-up" ? "new-password" : "current-password"
            }
            minLength={8}
            required
          />

          {mode === "sign-up" ? (
            <PasswordField
              id="confirmPassword"
              name="confirmPassword"
              label="Confirm password"
              placeholder="Re-enter your password"
              autoComplete="new-password"
              minLength={8}
              required
            />
          ) : null}

          {mode === "sign-in" ? (
            <div className="flex items-center justify-between gap-3 text-sm">
              <label className="flex items-center gap-2 text-neutral-400">
                <input
                  type="checkbox"
                  name="rememberMe"
                  className="size-4 rounded border border-white/20 bg-white/5 accent-brand"
                />
                Remember me
              </label>
              <Link
                href="#"
                className="font-medium text-brand-soft transition-colors hover:text-brand-soft-hover focus-visible:text-brand-soft-hover focus-visible:outline-none"
              >
                Forgot password?
              </Link>
            </div>
          ) : (
            <p className="text-xs leading-relaxed text-neutral-500">
              By creating an account you agree to our{" "}
              <Link
                href="#"
                className="text-brand-soft transition-colors hover:text-brand-soft-hover"
              >
                Terms
              </Link>{" "}
              and{" "}
              <Link
                href="#"
                className="text-brand-soft transition-colors hover:text-brand-soft-hover"
              >
                Privacy Policy
              </Link>
              .
            </p>
          )}

          <Button
            type="submit"
            className="mt-1 h-11 w-full rounded-xl bg-brand text-sm font-semibold text-white shadow-lg shadow-brand/25 hover:bg-brand-hover focus-visible:ring-brand/40"
          >
            {copy.submit}
          </Button>
        </form>

        <p className="mt-6 text-center text-sm text-neutral-400">
          {copy.prompt}{" "}
          <Link
            href={copy.switchHref}
            className="font-medium text-brand-soft transition-colors hover:text-brand-soft-hover focus-visible:text-brand-soft-hover focus-visible:outline-none"
          >
            {copy.switchLabel}
          </Link>
        </p>
      </div>
    </div>
  )
}
