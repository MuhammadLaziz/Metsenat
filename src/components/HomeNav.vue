<template>
<div class="w-full bg-[#fff]">
    <div class="max-w-[1160px] m-auto flex items-center justify-between p-[30px]">
        <Logo />
        <ul class="flex items-center space-x-5">
            <li>
                <p class="text">Asosiy</p>
            </li>
            <li>
                <p class="text">Grantlar</p>
            </li>
            <li>
                <p class="text">Soliq imtiyozlari</p>
            </li>
            <li class="flex items-center">
                <img src="../assets/loginNav.png" alt="">
                <p class="text ml-[7px]">Kirish</p>
            </li>
            <li>
                <p class="text-[#3366FF] font-[500] px-[32px] border-2 border-[#3366FF] rounded-[8px] py-[8px]">Ro‘yxatdan o’tish</p>
            </li> 
        </ul>
    </div>
</div>
</template>

<script>
import Logo from './icons/Logo.vue'
    export default {
        components: {
            Logo
        }
    }
</script>

<style lang="scss" scoped>
    .text {
        font-weight: 500;
        font-size: 14px;
        color: #28293D;
    }
    .w-full{
        box-shadow: 0px 25px 40px rgba(0, 0, 0, 0.03);
    }
</style>