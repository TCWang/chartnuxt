<template>
  <div class="m-4">
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
  name: "StackedBarChart",
  components: { Bar },
  data() {
    return {
      chartData: {
        labels: ["bike", "car", "scooter", "truck", "auto", "Bus"],
        datasets: [
          {
            label: "worst",
            backgroundColor: "blue",
            data: [17, 16, 4, 11, 8, 9],
          },
          {
            label: "Okay",
            backgroundColor: "green",
            data: [14, 2, 10, 6, 12, 16],
          },
          {
            label: "bad",
            backgroundColor: "red",
            data: [2, 21, 13, 3, 24, 7],
          },
        ],
      },
      chartOptions: {
        plugins: {
          title: {
            display: true,
            text: "Stacked Bar chart for pollution status",
          },
        },
        scales: {
          x: {
            stacked: true,
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
