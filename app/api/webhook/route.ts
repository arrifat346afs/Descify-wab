import { NextRequest, NextResponse } from "next/server"
import { db } from "@/db"
import { payments } from "@/db/schema"
import { eq } from "drizzle-orm"

function verifyWebhookSignature(
  payload: string,
  signature: string,
  secret: string
): boolean {
  const crypto = require("crypto")
  const expectedSignature = crypto
    .createHmac("sha256", secret)
    .update(payload)
    .digest("hex")
  return signature === expectedSignature
}

export async function POST(req: NextRequest) {
  try {
    const signature = req.headers.get("x-creem-signature")
    const body = await req.text()

    if (!signature) {
      return NextResponse.json({ error: "Missing signature" }, { status: 400 })
    }

    const isValid = verifyWebhookSignature(
      body,
      signature,
      process.env.CREEM_WEBHOOK_SECRET!
    )

    if (!isValid) {
      return NextResponse.json({ error: "Invalid signature" }, { status: 401 })
    }

    const event = JSON.parse(body)

    if (event.event === "payment.completed") {
      const paymentData = event.data
      const metadata = paymentData.metadata || {}

      const userId = metadata.userId
      const productId = metadata.productId

      if (userId && productId) {
        await db.insert(payments).values({
          id: crypto.randomUUID(),
          userId: userId,
          creemPaymentId: paymentData.id,
          productId: productId,
          amount: Math.round(paymentData.amount * 100),
          currency: paymentData.currency || "usd",
          status: "completed",
          type: paymentData.recurring ? "subscription" : "one-time",
          createdAt: new Date(),
          updatedAt: new Date(),
        })
      }
    }

    return NextResponse.json({ received: true })
  } catch (error) {
    console.error("Webhook error:", error)
    return NextResponse.json(
      { error: "Webhook processing failed" },
      { status: 500 }
    )
  }
}
