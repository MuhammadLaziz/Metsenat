<template>
  <div class="max-w-[1160px] h-[872px] flex justify-center m-auto mt-[40px]">
    <form @submit.prevent="submit" class="w-[790px] h-[466px] bg-[#fff] p-[28px] rounded-[12px]">
      <div class="flex items-center justify-between">
        <div class="w-[353px]">
          <label for="fullName" class="font-[500] text-[#1D1D1F]"
            >F.I.Sh. (Familiya Ism Sharif)</label
          >
          <input
          v-model="fullName"
            type="text"
            id="fullName"
            maxlength="10"
            placeholder="Abdullayev Abdulla Abdulla o’g’li"
            :class="v$.fullName.$error ? 'border-red-500' : ''"
            class="w-full cursor-pointer mt-[8px] bg-[#E0E7FF] text-[#000] rounded-[6px] outline-none px-[16px] py-[12px] border border-[#E0E7FF] hover:bg-[#a7b4e1] transition-all"
          />
          
        </div>
        <div class="w-[353px] relative">
          <label for="telNum" class="font-[500] text-[#1D1D1F]"
            >Telefon raqam</label
          >
          <input
            v-model="telNum"
            v-maska="'(##)-###-##-##'"
            type="text"
            id="telNum"
            placeholder="(99) 123-45-67"
            :class="v$.telNum.$error ? 'border-red-500' : ''"
            class="w-full cursor-pointer mt-[8px] bg-[#E0E7FF] text-[#000] outline-none rounded-[6px] px-[45px] py-[12px] border border-[#E0E7FF] hover:bg-[#a7b4e1] transition-all"
          />
          <span class="text-[14px] font-[500] absolute top-[58%] left-[3%]">+998</span>
          
        </div>
      </div>
      <div class="mt-[28px]">
        <label for="university" class="font-[500] text-[#1D1D1F]">OTM</label>
        <SelectOption :options="universities" />
      </div>
      <div class="mt-[28px] flex items-center justify-between border-b-2 border-[#F5F5F7] pb-[28px]">
          <div class="w-[353px] flex flex-col">
            <label for="degree" class="font-[500] text-[#1D1D1F]"
                >Talabalik turi</label
            >
            <SelectOption :options="degree" />
        </div>
        <div class="w-[353px]">
          <label for="contractPrice" class="font-[500] text-[#1D1D1F]"
            >Kontrakt summa</label
          >
          <input
          v-model="kontrakt"
            type="number"
            autocomplete="off"
            id="contractPrice"
            placeholder="Summani kiriting"
            :class="v$.kontrakt.$error ? 'border-red-500' : ''"
            class="w-full mt-[8px] cursor-pointer bg-[#E0E7FF] text-[#000] outline-none rounded-[6px] px-[16px] py-[12px] border border-[#E0E7FF] hover:bg-[#a7b4e1] transition-all"
          />
        </div>
      </div>
      <button class="px-[32px] py-[13px] bg-[#3366FF] text-white rounded-[5px] flex items-center mt-[28px] float-right hover:scale-105 transition-all">
          <Plus />
          <p class="font-[500] ml-[14px]">Qo‘shish</p>
      </button>
    </form>
  </div>
</template>

<script>

import useVuelidate from '@vuelidate/core';
import { required, minLength } from '@vuelidate/validators';
import Plus from '../components/icons/Plus.vue';
import SelectOption from '../components/SelectOption.vue'
export default {
  data() {
    return {
      v$: useVuelidate(),
      studyPlace: "",
      fullName: '',
      telNum: '',
      kontrakt: '',
      studentType: '',
      degree: [
          {
              id: 1,
              title: 'Bakalavr'
          },
          {
              id: 2,
              title: 'Magistratura'
          }
      ],
      universities: [
        {
          id: 1,
          title: "Toshkent shahridagi INHA Universiteti",
        },
        {
          id: 2,
          title: "O’zbekiston milliy universiteti",
        },
        {
          id: 3,
          title: "Toshkent davlat texnika universiteti",
        },
        {
          id: 4,
          title: "Toshkent davlat iqtisodiyot universiteti",
        },
        {
          id: 5,
          title: "O’zbekiston davlat jahon tillari universiteti",
        },
        {
          id: 6,
          title: "Toshkent davlat sharqshunoslik instituti",
        },
        {
          id: 7,
          title: "Toshkent arxitektura-qurilish instituti",
        },
        {
          id: 8,
          title: "Toshkent to’qimachilik va нngil sanoat istituti",
        },
        {
          id: 9,
          title: "Toshkent avtomobil-yo’llari instituti",
        },
        {
          id: 10,
          title: "Toshkent moliya instituti",
        },
      ],
    };
  },
  methods: {
    submit() {
      this.v$.$validate()
      if(!this.v$.$error) {
        this.$router.push('/talabalar')
      }else {
        alert('Invalid action')
      }
    }
  },
  validations() {
    return {
      fullName: { required, minLength: minLength(10)},
      telNum: { required, minLength: minLength(9)},
      kontrakt: { required, minLength: minLength(7)}
    }
  },
  components: {
      Plus, SelectOption
  }
};
</script>

<style lang="scss">
.el-select {
  width: 100% !important;
}
</style>
<style scoped>
.error-mes {
  color: red;
  font-weight: 500;
  font-size: 14px;
  margin-top: 6px;
}
</style>