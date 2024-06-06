<script setup lang="ts">
import DocumentationIcon from './icons/IconDocumentation.vue'
import ToolingIcon from './icons/IconTooling.vue'
import EcosystemIcon from './icons/IconEcosystem.vue'
import CommunityIcon from './icons/IconCommunity.vue'
import SupportIcon from './icons/IconSupport.vue'
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

function toLogin() {
  router.push({ path: '/login' })
}

function toLogout() {
  router.push({ path: '/logout' })
}

function toHouses() {
  router.push({ path: '/houses' })
}
</script>

<style scoped>
.navBarWrapper {
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  height: 100vh;
  width: 80px;

  justify-content: center;

  position: relative;

  padding-right: 1rem;
}

.navBarWrapper > * {
  position: relative;
  left: 40px;
}
</style>

<template>
  <div class="navBarWrapper">
    <NavBarItem @click="route('/')" v-if="loggedIn">
      <DocumentationIcon />
    </NavBarItem>

    <NavBarItem @click="route('/houses')" v-if="loggedIn">
      <IconHouse />
    </NavBarItem>
    <NavBarItem @click="route('/about')">
      <DocumentationIcon />
    </NavBarItem>

    <NavBarItem @click="route('/logout')" v-if="loggedIn"> <IconLogout /> </NavBarItem>
    <NavBarItem @click="route('/login')" v-else> <IconLogin /> </NavBarItem>
  </div>
</template>
