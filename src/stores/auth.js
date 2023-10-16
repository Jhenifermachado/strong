import { reactive, computed } from "vue";
import { defineStore } from "pinia";

export const useAuthStore = defineStore("auth", () => {
  const state = reactive({
    token: "",
  });

  const token = computed(() => state.token);

  function setToken(new_token) {
    state.token = new_token;
  }

  return { setToken, token };
});
