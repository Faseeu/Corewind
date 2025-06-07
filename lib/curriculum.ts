// lib/curriculum.ts
import { curriculumModule1 } from "./curriculum/module1"
import { curriculumModule2 } from "./curriculum/module2"
import { curriculumModule3 } from "./curriculum/module3"
// ... other module imports

export const curriculum = [
  ...curriculumModule1,
  ...curriculumModule2,
  ...curriculumModule3,
  // ... other modules
]
