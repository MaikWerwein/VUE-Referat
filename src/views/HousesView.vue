<script setup>
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
  margin: auto;
  padding: 10px;
  height: 100%;
  flex-grow: 1;
  padding-left: 2rem;
  padding-top: 2rem;
}

.housesGrid {
  width: 100%;
}
</style>
