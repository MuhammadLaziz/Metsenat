<template>
  <form @submit.prevent="submit">
    <div class="flex flex-col">
      <label for="name" class="font-[500] text-[#1D1D1F]"
        >F.I.Sh. (Familiya Ism Sharifingiz)</label
      >
      <input
        v-model="fullName"
        ref="fullName"
        type="text"
        placeholder="Abdullayev Abdulla Abdulla o’g’li"
        class="input"
      />
      <span v-if="v$.fullName.$error" class="error-mes">{{
        v$.fullName.$errors[0].$message
      }}</span>
    </div>
    <div class="flex flex-col mt-[28px]">
      <label for="name" class="font-[500] text-[#1D1D1F]"
        >Telefon raqamingiz</label
      >
      <input
        v-model="telNum"
        v-maska="'(##)-###-##-##'"
        type="text"
        placeholder="(99) 123-45-67"
        class="input"
      />
      <span v-if="v$.telNum.$error" class="error-mes">{{
        v$.telNum.$errors[0].$message
      }}</span>
    </div>
    <div>
      <h3 class="font-[500] text-[#1D1D1F] mt-[28px]">To‘lov summasi</h3>
      <div class="grid grid-cols-3 gap-4">
        <Sums :price="price" :boshqasi="boshqasi"/>
        <button
          @click="boshqasiHandler"
          type="button"
          for="boshqasi"
          :class="boshqasi ? 'bg-[#E0E7FF]' : ''"
          class="textStyle"
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
    <div v-if="yuridik" class="mt-[28px]">
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
      class="w-full mt-[28px] rounded-[6px] font-[500] text-[15px] bg-[#2E5BFF] text-white text-center py-[15px]"
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
    data() {
        return {
            v$: useVuelidate(),
            fullName: "",
            telNum: "",
            companyName: "",
            checked: false,
            boshqasi: false,
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
                }
            ],
            active: "100000",
            
        };
    },
    props: {
        yuridik: Boolean,
    },
    methods: {
        boshqasiHandler() {
            this.boshqasi = !this.boshqasi;
        },
        submit() {
            this.v$.$validate();
            if (!this.v$.$error) {
                console.log("Submited Successfuly");
                this.$router.push("/dashboard");
            }
            else {
                console.log("invalid action");
            }
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
    components: { Sums }
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
  color: #2e384d59;
  border-radius: 6px;
  border: 1px solid #e0e7ff;
  outline: none;
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
</style>
