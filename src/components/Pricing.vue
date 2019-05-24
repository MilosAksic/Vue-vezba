<template>
  <div class="pricing">
    <div class="main-div">
        <div class="gore">
            <h4>Pricing Plan</h4>
            <p>Writers and stars of Veep have responded incredulously to the news an Australian politician 
required preinstalled stitches way  email client, calendar, mapping program.</p>
        </div>

        <div class="dole">
          <div class="holder">
           <div class="tab">
             
             <div class="inside-tab">
               
              <h4>Basic</h4>
             <h3>$00</h3>
             <h5>Limited acces</h5>
             <br>
             <p>100 MB Disk Space</p>
             <p>2 Sudbo mains</p>
             <p>5 Email Accounts</p>
             <p>No Licence</p>
             <p class="para">No Phone & Mail Support</p>
             <a href="#">Purchase</a>
            </div>
             
             
           </div>
           </div>
           <div class="holder">
           <div class="tab">

             <div class="inside-tab">
               
              <h4>Proffesional</h4>
             <h3>$12</h3>
             <h5>Limited acces</h5>
             <br>
             <p>100 MB Disk Space</p>
             <p>2 Sudbo mains</p>
             <p>5 Email Accounts</p>
             <p>1 Year Licence</p>
             <p class="para">No Phone & Mail Support</p>
             <a href="#">Purchase</a>
             </div>

           </div>
           </div>
           <div class="holder">
           <div class="tab">
              <div class="inside-tab">
              <h4>Business</h4>
             <h3>$22</h3>
             <h5>Limited acces</h5>
             <br>
             <p>100 MB Disk Space</p>
             <p>2 Sudbo mains</p>
             <p>5 Email Accounts</p>
             <p>No Licence</p>
             <p class="para">No Phone & Mail Support</p>
             <a href="#">Purchase</a>
             </div>
           </div>
           </div>
        </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Pricing',
  
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
body {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
    .pricing {
      width: 100%;
      height: 966px;
      background-color: #F8F6F6; 
      display: flex;
      justify-content: center;
      text-align: center;
    }
    .main-div {
      width: 1300px;
      height: 866px;
      align-self: center;
    }
    .gore {
      width:920px;
      height: 150px;
      margin: 80px auto;

    }
    .gore p {
      margin-top: 40px;
      font-size: 20px;
    }
    .gore h4 {
      font-size: 36px;
      margin: 0;
    }
    .dole {
      width: 1270px;
      height: 571px;
      display: flex;
      justify-content: space-evenly;
      margin: 0 auto;
      
    }
    .tab {
      /* width: 356px;
      height: 507px; */
      width: 100%;
      height: 100%;
      border: solid 2px #222847;
      border-radius: 20px;
      display: flex;
      align-items: center;
      justify-content: center;
      transition: 0.6s;
    }
    .inside-tab {
      width: 255px;
      height: 448px;
      padding: 0;
      
    }
    .inside-tab h4 {
      font-size: 24px;
      margin: 0;
    }
    .inside-tab h3 {
      font-size: 36px;
      margin: 0;
    }
    .inside-tab h5 {
      font-size: 18px;
      margin-bottom: 0;
    }
    .inside-tab p {
      font-size: 14px;
    }
    .inside-tab a {
      margin-top: 100px;
      text-decoration: none;
      color: #202646;
      font-size: 18px;
      border: 2px solid #202646;
      border-radius: 27px;
      padding: 15px 56px;
    }
    .para {
      margin-bottom: 40px;
    }
     .tab:hover {
    cursor: pointer;
    border: none;
    margin: 0 auto;
    border-radius: initial;
    color: #f7f6f6;
    background-color: #202646;
    transform: scale(1.1);

    } 

     .tab:hover a {
      color:#3DC99A;
      background: white;
      border: 1px solid white;
    } 

    .holder {
      width: 356px;
      height: 507px;
    }

    

</style>