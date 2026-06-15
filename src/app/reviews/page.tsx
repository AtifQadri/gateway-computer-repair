import type { Metadata } from "next";
import { testimonials, site } from "@/lib/site";
import { PageHeader, CTABand } from "@/components/Shared";
import { StarIcon } from "@/components/Icons";

export const metadata: Metadata = {
  title: "Reviews",
  description: `See what customers say about ${site.name}.`,
};

export default function ReviewsPage() {
  return (
    <>
      <PageHeader
        title="Customer reviews"
        subtitle="We're proud of the work we do — here's what our customers think."
      />

      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
        <div className="grid gap-6 md:grid-cols-3">
          {testimonials.map((t) => (
            <figure
              key={t.name}
              className="flex flex-col rounded-2xl border border-slate-200 bg-white p-6 shadow-sm"
            >
              <div className="flex gap-0.5 text-amber-400">
                {Array.from({ length: 5 }).map((_, i) => (
                  <StarIcon key={i} className="h-5 w-5" />
                ))}
              </div>
              <blockquote className="mt-4 flex-1 text-slate-700">
                &ldquo;{t.quote}&rdquo;
              </blockquote>
              <figcaption className="mt-4 text-sm font-semibold text-slate-900">
                {t.name}
                <span className="font-normal text-slate-500">
                  {" "}
                  · {t.detail}
                </span>
              </figcaption>
            </figure>
          ))}
        </div>

        <div className="mt-12 rounded-2xl border border-dashed border-slate-300 bg-slate-50 p-8 text-center">
          <h2 className="text-xl font-semibold text-slate-900">
            Had a great experience?
          </h2>
          <p className="mx-auto mt-2 max-w-xl text-slate-600">
            We&apos;d love to hear from you. Leave us a review or get in touch —
            your feedback helps other customers find trustworthy repair help.
          </p>
        </div>
      </section>

      <CTABand />
    </>
  );
}
