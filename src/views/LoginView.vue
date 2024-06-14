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

const errors = ref({
  pass: true,
  name: true,
  input: true
})

const router = useRouter()

const userName = defineModel('userName')
const pass = defineModel('pass')

function login() {
  store.token = 1
  router.push({ path: '/' })
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

function checkForm(e) {
  e.preventDefault()
  login()
}
</script>
