<template>
  <div>
    <!-- 思路
  1. 变量准备-静态页面铺设
  2. 绑定点击事件 
  3. 截取字符串返回数组
  4. 翻转
  5. 数组拼接起来 -->
    <div>
      <!-- 1. 变量准备-静态页面铺设 -->
      <h1>{{ msg }}</h1>
      <!-- 2. 绑定点击事件 -->
      <button @click="btn">逆转世界</button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'App',
  data() {
    return {
      msg: 'Senenoh',
    };
  },
  methods: {
    btn() {
      this.msg = this.msg.split('').reverse().join('');
    },
  },
};
</script>
