<script setup>
import { useRouter } from 'vue-router'

console.log('logging out')

localStorage.setItem('token', 0)

useRouter().push({ path: '/login' })
</script>
