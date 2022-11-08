<template>
  <div id="chart" class="chart">
    <apexchart type="radar" height="350" :options="chartOptions" :series="series"></apexchart>
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
        chart: {
          height: 350,
          type: "radar"
        },
        title: {
          text: "Gráfico de radar",
          align: "center"
        },
        xaxis: {
          categories: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"]
        },
      }
    };
  }
};
</script>

<style>
.chart {
  margin: 50px 0;
}
</style>