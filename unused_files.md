# Unused and Documentation/Meta Files

This document lists files identified as likely unused or are documentation/meta files.

## Likely Unused Code Files

### Alternative Landing Page Sections & Pages

These components and pages appear to be part of an alternative landing page design (`EnhancedLandingPage` or `LandingPage`) that is not currently the active one (`LinearLandingPage`).

*   `components/landing/enhanced-founder-story-section.tsx`
*   `components/landing/enhanced-hero-section.tsx`
*   `components/landing/enhanced-landing-page.tsx`
*   `components/landing/features-section.tsx` (If `EnhancedLandingPage` is unused)
*   `components/landing/founder-story-section.tsx`
*   `components/landing/hero-section.tsx`
*   `components/landing/interactive-live-preview.tsx` (If `EnhancedHeroSection` is unused)
*   `components/landing/landing-page.tsx`

### Specific UI Components

These UI components from `components/ui/` were not found in traced imports of active pages or components. They might be part of a larger UI library (`shadcn/ui`) that were included but not specifically utilized.

*   `components/ui/accordion.tsx`
*   `components/ui/alert-dialog.tsx`
*   `components/ui/alert.tsx`
*   `components/ui/aspect-ratio.tsx`
*   `components/ui/avatar.tsx`
*   `components/ui/badge.tsx`
*   `components/ui/breadcrumb.tsx`
*   `components/ui/calendar.tsx`
*   `components/ui/carousel.tsx`
*   `components/ui/chart.tsx`
*   `components/ui/checkbox.tsx`
*   `components/ui/collapsible.tsx`
*   `components/ui/command.tsx`
*   `components/ui/context-menu.tsx`
*   `components/ui/dialog.tsx`
*   `components/ui/drawer.tsx`
*   `components/ui/dropdown-menu.tsx`
*   `components/ui/form.tsx`
*   `components/ui/hover-card.tsx`
*   `components/ui/input-otp.tsx`
*   `components/ui/input.tsx`
*   `components/ui/label.tsx`
*   `components/ui/menubar.tsx`
*   `components/ui/navigation-menu.tsx`
*   `components/ui/pagination.tsx`
*   `components/ui/popover.tsx`
*   `components/ui/progress.tsx`
*   `components/ui/radio-group.tsx`
*   `components/ui/resizable.tsx`
*   `components/ui/scroll-area.tsx`
*   `components/ui/select.tsx`
*   `components/ui/separator.tsx`
*   `components/ui/sheet.tsx`
*   `components/ui/sidebar.tsx`
*   `components/ui/skeleton.tsx`
*   `components/ui/slider.tsx`
*   `components/ui/sonner.tsx` (If `useToast` hook is not actively used or no Toasts are triggered)
*   `components/ui/success-feedback.tsx`
*   `components/ui/table.tsx`
*   `components/ui/tabs.tsx`
*   `components/ui/textarea.tsx`
*   `components/ui/toggle-group.tsx`
*   `components/ui/toggle.tsx`
*   `components/ui/tooltip.tsx`

*(Note: `components/ui/button.tsx` is used by `AlertDialogAction` within `alert-dialog.tsx`, and `toast.tsx` also uses button styling for actions. If `alert-dialog.tsx` is unused and no toast actions are implemented, the base `button.tsx` might be unused beyond its variant definitions.)*

### Other Components & Hooks

Miscellaneous components and hooks that don't appear to be actively used.

*   `components/examples/svg-text-demo.tsx`
*   `components/learning/explanation-panel.tsx`
*   `components/theme-provider.tsx`
*   `hooks/use-mobile.tsx`
*   `hooks/use-performance.ts`
*   `lib/component-registry.tsx`

### Missing File (Referenced but Not Found)

*   `components/learning/learning-interface.tsx`: This file is imported by the dynamic learning page (`app/learn/[moduleId]/[levelId]/page.tsx`) but is not present in the codebase. This will cause a runtime error if not addressed.

### CSS Files

*   `styles/globals.css`: This file might be redundant if all its styles are (or can be) consolidated into `app/globals.css` and it's not imported by any active part of the application.

## Documentation/Meta Files

These files are for documentation, project understanding, or development process and are not part of the application's executable runtime code.

*   `DIRECTORY_STRUCTURE.md`
*   `README.md`
*   `considerations.md`
*   `explanations.md`
*   `plansForErrors.md`
