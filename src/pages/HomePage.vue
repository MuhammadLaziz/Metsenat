<template>
  <HomeNav />
  <div class="liner-bg">
    <div class="main-bg">
      <div class="max-w-[1200px] min-h-[100vh] m-auto bg-[#fff] m-auto flex justify-between pt-[60px] flex-col-reverse md:flex-row lg:bg-inherit lg-flex-row ">
        <Register v-if="entered" @entered="entered = false" :yuridik="yuridik" />
        <Successful v-else />
        <Comments class="px-[15px]" />
      </div>
    </div>
  </div>
</template>

<script>
import HomeNav from "../components/HomeNav.vue";
import Register from "../components/Register.vue";
import Comments from "../components/Comments.vue";
import Successful from "../components/Successful.vue";
export default {
  components: { HomeNav, Register, Comments, Successful },
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
  background-image: url("../assets/images/big-bg.png");
  background-repeat: no-repeat;
  background-size: 50%;
  background-position: 140% 130%;
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
.liner-bg {
  background-image: linear-gradient(to right, #fff 55%, #F5F5F7 45%);
}
</style>
