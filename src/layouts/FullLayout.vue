<script setup>
import NavBar from "@/components/NavBar.vue";
</script>

<template>
  <NavBar />
  <CarouselComp />

  <div class="container text-light" id="filmes">
    <h2>Adicionar Produtos</h2>
  </div>

  <router-view />
</template>

<style scoped>
.row {
  display: flex;
  flex-direction: row;
  margin: 20px 0;
  justify-content: center;
  align-content: space-around;
}

.img-wrap {
  display: flex;
  flex-direction: column;
  width: 20%;
}

.wrap {
  flex-wrap: wrap;
}

.columns {
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>
