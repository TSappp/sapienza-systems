# Sapienza Systems

Operational systems consulting website for Sapienza Systems, founded by Thomas Sapienza. Built with Next.js, TypeScript, and Tailwind CSS.

**Live site:** [sapienzasystems.com](https://sapienzasystems.com)

## Tech Stack

- **Framework:** Next.js 16 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS v4
- **Blog:** Markdown with gray-matter + remark
- **Deployment:** Vercel

## Getting Started

### Prerequisites

- Node.js 18+ installed
- npm or yarn

### Local Development

```bash
# Install dependencies
npm install

# Start development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

### Production Build

```bash
npm run build
npm start
```

## Project Structure

```
src/
  app/
    layout.tsx          # Root layout (Nav + Footer)
    page.tsx            # Homepage
    about/page.tsx      # About page
    services/page.tsx   # Services page
    industries/page.tsx # Industries page
    insights/page.tsx   # Blog index
    insights/[slug]/    # Individual blog posts
    contact/page.tsx    # Contact page
    globals.css         # Global styles + blog prose
  components/
    Nav.tsx             # Sticky navigation
    Footer.tsx          # Site footer
    Button.tsx          # Reusable button/link
    SectionHeading.tsx  # Reusable section header
  lib/
    blog.ts             # Blog utilities (read markdown, parse frontmatter)
content/
  insights/             # Blog posts (Markdown files)
```

## Editing Content

### Personal Information

Remaining placeholders (search for code comments with instructions):

- **Profile photo:** Add image to `public/images/thomas-sapienza.jpg` — see comment in `src/app/about/page.tsx`
- **Favicon:** Replace `src/app/favicon.ico` with your own
- **Contact form backend:** Connect via Formspree or API route — see comment in `src/app/contact/page.tsx`
- **Scheduling link** *(optional)*: Replace mailto with Calendly URL — see comment in `src/app/contact/page.tsx`
- **PDF overview** *(optional)*: Add to `public/sapienza-systems-overview.pdf` — see comment in `src/app/about/page.tsx`

### Page Content

All page content is in the corresponding `src/app/*/page.tsx` files. Content is defined as TypeScript arrays and objects at the top of each file — easy to edit without touching layout or styling.

### Favicon

Replace `src/app/favicon.ico` with your own favicon file.

## Blog / Insights

### Adding a New Post

1. Create a new `.md` file in `content/insights/`:

```markdown
---
title: "Your Post Title"
description: "A brief description for the blog index and SEO."
date: "2025-04-01"
tags: ["operations", "workflow"]
---

Your post content here. Use standard Markdown — headings, bold, lists, links, blockquotes.
```

2. The slug is derived from the filename (e.g., `my-new-post.md` → `/insights/my-new-post`).
3. Posts are sorted by date (newest first).
4. Reading time is calculated automatically.

### Editing Existing Posts

Edit the `.md` files in `content/insights/`. Changes take effect on next build or dev server refresh.

## Contact Form

The contact form on `/contact` is currently UI-only. To make it functional, connect it to a backend service:

- **Formspree:** Add your Formspree endpoint to the form `action` attribute
- **Next.js API Route:** Create `src/app/api/contact/route.ts`
- **Email service:** Integrate with SendGrid, Resend, or similar

## Deployment

### Deploy to Vercel

1. Push to a GitHub repository
2. Import the project at [vercel.com/new](https://vercel.com/new)
3. Vercel auto-detects Next.js — no configuration needed
4. Set your custom domain in Vercel project settings

Or use the Vercel CLI:

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel
```

### Environment Variables

No environment variables are required for the base site. If you add a contact form backend, you may need API keys — add those in Vercel's project settings.

## Design

- **Palette:** Stone/neutral tones with amber accents
- **Typography:** Geist Sans (via Next.js font optimization)
- **Layout:** Max-width 6xl (1152px), responsive grid
- **Navigation:** Sticky dark header, mobile hamburger menu
- **Aesthetic:** Premium, minimal, masculine, clean

## License

Private. All rights reserved.
