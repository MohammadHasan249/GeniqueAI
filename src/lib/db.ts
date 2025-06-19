// src/lib/db.ts
import { PrismaClient } from '@prisma/client';

/**
 * In dev, Next.js reloads the route handler on every file save.
 * Using a global var prevents constructing a NEW PrismaClient each time.
 */
const globalForPrisma = globalThis as unknown as { prisma: PrismaClient | undefined };

export const db =
  globalForPrisma.prisma ??
  new PrismaClient({
    log: ['query', 'error', 'warn'],  // optional: logs SQL in dev
  });

if (process.env.NODE_ENV !== 'production') {
  globalForPrisma.prisma = db;
}
