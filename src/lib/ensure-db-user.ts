import { currentUser } from "@clerk/nextjs/server";   // server-only helper
import { db } from "@/lib/db";                         // your Prisma client

/**
 * Call from any server action / route / middleware that needs a DB user.
 * Returns the Prisma user record (creates it on first run).
 */
export async function ensureDbUser() {
  const clerkUser = await currentUser();      // throws if not signed-in
  if (!clerkUser) throw new Error("Unauthenticated");

  const { id, emailAddresses, firstName, lastName } = clerkUser;
  const email = emailAddresses[0]?.emailAddress;

  const user = await db.user.upsert({
    where: { id },                 // id column matches Clerk user id
    update: { email, firstName, lastName },
    create: {
      id,
      email,
      firstName,
      lastName,
    },
  });

  return user;
}
