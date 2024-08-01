<template>
  <div>
    <h1>Question</h1>

    <p>текущее слово: {{ gameStore.word }}</p>

    <form @submit.prevent="setWord">
      <input type="text" v-model="questionWord" minlength="5" maxlength="5" />
      <button type="submit">save</button>
    </form>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

import { useGameStore } from '@/stores/GameStore'
import { storeToRefs } from 'pinia'

import router from '@/router'

const gameStore = useGameStore()

const questionWord = ref('')

const setWord = () => {
  if (questionWord.value) {
    gameStore.setWord(questionWord.value)
    router.push('/game')
  } else {
    alert('Please enter a word')
  }
}
</script>

<style scoped></style>
