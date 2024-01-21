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
  name: "BarChart",
  components: { Bar },
  data() {
    return {
      chartData: {
        labels: [
          "Absence of OB",
          "Closeness",
          "Credibility",
          "Heritage",
          "M Disclosure",
          "Provenance",
          "Reliability",
          "Transparency",
        ],
        datasets: [
          {
            label: "American Express",
            backgroundColor: "pink",
            borderColor: "red",
            borderWidth: 1,
            data: [3, 5, 6, 7, 3, 5, 6, 7],
          },
          {
            label: "Mastercard",
            backgroundColor: "lightblue",
            borderColor: "blue",
            borderWidth: 1,
            data: [4, 7, 3, 6, 10, 7, 4, 6],
          },
          {
            label: "Paypal",
            backgroundColor: "lightgreen",
            borderColor: "green",
            borderWidth: 1,
            data: [10, 7, 4, 6, 9, 7, 3, 10],
          },
          {
            label: "Visa",
            backgroundColor: "yellow",
            borderColor: "orange",
            borderWidth: 1,
            data: [6, 9, 7, 3, 10, 7, 4, 6],
          },
        ],
      },
      chartOptions: {
        responsive: true,
        legend: {
          position: "top",
        },
        title: {
          display: true,
          text: "Chart.js Bar Chart",
        },
        scales: {
          yAxes: [
            {
              ticks: {
                beginAtZero: true,
              },
            },
          ],
        },
      },
    };
  },
};
</script>

<style scoped></style>
