import { db } from "@/lib/db";
import { notFound } from "next/navigation";
import type { GeneratedSpec } from "@/schemas/generated-spec";
import { GeneratedPageClient } from "./generated-page-client";

export default async function GeneratedPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const page = await db.page.findUnique({ where: { id } });
  if (!page || !page.generatedJson) return notFound();

  const spec = page.generatedJson as GeneratedSpec;
  const answers = page.answersJson as any;

  // Brand color fallback
  const primary =
    (spec.palette?.primary || "#2563eb").startsWith("#")
      ? spec.palette?.primary || "#2563eb"
      : `#${spec.palette?.primary}`;

  // Handle logo - either uploaded or generated
  const uploadedLogoUrl = answers?.logoUrl || "";
  const generatedLogoIcon = spec.logo?.iconName;
  
  // Debug: Log the logo info
  console.log("Page rendering with uploaded logoUrl:", uploadedLogoUrl);
  console.log("Generated logo icon:", generatedLogoIcon);

  return (
    <GeneratedPageClient 
      spec={spec}
      primary={primary}
      businessName={page.businessName}
      logoUrl={uploadedLogoUrl}
      generatedLogoIcon={generatedLogoIcon}
    />
  );
}
