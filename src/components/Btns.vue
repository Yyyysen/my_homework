<template>
  <button :class="`one-button-${type}`">{{ title }}</button>
</template>

<script>
export default {
  props: {
    title: String,
    type: {
      type: String,
      default: 'primary',
      validator: (val) => {
        return ['primary', 'success', 'warning', 'danger'].includes(val);
      },
    },
  },
};
</script>

<style scoped>
button {
  color: #fff;
  outline: none;
  border: none;
  padding: 8px 24px;
  border-radius: 4px;
  font-size: 18px;
  margin-right: 20px;
}
.one-button-primary {
  background-color: #409eff;
}
.one-button-success {
  background-color: #67c23a;
}
.one-button-warning {
  background-color: #e6a23c;
}
.one-button-danger {
  background-color: #f56c6c;
}
</style>
