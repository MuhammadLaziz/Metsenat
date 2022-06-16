<template>
  <div class="py-[24px] px-1 bg-[#fff]">
    <div
      class="max-w-[1200px] lg:flex-row md:flex-col m-auto md:justify-between flex items-center flex-col"
    >
      <div
        class="flex sm:flex-row items-center border-2 border-[#E0E7FF] rounded-[6px]"
      >
        <button
          @click="dashTab"
          :class="[dashboard ? 'is-active' : '', 'tab']"
          class="px-[25px] py-[10px] sm:px-[45px] sm:py-[15px]"
        >
          Dashboard
        </button>
        <button
          @click="sponserTab"
          :class="[homiylar ? 'is-active' : '', 'tab', 'left-b']"
          class="px-[25px] py-[10px] sm:px-[45px] sm:py-[15px]"
        >
          Homiylar
        </button>
        <button
          @click="studentTab"
          :class="[talabalar ? 'is-active' : '', 'tab', 'left-b']"
          class="px-[25px] py-[10px] sm:px-[45px] sm:py-[15px]"
        >
          Talabalar
        </button>
      </div>
      <div
        class="flex sm:flex-row md:flex-row items-center mt-[15px] lg:mt-[0]"
      >
        <div
          class="flex items-center  md:px-[30px] md:py-[15px] bg-[#E8E8E8] w-[60%] m-auto sm:w-[70%]  px-[12px] py-[13px] rounded-[4px] hover:bg-[#f3ecec]"
        >
          <SearchIcon />
          <input
            type="text"
            placeholder="Izlash"
            class="bg-transparent ml-[10px] cursor-pointer border-none outline-none"
          />
        </div>
        <butoon
          @click="dialogFormVisible = true"
          class="flex items-center px-[12px] md:px-[30px] md:py-[15px] rounded-[5px] py-[13px] ml-[20px] bg-[#EDF1FD] hover:bg-[#c6d3fc] cursor-pointer transition-all"
        >
          <FilterIcon />
          <p class="font-[500] text-[#3365FC] ml-[10px]">Filter</p>
        </butoon>
      </div>
    </div>
  </div>

  <el-dialog
    v-if="this.$route.href == '/talabalar'"
    v-model="dialogFormVisible"
    title="Filter"
    class="text-[#28293D] text-[24px] font-[700]"
  >
    <form>
      <div>
        <label class="text-[12px] font-[500] text-[#1D1D1F]"
          >Talabalik turi</label
        >
        <SelectOption :options="talabalik"/>
      </div>
      <div class="mt-[28px] border-b-2 border-[#F5F5F7] pb-[28px]">
        <label class="text-[12px] font-[500] text-[#1D1D1F]">OTM</label>
        <SelectOption :options="talabalik" />
      </div>
      <div class="flex-col mt-[28px] md:flex-row flex items-center justify-end">
        <button
          class="border mb-3 md:mb-0 border-[#3366FF] rounded-[5px] px-[12px] py-[10px] flex items-center hover:scale-105 transition-all"
        >
          <Clear />
          <p class="ml-[10px] text-[#3366FF] font-[500]">Tozalash</p>
        </button>
        <button
          class="border border-[#3366FF] bg-[#3366FF] ml-[16px] rounded-[5px] px-[12px] py-[10px] flex items-center hover:scale-105 transition-all"
        >
          <Eye />
          <p class="ml-[10px] text-[#fff] font-[500]">Natijalarni ko‘rish</p>
        </button>
      </div>
    </form>
  </el-dialog>
  <el-dialog
    v-else
    v-model="dialogFormVisible"
    title="Filter"
    class="text-[#28293D] text-[24px] font-[700] !w-[50%]"
  >
    <form>
      <div class="flex flex-col">
        <label for="select" class="font-[600] text-[12px] mb-[8px]"
          >Ariza holati</label
        >
        <el-select
          id="select"
          v-model="options[0]"
          filterable
          placeholder="Select"
          class="bg-[#E0E7FF]"
        >
          <el-option
            v-for="item in options"
            :key="item.value"
            :label="item.option"
            :value="item.option"
          />
        </el-select>
      </div>
      <div class="mt-[28px]">
        <label class="font-[500] text-[12px] block mb-[8px]"
          >Homiylik summasi</label
        >
        <div class="grid grid-cols-1 gap-3 md:grid-cols-2 lg:grid-cols-3">
          <button
            @click="boshqasiHandler"
            type="button"
            for="boshqasi"
            :class="(boshqasi ? 'bg-[#E0E7FF]' : '', 'textStyle py-[10px]')"
            class="transition-all hover:bg-[#F9FAFF] text-left"
          >
            Barchasi
          </button>
          <Sums :price="price" />
        </div>
      </div>
      <div
        class="mt-[28px] flex flex-col border-b-2 border-[#E0E7FF] pb-[28px]"
      >
        <label for="date" class="font-[500]">Sana</label>
        <input
          type="date"
          id="date"
          class="max-w-[253px] cursor-pointer bg-[#E0E7FF] border border-[#E0E7FF] rounded-[6px] px-[16px] py-[12px] mt-[8px]"
        />
      </div>
      <div class="mt-[28px] flex items-center justify-end flex-col lg:flex-row mb-[5px]">
        <button
          class="px-[32px] py-[10px] flex mb-[5px] lg:mb-0 items-center border border-[#B2B7C1] rounded-[5px] hover:border-[#1f4cbd] hover:text-[#1f4cbd] transition-all hover:scale-105"
        >
          <Clear />
          <span class="text-[#B2B7C1] ml-[8px]">Tozalash</span>
        </button>
        <button
          class="flex items-center bg-[#3366FF] py-[10px] px-[32px] rounded-[5px] ml-[16px] cursor-pointer hover:bg-[#1f4cbd] transition-all hover:scale-105"
        >
          <Eye />
          <span class="ml-[10px] text-white text-[14px] font-[500] eye-btn"
            >Natijalarni ko‘rish</span
          >
        </button>
      </div>
    </form>
  </el-dialog>
