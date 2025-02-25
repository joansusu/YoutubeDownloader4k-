import { FeaturedTools } from "@/components/FeaturedTools";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Card, CardContent } from "@/components/ui/card";
import { Quote } from "lucide-react";
import {
  Download,
  Monitor,
  Zap,
  Shield,
  Users,
  PlayCircle,
  Clock,
  Laptop,
} from "lucide-react";
import { featuredTools } from "@/lib/featuredTools";
import type { Metadata } from "next";
import FourCategories from "@/components/FourCategories";
import { getDictionary } from "@/lib/getDictionary";
import { i18n } from "@/i18n.config";
import { generateHreflang } from "@/lib/generateHreflangs";

export async function generateStaticParams() {
  return i18n.locales.map((lang) => ({
    lang,
  }));
}

export async function generateMetadata({
  params: { lang },
}: {
  params: { lang: string };
}): Promise<Metadata> {
  const dict = await getDictionary(lang);
  return {
    title: dict.mp3Page.title,
    description: dict.mp3Page.description,
    alternates: generateHreflang(lang, "youtube-to-mp3"),
  };
}

const yMP3Sites = featuredTools.filter((site) =>
  site.tag.includes("youtube to mp3")
);

export default async function MP3Page({
  params: { lang },
}: {
  params: { lang: string };
}) {
  const dict = await getDictionary(lang);

  const description =
    "Discover our handpicked selection of the best Youtube video downloaders and converters";

  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-blue-50 to-white">
        <div className="container mx-auto px-4 py-16">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl font-bold mb-10">{dict.mp3Page.h1}</h1>
            <p className="text-0.5xl text-gray-600 mb-1">{dict.mp3Page.p1}</p>
          </div>
        </div>
      </section>

      {/* Featured Tools Section */}
      <FeaturedTools
        dict={dict}
        featuredTools={yMP3Sites}
        description={dict.common.ftdescrip}
      />

      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <section className="bg-gray-50 rounded-lg p-8 mb-1">
            <h2 className="text-3xl font-semibold mb-6 text-center">
              {dict.home.whyChooseTitle}
            </h2>
            <ul className="space-y-4">
              <li className="flex items-start">
                <span className="flex-shrink-0 w-6 h-6 text-green-500 mr-2">
                  ✓
                </span>
                <span
                  dangerouslySetInnerHTML={{ __html: dict.home.whyChoose1 }}
                />
              </li>
              <li className="flex items-start">
                <span className="flex-shrink-0 w-6 h-6 text-green-500 mr-2">
                  ✓
                </span>
                <span
                  dangerouslySetInnerHTML={{ __html: dict.home.whyChoose2 }}
                />
              </li>
              <li className="flex items-start">
                <span className="flex-shrink-0 w-6 h-6 text-green-500 mr-2">
                  ✓
                </span>
                <span
                  dangerouslySetInnerHTML={{ __html: dict.home.whyChoose3 }}
                />
              </li>
              <li className="flex items-start">
                <span className="flex-shrink-0 w-6 h-6 text-green-500 mr-2">
                  ✓
                </span>
                <span
                  dangerouslySetInnerHTML={{ __html: dict.home.whyChoose4 }}
                />
              </li>
              <li className="flex items-start">
                <span className="flex-shrink-0 w-6 h-6 text-green-500 mr-2">
                  ✓
                </span>
                <span
                  dangerouslySetInnerHTML={{ __html: dict.home.whyChoose5 }}
                />
              </li>
            </ul>
          </section>
        </div>
      </div>

      <section className="space-y-8">
        <h2 className="text-3xl font-bold text-center">
          {dict.home.featuresTitle}
        </h2>
        <div className="flex flex-nowrap overflow-x-auto gap-4 pb-4 -mx-4 px-4 lg:justify-center">
          <div className="flex flex-col items-center p-4 rounded-lg border hover:shadow-lg transition-shadow min-w-[200px] w-[200px]">
            <Monitor className="w-10 h-10 text-[#4285f4] mb-2" />
            <h3 className="font-semibold text-lg text-center mb-2">
              {dict.home.feature1Title}
            </h3>
            <p className="text-sm text-gray-600 text-center">
              {dict.home.feature1Desc}
            </p>
          </div>
          <div className="flex flex-col items-center p-4 rounded-lg border hover:shadow-lg transition-shadow min-w-[200px] w-[200px]">
            <Zap className="w-10 h-10 text-[#4285f4] mb-2" />
            <h3 className="font-semibold text-lg text-center mb-2">
              {dict.home.feature2Title}
            </h3>
            <p className="text-sm text-gray-600 text-center">
              {dict.home.feature2Desc}
            </p>
          </div>
          <div className="flex flex-col items-center p-4 rounded-lg border hover:shadow-lg transition-shadow min-w-[200px] w-[200px]">
            <Laptop className="w-10 h-10 text-[#4285f4] mb-2" />
            <h3 className="font-semibold text-lg text-center mb-2">
              {dict.home.feature3Title}
            </h3>
            <p className="text-sm text-gray-600 text-center">
              {dict.home.feature3Desc}
            </p>
          </div>
          <div className="flex flex-col items-center p-4 rounded-lg border hover:shadow-lg transition-shadow min-w-[200px] w-[200px]">
            <Shield className="w-10 h-10 text-[#4285f4] mb-2" />
            <h3 className="font-semibold text-lg text-center mb-2">
              {dict.home.feature4Title}
            </h3>
            <p className="text-sm text-gray-600 text-center">
              {dict.home.feature4Desc}
            </p>
          </div>
          <div className="flex flex-col items-center p-4 rounded-lg border hover:shadow-lg transition-shadow min-w-[200px] w-[200px]">
            <Users className="w-10 h-10 text-[#4285f4] mb-2" />
            <h3 className="font-semibold text-lg text-center mb-2">
              {dict.home.feature5Title}
            </h3>
            <p className="text-sm text-gray-600 text-center">
              {dict.home.feature5Desc}
            </p>
          </div>
        </div>
      </section>

      <section className="space-y-8 bg-gray-50 py-12 -mx-4 px-4">
        <h2 className="text-3xl font-bold text-center">
          {dict.home.benefitsTitle}
        </h2>
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <div className="space-y-4">
            <PlayCircle className="w-8 h-8 text-[#4285f4]" />
            <h3 className="font-semibold text-xl">{dict.home.benefit1Title}</h3>
            <p className="text-gray-600">{dict.home.benefit1Desc}</p>
          </div>
          <div className="space-y-4">
            <Users className="w-8 h-8 text-[#4285f4]" />
            <h3 className="font-semibold text-xl">{dict.home.benefit2Title}</h3>
            <p className="text-gray-600">{dict.home.benefit2Desc}</p>
          </div>
          <div className="space-y-4">
            <Download className="w-8 h-8 text-[#4285f4]" />
            <h3 className="font-semibold text-xl">{dict.home.benefit3Title}</h3>
            <p className="text-gray-600">{dict.home.benefit3Desc}</p>
          </div>
          <div className="space-y-4">
            <Clock className="w-8 h-8 text-[#4285f4]" />
            <h3 className="font-semibold text-xl">{dict.home.benefit4Title}</h3>
            <p className="text-gray-600">{dict.home.benefit4Desc}</p>
          </div>
        </div>
      </section>

      {/* Main Content Container */}
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          {/* Our Services Section */}

          <FourCategories
            excludeWords={dict.common.fcg1}
            currentLang={lang}
            dict={dict}
          />

          <section className="mb-16">
            <h2 className="text-3xl font-semibold mb-6 text-center">
              {dict.home.howToTitle}
            </h2>
            <ol className="space-y-4">
              <li className="flex items-start">
                <span className="flex-shrink-0 w-8 h-8 rounded-full bg-blue-600 text-white flex items-center justify-center mr-4">
                  1
                </span>
                <div>
                  <h3 className="font-semibold mb-1">
                    {dict.home.howToStep1Title}
                  </h3>
                  <p className="text-gray-600">{dict.home.howToStep1Desc}</p>
                </div>
              </li>
              <li className="flex items-start">
                <span className="flex-shrink-0 w-8 h-8 rounded-full bg-blue-600 text-white flex items-center justify-center mr-4">
                  2
                </span>
                <div>
                  <h3 className="font-semibold mb-1">
                    {dict.home.howToStep2Title}
                  </h3>
                  <p className="text-gray-600">{dict.home.howToStep2Desc}</p>
                </div>
              </li>
              <li className="flex items-start">
                <span className="flex-shrink-0 w-8 h-8 rounded-full bg-blue-600 text-white flex items-center justify-center mr-4">
                  3
                </span>
                <div>
                  <h3 className="font-semibold mb-1">
                    {dict.home.howToStep3Title}
                  </h3>
                  <p className="text-gray-600">{dict.home.howToStep3Desc}</p>
                </div>
              </li>
              <li className="flex items-start">
                <span className="flex-shrink-0 w-8 h-8 rounded-full bg-blue-600 text-white flex items-center justify-center mr-4">
                  4
                </span>
                <div>
                  <h3 className="font-semibold mb-1">
                    {dict.home.howToStep4Title}
                  </h3>
                  <p className="text-gray-600">{dict.home.howToStep4Desc}</p>
                </div>
              </li>
            </ol>
          </section>

          <section className="text-center mb-20">
            <h2 className="text-3xl font-bold mb-12">
              {dict.home.testimonialsTitle}
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              <Card>
                <CardContent className="pt-6">
                  <Quote className="w-8 h-8 text-[#4285F4] mb-4" />
                  <p className="text-gray-700 mb-4">{dict.home.testimonial1}</p>
                  <p className="font-semibold text-[#4285F4]">
                    - {dict.home.testimonial1Author}
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="pt-6">
                  <Quote className="w-8 h-8 text-[#4285F4] mb-4" />
                  <p className="text-gray-700 mb-4">{dict.home.testimonial2}</p>
                  <p className="font-semibold text-[#4285F4]">
                    - {dict.home.testimonial2Author}
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="pt-6">
                  <Quote className="w-8 h-8 text-[#4285F4] mb-4" />
                  <p className="text-gray-700 mb-4">{dict.home.testimonial3}</p>
                  <p className="font-semibold text-[#4285F4]">
                    - {dict.home.testimonial3Author}
                  </p>
                </CardContent>
              </Card>
            </div>
          </section>

          <section className="max-w-3xl mx-auto mb-20">
            <h2 className="text-3xl font-bold text-center mb-12">
              {dict.home.faqTitle}
            </h2>
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="item-1">
                <AccordionTrigger>{dict.home.faq1Question}</AccordionTrigger>
                <AccordionContent>{dict.home.faq1Answer}</AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-2">
                <AccordionTrigger>{dict.home.faq2Question}</AccordionTrigger>
                <AccordionContent>{dict.home.faq2Answer}</AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-3">
                <AccordionTrigger>{dict.home.faq3Question}</AccordionTrigger>
                <AccordionContent>{dict.home.faq3Answer}</AccordionContent>
              </AccordionItem>
            </Accordion>
          </section>

          <section className="text-center">
            <h2 className="text-3xl font-semibold mb-16">
              {dict.home.exploreTitle}
            </h2>
            <p className="text-0.1xl text-gray-600 mb-0">
              {dict.home.exploreNote}
            </p>
          </section>
        </div>
      </div>
    </>
  );
}
