<script setup lang="ts">
import { RouterView } from 'vue-router'
import NavBarLeft from './components/NavBarLeft.vue'
</script>

<template>
  <NavBarLeft />
  <div class="layoutWrapper grid">
    <div class="col-fixed sidebar-backdrop" />
    <RouterView class="col" />
  </div>
</template>

<style>
.layoutWrapper {
  position: absolute;

  box-sizing: border-box;

  width: 100vw;
  min-height: 100vh;
}

.sidebar-backdrop {
  width: 100px;
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
