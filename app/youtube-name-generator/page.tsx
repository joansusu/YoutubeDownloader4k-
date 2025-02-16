import { YoutubeNameGenerator } from '@/components/YoutubeNameGenerator';
import { Youtube } from 'lucide-react';
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Free YouTube Name Generator - YoutubeDownloader4k",
  description: "Create a standout YouTube name with our free generator. Get fresh, unique ideas and make your channel unforgettable.",
  alternates: {
    canonical: "https://youtubedownloader4k.com/youtube-name-generator",
  },
};

export default function YoutubePage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-red-50 to-orange-50">
      <div className="container max-w-4xl mx-auto px-4 py-12">
        <div className="text-center mb-12">
          <div className="flex items-center justify-center mb-6">
            <Youtube className="w-16 h-16 text-red-500" />
          </div>
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            YouTube Channel Name Generator
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            Create unique and catchy YouTube channel names in seconds
          </p>
        </div>

        <YoutubeNameGenerator />

        <div className="mt-16 space-y-12">
          <section className="prose max-w-none">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              What is a YouTube Channel Name Generator?
            </h2>
            <p className="text-gray-600 leading-relaxed">
              A YouTube channel name generator is a tool that helps content creators find the perfect
              name for their channel. It combines your input with various elements like prefixes,
              suffixes, and category-specific terms to generate unique channel names that reflect
              your content style and niche.
            </p>
          </section>

          <section className="prose max-w-none">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              How Does Our Channel Name Generator Work?
            </h2>
            <div className="space-y-4 text-gray-600">
              <p className="leading-relaxed">
                Our YouTube channel name generator uses smart algorithms to create unique name
                suggestions based on your preferences:
              </p>
              <ol className="list-decimal pl-6 space-y-2">
                <li>Enter keywords that represent your content or brand</li>
                <li>Choose your content category (Gaming, Tech, Vlog, etc.)</li>
                <li>Decide whether to include numbers in your channel name</li>
                <li>Get instant channel name suggestions that match your style</li>
              </ol>
              <p className="leading-relaxed">
                Each generated name is crafted to be memorable and relevant to your content niche,
                helping you stand out on YouTube.
              </p>
            </div>
          </section>

          <section className="prose max-w-none">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Why Use Our YouTube Channel Name Generator?
            </h2>
            <div className="grid gap-6 md:grid-cols-2">
              <div className="space-y-2">
                <h3 className="text-xl font-semibold text-gray-800">Stand Out</h3>
                <p className="text-gray-600">
                  Get unique channel names that help you stand out from the millions of other
                  YouTube creators.
                </p>
              </div>
              <div className="space-y-2">
                <h3 className="text-xl font-semibold text-gray-800">Niche-Focused</h3>
                <p className="text-gray-600">
                  Generate names that are relevant to your content category and target audience.
                </p>
              </div>
              <div className="space-y-2">
                <h3 className="text-xl font-semibold text-gray-800">Save Time</h3>
                <p className="text-gray-600">
                  Instead of brainstorming for hours, get instant channel name ideas that you can
                  use right away.
                </p>
              </div>
              <div className="space-y-2">
                <h3 className="text-xl font-semibold text-gray-800">Be Professional</h3>
                <p className="text-gray-600">
                  Create a channel name that looks professional and helps build your brand on
                  YouTube.
                </p>
              </div>
            </div>
          </section>
        </div>
      </div>
    </main>
  );
}