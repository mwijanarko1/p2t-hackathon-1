import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { getSiteUrl } from "@/lib/env";
import "./globals.css";

const siteUrl = getSiteUrl();

// Initialize the Geist font with Latin subset
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

// Initialize the Geist Mono font with Latin subset
const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const viewport: Viewport = {
  themeColor: "#f0ebe3",
};

// Define metadata for better SEO
export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "Fund Me If You Can - AI VC Hackathon",
  description: "A beginner-friendly one-week hackathon where you build a startup landing page and convince an AI VC to invest. Compete for the highest investment score.",
  keywords: ["hackathon", "AI", "VC", "startup", "landing page", "beginner", "competition"],
  authors: [{ name: "Pivot2Tech" }],
  creator: "Pivot2Tech",
  publisher: "Pivot2Tech",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Fund Me If You Can - AI VC Hackathon",
    description: "Build a startup landing page. Convince an AI VC to invest. Get the highest investment score.",
    url: siteUrl,
    siteName: "Fund Me If You Can",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Fund Me If You Can - AI VC Hackathon",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Fund Me If You Can - AI VC Hackathon",
    description: "Build a startup landing page. Convince an AI VC to invest. Get the highest investment score.",
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <a
          href="#main-content"
          className="absolute -top-12 left-4 z-[100] border border-[#b8982e] bg-[#f0ebe3] px-4 py-2 text-neutral-900 transition-[top] duration-200 focus:top-4 focus:outline-none focus:ring-2 focus:ring-[#b8982e] focus:ring-offset-2 focus:ring-offset-[#f0ebe3]"
        >
          Skip to main content
        </a>
        {children}
      </body>
    </html>
  );
}
