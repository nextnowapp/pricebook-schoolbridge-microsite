import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const SITE = "https://pricebook.schoolbridge.co.za";

export const metadata: Metadata = {
  metadataBase: new URL(SITE),
  title: {
    default: "SchoolBridge Ecosystem — The Digital Operating System for Schools",
    template: "%s — SchoolBridge Ecosystem",
  },
  description:
    "One platform for every school process and every stakeholder. SchoolBridge unifies administration, mobile engagement, admissions, payments, communication, websites and analytics in one integrated cloud platform for South African schools.",
  keywords: [
    "SchoolBridge",
    "AppBridge",
    "PayBridge",
    "AdmissionBridge",
    "ProvinceBridge",
    "school management system",
    "school administration software",
    "school fee collection",
    "South Africa",
    "education technology",
  ],
  applicationName: "SchoolBridge Ecosystem",
  authors: [{ name: "SchoolBridge" }],
  icons: {
    icon: [
      { url: "/favicon.png", sizes: "48x48", type: "image/png" },
      { url: "/favicon-32.png", sizes: "32x32", type: "image/png" },
      { url: "/icon-192.png", sizes: "192x192", type: "image/png" },
      { url: "/icon-512.png", sizes: "512x512", type: "image/png" },
    ],
    apple: [{ url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" }],
  },
  openGraph: {
    type: "website",
    url: SITE,
    siteName: "SchoolBridge Ecosystem",
    title: "SchoolBridge Ecosystem — The Digital Operating System for Schools",
    description:
      "One Platform. Every School Process. Every Stakeholder. Administration, mobile apps, admissions, payments and analytics in one integrated cloud platform.",
    images: [
      { url: "/og-image.png", width: 1200, height: 630, alt: "SchoolBridge — The Digital Operating System for Schools" },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "SchoolBridge Ecosystem — The Digital Operating System for Schools",
    description:
      "One Platform. Every School Process. Every Stakeholder. The complete digital operating system for modern schools.",
    images: ["/og-image.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} h-full`}>
      <body className="min-h-full font-sans antialiased bg-white text-slate-900">
        {children}
      </body>
    </html>
  );
}
