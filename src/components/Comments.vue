<template>
  <div
    class="back-image min-w-[632px] m-l-auto min-h-[936px] pt-[70px] pl-[72px]"
  >
    <p class="w-[432px] text-[20px] font-[500]">
      Yuqori sinflarda bolalar shaxs boʻlib, jamoa boʻlib shakllanadi. Ayni
      oʻsha paytda ularni oʻzlari oʻrgangan muhitdan ajratib qoʻymaslik kerak.
    </p>
    <div class="flex items-center mt-[25px]">
      <span class="w-[55px] h-[55px] inline-block rounded-[16px] overflow-hidden">
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
.back-image {
  background-image: url("../assets/images/left-nail.png"),
    url("../assets/images/right-nail.png");
  background-repeat: no-repeat, no-repeat;
  background-position: 10% 6%, 80% 15%;
}
</style>
