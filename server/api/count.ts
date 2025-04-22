let counter = 0;

export default eventHandler(() => {
  counter++;
  return JSON.stringify(counter);
});
