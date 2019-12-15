
<template>
  <div class="is-preload">
    <!-- Wrapper -->
    <div id="wrapper">

      <!-- Header -->
      <header id="header">
        <div class="inner">

          <!-- Nav -->
          <nav>
            <ul>
              <li><a href="#menu">Menu</a></li>
            </ul>
          </nav>

        </div>
      </header>

      <!-- Menu -->
      <nav id="menu">
        <h2>Menu</h2>
        <ul>
          <li><a href="index.html">Home</a></li>
          <li><a href="login.html">로그인</a></li>
          <li><a href="join.html">회원가입</a></li>
          <li><a href="question.html">문의하기</a></li>
        </ul>
      </nav>
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
import './assets/js/jquery.js'
import images from '@/components/images.vue'
export default {
  name: 'App',
  components: { images }
}
</script>

<style src="./assets/css/main.css"></style>
<style src="./assets/css/noscript.css"></style>
