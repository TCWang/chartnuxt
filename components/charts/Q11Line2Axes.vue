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
        labels: ["Friday", "Saturday", "Sunday", "Monday"],
        datasets: [
          {
            yAxisID: "A", // <-- the Y axis to use for this data set
            label: "Page Views",
            data: [13500, 5700, 6300, 8200],
            borderWidth: 1,
            backgroundColor: "blue",
            borderColor: "blue",
          },
          {
            yAxisID: "B", // <-- the Y axis to use for this data set
            label: "Revenue",
            data: [11, 3.6, 7.3, 8.1],
            backgroundColor: "green",
            borderColor: "green",
          },
        ],
      },
      chartOptions: {
        responsive: true,
        scales: {
          A: {
            type: "linear",
            position: "left",
            ticks: { beginAtZero: true, color: "blue" },
            // Hide grid lines, otherwise you have separate grid lines for the 2 y axes
            grid: { display: false },
          },
          B: {
            type: "linear",
            position: "right",
            ticks: { beginAtZero: true, color: "green" },
            grid: { display: false },
          },
          x: { ticks: { beginAtZero: true } },
        },
      },
    };
  },
};
</script>

<style scoped></style>
