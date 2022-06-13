<template>
  <div class="w-[1160px] m-auto">
    <div
      class="w-[790px] m-auto mt-[40px] py-[24px] px-[32px] bg-[#fff] rounded-[12px]"
    >
      <div class="flex items-center justify-between mb-[30px]">
        <h1 class="text-[24px] font-[700] text-[#28293D]">Talaba haqida</h1>
        <button 
          @click="tahrirlash = true"
          class="py-[10px] px-[32px] bg-[#EDF1FD] flex items-center rounded-[5px]"
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
          class="w-[233px] h-[18px] bg-[#E5EBFF] text-[#3366FF] text-[12px] font-[500] flex items-center justify-center"
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
      class="w-[790px] m-auto mt-[40px] py-[24px] px-[32px] bg-[#fff] rounded-[12px]"
    >
      <div class="flex items-center justify-between ">
        <h1 class="text-[24px] font-[700] text-[#28293D]">Talabaga homiylar</h1>
        <button
          @click="homiyQoshish = true"
          class="py-[10px] px-[32px] bg-[#EDF1FD] flex items-center rounded-[5px]"
        >
          <PlusBlue />
          <p class="text-[#3365FC] font-[500] ml-[10px]">Homiy qo‘shish</p>
        </button>
      </div>
    </div>
    <div class="w-[820px] m-auto">
        <Rocket />
    </div>
  </div>

  <el-dialog v-model="tahrirlash" title="Tahrirlash" >
    
    <form class="flex flex-col gap-7">
      <div class="flex flex-col">
        <label for="fullName" class="text-[#1D1D1F] font-[500]"
          >F.I.Sh. (Familiya Ism Sharifingiz)</label
        >
        <input
          type="text"
          id="fullName"
          v-model="fullName"
          placeholder="Ishmuhammedov Aziz Ishqobilovich"
          class="inputs mt-[8px]"
        />
      </div>
      <div class="flex flex-col">
        <label for="telNum" class="text-[#1D1D1F] font-[500]"
          >Telefon raqam</label
        >
        <input
        v-maska="'(##)-###-##-##'"
        v-model="telNum"
          type="text"
          id="telNum"
          placeholder="(99)-973-72-60"
          class="inputs mt-[8px] "
        />
      </div>
      <div class="flex flex-col">
        <label class="text-[#1D1D1F] font-[500]">OTM</label>
        <SelectOption :options="otm"  />
      </div>
      <div class="flex flex-col">
        <label for="kantrakt" class="text-[#1D1D1F] font-[500]">Kontrakt miqdori</label>
        <input type="text" v-model="kontrakt" placeholder="30 000 000 UZS" class="inputs">
      </div>
      <button
        class="rounded-[5px] py-[10px] px-[32px] bg-[#3366FF] flex items-center self-end"
      >
        <Save />
        <p class="text-white font-[500] ml-[10px]">Saqlash</p>
      </button>
    </form>
  </el-dialog>
  <el-dialog v-model="homiyQoshish" title="Homiy qo‘shish" >
    
    <form class="flex flex-col gap-7 ">
      <div class="flex flex-col">
        <label for="fullName" class="text-[#1D1D1F] font-[500]"
          >F.I.Sh. (Familiya Ism Sharifingiz)</label
        >
        <input
        v-model="fullName"
          type="text"
          id="fullName"
          placeholder="Ishmuhammedov Aziz Ishqobilovich"
          class="py-[12px] px-[16px] border mt-[8px] bg-[#E0E7FF] rounded-[6px] text-[#2E384D] border-[#E0E7FF] outline-none"
        />
      </div>
      <div class="flex flex-col">
        <label for="telNum" class="text-[#1D1D1F] font-[500]"
          >Ajratilingan summa</label
        >
        <input
        v-model="ajratilgan"
          type="text"
          id="telNum"
          placeholder="Summani kiriting"
          class="inputs mt-[8px]  "
        />
      </div>
     
      <button
        class="rounded-[5px] py-[10px] px-[32px] bg-[#3366FF] flex items-center self-end"
      >
        <Plus />
        <p class="text-white font-[500] ml-[10px]">Saqlash</p>
      </button>
    </form>
  </el-dialog>


</template>

<script>
import useVuelidate from "@vuelidate/core";
import Edit from "../components/icons/Edit.vue";
import TalabaEdit from "../components/icons/TalabaEdit.vue";
import PlusBlue from "../components/icons/PlusBlue.vue";
import Rocket from "../components/icons/Rocket.vue";
import SelectOption from "../components/SelectOption.vue";
import Plus from "../components/icons/Plus.vue";
export default {
  components: { Edit, TalabaEdit, PlusBlue, Rocket, SelectOption, Plus },
  data() {
    return {
      tahrirlash: false,
      homiyQoshish: false,
      fullName: '',
      telNum: '',
      kontrakt: '',
      ajratilgan: '',
      otm: [
        { id: 1, title: 'O’zbekiston Davlat Jahon Tillari Universiteti'},
        { id: 2, title: 'O’zbekiston Davlat Milliy Universtet'},
      ]
    }
  },
  
};
</script>

<style lang="scss" scoped>
 .inputs {
  padding: 12px 16px;
  border-radius: 6px;
  color: #000;
  transition: .3s all;
  background-color: #E0E7FF;
  outline: none;

  &:focus {
    border: 2px solid #587cef;
  }
 }
</style>
