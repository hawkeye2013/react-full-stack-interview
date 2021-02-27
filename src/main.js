import Vue from 'vue';
import Axios from 'axios';
import VueKeyCloak from '@dsb-norge/vue-keycloak-js';
import App from './App.vue';
import router from './router';
import store from './store';
import 'bulma/css/bulma.min.css';

const USE_AUTH = true;

Vue.config.productionTip = false;

const ssoUrl = 'http://auth.stremos.com/auth';
const ssoClientId = 'development';
const ssoRealm = 'robot-battle-arena';
const logoutUrl = 'http://localhost:3000';

function tokenInterceptor() {
  Axios.interceptors.request.use(
    (config) => {
      const currentConfig = config;
      if (process.env.NODE_ENV === 'development') {
        currentConfig.headers.Authorization = `Bearer ${Vue.prototype.$keycloak.token}`;
      } else {
        currentConfig.headers.Authorization = 'Bearer devToken';
      }
      return currentConfig;
    },
    (error) => Promise.reject(error),
  );
}
if (USE_AUTH) {
  Vue.use(VueKeyCloak, {
    logout: {
      redirectUri: logoutUrl,
    },
    init: {
      onLoad: 'login-required',
      checkLoginIframe: false,
    },
    config: {
      realm: ssoRealm,
      url: ssoUrl,
      clientId: ssoClientId,
      logoutRedirectUri: logoutUrl,
    },
    onReady: () => {
      tokenInterceptor();
      new Vue({
        store,
        router,
        render: (h) => h(App),
      }).$mount('#app');
    },
  });
} else {
  new Vue({
    router,
    render: (h) => h(App),
  }).$mount('#app');
}
