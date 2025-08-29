"use client";

import { usePathname } from "next/navigation";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const isGeneratedPage = pathname?.includes('/dashboard/pages/');

  // Full-width layout for generated pages
  if (isGeneratedPage) {
    return <>{children}</>;
  }

  // Regular dashboard layout - let the dashboard component handle its own background
  return (
    <div className="min-h-screen">
      {children}
    </div>
  );
}
