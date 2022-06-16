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
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700;800;900&family=Nunito:ital,wght@0,400;0,500;0,600;0,700;0,800;0,900;1,300;1,400;1,500;1,600;1,700;1,800;1,900&family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,600;1,700;1,800;1,900&display=swap');
.app {
  font-family: 'Poppins', sans-serif;
}


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
  border: 2px solid transparent;
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
.el-overlay-dialog {
  background-color: rgba(0, 0, 0, 0.5);
  backdrop-filter: blur(8px);
}
.el-input__wrapper {
  width: 100%;
  background-color: #F9FAFF !important;
}
</style>
