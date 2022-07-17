<template>
  <div>
    <Product
      v-for="(item, index) in list"
      :key="item.id"
      :title="item.proname"
      :price="item.proprice"
      :word="item.info"
      :index="index"
      v-on:del="delFn"
    />
  </div>
</template>

<script>
import Product from './components/Product.vue';
export default {
  data() {
    return {
      msg: '超级好吃的口水鸡',
      list: [
        {
          id: 1,
          proname: '超级好吃的棒棒糖',
          proprice: 18.8,
          info: '开业大酬宾, 全场8折',
        },
        {
          id: 2,
          proname: '超级好吃的大鸡腿',
          proprice: 34.2,
          info: '好吃不腻, 快来买啊',
        },
        {
          id: 3,
          proname: '超级无敌的冰激凌',
          proprice: 14.2,
          info: '炎热的夏天, 来个冰激凌了',
        },
        {
          id: 4,
          proname: '超级无敌的冰激凌',
          proprice: 13.2,
          info: '炎热的夏天, 来个冰激凌了',
        },
      ],
    };
  },
  components: {
    Product,
  },
  methods: {
    delFn(val) {
      console.log('66', val);
      this.list[val].proprice--;
    },
  },
};
</script>
