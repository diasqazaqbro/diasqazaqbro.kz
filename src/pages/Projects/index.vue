<template>
  <div class='container'>
    <Breadcrumb :breadcrumb='breadcrumb' />
    <div class='project'>
      <h5>Активные</h5>
      <ProjectItem :info='one' />
      <ProjectItem :info='four' />
      <ProjectItem :info='two' />
      <ProjectItem :info='three' />
      <h5>Архив</h5>
      <ProjectItem :info='archive' />
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
      one: [
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
        },
      ],
      two: [
        {
          title: 'TopElectro',
          description: 'React-приложения для компании',
          icons: 'se',
          details: 'В этом проекте я был ответственным за разработку и поддержку React-приложения, которое предоставляло оздание SPA с использование Bootstrap’ом. Я работал в тесном сотрудничестве с дизайнерами, чтобы создать удобный и нтуитивно понятный пользовательский интерфейс.',
          links: [
            {
              name: 'Сам сайт',
              color: 'blue',
              icon: 'fa fa-globe',
              link: 'https://topecar.kz/'
            }
          ]
        },
      ],
      three: [
        {
          title: 'TrustTravel',
          description: 'Start-up',
          icons: 'se',
          details: 'Разработка стартапа где я CTO. Сайт написан на Next.js - это обертка над React которая дает SSR рендеринг.',
          links: [

          ]
        },
      ],
      four: [
        {
          title: 'Hudos.kz',
          description: 'Коммерчиский сайт для Архитекторов.',
          icons: 'se',
          details: 'Что сделал я: Создал и подключил админскую панель. Редизайн front-end части существующих веб-сайтов в едином минималистичном стиле, связывание с предоставленным заказчиком Web API.',
          links: [
          {
              name: 'Сам сайт',
              color: 'blue',
              icon: 'fa fa-globe',
              link: 'https://hudos.vercel.app/'
            }
          ]
        },
      ],
      archive: [
        {
          title: 'Разработка PHP-сайта для бизнеса',
          description: 'Сайт-для компаний',
          icons: 'dsad',
          details: 'В этом проекте я был ответственным за разработку PHP-сайта для бизнеса. Задача сайта состояла в предоставлении информации о компании, ее продуктах и услугах, а также обеспечении возможности клиентам связаться с компанией.',
        },
      ]
    }
  },
}
</script>

<style>
@import './style.module.sass';
</style>
