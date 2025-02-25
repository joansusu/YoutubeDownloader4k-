"use client"

import { useState } from "react"
import Link from "next/link"
import { Menu } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { LanguageSwitcher } from "./LanguageSwitcher"



export function Navigation({ currentLang, dict }: { currentLang: string; dict: any }) {
  const [isOpen, setIsOpen] = useState(false)

  const navItems = [
    { href: `/${currentLang}/youtube-to-mp3`, label: `${dict.nav.n1}` },
    { href: `/${currentLang}/youtube-to-mp4`, label: `${dict.nav.n2}` },
    { href: `/${currentLang}/youtube-extensions`, label: `${dict.nav.n3}` },
    { href: `/${currentLang}/youtube-shorts-downloader`, label: `${dict.nav.n4}` },
    { href: `/${currentLang}/youtube-name-generator`, label: `${dict.nav.n5}` },
  ]

  return (
    <nav className="bg-blue-500 py-4">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          <Link href={`/${currentLang}`} className="text-white text-2xl font-bold">
          YoutubeDownloader4k
          </Link>
          <div className="hidden md:flex space-x-2">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-white hover:bg-blue-600 hover:text-white transition-colors duration-200 ease-in-out rounded-md px-2 py-2 text-sm font-medium flex items-center justify-center text-center"
              >
                {item.label}
              </Link>
            ))}
            <LanguageSwitcher currentLang={currentLang} />
          </div>
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild className="md:hidden">
              <Button variant="ghost" size="icon" className="text-white">
                <Menu className="h-6 w-6" />
                <span className="sr-only">Toggle menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] sm:w-[400px] md:hidden">
              <nav className="flex flex-col space-y-4">
                {navItems.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="text-foreground hover:text-blue-500"
                    onClick={() => setIsOpen(false)}
                  >
                    {item.label}
                  </Link>
                ))}
              </nav>
              <LanguageSwitcher currentLang={currentLang} />
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </nav>
  )
}

