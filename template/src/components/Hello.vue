<template>
  <div class="hello">
    <h1>\{{ msg }}</h1>
  </div>
</template>

<script>
  {{#store}}
  import { mapState } from 'vuex'{{#if_eq lintConfig "airbnb"}};{{/if_eq}}
  console.log(mapState){{#if_eq lintConfig "airbnb"}};{{/if_eq}}
  {{/store}}
  export default {
    data{{#unless_eq lintConfig "airbnb"}} {{/unless_eq}}() {
      {{#if store}}
      return {}{{#if_eq lintConfig "airbnb"}};{{/if_eq}}
      {{else}}
      return {
        msg: 'Welcome to Phantom2'{{#if_eq lintConfig "airbnb"}},{{/if_eq}}
      }{{#if_eq lintConfig "airbnb"}};{{/if_eq}}
      {{/if}}
    }{{#if_eq lintConfig "airbnb"}}{{#unless store}},{{/unless}}{{/if_eq}}{{#store}},{{/store}}
    {{#store}}
    computed: {
      ...mapState({
        msg: state => state.message
      }){{#if_eq lintConfig "airbnb"}},{{/if_eq}}
    }{{#if_eq lintConfig "airbnb"}},{{/if_eq}}
    {{/store}}
  }{{#if_eq lintConfig "airbnb"}};{{/if_eq}}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  h1 {
    color: #42b983;
  }
</style>
