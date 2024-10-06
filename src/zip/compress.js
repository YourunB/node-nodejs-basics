import fs from 'fs';
import zlib from 'zlib';
import path from 'path';

const compress = async () => {
  const inputFilePath = path.join(process.cwd(), 'src/zip/files/fileToCompress.txt');
  const outputFilePath = path.join(process.cwd(), 'src/zip/files/archive.gz');

  const read = fs.createReadStream(inputFilePath);
  const write = fs.createWriteStream(outputFilePath);
  const zip = zlib.createGzip();

  read.pipe(zip).pipe(write);

  write.on('finish', () => console.log('Success'));
  write.on('error', () => console.error('Error to compress'));
};

await compress();