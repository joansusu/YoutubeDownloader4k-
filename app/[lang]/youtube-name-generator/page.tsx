import { YoutubeNameGenerator } from "@/components/YoutubeNameGenerator";
import { Youtube } from "lucide-react";
import type { Metadata } from "next";
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
    title: dict.genPage.title,
    description: dict.genPage.description,
    alternates: generateHreflang(lang, "youtube-name-generator"),
  };
}

export default async function GenPage({
  params: { lang },
}: {
  params: { lang: string };
}) {
  const dict = await getDictionary(lang);
  return (
    <main className="min-h-screen bg-gradient-to-b from-red-50 to-orange-50">
      <div className="container max-w-4xl mx-auto px-4 py-12">
        <div className="text-center mb-12">
          <div className="flex items-center justify-center mb-6">
            <Youtube className="w-16 h-16 text-red-500" />
          </div>
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            {dict.genPage.h1}
          </h1>
          <p className="text-xl text-gray-600 mb-8">{dict.genPage.p1}</p>
        </div>

        <YoutubeNameGenerator />

        <div className="mt-16 space-y-12">
          <section className="prose max-w-none">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              {dict.genPage.h2WhatIs}
            </h2>
            <p className="text-gray-600 leading-relaxed">
              {dict.genPage.pWhatIs}
            </p>
          </section>

          <section className="prose max-w-none">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              {dict.genPage.h2HowDoes}
            </h2>
            <div className="space-y-4 text-gray-600">
              <p className="leading-relaxed">{dict.genPage.pHowDoesIntro}</p>
              <ol className="list-decimal pl-6 space-y-2">
                <li>{dict.genPage.howDoesStep1}</li>
                <li>{dict.genPage.howDoesStep2}</li>
                <li>{dict.genPage.howDoesStep3}</li>
                <li>{dict.genPage.howDoesStep4}</li>
              </ol>
              <p className="leading-relaxed">{dict.genPage.pHowDoesOutro}</p>
            </div>
          </section>

          <section className="prose max-w-none">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              {dict.genPage.h2WhyUse}
            </h2>
            <div className="grid gap-6 md:grid-cols-2">
              <div className="space-y-2">
                <h3 className="text-xl font-semibold text-gray-800">
                  {dict.genPage.whyUse1Title}
                </h3>
                <p className="text-gray-600">{dict.genPage.whyUse1Desc}</p>
              </div>
              <div className="space-y-2">
                <h3 className="text-xl font-semibold text-gray-800">
                  {dict.genPage.whyUse2Title}
                </h3>
                <p className="text-gray-600">{dict.genPage.whyUse2Desc}</p>
              </div>
              <div className="space-y-2">
                <h3 className="text-xl font-semibold text-gray-800">
                  {dict.genPage.whyUse3Title}
                </h3>
                <p className="text-gray-600">{dict.genPage.whyUse3Desc}</p>
              </div>
              <div className="space-y-2">
                <h3 className="text-xl font-semibold text-gray-800">
                  {dict.genPage.whyUse4Title}
                </h3>
                <p className="text-gray-600">{dict.genPage.whyUse4Desc}</p>
              </div>
            </div>
          </section>
        </div>
      </div>
    </main>
  );
}
