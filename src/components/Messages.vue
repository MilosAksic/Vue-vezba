 <template>
    <div class="Messages page">
        <h1>Messages</h1>
        <div class="poruke">
            <div class="unutra" v-for="(message, index) in messages" :key="`message-${index}`">
                <div class="gore">
                    <div class="levo"> <h2> <span class="id"> {{message.id}}</span>,   Name : {{message.name}},    Email : {{message.email}} </h2> </div>  
                    <div class="desno"> <h2>{{message.created_at}}</h2></div>
                </div>

                <div class="dole">
                   <h2>Message :{{message.body}}</h2>     
                </div>
            </div>


        </div>    

     </div>
 </template>


 <script>
 import axios from 'axios';
 export default {
     name: 'Messages',
    data(){
        
        return {
            messages: [],
        }
     },
     mounted(){
         axios
             .get(`https://proxy-requests.herokuapp.com/http://comtrade.sytes.net/api/messages?page=1`)
             .then( (response) => {
                 this.messages = response.data.data.data;
                 console.log(response.data.data.data);
                 

             })
     }
}

 </script>


 <style scoped>
    .Messages {
      width: 1920px;
      height: 1080px;
      text-align: center;
      background: url('../assets/Pozadina2.png') no-repeat;
      /* background-color: blue; */
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
        font-size: 25px;
    }
    .gore h2{
        font-size: 25px;
    }
 </style>
