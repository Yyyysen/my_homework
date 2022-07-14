<template>
  <div>
    <div>
      <span>选择所在地区:</span>
      <input type="radio" value="中国大陆" v-model="area" />中国大陆
      <input type="radio" value="中国香港" v-model="area" />中国香港
    </div>
    <div>
      <span>手机号码:</span>
      <input type="text" v-model.number="phone" />
    </div>
    <div>
      <span>年龄:</span>
      <input type="text" v-model.number="age" />
    </div>
    <div>
      <span>密码:</span>
      <input type="password" v-model="pwd" />
    </div>
    <div>
      <span>爱好:</span>
      <input type="checkbox" value="看书" v-model="hobby" />看书
      <input type="checkbox" value="学习" v-model="hobby" />学习
      <input type="checkbox" value="写代码" v-model="hobby" />写代码
      <input type="checkbox" value="打游戏" v-model="hobby" />打游戏
    </div>
    <div>
      <span><input type="checkbox" v-model="mem" />记住密码</span>
    </div>
    <br />
    ==========================================================
    <br />
    <p>我来自:{{ area }}</p>
    <p>手机号码是:{{ phone }}</p>
    <p>年龄:{{ age }}</p>
    <p>密码:{{ pwd }}</p>
    <p>爱好是:{{ hobby.join(',') }}</p>
    <p>是否记住密码:{{ mem ? '是' : '否' }}</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      area: '中国大陆',
      phone: '',
      age: '',
      pwd: '',
      hobby: ['看书', '学习'],
      mem: true,
    };
  },
};
</script>

<style></style>
