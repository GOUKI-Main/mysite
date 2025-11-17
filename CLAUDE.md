# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a Next.js 15.5.4 personal website built with React 19, TypeScript, and Tailwind CSS 4. The site features interactive animations using Framer Motion and p5.js, with support for both English and Japanese fonts. It includes a portfolio, about page, and Zenn blog integration.

## Development Commands

**Start development server:**

```bash
npm run dev
```

- Runs with Turbopack for faster hot reload
- Opens at http://localhost:3000

**Build for production:**

```bash
npm run build
```

- Uses Turbopack for compilation
- Generates static export

**Start production server:**

```bash
npm start
```

- Serves the static output using `npx serve@latest out`

**Lint code:**

```bash
npm run lint
```

## Architecture

### Layout Structure

The application uses a grid-based layout defined in `app/layout.tsx`:

- Grid template: `grid-rows-[auto_1fr_auto]` with overlapping rows
- Header: Fixed at top with emerald-950 background
- Main content: Scrollable with `overflow-y-auto no-scrollbar`, spans from row 1 to row -2
- Footer: Fixed at bottom with emerald-950 background
- Height: 100vh (full viewport height)

### Font Configuration

Three fonts are configured in `app/layout.tsx`:

- Geist Sans: Primary sans-serif font
- Geist Mono: Monospace font
- Noto Sans JP: Japanese font with Hiragino fallbacks
- Language: ja (Japanese)

All fonts use CSS variables for flexible theming.

### Pages

**Home Page (`app/page.tsx`):**
- Renders Hero and Myskills components
- Main landing page with interactive animations

**About Page (`app/about/page.tsx`):**
- Personal profile section with Framer Motion animations
- Full Stack Developer introduction in Japanese
- Contact section with X (Twitter) DM integration
- Uses stagger animation for smooth content reveal
- Includes social links with react-icons (FaXTwitter, FaGithub)

**Zenn Blog Page (`app/zennblog/page.tsx`):**
- Server-side rendered page that fetches all Zenn articles
- Integrates with Zenn API (`https://zenn.dev/api/articles?username=gouki_main`)
- Pagination support to fetch all articles across multiple pages
- Grid layout displaying article cards (1/2/3 columns on mobile/tablet/desktop)
- Static generation with `next: { revalidate: false }`

### Component Organization

**Layout Components (`app/components/layout/`):**
- `header.tsx`: Navigation header with links to Home, About, and Zenn Blog
- `footer.tsx`: Footer with logo component
- `footer-logo.tsx`: Footer logo component

**Section Components (`app/components/sections/`):**
- `hero.tsx`: Main hero section with interactive animations

**Skills Components (`app/components/sections/skills/`):**
- `myskills.tsx`: Skills section that renders all skill categories
- `skill-category.tsx`: Individual skill category display
- `skill-item.tsx`: Individual skill item with level indicator
- `levelinfo.tsx`: Level information display component

**UI Components (`app/components/ui/`):**
- `avoid-mouse-text.tsx`: Interactive text that moves away from mouse/touch
- `p5-animation.tsx`: p5.js-based animated circles component
- `asobi.tsx`: Additional experimental UI component

**Zenn Components (`app/zennblog/components/`):**
- `zennarticle.tsx`: Zenn article card component with:
  - Article emoji, title, and topics
  - Published date formatting (Japanese locale)
  - Article metadata (character count, likes)
  - Hover animations and emerald-themed styling
  - External links to Zenn articles

### Configuration & Types

**Type Definitions (`app/types/`):**
- `skillGroups.ts`: Union type for skill categories (Frontend Framework, Programming Language, Styling Framework, Backend Framework, Database, Mobile, Other)
- `skillType.ts`: Type definitions for skills data structure
- `zenn.ts`: Type definitions for Zenn API responses
  - `ZennArticle`: Individual article type with id, title, emoji, topics, etc.
  - `ZennArticlesResponse`: API response type with articles array and pagination

**Configuration (`app/connfigs/`):**
- `skillconfig.ts`: Skills data with name, level (0-100), and icon path for each skill grouped by category
- `levelDescriptionConfig.ts`: Defines skill level descriptions and ranges (0: 学習予定, 1-10: 概念理解, 11-30: 基礎レベル, 31-60: 中級レベル, 61-80: 上級レベル, 81-99: 指導者レベル, 100: 神)

### Key Technologies

**Core Framework:**
- Next.js 15.5.4 with Turbopack
- React 19
- TypeScript 5.9.3

**Animation & Interactivity:**
- Framer Motion (as "motion"): Used for spring-based physics animations and page transitions
- p5.js: Creative coding for canvas-based generative animations

**Styling:**
- Tailwind CSS 4 with @tailwindcss/postcss
- Responsive design with mobile-first approach
- Custom emerald-based color scheme throughout

**Icons:**
- react-icons (v5.5.0): Provides social media icons and UI elements

**Third-party Integrations:**
- Zenn API integration for blog content

### Important Implementation Details

**Client-Side Rendering:**
- Components using animations or browser APIs are marked with `"use client"`
- This includes AvoidMouseText, p5Animation, Hero, and About components

**Server-Side Rendering:**
- Zenn blog page uses async server components for data fetching
- Static generation for better performance

**p5.js Integration:**
- Dynamically imported to avoid SSR issues
- Uses refs to manage p5 instances and proper cleanup
- Responsive canvas sizing based on container dimensions

**AvoidMouseText Component:**
- Supports multi-line text with per-line font size configuration
- Uses pointer events for both mouse and touch input
- Calculates character positions and applies spring physics for avoidance
- Configurable influence radius, push force, colors, and alignment
- Multi-line support: Use `nnn` as a delimiter in the text prop to create line breaks

**Skills System:**
- Skills are organized by category types defined in `app/types/skillGroups.ts`
- Configuration is centralized in `app/connfigs/skillconfig.ts`
- Each skill has: name, level (0-100), and iconPath
- Skill icons should be placed in the `/public` directory

**Zenn Integration:**
- Fetches all articles using pagination loop
- Articles are displayed in reverse chronological order
- Each article card includes emoji, title, topics (max 3), publish date, character count, and likes
- Cards feature hover animations consistent with site theme

**TypeScript Configuration:**
- Path alias: `@/*` maps to root directory
- Target: ES2017
- Strict mode enabled

**Next.js Configuration:**
- Output mode: `export` (static site generation)
- Trailing slash enabled (`trailingSlash: true`)
- Image optimization disabled (`images.unoptimized: true`) for static export compatibility

## Development Notes

**Animation Best Practices:**
- Ensure proper cleanup in useEffect hooks to prevent memory leaks
- Both p5.js and Framer Motion components should remove event listeners and destroy instances on unmount

**Language:**
- The site uses Japanese as the primary language (lang="ja" in html tag)
- Consider this when adding content or meta tags
- Date formatting uses Japanese locale ('ja-JP')

**Styling Conventions:**
- Emerald color palette is used consistently throughout the site
- Dark mode support is implemented via Tailwind's dark: prefix
- Responsive breakpoints: mobile-first, then md: (tablet), lg: (desktop)

**Git Ignore:**
- Claude Code files (`.claude/`, `.claude_history`) are excluded
- Windows Zone.Identifier files are excluded
- Standard Next.js ignore patterns apply
