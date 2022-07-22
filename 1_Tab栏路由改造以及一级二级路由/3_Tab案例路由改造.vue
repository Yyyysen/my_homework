<template>
  <div>
    <MyHeader title="我的Tab_作业"></MyHeader>

    <router-view style="margin-top: 45px"></router-view>

    <MyTabBar :list="list"></MyTabBar>
  </div>
</template>

<script>
import MyHeader from './commponents/MyHeader.vue';
import MyTabBar from './commponents/MyTabBar.vue';

export default {
  name: 'App',
  data() {
    return {
      comName: '',
      list: [
        {
          iconText: 'icon-shangpinliebiao',
          text: '商品列表',
          componentName: 'MyGoodsList',
          path: '/mygoodlist',
        },
        {
          iconText: 'icon-sousuo',
          text: '商品搜索',
          componentName: 'MyGoodsSearch',
          path: '/mygoodsearch',
        },
        {
          iconText: 'icon-user',
          text: '我的信息',
          componentName: 'MyUserInfo',
          path: '/myuserinfo',
        },
      ],
    };
  },
  components: {
    MyHeader,
    MyTabBar,
    // MyGoodsList,
    // MyGoodsSearch,
    // MyUserInfo,
  },
};
</script>

<style></style>
