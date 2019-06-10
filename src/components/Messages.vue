 <template>
    <div class="Messages page">

      <div   id="modal-pozadina" class="overlay">
        <div id="modal">
                <span  id ="close" class="close">&times;</span>
                    <!-- forma -->
              <form  @submit.prevent="postMsg(17)" id="EditDiv">
                    <h3>Edit Msg</h3>
                    <!-- <h3>ID : <span id="id"></span></h3> -->
                    <label for="name">Name: </label>
                    <input  v-model="ime" type="text" placeholder="Name" name="name">
                    <br>
                    <label for="email">Email: </label>
                    <input  v-model="email" type="email" placeholder="Email" name="email">
                    <br>
                    <label for="Poruka">Poruka: </label>
                    <textarea  v-model="porukaneka" name="Poruka" id="textArea" cols="30" rows="10" placeholder="Your Massage" ></textarea>
                    <button class="btn btn-lg btn-primary btn-block" type="submit">Edit msg</button>
                </form>
                    <!-- kraj forme -->

                 <div id="deleteMsg">
                      <h3>Are you sure u want to delete this message?</h3>
                      <button id="Yes">Yes</button>
                      <button id="No">No</button>
                </div>
             
        </div>

        
        
    </div>
        <h1>Messages</h1>
         <!-- <transition name="router-anim" enter-active-class="animated fadeIn" leave-active-class="animated fadeOut"> -->
        <div class="poruke">
            
            <div class="unutra" v-for="(message, index) in messages" :key="`message-${index}`">
                <div class="gore">
                    <div class="levo"> <h2> <span class="id"> {{message.id}}</span>  <span class="plavo"> Name </span> : {{message.name}} &nbsp; &nbsp; &nbsp;   <span class="plavo"> Email: </span> : {{message.email}} </h2> </div>  
                    <div class="desno"> <h2>{{message.created_at}}</h2></div>
                </div>

                <div class="dole">
                    <div class="levo-dole">
                        <h2>
                            <span>Message</span> :{{message.body}}
                        </h2>    
                    </div>
                    <div class="desno-dole">
                         <button class="edit"> Edit </button>  
                         <button class="delete"> Delete </button>  
                    </div>
                </div>
            </div>
            


        </div>  
        <!-- </transition> -->

        <div class="paginacija">

                <div class="containernovi">
                <span>
                    <div class="index" v-for="i in lastPage" :key=i>
                      <span v-on:click="poruka(i)" >{{i}} </span>
                    </div>
                    <!-- <div class="index">
                      <span v-on:click="poruka(2)">2</span>
                      </div>
                     -->
                   
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
 </template>


 <script>
 import axios from 'axios';
