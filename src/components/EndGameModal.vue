<template>
  <div v-if="isOpen" class="wrapper">
    <div class="modal">
      <div class="modal-head">
        <h1>Окно окончания игры</h1>
      </div>
      <h2 v-if="isWin">Вы победили!</h2>
      <h2 v-else>Вы проиграли...</h2>

      <div class="modal-buttons">
        <button @click="$emit('replay')">Еще раз</button>
        <button @click="$emit('newWord')">Загадать новое слово</button>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
defineProps({
  isWin: Boolean,
  isOpen: Boolean
})

defineEmits(['replay', 'newWord'])
</script>

<style scoped>
.wrapper {
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;

  display: flex;
  justify-content: center;
  align-items: center;

  background-color: rgb(0, 0, 0, 0.5);
}

.modal {
  background-color: #333;

  padding: 24px;
}

.modal-head {
  display: flex;
  justify-content: space-between;
  align-items: center;
  text-align: center;
  gap: 24px;
}

.modal-buttons {
  display: flex;
  justify-content: space-between;
  margin-top: 24px;
}
</style>
