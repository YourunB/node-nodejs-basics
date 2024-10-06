import fs from 'fs';
import path from 'path';

const read = async () => {
  const filePath = path.join(process.cwd(), 'src/streams/files/fileToRead.txt');
  const readStream = fs.createReadStream(filePath, { encoding: 'utf8' });

  readStream.on('data', (chunk) => process.stdout.write(chunk));
  readStream.on('error', () => console.error('Error to read file'));
  readStream.on('end', () => console.log('\nSuccess'));
};

await read();
