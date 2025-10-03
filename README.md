# Personal Webpage - STH Education Solutions

A modern educational services website built with Next.js (App Router), React 19, TypeScript 5, and Material UI 5. The site showcases programs, achievements, articles, and team members, with smooth in-page navigation and static export for deployment.

## Tech Stack
- Framework: Next.js (App Router, Server + Client Components)
- Language: TypeScript 5, React 19
- UI: Material UI (MUI) v5, Emotion
- Carousel: react-slick + slick-carousel
- ORM/DB: Prisma + PostgreSQL
- Linting: ESLint 9
- Build Output: Static export (`output: 'export'`) for GitHub Pages

## Key Features
- Full-bleed hero with transparent-to-solid navbar on scroll
- Hash-based in-page navigation (About, Testimonials, Achievements, Courses, Our Team, FAQ, Contact)
- Articles listing and detail pages (`/article`, `/article/[articleId]`)
- Course detail pages with optional price, detailed description, and current schedule
- Our Team section with responsive teacher cards
- Static generation for articles and courses (`generateStaticParams`)

## Environments
- Development: root at `http://localhost:3000` (no basePath)
- Production: `basePath` and `assetPrefix` set to `/education-website` (GitHub Pages)

Configure via environment variables in `.env`:
```
DATABASE_URL=postgresql://USER:PASSWORD@HOST:PORT/DB
NODE_ENV=development
```

## Directory Structure
```
app/
  globals.css              # Global styles (scroll padding, slick fixes)
  layout.tsx               # Root layout with MUI theme registry
  page.tsx                 # Homepage with hero + sections
  article/
    page.tsx               # Articles listing (SSG)
    [articleId]/page.tsx   # Article detail (SSG)
  courses/
    [courseId]/page.tsx    # Course detail (SSG)
  not-found.tsx

src/
  components/
    AboutSection.tsx
    AchievementGallery.tsx # react-slick carousel with custom MUI arrows
    CoursesSection.tsx     # Course cards grid (price optional)
    FAQSection.tsx
    Footer.tsx
    Navbar.tsx             # Transparent → solid on scroll, mobile menu
    OurTeamSection.tsx
    ScrollToTop.tsx
    StudentTestimonials.tsx
  data/
    getCourses.ts          # Prisma access, UI mapping (null → undefined)
    courses.ts             # Legacy sample data (not used in production)
  lib/
    prisma.ts              # Prisma client singleton
  theme/
    ThemeRegistry.tsx      # MUI theme, CssBaseline overrides, layout wrapper

prisma/
  schema.prisma            # Prisma schema (Course.price is optional)
  seed.ts                  # Seed script for Articles and Courses

public/
  background/background.jpg# Homepage hero background image
  favicon/icon_1.png       # Favicon
  favicon/icon_2.png       # Navbar/branding logo
```

## Data Model (Prisma)
```
model Course {
  id                   String  @id     // slug
  title                String
  description          String
  detailedDescription  String?
  currentSchedule      String?
  imageUrl             String?
  duration             String
  level                String
  price                String? // optional
  features             String[]
  color                String
  createdAt            DateTime @default(now())
  updatedAt            DateTime @updatedAt
}
```

## Development
Install dependencies and start the dev server:
```
npm install
npm run dev
```

Database setup (after editing `prisma/schema.prisma`):
```
npm run db:generate   # regenerate Prisma client
npm run db:push       # push schema to DB
npm run db:seed       # seed sample data
```

## Scripts
```
npm run dev           # Next.js dev server
npm run build         # Build for production (static export)
npm run start         # Preview production build
npm run lint          # Lint codebase
npm run db:generate   # prisma generate
npm run db:push       # prisma db push
npm run db:seed       # seed database
```

## Routing & SSG
- Dynamic routes: `/article/[articleId]`, `/courses/[courseId]`
- `generateStaticParams` used to export static pages for all IDs
- `dynamic = 'force-static'` ensures static generation

## UI Notes
- Navbar: transparent over hero; transitions to `#1976d2` with shadow after scrolling ~80px
- Colors and spacing follow MUI theme in `ThemeRegistry.tsx`
- Slick arrows use MUI `IconButton` with default slick arrow pseudo-elements suppressed in `globals.css`

## Deployment (GitHub Pages)
- Project is configured for static export with a production base path `/education-website`
- Build and export:
```
npm run build
```
- Deploy the `out/` directory to GitHub Pages (or any static host)

## Troubleshooting
- Prisma field errors after schema changes: regenerate client and push schema
```
npm run db:generate && npm run db:push && npm run db:seed
```
- Duplicate scrollbars: ensured `overflow` is not set on `html/body/#root`; see `ThemeRegistry.tsx`
- Carousel arrow white stripe: suppressed slick `:before` glyphs in `globals.css`

