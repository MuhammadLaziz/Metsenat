<template>
  <div v-for="(item, index) in price" class="space-y-2">
    <label
      :for="index"
      :class="[active == item.cost ? 'active' : '']"
      
      v-bind:value="item.cost"
      class="textStyle relative  cursor-pointer rounded-[4px] transition-all hover:bg-[#F9FAFF]"
      
    >
      {{ item.cost }} <span class="text-[#2E5BFF]"> UZS</span>
      <input
        type="radio"
        class="hidden "        
        v-model="active"
        :id="index"
        :value="item.cost"
        @change="getValue"
      />
      <span :class="active == item.cost ? 'visible' : 'invisible'" class="absolute -top-2 -right-2">
        <img src="@/assets/images/galochka.png" alt="">
      </span>
    </label>
  </div>
</template>

<script>
export default {
  props: {
    price: Array,
    boshqasi: Boolean,
    barchasi: undefined,
    active: Number
  },
  data() {
    return {
      
    };
  },
  methods: {
    getValue() {
      this.$emit('total-cost', this.active)
    }
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
