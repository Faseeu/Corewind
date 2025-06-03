# Tailwind CSS Interactive Learning Platform

This project is an interactive platform designed to help users learn Tailwind CSS concepts through hands-on exercises and instant visual feedback.

[![Deployed on Vercel](https://img.shields.io/badge/Deployed%20on-Vercel-black?style=for-the-badge&logo=vercel)](https://vercel.com/fasios-projects/v0-corewind-ui-design)

## Overview

The application presents users with a series of learning modules, each broken down into small, manageable lessons. Each lesson tasks the user with applying specific Tailwind CSS classes to an HTML element to achieve a target visual state. The platform provides a live preview of the element as classes are applied.

This project was initially scaffolded using [v0.dev](https://v0.dev) and has been subsequently modified to build a structured learning curriculum.

## How to Use

1.  **Navigate to the Learning Section:** Access the learning modules through the `/learn` path.
2.  **Select a Module:** Choose a module to start learning (e.g., "Anatomy of a Box", "Text and Typography").
3.  **Complete Lessons:** Each module contains several lessons. In each lesson:
    *   Read the **instruction** provided.
    *   Use the **code input panel** to type in Tailwind CSS classes.
    *   Observe the **live preview** to see your changes in real-time.
    *   Aim to match the target styling described in the lesson.
    *   (Future feature: Check your solution and proceed to the next lesson.)

## Project Structure

Here's a brief overview of the key directories and files:

*   **`app/`**: Contains the Next.js pages and routing structure.
    *   **`app/learn/[moduleId]/[lessonId]/page.tsx`**: Dynamically renders lesson pages. (Note: The `[lessonId]` directory segment might currently be `[levelId]` and require manual renaming for optimal routing).
*   **`components/`**: Contains the React components used throughout the application.
    *   **`components/learning/learning-interface.tsx`**: The main component orchestrating the lesson experience (instruction panel, live preview, code input).
    *   **`components/learning/live-preview.tsx`**: Renders the HTML element that users style.
    *   **`components/learning/instruction-panel.tsx`**: Displays lesson details.
    *   **`components/learning/code-input-panel.tsx`**: Provides the interface for users to input Tailwind classes.
    *   **`components/ui/`**: Collection of reusable UI components (buttons, cards, etc.), likely from a UI library like Shadcn/UI.
*   **`lib/`**: Contains core library code and data.
    *   **`lib/curriculum.ts`**: Main curriculum index file. It imports module-specific curriculum arrays from the `lib/curriculum/` directory (e.g., `lib/curriculum/module1.ts`) and exports a unified `curriculum` array for the application.
    *   **`lib/curriculum/`**: Directory containing individual module files (e.g., `module1.ts`, `module2.ts`). Each file exports an array of lesson objects for that module.
    *   **`lib/utils.ts`**: Utility functions.
*   **`public/`**: Static assets like images and fonts.
*   **`styles/`**: Global styles.
*   **`README.md`**: This file. Provides an overview of the project.
*   **`plansForErrors.md`**: Documents identified errors in the codebase and the steps taken or planned to rectify them.
*   **`considerations.md`**: Outlines potential areas for future improvement, refactoring, or features.
*   **`next.config.mjs`, `tailwind.config.ts`, `tsconfig.json`**: Configuration files for Next.js, Tailwind CSS, and TypeScript.

## Developing and Editing the Curriculum

The curriculum is defined in `lib/curriculum.ts`. This file exports an array of module objects. Each module has:

*   `id`: A unique string identifier for the module.
*   `title`: The display title of the module.
*   `description`: A brief description of what the module covers.
*   `lessons`: An array of lesson objects.

Each lesson object has:

*   `id: string`: Unique identifier for the lesson (e.g., "m1-l1-width").
*   `main_title: string`: The primary, concise title for the lesson.
*   `secondary_title?: string`: An optional, more descriptive subtitle.
*   `difficulty_level?: string`: E.g., "absolute_beginner", "easy", "intermediate". (Modules also have a top-level `difficulty`).
*   `focus_concept?: string`: A brief description of the core concept being taught.
*   `instruction: string`: The task for the user, can include basic markdown like `**bold**`.
*   `starter_component_jsx?: string`: (Optional) The initial HTML structure for the live preview, rendered using `dangerouslySetInnerHTML`.
*   `target_classes?: string[]`: Array of Tailwind CSS class strings the user needs to apply to achieve the lesson goal.
*   `target_classes_to_remove?: string[]`: (Optional) Array of classes that should be removed if the user adds a conflicting class (e.g., remove `p-4` if `px-8` is added).
*   `target_classes_applied_to_selector?: string`: (Optional) A CSS selector (e.g., `".target-child"`) indicating which element within the `starter_component_jsx` the `target_classes` should be applied to by the user. If omitted, classes are typically applied to the root of `starter_component_jsx`.
*   `explanation?: { intro?: string; class_details?: Array<{ className: string; css_equivalent?: string; description: string; }>; key_takeaway?: string; expert_tip?: string; }`: (Optional) A detailed explanation object.
    *   `intro`: Introduction to the concept.
    *   `class_details`: Array explaining specific classes, their CSS equivalents, and descriptions.
    *   `key_takeaway`: A concise summary of the main learning point.
    *   `expert_tip`: Additional advice or best practices.
*   `hint?: string`: (Optional) A string providing a hint to the user.

**To add a new lesson:**

1.  Identify the module file in the `lib/curriculum/` directory (e.g., `module1.ts`).
2.  Add a new lesson object to the exported array in that file, following the structure above.
3.  Ensure your lesson `id` is unique within that module.

**To add a new module:**

1.  Create a new file for your module in the `lib/curriculum/` directory (e.g., `moduleX.ts`). This file should export an array of lesson objects for the module (e.g., `export const curriculumModuleX = [...]`), where each lesson follows the structure above.
2.  Open the main `lib/curriculum.ts` file. Import your new module array (e.g., `import { curriculumModuleX } from './curriculum/moduleX';`).
3.  Add your imported module array to the spread in the final exported `curriculum` array (e.g., `export const curriculum = [...curriculumModule1, ...curriculumModuleX];`).
4.  Ensure your module `id` (the top-level one in the module file) is unique globally.

## Error Tracking and Future Considerations

*   **`plansForErrors.md`**: Refer to this file for details on known bugs that have been or are being addressed.
*   **`considerations.md`**: Refer to this file for ideas on future development, potential refactoring, and non-critical improvements.

## Deployment

This project is configured for deployment on Vercel. Changes pushed to the main branch will trigger automatic deployments.

The original deployment was managed via [v0.dev](https://v0.dev). While this repository can be synced with v0.dev, direct modifications and curriculum development are now primarily managed here.
