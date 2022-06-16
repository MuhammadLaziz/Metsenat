<template>
<div class="bg-[#fff]">
    <div class="max-w-[1200px] px-2 m-auto flex items-center justify-between py-[30px] relative pr-[10px]">
        <router-link to="/" >
            <Logo />
        </router-link>
        <div class="text-[24px] ">
                <i @click="menu = true" class="fa-solid fa-bars md:hidden" :class="menu ? 'hidden' : 'block'"></i>
                <i @click="menu = false" :class="menu ? 'block' : 'hidden'" class="fa-solid fa-xmark lg:hidden"></i>
            </div>
        <ul class="flex items-center space-x-5 hidden md:flex">
            <router-link to="/dashboard">
                <li class="">
                    <p class="text">Asosiy</p>
                </li>
            </router-link>
            <router-link to="/dashboard">
                <li class="">
                    <p class="text">Grantlar</p>
                </li>
            </router-link>
            <router-link to="/dashboard">
                <li class="">
                    <p class="text">Soliq imtiyozlari</p>
                </li>
            </router-link>
            <br>
            <router-link to="/auth">
                <li class="flex items-center ">
                    <img src="../assets/loginNav.png" alt="">
                    <p class="text ml-[7px]">Kirish</p>
                </li>
            </router-link>
            <router-link to="/auth">
                <li class="hover:scale-[95%] transition-all ">
                    <p class="text-[#3366FF] sm:p-[8px] font-[400] border-2 border-[#3366FF] rounded-[8px]">Ro‘yxatdan o’tish</p>
                </li> 
            </router-link>
        </ul>
        <ul class="flex flex-col top-[100%] left-[0%] md:hidden space-x-5 absolute bg-[#fff] min-h-[100vh] overflow-hidden w-full -translate-x-[100%] transition-all duration-500 " :class="menu ? 'translate-x-[0]': '-translate-x-[100%]'">
            <router-link to="/dashboard">
                <li class="mb-[10px] ml-[20px]">
                    <p class="text">Asosiy</p>
                </li>
            </router-link>
            <router-link to="/dashboard">
                <li class="mb-[10px]">
                    <p class="text">Grantlar</p>
                </li>
            </router-link>
            <router-link to="/dashboard">
                <li class="mb-[10px]">
                    <p class="text">Soliq imtiyozlari</p>
                </li>
            </router-link>
            <router-link to="/auth">
                <li class="flex items-center mb-[10px]">
                    <img src="../assets/loginNav.png" alt="">
                    <p class="text ml-[7px]">Kirish</p>
                </li>
            </router-link>
            <router-link to="/auth">
                <li class="hover:scale-[95%] transition-all ">
                    <p class="text-[#3366FF] font-[500] px-[32px] py-[8px] w-[90%] border-2 border-[#3366FF] rounded-[8px]">Ro‘yxatdan o’tish</p>
                </li> 
            </router-link>
        </ul>
    </div>
</div>
</template>

<script>
import Logo from './icons/Logo.vue'
    export default {
        components: {
            Logo
        },
        data() {
            return {
                menu: false
            }
        }
    }
</script>

<style lang="scss" scoped>
    .text {
        font-weight: 500;
        font-size: 14px;
        color: #28293D;
        transition: .3s all;

        &:hover{
            color: #3366FF;
        }
    }
    .w-full{
        box-shadow: 0px 25px 40px rgba(0, 0, 0, 0.03);
    }
</style>