export const CREEM_API_KEY = process.env.CREEM_API_KEY!
export const CREEM_PRODUCT_ID = process.env.CREEM_PRODUCT_ID!
export const CREEM_BASE_URL = "https://api.creem.io/v1"

export interface Product {
  id: string
  name: string
  price: number
  type: "one-time" | "subscription"
}

export const PRODUCTS: Product[] = [
  { id: "tier_basic", name: "Basic Tier", price: 1000, type: "one-time" },
  { id: "tier_standard", name: "Standard Tier", price: 2500, type: "one-time" },
  { id: "tier_premium", name: "Premium Tier", price: 5000, type: "one-time" },
  { id: "tier_elite", name: "Elite Tier", price: 10000, type: "one-time" },
  {
    id: "sub_monthly_basic",
    name: "Monthly Basic",
    price: 1000,
    type: "subscription",
  },
  {
    id: "sub_monthly_premium",
    name: "Monthly Premium",
    price: 2000,
    type: "subscription",
  },
]

export function getProductById(id: string): Product | undefined {
  return PRODUCTS.find((p) => p.id === id)
}

export async function createCheckoutSession(
  productId: string,
  userId: string,
  userEmail: string
): Promise<{ url: string } | { error: string }> {
  const product = getProductById(productId)
  if (!product) {
    return { error: "Invalid product ID" }
  }

  try {
    const response = await fetch(`${CREEM_BASE_URL}/checkout`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: CREEM_API_KEY,
      },
      body: JSON.stringify({
        product_id: CREEM_PRODUCT_ID,
        price_data: {
          currency: "usd",
          unit_amount: product.price,
          product_name: product.name,
        },
        metadata: {
          userId,
          productId,
        },
        customer_email: userEmail,
        success_url: `${process.env.BETTER_AUTH_URL}/success?session_id={CHECKOUT_SESSION_ID}`,
        cancel_url: `${process.env.BETTER_AUTH_URL}/cancel`,
      }),
    })

    const data = await response.json()

    if (!response.ok) {
      return { error: data.error || "Failed to create checkout session" }
    }

    return { url: data.url }
  } catch (error) {
    return { error: "Failed to create checkout session" }
  }
}
