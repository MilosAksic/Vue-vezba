<template>

  <div id="app">
    <router-view/> 
    

    
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

</style>
