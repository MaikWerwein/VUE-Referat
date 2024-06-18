<template>
  <div class="xl:col-2 lg:col-3 md:col-4 sm:col-6 col-12 card-outer">
    <div class="card-content">
      <div class="header flex vertical-align-middle justify-space-between">
        <IconHouse class="statusColor" :data-status="issue" />
        <span class="title-text pl-2">
          {{ house.name }}
        </span>
      </div>
      <div class="grid" v-for="[key, value] in readingsMap" :key="key">
        <div class="col-8">{{ key[0].toUpperCase() + key.slice(1) }}</div>
        <div class="col-1">:</div>
        <div class="col-3">{{ value }}</div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.card-outer {
  box-sizing: border-box;
  padding: 6px;
}
.card-content {
  padding: 12px;

  border-radius: 5px;
  min-height: 160px;

  height: 100%;
}

.title-text {
  font-size: 125%;
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
}

.header {
  border-bottom: solid 1px var(--color-border);
  margin-bottom: 4px;
}

.card-content {
  border: 1px solid var(--color-border);
}

.statusColor {
  color: var(--color-error);
  &[data-status=''] {
    color: var(--color-accent);
  }
}
</style>

<script setup lang="ts">
import type { PropType, Ref } from 'vue'
import { ref } from 'vue'
import IconHouse from './icons/IconHouse.vue'

type Measurements = {
  id: number
  sensor_id: number
  description: string
  measured_at: Date
  value: number
}

type Sensor = {
  id: number
  house_id: string
  type: string
  serial_number: string
  manufacturer: string
  model: string
  measurements: Array<Measurements>
}

type House = {
  name: string
  address: string
  sensors: Array<Sensor>
}

const props = defineProps({ house: { type: Object as PropType<House>, required: true } })

let valueMap: Map<string, Array<Sensor>> = new Map()

props.house.sensors.forEach((element: Sensor) => {
  let type: string = element.type
  if (!valueMap.has(type)) {
    valueMap.set(type, [])
  }

  valueMap.get(type)?.push(element)
})

let readingsMap: Ref<Map<string, number>> = ref(new Map())

valueMap.forEach((sensors, key) => {
  let lastValues = sensors.map((sensor) => {
    return sensor.measurements.sort((s1, s2) => {
      return s2.measured_at.getTime() - s1.measured_at.getTime()
    })[0].value
  })

  let total = lastValues.reduce((partialSum, a) => partialSum + a, 0) //Alles zusammenzöhlen
  let avg = total / lastValues.length

  avg = Math.round((avg + Number.EPSILON) * 100) / 100

  readingsMap.value.set(key, avg)
})

console.log('House:' + props.house.name)
console.log(readingsMap.value)

function randomInteger(min: number, max: number) {
  return Math.floor(Math.random() * (max - min + 1)) + min
}

function randomIssue() {
  switch (randomInteger(0, 10)) {
    case 1:
      return 'Gasleak'
    case 2:
      return 'Waterleak'
    default:
      return ''
  }
}

const issue = defineModel('issue', { type: String })
issue.value = randomIssue()
</script>
