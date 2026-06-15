import Link from "next/link";
import { site } from "@/lib/site";
import { PhoneIcon, MailIcon, MapPinIcon, ClockIcon } from "@/components/Icons";

export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="mt-auto border-t border-slate-200 bg-slate-900 text-slate-300">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-12 sm:px-6 md:grid-cols-3">
        <div>
          <div className="flex items-center gap-2 font-bold text-white">
            <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-brand-600 font-extrabold text-white">
              G
            </span>
            <span className="text-lg">{site.name}</span>
          </div>
          <p className="mt-4 max-w-xs text-sm text-slate-400">
            {site.tagline}. Serving {site.serviceArea}.
          </p>
        </div>

        <div>
          <h3 className="text-sm font-semibold uppercase tracking-wide text-white">
            Contact
          </h3>
          <ul className="mt-4 space-y-3 text-sm">
            <li>
              <a
                href={`tel:${site.phoneHref}`}
                className="flex items-center gap-2 hover:text-white"
              >
                <PhoneIcon className="h-4 w-4 text-brand-400" />
                {site.phone}
              </a>
            </li>
            <li>
              <a
                href={`mailto:${site.email}`}
                className="flex items-center gap-2 hover:text-white"
              >
                <MailIcon className="h-4 w-4 text-brand-400" />
                {site.email}
              </a>
            </li>
            <li className="flex items-start gap-2">
              <MapPinIcon className="mt-0.5 h-4 w-4 text-brand-400" />
              <span>
                {site.address.line1}, {site.address.city}, {site.address.region}{" "}
                {site.address.postal}
              </span>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="text-sm font-semibold uppercase tracking-wide text-white">
            Hours
          </h3>
          <ul className="mt-4 space-y-2 text-sm">
            {site.hours.map((h) => (
              <li key={h.day} className="flex items-center gap-2">
                <ClockIcon className="h-4 w-4 text-brand-400" />
                <span className="w-24 text-slate-400">{h.day}</span>
                <span>{h.time}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="border-t border-slate-800">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-3 px-4 py-5 text-xs text-slate-500 sm:flex-row sm:px-6">
          <p>
            &copy; {year} {site.name}. All rights reserved.
          </p>
          <div className="flex gap-4">
            <Link href="/services" className="hover:text-white">
              Services
            </Link>
            <Link href="/faq" className="hover:text-white">
              FAQ
            </Link>
            <Link href="/contact" className="hover:text-white">
              Get a quote
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
