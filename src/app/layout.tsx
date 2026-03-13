import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

// ============================================================
// Root Layout for Nexourz Workflow Dashboard
// ============================================================

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Nexourz Workflow Galaxy | Interactive 3D Dashboard",
  description:
    "Explore Nexourz's stunning 3D visualization of production-ready automation workflows. Interactive galaxy view showcasing AI, SEO, HR, and data processing automations.",
  keywords: [
    "n8n",
    "automation",
    "workflows",
    "3D visualization",
    "portfolio",
    "AI automation",
    "SEO tools",
    "data processing",
  ],
  authors: [{ name: "Nexourz", url: "https://nexourz.com" }],
  openGraph: {
    title: "Nexourz Workflow Galaxy",
    description: "Nexourz - Interactive 3D portfolio of automation workflows",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Nexourz Workflow Galaxy",
    description: "Nexourz - Interactive 3D portfolio of automation workflows",
  },
  robots: {
    index: true,
    follow: true,
  },
  themeColor: "#0a0a1a",
  viewport: {
    width: "device-width",
    initialScale: 1,
    maximumScale: 1,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark" suppressHydrationWarning>
      <head>
        {/* Preconnect to GitHub for faster API calls */}
        <link rel="preconnect" href="https://api.github.com" />
        <link rel="preconnect" href="https://raw.githubusercontent.com" />

        {/* Favicon */}
        <link rel="icon" href="/favicon.ico" sizes="any" />
      </head>
      <body
        className={`${inter.variable} font-sans antialiased`}
        style={{ background: "#0a0a1a" }}
      >
        {children}
      </body>
    </html>
  );
}
