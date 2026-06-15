import type { Metadata } from "next";
import { site } from "@/lib/site";
import { PageHeader } from "@/components/Shared";
import { ContactForm } from "@/components/ContactForm";
import { PhoneIcon, MailIcon, MapPinIcon, ClockIcon } from "@/components/Icons";

export const metadata: Metadata = {
  title: "Contact & Free Quote",
  description: `Contact ${site.name} for a free estimate. Call, email or send us a message and we'll get right back to you.`,
};

const mapQuery = encodeURIComponent(
  `${site.address.line1}, ${site.address.city}, ${site.address.region} ${site.address.postal}`,
);

export default function ContactPage() {
  return (
    <>
      <PageHeader
        title="Get in touch"
        subtitle="Tell us what's going on and we'll get back to you with a free, no-obligation estimate."
      />

      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
        <div className="grid gap-10 lg:grid-cols-5">
          <div className="lg:col-span-3">
            <ContactForm />
          </div>

          <div className="lg:col-span-2">
            <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
              <h2 className="text-lg font-semibold text-slate-900">
                Contact details
              </h2>
              <ul className="mt-4 space-y-4 text-sm">
                <li className="flex items-start gap-3">
                  <PhoneIcon className="mt-0.5 h-5 w-5 text-brand-600" />
                  <div>
                    <div className="font-medium text-slate-900">Phone</div>
                    <a
                      href={`tel:${site.phoneHref}`}
                      className="text-brand-700 hover:underline"
                    >
                      {site.phone}
                    </a>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <MailIcon className="mt-0.5 h-5 w-5 text-brand-600" />
                  <div>
                    <div className="font-medium text-slate-900">Email</div>
                    <a
                      href={`mailto:${site.email}`}
                      className="text-brand-700 hover:underline"
                    >
                      {site.email}
                    </a>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <MapPinIcon className="mt-0.5 h-5 w-5 text-brand-600" />
                  <div>
                    <div className="font-medium text-slate-900">Address</div>
                    <address className="not-italic text-slate-600">
                      {site.address.line1}
                      {site.address.line2 ? `, ${site.address.line2}` : ""}
                      <br />
                      {site.address.city}, {site.address.region}{" "}
                      {site.address.postal}
                    </address>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <ClockIcon className="mt-0.5 h-5 w-5 text-brand-600" />
                  <div>
                    <div className="font-medium text-slate-900">Hours</div>
                    <ul className="text-slate-600">
                      {site.hours.map((h) => (
                        <li key={h.day} className="flex justify-between gap-4">
                          <span>{h.day}</span>
                          <span>{h.time}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </li>
              </ul>
            </div>

            <div className="mt-6 overflow-hidden rounded-2xl border border-slate-200 shadow-sm">
              <iframe
                title="Map to our location"
                src={`https://www.google.com/maps?q=${mapQuery}&output=embed`}
                width="100%"
                height="260"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="block"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
