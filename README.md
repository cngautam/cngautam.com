# cngautam.com — Personal Academic Website

Built with plain HTML, CSS, and JavaScript. No frameworks, no build tools.
Hosted free on GitHub Pages with your custom domain.

---

## File Structure

```
cngautam/
├── index.html      ← Your entire single-page website
├── style.css       ← All styles
├── main.js         ← Scroll effects, nav, form handler
├── cv.pdf          ← ADD YOUR CV HERE (replace placeholder)
└── README.md       ← This file
```

---

## Before Publishing — Your Checklist

Search for these placeholder strings in `index.html` and update them:

| Placeholder | What to replace with |
|---|---|
| `your.email@desu.edu` | Your actual DSU email |
| `https://scholar.google.com/citations?user=cMGNvSwAAAAJ&hl=en` | ✓ Already set |
| `https://orcid.org/0000-0003-4546-6333` | ✓ Already set |
| `https://www.linkedin.com/in/cngautam/` | ✓ Already set |
| `https://www.researchgate.net/profile/Chetanath-Gautam` | ✓ Already set |
| `https://chess.desu.edu/about/faculty-profiles/chetanath-gautam-edd` | ✓ Already set |
| `[Volume Title]` (×2) | Actual chapter/volume titles for Routledge and IAP entries |
| `cv.pdf` | Drop your actual CV PDF file in this folder with that name |

---

## Step-by-Step: Publish to GitHub Pages

### Step 1 — Create a GitHub account (if you don't have one)
1. Go to https://github.com
2. Click "Sign up" — use a professional email
3. Verify your email

### Step 2 — Create your repository
1. Click the "+" icon (top right) → "New repository"
2. Repository name: type exactly `cngautam.com`
3. Set to **Public**
4. Do NOT check "Add README"
5. Click "Create repository"

### Step 3 — Upload your files
1. On the empty repo page, click "uploading an existing file"
2. Drag and drop ALL files: `index.html`, `style.css`, `main.js`, `cv.pdf`
3. Scroll down, type commit message: "Initial site launch"
4. Click "Commit changes"

### Step 4 — Enable GitHub Pages
1. Click the "Settings" tab in your repository
2. In the left sidebar, click "Pages"
3. Under "Source", select "Deploy from a branch"
4. Branch: choose `main` · Folder: choose `/ (root)`
5. Click "Save"
6. GitHub will show: "Your site is live at https://cngautam.github.io/cngautam.com"

### Step 5 — Connect your custom domain
1. Still in Settings → Pages, find "Custom domain"
2. Type: `cngautam.com` and click "Save"
3. Check "Enforce HTTPS" (may take a few minutes to appear)

### Step 6 — Update DNS at your domain registrar
Log in to wherever you bought `cngautam.com` (GoDaddy, Namecheap, Google Domains, etc.)

#### Add these 4 A Records:
| Type | Host/Name | Value | TTL |
|------|-----------|-------|-----|
| A | @ | 185.199.108.153 | Auto |
| A | @ | 185.199.109.153 | Auto |
| A | @ | 185.199.110.153 | Auto |
| A | @ | 185.199.111.153 | Auto |

#### Also add 1 CNAME Record:
| Type | Host/Name | Value | TTL |
|------|-----------|-------|-----|
| CNAME | www | cngautam.github.io | Auto |

DNS propagation takes 10 minutes to 48 hours. After that, visiting
https://cngautam.com will show your live website.

---

## Adding Your Photo

When you're ready to add your photo:
1. Save your headshot as `photo.jpg` (professional headshot, ideally square or portrait)
2. Drop it in the same folder as `index.html`
3. In `index.html`, find the `photo-placeholder` div and replace it with:

```html
<img src="photo.jpg" alt="C. N. Gautam, Ed.D." 
     style="width:100%; height:100%; object-fit:cover;" />
```

---

## Setting Up the Contact Form (Email Delivery)

The contact form currently shows a success message but doesn't send email.
To make it actually deliver messages to your inbox, use **Formspree** (free):

1. Go to https://formspree.io and create a free account
2. Create a new form — copy the form endpoint (looks like `https://formspree.io/f/xxxxxxxx`)
3. In `index.html`, find: `<form class="contact-form" onsubmit="handleForm(event)">`
4. Change it to: `<form class="contact-form" action="https://formspree.io/f/YOUR_ID" method="POST">`
5. Remove the `onsubmit` attribute
6. In `main.js`, you can delete the `handleForm` function

---

## Updating Content

- **Publications**: Edit the `.pub-entry` blocks in `index.html`
- **Courses**: Edit the `.course-card` blocks
- **Blog posts**: Edit the `.blog-card` blocks and link to separate post pages when ready
- **Media**: Edit the `.media-item` blocks
- **CV highlights**: Edit the `.cv-hl-item` entries and timeline

To push updates: go to your GitHub repo, click the file you want to edit,
click the pencil icon, make changes, and click "Commit changes."

---

## Need Help?

Ask Claude at claude.ai — share this README or paste your HTML/CSS
and request specific changes.
