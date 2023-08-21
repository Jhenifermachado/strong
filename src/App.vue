<script setup>
import NavBar from "@/components/NavBar.vue";
import CarouselComp from "@/components/CarouselComp.vue";
</script>

<template>
  <NavBar />
  <CarouselComp />

  <div class="container text-light" id="filmes">
    <h2>Adicionar Produtos</h2>
  </div>

  <div class="container">
    <div class="row">
      <div class="columns">
        <img
          src="https://www.gsuplementos.com.br/tema/growth/img/pitchbar/01-ab.png"
          alt="icon frete grátis"
        />
        <span>FRETE GRÁTIS</span>
      </div>
      <div class="columns">
        <img
          src="https://www.gsuplementos.com.br/tema/growth/img/pitchbar/02-ab.png"
          alt="icon boleto"
        />
        <span>10% Off no Boleto</span>
      </div>
      <div class="columns">
        <img
          src="https://www.gsuplementos.com.br/tema/growth/img/pitchbar/03-ab.png"
          alt="icon cifrão cashback"
        />
        <span>CASHBACK</span>
      </div>
      <div class="columns">
        <img
          src="https://www.gsuplementos.com.br/tema/growth/img/pitchbar/04-ab.png"
          alt="icon chat nutricionista"
        />
        <span>Nutricionista Online</span>
      </div>
    </div>
  </div>
  <div class="row wrap">    
    <div class="img-wrap" v-for="i in 4" :key="i">
      <img src="@/assets/img/+.png" class="img-fluid" alt="..." width="400" />
    </div>    
  </div>  
  
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
