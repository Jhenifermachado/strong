<script setup>
import { reactive } from "vue";
import axios from "axios";
import { useRouter } from "vue-router";

import { useAuthStore } from "@/stores/auth";
const authStore = useAuthStore();
const router = useRouter();

const user = reactive({
  email: "user@example.com",
  password: "password",
});

async function login() {
  const { data } = await axios.post(
    "https://strong-nutrition.2.us-1.fl0.io/api/token/",
    user
  );
  authStore.setToken(data.access);
  router.push("/");
}
</script>

<template>
  <div class="login-container">
    <h2>Login</h2>
    <form @submit.prevent="login">
      <div class="form-group">
        <label for="email">Email:</label>
        <input
          type="email"
          id="email"
          v-model="user.email"
          class="form-control"
          placeholder="Seu email"
        />
      </div>

      <div class="form-group">
        <label for="password">Senha:</label>
        <input
          type="password"
          id="password"
          v-model="user.password"
          class="form-control"
          placeholder="Sua senha"
        />
      </div>

      <button type="submit" class="btn btn-primary">Entrar</button>
    </form>
  </div>
</template>

<style>
.login-container {
  width: 300px;
  margin: 0 auto;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 5px;
  background-color: #f9f9f9;
  text-align: center;
}

.form-group {
  margin: 10px 0;
}
</style>
