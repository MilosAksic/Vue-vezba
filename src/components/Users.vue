<template>
  <div class="Users page">
      <!-- <div id="modal-pozadina2" class="overlay">

        <div id="modalEdit">
                <span  id ="close2" class="close">&times;</span>
                    <h2>Edit user</h2>
                    <h3>Neki tekst..</h3>
            
        </div>

      </div>

      <div id="modal-pozadina3" class="overlay">

        <div id="modalDelete">
                <span  id ="close3" class="close">&times;</span>
                    <h2>Delete user</h2>
                    <h3>Neki tekst..</h3>
            
        </div>

      </div> -->


    <div id="modal-pozadina" class="overlay">
        <div id="modal">
                <span  id ="close" class="close">&times;</span>
                    <!-- forma -->
                         <form class="form-signin" @submit.prevent="signup">
      <h2 class="form-signin-heading">Add user</h2>
      <label for="inputEmail" class="sr-only">Name</label>
      <input v-model="ime" type="text" id="inputName" class="form-control" placeholder="Name" required autofocus>
      <label for="inputEmail" class="sr-only">Email address</label>
      <input v-model="email" type="email" id="inputEmail" class="form-control" placeholder="Email address" required autofocus>
      <label for="inputPassword" class="sr-only">Password</label>
      <input v-model="password" type="password" id="inputPassword" class="form-control" placeholder="Password" required>

      <label for="inputPassword" class="sr-only"> Repeat Password</label>
      <input  v-model="confirmedPassword" type="password" id="repeatPassword" class="form-control" placeholder="Repeat password" required>
      <button class="btn btn-lg btn-primary btn-block" type="submit">Add user</button>
      
    </form>
                    <!-- kraj forme -->
            
        </div>

        
        
    </div>


  <!-- kraj modala -->
    
    <img src="../assets/DEMO.svg" alt="Demo">
    <button v-on:click="deleteUser(57)">Delete user 52</button>
    <div class="desno">
         <!--  -->
        <router-link to="/Messages" class="message-nav">Messages</router-link>
        
        <button id="uploadButton" type="button">Upload User</button>
        <h4>Upload Users</h4>
        <p>If you would like to seed your mailing with names of people
           within your organization, add their names here</p>
        <div class="unutra">
              <div class="top">
                    <div class="inside">
                          <div class="kartice listName"  > 
                            <p>List name</p>
                          </div>
                          <div class="kartice recepiant"  >
                            <p>#Recepiant</p> 
                          </div>
                          <div class="kartice uploadedBy"  >
                            <p>Email</p>
                          </div>
                          <div class="kartice uploadedDate">
                            <p>Uploaded Date</p>
                          </div>
                    </div>
              </div>
              <div class="bottom">
                    <div class="Drzac-kartica" >
                     <div  v-for="(user, index) in users" :key="`user-${index}`" class="inside-kartica">
                        
                          <div class="kartice listName"  > 
                            <p>{{user.name}}</p>
                          </div>
                          <div class="kartice recepiant"  >
                            <p>{{user.id}}</p>
                          </div>
                          <div class="kartice uploadedBy"  >
                            <p>{{user.email}}</p>
                          </div>
                          <div class="kartice uploadedDate">
                            <p>{{user.created_at}}</p>
                          </div>

                          <!-- <button class="dugme">. . .</button> -->
                            <!-- dropdown -->

                                  <div class="dropdown">
                                    <button  class="dropbtn">...</button>
                                    <div id="myDropdown" class="dropdown-content">
                                      
                                      <button class="edit">Edit User</button>
                                      <button class="delete">Delete User</button>
                                      
                                    </div>
                                  </div>

                            <!-- end dropdown -->
                          <div class="popUp">
                                 <button>
                                    Edit
                                  </button> 

                                  <button>
                                    Delete
                                  </button> 
                          </div>
                       </div>
                      
                      </div>
                    
              </div>

              <div class="skroz-dole">
                <!-- paginacija -->

                <div class="containernovi">
                <span>
                    <div class="index">
                      <span v-on:click="niz(1)">1 </span></div>
                    <div class="index">
                      <span v-on:click="niz(2)">2</span></div>
                    <div class="index">
                      <span v-on:click="niz(3)">3</span>
                    </div>
                    <div class="index">
                      <span v-on:click="niz(4)">4</span>
                    </div>
                    <div class="index">
                      <span v-on:click="niz(5)">5</span>
                    </div>
                    <div class="index">
                      <span v-on:click="niz(6)">6</span>
                    </div>
                    <div class="index">
                      <span v-on:click="niz(7)">7</span>
                    </div>
                    <div class="index">
                      <span v-on:click="niz(8)">8</span>
                    </div>
                    <div class="index">
                      <span v-on:click="niz(9)">9</span>
                    </div>
                    <div class="index">
                      <span v-on:click="niz(10)">10</span>
                    </div>               
                    <div class="index">
                      <span v-on:click="niz(11)">11</span>
                    </div>
                    <div class="index">
                      <span v-on:click="niz(12)">12</span>
                    </div>
                    <div class="index">
                      <span v-on:click="niz(13)">13</span>
                    </div>
                </span>   
                
                
                <svg viewBox="0 0 100 100">
                  <path
                        d="m 7.1428558,49.999998 c -1e-7,-23.669348 19.1877962,-42.8571447 42.8571442,-42.8571446 23.669347,0 42.857144,19.1877966 42.857144,42.8571446" />
                </svg>
                <svg viewBox="0 0 100 100">
                  <path
                        d="m 7.1428558,49.999998 c -1e-7,23.669347 19.1877962,42.857144 42.8571442,42.857144 23.669347,0 42.857144,-19.187797 42.857144,-42.857144" />
                </svg>
              </div>



              </div>

        </div>
    </div>

    

  </div>
