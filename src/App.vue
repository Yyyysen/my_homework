<template>
  <div>
    <MyHeader title="我的Tab_作业"></MyHeader>
    <div style="margin-top: 45px">
      <component :is="comName"> </component>
    </div>
    <MyTabBar :list="list"></MyTabBar>
  </div>
</template>

<script>
import MyHeader from './commponents/MyHeader.vue';
import MyTabBar from './commponents/MyTabBar.vue';
import MyGoodsList from './views/MyGoodsList.vue';
import MyGoodsSearch from './views/MyGoodsSearch.vue';
import MyUserInfo from './views/MyUserInfo.vue';
export default {
  name: 'App',
  data() {
    return {
      comName: 'MyGoodsList',
      list: [
        {
          iconText: 'icon-shangpinliebiao',
          text: '商品列表',
          componentName: 'MyGoodsList',
        },
        {
          iconText: 'icon-sousuo',
          text: '商品搜索',
          componentName: 'MyGoodsSearch',
        },
        {
          iconText: 'icon-user',
          text: '我的信息',
          componentName: 'MyUserInfo',
        },
      ],
    };
  },
  components: {
    MyHeader,
    MyTabBar,
    MyGoodsList,
    MyGoodsSearch,
    MyUserInfo,
  },
};
</script>

<style></style>
