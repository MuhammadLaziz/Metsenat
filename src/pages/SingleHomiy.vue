<template>
  <div
    class="max-w-[1160px] m-auto max-h-[100vh] flex items-center justify-between"
  >
    <div class="max-w-[90%] m-auto p-[32px] bg-[#fff] rounded-[12px] mt-[40px]">
      <div class="flex flex-col sm:flex-row items-center justify-between ]">
        <h1 class="text-[24px] font-[700] text-[#28293D]">Homiy haqida</h1>
        <button
          @click="showModal = true"
          class="flex items-center mt-[10px] sm:mt-[0] bg-[#EDF1FD] rounded-[5px] px-[32px] py-[9px] hover:bg-[#c6d3fc] cursor-pointer transition-all"
        >
          <Edit />
          <p class="text-[#3365FC] text-[14px] font-[500]">Tahrirlash</p>
        </button>
      </div>
      <div class="mt-[26px] flex items-center">
        <span
          class="p-[20px] bg-[#EAECF0]  rounded-[6px] border border-[#E0E7FF]"
        >
          <img src="../assets/avatar.png" alt="" />
        </span>
        <p class="max-w-[163px] text-[16px] font-[500] text-[#212121] ml-[20px]">
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
      class="w-full border border-[#E0E7FF] rounded-[6px] flex items-center justify-between flex-col md:flex-row transition-all"
    >
      <button
        @click="jsmoniyHandler"
        :class="[jismoniy ? 'is-active' : '']"
        class="textPerson w-[100%] px-[40px] py-[10px]"
      >
        Jismoniy shaxs
      </button>
      <button
        @click="yuridikHandler"
        :class="[yuridik ? 'is-active' : '']"
        class="textPerson w-[100%] px-[40px] py-[10px]"
      >
        Yuridik shaxs
      </button>
    </div>
    <form class="flex flex-col gap-7 mt-[32px]" @submit.prevent="homiyTahrirlash">
      <div class="flex flex-col">
        <label for="fullName" class="text-[#1D1D1F] font-[500]"
          >F.I.Sh. (Familiya Ism Sharifingiz)</label
        >
        <input
          type="text"
          v-model="name"
          id="fullName"
          maxlength="8"
          placeholder="Ishmuhammedov Aziz Ishqobilovich"
          class="input"
          :class="v$.name.$error ? 'border-red-500' : ''"
        />
      </div>
      <div class="flex flex-col relative">
        <label for="telNum" class="text-[#1D1D1F] font-[500]"
          >Telefon raqam</label
        >
        <input
          v-maska="'(##)-###-##-##'"
          v-model="tel"
          type="text"
          id="telNum"
          placeholder="(99)-973-72-60"
          class="input pl-l"
          :class="v$.tel.$error ? 'border-red-500' : ''"
        />
        <span class="text-[14px] font-[500] absolute top-[56%] left-[5%] md:left-[4%] lg:left-[2.5%] xl:left-[2%]">+998</span>
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
          maxlength="8"
          placeholder="Orient Group"
          class="input"
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
import useVuelidate from "@vuelidate/core";
import { required } from "@vuelidate/validators";
import { mapState } from "vuex";
import Edit from "../components/icons/Edit.vue";
import SelectOption from "../components/SelectOption.vue";
import Save from "../components/icons/Save.vue";

export default {
  data() {
    return {
      v$: useVuelidate(),
      tel: '',
      name: '',
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
    homiyTahrirlash() {
      this.v$.$validate()
      if(!this.v$.$error) {
        alert('Hozircha hammasi yaxshi')
      }else {
        alert("Xatolik kuzatildi")
      }
    }
  },
  validations() {
    return {
      name: { required },
      tel: { required }
    }
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
  font-weight: 500;
  font-size: 12px;
  color: rgba(51, 102, 255, 0.6);
  letter-spacing: 1.125px;
  // padding: 14px 89px;
  cursor: pointer;
  transition: 0.3s all;
  border-radius: 4px;

  &.is-active {
    background-color: #3366ff;
    color: #fff;
  }
}
.pl-l {
  padding-left: 50px;
}
</style>

<style>
.el-select {
  width: 100%;
}
</style>
