<template>
  <div id="chart" class="chart">
    <apexchart type="rangeBar" height="350" :options="chartOptions" :series="series"></apexchart>
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
          data: [
            {
              x: "10",
              y: [
                new Date("2020-01-01").getTime(),
                new Date("2020-01-31").getTime()
              ]
            },
            {
              x: "20",
              y: [
                new Date("2020-02-01").getTime(),
                new Date("2020-02-29").getTime()
              ]
            },
            {
              x: "30",
              y: [
                new Date("2020-03-01").getTime(),
                new Date("2020-03-31").getTime()
              ]
            },
            {
              x: "20",
              y: [
                new Date("2020-04-01").getTime(),
                new Date("2020-04-30").getTime()
              ]
            },
            {
              x: "40",
              y: [
                new Date("2020-05-01").getTime(),
                new Date("2020-05-31").getTime()
              ]
            },
            {
              x: "60",
              y: [
                new Date("2020-06-01").getTime(),
                new Date("2020-06-30").getTime()
              ]
            },
          ]
        }
      ],
      chartOptions: {
        chart: {
          height: 350,
          type: "rangeBar"
        },
        plotOptions: {
          bar: {
            horizontal: true
          }
        },
        title: {
          text: "Gráfico de Linha do Tempo",
          align: "left"
        },
        xaxis: {
          type: "datetime"
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

<style>
.chart {
  margin: 50px 0;
}
</style>