<template>
  <div id="map-holder">
    <div id="mapid"></div>

    <div id="modal-1">
      <section id="modal-sektion">
        <div id="number1" class="hidden">
          <div class="information-title">
            <h2>
              <b>Additional information/documentation</b>
            </h2>
            <h2>Lorentzen ale 56</h2>
          </div>

          <div class="grid-container1">
            <div class="grid-item">
              <b>Street name</b>
            </div>
            <div class="grid-item">
              <b>Enregy grade</b>
            </div>
            <div class="grid-item">
              <b>Enregy usage</b>
            </div>
            <div class="grid-item">
              <b>Weight</b>
            </div>
            <div class="grid-item">
              <b>Maintenance activity</b>
            </div>
            <div class="grid-item">
              <b>Kr. pr. m2/year</b>
            </div>
            <div class="grid-item">
              <b>Selected</b>
            </div>

            <div class="grid-item">Lorentzen ale 56, 4700 Næstved</div>
            <div class="grid-item">A+</div>
            <div class="grid-item">1600 kWh</div>
            <div class="grid-item">21</div>
            <div class="grid-item">NO</div>
            <div class="grid-item">38,1 kr/m2</div>
            <div class="grid-item">
              <input type="checkbox" />
            </div>

            <div class="grid-item">
              <b>Center</b>
            </div>
            <div class="grid-item">
              <b>Anvendelse</b>
            </div>
            <div class="grid-item">
              <b>Politisk udvalg</b>
            </div>
            <div class="grid-item">
              <b>Rammeaftale</b>
            </div>
            <div class="grid-item">
              <b>Klynge</b>
            </div>
            <div class="grid-item">
              <b>Bruttoareal</b>
            </div>
            <div class="grid-item">
              <b>ID</b>
            </div>

            <div class="grid-item">Center for trafik og ejendomme (CTE)</div>
            <div class="grid-item">Administration</div>
            <div class="grid-item">Økonomiudvalget ØK</div>
            <div class="grid-item">Nord</div>
            <div class="grid-item">Boliadministration</div>
            <div class="grid-item">1471,0</div>
            <div class="grid-item">457</div>
          </div>

          <h4>
            <b>Stamdata/documents</b>
          </h4>

          <div class="grid-container2">
            <div class="grid-item">
              <b>Select</b>
            </div>
            <div class="grid-item">
              <b>File note</b>
            </div>
            <div class="grid-item">
              <b>Filename</b>
            </div>

            <div class="grid-item">
              <input type="checkbox" />
            </div>
            <div class="grid-item">Service agreement</div>
            <div class="grid-item">
              <a href>Lorentzens_ale_56-service_aftale.pdf</a>
            </div>

            <div class="grid-item">
              <input type="checkbox" />
            </div>
            <div class="grid-item">Property plan</div>
            <div class="grid-item">
              <a href>Lorentzens_ale_56-ejendoms_dokument.pdf</a>
            </div>

            <div class="grid-item">
              <input type="checkbox" />
            </div>
            <div class="grid-item">House plan</div>
            <div class="grid-item">
              <a href>Lorentzens_ale_56-bolig_plan.pdf</a>
            </div>
          </div>

          <button class="documentbtn">Download documents</button>

          <h4>
            <b>Historical data</b>
          </h4>

          <div class="grid-container2">
            <div class="grid-item">
              <b>Select</b>
            </div>
            <div class="grid-item">
              <b>File date</b>
            </div>
            <div class="grid-item">
              <b>Filename</b>
            </div>

            <div class="grid-item">
              <input type="checkbox" />
            </div>
            <div class="grid-item">27 02 2018</div>
            <div class="grid-item">
              <a href>Lorentzens_ale_56-27_02_2018.xlsx</a>
            </div>

            <div class="grid-item">
              <input type="checkbox" />
            </div>
            <div class="grid-item">02 06 2017</div>
            <div class="grid-item">
              <a href>Lorentzens_ale_56-02_06_2017.xlsx</a>
            </div>

            <div class="grid-item">
              <input type="checkbox" />
            </div>
            <div class="grid-item">15 03 2016</div>
            <div class="grid-item">
              <a href>Lorentzens_ale_56-15_03_2016.xlsx</a>
            </div>

            <div class="grid-item">
              <input type="checkbox" />
            </div>
            <div class="grid-item">22 01 2016</div>
            <div class="grid-item">
              <a href>Lorentzens_ale_56-22_01_2016.xlsx</a>
            </div>
          </div>

          <button class="documentbtn">Download data</button>
        </div>

        <div id="number2" class="hidden">
          <h2>Building</h2>
          <img src="../assets/bulshitteryimage1.png" alt="yes" />
        </div>

        <div id="number3" class="hidden">
          <h2>The Bank</h2>
          <img src="../assets/bulshitteryimage1.png" alt="yes" />
        </div>

        <div id="number4" class="hidden">
          <h2>Hospital</h2>
          <img src="../assets/bulshitteryimage1.png" alt="yes" />
        </div>
      </section>

      <div id="hero" @click="modalclose()"></div>
    </div>
  </div>
</template>

<script>
import { LMap, LTileLayer, LMarker } from "vue2-leaflet";
import { latLngBounds, latLng } from "leaflet";

