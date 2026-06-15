import type { Metadata } from "next";
import { services } from "@/lib/site";
import { PageHeader, ServiceCard, CTABand } from "@/components/Shared";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Computer repair services: laptop and desktop repair, virus and malware removal, hardware upgrades, data recovery, networking, servers, and business IT support.",
};

export default function ServicesPage() {
  return (
    <>
      <PageHeader
        title="Our services"
        subtitle="Whatever the problem, we have the experience to fix it — for home users and businesses alike."
      />
      <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <ServiceCard key={service.slug} service={service} detailed />
          ))}
        </div>
      </section>
      <CTABand />
    </>
  );
}
