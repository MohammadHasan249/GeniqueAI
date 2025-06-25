// src/app/api/generate/route.ts
import { NextRequest, NextResponse } from 'next/server';
import { auth } from '@clerk/nextjs/server';
import { ensureDbUser } from '@/lib/ensure-db-user';   // helper we wrote
import { db } from '@/lib/db';                         // Prisma client
import { queue } from '@/lib/queue';                   // BullMQ instance

export async function POST(req: NextRequest) {
  // 1. Protect the route (redirects if not signed-in)
  await auth.protect();

  // 2. Get Clerk user & be sure DB row exists
  const user = await ensureDbUser();

  // 3. Parse wizard answers from JSON body
  const answers = await req.json();        // { product, audience, … }

  // 4. Store initial Page row in Postgres
  const page = await db.page.create({
    data: {
      userId: user.id,
      status: 'queued',
      answersJson: answers,
    },
    select: { id: true },
  });

  // 5. Push a job ID onto BullMQ so the worker can do the heavy lifting
//   await queue.add('generate', { pageId: page.id });

  // 6. Respond quickly so the UI can navigate
  return NextResponse.json({ pageId: page.id });
}
