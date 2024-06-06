<template>
  <div class="lg:col-2 md:col-3 col-6 card-outer">
    <div data-status="ok" class="card-content">{{ house.adresse }}</div>
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
}

.card-content[data-status='ok'] {
  border: 1px solid var(--color-accent);
}
</style>

<script setup>
import { defineProps } from 'vue'

defineProps({ house: null })
</script>
