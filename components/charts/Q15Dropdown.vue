<template>
  <div class="m-4">
    <Bar
      id="my-chart-id"
      :options="chartOptions"
      :data="chartData"
      :height="100"
    />

    <select
      id="year"
      class="m-4 p-2 btn btn-primary"
      onchange="changeFinancials()"
    >
      <option value="2020">2020</option>
      <option value="2021">2021</option>
      <option value="2022">2022</option>
    </select>
    <select
      id="financial"
      class="m-4 p-2 btn btn-primary"
      onchange="changeFinancials()"
    >
      <option value="cost">cost</option>
      <option value="sales">sales</option>
      <option value="profit">profit</option>
    </select>
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
        // labels: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
        datasets: [
          {
            label: "Weekly Sales",
            type: "bar",
            // data: [18, 12, 6, 9, 12, 3, 9],
            data: [
              {
                id: "Mon",
                financials: {
                  2020: { cost: 10, sales: 35, profit: 102 },
                  2021: { cost: 15, sales: 36, profit: 82 },
                  2021: { cost: 30, sales: 15, profit: 122 },
                },
              },
              {
                id: "Tue",
                financials: {
                  2020: { cost: 20, sales: 55, profit: 132 },
                  2021: { cost: 25, sales: 16, profit: 52 },
                  2021: { cost: 10, sales: 25, profit: 82 },
                },
              },
              {
                id: "Wed",
                financials: {
                  2020: { cost: 13, sales: 22, profit: 62 },
                  2021: { cost: 55, sales: 46, profit: 135 },
                  2021: { cost: 20, sales: 65, profit: 162 },
                },
              },
              {
                id: "Thu",
                financials: {
                  2020: { cost: 13, sales: 24, profit: 32 },
                  2021: { cost: 12, sales: 43, profit: 182 },
                  2021: { cost: 54, sales: 16, profit: 222 },
                },
              },
              {
                id: "Fri",
                financials: {
                  2020: { cost: 12, sales: 24, profit: 202 },
                  2021: { cost: 45, sales: 39, profit: 122 },
                  2021: { cost: 81, sales: 24, profit: 62 },
                },
              },
              {
                id: "Sat",
                financials: {
                  2020: { cost: 40, sales: 25, profit: 92 },
                  2021: { cost: 25, sales: 66, profit: 72 },
                  2021: { cost: 70, sales: 75, profit: 82 },
                },
              },
              {
                id: "Sun",
                financials: {
                  2020: { cost: 20, sales: 55, profit: 142 },
                  2021: { cost: 45, sales: 26, profit: 86 },
                  2021: { cost: 20, sales: 75, profit: 62 },
                },
              },
            ],
            backgroundColor: ["rgba(255, 99, 132, 0.2)"],
            borderColor: ["rgba(255, 99, 132, 1)"],
            borderWidth: 1,
          },
        ],
      },
      chartOptions: {
        parsing: {
          xAxisKey: "id",
          yAxisKey: "financials.2020.cost",
        },
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
        // scales: {
        //   x: [
        //     {
        //       gridLines: {
        //         display: true,
        //       },
        //     },
        //   ],
        //   y: [
        //     {
        //       ticks: {
        //         beginAtZero: false,
        //         max: 100,
        //         min: 0,
        //         stepSize: 25,
        //       },
        //       gridLines: {
        //         display: true,
        //       },
        //     },
        //   ],
        // },
      },
    };
  },
};

function changeFinancials() {
  const year = document.getElementById("year").value;
  const financial = document.getElementById("financial").value;

  console.log(year);
  console.log(financial);
}
</script>

<style scoped></style>
