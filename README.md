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
    *   **`lib/curriculum.ts`**: Defines the structure and content of all learning modules and lessons. This is the primary file to edit when modifying or adding curriculum content.
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

*   `id`: A unique string identifier for the lesson (within the module).
*   `title`: The display title of the lesson.
*   `description`: A brief description of the lesson's goal.
*   `instruction`: The specific task for the user.
*   `targetClasses`: An array of Tailwind CSS class strings. For more complex scenarios, this can be an object like `{ parent: string[], child1: string[], ... }` to target specific parts of the `starter_html_structure` (Note: current validation and class application primarily targets a single main element).
*   `component`: The type of HTML element to be rendered for the lesson (e.g., `"div"`, `"button"`, `"p"`). This is used if `starter_html_structure` is not provided.
*   `starter_html_structure?: string;` (Optional) The initial HTML structure for the lesson's live preview. This is rendered using `dangerouslySetInnerHTML`.
*   `learnings?: string[];` (Optional) An array of strings describing the key concepts taught in the lesson.
*   `hint?: string;` (Optional) A string providing a hint to the user.

**To add a new lesson:**

1.  Open `lib/curriculum.ts`.
2.  Find the module you want to add the lesson to.
3.  Add a new lesson object to its `lessons` array, following the structure above.
4.  Ensure your `id` is unique within that module.

**To add a new module:**

1.  Open `lib/curriculum.ts`.
2.  Add a new module object to the main `curriculum` array, following the structure above.
3.  Ensure your `id` is unique globally.
4.  Add at least one lesson to the module.

## Error Tracking and Future Considerations

*   **`plansForErrors.md`**: Refer to this file for details on known bugs that have been or are being addressed.
*   **`considerations.md`**: Refer to this file for ideas on future development, potential refactoring, and non-critical improvements.

## Deployment

This project is configured for deployment on Vercel. Changes pushed to the main branch will trigger automatic deployments.

The original deployment was managed via [v0.dev](https://v0.dev). While this repository can be synced with v0.dev, direct modifications and curriculum development are now primarily managed here.
