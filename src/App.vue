<template>
  <div>
    <TodoHeader @add="addFn" />
    <TodoMain :list="showList" @delBtn="delFn" />
    <TodoFooter @changeSel="changeSel" :sum="sum" @clear="clearFn" />
  </div>
</template>

<script>
import './assets/styles/base.css';
import './assets/styles/index.css';

import TodoHeader from './components/TodoHeader.vue';
import TodoMain from './components/TodoMain.vue';
import TodoFooter from './components/TodoFooter.vue';
export default {
  data() {
    return {
      getSel: 'all',
      list:
        (localStorage.getItem('TodoList') &&
          JSON.parse(localStorage.getItem('TodoList'))) ||
        [],
      /* [
        { id: 100, name: '被骗', isDone: true },
        { id: 101, name: '进厂', isDone: false },
        { id: 102, name: '打螺丝', isDone: true },
      ], */
    };
  },
  components: {
    TodoHeader,
    TodoMain,
    TodoFooter,
  },
  methods: {
    addFn(val) {
      let id =
        this.list.length == 0 ? 100 : this.list[this.list.length - 1].id + 1;
      let obj = {
        name: val,
        isDone: false,
        id,
      };
      this.list.push(obj);
    },
    delFn(id) {
      // console.log(id);
      let index = this.list.findIndex((obj) => obj.id == id);
      // console.log(index);
      this.list.splice(index, 1);
    },
    changeSel(val) {
      this.getSel = val;
    },
    clearFn() {
      this.list = this.list.filter((ele) => ele.isDone == false);
    },
  },
  computed: {
    sum() {
      return this.list.filter((ele) => !ele.isDone).length;
    },
    showList() {
      if (this.getSel == 'no') {
        return this.list.filter((ele) => !ele.isDone);
      } else if (this.getSel == 'yes') {
        return this.list.filter((ele) => ele.isDone);
      } else {
        return this.list;
      }
    },
  },
  watch: {
    list: {
      deep: true,
      handler() {
        localStorage.setItem('TodoList', JSON.stringify(this.list));
      },
    },
  },
};
</script>

<style></style>
