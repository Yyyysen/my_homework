<template>
  <div class="my-tab-bar">
    <router-link
      class="tab-item"
      v-for="(item, index) in list"
      :key="item.componentName"
      :to="item.path"
      @click="changeFn(index, item.componentName)"
    >
      <span class="iconfont" :class="item.iconText"></span>

      <span>{{ item.text }}</span>
    </router-link>
    <!-- <router-link  to="/mygoodlist">商品列表</router-link>
      <router-link  to="/mygoodsearch">商品搜索</router-link>
      <router-link  to="/myuserinfo">我的信息</router-link> -->
    <!-- <div>
      <router-view></router-view>
    </div> -->
  </div>
</template>

<script>
export default {
  name: 'MyTabBar',
  data() {
    return {
      current: 0,
    };
  },
  props: {
    list: {
      type: Array,
      default: () => [],
      validator(val) {
        if (val.length >= 2 && val.length <= 5) {
          return true;
        } else {
          return false;
        }
      },
    },
  },
  methods: {
    changeFn(id, name) {
      // this.current = id;
      this.$parent.comName = name;
    },
  },
};
</script>

<style lang="less" scoped>
.my-tab-bar {
  position: fixed;
  left: 0;
  bottom: 0;
  width: 100%;
  height: 50px;
  border-top: 1px solid #ccc;
  display: flex;
  justify-content: space-around;
  align-items: center;
  background-color: white;
  .tab-item {
    display: flex;
    flex-direction: column;
    align-items: center;
    cursor: pointer;
  }
}
.router-link-active {
  color: gold;
}
// .current {
//   color: #1d7bff;
// }
</style>
