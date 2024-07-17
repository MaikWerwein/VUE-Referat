<template>
  <form class="loginWrapper" @submit="checkForm">
    <div class="loginBox">
      <div v-if="!errors.input" style="color: var(--color-error)">Falsche eingabe</div>
      <span style="position: relative" class="inputWrapper" :data-status="errors.name">
        <input
          class="name inputElement"
          type="name"
          v-model="userName"
          placeholder="Name"
          @focusout="invalidateName()"
          @keydown="validateName()"
        />
        <IconWarn class="feedbackIcon" />
      </span>
      <span style="position: relative" class="inputWrapper" :data-status="errors.pass">
        <input
          class="pass inputElement"
          type="password"
          v-model="pass"
          placeholder="Password"
          @focusout="invalidatePass()"
          @keydown="validatePass()"
        />
        <IconWarn class="feedbackIcon" />
      </span>
      <input class="loginBtn" type="submit" value="Login" />
    </div>
  </form>
</template>
<style scoped>
.loginWrapper {
  flex-grow: 1;
  height: 100vh;
  display: flex;

  justify-content: center;
}

.loginBox {
  display: flex;
  flex-direction: column;
  justify-content: center;

  grid-row-gap: 20px;
}

.inputElement {
  background-color: transparent;
  border: 0;

  font-size: large;

  padding-bottom: 3px;

  color: var(--color-text);
}

.inputWrapper {
  border-bottom: 1px solid var(--color-border);

  transition: all 0.5s;

  &[data-status='true'] {
    color: transparent;
  }

  &[data-status='false'] {
    border-color: var(--color-error);
    color: var(--color-error);
  }
}

.feedbackIcon {
  transition: all 0.1s;
}

.loginBtn {
  background-color: var(--color-accent);
  border-radius: 4px;
  border: 0;

  font-size: large;

  transition: all 0.25s;

  &:hover {
    box-shadow: 0 0px 10px 0px var(--color-accent);
  }
}

input:focus {
  outline-width: 0;
}
</style>

<script setup lang="ts">
import IconWarn from '@/components/icons/IconWarn.vue'

import { useRouter } from 'vue-router'
import { defineModel, ref } from 'vue'
import { store } from '../store.ts'
import { House, Sensor } from '@/components/HouseType.ts'

const errors = ref({
  pass: true,
  name: true,
  input: true
})

const router = useRouter()

const userName = defineModel('userName', { type: String })
const pass = defineModel('pass', { type: String })
userName.value = 'admin@admin.de'
pass.value = 'admin123'

function login() {
  const apiUrl = 'http://127.0.0.1:8080/api/login_check'
  const data = {
    password: pass.value,
    email: userName.value
  }

  const requestOptions = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },

    body: JSON.stringify(data)
  }

  fetch(apiUrl, requestOptions)
    .then((response) => {
      if (!response.ok) {
        throw new Error('Network response was not ok')
      }
      return response.json()
    })
    .then((data) => {
      store.token = data.token
      getData().then((houses) => {
        store.data = []
        houses.forEach((house) => {
          store.data.push(translateHouse(house))
        })
        router.push({ name: 'home' })
      })
    })
    .catch((error) => {
      console.error('Error:', error)
    })
}

function invalidateName() {
  if (userName == null || userName.value == undefined) {
    errors.value.name = false
    return
  }
  if (userName.value.length == 0) {
    errors.value.name = false
    return
  }
}

function validateName() {
  if (userName == null || userName.value == undefined) {
    return
  }
  if (userName.value.length == 0) {
    return
  }

  errors.value.name = true
}

function invalidatePass() {
  if (pass == null || pass.value == undefined) {
    errors.value.pass = false
    return
  }
  if (pass.value.length == 0) {
    errors.value.pass = false
    return
  }
}

function validatePass() {
  if (pass == null || pass.value == undefined) {
    return
  }
  if (pass.value.length == 0) {
    return
  }
  errors.value.pass = true
}

function checkForm(e: Event) {
  e.preventDefault()
  login()
}

async function getData(): Array<Object> {
  const apiUrl = 'http://127.0.0.1:8080/api/homes'

  const requestOptions = {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${store.token}`
    }

    //   body: JSON.stringify(data)
  }
  let housesResponse = await fetch(apiUrl, requestOptions)
  let housesData = await housesResponse.json()

  let houses = housesData['hydra:member']

  for (const houseKey of Object.keys(houses)) {
    let house = houses[houseKey]
    let sensors = house['sensors']
    let measurementAreas = house['measurementAreas']

    for (const sensorKey of Object.keys(sensors)) {
      let sensorUrl = sensors[sensorKey]
      const apiUrl = 'http://127.0.0.1:8080' + sensorUrl

      const requestOptions = {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${store.token}`
        }

        //   body: JSON.stringify(data)
      }

      let sensorResponse = await fetch(apiUrl, requestOptions)
      let sensor = await sensorResponse.json()

      houses[houseKey]['sensors'][sensorKey] = sensor

      let measuredValues = sensor['measuredValues']


      for (const measuredValueKey of Object.keys(measuredValues)) {
        let measuredValueUrl = measuredValues[measuredValueKey]
        const apiUrl = 'http://127.0.0.1:8080' + measuredValueUrl

        const requestOptions = {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${store.token}`
          }

          //   body: JSON.stringify(data)
        }

        let measuredValueResponse = await fetch(apiUrl, requestOptions)
        houses[houseKey]['sensors'][sensorKey]['measuredValues'][measuredValueKey] = await measuredValueResponse.json()

      }
    }

    for (const measurementAreasKey of Object.keys(measurementAreas)) {
      let measurementAreasUrl = measurementAreas[measurementAreasKey]
      const apiUrl = 'http://127.0.0.1:8080' + measurementAreasUrl

      const requestOptions = {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${store.token}`
        }

        //   body: JSON.stringify(data)
      }

      let measurementAreasResponse = await fetch(apiUrl, requestOptions)
      houses[houseKey]['measurementAreas'][measurementAreasKey] = await measurementAreasResponse.json()
    }

  }
  return houses
}

function translateSensor(sensor: object): Sensor {
  const measurements: Array<string> = []
  sensor['measuredValues'].forEach((measuredValue: object) => {
    const measurement: Measurement = {
      id: measuredValue['id'],
      description: measuredValue['description'],
      measured_at: new Date(measuredValue['timestamp']),
      value: measuredValue['value']
    }
    measurements.push(measurement)
  })
  return {
    id: sensor['id'],
    name: sensor['name'],
    type: measurements[0]['description'],
    measurements: measurements
  }
}

function translateHouse(house: object): House {
  const sensors: Array<Sensor> = []
  house['sensors'].forEach((sensor: object) => {
    sensors.push(translateSensor(sensor))
  })
  return {
    name: house['id'],
    address: house['address'],
    sensors: sensors
  }
}
</script>
 