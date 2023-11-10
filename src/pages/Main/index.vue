
<template>
  <div class='container'>
    <Profile />
    <div class='main'>
      <v-row>
        <v-col>
          <RecentPost />
        </v-col>
        <v-col style='margin-top: 52px;'>
          <NavBar />
          <WakaTime />
          <GithubLink />
        </v-col>
      </v-row>
      <v-btn size='x-large' variant="text">
        Основные навыки
      </v-btn>
      <div style='margin-left: 20px;'>
        <Skills :info='info' />
      </div>

    </div>
    <Vue3Lottie :animationData="PoliteChicky" :height="200" :width="200" />

  </div>
</template>

<script lang="ts">

import { GithubLink } from "../../entities/GithubLink"
import { NavBar } from "../../entities/NavBar"
import { Skills } from "../../entities/Skills"
import { WakaTime } from "../../entities/WakaTime"
import PoliteChicky from '../../features/Polite.json'
import { Profile } from "../../widgets/Profile"
import { RecentPost } from "../../widgets/RecentPost"


export default {
  components: {
    Profile,
    RecentPost,
    GithubLink,
    NavBar,
    WakaTime,
    Skills
  },

  data() {
    return {
      PoliteChicky,
      info: [
        {
         title: 'Навык в владений React.js',
          description: 'React`ом пользуюсь очень давно, я застал те времена когда был функциональный подход, но все пользовались классовым подходом. Были времена где все делали контейнеры для компонента, где redux был жестко неудобным.',
          skills: ['react', 'react-router-dom', 'redux', 'redux-toolkit', 'next.js 14','vite', 'antd', 'bootsrap', 'sass/scss', 'react-select (и другие крутые библиотеки)'],
          logo: 'fab fa-react',
          percent: '85'
        },
        {
          title: 'Навык в владений Vue.js',
          description: 'Недавно начал пользоваться Vue.js и мне казалось это новым глатком воздуха в этом айтишном мире. Даже хочется использовать Vue чаще чем React.',
          skills: ['vue 3', 'vuex', 'vue router', 'vuetlify', 'vite', 'sass', 'lottie animation'],
          logo: 'fab fa-vuejs',
          percent: '45'
        }
      ]
    }
 
  },
}
</script>


<style>
@import './styles.module.sass';</style>