export default {
  name: "Interactivemap",
  components: {
    LMap,
    LTileLayer,
    LMarker
  },

  mounted() {
    var redIcon = L.icon({
      iconUrl: "https://i.imgur.com/XKoHasZ.png",
      iconSize: [25, 33],
      iconAnchor: [12, 33],
      popupAnchor: [0, -30]
    });

    var blueIcon = L.icon({
      iconUrl: "https://i.imgur.com/6J7Vqny.png",
      iconSize: [25, 33],
      iconAnchor: [12, 33],
      popupAnchor: [0, -30]
    });

    var mymap = L.map("mapid").setView([55.231146, 11.758464], 13);

    L.tileLayer(
      "https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}",
      {
        maxZoom: 18,
        id: "mapbox.streets",
        accessToken:
          "pk.eyJ1IjoicmFnZWZsb3ciLCJhIjoiY2szM2JwbGo4MG9peDNncDk4N3lxM3d1dSJ9.8BHXBb248cQU4f1xyNYs0g"
      }
    ).addTo(mymap);

    var marker = L.marker([55.237882, 11.73005], { icon: redIcon })
      .addTo(mymap)
      .on("click", number1);
    marker
      .bindPopup("<b>Quarantine zone base</b><br>Only accesible for personel")
      .openPopup();

    var marker = L.marker([55.231809, 11.786317], { icon: blueIcon })
      .addTo(mymap)
      .on("click", number2);

    var marker = L.marker([55.229854, 11.760339], { icon: redIcon })
      .addTo(mymap)
      .on("click", number3);

    var marker = L.marker([55.237212, 11.759364], { icon: blueIcon })
      .addTo(mymap)
      .on("click", number4);

    function number1(e) {
      active1();
      synlig();
    }
    function number2(e) {
      active2();
      synlig();
    }
    function number3(e) {
      active3();
      synlig();
    }
    function number4(e) {
      active4();
      synlig();
    }

    function active1(e) {
      var element = document.getElementById("number1");
      element.classList.remove("hidden");
    }
    function active2(e) {
      var element = document.getElementById("number2");
      element.classList.remove("hidden");
    }
    function active3(e) {
      var element = document.getElementById("number3");
      element.classList.remove("hidden");
    }
    function active4(e) {
      var element = document.getElementById("number4");
      element.classList.remove("hidden");
    }

    function synlig(e) {
      var element = document.getElementById("modal-1");
      if (element.classList.contains("synlig")) {
        element.classList.remove("synlig");
      } else {
        element.classList.add("synlig");
      }
    }

    var circle = L.circle([55.237882, 11.73005], {
      color: "red",
      fillColor: "#f03",
      fillOpacity: 0.5,
      radius: 700
    }).addTo(mymap);
    circle.bindPopup("The Quarantine Zone.");

    var circle = L.circle([55.229854, 11.760339], {
      color: "red",
      fillColor: "#f03",
      fillOpacity: 0.5,
      radius: 200
    }).addTo(mymap);
    circle.bindPopup("Robbery");

    var circle = L.circle([55.237623, 11.777884], {
      color: "#0099ff",
      fillColor: "#0099ff",
      fillOpacity: 0.5,
      radius: 200
    }).addTo(mymap);
    circle.bindPopup("Police lockout");
  },

  methods: {
    modalclose() {
      var element = document.getElementById("modal-1");
      element.classList.remove("synlig");

      const elementsList = document.querySelectorAll(
        "#number1, #number2, #number3, #number4"
      );
      const elementsArray = [...elementsList];

      // Now you can use cool array prototypes
      elementsArray.forEach(element => {
        element.classList.add("hidden");
      });
    }
  }
};
</script>

<style scoped lang="scss">
.synlig {
  visibility: visible !important;
  opacity: 1 !important;
}

.hidden {
  display: none;
}

#map-holder {
  height: 100%;
}

#mapid {
  height: 100%;
}

.leaflet-bottom {
  display: none;
}

#modal-1 {
  position: absolute;
  top: 0;
  left: 0;
  z-index: 900;
  width: 100%;
  height: 100%;

  visibility: hidden;
  opacity: 0;
  transition: 0.5s;
}

#modal-sektion {
  position: absolute;
  top: 1%; //Change this value to make the information-page fit better
  left: 0;
  right: 0;
  z-index: 999;
  padding: 2em;
  margin: auto;
  height: auto;
  width: auto;
  max-width: 1080px;
  background: white;
  text-align: center;
}

#hero {
  cursor: pointer;
  position: absolute;
  z-index: 900;
  top: 0;
  background: rgba(0, 0, 0, 0.4);
  width: 100%;
  height: 100%;
}

.information-title {
  text-align: left;
  padding: 1em 0 1em 0;
}

.grid-container1 {
  margin-bottom: 2em;
  display: grid;
  grid-template-columns: auto auto auto auto auto auto auto;
  background-color: white;
}

.grid-container2 {
  display: grid;
  grid-template-columns: auto auto auto;
  background-color: white;
  margin-bottom: 1em;
}

h4 {
  text-align: center;
}

input[type="checkbox"] {
  width: 20px;
  height: 20px;
}

.grid-container2 .grid-item {
  text-align: left;
}

.grid-item {
  background-color: rgba(255, 255, 255, 0.8);
  border: 1px solid rgba(0, 0, 0, 0.8);
  padding: 10px;
  font-size: 13px;
  text-align: center;
}

.documentbtn {
  width: 200px;
  border: none;
  outline: none;
  margin: auto;
  padding: 1em;
  text-align: center;
  background: rgb(77, 77, 207);
  color: white;
  margin-bottom: 3em;
}
</style>'