import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

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
  themeColor: "#0f0f1a",
};

// Define metadata for better SEO
export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_APP_URL ?? "http://localhost:3000"),
  title: "Fund Me If You Can - AI VC Hackathon",
  description: "A beginner-friendly one-week hackathon where you build a startup landing page and convince an AI VC to invest. Compete for the highest investment score.",
  keywords: ["hackathon", "AI", "VC", "startup", "landing page", "beginner", "competition"],
  authors: [{ name: "Pivot2Tech" }],
  creator: "Pivot2Tech",
  publisher: "Pivot2Tech",
  openGraph: {
    title: "Fund Me If You Can - AI VC Hackathon",
    description: "Build a startup landing page. Convince an AI VC to invest. Get the highest investment score.",
    url: "https://hackathon.pivot2tech.com",
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
          className="absolute -top-12 left-4 z-50 px-4 py-2 bg-emerald-600 text-white rounded-md transition-[top] duration-200 focus:top-4 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2 focus:ring-offset-[#0f0f1a]"
        >
          Skip to main content
        </a>
        {children}
      </body>
    </html>
  );
}