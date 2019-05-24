<template>
  <div class="contact">
      <div class="clients">
          <div class="unutra">
              
          </div>
      </div>
  <div class="hello-contact">
        <div class="inside-div">
            <div class="gornji-deo">
                <h4>Say Hello To Us!</h4>
                <hr>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore. et dolore magna aliqua..</p>
            </div>

            <div class="donji-deo">
              <div class="levo">
                  <div class="unutraLevo">
                      <div class="inside">
                        <div class="left">
                          
                        </div>
                        <div class="right">
                            <p class="bold">Location:</p>
                            <p>Admiral Geprata 14</p>
                        </div>
                      </div>
                      <div class="inside">
                        <div class="left">
                          
                        </div>
                        <div class="right">
                            <p class="bold">Phone:</p>
                            <p>+1234321321</p>
                        </div>
                      </div>
                      <div class="inside">
                        <div class="left">
                          
                        </div>
                        <div class="right">
                            <p class="bold">Website:</p>
                            <p>websitename@mail.com</p>
                        </div>
                      </div>
                  </div>
              </div>
              <div class="desno">
                <form action="">
                    <input type="text" placeholder="Name">
                    <input type="email" placeholder="Email">
                    <textarea name="textArea" id="textArea" cols="30" rows="10" placeholder="Your Massage"></textarea>
                    <input type="submit" value="Send Message">
                </form>
              </div>
            </div>
        </div>
  </div>

  <div class="mapa">
      <!-- <iframe height="400" width="1920" border="0" marginwidth="0" marginheight="0" src="https://www.mapquest.com/embed/search/results?zoom=16&query=admirala%20geprata%2014%20beograd&boundingBox=44.81105503044341,20.452487468719482,44.803366994708746,20.474932193756104&page=0&center=44.807211140660264,20.463709831237793&zoom=4&maptype=map"></iframe> -->
      <iframe  scrolling="no" height="400" width="1920" border="0" marginwidth="0" marginheight="0" src="https://www.mapquestapi.com/staticmap/v5/map?key=ymIA6pFY4OugiGRDXwho3JzeMZTU1d74&center=BELGRADE,SR&zoom=14&type=map&size=1920,400"></iframe>
  </div>

  <!-- <div class="footer">


  </div> -->

  <!-- bootstrap -->

  <footer>
            <div class="container pt-5">
                <div class="row text-center mt-5">
                    <div class="footerText col-lg-4 ">Copyright &copy; 2018 DEMO, All rights Reserved</div>
                    <div class="col-lg-5"></div>
                    <div class="medias col-lg-3 ">
                        <div class="row">
                            <div class="media facebook col-lg-2"><img src="../assets/fb.png" alt="facebook icon"></div>
                            <div class="media twitter col-lg-2"><img src="../assets/tw.png" alt="twitter icon"></div>
                            <div class="media pinterest col-lg-8"><img src="../assets/pin.png" alt="pinterest icon"></div>
                        </div>

                    </div>
                </div>

            </div>


        </footer>

  </div>

  
</template>

<script>
export default {
  name: 'Contact',
  
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    .contact  {
      width: 100%;
      height: 2136px;
      background-color: aqua;
      
      justify-content: center;
      
    }
    .clients {
      width: 100%;
      height: 671px;
      background-color: #13253B;
      display: flex;
      justify-content: center;
      align-items: center;
    }
    .unutra {
      width: 1170px;
      height: 434px;
      background-color: aqua;
    }
    .hello-contact{
      width: 100%;
      height: 800px;
      background-color: #F7F7F7;
      display: flex;
      align-items: center;
     justify-content: center;
    }
    .mapa {
      width: 100%;
      height: 400px;
      background-color: blueviolet;
    }
    footer {
      width: 100%;
      height: 270px;
      background-color: #13253B;
      color: white;
    }
    iframe {
      overflow: hidden;
    }

    .inside-div{
      width: 1134px;
      height: 517px;
     
    }
    .gornji-deo {
      text-align: center;
      width: 538px;
      height: 142px;
      margin: 0 auto;
      color:black;
      margin-bottom: 47px;
    }
    hr {
      margin: 10px auto;
      width: 69px;
      border: 3px solid black;
      
    }
    .gornji-deo h4 {
      font-size: 39px;
    }
    .gornji-deo p {
      font-size: 15px;
    }
    .donji-deo {
      width: 100%;
      height: 400px;
      
      display: flex;
      justify-content: space-between; 
    }

    .levo {
      width: 378px;
      height: 312px;
      background-color: white;
      color: black;
      text-align: left;
      font-size: 17px;
    }
    .bold {
      font-weight: 800;
    }
    .desno {
      width: 741px;
      height: 400px;
      background-color: pink;
    }
    .unutraLevo {
      width: 260px;
      height: 242px;
      margin: 26px 125px 44px 22px;
      
    }
    .inside{
      width: 100%;
      height: 33%;
      
      margin: 2px;
      display: flex;

    }
    .left {
      height: 100%;
      width: 20%;
      
    }
    .right {
      height: 100%;
      width: 80%;
      
    }
    form {
      width: 100%;
      height: 100%;
      background-color: #F7F7F7;;
      position: relative;
    }
    input[type=text],input[type=email] , #textArea {
      margin-bottom: 27px;
      border:none;
    }
    input[type=text],input[type=email]  {
      width: 100%;
      height: 47px;
    } 
    #textArea {
      width: 100%;
      height: 162px;
    }
    input[type=submit] {
      width: 157px;
      height: 44px;
      background-color: #1FE7B6;
      color: white;
      padding: 10px 21px 13px 19px;
      position: absolute;
      bottom: 0;
      left : 0;

    }
    

</style>