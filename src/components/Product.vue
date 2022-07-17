<template>
  <div class="my-product">
    <h3>标题: {{ title }}</h3>
    <p>价格: {{ price }}元</p>
    <p>{{ word }}</p>
    <button @click="kanjia">是兄弟就来砍我</button>
  </div>
</template>

<script>
export default {
  name: 'Product',
  props: ['title', 'price', 'word', 'index'],
  methods: {
    kanjia() {
      // 在父组件的 方法中 写入回调函数
      this.$emit('del', this.index);
    },
  },
};
</script>

<style>
.my-product {
  width: 400px;
  padding: 20px;
  border: 2px solid #000;
  border-radius: 5px;
  margin: 10px;
}
</style>
