import data from "./users.json";

export default defineEventHandler(async (event) => {
  return new Promise<any>((resolve) => {
    setTimeout(() => {
      resolve(data);
    }, 2000);
  });
});
