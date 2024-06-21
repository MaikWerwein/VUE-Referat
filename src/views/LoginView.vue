<template>
  <form class="loginWrapper" @submit.prevent="submitLogin">
    <div class="loginBox">
      <div v-if="errors.input" style="color: var(--color-error)">{{ errors.input }}</div>
      <span style="position: relative" class="inputWrapper" :data-status="errors.name">
        <input
          class="name inputElement"
          type="text"
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
      <input class="loginBtn" type="submit" value="Login" :disabled="isSubmitting" />
    </div>
  </form>
</template><style scoped>
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
import { ref } from 'vue'
import { store } from '../store.ts'

const router = useRouter()
const userName = ref('')
const pass = ref('')
const errors = ref({
  pass: true,
  name: true,
  input: ''
})
const isSubmitting = ref(false)

function invalidateName() {
  if (!userName.value) {
    errors.value.name = false
  }
}

function validateName() {
  if (userName.value) {
    errors.value.name = true
  }
}

function invalidatePass() {
  if (!pass.value) {
    errors.value.pass = false
  }
}

function validatePass() {
  if (pass.value) {
    errors.value.pass = true
  }
}

async function submitLogin() {
  try {
    isSubmitting.value = true
    errors.value.input = ''

    const response = await fetch('/api/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        username: userName.value,
        password: pass.value
      })
    })

    const data = await response.json()

    if (data.success) {
      store.token = data.token
      router.push({ name: 'home' })
    } else {
      errors.value.input = data.error || 'Ungültige Anmeldedaten'
    }
  } catch (error) {
    errors.value.input = 'Fehler beim Login. Bitte versuchen Sie es später erneut.'
    console.error(error)
  } finally {
    isSubmitting.value = false
  }
}
</script>