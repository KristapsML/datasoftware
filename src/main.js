import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import "./registerServiceWorker";
import "./../node_modules/bulma/css/bulma.css";
import SortedTablePlugin from "../node_modules/vue-sorted-table";

import { Icon } from "leaflet";
import "leaflet/dist/leaflet.css";

Vue.use(SortedTablePlugin);

delete Icon.Default.prototype._getIconUrl;

Icon.Default.mergeOptions({
  iconRetinaUrl: require("leaflet/dist/images/marker-icon-2x.png"),
  iconUrl: require("leaflet/dist/images/marker-icon.png"),
  shadowUrl: require("leaflet/dist/images/marker-shadow.png")
});

Vue.config.productionTip = false;

new Vue({
  router,
  render: (h) => h(App)
}).$mount("#app");
