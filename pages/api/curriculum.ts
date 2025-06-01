// pages/api/curriculum.ts (Original Version)
import type { NextApiRequest, NextApiResponse } from 'next';
import path from 'path';
import fs from 'fs/promises';

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
  if (req.method !== 'GET') {
    res.setHeader('Allow', ['GET']);
    console.log(`API Route /api/curriculum: Method ${req.method} Not Allowed`);
    return res.status(405).json({ error: `Method ${req.method} Not Allowed` });
  }

  const jsonFilePath = path.join(process.cwd(), 'data', 'curriculum.json');
  console.log(`API Route /api/curriculum: Attempting to read file at ${jsonFilePath}`);

  try {
    const fileContents = await fs.readFile(jsonFilePath, 'utf-8');
    const jsonData = JSON.parse(fileContents) as CurriculumData;
    console.log("API Route /api/curriculum: Successfully read and parsed curriculum.json. Sending data.");
    res.status(200).json(jsonData);
  } catch (error) {
    // Log the detailed error on the server
    if (error instanceof Error) {
        console.error('API Route /api/curriculum: Error processing curriculum data:', error.message, error.stack);
    } else {
        console.error('API Route /api/curriculum: Unknown error processing curriculum data:', error);
    }
    // Send a generic error message to the client
    res.status(500).json({ error: 'Failed to load curriculum data from file system.' });
  }
}
