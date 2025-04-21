import { defineStore } from "pinia";
import { ref, computed } from "vue";

export const useCounterStore = defineStore("counter", () => {
  const count = ref<number>(0);
  const name = ref<string>("Prosper Mbuma");
  const doubleCount = computed(() => count.value * 2);

  function increment() {
    count.value++;
  }

  function setName(newName: string) {
    name.value = newName;
  }

  return { count, name, doubleCount, increment, setName };
});
