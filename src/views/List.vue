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
       <button>Export All</button>
      </div>
        <!-- Button -->

       <div id="down1">
       <button>Export Selected</button>
      </div>
      <!-- Search -->
<div id="down"> 
      <p>Compare Selected</p>
       <button>Compare</button>
      </div>
       <div id="down"> 
      <p>View data by</p>
       <button>List</button>
      </div>
        <!-- Button -->

       <div id="down1">
       <button>Map</button>
      </div>
     
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

      <div id="button">
        <button>Filter Search</button>
      </div>
      <div id="button1">
        <button>Reset Filter</button>
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

#button {
  margin-left: 110px;
  margin-top: 20px;
  
}
#button1{
  margin-left:112px;
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
