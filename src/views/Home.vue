<template>
    <div class="w-[100%] bg-[#fff]">
        <NavbarVue />
        <ControlBar />
    </div>
</template>

<script>
import NavbarVue from '../components/Navbar.vue'
import ControlBar from '../components/ControlBar.vue'
    export default {
        components: {
    NavbarVue,
    ControlBar
}
    }
</script>

<style lang="scss" scoped>

</style>