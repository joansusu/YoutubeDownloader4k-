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
    name: "Save Insta",
    description: "Instagram Video Downloader, instagram video download mp4, download Insta video mp4, instagram to mp4, instagram to mp4 converter",
    imageUrl: "/instagram to mp4(1).png",
    link: "https://www.save-free.com/video-downloader/",
    tag: "instagram to mp4",
    rating: 4.8
  },
  {
    name: "SaveClip",
    description: "Instagram Video Downloader is an Instagram video downloader, download videos from Instagram (Insta) to PC, tablet, phone (iPhone, Android).",
    imageUrl: "/instagram to mp4(2).png",
    link: "https://saveclip.app/en/download-video-instagram",
    tag: "instagram to mp4",
    rating: 4.7
  },
  {
    name: "FastDl",
    description: "FastDl is an tool to help you with Download Instagram Videos, Reels, Photos, IGTV & Albums. It's easy to use on any device, mobile, tablet, or computer.",
    imageUrl: "/instagram to mp4(3).png",
    link: "https://fastdl.app/en",
    tag: "instagram to mp4",
    rating: 4.7
  },
  {
    name: "INDownloader",
    description: "Download high-quality Instagram videos with our Insta video downloader. Save IG videos to MP4 format for free and anonymously. Easily download video from Instagram or save Insta videos with just one click.",
    imageUrl: "/instagram to mp4(4).png",
    link: "https://indownloader.app/video-downloader",
    tag: "instagram to mp4",
    rating: 4.6
  },
  {
    name: "Snapinsta",
    description: "Instagram Video Download, Photos, Reels, IGTV, and to Mobile and PC, Instagram Downloader (Photo, Video, IGTV) is the Best Free Online Downloader Tool. Easily download Instagram photos, videos, stories, reels (mp4)...",
    imageUrl: "/instagram to mp4(5).png",
    link: "https://snapinst.app/",
    tag: "instagram to mp4",
    rating: 4.8
  },
  {
    name: "SMALL SEO TOOLS",
    description: "Instagram to MP4 converter by SmallSEOTools lets you convert Instagram videos to mp4 format in a few clicks. Try Now!",
    imageUrl: "/instagram to mp4(6).png",
    link: "https://smallseotools.com/instagram-to-mp4/",
    tag: "instagram to mp4",
    rating: 4.6
  },
  {
    name: "Wave.video",
    description: "Instantly download your favorite Instagram videos in MP4 HD quality. Complement your efforts with the best Instagram to MP4 HD video downloader, get started today.",
    imageUrl: "/instagram to mp4(7).png",
    link: "https://wave.video/convert/instagram-to-mp4",
    tag: "instagram to mp4",
    rating: 4.5
  },
  {
    name: "SmoothDownloader",
    description: "Free Instagram Video Downloader Online. Download high quality Instagram video on your Windows PC, Mac, Android Phone, iPhone and tablet.",
    imageUrl: "/instagram to mp4(8).png",
    link: "https://www.smoothdownloader.com/instagram-video-downloader-online/",
    tag: "instagram to mp4",
    rating: 4.7
  },
  {
    name: "InDown.io",
    description: "A free & fast tool to download Instagram video online. Easy to use & provide Instagram video download without any login or signup.",
    imageUrl: "/instagram to mp4(9).png",
    link: "https://indown.io/",
    tag: "instagram to mp4",
    rating: 4.8
  },
  {
    name: "OnlineVideoConverter.pro",
    description: "Enjoy Free Instagram Downloader - an online app for downloading Instagram videos and music. Easily download Instagram Videos, Stories, Reels",
    imageUrl: "/instagram to mp4(10).png",
    link: "https://en4.onlinevideoconverter.pro/13HJ/download-video-instagram",
    tag: "instagram to mp4",
    rating: 4.7
  },
  {
    name: "Capte",
    description: "Download Instagram videos for free. Our ad-free LinkedIn downloader HD offers unparalleled simplicity for saving quality videos. Fast, reliable and easy to use For real.",
    imageUrl: "/instagram to mp4(11).png",
    link: "https://www.getcapte.com/en/tools/instagram-to-mp4",
    tag: "instagram to mp4",
    rating: 4.6
  },
  {
    name: "sssinstagram",
    description: "Instagram Video Download",
    imageUrl: "/instagram to mp4(12).png",
    link: "https://sssinstagram.com/video-downloader",
    tag: "instagram to mp4",
    rating: 4.7
  },
  {
    name: "YT5s",
    description: "Tool to download video from Instagram, allow to convert Instagram to mp4 high quality in 1080p, 2160p, 2k, 4k, 8k on PC, tablet, iPhone, Android.",
    imageUrl: "/instagram to mp4(13).png",
    link: "https://yt5s.io/en/instagram-to-mp4",
    tag: "instagram to mp4",
    rating: 4.6
  }
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
            Discover our handpicked selection of the best Instagram video downloaders and converters
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

