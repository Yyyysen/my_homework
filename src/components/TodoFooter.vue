<template>
  <footer class="footer">
    <span class="todo-count"
      >剩余<strong>{{ sum }}</strong></span
    >
    <ul class="filters">
      <li>
        <a
          :class="{ selected: isSel == 'all' }"
          href="javascript:;"
          @click="change('all')"
          >全部</a
        >
      </li>
      <li>
        <a
          :class="{ selected: isSel == 'no' }"
          href="javascript:;"
          @click="change('no')"
          >未完成</a
        >
      </li>
      <li>
        <a
          :class="{ selected: isSel == 'yes' }"
          href="javascript:;"
          @click="change('yes')"
          >已完成</a
        >
      </li>
    </ul>
    <button class="clear-completed" @click="clear">清除已完成</button>
  </footer>
</template>

<script>
export default {
  name: 'TodoFooter',
  props:['sum'],
  data() {
    return {
      isSel: 'all',
    };
  },
  methods: {
    change(val) {
      // console.log(val);
      this.isSel = val;
      this.$emit('changeSel', this.isSel);
    },
    clear() {
      this.$emit('clear')
    }
  },
};
</script>
