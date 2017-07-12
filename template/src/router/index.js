import Vue from 'vue'{{#if_eq lintConfig "airbnb"}};{{/if_eq}}
import VueRouter from 'vue-router'{{#if_eq lintConfig "airbnb"}};{{/if_eq}}
import Home from '@/components/Home'{{#if_eq lintConfig "airbnb"}};{{/if_eq}}

Vue.use(VueRouter){{#if_eq lintConfig "airbnb"}};{{/if_eq}}

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home{{#if_eq lintConfig "airbnb"}},{{/if_eq}}
  }{{#if_eq lintConfig "airbnb"}},{{/if_eq}}
]{{#if_eq lintConfig "airbnb"}};{{/if_eq}}

/* eslint-disable no-new */
export default new VueRouter({
  routes,
  mode: 'history'{{#if_eq lintConfig "airbnb"}},{{/if_eq}}
}){{#if_eq lintConfig "airbnb"}};{{/if_eq}}
