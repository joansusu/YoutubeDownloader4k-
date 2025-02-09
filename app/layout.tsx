import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import type React from "react"
import { GoogleAnalytics } from "@next/third-parties/google";

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Instagram to MP4 Downloader Tools | Best Ways to Convert Instagram Videos",
  description: "Discover top Instagram to MP4 converter tools. Our curated list helps you easily download and convert Instagram videos to MP4 format. Find the best Instagram video downloaders here!",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} flex flex-col min-h-screen`}>
        <Navigation />
        <main className="flex-grow">{children}</main>
        <Footer />
      </body>
      <GoogleAnalytics gaId="G-SKHS9RZBGR" />
    </html>
  )
}

