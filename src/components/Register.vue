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
        type="text"
        placeholder="+998 00 000-00-00"
        class="input"
      />
      <span v-if="v$.telNum.$error" class="error-mes">{{
        v$.telNum.$errors[0].$message
      }}</span>
    </div>
    <div>
      <h3 class="font-[500] text-[#1D1D1F] mt-[28px]">To‘lov summasi</h3>
      <div class="flex items-center justify-between flex-wrap">
        <div v-for="(item, index) in price" class="space-y-2">
          <label
            :for="index"
            :class="[active == item.cost ? 'active' : '']"
            v-bind:value="item.cost"
            class="textStyle mt-[12px]"
          >
            {{ item.cost }} <span class="text-[#2E5BFF]"> UZS</span>
            <input
              type="radio"
              class="hidden"
              name="sum"
              v-model="active"
              :id="index"
              :value="item.cost"
            />
          </label>
        </div>
        <button
          @click="boshqasiHandler"
          type="button"
          for="boshqasi"
          class="textStyle"
        >
          Boshqasi
        </button>
        <input
          v-if="boshqasi"
          type="text"
          class="w-full input mt-[18px]"
          v-model="active"
        />
      </div>
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
      <span v-if="v$.companyName.$error" class="error-mes">{{
        v$.companyName.$errors[0].$message
      }}</span>
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
        },
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
      } else {
        console.log("invalid action");
      }
    },
  },
  validations() {
    return {
      fullName: { required, minLength: minLength(10) },
      telNum: { required, minLength: minLength(9) },
      companyName: { required, minLength: minLength(4) },
    };
  },
  mounted() {
    this.$refs.fullName.focus();
  },
};
</script>

<style lang="scss" scoped>
.textStyle {
  width: 155px;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 61px;
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
