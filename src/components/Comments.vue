<template>
  <div
    class="w-[90%] md:w-[40%] lg:w-[40%] mb-[30px] ml-auto comments-bg"
  >
    <p class="max-w-[90%] md:w-[100%] lg:w-[400px] text-[20px] font-[500]">
      Yuqori sinflarda bolalar shaxs boʻlib, jamoa boʻlib shakllanadi. Ayni
      oʻsha paytda ularni oʻzlari oʻrgangan muhitdan ajratib qoʻymaslik kerak.
    </p>
    <div class="flex items-center mt-[25px]">
      <span class="max-w-[55px] h-[55px] inline-block rounded-[16px] overflow-hidden">
        <img
          src="../assets/images/Shavkat_Mirziyoyev_official_portrait.jpg"
          class="w-full h-full object-cover"
          alt=""
        />
      </span>
      <span class="ml-[17px]">
        <p class="text-[17px] font-[600] mb-[4px]">Shavkat Mirziyoyev</p>
        <p class="text-[#86868B] text-[14px] font-[400]">O‘zbekiston Respublikasi Prezidenti</p>
      </span>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.comments-bg {
  background-image: url("../assets/images/left-nail.png"), url("../assets/images/right-nail.png");
  background-repeat: no-repeat, no-repeat;
  background-position: 0% 0%, 80% 10%;
}
</style>
