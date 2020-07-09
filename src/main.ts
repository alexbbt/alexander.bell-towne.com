import Vue from 'vue';
import VueMeta from 'vue-meta';

import App from './App.vue';
import router from './router';
import store from './store';

Vue.use(VueMeta, {
  keyName: 'head',
  // optional pluginOptions
  refreshOnceOnNavigation: true,
});

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');
