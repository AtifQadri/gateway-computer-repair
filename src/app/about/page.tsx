import type { Metadata } from "next";
import { site } from "@/lib/site";
import { PageHeader, CTABand } from "@/components/Shared";
import { CheckIcon } from "@/components/Icons";

export const metadata: Metadata = {
  title: "About",
  description: `Learn about ${site.name} — experienced, friendly computer repair for homes and businesses in ${site.serviceArea}.`,
};

const values = [
  {
    title: "Honest advice",
    text: "We explain the problem in plain language and only recommend what you actually need.",
  },
  {
    title: "Careful work",
    text: "We don't just fix and clean — we vigorously cross-check to make sure the job is done right.",
  },
  {
    title: "Your data matters",
    text: "We treat your files as confidential and back them up before we start whenever possible.",
  },
  {
    title: "Fair pricing",
    text: "Free estimates and upfront quotes, so there are never any surprises on your bill.",
  },
];

export default function AboutPage() {
  return (
    <>
      <PageHeader
        title={`About ${site.name}`}
        subtitle="Experienced, local, and genuinely helpful computer support."
      />

      <section className="mx-auto max-w-3xl px-4 py-16 sm:px-6">
        <div className="space-y-5 text-lg leading-8 text-slate-700">
          <p>
            {site.name} provides reliable computer help and support for
            residential customers and small-to-medium businesses across{" "}
            {site.serviceArea}. From a laptop that won&apos;t start to a full
            office network, we have the experience and the expertise to satisfy
            almost any request.
          </p>
          <p>
            We repair all makes and models of desktops, laptops, notebooks and
            netbooks. We handle hardware upgrades, new installations, virus and
            malware cleanup, data recovery and backup, and we&apos;re{" "}
            <strong>big on networking</strong> — including wireless setup,
            servers, firewalls and VPNs.
          </p>
          <p>
            Most of all, we believe in doing the job properly and treating you
            the way we&apos;d want to be treated: clearly, honestly, and without
            the jargon.
          </p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2">
          {values.map((v) => (
            <div
              key={v.title}
              className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm"
            >
              <div className="flex items-center gap-2">
                <span className="flex h-8 w-8 items-center justify-center rounded-full bg-brand-50 text-brand-600">
                  <CheckIcon className="h-5 w-5" />
                </span>
                <h3 className="text-lg font-semibold text-slate-900">
                  {v.title}
                </h3>
              </div>
              <p className="mt-3 text-sm leading-6 text-slate-600">{v.text}</p>
            </div>
          ))}
        </div>
      </section>

      <CTABand />
    </>
  );
}
