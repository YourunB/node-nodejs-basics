import zlib from 'zlib';
import fs from 'fs';
import path from 'path';

const decompress = async () => {
  const pathFileTxt = path.join(process.cwd(), 'src/zip/files/fileToCompress.txt');
  const pathFileZip = path.join(process.cwd(), 'src/zip/files/archive.gz');

  const read = fs.createReadStream(pathFileZip);
  const write = fs.createWriteStream(pathFileTxt);
  const zip = zlib.createGunzip();

  read.pipe(zip).pipe(write);

  write.on('error', () => console.error('Error to decompress'));
  write.on('finish', () => console.log('Success'));
}

await decompress();
