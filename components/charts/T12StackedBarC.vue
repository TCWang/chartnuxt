<template>
  <div>
    <Bar id="my-chart-id" :options="chartOptions" :data="chartData" />
  </div>
</template>

<script>
import { Bar } from "vue-chartjs";
import {
  Chart as ChartJS,
  Title,
  Tooltip,
  Legend,
  BarElement,
  CategoryScale,
  LinearScale,
} from "chart.js";

ChartJS.register(
  Title,
  Tooltip,
  Legend,
  BarElement,
  CategoryScale,
  LinearScale
);

export default {
  name: "BarChart",
  components: { Bar },
  data() {
    return {
      chartData: {
        labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul"],
        datasets: [
          {
            label: "Data One",
            data: [20, 12, 7, 15, 42, 35, 9],
            backgroundColor: ["rgb(255, 99, 132)"],
          },
          {
            label: "Data Two",
            data: [2, 12, 55, 24, 9, 8, 14],
            backgroundColor: ["rgb(54,162, 235)"],
          },
          {
            label: "Data Three",
            data: [32, 2, 15, 24, 9, 13, 9],
            backgroundColor: ["rgb(255, 205, 86)"],
          },
        ],
      },
      chartOptions: {
        plugins: {
          title: {
            display: ture,
            text: "Chart.js Bar Chart - Stacked",
          },
        },
        responsive: true,
        scales: {
          x: {
            stacked: true,
            categoryPercentage: 0.5,
            barPercentage: 1,
          },
          y: {
            stacked: true,
          },
        },
      },
    };
  },
};
</script>

<style scoped></style>
