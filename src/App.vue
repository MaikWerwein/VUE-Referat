<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import HelloWorld from './components/HelloWorld.vue'
import NavBar from './components/NavBar.vue'
import TheWelcome from './components/NavBarLeft.vue'
</script>

<template>
  <div class="layoutWrapper">
    <TheWelcome />
    <RouterView />
  </div>
</template>

<style scoped>
.layoutWrapper {
  box-sizing: border-box;
  display: flex;
  flex-direction: row;

  width: 100vw;
  height: 100vh;
}
</style>
