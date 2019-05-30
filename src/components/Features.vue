<template>
  <div class="features">
    <div class="main-div">  
      <div class="gore">
        <h4>Features The App</h4>
        <p>Writers and stars of Veep have responded incredulously to the news an Australian politician
required preinstalled stitches way  email client, calendar, mapping program.</p>
      </div>

      <div class="dole">
        <div class="levo">
          <!-- <img src="../assets/Phone.png" alt=""> -->
          <div class="slider-placeholder">
              <div class="images">
                <div id="carouselExampleSlidesOnly" class="carousel slide" data-ride="carousel">
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img class="d-block w-100" src="../assets/caroseul1.png" alt="First">
    </div>
    <div class="carousel-item ">
      <img class="d-block w-100" src="../assets/caroseul2.png" alt="Second">
    </div>
    <div class="carousel-item ">
      <img class="d-block w-100" src="../assets/caroseul3.png" alt="Third">
    </div>
    <div class="carousel-item">
      <img class="d-block w-100" src="../assets/caroseul4.png" alt="Fourth">
    </div>
    <div class="carousel-item">
      <img class="d-block w-100" src="../assets/caroseul5.png" alt="Fifth">
    </div>
  </div>
</div>
              </div>

          </div>
        </div>

        <div class="desno">
            <div class="mini-div">
              <div class="mini-levo">
                  <div class="placeholder">
                      <img src="../assets/creative.png" alt="Slika">
                  </div>

              </div>
              <div class="mini-desno">
                    <h4>CREATIVE DESIGN</h4>
                    <p>Lorem ipsum dolor sit amet, consectet adop adipisicing elit, sed do eiusmod temporara.
                       Another projects managed with a easy design is what we stand for.incididunt ugt labore.</p>
              </div>
            </div>
            <div class="mini-div">
              <div class="mini-levo">
                   <div class="placeholder">
                      <img src="../assets/unlimited.png" alt="Slika">
                  </div>
              </div>
              <div class="mini-desno">
                  <h4>UNLIMITED FEATURES</h4>
                  <p>Lorem ipsum dolor sit amet, consectet adop adipisicing elit, sed do eiusmod temporara.
                       Another projects managed with a easy design is what we stand for.incididunt ugt labore.</p>
              </div>
            </div>
            <div class="mini-div">
              <div class="mini-levo">
                   <div class="placeholder">
                      <img src="../assets/user.png" alt="Slika">
                  </div>
              </div>
              <div class="mini-desno">
                <h4>USER FRIENDLY</h4>
                <p>Lorem ipsum dolor sit amet, consectet adop adipisicing elit, sed do eiusmod temporara.
                       Another projects managed with a easy design is what we stand for.incididunt ugt labore.</p>
                
              </div>
            </div>
            <div class="mini-div">
              <div class="mini-levo">
                   <div class="placeholder">
                      <img src="../assets/clean.png" alt="Slika">
                  </div>
              </div>
              <div class="mini-desno">
                  <h4>CLEAN CODES</h4>
                  <p>Lorem ipsum dolor sit amet, consectet adop adipisicing elit, sed do eiusmod temporara.
                       Another projects managed with a easy design is what we stand for.incididunt ugt labore.</p>
              </div>
            </div>

        </div>
      </div>
    </div>
    
  </div>
</template>

<script>
export default {
  name: 'Features',
  mounted(){
    this.$nextTick(() => {
        $('.carousel').carousel({
  interval: 3000
})
    });
  }
  
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    .features {
      width: 100%;
      height: 1330px;
      background: url('../assets/Shape.png');
      display: flex;
      justify-content: center;
      color: white;
    }
    .main-div {
      width: 1200px;
      height: 1030px;
      /* background-color: black; */
      align-self: center;
            
    }
    .gore {
      margin: 0 auto;
      margin-bottom: 30px;
      width: 914px;
      height: 150px;
    }
    .gore h4{
      font-size: 34px;
    }
    .dole {
      display: flex;
    }
    .levo{
      width:45%;
      
    }
    .desno {
        height: 690px;
        width:55%;
       
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        text-align: left; 


    }
    .mini-div {
      width: 100%;
      height: 100px;
      
      display: flex;

    }
    .mini-div h4 {
      margin-top: 0px;


    }
    .mini-levo {
      width: 80px;
      height: 147px;
      position: relative;

    }
    .mini-desno {
      width: 560px;
      height: 147px;
       padding-left: 30px;
    }
    .levo img {
  width: 350px; height: 710px;

}
.placeholder {
    width: 77px;
    height: 77px;
    background-color: white;
    border-radius: 50%;
    display: flex;
    position: absolute;
    text-align: center;
    align-items: center;
    justify-content: center;
    transition: 0.7s;
    top: 0;
    left: 0;
    
}

.placeholder:hover {
  background-color: #29e4b7;
}

.slider-placeholder {
  width:352px;
  height: 710px;
  background: url('../assets/Phone.png');
  display: flex;  
  align-items: center;
  justify-content: center;
}

.images {
    width:321px;
    height: 560px;
    background-color: white;
    
}

#carouselExampleSlidesOnly,.carousel-item img {
  width: 100%;
  height: 100%;

}


</style>