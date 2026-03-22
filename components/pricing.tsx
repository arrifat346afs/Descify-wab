import { Button } from "@/components/ui/button"
import { CreemCheckout } from "@creem_io/nextjs"
import { Check } from "lucide-react"
// import Link from "next/link"

export default function Pricing() {
  return (
    <div className="relative py-16 md:py-32">
      <div className="mx-auto max-w-5xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold text-balance md:text-4xl lg:text-5xl">
            Help Us Keep This Project Alive
          </h2>
        </div>
        <div className="mt-8 md:mt-20">
          <div className="relative rounded-3xl border bg-card shadow-2xl shadow-zinc-950/5">
            <div className="grid items-center gap-12 divide-y p-12 md:grid-cols-2 md:divide-x md:divide-y-0">
              <div className="pb-12 text-center md:pr-12 md:pb-0">
                <h3 className="text-2xl font-semibold">Support Our Work</h3>
                <p className="mt-2 text-lg">
                  Every contribution makes a difference
                </p>
                <span className="mt-12 mb-6 inline-block text-6xl font-bold">
                  You Choose
                </span>

                <div className="flex justify-center">
                  <CreemCheckout productId="prod_1KQXMCEPNzZ5Sfbkl0feGG" checkoutPath="/api/checkout">
                    <Button>Support Us</Button>
                  </CreemCheckout>
                </div>

                <p className="mt-12 text-sm text-muted-foreground">
                  Your support helps us maintain and improve this project for
                  everyone
                </p>
              </div>
              <div className="relative">
                <ul role="list" className="space-y-4">
                  {[
                    "100% of donations go to project development",
                    "Help us cover server and hosting costs",
                    "Support ongoing maintenance and updates",
                    "Keep this service free for everyone",
                  ].map((item, index) => (
                    <li key={index} className="flex items-center gap-2">
                      <Check className="size-3" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
                <p className="mt-6 text-sm text-muted-foreground">
                  This is an open source project built with passion. If you find
                  it useful, consider buying us a coffee. Every contribution,
                  big or small, is deeply appreciated.
                </p>
                {/* <div className="**:fill-foreground mt-12 flex flex-wrap items-center gap-12">
                                    <Hulu
                                        height={18}
                                        width={56}
                                    />
                                    <Spotify
                                        height={24}
                                        width={80}
                                    />
                                    <FirebaseFull
                                        height={24}
                                        width={80}
                                    />
                                </div> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
