import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const siteUrl = "https://sapienzasystems.com";

export const metadata: Metadata = {
  title: {
    default: "Sapienza Systems | Operational Systems Consulting",
    template: "%s | Sapienza Systems",
  },
  description:
    "Sapienza Systems helps hospitality and technical teams run smarter through better workflow, documentation, training, and execution. Founded by Thomas Sapienza.",
  metadataBase: new URL(siteUrl),
  openGraph: {
    title: "Sapienza Systems | Operational Systems Consulting",
    description:
      "Sapienza Systems helps hospitality and technical teams run smarter through better workflow, documentation, training, and execution. Founded by Thomas Sapienza.",
    url: siteUrl,
    siteName: "Sapienza Systems",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Sapienza Systems | Operational Systems Consulting",
    description:
      "Sapienza Systems helps hospitality and technical teams run smarter through better workflow, documentation, training, and execution. Founded by Thomas Sapienza.",
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
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <Nav />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
