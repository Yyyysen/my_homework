<template>
  <div>
    <ul>
      <li v-for="(item, index) in list" :key="index">
        {{ item }} <button @click="delBtn(index)">删除</button>
      </li>
      <br />
      <button @click="addBtn">生成</button>
    </ul>
  </div>
</template>

<script>
export default {
  data() {
    return {
      list: [5, 12, 20],
    };
  },
  methods: {
    addBtn() {
      this.list.push(Math.floor(Math.random() * 30));
    },
    delBtn(id) {
      console.log(id);
      this.list.splice(id, 1);
    },
  },
};
</script>

<style></style>
