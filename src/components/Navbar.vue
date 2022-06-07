<template>
    <div class="navbar w-[1160px] m-auto py-[12px] bg-[#fff] flex items-center justify-between shadow-[0px_25px_40px_rgba(0,0,0,0,5)]">
        <logoBlueVue />
        <div class="flex items-center">
            <div class="flex items-center bg-[#F1F1F3] p-[4px] rounded-[6px]">
                <p class="font-[700] pl-[16px]">Lazizbek</p>
                <span class="bg-[#00AE69] px-[5px] pt-[8px] ml-[24px] rounded-[4px]">
                    <UserNav />
                </span>
            </div>
            <LogOut class="ml-[43px]" />
        </div>
    </div>
</template>

<script>
import logoBlueVue from './icons/logo-blue.vue'
import UserNav from './icons/UserNav.vue'
import LogOut from './icons/LogOut.vue'
    export default {
        components: {
    logoBlueVue,
    UserNav,
    LogOut
}
    }
</script>

<style lang="scss" scoped>

</style>