import fs from 'fs';
import path from 'path';

const currentPath = process.cwd();
const folderPath = path.join(currentPath, 'src/fs/files');
const newFolderPath = path.join(currentPath, 'src/fs/files_copy');

const copy = async () => {
  try {
    await fs.promises.access(folderPath);
    await fs.promises.access(newFolderPath);
    console.error('FS operation failed');
    return;
  } catch (error) {
    if (error.code === 'ENOENT') {
      await fs.promises.mkdir(newFolderPath).catch((error) => {
        console.error(error.message);
      });
    } else console.error(error);
  }

  const files = await fs.promises.readdir(folderPath);
  await Promise.all(files.map(file => 
    fs.promises.copyFile(path.join(folderPath, file), path.join(newFolderPath, file))
  ));
}

await copy().catch((error) => {
  console.error(error.message);
});