export const useUtils = () => {
  const Greetings = (name: string) => `Hello, ${name}`;
  const capitaliza = (text: string) => text.charAt(0).toUpperCase() + text.slice(1).toUpperCase();
  return {
    Greetings,
    capitaliza
  };
};
