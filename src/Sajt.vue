<template>

  <div id="Sajt">
    <router-view/> 
    <div id="krug"></div>
    <div class="pozadina">
      
     <div class="wrapper">
       
       <Header/>
       <HomePage/>
       <About id="aboutID"/>
     </div>
    </div>
    <Features id="featuresID" />
    <Pricing id="pricingID"/>
    <Screenshots id="screenshotsID"/>
    <Contact id="contactID"/>

    
  </div>
</template>

<script>
import HomePage from './components/HomePage.vue';
import Header from './components/Header.vue';
import About from './components/About.vue';
import Features from './components/Features.vue';
import Pricing from './components/Pricing.vue';
import Screenshots from './components/Screenshots.vue';
import Contact from './components/Contact.vue';


export default {
  name: 'Sajt',
  components: {
    HomePage,
    Header,
    About,
    Features,
    Pricing,
    Screenshots,
    Contact
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

#Sajt {
  
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
.wrapper {
  width: 1300px;
  margin: 0 auto;
}
.pozadina {
  width: 100%;
  background: url("assets/Rectangle.svg") 30% 162% no-repeat;


} 
#krug {
  width: 660px;
  height: 660px;
  background-color: white;
  opacity: 0.3 ; 
  position: absolute;
  right: -200px;
  top: -250px;
  border-radius: 50%;
  overflow: hidden;


}
li:hover {
    cursor: pointer;
  }
</style>