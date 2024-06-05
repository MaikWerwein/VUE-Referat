<script setup lang="ts">
import WelcomeItem from './WelcomeItem.vue'
import DocumentationIcon from './icons/IconDocumentation.vue'
import ToolingIcon from './icons/IconTooling.vue'
import EcosystemIcon from './icons/IconEcosystem.vue'
import CommunityIcon from './icons/IconCommunity.vue'
import SupportIcon from './icons/IconSupport.vue'
import NavBarItem from './NavBarItem.vue'
</script>

<style scoped>
.navBarWrapper {
  margin-top: 5rem;
  display: flex;
  flex-direction: column;
  min-height: 95vh;
  width: 80px;
  left: -40px;

  position: relative;
  top: 5rem;
  left: 1rem;
}

.navBarWrapper > * {
  position: relative;
  left: 40px;
}

.navBarWrapper > *:last-child {
  flex-grow: 1;
  vertical-align: bottom;
}
</style>

<template>
  <div class="navBarWrapper">
    <NavBarItem>
      <template #icon>
        <DocumentationIcon />
      </template>
    </NavBarItem>

    <NavBarItem>
      <template #icon>
        <DocumentationIcon />
      </template>
    </NavBarItem>
    <NavBarItem>
      <template #icon>
        <DocumentationIcon />
      </template>
    </NavBarItem>
    <NavBarItem>
      <template #icon>
        <DocumentationIcon />
      </template>
    </NavBarItem>

    <NavBarItem>
      <template #icon>
        <ToolingIcon />
      </template>
    </NavBarItem>
  </div>
</template>
