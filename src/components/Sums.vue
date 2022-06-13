<template>
  <div v-for="(item, index) in price" class="space-y-2">
    <label
      :for="index"
      :class="[active == item.cost ? 'active' : '']"
      v-bind:value="item.cost"
      class="textStyle mt-[12px] cursor-pointer rounded-[4px]"
      @click="boshqa"
    >
      {{ item.cost }} <span class="text-[#2E5BFF]"> UZS</span>
      <input
        type="radio"
        class="hidden "
        name="sum"
        v-model="active"
        :id="index"
        :value="item.cost"
        @change="$emit('get-cost', active)"
      />
    </label>
  </div>
</template>

<script>
export default {
  props: {
    price: Array,
    boshqasi: Boolean,
  },
  data() {
    return {
      active: 1000000,
    };
  },
};
</script>

<style lang="scss" scoped>
.textStyle {
  display: inline-block;
  width: 100%;
  padding: 16px 32px;
  color: #2e384d;
  font-weight: 500;
  font-size: 18px;
  border: 2px solid #e0e7ff;
}
.active {
  border: 2px solid #2e5bff;
}
.boshqasi {
  background-color: #e0e7ff;
}
</style>
