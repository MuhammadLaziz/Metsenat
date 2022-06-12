<template>
  <div class="app min-h-screen bg-[#F5F5F7]">
    <div
      :class="{
        hidden: this.$route.href === '/' || this.$route.href === '/auth',
      }"
    >
      <Navbar />
      <ControlBar
        v-if="
          this.$route.name !== 'newStudents' &&
          this.$route.name !== 'singleTalaba'
        "
      />
      <TalabalarNav v-else />
    </div>

    <router-view v-slot="{ Component }">
      <Transition name="scale" mode="out-in">
        <component :is="Component"></component>
      </Transition>
    </router-view>
  </div>
</template>

<script>
import Navbar from "./components/Navbar.vue";
import ControlBar from "./components/ControlBar.vue";
import TalabalarNav from "./components/TalabalarNav.vue";
export default {
  components: {
    TalabalarNav,
    ControlBar,
    Navbar,
  },
};
</script>

<style>
.scale-enter-active,
.scale-leave-active {
  transition: all 0.5s ease;
}

.scale-enter-from,
.scale-leave-to {
  opacity: 0;
  transform: scale(0.9);
}
</style>
