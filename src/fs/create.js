import fs from 'fs';
import path from 'path';

const folderPath = path.join(process.cwd(), 'src/fs/files');
const filePath = path.join(folderPath, 'fresh.txt');

const create = async () => {
  try {
    await fs.promises.mkdir(folderPath, { recursive: true });
    await fs.promises.access(filePath);
    console.error('FS operation failed');
  } catch (error) {
    error.code === 'ENOENT' ? await fs.promises.writeFile(filePath, 'I am fresh and young') : console.error(error);
  }
}

await create();
