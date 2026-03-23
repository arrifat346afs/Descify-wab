import {
  integer,
  pgTable,
  varchar,
  boolean,
  timestamp,
  text,
  primaryKey,
  uniqueIndex,
} from "drizzle-orm/pg-core"
import type { Adapter } from "better-auth/adapters"

export const users = pgTable("users", {
  id: varchar({ length: 255 }).primaryKey(),
  name: varchar({ length: 255 }).notNull(),
  email: varchar({ length: 255 }).notNull().unique(),
  emailVerified: boolean().notNull().default(false),
  image: varchar({ length: 255 }),
  createdAt: timestamp().notNull().defaultNow(),
  updatedAt: timestamp().notNull().defaultNow(),
})

export const sessions = pgTable("sessions", {
  id: varchar({ length: 255 }).primaryKey(),
  expiresAt: timestamp().notNull(),
  token: varchar({ length: 255 }).notNull().unique(),
  createdAt: timestamp().notNull().defaultNow(),
  updatedAt: timestamp().notNull().defaultNow(),
  ipAddress: varchar({ length: 255 }),
  userAgent: varchar({ length: 255 }),
  userId: varchar({ length: 255 })
    .notNull()
    .references(() => users.id, { onDelete: "cascade" }),
})

export const accounts = pgTable("accounts", {
  id: varchar({ length: 255 }).primaryKey(),
  accountId: varchar({ length: 255 }).notNull(),
  providerId: varchar({ length: 255 }).notNull(),
  userId: varchar({ length: 255 })
    .notNull()
    .references(() => users.id, { onDelete: "cascade" }),
  accessToken: text(),
  refreshToken: text(),
  idToken: text(),
  accessTokenExpiresAt: timestamp(),
  refreshTokenExpiresAt: timestamp(),
  scope: varchar({ length: 255 }),
  password: varchar({ length: 255 }),
  createdAt: timestamp().notNull().defaultNow(),
  updatedAt: timestamp().notNull().defaultNow(),
})

export const verifications = pgTable("verifications", {
  id: varchar({ length: 255 }).primaryKey(),
  identifier: varchar({ length: 255 }).notNull(),
  value: varchar({ length: 255 }).notNull(),
  expiresAt: timestamp().notNull(),
  createdAt: timestamp().notNull().defaultNow(),
  updatedAt: timestamp().notNull().defaultNow(),
})

export const payments = pgTable("payments", {
  id: varchar({ length: 255 }).primaryKey(),
  userId: varchar({ length: 255 })
    .notNull()
    .references(() => users.id, { onDelete: "cascade" }),
  creemPaymentId: varchar({ length: 255 }).notNull(),
  productId: varchar({ length: 255 }).notNull(),
  amount: integer().notNull(),
  currency: varchar({ length: 3 }).notNull().default("USD"),
  status: varchar({ length: 50 }).notNull().default("pending"),
  type: varchar({ length: 20 }).notNull(),
  createdAt: timestamp().notNull().defaultNow(),
  updatedAt: timestamp().notNull().defaultNow(),
})

export type User = typeof users.$inferSelect
export type Session = typeof sessions.$inferSelect
export type Account = typeof accounts.$inferSelect
export type Verification = typeof verifications.$inferSelect
export type Payment = typeof payments.$inferSelect
