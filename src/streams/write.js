import path from 'path';
import fs from 'fs';

const write = async () => {
  const filePath = path.join(process.cwd(), 'src/streams/files/fileToWrite.txt');
  const write = fs.createWriteStream(filePath);

  process.stdin.pipe(write);

  write.on('finish', () => console.log('Success'));
  write.on('error', () => console.error('Error to write'));
  console.log('Enter text:');
};

await write();
