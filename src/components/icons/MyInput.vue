<template>
    <input type="text" class="input">
</template>

<script>
    export default {
        props: {
            placeholder: String,
        }
    }
</script>

<style lang="scss" scoped>
    .input {
  width: 100%;
  padding: 12px 0;
  padding-left: 16px;
  background: #e0e7ff33;
  color: #07070759;
  border-radius: 6px;
  margin-top: 8px;
  outline: none;

  &:focus {
    border: 2px solid #e0e7ff;
  }
}
</style>