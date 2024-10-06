import { Transform } from 'stream';

const transform = async () => {
  const reverse = new Transform({
    transform(part, code, formate) {
      const text = part.toString();

      let result = '';

      for (let i = text.length - 1; i >= 0; i -= 1) result += text[i];

      formate(null, result);
    }
  });

  process.stdin.pipe(reverse).pipe(process.stdout);
}

await transform();