<template>
  <section id="produtos">
    <h2>Nossos Produtos</h2>
    <ul>
      <li v-for="(produto, index) in produtos" :key="index">
        <img :src="produto.imagem" :alt="produto.alt" />
        <h3>{{ produto.titulo }}</h3>
        <p>{{ produto.descricao }}</p>
        <p>{{ produto.preco }}</p>
      </li>
    </ul>
  </section>
</template>

<script>
export default {
  data() {
    return {
      produtos: [
        {
          imagem:
            "https://botafogo.vtexassets.com/arquivos/ids/156935-1600-auto?v=638278817815030000&width=1600&height=auto&aspect=true",
          alt: "Botafogo",
          titulo: "Botafogo",
          descricao: "Camisa 1 Masculina Alvinegra 23/24",
          preco: "R$350,00",
        },
        {
          imagem:
            "https://botafogo.vtexassets.com/arquivos/ids/156964-1600-auto?v=638297994738930000&width=1600&height=auto&aspect=true",
          alt: "Camisa do Time 2",
          titulo: "Botafogo",
          descricao: "Camisa II Masculina Preta 23/24",
          preco: "R$300,00",
        },
        {
          imagem:
            "https://botafogo.vtexassets.com/arquivos/ids/156831-1600-auto?v=638271214189830000&width=1600&height=auto&aspect=true",
          alt: "Camisa do Time 3",
          titulo: "Botafogo",
          descricao: "Camisa III Masculina Branca 23/24",
          preco: "R$100,00",
        },
      ],
    };
  },
};
</script>

<style scoped>
/* Reset de estilos para remover margens e preenchimento padrão */
body,
h1,
h2,
ul,
li {
  margin: 0;
  padding: 0;
}

/* Estilizando a seção de produtos */
#produtos {
  text-align: center;
  padding: 20px;
}

/* Estilizando a lista de produtos */
ul {
  list-style-type: none;
  margin: 0;
  padding: 0;
}

/* Estilizando cada item de produtos */
li {
  display: inline-block;
  margin: 20px;
  width: 300px;
  border: 1px solid #ddd;
  padding: 10px;
  background-color: #fff;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.2);
  transition: transform 0.2s;
}

/* Estilizando as imagens */
img {
  max-width: 100%;
  height: auto;
  border: 1px solid #ddd;
  border-radius: 5px;
  width: 100%; /* Adiciona esta linha para definir a largura das imagens como 100% */
}

/* Estilizando os títulos dos produtos */
h3 {
  font-size: 18px;
  margin: 10px 0;
}

/* Estilizando as descrições dos produtos */
p {
  font-size: 16px;
  color: #555;
}

/* Efeito de hover para os itens */
li:hover {
  transform: scale(1.05);
}
</style>
