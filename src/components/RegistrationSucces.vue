<template>
  <div class="RegistrationSucces page">
    <img src="../assets/Oblaci.png" alt="Oblaci" id="oblak">
    <img src="../assets/Oblaci2.png" alt="Oblaci" id="oblak2">

    <img src="../assets/Union 2.png" alt="zvezdice" id="zvezdice">

    <img src="../assets/cloud1.png" alt="Oblaci" id="cloud1">
    <img src="../assets/cloud2.png" alt="Oblaci" id="cloud2">
    <img src="../assets/cloud3.png" alt="Oblaci" id="cloud3">

    <img src="../assets/Rectangle.png" alt="rect" id="rect">
      <div class="gore">
        <div class="clouds">
	            <div class="cloud s1"></div>
	            <div class="cloud s2"></div>
	            <div class="cloud s3"></div>

            </div>
          <img src="../assets/DEMO.svg" alt="Demo">
      </div>
      <div class="dole">
        <div class="dole-levo">
            
            <h4>Thanks for Using Our Service!</h4>

            <p>Sed ut perspiciatis unde omnis iste natus error sit 
              voluptatem accusantium doloremque laudantium, totam rem 
              aperiam, eaque ipsa quae ab illo inventore veritatis </p>
            
             <router-link  to="/login" class="nav-item"> LET'S START</router-link>

        </div>

        <div class="dole-desno">
            <img src="../assets/raketa.png" alt="raketa" id="raketa">
            
            

        </div>
      </div>
  </div>
</template>

<script>
export default {
  name: 'RegistrationSucces',
  
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    .RegistrationSucces {
      width: 100%;
      height: 1080px;
      background-color: #202646;
      color: white;
      display: flex;
      flex-direction: column;
      /* justify-content: center; */
      align-items: center;
      position: relative;
      overflow: hidden;
       
      
    }
    .gore {
      width: 1530px;
      height: 286px;
      margin-top: 76px;
      position: relative;
    }

     .gore img {
      width: 200px;
      height: 87px;
      position: absolute;
      top:0;
      left: 200px;


    }
    .dole {
      width: 1700px;
      height: 678px;
      display: flex;  
    }
    
    .dole-levo {
      width: 575px;
      height: 473px;
      text-align: left;
     
      margin-top: 30px;
      margin-left: 300px;
    }
    h4 {
      font-size: 55px;
    }
    p {
      font-size: 20px;
      margin-top:  46px;
       margin-bottom:  74px;
    }

    .nav-item{
      width: 246px;
      height: 54px;
      color: white;
      background-color: #1FE7B6;
      padding: 15px 98px;
      border-radius: 54px;
      font-size: 20px;
    }
    .nav-item:hover {
      text-decoration: none;

    }

    .dole-desno {
      width: 675px;
      height: 603px;
      text-align: left;
      margin-top: 30px;
      /* margin-left: 100px; */
      position: relative;

    }
    #raketa {
        position: absolute;
        left:270px;
        top : -146px;
    }
    #rect  {
      position: absolute;
      bottom:40px;
      right: 464px;
    }
    #oblak {
      position: absolute;
      bottom:0;
      right: 0;
      animation: bounce 7s linear infinite;
    }
    #oblak2 {
      position: absolute;
      bottom:0;
      right: -60px;
      animation: bounce 7s linear infinite;
    }
    #zvezdice {
        position: absolute;
        top: 176px;
        right: 240px;
        
    }

    #cloud1 {
        position: absolute;
        top: 176px;
        left: 1744px;
        animation: moveclouds 15s linear infinite;
    }
    #cloud2 {
        position: absolute;
        top: 166px;
        left: 206px;
        animation: moveclouds 25s linear infinite;
    }
    #cloud3 {
        position: absolute;
        top: 76px;
        left: 776px;
        animation: moveclouds 30s linear infinite;
	

    }
    .page {
  position: fixed;
  width: inherit;
}


    @keyframes moveclouds{
	0%{
		left:85%;
	}
  25% {
    left:65%;
  }
  50% {
    left:40%;
  }
  75% {
    left:20%;
  }
	100%{
		left:0%;
	}
}

@keyframes growclouds{
	0%{
		transform: scale(1);
    bottom: 0;
	}
  
  50% {
    transform: scale(1.3);
    bottom:20px;
  }
  75% {
    transform: scale(1.6);
    bottom:20px;
  }

	100%{
		transform: scale(1.3);
    bottom:40px;
	}
}

@keyframes bounce {
  0% {
    transform: translate3d(0px, 0px, 0);
    transform: scale(1);
  }
  50% {
    transform: translate3d(0px, -4px, 0);
    transform: scale(1.6);
  }
  
  100% {
    transform: translate3d(0px, 0px, 0);
    transform: scale(1);
  }
}


    /* end clouds */
</style>