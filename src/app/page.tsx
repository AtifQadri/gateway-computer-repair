import Link from "next/link";
import { services, testimonials, site } from "@/lib/site";
import { ServiceCard, CTABand } from "@/components/Shared";
import {
  ArrowRightIcon,
  PhoneIcon,
  CheckIcon,
  StarIcon,
} from "@/components/Icons";

const stats = [
  { value: "Same-day", label: "repairs available" },
  { value: "Free", label: "estimates" },
  { value: "All makes", label: "& models" },
  { value: "Warranty", label: "backed work" },
];

const steps = [
  {
    title: "Tell us what's wrong",
    text: "Call or send a quick message describing the problem. We'll give you a free estimate.",
  },
  {
    title: "We diagnose & fix it",
    text: "Bring it in or book a visit. We diagnose the issue and repair it — fast, with no surprises.",
  },
  {
    title: "Back up and running",
    text: "Pick up your device working like new, backed by our workmanship warranty.",
  },
];

const reasons = [
  "Friendly, jargon-free advice",
  "Upfront pricing — no hidden fees",
  "Fast, often same-day turnaround",
  "We back up your data before we start",
  "Experienced with all makes & models",
  "Home and business support",
];

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-slate-900">
        <div className="absolute inset-0 bg-[radial-gradient(60%_60%_at_70%_0%,rgba(37,99,235,0.35),transparent)]" />
        <div className="relative mx-auto grid max-w-6xl items-center gap-10 px-4 py-20 sm:px-6 lg:grid-cols-2 lg:py-28">
          <div>
            <span className="inline-flex items-center gap-2 rounded-full border border-brand-400/40 bg-brand-500/10 px-3 py-1 text-sm font-medium text-brand-200">
              <StarIcon className="h-4 w-4 text-brand-300" />
              Trusted local computer repair
            </span>
            <h1 className="mt-5 text-4xl font-extrabold leading-tight tracking-tight text-white sm:text-5xl">
              Fast, friendly{" "}
              <span className="text-brand-400">computer repair</span> you can
              count on
            </h1>
            <p className="mt-5 max-w-xl text-lg text-slate-300">
              Laptops and desktops, virus removal, data recovery, upgrades and
              networking — for homes and businesses in {site.serviceArea}. Free
              estimates, no jargon.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 rounded-lg bg-brand-600 px-6 py-3 text-base font-semibold text-white shadow-sm transition hover:bg-brand-700"
              >
                Get a free quote
                <ArrowRightIcon className="h-5 w-5" />
              </Link>
              <a
                href={`tel:${site.phoneHref}`}
                className="inline-flex items-center justify-center gap-2 rounded-lg border border-slate-600 px-6 py-3 text-base font-semibold text-white transition hover:bg-slate-800"
              >
                <PhoneIcon className="h-5 w-5" />
                {site.phone}
              </a>
            </div>
          </div>

          <div className="rounded-2xl border border-slate-700 bg-slate-800/60 p-6 backdrop-blur sm:p-8">
            <h2 className="text-lg font-semibold text-white">
              Why customers choose us
            </h2>
            <ul className="mt-4 grid gap-3 sm:grid-cols-2">
              {reasons.map((r) => (
                <li key={r} className="flex items-start gap-2 text-slate-200">
                  <CheckIcon className="mt-0.5 h-5 w-5 shrink-0 text-brand-400" />
                  <span className="text-sm">{r}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="border-b border-slate-200 bg-white">
        <div className="mx-auto grid max-w-6xl grid-cols-2 gap-6 px-4 py-10 sm:px-6 md:grid-cols-4">
          {stats.map((s) => (
            <div key={s.label} className="text-center">
              <div className="text-2xl font-bold text-brand-700 sm:text-3xl">
                {s.value}
              </div>
              <div className="mt-1 text-sm text-slate-600">{s.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Services */}
      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tight text-slate-900">
            What we fix
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-slate-600">
            From a slow laptop to a full office network, we&apos;ve got you
            covered.
          </p>
        </div>
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.slice(0, 6).map((service) => (
            <ServiceCard key={service.slug} service={service} />
          ))}
        </div>
        <div className="mt-10 text-center">
          <Link
            href="/services"
            className="inline-flex items-center gap-2 text-base font-semibold text-brand-700 hover:text-brand-800"
          >
            See all services
            <ArrowRightIcon className="h-5 w-5" />
          </Link>
        </div>
      </section>

      {/* How it works */}
      <section className="bg-slate-50">
        <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
          <div className="text-center">
            <h2 className="text-3xl font-bold tracking-tight text-slate-900">
              How it works
            </h2>
            <p className="mx-auto mt-3 max-w-2xl text-slate-600">
              Getting your device fixed is simple.
            </p>
          </div>
          <div className="mt-10 grid gap-8 md:grid-cols-3">
            {steps.map((step, i) => (
              <div key={step.title} className="relative">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-brand-600 text-lg font-bold text-white">
                  {i + 1}
                </div>
                <h3 className="mt-4 text-lg font-semibold text-slate-900">
                  {step.title}
                </h3>
                <p className="mt-2 text-sm leading-6 text-slate-600">
                  {step.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tight text-slate-900">
            What our customers say
          </h2>
        </div>
        <div className="mt-10 grid gap-6 md:grid-cols-3">
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
                <span className="font-normal text-slate-500"> · {t.detail}</span>
              </figcaption>
            </figure>
          ))}
        </div>
      </section>

      <CTABand />
    </>
  );
}
