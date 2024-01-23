<template>
  <div class="m-4">
    <Bar id="my-chart-id" :options="chartOptions" :data="chartData" />

    <input
      class="mx-2"
      type="checkbox"
      onclick="updateChart(this)"
      checked=""
      name="financials"
      value="0"
    />Cost
    <input
      class="mx-2"
      type="checkbox"
      onclick="updateChart(this)"
      checked=""
      name="financials"
      value="1"
    />Refenue
    <input
      class="mx-2"
      type="checkbox"
      onclick="updateChart(this)"
      checked=""
      name="financials"
      value="2"
    />Profit
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
        labels: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
        datasets: [
          {
            label: "Weekly of Cost",
            data: [18, 12, 6, 9, 12, 3, 9],
            backgroundColor: ["rgba(255, 99, 132, 0.2)"],
            borderColor: ["rgba(255, 99, 132, 1)"],
            borderWidth: 1,
          },
          {
            label: "Weekly of Revenue",
            data: [65, 59, 80, 81, 56, 55, 40],
            backgroundColor: ["rgba(75, 192, 192, 0.2)"],
            borderColor: ["rgba(75, 192, 192, 1)"],
            borderWidth: 1,
          },
          {
            label: "Weekly of Profit",
            data: [34, 28, 41, 10, 23, 19, 36],
            backgroundColor: ["rgba(153, 102, 255, 0.2)"],
            borderColor: ["rgba(153, 102, 255, 1)"],
            borderWidth: 1,
          },
        ],
      },
      chartOptions: {
        responsive: true,
        scales: {
          y: {
            beginAtZero: true,
          },
        },
      },
    };
  },
};

const myChart = new Chart(document.getElementById("myChart"), config);

function updateChart(data) {
  const isDataShown = myChart.isDatasetVisible(data.value);
  console.log(isDataShown);
  if (isDataShown === false) {
    console.log("data is not shown");
    mayChart.show();
  }
  if (isDataShow === true) {
    console.log("data is shown");
  }
}
</script>

<style scoped></style>
