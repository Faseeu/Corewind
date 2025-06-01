import type { NextApiRequest, NextApiResponse } from 'next';
import path from 'path';
import fs from 'fs/promises';

// Define a type for the expected structure of the curriculum data (optional but good practice)
// This should match the structure in your curriculum.json file
interface Lesson {
  id: string;
  title: string;
  description: string;
  instruction: string;
  targetClasses: string[];
  component: string; // Or a more specific type if you have one for components
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
  if (req.method !== 'GET') {
    res.setHeader('Allow', ['GET']);
    return res.status(405).json({ error: `Method ${req.method} Not Allowed` });
  }

  const jsonFilePath = path.join(process.cwd(), 'data', 'curriculum.json');

  try {
    // Read the JSON file
    const fileContents = await fs.readFile(jsonFilePath, 'utf-8');
    // Parse the JSON data
    const jsonData = JSON.parse(fileContents) as CurriculumData;

    // Send the JSON data as response
    res.status(200).json(jsonData);
  } catch (error) {
    console.error('Error processing curriculum data:', error); // Log the actual error on the server
    // In case of any error (file not found, JSON parse error, etc.)
    res.status(500).json({ error: 'Failed to load curriculum data' });
  }
}
