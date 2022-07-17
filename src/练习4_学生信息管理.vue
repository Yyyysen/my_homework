<template>
  <div id="app">
    <div>
      <span>姓名:</span>
      <input type="text" v-model="uname" />
    </div>
    <div>
      <span>年龄:</span>
      <input type="number" v-model="uage" />
    </div>
    <div>
      <span>性别:</span>
      <select v-model="usex">
        <option value="男">男</option>
        <option value="女">女</option>
      </select>
    </div>
    <div>
      <button @click="addBtn">添加/修改</button>
    </div>
    <div>
      <table border="1" cellpadding="10" cellspacing="0">
        <tr v-if="this.arr.length !== 0">
          <th>序号</th>
          <th>姓名</th>
          <th>年龄</th>
          <th>性别</th>
          <th>操作</th>
        </tr>
        <tr v-for="(item, index) in arr" :key="item.id">
          <td>{{ index + 1 }}</td>
          <td>{{ item.name }}</td>
          <td>{{ item.age }}</td>
          <td>{{ item.sex }}</td>
          <td>
            <button class="del" @click="delBtn(item.id)">删除</button>
            <button @click="changeBtn(item.id)">编辑</button>
          </td>
        </tr>
      </table>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      arr: [
        { id: 1, name: 'Tom', age: 25, sex: '女' },
        { id: 2, name: 'Jack', age: 99, sex: '女' },
        { id: 3, name: 'Zs', age: 18, sex: '男' },
      ],
      uname: '',
      uage: '0',
      usex: '男',
      flag: false,
      index: '',
    };
  },
  methods: {
    addBtn() {
      if (!this.uname.trim() || this.uage == '0') {
        this.uname = '';
        this.uage = '0';
        return alert('输入数据哦');
      }
      let obj = {
        name: this.uname,
        age: this.uage,
        sex: this.usex,
      };
      if (!this.flag) {
        this.arr.push(obj);
      } else {
        // console.log(1);
        this.arr[this.index].name = this.uname;
        this.arr[this.index].age = this.uage;
        this.arr[this.index].sex = this.usex;
        this.flag = false;
      }
      this.uname = '';
      this.uage = '0';
    },
    delBtn(id) {
      // console.log(id);
      let index = this.arr.findIndex((obj) => obj.id == id);
      // console.log(index);
      this.arr.splice(index, 1);
      // console.log(this.arr.length);
      if (this.arr.length == 0) return alert('没数据了');
    },
    changeBtn(id) {
      // console.log(id);
      let in1 = this.arr.findIndex((obj) => obj.id == id);
      // console.log(in1);
      this.uname = this.arr[in1].name;
      this.uage = this.arr[in1].age;
      this.usex = this.arr[in1].sex;
      this.index = in1;
      this.flag = true;
    },
  },
};
</script>

<style scoped>
.del {
  margin-right: 5px;
}
</style>
