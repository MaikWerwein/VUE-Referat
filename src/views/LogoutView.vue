<script setup lang="ts">
import { useRouter } from 'vue-router'
import { store } from '../store.ts'

console.log('logging out')

store.token = 0

useRouter().push({ path: '/login' })
</script>
