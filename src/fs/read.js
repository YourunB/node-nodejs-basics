import { promises as fs } from 'fs';
import path from 'path';

const filePath = path.join(process.cwd(), 'src/fs/files/fileToRead.txt');

const read = async () => {
  try {
    const text = await fs.readFile(filePath, 'utf-8');
    console.log(text);
  } catch {
    console.error('Error: FS operation failed');
  }
}

await read();