<template>
  <div class="lg:col-2 md:col-3 col-6 card-outer">
    <div class="card-content">
      <div class="header flex vertical-align-middle justify-space-between">
        <IconHouse class="statusColor" />
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
  border-bottom: solid 1px var(--color-border);
}

.card-content {
  border: 1px solid var(--color-border);
}

.statusColor {
  color: v-bind('statusColor');
}
</style>

<script setup>
import IconHouse from './icons/IconHouse.vue'

defineProps({ house: null })

function randomInteger(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min
}

var status = randomInteger(0, 1)

console.log(status)

let statusColor = 'cyan'

switch (status) {
  case 0:
    statusColor = 'var(--color-accent) '
    break
  case 1:
    statusColor = 'var(--color-error)'
    break
  default:
    statusColor = 'blue'
}
</script>
