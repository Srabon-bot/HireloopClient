import type { Metadata } from "next"

import { AuthForm } from "@/components/auth/auth-form"

export const metadata: Metadata = {
  title: "Sign in · Hireloop",
  description: "Sign in to your Hireloop account.",
}

export default function SignInPage() {
  return <AuthForm mode="sign-in" />
}
