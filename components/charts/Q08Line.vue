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
  name: "LineChart",
  components: { Line },
  data() {
    return {
      chartData: {
        labels: [
          "January",
          "February",
          "March",
          "April",
          "May",
          "June",
          "July",
        ],
        datasets: [
          {
            label: "My Line Chart",

            data: [40, 39, 10, 40, 39, 80, 40],
            fill: false,
            borderColor: "rgb(75, 192, 192)",
            backgroundColor: "rgba(255, 205, 86, 0.2)",
            tension: 0.0,
          },
        ],
      },
      chartOptions: {
        responsive: true,
        maintainAspectRatio: false,
      },
    };
  },
};
</script>

<style scoped></style>
