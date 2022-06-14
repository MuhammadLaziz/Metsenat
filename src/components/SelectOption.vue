<template>
  <el-select size="large" v-model="value" class="m-2" placeholder="Select">
    <el-option
      v-for="item in options"
      :key="item.id"
      :label="item.title"
      :value="item.title"
    />
  </el-select>
</template>

<script>
export default {
  name: "select-option",
  data() {
    return {
      value: "",
    };
  },
  props: {
    options: Array,
  },
};
</script>

<style lang="scss">
.m-2 {
  margin: 8px 0 !important;
}
.el-input__inner {
  padding: 12px 16px !important;
}
.el-input__wrapper {
  padding-top: 5px !important;
  padding-bottom: 5px !important;
}
</style>
