# Hightower & Hightower — Website + Admin Panel

The marketing site is plain HTML/CSS/JS. A small **Node + Express + SQLite** backend
(in `server/`) adds three things:

1. **One shared table** for every lead form (hero form, consultation modal, "Get Started", Contact Us).
2. **Blog management** — admins create/edit/delete posts; the public pages render them live.
3. **A clean admin panel** at `/admin.html` to read submissions and manage blogs.

## Run it

```bash
npm install      # first time only
npm start        # serves the whole site on http://localhost:3000
```

- Website:   http://localhost:3000
- Admin:     http://localhost:3000/admin.html

> Open the site through `http://localhost:3000`, **not** by double-clicking the `.html`
> files — the dynamic parts (forms saving, blogs loading) only work when served by the server.

## Admin login

Default credentials (change the password in `data/hightower.db` → `admins` table, or edit
the seed in `server/db.js`):

```
username: admin
password: hightower123
```

## How it fits together

| Piece | What it does |
|-------|--------------|
| `server/server.js` | Express app: REST API + serves the static site & uploaded images |
| `server/db.js` | Creates the SQLite database `data/hightower.db` and seeds the admin |
| `data/` | SQLite DB + uploaded blog images (git-ignored) |
| `admin.html / admin.css / admin.js` | The admin panel UI |
| `script/script.js` | (appended block) wires the forms + renders blogs on the public pages |

### Form storage (one table)
Hero form, consultation modal, "Get Started", and Contact Us all POST to
`/api/submissions` and land in the single **`submissions`** table, tagged by `form_type`.
The admin panel's **Submissions** tab lists them all and can filter by form, mark read, or delete.

### Blogs
- Admins add a post with a **Title (the H1 heading)**, excerpt, content, author, image, and
  published/draft status.
- The home page **News & Articles** section shows the **latest 3** published posts.
- `blogs.html` shows **all** published posts; `blog-detail.html?id=<id>` shows one.
- If there are **no** blogs yet, the pages keep their original hard-coded sample articles.

## API summary

Public:
- `POST /api/submissions` — save a form
- `GET /api/blogs?limit=3` — published posts (newest first)
- `GET /api/blogs/:id` — one published post

Admin (cookie session via `POST /api/admin/login`):
- `GET /api/admin/submissions?type=…`, `POST …/:id/read`, `DELETE …/:id`
- `GET/POST/PUT/DELETE /api/admin/blogs` (POST/PUT accept an `image` file upload)
