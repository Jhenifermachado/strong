<script setup>
import { onMounted } from "vue";

import { useRouter } from "vue-router";

import { useAuthStore } from "@/stores/auth";
const authStore = useAuthStore();
const router = useRouter();

onMounted(() => {
  if (authStore.token === "") {
    router.push("/login");
  }
});
</script>
<template>
  <div>
    <div id="container">
      <h1>Cadastro de Produtos NoView Gym</h1>
      <form @submit.prevent="adicionarProduto">
        <label for="nome">Nome do Produto:</label>
        <input v-model="novoProduto.nome" required>
        <label for="descricao">Descrição:</label>
        <textarea v-model="novoProduto.descricao" rows="4" required></textarea>
        <label for="preco">Preço:</label>
        <input type="number" v-model="novoProduto.preco" step="0.01" required>
        <label for="estoque">Estoque:</label>
        <input type="number" v-model="novoProduto.estoque" required>
        <button type="submit">Cadastrar Produto</button>
      </form>
      <div id="produto-list">
        <h2>Lista de Produtos</h2>
        <ul>
          <li v-for="(produto, index) in produtos" :key="index">
            <div class="produto-info">
              <span class="produto-nome">{{ produto.nome }}</span>
              <span class="produto-descricao">{{ produto.descricao }}</span>
              <span class="produto-preco">R$ {{ produto.preco }}</span>
              <span class="produto-estoque">Estoque: {{ produto.estoque }}</span>
            </div>
            <button @click="removerProduto(index)" class="botao-excluir">Excluir</button>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      novoProduto: {
        nome: "",
        descricao: "",
        preco: 0,
        estoque: 0
      },
      produtos: []
    };
  },
  methods: {
    adicionarProduto() {
      this.produtos.push({ ...this.novoProduto });
      this.novoProduto = {
        nome: "",
        descricao: "",
        preco: 0,
        estoque: 0
      };
    },
    removerProduto(index) {
      this.produtos.splice(index, 1);
    }
  }
};
</script>

<style scoped>
#container {
  max-width: 600px;
  margin: 0 auto;
  padding: 20px;
  background-color: #f5f5f5;
  border-radius: 5px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
}

form {
  margin-bottom: 20px;
}

label {
  display: block;
  margin-bottom: 5px;
}

input, textarea {
  width: 100%;
  padding: 10px;
  margin-bottom: 10px;
  border: 1px solid #ccc;
  border-radius: 3px;
}

button {
  background-color: #007BFF;
  color: #fff;
  border: none;
  padding: 10px 20px;
  border-radius: 3px;
  cursor: pointer;
}

button:hover {
  background-color: #0056b3;
}

#produto-list ul {
  list-style: none;
  padding: 0;
}

.produto-info {
  display: flex;
  justify-content: space-between;
}

.produto-nome {
  font-weight: bold;
  flex: 1;
}

.botao-excluir {
  background-color: #FF3B30;
  color: #fff;
  border: none;
  padding: 5px 10px;
  border-radius: 3px;
  cursor: pointer;
}

.botao-excluir:hover {
  background-color: #D62D24;
}
</style>
