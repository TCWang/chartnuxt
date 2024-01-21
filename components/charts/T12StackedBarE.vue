<template>
  <div>
    <Bar id="my-chart-id" :options="chartOptions" :data="chartData" />
  </div>
</template>

<script>
import { Bar, mixins } from "vue-chartjs";
const { reactiveProp } = mixins;
export default {
  name: "BarChart",
  components: { Bar },
  data() {
    return {
      chartData: {
        labels: [...Object.keys(total)],
        datasets: [
          {
            label: "Started",
            stack: "Stack 0",
            backgroundColor: "rgb(112,108,236,0.2)",
            borderColor: "rgb(112,108,236,0.3)",
            borderWidth: 5,
            data: Object.values(active),
          },
          {
            label: "Assigned (all)",
            stack: "Stack 0",
            backgroundColor: "rgb(137,37,252 , 0.2)",
            borderColor: "rgb(137,37,252 , 0.2)",
            borderWidth: 5,
            data: Object.values(total),
          },
          {
            label: "Finished",
            stack: "Stack 0",
            backgroundColor: "rgba(30,135,246, 0.3)",
            borderColor: "rgba(30,135,246, 0.4)",
            borderWidth: 5,
            data: Object.values(done),
          },
          {
            label: "Rated",
            stack: "Stack 0",
            backgroundColor: pattern.draw("dot-dash", "rgb(98,241,58 , 0.5)"),
            borderColor: "rgb(98,241,58 , 0.5)",
            borderWidth: 5,
            data: Object.values(rated),
          },
          {
            label: "Trashed",
            stack: "Stack 1",
            backgroundColor: "rgb(236,108,127,0.5)",
            borderColor: "rgb(236,108,127,0.5)",
            borderWidth: 5,
            data: Object.values(trashed),
          },
        ],
      },
      chartOptions: {
        responsive: true,
        maintainAspectRatio: false,
        scales: {
          xAxes: [
            {
              stacked: true,
            },
          ],
          yAxes: [
            {
              ticks: {
                beginAtZero: true,
              },
              stacked: false,
            },
          ],
        },
        onClick: (e, i) => {
          console.log(i[0]._index);
        },
      },
    };
  },
};
</script>

<style scoped></style>
