<template>
  <div class="h-[100vh] flex items-center justify-center">
    <div class="w-[379px]">
      <div class="p-[32px]">
        <Logo />
      </div>
      <form class="mt-[50px] p-[32px] bg-[#fff]" @submit.prevent="showInfo">
        <p class="text-[24px] font-[700]">Kirish</p>
        <div class="flex flex-col mt-[44px]">
          <label for="login" class="text-[12px] font-[500]">Login</label>
          <input
            type="text"
            v-model.trim="login"
            ref="loginRef"
            class="border border-[#E0E7FF33] rounded-[6px] bg-[#E0E7FF] py-[12px] px-[15px] mt-[8px]"
            placeholder="adm8904"
          />
          <span v-if="v$.login.$error" class="error-mes">{{
            v$.login.$errors[0].$message
          }}</span>
        </div>
        <div class="flex flex-col mt-[22px]">
          <label for="login" class="text-[12px] font-[500]">PAROL</label>
          <input
            type="password"
            v-model.trim="password"
            class="border border-[#E0E7FF33] rounded-[6px] bg-[#E0E7FF] py-[12px] px-[15px] mt-[8px]"
            placeholder="adm8904"
          />
          <span v-if="v$.password.$error" class="error-mes">{{
            v$.password.$errors[0].$message
          }}</span>
        </div>
        <div
          class="bg-[#D6D6D6] flex items-center justify-between py-[8px] rounded-[6px] mt-[22px] px-[11px] border border-[#D6D6D6]"
        >
          <div class="flex items-center">
            <input
              type="checkbox"
              v-model="robot"
              class="mr-[13px] border-2 border-[#C1C1C1] rounded-[4px] w-[26px] h-[26px]"
            />
            <p>I’m not a robot</p>
          </div>
          <span>
            <Recaptcha />
          </span>
        </div>
        <!-- @click="$router.push('/dashboard')" -->
        <button
          class="bg-[#2E5BFF] text-white text-[15px] font-[500] w-[100%] rounded-[6px] py-[15px] mt-[22px]"
        >
          Kirish
        </button>
      </form>
    </div>
  </div>
</template>
<script>
import Logo from "../components/icons/Logo.vue";
import Recaptcha from "../components/icons/Recaptcha.vue";

import useValidate from "@vuelidate/core";
import { required, minLength } from "@vuelidate/validators";
export default {
  data() {
    return {
      v$: useValidate(),
      login: "",
      password: "",
      robot: false,
    };
  },
  mounted() {
    this.$refs.loginRef.focus();
  },
  validations() {
    return {
      login: { required, minLength: minLength(4) },
      password: { required, minLength: minLength(6) },
      robot: false,
    };
  },
  methods: {
    showInfo() {
      this.v$.$validate();
      if (!this.v$.$error) {
        this.$router.push("/dashboard");
        console.log("Submited Successfuly");
        console.log(this.v$);
      } else {
        console.log("invalid action");
      }
    },
  },
  components: { Logo, Recaptcha },
};
</script>

<style lang="scss" scoped>
.error-mes {
  color: red;
  font-weight: 500;
  font-size: 14px;
  margin-top: 6px;
}
</style>
