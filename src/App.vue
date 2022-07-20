<template>
  <div>
    <SearchBook
      :obj="list"
      @findBooks="findBooks"
      :getBooks="getBooks"
    ></SearchBook>
    <BookList :obj="list" @delBooks="delBooks"></BookList>
    <AddBooks
      style="margin-top: 50px"
      :obj="list"
      :getBooks="getBooks"
    ></AddBooks>
  </div>
</template>

<script>
import SearchBook from './components/SearchBook.vue';
import BookList from './components/BookList.vue';
import AddBooks from './components/AddBooks.vue';

export default {
  name: 'App',
  data() {
    return {
      list: [],
    };
  },
  components: {
    SearchBook,
    BookList,
    AddBooks,
  },
  created() {
    this.getBooks();
  },
  methods: {
    getBooks() {
      this.$axios({
        url: '/api/getbooks',
      }).then((res) => {
        this.list = res.data.data;
        // console.log(this.list);
      });
    },
    delBooks(id) {
      // console.log(id);
      this.$axios({
        url: '/api/delbook',
        params: { id },
      }).then((res) => {
        // console.log(res);
        const { status, msg } = res.data;
        // 不是 200 删除失败
        if (status != 200) return alert(msg);
        alert(msg);
        this.getBooks();
      });
    },
    findBooks(val) {
      // console.log(val);
      return (this.list = this.list.filter((item) => item.bookname == val));
    },
  },
};
</script>
