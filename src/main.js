import Vue from "vue";
import App from "./App.vue";
import VueGtag from "vue-gtag";
import vuetify from "./plugins/vuetify";

Vue.use(VueGtag, {
  config: { id: "G-E7H9B0YMQ6" },
});
export default {
  name: "MyComponent",

  methods: {
    login() {
      this.$gtag.event("login", { method: "Google" });
    },
  },
};

Vue.config.productionTip = false;

new Vue({
  vuetify,
  render: (h) => h(App),
}).$mount("#app");
