# Denys Harkusha — Frontend Developer

Personal portfolio for a Prague-based Frontend Developer working with React, TypeScript, HTML, CSS and Tailwind CSS. Includes commercial experience, personal and learning projects, contact details and a downloadable CV.

[Live portfolio](https://denyshv1.github.io/DENYS_HV-PORTFOLIO/)

## Local development

The site uses Vite, HTML partials, CSS and JavaScript modules. Use Node.js 22 or later.

```sh
npm ci
npm run dev
```

## Production build

```sh
npm run build
npm run preview -- --base=/DENYS_HV-PORTFOLIO/
```

The build is written to `dist/` with the `/DENYS_HV-PORTFOLIO/` base path. Open the portfolio at that path when using the production preview. Pushes to `main` trigger the existing GitHub Actions workflow, which builds the site and publishes `dist/` to the `gh-pages` branch.

## Content locations

- `src/partials/`: shared navigation, profile, skills, project sections, contact details and footer.
- `src/*.html`: page titles, metadata and category introductions.
- `src/data/project-arr.js`: project names, links, categories, technologies and visibility.
- `src/data/hocksArr.js`: hooks and libraries displayed on the reference page.
- `src/public/cv/Denys_Harkusha_Frontend_Developer_CV.pdf`: current downloadable CV. HTML links use `%BASE_URL%cv/Denys_Harkusha_Frontend_Developer_CV.pdf` so they work under the deployment base path.
- `src/css/`: site styling.

When refreshing the profile, keep the visible content, metadata and CV consistent. Preserve existing project URLs unless a replacement is verified. The contact form uses the existing Formspree integration in `src/partials/contact.html` and `src/form.js`.
