
<template>
  <div class="is-preload">
    <!-- Wrapper -->
    <div id="wrapper">

      <!-- Header -->
      <menuHeader></menuHeader>
      <!-- Menu -->
      <menu_ id="menu"></menu_>
      <!-- Main -->
      <div id="main">
        <div class="inner">
          <header>
            <h1>미하이 스토어 공동구매 사이트</h1>
          </header>
          <images></images>
        </div>
      </div>
    </div>
  </div>

</template>

<script>
  import images from '@/components/images.vue'
  import menu_ from '@/components/menu.vue'
  import menuHeader from '@/components/menuHeader.vue'
  export default {
  name: 'App',
    components: { images, menuHeader, menu_ }
  }
</script>

<style src="@/assets/css/main.css"></style>
<style src="@/assets/css/noscript.css"></style>
