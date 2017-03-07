{{#if_eq build "standalone"}}
// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
{{/if_eq}}
import Vue from 'vue'{{#if_eq lintConfig "airbnb"}};{{/if_eq}}
{{#material}}
import VueMaterial from 'vue-material'{{#if_eq lintConfig "airbnb"}};{{/if_eq}}
Vue.use(VueMaterial){{#if_eq lintConfig "airbnb"}};{{/if_eq}}
Vue.use(VueMaterial.mdCore)
{{/material}}
{{#resource}}
import VueResource from 'vue-resource'{{#if_eq lintConfig "airbnb"}};{{/if_eq}}
Vue.use(VueResource){{#if_eq lintConfig "airbnb"}};{{/if_eq}}
{{/resource}}
{{#router}}
import router from '@/router'{{#if_eq lintConfig "airbnb"}};{{/if_eq}}
{{/router}}
{{#store}}
import store from '@/store'{{#if_eq lintConfig "airbnb"}};{{/if_eq}}
{{/store}}
import App from './App'{{#if_eq lintConfig "airbnb"}};{{/if_eq}}

Vue.config.productionTip = false{{#if_eq lintConfig "airbnb"}};{{/if_eq}}

/* eslint-disable no-new */
new Vue({
  el: '#app',
  {{#router}}
  router,
  {{/router}}
  {{#store}}
  store,
  {{/store}}
  {{#resource}}
  http: {},
  {{/resource}}
  {{#if_eq build "runtime"}}
  render: h => h(App){{#if_eq lintConfig "airbnb"}},{{/if_eq}}
  {{/if_eq}}
  {{#if_eq build "standalone"}}
  template: '<App/>',
  components: { App }{{#if_eq lintConfig "airbnb"}},{{/if_eq}}
  {{/if_eq}}
}){{#if_eq lintConfig "airbnb"}};{{/if_eq}}
