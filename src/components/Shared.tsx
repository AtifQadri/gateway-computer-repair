import Link from "next/link";
import { site } from "@/lib/site";
import {
  serviceIcons,
  CheckIcon,
  PhoneIcon,
  ArrowRightIcon,
} from "@/components/Icons";
import type { ServiceItem } from "@/lib/site";

export function PageHeader({
  title,
  subtitle,
}: {
  title: string;
  subtitle?: string;
}) {
  return (
    <section className="border-b border-slate-200 bg-slate-50">
      <div className="mx-auto max-w-6xl px-4 py-14 sm:px-6 sm:py-20">
        <h1 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
          {title}
        </h1>
        {subtitle && (
          <p className="mt-4 max-w-2xl text-lg text-slate-600">{subtitle}</p>
        )}
      </div>
    </section>
  );
}

export function ServiceCard({
  service,
  detailed = false,
}: {
  service: ServiceItem;
  detailed?: boolean;
}) {
  const Icon = serviceIcons[service.icon] ?? serviceIcons.laptop;
  return (
    <div className="group flex flex-col rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition hover:border-brand-300 hover:shadow-md">
      <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-brand-50 text-brand-600">
        <Icon className="h-6 w-6" />
      </span>
      <h3 className="mt-4 text-lg font-semibold text-slate-900">
        {service.title}
      </h3>
      <p className="mt-2 text-sm leading-6 text-slate-600">{service.blurb}</p>
      {detailed && (
        <ul className="mt-4 space-y-2">
          {service.details.map((d) => (
            <li key={d} className="flex items-start gap-2 text-sm text-slate-700">
              <CheckIcon className="mt-0.5 h-4 w-4 shrink-0 text-brand-600" />
              <span>{d}</span>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export function CTABand() {
  return (
    <section className="bg-brand-700">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-6 px-4 py-12 text-center sm:px-6 md:flex-row md:text-left">
        <div>
          <h2 className="text-2xl font-bold text-white sm:text-3xl">
            Computer trouble? Let&apos;s fix it.
          </h2>
          <p className="mt-2 text-brand-100">
            Free estimates and fast turnaround. Call us or request a quote
            online.
          </p>
        </div>
        <div className="flex flex-col gap-3 sm:flex-row">
          <a
            href={`tel:${site.phoneHref}`}
            className="inline-flex items-center justify-center gap-2 rounded-lg bg-white px-6 py-3 text-base font-semibold text-brand-700 shadow-sm transition hover:bg-brand-50"
          >
            <PhoneIcon className="h-5 w-5" />
            {site.phone}
          </a>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center gap-2 rounded-lg border border-brand-300 px-6 py-3 text-base font-semibold text-white transition hover:bg-brand-600"
          >
            Get a free quote
            <ArrowRightIcon className="h-5 w-5" />
          </Link>
        </div>
      </div>
    </section>
  );
}
