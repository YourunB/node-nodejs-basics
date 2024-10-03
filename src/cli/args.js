const parseArgs = () => {
  const arg = process.argv;
  const args = arg.slice(2);
  const result = [];

  for (let i = 0; i < args.length; i += 2) {
    const argName = args[i].replace('--', '');
    const value = args[i + 1];
    result.push(`${argName} is ${value}`);
  }

  const resultString = result.join(', ');
  console.log(resultString); 
};

parseArgs();