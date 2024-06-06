<script setup>
import { useRouter } from 'vue-router'
import { store } from '../store.js'

console.log('logging out')

store.token = 0

useRouter().push({ path: '/login' })
</script>
