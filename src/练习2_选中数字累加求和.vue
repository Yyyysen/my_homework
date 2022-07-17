<template>
  <div>
    <div v-for="(item, index) in arr" :key="index" class="box">
      <input type="checkbox" v-model="newArr" :value="item" />
      <span>{{ item }}</span>
    </div>
    <p>你选中的元素, 累加的值和为: {{ getSum }}</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      arr: [9, 15, 19, 25, 29, 31, 48, 57, 62, 79, 87],
      newArr: [],
    };
  },
  computed: {
    getSum() {
      return this.newArr.reduce((sum, next) => {
        return (sum = sum + next);
      }, 0);
    },
  },
};
</script>

<style scoped>
.box {
  display: inline-block;
  margin-left: 8px;
}
</style>
