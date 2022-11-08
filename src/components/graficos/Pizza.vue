<template>
  <div id="chart" class="pizza">
    <apexchart type="pie" width="380" :options="chartOptions" :series="series"></apexchart>
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
      series: [10, 20, 30, 20, 40, 60],
      chartOptions: {
        colors: [
          "#836FFF",
          "#191970",
          "#00008B",
          "#0000FF",
          "#6495ED",
          "#00BFFF",
        ],
        chart: {
          width: 380,
          type: "pie"
        },
        labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
        title: {
          text: "Gráfico de Pizza",
          align: "left"
        },
        responsive: [
          {
            breakpoint: 480,
            options: {
              chart: {
                width: 200
              },
              legend: {
                position: "bottom"
              }
            }
          }
        ]
      }
    };
  }
};
</script>

<style>
.pizza {
  display: flex;
  justify-content: center;
  margin: 50px 0;
}
</style>