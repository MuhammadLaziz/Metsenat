<template>
  <div>
    <HomeNav />
    <div>
      <AppAsSponsor />
    </div>
  </div>
</template>

<script>
import HomeNav from "../components/HomeNav.vue";
import AppAsSponsor from "../components/AppAsSponsor.vue";
export default {
  components: { HomeNav, AppAsSponsor },
};
</script>

<style lang="scss" scoped></style>
