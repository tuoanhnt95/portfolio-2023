<script setup>
import { RouterLink, RouterView } from 'vue-router'
// import HelloWorld from './components/HelloWorld.vue'
import Menu from './components/Menu.vue'
import Greeting from './components/Greeting.vue'
import TechStacks from './components/TechStacks.vue'
</script>

<template>
  <div>
    <header class="my-2 mx-6">
      <Menu class="border-solid border-2 border-indigo-600"/>
      <div>
        <div id="ribbon-photo">
          <div id="img-oanh" class="rounded-full"></div>
        </div>
        <div id="banner-intro" class="border-solid border-2 border-indigo-600 lg:h-96 lg:ml-12 md:ml-8 flex items-center">
          <div>
            <Greeting class="mb-6 lg:mb-10"/>
            <TechStacks />
          </div>
        </div>
      </div>
    </header>
  </div>
</template>

<style scoped>
#ribbon-photo {
  position: absolute;
  inset: 0 0 auto auto;
  width: 400px;
  height: 200px;
  background: orange;
  transform-origin: 100% 0;
  /* or top right */
  transform: translate(0, -90%) rotate(-45deg);

  @media screen and (min-width: 756px) {
    width: 480px;
    height: 250px;
    transform: translate(-29.3%, -80%) rotate(-45deg);
  }
  @media screen and (min-width: 1024px) {
    width: 560px;
    height: 300px;
    transform: translate(-29.3%, -80%) rotate(-45deg);
  }
}
#img-oanh {
  background-image: url('./assets/images/oanh-smile-fire.jpeg');
  background-size: cover;
  width: 200px;
  height: 200px;
  position: relative;
  left: -100px;
  transform: rotate(45deg);

  @media screen and (min-width: 756px) {
    width: 250px;
    height: 250px;
    left: -125px;
  }
  @media screen and (min-width: 1024px) {
    width: 300px;
    height: 300px;
    left: -150px;
  }
}
#banner-intro {
  margin-top: 240px; /* calculate the bottom of the photo  */

  @media screen and (min-width: 1080px) {
    margin-top: 0;
  }

  @media screen and (min-width: 560px) {
    margin-top: 0;
  }
}
</style>
