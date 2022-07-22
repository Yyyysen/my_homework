<template>
  <div>
    <MyTable :list="list">
      <template #header>
        <th>#</th>
        <th>商品名称</th>
        <th>价格</th>
        <th>标签</th>
        <th>操作</th>
      </template>

      <template #context="scope">
        <td>{{ scope.row.id }}</td>
        <td>{{ scope.row.goods_name }}</td>
        <td>{{ scope.row.goods_price }}</td>
        <td>
          <input
            v-focus
            type="text"
            class="tag-input form-control"
            style="width: 100px"
            v-if="scope.row.inputVisible"
            @blur="scope.row.inputVisible = false"
            v-model="scope.row.inputValue"
            @keyup.enter="enterFn(scope.row)"
            @keyup.esc="scope.row.inputVisible = false"
          />
          <button
            class="btn btn-primary btn-sm add-tag"
            v-else
            @click="scope.row.inputVisible = true"
          >
            +Tag
          </button>
          <span
            class="badge badge-warning"
            style="margin-left: 8px"
            v-for="(item, index) in scope.row.tags"
            :key="index"
            >{{ item }}</span
          >
        </td>
        <td>
          <button
            type="button"
            class="btn btn-danger"
            @click="delFn(scope.row.id)"
          >
            删除
          </button>
        </td>
      </template>
    </MyTable>
  </div>
</template>

<script>
import MyTable from '../commponents/MyTable.vue';
export default {
  name: 'MyGoodsList',
  data() {
    return {
      list: [],
    };
  },
  components: {
    MyTable,
  },
  created() {
    this.getList();
  },
  methods: {
    getList() {
      this.$axios({
        url: '/api/goods',
      })
        .then((res) => {
          console.log(res.data.data);
          this.list = res.data.data;
        })
        .catch((err) => {
          console.log(err);
        });
    },
    delFn(id) {
      // console.log(id);
      let index = this.list.findIndex((ele) => ele.id == id);
      this.list.splice(index, 1);
    },
    enterFn(val) {
      console.log(val);
      if (val.inputValue.trim() == '') {
        val.inputValue = '';
        return alert('请输入');
      } else {
        val.tags.push(val.inputValue);
        val.inputValue = '';
      }
    },
  },
};
</script>

<style></style>
