# NeighborNet

NeighborNet is a modern community networking platform that enables residents to connect, communicate, and collaborate within their local neighborhoods. Built with **Next.js 15**, **React 19**, and **TypeScript**, the application provides a scalable and responsive user experience for community engagement.

---

## Overview

NeighborNet is designed to strengthen local communities by providing a centralized platform where neighbors can share updates, create events, post announcements, and interact securely. The project leverages modern web technologies to deliver a fast, responsive, and user-friendly experience.

---

## Features

* Secure user authentication
* Community dashboard
* User profiles
* Create and manage neighborhood posts
* Community announcements
* Event creation and management
* Responsive user interface
* Dark mode support
* SEO optimization
* Modern UI with smooth animations

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
* MDX
* next-themes

---

## Project Structure

```text
app/
├── (auth)/
├── blog/
├── contact/
├── pricing/
├── api/
├── layout.tsx
├── page.tsx
└── globals.css

components/
├── ui/
├── navbar/
└── community/
```

---

## Installation

Clone the repository:

```bash
git clone https://github.com/kaviyadharshini2805/neighbornet.git
```

Navigate to the project:

```bash
cd neighbornet
```

Install dependencies:

```bash
pnpm install
```

---

## Running the Application

Start the development server:

```bash
pnpm dev
```

Open your browser:

```text
http://localhost:3000
```

---

## Environment Variables

Create a `.env.local` file.

```env
NEXT_PUBLIC_API_URL=
DATABASE_URL=
```

Add the required environment variables for your deployment.

---

## Available Commands

| Command           | Description                  |
| ----------------- | ---------------------------- |
| `pnpm dev`        | Start development server     |
| `pnpm build`      | Build production application |
| `pnpm start`      | Run production server        |
| `pnpm lint`       | Run ESLint                   |
| `pnpm type-check` | Run TypeScript checks        |

---

## Performance

The application is optimized using:

* Next.js App Router
* Server Components
* Automatic code splitting
* Image optimization
* Font optimization
* Turbopack development server

---

## Future Enhancements

* Real-time messaging
* Push notifications
* Community groups
* Marketplace
* Polls and surveys
* Role-based access control
* AI-powered recommendations

---

## License

This project is licensed under the MIT License.
