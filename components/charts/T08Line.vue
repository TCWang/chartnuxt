<template>
  <div class="m-4">
    <Line id="my-chart-id" :options="options" :data="data" />
  </div>
</template>

<script>
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
import { Line } from "vue-chartjs";
import * as chartConfig from "./LineConfig.ts";

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
    return chartConfig;
  },
};
</script>

<style scoped></style>
