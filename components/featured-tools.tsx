"use client"

import Image from "next/image"
import Link from "next/link"
import { Star, ChevronRight } from "lucide-react"
import { useState } from "react"

interface FeaturedTool {
  name: string
  description: string
  imageUrl: string
  link: string
  tag: string
  rating?: number
}

const featuredTools: FeaturedTool[] = [


  {
    name: "Y2Down",
    description: "Y2Down is an online YouTube video downloader that lets you download videos in MP4 format at resolutions such as 1080p, 2k, 4k, 8k, and more for free.",
    imageUrl: "/youtube downloader 4k(1).png",
    link: "https://www.y2down.app/",
    tag: "youtube downloader 4k",
    rating: 4.8
  },


  {
    name: "Ytmp3.so",
    description: "Ytmp3.so helps you download 4K videos without losing their quality. Read on to know more about it.",
    imageUrl: "/youtube downloader 4k(2).png",
    link: "https://ytmp3.so/en/youtube-4k-downloader",
    tag: "youtube downloader 4k",
    rating: 4.8
  },


  {
    name: "AISEO",
    description: "Download YouTube videos and shorts in HD with AISEO YouTube Video Downloader. No ads, watermarks, or registration required. Fast, free, and easy!",
    imageUrl: "/youtube downloader 4k(3).png",
    link: "https://app.aiseo.ai/tools/youtube-video-downloader",
    tag: "youtube downloader 4k",
    rating: 4.8
  },


  {
    name: "Y2Meta",
    description: "Y2Meta is a Fast and Free YouTube Downloader that allows you to Download YouTube Videos in HD & UHD, 1080p, 2K, and 4K at the highest speed.",
    imageUrl: "/youtube downloader 4k(4).png",
    link: "https://y2meta.tube/en/",
    tag: "youtube downloader 4k",
    rating: 4.8
  },


  {
    name: "UKC",
    description: "YouTube video downloader Download YouTube videos in 1080p, 4k, and more for free. MP3 M4A ...",
    imageUrl: "/youtube downloader 4k(5).png",
    link: "https://www.ukc.com.np/p/youtube-video-downloader-5.html",
    tag: "youtube downloader 4k",
    rating: 4.8
  },


  {
    name: "Kashmir Pulse",
    description: "Using the free YouTube Video Downloader on The Kashmir Pulse is the quickest and simplest method to download YouTube videos and music in SD, HD & 4K quality.",
    imageUrl: "/youtube downloader 4k(6).png",
    link: "https://kashmirpulse.com/youtube-video-downloader-online",
    tag: "youtube downloader 4k",
    rating: 4.8
  },


  {
    name: "ACETHINKER",
    description: "Download your YouTube videos with the best quality using this amazing YouTube to 4K video downloader with seamless downloading process.",
    imageUrl: "/youtube downloader 4k(7).png",
    link: "https://www.acethinker.com/save-youtube-4k",
    tag: "youtube downloader 4k",
    rating: 4.8
  },


  {
    name: "Y2DOWN",
    description: "Baixe e converta seus vídeos favoritos do YouTube na resolução de 1080p, 1440p, 4k, e 8k. É gratuito, rápido e simples. Sem Anúncios, Sem Limites.",
    imageUrl: "/youtube downloader 4k(8).png",
    link: "https://y2down.cc/pt/",
    tag: "youtube downloader 4k",
    rating: 4.8
  },


  {
    name: "SocialPlug",
    description: "Download Youtube videos for free with SocialPlug’s Youtube Video Downloader. Choose from lots of resolution and format options, no strings attached.",
    imageUrl: "/youtube video downloader (2).png",
    link: "https://www.socialplug.io/free-tools/youtube-video-downloader",
    tag: "youtube downloader 4k",
    rating: 4.8
  },


  {
    name: "YT1D",
    description: "Yt1d is a safe,easy,fast YouTube video online downloader,compatible with mac, Android, and Windows,allows you to download high-quality(HD,720p,1080p,4k) Youtube videos and Shorts to MP3,MP4 and other formats for free",
    imageUrl: "/youtube video downloader (3).png",
    link: "https://yt1d.com/en136/",
    tag: "youtube downloader 4k",
    rating: 4.8
  },



  {
    name: "Zeemo AI",
    description: "The best YouTube video downloader ever! Download YouTube videos online for free, and you can also edit videos and subtitles on Zeemo’s workspace directly.",
    imageUrl: "/youtube video downloader (4).png",
    link: "https://zeemo.ai/tools/youtube-video-downloader",
    tag: "youtube downloader 4k",
    rating: 4.8
  },



  {
    name: "Transkriptor",
    description: "Download YouTube videos to your device easy, fast, and for free. Download YouTube videos as MP4 with Transkriptor now!",
    imageUrl: "/youtube video downloader (5).png",
    link: "https://transkriptor.com/youtube-video-downloader/",
    tag: "youtube downloader 4k",
    rating: 4.8
  },



  {
    name: "Ummy",
    description: "Ummy Online is the best free web video downloader service. Just copy the url of the video from the Internet and paste it into the Ummy Video Downloader tab to start a download!",
    imageUrl: "/youtube video downloader (7).png",
    link: "https://ummy.net/en104vO/",
    tag: "youtube downloader 4k",
    rating: 4.8
  },



  {
    name: "HireQuotient",
    description: "Download videos from YouTube quickly and easily with our YouTube Video Downloader. Get started now and enjoy your favorite videos offline!",
    imageUrl: "/youtube video downloader (8).png",
    link: "https://www.hirequotient.com/youtube-video-downloader",
    tag: "youtube downloader 4k",
    rating: 4.8
  },



  {
    name: "Y2Mate",
    description: "Y2Mate is the fastest web app to download Youtube videos for free. Easily Convert youtube videos to mp3 and mp4 and save them to your PC, Mobile, and tablets.",
    imageUrl: "/youtube video downloader (9).png",
    link: "https://en.y2mate.is/x105/",
    tag: "youtube downloader 4k",
    rating: 4.8
  },



  {
    name: "Keepvid",
    description: "Keepvid helps download online videos from many sites. Best Youtube downloader, Keepvid is free, fast & secure. Youtube to mp3 converter included.",
    imageUrl: "/youtube video downloader (10).png",
    link: "https://ww12.keepvid.works/en/",
    tag: "youtube downloader 4k",
    rating: 4.8
  },

  // Add more tools here...
]

