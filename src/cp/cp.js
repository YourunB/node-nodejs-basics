import path from 'path';
import * as url from 'url';
import { fork } from 'node:child_process';

const pathNew = new URL('.', import.meta.url);
const pathFolder = url.fileURLToPath(pathNew);
const pathFile = path.resolve(pathFolder, 'files', 'script.js');

const spawnChildProcess = async (args) => {
  const process = fork(pathFile, args);

  process.on('error', (error) => process.stderr(error));
  process.on('message', (success) => process.stdout.write(success));
}

spawnChildProcess()
