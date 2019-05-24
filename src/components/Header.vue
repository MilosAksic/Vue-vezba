<template>  
    
  <div class="Header">
      <!-- <img src="../assets/Rectangle.svg" alt=""> -->
      <div class="section1"><img src="../assets/DEMO.svg" alt=""></div>
      <div class="section2">
      <ul>
          
          <li><a href="#">Home</a></li>
          <li><a href="#aboutID">About</a></li>
          <li><a href="#featuresID">Features</a></li>
          <li><a href="#pricingID">Pricing</a></li>
          <li><a href="#screenshotsID">Screenshot</a></li>
          <li><a href="#contactID">Contact</a></li>
        
      </ul>
      </div>
      <div class="section3"><a href="#"> <span>Login</span> or Register</a></div>

  </div>
</template>

<script>
export default {
  name: 'Header',
  
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    .Header {
        width: 100%;
        height: 180px;
        display : flex;
        justify-content: center;
        background-color: #202646;
       
   
    }
    .section3 {
        z-index: 99;
    }
    /* img{
        z-index: -3;
        overflow: hidden;
        position: relative;
        top: -1300px;
    } */
    div {
        height: 100%;
        color: white;
        align-items: center;
        align-self: center;
    }
    .section1,.section3 {
        width : 20%;

    }
    .section2 {
        width: 60%;
        font-size: 20px;
    }
     a:hover {
        font-weight: 700;
        text-decoration: none;
        color: white;
    }
    .section3 , .section2 ,.section1  {
        padding-top:91px;
    }

    ul {
         list-style-type: none;
         padding: 0;
         

    }
    .section3 a {
        padding : 20px;
        background-color: white;
        color: #202646;
        border-radius:  38px;
        width: 242px;
        height: 76px;
        font-size: 25px;
        z-index: 99;
    }
    li {
  display: inline-block;
  margin: 0 10px;
  
    }
    .section1 {
        font-size: 34px;
    }
a {
  text-decoration: none;
  color: white;
}
 a span {
     color: #29e4b7;
 }
.section3:hover {
    cursor: pointer;
    /* z-index: 2; */
}
</style>
