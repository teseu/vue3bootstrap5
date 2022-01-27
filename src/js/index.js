import "bootstrap/dist/js/bootstrap";
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faTwitterSquare,
  faYoutubeSquare,
  faInstagramSquare,
  faFacebookSquare,
  faFlickr,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

import Vue from "vue";
import Index from "@/views/Index.vue";
import {
  faSearch,
  faAdjust,
  faAssistiveListeningSystems,
  faMapMarkerAlt,
  faPhone,
  faClock,
  faLink,
  faUpload,
  faCalendar,
  faRss,
} from "@fortawesome/free-solid-svg-icons";
library.add(
  faTwitterSquare,
  faYoutubeSquare,
  faInstagramSquare,
  faFacebookSquare,
  faFlickr,
  faAdjust,
  faSearch,
  faAssistiveListeningSystems,
  faMapMarkerAlt,
  faPhone,
  faClock,
  faLink,
  faCalendar,
  faUpload,
  faRss
);

Vue.component("font-awesome-icon", FontAwesomeIcon);
Vue.config.productionTip = false;
new Vue({
  // store,
  render: (h) => h(Index),
}).$mount("#conteudo");
