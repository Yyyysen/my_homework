<template>
  <header class="header">
    <h1>todos</h1>
    <input id="toggle-all" class="toggle-all" type="checkbox" v-model="isAll" />
    <label for="toggle-all"></label>
    <!-- label 可以关联一个表单标签 -->
    <input
      class="new-todo"
      placeholder="输入任务名称-回车确认"
      autofocus
      @keyup.enter="add"
      v-model="ipt"
    />
  </header>
</template>

<script>
export default {
  name: 'TodoHeader',
  data() {
    return {
      ipt: '',
    };
  },
  methods: {
    add() {
      if (this.ipt.trim() == '') {
        this.ipt = '';
        return alert('没东西啊 阿sir');
      }
      this.$emit('add', this.ipt);
      this.ipt = '';
    },
  },
  computed: {
    isAll: {
      set(val) {
        // console.log(val);
        this.$parent.list.forEach((ele) => (ele.isDone = val));
      },
      get() {
        return this.$parent.list.every((val) => val.isDone);
      },
    },
  },
};
</script>
