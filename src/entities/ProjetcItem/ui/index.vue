<template>
  <div v-for='(item, index) in info' :key='index'>
    <div @click='toggleShow' :style='backgroundCard' class='card' id='card'>
      <div class='title'>
        <v-row>
          <v-col class="d-sm-block d-none" cols='1'>
            <v-avatar class='ava' color="surface-variant" size="50" />
            <!-- <v-avatar image="smirk.png" size="50"></v-avatar> -->
          </v-col>
          <v-col>
            <h2>{{ item.title }}</h2>
            <h4>{{ item.description }}</h4>
          </v-col>
        </v-row>
        <v-icon v-if='showDetails'>fas fa-chevron-up</v-icon>
        <v-icon v-else>fas fa-chevron-down</v-icon>
      </div>
      <div v-if='showDetails' class='show'>
        <v-divider></v-divider>
        <h5>Описание</h5>
        <p>{{ item.details }}</p>
        <h5>Ссылки</h5>
        <v-btn v-for='(i, index) in item.links' :key='index' :prepend-icon='i.icon' rounded="xl" class='btn'
          :color='i.color'><a :href='i.link'>{{ i.name }}</a></v-btn>
      </div>
    </div>
  </div>
</template>

<script lang='ts'>
export default {
  props: {
    info: {
      type: Object,
      required: true
    }
  },
  data() {
    return {
      showDetails: false,
      backgroundCard: ''
    }
  },
  methods: {
    toggleShow() {
      this.showDetails = !this.showDetails
      if (this.backgroundCard == 'background: #323436;') {
        this.backgroundCard = ''
      } else {
        this.backgroundCard = 'background: #323436;'
      }
    }
  }
}
</script>
