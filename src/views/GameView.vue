<template>
  <div>
    <h1>Game</h1>

    <h2 v-if="gameStore.isWin">Вы победили!</h2>
    <h2 v-if="gameStore.isDefeat">Вы проиграли...</h2>

    <div class="grid">
      <div class="word" v-for="word in gameStore.wordsArr" :key="word.position">
        <div
          class="cell"
          :class="getCellClass(cell.status)"
          v-for="(cell, index) in word.cells"
          :key="index"
        >
          <span class="letter">{{ cell.letter }}</span>
        </div>
      </div>
    </div>

    <form @submit.prevent="checkWord">
      <input type="text" v-model="tryWord" minlength="5" maxlength="5" />
      <button type="submit">try</button>
    </form>
  </div>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue'

import { useGameStore } from '@/stores/GameStore'
import { storeToRefs } from 'pinia'

const gameStore = useGameStore()

const tryWord = ref('')

const checkWord = () => {
  if (tryWord.value && gameStore.currentPosition <= gameStore.maxPosition) {
    gameStore.checkWord(tryWord.value)
  } else if (gameStore.currentPosition > gameStore.maxPosition) {
    alert('Игра окончена')
  } else {
    alert('Введите слово')
  }
}

const getCellClass = (status: string) => {
  switch (status) {
    case 'absent':
      return 'cell-absent'
    case 'partially':
      return 'cell-partially'
    case 'exactly':
      return 'cell-exactly'
    default:
      return 'cell-default'
  }
}

onMounted(() => {
  gameStore.geterateWordsArr()
})
</script>

<style scoped>
.word {
  display: flex;
}

.cell {
  width: 75px;
  height: 75px;

  display: flex;
  align-items: center;
  justify-content: center;

  margin: 4px;
}

.cell-absent {
  background-color: gray;
}

.cell-partially {
  background-color: rgb(230, 230, 112);
}

.cell-exactly {
  background-color: green;
}

.cell-default {
  border: 1px solid white;
}

.letter {
  font-size: 32px;
  font-weight: 800;

  text-transform: uppercase;
  color: white;

  user-select: none;
}
</style>
