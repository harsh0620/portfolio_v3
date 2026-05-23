# Harsh Chandravanshi — Portfolio v3

Personal portfolio website for [harshchandravanshi.com](https://harshchandravanshi.com) — built with Next.js 16, React 19, TypeScript, and Tailwind CSS v4.

## Sections

- **Hero** — intro with animated typewriter roles
- **About** — bio, stats (projects, lines of code, coding questions)
- **Skills** — categorised tech stack (Frontend, Mobile, Backend, Database, CS, Language, Tools)
- **Projects** — 8 featured projects with detail pages (`/projects/[slug]`)
- **Experience** — FamApp, RecordBook (YC-W22), Secure Meters Limited
- **Education** — B.Tech, CTAE (2019–2023)
- **Now** — what I'm currently learning and building
- **Contact** — EmailJS form with Google reCAPTCHA v2

## Tech Stack

| Layer | Choice |
|---|---|
| Framework | Next.js 16 (App Router) |
| Language | TypeScript 5 |
| Styling | Tailwind CSS v4 |
| Animations | Framer Motion 12 |
| Theming | next-themes (dark / light) |
| Contact | EmailJS + Google reCAPTCHA v2 |
| Analytics | Vercel Analytics + Speed Insights + Google Analytics 4 |
| Deployment | Vercel |

## Getting Started

```bash
pnpm install
cp .env.local.example .env.local   # fill in your keys (see below)
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000).

## Environment Variables

Copy `.env.local.example` to `.env.local` and fill in:

| Variable | Where to get it |
|---|---|
| `NEXT_PUBLIC_EMAIL_SERVICE` | [EmailJS dashboard](https://dashboard.emailjs.com) |
| `NEXT_PUBLIC_EMAIL_TEMPLATE` | EmailJS dashboard |
| `NEXT_PUBLIC_EMAIL_PUBLICKEY` | EmailJS dashboard |
| `NEXT_PUBLIC_RECAPTCHA_SITE_KEY` | [Google reCAPTCHA admin](https://www.google.com/recaptcha/admin) |
| `NEXT_PUBLIC_GOOGLE_ANALYTICS` | [Google Analytics](https://analytics.google.com) (GA4 measurement ID) |

## Scripts

```bash
pnpm dev      # development server
pnpm build    # production build
pnpm start    # serve production build
pnpm lint     # ESLint
```

## Project Structure

```
app/
├── components/
│   ├── sections/   # Hero, About, Skills, Projects, Experiences, Education, Now, Contact
│   ├── ui/         # Nav, ThemeToggle, GoUpButton, AnimateIn, Typewriter, …
│   └── providers/  # ThemeProvider
├── lib/
│   ├── data.ts         # all site content (edit here to update copy)
│   └── definitions.ts  # TypeScript types
├── projects/[slug]/    # project detail pages
├── layout.tsx
└── page.tsx
```

All site content lives in [app/lib/data.ts](app/lib/data.ts) — update that file to change copy, projects, experience, or skills without touching components.
