# Portfolio Website - Agent Documentation

## Project Overview

A premium, production-quality personal portfolio website for Nithish Kumar (Software Engineer). Built with React, TypeScript, Tailwind CSS, and Framer Motion.

**Design Philosophy**: Dark-first, premium Awwwards-style interaction with developer/IDE-inspired aesthetics. The site feels like a product built by an engineer, not a résumé placed on a webpage.

## Tech Stack

- **Framework**: React 18 with TypeScript
- **Build Tool**: Vite
- **Styling**: Tailwind CSS with custom design system
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Deployment**: GitHub Pages (via `/portfolio` base path)

## Project Structure

```
portfolio/
├── src/
│   ├── components/          # All React components
│   │   ├── About.tsx
│   │   ├── Certifications.tsx
│   │   ├── Contact.tsx
│   │   ├── Console.tsx
│   │   ├── CustomCursor.tsx
│   │   ├── Experience.tsx
│   │   ├── GitHub.tsx
│   │   ├── Hero.tsx
│   │   ├── Loader.tsx       # Instant loading screen
│   │   ├── Navigation.tsx
│   │   ├── Projects.tsx
│   │   └── Stack.tsx
│   ├── config/              # Local configuration files (no external dependencies)
│   │   ├── certifications.ts
│   │   ├── experience.ts
│   │   ├── personal.ts
│   │   ├── projects.ts
│   │   ├── seo.ts           # SEO metadata
│   │   ├── skills.ts
│   │   └── social.ts
│   ├── App.tsx              # Main app with lazy loading and loader
│   ├── index.css            # Global styles and Tailwind imports
│   ├── main.tsx             # Entry point
│   └── types.ts             # TypeScript interfaces
├── portfolio-data/          # Cloned data repository (CSV files)
│   ├── certifications.csv
│   ├── education.csv
│   ├── experience.csv
│   ├── projects.csv
│   ├── skills.csv
│   └── resources/           # Images and certificates
├── public/                  # Static assets
│   ├── robots.txt           # SEO robots file
│   └── sitemap.xml          # SEO sitemap
├── index.html               # SEO metadata and structured data
├── package.json
├── tailwind.config.js       # Custom design system
├── tsconfig.json
└── vite.config.ts
```

## Design System

### Colors
- `background`: #0a0a0a (near-black)
- `surface`: #111111
- `surfaceLight`: #1a1a1a
- `border`: #222222
- `borderLight`: #333333
- `text`: #f5f5f5 (off-white)
- `textMuted`: #a3a3a3
- `textDim`: #525252
- `accent`: #3b82f6 (blue)
- `accentHover`: #2563eb

### Typography
- **Headings/Body**: Inter (Google Fonts) with font-display: swap
- **Technical/Code**: JetBrains Mono (Google Fonts) with font-display: swap
- **Hero**: clamp(3rem, 10vw, 8rem)
- **Display**: clamp(2rem, 5vw, 4rem)
- **Title**: clamp(1.5rem, 3vw, 2.5rem)
- **Subtitle**: clamp(1rem, 2vw, 1.25rem)

### Spacing
- Custom spacing up to 144px (36rem)
- Generous whitespace throughout

## Configuration Files

All personal data is stored locally in `src/config/`:

- **personal.ts**: Name, role, tagline, company, location, bio, stats
- **experience.ts**: Work history with responsibilities, technologies, achievements
- **projects.ts**: Project details with tech stack, links, images
- **skills.ts**: Technical skills categorized by type
- **certifications.ts**: Certifications with verification links
- **social.ts**: GitHub, LinkedIn, email, resume links
- **seo.ts**: SEO metadata (title, description, keywords, Open Graph, Twitter)

**Important**: Do not depend on external APIs or data sources. All data should be in these local config files.

## Loading System

### Instant Loader
The portfolio features an instant loading screen that appears immediately while the main content loads in the background.

**Loader Messages** (rotates through):
- INITIALIZING NITHISH.K
- LOADING EXPERIENCE
- PREPARING PROJECTS
- INITIALIZING ENGINEERING STACK
- LOADING CASE STUDIES
- BUILDING INTERFACE
- OPTIMIZING EXPERIENCE
- ALMOST READY
- SYSTEM ONLINE

**Implementation**:
- Loader renders immediately on mount
- Minimum 2.5s display to show loading experience
- Progress bar with percentage
- Smooth transition to main content
- Lightweight (no heavy dependencies)

## Performance Optimizations

