import { promises as fs } from 'fs';
import path from 'path';

const folderPath = path.join(process.cwd(), 'src/fs/files');

const list = async () => {
  try {
    const files = await fs.readdir(folderPath);
    files.forEach(file => console.log(file));
  } catch (err) {
      console.error('Error: FS operation failed');
  }
}

await list();