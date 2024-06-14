<template>
  <router-link class="item" :data-active="isActiveRoute.value" :to="{ name: route }">
    <i>
      <slot></slot>
    </i>
    <span class="tooltip">{{ route.toUpperCase() }}</span>
  </router-link>
</template>

<style scoped>
.item {
  cursor: pointer;

  margin-top: 2rem;
  display: flex;
  min-height: 80px;
  position: absolute;
  align-items: center;
  width: 0px;

  color: var(--color-text);

  &:hover > * {
    color: var(--color-text-hover);
  }

  &[data-active='true'] {
    > * {
      color: var(--color-accent);
    }
  }
}

.tooltip {
  position: absolute;
  left: 2rem;

  visibility: hidden;

  background-color: var(--color-background);
  padding: 2px 5px;

  border: 1px solid var(--color-border);
  border-radius: 6px;
}

.item:hover > .tooltip {
  visibility: visible;
}

i {
  transition: 0.2s;

  display: flex;
  place-items: center;
  place-content: center;

  border: 1px solid var(--color-border);

  top: calc(50% - 25px);
  left: -26px;
  position: absolute;

  background: var(--color-background);
  border-radius: 8px;
  width: 50px;
  height: 50px;
}

.item:before {
  content: ' ';
  border-left: 1px solid var(--color-border);
  position: absolute;
  left: 0;
  bottom: calc(50% + 25px);
  height: calc(50% - 25px);
}

.item:after {
  content: ' ';
  border-left: 1px solid var(--color-border);
  position: absolute;
  left: 0;
  top: calc(50% + 25px);
  height: calc(50% - 25px);
}

.item {
  margin-top: 0;
  padding: 0;
}

.item:first-of-type:before {
  display: none;
}

.item:last-of-type:after {
  display: none;
}
</style>

<script setup lang="ts">
import { ref } from 'vue'
import { useRouter } from 'vue-router'

const props = defineProps({ route: String })

const route = props.route
let isActiveRoute = ref({ value: false })

const router = useRouter()

router.afterEach((to) => {
  isActiveRoute.value.value = route === to.name
})
</script>
