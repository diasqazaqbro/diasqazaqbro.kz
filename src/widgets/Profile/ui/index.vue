<template>
  <div class='profile'>
    <v-row justify="center">
      <v-col cols="3">
        <v-avatar class='avatar' image="https://avatars.githubusercontent.com/u/102165173?v=4"
          size="150"></v-avatar>
      </v-col>
      <v-col cols='9'>
        <div class='me'>
          <h2><a href=''>{{ randomGreeting }},</a> Я Frontend <br> Разработчик.</h2>
          <div class='social'>
            <v-btn prepend-icon="fa-brands fa-github" variant="tonal">
              <a href='https://github.com/diasqazaqbro' target="_blank">Github</a>
            </v-btn>
            <v-btn prepend-icon="fa-brands fa-linkedin" variant="tonal">
              <a href='https://www.linkedin.com/in/diasqazaq/' target="_blank">Linkedin</a>
            </v-btn>
            <v-btn prepend-icon="fa-brands fa-telegram" variant="tonal">
              <a href='https://t.me/diasqazaqbro' target="_blank">Telegram</a>
            </v-btn>
          </div>
        </div>
      </v-col>
    </v-row>
  </div>
</template>

<script lang='ts'>
import { ref } from 'vue'
export default {
  
  setup() {
    const greetings = [
      'Привет',
      'Добрый вечер',
      'Саламалейкум',
      'hello world',
      'Привет-привет',
    ]

    const randomGreeting = ref('')

    const randomIndex = Math.floor(Math.random() * greetings.length)
    randomGreeting.value = greetings[randomIndex]
    return {
      randomGreeting
    }
  }
}
</script>

<style>
@import './style.module.sass';
</style>