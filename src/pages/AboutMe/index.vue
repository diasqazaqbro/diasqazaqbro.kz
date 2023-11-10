<template>
  <div class='container'>
    <Breadcrumb :breadcrumb='breadcrumb' />
    <div class='about'>
      <h2 class="title">Если коротко</h2>
      <p> Я - Frontend/Backend веб-разработчик. В разработке с 2018 года и я постоянно развиваюсь и изучаю новые технологии в сфере IT. Я живу и работаю в <span class='text-blue'>Алмате (часовой пояс GMT+6)</span>.
        <br> <br>
        Для работы я предпочитаю продукцию <span class='text-blue'>Apple</span> такие как <span class='text-blue'>MacBook и iPad</span>, мой основной компьютер - <span class='text-blue'>MacBook Air 13” (2022)</span>. Пишу код в редакторе <span class='text-blue'>Visual Studio Code</span>.
        Для дизайна пользовательских интерфейсов использую в основном <span class='text-blue'>Figma</span>. Учусь в универстите, работаю на работе.</p>
      <h2>Что я умею и насколько хорошо</h2>
      <Skills :info='info' />
    </div>
  </div>
</template>

<script lang="ts">
import { Breadcrumb } from '../../entities/Breadcrumb'
import { Skills } from '../../entities/Skills'
export default {
  components: {
    Breadcrumb,
    Skills
  },
  data() {
    return {
      breadcrumb: {
        title: 'Обо мне',
        isArticle: false
      },
      info: [
        {
          title: 'Разработка Frontend',
          description: 'Моя основная специализация. Я использовал React с 2019 года и с недавнего времени использую Vue. При вёрстке интерфейсов использую БЭМ, Flexbox, а если придётся, то и Grid.Стараюсь соблюдать гайдлайны семантической вёрстки.',
          skills: ['html5', 'javascript (es2021)', 'css3(flexbox, grid)', 'spa', 'pwa', 'vue3 (vuex, vue router, vuetify)', 'react (redux-toolkit, react-router-dom)',],
          logo: 'fab fa-react',
          percent:'70'
        },
        {
          title: 'Разработка Backend',
          description: 'Создаю REST/JSON API на Node.js с использованием фреймворка Express. В будущем планирую попробовать NestJS.',
          skills: ['node.js', 'express.js', 'typescript', 'mongodb', 'mongoose', 'strapi', 'postgreSQL'],
          logo: 'fab fa-node-js',
          percent: '45'
        },
        {
          title: 'DevOps (администрирование серверов)',
          description: 'Очень активно использую Docker и Docker Compose, был опыт использования Docker Swarm. Умею настраивать NGINX. Планирую попробовать Kubernetes и Ansible.',
          skills: ['docker', 'docker compose', 'docker swarm', 'nginx'],
          logo: 'fab fa-docker',
          percent:'30'
        },
        {
          title: 'Дизайн интерфейсов (UI/UX)',
          description: 'Для дизайна я использую Figma вместе с компонентами, Auto Layout и прочими удобными возможностями этой программы.',
          skills: ['figma', 'ui/ux', 'auto layout', 'material design'],
          logo: 'fab fa-figma',
          percent:'60'
        },
      ]
    }
  }
}
</script>

<style>
@import './style.module.sass';
</style>
