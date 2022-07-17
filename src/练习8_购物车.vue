<template>
  <div>
    <table border="1" width="700" style="border-collapse: collapse">
      <caption>
        购物车
      </caption>
      <thead>
        <tr>
          <th><input type="checkbox" v-model="isAll" /> <span>全选</span></th>
          <th>名称</th>
          <th>价格</th>
          <th>数量</th>
          <th>总价</th>
          <th>操作</th>
        </tr>
      </thead>
      <tbody>
        <Trs
          v-for="(item, index) in goodList"
          :key="index"
          :name="item.name"
          :price="item.price"
          :num="item.num"
          :index="index"
          :checked="item.checked"
          :change="change"
          v-on="{
            sub: subFn,
            add: addFn,
            del: delFn,
            change: change,
          }"
        />
      </tbody>
      <tfoot>
        <Tfs :allprice="allprice" />
      </tfoot>
    </table>
  </div>
</template>

<script>
import Trs from './components/Trs.vue';
import Tfs from './components/Tfs.vue';

export default {
  data() {
    return {
      goodList: [
        {
          name: '诸葛亮',
          price: 1000,
          num: 1,
          checked: false,
        },
        {
          name: '蔡文姬',
          price: 1500,
          num: 1,
          checked: false,
        },
        {
          name: '妲己',
          price: 2000,
          num: 1,
          checked: false,
        },
        {
          name: '鲁班',
          price: 2200,
          num: 1,
          checked: false,
        },
      ],
    };
  },
  components: {
    Trs,
    Tfs,
  },
  computed: {
    isAll: {
      set(val) {
        return this.goodList.forEach((ele) => (ele.checked = val));
      },
      get() {
        if (this.goodList.length)
          if (
            this.goodList.filter((item) => item.checked).length ==
            this.goodList.length
          )
            return true;
      },
    },
    allprice() {
      return this.goodList.reduce((pre, cur) => {
        return (pre += cur.checked ? cur.num * cur.price : 0);
      }, 0);
    },
  },
  methods: {
    subFn(id) {
      this.goodList[id].num > 0
        ? this.goodList[id].num--
        : alert('收手吧 阿sir');
    },
    addFn(id) {
      this.goodList[id].num++;
    },
    delFn(id) {
      this.goodList.splice(id, 1);
      if (this.goodList.length == 0) return alert('没数据了别删除了呜呜呜');
    },
    change(id) {
      this.goodList[id].checked = !this.goodList[id].checked;
      // console.log(this.goodList[id].checked);
    },
  },
};
</script>

<style></style>
