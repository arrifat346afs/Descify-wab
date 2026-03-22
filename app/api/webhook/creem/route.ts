// app/api/webhook/creem/route.ts
import { Webhook } from '@creem_io/nextjs';

async function grantAccess(userId: string, email: string | undefined) {
  // TODO: implement access grant logic (e.g. update DB)
  console.log(`Granting access to userId=${userId}, email=${email}`);
}

async function revokeAccess(userId: string, email: string | undefined) {
  // TODO: implement access revoke logic (e.g. update DB)
  console.log(`Revoking access from userId=${userId}, email=${email}`);
}

export const POST = Webhook({
  webhookSecret: process.env.CREEM_WEBHOOK_SECRET!,
  onCheckoutCompleted: async ({ customer, product }) => {
    console.log(`${customer?.email} purchased ${product.name}`);
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