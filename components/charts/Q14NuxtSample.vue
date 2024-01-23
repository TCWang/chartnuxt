<template>
  <div class="m-4">
    <Bar
      id="my-chart-id"
      :options="chartOptions"
      :data="chartData"
      :height="100"
    />
  </div>
</template>

<script>
// import Vue from 'vue';
import { Bar, Line, Doughnut, Pie } from "vue-chartjs";
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
  ArcElement,
} from "chart.js";

ChartJS.register(
  Title,
  Tooltip,
  Legend,
  PointElement,
  BarElement,
  CategoryScale,
  LinearScale,
  LineElement,
  ArcElement
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
            type: "line",
            data: [18, 12, 6, 9, 12, 3, 9],
            backgroundColor: ["rgba(255, 99, 132, 0.2)"],
            borderColor: ["rgba(255, 99, 132, 1)"],
            borderWidth: 1,
          },
          {
            label: "Weekly of Revenue",
            type: "bar",
            data: [65, 59, 80, 81, 56, 55, 40],
            backgroundColor: ["rgba(75, 192, 192, 0.2)"],
            borderColor: ["rgba(75, 192, 192, 1)"],
            borderWidth: 1,
          },
          {
            label: "Weekly of Profit",
            type: "line",
            data: [34, 28, 41, 10, 23, 19, 36],
            backgroundColor: ["rgba(153, 102, 255, 0.2)"],
            borderColor: ["rgba(153, 102, 255, 1)"],
            borderWidth: 1,
          },
        ],
      },
      chartOptions: {
        responsive: true,
        legend: {
          display: false,
          position: "bottom",
        },
        title: {
          display: true,
          text: "Chart Title Sample",
          fontSize: 20,
          fontColor: "#6b7280",
        },
        tooltips: {
          backgroundColor: "#17BF62",
        },
        scales: {
          x: [
            {
              gridLines: {
                display: true,
              },
            },
          ],
          y: [
            {
              ticks: {
                beginAtZero: false,
                max: 100,
                min: 0,
                stepSize: 25,
              },
              gridLines: {
                display: true,
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
