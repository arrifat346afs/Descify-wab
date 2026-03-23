"use client"

import { useSession, signIn, signOut } from "@/lib/auth-client"
import { Button } from "@/components/ui/button"

export function AuthButton() {
  const { data: session, isPending } = useSession()

  if (isPending) {
    return <Button disabled>Loading...</Button>
  }

  if (session?.user) {
    return (
      <div className="flex items-center gap-4">
        <span className="text-sm">{session.user.email}</span>
        <Button variant="outline" onClick={() => signOut()}>
          Sign Out
        </Button>
      </div>
    )
  }

  return (
    <div className="flex gap-2">
      <Button onClick={() => signIn.email({ email: "", password: "" })}>
        Sign In
      </Button>
      <Button
        variant="outline"
        onClick={() => signIn.email({ email: "", password: "" })}
      >
        Sign Up
      </Button>
    </div>
  )
}
