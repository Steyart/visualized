<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<style>
  html,
  body{
    width: 100%;
    height: 100%;
    background-color: #f2f2f2;
    margin: 0;
  }
  #app{
    height: 100%;
  }
</style>
<script>
export default {
  name: 'App'
}
</script>

