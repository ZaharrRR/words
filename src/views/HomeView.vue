<template>
  <div class="home-page">
    <div class="block">
      <p>Суть игры заключается в том, что нужно угадать слово из 5 букв за 5 попыток.</p>

      <p>
        В этом вам помогут подсказки в ячейках с буквами, которые окрашеваются в разные цвета, когда
        вы вводите слово.
      </p>

      <Ul>
        <li>серый - буквы нет в слове</li>
        <li>желтый - буква есть в слове, но в другом месте</li>
        <Li>зеленый - буква находится именно там где нужно</Li>
      </Ul>

      <p>Само слово может загадать другой человек или сгенерировать сама игры по кнопкам ниже.</p>
    </div>

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
