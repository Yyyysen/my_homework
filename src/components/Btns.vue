<template>
  <div>
    <button :class="btnClass"><slot /></button>
  </div>
</template>

<script>
export default {
  props: {
    btnClass: {
      type: String,
    },
  },
};
</script>

<style scoped>
button {
  float: left;
  margin-left: 15px;
}
.zhuyao {
  background-color: #409eff;
}
.success {
  background-color: #67c23a;
}
</style>
