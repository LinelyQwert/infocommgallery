# InfoComm Gallery AI Coding Instructions

## Project Overview
A React + TypeScript photo gallery website built with Vite and Tailwind CSS. Displays event photos organized by year and event type (galleries, archives). Deployed via GitHub Pages to `https://linelyqwert.github.io/infocommgallery/`.

## Architecture

### Key Structure
- **Frontend**: React 19 with React Router DOM for client-side navigation
- **Build Tool**: Vite with TypeScript + Tailwind CSS v4
- **Routing**: Hash-based routing via react-router-dom (see [src/App.tsx](src/App.tsx))
  - `/#/gallery/2025/{event}` - Photo galleries
  - `/#/arc/2025` - Archives index
  - `/#/about` - About page

### Data Flow
1. **Python pipeline** generates JSON metadata from Google Drive folder IDs
2. **JSON files** stored in `src/pages/gallery/galleryJSONs/{year}/{event}.json`
3. **React pages** import JSON, map to `CardChip` components
4. **Images** served from `public/{event}/` with direct Google Drive download links

**JSON structure** (from [galleryJSONs/2025/farewell2025.json](src/pages/gallery/galleryJSONs/2025/farewell2025.json)):
```json
{
  "filename_key": {
    "id": "google_drive_id",
    "src": "public/path/image.jpg",
    "author": "Photographer name",
    "downlink": "google_drive_download_url",
    "url": "google_drive_thumbnail_url"
  }
}
```

### Component Hierarchy
- **App.tsx**: Routes definition
- **Home.tsx**: Landing page with event cards
- **Page components** (e.g., [Farewell2025.tsx](src/pages/gallery/2025/Farewell2025.tsx)):
  - Import event JSON
  - Shuffle images
  - Render `CardChip` components in flex grid
  - Back navigation link
- **CardChip.tsx**: Individual photo card with author attribution
- **Card.tsx**: Event card for navigation
- **Header.tsx**, **HeaderImage.tsx**: Page titles

## Adding New Galleries

1. **Run Python script** to generate JSON from Google Drive folder (see [downloadImages.py](main/src/scripts/downloadImages.py) comments for Colab link)
2. **Place images** in `public/{eventname}/` - names match JSON keys
3. **Place JSON** in `src/pages/gallery/galleryJSONs/{year}/{eventname}.json`
4. **Create page** - copy [Farewell2025.tsx](src/pages/gallery/2025/Farewell2025.tsx), update imports and metadata
5. **Register route** in [App.tsx](src/App.tsx) under correct year path
6. **Add card** to [Home.tsx](src/pages/Home.tsx) or archive page with route and image

## Build & Deployment

**Commands** (run in `/main` directory):
```bash
npm run dev         # Start dev server (http://localhost:5173/infocommgallery)
npm run build       # TypeScript compilation + Vite bundle
npm run lint        # ESLint check
npm run deploy      # Push to GitHub Pages (requires git commit first)
```

**Vite config** ([vite.config.ts](main/vite.config.ts)):
- Base path: `/infocommgallery/` (for GitHub Pages subfolder)
- Plugins: React, Tailwind CSS

**Deployment workflow**:
1. `npm run build`
2. Git commit changes
3. `npm run deploy` (uses gh-pages package, pushes `/dist` to gh-pages branch)
4. Access at GitHub Pages URL (may take ~1 min to update)

## Code Patterns & Conventions

**Gallery pages**:
- Import JSON directly: `import file_attrs from "../galleryJSONs/{year}/{name}.json"`
- Shuffle with: `[...imageList].sort(() => Math.random() - 0.5)`
- Iterate with `.map()` to render CardChip components
- Use Tailwind: `className="flex flex-wrap gap-2 items-centre justify-center"`

**Styling**:
- Tailwind CSS v4 (via `@tailwindcss/vite` plugin)
- Dark theme: `bg-zinc-900`, white text, `bg-black/50` overlays
- Responsive: `lg:text-2xl md:text-xl` for breakpoints
- Fixed full-height background: `fixed top-0 left-0 w-full h-full`

**Type safety**: TSConfig references `tsconfig.app.json` and `tsconfig.node.json`. Use strict TypeScript.

## Known Issues & Notes

- **GH Pages fix**: See README comment referencing https://github.com/tschaub/gh-pages/issues/585 if deployment fails
- **Image paths**: Public images referenced as relative paths (e.g., `"gradnight2025/photo.jpg"`)
- **Authors**: Extracted from filename during Python processing (format: `Author_MMDD_n`)
- **Archive pages** like Arc2025.tsx may be placeholder stubs for future expansion
