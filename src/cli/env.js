const parseEnv = () => {
  const envVariables = process.env;
  const result = [];

  for (const key in envVariables) {
    if (key.startsWith('RSS_')) result.push(`${key}=${envVariables[key]}`);
  }

  const resultToString = result.join('; ');
  console.log(resultToString);
};

parseEnv();