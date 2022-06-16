<template>
    <HomeNav />
    <div class="w-full flex items-start">
        <Register />
        <Comments />
    </div>
</template>

<script>
import Comments from '../components/Comments.vue'
import Register from '../components/Register.vue'
import HomeNav from '../components/HomeNav.vue'
    export default {
        components: {
            HomeNav, Register, Comments
        }
    }
</script>

<style lang="scss" scoped>

</style>