<template>
    <div class="max-w-[1160px] m-auto">
        <div class="flex items-center flex-col lg:flex-row lg:justify-between">
            <span class="mb-[5px]">59 tadan  1-10 ko‘rsatilmoqda</span>
            <div class="flex items-center flex-col lg:flex-row">
                <p class="text-[#1D1D1F] text-[15px] font-[400] mr-[12px] mb-[5px]">Ko‘rsatish</p>
                <el-select v-model="value" size="small" filterable class="mr-[20px] w-[60px]">
                    <el-option
                    v-for="item in options"
                    :key="item.id"
                    :label="item.count"
                    :value="item.value"
                    />
                </el-select>
                <div class="example-pagination-block mt-[5px]">
                    <el-pagination layout="prev, pager, next" :total="100" />
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                value: 10,
                options: [
                    {id: 1, count: 10},
                    {id: 2, count: 20},
                    {id: 3, count: 25}
                ]
            }
        }
    }
</script>

<style lang="scss">
    .example-pagination-block + .example-pagination-block {
        margin-top: 10px;
    }
    .example-pagination-block .example-demonstration {
        margin-bottom: 16px;
    }
    .is-active {
        border: 1px solid #3366FF;
        font-weight: 500;
        border-radius: 4px;
    }
    .number {
        margin-right: 8px;
        width: 32px;
        height: 32px;
        font-weight: 500;
    }
</style>
