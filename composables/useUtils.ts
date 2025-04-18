export const useUtils = () => {
  const Greetings = (name: String) => `Hello, ${name}`;
  const capitaliza = (text: String) => text.charAt(0).toUpperCase() + text.slice(1).toUpperCase();
  return {
    Greetings,
    capitaliza
  };
};
