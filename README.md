# Hightower & Hightower — Next.js site + admin

The marketing site, blog system, lead-capture forms, and admin panel, now built on
**Next.js (App Router)**. Data is stored in **SQLite** (self-hosted, persistent file)
and blog images upload to **Cloudinary** (with a local fallback for development).

## Run it

```bash
npm install            # first time only
cp .env.example .env   # then add your Cloudinary keys (optional for local dev)
npm run dev            # development at http://localhost:5702

# production
npm run build
npm start              # http://localhost:5702
```

- Website:   http://localhost:5702
- Admin:     http://localhost:5702/admin  (login `admin` / `hightower123`)

It also listens on your LAN IP, so the existing port-forward on **5702** keeps working.

## What maps to what

| Area | Location |
|------|----------|
| Pages (home, blogs, lawyers, areas of practice, …) | `app/**/page.js` (React server components) |
| Shared header + mobile menu / footer / modals | `components/Header.js`, `Footer.js`, `Modals.js` |
| Original site behaviour (menus, sliders, modals, forms, dynamic blogs) | `public/script/script.js`, loaded via `components/SiteScripts.js` |
| Styles | `public/style/style.css` (unchanged) |
| Admin panel UI | `app/admin/page.js` + `public/admin.js` + `public/admin.css` |
| API | `app/api/**/route.js` |
| Database (helpers + schema/migrations) | `lib/db.js` → `data/hightower.db` |
| Image uploads (Cloudinary + local fallback) | `lib/cloudinary.js` |
| Locally-stored uploads served at `/uploads/...` | `app/uploads/[file]/route.js` → `data/uploads/` |
| Original static HTML (kept for reference) | `legacy/` |

### "Nothing changed" — how
The page markup, CSS, and behaviour scripts are the same as the static site; pages were
converted to JSX faithfully (same classes/structure), and all interactivity still runs from
the original `script.js`. Every existing internal `.html` link keeps working via a rewrite in
`next.config.mjs` (`/blogs.html` → `/blogs`, etc.).

## Cloudinary
Set `CLOUDINARY_CLOUD_NAME`, `CLOUDINARY_API_KEY`, `CLOUDINARY_API_SECRET` in `.env`
(see `.env.example`). When set, every image uploaded from the admin (blog featured image,
source logo, and inline editor images) goes to Cloudinary and the returned `https` URL is
stored in the database. When **not** set, uploads are written to `data/uploads/` and served
locally — convenient for development.

## API summary
Public: `POST /api/submissions`, `GET /api/blogs?limit=3`, `GET /api/blogs/:id`
Admin (cookie session via `POST /api/admin/login`): `GET/POST/PUT/DELETE /api/admin/blogs`,
`GET /api/admin/submissions` (+ `/:id/read`, `DELETE /:id`), `POST /api/admin/upload`.

## Admin password
Stored (plaintext) in the `admins` table of `data/hightower.db`. Change it there, or edit the
seed in `lib/db.js`. For a public deployment, use a strong password and put the site behind HTTPS.
