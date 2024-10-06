import { workerData, parentPort } from 'worker_threads';

const nthFibonacci = (n) => {
  if (n < 0) return null;
  if (n < 2) return n;

  let a = 0;
  let b = 1;

  for (let i = 2; i <= n; i += 1) {
    const iteration = a + b;
    a = b;
    b = iteration;
  }

  return b;
};

const res = nthFibonacci(workerData);
parentPort.postMessage(res);
