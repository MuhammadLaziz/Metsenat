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

<style lang="scss">
.scale-enter-active,
.scale-leave-active {
  transition: all 0.5s ease;
}

.scale-enter-from,
.scale-leave-to {
  opacity: 0;
  transform: scale(0.9);
}

/* Chrome, Safari, Edge, Opera */
input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}

/* Firefox */
input[type=number] {
  -moz-appearance: textfield;
}
.error-mes {
  color: red;
  font-weight: 500;
  font-size: 14px;
  margin-top: 6px;
}

.input {
  width: 100%;
  padding: 12px 0;
  padding-left: 16px;
  background: #e0e7ff33;
  color: #000;
  border-radius: 6px;
  border: 1px solid transparent;
  margin-top: 8px;
  outline: none;
  transition: 0.3s;
  cursor: pointer;

  &:hover {
    background-color: rgb(38, 39, 42) 33;
  }

  &:focus {
    border: 2px solid #849be4;
  }
}
.pl-l {
  padding-left: 50px;
}
</style>
