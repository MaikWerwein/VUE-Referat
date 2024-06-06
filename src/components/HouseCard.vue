<template>
  <div class="lg:col-2 md:col-3 col-6 card-outer">
    <div data-status="ok" class="card-content">
      <div class="header flex vertical-align-middle justify-space-between">
        <IconHouse />
        <span class="title-text pl-2">
          {{ house.adresse }}
        </span>
      </div>
    </div>
  </div>
</template>

<style scoped>
.card-outer {
  box-sizing: border-box;
  padding: 4px;
}
.card-content {
  padding: 6px;
  border-radius: 5px;
  min-height: 100px;
}

.title-text {
  font-size: 125%;
}

.header {
  /* ???????? */
  border-bottom: solid 1px var(--color-border);
}

.card-content[data-status='ok'] {
  border: 1px solid var(--color-accent);
}
</style>

<script setup>
import { defineProps } from 'vue'
import IconHouse from './icons/IconHouse.vue'

defineProps({ house: null })
</script>
