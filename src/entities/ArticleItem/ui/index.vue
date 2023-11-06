<template>
  <div class='articles' v-for='(item, index) in articleTitle' :key='index'>
    <router-link :to='item.to'>
      <div class='article'>
        <div>
          <h2 class='text-blue'>{{ item.name }}</h2>
          <h4>{{ item.date }}</h4>
        </div>
        <v-icon class='text-blue'>fas fa-chevron-right</v-icon>
      </div>
    </router-link>
  </div>
</template>

<script lang="ts">



export default {
  props: {
    articleTitle: {
      type: Object,
      required: true
    }
  },

}
</script>

<style>
@import './style.module.sass';
</style>