export function FeaturedTools() {
  const [showAll, setShowAll] = useState(false)
  const displayedTools = showAll ? featuredTools : featuredTools.slice(0, 10)

  return (
    <section className="py-8 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">Featured Tools</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Discover our handpicked selection of the best Youtube video downloaders and converters
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6 max-w-7xl mx-auto">
          {displayedTools.map((tool) => (
            <Link
              key={tool.name}
              href={tool.link}
              target="_blank"
              rel="noopener noreferrer"
              className="group bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
            >
              <div className="relative h-40">
                <Image
                  src={tool.imageUrl || "/placeholder.svg"}
                  alt={tool.name}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
              <div className="p-4">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="font-bold text-lg">{tool.name}</h3>
                  {tool.rating && (
                    <div className="flex items-center bg-green-50 px-2 py-1 rounded-full">
                      <Star className="w-4 h-4 text-yellow-400 fill-current" />
                      <span className="ml-1 text-sm font-medium">{tool.rating}</span>
                    </div>
                  )}
                </div>
                <p className="text-gray-600 text-sm mb-3 line-clamp-2">{tool.description}</p>
                <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-blue-50 text-blue-700">
                  {tool.tag}
                </span>
              </div>
            </Link>
          ))}
        </div>

        {featuredTools.length > 10 && (
          <div className="text-center mt-12">
            <button
              onClick={() => setShowAll(!showAll)}
              className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
            >
              {showAll ? "Show Less" : "View More"}
              <ChevronRight className="ml-2 h-5 w-5" />
            </button>
          </div>
        )}
      </div>
    </section>
  )
}

