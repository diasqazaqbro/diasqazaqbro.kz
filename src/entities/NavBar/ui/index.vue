<template>
  <div class='block rounded-lg'>
    <v-btn size="large" rounded="lg" block prepend-icon="fa fa-code-fork" variant="text">
      <router-link to='/projects'>Проекты</router-link>
    </v-btn>
    <v-btn size="large" rounded="lg" block prepend-icon="fa fa-user" variant="text">
      <router-link to='/about'>Обо мне</router-link>
    </v-btn>
    <v-btn size="large" rounded="lg" block prepend-icon="fa fa-font" variant="text">
      <router-link to='/articles'>Статьи</router-link>
    </v-btn>
  </div>
</template>

<script lang="ts">

export default {
  setup() {
    return {}
  }
}
</script>

<style></style>