<template>
  <div>
    <Dogs
      v-for="(item, index) in dogArr"
      :key="index"
      :imgUrl="item.dogImgUrl"
      :dogName="item.dogName"
    />
  </div>
</template>

<script>
import Dogs from './components/Dog1.vue';
export default {
  data() {
    return {
      dogArr: [
        {
          dogImgUrl:
            'http://nwzimg.wezhan.cn/contents/sitefiles2029/10146688/images/21129958.jpg',
          dogName: '博美',
        },
        {
          dogImgUrl:
            'http://nwzimg.wezhan.cn/contents/sitefiles2029/10146688/images/21129958.jpg',
          dogName: '泰迪',
        },
        {
          dogImgUrl:
            'http://nwzimg.wezhan.cn/contents/sitefiles2029/10146688/images/21129958.jpg',
          dogName: '金毛',
        },
        {
          dogImgUrl:
            'https://pic1.zhimg.com/80/v2-7ba4342e6fedb9c5f3726eb0888867da_1440w.jpg?source=1940ef5c',
          dogName: '哈士奇',
        },
        {
          dogImgUrl:
            'https://pic1.zhimg.com/80/v2-7ba4342e6fedb9c5f3726eb0888867da_1440w.jpg?source=1940ef5c',
          dogName: '阿拉斯加',
        },
        {
          dogImgUrl:
            'https://pic1.zhimg.com/80/v2-7ba4342e6fedb9c5f3726eb0888867da_1440w.jpg?source=1940ef5c',
          dogName: '萨摩耶',
        },
      ],
    };
  },
  components: {
    Dogs,
  },
};
</script>

<style></style>
