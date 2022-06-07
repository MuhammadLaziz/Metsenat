<template>
    <div class=" w-[1160px] m-auto py-[24px] bg-[#fff] flex items-center justify-between">
        <div class="flex items-center border border-[#E0E7FF] rounded-[6px]">
            <div class="bg-[#3366FF] rounded-l-lg px-[55px] py-[14px] text-white font-[500]">Dashboard</div>
            <div class="px-[55px] py-[14px] text-[#3366FF99] font-[500]">Homiylar</div>
            <div class="px-[55px] py-[14px] border-l-2 text-[#3366FF99] font-[500]">Talabalar</div>
        </div>
        <div class="flex items-center bg-[#E8E8E8] w-[284px] p-[12px] rounded-[4px]">
            <SearchIcon />
            <input type="text" placeholder="Izlash" class="bg-[#E8E8E8] ml-[10px] text-[#B1B1B8]">
        </div>
        <div class="flex items-center px-[32px] py-[13px] bg-[#EDF1FD]">
            <FilterIcon />
            <p class="font-[500] text-[#3365FC] ml-[10px]">Filter</p>
        </div>
    </div>
</template>

<script>
import SearchIcon from './icons/SearchIcon.vue';
import FilterIcon from './icons/FilterIcon.vue';
    export default {
    components: { SearchIcon, FilterIcon }
}
</script>

<style lang="scss" scoped>

</style>