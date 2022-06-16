<template>
  <div class="max-w-[1160px] m-auto">
    <div
      class="max-w-[90%]  m-auto mt-[40px] py-[24px] px-[32px] bg-[#fff] rounded-[12px]"
    >
      <div class="flex items-center justify-between mb-[30px]">
        <h1 class="text-[24px] font-[700] text-[#28293D]">Talaba haqida</h1>
        <button
          @click="tahrirlash = true"
          class="py-[10px] px-[32px] bg-[#EDF1FD] flex items-center rounded-[5px] hover:bg-[#becbf3] transition-all"
        >
          <TalabaEdit />
          <p class="text-[#3365FC] font-[500] ml-[10px]">Tahrirlash</p>
        </button>
      </div>
      <span class="flex items-center">
        <p
          class="w-[172px] h-[18px] bg-[#E5EBFF] text-[#3366FF] text-[12px] font-[500] flex items-center justify-center"
        >
          Asosiy ma’lumotlar
        </p>
        <span class="w-full bg-[#E4E8F0] h-[1px] border"></span>
      </span>
      <div class="mt-[26px] flex items-center">
        <span
          class="w-[64px] h-[64px] bg-[#EAECF0] flex items-center justify-center rounded-[6px] border border-[#E0E7FF]"
        >
          <img src="../assets/avatar.png" alt="" />
        </span>
        <p class="w-[163px] text-[16px] font-[500] text-[#212121] ml-[20px]">
          Isfandiyorov Iqbol Bobomirzayevich
        </p>
      </div>
      <p class="text-[#B5B5C3] font-[500] mt-[24px] mb-[8px]">telefon raqam</p>
      <p class="text-[16px] font-[500] text-[#212121]">+998 99 973-72-60</p>
      <span class="flex items-center mt-[32px] mb-[24px]">
        <p
          class="max-w-[433px] bg-[#E5EBFF] text-[#3366FF] text-[12px] font-[500] p-[10px] rounded-[5px]"
        >
          O‘qish joyi haqida ma’lumot
        </p>
        <span class="w-full bg-[#E4E8F0] h-[1px] border"></span>
      </span>
      <div class="flex items-center">
        <div>
          <p class="text-[12px] font-[500] text-[#B5B5C3]">OTM</p>
          <p class="text-[16px] font-[500]">
            O’zbekiston davlat jahon tillari universiteti
          </p>
        </div>
        <div class="ml-[28px]">
          <p class="text-[12px] font-[500] text-[#B5B5C3]">Talabalik turi</p>
          <p class="text-[16px] font-[500]">Bakalavr</p>
        </div>
      </div>
      <div class="flex items-center mt-[24px]">
        <div class="w-[349px]">
          <p class="text-[12px] font-[500] text-[#B5B5C3]">
            Ajratilingan summa
          </p>
          <p class="text-[16px] font-[500]">Bakalavr</p>
        </div>
        <div class="ml-[-14px]">
          <p class="text-[12px] font-[500] text-[#B5B5C3]">Kontrakt miqdori</p>
          <p class="text-[16px] font-[500]">Bakalavr</p>
        </div>
      </div>
    </div>
    <div
      class="max-w-[90%] m-auto mt-[40px] py-[24px] px-[32px] bg-[#fff] rounded-[12px]"
    >
      <div class="flex items-center justify-between">
        <h1 class="text-[24px] font-[700] text-[#28293D]">Talabaga homiylar</h1>
        <button
          @click="homiyQoshish = true"
          class="py-[10px] px-[32px] bg-[#EDF1FD] flex items-center rounded-[5px] hover:bg-[#becbf3] transition-all"
        >
          <PlusBlue />
          <p class="text-[#3365FC] font-[500] ml-[10px]">Homiy qo‘shish</p>
        </button>
      </div>
    </div>
    <div class=" m-auto">
      <Rocket class="svg" />
    </div>
  </div>

  <el-dialog v-model="tahrirlash" title="Tahrirlash">
    <form class="flex flex-col gap-7" @submit.prevent="talabaTahrirlash">
      <div class="flex flex-col">
        <label for="fullName" class="text-[#1D1D1F] font-[500]"
          >F.I.Sh. (Familiya Ism Sharifingiz)</label
        >
        <input
          v-model="talabaIsmi"
          type="text"
          id="fullName"
          maxlength="10"
          :class="v$.talabaIsmi.$error ? 'border-red-500' : ''"
          placeholder="Ishmuhammedov Aziz Ishqobilovich"
          class="input mt-[8px]"
        />
      </div>
      <div class="flex flex-col relative">
        <label for="telNum" class="text-[#1D1D1F] font-[500]"
          >Telefon raqam</label
        >
        <input
          v-maska="'(##)-###-##-##'"
          v-model="talabaNomeri"
          :class="v$.talabaNomeri.$error ? 'border-red-500' : ''"
          type="text"
          id="telNum"
          placeholder="(99)-973-72-60"
          class="input mt-[8px] pl-l"
        />
        <span class="text-[14px] font-[500] absolute top-[56%] left-[6%] md:left-[5%] lg:left-[3%] xl:left-[2%]"
          >+998</span
        >
      </div>
      <div class="flex flex-col">
        <label class="text-[#1D1D1F] font-[500]">OTM</label>
        <SelectOption :options="otm" />
      </div>
      <div class="flex flex-col">
        <label for="kantrakt" class="text-[#1D1D1F] font-[500]"
          >Kontrakt miqdori</label
        >
        <input
          type="text"
          v-model="kontrakt"
          v-maska="'#-###-###'"
          maxlength="9"
          placeholder="30 000 000 UZS"
          :class="v$.kontrakt.$error ? 'border-red-500' : ''"
          class="input"
        />
      </div>
      <button
        class="rounded-[5px] py-[10px] px-[32px] bg-[#3366FF] hover:bg-[#7997f1] transition-all flex items-center self-end"
      >
        <Save />
        <p class="text-white font-[500] ml-[10px]">Saqlash</p>
      </button>
    </form>
  </el-dialog>

  <el-dialog v-model="homiyQoshish" title="Homiy qo‘shish">
    <form class="flex flex-col gap-7" @submit.prevent="newHomiy">
      <div class="flex flex-col">
        <label for="fullName" class="text-[#1D1D1F] font-[500]"
          >F.I.Sh. (Familiya Ism Sharifingiz)</label
        >
        <input
          v-model="homiyIsmi"
          type="text"
          id="fullName"
          placeholder="Ishmuhammedov Aziz Ishqobilovich"
          class="input mt-[8px]"
          maxlength="10"
          :class="v$.homiyIsmi.$error ? 'border-red-500' : ''"
        />
      </div>
      <div class="flex flex-col">
        <label for="telNum" class="text-[#1D1D1F] font-[500]"
          >Ajratilingan summa</label
        >
        <input
          v-model="ajratganSumma"
          id="telNum"
          placeholder="Summani kiriting"
          v-maska="'#-###-###'"
          maxlength="9"
          class="input mt-[8px]"
          :class="v$.ajratganSumma.$error ? 'border-red-500' : ''"
        />
      </div>

      <button
        @click="newHomiy"
        class="rounded-[5px] py-[10px] px-[32px] bg-[#3366FF] hover:bg-[#86a2f9] transition-all flex items-center self-end"
      >
        <Plus />
        <p class="text-white font-[500] ml-[10px]">Saqlash</p>
      </button>
    </form>
  </el-dialog>
