<template>
  <div>
    <img :src="imgUrl" alt="" />
    <p>{{ dogName }}</p>
  </div>
</template>

<script>
export default {
  props: ['imgUrl', 'dogName'],
};
</script>

<style>
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
