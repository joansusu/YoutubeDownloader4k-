import { Video, Film, Youtube, Image } from "lucide-react"
import Link from "next/link"
import { FeaturedTools } from "@/components/featured-tools"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Card, CardContent } from "@/components/ui/card"
import { Quote } from "lucide-react"

export default function Home() {
  const features = [
    {
      title: "YoutubeDownloader4k",
      description: "Convert and download YoutubeDownloader4k format",
      icon: Video,
      href: "#",
    },
    {
      title: "YoutubeDownloader4k",
      description: "Transform Youtube Reels into downloadable MP4 files",
      icon: Film,
      href: "#",
    },
    {
      title: "Youtube Stories to MP4",
      description: "Save Youtube Stories as MP4 videos easily",
      icon: Youtube,
      href: "#",
    },
    {
      title: "Youtube Photos",
      description: "Download Youtube photos in high resolution",
      icon: Image,
      href: "#",
    },
  ]

  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-blue-50 to-white">
        <div className="container mx-auto px-4 py-16">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl font-bold mb-10">Youtube Downloader 4k Tools Nav</h1>
            <h2 className="text-2xl font-bold mb-6">Convert Youtube Videos to MP4 with Ease</h2>
            <p className="text-0.5xl text-gray-600 mb-1">
              Welcome to Youtube Downloader 4k Nav - your one-stop resource for finding the best Youtube to MP4 converters and downloaders. Whether you're looking to save Youtube videos or convert Youtube content to MP4, we've got you covered!
            </p>
          </div>
        </div>
      </section>

      {/* Featured Tools Section */}
      <FeaturedTools />

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

          <section className="bg-gray-50 rounded-lg p-8 mb-16">
            <h2 className="text-3xl font-semibold mb-6 text-center">Why Choose Our Youtube to MP4 Tool Nav?</h2>
            <ul className="space-y-4">
              <li className="flex items-start">
                <span className="flex-shrink-0 w-6 h-6 text-green-500 mr-2">✓</span>
                <span>
                  <strong>Curated Selection:</strong> Handpicked top Youtube to MP4 converter tools for you.
                </span>
              </li>
              <li className="flex items-start">
                <span className="flex-shrink-0 w-6 h-6 text-green-500 mr-2">✓</span>
                <span>
                  <strong>Comprehensive Coverage:</strong> Tools for all Youtube content: videos, Stories, and Reels.
                </span>
              </li>
              <li className="flex items-start">
                <span className="flex-shrink-0 w-6 h-6 text-green-500 mr-2">✓</span>
                <span>
                  <strong>Regular Updates:</strong> Our Youtube video downloader list is constantly refreshed.
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

