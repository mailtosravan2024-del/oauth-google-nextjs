# oauth-google-nextjs

Next.js 15.2 Google OAuth (NextAuth v4) starter lives in `/workspace/app`.

Production setup steps are documented below.

## Getting Started

1) Install dependencies

```bash
cd /workspace/app
npm install
```

2) Configure environment

Copy `.env.example` to `.env.local` and fill values.

```bash
cp .env.example .env.local
```

Required variables:

- `GOOGLE_CLIENT_ID`
- `GOOGLE_CLIENT_SECRET`
- `NEXTAUTH_URL` (e.g., http://localhost:3000 or your production domain)
- `NEXTAUTH_SECRET` (random strong string in production)

3) Run locally

```bash
npm run dev
```

Visit `/login` to sign in with Google and `/protected` to test a protected page.

## Google Cloud Console configuration

- Create OAuth 2.0 Client ID (Application type: Web application)
- Authorized JavaScript origins:
  - `https://yourdomain.com`
- Authorized redirect URIs (NextAuth default):
  - `https://yourdomain.com/api/auth/callback/google`
  - For local dev: `http://localhost:3000/api/auth/callback/google`

## Production deployment checklist

- Set `NEXTAUTH_URL` to your full production domain, e.g., `https://yourdomain.com`
- Set `NEXTAUTH_SECRET` to a strong random secret
- Ensure the redirect URIs in Google Cloud match your `NEXTAUTH_URL`
- Deploy (e.g., Vercel):
  - Add env vars (`AUTH_GOOGLE_ID`, `AUTH_GOOGLE_SECRET`, `AUTH_URL`, `AUTH_SECRET`)
  - Build command: `npm run build`
  - Start command: `npm start`

## Notes

- Uses NextAuth v4 with App Router API route at `src/app/api/auth/[...nextauth]/route.ts`
- Middleware protects routes under `/protected/*`