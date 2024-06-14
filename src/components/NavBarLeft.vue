<script setup lang="ts">
import DocumentationIcon from './icons/IconDocumentation.vue'
import NavBarItem from './NavBarItem.vue'
import IconLogin from './icons/IconLogin.vue'
import IconLogout from './icons/IconLogout.vue'
import IconHouse from './icons/IconHouse.vue'
import IconProfile from './icons/IconProfile.vue'

import { computed } from 'vue'

import { store } from '@/store.ts'

const loggedIn = computed(() => store.token == 1)
console.log('Logged in: ' + loggedIn.value)
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
    <NavBarItem route="home">
      <IconHouse />
    </NavBarItem>

    <NavBarItem route="profile" v-if="loggedIn">
      <IconProfile />
    </NavBarItem>

    <NavBarItem route="houses" v-if="loggedIn">
      <DocumentationIcon />
    </NavBarItem>

    <NavBarItem route="about" v-if="loggedIn">
      <DocumentationIcon />
    </NavBarItem>

    <NavBarItem route="logout" v-if="loggedIn"> <IconLogout /> </NavBarItem>
    <NavBarItem route="login" v-else> <IconLogin /> </NavBarItem>
  </div>
</template>