1. **Instant Loader**: Shows immediately, no blank screen
2. **Lazy Loading**: All components below the fold use React.lazy() with Suspense
3. **Simplified Animations**: Reduced animation complexity (0.5s duration)
4. **Image Optimization**: Native lazy loading for project images
5. **Font Optimization**: font-display: swap for faster rendering
6. **Preconnect**: DNS preconnect for Google Fonts
7. **Minimal Dependencies**: Only essential packages (React, Framer Motion, Tailwind, Lucide)
8. **Code Splitting**: Automatic via Vite and React.lazy

## SEO Optimization

### Meta Tags
- **Title**: Nithish Kumar | Software Engineer in Chennai, India
- **Description**: Professional meta description with keywords
- **Keywords**: Natural keyword inclusion (not stuffed)
- **Canonical URL**: https://nithishkumar2004.github.io/portfolio/
- **Robots**: Index, follow with proper Googlebot directives

### Open Graph
- og:type, og:url, og:title, og:description, og:image, og:site_name

### Twitter/X
- twitter:card, twitter:url, twitter:title, twitter:description, twitter:image

### Structured Data (JSON-LD)
- **Person**: Name, jobTitle, description, url, sameAs (GitHub, LinkedIn), address, worksFor
- **WebSite**: Name, url, description, author
- **ProfilePage**: dateCreated, dateModified, mainEntity

### Semantic HTML
- Single H1: "Nithish Kumar"
- H2s: Software Engineer — Chennai, India, Selected Work, Experience, Technical Stack, About, Contact
- Proper heading hierarchy
- Descriptive alt text for images
- Semantic links with proper rel attributes

### Local SEO
- Location references: Chennai, Tamil Nadu, India
- Naturally integrated in content (About, Contact, Experience)
- Not keyword-stuffed

### SEO Files
- **robots.txt**: Allows indexing, points to sitemap
- **sitemap.xml**: Lists main portfolio URL

## Development

### Start Dev Server
```bash
npm run dev
```
Server runs at http://localhost:5173/portfolio/

### Build for Production
```bash
npm run build
```

### Type Check
```bash
npm run typecheck
```

### Lint
```bash
npm run lint
```

## Deployment

The site is configured for GitHub Pages with base path `/portfolio`.

To deploy:
1. Build the project: `npm run build`
2. Deploy the `dist` folder to GitHub Pages
3. Ensure GitHub repo settings have source set to `gh-pages` branch

## Component Architecture

### Core Components
- **Loader**: Instant loading screen with progress bar and messages
- **Navigation**: Sticky nav with availability indicator
- **Hero**: Cinematic intro with minimal animations, H1 for SEO
- **Projects**: Editorial showcase with hover interactions, H2
- **Console**: Interactive terminal component
- **Experience**: Vertical timeline with company links, H2
- **Stack**: Interactive technical visualization, H2
- **GitHub**: Repository showcase (no fake data), H2
- **About**: Statistics and bio with location, H2
- **Certifications**: Certification grid with links, H2
- **Contact**: CTA and social links with location, H2
- **CustomCursor**: Desktop-only custom cursor

### Animation Guidelines
- Keep animations purposeful and minimal
- Use Framer Motion for all animations
- Duration: 0.5s for most animations
- Use `viewport={{ once: true }}` for scroll-triggered animations
- Avoid complex scroll-based animations in Hero
- Loader has its own animation system

## Responsive Design

- **Desktop** (1024px+): Full experience with custom cursor
- **Tablet**: Maintains visual hierarchy
- **Mobile**: Simplified interactions, no custom cursor

## Data Updates

To update personal information:

1. Edit the appropriate file in `src/config/`
2. For SEO updates, edit `src/config/seo.ts` and `index.html`
3. For new projects, add to `projects.ts` with image URL
4. For new experience, add to `experience.ts`
5. For new certifications, add to `certifications.ts`

## Important Notes

- The `portfolio-data` folder contains CSV files that were used to populate the config files
- Do not modify the CSV files directly; update the TypeScript config files instead
- The portfolio uses local data only - no external API dependencies
- Images are hosted on GitHub raw (portfolio-data repository)
- All links should open in new tabs with `rel="noopener noreferrer"`
- SEO metadata is in both `src/config/seo.ts` and `index.html`
- Update sitemap.xml date when deploying

## Future Enhancements

Potential additions (not currently implemented):
- GitHub API integration for live contribution data
- Case study pages for each project
- Blog section
- Dark/light mode toggle
- More complex animations (if performance allows)

## Browser Compatibility

- Modern browsers (Chrome, Firefox, Safari, Edge)
- Requires JavaScript enabled
- Custom cursor only on desktop (1024px+)
- Font-display: swap ensures text is visible even if fonts are loading
