// pages/api/curriculum.ts (Temporary Debug)
import type { NextApiRequest, NextApiResponse } from 'next';

// Minimal types for the hardcoded data
interface Lesson {
  id: string;
  title: string;
  description: string;
  instruction: string;
  targetClasses: string[];
  component: string;
  hint?: string;
}
interface Module {
  id: string;
  title: string;
  description: string;
  lessons: Lesson[];
}
type CurriculumData = Module[];

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<CurriculumData | { error: string }>
) {
  if (req.method === 'GET') {
    // Hardcoded data for testing
    const testData: CurriculumData = [
      {
        id: "test-module-01",
        title: "Test Module (Hardcoded)",
        description: "This is a hardcoded module for debugging.",
        lessons: [
          { id: "test-lesson-01", title: "Test Lesson 1 (Hardcoded)", description: "Desc 1", instruction: "Do task 1", targetClasses: ["bg-red-500", "w-32", "h-32"], component: "div", hint: "Hint 1"}
        ]
      }
    ];
    console.log("API Route /api/curriculum called (hardcoded_debug): Sending testData");
    res.status(200).json(testData);
  } else {
    console.log(`API Route /api/curriculum called (hardcoded_debug): Method ${req.method} Not Allowed`);
    res.setHeader('Allow', ['GET']);
    res.status(405).json({ error: `Method ${req.method} Not Allowed` });
  }
}
