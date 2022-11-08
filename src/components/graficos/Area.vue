<template>
  <div id="chart" class="chart">
    <apexchart height="450" :options="chartOptions" :series="series"></apexchart>
  </div>
</template>

<script>
import VueApexCharts from "vue-apexcharts";

export default {
  components: {
    apexchart: VueApexCharts
  },
  data() {
    return {
      series: [
        {
          name: "Valores",
          data: [10, 20, 30, 20, 40, 60]
        }
      ],
      chartOptions: {
        colors: ["blue"],
        chart: {
          height: 350,
          type: "area"
        },
        stroke: {
          curve: "straight"
        },
        title: {
          text: "Gráfico de Área",
          align: "left"
        },
        xaxis: {
          categories: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"]
        },
        grid: {
          row: {
            colors: ["#f3f3f3", "#C0C0C0"], // takes an array which will be repeated on columns
            opacity: 0.5
          }
        },
      }
    };
  }
};
</script>

<style scoped>
.chart {
  margin: 50px 0;
}
</style>
