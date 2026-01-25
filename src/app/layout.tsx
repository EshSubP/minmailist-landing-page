import type { Metadata, Viewport } from "next";
import { Suspense } from "react";
import "./globals.css";
import ScrollToHash from "@/components/ScrollToHash";

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
};

export const metadata: Metadata = {
  title: "Minmailist - Zen Email for the Focused Mind",
  description: "Transform your inbox chaos into calm productivity. Smart bundling, Kanban workflows, and a zen-like experience designed for focus.",
  keywords: ["email", "productivity", "inbox", "zen", "gmail", "email client", "email management"],
  authors: [{ name: "Minmailist" }],
  icons: {
    icon: '/minmailist-logo.svg',
  },
  openGraph: {
    title: "Minmailist - Zen Email for the Focused Mind",
    description: "Transform your inbox chaos into calm productivity.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Suspense fallback={null}>
          <ScrollToHash />
        </Suspense>
        {children}
      </body>
    </html>
  );
}
