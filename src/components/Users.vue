<template>
  <div class="Users page">

    
    <img src="../assets/DEMO.svg" alt="Demo">

    <div class="desno">
        <h4>Upload Users</h4>
        <p>If you would like to seed your mailing with names of people
           within your organization, add their names here</p>
        <div class="unutra">

        </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Users',
  
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
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
  background-color: aqua;
}
h4,p {
  position: absolute;
  
}

h4 {
  top: 71px;
  left: 62px  ;

}
p {
  
  top: 108px;
  left: 62px  ;


}
    
</style>