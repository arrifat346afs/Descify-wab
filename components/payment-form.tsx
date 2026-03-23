"use client"

import { useState } from "react"
import { useSession } from "@/lib/auth-client"
import { PRODUCTS } from "@/lib/payment"
import { Button } from "@/components/ui/button"

export function PaymentForm() {
  const { data: session } = useSession()
  const [loading, setLoading] = useState<string | null>(null)

  const handleCheckout = async (productId: string) => {
    if (!session?.user) {
      alert("Please sign in first")
      return
    }

    setLoading(productId)

    try {
      const response = await fetch("/api/checkout", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          productId,
          userId: session.user.id,
          userEmail: session.user.email,
        }),
      })

      const data = await response.json()

      if (data.url) {
        window.location.href = data.url
      } else {
        alert(data.error || "Failed to create checkout session")
      }
    } catch (error) {
      alert("Failed to create checkout session")
    } finally {
      setLoading(null)
    }
  }

  const oneTimeProducts = PRODUCTS.filter((p) => p.type === "one-time")
  const subscriptionProducts = PRODUCTS.filter((p) => p.type === "subscription")

  return (
    <div className="space-y-8">
      <section>
        <h3 className="mb-4 text-lg font-semibold">One-Time Payments</h3>
        <div className="grid grid-cols-2 gap-4">
          {oneTimeProducts.map((product) => (
            <div
              key={product.id}
              className="flex flex-col items-center justify-between rounded-lg border p-4"
            >
              <div className="text-center">
                <p className="font-medium">{product.name}</p>
                <p className="text-2xl font-bold">${product.price / 100}</p>
              </div>
              <Button
                onClick={() => handleCheckout(product.id)}
                disabled={loading === product.id}
                className="mt-4"
              >
                {loading === product.id ? "Loading..." : "Buy Now"}
              </Button>
            </div>
          ))}
        </div>
      </section>

      <section>
        <h3 className="mb-4 text-lg font-semibold">Subscriptions</h3>
        <div className="grid grid-cols-2 gap-4">
          {subscriptionProducts.map((product) => (
            <div
              key={product.id}
              className="flex flex-col items-center justify-between rounded-lg border p-4"
            >
              <div className="text-center">
                <p className="font-medium">{product.name}</p>
                <p className="text-2xl font-bold">${product.price / 100}/mo</p>
              </div>
              <Button
                onClick={() => handleCheckout(product.id)}
                disabled={loading === product.id}
                className="mt-4"
              >
                {loading === product.id ? "Loading..." : "Subscribe"}
              </Button>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}
