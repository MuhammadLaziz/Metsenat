<template>
    <div class="">
        
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