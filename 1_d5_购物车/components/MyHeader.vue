<template>
  <div class="my-header" :style="{ backgroundColor: background, color }">
    {{ title }}
  </div>
</template>

<script>
export default {
  name: 'MyHeader',
  props: {
    title: String,
    background: {
      type: String,
      default: '#ccc',
    },
    color: String,
  },
};
</script>

<style lang="less" scoped>
.my-header {
  height: 45px;
  line-height: 45px;
  text-align: center;
  font-size: 18px;
  background-color: #1d7bff;
  color: #fff;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 2;
}
</style>
