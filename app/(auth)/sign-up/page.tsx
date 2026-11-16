import type { Metadata } from "next"

import { AuthForm } from "@/components/auth/auth-form"

export const metadata: Metadata = {
  title: "Sign up · Hireloop",
  description: "Create your Hireloop account.",
}

export default function SignUpPage() {
  return <AuthForm mode="sign-up" />
}
