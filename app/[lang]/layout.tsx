import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import type React from "react"
import { GoogleAnalytics } from "@next/third-parties/google";
import { getDictionary } from "@/lib/getDictionary"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Youtube Downloader 4k Tools | Best Ways to Convert Youtube Videos",
  description: "Discover top Youtube Downloader 4k tools. Our curated list helps you easily download and convert Youtube videos to MP4/MP3 format. Find the best Youtube video downloaders here!",
}

export default async function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { lang: string };
}) {
  const dict = await getDictionary(params.lang);
  return (
    <html lang={params.lang}>
      <script async={true} data-cfasync="false" src="//pl26309251.effectiveratecpm.com/ce09d59ccc49b74e4737407b7f4fafeb/invoke.js"></script>
      <body className={`${inter.className} flex flex-col min-h-screen`}>
        <Navigation currentLang={params.lang} dict={dict} />
        <div id="container-ce09d59ccc49b74e4737407b7f4fafeb"></div>
        <main className="flex-grow">{children}</main>
        <div id="container-ce09d59ccc49b74e4737407b7f4fafeb"></div>
        <Footer currentLang={params.lang} dict={dict} />
      </body>
      <GoogleAnalytics gaId="G-RXQ68911GG" />
    </html>
  )
}

