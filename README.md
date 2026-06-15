# Gateway Computer Repair — Website

Marketing website for **Gateway Computer Repair**, built with
[Next.js 16](https://nextjs.org) (App Router), [React 19](https://react.dev) and
[Tailwind CSS v4](https://tailwindcss.com). It is a fast, single-page-style,
fully responsive site with server-side rendering / static generation for good
SEO.

## Pages

- `/` — Home (hero, services, how it works, testimonials)
- `/services` — Detailed list of services
- `/about` — About the business
- `/reviews` — Customer testimonials
- `/faq` — Frequently asked questions
- `/contact` — Contact details, hours, map and a free-quote form

## Getting started

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # production build
npm run start    # serve the production build
npm run lint
```

## Editing your business details

All business content lives in one file: **`src/lib/site.ts`**. Update these
placeholders with the real details before launch:

- `name`, `tagline`, `description`
- `phone` / `phoneHref` (the `phoneHref` must be digits only, e.g. `+15551234567`)
- `email`
- `address` (line1, line2, city, region, postal)
- `hours`
- `serviceArea`
- `social` links
- `url` — your final public domain (used for SEO metadata and the sitemap)

Services, testimonials and FAQ entries are also defined in `src/lib/site.ts`.

## Contact form / email delivery

The contact form posts to the `POST /api/contact` route handler
(`src/app/api/contact/route.ts`).

- **Out of the box:** submissions are validated and logged to the server logs,
  and the visitor sees a success message. (No email is sent until you configure
  a provider.)
- **To receive emails:** this project supports [Resend](https://resend.com)
  (free tier available). Set the following environment variables in your hosting
  provider (e.g. Vercel → Project → Settings → Environment Variables):

  | Variable             | Description                                            |
  | -------------------- | ------------------------------------------------------ |
  | `RESEND_API_KEY`     | Your Resend API key                                    |
  | `CONTACT_TO_EMAIL`   | Where quote requests should be delivered               |
  | `CONTACT_FROM_EMAIL` | Verified sender (defaults to `onboarding@resend.dev`)  |

  Until you verify your own domain in Resend, you can send using
  `onboarding@resend.dev` to your own verified email address.

## Deploying (free tier)

1. Push this repo to GitHub.
2. Go to [vercel.com/new](https://vercel.com/new), import the repo and click
   **Deploy** (Next.js is detected automatically — no config needed).
3. You get a free `*.vercel.app` URL with automatic HTTPS.
4. (Optional) Add a custom domain in Vercel → Settings → Domains and follow the
   DNS instructions.
5. (Optional) Add the contact-form environment variables above.
