<template>
  <div>
    <p>这是我的页面</p>
    <p>这是我的页面</p>
    <div>
      <router-link class="top" to="/my/childInd">二级路由1</router-link>
      <router-link class="top" to="/my/childClass">二级路由2</router-link>
    </div>
    <div>
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style>
.top {
  margin-right: 15px;
}
</style>
