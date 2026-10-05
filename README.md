# TechGram — Tech-only motivation platform

Instagram-style but **tech motivation only**: IT, AI, Automation, Agentic AI, Generative AI, Web Dev, Cloud Computing, Blockchain, Data Science.

Posts • Reels • Stories • Explore • Profile • Auth (Supabase) • RLS Authorization • Tailwind dark UI.

## Quick start

```bash
npm install --legacy-peer-deps
npm run dev
```

Open http://localhost:5173 — demo login works instantly (`demo@techgram.dev` / `demo1234`).
No Supabase keys = demo mode (localStorage auth + mock feed).

## Go live with Supabase

1. Create project at https://supabase.com
2. SQL Editor → paste `supabase/schema.sql` → Run
3. Storage → create **public** bucket `techgram-media`
4. Copy `.env.example` to `.env` and set:
   - `VITE_SUPABASE_URL`
   - `VITE_SUPABASE_ANON_KEY`
5. `npm run dev` — real auth + DB active.

## Deploy

### Vercel
1. Import repo `satyamYadav33/techgram` in Vercel
2. Framework: **Vite**, Build: `npm run build`, Output: `dist`
3. Env vars: `VITE_SUPABASE_URL`, `VITE_SUPABASE_ANON_KEY`
4. Deploy — SPA rewrites handled by `vercel.json`.

### Netlify
1. New site from Git → `satyamYadav33/techgram`
2. Build: `npm run build`, Publish: `dist` (already in `netlify.toml`)
3. Env vars: `VITE_SUPABASE_URL`, `VITE_SUPABASE_ANON_KEY`
4. Deploy — SPA redirect handled by `netlify.toml` + `public/_redirects`.

## Scripts

- `npm run dev` — local dev
- `npm run build` — production build to `dist/`
- `npm run preview` — preview production build

## Stack

Vite 5 + React 18 + React Router 6 + TailwindCSS 3 + Supabase + lucide-react

## Repo files

- `vercel.json` — Vercel build + SPA rewrite
- `netlify.toml` + `public/_redirects` — Netlify build + SPA fallback
- `.nvmrc` — pins Node 20 for hosts
- `.env.example` — required env vars
- `supabase/schema.sql` — tables + RLS policies

## License

MIT
