import { Request, Response } from 'express';
import fs from 'fs';
import path from 'path';

const dbPath = path.resolve(__dirname, '../db.json');

interface Submission {
  name: string;
  email: string;
  phone: number;
  github_link: string;
  stopwatch_time: string;
}

const loadDB = (): { submissions: Submission[] } => {
  try {
    const data = fs.readFileSync(dbPath, 'utf8');
    return JSON.parse(data);
  } catch (error) {
    return { submissions: [] };
  }
};

const saveDB = (data: { submissions: Submission[] }) => {
  fs.writeFileSync(dbPath, JSON.stringify(data, null, 2), 'utf8');
};

export const ping = (req: Request, res: Response) => {
  res.send(true);
};

export const submit = (req: Request, res: Response) => {
  const { name, email, phone, github_link, stopwatch_time } = req.body;

  if (!name || !email || !phone || !github_link || !stopwatch_time) {
    return res.status(400).send('All fields are required.');
  }

  const db = loadDB();
  db.submissions.push({ name, email, phone, github_link, stopwatch_time });
  saveDB(db);

  res.status(201).send('Submission saved.');
};

export const read = (req: Request, res: Response) => {
  const index = parseInt(req.query.index as string);

  if (isNaN(index) || index < 0) {
    return res.status(400).send('Invalid index.');
  }

  const db = loadDB();
  const submission = db.submissions[index];

  if (!submission) {
    return res.status(404).send('Submission not found.');
  }

  res.send(submission);
};
