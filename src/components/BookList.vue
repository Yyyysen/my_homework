<template>
  <div style="margin-top: 30px">
    <el-table :data="obj" border style="width: 100%">
      <el-table-column prop="id" label="序号" width="100"> </el-table-column>
      <el-table-column prop="bookname" label="书名" width="120">
      </el-table-column>
      <el-table-column prop="author" label="作者"> </el-table-column>
      <el-table-column prop="publisher" label="出版商"> </el-table-column>
      <el-table-column label="操作">
        <template slot-scope="scope">
          <el-button type="danger" @click="delBtn(scope.row.id)"
            >删除</el-button
          >
          <el-button
            type="primary"
            @click="
              dialogVisible = true;
              showBtn(scope.row.id);
            "
            >详情</el-button
          >
        </template>
      </el-table-column>
    </el-table>

    <el-dialog
      title="提示"
      :visible.sync="dialogVisible"
      width="40%"
      :before-close="handleClose"
    >
      <el-form class="from">
        <el-form-item label="书名">
          <el-input placeholder="书名" :value="showInfo.bookname"></el-input>
        </el-form-item>

        <el-form-item label="作者">
          <el-input placeholder="作者" :value="showInfo.author"></el-input>
        </el-form-item>

        <el-form-item label="出版社">
          <el-input placeholder="出版社" :value="showInfo.publisher"></el-input>
        </el-form-item>
      </el-form>
      <span slot="footer" class="dialog-footer">
        <el-button @click="dialogVisible = false">取 消</el-button>
        <el-button type="primary" @click="dialogVisible = false"
          >确 定</el-button
        >
      </span>
    </el-dialog>
  </div>
</template>

<script>
export default {
  name: 'BookList',
  props: {
    obj: {
      type: Array,
      default: () => [],
    },
  },
  data() {
    return {
      showInfo: {},
      dialogVisible: false,
    };
  },
  methods: {
    handleClose(done) {
      this.$confirm('确认关闭？')
        .then((_) => {
          done();
        })
        .catch((_) => {});
    },
    showBtn(id) {
      this.showInfo = this.obj.find((item) => item.id == id);
      console.log(this.showInfo);
    },
    delBtn(id) {
      this.$emit('delBooks', id);
    },
  },
};
</script>

<style scoped>
.from {
  width: 70%;
}
</style>
