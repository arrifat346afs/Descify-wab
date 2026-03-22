import { Button } from "@/components/ui/button"
import Link from "next/link"
import { CheckCircle2 } from "lucide-react"

export default function SuccessPage() {
  return (
    <div className="flex min-h-[60vh] items-center justify-center px-6">
      <div className="mx-auto max-w-md text-center">
        <div className="mb-6 flex justify-center">
          <CheckCircle2 className="h-20 w-20 text-green-500" />
        </div>
        <h1 className="mb-4 text-3xl font-bold">Thank You!</h1>
        <p className="mb-8 text-lg text-muted-foreground">
          Your support means the world to us. We&apos;ve received your
          contribution and it will help keep this project alive.
        </p>
        <div className="flex justify-center gap-4">
          <Button asChild>
            <Link href="/">Go Home</Link>
          </Button>
          <Button variant="outline" asChild>
            <Link href="/donate">Back to Donate</Link>
          </Button>
        </div>
      </div>
    </div>
  )
}