</template>

<script>
import SearchIcon from "./icons/SearchIcon.vue";
import FilterIcon from "./icons/FilterIcon.vue";
import Sums from "./Sums.vue";
import Clear from "./icons/Clear.vue";
import Eye from "./icons/Eye.vue";
import SelectOption from "./SelectOption.vue";
export default {
  components: { SearchIcon, FilterIcon, Sums, Clear, Eye, SelectOption },
  data() {
    return {
      dashboard: true,
      homiylar: false,
      talabalar: false,
      dialogTableVisible: false,
      dialogFormVisible: false,
      boshqasi: false,
      value: "",
      options: [
        { id: 5, option: "Bekor qilingan" },
        { id: 4, option: "Tasdiqlangan" },
        { id: 3, option: "Moderatsiyada" },
        { id: 2, option: "Yangi" },
        { id: 1, option: "Barchasi" },
      ],
      price: [
        {
          id: 1,
          cost: 100000,
        },
        {
          id: 2,
          cost: 200000,
        },
        {
          id: 3,
          cost: 300000,
        },
        {
          id: 4,
          cost: 400000,
        },
        {
          id: 5,
          cost: 500000,
        },
      ],
      talabalik: [
        { id: 1, title: "Barchasi" },
        { id: 2, title: "Bakalavr" },
        { id: 3, title: "Magistr" },
      ],
    };
  },
  methods: {
    dashTab() {
      this.dashboard = true;
      this.homiylar = false;
      this.talabalar = false;
      this.$router.push({
        path: "/dashboard",
      });
    },
    sponserTab() {
      this.homiylar = true;
      this.dashboard = false;
      this.talabalar = false;
      this.$router.push({
        path: "/homiylar",
      });
    },
    studentTab() {
      this.homiylar = false;
      this.dashboard = false;
      this.talabalar = true;
      this.$router.push("/talabalar");
      console.log("dasdasdas");
    },
  },
};
</script>

<style lang="scss">
.el-select {
  width: 100% !important;
}
.m-2 {
  margin: 8px 0 !important;
}
.left-b {
  border-left: 2px solid #dde3fb;
}
.el-dialog {
  // width: 40% !important;
  border-radius: 12px !important;

  &__title {
    font-weight: 700;
    font-size: 24px;
    color: #28293d;
  }

  &__header {
    margin-right: 0% !important;
    border-bottom: 2px solid #f5f5f7;
  }
}
</style>
<style lang="scss" scoped>
.added {
  border: 2px solid transparent;

  &:focus {
    border: 2px solid #c0c0c0;
  }
}
.tab {
  background: #ffffff;
  // padding: 14px 60px;
  color: #3366ff99;
  font-weight: 400;
  font-size: 12px;
  cursor: pointer;
  transition: 0.3s all;

  &:hover {
    background-color: #e1e9ff;
  }

  &.is-active {
    background-color: #3366ff;
    color: #fff;
    border-radius: 4px;
  }
}
.textStyle {
  color: #2e384d;
  padding: 16px 32px;
  font-weight: 500;
  font-size: 18px;
  border: 2px solid #e0e7ff;
}
.eye-btn {
  box-shadow: 0px 0px 1px rgba(40, 41, 61, 0.04),
    0px 2px 4px rgba(96, 97, 112, 0.16);
}
</style>
