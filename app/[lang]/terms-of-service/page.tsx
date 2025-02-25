import { getDictionary } from "@/lib/getDictionary";
import { Metadata } from "next";
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
  return {
    alternates: generateHreflang(lang, "terms-of-service"),
  };
}

export default async function Terms({
  params: { lang },
}: {
  params: { lang: string };
}) {
  const dict = await getDictionary(lang);

  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <h1 className="text-4xl font-bold mb-6 text-center">
        {dict.termsPage.h1}
      </h1>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">
          {dict.termsPage.h2Intro}
        </h2>
        <p className="text-gray-700 mb-4">{dict.termsPage.pIntro}</p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">
          {dict.termsPage.h2License}
        </h2>
        <p className="text-gray-700 mb-4">{dict.termsPage.pLicense1}</p>
        <ul className="list-disc pl-6 mb-4 text-gray-700">
          <li>{dict.termsPage.licenseList1}</li>
          <li>{dict.termsPage.licenseList2}</li>
          <li>{dict.termsPage.licenseList3}</li>
          <li>{dict.termsPage.licenseList4}</li>
          <li>{dict.termsPage.licenseList5}</li>
        </ul>
        <p className="text-gray-700 mb-4">{dict.termsPage.pLicense2}</p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">
          {dict.termsPage.h2Disclaimer}
        </h2>
        <p className="text-gray-700 mb-4">{dict.termsPage.pDisclaimer}</p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">
          {dict.termsPage.h2Limitations}
        </h2>
        <p className="text-gray-700 mb-4">{dict.termsPage.pLimitations}</p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">
          {dict.termsPage.h2Accuracy}
        </h2>
        <p className="text-gray-700 mb-4">{dict.termsPage.pAccuracy}</p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">
          {dict.termsPage.h2Links}
        </h2>
        <p className="text-gray-700 mb-4">{dict.termsPage.pLinks}</p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">
          {dict.termsPage.h2Modifications}
        </h2>
        <p className="text-gray-700 mb-4">{dict.termsPage.pModifications}</p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">
          {dict.termsPage.h2GoverningLaw}
        </h2>
        <p className="text-gray-700 mb-4">{dict.termsPage.pGoverningLaw}</p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">
          {dict.termsPage.h2Contact}
        </h2>
        <p className="text-gray-700 mb-4">{dict.termsPage.pContact}</p>
      </section>
    </div>
  );
}
