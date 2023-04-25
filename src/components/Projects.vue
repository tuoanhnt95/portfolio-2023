<template>
  <div>
    <div class="text-2xl lg:text-3xl xl:text-4xl font-bold">
      My Projects
    </div>
    <!-- <div id="test"></div> -->
    <div class="grid grid-cols-3">
      <div v-for="(project, i) in projects" :key="i">
        <!-- <div :style="'background-image: url(\'../assets/' + project.image + '\');" class="img-project"></div> -->
        <!-- <div style="background-image: url('../assets/images/healthway.jpg');" class="img-project"></div> -->
        {{ project.name }}
      </div>
    </div>
  </div>
</template>

<script setup>
const projects = [
  {
    name: 'Movie Watch List',
    description: 'Decent description of the app',
    image: 'movie-watch-list.jpg',
    url: 'https://www.google.com',
    stack: 'Html, Css, Jvs, Rails'
  }, {
    name: 'PlayerWon',
    description: 'Decent description of the app',
    image: 'playerwon.jpg',
    url: 'https://player-won.herokuapp.com/',
    stack: 'Html, Css, Jvs, Rails'
  }, {
    name: 'HealthWay',
    description: 'Decent description of the app',
    image: 'healthway.jpg',
    url: 'http://www.healthway.live/',
    stack: 'Html, Css, Jvs, Rails'
  }, {
    name: 'ApaHunt',
    description: 'Decent description of the app',
    image: 'healthway.jpg',
    url: 'https://www.google.com',
    stack: 'Html, Css, Jvs, Rails'
  }, {
    name: 'Line Chatbot',
    description: 'Decent description of the app',
    image: 'images/line-chat-bot.jpeg',
    url: 'https://www.google.com',
    stack: 'Html, Css, Jvs, Rails'
  }, {
    name: 'Gif Search',
    description: 'Decent description of the app',
    image: 'healthway.jpg',
    url: 'https://www.google.com',
    stack: 'Html, Css, Jvs, Rails'
  }
]


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
#test {
  background-image: url('../assets/images/healthway.jpg');
}
</style>
