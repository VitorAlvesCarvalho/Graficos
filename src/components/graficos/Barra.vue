<template>
  <div id="chart" class="chart">
    <apexchart type="bar" height="350" :options="chartOptions" :series="series"></apexchart>
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
          type: "bar",
          height: 350,
        },
        plotOptions: {
          bar: {
            horizontal: true,
            columnWidth: "20%"
          }
        },
        dataLabels: {
          enabled: false
        },
        stroke: {
          show: true,
          width: 2,
          colors: ["transparent"]
        },
        xaxis: {
          categories: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"]
        },
        title: {
          text: "Gráfico de Barras",
          align: "left"
        },
        grid: {
          row: {
            colors: ["#f3f3f3", "#C0C0C0"], // takes an array which will be repeated on columns
            opacity: 0.5
          }
        },
        fill: {
          opacity: 1
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