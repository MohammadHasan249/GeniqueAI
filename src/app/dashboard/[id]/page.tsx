import { db } from '@/lib/db';
import { notFound } from 'next/navigation';

export default async function Page({ params }: { params: { id: string } }) {
  const page = await db.page.findUnique({ where: { id: params.id } });
  if (!page) return notFound();

  return (
    <section className="p-8">
      <h1 className="text-2xl font-bold mb-4">Page status</h1>
      <p>Status: <strong>{page.status}</strong></p>
      {page.status === 'live' && page.prodUrl && (
        <a className="text-blue-600 underline" href={page.prodUrl} target="_blank">
          View live page
        </a>
      )}
    </section>
  );
}
