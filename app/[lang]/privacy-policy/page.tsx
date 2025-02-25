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
    alternates: generateHreflang(lang, "privacy-policy"),
  };
}

export default async function Privacy({
  params: { lang },
}: {
  params: { lang: string };
}) {
  const dict = await getDictionary(lang);
  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <h1 className="text-4xl font-bold mb-6 text-center">
        {dict.privacyPage.h1}
      </h1>
      <div className="space-y-6 text-gray-700">
        <p>{dict.privacyPage.pIntro1}</p>
        <p>{dict.privacyPage.pIntro2}</p>

        <h2 className="text-2xl font-semibold mt-8 mb-4">
          {dict.privacyPage.h2Collect}
        </h2>

        <h3 className="text-xl font-semibold mt-6 mb-2">
          {dict.privacyPage.h3Personal}
        </h3>
        <p>{dict.privacyPage.pPersonal}</p>

        <h3 className="text-xl font-semibold mt-6 mb-2">
          {dict.privacyPage.h3NonPersonal}
        </h3>
        <p>{dict.privacyPage.pNonPersonal}</p>

        <h2 className="text-2xl font-semibold mt-8 mb-4">
          {dict.privacyPage.h2Tracking}
        </h2>
        <p>{dict.privacyPage.pTracking1}</p>
        <p className="mt-4">{dict.privacyPage.pTracking2}</p>
        <p className="mt-4">{dict.privacyPage.pTracking3}</p>
        <p className="mt-4">{dict.privacyPage.pTracking4}</p>
        <ul className="list-disc pl-6 mt-2 space-y-2">
          <li
            dangerouslySetInnerHTML={{ __html: dict.privacyPage.trackingList1 }}
          />
          <li
            dangerouslySetInnerHTML={{ __html: dict.privacyPage.trackingList2 }}
          />
          <li
            dangerouslySetInnerHTML={{ __html: dict.privacyPage.trackingList3 }}
          />
          <li
            dangerouslySetInnerHTML={{ __html: dict.privacyPage.trackingList4 }}
          />
          <li
            dangerouslySetInnerHTML={{ __html: dict.privacyPage.trackingList5 }}
          />
        </ul>

        <h2 className="text-2xl font-semibold mt-8 mb-4">
          {dict.privacyPage.h2Use}
        </h2>
        <p>{dict.privacyPage.pUseIntro}</p>
        <ul className="list-disc pl-6 mt-2 space-y-2">
          <li>{dict.privacyPage.useList1}</li>
          <li>{dict.privacyPage.useList2}</li>
          <li>{dict.privacyPage.useList3}</li>
        </ul>

        <h2 className="text-2xl font-semibold mt-8 mb-4">
          {dict.privacyPage.h2Retention}
        </h2>
        <p>{dict.privacyPage.pRetention}</p>

        <h2 className="text-2xl font-semibold mt-8 mb-4">
          {dict.privacyPage.h2Disclosure}
        </h2>
        <ul className="list-disc pl-6 mt-2 space-y-2">
          <li
            dangerouslySetInnerHTML={{
              __html: dict.privacyPage.disclosureList1,
            }}
          />
          <li
            dangerouslySetInnerHTML={{
              __html: dict.privacyPage.disclosureList2,
            }}
          />
          <li
            dangerouslySetInnerHTML={{
              __html: dict.privacyPage.disclosureList3,
            }}
          />
        </ul>

        <h2 className="text-2xl font-semibold mt-8 mb-4">
          {dict.privacyPage.h2Security}
        </h2>
        <p>{dict.privacyPage.pSecurity}</p>

        <h2 className="text-2xl font-semibold mt-8 mb-4">
          {dict.privacyPage.h2Changes}
        </h2>
        <p>{dict.privacyPage.pChanges}</p>

        <h2 className="text-2xl font-semibold mt-8 mb-4">
          {dict.privacyPage.h2Acceptance}
        </h2>
        <p>{dict.privacyPage.pAcceptance}</p>

        <h2 className="text-2xl font-semibold mt-8 mb-4">
          {dict.privacyPage.h2Contact}
        </h2>
        <p>{dict.privacyPage.pContact}</p>
      </div>
    </div>
  );
}
