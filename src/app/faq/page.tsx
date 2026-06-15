import type { Metadata } from "next";
import { faqs } from "@/lib/site";
import { PageHeader, CTABand } from "@/components/Shared";

export const metadata: Metadata = {
  title: "FAQ",
  description:
    "Frequently asked questions about our computer repair services — estimates, turnaround time, warranty, data safety and more.",
};

export default function FaqPage() {
  return (
    <>
      <PageHeader
        title="Frequently asked questions"
        subtitle="Answers to the things customers ask us most. Don't see yours? Just get in touch."
      />

      <section className="mx-auto max-w-3xl px-4 py-16 sm:px-6">
        <div className="divide-y divide-slate-200 rounded-2xl border border-slate-200 bg-white">
          {faqs.map((item) => (
            <details key={item.q} className="group p-6">
              <summary className="flex cursor-pointer list-none items-center justify-between text-base font-semibold text-slate-900">
                {item.q}
                <span className="ml-4 text-brand-600 transition-transform group-open:rotate-45">
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                  >
                    <path d="M12 5v14M5 12h14" />
                  </svg>
                </span>
              </summary>
              <p className="mt-3 text-sm leading-6 text-slate-600">{item.a}</p>
            </details>
          ))}
        </div>
      </section>

      <CTABand />
    </>
  );
}
