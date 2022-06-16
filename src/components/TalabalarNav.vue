<template>
    <div class=" bg-white">
        <div class="max-w-[1160px] m-auto px-[10px] flex items-center justify-around md:justify-between">
            <router-link to="/dashboard" class="flex items-center py-[30px] cursor-pointer"> 
                <span class="hidden md:block">
                    <img src="../assets/arr-left.png" alt="">
                </span>
                <h1 class="text-[20px] sm:w-[200px] font-[700] text-[#28293D] ml-[10px]">
                    <span v-if="this.$route.name == 'singleTalaba'" class=" ">Isfandiyorov  Iqbol Bobomirzayevich</span>
                    <span v-else>Talaba qo‘shish</span>
                </h1>
            </router-link>
            <button v-if="$route.name == 'singleTalaba'" class="bg-[#EDF1FD] py-[10px] px-[32px] rounded-[5px] flex items-center hover:bg-[#d2dcfb] transition-all">
                <PlusBlue />
                <p class="text-[14px] text-[#3365FC] font-[500]">Homiy qo‘shish</p>
            </button>
        </div>
    </div>
</template>

<script>
import PlusBlue from './icons/PlusBlue.vue';
    export default {
    components: { PlusBlue },
    beforeCreate() {
        console.log(this.$route);
    }

}
</script>

<style lang="scss" scoped>

</style>