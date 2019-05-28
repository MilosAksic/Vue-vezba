<template>
  <div class="Password2 page">
    <img src="../assets/DEMO.svg" alt="Demo" class="logo">
    <div class="unutra">
        <img src="../assets/PostaEfekat.png" alt="Posta">
        <div class="dole">
              <h4>New Password Is Sent to You</h4>
              <p>Please do check it, and continue with using our service</p>
              <router-link  to="/login" class="nav-item">SIGN IN</router-link>
        </div>

         
    </div>  
  </div>
</template>

<script>
export default {  
  name: 'Password2',
  
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    .Password2 {
      width: 100%;
      height: 1080px;
      color: gray;
      display: flex;
      justify-content: center;
      align-items: center;
      background: url('../assets/Pozadina2.png');
      color: white;
      
    }
    .Password2 .logo {
      position: absolute;
      width: 200px;
      height: 87px;
      top: 73px;
      left: 390px;
    }
    .unutra {
      width: 775px;
      height: 488px;
      
      text-align: center;
    }
    .dole {
      width: 775px;
      height: 127px;
      margin-top:30px;

    }
    .nav-item{
      width: 246px;
      height: 54px;
      color: white;
      background-color: #1FE7B6;
      padding: 15px 98px;
      border-radius: 54px;
      margin-top: 43px;
    }
    .nav-item:hover {
      text-decoration: none;
    }
    h4{
      font-size: 55px;
       margin-bottom: 25px;
      
    }
    p {
      font-size: 20px;
      margin-bottom: 43px;
    }
    .page {
  position: fixed;
  width: inherit;
}
    
</style>