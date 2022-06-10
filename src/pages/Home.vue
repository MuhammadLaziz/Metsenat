<template>
  <div class="w-[100%] bg-[#fff]">
    <Navbar />
    <ControlBar />
    <div class="flex items-center justify-between">
      <TotalSum />
    </div>
  </div>
</template>

<script>
import ControlBar from "../components/ControlBar.vue";
import TotalSum from "../components/TotalSum.vue";
import Navbar from "../components/Navbar.vue";
export default {
  components: {
    ControlBar,
    TotalSum,
    Navbar,
  },
};
</script>

<style lang="scss" scoped></style>
