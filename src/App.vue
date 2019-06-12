<template>

  <div id="app">
    <!-- {{info}} -->
    <transition name="router-anim" enter-active-class="animated fadeIn" leave-active-class="animated fadeOut">
    <router-view/> 
    </transition>
  </div>
</template>

<script>

import axios from 'axios';



export default {
  name: 'app',
  data () {
    return {
      info: null
    }
  },
  mounted () {
  // this.$axios.get('https://api.coindesk.com/v1/bpi/currentprice.json').then((response) => {
  // console.log(response.data)
  // })

  // axios
  //     .get('https://api.coindesk.com/v1/bpi/currentprice.json')
  //     .then(response => (this.info = response))

  },
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
  /* width: 100%; */
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


</style>
