<template>
  <div class="Users page">

    
    <img src="../assets/DEMO.svg" alt="Demo">

    <div class="desno">
        <button id="uploadButton">Upload User</button>
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

                          <button class="dugme">. . .</button>

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

                <!-- kraj paginacije -->

<!-- <nav aria-label="Page navigation example">
  <ul class="pagination pg-blue">
    <li class="page-item disabled">
      <a class="page-link" tabindex="-1" 
                          >&laquo;</a>
    </li>
    <li class="page-item active" >
                          <a class="page-link" v-on:click="niz(1)">1</a></li>
    <li class="page-item" v-on:click="showActive = !showActive"
                          v-bind:class="{ active: showActive }"
   >
      <a class="page-link " v-on:click="niz(2)">2 </a>
    </li>
    <li class="page-item"  v-on:click="showActive = !showActive"
                          v-bind:class="{ active: showActive }">
            <a class="page-link" v-on:click="niz(3)">3</a></li>
   <li class="page-item"  v-on:click="showActive = !showActive"
                          v-bind:class="{ active: showActive }">
            <a class="page-link" v-on:click="niz(4)">4</a></li>
    <li class="page-item" v-on:click="showActive = !showActive"
                          v-bind:class="{ active: showActive }">
              <a class="page-link" v-on:click="niz(5)">5</a></li>
    <li class="page-item" v-on:click="showActive = !showActive"
                          v-bind:class="{ active: showActive }" >
              <a class="page-link" v-on:click="niz(6)">6</a></li>
   <li class="page-item"  v-on:click="showActive = !showActive"
                          v-bind:class="{ active: showActive }">
              <a class="page-link" v-on:click="niz(7)">7</a></li>
    <li class="page-item" v-on:click="showActive = !showActive"
                          v-bind:class="{ active: showActive }">
              <a class="page-link" v-on:click="niz(8)">8</a></li>
    <li class="page-item" v-on:click="showActive = !showActive"
                          v-bind:class="{ active: showActive }">
              <a class="page-link" v-on:click="niz(9)">9</a></li>
   <li class="page-item"  v-on:click="showActive = !showActive"
                          v-bind:class="{ active: showActive }">
              <a class="page-link" v-on:click="niz(10)">10</a></li>
    <li class="page-item"  v-on:click="showActive = !showActive"
                          v-bind:class="{ active: showActive }">
              <a class="page-link" v-on:click="niz(11)">11</a></li>
    
    <li class="page-item">
      <a class="page-link">&raquo;</a>
    </li>
  </ul>
</nav> -->


              </div>

        </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios';
import { log } from 'util';
import { POINT_CONVERSION_COMPRESSED } from 'constants';

export default {
  name: 'Users',
  data () {
    return {
      users: [],
      perPage: 5,
      currentPage: 1,

    }
  },
  mounted(){
    axios
    .get(`https://proxy-requests.herokuapp.com/http://comtrade.sytes.net/api/users?page=1`)
    .then(response => (this.users = response.data.data.data))


    // paginacija
    const c = document.querySelector('.containernovi')
const indexs = Array.from(document.querySelectorAll('.index'))
let cur = -1
indexs.forEach((index, i) => {
  index.addEventListener('click', (e) => {
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
    // krajpaginacije

    // const objekat = 'response.data.data.data';
    // for (let index = 1; index < 3; index++) {
     
    

      //  const dugmici = document.querySelectorAll('.dugme');
      // const popUp = document.querySelectorAll('.popUp');
      // console.log(dugmici);
      // console.log(dugmici[0]);
      //   for (let index = 0; index < dugmici.length; index++) {
      //           dugmici[index].addEventListener('click', ()=> {
      //                 console.log('radi');
                      
      //                 popUp[index].style.display = 'flex'
      //           })
      //       }

      

  

  },
  methods: {
    niz: function (pageNumber) {
      axios
    .get(`https://proxy-requests.herokuapp.com/http://comtrade.sytes.net/api/users?page= ${pageNumber}` )
    .then(response => (this.users = response.data.data.data))
    },
    changeActive: function(){
      // const linkovi = document.querySelectorAll('.pagnation .page-link') 
      console.log(this);
    
      this.classList.toggle("active");

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
  cursor: pointer;
  /* font-size:22px; */
  display: inline;
  margin-right: 30px;
  padding: 5px;
  user-select: none;
  -moz-user-select: none;
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
    transform: translateX(433px);
  }
  .containernovi.i11 svg {
    transform: translateX(482px);
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

/* 
  align-items: center; 
  color: #555;
   display: flex;
  font-family: 'Inter UI', sans-serif;
  font-size: 1.25em;
  justify-content: center;
  height: 100vh; */
 
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
</style>