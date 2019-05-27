<template>
  <div class="hello">
        <div class="levo">
            <img src="../assets/Phone.png" alt="Phone">
          
        </div>

        <div class="desno">
          <div id="unutra">
            <h4>The Best App to Incrise</h4>
            <h4>Your Productivity</h4>

            <p>a mobile app is a computer program designed to run on a <br>
                mobile device such as phone/tablet or watch.</p>
            <div id="dole">
              <ul>

                <li>
                    <a href="https://www.apple.com/ios/app-store/" target="_blank">Get it from <br>
                      Apple store<br> </a>
                </li>
                <li>

                  <a href="https://play.google.com/store/apps?hl=en" target="_blank">
                      <div class="glavni">

                      
                      <div class="logo"><img src="../assets/play-store.png" alt="PlayStore"></div>
                      <div class="text">Get it from
                          Play store
                          </div>
                          </div>
                    </a>
                </li>
              </ul>
              
            </div>
            
          </div>
        </div>
  </div>
</template>

<script>
export default {
  name: 'HomePage',
  
}
</script>



<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
body {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
.hello {
  display: flex;
  width: 100%;
  height: 905px;
  padding-top: 50px;
  
}
.levo {
    width: 40% ;
    

}
.desno {
     width: 60%;
     text-align: right;
     align-self: center;
     align-items: center;
     align-content: center;
     /* background-color: #202646; */
     color: white
}
.desno #unutra {
  margin-right: 20px;
  width: 686px;
  height: 425px;
  
}

.glavni {
  width: 150px;
  height: 53px;
  display: flex;
  justify-content: center;
  align-items: center;
}
.text {
  width: 91px;
  height: 53px;
  font-size: 16px;
}
.logo {
  width: 30px;
  height: 30px;
  margin: 0;
  padding: 0;
  
}
a div {
  
  align-self: center;
  align-content: center;
}
.logo img {
  width: 30px;
  height: 30px;
}
.dole {

  width: 500px;
}
ul{
  display: flex;
  justify-content: flex-end;
  list-style-type: none;
  padding: 0;
  color: white;
}

li {
  display: inline-block;
  margin: 0 10px;
  padding : 20px;
  background-color: white;
  border-radius:  38px;
  width: 242px;
  height: 76px;
  font-size: 25px;
  
    }

  a {
  text-decoration: none;
  width: 100%;
  height: 100%;
  color: #202646;
  display: flex;
  /* flex-direction: row; */
  justify-content: center;
  align-items: center;
  font-size: 18px;
  
}


a:hover {
    text-decoration: none;
    color: #202646;
}
#unutra h4 {
  font-size: 46px;
  margin: 0;
  padding: 0;
} 
img {
  width: 364px; height: 745px;
  /* box-shadow: 0px 0px 5px #fff; */

}


</style>