</template>

<script>
import useVuelidate from "@vuelidate/core";
import { required, minLength } from "@vuelidate/validators";
import Edit from "../components/icons/Edit.vue";
import TalabaEdit from "../components/icons/TalabaEdit.vue";
import PlusBlue from "../components/icons/PlusBlue.vue";
import Rocket from "../components/icons/Rocket.vue";
import SelectOption from "../components/SelectOption.vue";
import Plus from "../components/icons/Plus.vue";
import { useToast } from "vue-toastification";
export default {
  components: { Edit, TalabaEdit, PlusBlue, Rocket, SelectOption, Plus },
  data() {
    return {
      toast: useToast(),
      v$: useVuelidate(),
      tahrirlash: false,
      homiyQoshish: false,
      talabaIsmi: "",
      talabaNomeri: "",
      kontrakt: "",
      homiyIsmi: "",
      ajratganSumma: "",
      ajratilgan: "",
      otm: [
        { id: 1, title: "O’zbekiston Davlat Jahon Tillari Universiteti" },
        { id: 2, title: "O’zbekiston Davlat Milliy Universtet" },
      ],
    };
  },
  methods: {
    talabaTahrirlash() {
      this.v$.$validate();
      if (!this.v$.$error) {
        console.log("success");
      } else {
        alert("Xatolik kuzatildi");
      }
      console.log(this.v$.$error ? "hi" : "5");
    },
    newHomiy() {
      this.v$.$validate();
      if (!this.v$.$error) {
        alert("success");
      } else {
        alert("Xatolik kuzatildi");
      }
    },
  },
  validations() {
    return {
      talabaIsmi: { required, minLength: minLength(10) },
      talabaNomeri: { required, minLength: minLength(9) },
      fullName: { required, minLength: minLength(10) },
      homiyIsmi: { required, minLength: minLength(9) },
      kontrakt: { required, minLength: minLength(5) },
      ajratganSumma: { required, minLength: minLength(5) }
    };
  },
};
</script>

<style lang="scss" scoped>
.pl-l {
  padding-left: 50px;
}
.svg {
  width: 400px;
  margin: 0 auto;
}
</style>
