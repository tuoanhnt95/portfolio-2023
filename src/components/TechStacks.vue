<template>
  <div class="font-mono">
    <div class="flex"> <!-- backend -->
      <div v-for="(stack, i) in backend" :key="i" :class="'bg-' + stack.color + ' rounded m-0.5 p-2 flex justify-center text-xs font-medium'">
        {{ stack.name }}
      </div>
    </div>
    <div class="flex"> <!-- frontend -->
      <div v-for="(stack, i) in frontend" :key="i" :class="'bg-' + stack.color + ' rounded m-0.5 p-2 flex justify-center text-xs ' + stack.textColor + ' font-medium'">
        {{ stack.name }}
      </div>
    </div>
    <div class="flex"> <!-- frontend -->
      <div v-for="(stack, i) in database" :key="i" :class="'bg-' + stack.color + ' rounded m-0.5 p-2 flex justify-center text-xs ' + stack.textColor + ' font-medium'">
        {{ stack.name }}
      </div>
    </div>
  </div>
</template>

<script setup>
// import { Ref } from 'vue';
const backend = [
  {name: 'ruby on rails', color: 'orange-400'},
  {name: 'python', color: 'orange-300'},
  {name: 'c#', color: 'orange-200'}
]
const frontend = [
  {name: 'javascript', color: 'black', textColor: 'text-white'},
  {name: 'typescript', color: 'slate-300'},
  {name: 'vue.js', color: 'slate-700', textColor: 'text-white'},
  {name: 'bootstrap', color: 'slate-700', textColor: 'text-white'},
  {name: 'tailwind', color: 'slate-400'},
]
const database = [
  {name: 'SQLServer', color: 'black', textColor: 'text-white'},
  {name: 'PostgreSQL', color: 'slate-700', textColor: 'text-white'},
  {name: 'SQLite', color: 'slate-300'},
]
</script>
