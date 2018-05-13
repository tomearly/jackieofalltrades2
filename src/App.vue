<template>
  <div id="app">
    <router-view/>
    <span class='footer'>(c) jackie of all trades 2 - 2018</span>
  </div>
</template>

<script>
export default {
  name: 'App',
  title: 'jackie of all trades 2'
}
</script>

<style>

  .footer {
    background: grey;
    bottom: 0px;
    color: white;
    height: 25px;
    left: 0;
    position: fixed;
    width: 100%;
    z-index: 999;
  }

  #app {
    color: #2c3e50;
    font-family: 'Open Sans', Verdana, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
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
