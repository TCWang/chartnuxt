<template>
  <div>
    <div class="chartMenu">
      <p>Chart JS 4.4.0</p>
    </div>
    <div class="chartCard">
      <div class="chartBox">
        <canvas id="myChart"></canvas>
      </div>
    </div>
  </div>
</template>

<script setup>
// data block
const data = {
  labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
  datasets: [
    {
      label: "# of Votes",
      data: [12, 19, 3, 5, 2, 3],
      backgroundColor: [
        "rgba(255, 99, 132, 0.2)",
        "rgba(54, 162, 235, 0.2)",
        "rgba(255, 206, 86, 0.2)",
        "rgba(75, 192, 192, 0.2)",
        "rgba(153, 102, 255, 0.2)",
        "rgba(255, 159, 64, 0.2)",
      ],
      borderColor: [
        "rgba(255, 99, 132, 1)",
        "rgba(54, 162, 235, 1)",
        "rgba(255, 206, 86, 1)",
        "rgba(75, 192, 192, 1)",
        "rgba(153, 102, 255, 1)",
        "rgba(255, 159, 64, 1)",
      ],
      borderWidth: 1,
    },
  ],
};

// config block
const config = {
  type: "bar",
  data: data,
  options: {
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  },
};

// init render block
const myChart = new Chart(document.getElementById("myChart"), config);
</script>

<style scoped>
* {
  margin: 0;
  padding: 0;
  font-family: sans-serif;
}
.chartMenu {
  width: 100vw;
  height: 40px;
  background: #1a1a1a;
  color: rgba(75, 192, 192, 1);
}
.chartMenu p {
  padding: 10px;
  font-size: 20px;
}
.chartCard {
  width: 100vw;
  height: calc(100vh - 40px);
  background: rgba(75, 192, 192, 0.2);
  display: flex;
  align-items: center;
  justify-content: center;
}
.chartBox {
  width: 700px;
  padding: 20px;
  border-radius: 20px;
  border: solid 3px rgba(75, 192, 192, 1);
  background: white;
}
</style>
