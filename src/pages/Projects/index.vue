<template>
  <div class='container'>
    <Breadcrumb :breadcrumb='breadcrumb' />
    <div class='project'>
      <h5>Активные</h5>
      <ProjectItem :info='active' />
      <h5>Архив</h5>
    </div>
  </div>
</template>

<script lang="ts">
import { Breadcrumb } from '../../entities/Breadcrumb'
import { ProjectItem } from '../../entities/ProjetcItem'
export default {
  components: {
    Breadcrumb,
    ProjectItem
  },
  data() {
    return {
      breadcrumb: {
        title: 'Проекты',
        isArticle: false
      },
      showDetails: false,
      active: [
        {
          title: 'diasqazaqbro v2',
          description: 'Сайт-визитка',
          icons: 'dsad',
          details: 'Веб-сайт со всей нужной информацией обо мне и небольшим блогом. Дизайн (небольшой UI Kit) создан в Figma, сайт разработан с использованием Vue 3, TypeScript и SCSS.',
          links: [
            {
              name: 'Сам сайт',
              color: 'blue',
              icon: 'fa fa-globe',
              link: ''
            }
          ]
        }
      ]
    }
  },
}
</script>

<style>
@import './style.module.sass';
</style>
