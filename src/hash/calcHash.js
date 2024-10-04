import { createHash } from 'crypto';
import { createReadStream } from 'fs';
import { pipeline } from 'stream';
import { promisify } from 'util';
import path from 'path';

const filePath = path.join('src/hash/files/fileToCalculateHashFor.txt');
const pipelineRead = promisify(pipeline);

const calculateHash = async () => {
  const hash = createHash('sha256');
  const stream = createReadStream(filePath);

  try {
    await pipelineRead(stream, hash);
    console.log(hash.digest('hex'));
  } catch {
      console.error('Pipeline failed');
  }
}

await calculateHash();
