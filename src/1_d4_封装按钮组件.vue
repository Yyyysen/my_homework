<template></template>

<script>
export default {
  name: 'App',
};
</script>

<style></style>
<template>
  <div>
    <Btns title="默认按钮" type="primary" />
    <Btns title="成功按钮" type="success" />
    <Btns title="警告按钮" type="warning" />
    <Btns title="危险按钮" type="danger" />
  </div>
</template>

<script>
import Btns from './components/Btns.vue';
export default {
  components: {
    Btns,
  },
};
</script>

<style></style>
