<template>
  <div class="m-4">
    <Pie id="my-chart-id" :options="options" :data="data" />
  </div>
</template>

<script>
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Pie } from "vue-chartjs";
import * as chartConfig from "./PieConfig.ts";

ChartJS.register(ArcElement, Tooltip, Legend);

export default {
  name: "PieChart",
  components: { Pie },
  data() {
    return chartConfig;
  },
};
</script>

<style scoped></style>
