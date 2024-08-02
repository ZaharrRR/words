<template>
  <div>
    <h1>Game</h1>

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

    <EndGameModal
      :isWin="gameStore.isWin"
      :isOpen="isGameEnd"
      @replay="replay()"
      @newWord="newWord()"
    />
  </div>
</template>

<script setup lang="ts">
import { computed, onMounted, ref } from 'vue'

import EndGameModal from '@/components/EndGameModal.vue'

import { useGameStore } from '@/stores/GameStore'
import { storeToRefs } from 'pinia'
import router from '@/router'

const gameStore = useGameStore()

const tryWord = ref('')

const isGameEnd = computed(() => {
  if (gameStore.currentPosition > gameStore.maxPosition) return true
  else if (gameStore.isWin || gameStore.isDefeat) return true
  else return false
})

const checkWord = () => {
  if (tryWord.value && !isGameEnd.value) {
    gameStore.checkWord(tryWord.value)
  } else if (isGameEnd.value) {
    alert('Игра окончена')
  } else {
    alert('Введите слово')
  }
  tryWord.value = ''
}

const replay = () => {
  gameStore.replay()
}

const newWord = () => {
  gameStore.replay()
  router.push('/question')
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
  gameStore.generateWordsArr()
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
