<template>
  <div
    class="w-[1160px] m-auto max-h-[100vh] flex items-center justify-between"
  >
    <div class="w-[793px] m-auto p-[32px] bg-[#fff] rounded-[12px] mt-[40px]">
      <div class="flex items-center justify-between ]">
        <h1 class="text-[24px] font-[700] text-[#28293D]">Homiy haqida</h1>
        <button
          @click="showModal = true"
          class="flex items-center bg-[#EDF1FD] rounded-[5px] px-[32px] py-[9px]"
        >
          <Edit />
          <p class="text-[#3365FC] text-[14px] font-[500]">Tahrirlash</p>
        </button>
      </div>
      <div class="mt-[26px] flex items-center">
        <span
          class="w-[64px] h-[64px] bg-[#EAECF0] flex items-center justify-center rounded-[6px] border border-[#E0E7FF]"
        >
          <img src="../assets/avatar.png" alt="" />
        </span>
        <p class="w-[163px] text-[16px] font-[500] text-[#212121] ml-[20px]">
          {{ homiy.name }}
        </p>
      </div>
      <div class="mt-[24px] flex items-center">
        <div>
          <p class="text-[#B5B5C3] text-[12px] font-[500] mb-[12px]">
            telefon raqam
          </p>
          <p class="text-[#212121] text-[16px] font-[500]">{{ homiy.tel }}</p>
        </div>
        <div class="ml-[227px]">
          <p class="text-[#B5B5C3] text-[12px] font-[500] mb-[12px] capitalize">
            homiylik summasi
          </p>
          <p class="text-[#212121] text-[16px] font-[500]">
            {{ homiy.sponsorship }} UZS
          </p>
        </div>
      </div>
    </div>
  </div>

  <el-dialog v-model="showModal" title="Tahrirlash" class="el-width">
    <div
      class="w-full border border-[#E0E7FF] rounded-[6px] flex items-center justify-between transition-all"
    >
      <button
        @click="jsmoniyHandler"
        :class="[jismoniy ? 'is-active' : '']"
        class="textPerson"
      >
        Jismoniy shaxs
      </button>
      <button
        @click="yuridikHandler"
        :class="[yuridik ? 'is-active' : '']"
        class="textPerson"
      >
        Yuridik shaxs
      </button>
    </div>
    <form class="flex flex-col gap-7 mt-[32px]">
      <div class="flex flex-col">
        <label for="fullName" class="text-[#1D1D1F] font-[500]"
          >F.I.Sh. (Familiya Ism Sharifingiz)</label
        >
        <input
          type="text"
          id="fullName"
          placeholder="Ishmuhammedov Aziz Ishqobilovich"
          class="py-[12px] px-[16px] border mt-[8px] bg-[#E0E7FF] rounded-[6px] text-[#2E384D] border-[#E0E7FF] outline-none"
        />
      </div>
      <div class="flex flex-col">
        <label for="telNum" class="text-[#1D1D1F] font-[500]"
          >Telefon raqam</label
        >
        <input
        v-maska="'(##)-###-##-##'"
          type="text"
          id="telNum"
          placeholder="(99)-973-72-60"
          class="py-[12px] px-[16px] border mt-[8px] bg-[#E0E7FF] rounded-[6px] text-[#2E384D] border-[#E0E7FF] outline-none"
        />
      </div>
      <div class="flex flex-col">
        <label for="condition" class="text-[#1D1D1F] font-[500]">Holati</label>
        <SelectOption :options="conditon" id="condition" />
      </div>
      <div class="flex flex-col">
        <label class="text-[#1D1D1F] font-[500]">Homiylik summasi</label>
        <SelectOption :options="homiylikSummasi" />
      </div>
      <div class="flex flex-col border-b-2 border-[#F5F5F7] pb-[28px]">
        <label class="text-[#1D1D1F] font-[500]">To‘lov turi</label>
        <SelectOption :options="tolov" />
      </div>
      <div v-if="yuridik" class="flex flex-col">
        <label for="company" class="text-[#1D1D1F] font-[500]"
          >Tashkilot nomi</label
        >
        <input
          type="text"
          id="company"
          placeholder="Orient Group"
          class="py-[12px] px-[16px] border mt-[8px] bg-[#E0E7FF] rounded-[6px] text-[#2E384D] border-[#E0E7FF] outline-none"
        />
      </div>
      <button
        class="rounded-[5px] py-[10px] px-[32px] bg-[#3366FF] flex items-center self-end"
      >
        <Save />
        <p class="text-white font-[500] ml-[10px]">Saqlash</p>
      </button>
    </form>
  </el-dialog>
</template>

<script>
import { mapState } from "vuex";
import Edit from "../components/icons/Edit.vue";
import SelectOption from "../components/SelectOption.vue";
import Save from "../components/icons/Save.vue";

export default {
  data() {
    return {
      showModal: false,
      jismoniy: true,
      yuridik: false,
      conditon: [
        { id: 1, title: "Tasdiqlangan" },
        { id: 2, title: "Yangi" },
        { id: 3, title: "Moderatsiyada" },
        { id: 4, title: "Bekor qilingan" },
      ],
      homiylikSummasi: [
        { id: 1, title: "30 000 000" },
        { id: 2, title: "50 000 000" },
        { id: 3, title: "70 000 000" },
      ],
      tolov: [
        { id: 1, title: "Pul o'tkazmalari" },
        { id: 2, title: "Naqt" },
        { id: 3, title: "Bank orqali" },
      ],
    };
  },
  methods: {
    jsmoniyHandler() {
      this.jismoniy = true;
      this.yuridik = false;
    },
    yuridikHandler() {
      this.jismoniy = false;
      this.yuridik = true;
    },
  },
  computed: {
    ...mapState({
      homiy: (state) => state.homiy.singleHomiy,
    }),
  },
  components: { Edit, SelectOption, Save },
};
</script>

<style lang="scss" scoped>
.textPerson {
  width: 50%;
  font-weight: 500;
  font-size: 12px;
  color: rgba(51, 102, 255, 0.6);
  letter-spacing: 1.125px;
  padding: 14px 89px;
  cursor: pointer;
  transition: 0.3s all;
  border-radius: 4px;

  &.is-active {
    background-color: #3366ff;
    color: #fff;
  }
}
</style>

<style>
.el-select {
  width: 100%;
}
</style>
