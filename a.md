# Dynamic Routing and Reusable Components Documentation

This document outlines the files and directories that have been implemented or refactored to support dynamic routing for module roadmaps and improve code reusability.

## Dynamic Route Implementations

### 1. Roadmap Pages

*   **New Dynamic Route:** `app/roadmap/[moduleId]/page.tsx`
    *   This page dynamically renders roadmap details for a given module ID.
    *   It fetches data from `lib/curriculum.ts` based on the `moduleId` parameter in the URL.
    *   It replaces the previous static roadmap pages (`app/roadmap/module-one/`, `app/roadmap/module-two/`, etc.).

### 2. Learning Pages (Existing)

*   **Existing Dynamic Route:** `app/learn/[moduleId]/[levelId]/page.tsx`
    *   This page dynamically renders learning content for a specific lesson (`levelId`) within a module (`moduleId`).
    *   It serves as an example of how dynamic routing is utilized in the application.

## Key Data Source

*   **Curriculum Data:** `lib/curriculum.ts`
    *   This file aggregates all curriculum data, including module details and lesson content (via imports from `lib/curriculum/`).
    *   It is the central source of truth for module information used by the dynamic roadmap pages and navigation.
    *   The individual module files (e.g., `lib/curriculum/module1.ts`, `lib/curriculum/module2.ts`) define the specific content for each module.

## Navigation

*   **Header Navigation:** `components/layout/header.tsx`
    *   The header navigation (both desktop dropdown and mobile menu) has been updated to dynamically generate links to the roadmap pages (`/roadmap/[moduleId]`) using the data from `lib/curriculum.ts`.

## Refactored Static Pages (To be removed)

The following static roadmap page directories were refactored to use the new dynamic route and will be removed:

*   `app/roadmap/module-one/`
*   `app/roadmap/module-two/`
*   `app/roadmap/module-three/`
