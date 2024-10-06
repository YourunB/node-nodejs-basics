import { cpus } from 'node:os';
import { Worker } from 'node:worker_threads';
import path from 'path';
import * as url from 'url';

const pathFolder = url.fileURLToPath(new URL('.', import.meta.url));
const pithFile = path.resolve(pathFolder, './worker.js');

const performCalculations = async () => {
  const cores = cpus().length;
  const count = 10;
  const status = {
    success: 'resolved',
    failure: 'error',
  };

  const promises = [];

  for (let i = 0; i < cores; i += 1) {
    promises.push(
      new Promise((resolve) => {
        const worker = new Worker(pithFile, { workerData: count + i });

        worker.on('error', () => { resolve({ status: status.failure, data: null })});
        worker.on('message', (data) => { resolve({ status: status.success, data })});
      })
    );
  }

  console.log(await Promise.all(promises));
}

await performCalculations();
