
<template>
  <div>
    <section class="tiles">
      <article v-for="image in images" class="style1">
        <span class="image">
          <img :src="image.imagePath">
        </span>
        <a href="generic.html">
          <h2>{{ image.name }}</h2>
          <div class="content">
            <p>{{ image.description }}</p>
          </div>
        </a>
      </article>
    </section>
    <div class="loadMoreButton">
      <button v-on:click="addImage" class="loadMoreButton">Load more</button>
    </div>
  </div>
</template>
<script>
  export default {
    name: 'images',
    data() {
      return {
        images: [
          /*****************image 생성, 관리*****************/
          {
            name: '상품 1',
            imagePath: require('@/assets/images/pic01.jpg'),
            description: 'Sed nisl arcu euismod sit amet nisi lorem etiam dolor veroeros et feugiat.'
          },
          {
            name: '상품 2',
            imagePath: require('@/assets/images/pic11.jpg'),
            description: 'Sed nisl arcu euismod sit amet nisi lorem etiam dolor veroeros et feugiat.'
          },
          {
            name: '상품 3',
            imagePath: require('@/assets/images/pic07.jpg'),
            description: 'Sed nisl arcu euismod sit amet nisi lorem etiam dolor veroeros et feugiat.'
          },
          {
            name: '상품 4',
            imagePath: require('@/assets/images/pic01.jpg'),
            description: 'Sed nisl arcu euismod sit amet nisi lorem etiam dolor veroeros et feugiat.'
          },
          {
            name: '상품 5',
            imagePath: require('@/assets/images/pic02.jpg'),
            description: 'Sed nisl arcu euismod sit amet nisi lorem etiam dolor veroeros et feugiat.'
          },
          {
            name: '상품 6',
            imagePath: require('@/assets/images/pic03.jpg'),
            description: 'Sed nisl arcu euismod sit amet nisi lorem etiam dolor veroeros et feugiat.'
          },
          {
            name: '상품 7',
            imagePath: require('@/assets/images/pic04.jpg'),
            description: 'Sed nisl arcu euismod sit amet nisi lorem etiam dolor veroeros et feugiat.'
          },
          {
            name: '상품 8',
            imagePath: require('@/assets/images/pic05.jpg'),
            description: 'Sed nisl arcu euismod sit amet nisi lorem etiam dolor veroeros et feugiat.'
          },
          {
            name: '상품 9',
            imagePath: require('@/assets/images/pic06.jpg'),
            description: 'Sed nisl arcu euismod sit amet nisi lorem etiam dolor veroeros et feugiat.'
          },
          {
            name: '상품 10',
            imagePath: require('@/assets/images/pic07.jpg'),
            description: 'Sed nisl arcu euismod sit amet nisi lorem etiam dolor veroeros et feugiat.'
          },
          {
            name: '상품 11',
            imagePath: require('@/assets/images/pic08.jpg'),
            description: 'Sed nisl arcu euismod sit amet nisi lorem etiam dolor veroeros et feugiat.'
          },
          {
            name: '상품 12',
            imagePath: require('@/assets/images/pic09.jpg'),
            description: 'Sed nisl arcu euismod sit amet nisi lorem etiam dolor veroeros et feugiat.'
          },
          {
            name: '상품 13',
            imagePath: require('@/assets/images/pic10.jpg'),
            description: 'Sed nisl arcu euismod sit amet nisi lorem etiam dolor veroeros et feugiat.'
          },
          {
            name: '상품 14',
            imagePath: require('@/assets/images/pic11.jpg'),
            description: 'Sed nisl arcu euismod sit amet nisi lorem etiam dolor veroeros et feugiat.'
          },
          {
            name: '상품 15',
            imagePath: require('@/assets/images/pic12.jpg'),
            description: 'Sed nisl arcu euismod sit amet nisi lorem etiam dolor veroeros et feugiat.'
          },
        ],
        nextcount: 16
      };

    },
    methods: {
      addImage: function () {
        for (var i = 0; i < 30; i++) {
          var n = i % 9;
          if (!n) { n = 9; }
          this.images.push({
            name: '상품 ' + this.nextcount++,
            imagePath: require('@/assets/images/pic0' + n + '.jpg'),
            description: 'Sed nisl arcu euismod sit amet nisi lorem etiam dolor veroeros et feugiat.'
          });
        }
      }
    }
  }
</script>
