<template>
  <div class="Register page">

      <div class="unutra">
          <img src="../assets/DEMO.svg" alt="Demo" class="logo">
          <!-- <input type="text" placeholder="Name">
          <input type="text" placeholder="Organization">
          <input type="email" placeholder="E-Mail Adress">
          <input type="text" placeholder="Phone Number" id="phone">  
          <router-link  to="/RegistrationSucces" class="nav-item">SUBMIT</router-link> -->
<div class="login-wrapper border border-light">
           <form class="form-signin" @submit.prevent="signup">
      <h2 class="form-signin-heading">Please Sign Up</h2>
      <label for="inputEmail" class="sr-only">Name</label>
      <input v-model="ime" type="text" id="inputName" class="form-control" placeholder="Name" required autofocus>
      <label for="inputEmail" class="sr-only">Email address</label>
      <input v-model="email" type="email" id="inputEmail" class="form-control" placeholder="Email address" required autofocus>
      <label for="inputPassword" class="sr-only">Password</label>
      <input v-model="password" type="password" id="inputPassword" class="form-control" placeholder="Password" required>

      <label for="inputPassword" class="sr-only"> Repeat Password</label>
      <input  v-model="confirmedPassword" type="password" id="repeatPassword" class="form-control" placeholder="Repeat password" required>
      <button class="btn btn-lg btn-primary btn-block" type="submit">Register</button>
      
    </form>

</div>

      </div>
    
  </div>
</template>

<script>
export default {
  name: 'Register',
  data(){
    return{
      ime:'',
      email:'',
      password:'',
      confirmedPassword:''

    }
  }, 
  methods: {
    signup (){
      this.$http.post('/auth/signup', { "name": this.ime,
                                        "email":this.email, 
                                        "password": this.password,
                                        "password_confirmation": this.confirmedPassword})
         .then(request => this.signupSuccessful(request))
          .catch(() => this.signupFailed())
     
    }, 
    signupSuccessful () {
          
         this.$router.replace(this.$route.query.redirect || '/RegistrationSucces')
      },

        signupFailed () {
          this.error = 'Sign Up failed!'
          //  delete localStorage.token
}
  }
  
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

/* sign up */

#inputName ,#inputEmail {
  width: 100%;
   margin-bottom: 10px;
}
#inputEmail, #inputPassword,#repeatPassword  {
  margin-bottom: 10px;
  border-radius : 54px;
  /* border : 1px solid gray; */
}
#inputPassword,#repeatPassword {
  text-align: center;
}
.login-wrapper {
  background: #fff;
  width: 70%;
  margin: 12% auto;
}

.form-signin {
  max-width: 330px;
  padding: 10% 15px;
  margin: 0 auto;
}
.form-signin .form-signin-heading,
.form-signin .checkbox {
  margin-bottom: 10px;
}
.form-signin .checkbox {
  font-weight: normal;
}
.form-signin .form-control {
  position: relative;
  height: auto;
  -webkit-box-sizing: border-box;
          box-sizing: border-box;
  padding: 10px;
  font-size: 16px;
}
.form-signin .form-control:focus {
  z-index: 2;
}
.form-signin input[type="email"] {
  margin-bottom: -1px;
  border-bottom-right-radius: 0;
  border-bottom-left-radius: 0;
}
.form-signin input[type="password"] {
  margin-bottom: 10px;
  border-top-left-radius: 0;
  border-top-right-radius: 0;
}
/* kraj  */
    
    
    
</style>