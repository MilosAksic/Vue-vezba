<template>

  <div id="app">
    <transition name="router-anim" enter-active-class="animated fadeIn" leave-active-class="animated fadeOut">
    <router-view/> 
    </transition>
  </div>
</template>

<script>



export default {
  name: 'app',
  components: {
    
  }
}
</script>

<style>
@import 'https://cdnjs.cloudflare.com/ajax/libs/animate.css/3.7.0/animate.css';
 @font-face {
  font-family: Poppins;
  src: url('assets/Poppins-Regular.ttf'); 
} 
html {
  scroll-behavior: smooth;
}

#app {
  
  font-family: 'Poppins', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  width: 1920px;
  position: relative;
  margin:0 auto;
  padding: 0;
  box-sizing: border-box;
  border: 1px solid black;
}

.page {
  position: fixed;
  width: inherit;
}

/* @media only screen and (max-width: 360px) {
    #app{
      width: 360px;
    }
}
@media only screen and (max-width: 768px) {
    #app{
      width: 720px;
    }
}

@media only screen and (max-width: 1024px) {
    #app{
      width: 1024px;
    }
} */

</style>
