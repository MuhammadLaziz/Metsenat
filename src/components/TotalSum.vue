<template>
  <div
    v-for="sum in cardSum"
    class="w-[90%] sm:w-[45%] md:w-[32%] flex items-center p-[24px] my-3 m-auto bg-[#fff] rounded-[8px] transition-all hover:scale-[95%] cursor-pointer"
  >
    <span>
      <img :src="sum.icon" alt="" />
    </span>
    <div class="ml-[16px]">
      <p class="text-[#7A7A9D] text-[12px] font-[400]">{{ sum.title }}</p>
      <p class="text-[20px] font-[700] text-[#2E384D] sm:text-[16px]">
        {{ sum.cost }}
        <span class="text-[20px] front-[700] text-[#B2B7C1] ml-[6px]">UZS</span>
      </p>
    </div>
  </div>
</template>

<script>
import PayingSums from "./icons/sums/PayingSums.vue";
import AskedSums from "./icons/sums/AskedSums.vue";
import RequiredSums from "./icons/sums/RequiredSums.vue";
export default {
  components: {
    PayingSums,
    AskedSums,
    RequiredSums,
  },
  props: {
    cardSum: Array,
  },
  mounted() {
    console.log(this.cardSum);
  },
};
</script>

<style lang="scss" scoped></style>
