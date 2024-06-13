<script setup lang="ts">
import DocumentationIcon from './icons/IconDocumentation.vue'
import NavBarItem from './NavBarItem.vue'
import IconLogin from './icons/IconLogin.vue'
import IconLogout from './icons/IconLogout.vue'
import IconHouse from './icons/IconHouse.vue'

import { computed } from 'vue'

import { store } from '@/store.ts'
import { useRouter } from 'vue-router'

const loggedIn = computed(() => store.token == 1)
console.log('Logged in: ' + loggedIn.value)

const router = useRouter()

function route(route: string) {
  router.push({ path: route })
}
</script>

<style scoped>
.navBarWrapper {
  z-index: 100;
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100vh;
  width: 80px;

  justify-content: center;

  position: fixed;
}

.navBarWrapper > * {
  position: relative;
}
</style>

<template>
  <div class="navBarWrapper">
    <NavBarItem route="home" v-if="loggedIn">
      <DocumentationIcon />
    </NavBarItem>

    <NavBarItem route="houses" v-if="loggedIn">
      <IconHouse />
    </NavBarItem>

    <NavBarItem route="about">
      <DocumentationIcon />
    </NavBarItem>

    <NavBarItem route="logout" v-if="loggedIn"> <IconLogout /> </NavBarItem>
    <NavBarItem route="login" v-else> <IconLogin /> </NavBarItem>
  </div>
</template>
