"use client"

import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { CreemCheckout } from "@creem_io/nextjs"
import { Check, Heart } from "lucide-react"
import { Spotlight } from "@/components/spotlight-new"

const donationTiers = [
  {
    amount: 10,
    productId: "prod_1KQXMCEPNzZ5Sfbkl0feGG",
    description: "Coffee",
  },
  {
    amount: 20,
    productId: "prod_7Q04Jb3lmSiWcpQyGDiQUs",
    description: "Snack",
  },
  { amount: 30, productId: "prod_YOUR_30_ID", description: "Meal" },
  { amount: 40, productId: "prod_YOUR_40_ID", description: "Book" },
  { amount: 50, productId: "prod_YOUR_50_ID", description: "Support" },
  // { amount: 60, productId: "prod_YOUR_60_ID", description: "Gift" },
  // { amount: 70, productId: "prod_YOUR_70_ID", description: "Bonus" },
  // { amount: 80, productId: "prod_YOUR_80_ID", description: "Premium" },
  // { amount: 90, productId: "prod_YOUR_90_ID", description: "Elite" },
  { amount: 100, productId: "prod_YOUR_100_ID", description: "Champion" },
]

export default function Pricing() {
  return (
    <div className="relative py-16 md:py-32">
      <Spotlight />
      <div className="mx-auto max-w-6xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold text-balance md:text-4xl lg:text-5xl">
            Help Us Keep This Project Alive
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Choose an amount to support our work
          </p>
        </div>
        <div className="mt-8 md:mt-20">
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
            {donationTiers.map((tier) => (
              <Card key={tier.amount} className="flex flex-col">
                <CardHeader className="text-center">
                  <CardTitle className="text-4xl font-bold">
                    ${tier.amount}
                  </CardTitle>
                  <p className="text-sm text-muted-foreground">
                    {tier.description}
                  </p>
                </CardHeader>
                <CardContent className="flex-1">
                  <ul role="list" className="space-y-2 text-sm">
                    <li className="flex items-center gap-2">
                      <Check className="size-3 text-primary" />
                      <span>100% goes to project</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <Check className="size-3 text-primary" />
                      <span>Helps cover costs</span>
                    </li>
                  </ul>
                </CardContent>
                <CardFooter>
                  <CreemCheckout
                    productId={tier.productId}
                    checkoutPath="/api/checkout"
                  >
                    <Button className="w-full">
                      <Heart className="mr-2 size-4" />
                      Donate ${tier.amount}
                    </Button>
                  </CreemCheckout>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
