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
  name: "MixBarLineChart",
  components: { Bar },
  data() {
    return {
      chartData: {
        datasets: [
          {
            label: "Monthly Sales data in lakhs",
            data: [60, 30, 20, 45, 50, 40, 35, 77],
            type: "bar",
            borderColor: "blue",
            borderWidth: 2,
          },
          {
            label: "Expected sales",
            data: [35, 15, 18, 38, 45, 35, 27, 65],
            type: "line",
            borderColor: "green",
          },
          {
            type: "line",
            data: [20, 8, 12, 29, 35, 30, 20, 50],
            label: "Profit",
            borderColor: "red",
            fill: true,
            backgroundColor: "pink",
            lineTension: 0.2,
          },
        ], //end data sets
        labels: [
          "January",
          "February",
          "March",
          "April",
          "May",
          "June",
          "July",
          "August",
        ],
      },
      chartOptions: {
        responsive: true,
      },
    };
  },
};
</script>

<style scoped></style>
