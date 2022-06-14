<template>
  <div class="navbar one-edge-shadow py-[12px] bg-[#fff] transition-all">
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
        <router-link to="/">
          <LogOut class="ml-[43px]" />
        </router-link>
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

<style lang="scss" scoped>
.one-edge-shadow {
	-webkit-box-shadow: 0 8px 6px -6px black;
	   -moz-box-shadow: 0 8px 6px -6px black;
	        box-shadow: 0 8px 6px -6px black;
}
</style>
