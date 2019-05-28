<template>
  <div class="Password page">

   <div class="unutra">
        <img src="../assets/DEMO.svg" alt="Demo">

        <div class="divPass">
            <h4>Forgot your password?</h4>
            <p>Enter the email address associated with this account. We will email you a link
with instructions on how to reset your password.</p>
        </div>
        <div class="dole">
        <input type="email" name="email" id="mail" placeholder="Enter your e-mail">
        <router-link  to="/Password2" class="nav-item">SEND</router-link>
        </div>
   </div>

  </div>
</template>

<script>
export default {
  name: 'Password',
  
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
    .Password {
      width: 100%;
      height: 1080px;
      background: url('../assets/Pozadina2.png');
      color: gray;
      display: flex;
      justify-content: center;
      align-items: center;

      
    }

    .unutra {
      width: 1186px;
      height: 754px;
      
      text-align: left;
      color: white;

    }
     .unutra img {
      width: 200px;
      height: 87px;
      margin-bottom: 57px;

    }
    .divPass{
      width: 696px;
      height: 154px;
   
      
    } 
     ::placeholder {
      color : #1FE7B6;
      font-size: 20px;
    }
    .dole{
      width: 645px;
      height: 151px;
      margin-top: 64px;

    }
    input[type=email] {
        width: 100%;
        height: 54px;
        margin-bottom: 57px;
        text-align: center;
    }
    input[type=email]:focus {
      outline: none;
    }
    h4{
      font-size: 55px;
      margin-bottom: 25px;
    }
    p {
      font-size: 20px;
    }
    .nav-item{
      width: 246px;
      height: 54px;
      color: white;
      background-color: #1FE7B6;
      padding: 15px 98px;
    }
    .nav-item:hover {
      text-decoration: none;
    }
    input[type=email], .nav-item {
      border-radius: 54px;
    }

    .page {
  position: fixed;
  width: inherit;
}
</style>