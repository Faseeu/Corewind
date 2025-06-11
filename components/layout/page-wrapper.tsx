"use client";

import type React from "react";
import { usePathname } from "next/navigation";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/landing/footer";
import { ErrorBoundary } from "@/components/ui/error-boundary";

export function PageWrapper({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const showHeaderFooter = pathname !== '/instant-learning' && !pathname?.startsWith('/instant-learning/');

  return (
    <div className="min-h-screen flex flex-col bg-background">
      {showHeaderFooter && <Header />}
      <main className={`flex-grow ${showHeaderFooter ? 'pt-16' : ''}`}>
        <ErrorBoundary>
          {children}
        </ErrorBoundary>
      </main>
      {showHeaderFooter && <Footer />}
    </div>
  );
}
