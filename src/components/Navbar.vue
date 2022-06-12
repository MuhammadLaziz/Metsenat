<template>
  <div class="navbar py-[12px] bg-[#fff] shadow-sm transition-all">
    <div class="max-w-[1160px] m-auto flex items-center justify-between">
      <router-link to="/">
        <logoBlueVue />
      </router-link>
      <div class="flex items-center">
        <div class="flex items-center bg-[#F1F1F3] p-[4px] rounded-[6px]">
          <p class="font-[700] pl-[16px]">Lazizbek</p>
          <span class="bg-[#00AE69] px-[5px] pt-[8px] ml-[24px] rounded-[4px]">
            <UserNav />
          </span>
        </div>
        <LogOut class="ml-[43px]" />
      </div>
    </div>
  </div>
</template>

<script>
import logoBlueVue from "./icons/logo-blue.vue";
import UserNav from "./icons/UserNav.vue";
import LogOut from "./icons/LogOut.vue";
export default {
  components: {
    logoBlueVue,
    UserNav,
    LogOut,
  },
};
</script>

<style lang="scss" scoped></style>
