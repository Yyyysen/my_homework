<template>
  <div>
    <h1>数组之和是:{{ sum }}</h1>
    <button @click.once="sumBtn">点击求数组的和</button>
    <hr />
    <h1>字符串是:{{ str }}</h1>
    <button @click="strBtn">点击打印对应的解析后的字符串</button>
    <hr />
    <h1>字符串是:{{ str1 }}</h1>
    <button @click="strBtn1">点击打印对应的解析后的字符串</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      arr: [1, 2, 3, , 4, 5],
      sum: 0,
      str: 'asdasdasdasdasdasdss',
      str1: 'http://www.baidu.com?name=zhangsan&age=18&sex=nan#',
    };
  },
  methods: {
    sumBtn() {
      this.arr.reduce((pre, curr) => {
        return (this.sum = pre + curr);
      }, this.sum);
    },
    strBtn() {
      let newObj = this.str.split('').reduce((pre, curr) => {
        if (curr in pre) {
          pre[curr]++; //这里的意思是如果pre里面有这个属性就加一
        } else {
          pre[curr] = 1; // 这里意思是往pre对象中如果没有这个属性，就把这个属性赋值为1
        }
        return pre;
      }, {});
      console.log(newObj);
    },
    strBtn1() {
      const in1 = this.str1.indexOf('?');
      // console.log(in1);
      const in2 = this.str1.indexOf('#');
      // console.log(in2);
      const newStr = this.str1.slice(in1 + 1, in2).split('&'); // 从第一个+1 的位置截取到第二个参数的位置
      // console.log(newStr);
      let newObj = newStr.reduce((pre, curr) => {
        const [k, val] = curr.split('=');
        pre[k] = val;
        return pre;
      }, {});
      console.log(newObj);
    },
  },
};
</script>

<style></style>
