<template>
  <div class="skill" id="skill">
    <canvas id="myChart"></canvas>
  </div>
</template>

<script>
import Chart  from 'chart.js'

export default {
  name: "skill",
  mounted() {
    let ctx = document.getElementById("myChart");
    // @ts-ignore
    new Chart(ctx, {
      type: "horizontalBar",
      data: {
        labels: [
          "Back-End",
          "Front-End",
          "Database",
          "Methodology",
          "Testing",
          "Other",
        ],
        datasets: [
          {
            label: "programming skill",
            data: [8, 6, 3, 5, 4, 3],
            backgroundColor: [
              "rgba(255, 99, 132, 0.8)",
              "rgba(54, 162, 235, 0.8)",
              "rgba(255, 206, 86, 0.8)",
              "rgba(75, 192, 192, 0.8)",
              "rgba(153, 102, 255, 0.8)",
              "rgba(255, 159, 64, 0.8)",
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
      },
      options: {
        scales: {
          yAxes: [
            {
              ticks: {
                beginAtZero: true,
                min: 0,
                max: 10,
                stepSize: 1,
              },
            },
          ],
        },
      },
    });
  },
};
</script>

<style>
.skill {
  position: relative;
  left: 50%;
  width: 40%;
  height: 40%;
}
</style>