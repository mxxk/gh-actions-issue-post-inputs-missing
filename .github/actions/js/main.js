for (const [env, value] of Object.entries(process.env)) {
  if (env.startsWith("INPUT_")) {
    console.log(`Main: ${env}=${value}`);
  }
}
