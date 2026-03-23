import { NextRequest, NextResponse } from "next/server"
import { createCheckoutSession } from "@/lib/payment"

export async function POST(req: NextRequest) {
  try {
    const body = await req.json()
    const { productId, userId, userEmail } = body

    if (!productId || !userId || !userEmail) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      )
    }

    const result = await createCheckoutSession(productId, userId, userEmail)

    if ("error" in result) {
      return NextResponse.json({ error: result.error }, { status: 400 })
    }

    return NextResponse.json(result)
  } catch (error) {
    console.error("Checkout error:", error)
    return NextResponse.json(
      { error: "Failed to create checkout session" },
      { status: 500 }
    )
  }
}
