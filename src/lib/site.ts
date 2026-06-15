// Central business configuration.
// EDIT THESE VALUES with the real Gateway Computer Repair details before launch.
export const site = {
  name: "Gateway Computer Repair",
  shortName: "Gateway",
  tagline: "Fast, friendly, no-nonsense computer repair",
  description:
    "Gateway Computer Repair fixes laptops and desktops, removes viruses, recovers data, upgrades hardware, and sets up networks for homes and businesses. Free estimates and fast turnaround.",
  // TODO: replace placeholders with your real details
  phone: "(555) 123-4567",
  phoneHref: "+15551234567",
  email: "hello@gatewaycomputerrepair.com",
  address: {
    line1: "123 Main Street",
    line2: "Suite 100",
    city: "Your City",
    region: "ST",
    postal: "00000",
  },
  hours: [
    { day: "Mon – Fri", time: "9:00 AM – 6:00 PM" },
    { day: "Saturday", time: "10:00 AM – 4:00 PM" },
    { day: "Sunday", time: "Closed" },
  ],
  serviceArea: "Your City and surrounding areas",
  social: {
    facebook: "",
    instagram: "",
    google: "",
  },
  // Public site URL, used for metadata/sitemap. Updated after you connect a domain.
  url: "https://gatewaycomputerrepair.com",
} as const;

export type ServiceItem = {
  slug: string;
  title: string;
  icon: string;
  blurb: string;
  details: string[];
};

export const services: ServiceItem[] = [
  {
    slug: "laptop-desktop-repair",
    title: "Laptop & Desktop Repair",
    icon: "laptop",
    blurb:
      "Diagnostics and repair for all makes and models — laptops, notebooks, netbooks and desktops.",
    details: [
      "Won't power on / no display diagnosis",
      "Screen, keyboard and battery replacement",
      "Overheating, fan and cooling repairs",
      "Liquid-damage assessment",
    ],
  },
  {
    slug: "virus-malware-removal",
    title: "Virus & Malware Removal",
    icon: "shield",
    blurb:
      "Thorough cleanup of viruses, adware and spyware — we don't just clean, we cross-check.",
    details: [
      "Virus, ransomware and trojan removal",
      "Adware and spyware cleanup",
      "Browser hijack and pop-up fixes",
      "Security hardening and prevention tips",
    ],
  },
  {
    slug: "upgrades",
    title: "Hardware Upgrades",
    icon: "chip",
    blurb:
      "Make an older machine feel new again with memory and storage upgrades.",
    details: [
      "RAM / memory upgrades",
      "SSD and hard-drive upgrades",
      "Graphics and component upgrades",
      "Performance tune-ups",
    ],
  },
  {
    slug: "data-recovery-backup",
    title: "Data Recovery & Backup",
    icon: "database",
    blurb:
      "Recover important files and set up reliable on-site and online backups.",
    details: [
      "File and photo recovery",
      "Failed / failing drive recovery",
      "On-site and cloud backup setup",
      "Data migration to a new device",
    ],
  },
  {
    slug: "new-setup-installation",
    title: "New Setup & Installation",
    icon: "plug",
    blurb:
      "Get new equipment installed and configured the right way the first time.",
    details: [
      "New PC and operating-system setup",
      "Printers, cameras and peripherals",
      "Software installation and updates",
      "Email and account configuration",
    ],
  },
  {
    slug: "networking",
    title: "Networking & Wi-Fi",
    icon: "wifi",
    blurb:
      "We're big on networking — design, setup and wireless coverage for home and office.",
    details: [
      "Network design and planning",
      "Wired and wireless network setup",
      "Wi-Fi coverage and speed fixes",
      "Router and switch configuration",
    ],
  },
  {
    slug: "servers-security",
    title: "Servers, Firewalls & VPN",
    icon: "server",
    blurb:
      "Business-grade server, firewall and VPN setup, installation and configuration.",
    details: [
      "Server installation and setup",
      "Firewall setup and configuration",
      "VPN setup and configuration",
      "Ongoing maintenance",
    ],
  },
  {
    slug: "business-it",
    title: "Business IT Support",
    icon: "briefcase",
    blurb:
      "Reliable support for small and medium businesses, including database services.",
    details: [
      "On-site and remote support",
      "Database administration and design",
      "Workstation and peripheral setup",
      "Preventative maintenance plans",
    ],
  },
];

export const testimonials = [
  {
    quote:
      "Brought in my laptop that wouldn't turn on. Fixed the same day and backed up all my photos. Couldn't be happier.",
    name: "Sarah M.",
    detail: "Laptop repair",
  },
  {
    quote:
      "Cleaned a nasty virus off our office computers and set up better security. Professional and quick.",
    name: "David L.",
    detail: "Small business",
  },
  {
    quote:
      "Upgraded my old desktop with an SSD and more memory. It runs like a brand-new machine now.",
    name: "Priya K.",
    detail: "Hardware upgrade",
  },
];

export const faqs = [
  {
    q: "Do you offer free estimates?",
    a: "Yes. We'll diagnose the issue and give you a clear, no-obligation estimate before any work begins.",
  },
  {
    q: "How long do repairs take?",
    a: "Many common repairs are completed the same or next day. We'll always give you a realistic timeline up front and keep you updated.",
  },
  {
    q: "Do I need an appointment?",
    a: "Walk-ins are welcome during business hours, but booking ahead helps us serve you faster. Use the contact form or give us a call.",
  },
  {
    q: "Is my data safe during a repair?",
    a: "Absolutely. We treat your data as confidential and can back it up before we start so nothing is lost.",
  },
  {
    q: "Do you offer a warranty?",
    a: "Yes. Repairs are backed by a workmanship warranty. Ask us for details on your specific repair.",
  },
  {
    q: "Do you support businesses as well as home users?",
    a: "We do — from a single home PC to networks, servers and ongoing IT support for small and medium businesses.",
  },
];
