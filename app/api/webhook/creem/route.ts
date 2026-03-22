import { db } from "@/db/index"
import { usersTable } from "@/db/schema"
import crypto from "crypto"

export const POST = async (req: Request) => {
  const webhookSecret = process.env.CREEM_WEBHOOK_SECRET
  console.log("Webhook secret loaded:", webhookSecret ? "YES" : "NO")

  const rawBody = await req.text()
  const signature = req.headers.get("creem-signature")

  console.log("Raw body:", rawBody)
  console.log("Signature from header:", signature)

  if (!webhookSecret || !signature) {
    console.log("Missing secret or signature")
    return new Response("Missing credentials", { status: 401 })
  }

  const expectedSignature = crypto
    .createHmac("sha256", webhookSecret)
    .update(rawBody)
    .digest("hex")

  console.log("Expected signature:", expectedSignature)
  console.log("Signatures match:", signature === expectedSignature)

  if (signature !== expectedSignature) {
    return new Response("Invalid signature", { status: 401 })
  }

  const payload = JSON.parse(rawBody)
  console.log("Webhook payload:", payload)

  if (payload.eventType === "checkout.completed") {
    const { customer, product } = payload.object

    if (!customer?.email || !product?.id) {
      console.log("Missing customer email or product id")
      return new Response("OK", { status: 200 })
    }

    await db.insert(usersTable).values({
      email: customer.email as string,
      name: customer.name as string,
      age: 0,
    })

    console.log("User inserted successfully!")
  }

  return new Response("OK", { status: 200 })
}
