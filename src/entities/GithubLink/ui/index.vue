<template>
  <a target="_blank" href='https://github.com/diasqazaqbro' class='block rounded-lg'>
    <div class='post'>
      <h2><v-btn density="comfortable" icon="fa-brands fa-github"></v-btn> {{ github.login }}</h2>
      <h4>{{ github.bio }}</h4>
    </div>
  </a>
</template>

<script lang="ts">

import axios from 'axios'
import { ref } from 'vue'

export default {
  setup() {

    const github = ref<any>({})
    axios.get(`https://api.github.com/users/diasqazaqbro`)
      .then(response => {
        console.log(response.data)
        github.value = response.data
      })
      .catch(error => {
        console.error('Ошибка при получении репозиториев:', error)
      })
    return {
      github
    }
  },

}
</script>

<style scoped></style>