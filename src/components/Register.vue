<template>
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
        Jismoniy shaxs
      </div>
      <div
        @click="yuridikhandler"
        :class="yuridik ? 'is-active' : ''"
        class="textPerson"
      >
        Yuridik shaxs
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
        placeholder="Abdullayev Abdulla Abdulla o’g’li"
        class="input"
        :class="v$.fullName.$error ? 'border border-red-500' : ''"
      />
      <span v-if="v$.fullName.$error" class="error-mes">{{
        v$.fullName.$errors[0].$message
      }}</span>
    </div>
    <div class="flex flex-col mt-[28px]">
      <label for="name" class="font-[500]">Telefon raqamingiz</label>
      <input
        v-model="telNum"
        v-maska="'(##)-###-##-##'"
        type="text"
        placeholder="(99) 123-45-67"
        class="input border-none outline-none active:border"
      />
      <span v-if="v$.telNum.$error" class="error-mes">{{
        v$.telNum.$errors[0].$message
      }}</span>
    </div>
    <div>
      <h3 class="font-[500] text-[#1D1D1F] mt-[28px]">To‘lov summasi</h3>
      <div class="grid grid-cols-3 gap-4">
        <Sums :price="price" :boshqasi="boshqasi" />
        <button
          @click="boshqasiHandler"
          type="button"
          for="boshqasi"
          :class="boshqasi ? 'bg-[#E0E7FF]' : ''"
          class="border"
        >
          Boshqasi
        </button>
      </div>
      <input
        v-if="boshqasi"
        type="text"
        class="w-full input mt-[18px] col-span-4"
        v-model="active"
      />
    </div>
    <div v-if="yuridik" class="mt-[28px] transition-all">
      <label
        for="company"
        class="font-[500] text-[#1D1D1F] mb-[8px] transition duration-150"
        >Tashkilot nomi</label
      >
      <input
        type="text"
        id="company"
        class="input"
        v-model="companyName"
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
</template>

<script>
import useVuelidate from "@vuelidate/core";
import { required, minLength } from "@vuelidate/validators";
import Sums from "./Sums.vue";
export default {
  emits: ["entered"],
  data() {
    return {
      v$: useVuelidate(),
      fullName: "",
      telNum: "",
      companyName: "",
      checked: false,
      boshqasi: false,
      jismoniy: true,
      yuridik: false,
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
      active: "100000",
    };
  },

  methods: {
    boshqasiHandler() {
      this.boshqasi = !this.boshqasi;
    },
    submit() {
      this.$emit("entered");

      this.v$.$validate();
      if (!this.v$.$error) {
        console.log("Submited Successfuly");
        // this.$router.push("/dashboard");
      } else {
        console.log("invalid action");
      }
    },
    jismoniyHandler() {
      this.jismoniy = true;
      this.yuridik = false;
    },
    yuridikhandler() {
      this.jismoniy = false;
      this.yuridik = true;
    },
  },
  validations() {
    return {
      fullName: { required, minLength: minLength(10) },
      telNum: { required, minLength: minLength(9) },
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
  display: inline-block;
  width: 100%;
  padding: 16px 32px;
  color: #2e384d;
  font-weight: 500;
  font-size: 18px;
  border: 2px solid #e0e7ff;
}
.input {
  width: 100%;
  padding: 12px 0;
  padding-left: 16px;
  background: #e0e7ff33;
  color: #000;
  border-radius: 6px;
  margin-top: 8px;
  outline: none;
  transition: .3s;

  &:focus {
    border: 2px solid #849be4;
  }
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

  &:hover {
    transform: scale(1.1);
  }

  &.is-active {
    background-color: #3366ff;
    color: #fff;
  }
}
</style>
