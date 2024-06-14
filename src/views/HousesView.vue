<script setup lang="ts">
import HouseCard from '@/components/HouseCard.vue'

import houses from '@/assets/data.json'
</script>

<template>
  <div class="center-content">
    <div class="housesGrid grid grid-nogutter">
      <HouseCard v-for="house in houses" :house="house" :key="house.ID" />
    </div>
  </div>
</template>

<style scoped>
.center-content {
  padding: 0;
  box-sizing: border-box;
  height: 100%;
  padding-top: 2rem;
}

.housesGrid {
  margin-right: 1rem;
}
</style>
