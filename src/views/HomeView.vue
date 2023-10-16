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
      <h1>Cadastro de Produtos</h1>
      <form @submit.prevent="adicionarProduto">
        <label for="nome">Nome do Produto:</label>
        <input v-model="novoProduto.nome" required />
        <label for="estoque">Estoque</label>
        <input type="number" v-model="novoProduto.estoque" required />
        <button type="submit">Cadastrar Produto</button>
      </form>
      <div id="produto-list">
        <h2>Lista de Produtos</h2>
        <ul>
          <li v-for="(produto, index) in produtos" :key="index">
            <div class="produto-info">
              <span class="produto-nome">{{ produto.nome }}</span>
              <br />
              <span class="produto-estoque"
                >Estoque: {{ produto.estoque }}</span
              >
            </div>
            <button @click="removerProduto(index)" class="botao-excluir">
              Excluir
            </button>
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
        estoque: 0,
      },
      produtos: [],
    };
  },
  methods: {
    adicionarProduto() {
      this.produtos.push({ ...this.novoProduto });
      this.novoProduto = {
        nome: "",
        descricao: "",
        preco: 0,
        estoque: 0,
      };
    },
    removerProduto(index) {
      this.produtos.splice(index, 1);
    },
  },
};
</script>

<style scoped>
#container {
  max-width: 600px;
  margin: 0 auto;
  padding: 20px;
  background-color: #b3bdbe; /* Plano de fundo azul claro */
  border-radius: 15px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
}

form {
  margin-bottom: 10px;
}

label {
  display: block;
  margin-bottom: 10px; /* Aumenta a margem inferior para dar mais espaço */
}

input,
textarea {
  width: 100%;
  padding: 10px;
  margin-bottom: 20px; /* Aumenta a margem inferior para dar mais espaço */
  border: 1px solid #ccc;
  border-radius: 15px;
  margin-top: 10px;
}

button {
  background-color: #236e81; /* Botões vermelhos */
  color: #fff;
  border: none;
  padding: 10px 20px;
  border-radius: 15px;
  cursor: pointer;
  margin-top: 10px; /* Adiciona margem superior para separar do formulário */
}

button:hover {
  background-color: #8f0700; /* Cor de hover para botões vermelhos */
}

#produto-list ul {
  list-style: none;
  padding: 0;
}

.produto-info {
  margin: 10px 0; /* Aumenta a margem para separar os produtos */
  padding: 10px;
  background-color: #fff; /* Adiciona fundo branco para destacar produtos */
  border: 1px solid #ccc;
  border-radius: 15px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  transition: transform 0.2s;
}

.produto-nome {
  font-weight: bold;
  font-size: 20px; /* Aumenta o tamanho da fonte para o nome do produto */
  margin-bottom: 10px; /* Adiciona margem inferior para separar o nome do resto das informações */
  border-radius: 15px;
}

.produto-estoque {
  font-size: 16px; /* Define o tamanho da fonte para as informações de estoque */
  margin-top: 10px; /* Adiciona margem superior para separar as informações de estoque do resto */
  border-radius: 15px;
}

.botao-excluir {
  background-color: #236e81; /* Botões vermelhos */
  color: #fff;
  border: none;
  padding: 5px 10px;
  border-radius: 15px;
  cursor: pointer;
  margin-top: 10px; /* Adiciona margem superior para separar o botão de exclusão */
}

.botao-excluir:hover {
  background-color: #8f0700; /* Cor de hover para botões vermelhos */
}

/* Efeito de hover para os produtos */
.produto-info:hover {
  transform: scale(1.02);
}
</style>
