<template>
  <div class="m-4">
    <Bar id="my-chart-id" :options="chartOptions" :data="chartData" />
  </div>
</template>

<script>
import { Line, Bar } from "vue-chartjs";
import {
  Chart as ChartJS,
  Title,
  Tooltip,
  Legend,
  BarElement,
  CategoryScale,
  LinearScale,
  LineElement,
  PointElement,
} from "chart.js";

ChartJS.register(
  Title,
  Tooltip,
  Legend,
  BarElement,
  CategoryScale,
  LinearScale,
  LineElement,
  PointElement
);

export default {
  name: "2Axes Chart",
  components: { Bar, Line },
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
            label: "Monthly Sales",
            type: "line",
            data: [18, 12, 6, 9, 12, 3, 9],
            backgroundColor: ["rgba(255, 99, 132, 0.2)"],
            borderColor: ["rgb(255, 99, 132)"],
            tension: 0.4,
            yAxisID: "y",
          },
          {
            label: "Percentage",
            type: "line",
            data: [10, 22, 36, 49, 52, 63, 79],
            backgroundColor: ["rgba(0, 99, 132, 0.2)"],
            borderColor: ["rgb(0, 99, 132)"],
            tension: 0.2,
            yAxisID: "percentage",
          },
        ],
      },
      chartOptions: {
        responsive: true,
        scales: {
          y: {
            beginAtZero: true,
            type: "linear",
            position: "left",
          },
          percentage: {
            beginAtZero: true,
            type: "linear",
            position: "right",
            grid: {
              drawOnChartArea: false,
            },
            ticks: {
              callback: function (value, index, values) {
                return `${value},0 %`;
              },
            },
          },
        },
      },
    };
  },
};
</script>

<style scoped></style>
