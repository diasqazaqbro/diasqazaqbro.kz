<template>
  <v-sheet v-if='!breadcrumb.isArticle' class='breadcrumb flex rounded-xl'>
    <div>
      <h2>{{ breadcrumb.title }}</h2>
    </div>
    <div>
      <router-link to='/'><v-btn variant='plain' icon='fa fa-times' /></router-link>
    </div>
  </v-sheet>
  <v-sheet v-else class='breadcrumb rounded-xl'>
    <div>
      <router-link to='/articles'><v-btn variant='plain' icon='fas fa-angle-left' /></router-link>
    </div>
    <div>
      <h2 class='text-left'>{{ breadcrumb.title }}</h2>
    </div>
  </v-sheet>
</template>

<script lang="ts">



export default {
  props: {
    breadcrumb: {
      type: Object,
      required: true
    }
  }

}
</script>

<style>
@import './style.module.sass';
</style>