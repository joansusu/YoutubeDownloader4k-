import { Video, Film, Blocks,Download ,UserRoundPen} from "lucide-react";
import Link from "next/link";

const categories = [
  {
    title: "Youtube to MP3",
    description: "Best YouTube to MP3 Converter Tools",
    icon: Video,
    href: "/youtube-to-mp3",
  },
  {
    title: "Youtube to MP4",
    description: "Top YouTube to MP4 Converter Tools",
    icon: Film,
    href: "/youtube-to-mp4",
  },
  {
    title: "Youtube Extensions",
    description: "Best YouTube Extensions - Enhance Your YouTube Experience",
    icon: Blocks,
    href: "/youtube-extensions",
  },
  {
    title: "Youtube Shorts Downloader",
    description: "Best YouTube Shorts Downloader Tools",
    icon: Download,
    href: "/youtube-shorts-downloader",
  },
  {
    title: "Youtube Name Generator",
    description: "Free YouTube Name Generator",
    icon: UserRoundPen,
    href: "/youtube-name-generator",
  },
];

interface FourCategoriesProps {
  excludeWords?: string;
}
export default function FourCategories({ excludeWords }: FourCategoriesProps) {
  return (
    <section className="mb-16">
      <h2 className="text-3xl font-semibold mb-8 text-center">
        Featured Youtube Downloader Tool Categories
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {categories
          .filter((category) => category.title !== excludeWords)
          .map((feature) => (
            <Link
              key={feature.title}
              href={feature.href}
              className="p-6 border rounded-lg hover:shadow-lg transition-shadow">
              <feature.icon className="w-12 h-12 mx-auto mb-4 text-blue-600" />
              <h3 className="text-xl font-semibold mb-2 text-center">
                {feature.title}
              </h3>
              <p className="text-gray-600 text-center">{feature.description}</p>
            </Link>
          ))}
      </div>
    </section>
  );
}
