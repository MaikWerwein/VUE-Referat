<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import HelloWorld from './components/HelloWorld.vue'
import NavBar from './components/NavBar.vue'
import TheWelcome from './components/NavBarLeft.vue'
</script>

<template>
  <div class="layoutWrapper grid">
    <TheWelcome class="col-fixed sidebar" />
    <RouterView class="col" />
  </div>
</template>

<style>
.layoutWrapper {
  position: absolute;

  box-sizing: border-box;

  width: 100vw;
  min-height: 100vh;

  overflow-x: hidden;
}

::-webkit-scrollbar {
  width: 16px;
}

::-webkit-scrollbar-track {
  border-radius: 8px;
  background-color: transparent;
  border: 1px solid transparent;
}

::-webkit-scrollbar-thumb {
  border-radius: 8px;
  border: 3px solid transparent;
  background-clip: content-box;
  background-color: var(--color-text);
}
</style>
