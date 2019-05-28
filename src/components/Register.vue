<template>
  <div class="Register page">

      <div class="unutra">
          <img src="../assets/DEMO.svg" alt="Demo" class="logo">
          <input type="text" placeholder="Name">
          <input type="text" placeholder="Organization">
          <input type="email" placeholder="E-Mail Adress">
          <input type="text" placeholder="Phone Number" id="phone">  
          <router-link  to="/RegistrationSucces" class="nav-item">SUBMIT</router-link>
      </div>
    
  </div>
</template>

<script>
export default {
  name: 'Register',
  
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    .Register {
      width: 100%;
      height: 1080px;
      background: url('../assets/Pozadina2.png');
      display: flex;
      justify-content: center;
      align-items: center;
      
    }
    .unutra {
      text-align: center;
      width: 661px;
      height: 564px;
     

    }
     .unutra img {
      width: 200px;
      height: 87px;
      margin-bottom: 57px;

    }
    input[type=email], input[type=text] {
      width:643px;
      height: 54px;
      margin-bottom: 17px;
      color: #1FE7B6;
      text-align: center;
      font-size: 20px;
      border-radius: 54px;
    }
    ::placeholder {
      color : #1FE7B6;
      font-size: 20px;
    }
    #phone {
      margin-bottom: 50px;
    }

    .nav-item{
      width: 246px;
      height: 54px;
      color: white;
      background-color: #1FE7B6;
      padding: 15px 98px;
      border-radius: 54px;
      margin-top: 83px;
      font-size: 20px;
      font-weight: 700;
    }
    .nav-item:hover {
      text-decoration: none;
    }
    .page {
  position: fixed;
  width: inherit;
}
    
    
    
</style>