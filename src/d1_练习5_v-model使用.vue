<template>
  <div>
    <span>用户名:</span>
    <input type="text" :value="username" @input="iptVal" />
    <br />
    <hr />
    <span>选择</span>
    <input type="checkbox" :checked="checked" @change="checked = !checked" />看书
    <!-- <input type="checkbox" value="学习" @change="changeFn(1, $event)"  :checked="checked"/>学习
    <input type="checkbox" value="打游戏" @change="changeFn(2, $event)" :checked="checked" />打游戏
    <input type="checkbox" value="看书" @change="changeFn(3, $event)" :checked="checked" />看书 -->
  </div>
</template>

<script>
export default {
  data() {
    return {
      username: '',
      checked: '',
    };
  },
  methods: {
    iptVal(e) {
      this.username = e.target.value;
    },
    changeFn(_, e) {
      console.log(e.target.checked);
      this.checked = e.target.checked
    },
  },
};
</script>

<style></style>
