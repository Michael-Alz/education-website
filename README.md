# STH Education Solutions - Educational Services Website

A comprehensive educational services website built with Next.js (App Router), React 19, TypeScript 5, and Material UI 5. The site showcases tutoring programs, student achievements, team members, and educational resources with modern UI/UX and responsive design.

## Tech Stack
- **Framework:** Next.js 15 (App Router, Server + Client Components)
- **Language:** TypeScript 5, React 19
- **UI Library:** Material UI (MUI) v5 with Emotion CSS-in-JS
- **Carousel:** react-slick + slick-carousel
- **Database:** Prisma ORM + PostgreSQL
- **Styling:** CSS-in-JS with MUI theme system
- **Linting:** ESLint 9
- **Build:** Static export for GitHub Pages deployment

## Key Features
- **Hero Section:** Full-width background image with transparent-to-solid navbar transition on scroll
- **Navigation:** Smooth scroll navigation with responsive mobile menu
- **Course System:** Comprehensive course catalog with detailed descriptions, schedules, and optional pricing
- **Team Profiles:** Detailed team member cards with photos, bios, and specialties
- **Student Testimonials:** Video carousel showcasing student success stories
- **Achievement Gallery:** Interactive carousel displaying student accomplishments
- **FAQ Section:** Expandable accordion with common questions and answers
- **Contact Information:** Complete contact details with WeChat QR code integration
- **Responsive Design:** Mobile-first approach with adaptive layouts
- **Static Generation:** Pre-rendered pages for optimal performance

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
  globals.css              # Global styles, slick carousel fixes, scroll behavior
  layout.tsx               # Root layout with MUI theme registry and favicon
  page.tsx                 # Homepage with hero section and all components
  article/
    page.tsx               # Articles listing (Static Site Generation)
    [articleId]/page.tsx   # Article detail pages (SSG)
  courses/
    [courseId]/page.tsx    # Course detail pages (SSG)
  not-found.tsx            # 404 error page

src/
  components/
    AboutSection.tsx       # Company mission and values
    AchievementGallery.tsx # Student achievements carousel with custom arrows
    CoursesSection.tsx     # Course catalog grid with optional pricing
    FAQSection.tsx         # Frequently asked questions accordion
    Footer.tsx             # Contact info, WeChat QR, company details
    HomeScrollClient.tsx   # Client-side scroll behavior
    Navbar.tsx             # Responsive navigation with scroll transitions
    OurTeamSection.tsx     # Team member profiles with detailed bios
    ScrollToTop.tsx        # Back to top functionality
    SectionClient.tsx      # Client-side section utilities
    StudentTestimonials.tsx# Legacy text testimonials (deprecated)
    StudentVideoTestimonials.tsx # Video testimonials carousel
  data/
    getCourses.ts          # Prisma database access and UI mapping
    courses.ts             # Legacy course data (unused in production)
  lib/
    prisma.ts              # Prisma client singleton configuration
  theme/
    ThemeRegistry.tsx      # MUI theme configuration and CSS baseline

prisma/
  schema.prisma            # Database schema with Course and Article models
  seed.ts                  # Database seeding script with course data

public/
  background/
    background.jpg         # Homepage hero background image
  favicon/
    icon_1.png            # Website favicon
    icon_2.png            # Navbar logo and branding
  photos/
    kevin_liu.png         # Kevin Liu headshot
    jocelyn.jpg           # Jocelyn Palmer headshot
    victoria_xian.jpg     # Victoria Xian headshot
  wechat/
    qr_code.jpg           # WeChat QR code for contact
```

## Data Model (Prisma)
```
model Course {
  id                   String  @id     // URL slug (e.g., "ap-physics-1")
  title                String            // Display title
  description          String            // Short description for cards
  detailedDescription  String?           // Full course details
  currentSchedule      String?           // Current class schedule
  imageUrl             String?           // Course hero image
  duration             String            // Course length (e.g., "12 weeks")
  level                String            // Difficulty level
  price                String?           // Optional pricing information
  features             String[]          // Key features array
  color                String            // Theme color for UI
  createdAt            DateTime @default(now())
  updatedAt            DateTime @updatedAt
}

model Article {
  id          String   @id @default(cuid())
  title       String
  content     String
  excerpt     String?
  publishedAt DateTime @default(now())
  updatedAt   DateTime @updatedAt
}
```

## Course Catalog
The website features comprehensive tutoring programs including:
- **AP Courses:** Physics 1/2, Physics C, Pre-Calculus, Calculus AB/BC, Statistics, Chemistry
- **A-Level:** Physics, Mathematics, Chemistry
- **IB Programs:** Math HL/SL, Physics HL/SL, Chemistry HL/SL
- **Contest Prep:** Physics Bowl, AMC 8/10/12
- **Test Preparation:** SAT/PSAT, TOEFL, IELTS, GRE, GMAT

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

## Team Members
- **Kevin Liu** - Founder & Lead Educator (Physics, Chemistry, Calculus, SAT Math)
- **Jocelyn C. Palmer** - College Admissions Consultant (Essay Writing, Common App, SAT/ACT)
- **Victoria Xian** - English & Test Prep Specialist (TOEFL, IELTS, SAT/ACT, AP Language)

## UI/UX Features
- **Responsive Design:** Mobile-first approach with adaptive breakpoints
- **Scroll Transitions:** Navbar changes from transparent to solid with color transitions
- **Interactive Elements:** Hover effects, smooth scrolling, and animated transitions
- **Video Integration:** Student testimonial videos with pause-on-switch functionality
- **Custom Styling:** MUI theme customization with company branding colors
- **Accessibility:** Proper ARIA labels, keyboard navigation, and screen reader support

## Performance Optimizations
- **Static Site Generation:** Pre-rendered pages for fast loading
- **Image Optimization:** Responsive images with proper sizing
- **Code Splitting:** Dynamic imports for carousel components
- **CSS Optimization:** Emotion CSS-in-JS with server-side rendering
- **Database Efficiency:** Prisma ORM with optimized queries

## Deployment (GitHub Pages)
- **Configuration:** Static export with production base path `/education-website`
- **Build Process:**
```bash
npm run build
```
- **Deployment:** Upload the `out/` directory to GitHub Pages or any static host
- **Environment Variables:** Configure `DATABASE_URL` for production database

## Troubleshooting
- **Prisma Schema Changes:** Always regenerate client after schema updates
```bash
npm run db:generate && npm run db:push && npm run db:seed
```
- **Scroll Issues:** Check for duplicate scrollbars in `ThemeRegistry.tsx`
- **Carousel Problems:** Verify slick carousel CSS imports in `globals.css`
- **Next.js 15 Warnings:** Ensure `params` are awaited in dynamic routes
- **Video Playback:** Check AWS CloudFront URLs and CORS settings

## Contact Information
- **Phone:** +1 (562)-968-4306 (US)
- **Address:** 23107 Catalina Harbor CT, Katy, TX 77494, USA
- **WeChat:** KevinLiu_ED (QR code available on website)
- **Email:** info@eduexcellence.com

