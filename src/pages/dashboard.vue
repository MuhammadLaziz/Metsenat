<template>
  <div class="w-[1160px] min-h-[100vh] m-auto mt-[48px]">
    <div class="flex items-center justify-between mb-[28px]">
      <TotalSum :cardSum="cardSum" />
    </div>
    <div class="mb-[28px] w-full bg-[#fff] p-[24px]">
      <h1 class="text-[#2E384D] text-[24px] font-[700] mb-[8px]">
        Homiylar va talabalar soni
      </h1>
      <canvas
        id="myChart"
        height="400"
        width="1100"
        class="cursor-pointer "
      ></canvas>
    </div>
  </div>
</template>

<script>
import TotalSum from "../components/TotalSum.vue";
import { Chart, registerables } from "chart.js";
Chart.register(...registerables);
export default {
  data() {
    return {
      cardSum: [
        {
          title: "Jami to‘langan summa",
          cost: "1 684 325 000",
          icon: "src/components/icons/sums/1.png",
        },
        {
          title: "Jami so‘ralgan summa",
          cost: "14 098 530 000",
          icon: "src/components/icons/sums/2.png",
        },
        {
          title: "To‘lanishi kerak summa",
          cost: "12 414 205 000",
          icon: "src/components/icons/sums/3.png",
        },
      ],
    };
  },
  components: {
    TotalSum,
  },

  mounted() {
    const ctx = document.getElementById("myChart");

    const labels = [
      "Jabuary",
      "February",
      "March",
      "May",
      "June",
      "July",
      "August",
      "September",
      "November",
      "December",
    ];
    const data = {
      labels: labels,
      datasets: [
        {
          label: "Homiylar",
          data: [1500, 220, 700, 2000, 2000, 3000, 4000, 6000, 7000],
          fill: false,
          borderColor: "#4C6FFF",
          tension: 0.6,
        },
        {
          label: "Talabalar",
          data: [300, 120, 600, 3000, 3000, 4000, 3000, 7000, 8000],
          fill: false,
          borderColor: "red",
          tension: 0.6,
        }
      ],
    };

    const myChart = new Chart(ctx, {
      type: "line",
      data: data,
      options: {
        scales: {
          y: {
            beginAtZero: false,
          },
          x: {
            grid: {
              display: false
            }
          }
        },
        plugins: {
          subtitle: {
            
          }
        }
      },
    });
    myChart;
  },
};
</script>

<style lang="scss" scoped>
.canvas {
  width: 1160px !important;
}
</style>
