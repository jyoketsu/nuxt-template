import { defineStore } from "pinia";
import { ref } from "vue";

export const useCommonStore = defineStore("common", () => {
  const isOpen = ref(false);

  function toggleOpen() {
    isOpen.value = !isOpen.value;
  }

  return {
    isOpen,
    toggleOpen,
  };
});
