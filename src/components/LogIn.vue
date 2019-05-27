<template>
  <div class="LogIn">
      <div class="unutra">
          <img src="../assets/DEMO.svg" alt="Demo">
          <form action="">
            <input type="text" placeholder="Username">
            <input type="text" placeholder="Password">
            <input type="submit" value="SIGN IN"> 
            <p>Forgot password? Or if you don’t have an account 
              <router-link  to="/Password" class="nav-item">Click here!</router-link>
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
      background-color: #13253B;
      display: flex;
      justify-content: center;
      align-items: center;
   
      
    }
    .unutra {
      width: 661px;
      height: 473px;
    }
    .unutra img {
      width: 182px;
      height: 87px;
      margin-bottom: 57px;

    }
    p {
      color:white;
      font-size: 15px;
      
    }
    .nav-item {
      color: #1FE7B6;

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
    input[type=submit] {
      width: 248px;
      height: 54px;
      margin-top: 43px;
      margin-bottom: 38px;
      color:white;
      background-color: #1FE7B6;
      border: none;
      font-size: 20px;
    }
    input[type=submit], input[type=text] {
      border-radius: 54px;

    }

    
</style>