<template>
  <div id="chart" class="chart">
    <apexchart height="350" :options="chartOptions" :series="series"></apexchart>
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
          name: "Valoes",
          data: [10, 20, 30, 20, 40, 60]
        }
      ],
      chartOptions: {
        chart: {
          height: 350,
          type: "line"
        },
        dataLabels: {
          enabled: true
        },
        stroke: {
          curve: "straight"
        },
        title: {
          text: "Gráfico de linha",
          align: "left"
        },
        grid: {
          row: {
            colors: ["#f3f3f3", "#C0C0C0"], // takes an array which will be repeated on columns
            opacity: 0.5
          }
        },
        xaxis: {
          categories: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"]
        }
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