# Future Considerations and Improvements

This document outlines potential areas for future improvement, refactoring, or features that are not critical errors but could enhance the project's robustness, scalability, and user experience.

## 1. Scalability of Curriculum Data (`lib/curriculum.ts`)

*   **Consideration:** Currently, the entire curriculum is stored in a single TypeScript file (`lib/curriculum.ts`). As the number of modules and lessons grows, this file could become very large and difficult to manage.
*   **Potential Improvements:**
    *   Splitting the curriculum into multiple files (e.g., one file per module).
    *   Storing curriculum data in JSON files, which can be dynamically imported.
    *   Using a database or a headless CMS to manage curriculum content, especially if non-developers need to edit it.

## 2. Error Handling for Missing Curriculum Data

*   **Consideration:** While the `LearningInterface` now has a basic fallback for missing lessons (logs a warning and shows a "Lesson Not Found" message), a more user-friendly approach could be implemented.
*   **Potential Improvements:**
    *   Displaying a dedicated "404 - Lesson Not Found" page or component.
    *   Redirecting the user to the main curriculum overview page if a specific lesson isn't found.
    *   Providing clearer error messages to the user.

## 3. State Management for User Progress

*   **Consideration:** The application currently lacks a system for tracking user progress through modules and lessons. The `LearningInterface` uses local component state (`useState`) for applied classes within a single lesson.
*   **Potential Improvements:**
    *   Implement a more robust state management solution (e.g., React Context, Zustand, Redux Toolkit) to track completed lessons, current module, etc.
    *   Persist user progress using browser local storage for client-side persistence.
    *   For a more comprehensive solution, integrate a backend service to store user accounts and progress.

## 4. Naming Convention for Route Parameters (`levelId` vs. `lessonId`)

*   **Consideration:** There was an initial inconsistency in naming conventions for route parameters. The dynamic route was `[levelId]` while the curriculum data structure used `lesson.id`.
*   **Status:** This has been largely addressed by updating the `LearningInterface` and the page component to use `lessonId`.
*   **Note:** The directory `app/learn/[moduleId]/[levelId]` still needs tobe manually renamed to `app/learn/[moduleId]/[lessonId]` to fully align the routing with the code changes. This was noted in `plansForErrors.md`.

## 5. Enhancing `LivePreview` Component

*   **Consideration:** The `LivePreview` component currently supports `div`, `button`, and `p` elements. It could be expanded to support a wider range of HTML elements relevant to Tailwind CSS instruction.
*   **Potential Improvements:**
    *   Add more cases to the `switch` statement in `renderComponent` for other common HTML elements (e.g., `img`, `span`, `input`, `h1`-`h6`).
    *   Develop a more dynamic rendering system if the list of supported components becomes very large.

## 6. Advanced `LivePreview` Targeting and Rendering

*   **Consideration:** With the introduction of `starter_html_structure`, the `LivePreview` component now renders more complex HTML. However, applying user-inputted classes (`appliedClasses`) is currently limited (e.g., to the wrapper of the injected HTML). Many new lessons require applying classes to specific nested elements within the `starter_html_structure`, or applying different sets of classes to different elements (e.g., `targetClassesParent` vs. `targetClassesChild1`).
*   **Potential Improvements:**
    *   Implement a `targetSelector` property in lessons: `LivePreview` could use this CSS selector to identify the specific element within the `starter_html_structure` to which `appliedClasses` should be applied.
    *   Enhance `LivePreview` to understand complex `targetClasses` objects (e.g., `{ parent: [], child1: [], general: [] }`). This would involve more sophisticated logic to parse this object and apply class lists to the correct elements, potentially identified by selectors or indices.
    *   Improve the `dangerouslySetInnerHTML` usage with DOM purification (e.g., using a library like DOMPurify) if curriculum content could ever come from less trusted sources, though currently it's from a local file.
    *   Develop a more robust way to manage and merge classes defined in `starter_html_structure` with user-applied classes on the target element.

## 7. Validation Logic for Complex Lesson Targets

*   **Consideration:** The current lesson completion check (`isComplete` in `InstructionPanel`) simply verifies if all classes in `lesson.targetClasses` (assuming it's a flat array) are present in `appliedClasses`. This will not be sufficient for lessons with:
    *   `starter_html_structure` where classes need to be applied to specific nested elements.
    *   Complex `targetClasses` objects (e.g., `targetClassesParent`, `targetClassesChild1`).
*   **Potential Improvements:**
    *   Develop a more sophisticated validation engine that can:
        *   Inspect the DOM structure rendered by `LivePreview` based on `starter_html_structure`.
        *   Verify that the correct classes from the `targetClasses` object (or its variants) are applied to the intended elements (identified by selectors or structure).
    *   This may require `CodeInputPanel` and `LearningInterface` to manage multiple sets of `appliedClasses` if the user is expected to style different elements independently within one lesson. (This is a significant architectural consideration).
    *   The definition of "lesson completion" will need to be more nuanced.
