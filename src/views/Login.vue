<template>
    <div class="h-[100vh] flex items-center justify-center">
        <div class="w-[379px]">
            <div class="p-[32px]">
                <Logo />
            </div>
            <form class="mt-[50px] p-[32px] bg-[#fff]"  @submit.prevent="showInfo">
                <p class="text-[24px] font-[700]">Kirish</p>
                <div class="flex flex-col mt-[44px]">
                    <label for="login" class="text-[12px] font-[500]">Login</label>
                    <input type="text" v-model="info.login" ref="loginRef" class="border border-[#E0E7FF33] rounded-[6px] bg-[#E0E7FF] py-[12px] px-[15px] mt-[8px]" placeholder="adm8904">
                </div>
                <div class="flex flex-col mt-[22px]">
                    <label for="login" class="text-[12px] font-[500]">PAROL</label>
                    <input type="password" v-model="info.password" class="border border-[#E0E7FF33] rounded-[6px] bg-[#E0E7FF] py-[12px] px-[15px] mt-[8px]" placeholder="adm8904">
                </div>
                <div class="bg-[#D6D6D6] flex items-center justify-between py-[8px] rounded-[6px] mt-[22px] px-[11px] border border-[#D6D6D6]">
                    <div class="flex items-center">
                        <input type="checkbox" v-model="info.robot" class="mr-[13px] border-2 border-[#C1C1C1] rounded-[4px] w-[26px] h-[26px]">
                        <p>I’m not a robot</p>
                    </div>
                    <span>
                        <Recaptcha />
                    </span>
                </div>
                <button @click="$router.push('/dashboard')" class="bg-[#2E5BFF] text-white text-[15px] font-[500] w-[100%] rounded-[6px] py-[15px] mt-[22px]">Kirish</button>
            </form>
        </div>
    </div>
</template>

<script>
import Logo from "../components/icons/Logo.vue";
import Recaptcha from "../components/icons/Recaptcha.vue";
    export default {
    data() {
        return {
            info: {
                login: "",
                password: "",
                robot: false,
           
            }
        };
    },
    mounted() {
        this.$refs.loginRef.focus();
    },
    components: { Logo, Recaptcha }
} 
</script>

<style lang="scss" scoped>

</style>