<template>
  <div class="m-4">
    <Line id="my-chart-id" :options="chartOptions" :data="chartData" />
  </div>
</template>

<script>
import { Line } from "vue-chartjs";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(
  Title,
  Tooltip,
  Legend,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement
);

export default {
  name: "StackedLineChart",
  components: { Line },
  data() {
    return {
      chartData: {
        labels: ["2010", "2012", "2014", "2016", "2018", "2020", "2022"],
        datasets: [
          {
            label: "Mumbai",
            borderColor: "blue",
            data: [9000, 8000, 12000, 10000, 11000, 12000, 13000],
            fill: true,
          },
          {
            label: "Chennai",
            borderColor: "green",
            data: [13000, 14000, 17000, 14000, 10400, 24000, 16000],
            fill: true,
          },
        ],
      },
      chartOptions: {
        responsive: true,
        title: {
          display: true,
          text: "Chart JS Gridlines - Line Chart",
        },
        scales: {
          x: {
            grid: {
              display: true,
              color: "blue",
              lineWidth: 2,
            },
          },
          y: {
            grid: {
              display: true,
              color: "blue",
            },
          },
        }, //end scales
      },
    };
  },
};
</script>

<style scoped></style>
