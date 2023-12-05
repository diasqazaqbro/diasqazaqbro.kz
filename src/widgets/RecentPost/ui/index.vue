<template>
  <div class="recent__post">
    <v-btn size="x-large" variant="text"> Недавние посты </v-btn>
    <Post />
    <div class="post">
      <v-card class="post rounded-lg" variant="tonal">
        <h2>🧩 Тут могла бы быть ваша реклама)</h2>
        <h4>дада реклама</h4>
        <v-card-actions>
          <a href="https://t.me/diasqazaqbro" target="_blank"
            ><v-btn color="blue" variant="text"> Получить рекламку </v-btn></a
          >
        </v-card-actions>
      </v-card>
    </div>
  </div>
</template>

<script lang="ts">
import { Post } from "../../../entities/Post";
export default {
  components: {
    Post,
  },
};
</script>
