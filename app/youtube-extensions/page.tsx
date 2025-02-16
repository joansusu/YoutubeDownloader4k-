import { Video, Film, Youtube, Image } from "lucide-react"
import Link from "next/link"
import { FeaturedTools } from "@/components/FeaturedTools"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Card, CardContent } from "@/components/ui/card"
import { Quote } from "lucide-react"
import { Download, Monitor, Zap, Shield, Users, PlayCircle, Clock, Laptop } from "lucide-react"
import { featuredTools } from "@/lib/featuredTools";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "Best YouTube Extensions - Enhance Your YouTube Experience",
  description:
  "Explore the best YouTube extensions with our comprehensive navigation guide. Enhance your YouTube experience with powerful tools. No registration required, free to use, and compatible with all browsers. Start enhancing now!"
};


const features = [
  {
    title: "Youtube to Mp3",
    description: "Convert and download Youtube to mp3 format",
    icon: Video,
    href: "#",
  },
  {
    title: "Youtube to Mp4",
    description: "Transform Youtube to MP4 files",
    icon: Film,
    href: "#",
  },
  {
    title: "Youtube Extensions",
    description: "best youtube extensions, youtube video downloader extensions",
    icon: Youtube,
    href: "#",
  },
  {
    title: "Youtube Shorts Downloader",
    description: "Download Youtube video in high resolution",
    icon: Image,
    href: "#",
  },
]

const yExtenSites = featuredTools.filter((site) =>
  site.tag.includes("youtube extensions")
);

