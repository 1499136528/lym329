import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import '../src/style/common.css'
import debounce from './chajian/mychajian/index'

Vue.config.productionTip = false;
Vue.use(ElementUI)
Vue.use(debounce)

if(process.env.NODE_ENV==='development'){
  require('./mock/index')
}


const vm=new Vue({
  router,
  render: (h) => h(App),
}).$mount("#app");
// console.log(vm)
