import path from 'path';
import fs from 'fs';

const filePath = path.join(process.cwd(), 'src/fs/files/wrongFilename.txt');
const newFilePath = path.join(process.cwd(), 'src/fs/files/properFilename.md');

const renameFile = async () => {
  await await fs.promises.rename(filePath, newFilePath).catch(() => {
    console.error('FS operation failed');
  });
}

const rename = async () => {
  try {
    await fs.promises.access(filePath);
    await fs.promises.access(newFilePath);
    console.error('FS operation failed');
  } catch (error) {
      if (error.code === 'ENOENT') await renameFile();
  }
}

await rename().catch((error) => {
  console.error(error);
});