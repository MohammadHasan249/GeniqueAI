import { db } from '@/lib/db';
import { ensureDbUser } from '@/lib/ensure-db-user';
import DashboardClient from './dashboard-client';
import type { GeneratedSpec } from '@/schemas/generated-spec';

export default async function Dashboard() {
  const user = await ensureDbUser();
  const rawPages = await db.page.findMany({ 
    where: { userId: user.id },
    orderBy: { createdAt: 'desc' },
    select: {
      id: true,
      businessName: true,
      status: true,
      answersJson: true,
      generatedJson: true,
      previewUrl: true,
      prodUrl: true,
      createdAt: true,
      updatedAt: true,
    }
  });

  // Type-cast the database results to the expected format
  const pages = rawPages.map(page => ({
    ...page,
    generatedJson: page.generatedJson as GeneratedSpec | null,
  }));

  return <DashboardClient pages={pages} />;
}
