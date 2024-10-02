import path from 'path';
import fs from 'fs';

const filePath = path.join(process.cwd(), 'src/fs/files/fileToRemove.txt');

const remove = async () => {
  try {
    await fs.promises.access(filePath);
    await fs.promises.unlink(filePath);
    console.log('FS operation failed');
  } catch (error) {
      console.error('FS operation failed');
  }
}

await remove();