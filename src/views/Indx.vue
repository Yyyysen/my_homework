<template>
  <div>
    <div class="footer_wrap">
      <router-link to="/indx/com">综合</router-link>
      <router-link to="/indx/frontend">前端</router-link>
      <router-link to="/indx/backend">后端</router-link>
      <button type="button" class="btn btn-primary" @click="btn">随机</button>
      <!-- <span @click="btn">综合</span>
      <span @click="btn">前端</span>
      <span @click="btn">后端</span> -->
    </div>
    <div class="top">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      // pathList: ['/indx/com', '/indx/frontend', '/indx/backend'],
      pathList: ['/indx/com/recomm', '/indx/com/new', '/indx/com/hot'],
    };
  },
  methods: {
    btn() {
      this.$router.push({
        path: this.pathList[Math.floor(Math.random() * 3)],
      });
    },
  },
};
</script>

<style scoped>
.footer_wrap {
  position: fixed;
  left: 0;
  top: 70px;
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
  padding: 20px 0;
  line-height: 20px;
  background-color: rgb(170, 233, 238);
  color: red;
  font-weight: 800;
  border: 1px solid rgb(0, 0, 0);
}
.footer_wrap a:hover {
  background-color: rgb(196, 224, 226);
}
.top {
  padding-top: 62px;
}
</style>
