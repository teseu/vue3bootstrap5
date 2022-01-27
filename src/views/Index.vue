<template>
  
        <div id="main" class="container-fluid p-0">
          teste
          <!-- <cabecalho></cabecalho> -->
          <conteudo></conteudo>
          <!-- <rodape></rodape> -->
        </div>

  
</template>

<script>
import "bootstrap/dist/css/bootstrap.css";
import "@/assets/scss/main.scss";
import "@/assets/scss/style.scss";

// import Cabecalho from "@/components/leiaute/Cabecalho.vue";
// import Rodape from "@/components/leiaute/Rodape.vue";
import Conteudo from "@/components/leiaute/Conteudo.vue";



export default {
  name: "Index",
  components: {
    // Cabecalho,
    Conteudo,
    // Rodape,
  },
};
</script>

<style>
</style>