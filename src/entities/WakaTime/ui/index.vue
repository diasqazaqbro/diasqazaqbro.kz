<template>
  <a target="_blank" href='https://wakatime.com/@diasqazaqbro' class='block d-flex rounded-lg'>
    <div class='time'>
      <figure><embed src="https://wakatime.com/share/@diasqazaqbro/ef5a7d7f-92b9-42d0-9423-4293b3ae19c9.svg" />
      </figure>
    </div>
    <p>На этой недел я писал код на
      <span :style="{ color: dataItems1.color }">{{ dataItems1.name }}</span>, <span
        :style="{ color: dataItems2.color }">{{ dataItems2.name }}</span>, <span :style="{ color: dataItems3.color }">{{
          dataItems3.name }}</span> и т.д
    </p>
  </a>
</template>

<script lang="ts">

import axios from 'axios'
import { ref } from 'vue'

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
  setup() {

    const dataItems1 = ref<IDataItems | any>([])
    const dataItems2 = ref<IDataItems | any>([])
    const dataItems3 = ref<IDataItems | any>([])

    axios.get('https://wakatime.com/share/@diasqazaqbro/966ccfd4-5f19-4ae6-ac3d-a07ff2a427f6.json', {
      responseType: 'json',
    })
      .then((response) => {
        dataItems1.value = response.data.data[0]
        dataItems2.value = response.data.data[1]
        dataItems3.value = response.data.data[2]
      })

    return {
      dataItems1, dataItems2, dataItems3,
    }
  },
}
</script>
