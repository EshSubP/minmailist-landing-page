import type { Metadata } from "next";
import "./globals.css";

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
        {children}
      </body>
    </html>
  );
}
