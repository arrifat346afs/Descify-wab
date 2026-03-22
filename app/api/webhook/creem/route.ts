// app/api/webhook/creem/route.ts
import { Webhook } from '@creem_io/nextjs';


export const POST = Webhook({
  webhookSecret: process.env.CREEM_WEBHOOK_SECRET!,
  onCheckoutCompleted: async ({ customer, product }) => {
    console.log(`${customer?.email} purchased ${product.name}`);
  },
  
});