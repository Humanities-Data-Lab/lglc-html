# LGLC Demo Pages

This folder contains **design-only demos** of each page type used in the Lesbian and Gay Liberation in Canada (LGLC) website templates. They are static HTML mockups for layout and visual reference.

**Note:** These are not functional pages. Navigation links between demos work within this folder, but links to the live site (e.g. Search Database, Resources, Contact, external URLs) are placeholders and will not point to real content. Forms, search, and other interactive features are not implemented.

---

## What each page is

| File | Description |
|------|-------------|
| **index.html** | **Demo index** — List of all demo pages with links. Use this as the entry point to browse the demos. Includes a link back to the main site `index.html`. |
| **landing.html** | **Landing (home) page** — Hero section, featured historical image, “How do I get started” cards (datasets, search guide, ethics), about section with subheadings and body copy, and “Meet our team” call-to-action. |
| **about.html** | **About page** — Project overview: “What is Lesbian and Gay Liberation in Canada?”, content warning, “A Selected Annotated Chronology” (with links to the two volumes), “What is Gay Liberation?”, full team list (Co-Directors, Collaborators, Managing Editor, Research Assistants, Developers, etc.), acknowledgements, and “Cite This Source”. |
| **editorial-principles.html** | **Editorial Principles page** — Explains how the project works: Our Stories, Sources, A Note on Language, CWRC, Technical Specifications, and Contact Us. |
| **event.html** | **Event record page** — Single event template: title and meta lines, Details content box, Citations section, and Related results (affiliated events, persons, places, organizations) in a 4-column grid. |
| **person.html** | **Person record page** — Single person template (e.g. Jane Rule): name, “also known as”, birth/death, external link (e.g. VIAF), Biography content box, Occupation list, Order of merit, and Related results (associated people, places, events, periodicals). |
| **place.html** | **Place record page** — Single place template: place name and meta, and Related results (affiliated people, affiliated events) in a 3-column grid. |
| **periodical.html** | **Periodical record page** — Single periodical template: title and meta, and Related results (Authored by, Affiliated events, Affiliated places) in a 3-column grid. |
| **organization.html** | **Organization record page** — Single organization template: name and meta, and Related results (affiliated persons, events, periodicals) in a 3-column grid. |

---

## How to view

Open `demo/index.html` in a browser (from the project root or via a local server). From there you can open any of the demo pages. Assets (CSS, images, JS) use paths like `../css/` and `../media/`, so the demo folder must stay next to the project’s `css/`, `media/`, and `js/` directories.
