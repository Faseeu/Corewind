# Application Runtime Files

This document outlines the files and directories that are part of the application's runtime, organized by their main directories and roles.

## `app/`

Core application routing and pages.

*   `layout.tsx`: Main layout for the entire application.
    *   *Imports*: `app/globals.css`, `components/layout/header`, `components/ui/error-boundary`
*   `page.tsx`: Landing page.
    *   *Imports*: `components/landing/linear-landing-page`, `components/ui/error-boundary`
*   `globals.css`: Global styles, including Tailwind CSS setup and theme variables.
*   `dashboard/page.tsx`: Dashboard page.
    *   *Imports*: `components/dashboard/*`, `components/ui/error-boundary`
*   `instant-learning/page.tsx`: Page for instant learning modules.
    *   *Imports*: `components/instant-learning/instant-learning`
*   `learn/[moduleId]/[levelId]/page.tsx`: Dynamic page for individual learning lessons.
    *   *Imports*: `components/instant-learning/instant-learning` (assuming due to missing `learning-interface`), `components/ui/error-boundary`
*   `roadmap/module-one/page.tsx`, `roadmap/module-two/page.tsx`, `roadmap/module-three/page.tsx`: Pages for module roadmaps.
    *   *Imports*: Various UI components and `lib/curriculum`

## `components/`

Reusable React components.

*   **`dashboard/`**: Components specific to the dashboard.
    *   `continue-learning.tsx`
    *   `module-card.tsx`
    *   `modules-overview.tsx`
    *   `todays-tip.tsx`
    *   `welcome-header.tsx`
*   **`instant-learning/`**: Components for the interactive learning interface.
    *   `class-input.tsx`
    *   `component-preview.tsx`
    *   `component-stage.tsx`
    *   `continue-button.tsx`
    *   `instant-learning.tsx`
    *   `learning-header.tsx`
    *   `lesson-content.tsx`
    *   `live-preview.tsx`
    *   `missions-card.tsx`
    *   `pill-progress.tsx`
    *   `progress-circle.tsx`
    *   `success-modal.tsx`
    *   `task-header.tsx`
*   **`landing/`**: Components specific to the main landing page (`LinearLandingPage`).
    *   `linear-hero-section.tsx`
    *   `minimalist-founder-story.tsx`
    *   `linear-features-section.tsx`
    *   `how-it-works-section.tsx`
    *   `testimonials-section.tsx`
    *   `final-cta-section.tsx`
    *   `footer.tsx`
    *   `enhanced-sequential-demo.tsx` (and its internal `SequentialLiveDemo`)
    *   `optimized-floating-elements.tsx`
*   **`layout/`**: Layout-related components.
    *   `header.tsx`: Site header/navigation.
*   **`ui/`**: General-purpose UI components (subset confirmed used).
    *   `animated-button.tsx`
    *   `animated-card.tsx`
    *   `animated-progress.tsx`
    *   `aurora-text.tsx`
    *   `card.tsx`
    *   `enhanced-text-highlighter.tsx`
    *   `error-boundary.tsx`
    *   `staggered-container.tsx`
    *   `svg-text.tsx`
    *   `text-highlighter.tsx`
    *   `typewriter.tsx`
    *   `media-between-text.tsx` (used by alternative landing page components, which themselves are likely unused, but the components themselves are functional and runnable)
    *   `toast.tsx` (and its dependency `components/ui/button.tsx` for actions, if `hooks/use-toast.ts` is actively used)

## `hooks/`

Custom React hooks.

*   `use-toast.ts`: Hook for displaying toast notifications (conditionally active).

## `lib/`

Utility functions and data.

*   **`curriculum/`**: Curriculum data for modules.
    *   `module1.ts`
    *   `module2.ts`
    *   `module3.ts`
*   `curriculum.ts`: Aggregates curriculum data.
*   `utils.ts`: Utility functions (e.g., `cn` for class names).

## `public/`

Static assets directly served.

*   `placeholder-logo.png`
*   `placeholder-logo.svg`
*   `placeholder-user.jpg`
*   `placeholder.jpg`
*   `placeholder.svg`

## Root Configuration Files

*   `.gitignore`: Specifies intentionally untracked files for Git.
*   `components.json`: Configuration for `shadcn/ui`.
*   `next.config.mjs`: Next.js configuration.
*   `package.json`: Project metadata and dependencies.
*   `pnpm-lock.yaml`: Exact versions of dependencies.
*   `postcss.config.mjs`: PostCSS configuration.
*   `tailwind.config.ts`: Tailwind CSS configuration (references CSS variables from `app/globals.css`).
*   `tsconfig.json`: TypeScript configuration.
