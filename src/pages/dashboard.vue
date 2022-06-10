<template>
  <div class="w-[1160px] m-auto mt-[48px]">
    <div class="flex items-center justify-between mb-[28px]">
      <TotalSum :cardSum="cardSum" />
    </div>
    <span class="mb-[28px]">
      <img src="../assets/images/chart.png" alt="" />
    </span>
  </div>
</template>

<script>
import TotalSum from "../components/TotalSum.vue";
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
};
</script>

<style lang="scss" scoped></style>
