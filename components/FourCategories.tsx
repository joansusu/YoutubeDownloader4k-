import { Video, Film, Blocks,Download ,UserRoundPen} from "lucide-react";
import Link from "next/link";

interface FourCategoriesProps {
  excludeWords?: string;
  currentLang: string;
  dict: any
}
export default function FourCategories({ excludeWords,currentLang,dict }: FourCategoriesProps) {
  const categories = [
    {
      title: `${dict.common.fcg1}`,
      description: `${dict.common.fcg1d}`,
      icon: Video,
      href: `/${currentLang}/youtube-to-mp3`,
    },
    {
      title: `${dict.common.fcg2}`,
      description: `${dict.common.fcg2d}`,
      icon: Film,
      href: `/${currentLang}/youtube-to-mp4`,
    },
    {
      title: `${dict.common.fcg3}`,
      description: `${dict.common.fcg3d}`,
      icon: Blocks,
      href: `/${currentLang}/youtube-extensions`,
    },
    {
      title: `${dict.common.fcg4}`,
      description: `${dict.common.fcg4d}`,
      icon: Download,
      href: `/${currentLang}/youtube-shorts-downloader`,
    },
    {
      title: `${dict.common.fcg5}`,
      description: `${dict.common.fcg5d}`,
      icon: UserRoundPen,
      href: `/${currentLang}/youtube-name-generator`,
    },
  ];
  return (
    <section className="mb-16">
      <h2 className="text-3xl font-semibold mb-8 text-center">
      {dict.common.h21}
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
