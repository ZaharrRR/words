<template>
  <div class="question-page">
    <h1>Создание слова</h1>

    <div>
      <p>текущее слово: {{ gameStore.word }}</p>

      <form class="question-form" @submit.prevent="setWord">
        <input type="text" v-model="questionWord" minlength="5" maxlength="5" />
        <button type="submit">начать</button>
      </form>
    </div>
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

<style scoped>
.question-page {
  display: flex;
  flex-direction: column;
  gap: 24px;
}

.question-form {
  display: flex;
  gap: 12px;
}
</style>
