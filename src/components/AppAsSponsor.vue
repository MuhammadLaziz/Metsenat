<template>
    <div class="">
        <div class="flex ">
            <div class="max-w-[850px] m-r-auto pt-[76px] pl-[200px] pr-[102px] bg-[#fff]">
                <h1 class="text-[40px] font-[700] leading-[56px] w-[423px]">Homiy sifatida ariza topshirish</h1>
                <div class="flex items-center mt-[40px] mb-[28px] border border-[#E0E7FF] rounded-[6px]">
                    <div @click="jismoniyHandler" :class="jismoniy ? 'is-active': ''" class="textPerson">Jismoniy shaxs</div>
                    <div @click="yuridikhandler" :class="yuridik ? 'is-active': ''" class="textPerson">Yuridik shaxs</div>
                </div>
                <Register :yuridik="yuridik" />
            </div>
            <Comments />
        </div>
    </div>
</template>

<script>
import Register from "./Register.vue";
import Comments from "./Comments.vue";
    export default {
    data() {
        return {
            jismoniy: true,
            yuridik: false
        };
    },
    methods: {
        jismoniyHandler() {
            this.jismoniy = true,
                this.yuridik = false;
        },
        yuridikhandler() {
            this.jismoniy = false,
                this.yuridik = true;
                
        }
    },
    components: { Register, Comments }
}
</script>

<style lang="scss" scoped>
    .textPerson {
        font-weight: 500;
        font-size: 12px;
        color: rgba(51, 102, 255, 0.6);
        letter-spacing: 1.125px;
        padding: 14px 89px;

        &.is-active {
            background-color: #3366FF;
            color: #fff;
        }
    }
</style>