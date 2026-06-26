# AI SaaS Template

A production-ready SaaS starter template built with **Next.js 15**, **React 19**, **TypeScript**, and **Tailwind CSS**. The template provides a modern foundation for building scalable web applications with authentication, marketing pages, blog support, dark mode, and performance optimizations already configured.

---

## Overview

This template is designed to accelerate SaaS application development by providing a complete project structure with essential features and best practices. Developers can focus on implementing business logic instead of spending time configuring project infrastructure.

The template includes authentication pages, marketing pages, reusable UI components, MDX blog support, SEO optimization, and a performance-focused development environment.

---

## Features

* Built with Next.js 15 App Router
* React 19 Server Components
* TypeScript support
* Tailwind CSS styling
* Framer Motion animations
* Authentication pages (Login and Signup)
* Landing page
* Pricing page
* Contact page
* MDX-powered blog
* Dark mode support
* SEO optimization
* Responsive design
* Performance-first architecture
* Turbopack support for fast development

---

## Performance

| Metric                     | Performance  |
| -------------------------- | ------------ |
| Development Server Startup | < 2 seconds  |
| Hot Module Replacement     | < 100 ms     |
| Production Build           | < 30 seconds |
| First Load JavaScript      | ~75 kB       |

---

## Project Structure

```text
app/
├── (auth)/
│   ├── login/
│   └── signup/
├── blog/
├── contact/
├── pricing/
├── api/
├── page.tsx
├── layout.tsx
└── globals.css

components/
├── ui/
├── navbar/
└── [features]/
```

---

## Technology Stack

* Next.js 15
* React 19
* TypeScript
* Tailwind CSS
* Framer Motion
* React Hook Form
* Zod
* Lucide React
* Tabler Icons
* MDX
* Prism.js
* next-themes

---

## Getting Started

### Clone the Repository

```bash
git clone <repository-url>
```

### Navigate to the Project

```bash
cd <project-name>
```

### Install Dependencies

```bash
pnpm install
```

---

## Running the Application

Start the development server:

```bash
pnpm dev
```

For ultra-fast development mode:

```bash
pnpm dev:fast
```

Open your browser and visit:

```text
http://localhost:3000
```

---

## Available Commands

| Command           | Description              |
| ----------------- | ------------------------ |
| `pnpm dev`        | Start development server |
| `pnpm dev:fast`   | Fast development mode    |
| `pnpm build`      | Production build         |
| `pnpm build:fast` | Fast production build    |
| `pnpm start`      | Start production server  |
| `pnpm lint`       | Run ESLint               |
| `pnpm type-check` | Run TypeScript checks    |
| `pnpm clean`      | Clean build cache        |

---

## Environment Variables

Create a `.env.local` file in the project root.

```env
NEXT_PUBLIC_API_URL=
DATABASE_URL=
```

Add any additional environment variables required by your application.

---

## Customization

### Creating a New Page

Create a new file inside the `app/` directory.

```tsx
export const metadata = {
  title: "Page Title",
  description: "Page description",
};

export default function Page() {
  return <div>Your Content</div>;
}
```

### Adding Blog Posts

Create a new `.mdx` file inside the blog directory.

```md
---
title: "Blog Title"
publishedAt: "2025-01-01"
summary: "Blog summary"
author: "Author Name"
---

Write your content here.
```

### Styling

* Global styles are located in `app/globals.css`
* Components use Tailwind CSS utility classes
* Theme configuration can be modified in `tailwind.config.ts`

---

## Performance Optimizations

The template includes several built-in optimizations:

* Turbopack for faster development
* Server Components by default
* Automatic image optimization
* Font optimization using `next/font`
* Code splitting
* Partial prerendering
* Edge Runtime support
* SEO-ready metadata configuration

---

## Best Practices

* Use Server Components whenever possible.
* Use Client Components only for interactive features.
* Optimize images using `next/image`.
* Lazy load heavy components.
* Keep client-side JavaScript minimal.
* Follow TypeScript best practices.
* Organize reusable UI components inside the `components/` directory.

---

## Deployment

### Vercel

Deploy directly using:

```bash
vercel
```

### Other Platforms

Build the project:

```bash
pnpm build
```

Start the production server:

```bash
pnpm start
```

Ensure Node.js 18 or later is installed in the deployment environment.

---

## License

This project is licensed under the MIT License.

---

## Acknowledgements

This template is built using the following technologies:

* Next.js
* React
* TypeScript
* Tailwind CSS
* Framer Motion
* React Hook Form
* Zod
* MDX
* next-themes
* Lucide React
