# BhumiTech — Corporate Website

A single-file, zero-build static website for **BhumiTech**, a New York–based IT consulting firm.
Enterprise look-and-feel (royal blue), full navigation with mega-menus, and client-side page switching.

```
bhumitech/
├── index.html      # the entire site (HTML + CSS + JS inline)
├── vercel.json     # Vercel config (clean URLs + security headers)
├── .gitignore
└── README.md
```

No build step, no dependencies. Open `index.html` locally or deploy as-is.

---

## Deploy: GitHub + Vercel (production + preview)

This gives you two environments automatically:

- **Production** → the `main` branch → your live domain
- **Preview** → every other branch / Pull Request → a unique temporary URL for review

### 1. Create the GitHub repo

```bash
cd bhumitech
git init
git add .
git commit -m "Initial BhumiTech site"
git branch -M main
# create an EMPTY repo named "bhumitech" on github.com first, then:
git remote add origin https://github.com/<your-username>/bhumitech.git
git push -u origin main
```

### 2. Connect Vercel

1. Go to **vercel.com → Add New → Project → Import** your `bhumitech` repo.
2. Framework preset: **Other** (it's static). Build command: *none*. Output dir: *leave default*.
3. Click **Deploy**. `main` is now your **Production** environment.

Vercel auto-creates a Preview deployment for any branch or PR — no extra setup.

### 3. The recurring-changes workflow

```bash
# start a change
git checkout -b feature/hero-copy
# ...edit index.html...
git commit -am "Update hero copy"
git push -u origin feature/hero-copy
```

Pushing the branch (or opening a PR) gives you a **Preview URL** to review.
When it looks right, merge into `main` → Vercel ships it to **Production**.

```bash
git checkout main && git merge feature/hero-copy && git push   # → production
```

### Custom domain
Vercel → Project → **Settings → Domains** → add `bhumitech.com` and follow the DNS steps.

---

## Notes for the next iteration
- Search, the contact form, and "Apply" links are front-end placeholders. Wire the form to a CRM/inbox (e.g. Formspree, Resend, or a serverless function) when ready.
- Replace the abstract gradient panels with real photography/illustration if desired.
- All copy is original placeholder content — review before going live.
