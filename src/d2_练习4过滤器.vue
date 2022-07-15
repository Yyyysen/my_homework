<template>
  <div>
    <h1>国内网站:粉丝数量{{ num | fansNum(10000, '万') }}</h1>
    <br />
    <h1>国外网站:粉丝数量{{ num | fansNum(1000, '千') }}</h1>
    <br />
    <h1>时间:{{ time | formatDate('-') }}</h1>
    <br />
    <h1>时间:{{ time | formatDate('/') }}</h1>
  </div>
</template>

<script>
import moment from 'moment';
export default {
  data() {
    return {
      num: 1876986,
      time: 1636450540055,
    };
  },
  filters: {
    fansNum(num, a, b) {
      return num / a + b;
    },
    formatDate(val, a = '') {
      return moment(val).format(`YYYY${a}MM${a}DD`);
    },
  },
};
</script>

<style></style>
