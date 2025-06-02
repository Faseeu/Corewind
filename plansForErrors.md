# Plans for Errors

This document outlines identified errors in the codebase and the steps taken or planned to rectify them.

## 1. `LearningInterface` Component Using Mock Data

*   **Issue:** The `components/learning/learning-interface.tsx` component was initially using hardcoded mock data for lessons instead of fetching data from the defined curriculum in `lib/curriculum.ts`. This prevented the actual curriculum from being used in the learning modules.
*   **Resolution:**
    *   Modified `LearningInterface` to accept `moduleId` and `lessonId` props.
    *   Implemented logic to fetch the correct lesson data from `lib/curriculum.ts` based on these props.
    *   Replaced the mock lesson data with the fetched curriculum data.
    *   Standardized internal parameter naming from `levelId` to `lessonId` to match the curriculum structure.
    *   Updated `app/learn/[moduleId]/[levelId]/page.tsx` (now intended to be `app/learn/[moduleId]/[lessonId]/page.tsx`) to pass the correct `lessonId`.
*   **Outstanding Issue:** The page file `app/learn/[moduleId]/[levelId]/page.tsx` was updated, but its parent directory `[levelId]` needs to be manually renamed to `[lessonId]` for dynamic routing to work correctly with the `lessonId` parameter. This is a limitation of automated refactoring for dynamic route segments.

## 2. Non-Standard `component: "text"` in Curriculum

*   **Issue:** Lessons in `lib/curriculum.ts` used `component: "text"`, which is not a standard HTML element. This would lead to incorrect rendering in the `LivePreview` component, defaulting to a generic `div`.
*   **Resolution:**
    *   Changed all instances of `component: "text"` to `component: "p"` in `lib/curriculum.ts` to represent paragraph text, which is more appropriate for the text-based lessons.
    *   Updated the `LivePreview` component (`components/learning/live-preview.tsx`) to specifically handle the `"p"` component type, rendering a `<p>` element with sample text.
