import { db } from "@/db/index"
import { usersTable } from "@/db/schema"
import { Webhook } from "@creem_io/nextjs"

console.log("CREEM_WEBHOOK_SECRET env:", process.env.CREEM_WEBHOOK_SECRET)

export const POST = Webhook({
  webhookSecret: process.env.CREEM_WEBHOOK_SECRET!,
  onCheckoutCompleted: async ({ customer, product }) => {
    console.log("Webhook received! Customer:", customer, "Product:", product)
    if (!customer?.email || !product?.id) {
      return
    }

    await db.insert(usersTable).values({
      email: customer.email as string,
      name: customer.name as string,
      age: 0,
    })
  },
})
