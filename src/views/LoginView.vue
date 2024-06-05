<template>
  <div>
    <input type="email" v-model="email" placeholder="Email" />
    <input type="password" v-model="password" placeholder="Password" />
    <button @click="login">Login</button>
  </div>
</template>

<script setup>
import { useRouter } from 'vue-router'
import { defineModel } from 'vue'

const router = useRouter()

const email = defineModel('email')
const pass = defineModel('pass')

function login() {
  localStorage.setItem('token', 1)
  router.push({ path: '/' })
}
</script>
