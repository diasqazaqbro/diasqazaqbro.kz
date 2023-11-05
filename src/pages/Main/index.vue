
<template>
  <div class='container'>
    <Profile/>
    <div class='main'>
      <v-row>
        <v-col>
          <RecentPost/>
        </v-col>
        <v-col style='margin-top: 52px;'>
          <NavBar/>
          <WakaTime/>
          <GithubLink/>
        </v-col>
      </v-row>
    </div>
    <Vue3Lottie :animationData="PoliteChicky" :height="200" :width="200" />

  </div>
</template>

<script lang="ts">

import axios from 'axios'
import { ref } from 'vue'
import { GithubLink } from "../../entities/GithubLink"
import { NavBar } from "../../entities/NavBar"
import { WakaTime } from "../../entities/WakaTime"
import PoliteChicky from '../../features/Polite.json'
import { Profile } from "../../widgets/Profile"
import { RecentPost } from "../../widgets/RecentPost"

interface IDataItems {
  color: string
  decimal: string
  digital: string
  hours: number
  minutes: number
  name: string
  percent: number
  text: string
  total_seconds: number
}


export default {
  components: {
    Profile, 
    RecentPost,
    GithubLink,
    NavBar,
    WakaTime
  },
  setup() {
    
    const dataItems1 = ref<IDataItems | any>([])
    const dataItems2 = ref<IDataItems | any>([])
    const dataItems3 = ref<IDataItems | any>([])
    const github = ref<any>({})

    axios.get('https://wakatime.com/share/@diasqazaqbro/966ccfd4-5f19-4ae6-ac3d-a07ff2a427f6.json', {
      responseType: 'json',
    })
      .then((response) => {
        dataItems1.value = response.data.data[0]
        dataItems2.value = response.data.data[1]
        dataItems3.value = response.data.data[2]
      })
    axios.get(`https://api.github.com/users/diasqazaqbro`)
      .then(response => {
        console.log(response.data)
        github.value = response.data
      })
      .catch(error => {
        console.error('Ошибка при получении репозиториев:', error)
      })
    return {
      dataItems1, dataItems2, dataItems3, github, 
    }
  },
  data() {
    return {
      PoliteChicky,
    }
  },
}
</script>


<style>
@import './styles.module.sass';
</style>
