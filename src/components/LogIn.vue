<template>
  <div class="LogIn page">
      <div class="unutra">
          <img src="../assets/DEMO.svg" alt="Demo">
          <form action="">
            <input type="text" placeholder="Username">
            <input type="text" placeholder="Password" id="pass">
            <!-- <input type="submit" value="SIGN IN">  -->
             <router-link  to="/Users" id="nav-item2" >SIGN IN</router-link><br>
            <p>Forgot password? 
              <router-link  to="/Password" class="nav-item"> Click here!</router-link><br>
              Or if you don’t have an account 
              <router-link  to="/Register" class="nav-item"> Click here!</router-link>
            </p>
          </form>
      </div>
    
  </div>
</template>

<script>
export default {
  name: 'LogIn',
  
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    .LogIn {
      width: 100%;
      height: 1080px;
      text-align: center;
      background: url('../assets/Pozadina2.png');
      display: flex;
      justify-content: center;
      align-items: center;
   
      
    }
    .unutra {
      width: 661px;
      height: 473px;
    }
    .unutra img {
      width: 200px;
      height: 87px;
      margin-bottom: 57px;

    }
    p {
      color:white;
      font-size: 15px;
      margin-top: 40px;
      
    }
    .nav-item {
      color: #1FE7B6;
      margin-bottom: 20px;

    }
    input[type=text] {
      width: 643px;
      height: 54px;
      margin-bottom: 17px;
      color: #1FE7B6;
      text-align: center;
      
    }
    ::placeholder {
      color : #1FE7B6;
      font-size: 20px;
    }
    #pass {
      margin-bottom: 50px;
    }
    #nav-item2 {
      
      margin-top: 43px;
      margin-bottom: 38px;
      color:white;
      background-color: #1FE7B6;
      border: none;
      font-size: 20px;
      padding: 20px 50px;
    }
    #nav-item2  , input[type=text] {
      border-radius: 54px;

    }
    .page {
  position: fixed;
  width: inherit;
}

    
</style>