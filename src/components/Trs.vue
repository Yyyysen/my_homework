<template>
  <tr>
    <th>
      <input
        type="checkbox"
        :checked="checked"
        @change="change"
      />
    </th>
    <td>{{ name }}</td>
    <td>{{ price }}</td>
    <td>
      <button @click="subBtn">-</button>&nbsp;&nbsp;{{ num }}&nbsp;&nbsp;<button
        @click="addBtn"
      >
        +
      </button>
    </td>
    <td>{{ price * num }}</td>
    <td><button @click="delBtn">删除</button></td>
  </tr>
</template>

<script>
export default {
  props: ['name', 'price', 'num', 'index', 'checked'],
  computed: {},
  methods: {
    subBtn() {
      this.$emit('sub', this.index);
    },
    addBtn() {
      this.$emit('add', this.index);
    },
    delBtn() {
      this.$emit('del', this.index);
    },
    change() {
      this.$emit('change', this.index);
      // console.log(this.checked);
    },
  },
};
</script>

<style></style>
