<template>
  <div>
    <img :src="imgUrl" alt="" />
    <p @click="showName">{{ dogName }}</p>
  </div>
</template>

<script>
export default {
  props: ['imgUrl', 'dogName'],
  methods: {
    showName() {
      // console.log(1);
      this.$emit('like', this.dogName);
    },
  },
};
</script>

<style scoped>
div {
  float: left;
  border: 1px solid brown;
  font-size: 30px;
  color: red;
  text-align: center;
}
img {
  width: 200px;
  height: 200px;
}
</style>