import { log } from 'util';
 export default {
     name: 'Messages',
    data(){
        
        return {
            messages: [],
            ime: "",
            email: "",
            porukaneka: "",
            lastPage:''
        }
     },
     methods:{
            poruka: function (pageNumber) {
                 axios
                  .get(`https://proxy-requests.herokuapp.com/http://comtrade.sytes.net/api/messages?page=${pageNumber}` )
                  .then(response => (this.messages = response.data.data.data))
        },

         deleteMessage: function (msgID) {
          this.$http.delete(`/messages/${msgID}`, {Authorization: localStorage.token})
          
          
    },

        specificUser : function (msgID) {
            this.$http.get (`/messages/${msgID}`, {Authorization: localStorage.token})
            .then((response) => {
                console.log(response.data.data);
                document.getElementsByName('name')[0].value = response.data.data.name
                document.getElementsByName('email')[0].value = response.data.data.email
                document.getElementsByName('Poruka')[0].value = response.data.data.body
                
            })
        },
        postMsg : function (msgID) {
             this.$http.put (`/messages/${msgID}`,{Authorization:localStorage.token},
                                                         {
                                                      "name":this.ime,
                                                      "email": this.email,
                                                      "body": this.porukaneka
                                                    }               
                                                    
                                                    )
        }
     },
     mounted(){
         axios
             .get(`https://proxy-requests.herokuapp.com/http://comtrade.sytes.net/api/messages?page=1`)
             .then( (response) => {
                 this.messages = response.data.data.data;
                 console.log(response.data.data);
                 this.lastPage = response.data.data.last_page

                 

             })
             .then (()=>{
                  const Deletes = document.querySelectorAll('.delete');
                  const Edits = document.querySelectorAll('.edit');
                  const modal = document.getElementById('modal-pozadina');
                  const span = document.getElementById("close");

                   const deleteMsg = document.getElementById("deleteMsg");
                   const EditDiv = document.getElementById("EditDiv");

                   //paginacija
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
                  span.addEventListener('click', ()=> {
                        modal.style.display = "none";
                  });

                  window.onclick = function(event) {
                       if (event.target == modal) {
                       modal.style.display = "none";
                        }
 
              }

                  for (let index = 0; index < Deletes.length; index++)  {
          
                        Deletes[index].addEventListener('click', ()=>{
                        console.log("radi delete" +index);
                        modal.style.display = "block";
                        deleteMsg.style.display = "block";
                        EditDiv.style.display = "none";
                        let poruke = this.messages;
                        let nekiId = poruke[index].id;
                        document.getElementById ('Yes').addEventListener('click', async ()=> {
                           await this.deleteMessage(nekiId);
                            modal.style.display = "none";
                            alert('Message Deleted')
                          
                            
            })

                        document.getElementById ('No').addEventListener ('click' , ()=> {
                          modal.style.display = "none";
                        })
                        // this.deleteMessage(nekiId);
                        // alert('Message Deleted')
                  })
  
                }   
                for (let index = 0; index < Edits.length; index++)  {
          
                        Edits[index].addEventListener('click', ()=>{
                        console.log("radi edit" +index);
                        modal.style.display = "block";
                      
                        deleteMsg.style.display = "none";
                        EditDiv.style.display = "block";
                        let poruke = this.messages;
                        let nekiId = poruke[index].id
                        console.log(nekiId);
                        this.specificUser(nekiId)
                        
                      
                  })
  
                } 
               
             });
        
        
     }
}

 </script>


 <style scoped>
 @import 'https://cdnjs.cloudflare.com/ajax/libs/animate.css/3.7.0/animate.css';
    .Messages {
      width: 1920px;
      height: 1100px;
      text-align: center;
      /* background: url('../assets/Pozadina2.png') no-repeat; */
      background-color: #202646;
      display: flex;
      justify-content: center;
      flex-direction: column;
      align-items: center;
   
  
    }
    h1 {
        color: white;
        /* margin-top: 70px; */
    }
    .poruke {
        margin: 0 auto;
        width: 70%;
        height: 850px;
        /* background-color: aqua; */
    }

    .unutra {
        margin: 0 auto;
        width: 100%;
        height: 18%;
        background-color: #DCDBDB;
        margin-bottom: 20px;
        padding: 10px;
        border-radius:  15px;
    }
    .gore , .dole {
        height: 50%;
        width: 100%;
        display: flex;
        justify-content: space-between;
        /* background-color: red; */
        /* border: 1px solid black; */
    }
    .dole {
        text-align: left;
    }

    .dole h2{
        font-size: 23px;
    }
    .gore h2{
        font-size: 25px;
        font-weight: 700;
    }

    .id{
        color : red;
        margin-right: 100px;
        font-size: 1.5em;
    }
    .levo {
        font-size: 0.8em;
    }

    .levo-dole {
        width: 85%;
        height: 100%;
        
    }
    .desno-dole {
        width: 15%;
        height: 100%;
    }
    .levo-dole span, .plavo {
        color: blue;

    }
    .paginacija {
        margin-top: 60px;
        width: 70%;
        height: 100px;
        /* background-color: red; */
    }

    /* .paginacija */

@import url('https://rsms.me/inter/inter-ui.css');

.containernovi {
  display: inline-block;
  position: relative;
}
.index {
  /* cursor: pointer; */
  font-size:20px;
  font-weight: 700;
  color: white;
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
  transform: translateX(154px);
}
.containernovi.i5 svg {
  transform: translateX(206px);
}
.containernovi.i6 svg {
    transform: translateX(260px);
  }
/* .containernovi.i7 svg {
    transform: translateX(310px);
  }
.containernovi.i8 svg {
    transform: translateX(360px);
  } */
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

  input {
    width: 70%;
  }

  #deleteMsg {
  display:block;
  padding-top: 100px;
  width: 100%;
  height: 100%;
  
}
#deleteMsg h3 {
  margin-bottom: 50px;
  font-size: 35px;
}
#deleteMsg button {
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

.edit, .delete {
  
  font-size: 20px;
  padding: 10px 15px;
  border: none;
  border-radius: 20px;
  background-color: #5c93ed;
  color: white

}
.edit:hover, .delete:hover {
    background-color: #021638;
}
.edit:active, .delete:active {
    outline: none;
}
.edit {
  margin-right: 20px;
}


    /* kraj modala */
 </style>
