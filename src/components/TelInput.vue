<template>
    <vue-tel-input v-model="value"></vue-tel-input>
</template>

<script>
        import { abstractField } from 'vue-form-generator';
    export default {
        props: {
            value: String
        },
        components: {
            VueTelInput
        }
    }
</script>

<style lang="scss" scoped>

</style>