export default function Home() {
 
  const description =
    "Discover our handpicked selection of the best Youtube video downloaders and converters";

  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-blue-50 to-white">
        <div className="container mx-auto px-4 py-16">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl font-bold mb-10">Best YouTube Extensions </h1>

            <p className="text-0.5xl text-gray-600 mb-1">
            Transform your YouTube experience with our expertly curated selection of YouTube extensions. As a dedicated navigation site for YouTube download tools, we guide you to the best and most reliable browser extensions that enhance your YouTube usage effortlessly. Whether you're a content creator, video enthusiast, or someone who loves optimizing their YouTube interactions, our navigation site helps you find the perfect tools to meet your needs with precision and ease.
            </p>
          </div>
        </div>
      </section>

      {/* Featured Tools Section */}
      <FeaturedTools featuredTools={yExtenSites} description={description} />


      {/* <section className="space-y-8">
        <h2 className="text-3xl font-bold text-center">Technical Specifications</h2>
        <div className="max-w-2xl mx-auto grid gap-6">
          <div className="grid grid-cols-2 gap-4 p-6 rounded-lg border">
            <div className="font-semibold">Resolution Support</div>
            <div className="text-gray-600">1080p, 2K, 4K, 8K</div>
          </div>
          <div className="grid grid-cols-2 gap-4 p-6 rounded-lg border">
            <div className="font-semibold">File Formats</div>
            <div className="text-gray-600">MP4, MP3, M4A, and more</div>
          </div>
          <div className="grid grid-cols-2 gap-4 p-6 rounded-lg border">
            <div className="font-semibold">Compatibility</div>
            <div className="text-gray-600">Windows, macOS, Android, iOS</div>
          </div>
          <div className="grid grid-cols-2 gap-4 p-6 rounded-lg border">
            <div className="font-semibold">Speed</div>
            <div className="text-gray-600">High-speed downloads with no throttling</div>
          </div>
        </div>
      </section> */}



      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
        {/* Why Choose */}
          <section className="bg-gray-50 rounded-lg p-8 mb-1">
            <h2 className="text-3xl font-semibold mb-6 text-center">Why Choose Our Youtube to MP4 Tool Nav?</h2>
            <ul className="space-y-4">
              <li className="flex items-start">
                <span className="flex-shrink-0 w-6 h-6 text-green-500 mr-2">✓</span>
                <span>
                  <strong>Curated Selection:</strong> We handpick the best YouTube downloader tools, ensuring you get reliable and efficient downloads every time.
                </span>
              </li>
              <li className="flex items-start">
                <span className="flex-shrink-0 w-6 h-6 text-green-500 mr-2">✓</span>
                <span>
                  <strong>Comprehensive Coverage:</strong> Our tools support all types of YouTube content, including videos, shorts, and reels.
                </span>
              </li>
              <li className="flex items-start">
                <span className="flex-shrink-0 w-6 h-6 text-green-500 mr-2">✓</span>
                <span>
                  <strong>Regular Updates:</strong> Our list of downloaders is constantly refreshed to include the latest and most effective tools available.
                </span>
              </li>
              <li className="flex items-start">
                <span className="flex-shrink-0 w-6 h-6 text-green-500 mr-2">✓</span>
                <span>
                  <strong>Free Access:</strong> No registration needed - start converting Youtube to MP4 now!
                </span>
              </li>
              <li className="flex items-start">
                <span className="flex-shrink-0 w-6 h-6 text-green-500 mr-2">✓</span>
                <span>
                  <strong>Multi-Platform Support:</strong> Works on all devices - mobile, tablet, and desktop
                </span>
              </li>
            </ul>
          </section>
        </div>
      </div>




      <section className="space-y-8">
        <h2 className="text-3xl font-bold text-center">Key Features</h2>
        <div className="flex flex-nowrap overflow-x-auto gap-4 pb-4 -mx-4 px-4 lg:justify-center">
          <div className="flex flex-col items-center p-4 rounded-lg border hover:shadow-lg transition-shadow min-w-[200px] w-[200px]">
            <Monitor className="w-10 h-10 text-[#4285f4] mb-2" />
            <h3 className="font-semibold text-lg text-center mb-2">4K Ultra HD Quality</h3>
            <p className="text-sm text-gray-600 text-center">
              Download YouTube videos in breathtaking 4K resolution.
            </p>
          </div>
          <div className="flex flex-col items-center p-4 rounded-lg border hover:shadow-lg transition-shadow min-w-[200px] w-[200px]">
            <Zap className="w-10 h-10 text-[#4285f4] mb-2" />
            <h3 className="font-semibold text-lg text-center mb-2">Fast and Easy Downloads</h3>
            <p className="text-sm text-gray-600 text-center">Enjoy seamless and quick downloads with our tools.</p>
          </div>
          <div className="flex flex-col items-center p-4 rounded-lg border hover:shadow-lg transition-shadow min-w-[200px] w-[200px]">
            <Laptop className="w-10 h-10 text-[#4285f4] mb-2" />
            <h3 className="font-semibold text-lg text-center mb-2">Multi-Platform Support</h3>
            <p className="text-sm text-gray-600 text-center">
              Compatible with all devices. Download anytime, anywhere.
            </p>
          </div>
          <div className="flex flex-col items-center p-4 rounded-lg border hover:shadow-lg transition-shadow min-w-[200px] w-[200px]">
            <Shield className="w-10 h-10 text-[#4285f4] mb-2" />
            <h3 className="font-semibold text-lg text-center mb-2">No Ads or Watermarks</h3>
            <p className="text-sm text-gray-600 text-center">
              Experience uninterrupted downloads without annoying ads.
            </p>
          </div>
          <div className="flex flex-col items-center p-4 rounded-lg border hover:shadow-lg transition-shadow min-w-[200px] w-[200px]">
            <Users className="w-10 h-10 text-[#4285f4] mb-2" />
            <h3 className="font-semibold text-lg text-center mb-2">Free, No Registration</h3>
            <p className="text-sm text-gray-600 text-center">
              Access all features without sign-ups or subscriptions.
            </p>
          </div>
        </div>
      </section>



      <section className="space-y-8 bg-gray-50 py-12 -mx-4 px-4">
        <h2 className="text-3xl font-bold text-center">Benefits</h2>
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <div className="space-y-4">
            <PlayCircle className="w-8 h-8 text-[#4285f4]" />
            <h3 className="font-semibold text-xl">High-Quality Viewing</h3>
            <p className="text-gray-600">
              Relive your favorite YouTube moments in crystal-clear 4K resolution, perfect for large screens and
              high-definition displays.
            </p>
          </div>
          <div className="space-y-4">
            <Users className="w-8 h-8 text-[#4285f4]" />
            <h3 className="font-semibold text-xl">User-Friendly Interface</h3>
            <p className="text-gray-600">
              Our curated tools feature intuitive interfaces that make downloading videos a breeze, even for
              beginners.
            </p>
          </div>
          <div className="space-y-4">
            <Download className="w-8 h-8 text-[#4285f4]" />
            <h3 className="font-semibold text-xl">Versatile Formats</h3>
            <p className="text-gray-600">
              Download videos in various formats, including MP4, ensuring compatibility with all your devices.
            </p>
          </div>
          <div className="space-y-4">
            <Clock className="w-8 h-8 text-[#4285f4]" />
            <h3 className="font-semibold text-xl">Time-Saving</h3>
            <p className="text-gray-600">
              Quickly download entire playlists or multiple videos at once, saving you valuable time.
            </p>
          </div>
        </div>
      </section>



      {/* Main Content Container */}
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          {/* Our Services Section */}






          <section className="mb-16">
            <h2 className="text-3xl font-semibold mb-8 text-center">Featured Youtube to MP4 Tool Categories</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {features.map((feature) => (
                <Link
                  key={feature.title}
                  href={feature.href}
                  className="p-6 border rounded-lg hover:shadow-lg transition-shadow"
                >
                  <feature.icon className="w-12 h-12 mx-auto mb-4 text-blue-600" />
                  <h3 className="text-xl font-semibold mb-2 text-center">{feature.title}</h3>
                  <p className="text-gray-600 text-center">{feature.description}</p>
                </Link>
              ))}
            </div>
          </section>



          <section className="mb-16">
            <h2 className="text-3xl font-semibold mb-6 text-center">How to Convert Youtube to MP4</h2>
            <ol className="space-y-4">
              <li className="flex items-start">
                <span className="flex-shrink-0 w-8 h-8 rounded-full bg-blue-600 text-white flex items-center justify-center mr-4">
                  1
                </span>
                <div>
                  <h3 className="font-semibold mb-1">Browse</h3>
                  <p className="text-gray-600">
                    Browse our list of Youtube to MP4 downloader tools
                  </p>

                </div>
              </li>
              <li className="flex items-start">
                <span className="flex-shrink-0 w-8 h-8 rounded-full bg-blue-600 text-white flex items-center justify-center mr-4">
                  2
                </span>
                <div>
                  <h3 className="font-semibold mb-1">Read</h3>
                  <p className="text-gray-600">
                    Read descriptions and user ratings of each Youtube video converter
                  </p>
                </div>
              </li>
              <li className="flex items-start">
                <span className="flex-shrink-0 w-8 h-8 rounded-full bg-blue-600 text-white flex items-center justify-center mr-4">
                  3
                </span>
                <div>
                  <h3 className="font-semibold mb-1">Choose</h3>
                  <p className="text-gray-600">
                    Choose your preferred Youtube to MP4 tool

                  </p>
                </div>
              </li>
              <li className="flex items-start">
                <span className="flex-shrink-0 w-8 h-8 rounded-full bg-blue-600 text-white flex items-center justify-center mr-4">
                  4
                </span>
                <div>
                  <h3 className="font-semibold mb-1">Converting</h3>
                  <p className="text-gray-600">
                    Follow our link to start downloading and converting Youtube videos to MP4
                  </p>
                </div>
              </li>
            </ol>
          </section>

          {/* Testimonials Section */}
          <section className="text-center mb-20">
            <h2 className="text-3xl font-bold mb-12">What Our Users Say</h2>
            <div className="grid md:grid-cols-3 gap-6">
              {[
                {
                  quote: "I found the perfect Youtube to MP4 converter in minutes thanks to Youtube to MP4 Nav!",
                  author: "Mark R.",
                },
                {
                  quote:
                    "This site saved me hours of searching. The Youtube video downloaders here are reliable and fast!",
                  author: "Emily S.",
                },
                {
                  quote:
                    "As a content creator, I rely on InstaToolNav for all my Youtube to MP4 conversion needs. It's a game-changer!",
                  author: "Alex T.",
                },
              ].map((testimonial, i) => (
                <Card key={i} className="text-left">
                  <CardContent className="pt-6">
                    <Quote className="w-8 h-8 text-[#4285F4] mb-4" />
                    <p className="text-gray-700 mb-4">{testimonial.quote}</p>
                    <p className="font-semibold text-[#4285F4]">- {testimonial.author}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>

          {/* FAQ Section */}
          <section className="max-w-3xl mx-auto mb-20">
            <h2 className="text-3xl font-bold text-center mb-12">Frequently Asked Questions</h2>
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="item-1">
                <AccordionTrigger>Are these Youtube to MP4 tools safe?</AccordionTrigger>
                <AccordionContent>We vet all tools for safety, but always use caution when downloading.</AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-2">
                <AccordionTrigger>Do I need to pay for these Youtube video converters?</AccordionTrigger>
                <AccordionContent>Many Youtube to MP4 tools are free, but some offer premium features.</AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-3">
                <AccordionTrigger>How often do you update the Youtube to MP4 tool list?</AccordionTrigger>
                <AccordionContent>
                  We review and update our list weekly to ensure all Youtube video downloaders are functional.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </section>


          <section className="text-center">
            <h2 className="text-3xl font-semibold mb-16">Explore Youtube to MP4 Tools Now!</h2>
            <p className="text-0.1xl text-gray-600 mb-0">
              Remember: Always respect copyright laws when converting Youtube videos to MP4.
            </p>
          </section>

        </div>
      </div>
    </>
  )
}

