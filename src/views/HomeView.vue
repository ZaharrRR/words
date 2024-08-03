<template>
  <div class="home-page">
    <div class="block">
      <p>Хочешь загадать слово из 5 букв, которое попробуют отгадать твои друзья?</p>
      <RouterLink to="/question">
        <button>Тогда тебе сюда</button>
      </RouterLink>
    </div>

    <div class="block">
      <p>Хочешь выбрать случайное слово?</p>
      <button @click="randomWord()">Сгенерировать</button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useGameStore } from '@/stores/GameStore'

import router from '@/router'

const gameStore = useGameStore()

const randomWord = () => {
  gameStore.generateRandomWord()
  router.push('/game')
}
</script>

<style scoped>
.home-page {
  display: flex;
  flex-direction: column;
  gap: 24px;
}

.block {
  display: flex;
  flex-direction: column;
  gap: 12px;
}

.block button {
  width: fit-content;
}
</style>
