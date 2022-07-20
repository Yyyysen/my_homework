<template>
  <div>
    <el-form class="from">
      <el-form-item>
        <el-input placeholder="书名" v-model="setname"></el-input>
      </el-form-item>

      <el-form-item>
        <el-input placeholder="作者" v-model="setauthor"></el-input>
      </el-form-item>

      <el-form-item>
        <el-input placeholder="出版社" v-model="setpub"></el-input>
      </el-form-item>

      <el-form-item>
        <el-button type="success" @click="addBtn" :disabled="disabled">
          新增</el-button
        >
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
export default {
  name: 'AddBooks',
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
      setname: '',
      setauthor: '',
      setpub: '',
      disabled: false,
    };
  },
  methods: {
    addBtn() {
      if (
        this.setname.trim() == '' ||
        this.setauthor.trim() == '' ||
        this.setpub.trim() == ''
      ) {
        alert('输入不能为空哦');
      }
      let id = this.obj.length == 0 ? 1 : this.obj[this.obj.length - 1].id + 1;
      let newObj = {
        bookname: this.setname,
        author: this.setauthor,
        publisher: this.setpub,
        id,
      };
      this.disabled = true;

      this.$axios({
        method: 'POST',
        url: '/api/addbook',
        data: {
          ...newObj,
        },
      }).then((res) => {
        // console.log(res);
        const { status, msg } = res.data;
        if (status != 201) return alert(msg);
        alert(msg);
        this.getBooks();
      });
      this.setname = '';
      this.setauthor = '';
      this.setpub = '';
      this.disabled = false;
    },
  },
};
</script>

<style scoped>
.from {
  width: 500px;
}
</style>
