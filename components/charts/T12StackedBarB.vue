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

const DATA_COUNT = 7;
const NUMBER_CFG = { count: DATA_COUNT, min: -100, max: 100 };

const labels = Utils.months({ count: 7 });

export default {
  name: "BarChart",
  components: { Bar },
  data() {
    return {
      chartData: {
        labels: lables,
        datasets: [
          {
            label: "Dataset 1",
            data: Utils.numbers(NUMBER_CFG),
            backgroundColor: Utils.CHART_COLORS.red,
          },
          {
            label: "Dataset 2",
            data: Utils.numbers(NUMBER_CFG),
            backgroundColor: Utils.CHART_COLORS.blue,
          },
          {
            label: "Dataset 3",
            data: Utils.numbers(NUMBER_CFG),
            backgroundColor: Utils.CHART_COLORS.green,
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
