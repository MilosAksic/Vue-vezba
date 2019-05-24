<template>
  <div class="About">

    <div class="main-div">
        <div class="gore">
          <h4>About The App</h4>
          <p>Writers and stars of Veep have responded incredulously to the news an Australian politician
required preinstalled stitches way  email client, calendar, mapping program.</p>
        </div>
        <div class="dole">
          <div class="tab">
            <div class="wrapper">
            <div class="slika">
              <div class="placeholder">
                  <img src="../assets/Slusalice.png" alt="">

              </div>
            </div>
            <div class="doleText">
              <h4>24/7 Suppport</h4>
              <p>Apps that are not preinstalled are usually available through distribution platforms called app stores.</p>
            </div>
            </div>
          </div>
          <div class="tab">
           <div class="wrapper">
            <div class="slika">
              <div class="placeholder">
                  <img src="../assets/kamera.png" alt="">

              </div>
            </div>
            <div class="doleText">
              <h4>Data Privacy</h4>
              <p>Apps that are not preinstalled are usually available through distribution platforms called app stores.</p>
            </div>
           </div>
          </div>
          <div class="tab">
            <div class="wrapper">
            <div class="slika">
              <div class="placeholder">
                  <img src="../assets/Strelica.png" alt="strelica">

              </div>
            </div>
            <div class="doleText">
              <h4>Easy Download</h4>
              <p>Apps that are not preinstalled are usually available through distribution platforms called app stores.</p>
            </div>
            </div>

          </div>
        </div>
    </div>
    
  </div>
</template>

<script>
export default {
  name: 'About',
  
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    .About {
      width: 100%;
      height: 820px;
      color: gray;
      display: flex;
      justify-content: center;
       /* padding-top: 20px; */
      
    }
    .main-div {
      width: 1170px;
      height: 630px;
      align-self: center;
      text-align: center;
     
    }
    .gore {
      width: 915px;
      height: 150px;
      margin: 0 auto;

    }
    .gore h4 {
      font-size: 36px;
      margin: 0px;
      margin-bottom: 42px;
      padding: 0px;
    } 


    .gore p {
      font-size: 20px;
      margin-bottom: 50px;
    }

    .dole h4 {
      font-size: 24px;
      
    }
    .dole p {
      font-size: 16px;
      
    }
     .placeholder{
      width: 95px;
      height: 95px;
      margin: 0 auto; 
      transform: rotate(45deg); 
      background-color: gray;
      display: flex;
      align-items: center;
       justify-content: center;
       transition: 0.5s;
      
      
      
    }

    .placeholder:hover {
      background-color: #29e4b7;
    }
    
    .placeholder img {
      width: 65px;
      height: 65px;
      margin : 10px auto;
      transform: rotate(-45deg); 
    }
    .slika {
      margin-bottom: 35px;
    }
    .tab {
      width: 358px;
      height: 391px;
      background-color: white;
      box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
      /* box-shadow: -4px 2px 27px 9px rgba(0,0,0,0.51); */
    }
    .dole {
      display: flex;
      justify-content: space-between;
      width: 100%;
      margin-top: 70px;
    }

    .wrapper {
      width: 300px;
      height: 300px;
      margin: 55px auto;
    }
    
</style>