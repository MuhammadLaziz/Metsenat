<template>
  <div class="max-w-[1160px] h-[872px] flex justify-center m-auto mt-[40px]">
    <form @submit.prevent="submit" class="w-[400px] sm:w-[590px] md:w-[790px] h-[650px] md:h-[500px] bg-[#fff] p-[28px] rounded-[12px]">
      <div class="flex items-center justify-between flex-col md:flex-row">
        <div class="w-full md:w-[350px]">
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
            class="input"
          />
          
        </div>
        <div class="w-full md:w-[350px] relative mt-[15px]">
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
            class="input pl-l"
          />
          <span class="text-[14px] font-[500] absolute top-[58%] left-[4%] sm:top-[58%] sm:left-[4%] md:top-[58%] sm:left-[5%]">+998</span>
          
        </div>
      </div>
      <div class="mt-[15px]">
        <label for="university" class="font-[500] text-[#1D1D1F]">OTM</label>
        <SelectOption :options="universities" />
      </div>
      <div class="mt-[15px] flex items-center flex-col md:flex-row justify-between border-b-2 border-[#F5F5F7] pb-[28px]">
          <div class="w-full md:w-[350px] flex flex-col">
            <label for="degree" class="font-[500] text-[#1D1D1F]"
                >Talabalik turi</label
            >
            <SelectOption :options="degree" />
        </div>
        <div class="w-full md:w-[350px] mt-[10px] md:mt-[0]">
          <label for="contractPrice" class="font-[500] text-[#1D1D1F]"
            >Kontrakt summa</label
          >
          <input
            v-model="kontrakt"
            autocomplete="off"
            id="contractPrice"
            v-maska="'#-###-###'"
            placeholder="Summani kiriting"
            :class="v$.kontrakt.$error ? 'border-red-500' : ''"
            class="input"
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