</template>

<script>
import axios from 'axios';
import { log } from 'util';
// import { log } from 'util';
// import { POINT_CONVERSION_COMPRESSED } from 'constants';

export default {
  name: 'Users',
  data () {
    return {
      users: [],
      perPage: 5,
      currentPage: 1,
      userID:"",

      ime:'',
      email:'',
      password:'',
      confirmedPassword:''



    }
  },
  mounted(){

    axios
    .get(`https://proxy-requests.herokuapp.com/http://comtrade.sytes.net/api/users?page=1`)
    .then(response => (this.users = response.data.data.data))
    .then (()=>{
        // let korisnici = this.users;
        // console.log(korisnici);
        
        const buttons = document.querySelectorAll('.dropbtn')
        const dropdowns = document.querySelectorAll('.dropdown-content')
        const Edits = document.querySelectorAll('.edit')
        const Deletes = document.querySelectorAll('.delete')
        


          
        // Close the dropdown if the user clicks outside of it
        for (let index = 0; index < buttons.length; index++) {
          
          buttons[index].addEventListener('click', ()=>{
            dropdowns[index].classList.toggle("show");
          })
  
}           
 for (let index = 0; index < Edits.length; index++) {
          
          Edits[index].addEventListener('click', ()=>{
            console.log("radi edit"  + index);
            console.log(korisnici[index]);
          })
  
}           

 for (let index = 0; index < Deletes.length; index++) {
          
          Deletes[index].addEventListener('click', ()=>{
            console.log("radi delete" +index);
            let korisnici = this.users;
            let nekiId = korisnici[index].id
            console.log(korisnici[index]);
            
            console.log(nekiId);
            
            this.deleteUser(nekiId);
          })
  
}           


    })

    //dropdown

//     function myFunction() {
//   document.getElementById("myDropdown").classList.toggle("show");
// }

window.onclick = function(event) {
  if (!event.target.matches('.dropbtn')) {
    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}
    // paginacija
    const c = document.querySelector('.containernovi')
const indexs = Array.from(document.querySelectorAll('.index'))
let cur = -1
indexs.forEach((index, i) => {
  index.addEventListener('click', () => {
    // clear
    
    c.className = 'containernovi'
    void c.offsetWidth; // Reflow
    c.classList.add('open')
    c.classList.add(`i${i + 1}`)
    if (cur > i) {
      c.classList.add('flip')
    }
    cur = i
  })
})

    
var modal = document.getElementById('modal-pozadina');
var span = document.getElementById("close");

document.getElementById("uploadButton").addEventListener('click', ()=>{
    modal.style.display = "block";
})



span.onclick = function() {
  modal.style.display = "none";
}


window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
 
}

      

  

  },
  methods: {
    niz: function (pageNumber) {
      axios
    .get(`https://proxy-requests.herokuapp.com/http://comtrade.sytes.net/api/users?page= ${pageNumber}` )
    .then(response => (this.users = response.data.data.data))
    },

    deleteUser: function (UserNumber) {
          this.$http.delete(`/users/${UserNumber}`, {Authorization: localStorage.token})
          
          
    },

    myFunction: function(){
            document.getElementById("myDropdown").classList.toggle("show");

    },
    changeActive: function(){
      // const linkovi = document.querySelectorAll('.pagnation .page-link') 
      
    
      this.classList.toggle("active");

    }, 


    signup (){
      this.$http.post('/auth/signup', { "name": this.ime,
                                        "email":this.email, 
                                        "password": this.password,
                                        "password_confirmation": this.confirmedPassword})
         .then(request => this.signupSuccessful(request))
          .catch(() => this.signupFailed())
     
    }, 
    signupSuccessful () {
          
         
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
@import url('https://rsms.me/inter/inter-ui.css');

.containernovi {
  display: inline-block;
  position: relative;
}
.index {

  display: inline;
  margin-right: 30px;
  padding: 5px;
  user-select: none;
  -moz-user-select: none;
}
.index span:hover {
    cursor: pointer;
}
.index:last-child {
  margin: 0;
}
svg {
  left: -13px;
  position: absolute;
  top: -11px;
  transition: transform 500ms;
  width: 46px;
}
path {
  fill:none;
  stroke:#2FB468;
  stroke-dasharray: 150 150;
  stroke-width:15;
}
.containernovi.open:not(.flip) path {
  animation: OpenRight 500ms;
}
.containernovi.open.flip path {
  animation: OpenLeft 500ms;
}
.containernovi.i1 svg {
  transform: translateX(0);
}
.containernovi.i2 svg {
  transform: translateX(50px);
}
.containernovi.i3 svg {
  transform: translateX(102px);
}
.containernovi.i4 svg {
  transform: translateX(148px);
}
.containernovi.i5 svg {
  transform: translateX(196px);
}
.containernovi.i6 svg {
    transform: translateX(244px);
  }
  .containernovi.i7 svg {
    transform: translateX(290px);
  }
  .containernovi.i8 svg {
    transform: translateX(340px);
  }
  .containernovi.i9 svg {
    transform: translateX(388px);
  }
  .containernovi.i10 svg {
    transform: translateX(443px);
  }
  .containernovi.i11 svg {
    transform: translateX(492px);
  }
  .containernovi.i12 svg {
    transform: translateX(542px);
  }
  .containernovi.i13 svg {
    transform: translateX(595px);
  }
@keyframes OpenRight {
  25% { stroke-dasharray: 100 150; }
  60% { stroke-dasharray: 100 150; }
  100% { stroke-dasharray: 150 150; }
}
@keyframes OpenLeft {
  25% { stroke-dashoffset: -50px; }
  60% { stroke-dashoffset: -50px; }
  100% { stroke-dashoffset: 0; }
}
/* kraj paginacije */
    .Users {
      border: 1px solid black;
      width: 100%;
      height: 1080px;
      color: black;
      display: flex;
      justify-content: center;
      background-color: #202646;
      
    }
    .page {
  position: fixed;
  width: inherit;
}
img {
  width: 200px;
  height: 87px;
  position: absolute;
  top:16px;
  left:96px;
}
.desno {
    background-color: white;
    width: 1540px;
    height: 976px;
    position: absolute;
    bottom: 0;
    right: 0;
    display: flex;
      justify-content: center;
      align-items: center;
      text-align: left;

}
.unutra {
  width: 1380px;
  height: 679px;
  box-shadow: 2px 3px 2px 2px rgba(194,192,194,1);
}
h4,p {
  position: absolute;
  
}

h4 {
  top: 71px;
  left: 82px  ;

}
p {
  
  top: 108px;
  left: 82px  ;


}
#uploadButton {
  position: absolute;
  top: 87px;
  right: 94px;
  width: 137px;
  height: 38px;
  background-color: white;
  border-radius: 38px;
  border: none;
  color: aqua;
  box-shadow: 2px 3px 1px 1px rgba(194,192,194,1);
  cursor: pointer;
}
#uploadButton:hover , #uploadButton:active, #uploadButton:leave {
  outline: none;
}
.top{
    width: 100%;
    height: 69px;
   
    display: flex;
    justify-content: center;
    align-items: center;
    /* position: relative; */


}
.top .inside {
  text-align: left;
  width: 1220px;
  height: 100%;
  border-bottom: 1px solid #E8E9EA;
  display: flex;
  /* position: absolute;
  top: 0;
  left: 0; */

}

.inside-kartica {
   text-align: left;
  width: 1220px;
  height: 70px;
  border-bottom: 1px solid #E8E9EA;
  display: flex;
 
}
#index span {
  z-index: 30;
  font-size: 25px;
  
}
#index span:hover {
  cursor:pointer;
}
.bottom {
  width: 1220px;
  height: 528px;

  margin: 0 auto;
}

