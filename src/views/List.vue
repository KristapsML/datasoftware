<template>
  <div class="about">
   <Header />
    <h1>This is the list page</h1>
    <List />

    <head><link rel="stylesheet" href="https://use.typekit.net/wxp5tgt.css"> </head>
    
    <div id="sidebar">
        <!-- Button -->
       <div id="down"> 
      <p>Download House Profile</p>
       <button class="button1">Export All</button>
      </div>
        <!-- Button -->

       <div id="down1">
       <button class="button2">Export Selected</button>
      </div>
      <!-- Search -->
<div id="down"> 
      <p>Compare Selected</p>
       <button class="button3">Compare</button>
      </div>
       <div id="down"> 
      <p>View data by</p>
       <button class="button4">Filter Search</button>
       <button class="button5">Map</button>
      </div>
        <!-- Button -->

       
     
      <!-- Search -->
      <div id="search">
          <p>Street Name</p>
      <input type="text" placeholder="Enter street name..">
      </div>
      <!-- Search -->
    <div id="search">
          <p>Pre-fix ID</p>
      <input type="text" placeholder="Enter ID">
      </div>
      <!-- Search -->
    <div class="usage">
      <h1> Color </h1>
      <div id="energie">
      <input type="checkbox" name="box8" value="vbc">Green<br>
        <input type="checkbox" name="box9" value="bvc"> Yellow<br>
        <input type="checkbox" name="box10" value="bvc">Red<br>
    </div>
    </div>
    
    <div id="cond">
      <h1>Condition points</h1>
     
      <div id="holder">
          <p>From</p>
      <input type="text" placeholder="">
      <div id="line">
      <p> - </p>
      </div>
      <div id="line2">
        <p>To</p>
        <input type="text" placeholder="">
      </div>

    </div>
    <div id="cond">
      <h1>Energy points</h1>
    <div id="holder">
          <p>From</p>
      <input type="text" placeholder="">
      <div id="line">
      <p> - </p>
      </div>
      <div id="line2">
        <p>To</p>
        <input type="text" placeholder="">
      </div>
      </div>
      </div>
      <div id="cond">
      <h1>Helpdesk points</h1>
    <div id="holder">
          <p>From</p>
      <input type="text" placeholder="">
      <div id="line">
      <p> - </p>
      </div>
      <div id="line2">
        <p>To</p>
        <input type="text" placeholder="">
      </div>
      </div>
      </div>
      <div id="cond">
      <h1>Total points</h1>
    <div id="holder">
          <p>From</p>
      <input type="text" placeholder="">
      <div id="line">
      <p> - </p>
      </div>
      <div id="line2">
        <p>To</p>
        <input type="text" placeholder="">
      </div>
      </div>
      </div>

      <div id="container">
        <button class="button6">Filter Search</button>
      </div>

      <div id="container1">
      <button class="button7">Reset Filter</button>
      </div>





  </div>
  </div>
  </div>
</template>


<style>
.about{
  margin-bottom:150px;

}

#sidebar {
  
  padding-top: 7px;
  padding-left:12px;
  font-size:23px;
  color: white;
  position:sticky;
  width: 356px;
  height: 850px;
  background-color:#43484F; 
  font-family: proxima-nova, sans-serif;
  font-style: normal;
}

#search {
  margin-bottom: 5px;
  font-size: 15px;
  padding-top:12px;
  border: none;
  font-family: proxima-nova, sans-serif;
  font-weight: 400;
  font-style: normal;
}

.energy {
  
  font-size: 15px;
  padding-top: 7px;
  padding-bottom: 5px;
  padding-left:3px;
    font-weight: 800;

  

}

#checkbox {
  font-size: 13px;
  line-height: 1.6em;
  padding-left: 2px;
  padding-top: 6px;
  
  }
 .usage {
   font-size: 15px;
  padding-top: 12px;
  padding-bottom:5px;
  padding-left:1px;

  
 }
 
 #down1{
   margin-left:110px;
   margin-bottom:0px;
   margin-top: -34px;
  
  
 }

 #energie {
    font-size: 13px;
  line-height: 1.6em;
  padding-left: 3px;
  padding-top: 5px;
  
  

 }

 #line {
   margin-left: 160px;
   margin-top: -20px;
   
   }
#line2{
  margin-left: 175px;
  margin-top: -41.75px;

}

.weight {
  font-size: 15px;
  line-height: 1.6em;
  padding-left: 5px;
  padding-top: 7px;
  margin-bottom: 5px;
  
}
#ight{
  font-size: 15px;
  line-height: 1.6em;
  padding-left: 0px;
  padding-top: 3px;
}

.main {
   font-size: 20px;
  line-height: 1.6em;
  padding-left: 5px;
  padding-top: 3px;
  margin-bottom: 5px;
}

#main1 {
   font-size: 13px;
  line-height: 1.6em;
  padding-top: 3px;
}

.kr {
  font-size: 18px;
  line-height: 1.6em;
  padding-left: 5px;
  padding-top: 3px;
}
#krr{
  font-size: 13px;
  line-height: 1.6em;
  padding-top: 3px;
}

#holder {
  font-size: 13px;
}



#cond {
  font-size: 20px;
  margin-top:5px;
  
}

.button {
  padding:5px 5px 5px 5px;
  margin-left: 100px;
  margin-top: 20px;
  background-color: #008EE0 ;
  border: none;
  color:white;
  font-family:proxima-nova, sans-serif;
  
}
.button1{
  padding:5px 5px 5px 5px;
  margin-left: 24px;
  margin-top: 15px;
  background-color: #008EE0 ;
  border: none;
  color:white;
  font-family:proxima-nova, sans-serif;
}
.button2{
  padding:5px 5px 5px 5px;
  margin-left: 15px;
  margin-top:px;
  background-color: #008EE0 ;
  border: none;
  color:white;
  font-family:proxima-nova, sans-serif;
}

.button3 {
  padding:5px 5px 5px 5px;
  margin-left: 24px;
  background-color: #008EE0 ;
  border: none;
  color:white;
  font-family:proxima-nova, sans-serif;
}

.button4 {
  padding:5px 5px 5px 5px;
  margin-left: 15px;
  margin-top:px;
  background-color: #008EE0 ;
  border: none;
  color:white;
  font-family:proxima-nova, sans-serif;
}
.button5{
  padding:5px 5px 5px 5px;
  margin-left: 50px;
  background-color: #008EE0 ;
  border: none;
  color:white;
  font-family:proxima-nova, sans-serif;
}
.button6{
  margin-top: 15px;
  padding:5px 5px 5px 5px;
  margin-left: 115px;
  background-color:green ;
  border: none;
  color:white;
  font-family:proxima-nova, sans-serif;
}
.button7{
  padding:5px 5px 5px 5px;
  margin-left: 117.5px;
  margin-top:10px;
  background-color:red;
  border: none;
  color:white;
  font-family:proxima-nova, sans-serif;
}
.about {
  margin-bottom: 500px;
}
</style>


<script>
import Header from "../components/layout/Header.vue";
import List from "../components/FilterableList";

export default {
  name: "list",
  components: { Header, List }
};
</script>
