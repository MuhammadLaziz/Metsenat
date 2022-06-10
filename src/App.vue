<template>
  <div class="app min-h-screen bg-[#F5F5F7]">
    <div
      :class="{
        hidden: this.$route.href === '/' || this.$route.href === '/auth',
      }"
    >
      <Navbar />
      <ControlBar />
    </div>
    <!-- <RouterView /> -->
    <router-view/>

  </div>
</template>

<script setup>
// import { RouterLink, RouterView } from "vue-router";
// import Login from './views/Login.vue';
import Navbar from "./components/Navbar.vue";
import ControlBar from "./components/ControlBar.vue";
// import HelloWorld from '@/components/HelloWorld.vue'
</script>

<style></style>
