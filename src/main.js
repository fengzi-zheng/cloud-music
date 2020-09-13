import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import attachFastClick from "fastclick";//为了解决移动端300ms延时问题

attachFastClick.attach(document.body);

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
