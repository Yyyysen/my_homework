<template>
  <div>
    <MyHeader title="龙哥购物车" background="#ff3700" color="#fff" />
    <div style="margin-top: 45px">
      <MyGoods v-for="item in list" :key="item.id" :obj="item" />
    </div>
    <MyFooter />
  </div>
</template>

<script>
import MyHeader from './components/MyHeader.vue';
import MyGoods from './components/MyGoods.vue';
import MyFooter from './components/MyFooter.vue';
export default {
  name: 'App',
  data() {
    return {
      list: [],
    };
  },
  components: {
    MyHeader,
    MyGoods,
    MyFooter,
  },
  created() {
    this.$axios({
      url: '/api/cart',
    }).then((res) => {
      // console.log(res);
      this.list = res.data.list;
      console.log(this.list);
    });
  },
};
</script>
