// lib/curriculum.ts
import { curriculumModule1 } from "./curriculum/module1"
// import { curriculumModule2 } from './curriculum/module2'; // Example for future
// ... other module imports

// Define an interface or type for a single lesson and a single module if not already present
// For now, assume the structure within module1.ts is the source of truth for types.
// A more robust solution would define these types explicitly and share them.

export const curriculum = [
  ...curriculumModule1,
  // ...curriculumModule2, // Example for future
  // ... other modules
]
