<template>
  <div>
    <span>全选:</span>
    <input type="checkbox" v-model="isAll" />
    <button @click="btn">反选</button>
    <ul>
      <li v-for="(item, index) in arr" :key="index">
        <input type="checkbox" v-model="item.c" />
        <span>{{ item.name }}</span>
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  data() {
    return {
      arr: [
        {
          name: '猪八戒',
          c: false,
        },
        {
          name: '孙悟空',
          c: false,
        },
        {
          name: '唐僧',
          c: false,
        },
        {
          name: '白龙马',
          c: false,
        },
      ],
    };
  },
  computed: {
    isAll: {
      set(val) {
        // 改变 isAll 触发
        // val 给每一条c 的属性
        this.arr.forEach((ele) => (ele.c = val));
      },
      get() {
        // 取值 arr 每一条c 的属性
        return this.arr.every((ele) => (ele = ele.c));
      },
    },
  },
  methods: {
    btn() {
      this.arr.forEach((ele) => (ele.c = !ele.c));
    },
  },
};
</script>
