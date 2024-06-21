<script setup lang="ts">
import HouseCard from '@/components/HouseCard.vue'
import { ref, computed, onMounted } from 'vue'

// import houses from '@/assets/data.json'x
// import { computed } from 'vue'

const houses = ref([])

const loadHouses = async () => {
  try {
    const response = await fetch('http://localhost:8000/houses');
    if (!response.ok) {
      throw new Error('Daten konnten nicht geladen werden')
    }
    houses.value = await response.json()
  } catch (error) {
    console.error('Fehler beim Laden der Häuserdaten:', error)
  }
}

onMounted(loadHouses)
const filter = ref('') // Verwenden Sie ref für einfache Textfilterung

const filteredHouses = computed(() => {
  return houses.value.filter((h) => { // Zugriff auf das Array mit houses.value
    return (
      h.address.toLowerCase().includes(filter.value.toLowerCase()) ||
      h.name.toLowerCase().includes(filter.value.toLowerCase())
    )
  })
})
</script>

<!-- // const filter = defineModel('filter', { type: String, default: '' })

// const filteredHouses = computed(() => {
// return houses.filter((h) => {
// return (
// h.address.toLowerCase().includes(filter.value.toLowerCase()) ||
// h.name.toLowerCase().includes(filter.value.toLowerCase())
// )
// })
// })
// </script> -->

<template>
  <div class="center-content">
    <div class="housesGrid grid grid-nogutter">
      <div class="actionBar col-12">
        <input type="text" placeholder="Namen/Adresssuche" v-model="filter" class="addressSearch" />
      </div>
      <HouseCard v-for="house in filteredHouses" :house="house" :key="house.address" />
    </div>
  </div>
</template>

<style scoped>
.center-content {
  padding: 0;
  box-sizing: border-box;
  height: 100%;
  padding-top: 2rem;
}

.housesGrid {
  margin-right: 1rem;
}

.actionBar {
  position: sticky;
  top: 10px;
  height: 35px;
  border-radius: 6px;
  border: 1px solid var(--color-border);
  background-color: var(--color-background);

  display: flex;
  align-content: center;
}

.addressSearch {
  width: 100%;
  background-color: transparent;
  border: 0;

  font-size: large;

  padding-bottom: 3px;

  color: var(--color-text);
  /* border-bottom: 1px solid var(--color-border); */
  margin: 5px 5px 0px 5px;
}

input:focus {
  outline-width: 0;
}
</style>