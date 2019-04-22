import Vue from "vue";
import App from "./App";
import router from "./router";
import Vuex from "vuex";
import store from "./store";
// 字体图标
import "font-awesome/css/font-awesome.min.css";

// 注册Vuex
Vue.use(Vuex);

// 全局配置
Vue.config.productionTip = false;
Vue.config.devtools = true;

new Vue({
  el: "#app",
  store,
  router,
  template: "<App/>",
  components: { App }
});
