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
body, html {
  height: 100%;
  overflow: hidden;
  background-image: url(https://www.actionacademia.com.br/background2.jpg);
  background-size: cover;
}

.login-container {
  display: flex;
  justify-content: center; /* Centralize horizontalmente */
  align-items: center; /* Centralize verticalmente */
  height: 100%;
  border-radius: 12px;
  text-align: center;
  margin-top: 300px;
}

h2 {
  color: #fff;
}

.form-group {
  margin: 10px 0;
}

.i-form {
  width: 100%;
  padding: 12px;
  border: none;
  border-radius: 12px;
  margin: 5px 0;
  background: rgba(39, 41, 45, 0.5);
  color: #fff;
}

label {
  display: block;
  margin-bottom: 5px;
  color: #fff;
}

.btn-primary {
  background-color: #0071e8;
  color: #fff;
  border: none;
  border-radius: 5px;
  padding: 10px 20px;
  cursor: pointer;
}

.btn-primary:hover {
  background-color: #02f1db;
}
</style>