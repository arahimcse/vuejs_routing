<script  setup>

</script>

<template>
  <div class="container">
    <ul>
      <li><router-link to="/">Home</router-link></li>
      <li><router-link to="/about">About</router-link></li>
      <li><router-link to="/contract">Contract</router-link></li>
      <li><router-link to="/user/1">user</router-link></li>
      <li><router-link to="/user/2">user</router-link></li>
    </ul>
  </div>
  <!-- :key attributes provides a link  -->
  <router-view :key="$route.fullPath" />
</template>

<style  scoped>
  
</style>
