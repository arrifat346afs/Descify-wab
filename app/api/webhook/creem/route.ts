// app/api/webhook/creem/route.ts
import { Webhook } from '@creem_io/nextjs';

export const POST = Webhook({
  webhookSecret: process.env.CREEM_WEBHOOK_SECRET!,
  onCheckoutCompleted: async ({ customer, product }) => {
    console.log(`${customer.email} purchased ${product.name}`);
  },
  onGrantAccess: async ({ customer, metadata }) => {
    const userId = metadata?.referenceId as string;
    await grantAccess(userId, customer.email);
  },
  onRevokeAccess: async ({ customer, metadata }) => {
    const userId = metadata?.referenceId as string;
    await revokeAccess(userId, customer.email);
  },
});