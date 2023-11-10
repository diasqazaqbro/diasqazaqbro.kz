<template>
  <div v-for='(item, index) in info' :key='index' >
    <v-card class='skills rounded-xl' variant="tonal">
      <v-row>
        <v-col cols='2'>
          <v-progress-circular color="blue" :model-value="item.percent" :size="70" :width="12">
            <v-btn :icon="item.logo"></v-btn>
          </v-progress-circular>
        </v-col>
        <v-col>
          <h2>{{ item.title }}</h2>
          <p>{{ item.description }}</p>
          <h4>Реалеватные навыки</h4>
          <v-btn v-for='(skill, index) in item.skills' :key='index' rounded="xl" class='btn' density="compact"
            color='blue'>{{ skill }}</v-btn>
        </v-col>
      </v-row>
    </v-card>
  </div>
</template>

<script lang='ts'>
export default {
  props: {
    info: {
      type: Object,
      required: true
    }
  }
}
</script>

<style>
@import './style.module.sass';
</style>