<template>
  <div class="block rounded-lg">
    <router-link to="/projects">
      <v-btn
        size="large"
        rounded="lg"
        block
        prepend-icon="fa fa-code-fork"
        variant="text"
      >
        Проекты
      </v-btn>
      </router-link>
    <router-link to="/about">
      <v-btn
        size="large"
        rounded="lg"
        block
        prepend-icon="fa fa-user"
        variant="text"
      >
        Обо мне
      </v-btn>
    </router-link>
    <router-link to="/articles">
      <v-btn
        size="large"
        rounded="lg"
        block
        prepend-icon="fa fa-font"
        variant="text"
      >
        Статьи
      </v-btn>
    </router-link>
  </div>
</template>

<script lang="ts">
export default {
  setup() {
    return {};
  },
};
</script>

<style></style>
