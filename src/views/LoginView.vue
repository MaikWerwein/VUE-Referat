<template>
  <form class="loginWrapper" @submit="checkForm">
    <div class="loginBox">
      <div v-if="!errors.pass" style="color: var(--color-error)">Falsche eingabe</div>
      <input class="name inputElement" type="name" v-model="email" placeholder="Email" />
      <input class="pass inputElement" type="password" v-model="pass" placeholder="Password" />
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
  border-bottom: 1px solid var(--color-border);

  font-size: large;

  padding-bottom: 3px;

  color: var(--color-text);
}

.name {
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

<script setup>
import { useRouter } from 'vue-router'
import { defineModel, ref } from 'vue'
import { store } from '../store.ts'

const errors = ref({
  pass: true
})

const router = useRouter()

const email = defineModel('email')
const pass = defineModel('pass')

function login() {
  store.token = 1
  router.push({ path: '/' })
}

function checkForm(e) {
  e.preventDefault()
  if (pass.value != null && pass.value != undefined && pass.value == 'pass') {
    login()
  } else {
    errors.value.pass = false
    console.log('User failed login.')
  }
}
</script>
