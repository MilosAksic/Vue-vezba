<template>
  <div class="LogIn page">
      <div class="unutra">
          <img src="../assets/DEMO.svg" alt="Demo">
          

    <div class="login-wrapper border border-light">
    <form class="form-signin" @submit.prevent="login">
      <h2 class="form-signin-heading">Please sign in</h2>
      <div class="alert alert-danger" v-if="error">{{ error }}</div>
      <label for="inputEmail" class="sr-only">Email address</label>
      <input v-model="email" type="email"
        onfocus="this.placeholder = ''"
        onblur="this.placeholder = 'Email address'"
       id="inputEmail" class="form-control" placeholder="Email address" required autofocus>
      <label for="inputPassword" class="sr-only">Password</label>
      <input v-model="password"
          onfocus="this.placeholder = ''"
        onblur="this.placeholder = 'Password'"
         type="password" id="inputPassword" class="form-control" placeholder="Password" required>
      <button class="btn btn-lg btn-primary btn-block" type="submit">Sign in</button>
      
        
    </form>

      <!-- <router-link  to="/Users" id="nav-item2" >SIGN IN</router-link><br> -->
          
  </div>

              <p>Forgot password? 
              <router-link  to="/Password" class="nav-item"> Click here!</router-link><br>
              Or if you don’t have an account 
              <router-link  to="/Register" class="nav-item"> Click here!</router-link>
            </p>

            
      </div>
    
  </div>
</template>

<script>
export default {
  name: 'LogIn',
  data(){
    return {
      email: '',
      password: '',
      error: false
    }
  },
  methods: {
    login () {
      this.$http.post('/auth/login', { "email": this.email, 
                                        "password": this.password}  )
         .then((request) => {
           this.loginSuccessful(request);
           console.log(request);
           
         })
         
          .catch(() => this.loginFailed())
      
    },
    loginSuccessful (req) { 
          if (!req.data.access_token) {
                this.loginFailed()
                 return
                 }

           localStorage.token = req.data.access_token
           console.log(localStorage.token);
           
           this.error = false

         this.$router.replace(this.$route.query.redirect || '/Users')
      },

        loginFailed () {
          this.error = 'Login failed!'
          delete localStorage.token
}
  }
  
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

/* log in */


.login-wrapper {
  background: #fff;
  border: none;
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

/* kraj log in */
    
</style>