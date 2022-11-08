<template>
    <div class="graficos">
      <h2>Exemplos de gráficos de vários tipos feitos usando a lib ApexCharts.js</h2>
      
      <grafico-area />
      
      <grafico-linha />
      
      <grafico-coluna />
      
      <grafico-barra />
      
      <grafico-linha-tempo />
      
      <grafico-pizza />
      
      <grafico-radar />
      
    </div>
</template>

<script>
import GraficoArea from "../components/graficos/Area.vue";
import GraficoLinha from "../components/graficos/Linha.vue";
import GraficoColuna from "../components/graficos/Coluna.vue";
import GraficoBarra from "../components/graficos/Barra.vue";
import GraficoLinhaTempo from "../components/graficos/LinhaTempo.vue";
import GraficoPizza from "../components/graficos/Pizza.vue";
import GraficoRadar from "../components/graficos/Radar.vue";

export default {
  components: {
    GraficoArea,
    GraficoLinha,
    GraficoColuna,
    GraficoBarra,
    GraficoLinhaTempo,
    GraficoPizza,
    GraficoRadar
  }
};
</script>

<style scoped>
.graficos {
  width: 80%;
  margin: 0px auto;
  padding: 50px 0px;
  text-align: center;
}
</style>
