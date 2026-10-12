# CRISP Lab — Website

A lightweight, no-build static website for the CRISP Lab (Dr. Mahathir Mohammad Bappy,
Department of Mechanical & Industrial Engineering, Louisiana State University).

Everything you normally need to change lives in **one file**: `assets/js/data.js`.
Edit it, save, refresh the page. No programming, no build step, no server required.

---

## How to preview locally

Just **double-click `index.html`** to open it in a browser. That's it.

(Or, for a more production-like preview, run `python3 -m http.server` in this folder
and open <http://localhost:8000>.)

## How to update content

Open **`assets/js/data.js`** in any text editor. It is organized into clearly labeled
sections:

| Want to change…            | Edit this section in `data.js` |
|----------------------------|--------------------------------|
| Lab name, tagline, address, email, social links | `site` |
| Home page intro + photo    | `home` |
| News / updates list        | `news` |
| People (director, students, alumni) | `team` |
| Research areas/projects     | `research` |
| Publications               | `publications` |
| Awards & honors            | `awards` |
| Lab equipment / facilities | `resources` |
| "Join Us" page text         | `join` |

Rules of thumb:
- Keep the quotes `"` around every value.
- Put a comma `,` between items.
- To **add** a person / publication / project, copy an existing `{ ... }` block,
  paste it right below, and edit the values.
- Lines marked **`TODO`** are placeholders to confirm or fill in.

### Adding a team member
Copy one `{ ... }` block inside `team` and set `category` to one of:
`"director"`, `"phd"`, `"ms"`, `"undergrad"`, or `"alumni"`.
Empty sections hide themselves automatically.

### Adding a photo
1. Put the image file in `assets/images/` (e.g. `jane-doe.jpg`).
2. Set `"image": "assets/images/jane-doe.jpg"` for that person.
If an image is missing, a neutral placeholder is shown automatically.

### Adding a publication
Copy a `{ ... }` block inside `publications`. Set `category` to
`"journal"`, `"conference"`, or `"preprint"`. They sort newest-first automatically.

---

## Pages
- `index.html` — Home (about + news)
- `research.html` — Research areas
- `team.html` — People
- `publications.html` — Publications
- `awards.html` — Awards
- `resources.html` — Lab equipment & computing facilities
- `join.html` — Open positions

### Adding lab equipment
Copy a `{ ... }` block inside `resources` and set `group` to a category such as
`"Computing"`, `"3D Printing"`, or `"Robotics"` (a new group name creates a new section).
Put the photo in `assets/images/` and reference it in `"image"`.

The sidebar, top navigation, and footer are shared across all pages and are generated
automatically from `data.js` — you do not edit them by hand.

---

## Publishing on GitHub Pages
1. Create a GitHub repository and upload the **contents of this `site/` folder**
   (so `index.html` sits at the repository root).
2. In the repo: **Settings → Pages → Build and deployment → Deploy from a branch**,
   choose `main` and `/ (root)`, then **Save**.
3. The site goes live at `https://<username>.github.io/<repo>/` within a minute or two.

No Jekyll or build configuration is needed — these are plain static files.

---

## Items to confirm (placeholders)
- **What "CRISP" stands for** — the sidebar tagline in `site.tagline` is a guess.
- **Lab group photo** for the home page (`home.image`) — currently a student photo.
- **LSU email addresses** for the Ph.D. students.
- Education/degree details marked `TODO` in `team`.
- Lab **GitHub** link (`site.github`), if one exists.
