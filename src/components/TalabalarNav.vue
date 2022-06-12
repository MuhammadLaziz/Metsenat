<template>
    <div class="w-full bg-white">
        <div class="w-[1160px] m-auto flex items-center justify-between">
            <router-link to="/dashboard" class="w-[400px] flex items-center py-[30px] cursor-pointer"> 
                <span>
                    <img src="../assets/arr-left.png" alt="">
                </span>
                <h1 class="text-[24px] font-[700] text-[#28293D] ml-[30px]">
                    <span v-if="this.$route.name == 'singleTalaba' ">Isfandiyorov  Iqbol Bobomirzayevich</span>
                    <span v-else>Talaba qo‘shish</span>
                </h1>
            </router-link>
            <button v-if="$route.name == 'singleTalaba'" class="bg-[#EDF1FD] py-[10px] px-[32px] rounded-[5px] flex items-center ">
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