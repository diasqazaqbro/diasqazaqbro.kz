<template>
  <div class='container'>
    <Breadcrumb :breadcrumb='breadcrumb' />
    <h3 class='text-blue'>Страница к сожалению не готова(</h3>
  </div>
</template>

<script lang="ts">
import { Breadcrumb } from '../../entities/Breadcrumb'
export default {
  components: {
    Breadcrumb,
  },
  data() {
    return {
      breadcrumb: {
        title: 'Неоморфизм',
        isArticle: true
      }
    }
  },

}
</script>

<style>
@import './style.module.sass';
</style>
