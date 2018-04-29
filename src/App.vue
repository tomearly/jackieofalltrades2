<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>

  #app {
    color: #2c3e50;
    font-family: 'Open Sans', Verdana, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
  }
  a {
    color: dimgray;
    text-decoration: none;
  }
  a:hover {
    color: dimgray;
    text-decoration: underline;
  }
  body {
    margin: 0;
  }

</style>
