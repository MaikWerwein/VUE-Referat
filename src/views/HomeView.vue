<script setup lang="ts">
import { computed } from 'vue'

import { store } from '@/store.ts'

const loggedIn = computed(() => store.token == 1)
</script>

<template>
  <div class="home-wrapper">
    <div class="home">
      <h1>Welcome to <c>your</c> Smart City</h1>
      <span v-if="!loggedIn">
        Please <RouterLink :to="{ name: 'login' }">Log in</RouterLink> in to view the dashboard
      </span>
      <span v-else>
        Go to <RouterLink :to="{ name: 'profile' }">your Profile</RouterLink> or the
        <RouterLink :to="{ name: 'houses' }"> House-Overview</RouterLink>
      </span>
    </div>
  </div>
</template>

<style scoped>
.home-wrapper {
  min-height: 100vh;
  display: flex;
  align-items: center;
}

@media (min-width: 1024px) {
  .home {
    min-width: 100vw;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
}

a {
  position: relative;
}

a::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 0.1em;
  background-color: var(--color-accent);
  opacity: 0;
  transition:
    opacity 300ms,
    transform 300ms;
}

a:hover::after,
a:focus::after {
  opacity: 1;
  transform: translate3d(0, 0.2em, 0);
}
</style>
