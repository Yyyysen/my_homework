<template>
  <div style="margin-top: 50px">
    <el-input
      placeholder="搜索-书本名称"
      class="search"
      v-model="input"
      @keyup.enter.native="findBtn"
    ></el-input>
  </div>
</template>

<script>
export default {
  name: 'SearchBook',
  props: {
    obj: {
      type: Array,
      default: () => [],
    },
    getBooks: {
      type: Function,
    },
  },
  data() {
    return {
      input: '',
    };
  },
  methods: {
    findBtn() {
      // console.log(this.input);
      if (this.input.trim() == '') {
        this.input = '';
        return alert('输入不能为空');
      }
      this.$emit('findBooks', this.input);
    },
    handleClose(done) {
      this.$confirm('确认关闭？')
        .then((_) => {
          done();
        })
        .catch((_) => {});
    },
  },
  watch: {
    input() {
      if (this.input === '') {
        this.getBooks()
      }
    },
  },
};
</script>

<style scoped>
.search {
  width: 300px;
}
</style>
