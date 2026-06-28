import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Providers } from "./providers";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Ade Halim Alfajri | Arabic Education Student & Researcher",
    template: "%s | Ade Halim Alfajri",
  },
  description:
    "Personal portfolio of Ade Halim Alfajri - Arabic Education Student, Researcher, and Content Creator. Explore academic research, publications, projects, and articles on Arabic education.",
  keywords: [
    "Ade Halim Alfajri",
    "Arabic Education",
    "Researcher",
    "Content Creator",
    "Portfolio",
    "Academic",
    "Publications",
    "Pendidikan Bahasa Arab",
  ],
  authors: [{ name: "Ade Halim Alfajri" }],
  creator: "Ade Halim Alfajri",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "id_ID",
    alternateLocale: ["en_US", "ar_SA"],
    url: "https://adehalimalfajri.com",
    siteName: "Ade Halim Alfajri",
    title: "Ade Halim Alfajri | Arabic Education Student & Researcher",
    description:
      "Personal portfolio showcasing academic research, publications, projects, and articles on Arabic education.",
    images: [
      {
        url: "/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Ade Halim Alfajri Portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Ade Halim Alfajri | Arabic Education Student & Researcher",
    description:
      "Personal portfolio showcasing academic research, publications, and projects.",
    images: ["/images/og-image.jpg"],
    creator: "@adehalimalfajri",
  },
  verification: {
    google: "your-google-verification-code",
  },
  alternates: {
    canonical: "https://adehalimalfajri.com",
    languages: {
      "id-ID": "https://adehalimalfajri.com/id",
      "en-US": "https://adehalimalfajri.com/en",
      "ar-SA": "https://adehalimalfajri.com/ar",
    },
  },
  category: "Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="id"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
      </head>
      <body className="min-h-full flex flex-col">
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
