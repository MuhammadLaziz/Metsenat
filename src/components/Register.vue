<template>
<div class="px-[15px] md:w-[50%] sm:w-[80%] sm:m-auto">
  <h1 class="text-[40px] font-[700] leading-[56px] w-[423px]">
    Homiy sifatida ariza topshirish
  </h1>
  <form @submit.prevent="submit" class="mt-[40px]">
    <div
      class="flex items-center mb-[28px] border border-[#E0E7FF] rounded-[6px]"
    >
      <div
        @click="jismoniyHandler"
        :class="jismoniy ? 'is-active' : ''"
        class="textPerson"
      >
      <p class="hover:scale-105 transition-all">
        Jismoniy shaxs
      </p>
      </div>
      <div
        @click="yuridikhandler"
        :class="yuridik ? 'is-active' : ''"
        class="textPerson"
      >
      <p class="hover:scale-110 transition-all">
        Jismoniy shaxs
      </p>
        
      </div>
    </div>

    <div class="flex flex-col">
      <label for="name" class="font-[500]"
        >F.I.Sh. (Familiya Ism Sharifingiz)</label
      >
      <input
        v-model="fullName"
        ref="fullName"
        type="text"
        maxlength="15"
        placeholder="Abdullayev Abdulla Abdulla o’g’li"
        class="input"
        :class="v$.fullName.$error ? 'border-red-500' : ''"
      />
      <span v-if="v$.fullName.$error" class="error-mes">{{
        v$.fullName.$errors[0].$message
      }}</span>
    </div>
    <div class="flex flex-col mt-[28px] relative">
      <label for="name" class="font-[500]">Telefon raqamingiz</label>
      <input
        v-model="telNum"
        v-maska="'(##)-###-##-##'"
        type="text"
        placeholder="(99) 123-45-67"
        :class="v$.telNum.$error ? 'border-red-500' : '', 'font-[500]'"
        class="input pl-l"
      />
      <span class="text-[14px] font-[500] absolute top-[58%] left-[4%] sm:left-[3.5%] lg:left-[2.5%] lg:top-[57%]">+998</span>
      <span v-if="v$.telNum.$error" class="error-mes">{{
        v$.telNum.$errors[0].$message
      }}</span>
    </div>
    <div>
      <h3 class="font-[500] text-[#1D1D1F] mt-[28px] mb-[12px]">
        To‘lov summasi
      </h3>
      <div class="grid grid-cols-3 gap-4">
        <Sums
          :price="price"
          :active="active"
          @total-cost="totalCost"
          :boshqasi="boshqasi"
        />
        <button
          @click="boshqasiHandler"
          ref="boshqasiBtn"
          type="button"
          :class="
            boshqasi ? 'bg-[#E0E7FF] !border-[2px] !border-[#2e5bff]' : ''
          "
          class="textStyle relative"
        >
          Boshqasi
          <span
            :class="boshqasi ? 'visible' : 'invisible'"
            class="absolute -top-2 -right-2"
          >
            <img src="@/assets/images/galochka.png" alt="" />
          </span>
        </button>
      </div>
      <input
        v-if="boshqasi"
        class="input mt-[18px] col-span-4 appereance-none "
        v-model="active"
        maxlength="9"
        v-maska="'#-###-###'"
      />
    </div>

    <div
      class="mt-[28px] transition-all duration-5000 max-h-0 overflow-hidden"
      ref="yuridika"
    >
      <label
        for="company"
        class="font-[500] text-[#1D1D1F] mb-[8px] transition duration-150"
        >Tashkilot nomi</label
      >
      <input
        type="text"
        id="company"
        class="input"
        maxlength="10"
        v-model="companyName"
        :class="v$.companyName.$error ? 'border-red-500' : ''"
        placeholder="Orient group"
      />
    </div>
    <button
      @click="submit"
      class="w-full mt-[28px] rounded-[6px] transition-all font-[500] text-[15px] bg-[#2E5BFF] text-white text-center py-[15px] hover:bg-[#8fa3ed]"
    >
      Yuborish
    </button>
  </form>
</div>
  
</template>

<script>
import { useToast } from "vue-toastification";
import useVuelidate from "@vuelidate/core";
import { required, minLength } from "@vuelidate/validators";
import Sums from "./Sums.vue";
export default {
  emits: ["entered"],
  data() {
    return {
      toast: useToast(),
      v$: useVuelidate(),
      fullName: "",
      telNum: "",
      companyName: "",
      checked: false,
      boshqasi: false,
      jismoniy: true,
      yuridik: false,
      active: 1000000,
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
    };
  },

  methods: {
    boshqasiHandler() {
      this.boshqasi = true;
      this.active = 0;

    },
    totalCost(data) {
      this.boshqasi = false;
      this.active = data;
    },
    submit() {
      this.$emit("entered");
      this.v$.$validate();
      if (!this.v$.$error) {
        console.log("Submited Successfuly");
        this.toast.info("Siz royhatdan o'tdingiz, kirish - ni bosing", { position: 'top-center'})
      } else {
        console.log("invalid action");
      }
    },
    jismoniyHandler() {
      this.jismoniy = true;
      this.yuridik = false;
      this.$refs.yuridika.style.maxHeight = 0 + "px";
    },
    yuridikhandler() {
      this.jismoniy = false;
      this.yuridik = true;
      console.log(this.$refs.yuridika.scrollHeight);
      this.$refs.yuridika.style.maxHeight =
        this.$refs.yuridika.scrollHeight + "px";
    },
  },
  validations() {
    return {
      fullName: { required, minLength: minLength(10) },
      telNum: { required, minLength: minLength(9) },
      companyName: { minLength: minLength(10)}
    };
  },
  mounted() {
    this.$refs.fullName.focus();
  },
  components: { Sums },
};
</script>

<style lang="scss" scoped>
.textStyle {
  
  width: 100%;
  padding: 16px 32px;
  color: #2e384d;
  font-weight: 500;
  font-size: 18px;
  border: 2px solid #e0e7ff;
  border-radius: 4px;
}


.pl-l {
  padding-left: 50px;
}
.error-mes {
  color: red;
  font-weight: 500;
  font-size: 14px;
  margin-top: 6px;
}
.active {
  border: 2px solid #2e5bff;
}

.textPerson {
  text-align: center;
  width: 100%;
  font-weight: 500;
  font-size: 12px;
  color: rgba(51, 102, 255, 0.6);
  letter-spacing: 1.125px;
  padding: 14px 80px;
  cursor: pointer;
  transition: 0.3s all;
  border-radius: 4px;

  &.is-active {
    background-color: #3366ff;
    color: #fff;
  }
}
</style>
