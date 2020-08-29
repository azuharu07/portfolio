import Vue from "vue";
import App from "./App.vue";
import Buefy from "buefy";
import smoothScroll from "vue-smoothscroll";

Vue.config.productionTip = false;
Vue.use(Buefy);
Vue.use(smoothScroll);

new Vue({
    render: (h) => h(App),
}).$mount("#app");