.kartice {
  height: 100%;
  position: relative;
  /* display: flex;
  justify-content: center; */
}

.listName {
  width: 440px;
}
.recepiant {
    width: 263px;

}
.uploadedBy {
    width: 323px;

}
.uploadedDate {
    width: 208px;

}

.kartice p {
  position: absolute;
  top: 20px;
  left: 0;
}
.skroz-dole {
  width: 1220px;
  height: 61px;

  margin: 0 auto;

}

.Drzac-kartica {
  width: 1230px;
  height: 518px;
  position: relative;
  
}
.dugme{
  position: absolute;
  right: 0;
  width: 36px;
  height: 25px;
  background-color: #F7F8F9;
  text-align:center;
  
  border: none;
  font-size: 20px;
  margin-top: 15px;

}
.dugme:active {
  outline: none;
}
.popUp {
  width: 100px;
  height: 90px;
  position: absolute;
  background: pink;
  right:-120px;
  display:none;

}

/* dropdown */

.dropbtn {
  background-color: #3498DB;
  color: white;
  padding: 16px;
  font-size: 16px;
  border: none;
  cursor: pointer;
  width:40px;
  height: 40px;
}

.dropbtn:hover, .dropbtn:focus {
  background-color: #2980B9;
}

.dropdown {
  position: relative;
  display: inline-block;
}

