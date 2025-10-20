# DayChart SaaS AI Platform with Next.js 13, React, Tailwind, Prisma, and Stripe

## - Built a scheduling visualization tool with auth, CRUD, Stripe billing, and persistent storage.
## - Core feature: a 24-hour donut chart mapping events to time slices, plus dashboard metrics.
## - Added AI suggestions to help users balance routines (exercise, self-care, socializing).

Features:

- Tailwind design
- Tailwind animations and effects
- Full responsiveness
- Clerk Authentication 
- Client form validation and handling using react-hook-form
- Server error handling using react-toast
- Conversation Generation Tool (Open AI)
- Page loading state
- Stripe monthly subscription
- Free tier with API limiting
- Folder structure in Next 13 App Router

### Prerequisites

**Node version 18.x.x**

### Install packages

```shell
npm i
```

### Setup .env file

```js
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=
CLERK_SECRET_KEY=

NEXT_PUBLIC_CLERK_SIGN_IN_URL=/sign-in
NEXT_PUBLIC_CLERK_SIGN_UP_URL=/sign-up
NEXT_PUBLIC_CLERK_AFTER_SIGN_IN_URL=/dashboard
NEXT_PUBLIC_CLERK_AFTER_SIGN_UP_URL=/dashboard

OPENAI_API_KEY=
REPLICATE_API_TOKEN=

DATABASE_URL=

STRIPE_API_KEY=
STRIPE_WEBHOOK_SECRET=

NEXT_PUBLIC_APP_URL="http://localhost:3000"
```

### Setup Prisma

Add MySQL Database (I used PlanetScale)

```shell
npx prisma db push

```

### Start the app

```shell
npm run dev
```
