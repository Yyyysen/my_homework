<template>
  <div>
    <div class="footer_wrap">
      <router-link to="/indx/com/recomm">推荐</router-link>
      <router-link to="/indx/com/new">最新</router-link>
      <router-link to="/indx/com/hot">最热</router-link>
    </div>
    <div class="top">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.footer_wrap {
  position: fixed;
  left: 0;
  top: 150px;
  display: flex;
  width: 100%;
  text-align: center;
  background-color: #333;
  color: #ccc;
}
.footer_wrap a,
.footer_wrap span {
  flex: 1;
  text-decoration: none;
  padding: 10px 0;
  line-height: 20px;
  background-color: rgb(226, 229, 230);
  color: brown;
  font-weight: 800;
  border: 1px solid rgb(0, 0, 0);
}
.footer_wrap a:hover {
  background-color: rgb(215, 156, 230);
}
.top {
  padding-top: 62px;
}
</style>
