<template>
  <div class="Users page">
     


    <div id="modal-pozadina" class="overlay">
        <div id="modal">
                <span  id ="close" class="close">&times;</span>
                    <!-- forma -->
        <form class="form-signin" @submit.prevent="signup" id="addUsers">
      <h2 class="form-signin-heading">Add user</h2>
      <label for="inputEmail" class="sr-only">Name</label>
      <input 
            v-model="ime"
            type="text" 
            id="inputName" 
            class="form-control" 
            placeholder="Name"
            required 
            autofocus>
      <label for="inputEmail" 
            class="sr-only">Email address</label>
      <input 
            v-model="email" 
            type="email" 
            id="inputEmail" 
            class="form-control" 
            placeholder="Email address"
            required
            autofocus>
      <label for="inputPassword"
             class="sr-only">Password</label>
      <input
              v-model="password" 
              type="password"
              id="inputPassword" 
              class="form-control" 
              placeholder="Password" required>

      <label for="inputPassword"
             class="sr-only"> Repeat Password</label>
      <input  
              v-model="confirmedPassword" 
              type="password"
              id="repeatPassword"
              class="form-control"
              placeholder="Repeat password"
              required>
      
      <button class="btn btn-lg btn-primary btn-block"      type="submit">Add user</button>
      
    </form>
                    <!-- kraj forme -->

        <div class="editUser" id='editUsers'>
            <h3>Edit user</h3>
            <form action=""
                  @submit.prevent="editUser(currrentUser)" 
                  id="editUsers">
                    
                    <h3>ID : <span id="id"> 1 </span></h3>
                    <label for="name">Name: </label>
                    <input  v-model="ime"
                            type="text"
                            placeholder="Name"
                            name="name">
                    <br>
                    <label for="email">Email: </label>
                    <input  v-model="email" 
                            type="email"
                            placeholder="Email" 
                            name="email">
                    
                    <button class="btn btn-lg btn-primary btn-block" 
                            type="submit">Edit User</button>
                </form>
        </div>

        <div class="deleteUsers" id="DeleteUsers">
          <h3>Are you sure you want <br>to delete user with ID <span id="id2">{{currrentUser}}</span> </h3>
          <button id="Yes">Yes</button>
          <button id="No">No</button>
        </div>
            
        </div>

        
        
    </div>


  <!-- kraj modala -->
    
    <img src="../assets/DEMO.svg" alt="Demo">
    
    <div class="desno">
      
         <!--  -->
        <router-link to="/Messages" class="message-nav">Messages</router-link>
        <button id="logout" @click="logOut">Log out</button>
        
        <button id="uploadButton" type="button">Upload User</button>
        <h4>Upload Users</h4>
        <p>If you would like to seed your mailing with names of people
           within your organization, add their names here</p>
        <div class="unutra">
              <div class="top">
                    <div class="inside">

                            <div class="kartice recepiant"  >
                            <p>#ID</p> 
                          </div>
                          <div class="kartice listName"  > 
                            <p>List name</p>
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

                            <div class="kartice recepiant"  >
                            <p>{{user.id}}</p>
                          </div>
                          <div class="kartice listName"  > 
                            <p>{{user.name}}</p>
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
                                      <button class="dropbtn btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                        ...
                                      </button>
                                      <div class="dropdown-menu" aria-labelledby="dropdownMenuButton dropdown-content">
                                        <button class="dropdown-item edit" href="#">Edit</button>
                                        <button class="dropdown-item delete" href="#">Delete</button>
                                        
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
               

                
            <nav>
              <ul class="pagination">
                <li class="page-item">
                  <a class="page-link" href="#/Users" aria-label="Previous" v-on:click="nizManje">
                    <span aria-hidden="true">&lt;</span>
                    <span class="sr-only" id="previous">Previous</span>
                  </a>
                </li>
                <li
                  v-for="i in lastPage"
                  :key="i"
                  class="page-item"
                  v-on:click="niz(i)"
                  @click="activate(i)"
                  :class="{ active : active_el == i}"
                >
                  <a class="page-link" href="#/Users">{{i}}</a>
                </li>

                <li class="page-item">
                  <a class="page-link" href="#/Users" aria-label="Next" v-on:click="nizVise">
                    <span aria-hidden="true">&gt;</span>
                    <span class="sr-only" id="next">Next</span>
                  </a>
                </li>
              </ul>
            </nav>
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
      confirmedPassword:'',

      lastPage:'',

      currrentUser:'',

      active_el: 0,
      active_elColor: "#202646",
      currentPage: "",

    }
  },
  mounted(){

    axios
    .get(`https://proxy-requests.herokuapp.com/http://comtrade.sytes.net/api/users?page=1`)
    .then((response) =>  {
      this.users = response.data.data.data;
      console.log(response.data.data.last_page);
      this.lastPage = response.data.data.last_page;
      this.currentPage = 1;
      console.log(this.currentPage); 
      this.activate(this.currentPage);

    })
    .then (()=>{
       
        const modal = document.getElementById('modal-pozadina');
        const span = document.getElementById("close");
        const buttons = document.querySelectorAll('.dropbtn')
        const Edits = document.querySelectorAll('.edit')
        const Deletes = document.querySelectorAll('.delete')
        const formaAddUser = document.getElementById("addUsers");
        const editUsers = document.getElementById("editUsers");
        const DeleteUsers = document.getElementById("DeleteUsers");
        //paginACIJA
        const c = document.querySelector('.containernovi')
        const indexs = Array.from(document.querySelectorAll('.index'))
                let cur = -1
                indexs.forEach((index, i) => {
                  index.addEventListener('click', () => {            
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

                //PAGINACIJA
        
        for (let index = 0; index < buttons.length; index++) {
             
          buttons[index].addEventListener('click', ()=>{
            // dropdowns[index].classList.toggle("show");
          })
  
}           
 for (let index = 0; index < Edits.length; index++) {
          
            Edits[index].addEventListener('click', ()=>{
            modal.style.display = "block";
            formaAddUser.style.display = "none";
            editUsers.style.display = "block";
            DeleteUsers.style.display = "none";       
            let korisnici = this.users;
            let nekiId = korisnici[index].id
            this.currrentUser = nekiId
            this.specificUser(nekiId)
          })
  
}           

 for (let index = 0; index < Deletes.length; index++) {        
            Deletes[index].addEventListener('click', ()=>{
            console.log("radi delete" +index);
            modal.style.display = "block";
            editUsers.style.display = "none";
            DeleteUsers.style.display = "block";
            formaAddUser.style.display = "none";
            let korisnici = this.users;
            let nekiId = korisnici[index].id
            this.currrentUser = nekiId;
            console.log(korisnici[index]);
            document.getElementById ('Yes').addEventListener('click', async ()=> {
               await this.deleteUser(nekiId);
               modal.style.display = "none";
               this.showAlert2();
               this.niz(this.currentPage);
               
            })

            document.getElementById ('No').addEventListener ('click' , ()=> {
                modal.style.display = "none";
            })
             // do ovde
            console.log(nekiId);
            
            // this.deleteUser(nekiId);
          })
  
}           


    })


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
  } else {
    
  }
}
   
const modal = document.getElementById('modal-pozadina');
const span = document.getElementById("close");
const formaAddUser = document.getElementById("addUsers");
const editUsers = document.getElementById("editUsers");
const deleteUser = document.getElementById("DeleteUsers");

document.getElementById("uploadButton").addEventListener('click', ()=>{
    modal.style.display = "block";
    editUsers.style.display = "none";
    deleteUser.style.display = "none";
    formaAddUser.style.display = "block";

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
    .then((response) =>{
      this.users = response.data.data.data;
      console.log('radi');
             
    } )
    },

    logOut (){
            delete localStorage.token;
            this.$router.replace(this.$route.query.redirect || '/Login')
    },
    showAlert(){        
       Swal.fire({
          type: 'success',
          title: 'User succesfully added',
          showConfirmButton: false,
          timer: 2000
              })
        },

    showAlert2(){
           
      Swal.fire({ 
          type: 'success',
          title: `User  ${this.currrentUser} succesfully deleted`,
          showConfirmButton: false,
          timer: 2000
              })
        },
      showAlert3(){
           
        Swal.fire({
          type: 'success',
          title: `User ${this.currrentUser} succesfully edited`,
          showConfirmButton: false,
          timer: 2000
              })
        },

    deleteUser: function (UserNumber) {
          this.$http.delete(`/users/${UserNumber}`, {Authorization: localStorage.token})
          
          
    },

    myFunction: function(){
            document.getElementById("myDropdown").classList.toggle("show");

    },
    changeActive: function(){
 
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
          
          document.getElementById('modal-pozadina').style.display = "none";
          this.showAlert();
      },

        signupFailed () {
          this.error = 'Sign Up failed!'
          //  delete localStorage.token
      }, 
        specificUser : function (msgID) {
            this.$http.get (`/users/${msgID}`, {Authorization: localStorage.token})
            .then((response) => {
                console.log(response.data.data);
                document.getElementsByName('name')[0].value = response.data.data.name
                document.getElementsByName('email')[0].value = response.data.data.email
                document.getElementById('id').innerHTML = response.data.data.id
                
            })
        },

        editUser : function (userID) {
             this.$http.put (`/users/${userID}`,{
                                                      "name":this.ime,
                                                      "email": this.email,  
                                                    },
                                                     {Authorization: localStorage.token}, 
                                                    )
                                    .then (()=> {
                                      document.getElementById('modal-pozadina').style.display = "none";
                                      this.showAlert3();
                                      this.niz(this.currentPage);
                                    })
        }, 
        nizManje: function() {
      if (this.currentPage === 1) {
        return;
      }
      this.currentPage = this.currentPage - 1;

      axios
        .get(
          `https://proxy-requests.herokuapp.com/http://comtrade.sytes.net/api/users?page= ${
            this.currentPage
          }`
        )
        .then(response => {
          this.users = response.data.data.data;
          this.activate(this.currentPage);
        });
    },

    nizVise: function() {
      if (this.currentPage === this.lastPage) {
        return;
      }
      this.currentPage = this.currentPage + 1;

      axios
        .get(
          `https://proxy-requests.herokuapp.com/http://comtrade.sytes.net/api/users?page= ${
            this.currentPage
          }`
        )
        .then(response => {
          this.users = response.data.data.data;
          this.activate(this.currentPage);
        });
    },


    activate: function(el) {
      this.active_el = el;
    },

    onClick() {
      this.$emit("loadPage", this.pageNumber);
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

.active a {
  background: gray !important;
  color: #ffffff;
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
  color: blue;
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
  font-weight: 700;
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
  width: 430px;
}
.recepiant {
    width: 253px;

}
.uploadedBy {
    width: 303px;

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
.pagnation a {
  padding: 30px;

}

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

/* kraj drop */

.show {display: block;}
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
.dropdown-toggle:after {
  border: none;
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
    text-align: center;
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
   text-align: center;
}
#inputEmail, #inputPassword,#repeatPassword,#inputName   {
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
  padding: 25px 15px;
  margin: 0 auto;
  display: none;
}
.editUser {
  width: 95%;
  height: auto;
  display: flex;
  flex-direction: column;
  justify-items: center;
  align-items: center;
}
.editUser button {
  width: 50%;
  margin: 0 auto;
}
.editUser input {
  margin: 20px;
  width: 300px;
  height: 50px;
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

#addUsers {
  text-align: center;
}
#DeleteUsers {
  display:block;
  padding-top: 100px;
  width: 100%;
  height: 100%;
  
}
#DeleteUsers h3 {
  margin-bottom: 50px;
  font-size: 35px;
}
#DeleteUsers button {
  padding: 18px 40px;
  font-size: 30px;
  border: none;
  border-radius: 20px;
  /* margin-right: 100px;
  margin-left: 50px; */
}

#Yes {
    margin-right: 100px;
    background-color: green
}
#No {
    background-color: red
}
#id2 {
  color: red;
}
/* kraj forme */

#logout {
  position: absolute;
      top: -70px;
      right: 100px;   
      color:white;
      background-color: #1FE7B6;
      border: none;
      font-size: 20px;
      padding: 10px 30px;
      border-radius:  50px;
}
</style>