.dropdown-content {
  display: none;
  position: absolute;
  background-color: #f1f1f1;
  min-width: 160px;
  overflow: auto;
  box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
  z-index: 1;
}

.dropdown-content button {
  color: black;
  padding: 12px 16px;
  text-decoration: none;
  display: block;
}

.dropdown button:hover {background-color: #ddd;}

.show {display: block;}

.message-nav {
      position: absolute;
      top: -70px;
      right: 250px;
     
      color:white;
      background-color: #1FE7B6;
      border: none;
      font-size: 20px;
      padding: 10px 30px;
      border-radius:  50px;
    }
.message-nav:hover {
      text-decoration: none;
}
/* modal  */

.overlay{   
    display: none; 
  position: fixed; 
  z-index: 1; 
  overflow: auto; 
  padding-top: 100px; 
  left: 0;
  top: 0;
  width: 100%; 
  height: 100%;  
  background-color: rgba(0,0,0,0.5);

}
.centar {
    margin: 0 auto;
    width: 400px;
    height: 200px;
    margin-top: 200px;
}

#modal , #modalDelete, #modalEdit {
    background-color: #fefefe;
    margin: auto;
    z-index: 3; 
    width: 680px;
    height: 440px;
    padding: 20px;
    border: 3px solid #888;
    border-radius: 20px;
}

.close {
    color: #aaaaaa;
    float: right;
    font-size: 28px;
    font-weight: bold;
  }
  
  .close:hover,
  .close:focus {
    color: #000;
    text-decoration: none;
    cursor: pointer;
  }

/* kraj modala */


/* forma */


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
/* kraj forme */
</style>