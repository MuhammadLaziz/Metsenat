<template>
  <div class="main-bg">
    <HomeNav />
    <div class="flex">
      <div
        class="max-w-[850px] m-r-auto pt-[76px] pl-[200px] pr-[102px] bg-[#fff]"
      >
        <Register
          v-if="entered"
          @entered="entered = false"
          :yuridik="yuridik"
        />
        <Successful v-else />
      </div>
      <Comments />
    </div>
  </div>
</template>

<script>
import HomeNav from "../components/HomeNav.vue";
import AppAsSponsor from "../components/AppAsSponsor.vue";
import Register from "../components/Register.vue";
import Comments from "../components/Comments.vue";
import Successful from "../components/Successful.vue";
export default {
  components: { HomeNav, AppAsSponsor, Register, Comments, Successful },
  data() {
    return {
      jismoniy: true,
      yuridik: false,
      entered: true,
    };
  },
  methods: {
    jismoniyHandler() {
      (this.jismoniy = true), (this.yuridik = false);
    },
    yuridikhandler() {
      (this.jismoniy = false), (this.yuridik = true);
    },
  },
};
</script>

<style lang="scss" scoped>

.main-bg {
  background-image: url('../assets/images/big-bg.png');
  background-repeat: no-repeat;
  z-index: 99;
  background-position: 180% 180%;
}
.textPerson {
  font-weight: 500;
  font-size: 12px;
  color: rgba(51, 102, 255, 0.6);
  letter-spacing: 1.125px;
  padding: 14px 89px;
  cursor: pointer;

  &.is-active {
    background-color: #3366ff;
    color: #fff;
  }
}
</style>
