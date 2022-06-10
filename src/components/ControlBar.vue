<template>
  <div class="py-[24px] bg-[#fff]">
    <div class="w-[1160px] m-auto flex items-center justify-between">
      <div class="flex items-center border-2  border-[#E0E7FF] rounded-[6px]">
        <button @click="dashTab" :class="[dashboard ? 'is-active' : '', 'tab']">
          Dashboard
        </button>
        <button   @click="sponserTab" :class="[homiylar ? 'is-active' : '', 'tab', 'left-b ']">
          Homiylar
        </button>
        <button  @click="studentTab" :class="[talabalar ? 'is-active' : '', 'tab', 'left-b']">
          Talabalar
        </button>
      </div>
      <div class="flex items-center ml-[auto] bg-[#E8E8E8] w-[284px] p-[12px] rounded-[4px]">
        <SearchIcon />
        <input
          type="text"
          placeholder="Izlash"
          class="bg-[#E8E8E8] ml-[10px] text-[#B1B1B8] outline-none border-none"/>
      </div>
      <div class="flex items-center px-[32px] py-[13px] ml-[20px] bg-[#EDF1FD]">
        <FilterIcon />
        <p class="font-[500] text-[#3365FC] ml-[10px]">Filter</p>
      </div>
    </div>
  </div>
</template>

<script>
import SearchIcon from "./icons/SearchIcon.vue";
import FilterIcon from "./icons/FilterIcon.vue";
export default {
  components: { SearchIcon, FilterIcon },
  data() {
    return {
      dashboard: true,
      homiylar: false,
      talabalar: false,
    };
  },
  methods: {
    dashTab() {
      this.dashboard = true;
      this.homiylar = false;
      this.talabalar = false;
      this.$router.push({
        path: '/dashboard'
      })
    },
    sponserTab() {
      this.homiylar = true;
      this.dashboard = false;
      this.talabalar = false;
      this.$router.push({
        path: '/homiylar'
      })
    },
    studentTab() {
      this.homiylar = false;
      this.dashboard = false;
      this.talabalar = true;
      this.$router.push('/talabalar');
      console.log('dasdasdas')
    },
  },
};
</script>

<style lang="scss" scoped>
.tab {
  background: #ffffff;
  padding: 14px 60px;
  color: #3366ff99;
  font-weight: 500;
  font-size: 12px;
    cursor: pointer;
    transition: 0.3s all;

  &.is-active {
    background-color: #3366ff;
    color: #fff;
    border-radius: 4px;
  }
}
.left-b {
    border-left: 2px solid #DDE3FB;
}
</style>
