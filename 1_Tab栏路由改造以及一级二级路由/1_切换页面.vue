<template>
  <div>
    <div>
      <router-link class="top" to="/index">首页</router-link>
      <router-link class="top" to="/class">分类</router-link>
      <router-link class="top" to="/order">订单</router-link>
      <router-link class="top" to="/my">我的</router-link>
    </div>
    <h1>显示路由切换的页面</h1>
    <div>
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
export default {
  name: 'App',
};
</script>

<style>
.top {
  margin-right: 15px;
}
</style>
