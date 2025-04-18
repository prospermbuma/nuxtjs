export const useUtils = () => {
  const Greetings = (name: String) => `Hello, ${name}`;
  return {
    Greetings,
  };
};
