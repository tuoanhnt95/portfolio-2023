<template>
  <div>
    <div class="text-2xl lg:text-3xl xl:text-4xl font-bold">
      My Projects
    </div>
    <div class="grid grid-cols-3">
      <div v-for="(project, i) in projects" :key="i">
        <div class="img-project" :style="{ backgroundImage: `url(${ 'src/assets/images/' + project.image})`}"></div>
        {{ project.name }}
      </div>
    </div>
  </div>
</template>

<script setup>
// import { computed } from '@vue/reactivity';

const projects = [
  {
    name: 'HealthWay',
    description: 'Decent description of the app',
    image: 'healthway.jpg',
    url: 'http://www.healthway.live/',
    stack: 'Html, Css, Jvs, Rails'
  }, {
    name: 'PlayerWon',
    description: 'Decent description of the app',
    image: 'playerwon.jpg',
    url: 'https://player-won.herokuapp.com/',
    stack: 'Html, Css, Jvs, Rails'
  }, {
    name: 'Movie Watch List',
    description: 'Decent description of the app',
    image: 'movie-watch-list.jpg',
    url: 'https://www.google.com',
    stack: 'Html, Css, Jvs, Rails'
  }, {
    name: 'Line Chatbot',
    description: 'Decent description of the app',
    image: 'line-chat-bot.jpeg',
    url: 'https://www.google.com',
    stack: 'Html, Css, Jvs, Rails'
  }
]
// const imgSrc = computed(() => require(`@/assets/images/${projects.value[0].image}`))

</script>

<style scoped>
* {
  font-family: 'Space Mono', monospace;
}
.img-project {
  background-size: cover;
  width: 320px;
  height: 200px;
}
</style>
