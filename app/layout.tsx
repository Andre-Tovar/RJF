import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Rossin Junior Fellows | Lehigh University",
  description: "Mentorship, service, and engineering community at Lehigh's P.C. Rossin College.",
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">{children}</body>
    </html>
  );
}
